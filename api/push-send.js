// ============================================================
//  api/push-send.js  —  ES Module version
//  شغّال مع "type": "module" في package.json
// ============================================================

import webpush from 'web-push';
import { Redis } from '@upstash/redis';

// تهيئة Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// إعداد VAPID (بيشتغل مرة واحدة وقت تحميل الموديول)
webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

// ============================================================
//  تطبيع النصوص العربي (لمقارنة دقيقة)
// ============================================================
function norm(s) {
  if (!s) return '';
  return String(s)
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640\u06D6-\u06ED\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/[ىيی]/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/ک/g, 'ك')
    .replace(/[٠-٩]/g, d => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, d => String(d.charCodeAt(0) - 0x06F0))
    .replace(/\s+/g, ' ')
    .trim();
}

// تطبيع اسم المعيد: بيشيل البادئات (د/ م/ أ.م.د/) ويطبّع النص
function normInstructor(s) {
  if (!s) return '';
  let n = norm(s);
  // شيل البادئات
  n = n.replace(/^(د\/|م\/|أ\.م\.د\/|ا\.م\.د\/|ا\.د\/|استاذ\/|استاذة\/|د\s|م\s)\s*/g, '');
  return n;
}

// فصل المعيدين المتعددين (لو في " و" أو "،" أو سطر جديد)
function splitInstructors(s) {
  if (!s) return [];
  return String(s)
    .split(/\s+(?:و|،|,)\s+|\n+/)
    .map(x => normInstructor(x))
    .filter(Boolean);
}

// ============================================================
//  فلترة الاشتراك حسب الاستهداف
// ============================================================
//  معاملات الاستهداف (كلها اختيارية — لو مش موجودة، نعامل كـ "all"):
//  - dept: القسم — string أو array (مثلاً "cs" أو ["cs","se"]) — "all" = الكل
//  - scopes: array من {program, section} — سكاشن من برامج/أقسام مختلفة
//            section فاضي = البرنامج كله. (بيستبدل program/section القديمين)
//  - program / section: (قديم، لسه شغّال) string أو array
//  - course / instructor / classType: string أو array (أي واحد منهم يطابق)
//  - dryRun: لو true → نرجّع matched بس من غير إرسال
//
//  منطق الفلترة (AND بين الأنواع، OR جوه النوع الواحد):
//  - الطالب لازم يطابق dept (لو محدد)
//  - وكمان targets الطالب لازم فيها حصة واحدة تطابق (المادة + المعيد + النوع + أي scope) مع بعض
//
//  الطالب بيتخزن عنده:
//  - dept (قسم واحد: cs/is/se/ai)
//  - targets: array of {course, instructor, program, section, type}
//  لو الطالب معندهوش targets (اشتراك قديم)، بنستخدم program/section المحفوظين
// ============================================================
function toArr(v) {
  if (Array.isArray(v)) return v.map(x => String(x).trim()).filter(Boolean);
  if (v === undefined || v === null || v === '') return [];
  const s = String(v).trim();
  return s ? [s] : [];
}

// بيحوّل scopes (أو program/section القديمين) لقايمة {program, section} متطبّعة
// program فاضي = أي برنامج، section فاضي = كل سكاشن البرنامج
function parseScopes({ scopes, program, section }) {
  const out = [];
  if (Array.isArray(scopes)) {
    for (const s of scopes.slice(0, 100)) {
      if (!s || typeof s !== 'object') continue;
      const p = norm(s.program);
      const c = norm(String(s.section == null ? '' : s.section));
      if (p || c) out.push({ program: p, section: c });
    }
  }
  if (out.length) return out;
  const progs = toArr(program).map(norm);
  const secs = toArr(section).map(norm);
  if (secs.length) {
    (progs.length ? progs : ['']).forEach(p => secs.forEach(c => out.push({ program: p, section: c })));
  } else {
    progs.forEach(p => out.push({ program: p, section: '' }));
  }
  return out;
}

// هل (البرنامج + السكاشن) دول داخل أي scope؟ — لو مفيش scopes → true
function inScopes(scopes, prog, secStr) {
  if (!scopes.length) return true;
  const p = norm(prog);
  const secs = String(secStr || '').split(/\s+/).map(norm).filter(Boolean);
  return scopes.some(sc => (!sc.program || sc.program === p) && (!sc.section || secs.includes(sc.section)));
}

function matchesTarget(subData, params) {
  // 1) فلترة dept (واحد أو أكتر)
  const depts = toArr(params.dept).filter(d => d !== 'all');
  if (depts.length && subData.dept && subData.dept !== 'all' && !depts.includes(subData.dept)) {
    return false;
  }

  const courses = toArr(params.course).map(norm);
  const instrs = toArr(params.instructor).flatMap(splitInstructors);
  const types = toArr(params.classType).map(norm);
  const scopes = params.scopes || [];

  // 2) لو مفيش استهداف أدق → dept بس
  if (!courses.length && !instrs.length && !types.length && !scopes.length) {
    return true;
  }

  // 3) targets الطالب
  let targets = [];
  try {
    if (subData.targets) {
      targets = typeof subData.targets === 'string'
        ? JSON.parse(subData.targets)
        : subData.targets;
    }
  } catch (e) {
    targets = [];
  }

  // 4) لو فيه targets (جدول معتمد) → لازم حصة واحدة تطابق كل الشروط مع بعض
  if (Array.isArray(targets) && targets.length > 0) {
    for (const t of targets) {
      if (courses.length && !courses.includes(norm(t.course))) continue;
      if (instrs.length) {
        const tInstrs = splitInstructors(t.instructor || '');
        if (!instrs.some(ni => tInstrs.includes(ni))) continue;
      }
      if (types.length && !types.includes(norm(t.type))) continue;
      if (!inScopes(scopes, t.program, t.section)) continue;
      return true;
    }
    return false;
  }

  // 5) ★ مفيش targets — نستخدم program/section المحفوظين (اللي اختار قسم/سكشن من غير ما يأكد جدوله)
  const subProgram = subData.program || '';
  const subSection = subData.section || '';

  // مفيش حتى program/section → نعامله كـ "all" (يستلم أي إشعار)
  if (!subProgram && !subSection) {
    return true;
  }

  // لو الإشعار فيه course/instructor/classType والطالب مفيش targets → مش نقدر نفلتر بدقة، فميبعتوش
  if (courses.length || instrs.length || types.length) {
    return false;
  }

  return inScopes(scopes, subProgram, subSection);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ---------- التحقق من Authorization ----------
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();
    const allowedSecrets = (process.env.ADMIN_SECRET || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    if (!token || !allowedSecrets.includes(token)) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // ---------- التحقق من البيانات ----------
    // معاملات الاستهداف (كلها اختيارية):
    //   dept: القسم (cs/is/se/ai/all)
    //   course: اسم المادة
    //   instructor: اسم المعيد/الدكتور
    //   program: البرنامج
    //   section: رقم السكشن
    //   classType: lecture|lab|section
    //   dryRun: true → من غير إرسال
    const {
      title, body, url,
      dept, course, instructor, program, section, classType, scopes,
      type, dryRun, batchSize
    } = req.body || {};
    // ★ سكاشن من برامج/أقسام مختلفة (scopes) — أو program/section القديمين
    const parsedScopes = parseScopes({ scopes, program, section });

    if (!title || !body) {
      return res.status(400).json({ error: "Title and body are required" });
    }

    // الـ payload اللي هيتبعت للـ Service Worker
    const payload = JSON.stringify({
      title,
      body,
      url: url || "/",
      type: type || "general",
      course: course || null,
      instructor: instructor || null,
      section: toArr(section).join(' ') || null,
      classType: classType || null
    });

    const pushOptions = {
      TTL: 60 * 60 * 24 * 3,    // 3 أيام
      urgency: "high"
    };

    // ---------- جلب كل الاشتراكات ----------
    const keys = await redis.keys("sub:*");
    let sent = 0;
    let failed = 0;
    let matched = 0;
    const startedAt = Date.now();
    const MAX_DURATION_MS = 8500;  // حد أمان: 8.5 ثواني
    const BATCH = Math.min(Math.max(parseInt(batchSize, 10) || 100, 5), 100);

    // لو dryRun → نرجّع matched بس من غير إرسال
    if (dryRun) {
      for (const key of keys) {
        const subData = await redis.hgetall(key);
        if (!subData || !subData.endpoint) continue;
        if (matchesTarget(subData, { dept, course, instructor, classType, scopes: parsedScopes })) {
          matched++;
        }
      }
      return res.status(200).json({
        success: true,
        matched,
        total: keys.length,
        dryRun: true
      });
    }

    // ---------- الإرسال ----------
    for (let i = 0; i < keys.length; i += BATCH) {
      // لو قربنا من حد الوقت، نوقف ونرجّع اللي اتبعت لحد دلوقتي
      if (Date.now() - startedAt > MAX_DURATION_MS) {
        return res.status(200).json({
          success: true,
          sent,
          failed,
          matched,
          processed: i,
          total: keys.length,
          remaining: keys.length - i,
          message: "اتوقف لحد الوقت المسموح. كرّري الطلب عشان تكملي الباقي."
        });
      }

      const batch = keys.slice(i, i + BATCH);

      const results = await Promise.all(
        batch.map(async (key) => {
          try {
            const subData = await redis.hgetall(key);
            if (!subData || !subData.endpoint) return { ok: false, key };

            // فلترة بالاستهداف
            if (!matchesTarget(subData, { dept, course, instructor, classType, scopes: parsedScopes })) {
              return { skipped: true };
            }
            matched++;

            const pushSubscription = {
              endpoint: subData.endpoint,
              keys: typeof subData.keys === 'string'
                ? JSON.parse(subData.keys)
                : subData.keys
            };

            await webpush.sendNotification(pushSubscription, payload, pushOptions);
            return { ok: true };
          } catch (err) {
            if (err.statusCode === 404 || err.statusCode === 410) {
              await redis.del(key);
            }
            return { ok: false, key };
          }
        })
      );

      for (const r of results) {
        if (r.ok) sent++;
        else if (r.skipped) {} // تم تجاوزه حسب الاستهداف
        else failed++;
      }
    }

    // ★ البند 11: إرسال نسخة لبوت تلجرام (منفصل عن بوت الطلاب)
    // لو المتغيرين مش موجودين، يتخطى بهدوء
    const TG_LOG_TOKEN = process.env.TELEGRAM_Notifications_BOT_TOKEN;
    const TG_LOG_CHAT = process.env.TELEGRAM_Notifications_CHAT_ID;
    
    if (TG_LOG_TOKEN && TG_LOG_CHAT && !dryRun) {
      try {
        // نبني نص الإشعار
        const targeting = [];
        const deptTxt = toArr(dept).filter(d => d !== 'all').join(', ');
        if (deptTxt) targeting.push(`القسم: ${deptTxt}`);
        if (course) targeting.push(`المادة: ${course}`);
        if (instructor) targeting.push(`المعيد: ${instructor}`);
        if (parsedScopes.length) {
          targeting.push('السكاشن: ' + parsedScopes.map(s => `${s.program || '*'}${s.section ? ' ' + s.section : ''}`).join('، '));
        }
        if (classType) targeting.push(`النوع: ${classType}`);
        
        const tgText = `📢 <b>إشعار جديد تم إرساله</b>\n\n` +
          `📌 <b>العنوان:</b> ${title}\n` +
          `📝 <b>النص:</b> ${body}\n` +
          `🔗 <b>الرابط:</b> ${url || '/'}\n` +
          `🏷️ <b>النوع:</b> ${type || 'general'}\n` +
          (targeting.length ? `🎯 <b>المستهدفين:</b> ${targeting.join(' | ')}\n` : '') +
          `✅ <b>نجح:</b> ${sent} | ❌ <b>فشل:</b> ${failed}`;
        
        // نقص النص لو طويل (تلجرام حد 4096)
        const finalText = tgText.length > 4000 ? tgText.substring(0, 4000) + '...' : tgText;
        
        await fetch(`https://api.telegram.org/bot${TG_LOG_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TG_LOG_CHAT,
            parse_mode: 'HTML',
            text: finalText
          })
        });
      } catch (e) {
        // لو فشل التلجرام، ما نكسرش الطلب
        console.warn('Telegram log notify failed:', e.message);
      }
    }

    return res.status(200).json({
      success: true,
      sent,
      failed,
      matched,
      total: keys.length
    });
  } catch (err) {
    console.error("push-send error:", err);
    return res.status(500).json({ error: "Internal server error", detail: err.message });
  }
}