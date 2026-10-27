// functions/api/feedback.js
// Cloudflare Pages / Workers Function - POST /api/feedback

const MAX_TEXT_LEN = 1000;
const MAX_NAME_LEN = 60;
const MAX_REF_LEN = 120;
const MAX_CONTACT_LEN = 100;
const MAX_IMAGES = 5;
const MAX_IMAGE_BYTES = 1 * 1024 * 1024;
const MAX_TOTAL_IMAGE_BYTES = 4 * 1024 * 1024;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_TIMEOUT_MS = 6000;
const TELEGRAM_TIMEOUT_MS = 15000;

const CONTACT_LABELS = {
  telegram: "تليجرام",
  whatsapp: "واتساب",
  email: "إيميل",
  phone: "اتصال هاتفي",
};

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store",
    },
  });
}

function bad(status, code, error) {
  return jsonRes({ ok: false, code, error }, status);
}

function sanitize(str, maxLen) {
  if (typeof str !== "string") return "";
  let s = str.replace(/[\u0000-\u001F\u007F]/g, "");
  s = s.replace(/[\u202A-\u202E\u200E\u200F]/g, "");
  s = s.replace(/<[^>]*>/g, "");
  s = s.replace(
    /(javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|on\w+\s*=\s*["']?)/gi,
    "",
  );
  s = s.replace(/[\\`]/g, "");
  s = s
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (typeof maxLen === "number" && maxLen > 0 && s.length > maxLen) {
    s = s.slice(0, maxLen);
  }
  return s;
}

function decodeDataUrl(dataUrl) {
  if (typeof dataUrl !== "string") return null;
  const match = dataUrl.match(
    /^data:(image\/(?:jpeg|jpg|png|webp|gif));base64,([A-Za-z0-9+/=]+)$/i,
  );
  if (!match) return null;
  try {
    const binaryStr = atob(match[2]);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryStr.charCodeAt(i);
    }
    return { mime: match[1].toLowerCase(), buffer: bytes };
  } catch {
    return null;
  }
}

function safeFileName(name, fallback = "image.jpg") {
  if (!name) return fallback;
  const s = String(name)
    .replace(/[^\w.\-]+/g, "_")
    .slice(0, 60);
  return s || fallback;
}

async function fetchWithTimeout(url, opts, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function verifyRecaptcha(secret, token, remoteip) {
  if (!secret) return { ok: false, reason: "CONFIG" };
  if (!token || typeof token !== "string" || token.length > 5000) {
    return { ok: false, reason: "MISSING_TOKEN" };
  }
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteip && remoteip !== "unknown") params.append("remoteip", remoteip);

    const r = await fetchWithTimeout(
      RECAPTCHA_VERIFY_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      },
      RECAPTCHA_TIMEOUT_MS,
    );
    const j = await r.json().catch(() => ({ success: false }));
    if (!j.success) return { ok: false, reason: "CAPTCHA_FAILED" };
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: "CAPTCHA_ERROR" };
  }
}

async function tgSendMessage(botToken, chatId, text) {
  const r = await fetchWithTimeout(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    },
    TELEGRAM_TIMEOUT_MS,
  );
  return r.json().catch(() => ({ ok: false }));
}

async function sendPhotoToTelegram(botToken, chatId, img) {
  const decoded = decodeDataUrl(img && img.data);
  if (!decoded || decoded.buffer.length > MAX_IMAGE_BYTES) return false;

  const name = safeFileName(img.name);
  const form = new FormData();
  form.append("chat_id", String(chatId));
  form.append("caption", `📷 ${name}`.slice(0, 1024));

  const blob = new Blob([decoded.buffer], { type: decoded.mime });
  form.append("photo", blob, name);

  try {
    const r = await fetchWithTimeout(
      `https://api.telegram.org/bot${botToken}/sendPhoto`,
      { method: "POST", body: form },
      TELEGRAM_TIMEOUT_MS,
    );
    const j = await r.json().catch(() => ({ ok: false }));
    return !!j.ok;
  } catch {
    return false;
  }
}

async function sendMediaGroupToTelegram(botToken, chatId, images) {
  const decoded = images
    .map((img) => ({ img, decoded: decodeDataUrl(img && img.data) }))
    .filter((x) => x.decoded && x.decoded.buffer.length <= MAX_IMAGE_BYTES);

  if (!decoded.length) return 0;

  const form = new FormData();
  form.append("chat_id", String(chatId));

  const media = decoded.map((x, i) => ({
    type: "photo",
    media: `attach://photo_${i}`,
    caption: i === 0 ? `📷 مرفقات (${decoded.length})` : undefined,
  }));
  form.append("media", JSON.stringify(media));

  decoded.forEach((x, i) => {
    const name = safeFileName(x.img.name, `photo_${i}.jpg`);
    const blob = new Blob([x.decoded.buffer], { type: x.decoded.mime });
    form.append(`photo_${i}`, blob, name);
  });

  try {
    const r = await fetchWithTimeout(
      `https://api.telegram.org/bot${botToken}/sendMediaGroup`,
      { method: "POST", body: form },
      TELEGRAM_TIMEOUT_MS,
    );
    const j = await r.json().catch(() => ({ ok: false }));
    return j.ok ? decoded.length : 0;
  } catch {
    return 0;
  }
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return bad(405, "METHOD", "Method Not Allowed");
  }

  const ct = String(request.headers.get("content-type") || "");
  if (!ct.includes("application/json")) {
    return bad(415, "INVALID", "Content-Type غير مدعوم");
  }

  const clientIP = request.headers.get("cf-connecting-ip") || "unknown";

  let body = {};
  try {
    body = await request.json();
  } catch {
    return bad(400, "INVALID", "JSON غير صالح");
  }

  const {
    channel,
    type,
    name,
    contactType,
    contactValue,
    ref,
    text,
    images,
    website,
    recaptchaToken,
  } = body;

  if (website && String(website).trim() !== "") {
    return bad(200, "HONEYPOT", "تم رفض الطلب");
  }

  const secret = env.RECAPTCHA_SECRET;
  const cap = await verifyRecaptcha(secret, recaptchaToken, clientIP);
  if (!cap.ok) {
    if (cap.reason === "CONFIG") {
      return bad(500, "CONFIG", "إعدادات reCAPTCHA ناقصة على السيرفر");
    }
    if (cap.reason === "CAPTCHA_ERROR") {
      return bad(503, "CAPTCHA_ERROR", "تعذر التحقق حاليًا");
    }
    return bad(400, "CAPTCHA_FAILED", "فشل التحقق البشري — حاول تاني");
  }

  if (channel && channel !== "tg") {
    return bad(400, "INVALID", "قناة الإرسال غير مدعومة");
  }

  const cleanText = sanitize(text, MAX_TEXT_LEN);
  const cleanName = sanitize(name, MAX_NAME_LEN);
  const cleanRef = sanitize(ref, MAX_REF_LEN);
  const cleanType = sanitize(type, 40);
  const cleanCType = sanitize(contactType, 20);
  const cleanCVal = sanitize(contactValue, MAX_CONTACT_LEN);

  if (!cleanText) return bad(400, "INVALID", "النص مطلوب");
  if (cleanText.length < 5) return bad(400, "INVALID", "النص قصير جدًا");
  if (cleanText.length > MAX_TEXT_LEN) return bad(400, "BIG", "النص طويل جدًا");

  const rawImages = Array.isArray(images) ? images : [];
  if (rawImages.length > MAX_IMAGES) return bad(400, "BIG", "عدد الصور كبير");

  const imageList = [];
  let totalImgBytes = 0;

  for (let i = 0; i < rawImages.length; i++) {
    const im = rawImages[i];
    if (!im || typeof im !== "object") continue;

    const decoded = decodeDataUrl(im.data);
    if (!decoded) return bad(400, "INVALID", `صورة رقم ${i + 1} غير صالحة`);
    if (decoded.buffer.length > MAX_IMAGE_BYTES) {
      return bad(400, "BIG", `صورة رقم ${i + 1} أكبر من 1 ميجا`);
    }
    totalImgBytes += decoded.buffer.length;
    if (totalImgBytes > MAX_TOTAL_IMAGE_BYTES) {
      return bad(400, "BIG", "إجمالي حجم الصور كبير");
    }
    imageList.push({ name: safeFileName(im.name), data: im.data });
  }

  const contactLabel = cleanCType
    ? `${CONTACT_LABELS[cleanCType] || cleanCType}${cleanCVal ? `: ${cleanCVal}` : ""}`
    : "غير محدد";

  const messageLines = [
    "📬 رسالة جديدة من المنصة (Cloudflare)",
    "─────────────────",
    `النوع: ${cleanType || "غير محدد"}`,
    `الاسم: ${cleanName || "غير محدد"}`,
    `التواصل: ${contactLabel}`,
    `المرجع: ${cleanRef || "غير محدد"}`,
    "─────────────────",
    "التفاصيل:",
    cleanText,
  ];
  if (imageList.length) {
    messageLines.push("─────────────────");
    messageLines.push(`📷 عدد الصور: ${imageList.length}`);
  }
  const message = messageLines.join("\n");

  const BOT_TOKEN = env.TG_BOT_TOKEN || env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = env.TG_CHAT_ID || env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return bad(500, "CONFIG", "إعدادات تليجرام ناقصة");
  }

  try {
    const tgData = await tgSendMessage(BOT_TOKEN, CHAT_ID, message);
    if (!tgData.ok) return bad(500, "TELEGRAM", "فشل إرسال الرسالة");
  } catch {
    return bad(500, "SERVER", "خطأ في السيرفر");
  }

  let imagesSent = 0;
  if (imageList.length === 1) {
    const ok = await sendPhotoToTelegram(BOT_TOKEN, CHAT_ID, imageList[0]);
    if (ok) imagesSent = 1;
  } else if (imageList.length > 1) {
    imagesSent = await sendMediaGroupToTelegram(BOT_TOKEN, CHAT_ID, imageList);
  }

  return jsonRes({
    ok: true,
    message: "تم الإرسال بنجاح",
    imagesSent,
    imagesTotal: imageList.length,
  });
}
