/* بيانات مادة: شبكات الحاسب (computer-networks)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/computer-networks/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "شبكات الحاسب",
  en: "Computer Networks",
  icon: "🌐",
  slug: "computer-networks",
  lectures: [
    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/computer-networks/lectures/lec-01.pdf", questions:[] } */

    {
      t: "المحاضرة الأولى — الفصل الأول (جزء 1): مقدمة في الشبكات ونموذج الطبقات OSI",
      d: "مقدمة في شبكات الحاسوب، بنية الإنترنت، ونموذج الطبقات OSI.",
      id: "computer-networks-lecture-01",
      pdf: "datenew/subjects/computer-networks/lectures/lec 1/Ch01 - Computer Networks - Lec 01.pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/Ch01/Chapter 1 - Questions - Computer Networks.pdf",

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الفصل الأول: تعريف الإنترنت، البروتوكولات، شبكات الوصول، والـ Packet Switching",
          links: [
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي كامل لكتاب Kurose & Ross: مكونات الإنترنت (Hosts, Packet Switches, ISPs)، الـ Protocols، شبكات الوصول (DSL, Cable, FTTH)، والـ Packet Switching مع Store-and-Forward  فديوهات (من 1 الي 3) ",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي لكتاب Kurose & Ross: تعريف الإنترنت والـ Protocols، مكونات الـ Network Edge (الـ Hosts وشبكات الوصول DSL/Cable/FTTH)، والـ Network Core (مفهوم الـ Packet Switching وStore-and-Forward وهيكل الـ ISPs).  في فديو3 لحد 23:20  [فيديوهات 1-3]",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLYljoJMAPFLHrCVfzuMLkJOZHhCgfSXG-&si=c2A3_89g912REXOZ",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "المحاضرات الرسمية من مؤلف الكتاب Jim Kurose + مراجع عالمية مُتحقّق منها",
          links: [
            {
              t: "Jim Kurose - Chapter 1 (Official Author Lectures)",
              d: "الشرح المباشر من مؤلف الكتاب نفسه: What is the Internet, Network Edge, Access Networks, Packet Switching — نفس ترتيب الكتاب بالضبط",
              icon: "🌍",
              actions: [
                {
                  label: "📖 Playlist كامل",
                  url: "https://www.youtube.com/playlist?list=PL1ya5dD_M8uX-BLUF1FEvUNsYWQL5_l0O",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🎬 المحاضرة 1.1 مباشرة",
                  url: "https://www.youtube.com/watch?v=74sEFYBBRAY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Neso Academy - Introduction to Computer Networks",
              d: "شرح شامل: Protocols, Transmission Media, Store-and-Forward Delay, Packet Switching — مرجع تكميلي قوي",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgneraVKkEXrwyLVx2vJUvt",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: " كل  شي يخص السكشن ",
          icon: "⏱️",
          description: "حلول مسائل وقوانين تأخير الشبكات (Delay calculations).",
          links: [
            {
              t: "  Propagation Delay و Transmission Delay (Problem)",
              d: "شرح عربي لكيفية حساب d_prop = m/s و d_trans = L/R، وإيجاد المسافة عندما يتساوى الـ Propagation Delay مع الـ Transmission Delay.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث",
                  url: "https://drive.google.com/drive/folders/1s6z0r_ZhNEHe6fzRGhqlJhQXszWi8F69?usp=drive_link",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مراجع مُتحقّق منها تغطي: شبكات الوصول (DSL/Cable/FTTH)، وسائط النقل المادية، والـ Packet Switching",
          links: [
            {
              t: "Kurose & Ross Official Student Resources",
              d: "الموقع الرسمي للكتاب: محاضرات أونلاين، شرائح PowerPoint، Wireshark Labs، وتمارين مراجعة — المرجع الأول",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://gaia.cs.umass.edu/kurose_ross/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Transmission Media in Computer Networks",
              d: "شرح تفصيلي لوسائط النقل: Twisted-Pair Copper Wire, Coaxial Cable, Fiber Optics, Terrestrial Radio, Satellite — يطابق قسم 1.2.2 بالكامل",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/transmission-media/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Types of Internet Access",
              d: "مقال يشرح أنواع الاتصال بالإنترنت: DSL, Cable, Fiber, Satellite, Wireless — يغطي قسم Access Networks (1.2.1)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "تمارين تفاعلية من مؤلفي الكتاب + أدوات عملية لتجربة الـ Packet Switching وتحليل الحزم",
          links: [
            {
              t: "Kurose & Ross Interactive Problems (Chapter 1)",
              d: "تمارين تفاعلية رسمية من مؤلفي الكتاب — تشمل: Queuing Delay, End-to-End Delay, Packet Switching vs Circuit Switching, One-hop Transmission Delay — كلها من مفاهيم 1.3.1",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التمارين",
                  url: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Wireshark - Packet Analyzer",
              d: "أداة تتبع الـ Packets وقراءة الـ Headers عملياً — لفهم كيف تُرسل الحزم عبر الشبكة (يُذكر في الكتاب كأداة معتمدة)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Computer Networks — شبكات الحاسوب
      //  المسار: datenew/networks/networks.js → lectures[0].questions
      //  المرجع: Kurose & Ross — Top-Down Approach (Chapter 1)
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ (1-65)
        // ═══════════════════════════════════════════════════════
        {
          q: "1. What is the primary focus of the book when discussing computer networks?",
          options: [
            "Private corporate networks",
            "The public Internet and its protocols",
            "Local area networks only",
            "Satellite communication systems",
          ],
          correct: 1,
          translation: "ما هو التركيز الأساسي للكتاب عند مناقشة شبكات الحاسوب؟",
          explanation:
            "الكتاب يركّز على الإنترنت العام (Public Internet) وبروتوكولاته — لأنه أشهر وأهم شبكة، وكل المفاهيم تنطبق على غيره من الشبكات.",
        },
        {
          q: "2. How can the Internet be described in terms of its basic components?",
          options: [
            "Only as a service provider for applications",
            "As hardware and software components (nuts and bolts) or as infrastructure for distributed applications",
            "Solely as a collection of servers",
            "As a single global database",
          ],
          correct: 1,
          translation: "كيف يمكن وصف الإنترنت من حيث مكوناته الأساسية؟",
          explanation:
            "وصفان: (1) Nuts-and-Bolts = المكونات المادية والبرمجية، (2) Services = البنية التحتية اللي بتقدم خدمات لتطبيقات موزعة.",
        },
        {
          q: "3. What are computing devices connected to the Internet called in Internet jargon?",
          options: ["Servers", "Hosts or end systems", "Routers", "Links"],
          correct: 1,
          translation:
            "ما اسم أجهزة الحوسبة المتصلة بالإنترنت في مصطلحات الإنترنت؟",
          explanation:
            "Hosts أو End Systems (المضيفون أو الأنظمة الطرفية) — كل الأجهزة المتصلة بالإنترنت من حواسيب وهواتف وأجهزة IoT.",
        },
        {
          q: "4. According to estimates mentioned, how many devices were connected to the Internet by 2022?",
          options: ["18 billion", "28.5 billion", "10 billion", "50 billion"],
          correct: 1,
          translation:
            "حسب التقديرات المذكورة، كم جهاز كان متصلاً بالإنترنت بحلول 2022؟",
          explanation:
            "28.5 مليار جهاز — رقم ضخم بيعكس الانتشار الهائل للإنترنت وإنترنت الأشياء (IoT).",
        },
        {
          q: "5. What connects end systems in a network?",
          options: [
            "Only packet switches",
            "A network of communication links and packet switches",
            "Servers exclusively",
            "Protocols alone",
          ],
          correct: 1,
          translation: "ما الذي يربط الأنظمة الطرفية في الشبكة؟",
          explanation:
            "شبكة من روابط الاتصال (Communication Links) ومبدلات الحزم (Packet Switches) — دي البنية التحتية للنقل.",
        },
        {
          q: "6. What is a packet in computer networks?",
          options: [
            "A complete message sent without segmentation",
            "Segmented data with added headers sent through the network",
            "A hardware device",
            "A type of router",
          ],
          correct: 1,
          translation: "ما هي الحزمة (Packet) في شبكات الحاسوب؟",
          explanation:
            "بيانات مُجزّأة + ترويسات (Headers) مضافة، تُرسَل عبر الشبكة. التجزئة بتسمح بمشاركة أفضل للموارد بين المستخدمين.",
        },
        {
          q: "7. What are the two main types of packet switches in the Internet?",
          options: [
            "Hosts and end systems",
            "Routers and link-layer switches",
            "Servers and clients",
            "Links and protocols",
          ],
          correct: 1,
          translation: "ما هما النوعان الرئيسيان لمبدلات الحزم في الإنترنت؟",
          explanation:
            "الموجّهات (Routers) ومبدلات طبقة الوصلة (Link-layer Switches). الاتنين بيمرروا الحزم لكن على طبقات مختلفة.",
        },
        {
          q: "8. Where are link-layer switches typically used?",
          options: [
            "In the network core",
            "In access networks",
            "Only in end systems",
            "In global transit",
          ],
          correct: 1,
          translation: "أين تُستخدم مبدلات طبقة الوصلة عادةً؟",
          explanation:
            "في شبكات الوصول (Access Networks) — زي شبكات LAN في الشركات والمنازل والجامعات.",
        },
        {
          q: "9. What is the sequence of links and switches a packet traverses called?",
          options: ["A protocol", "A route or path", "A header", "A segment"],
          correct: 1,
          translation: "ما اسم تتابع الروابط والمبدلات اللي بيمر بيها الحزمة؟",
          explanation:
            "المسار (Route أو Path) — من المُرسِل للمستقبِل عبر سلسلة من الروابط والمبدلات.",
        },
        {
          q: "10. How do end systems access the Internet?",
          options: [
            "Directly through global routers",
            "Through Internet Service Providers (ISPs)",
            "Via packet switches only",
            "Using protocols without intermediaries",
          ],
          correct: 1,
          translation: "كيف تصل الأنظمة الطرفية بالإنترنت؟",
          explanation:
            "من خلال مزوّدي خدمة الإنترنت (ISPs) — كل ISP بيوفّر وصول لمجموعة من المستخدمين.",
        },
        {
          q: "11. What interconnects lower-tier ISPs?",
          options: [
            "End systems",
            "National and international upper-tier ISPs",
            "Only local links",
            "Application protocols",
          ],
          correct: 1,
          translation: "ما الذي يربط مزوّدي الخدمة من المستوى الأدنى ببعضهم؟",
          explanation:
            "مزوّدو الخدمة من المستوى الأعلى (Upper-tier ISPs) وطنياً ودولياً. التسلسل الهرمي بيسمح بتغطية عالمية.",
        },
        {
          q: "12. What are the two most important protocols in the Internet?",
          options: [
            "HTTP and SMTP",
            "TCP and IP",
            "Ethernet and WiFi",
            "DNS and FTP",
          ],
          correct: 1,
          translation: "ما هما أهم بروتوكولين في الإنترنت؟",
          explanation:
            "TCP و IP — الأساس اللي بيقوم عليه الإنترنت كله. TCP مسؤول عن النقل الموثوق، و IP عن العنونة والتوجيه.",
        },
        {
          q: "13. Who develops Internet standards?",
          options: [
            "IEEE",
            "IETF (Internet Engineering Task Force)",
            "Cisco",
            "Google",
          ],
          correct: 1,
          translation: "من يطوّر معايير الإنترنت؟",
          explanation:
            "IETF — فريق هندسة الإنترنت. منظمة مفتوحة بيشارك فيها خبراء من كل العالم لوضع معايير الإنترنت.",
        },
        {
          q: "14. What are RFCs?",
          options: [
            "Hardware specifications",
            "Requests for comments that define protocols like TCP and IP",
            "Network hardware",
            "Application services",
          ],
          correct: 1,
          translation: "ما هي RFCs؟",
          explanation:
            "Requests for Comments — وثائق معيارية تعرّف بروتوكولات الإنترنت زي TCP و IP. ليها تنسيق صارم ومراجعة مجتمعية.",
        },
        {
          q: "15. What body specifies standards for network links like Ethernet?",
          options: [
            "IETF",
            "IEEE 802 LAN Standards Committee",
            "Cisco VNI",
            "Fiber Broadband",
          ],
          correct: 1,
          translation: "أي جهة تضع معايير روابط الشبكة زي Ethernet؟",
          explanation:
            "لجنة معايير IEEE 802 LAN — مسؤولة عن معايير Ethernet و WiFi (802.3 و 802.11 على التوالي).",
        },
        {
          q: "16. How is the Internet described as an infrastructure?",
          options: [
            "Only for hardware connections",
            "As providing services to distributed applications",
            "Solely for packet switching",
            "As a single protocol stack",
          ],
          correct: 1,
          translation: "كيف يُوصف الإنترنت كبنية تحتية؟",
          explanation:
            "كبنية تحتية بتقدّم خدمات لتطبيقات موزعة — ده الوصف الوظيفي (Services Description) للإنترنت.",
        },
        {
          q: "17. What are distributed applications?",
          options: [
            "Programs running on a single system",
            "Applications involving multiple end systems exchanging data",
            "Only server-based programs",
            "Hardware components",
          ],
          correct: 1,
          translation: "ما هي التطبيقات الموزعة؟",
          explanation:
            "تطبيقات بتشتغل على أنظمة طرفية متعددة وبتتبادل البيانات بينها — زي الويب، البريد، والبث المباشر.",
        },
        {
          q: "18. What interface do end systems use to deliver data over the Internet?",
          options: [
            "Packet switch interface",
            "Socket interface",
            "Router interface",
            "Link-layer interface",
          ],
          correct: 1,
          translation:
            "أي واجهة تستخدمها الأنظمة الطرفية لتوصيل البيانات عبر الإنترنت؟",
          explanation:
            "واجهة Socket — بتحدد كيف يطلب البرنامج من الإنترنت توصيل بياناته لبرنامج آخر على نظام طرفي بعيد.",
        },
        {
          q: "19. In a human protocol analogy, what initiates communication?",
          options: [
            "Asking for time directly",
            "Offering a greeting like 'Hi'",
            "Sending a packet",
            "Closing the connection",
          ],
          correct: 1,
          translation: "في تشبيه البروتوكول البشري، ما الذي يبدأ التواصل؟",
          explanation:
            "تقديم تحية زي 'Hi' — بداية الحوار. البروتوكولات البشرية والشبكية بتشترك في فكرة: تبادل رسائل بترتيب محدد.",
        },
        {
          q: "20. What defines a network protocol?",
          options: [
            "Hardware only",
            "Format and order of messages, plus actions on transmission/receipt",
            "Physical media",
            "End systems alone",
          ],
          correct: 1,
          translation: "ما الذي يعرّف بروتوكول الشبكة؟",
          explanation:
            "تنسيق الرسائل + ترتيبها + الإجراءات عند الإرسال/الاستقبال. ثلاث عناصر أساسية لأي بروتوكول.",
        },
        {
          q: "21. What are end systems also referred to as?",
          options: ["Routers", "Hosts", "Links", "Switches"],
          correct: 1,
          translation: "بماذا يُشار للأنظمة الطرفية أيضاً؟",
          explanation:
            "Hosts (المضيفون) — تسمية بديلة. مثال: Host = End System.",
        },
        {
          q: "22. How are hosts categorized?",
          options: [
            "Into links and switches",
            "Into clients and servers",
            "Into protocols and layers",
            "Into physical media",
          ],
          correct: 1,
          translation: "كيف تُصنّف المضيفون؟",
          explanation:
            "إلى Clients و Servers — العميل بيطلب الخدمة، والسيرفر بيقدمها. بعض المضيفين بيقوموا بالدورين.",
        },
        {
          q: "23. Where do most servers for search results and email reside today?",
          options: [
            "In homes",
            "In large data centers",
            "On mobile devices",
            "In access networks",
          ],
          correct: 1,
          translation: "أين توجد معظم سيرفرات البحث والبريد اليوم؟",
          explanation:
            "في مراكز بيانات ضخمة (Data Centers) — لأنها بتتطلب كهرباء وتبريد وأمن واتصال عالي السرعة.",
        },
        {
          q: "24. What is the access network?",
          options: [
            "The core of the Internet",
            "The network connecting an end system to the first router",
            "Only wireless connections",
            "Global transit links",
          ],
          correct: 1,
          translation: "ما هي شبكة الوصول؟",
          explanation:
            "الشبكة اللي بتربط النظام الطرفي بأول موجّه (Edge Router) على الطريق لأنظمة أخرى — المدخل للإنترنت.",
        },
        {
          q: "25. What are the two most prevalent broadband residential access types?",
          options: [
            "Ethernet and WiFi",
            "DSL and cable",
            "FTTH and 5G",
            "Satellite and radio",
          ],
          correct: 1,
          translation: "ما أكثر نوعين انتشاراً للوصول السكني عريض النطاق؟",
          explanation:
            "DSL (عبر خطوط الهاتف) و Cable (عبر البنية التحتية للتلفزيون الكابلي). الاثنان يستخدمان نفس البنية الموجودة.",
        },
        {
          q: "26. In DSL, what device is located in the telco's central office?",
          options: [
            "Cable modem",
            "DSLAM (Digital Subscriber Line Access Multiplexer)",
            "Router",
            "Switch",
          ],
          correct: 1,
          translation:
            "في DSL، ما الجهاز الموجود في المكتب المركزي لشركة الاتصالات؟",
          explanation:
            "DSLAM — بيفصل إشارات البيانات عن إشارات الهاتف وبيوجّه البيانات للإنترنت.",
        },
        {
          q: "27. How are data and telephone signals handled in DSL?",
          options: [
            "On separate lines",
            "Encoded at different frequencies on the same line",
            "Only digitally",
            "Via satellite",
          ],
          correct: 1,
          translation: "كيف تُعالَج إشارات البيانات والهاتف في DSL؟",
          explanation:
            "بترددات مختلفة على نفس الخط — البيانات على ترددات عالية، والهاتف على ترددات منخفضة. ده بيسمح باستخدام نفس السلك للاثنين.",
        },
        {
          q: "28. What is the typical range for DSL to work effectively?",
          options: ["1-2 miles", "5-10 miles", "20 miles", "Unlimited"],
          correct: 1,
          translation: "ما المدى النموذجي لعمل DSL بفعالية؟",
          explanation:
            "5-10 أميال (تقريباً 8-16 كم) من المكتب المركزي — كل ما بعُدت المسافة، ضعفت الإشارة وقلّت السرعة.",
        },
        {
          q: "29. What infrastructure does cable Internet use?",
          options: [
            "Telephone lines",
            "Cable television infrastructure",
            "Fiber optics only",
            "Wireless spectrum",
          ],
          correct: 1,
          translation: "ما البنية التحتية اللي بيستخدمها إنترنت الكابل؟",
          explanation:
            "البنية التحتية للتلفزيون الكابلي — نفس الكابلات المحورية الموجودة أصلاً في معظم المنازل.",
        },
        {
          q: "30. What is HFC in cable access?",
          options: [
            "High-frequency coax",
            "Hybrid fiber coax",
            "Home fiber connection",
            "High-speed fiber",
          ],
          correct: 1,
          translation: "ما هو HFC في الوصول بالكابل؟",
          explanation:
            "Hybrid Fiber Coax — مزيج من الألياف الضوئية (للأجزاء الرئيسية) والكابل المحوري (للأجزاء الطرفية).",
        },
        {
          q: "31. What device serves a similar function to DSLAM in cable networks?",
          options: [
            "DSL modem",
            "CMTS (Cable Modem Termination System)",
            "Router",
            "Switch",
          ],
          correct: 1,
          translation: "أي جهاز بيؤدي وظيفة مشابهة لـ DSLAM في شبكات الكابل؟",
          explanation:
            "CMTS — بيفصل وبيوجّه إشارات الإنترنت عن إشارات التلفزيون في شبكة الكابل.",
        },
        {
          q: "32. Why is cable Internet access shared?",
          options: [
            "It uses dedicated lines",
            "Every packet travels on shared links to all homes",
            "Only upstream is shared",
            "It is not shared",
          ],
          correct: 1,
          translation: "لماذا يُعتبر الوصول بالكابل مشتركاً؟",
          explanation:
            "لأن كل حزمة بتمر عبر روابط مشتركة لكل المنازل — لو الجيران بيستخدموا الإنترنت بكثافة، السرعة بتقل.",
        },
        {
          q: "33. What technology provides gigabit speeds directly to homes?",
          options: ["DSL", "Cable", "FTTH (Fiber to the Home)", "Ethernet"],
          correct: 2,
          translation: "أي تقنية بتوفّر سرعات جيجابت مباشرةً للمنازل؟",
          explanation:
            "FTTH — الألياف الضوئية لحد البيت. أسرع تقنية وصول منزلي حالياً، بتوصل لسرعات جيجابت.",
        },
        {
          q: "34. What is the simplest FTTH technology?",
          options: [
            "Hybrid fiber",
            "Direct fiber",
            "Coaxial fiber",
            "Wireless fiber",
          ],
          correct: 1,
          translation: "ما أبسط تقنية FTTH؟",
          explanation:
            "Direct Fiber — ليف ضوئي مباشر من المكتب المركزي لكل بيت. أبسط تصميماً لكن الأغلى تكلفة.",
        },
        {
          q: "35. What is the most prevalent access technology in enterprises?",
          options: ["DSL", "Ethernet", "Cable", "Satellite"],
          correct: 1,
          translation: "ما أكثر تقنية وصول انتشاراً في المؤسسات؟",
          explanation:
            "Ethernet — الأشهر في الشركات والجامعات والمباني السكنية. سريع وموثوق وسهل الإدارة.",
        },
        {
          q: "36. What standard is WiFi based on?",
          options: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.1", "IEEE 802.15"],
          correct: 1,
          translation: "على أي معيار يعتمد WiFi؟",
          explanation:
            "IEEE 802.11 — المعيار الرسمي لشبكات LAN اللاسلكية. 802.3 هو Ethernet، و 802.15 للـ Bluetooth.",
        },
        {
          q: "37. What is the range for a wireless LAN user from an access point?",
          options: [
            "A few meters",
            "A few tens of meters",
            "Kilometers",
            "Unlimited",
          ],
          correct: 1,
          translation: "ما مدى مستخدم شبكة LAN اللاسلكية من نقطة الوصول؟",
          explanation:
            "بضع عشرات من الأمتار — عشان كده WiFi مناسب للمنازل والمكاتب مش للتغطية الواسعة.",
        },
        {
          q: "38. What generation of wireless provides wide-area access up to tens of kilometers?",
          options: ["WiFi", "Ethernet", "3G, 4G, and 5G cellular", "FTTH"],
          correct: 2,
          translation:
            "أي جيل من الشبكات اللاسلكية بيوفّر وصولاً واسع النطاق يصل لعشرات الكيلومترات؟",
          explanation:
            "الجيل الثالث والرابع والخامس (3G/4G/5G) — تغطية خلوية واسعة، عكس WiFi المحدود بعشرات الأمتار.",
        },
        {
          q: "39. What are the two categories of physical media?",
          options: [
            "Wired and wireless",
            "Guided and unguided",
            "Copper and fiber",
            "Terrestrial and satellite",
          ],
          correct: 1,
          translation: "ما فئتا الوسائط الفيزيائية؟",
          explanation:
            "Guided (موجّه — كابلات) و Unguided (غير موجّه — موجات راديو، ضوء، إلخ). التقسيم حسب وجود مسار فيزيائي محدد.",
        },
        {
          q: "40. What is the most common guided medium for LANs?",
          options: [
            "Fiber optics",
            "Coaxial cable",
            "Twisted-pair copper wire",
            "Radio spectrum",
          ],
          correct: 2,
          translation: "ما أكثر وسط موجّه شيوعاً للشبكات المحلية (LANs)؟",
          explanation:
            "السلك النحاسي المجدول (Twisted-pair) — زي كابلات Cat5 و Cat6 المستخدمة في Ethernet.",
        },
        {
          q: "41. What breaks messages into packets?",
          options: ["Routers", "The source end system", "Switches", "Links"],
          correct: 1,
          translation: "ما الذي يقسّم الرسائل إلى حزم؟",
          explanation:
            "النظام الطرفي المصدر (Source End System) — بيقسّم الرسالة الطويلة لحزم صغيرة، كل حزمة بتمر عبر الشبكة.",
        },
        {
          q: "42. What is store-and-forward transmission?",
          options: [
            "Transmitting bits immediately",
            "Receiving the entire packet before forwarding",
            "Segmenting packets",
            "Queuing only",
          ],
          correct: 1,
          translation: "ما هو النقل تخزين-ثم-تمرير (Store-and-Forward)؟",
          explanation:
            "المبدل لازم يستقبل الحزمة كاملة قبل ما يبدأ يبعت أول بت منها على الرابط الصادر. أبسط آلية لتمرير الحزم.",
        },
        {
          q: "43. For a path with N links of rate R and packet length L, what is the end-to-end delay without other delays?",
          options: ["L/R", "N(L/R)", "(N-1)(L/R)", "2L/R"],
          correct: 2,
          translation:
            "لمسار به N روابط بمعدل R وطول الحزمة L، ما هو التأخير من طرف لطرف بدون تأخيرات أخرى؟",
          explanation:
            "(N-1)(L/R) — لأن أول حزمة بتتأخر بمقدار L/R على كل رابط، لكن النظام لا ينتظر الحزمة كاملة على الرابط الأخير. بالتالي N-1.",
        },
        {
          q: "44. What causes queuing delays?",
          options: [
            "Empty buffers",
            "Packets waiting in output buffers due to congestion",
            "Propagation speed",
            "Header addition",
          ],
          correct: 1,
          translation: "ما سبب تأخيرات الانتظار في الطابور؟",
          explanation:
            "حزم بتنتظر في مخرجات المخازن (Buffers) بسبب الازدحام — في أوقات الذروة، الحزم أكتر من قدرة الرابط.",
        },
        {
          q: "45. What happens when a queue is full?",
          options: [
            "Faster transmission",
            "Packet loss",
            "Automatic rerouting",
            "No effect",
          ],
          correct: 1,
          translation: "ماذا يحدث عندما يمتلئ الطابور؟",
          explanation:
            "فقدان الحزم (Packet Loss) — الحزمة الواصلة أو حزمة موجودة في الطابور بيتم إسقاطها. ده يعني إعادة إرسال = تأخير إضافي.",
        },
        {
          q: "46. How does a router determine where to forward a packet?",
          options: [
            "Using protocols",
            "Forwarding table based on destination address",
            "Randomly",
            "Via physical media",
          ],
          correct: 1,
          translation: "كيف يحدد الموجّه مكان تمرير الحزمة؟",
          explanation:
            "جدول التمرير (Forwarding Table) بناءً على عنوان الوجهة — كل حزمة بيتم فحص عنوانها وتوجيهها للرابط المناسب.",
        },
        {
          q: "47. What sets forwarding tables automatically?",
          options: [
            "End systems",
            "Routing protocols",
            "Applications",
            "Physical layer",
          ],
          correct: 1,
          translation: "ما الذي يضبط جداول التمرير تلقائياً؟",
          explanation:
            "بروتوكولات التوجيه (Routing Protocols) — بتحدّث جداول التمرير تلقائياً حسب حالة الشبكة.",
        },
        {
          q: "48. In circuit switching, what is reserved for a session?",
          options: [
            "Packets",
            "Resources like buffers and link rates",
            "Messages",
            "Headers",
          ],
          correct: 1,
          translation: "في تبديل الدوائر، ما الذي يُحجز للجلسة؟",
          explanation:
            "الموارد زي المخازن ومعدلات الروابط — محجوزة طوال مدة الجلسة، حتى لو مفيش بيانات بتُرسَل.",
        },
        {
          q: "49. What are the two multiplexing methods in circuit switching?",
          options: [
            "Packet and message",
            "FDM and TDM",
            "Store-and-forward",
            "Queuing and propagation",
          ],
          correct: 1,
          translation: "ما طريقتي التقسيم المتعدد في تبديل الدوائر؟",
          explanation:
            "FDM (تقسيم الترددات) و TDM (تقسيم الزمن) — الاثنان بيسمحوا بمشاركة الرابط بين عدة جلسات.",
        },
        {
          q: "50. Why is packet switching better for sharing capacity?",
          options: [
            "It reserves resources",
            "It allows better sharing than circuit switching",
            "It has fixed delays",
            "No queuing",
          ],
          correct: 1,
          translation: "لماذا تبديل الحزم أفضل لمشاركة السعة؟",
          explanation:
            "بيسمح بمشاركة أفضل من تبديل الدوائر — الموارد بتُستخدم عند الطلب، مش محجوزة لفترة كاملة.",
        },
        {
          q: "51. What trend is seen in telecommunication networks?",
          options: [
            "Toward circuit switching",
            "Toward packet switching",
            "Away from multiplexing",
            "To proprietary networks",
          ],
          correct: 1,
          translation: "ما الاتجاه السائد في شبكات الاتصالات؟",
          explanation:
            "نحو تبديل الحزم — حتى الشبكات التقليدية (زي الهاتف) بقت تتحول لـ VoIP (صوت عبر IP).",
        },
        {
          q: "52. In Network Structure 1, how are access ISPs interconnected?",
          options: [
            "Directly to each other",
            "Via a single global transit ISP",
            "Through end systems",
            "Without interconnection",
          ],
          correct: 1,
          translation: "في بنية الشبكة 1، كيف تت互联 مزوّدو الوصول؟",
          explanation:
            "عبر ISP عالمي واحد للنقل — أبسط هيكل ممكن: كل مزوّدي الوصول بيتصلوا بمزوّد عالمي واحد.",
        },
        {
          q: "53. What is a customer-provider relationship in ISPs?",
          options: [
            "Free peering",
            "Access ISP pays the global ISP",
            "Equal sharing",
            "No payment",
          ],
          correct: 1,
          translation: "ما علاقة العميل-المزوّد بين مزوّدي الخدمة؟",
          explanation:
            "مزوّد الوصول (العميل) بيدفع للمزوّد العالمي — مقابل خدمة النقل. دي علاقة تجارية هرمية.",
        },
        {
          q: "54. What does Network Structure 2 add?",
          options: [
            "Single ISP",
            "Multiple competing global transit ISPs",
            "Only access ISPs",
            "End systems",
          ],
          correct: 1,
          translation: "ما الذي تضيفه بنية الشبكة 2؟",
          explanation:
            "عدة مزوّدين عالميين متنافسين — مزوّدو الوصول بقى لهم خيارات، والمنافسة بتحسّن الأسعار والخدمة.",
        },
        {
          q: "55. What are tier-1 ISPs?",
          options: [
            "Local access providers",
            "Global ISPs with presence not in every city",
            "Only regional",
            "Home networks",
          ],
          correct: 1,
          translation: "ما هي مزوّدات الطبقة الأولى (Tier-1)؟",
          explanation:
            "مزوّدون عالميون بحضور واسع لكن مش في كل مدينة — بيمثلوا قمة الهرم، مش بيدفعوا لحد.",
        },
        {
          q: "56. In Network Structure 3, what connects access ISPs in a region?",
          options: [
            "Global ISPs directly",
            "Regional ISPs that connect to tier-1",
            "Peering points",
            "Content providers",
          ],
          correct: 1,
          translation:
            "في بنية الشبكة 3، ما الذي يربط مزوّدي الوصول في المنطقة؟",
          explanation:
            "مزوّدو خدمة إقليميون بيتصلوا بـ Tier-1 — طبقة وسيطة بين الوصول والمستوى العالمي.",
        },
        {
          q: "57. What is a PoP?",
          options: [
            "Point of presence for customer connections",
            "Protocol over protocol",
            "Packet of packets",
            "Point of peering",
          ],
          correct: 0,
          translation: "ما هو PoP؟",
          explanation:
            "نقطة حضور (Point of Presence) — مجموعة من الموجّهات في شبكة المزوّد حيث يمكن لمزوّدي الوصول الاتصال.",
        },
        {
          q: "58. What is multi-homing?",
          options: [
            "Connecting to one ISP",
            "Connecting to two or more provider ISPs",
            "Single link use",
            "No redundancy",
          ],
          correct: 1,
          translation: "ما هو Multi-homing؟",
          explanation:
            "الاتصال بأكثر من مزوّد — بيدي مرونة واستمرارية في الخدمة لو حصل عطل عند مزوّد واحد.",
        },
        {
          q: "59. What is peering between ISPs?",
          options: [
            "Payment-based connection",
            "Direct, settlement-free connection",
            "Through tier-1 only",
            "Via end systems",
          ],
          correct: 1,
          translation: "ما هو الـ Peering بين مزوّدي الخدمة؟",
          explanation:
            "اتصال مباشر بدون مقابل مالي (settlement-free) — بيسمح بتبادل الترافيك بدون وسيط مدفوع.",
        },
        {
          q: "60. What is an IXP?",
          options: [
            "Internet exchange point for peering",
            "ISP expansion protocol",
            "Internal exchange protocol",
            "Internet xylem point",
          ],
          correct: 0,
          translation: "ما هو IXP؟",
          explanation:
            "نقطة تبادل إنترنت (Internet Exchange Point) — مكان بيتجمع فيه عدة مزوّدين للـ Peering.",
        },
        {
          q: "61. What does Network Structure 5 add?",
          options: [
            "Only access ISPs",
            "Content-provider networks like Google",
            "More regional ISPs",
            "End systems",
          ],
          correct: 1,
          translation: "ما الذي تضيفه بنية الشبكة 5؟",
          explanation:
            "شبكات مزوّدي المحتوى (زي Google و Netflix) — بقت لاعبين رئيسيين في بنية الإنترنت الحديثة.",
        },
        {
          q: "62. How does Google bypass upper tiers?",
          options: [
            "Using public Internet only",
            "Peering with lower-tier ISPs and IXPs",
            "Paying all tier-1",
            "No bypassing",
          ],
          correct: 1,
          translation: "كيف تتجاوز Google الطبقات العليا؟",
          explanation:
            "بالـ Peering مع مزوّدي المستوى الأدنى والاتصال عند IXPs — بيوفر تكلفة نقل وبيحسّن الأداء.",
        },
        {
          q: "63. What is twisted-pair copper wire used for?",
          options: [
            "Long-haul only",
            "LANs and residential access",
            "Satellite links",
            "Optical pulses",
          ],
          correct: 1,
          translation: "فيما يُستخدم السلك النحاسي المجدول؟",
          explanation:
            "شبكات LAN والوصول السكني — الأرخص والأكثر انتشاراً، لكنه أقل جودة من الألياف للمسافات البعيدة.",
        },
        {
          q: "64. What achieves data rates up to 10 Gbps over 100 meters?",
          options: [
            "Coaxial cable",
            "Category 6a twisted-pair",
            "Radio channels",
            "Satellite",
          ],
          correct: 1,
          translation:
            "ما الذي يحقق معدلات بيانات تصل إلى 10 Gbps عبر 100 متر؟",
          explanation:
            "كابل Cat 6a المجدول — نسخة متقدمة من الكابلات المجدولة، بتوصل لسرعات عالية لمسافات قصيرة.",
        },
        {
          q: "65. What is fiber optics preferred for?",
          options: [
            "Short-haul LANs",
            "Long-haul transmission",
            "Wireless",
            "Low bit rates",
          ],
          correct: 1,
          translation: "فيما تُفضَّل الألياف الضوئية؟",
          explanation:
            "النقل لمسافات طويلة (Long-haul) — بسبب انخفاض التوهين ومقاومة التداخل الكهرومغناطيسي.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay (1-59, 128-134)
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "1. What are the two principal ways to describe the Internet?",
          translation: "ما الطريقتان الرئيسيتان لوصف الإنترنت؟",
          answer:
            "1. A nuts-and-bolts description of its hardware and software components.\n" +
            "2. A services description as an infrastructure that provides services to distributed applications.",
        },
        {
          type: "essay",
          q: "2. In Internet jargon, what are the billions of computing devices connected to the Internet called?",
          translation:
            "في مصطلحات الإنترنت، ماذا يُسمى مليارات أجهزة الحوسبة المتصلة بالإنترنت؟",
          answer: "Hosts or end systems.",
        },
        {
          type: "essay",
          q: "3. What are the two most prominent types of packet switches in today's Internet?",
          translation: "ما أبرز نوعين لمبدلات الحزم في الإنترنت اليوم؟",
          answer: "Routers and link-layer switches.",
        },
        {
          type: "essay",
          q: "4. What is the name for the sequence of communication links and packet switches traversed by a packet from sender to receiver?",
          translation:
            "ما اسم تتابع روابط الاتصال ومبدلات الحزم الذي تمر به الحزمة من المُرسِل للمستقبِل؟",
          answer: "A route or path.",
        },
        {
          type: "essay",
          q: "5. Through what do end systems access the Internet?",
          translation: "من خلال ماذا تصل الأنظمة الطرفية بالإنترنت؟",
          answer: "Internet Service Providers (ISPs).",
        },
        {
          type: "essay",
          q: "6. What is the collective name for the Internet's principal protocols?",
          translation: "ما الاسم الجماعي للبروتوكولات الرئيسية للإنترنت؟",
          answer: "TCP/IP.",
        },
        {
          type: "essay",
          q: "7. Which organization develops Internet standards, and what are its documents called?",
          translation: "أي منظمة تطوّر معايير الإنترنت، وماذا تُسمى وثائقها؟",
          answer:
            "The Internet Engineering Task Force (IETF). Its documents are called Requests for Comments (RFCs).",
        },
        {
          type: "essay",
          q: "8. Which committee specifies standards for Ethernet and WiFi?",
          translation: "أي لجنة تضع معايير Ethernet و WiFi؟",
          answer: "The IEEE 802 LAN Standards Committee.",
        },
        {
          type: "essay",
          q: "9. From a services perspective, the Internet is an infrastructure that provides services to what?",
          translation:
            "من منظور الخدمات، الإنترنت بنية تحتية بتقدم خدمات لماذا؟",
          answer: "Distributed applications.",
        },
        {
          type: "essay",
          q: "10. Where do Internet applications run?",
          translation: "أين تعمل تطبيقات الإنترنت؟",
          answer:
            "On end systems (hosts), not in the packet switches in the network core.",
        },
        {
          type: "essay",
          q: "11. What is the name of the interface that specifies how a program asks the Internet to deliver data to a destination program on another end system?",
          translation:
            "ما اسم الواجهة التي تحدد كيف يطلب برنامج من الإنترنت توصيل بياناته لبرنامج آخر على نظام طرفي بعيد؟",
          answer: "The socket interface.",
        },
        {
          type: "essay",
          q: "12. Using a human analogy for a protocol, what might a response of 'Don't bother me!' to a 'Hi' indicate?",
          translation:
            "باستخدام تشبيه بشري للبروتوكول، ماذا يعني رد 'لا تزعجني!' على 'Hi'؟",
          answer: "An unwillingness or inability to communicate.",
        },
        {
          type: "essay",
          q: "13. What three things does a network protocol define?",
          translation: "ما الثلاثة أشياء التي يعرّفها بروتوكول الشبكة؟",
          answer:
            "The format, the order of messages exchanged, and the actions taken on the transmission/receipt of a message or other event.",
        },
        {
          type: "essay",
          q: "14. What are the components located at the edge of the Internet called?",
          translation: "ماذا يُسمى المكونات الموجودة عند حافة الإنترنت؟",
          answer: "End systems or hosts.",
        },
        {
          type: "essay",
          q: "15. What is the equation given for hosts and end systems?",
          translation: "ما المعادلة المعطاة للمضيفين والأنظمة الطرفية؟",
          answer: "Host = End system.",
        },
        {
          type: "essay",
          q: "16. Into what two categories are hosts sometimes divided?",
          translation: "إلى أي فئتين يُصنَّف المضيفون أحياناً؟",
          answer: "Clients and servers.",
        },
        {
          type: "essay",
          q: "17. Where do many of the servers we use today reside?",
          translation: "أين توجد كثير من السيرفرات التي نستخدمها اليوم؟",
          answer: "In large data centers.",
        },
        {
          type: "essay",
          q: "18. What is the access network?",
          translation: "ما هي شبكة الوصول؟",
          answer:
            "The network that physically connects an end system to the first router (edge router) on a path to other end systems.",
        },
        {
          type: "essay",
          q: "19. What are the two most prevalent types of broadband residential access discussed?",
          translation:
            "ما أكثر نوعين انتشاراً للوصول السكني عريض النطاق المذكورَين؟",
          answer: "Digital Subscriber Line (DSL) and cable.",
        },
        {
          type: "essay",
          q: "20. What does a DSLAM do?",
          translation: "ماذا يفعل DSLAM؟",
          answer:
            "A Digital Subscriber Line Access Multiplexer (DSLAM) located in the telco's central office separates data and phone signals and sends data into the Internet.",
        },
        {
          type: "essay",
          q: "21. What does HFC stand for, and what two types of cable does it use?",
          translation: "ما اختصار HFC، وما نوعا الكابلات المستخدَمان فيه؟",
          answer: "Hybrid Fiber Coax. It uses fiber optics and coaxial cable.",
        },
        {
          type: "essay",
          q: "22. What is the device at the cable head end that serves a similar function to a DSLAM?",
          translation:
            "ما الجهاز في رأس شبكة الكابل الذي يؤدي وظيفة مشابهة لـ DSLAM؟",
          answer: "The Cable Modem Termination System (CMTS).",
        },
        {
          type: "essay",
          q: "23. Why is cable Internet access considered a shared broadcast medium?",
          translation: "لماذا يُعتبر الوصول بالكابل وسط بث مشترك؟",
          answer:
            "Because every packet sent by the head end travels downstream on every link to every home.",
        },
        {
          type: "essay",
          q: "24. What does FTTH stand for?",
          translation: "ما اختصار FTTH؟",
          answer: "Fiber To The Home.",
        },
        {
          type: "essay",
          q: "25. What is the dominant wired access technology in corporate, university, and home LANs?",
          translation:
            "ما تقنية الوصول السلكي السائدة في شبكات LAN للشركات والجامعات والمنازل؟",
          answer: "Ethernet.",
        },
        {
          type: "essay",
          q: "26. What is the common name for IEEE 802.11 wireless LAN technology?",
          translation: "ما الاسم الشائع لتقنية IEEE 802.11 اللاسلكية؟",
          answer: "WiFi.",
        },
        {
          type: "essay",
          q: "27. Compared to WiFi, what is the typical range for a user from a cellular base station?",
          translation:
            "مقارنةً بـ WiFi، ما المدى النموذجي للمستخدم من محطة الخلية الأساسية؟",
          answer:
            "A user need only be within a few tens of kilometers (as opposed to a few tens of meters for WiFi).",
        },
        {
          type: "essay",
          q: "28. What are the two categories of physical media?",
          translation: "ما فئتا الوسائط الفيزيائية؟",
          answer: "Guided media and unguided media.",
        },
        {
          type: "essay",
          q: "29. What is the least expensive and most commonly used guided transmission medium?",
          translation: "ما أقل الوسائط الموجّهة تكلفةً وأكثرها استخداماً؟",
          answer: "Twisted-pair copper wire.",
        },
        {
          type: "essay",
          q: "30. What is a key characteristic of coaxial cable that allows it to achieve high data rates?",
          translation:
            "ما السمة الرئيسية للكابل المحوري التي تسمح بتحقيق معدلات بيانات عالية؟",
          answer:
            "Its construction with two concentric conductors, special insulation, and shielding.",
        },
        {
          type: "essay",
          q: "31. What are three advantages of fiber optics as a transmission medium?",
          translation: "ما ثلاثة مزايا للألياف الضوئية كوسط نقل؟",
          answer:
            "It can support tremendous bit rates, is immune to electromagnetic interference, and has very low signal attenuation.",
        },
        {
          type: "essay",
          q: "32. What is a key reason fiber optics is not yet prevalent for short-haul transport like LANs?",
          translation:
            "ما السبب الرئيسي لعدم انتشار الألياف الضوئية في النقل قصير المدى زي LANs؟",
          answer:
            "The high cost of optical devices like transmitters, receivers, and switches.",
        },
        {
          type: "essay",
          q: "33. What are the three broad groups of terrestrial radio channels based on distance?",
          translation:
            "ما المجموعات الثلاث العريضة لقنوات الراديو الأرضية بناءً على المسافة؟",
          answer:
            "Those that operate over very short distances, in local areas, and in wide areas.",
        },
        {
          type: "essay",
          q: "34. What are the two types of satellites used in communications?",
          translation: "ما نوعا الأقمار الصناعية المستخدَمان في الاتصالات؟",
          answer:
            "Geostationary satellites and low-earth orbiting (LEO) satellites.",
        },
        {
          type: "essay",
          q: "35. What is a significant disadvantage of geostationary satellites?",
          translation:
            "ما العيب الكبير للأقمار الصناعية الثابتة بالنسبة للأرض؟",
          answer:
            "They introduce a substantial signal propagation delay of about 280 milliseconds due to their high altitude.",
        },
        {
          type: "essay",
          q: "36. What are the two fundamental approaches to moving data through a network?",
          translation: "ما المقاربتان الأساسيتان لنقل البيانات عبر الشبكة؟",
          answer: "Circuit switching and packet switching.",
        },
        {
          type: "essay",
          q: "37. In a network application, what do end systems exchange?",
          translation: "في تطبيق شبكي، ماذا تتبادل الأنظمة الطرفية؟",
          answer: "Messages.",
        },
        {
          type: "essay",
          q: "38. What are the smaller chunks of data that a long message is broken into called?",
          translation:
            "ماذا تُسمى الأجزاء الأصغر من البيانات التي تُقسَّم إليها رسالة طويلة؟",
          answer: "Packets.",
        },
        {
          type: "essay",
          q: "39. What does 'store-and-forward transmission' mean?",
          translation: "ماذا يعني 'النقل تخزين-ثم-تمرير'؟",
          answer:
            "The packet switch must receive the entire packet before it can begin to transmit the first bit of the packet onto the outbound link.",
        },
        {
          type: "essay",
          q: "40. In a simple two-end-system, one-router example, if a packet is L bits long and the link rate is R bits/sec, what is the total delay to get the packet to the destination?",
          translation:
            "في مثال بسيط بنظامين طرفيين وموجّه واحد، لو الحزمة طولها L بت ومعدل الرابط R بت/ث، ما التأخير الكلي لإيصال الحزمة للوجهة؟",
          answer: "2L/R seconds.",
        },
        {
          type: "essay",
          q: "41. For a path with N links, each of rate R, what is the end-to-end delay for one packet?",
          translation:
            "لمسار به N روابط، كل منها بمعدل R، ما التأخير من طرف لطرف لحزمة واحدة؟",
          answer:
            "N × (L / R) seconds (assuming only store-and-forward delay).",
        },
        {
          type: "essay",
          q: "42. What is the purpose of an output buffer (output queue) in a packet switch?",
          translation: "ما الغرض من المخزن الناتج (طابور الخرج) في مبدل الحزم؟",
          answer:
            "To store packets that the router is about to send into a link when that link is busy.",
        },
        {
          type: "essay",
          q: "43. What is the variable delay that packets suffer in addition to store-and-forward delays?",
          translation:
            "ما التأخير المتغير الذي تعانيه الحزم بالإضافة لتأخيرات التخزين والتمرير؟",
          answer: "Queuing delays.",
        },
        {
          type: "essay",
          q: "44. What happens if an arriving packet finds the output buffer full?",
          translation: "ماذا يحدث لو وصلت حزمة ولقت المخزن الناتج ممتلئ؟",
          answer:
            "Packet loss occurs—either the arriving packet or one of the already-queued packets is dropped.",
        },
        {
          type: "essay",
          q: "45. How does a router determine which outbound link to forward a packet onto?",
          translation: "كيف يحدد الموجّه أي رابط صادر لتمرير الحزمة عليه؟",
          answer:
            "It examines the packet's destination address and searches its forwarding table to find the appropriate outbound link.",
        },
        {
          type: "essay",
          q: "46. What are the special protocols used to automatically set forwarding tables called?",
          translation:
            "ماذا تُسمى البروتوكولات الخاصة المستخدمة لضبط جداول التمرير تلقائياً؟",
          answer: "Routing protocols.",
        },
        {
          type: "essay",
          q: "47. In circuit switching, what is reserved for the duration of a communication session?",
          translation: "في تبديل الدوائر، ما الذي يُحجز طوال مدة جلسة الاتصال؟",
          answer:
            "The resources needed along the path (buffers, link transmission rate).",
        },
        {
          type: "essay",
          q: "48. What are the two fundamental approaches to multiplexing a circuit in a link?",
          translation: "ما المقاربتان الأساسيتان لتقسيم الدائرة في الرابط؟",
          answer:
            "Frequency-division multiplexing (FDM) and time-division multiplexing (TDM).",
        },
        {
          type: "essay",
          q: "49. What is the main criticism of packet switching regarding real-time services?",
          translation:
            "ما الانتقاد الرئيسي لتبديل الحزم بخصوص الخدمات الفورية؟",
          answer: "Its variable and unpredictable end-to-end delays.",
        },
        {
          type: "essay",
          q: "50. What are two arguments made by proponents of packet switching?",
          translation: "ما الحجتان اللتان يطرحهما مؤيدو تبديل الحزم؟",
          answer:
            "1. It offers better sharing of transmission capacity.\n" +
            "2. It is simpler, more efficient, and less costly to implement.",
        },
        {
          type: "essay",
          q: "51. What is the overarching goal of interconnecting access ISPs?",
          translation: "ما الهدف الشامل من ربط مزوّدي الوصول ببعضهم؟",
          answer: "So that all end systems can send packets to each other.",
        },
        {
          type: "essay",
          q: "52. Why is directly connecting every access ISP to every other access ISP not a practical solution?",
          translation:
            "لماذا الربط المباشر بين كل مزوّدي الوصول ببعضهم غير عملي؟",
          answer:
            "It is much too costly, as it would require each access ISP to have a separate communication link to every other access ISP in the world.",
        },
        {
          type: "essay",
          q: "53. In a simple network structure (Structure 1), what interconnects all access ISPs?",
          translation:
            "في بنية الشبكة البسيطة (1)، ما الذي يربط كل مزوّدي الوصول؟",
          answer: "A single global transit ISP.",
        },
        {
          type: "essay",
          q: "54. In the hierarchy of ISPs, what are the approximately dozen very large ISPs called?",
          translation:
            "في التسلسل الهرمي لمزوّدي الخدمة، ماذا يُسمى العدد التقريبي (دستة) من كبار المزوّدين جداً؟",
          answer: "Tier-1 ISPs.",
        },
        {
          type: "essay",
          q: "55. What does it mean for an ISP to multi-home?",
          translation: "ماذا يعني أن يقوم مزوّد الخدمة بالـ Multi-homing؟",
          answer: "To connect to two or more provider ISPs.",
        },
        {
          type: "essay",
          q: "56. What is the primary benefit of multi-homing?",
          translation: "ما الفائدة الأساسية للـ Multi-homing؟",
          answer:
            "It allows an ISP to continue sending and receiving packets even if one of its providers has a failure.",
        },
        {
          type: "essay",
          q: "57. What does it mean for two ISPs to peer?",
          translation: "ماذا يعني أن يقوم مزوّدان بالـ Peering؟",
          answer:
            "They can directly connect their networks so that traffic between them passes over the direct connection rather than through upstream intermediaries.",
        },
        {
          type: "essay",
          q: "58. What is an IXP?",
          translation: "ما هو IXP؟",
          answer:
            "An Internet Exchange Point (IXP) is a meeting point where multiple ISPs can peer together.",
        },
        {
          type: "essay",
          q: "59. What is a key characteristic of content-provider networks like Google's?",
          translation: "ما السمة الرئيسية لشبكات مزوّدي المحتوى زي Google؟",
          answer:
            "They often use their own private networks to bypass upper tiers by peering with lower-tier ISPs and connecting at IXPs, while also connecting to tier-1 ISPs for reach.",
        },
        {
          type: "essay",
          q: "128. What is the fundamental difference between how resources are managed in packet switching versus circuit switching?",
          translation:
            "ما الفرق الجوهري في إدارة الموارد بين تبديل الحزم وتبديل الدوائر؟",
          answer:
            "In packet switching, resources are not reserved; they are used on demand, which can lead to congestion. In circuit switching, resources are reserved for the entire duration of the session.",
        },
        {
          type: "essay",
          q: "129. Why is packet switching considered more efficient for bursty data traffic?",
          translation:
            "لماذا يُعتبر تبديل الحزم أكثر كفاءةً لترافيك البيانات المتقطع (Bursty)؟",
          answer:
            "Because it allows multiple data flows to share the same links and switches statistically, rather than dedicating a fixed share of resources to a single flow that may be idle at times.",
        },
        {
          type: "essay",
          q: "130. How does the concept of 'statistical multiplexing' relate to packet switching?",
          translation: "كيف يرتبط مفهوم 'التقسيم الإحصائي' بتبديل الحزم؟",
          answer:
            "Statistical multiplexing is the core principle of packet switching, where packets from different sources are interleaved over a shared link, without a guaranteed reservation of bandwidth for any single source.",
        },
        {
          type: "essay",
          q: "131. What is the relationship between a host, an end system, and a server?",
          translation: "ما العلاقة بين المضيف والنظام الطرفي والسيرفر؟",
          answer:
            "A host is the same as an end system. A server is a type of host that typically provides a service (e.g., a web server). Not all hosts are servers; some are clients.",
        },
        {
          type: "essay",
          q: "133. In the context of access networks, what does 'asymmetric' mean?",
          translation:
            "في سياق شبكات الوصول، ماذا يعني 'غير متماثل' (Asymmetric)؟",
          answer:
            "The downstream transmission rate (from the ISP to the home) is typically much higher than the upstream rate (from the home to the ISP).",
        },
        {
          type: "essay",
          q: "134. How does a router differ from a link-layer switch in terms of the layers they implement?",
          translation:
            "كيف يختلف الموجّه عن مبدل طبقة الوصلة من ناحية الطبقات التي ينفذها؟",
          answer:
            "A router implements layers 1-3 (Physical, Link, Network) and can forward packets based on IP addresses. A link-layer switch implements only layers 1-2 (Physical, Link) and forwards frames based on MAC addresses.",
        },
      ],
    },
    {
      t: "المحاضرة الثانية — الفصل الأول (جزء 2): تبديل الدوائر وتحليل أداء الشبكات",
      d: "تبديل الدوائر (Circuit Switching)، بنية شبكة الشبكات (Network of Networks)، وتحليل أداء الشبكات (التأخير العُقدي، كثافة الحركة La/R، وفقدان الحزم).",
      id: "computer-networks-lecture-02",
      pdf: "datenew/subjects/computer-networks/lectures/lec 2/Ch01 - Computer Networks - Lec 02.pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/Ch01/Chapter 1 - Questions - Computer Networks.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم المحاضرة الثانية: تبديل الدوائر مقابل تبديل الحزم، بنية الإنترنت الهرمية، وحسابات التأخير العُقدي.",
          links: [
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي تفصيلي لكتاب Kurose & Ross: تبديل الدوائر FDM/TDM، هيكلية شبكة الشبكات (Tier-1, IXPs, Content Providers)، ومعادلات حساب Delays و Traffic Intensity  فديوهات (من 4 الي 5) ",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي لكتاب Kurose & Ross: يتناول الـ Network Core (مقارنة Packet Switching vs Circuit Switching، وهيكل A Network of Networks)، بالإضافة إلى أنواع التأخير في الشبكات (Overview of Delay in Packet-Switched Networks). [فيديوهات 3-4 | من دقيقة 23:20 في فيديو 3]",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLYljoJMAPFLHrCVfzuMLkJOZHhCgfSXG-&si=c2A3_89g912REXOZ",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "المحاضرات الرسمية المحددة بدقة من مؤلف الكتاب Jim Kurose والمطابقة لموضوعات المحاضرة الثانية",
          links: [
            {
              t: "Jim Kurose - Section 1.3: The Network Core",
              d: "الشرح المباشر لمؤلف الكتاب للفصل 1.3: Circuit Switching vs Packet Switching، التعدد FDM/TDM، وبنية شبكة الشبكات Network of Networks (مطابق لصفحات 1-22 من الملف)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 Playlist كامل",
                  url: "https://www.youtube.com/playlist?list=PL1ya5dD_M8uX-BLUF1FEvUNsYWQL5_l0O",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🎬 المحاضرة 1.3 مباشرة (Network Core)",
                  url: "https://www.youtube.com/watch?v=f1nUcCdQJ8Y",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Jim Kurose - Section 1.4: Performance (Delay, Loss, Throughput)",
              d: "الشرح المباشر لمؤلف الكتاب للفصل 1.4: معادلات التأخير العُقدي d_proc, d_queue, d_trans, d_prop، كثافة الحركة Traffic Intensity La/R، وفقدان الحزم وأداة Traceroute (مطابق لصفحات 23-40 من الملف)",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة 1.4 مباشرة (Performance)",
                  url: "https://www.youtube.com/watch?v=hm1y4LsphQQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Neso Academy - Delays and Circuit Switching",
              d: "شرح أكاديمي شامل لحسابات Transmission Delay vs Propagation Delay وهيكلية Circuit Switches",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgneraVKkEXrwyLVx2vJUvt",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مراجع أكاديمية وتطبيقية متوافقة مع مفاهيم تبديل الدوائر وتأخير الحزم",
          links: [
            {
              t: "Kurose & Ross Official Student Resources",
              d: "الموقع الرسمي للكتاب: شرائح PowerPoint للمحاضرة الثانية، تمارين Wireshark Labs، وتمارين مراجعة تفاعلية",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://gaia.cs.umass.edu/kurose_ross/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Circuit Switching in Computer Network",
              d: "مقالة مرجعية تشرح FDM و TDM والمراحل الثلاث لتبديل الدوائر (Establishment, Data Transfer, Disconnection)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-networks/circuit-switching-in-computer-network/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Transmission Delay vs Propagation Delay",
              d: "مقارنة رياضية وشاملة بين تأخير الإرسال L/R وتأخير الانتشار d/s مع أمثلة محلولة وطبيعة وسائط النقل",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/electronics-engineering/propagation-delay/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية لحساب التأخير وتشخيص المسارات الشبكية الحية",
          links: [
            {
              t: "Kurose & Ross Interactive Delay & Queuing Problems",
              d: "تمارين تفاعلية رسمية لحساب Queuing Delay، Traffic Intensity La/R، والتأخير الكلي بين الطرفيات End-to-End Delay",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التمارين",
                  url: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Wireshark - Packet Analyzer & Traceroute",
              d: "أداة تتبع الحزم وتجربة قياس أزمنة التأخير بين المحطات عبر أداة Traceroute التشخيصية",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Computer Networks — شبكات الحاسوب
      //  المسار: datenew/networks/networks.js → lectures[1].questions
      //  المرجع: Kurose & Ross — Top-Down Approach (Sections 1.3.2, 1.3.3, 1.4)
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // القسم 1: تبديل الدوائر والحزم (Circuit vs Packet Switching)
        // ═══════════════════════════════════════════════════════
        {
          q: "What are the two fundamental approaches to moving data through a network of links and switches?",
          options: [
            "Circuit switching and packet switching",
            "Analog and digital switching",
            "Wired and wireless switching",
            "Synchronous and asynchronous switching",
          ],
          correct: 0,
          translation:
            "ما المقاربتان الأساسيتان لنقل البيانات عبر شبكة من الروابط والمبدلات؟",
          explanation:
            "تبديل الدوائر (Circuit Switching) وتبديل الحزم (Packet Switching) — الفرق الأساسي في هل الموارد محجوزة مسبقاً أم لا.",
          tags: ["Circuit Switching", "Packet Switching"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "In circuit-switched networks, what is reserved for the duration of the communication session?",
          options: [
            "Only the buffers",
            "Only the link transmission rate",
            "The resources needed along a path (buffers, link transmission rate)",
            "Nothing is reserved",
          ],
          correct: 2,
          translation:
            "في شبكات تبديل الدوائر، ما الذي يُحجز طوال مدة جلسة الاتصال؟",
          explanation:
            "الموارد المطلوبة على طول المسار (المخازن + معدل نقل الروابط) — محجوزة كاملة للمستخدم مهما كان الاستخدام.",
          tags: ["Circuit Switching", "Resource Reservation"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "In packet-switched networks, resources are:",
          options: [
            "Reserved for the entire session",
            "Not reserved",
            "Reserved only for real-time services",
            "Reserved only for voice calls",
          ],
          correct: 1,
          translation: "في شبكات تبديل الحزم، الموارد:",
          explanation:
            "غير محجوزة — بتُستخدم عند الطلب. ده بيسمح بمشاركة أفضل، لكن ممكن يحصل ازدحام.",
          tags: ["Packet Switching", "Resource Reservation"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "Which restaurant analogy best describes circuit switching?",
          options: [
            "A restaurant that neither requires nor accepts reservations",
            "A restaurant that requires reservations",
            "A fast-food restaurant",
            "A self-service restaurant",
          ],
          correct: 1,
          translation: "أي تشبيه مطعم يصف تبديل الدوائر بأفضل شكل؟",
          explanation:
            "مطعم بيتطلب حجز — لازم تحجز قبل ما تيجي، والمكان محفوظ لك حتى لو مجيتش.",
          tags: ["Circuit Switching", "Analogy"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "Traditional telephone networks are examples of:",
          options: [
            "Packet-switched networks",
            "Circuit-switched networks",
            "Hybrid networks",
            "Wireless networks",
          ],
          correct: 1,
          translation: "شبكات الهاتف التقليدية أمثلة على:",
          explanation:
            "شبكات تبديل الدوائر — المكالمة بتحجز مسار كامل من البداية للنهاية.",
          tags: ["Circuit Switching", "Telephone Networks"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "A circuit in a link is implemented with either:",
          options: [
            "Frequency-division multiplexing (FDM) or time-division multiplexing (TDM)",
            "Packet switching or message switching",
            "Analog or digital modulation",
            "Wired or wireless transmission",
          ],
          correct: 0,
          translation: "الدائرة في الرابط تُنفَّذ بواسطة:",
          explanation:
            "FDM (تقسيم ترددي) أو TDM (تقسيم زمني) — طريقتان لمشاركة الرابط بين عدة دوائر.",
          tags: ["Circuit Switching", "Multiplexing", "FDM", "TDM"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "What is the main criticism of packet switching regarding real-time services?",
          options: [
            "It is too expensive",
            "It has variable and unpredictable end-to-end delays",
            "It cannot handle voice calls at all",
            "It requires too much bandwidth",
          ],
          correct: 1,
          translation:
            "ما الانتقاد الرئيسي لتبديل الحزم بخصوص الخدمات الفورية؟",
          explanation:
            "تأخيرات متغيرة وغير متوقعة — مشكلة للتطبيقات اللي بتحتاج توقيت ثابت زي المكالمات الصوتية.",
          tags: ["Packet Switching", "Real-Time Services", "Delay"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "What are two arguments made by proponents of packet switching?",
          options: [
            "It reserves resources and guarantees no delay",
            "It offers better sharing of transmission capacity and is simpler, more efficient, and less costly to implement",
            "It requires more bandwidth and is more complex",
            "It is only suitable for real-time services",
          ],
          correct: 1,
          translation: "ما الحجتان اللتان يطرحهما مؤيدو تبديل الحزم؟",
          explanation:
            "مشاركة أفضل للسعة + أبسط وأكفأ وأرخص في التنفيذ. ده اللي خلى الإنترنت يعتمد عليه.",
          tags: ["Packet Switching", "Advantages"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          q: "The trend in telecommunication networks has been moving toward:",
          options: [
            "Circuit switching",
            "Packet switching",
            "Satellite communication",
            "Analog networks",
          ],
          correct: 1,
          translation: "الاتجاه في شبكات الاتصالات كان نحو:",
          explanation:
            "تبديل الحزم — حتى الهاتف التقليدي بقى VoIP (صوت عبر IP)، وده بيوضح انتصار تبديل الحزم.",
          tags: ["Packet Switching", "Trends"],
          ref: "Lecture 2 — Section 1.3.2",
        },

        // ═══════════════════════════════════════════════════════
        // القسم 2: بنية الشبكات (Network of Networks)
        // ═══════════════════════════════════════════════════════
        {
          q: "In Network Structure 1, how are all access ISPs interconnected?",
          options: [
            "Directly to each other",
            "Via a single global transit ISP",
            "Through end systems",
            "Without any interconnection",
          ],
          correct: 1,
          translation: "في بنية الشبكة 1، كيف تت互联 كل مزوّدي الوصول؟",
          explanation:
            "عبر مزوّد نقل عالمي واحد — أبسط هيكل: كل مزوّدي الوصول بيتصلوا بمزوّد عالمي واحد.",
          tags: ["Network of Networks", "Network Structure 1"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "In the customer-provider relationship, the access ISP is the ______ and the global transit ISP is the ______.",
          options: [
            "Provider, customer",
            "Customer, provider",
            "Peer, peer",
            "Client, server",
          ],
          correct: 1,
          translation:
            "في علاقة العميل-المزوّد، مزوّد الوصول هو ______ والمزوّد العالمي هو ______.",
          explanation:
            "العميل (Customer) هو مزوّد الوصول، والمزوّد (Provider) هو المزوّد العالمي — علاقة تجارية بحتة.",
          tags: ["Network of Networks", "Customer-Provider"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What does Network Structure 2 add compared to Network Structure 1?",
          options: [
            "A single global ISP",
            "Multiple competing global transit ISPs",
            "Only access ISPs",
            "Content provider networks",
          ],
          correct: 1,
          translation: "ما الذي تضيفه بنية الشبكة 2 مقارنةً ببنية الشبكة 1؟",
          explanation:
            "عدة مزوّدين عالميين متنافسين — المنافسة بتحسّن الأسعار والخدمة.",
          tags: ["Network of Networks", "Network Structure 2"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "How many tier-1 ISPs exist approximately?",
          options: ["About 5", "About a dozen", "About 100", "About 1000"],
          correct: 1,
          translation: "كم عدد مزوّدي الطبقة الأولى (Tier-1) تقريباً؟",
          explanation:
            "حوالي دستة (12 تقريباً) — قلة قليلة من المزوّدين العالميين بيمثلوا قمة الهرم.",
          tags: ["Network of Networks", "Tier-1 ISPs"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "Which of the following is NOT an example of a tier-1 ISP?",
          options: ["Level 3 Communications", "AT&T", "Sprint", "Google"],
          correct: 3,
          translation: "أي مما يلي ليس مثالاً على مزوّد Tier-1؟",
          explanation:
            "Google شركة محتوى، مش مزوّد Tier-1. باقي الاختيارات مزوّدون عالميون تقليديون.",
          tags: ["Network of Networks", "Tier-1 ISPs"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "In Network Structure 3, what connects access ISPs in a region?",
          options: [
            "Global ISPs directly",
            "Regional ISPs that connect to tier-1 ISPs",
            "Peering points only",
            "Content providers",
          ],
          correct: 1,
          translation:
            "في بنية الشبكة 3، ما الذي يربط مزوّدي الوصول في المنطقة؟",
          explanation:
            "مزوّدو خدمة إقليميون بيتصلوا بـ Tier-1 — طبقة وسيطة بين الوصول والمستوى العالمي.",
          tags: ["Network of Networks", "Network Structure 3"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What is a PoP (Point of Presence)?",
          options: [
            "A protocol over protocol",
            "A group of one or more routers in the provider's network where customer ISPs can connect",
            "A packet of packets",
            "A point of peering between end systems",
          ],
          correct: 1,
          translation: "ما هو PoP؟",
          explanation:
            "مجموعة من الموجّهات في شبكة المزوّد حيث يمكن لمزوّدي الوصول الاتصال — نقطة دخول الشبكة.",
          tags: ["Network of Networks", "PoP"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What is multi-homing?",
          options: [
            "Connecting to a single provider ISP",
            "Connecting to two or more provider ISPs",
            "Using a single link for redundancy",
            "Having no redundancy",
          ],
          correct: 1,
          translation: "ما هو Multi-homing؟",
          explanation:
            "الاتصال بأكثر من مزوّد — بيدي مرونة واستمرارية في الخدمة لو حصل عطل.",
          tags: ["Network of Networks", "Multi-homing"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What is the primary benefit of multi-homing?",
          options: [
            "Lower cost",
            "Faster speed",
            "Continued sending and receiving of packets even if one provider fails",
            "Better security",
          ],
          correct: 2,
          translation: "ما الفائدة الأساسية للـ Multi-homing؟",
          explanation:
            "الاستمرارية في الإرسال والاستقبال حتى لو فشل مزوّد — مرونة تشغيلية عالية.",
          tags: ["Network of Networks", "Multi-homing"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What does it mean for two ISPs to peer?",
          options: [
            "They pay each other for traffic",
            "They directly connect their networks so traffic passes over the direct connection, settlement-free",
            "They connect only through tier-1 ISPs",
            "They use end systems to communicate",
          ],
          correct: 1,
          translation: "ماذا يعني أن يقوم مزوّدان بالـ Peering؟",
          explanation:
            "اتصال مباشر بين شبكاتهم بدون مقابل مالي — بيوفّر تكلفة النقل عبر المزوّدين العالميين.",
          tags: ["Network of Networks", "Peering"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What is an IXP?",
          options: [
            "Internet Exchange Point — a meeting point where multiple ISPs can peer together",
            "ISP Expansion Protocol",
            "Internal Exchange Protocol",
            "Internet Xylem Point",
          ],
          correct: 0,
          translation: "ما هو IXP؟",
          explanation:
            "نقطة تبادل إنترنت — مكان بيتجمع فيه عدة مزوّدين للـ Peering في موقع واحد.",
          tags: ["Network of Networks", "IXP"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "What does Network Structure 5 add on top of Network Structure 4?",
          options: [
            "Only access ISPs",
            "Content-provider networks like Google",
            "More regional ISPs",
            "End systems",
          ],
          correct: 1,
          translation: "ما الذي تضيفه بنية الشبكة 5 فوق بنية الشبكة 4؟",
          explanation:
            "شبكات مزوّدي المحتوى (زي Google) — بقت لاعبين رئيسيين في بنية الإنترنت الحديثة.",
          tags: [
            "Network of Networks",
            "Network Structure 5",
            "Content Providers",
          ],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          q: "How does Google bypass upper tiers of the Internet?",
          options: [
            "Using only the public Internet",
            "Peering with lower-tier ISPs and connecting at IXPs",
            "Paying all tier-1 ISPs",
            "Using satellite links only",
          ],
          correct: 1,
          translation: "كيف تتجاوز Google الطبقات العليا؟",
          explanation:
            "بالـ Peering مع مزوّدي المستوى الأدنى والاتصال عند IXPs — بتوفر تكلفة وبتخسّن الأداء.",
          tags: ["Network of Networks", "Content Providers", "Google"],
          ref: "Lecture 2 — Section 1.3.3",
        },

        // ═══════════════════════════════════════════════════════
        // القسم 3: تأخيرات العُقد (Nodal Delays)
        // ═══════════════════════════════════════════════════════
        {
          q: "What are the four types of nodal delays?",
          options: [
            "Processing, queuing, transmission, propagation",
            "Packet, message, segment, frame",
            "Link, route, path, switch",
            "Header, payload, buffer, bit",
          ],
          correct: 0,
          translation: "ما أنواع تأخيرات العُقد الأربعة؟",
          explanation:
            "معالجة (Processing) + انتظار (Queuing) + إرسال (Transmission) + انتشار (Propagation) — أساس تحليل أداء الشبكات.",
          tags: ["Delay", "Nodal Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What is included in processing delay?",
          options: [
            "Transmitting bits into the link",
            "Examining the packet's header and determining where to direct the packet",
            "Waiting in the queue",
            "Propagating over the link",
          ],
          correct: 1,
          translation: "ما الذي يتضمنه تأخير المعالجة؟",
          explanation:
            "فحص ترويسة الحزمة وتحديد المسار — ممكن يشمل كشف الأخطاء على مستوى البت.",
          tags: ["Delay", "Processing Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "Processing delays in high-speed routers are typically on the order of:",
          options: [
            "Seconds",
            "Milliseconds",
            "Microseconds or less",
            "Minutes",
          ],
          correct: 2,
          translation:
            "تأخيرات المعالجة في الموجّهات عالية السرعة عادةً في حدود:",
          explanation:
            "ميكروثانية أو أقل — بفضل العتاد المتخصص (ASICs) اللي بيعالج الحزم بسرعة فائقة.",
          tags: ["Delay", "Processing Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What causes variable queuing delays?",
          options: [
            "Fixed buffer size",
            "The number of earlier-arriving packets queued and waiting for transmission",
            "Constant arrival rate",
            "Propagation speed",
          ],
          correct: 1,
          translation: "ما سبب تأخيرات الانتظار المتغيرة؟",
          explanation:
            "عدد الحزم اللي وصلت قبلها وبتنتظر الإرسال — كل ما الطابور أطول، الانتظار أطول.",
          tags: ["Delay", "Queuing Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "Queuing delays can be on the order of:",
          options: [
            "Microseconds to milliseconds",
            "Seconds to minutes",
            "Hours",
            "Nanoseconds only",
          ],
          correct: 0,
          translation: "تأخيرات الانتظار ممكن تكون في حدود:",
          explanation:
            "من ميكروثانية لميللي ثانية — حسب الازدحام. في أوقات الذروة بتبقى أعلى بكتير.",
          tags: ["Delay", "Queuing Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What is transmission delay?",
          options: [
            "Time to propagate the signal",
            "L/R, the time required to push all of the packet's bits into the link",
            "Queue wait time",
            "Header processing time",
          ],
          correct: 1,
          translation: "ما هو تأخير الإرسال؟",
          explanation:
            "L/R — الوقت اللازم لدفع كل بتات الحزمة للرابط. L = طول الحزمة، R = معدل الإرسال.",
          tags: ["Delay", "Transmission Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What is propagation delay?",
          options: [
            "d/s, distance divided by propagation speed",
            "Time in queue",
            "Bit pushing time",
            "Error checking time",
          ],
          correct: 0,
          translation: "ما هو تأخير الانتشار؟",
          explanation:
            "d/s — المسافة مقسومة على سرعة الانتشار. بيعتمد على المسافة الفيزيائية وسرعة الإشارة في الوسط.",
          tags: ["Delay", "Propagation Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "The propagation speed in a link is in the range of:",
          options: [
            "2×10^6 to 3×10^6 meters/sec",
            "2×10^8 to 3×10^8 meters/sec",
            "2×10^10 to 3×10^10 meters/sec",
            "2×10^4 to 3×10^4 meters/sec",
          ],
          correct: 1,
          translation: "سرعة الانتشار في الرابط في حدود:",
          explanation:
            "2×10^8 إلى 3×10^8 م/ث — قريبة من سرعة الضوء، وبتعتمد على الوسط (ألياف، نحاس، إلخ).",
          tags: ["Delay", "Propagation Delay", "Propagation Speed"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What is the formula for total nodal delay?",
          options: [
            "d_proc + d_queue + d_trans + d_prop",
            "L/R only",
            "N-1",
            "Traffic intensity",
          ],
          correct: 0,
          translation: "ما معادلة التأخير الكلي للعقدة؟",
          explanation:
            "d_proc + d_queue + d_trans + d_prop — مجموع التأخيرات الأربعة. أساس تحليل أداء الشبكة.",
          tags: ["Delay", "Nodal Delay", "Formula"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "Which delay component can be the dominant term for a geostationary satellite link?",
          options: [
            "Processing delay",
            "Queuing delay",
            "Transmission delay",
            "Propagation delay",
          ],
          correct: 3,
          translation:
            "أي مكوّن تأخير ممكن يكون المسيطر في رابط قمر صناعي ثابت؟",
          explanation:
            "تأخير الانتشار — المسافة الكبيرة (36,000 كم) بتخلي تأخير الانتشار مهيمن (حوالي 280 مللي ثانية).",
          tags: ["Delay", "Propagation Delay", "Satellite"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What is traffic intensity?",
          options: [
            "La/R, arrival rate times packet length divided by transmission rate",
            "End-to-end delay",
            "Packet loss probability",
            "Throughput",
          ],
          correct: 0,
          translation: "ما هي كثافة الترافيك؟",
          explanation:
            "La/R — متوسط معدل الوصول × طول الحزمة ÷ معدل الإرسال. مقياس رئيسي لتحديد ازدحام الشبكة.",
          tags: ["Delay", "Traffic Intensity"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What happens if traffic intensity > 1?",
          options: [
            "Zero delay",
            "The queue grows without bound and queuing delay approaches infinity",
            "No packet loss",
            "Fixed delay",
          ],
          correct: 1,
          translation: "ماذا يحدث لو كثافة الترافيك > 1؟",
          explanation:
            "الطابور بينمو بلا حدود وتأخير الانتظار يقترب من اللانهاية — النظام غير مستقر والانهيار حتمي.",
          tags: ["Delay", "Traffic Intensity"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "As traffic intensity approaches 1, what happens to average queuing delay?",
          options: [
            "Decreases",
            "Increases rapidly",
            "Stays constant",
            "Becomes zero",
          ],
          correct: 1,
          translation:
            "كلما اقتربت كثافة الترافيك من 1، ماذا يحدث لمتوسط تأخير الانتظار؟",
          explanation:
            "بيزيد بسرعة — سلوك غير خطي. الاقتراب من 1 معناه اقتراب النظام من الانهيار.",
          tags: ["Delay", "Queuing Delay", "Traffic Intensity"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What is the golden rule of traffic engineering?",
          options: [
            "Design your system so that traffic intensity is no greater than 1",
            "Always use circuit switching",
            "Maximize packet size",
            "Minimize propagation delay",
          ],
          correct: 0,
          translation: "ما القاعدة الذهبية في هندسة الترافيك؟",
          explanation:
            "صمّم نظامك بحيث كثافة الترافيك ما تتعداش 1 — عشان تضمن استقرار النظام.",
          tags: ["Delay", "Traffic Intensity", "Design"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What causes packet loss in real queues?",
          options: [
            "Infinite capacity",
            "Finite buffer space leading to drops when a packet arrives at a full queue",
            "No queuing",
            "Automatic retransmission",
          ],
          correct: 1,
          translation: "ما سبب فقدان الحزم في الطوابير الحقيقية؟",
          explanation:
            "سعة المخزن المحدودة — لما الطابور يمتلئ، الحزم الجديدة بتُسقَط، وده بيعني إعادة إرسال.",
          tags: ["Packet Loss", "Queuing"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "For N-1 routers, the uncongested end-to-end delay is:",
          options: [
            "N(d_proc + d_trans + d_prop)",
            "(N-1)(d_proc + d_trans + d_prop)",
            "L/R",
            "d_queue only",
          ],
          correct: 0,
          translation:
            "لـ N-1 من الموجّهات، التأخير من طرف لطرف بدون ازدحام هو:",
          explanation:
            "N × (d_proc + d_trans + d_prop) — N روابط، كل رابط بيضيف تأخيرات المعالجة والإرسال والانتشار.",
          tags: ["Delay", "End-to-End Delay"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          q: "What does Traceroute measure?",
          options: [
            "Throughput",
            "Delays to routers along the path",
            "Packet loss only",
            "Bandwidth",
          ],
          correct: 1,
          translation: "ماذا يقيس Traceroute؟",
          explanation:
            "التأخيرات لكل موجّه على المسار — أداة تشخيصية بتوضح المسار والتأخيرات لحد الوجهة.",
          tags: ["Traceroute", "Delay Measurement"],
          ref: "Lecture 2 — Section 1.4",
        },

        // ═══════════════════════════════════════════════════════
        // Essay (5 أسئلة)
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Explain the four components of packet delay in detail.",
          translation: "اشرح مكونات تأخير الحزمة الأربعة بالتفصيل.",
          answer:
            "1) Processing Delay:\n" +
            "   The time required to examine the packet's header and determine where to direct the packet. " +
            "It can also include time needed to check for bit-level errors. Typically on the order of microseconds or less.\n\n" +
            "2) Queuing Delay:\n" +
            "   The time a packet waits in the queue before being transmitted onto the link. " +
            "Depends on the number of earlier-arriving packets queued. Can range from zero to milliseconds.\n\n" +
            "3) Transmission Delay:\n" +
            "   The time required to push all of the packet's bits into the link. " +
            "Formula: L/R, where L is packet length in bits and R is transmission rate in bits/sec.\n\n" +
            "4) Propagation Delay:\n" +
            "   The time required for a bit to propagate from the beginning of the link to the next router. " +
            "Formula: d/s, where d is distance and s is propagation speed (2×10^8 to 3×10^8 m/s).",
          tags: ["Delay", "Packet Switching", "Performance"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          type: "essay",
          q: "Compare and contrast circuit switching and packet switching.",
          translation: "قارن بين تبديل الدوائر وتبديل الحزم.",
          answer:
            "Circuit Switching:\n" +
            "- Resources (buffers, link transmission rate) are reserved for the duration of the communication session.\n" +
            "- Traditional telephone networks are examples.\n" +
            "- Uses FDM or TDM for multiplexing.\n" +
            "- Guarantees consistent performance but wastes resources during silent periods.\n" +
            "- Analogy: A restaurant that requires reservations.\n\n" +
            "Packet Switching:\n" +
            "- Resources are NOT reserved; they are shared on demand.\n" +
            "- The Internet is the primary example.\n" +
            "- Offers better sharing of transmission capacity.\n" +
            "- Simpler, more efficient, and less costly to implement.\n" +
            "- Suffers from variable and unpredictable queuing delays.\n" +
            "- Analogy: A restaurant that does not require reservations.\n\n" +
            "Trend: Telecommunication networks are migrating toward packet switching.",
          tags: ["Circuit Switching", "Packet Switching", "Comparison"],
          ref: "Lecture 2 — Section 1.3.2",
        },
        {
          type: "essay",
          q: "Describe the five network structures that lead to today's Internet.",
          translation: "صِف بنى الشبكات الخمس التي أدت إلى الإنترنت اليوم.",
          answer:
            "Network Structure 1:\n" +
            "- All access ISPs interconnected via a single global transit ISP.\n" +
            "- Access ISP is customer; global transit ISP is provider.\n\n" +
            "Network Structure 2:\n" +
            "- Multiple competing global transit ISPs.\n" +
            "- Access ISPs can choose among providers based on pricing and services.\n" +
            "- Two-tier hierarchy: global transit providers (top) and access ISPs (bottom).\n\n" +
            "Network Structure 3:\n" +
            "- Adds regional ISPs between access ISPs and tier-1 ISPs.\n" +
            "- Multi-tier hierarchy with customer-provider relationships at each level.\n" +
            "- Tier-1 ISPs do not pay anyone.\n\n" +
            "Network Structure 4:\n" +
            "- Adds PoPs, multi-homing, peering, and IXPs.\n" +
            "- Peering is settlement-free between nearby ISPs at the same level.\n" +
            "- Multi-homing provides redundancy.\n\n" +
            "Network Structure 5:\n" +
            "- Adds content-provider networks (e.g., Google).\n" +
            "- Content providers peer with lower-tier ISPs and connect to tier-1 ISPs.\n" +
            "- Describes today's Internet.",
          tags: ["Network of Networks", "Internet Structure", "ISPs"],
          ref: "Lecture 2 — Section 1.3.3",
        },
        {
          type: "essay",
          q: "Explain the concept of traffic intensity and its effect on queuing delay.",
          translation: "اشرح مفهوم كثافة الترافيك وتأثيره على تأخير الانتظار.",
          answer:
            "Traffic intensity is defined as La/R, where:\n" +
            "- L = packet length (bits)\n" +
            "- a = average packet arrival rate (packets/sec)\n" +
            "- R = transmission rate (bits/sec)\n\n" +
            "Effects:\n" +
            "1) If La/R > 1: The arrival rate exceeds the transmission rate. " +
            "The queue grows without bound and queuing delay approaches infinity.\n\n" +
            "2) If La/R ≤ 1: The system is stable.\n" +
            "   - If La/R ≈ 0: Packet arrivals are few and far between; average queuing delay is close to zero.\n" +
            "   - As La/R approaches 1: Average queuing delay increases rapidly.\n\n" +
            "Golden Rule: Design your system so that traffic intensity is no greater than 1.",
          tags: ["Traffic Intensity", "Queuing Delay", "Performance"],
          ref: "Lecture 2 — Section 1.4",
        },
        {
          type: "essay",
          q: "What is the difference between transmission delay and propagation delay?",
          translation: "ما الفرق بين تأخير الإرسال وتأخير الانتشار؟",
          answer:
            "Transmission Delay:\n" +
            "- The time required to push all of the packet's bits into the link.\n" +
            "- Formula: L/R (packet length / transmission rate).\n" +
            "- Depends on packet size and link transmission rate.\n" +
            "- Typically microseconds to milliseconds.\n\n" +
            "Propagation Delay:\n" +
            "- The time required for a single bit to travel from the beginning of the link to the next router.\n" +
            "- Formula: d/s (distance / propagation speed).\n" +
            "- Depends on physical distance and medium (fiber, copper, etc.).\n" +
            "- Propagation speed is 2×10^8 to 3×10^8 m/s.\n" +
            "- In wide-area networks, on the order of milliseconds.\n\n" +
            "Key Difference: Transmission delay is about pushing bits into the link; " +
            "propagation delay is about the bit traveling across the link.",
          tags: ["Transmission Delay", "Propagation Delay", "Comparison"],
          ref: "Lecture 2 — Section 1.4",
        },
      ],
    },
    {
      t: "المحاضرة الثالثة — الفصل الأول (الجزء 3 والأخير): Throughput, Protocol Layers, Security & History",
      d: "الـ Throughput والـ bottleneck، طبقات بروتوكولات الإنترنت والـ encapsulation، هجمات الشبكات، وتاريخ الإنترنت.",
      id: "computer-networks-lecture-03",
      pdf: "datenew/subjects/computer-networks/lectures/lec 3/Ch01 - Computer Networks - Lec 03.pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/Ch01/Lecture-03-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم المحاضرة الثالثة: إنتاجية البيانات (Throughput)، طبقات البروتوكول في شبكات الحاسوب، والتغليف (Encapsulation).",
          links: [
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي تفصيلي لكتاب Kurose & Ross: يتناول Throughput، الطبقات الخمس في الإنترنت (Protocol Layers)، وعملية التغليف (Encapsulation) فديوهات (من 6 الي 7).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي لكتاب Kurose & Ross: يتناول Throughput وطبقات البروتوكول والإنتاجية في الشبكات. [فيديوهات 4-7 ]",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLYljoJMAPFLHrCVfzuMLkJOZHhCgfSXG-&si=c2A3_89g912REXOZ",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "المحاضرات الرسمية المحددة بدقة من مؤلف الكتاب Jim Kurose والمطابقة لموضوعات المحاضرة الثالثة",
          links: [
            {
              t: "Jim Kurose - Section 1.4.4: Throughput",
              d: "الشرح المباشر لمؤلف الكتاب لمفهوم إنتاجية البيانات (Throughput) والروابط والاختناقات (Bottleneck Links)[cite: 1, 3, 5]",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة مباشرة (Throughput)",
                  url: "https://www.youtube.com/watch?v=hm1y4LsphQQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Jim Kurose - Section 1.5: Protocol Layers, Service Models, and Encapsulation",
              d: "شرح طبقات البروتوكول في الإنترنت (Application, Transport, Network, Link, Physical) وعملية التغليف (Encapsulation)[cite: 13, 16, 26]",
              icon: "🌍",
              actions: [
                {
                  label: "📖 Playlist كامل",
                  url: "https://www.youtube.com/playlist?list=PL1ya5dD_M8uX-BLUF1FEvUNsYWQL5_l0O",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مراجع أكاديمية وتطبيقية متوافقة مع مفاهيم Throughput وطبقات البروتوكول وتغليف البيانات",
          links: [
            {
              t: "Kurose & Ross Official Student Resources",
              d: "الموقع الرسمي للكتاب: شرائح PowerPoint للمحاضرة الثالثة، تمارين Wireshark Labs، ومراجعة طبقات الشبكة",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://gaia.cs.umass.edu/kurose_ross/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Throughput in Computer Networks",
              d: "مقالة مرجعية تفصيلية تشرح قياسات Throughput والروابط الحاكمة (Bottleneck Links)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-networks/throughput-in-computer-networks/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Layers of OSI Reference Model",
              d: "شرح طبقات نموذج الاتصال وهيكل تكديس البروتوكولات (Protocol Stack)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/layers-of-osi-model/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية لتحليل الحزم وتتبع طبقات الشبكة عبر برمجيات التحليل الحية",
          links: [
            {
              t: "Wireshark - Packet Analyzer & Traceroute",
              d: "أداة تتبع الحزم وفحص طبقات بيانات الشبكة (Headers and Payloads) لمراقبة الأداء والاتصال",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        {
          q: "1. What is a bottleneck link?",
          options: [
            "The link with the highest transmission rate on the path",
            "The link that connects the router to the server only",
            "The link on the end-to-end path that constrains the end-to-end throughput",
            "Any link that has no traffic flowing through it",
          ],
          correct: 2,
          translation: "ما هو الـ bottleneck link؟",
          explanation:
            "الـ bottleneck هو الرابط الذي يحدّ من الـ throughput الكلي في المسار. ليس الأسرع ولا الفارغ من الحركة.",
          tags: ["Bottleneck Link"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          q: "2. A server is connected to a client through one router. The server-router link rate is Rs and the router-client link rate is Rc. What is the throughput when there is no other traffic?",
          options: ["min{Rs, Rc}", "Rs + Rc", "max{Rs, Rc}", "Rs × Rc"],
          correct: 0,
          translation:
            "سيرفر متصل بعميل عبر راوتر، معدل الرابط الأول Rs والثاني Rc. كم الـ throughput بدون أي حركة أخرى؟",
          explanation:
            "الـ throughput هو معدل الرابط الأبطأ، أي min{Rs, Rc}. الجمع أو الضرب أو الأكبر لا يمثل عنق الزجاجة.",
          tags: ["Throughput"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          q: "3. For a path with N links of rates R1, R2, ..., RN, the end-to-end throughput is:",
          options: [
            "The average of R1 to RN",
            "R1 + R2 + ... + RN",
            "RN only",
            "min{R1, R2, ..., RN}",
          ],
          correct: 3,
          translation:
            "لمسار فيه N رابط بمعدلات R1 إلى RN، الـ throughput الكلي هو:",
          explanation:
            "الرابط الأبطأ في المسار هو من يحدد المعدل الكلي، وليس المتوسط ولا المجموع.",
          tags: ["Throughput", "N Links"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          q: "4. According to the lecture, what is typically the constraining factor for throughput in today's Internet?",
          options: [
            "The Internet core",
            "The access network",
            "The routing protocol",
            "The size of the IP header",
          ],
          correct: 1,
          translation:
            "حسب المحاضرة، ما العامل المحدِّد للـ throughput في الإنترنت اليوم غالبًا؟",
          explanation:
            "قلب الإنترنت (core) مجهّز بروابط عالية السرعة وقليلة الازدحام، فالقيد يكون عادة في شبكة الوصول (access network).",
          tags: ["Access Network", "Throughput"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          q: "5. In Figure 1.20(b), Rs = 2 Mbps, Rc = 1 Mbps, and the common core link R = 5 Mbps is shared equally by 10 downloads. What is each download's throughput?",
          options: ["1 Mbps", "2 Mbps", "500 kbps", "5 Mbps"],
          correct: 2,
          translation:
            "في الشكل 1.20(b): Rs = 2 وRc = 1 وR = 5 ميجابت/ث تتوزع بالتساوي على 10 تحميلات. كم throughput كل تحميل؟",
          explanation:
            "الرابط المشترك يعطي كل تحميل 5/10 = 0.5 Mbps = 500 kbps وهو أقل من Rs وRc فيصبح هو الـ bottleneck.",
          tags: ["Throughput", "Shared Link"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          q: "6. In layering, a layer provides its service by:",
          options: [
            "Performing actions within the layer and using the services of the layer directly below it",
            "Using the services of the layer directly above it only",
            "Bypassing all other layers",
            "Performing actions in every layer of the stack",
          ],
          correct: 0,
          translation: "في الـ layering، الطبقة تقدّم خدمتها عن طريق:",
          explanation:
            "كل طبقة تنفّذ أعمالًا داخلها وتستخدم خدمات الطبقة التي تحتها مباشرة وتقدّم خدمة للطبقة التي فوقها.",
          tags: ["Layering", "Service Model"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "7. Which is a potential drawback of layering mentioned in the lecture?",
          options: [
            "It makes hardware more expensive",
            "It prevents the use of TCP",
            "It removes the need for protocols",
            "One layer may duplicate lower-layer functionality",
          ],
          correct: 3,
          translation: "أي مما يلي عيب محتمل للـ layering مذكور في المحاضرة؟",
          explanation:
            "من العيوب تكرار وظائف الطبقات السفلى، وأن طبقة قد تحتاج معلومة موجودة في طبقة أخرى مما يكسر فصل الطبقات.",
          tags: ["Layering"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "8. How many layers does the Internet protocol stack have?",
          options: ["Five", "Four", "Six", "Seven"],
          correct: 0,
          translation: "كم عدد طبقات Internet protocol stack؟",
          explanation:
            "المحاضرة: physical وlink وnetwork وtransport وapplication أي خمس طبقات. السبع تخص نموذج OSI.",
          tags: ["Protocol Stack"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "9. Which of the following are application-layer protocols?",
          options: [
            "TCP, UDP and IP",
            "HTTP, SMTP and FTP",
            "Ethernet, WiFi and DOCSIS",
            "PPP, IP and UDP",
          ],
          correct: 1,
          translation: "أي مما يلي بروتوكولات في طبقة التطبيقات؟",
          explanation:
            "HTTP وSMTP وFTP (وDNS) في طبقة التطبيقات. TCP وUDP للنقل وIP للشبكة وEthernet وWiFi للربط.",
          tags: ["Application Layer"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "10. Which service does TCP provide?",
          options: [
            "Connectionless service with no reliability",
            "Routing of datagrams between hosts",
            "Connection-oriented service with guaranteed delivery, flow control and congestion control",
            "Moving individual bits over the medium",
          ],
          correct: 2,
          translation: "أي خدمة يقدّمها TCP؟",
          explanation:
            "TCP يقدّم خدمة موجّهة بالاتصال مع ضمان التسليم والتحكم في التدفق والازدحام. الخدمة بلا اتصال هي UDP.",
          tags: ["TCP", "Transport Layer"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "11. Which statement about UDP is correct?",
          options: [
            "It guarantees delivery of every message",
            "It breaks long messages and throttles the sender",
            "It is a network-layer protocol",
            "It is a no-frills connectionless service with no reliability, flow control or congestion control",
          ],
          correct: 3,
          translation: "أي عبارة عن UDP صحيحة؟",
          explanation:
            "UDP بسيط وبلا اتصال ولا يضمن شيئًا. ضمان التسليم وتقسيم الرسائل والتحكم في الازدحام من خصائص TCP.",
          tags: ["UDP", "Transport Layer"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "12. Which statement about the IP protocol is correct?",
          options: [
            "All Internet components that have a network layer must run the IP protocol",
            "There are several competing IP protocols in the Internet",
            "IP is implemented only in link-layer switches",
            "IP provides reliable end-to-end delivery",
          ],
          correct: 0,
          translation: "أي عبارة عن بروتوكول IP صحيحة؟",
          explanation:
            "يوجد بروتوكول IP واحد فقط وكل مكوّن له network layer لازم يشغّله، ولذلك يسمى IP layer.",
          tags: ["IP", "Network Layer"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "13. How does link-layer reliable delivery differ from TCP's reliable delivery?",
          options: [
            "They are exactly the same service",
            "Link-layer reliability is end-to-end; TCP's is across one link",
            "Link-layer reliability is across one link; TCP's is from one end system to another",
            "Link-layer protocols never provide reliable delivery",
          ],
          correct: 2,
          translation:
            "ما الفرق بين الموثوقية في طبقة الربط والموثوقية في TCP؟",
          explanation:
            "بعض بروتوكولات الربط توفر تسليمًا موثوقًا بين عقدتين على رابط واحد، بينما TCP يوفره بين نظامين طرفيين.",
          tags: ["Link Layer", "TCP"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "14. What is the job of the physical layer?",
          options: [
            "Moving entire frames between adjacent elements",
            "Moving the individual bits within a frame from one node to the next",
            "Translating names to IP addresses",
            "Determining routes between hosts",
          ],
          correct: 1,
          translation: "ما وظيفة الطبقة الفيزيائية؟",
          explanation:
            "الطبقة الفيزيائية تنقل البتات الفردية، أما نقل الإطار كاملًا فمهمة طبقة الربط.",
          tags: ["Physical Layer"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          q: "15. Which layers does a link-layer switch implement?",
          options: [
            "Layers 1 through 3",
            "Layers 1 through 5",
            "Layers 3 and 4",
            "Layers 1 and 2",
          ],
          correct: 3,
          translation: "أي طبقات ينفّذها الـ link-layer switch؟",
          explanation:
            "السويتش ينفذ الطبقتين 1 و2 فقط، والراوتر 1 إلى 3، والـ hosts كل الطبقات الخمس.",
          tags: ["Switch", "Router"],
          ref: "Lecture 03 — Section 1.5.2",
        },

        {
          q: "16. What does the transport-layer segment consist of?",
          options: [
            "The application-layer message plus the transport-layer header",
            "The network-layer datagram plus the link-layer header",
            "Only the transport-layer header",
            "The physical-layer bits only",
          ],
          correct: 0,
          translation: "مم يتكوّن الـ transport-layer segment؟",
          explanation:
            "الـ segment يغلّف رسالة التطبيق (M) مع رأس النقل (Ht). هذه هي الـ encapsulation.",
          tags: ["Encapsulation", "Segment"],
          ref: "Lecture 03 — Section 1.5.2",
        },

        {
          q: "17. What is the network-layer packet called?",
          options: ["Segment", "Datagram", "Frame", "Message"],
          correct: 1,
          translation: "ماذا يسمى حزمة طبقة الشبكة؟",
          explanation:
            "message للتطبيق وsegment للنقل وdatagram للشبكة وframe للربط.",
          tags: ["PDU Names", "Datagram"],
          ref: "Lecture 03 — Section 1.5.1 / 1.5.2",
        },

        {
          q: "18. What is a botnet?",
          options: [
            "A router that blocks malicious traffic",
            "A protocol for encrypting e-mail",
            "A network of thousands of compromised devices controlled by an attacker",
            "A software that records packets passively only",
          ],
          correct: 2,
          translation: "ما هو الـ botnet؟",
          explanation:
            "الـ botnet شبكة من آلاف الأجهزة المصابة يتحكم بها المهاجم لإرسال spam أو هجمات DDoS.",
          tags: ["Botnet", "Malware"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          q: "19. In a DDoS attack against a server with access rate R, what must the aggregate attack traffic be approximately?",
          options: [
            "About R bps",
            "About R / 1000 bps",
            "Exactly zero",
            "Much less than R bps",
          ],
          correct: 0,
          translation:
            "في هجوم DDoS على سيرفر معدل وصوله R، كم يجب أن يكون إجمالي حركة الهجوم تقريبًا؟",
          explanation:
            "يلزم إجمالي حركة من كل المصادر بحدود R لشل الخدمة. الهجوم الموزع أصعب في الكشف من DoS من مصدر واحد.",
          tags: ["DDoS", "Bandwidth Flooding"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          q: "20. Why are packet sniffers difficult to detect?",
          options: [
            "Because they encrypt all packets",
            "Because they run only in wired networks",
            "Because they change the packets' source address",
            "Because they are passive and do not inject packets into the channel",
          ],
          correct: 3,
          translation: "لماذا يصعب اكتشاف الـ packet sniffers؟",
          explanation:
            "الـ sniffer مستقبل سلبي يسجّل نسخًا فقط دون حقن حزم. وأفضل الدفاعات تعتمد على التشفير.",
          tags: ["Packet Sniffer", "Cryptography"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          q: "21. What is IP spoofing?",
          options: [
            "Recording copies of all wireless packets",
            "Injecting packets into the Internet with a false source address",
            "Flooding a server with connection requests",
            "Translating host names into IP addresses",
          ],
          correct: 1,
          translation: "ما هو الـ IP spoofing؟",
          explanation:
            "هو إرسال حزمة بعنوان مصدر مزيّف. الحل المذكور end-point authentication. التسجيل هو sniffing.",
          tags: ["IP Spoofing", "Authentication"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          q: "22. Why did the Internet become such an insecure place?",
          options: [
            "Because it was designed without any layers",
            "Because TCP was never part of it",
            "It was originally designed for a group of mutually trusting users on a transparent network",
            "Because it was built only for wireless devices",
          ],
          correct: 2,
          translation: "لماذا أصبح الإنترنت مكانًا غير آمن؟",
          explanation:
            "التصميم الأصلي افترض مستخدمين يثق بعضهم ببعض فلا حاجة للأمن، وهذا لم يعد صحيحًا اليوم.",
          tags: ["Security", "Internet History"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          q: "23. What was the first packet-switched computer network and a direct ancestor of today's Internet?",
          options: ["ARPAnet", "Minitel", "Netscape", "Napster"],
          correct: 0,
          translation:
            "ما أول شبكة حاسبات بتبديل الحزم وسلف مباشر للإنترنت اليوم؟",
          explanation:
            "ARPAnet أول شبكة packet-switched. Minitel مشروع فرنسي، وNetscape متصفح، وNapster لمشاركة الملفات.",
          tags: ["ARPAnet", "History"],
          ref: "Lecture 03 — Section 1.7.1",
        },

        {
          q: "24. On January 1, 1983, what was officially deployed as the new standard host protocol for ARPAnet, replacing NCP?",
          options: ["HTTP", "DNS", "Ethernet", "TCP/IP"],
          correct: 3,
          translation:
            "في 1 يناير 1983 ما الذي تم نشره رسميًا كبروتوكول قياسي جديد لـ ARPAnet بدل NCP؟",
          explanation:
            "الانتقال من NCP إلى TCP/IP كان flag day أي كل الأجهزة انتقلت في نفس اليوم.",
          tags: ["TCP/IP", "History"],
          ref: "Lecture 03 — Section 1.7.3",
        },

        {
          q: "25. Which are the four key components of the Web developed by Berners-Lee and his associates?",
          options: [
            "HTML, HTTP, a Web server and a browser",
            "TCP, UDP, IP and DNS",
            "E-mail, chat, FTP and P2P",
            "Router, switch, hub and modem",
          ],
          correct: 0,
          translation:
            "ما المكوّنات الأربعة للـ Web التي طوّرها Berners-Lee وزملاؤه؟",
          explanation:
            "المحاضرة تذكر HTML وHTTP وسيرفر ويب ومتصفح. باقي الاختيارات ليست مكوّنات الـ Web.",
          tags: ["World Wide Web", "History"],
          ref: "Lecture 03 — Section 1.7.4",
        },

        {
          type: "essay",
          q: "1. Explain end-to-end throughput and the bottleneck link for a two-link path and for an N-link path.",
          translation:
            "اشرح الـ throughput والـ bottleneck link لمسار من رابطين ولمسار من N رابط.",
          answer:
            "Throughput is a critical performance measure besides delay and packet loss.\n" +
            "Two links (Rs, Rc): throughput = min{Rs, Rc}. If Rc < Rs the router backlog grows.\n" +
            "N links: throughput = min{R1, R2, ..., RN}, the rate of the bottleneck link.\n" +
            "File transfer time is approximately F / min{rates}.\n",
          tags: ["Throughput", "Bottleneck"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          type: "essay",
          q: "2. Why is the access network typically the throughput bottleneck, and how can intervening traffic change the throughput?",
          translation:
            "لماذا تكون شبكة الوصول عادة هي الـ bottleneck؟ وكيف تغيّر الحركة الأخرى الـ throughput؟",
          answer:
            "The Internet core is over-provisioned with high-speed links that experience little congestion, so throughput = min{Rs, Rc}.\n" +
            "With 10 downloads sharing a core link of rate R, each gets about R/10 if the link divides rate equally.\n" +
            "So a high-rate link can still be the bottleneck if many flows pass through it.\n",
          tags: ["Access Network", "Shared Link"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          type: "essay",
          q: "3. Explain protocol layering: the service model, how layers are implemented, and its drawbacks.",
          translation:
            "اشرح الـ layering: الـ service model وكيف تُنفّذ الطبقات وعيوبه.",
          answer:
            "Layers give structure to protocol design; each layer offers a service to the layer above (service model).\n" +
            "Each layer acts within itself and uses the services of the layer below.\n" +
            "Application and transport layers are in software in end systems; physical and link layers in the network interface card; network layer is mixed.\n" +
            "Drawbacks: duplicated lower-layer functionality, and a layer may need information from another layer.\n",
          tags: ["Layering"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          type: "essay",
          q: "4. Describe the five layers of the Internet protocol stack and the name of the packet at each layer.",
          translation:
            "صف الطبقات الخمس في Internet protocol stack واسم الحزمة في كل طبقة.",
          answer:
            "Application: HTTP, SMTP, FTP, DNS; packet = message.\n" +
            "Transport: TCP and UDP; packet = segment.\n" +
            "Network: IP and routing protocols; packet = datagram.\n" +
            "Link: Ethernet, WiFi, DOCSIS, PPP; packet = frame.\n" +
            "Physical: moves individual bits, depends on the medium (copper, fiber).\n",
          tags: ["Protocol Stack", "PDU Names"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          type: "essay",
          q: "5. Compare TCP and UDP.",
          translation: "قارن بين TCP وUDP.",
          answer:
            "TCP is connection-oriented: guaranteed delivery, flow control, breaks long messages into segments, congestion control.\n" +
            "UDP is connectionless and no-frills: no reliability, no flow control, no congestion control.\n" +
            "Both transport application-layer messages; the transport packet is called a segment.\n",
          tags: ["TCP", "UDP"],
          ref: "Lecture 03 — Section 1.5.1",
        },

        {
          type: "essay",
          q: "6. Explain encapsulation and which layers hosts, routers and link-layer switches implement.",
          translation:
            "اشرح الـ encapsulation وأي طبقات تنفذها الـ hosts والراوترات والسويتشات.",
          answer:
            "Hosts implement all five layers; routers layers 1 to 3; link-layer switches layers 1 and 2.\n" +
            "Transport adds header Ht to message M to form a segment.\n" +
            "Network adds Hn to form a datagram; link adds Hl to form a frame.\n" +
            "At each layer a packet has header fields and a payload, usually the packet from the layer above.\n",
          tags: ["Encapsulation"],
          ref: "Lecture 03 — Section 1.5.2",
        },

        {
          type: "essay",
          q: "7. Describe the three categories of DoS attacks and explain DDoS.",
          translation: "صف أنواع هجمات DoS الثلاثة واشرح DDoS.",
          answer:
            "DoS makes a network, host or infrastructure unusable by legitimate users.\n" +
            "Categories: vulnerability attack, bandwidth flooding, connection flooding.\n" +
            "DDoS: the attacker controls many sources (often a botnet) so aggregate traffic is about R.\n" +
            "DDoS is much harder to detect and defend against than DoS from a single host.\n",
          tags: ["DoS", "DDoS"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          type: "essay",
          q: "8. Explain malware, botnets, packet sniffing and IP spoofing, and how to defend against them.",
          translation:
            "اشرح الـ malware والـ botnet والـ packet sniffing والـ IP spoofing وطرق الدفاع.",
          answer:
            "Malware infects hosts, can delete files, install spyware; self-replicating malware spreads exponentially fast.\n" +
            "Compromised hosts form a botnet used for spam and DDoS.\n" +
            "A packet sniffer passively records packets and is hard to detect; cryptography is a main defense.\n" +
            "IP spoofing sends packets with a false source address; end-point authentication is needed.\n",
          tags: ["Malware", "Sniffing", "Spoofing"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          type: "essay",
          q: "9. Why was the Internet originally insecure?",
          translation: "لماذا كان الإنترنت غير آمن في الأصل؟",
          answer:
            "It was designed around a group of mutually trusting users attached to a transparent network, so security was not needed.\n" +
            "Today's users may not trust each other, may communicate through third parties, and may distrust hardware and software.\n" +
            "Communication among mutually trusted users is the exception rather than the rule.\n",
          tags: ["Security"],
          ref: "Lecture 03 — Section 1.6",
        },

        {
          type: "essay",
          q: "10. Summarize the main stages in the history of the Internet from 1961 to the new millennium.",
          translation:
            "لخّص أهم مراحل تاريخ الإنترنت من 1961 حتى الألفية الجديدة.",
          answer:
            "1961-1972: packet switching invented; ARPAnet, about 15 nodes by 1972; first e-mail program 1972.\n" +
            "1972-1980: TCP, UDP and IP conceptually in place by the end of the 1970s.\n" +
            "1980-1990: TCP/IP deployed on January 1, 1983; DNS developed.\n" +
            "1990s: the Web (HTML, HTTP, server, browser); killer apps e-mail, Web, instant messaging, P2P.\n" +
            "2000s: broadband, video apps, wireless devices passed wired in 2011, social networks, cloud.\n",
          tags: ["History"],
          ref: "Lecture 03 — Section 1.7",
        },

        {
          type: "essay",
          q: "11. A server is connected to a client through one router. Rs = 5 Mbps, Rc = 2 Mbps, and there is no other traffic. Find the throughput and the time to transfer a file of F = 10 MB (1 MB = 8 Mb).",
          translation:
            "سيرفر وعميل وراوتر: Rs = 5 وRc = 2 ميجابت/ث ولا توجد حركة أخرى. أوجد الـ throughput وزمن نقل ملف 10 ميجابايت.",
          answer:
            "Formula: throughput = min{Rs, Rc}; time = F / throughput.\n" +
            "Throughput = min{5, 2} = 2 Mbps (bottleneck is the router-client link).\n" +
            "F = 10 MB x 8 = 80 Mb.\n" +
            "Time = 80 / 2 = 40 seconds.\n",
          tags: ["Throughput", "Calculation"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          type: "essay",
          q: "12. A path has 4 links with rates R1 = 10, R2 = 4, R3 = 8 and R4 = 6 Mbps. Find the throughput and the time to send a file of 20 Mb.",
          translation:
            "مسار من 4 روابط معدلاتها 10 و4 و8 و6 ميجابت/ث. أوجد الـ throughput وزمن إرسال ملف 20 ميجابت.",
          answer:
            "Formula: throughput = min{R1, ..., RN}.\n" +
            "Throughput = min{10, 4, 8, 6} = 4 Mbps (R2 is the bottleneck).\n" +
            "Time = F / throughput = 20 / 4 = 5 seconds.\n",
          tags: ["Throughput", "Calculation"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          type: "essay",
          q: "13. Rs = 2 Mbps, Rc = 1 Mbps and a common core link R = 5 Mbps is shared equally by 10 downloads. Find the throughput of each download.",
          translation:
            "Rs = 2 وRc = 1 ورابط مشترك R = 5 ميجابت/ث يتقاسمه 10 تحميلات بالتساوي. أوجد throughput كل تحميل.",
          answer:
            "Share of the common link = R / 10 = 5 / 10 = 0.5 Mbps.\n" +
            "Throughput = min{Rs, Rc, R/10} = min{2, 1, 0.5} = 0.5 Mbps.\n" +
            "= 500 kbps. The bottleneck is the shared core link.\n",
          tags: ["Shared Link", "Calculation"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          type: "essay",
          q: "14. Same setup with 10 downloads, but Rs = 3 Mbps, Rc = 1.5 Mbps and the common link R = 20 Mbps. Find the throughput of each download and identify the bottleneck.",
          translation:
            "نفس الوضع مع 10 تحميلات لكن Rs = 3 وRc = 1.5 وR = 20 ميجابت/ث. أوجد throughput كل تحميل والـ bottleneck.",
          answer:
            "Share of the common link = 20 / 10 = 2 Mbps.\n" +
            "Throughput = min{3, 1.5, 2} = 1.5 Mbps.\n" +
            "The bottleneck is the client access link (Rc), not the core.\n",
          tags: ["Shared Link", "Calculation"],
          ref: "Lecture 03 — Section 1.4.4",
        },

        {
          type: "essay",
          q: "15. A server has an access rate R = 100 Mbps. In a DDoS attack each zombie sends 2 Mbps. Approximately how many zombies are needed to cripple the service?",
          translation:
            "سيرفر معدل وصوله R = 100 ميجابت/ث. في هجوم DDoS كل zombie يرسل 2 ميجابت/ث. كم zombie تقريبًا يلزم لشل الخدمة؟",
          answer:
            "Principle: aggregate attack traffic must be approximately R.\n" +
            "Number of zombies = R / rate per zombie = 100 / 2 = 50.\n" +
            "About 50 zombies are needed.\n",
          tags: ["DDoS", "Calculation"],
          ref: "Lecture 03 — Section 1.6",
        },
      ],
    },
    {
      id: "computer-networks-lecture-04",
      t: "المحاضرة 4: الفصل الثاني (الجزء الاول )- طبقة التطبيق (مبادئ تطبيقات الشبكة)",
      d: "مبادئ تطبيقات الشبكة: معماريات التطبيقات (Client-Server وP2P)، تواصل الـ processes، الـ sockets، العنونة، وخدمات طبقة النقل المتاحة للتطبيقات.",
      pdf: "datenew/subjects/computer-networks/lectures/lec 4/Ch02 - Computer Networks - Lec 01.pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/Ch02/Ch02-Lecture-01-Questions.pdf",
      // محاضرة شبكات الحاسوب: الفصل الثاني - طبقة التطبيقات (Application Layer)، هندسة التطبيقات، العمليات، الـ Sockets، وخدمات طبقة النقل
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لكتاب Kurose & Ross تغطي الفصل الثاني: طبقة التطبيقات، مبادئ تطبيقات الشبكة، هندسة العملاء والخوادم ونظام P2P.",
          links: [
            {
              t: "Computer Networking - Chapter 2 Application Layer 2A & 2B",
              d: "شرح عربي تفصيلي لكتاب Kurose & Ross: يتناول مبادئ تطبيقات الشبكة، هندسة التطبيقات (Client-Server و P2P)، والعمليات (Processes)  [ فيديوهات من 8 الي 9 الدقيقة 18 :50 ].",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=Ygax_GQvrW4&list=PLYljoJMAPFLHrCVfzuMLkJOZHhCgfSXG-&index=8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي تفصيلي لكتاب Kurose & Ross: يتناول Throughput، الطبقات الخمس في الإنترنت (Protocol Layers)، وعملية التغليف (Encapsulation) [فيديو  8 لحد الدقيقة 27 و 50ثانيه ].",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=LF5VyQqG4mA&list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo&index=8",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "المحاضرات الرسمية المحددة بدقة من مؤلف الكتاب Jim Kurose حول مفاهيم طبقة التطبيقات والعمليات والـ Sockets.",
          links: [
            {
              t: "Jim Kurose - 2.1 Principles of the Application Layer",
              d: "الشرح المباشر لمؤلف الكتاب لمبادئ تطبيقات الشبكة، هندسة التطبيقات (Client-Server و P2P)، وكيفية تواصل العمليات والـ Sockets.",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة مباشرة",
                  url: "https://www.youtube.com/watch?v=abeupgK5z48",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Jim Kurose - 2.2 The Web and HTTP (part 1)",
              d: "شرح تفصيلي لتطبيق الويب وبروتوكول HTTP وعلاقة العمليات بين المتصفح والخادم عبر واجهة برمجة التطبيقات (Sockets).",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 متابعة الشرح",
                  url: "https://www.youtube.com/watch?v=S9GEPaQ1lFs",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مراجع أكاديمية ومواقع رسمية تغطي مفاهيم طبقة التطبيقات، عناوين IP والمنافذ (Ports)، والبرمجيات.",
          links: [
            {
              t: "Kurose & Ross Official Student Resources",
              d: "الموقع الرسمي للكتاب: شرائح PowerPoint للفصل الثاني، تمارين Wireshark Labs، وملخصات مفاهيم طبقة التطبيقات.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://gaia.cs.umass.edu/kurose_ross/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Application Layer Protocols",
              d: "مقالة مرجعية تفصيلية تشرح دور طبقة التطبيقات والبروتوكولات القياسية والخدمات التي تقدمها للتطبيقات.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-network-layers/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Socket Programming in C/C++",
              d: "شرح تطبيقي لواجهة البرمجة (API) للـ Sockets وكيفية بناء تطبيقات الشبكة وتواصل العمليات عبر الشبكة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/socket-programming-cc/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية لتحليل الحزم وتتبع اتصالات شبكات الحاسوب بين العمليات والـ Sockets.",
          links: [
            {
              t: "Wireshark - Packet Analyzer & Network Tool",
              d: "أداة قياسية لفحص وتتبع حزم بيانات طبقة التطبيقات ورؤية تواصل العمليات عبر الشبكة الحية والتحقق من التغليف.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ─── MCQ ───
        {
          q: "1. Which statement correctly distinguishes application architecture from network architecture?",
          options: [
            "Both are designed by the application developer for each new application",
            "The network architecture is designed by the developer, while the application architecture is fixed",
            "The application architecture is designed by the developer, while the network architecture is fixed from the developer's perspective",
            "Both are fixed and the developer can only choose between them",
          ],
          correct: 2,
          translation: "أي جملة بتفرّق صح بين معمارية التطبيق ومعمارية الشبكة؟",
          explanation:
            "معمارية التطبيق بيصمّمها المطوّر وبتحدد إزاي التطبيق متوزع على الأجهزة، أما معمارية الشبكة (الخمس طبقات) فثابتة وبتقدم خدمات للتطبيقات. باقي الاختيارات بتعكس الأدوار أو بتعتبر الاتنين ثابتين أو الاتنين من تصميم المطوّر وده غلط.",
          tags: ["Application Architecture", "Network Architecture"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "2. On which devices does a developer write and run application software?",
          options: [
            "Only on end systems",
            "On routers and link-layer switches",
            "On all network-core devices",
            "On both end systems and routers",
          ],
          correct: 0,
          translation: "المطوّر بيكتب ويشغّل برامج التطبيق على أنهي أجهزة؟",
          explanation:
            "برامج التطبيق بتتكتب وتشتغل على الـ end systems بس، ومش محتاج (وكمان مش هتقدر) تكتب برامج على أجهزة قلب الشبكة زي الـ routers والـ switches. التصميم ده سهّل تطوير التطبيقات بسرعة.",
          tags: ["End Systems", "Network Core"],
          ref: "Lecture 01 — Section 2.1",
        },
        {
          q: "3. Which statement about clients in a client-server architecture is TRUE?",
          options: [
            "Clients must be always-on with a fixed IP address",
            "Clients communicate directly with each other to share the load",
            "Clients are housed in data centers",
            "Clients do not communicate directly with each other",
          ],
          correct: 3,
          translation: "أي جملة عن الـ clients في معمارية client-server صحيحة؟",
          explanation:
            "في client-server الـ clients بتتواصل مع السيرفر بس، ومفيش اتصال مباشر بينها (زي متصفحين على الويب). الـ always-on والعنوان الثابت من خصائص السيرفر مش الـ client، والاتصال المباشر بين الأجهزة من خصائص P2P.",
          tags: ["Client-Server", "Clients"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "4. Which pair of properties describes the server in a client-server architecture?",
          options: [
            "Intermittently connected host with a changing address",
            "Always-on host with a fixed, well-known IP address",
            "Host owned and controlled by home users",
            "Host that never receives requests from clients",
          ],
          correct: 1,
          translation: "أي زوج من الخصائص بيوصف السيرفر في client-server؟",
          explanation:
            "السيرفر دايمًا شغال وليه عنوان IP ثابت ومعروف، عشان أي client يقدر يوصله في أي وقت. الأجهزة المتقطعة الاتصال اللي بيتحكم فيها المستخدمين هي الـ peers في P2P.",
          tags: ["Server", "IP Address"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "5. Why is a data center often used in a client-server application?",
          options: [
            "Because clients need to talk directly to each other",
            "A single server host cannot keep up with all client requests, so many hosts form a powerful virtual server",
            "Because data centers remove the need for IP addresses",
            "Because P2P applications require them",
          ],
          correct: 1,
          translation: "ليه بنستخدم data center في تطبيقات client-server؟",
          explanation:
            "سيرفر واحد غالبًا مش هيقدر يستحمل كل الطلبات، فبنستخدم data center فيه عدد كبير من الأجهزة عشان نعمل سيرفر افتراضي قوي. باقي الاختيارات مالهاش علاقة بسبب استخدامه.",
          tags: ["Data Center", "Scalability"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "6. Which application is given as a popular example of a P2P architecture?",
          options: ["The Web", "FTP", "Telnet", "BitTorrent"],
          correct: 3,
          translation: "أي تطبيق اتذكر كمثال شهير على معمارية P2P؟",
          explanation:
            "BitTorrent هو المثال المذكور لـ P2P file sharing. الويب وFTP وTelnet كلها أمثلة لـ client-server.",
          tags: ["P2P", "BitTorrent"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "7. What does the self-scalability of P2P architectures mean?",
          options: [
            "Each peer adds service capacity to the system while also generating workload",
            "Peers never request files from other peers",
            "The system relies on one powerful dedicated server",
            "Server bandwidth grows automatically in data centers",
          ],
          correct: 0,
          translation: "إيه معنى الـ self-scalability في معمارية P2P؟",
          explanation:
            "كل peer بيطلب ملفات (يعني بيزوّد الحِمل) وفي نفس الوقت بيوزّع ملفات لغيره (يعني بيزوّد قدرة الخدمة)، فالنظام بيكبر لوحده. الاختيارات التانية بتتكلم عن سيرفرات مخصصة وده عكس P2P.",
          tags: ["P2P", "Self-Scalability"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "8. Which challenges do P2P applications face because of their highly decentralized structure?",
          options: [
            "High server infrastructure costs and server bandwidth",
            "The need for an always-on server with a fixed address",
            "Security, performance, and reliability",
            "Inability of peers to communicate directly",
          ],
          correct: 2,
          translation:
            "إيه التحديات اللي بتواجه تطبيقات P2P بسبب طبيعتها اللامركزية؟",
          explanation:
            "التحديات هي الأمان والأداء والموثوقية. تكلفة السيرفرات والـ bandwidth ميزة P2P بتتفاداها أصلًا، وكمان الـ peers بتتصل ببعض مباشرة.",
          tags: ["P2P", "Challenges"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "9. Which description fits the peers in a P2P architecture?",
          options: [
            "Always-on servers owned by the service provider",
            "Routers located in the network core",
            "Dedicated hosts in a data center",
            "Intermittently connected desktops and laptops controlled by users in homes, universities, and offices",
          ],
          correct: 3,
          translation: "أي وصف بيناسب الـ peers في معمارية P2P؟",
          explanation:
            "الـ peers أجهزة مستخدمين (desktops وlaptops) بتتصل وتفصل، ومش مملوكة لمقدم الخدمة. السيرفرات الدايمة الشغل والـ data centers خاصة بـ client-server.",
          tags: ["Peers", "P2P"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          q: "10. In operating-system jargon, what actually communicates across a network?",
          options: [
            "Programs that are not running",
            "Sockets",
            "Processes",
            "Protocol layers",
          ],
          correct: 2,
          translation:
            "في مصطلحات نظم التشغيل، إيه اللي بيتواصل فعليًا عبر الشبكة؟",
          explanation:
            "اللي بيتواصل هو الـ processes (البرنامج وهو شغال جوه الـ end system) مش البرامج نفسها. الـ socket مجرد واجهة بتبعت وتستقبل منها الـ process.",
          tags: ["Process", "End System"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "11. How do processes running on two different end systems communicate?",
          options: [
            "By exchanging messages across the computer network",
            "By interprocess communication governed by the operating system",
            "By sharing the same memory space",
            "By directly connecting their sockets without any network",
          ],
          correct: 0,
          translation: "إزاي الـ processes على جهازين مختلفين بتتواصل؟",
          explanation:
            "بتتبادل رسائل (messages) عبر الشبكة. الـ interprocess communication اللي بيحكمها نظام التشغيل خاصة بالـ processes على نفس الجهاز، ومش محل اهتمام المحاضرة.",
          tags: ["Messages", "Process"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "12. In a communication session, which process is labeled the client?",
          options: [
            "The process that waits to be contacted",
            "The process that initiates the communication",
            "The process running on the faster host",
            "The process that uploads the file",
          ],
          correct: 1,
          translation: "في جلسة اتصال، أي process بيتسمى client؟",
          explanation:
            "الـ client هو اللي بيبدأ الاتصال ويتواصل أول مرة مع الطرف التاني، والـ server هو اللي مستني يتكلموه. الـ uploading peer في P2P هو الـ server مش الـ client.",
          tags: ["Client Process", "Session"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "13. In P2P file sharing, Peer A asks Peer B to send a specific file. What are their roles in this session?",
          options: [
            "Peer A is the server and Peer B is the client",
            "Both peers are servers",
            "Peer A is the client and Peer B is the server",
            "Neither is a client or a server",
          ],
          correct: 2,
          translation:
            "في P2P لو Peer A طلب ملف من Peer B، إيه دور كل واحد في الجلسة دي؟",
          explanation:
            "A هو اللي بدأ الطلب فهو الـ client، وB اللي بيبعت الملف فهو الـ server في الجلسة دي. نفس الـ peer ممكن يبقى client في جلسة وserver في جلسة تانية.",
          tags: ["P2P", "Client and Server"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "14. What is a socket?",
          options: [
            "The software interface between the application layer and the transport layer within a host",
            "The physical link between two hosts",
            "The interface between the network layer and the link layer",
            "A router port that forwards packets",
          ],
          correct: 0,
          translation: "إيه هو الـ socket؟",
          explanation:
            "الـ socket هو واجهة برمجية بين طبقة التطبيق وطبقة النقل جوه نفس الجهاز، وبيتسمى كمان API. مش وصلة فيزيائية ومش بين طبقتي الشبكة والـ link.",
          tags: ["Socket", "API"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "15. In the house-and-door analogy, what does the socket correspond to?",
          options: [
            "The house itself",
            "The postal address",
            "The road between houses",
            "The door of the house",
          ],
          correct: 3,
          translation: "في تشبيه البيت والباب، الـ socket بيقابل إيه؟",
          explanation:
            "الـ process هو البيت والـ socket هو الباب اللي الرسالة بتخرج منه وتدخل منه. الشبكة اللي تحت هي وسيلة النقل بين الأبواب.",
          tags: ["Socket", "Process"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "16. What control does the developer have on the transport-layer side of the socket?",
          options: [
            "Complete control over how the transport protocol is implemented",
            "Choosing the transport protocol and perhaps fixing a few parameters such as maximum buffer and segment sizes",
            "Choosing the route packets take through the network",
            "No control at all, even over protocol choice",
          ],
          correct: 1,
          translation:
            "المطوّر عنده تحكم في إيه ناحية الـ transport layer من الـ socket؟",
          explanation:
            "تحكمه محدود: اختيار بروتوكول النقل، ويمكن ضبط شوية parameters زي أقصى buffer وsegment size. باقي التحكم عند نظام التشغيل.",
          tags: ["Transport Layer", "Developer Control"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "17. Which two pieces of information identify the receiving process on the Internet?",
          options: [
            "The IP address of the host and a destination port number",
            "The host name and the socket buffer size",
            "The IP address and the transport protocol name",
            "The port number and the application's file name",
          ],
          correct: 0,
          translation:
            "أنهي معلومتين بيحددوا الـ process المستقبِل على الإنترنت؟",
          explanation:
            "عنوان الـ IP بيحدد الجهاز ورقم الـ port بيحدد الـ process (الـ socket) جواه، لأن الجهاز الواحد ممكن يشغّل تطبيقات كتير.",
          tags: ["Addressing", "Port Number"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "18. According to the lecture, an IP address is:",
          options: [
            "A 16-bit quantity that identifies a process",
            "A 48-bit quantity that identifies a socket",
            "A 128-bit quantity that identifies a web page",
            "A 32-bit quantity that uniquely identifies a host",
          ],
          correct: 3,
          translation: "حسب المحاضرة، عنوان الـ IP هو:",
          explanation:
            "المحاضرة بتقول إن الـ IP address كمية من 32 bit بتحدد الجهاز بشكل فريد. باقي الأحجام غير صحيحة حسب المحاضرة، وكمان العنوان بيحدد جهاز مش process.",
          tags: ["IP Address", "32-bit"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "19. Which pair of well-known port numbers is correct according to the lecture?",
          options: [
            "Web server: 25, SMTP mail server: 80",
            "Web server: 80, SMTP mail server: 25",
            "Web server: 80, SMTP mail server: 80",
            "Web server: 25, SMTP mail server: 25",
          ],
          correct: 1,
          translation: "أي زوج من أرقام الـ ports المعروفة صحيح حسب المحاضرة؟",
          explanation:
            "السيرفر بتاع الويب بيستخدم port 80 وسيرفر الإيميل (SMTP) بيستخدم port 25. باقي الاختيارات بتبدّل الأرقام أو بتكررها.",
          tags: ["Port Numbers", "SMTP"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          q: "20. Which set lists the four dimensions of transport-layer services?",
          options: [
            "Reliability, routing, addressing, and timing",
            "Throughput, encryption, switching, and security",
            "Reliable data transfer, throughput, timing, and security",
            "Reliable data transfer, routing, timing, and framing",
          ],
          correct: 2,
          translation:
            "أنهي مجموعة بتمثل الأبعاد الأربعة لخدمات الـ transport layer؟",
          explanation:
            "الأبعاد الأربعة هي: reliable data transfer وthroughput وtiming وsecurity. الـ routing والـ addressing والـ framing مش من خدمات النقل المذكورة هنا.",
          tags: ["Transport Services", "Four Dimensions"],
          ref: "Lecture 01 — Section 2.1.3",
        },
        {
          q: "21. What does a reliable data transfer service guarantee?",
          options: [
            "Data always arrives within 100 msec",
            "Data sent by one process is delivered correctly and completely to the other process",
            "The sender always gets at least a fixed throughput",
            "All transmitted data is encrypted",
          ],
          correct: 1,
          translation: "إيه اللي بتضمنه خدمة reliable data transfer؟",
          explanation:
            "بتضمن إن البيانات توصل صح وكاملة للـ process التاني. ضمان زمن 100 msec ده timing، وضمان معدل ثابت ده throughput، والتشفير ده security.",
          tags: ["Reliable Data Transfer"],
          ref: "Lecture 01 — Section 2.1.3",
        },
        {
          q: "22. Which kind of applications can tolerate some data loss?",
          options: [
            "Electronic mail",
            "Financial applications",
            "Loss-tolerant multimedia applications such as conversational audio/video",
            "File transfer",
          ],
          correct: 2,
          translation:
            "أنهي نوع من التطبيقات ممكن يتحمل فقدان جزء من البيانات؟",
          explanation:
            "التطبيقات الـ multimedia زي المكالمات الصوتية/الفيديو بتتحمل فقد بسيط. الإيميل ونقل الملفات والتطبيقات المالية محتاجة نقل موثوق لأن فقد البيانات ليه عواقب سيئة.",
          tags: ["Loss-Tolerant", "Multimedia"],
          ref: "Lecture 01 — Section 2.1.3",
        },
        {
          q: "23. Which of the following is an elastic application?",
          options: [
            "Internet telephony that needs 32 kbps",
            "A multimedia application with a fixed required throughput",
            "Any bandwidth-sensitive application",
            "Web transfers",
          ],
          correct: 3,
          translation: "أنهي واحد من دول يعتبر elastic application؟",
          explanation:
            "الـ elastic applications (زي الإيميل ونقل الملفات والويب) بتستفيد بأي قدر من الـ throughput متاح، قليل أو كتير. التطبيقات اللي ليها متطلب throughput محدد اسمها bandwidth-sensitive.",
          tags: ["Elastic Applications", "Throughput"],
          ref: "Lecture 01 — Section 2.1.3",
        },
        {
          q: "24. Which type of application benefits most from a guarantee that data arrives no more than 100 msec later?",
          options: [
            "Interactive real-time applications such as multiplayer games",
            "Electronic mail",
            "File transfer",
            "Web document transfer",
          ],
          correct: 0,
          translation:
            "أنهي نوع تطبيقات بيستفيد أكتر من ضمان إن البيانات توصل في أقل من 100 msec؟",
          explanation:
            "التطبيقات التفاعلية real-time (الاتصال الصوتي، الألعاب الجماعية، teleconferencing) محتاجة قيود زمن صارمة. التطبيقات غير الـ real-time كل اللي بتفضّله إن التأخير يبقى أقل، ومفيش قيد صارم.",
          tags: ["Timing", "Real-Time"],
          ref: "Lecture 01 — Section 2.1.3",
        },
        {
          q: "25. In the sending host, a transport protocol encrypts data and the receiving host decrypts it. Which security service does this provide?",
          options: [
            "Guaranteed throughput",
            "Timing guarantee",
            "Confidentiality",
            "Reliable data transfer",
          ],
          correct: 2,
          translation:
            "لو الـ transport protocol بيشفّر البيانات عند المرسل وبيفكّها عند المستقبل، ده بيوفر أنهي خدمة أمان؟",
          explanation:
            "ده بيحقق الـ confidentiality، يعني حتى لو حد راقب البيانات في الطريق مش هيفهمها. الـ transport كمان ممكن يقدم data integrity وend-point authentication.",
          tags: ["Security", "Confidentiality"],
          ref: "Lecture 01 — Section 2.1.3",
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "1. Explain the difference between application architecture and network architecture, and name the two predominant application architectures.",
          translation:
            "اشرح الفرق بين معمارية التطبيق ومعمارية الشبكة، واذكر المعماريتين الأساسيتين للتطبيقات.",
          answer:
            "The network architecture (e.g., the five-layer Internet architecture) is fixed and provides a specific set of services to applications.\n" +
            "The application architecture is designed by the application developer and dictates how the application is structured over the various end systems.\n" +
            "The two predominant paradigms are the client-server architecture and the peer-to-peer (P2P) architecture.\n",
          tags: ["Application Architecture"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          type: "essay",
          q: "2. Describe the client-server architecture and its main characteristics. Give examples of applications that use it.",
          translation:
            "اشرح معمارية client-server وخصائصها الأساسية، مع أمثلة على تطبيقات بتستخدمها.",
          answer:
            "There is an always-on host called the server that services requests from many other hosts called clients.\n" +
            "Clients do not communicate directly with each other (e.g., two browsers do not talk directly).\n" +
            "The server has a fixed, well-known IP address, so a client can always contact it by sending a packet to that address.\n" +
            "Examples: the Web, FTP, Telnet, and e-mail.\n",
          tags: ["Client-Server"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          type: "essay",
          q: "3. Why are data centers used in client-server applications? Give examples of services that run in data centers.",
          translation:
            "ليه بنستخدم الـ data centers في تطبيقات client-server؟ اذكر أمثلة لخدمات بتشتغل فيها.",
          answer:
            "A single server host is often incapable of keeping up with all client requests; for example, a popular social-networking site would be overwhelmed by one server.\n" +
            "A data center houses a large number of hosts that together create a powerful virtual server.\n" +
            "Examples: search engines (Google, Bing, Baidu), Internet commerce (Amazon, eBay, Alibaba), Web-based e-mail (Gmail, Yahoo Mail), and social media (Facebook, Instagram, Twitter, WeChat).\n",
          tags: ["Data Center"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          type: "essay",
          q: "4. Describe the P2P architecture. What are its advantages and challenges?",
          translation: "اشرح معمارية P2P، وإيه مميزاتها وتحدياتها؟",
          answer:
            "P2P has minimal (or no) reliance on dedicated servers; the application exploits direct communication between pairs of intermittently connected hosts called peers.\n" +
            "Peers are desktops and laptops controlled by users, mostly in homes, universities, and offices; an example is BitTorrent.\n" +
            "Advantage 1: self-scalability, because each peer generates workload by requesting files but also adds service capacity by distributing files.\n" +
            "Advantage 2: cost effectiveness, since significant server infrastructure and server bandwidth are not required.\n" +
            "Challenges: security, performance, and reliability, due to the highly decentralized structure.\n",
          tags: ["P2P"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          type: "essay",
          q: "5. Compare the client-server and P2P architectures in terms of communication, server dependence, and scalability.",
          translation:
            "قارن بين معماريتي client-server وP2P من حيث الاتصال والاعتماد على السيرفر والقدرة على التوسع.",
          answer:
            "Communication: in client-server, clients talk only to the server; in P2P, peers communicate directly with each other.\n" +
            "Server dependence: client-server relies on an always-on server (often in a data center) with a fixed IP address; P2P has minimal or no reliance on dedicated servers.\n" +
            "Scalability: client-server needs more servers or a data center to handle load; P2P is self-scaling because every peer adds capacity.\n" +
            "Cost and issues: P2P is cost effective but faces security, performance, and reliability challenges.\n",
          tags: ["Client-Server", "P2P"],
          ref: "Lecture 01 — Section 2.1.1",
        },
        {
          type: "essay",
          q: "6. Define client and server processes. Can one process be both? Explain with examples from the Web and P2P file sharing.",
          translation:
            "عرّف الـ client والـ server processes. هل ممكن process واحد يبقى الاتنين؟ اشرح بأمثلة من الويب وP2P.",
          answer:
            "In the context of a communication session, the process that initiates the communication is the client; the process that waits to be contacted to begin the session is the server.\n" +
            "Web: the browser process initiates contact with the Web server process, so the browser is the client and the Web server is the server.\n" +
            "P2P: when Peer A asks Peer B for a file, Peer A is the client and Peer B is the server for that session.\n" +
            "A process in P2P can be both a client and a server (it can both upload and download), but within any given session one is labeled the client and the other the server.\n",
          tags: ["Client Process", "Server Process"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          type: "essay",
          q: "7. What is a socket? Explain the house-and-door analogy and the developer's control on each side of the socket.",
          translation:
            "إيه هو الـ socket؟ اشرح تشبيه البيت والباب، وتحكم المطوّر في كل ناحية من الـ socket.",
          answer:
            "A socket is the software interface through which a process sends messages into and receives messages from the network; it lies between the application layer and the transport layer within a host and is also called the API between the application and the network.\n" +
            "Analogy: the process is like a house and the socket is its door. The sender pushes the message out of its door, assuming a transportation infrastructure on the other side delivers it to the door of the destination process.\n" +
            "The developer controls everything on the application-layer side of the socket.\n" +
            "On the transport-layer side, the developer can only choose the transport protocol and perhaps fix a few parameters such as maximum buffer and maximum segment sizes.\n",
          tags: ["Socket"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          type: "essay",
          q: "8. Explain how a process is addressed in the Internet. Give examples of well-known port numbers.",
          translation:
            "اشرح إزاي بنحدد عنوان الـ process على الإنترنت، مع أمثلة على أرقام ports معروفة.",
          answer:
            "Two pieces of information are needed: the address of the host and an identifier that specifies the receiving process in the destination host.\n" +
            "The host is identified by its IP address, a 32-bit quantity that uniquely identifies the host.\n" +
            "A destination port number identifies the receiving process (more specifically, the receiving socket), because a host may run many network applications.\n" +
            "Examples: a Web server is identified by port 80, and a mail server process using SMTP by port 25.\n",
          tags: ["Addressing", "Port Number"],
          ref: "Lecture 01 — Section 2.1.2",
        },
        {
          type: "essay",
          q: "9. Explain the reliable data transfer and throughput services of a transport protocol. What are loss-tolerant, bandwidth-sensitive, and elastic applications?",
          translation:
            "اشرح خدمتي reliable data transfer وthroughput في الـ transport protocol. وإيه معنى loss-tolerant وbandwidth-sensitive وelastic؟",
          answer:
            "Reliable data transfer: guarantees data sent by one end is delivered correctly and completely to the other end, so the sender can pass data into the socket with complete confidence. It is needed by e-mail, file transfer, remote host access, Web transfers, and financial applications.\n" +
            "Loss-tolerant applications (e.g., conversational audio/video) can tolerate some data loss.\n" +
            "Throughput: available throughput is the rate at which the sending process can deliver bits to the receiving process, and it can fluctuate because other sessions share the path. A protocol could guarantee a throughput of at least r bits/sec.\n" +
            "Bandwidth-sensitive applications have specific throughput requirements (e.g., Internet telephony encoding voice at 32 kbps); some use adaptive coding to match available throughput.\n" +
            "Elastic applications (e-mail, file transfer, Web transfers) can use as much or as little throughput as is available.\n",
          tags: ["Reliable Data Transfer", "Throughput"],
          ref: "Lecture 01 — Section 2.1.3",
        },
        {
          type: "essay",
          q: "10. Explain the timing and security services that a transport-layer protocol can provide to applications.",
          translation:
            "اشرح خدمتي الـ timing والـ security اللي ممكن الـ transport-layer protocol يقدمهم للتطبيقات.",
          answer:
            "Timing: a protocol can guarantee, for example, that every bit sent into the socket arrives at the receiver's socket no more than 100 msec later.\n" +
            "This suits interactive real-time applications such as Internet telephony, virtual environments, teleconferencing, and multiplayer games; long delays cause unnatural pauses or make the application feel less realistic.\n" +
            "For non-real-time applications, lower delay is preferable but no tight constraint is placed on end-to-end delay.\n" +
            "Security: the protocol can encrypt data at the sending host and decrypt it at the receiving host, providing confidentiality even if the data is observed in transit.\n" +
            "It can also provide data integrity and end-point authentication (covered in Chapter 8).\n",
          tags: ["Timing", "Security"],
          ref: "Lecture 01 — Section 2.1.3",
        },
      ],
    },
    {
      id: "computer-networks-lecture-05",
      t: "المحاضرة 5 الفصل  الثاني (الجزء الثاني) — Application Layer: Principles of Network Applications & HTTP",
      d: "مبادئ تطبيقات الشبكات (المعماريات، العمليات، الـ Socket، خدمات النقل TCP/UDP) وبروتوكول HTTP.",
      pdf: "datenew/subjects/computer-networks/lectures/lec 5/Chapter 2 lec 2.pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/Ch02/Lecture-5-Questions.pdf",
      // المحاضرة الثانية: طبقة التطبيقات (Application Layer) - كتاب شبكات الحاسوب: نهج من الأعلى إلى الأسفل (Kurose & Ross)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمواضيع المحاضرة: بروتوكول HTTP، والفرق بين TCP و UDP، وطبقة التطبيق في شبكات الحاسوب.",
          links: [
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي كامل لكتاب Kurose & Ross:Application Layer: Principles of Network Applications & HTTP، فديوهات (  من 8 الدقيقة 27 و 50 ثانيه الي 9) ",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي كامل لكتاب Kurose & Ross:Application Layer: Principles of Network Applications & HTTP، فديوهات (من  9 الدقيقة 18 و 50 ثانيه  الي 11)  ",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=STnYAKXRUz4&list=PLYljoJMAPFLHrCVfzuMLkJOZHhCgfSXG-&index=9",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Computer Networks — شبكات الحاسوب (قائمة تشغيل)",
              d: "قائمة تشغيل أكاديمية كاملة لمقرر شبكات الحاسوب، فيها دروس على Transport layer (TCP, UDP) و Application layer. الدرس رقم 9 في القائمة بيشرح Transport layer - part 1.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpHpCzb7rhlV1MbRgGwTIoK1kHW3iWdmh",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح بروتوكول HTTP بالتفصيل",
              d: "شرح كامل لبروتوكول HTTP بكل مكوناته: الـ request، الـ response، الـ methods (GET/POST/...)، والـ status codes. مناسب لفهم قسم 2.2.3 من المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=pi4gaFDBtMc",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب | الدرس 28 (شرح بالعربي)",
              d: "درس شامل لطبقة التطبيق يشمل HTTP و FTP و SMTP و POP3 و IMAP و DNS. يغطي القسم 2.1.6 من المحاضرة (الـ network applications).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=x8pLNfJAKwc",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "الفرق بين بروتوكول TCP و UDP (شرح مبسط بالعربي)",
              d: "شرح مبسط للفرق بين TCP و UDP: الـ connection-oriented مقابل connectionless، الـ reliable مقابل unreliable، والـ congestion control. يغطي القسم 2.1.4 (TCP Services و UDP Services).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=qi6yGq0EOJc",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },

        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات إنجليزية مرئية (Animated) بتشرح TCP/UDP و HTTP بأسلوب بصري مفهوم، وقنوات تعليمية معروفة.",
          links: [
            {
              t: "PowerCert Animated Videos — Networking (English Version)",
              d: "قائمة تشغيل فيديوهات مرئية (Animated) بتشرح TCP vs UDP ومواضيع شبكات مكملة للمحاضرة. الأسلوب البصري بيساعد على تثبيت الفروق بين TCP و UDP في الذاكرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpXfHEl2fzl72d5ne2gsxSyFNagcHyCML",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Hussein Nasser — HTTP/2 + HTTP Crash Course",
              d: "قائمة تشغيل لمهندس باك-إند معروف، فيها شرح HTTP 1.0 / 1.1 / 2 بعمق، ومقارنة بين النسخ. مفهوم لفهم HTTP/2 المذكور في نهاية القسم 2.2.1.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLQnljOFTspQWbBegaU790WhH7gNKcMAl-",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Khan Academy — Internet 101 (Computer Science)",
              d: "قائمة تشغيل من Khan Academy بتشرح أساسيات الإنترنت، بما فيها TCP/IP، DNS، HTTP، والـ packets والـ routers. مفهوم كمقدمة للمحاضرة وربطها بـ Chapter 1.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HD8wtmKZh0nKOsOvP1KYaNO",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },

        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مصادر مكتوبة رسمية: GeeksforGeeks، Cloudflare Learning، MDN Web Docs، Wikipedia — بشرح TCP/UDP و HTTP و RTT و status codes.",
          links: [
            {
              t: "GeeksforGeeks — Computer Networks",
              d: "مقالات تعليمية بتغطي بالظبط مفاهيم المحاضرة: الفرق بين TCP و UDP، الاتصالات الـ persistent و non-persistent في HTTP، ودليل شامل على HTTP.",
              icon: "📚",
              actions: [
                {
                  label: "📖 Differences between TCP and UDP",
                  url: "https://www.geeksforgeeks.org/computer-networks/differences-between-tcp-and-udp",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "📖 HTTP Non-Persistent & Persistent Connection",
                  url: "https://www.geeksforgeeks.org/computer-networks/http-non-persistent-persistent-connection",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "📖 HTTP Tutorial (overview)",
                  url: "https://www.geeksforgeeks.org/computer-networks/http-tutorial",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Cloudflare Learning Center",
              d: "مصدر رسمي من Cloudflare بشرح مبسط ودقيق: تعريف HTTP كـ application-layer protocol، وتعريف الـ Round-Trip Time (RTT) والعوامل المؤثرة فيه — مهم لمسائل القسم 2.2.2.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 What is HTTP?",
                  url: "https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 What is Round-Trip Time (RTT)?",
                  url: "https://www.cloudflare.com/learning/cdn/glossary/round-trip-time-rtt",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "MDN Web Docs (Mozilla) — HTTP",
              d: "المرجع الرسمي لمطوري الويب: شرح بنية رسائل HTTP (request و response) وأكواد الـ status بالتفصيل. مطابق للقسم 2.2.3 من المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 HTTP Messages (Request & Response)",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 HTTP Response Status Codes",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Wikipedia — List of HTTP Status Codes",
              d: "مقال موسوعي بيحث كل أكواد HTTP status (1xx, 2xx, 3xx, 4xx, 5xx) بالتفصيل. يكمل الأكواد اللي اتذكرت في المحاضرة (200, 301, 400, 404, 505) بأكواد إضافية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات عملية لمراقبة وبناء الشبكات، تستخدم في المشاريع والـ labs لمراقبة باكتات HTTP/TCP/UDP فعلًا.",
          links: [
            {
              t: "Wireshark — Network Protocol Analyzer",
              d: "أداة مفتوحة المصدر لالتقاط وتحليل باكتات الشبكة. ممكن تستخدمها عشان تشوف باكتات TCP handshake و HTTP request/response فعلًا على جهازك. أداة معتمدة في معظم مقررات الشبكات.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "Cisco Packet Tracer",
              d: "أداة محاكاة رسمية من Cisco لمحاكاة الشبكات بما فيها TCP/UDP traffic. مجانية للطلاب ومشهوره في الـ labs. بتنزل بعد التسجيل في Cisco Networking Academy.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ صفحة التحميل الرسمية",
                  url: "https://www.netacad.com/cisco-packet-tracer",
                  type: "download",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. The Internet (and TCP/IP networks in general) makes how many transport protocols available to applications?",
          options: ["Four", "One", "Two", "Three"],
          correct: 2,
          translation:
            "الإنترنت (وشبكات TCP/IP عموماً) بيوفّر كام بروتوكول نقل للتطبيقات؟",
          explanation:
            "الإنترنت بيوفّر بروتوكولين للنقل بس: TCP و UDP. مزودش واحد ولا تلاتة، ده تعريف أساسي اتذكر أكتر من مرة.",
          tags: ["Transport Layer", "TCP", "UDP"],
          ref: "Lecture 2 — Section 2.1.4",
          likely: "high",
        },
        {
          q: "2. Which two transport protocols does the Internet provide to applications?",
          options: [
            "HTTP and FTP",
            "IP and ICMP",
            "SMTP and POP3",
            "TCP and UDP",
          ],
          correct: 3,
          translation: "إيه البروتوكولين اللي الإنترنت بيوفّرهم للتطبيقات؟",
          explanation:
            "الإجابة TCP و UDP. HTTP و FTP بروتوكولات تطبيق مش نقل، و IP بروتوكول شبكة مش نقل.",
          tags: ["Transport Layer", "TCP", "UDP"],
          ref: "Lecture 2 — Section 2.1.4",
          likely: "high",
        },
        {
          q: "3. The TCP service model includes which two main services?",
          options: [
            "Connectionless service and unreliable data transfer",
            "Connection-oriented service and reliable data transfer service",
            "Throughput guarantees and security",
            "Congestion control and timing guarantees",
          ],
          correct: 1,
          translation: "نموذج خدمة TCP بيشمل أي خدمتين أساسيتين؟",
          explanation:
            "TCP بيوفّر خدمة connection-oriented (بـ handshaking) وخدمة reliable data transfer. مفيش throughput/timing guarantees دي خدمات مش متوفرة في إنترنت النقل.",
          tags: ["TCP Services"],
          ref: "Lecture 2 — Section 2.1.4 (TCP Services)",
          likely: "high",
        },
        {
          q: "4. What is the handshaking procedure in TCP?",
          options: [
            "Sending application messages without preparation",
            "Compressing data before sending it",
            "Exchanging transport-layer control information before application-level messages begin to flow",
            "Encrypting the connection between client and server",
          ],
          correct: 2,
          translation: "إيه إجراء الـ handshaking في TCP؟",
          explanation:
            "الـ handshaking هو تبادل معلومات تحكم في طبقة النقل قبل ما تبدأ رسائل التطبيق. التشفير والضغط مش وظيفة الـ handshaking.",
          tags: ["TCP", "Handshaking", "Connection-oriented"],
          ref: "Lecture 2 — Section 2.1.4 (Connection-oriented service)",
          likely: "high",
        },
        {
          q: "5. After the handshaking phase, a TCP connection is said to exist between what?",
          options: [
            "The applications themselves",
            "The sockets of the two processes",
            "The routers along the path",
            "The IP addresses of the hosts",
          ],
          correct: 1,
          translation:
            "بعد مرحلة الـ handshaking، بيتقال إن اتصال TCP موجود بين إيه؟",
          explanation:
            "الاتصال بين sockets العمليتين (client و server). مش بين الراوترز ولا الـ IP addresses، ده تعريف مهم.",
          tags: ["TCP", "Sockets", "Connection"],
          ref: "Lecture 2 — Section 2.1.4 (Connection-oriented service)",
          likely: "high",
        },
        {
          q: "6. The TCP connection is described as which type of connection?",
          options: ["Simplex", "Broadcast", "Full-duplex", "Half-duplex"],
          correct: 2,
          translation: "اتصال TCP بيتوصف كـ إيه؟",
          explanation:
            "TCP اتصال full-duplex: العمليتين يقدروا يبعتوا لبعض في نفس الوقت. مش half-duplex (اتجاه واحد في كل مرة) ولا simplex.",
          tags: ["TCP", "Full-duplex"],
          ref: "Lecture 2 — Section 2.1.4 (Connection-oriented service)",
          likely: "high",
        },
        {
          q: "7. What must an application do when it finishes sending messages over a TCP connection?",
          options: [
            "Leave the connection open indefinitely",
            "Send a UDP packet to confirm",
            "Restart the server process",
            "Tear down the connection",
          ],
          correct: 3,
          translation:
            "إيه اللي لازم التطبيق يعمله لما يخلص بعت الرسائل على اتصال TCP؟",
          explanation:
            "لازم يـ tear down (يفك) الاتصال. سيبه مفتوح للأبد مش ممارسة صح، و UDP مالوش علاقة بإنهاء اتصال TCP.",
          tags: ["TCP", "Connection teardown"],
          ref: "Lecture 2 — Section 2.1.4 (Connection-oriented service)",
          likely: "high",
        },
        {
          q: "8. TCP's reliable data transfer service guarantees that the data sent:",
          options: [
            "Arrives faster than UDP",
            "Arrives without error and in the proper order, with no missing or duplicate bytes",
            "Arrives only in correct order, but may be duplicated",
            "Arrives encrypted end-to-end",
          ],
          correct: 1,
          translation: "خدمة النقل الموثوق في TCP بتضمن إيه للبيانات المبعوتة؟",
          explanation:
            "TCP بيضمن وصول البيانات من غير أخطاء وبالترتيب الصحيح وبدون فقد أو تكرار. التشفير مش شغلانته، والسرعة دي ميزة UDP.",
          tags: ["TCP", "Reliable data transfer"],
          ref: "Lecture 2 — Section 2.1.4 (Reliable data transfer service)",
          likely: "high",
        },
        {
          q: "9. What does the TCP congestion-control mechanism do?",
          options: [
            "Speeds up the sender at all times",
            "Encrypts data at congested routers",
            "Throttles a sending process when the network is congested between sender and receiver",
            "Routes packets around congested areas",
          ],
          correct: 2,
          translation: "ميكانيزم التحكم في الازدحام في TCP بيعمل إيه؟",
          explanation:
            "TCP بيقلل (throttle) سرعة المرسل لما الشبكة مزدحمة. مش بيسرّع المرسل، ولا بيفرض تشفير، ولا بيعيد التوجيه.",
          tags: ["TCP", "Congestion Control"],
          ref: "Lecture 2 — Section 2.1.4 (Reliable data transfer service)",
          likely: "high",
        },
        {
          q: "10. Whom does the TCP congestion-control mechanism primarily benefit?",
          options: [
            "Only the communicating processes",
            "Only the clients",
            "Only the Web servers",
            "The general welfare of the Internet, rather than the direct benefit of the communicating processes",
          ],
          correct: 3,
          translation: "ميكانيزم التحكم في الازدحام في TCP بيفيد مين أساساً؟",
          explanation:
            "TCP congestion-control بيخدم مصلحة الإنترنت العامة مش العمليات المتواصلة مباشرة. ده نقطة مهمة الدكتور بيشدد عليها — مش خدمة مباشرة للتطبيق.",
          tags: ["TCP", "Congestion Control"],
          ref: "Lecture 2 — Section 2.1.4 (Reliable data transfer service)",
          likely: "high",
        },
        {
          q: "11. UDP is best described as which kind of transport protocol?",
          options: [
            "A secure, encrypted transport protocol",
            "A no-frills, lightweight transport protocol providing minimal services",
            "A heavy, reliable, connection-oriented protocol",
            "A congestion-aware transport protocol with handshaking",
          ],
          correct: 1,
          translation: "UDP بيتوصف إزاي كبروتوكول نقل؟",
          explanation:
            "UDP بسيط وخفيف (no-frills, lightweight) بأدنى خدمات. مش موثوق ولا بيفرض handshake ولا بيعمل congestion control.",
          tags: ["UDP", "Lightweight"],
          ref: "Lecture 2 — Section 2.1.4 (UDP Services)",
          likely: "high",
        },
        {
          q: "12. UDP is connectionless, which means that:",
          options: [
            "UDP requires authentication before sending",
            "Handshaking is required before communication",
            "UDP cannot send any data over the network",
            "No handshaking occurs before the two processes start to communicate",
          ],
          correct: 3,
          translation: "UDP connectionless يعني إيه؟",
          explanation:
            "مفيش handshaking قبل ما العمليتين يبدأوا التواصل. ده عكس TCP اللي بيطلب handshake. UDP بيبعت على طول.",
          tags: ["UDP", "Connectionless"],
          ref: "Lecture 2 — Section 2.1.4 (UDP Services)",
          likely: "high",
        },
        {
          q: "13. What does UDP provide regarding data transfer?",
          options: [
            "Acknowledgment of every received packet",
            "Guaranteed delivery of every message in correct order",
            "An unreliable data transfer service",
            "A reliable data transfer service",
          ],
          correct: 2,
          translation: "UDP بيوفّر إيه بخصوص نقل البيانات؟",
          explanation:
            "UDP نقل غير موثوق (unreliable) — مفيش ضمان وصول الرسالة، ويمكن توصل خارج الترتيب. عكس TCP اللي موثوق.",
          tags: ["UDP", "Unreliable"],
          ref: "Lecture 2 — Section 2.1.4 (UDP Services)",
          likely: "high",
        },
        {
          q: "14. Does UDP include a congestion-control mechanism?",
          options: [
            "Yes, UDP throttles senders during congestion just like TCP",
            "No, but the network layer enforces congestion control for UDP",
            "No, the sending side of UDP can pump data into the network layer at any rate it pleases",
            "Yes, but only for packets larger than 1500 bytes",
          ],
          correct: 2,
          translation: "هل UDP فيه ميكانيزم للتحكم في الازدحام؟",
          explanation:
            "UDP مفيهوش congestion control — المرسل يقدر يضخ بيانات بأي معدل. ده فرق أساسي بينه وبين TCP اللي فيه throttling.",
          tags: ["UDP", "Congestion Control"],
          ref: "Lecture 2 — Section 2.1.4 (UDP Services)",
          likely: "high",
        },
        {
          q: "15. Which services are NOT provided by today's Internet transport protocols?",
          options: [
            "Reliable data transfer and security",
            "Encryption and decryption",
            "Handshaking and connection setup",
            "Throughput and timing guarantees",
          ],
          correct: 3,
          translation: "إيه الخدمات اللي بروتوكولات نقل الإنترنت مش بتوفّرها؟",
          explanation:
            "الإنترنت بيوفر reliable data transfer (TCP) و security (عن طريق TLS)، لكن مفيش أي throughput ولا timing guarantees. نقطة أساسية اتذكرت في الـ summary.",
          tags: ["Transport Services", "Throughput", "Timing"],
          ref: "Lecture 2 — Section 2.1.4 (Services Not Provided)",
          likely: "high",
        },
        {
          q: "16. Which set of applications typically uses TCP as their transport protocol?",
          options: [
            "E-mail, Web, file transfer, and remote terminal access",
            "Internet telephony applications only",
            "Live video conferencing applications only",
            "DNS queries only",
          ],
          correct: 0,
          translation: "إيه التطبيقات اللي بتستخدم TCP عادة؟",
          explanation:
            "التطبيقات اللي محتاجة نقل موثوق زي البريد والويب ونقل الملفات والوصول للطرفية. التطبيقات الحساسة للزمن (telephony) بتفضل UDP.",
          tags: ["TCP", "Applications"],
          ref: "Lecture 2 — Section 2.1.4 (Figure 2.5)",
          likely: "high",
        },
        {
          q: "17. Why do developers of Internet telephony applications usually prefer to run them over UDP?",
          options: [
            "To circumvent TCP's congestion-control mechanism and packet overheads",
            "Because UDP is more secure than TCP",
            "Because UDP provides reliable data transfer",
            "Because UDP requires handshaking before sending",
          ],
          correct: 0,
          translation: "ليه مطورين تطبيقات الإنترنت تليفوني بيفضلوا UDP؟",
          explanation:
            "عشان يتجاوزوا ميكانيزم التحكم في الازدحام في TCP وحجم الـ packet overheads. UDP مش موثوق ولا آمن أكتر من TCP.",
          tags: ["UDP", "Internet Telephony"],
          ref: "Lecture 2 — Section 2.1.4 (Figure 2.5 commentary)",
          likely: "high",
        },
        {
          q: "18. Why might Internet telephony applications be designed to use TCP as a backup if UDP communication fails?",
          options: [
            "Because UDP is more unreliable than TCP for voice",
            "Because many firewalls are configured to block most types of UDP traffic",
            "Because TCP is faster than UDP",
            "Because TCP has lower latency than UDP",
          ],
          correct: 1,
          translation:
            "ليه تطبيقات الإنترنت تليفوني ممكن تستخدم TCP كبديل لو UDP فشل؟",
          explanation:
            "عشان فايروولز كتير بتـ block معظم أنواع UDP traffic. مش لأن TCP أسرع أو أقل latency — العكس صحيح.",
          tags: ["UDP", "Firewalls", "TCP fallback"],
          ref: "Lecture 2 — Section 2.1.4 (Figure 2.5 commentary)",
          likely: "high",
        },
        {
          q: "19. An application-layer protocol defines which of the following?",
          options: [
            "Only the transport protocol to use",
            "The types of messages, syntax, semantics of fields, and rules for sending and responding to messages",
            "Only the semantics of the fields",
            "Only the syntax of the messages",
          ],
          correct: 1,
          translation: "بروتوكول طبقة التطبيق بيحدد إيه؟",
          explanation:
            "بيحدد 4 حاجات: أنواع الرسائل، الـ syntax، الـ semantics، وقواعد متى وإزاي تبعت وترد. تعريف أساسي متكرر في المحاضرة.",
          tags: ["Application-Layer Protocols", "Definition"],
          ref: "Lecture 2 — Section 2.1.5",
          likely: "high",
        },
        {
          q: "20. The Web's application-layer protocol is:",
          options: ["DNS", "FTP", "SMTP", "HTTP"],
          correct: 3,
          translation: "بروتوكول طبقة التطبيق بتاع الـ Web هو إيه؟",
          explanation:
            "HTTP هو بروتوكول الـ Web. FTP للملفات، SMTP للإيميل، DNS للـ directory service.",
          tags: ["HTTP", "Web"],
          ref: "Lecture 2 — Section 2.1.5",
          likely: "high",
        },
        {
          q: "21. Which of the following application-layer protocols is proprietary and NOT in the public domain (RFCs)?",
          options: [
            "Skype's application-layer protocol",
            "SMTP",
            "HTTP",
            "FTP",
          ],
          correct: 0,
          translation: "إيه البروتوكول اللي proprietary ومش متاح في RFCs؟",
          explanation:
            "Skype بروتوكوله proprietary. HTTP و SMTP و FTP متاحين في RFCs للعموم.",
          tags: ["Application-Layer Protocols", "Proprietary"],
          ref: "Lecture 2 — Section 2.1.5",
          likely: "high",
        },
        {
          q: "22. A Web page (document) consists of which of the following?",
          options: [
            "A single HTML file only",
            "A base HTML file and several referenced objects",
            "Only the URL of the page",
            "Only image files",
          ],
          correct: 1,
          translation: "صفحة الويب (document) بتتكون من إيه؟",
          explanation:
            "صفحة الويب بتتكون من base HTML file وعدة objects موثقة. مش بس HTML ولا صور.",
          tags: ["Web Page", "Objects"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          q: "23. A URL has which two components?",
          options: [
            "Browser type and server type",
            "IP address and port number",
            "Protocol and method",
            "The hostname of the server and the object's path name",
          ],
          correct: 3,
          translation: "الـ URL بيتكون من إيه (مكونين)؟",
          explanation:
            "hostname بتاع السيرفر + path name بتاع الـ object. مثال: www.someSchool.edu (hostname) و /someDepartment/picture.gif (path).",
          tags: ["URL", "Web"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          q: "24. HTTP uses which underlying transport protocol?",
          options: ["IP", "TCP", "ICMP", "UDP"],
          correct: 1,
          translation: "HTTP بيستخدم إيه كبروتوكول نقل تحتية؟",
          explanation:
            "HTTP بيشتغل فوق TCP. UDP مش موثوق، IP و ICMP بروتوكولات شبكة مش نقل.",
          tags: ["HTTP", "TCP"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          q: "25. Why does HTTP not need to worry about lost data or how TCP recovers from loss?",
          options: [
            "Because HTTP retransmits lost packets itself",
            "Because TCP provides a reliable data transfer service to HTTP",
            "Because HTTP encrypts all data",
            "Because the network never loses HTTP packets",
          ],
          correct: 1,
          translation: "ليه HTTP مش محتاج يقلق على البيانات المفقودة؟",
          explanation:
            "TCP بيوفّر reliable data transfer لـ HTTP، فمش شغله يتعامل مع الفقد. ده مثال على فايدة layered architecture.",
          tags: ["HTTP", "TCP", "Layered architecture"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          q: "26. HTTP is described as a stateless protocol because:",
          options: [
            "HTTP only supports GET requests",
            "HTTP cannot establish a connection to the server",
            "HTTP does not use TCP as its transport",
            "The HTTP server maintains no information about the clients",
          ],
          correct: 3,
          translation: "ليه HTTP بيتوصف بأنه stateless؟",
          explanation:
            "السيرفر ما بيبقاش عنده أي معلومات عن الـ clients. لو العميل طلب نفس الـ object مرتين، السيرفر بيبعته تاني لأنه نسي. تعريف مهم.",
          tags: ["HTTP", "Stateless"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          q: "27. What is the default port number for HTTP?",
          options: ["80", "21", "443", "25"],
          correct: 0,
          translation: "إيه البورت الافتراضي بتاع HTTP؟",
          explanation:
            "80 هو البورت الافتراضي لـ HTTP. 21 لـ FTP، 25 لـ SMTP، 443 لـ HTTPS.",
          tags: ["HTTP", "Port"],
          ref: "Lecture 2 — Section 2.2.2 (Non-Persistent step 1)",
          likely: "high",
        },
        {
          q: "28. As of 2020, the majority of HTTP transactions take place over which version?",
          options: ["HTTP/1.1", "HTTP/0.9", "HTTP/1.0", "HTTP/2"],
          correct: 0,
          translation: "حتى 2020، أغلب معاملات HTTP بتحصل على أي نسخة؟",
          explanation:
            "HTTP/1.1 هو الأغلب (RFC 7230). HTTP/2 لسه بيزيد في الـ support.",
          tags: ["HTTP versions"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          q: "29. The two types of connections in HTTP are:",
          options: [
            "Stateful and stateless connections",
            "Single and multiple connections",
            "Local and remote connections",
            "Non-persistent connections and persistent connections",
          ],
          correct: 3,
          translation: "إيه نوعين الاتصالات في HTTP؟",
          explanation:
            "non-persistent (كل request/response في اتصال TCP منفصل) و persistent (اتصال TCP واحد يفضل مفتوح). مقارنة أساسية.",
          tags: ["HTTP", "Connections"],
          ref: "Lecture 2 — Section 2.2.2",
          likely: "high",
        },
        {
          q: "30. RTT (Round-Trip Time) is defined as:",
          options: [
            "The time to send one packet only",
            "The time it takes for a small packet to travel from client to server and then back to the client",
            "The time to download a full Web page",
            "The time for a server to process a request only",
          ],
          correct: 1,
          translation: "RTT (Round-Trip Time) بيتعرف إزاي؟",
          explanation:
            "وقت باكت صغير يروح من العميل للسيرفر ويرجع. بيشمل propagation، queuing، processing delays. تعريف مهم للمسائل الحسابية.",
          tags: ["RTT", "Delay"],
          ref: "Lecture 2 — Section 2.2.2 (RTT definition)",
          likely: "high",
        },
        {
          q: "31. The first two parts of the three-way handshake take approximately:",
          options: ["Three RTTs", "Half an RTT", "Two RTTs", "One RTT"],
          correct: 3,
          translation:
            "الجزأين الأولانيين من الـ three-way handshake بياخدوا كام؟",
          explanation:
            "واحد RTT (1 RTT). الجزء التالت (acknowledgment من العميل) بيبعت مع الـ HTTP request.",
          tags: ["RTT", "Three-way handshake"],
          ref: "Lecture 2 — Section 2.2.2 (Figure 2.7)",
          likely: "high",
        },
        {
          q: "32. For non-persistent HTTP, the total response time to fetch the base HTML file is roughly:",
          options: [
            "Two RTTs plus the transmission time at the server",
            "Three RTTs plus the transmission time",
            "One RTT plus the transmission time",
            "Half an RTT plus the transmission time",
          ],
          correct: 0,
          translation:
            "للـ non-persistent HTTP، إجمالي زمن الـ response لجلب الـ HTML file تقريباً إيه؟",
          explanation:
            "2 RTT (واحد للـ handshake + واحد للـ request/response) + زمن النقل على السيرفر. قانون مهم بييجي في المسائل.",
          tags: ["HTTP", "RTT", "Non-persistent"],
          ref: "Lecture 2 — Section 2.2.2 (response time formula)",
          likely: "high",
        },
        {
          q: "33. If a Web page consists of a base HTML file and 10 JPEG images (11 objects total) and uses non-persistent HTTP, how many TCP connections are generated?",
          options: ["10", "1", "11", "2"],
          correct: 2,
          translation:
            "لو صفحة ويب فيها 1 HTML + 10 JPEG (11 object) وتستخدم non-persistent HTTP، هيتولد كام TCP connection؟",
          explanation:
            "11 اتصال، واحد لكل object، لأن في non-persistent كل object بياخد اتصال منفصل. ده عيب أساسي للـ non-persistent.",
          tags: ["HTTP", "Non-persistent", "TCP connections"],
          ref: "Lecture 2 — Section 2.2.2 (Non-persistent walk-through)",
          likely: "high",
        },
        {
          q: "34. The default mode of HTTP uses which type of connections?",
          options: [
            "Non-persistent connections",
            "UDP transport instead of TCP",
            "Persistent connections with pipelining",
            "Persistent connections without pipelining",
          ],
          correct: 2,
          translation: "الوضع الافتراضي لـ HTTP بيستخدم إيه؟",
          explanation:
            "persistent connections مع pipelining. عشان يقلل الـ RTTs والـ overhead على السيرفر.",
          tags: ["HTTP", "Persistent", "Pipelining"],
          ref: "Lecture 2 — Section 2.2.2 (Persistent Connections)",
          likely: "high",
        },
        {
          q: "35. Pipelining in HTTP means that:",
          options: [
            "Requests are sent one at a time, waiting for each response",
            "Requests are sent only after the connection is closed",
            "Requests for objects can be made back-to-back without waiting for replies to pending requests",
            "Requests are sent in random order to balance load",
          ],
          correct: 2,
          translation: "Pipelining في HTTP يعني إيه؟",
          explanation:
            "الطلبات بتيجي back-to-back من غير استنى الردود. ده بيقلل latency بشكل كبير في persistent connections.",
          tags: ["HTTP", "Pipelining"],
          ref: "Lecture 2 — Section 2.2.2 (Persistent Connections)",
          likely: "high",
        },
        {
          q: "36. The first line of an HTTP request message is called the:",
          options: [
            "Status line",
            "Entity body",
            "Request line",
            "Header line",
          ],
          correct: 2,
          translation: "أول سطر في رسالة HTTP request بيتسمى إيه؟",
          explanation:
            "request line. الـ status line هو في الـ response، و header lines بتيجي بعد الـ request line.",
          tags: ["HTTP Request", "Request line"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          q: "37. Which is the most commonly used HTTP request method?",
          options: ["GET", "PUT", "POST", "DELETE"],
          correct: 0,
          translation: "إيه أكتر method شائعة في HTTP request؟",
          explanation:
            "GET هي الأكثر استخداماً لما البراوزر بيطلب object في الـ URL. POST للـ forms، PUT لرفع، DELETE للحذف.",
          tags: ["HTTP Methods", "GET"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          q: "38. The GET method is used when:",
          options: [
            "The user uploads a file to a server",
            "The user fills out a form with sensitive data",
            "The user deletes an object on the server",
            "The browser requests an object, with the requested object identified in the URL field",
          ],
          correct: 3,
          translation: "متى بيتستخدم الـ GET method؟",
          explanation:
            "لما البراوزر يطلب object بيحدده الـ URL. الـ forms الحساسة بتستخدم POST، رفع الملفات PUT، الحذف DELETE.",
          tags: ["HTTP Methods", "GET"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          q: "39. The POST method is typically used when:",
          options: [
            "The user fills out a form, e.g., provides search words to a search engine",
            "The browser requests a JPEG image",
            "The user deletes a server object",
            "The server requests data from the client",
          ],
          correct: 0,
          translation: "متى بيتستخدم الـ POST method؟",
          explanation:
            "لما اليوزر يملا form (زي كلمات البحث في محرك بحث). الـ entity body بيشيل المدخلات.",
          tags: ["HTTP Methods", "POST"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          q: "40. The Host: header line in an HTTP request specifies:",
          options: [
            "The host on which the object resides",
            "The preferred language of the user",
            "The connection timeout value",
            "The browser type making the request",
          ],
          correct: 0,
          translation: "الـ Host: header في HTTP request بيشير لإيه؟",
          explanation:
            "الـ host اللي عليه الـ object. مهم لـ Web proxy caches رغم إن اتصال TCP موجود بالفعل.",
          tags: ["HTTP Headers", "Host"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          q: "41. The Connection: close header line in a request tells the server that:",
          options: [
            "The browser wants the server to close the connection after sending the requested object",
            "The client wants to upgrade to HTTP/2",
            "The client wants a persistent connection",
            "The client is about to close the browser",
          ],
          correct: 0,
          translation:
            "الـ Connection: close header في الـ request بيقول للسيرفر إيه؟",
          explanation:
            "العميل عايز السيرفر يقفل الاتصال بعد ما يبعت الـ object — يعني مش عايز persistent. عكس persistent الافتراضي.",
          tags: ["HTTP Headers", "Connection"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          q: "42. An HTTP response message has how many sections?",
          options: [
            "Four",
            "Two",
            "Three (an initial status line, header lines, and the entity body)",
            "One",
          ],
          correct: 2,
          translation: "رسالة HTTP response فيها كام قسم؟",
          explanation:
            "3: status line, header lines, entity body. الـ entity body بيشيل الـ object نفسه.",
          tags: ["HTTP Response", "Structure"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "43. The status line of an HTTP response message has how many fields?",
          options: [
            "Four",
            "Two",
            "Three (protocol version, status code, status message)",
            "One",
          ],
          correct: 2,
          translation: "الـ status line في HTTP response فيها كام field؟",
          explanation:
            "3: protocol version, status code, status message. مثال: HTTP/1.1 200 OK.",
          tags: ["HTTP Response", "Status line"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "44. What does the HTTP status code 200 OK mean?",
          options: [
            "The requested object has been permanently moved",
            "The requested document does not exist",
            "The request succeeded and the information is returned in the response",
            "The request could not be understood by the server",
          ],
          correct: 2,
          translation: "إيه معنى status code 200 OK؟",
          explanation:
            "الطلب نجح والمعلومات (الـ object) بترجع في الـ response. أكتر كود شائع.",
          tags: ["HTTP Status Codes", "200 OK"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "45. What does the HTTP status code 301 Moved Permanently mean?",
          options: [
            "The requested object has been permanently moved; the new URL is specified in the Location: header",
            "The request could not be understood",
            "The HTTP protocol version is not supported",
            "The request succeeded, info returned",
          ],
          correct: 0,
          translation: "إيه معنى status code 301 Moved Permanently؟",
          explanation:
            "الـ object اتنقل بشكل دائم، والـ URL الجديد في الـ Location: header. العميل بيجيبه أوتوماتيك.",
          tags: ["HTTP Status Codes", "301"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "46. What does the HTTP status code 400 Bad Request mean?",
          options: [
            "The object was permanently moved",
            "The request succeeded",
            "The requested document does not exist",
            "A generic error code indicating that the request could not be understood by the server",
          ],
          correct: 3,
          translation: "إيه معنى status code 400 Bad Request؟",
          explanation:
            "خطأ عام إن السيرفر ما فهمش الطلب. مش نجاح ولا نقل ولا Not Found.",
          tags: ["HTTP Status Codes", "400"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "47. What does the HTTP status code 404 Not Found mean?",
          options: [
            "The requested document does not exist on this server",
            "The request succeeded",
            "The HTTP version is not supported",
            "The server is down for maintenance",
          ],
          correct: 0,
          translation: "إيه معنى status code 404 Not Found؟",
          explanation:
            "الـ document مش موجود على السيرفر ده. مش النجاح ولا السيرفر down ولا version unsupported.",
          tags: ["HTTP Status Codes", "404"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "48. What does the HTTP status code 505 HTTP Version Not Supported mean?",
          options: [
            "The requested document does not exist",
            "The requested HTTP protocol version is not supported by the server",
            "The requested object has been permanently moved",
            "The request succeeded, info returned",
          ],
          correct: 1,
          translation: "إيه معنى status code 505 HTTP Version Not Supported؟",
          explanation:
            "نسخة HTTP اللي العميل بيطلبها مش مدعومة من السيرفر. غالباً عشان عميل بيطلب HTTP/2 على سيرفر قديم.",
          tags: ["HTTP Status Codes", "505"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "49. The Last-Modified: header line in an HTTP response is critical for:",
          options: [
            "Object caching, both in the local client and in network cache servers (proxy servers)",
            "Encrypting the connection",
            "Specifying the browser type",
            "Indicating the request method",
          ],
          correct: 0,
          translation: "الـ Last-Modified: header في الـ response مهم لإيه؟",
          explanation:
            "caching محلي و في proxy servers. بيشير لمتى آخر تعديل للـ object — ده اللي بيخلي الـ cache يحدد لو الـ object اتغير.",
          tags: ["HTTP Headers", "Last-Modified", "Caching"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          q: "50. Transport protocol services are organized along how many dimensions in this section?",
          options: ["Four", "Three", "Two", "Five"],
          correct: 0,
          translation: "خدمات بروتوكولات النقل متقسمة كام بعد في القسم ده؟",
          explanation:
            "4 أبعاد: reliable data transfer, throughput, timing, security. نقطة مهمة الدكتور بيذكرها في الـ summary.",
          tags: ["Transport Services", "Dimensions"],
          ref: "Lecture 2 — Section 2.1.4 (Services Not Provided)",
          likely: "medium",
        },
        {
          q: "51. How many important network applications does the book focus on in this chapter?",
          options: ["Six", "Four", "Three", "Five"],
          correct: 3,
          translation: "الكتاب بيركز على كام تطبيق شبكة مهم في الفصل ده؟",
          explanation:
            "5 تطبيقات: الـ Web، البريد الإلكتروني، DNS، P2P، والبث المرئي. نقطة مرقمة في القسم 2.1.6.",
          tags: ["Network Applications"],
          ref: "Lecture 2 — Section 2.1.6",
          likely: "medium",
        },
        {
          q: "52. The original version of HTTP is called:",
          options: ["HTTP/0.9", "HTTP/1.1", "HTTP/2", "HTTP/1.0"],
          correct: 3,
          translation: "النسخة الأصلية من HTTP بتتسمى إيه؟",
          explanation:
            "HTTP/1.0 هو الأصلي (RFC 1945، early 1990s). HTTP/1.1 الأغلب حالياً، HTTP/2 الجديد.",
          tags: ["HTTP versions"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "medium",
        },
        {
          q: "53. The three-way handshake used to establish a TCP connection involves how many TCP segments?",
          options: ["Two", "Three", "Four", "One"],
          correct: 1,
          translation: "الـ three-way handshake بيشمل كام TCP segment؟",
          explanation:
            "3 segments: client يبعت، server يرد بـ acknowledge، client يـ acknowledge تاني. ده عشان كده اسمه three-way.",
          tags: ["TCP", "Three-way handshake"],
          ref: "Lecture 2 — Section 2.2.2 (Figure 2.7)",
          likely: "medium",
        },
        {
          q: "54. The request line of an HTTP request message has how many fields?",
          options: ["Two", "Four", "One", "Three"],
          correct: 3,
          translation: "الـ request line فيها كام field؟",
          explanation:
            "3: method field (GET/POST/...)، URL field، HTTP version field. تعريف مهم.",
          tags: ["HTTP Request", "Request line"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "medium",
        },
        {
          q: "55. The HEAD method is often used by application developers for:",
          options: [
            "Uploading files",
            "Deleting objects",
            "Encrypting the connection",
            "Debugging",
          ],
          correct: 3,
          translation: "الـ HEAD method بيتستخدم لإيه غالبا؟",
          explanation: "debugging. مش لرفع أو حذف أو تشفير، ده شغل المطورين.",
          tags: ["HTTP Methods", "HEAD"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "medium",
        },
        {
          q: "56. The PUT method allows a user to:",
          options: [
            "Request a French version of an object",
            "Close the TCP connection",
            "Delete an object on the server",
            "Upload an object to a specific path (directory) on a specific Web server",
          ],
          correct: 3,
          translation: "الـ PUT method بيتيح للمستخدم يعمل إيه؟",
          explanation:
            "رفع object لمسار محدد على السيرفر. DELETE للحذف، Accept-language للغة، Connection: close لقفل الاتصال.",
          tags: ["HTTP Methods", "PUT"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "medium",
        },
        {
          q: "57. The User-agent: header line specifies:",
          options: [
            "The size of the requested object",
            "The host name of the server",
            "The state of the connection",
            "The user agent, i.e., the browser type making the request",
          ],
          correct: 3,
          translation: "الـ User-agent: header بيشير لإيه؟",
          explanation:
            "نوع البراوزر (زي Mozilla/5.0). مفيد عشان السيرفر يبعت نسخ مختلفة من نفس الـ object لأنواع مختلفة.",
          tags: ["HTTP Headers", "User-agent"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "medium",
        },
        {
          q: "58. The Accept-language: header line indicates:",
          options: [
            "The user prefers to receive a particular language version of the object, if available",
            "The request method being used",
            "The server software version",
            "The browser type making the request",
          ],
          correct: 0,
          translation: "الـ Accept-language: header بيشير لإيه؟",
          explanation:
            "تفضيل لغة اليوزر (زي fr للفرنسية). لو موجودة السيرفر بيبعتها، غير كده بيبعت النسخة الافتراضية. ده content negotiation header.",
          tags: ["HTTP Headers", "Accept-language"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "medium",
        },
        {
          q: "59. The Content-Length: header line indicates:",
          options: [
            "The number of bytes in the object being sent",
            "The time when the object was created",
            "The server's name",
            "The type of the object in the entity body",
          ],
          correct: 0,
          translation: "الـ Content-Length: header بيشير لإيه؟",
          explanation:
            "عدد البايتس في الـ object. Last-Modified للوقت، Content-Type للنوع، Server لاسم السيرفر.",
          tags: ["HTTP Headers", "Content-Length"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "medium",
        },
        {
          q: "60. The Content-Type: header line indicates:",
          options: [
            "The number of bytes in the object",
            "The browser type making the request",
            "The type of the object in the entity body (e.g., HTML text)",
            "The server's hostname",
          ],
          correct: 2,
          translation: "الـ Content-Type: header بيشير لإيه؟",
          explanation:
            "نوع الـ object (مثلاً text/html). Content-Length للحجم، User-agent للبراوزر، Host للسيرفر.",
          tags: ["HTTP Headers", "Content-Type"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Compare and contrast the services provided by TCP and UDP to applications.",
          translation:
            "قارن وبيّن الفروق بين الخدمات اللي TCP و UDP بيوفّروهاها للتطبيقات.",
          answer:
            "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two transport protocols the Internet provides to applications.\nTCP service model includes:\n1. Connection-oriented service: client and server exchange control information via handshaking before application messages flow; the connection is full-duplex and must be torn down after use.\n2. Reliable data transfer: TCP delivers all data without error, in proper order, with no missing or duplicate bytes.\n3. Congestion-control mechanism: throttles sender when network is congested, benefiting the Internet as a whole.\n\nUDP is a no-frills, lightweight protocol:\n1. Connectionless: no handshaking before communication.\n2. Unreliable data transfer: no guarantee messages will reach the receiving process; messages may arrive out of order.\n3. No congestion-control mechanism: the sender can pump data into the network layer at any rate.\n\nKey differences: TCP is reliable and connection-oriented; UDP is fast and connectionless. TCP is used for e-mail, Web, and file transfer; UDP is preferred for Internet telephony and other applications tolerant of some loss.",
          tags: ["TCP", "UDP", "Comparison"],
          ref: "Lecture 2 — Section 2.1.4 (TCP Services, UDP Services)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain TCP's connection-oriented service in detail.",
          translation: "اشرح خدمة الـ connection-oriented في TCP بالتفصيل.",
          answer:
            "TCP's connection-oriented service requires the client and server to exchange transport-layer control information with each other before application-level messages begin to flow.\nThis handshaking procedure alerts the client and server, allowing them to prepare for an incoming onslaught of packets.\nAfter the handshaking phase, a TCP connection is said to exist between the sockets of the two processes.\nThe connection is full-duplex, meaning both processes can send messages to each other over the connection at the same time.\nWhen the application finishes sending messages, it must explicitly tear down the connection. Connection-oriented service is implemented in detail in Chapter 3.",
          tags: ["TCP", "Connection-oriented", "Handshaking"],
          ref: "Lecture 2 — Section 2.1.4 (Connection-oriented service)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain TCP's reliable data transfer service and what it guarantees to the application.",
          translation:
            "اشرح خدمة النقل الموثوق في TCP وإيه اللي بتضمنه للتطبيق.",
          answer:
            "TCP's reliable data transfer service guarantees that the communicating processes can rely on TCP to deliver all data sent without error and in the proper order.\nWhen one side of the application passes a stream of bytes into a socket, it can count on TCP to deliver the same stream of bytes to the receiving socket, with no missing or duplicate bytes.\nThis means applications built on TCP do not need to worry about lost packets, reordering, or duplication — TCP handles all of that internally.\nTCP also includes a congestion-control mechanism, but this is a service for the general welfare of the Internet rather than for the direct benefit of the communicating processes.",
          tags: ["TCP", "Reliable data transfer"],
          ref: "Lecture 2 — Section 2.1.4 (Reliable data transfer service)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. What services are NOT provided by today's Internet transport protocols, and how do time-sensitive applications cope with this limitation?",
          translation:
            "إيه الخدمات اللي بروتوكولات نقل الإنترنت مش بتوفّرها، وإزاي التطبيقات الحساسة للزمن بتتعامل مع القصر ده؟",
          answer:
            "Transport protocol services are organized along four dimensions: reliable data transfer, throughput, timing, and security.\nTCP provides reliable end-to-end data transfer, and TCP can be enhanced at the application layer with TLS to provide security.\nHowever, today's Internet transport protocols conspicuously do NOT provide any throughput or timing guarantees.\nDespite this, time-sensitive applications such as Internet telephony can run on the Internet because they have been designed to cope, to the greatest extent possible, with this lack of guarantee.\nThese applications often work fairly well, but the Internet cannot provide any timing or throughput guarantees to them — the service is best-effort, not guaranteed.",
          tags: ["Transport Services", "Throughput", "Timing"],
          ref: "Lecture 2 — Section 2.1.4 (Services Not Provided)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Define an application-layer protocol and list what it defines.",
          translation: "عرّف بروتوكول طبقة التطبيق واكتب اللي بحدده.",
          answer:
            "An application-layer protocol defines how an application's processes, running on different end systems, pass messages to each other.\nIn particular, an application-layer protocol defines:\n1. The types of messages exchanged, for example request messages and response messages.\n2. The syntax of the various message types, such as the fields in the message and how the fields are delineated.\n3. The semantics of the fields, i.e., the meaning of the information in the fields.\n4. Rules for determining when and how a process sends messages and responds to messages.\nSome application-layer protocols (such as HTTP) are specified in RFCs and are therefore in the public domain; others (such as Skype's) are proprietary and not publicly available.",
          tags: ["Application-Layer Protocols", "Definition"],
          ref: "Lecture 2 — Section 2.1.5",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Distinguish between a network application and an application-layer protocol, with examples.",
          translation:
            "بيّن الفرق بين network application و application-layer protocol، مع أمثلة.",
          answer:
            "A network application is a complete system that provides a service to users; an application-layer protocol is only one piece (albeit a very important piece) of a network application.\nExample 1 - The Web: The Web is a client-server application that allows users to obtain documents on demand. It includes a standard for document formats (HTML), Web browsers (Chrome, Internet Explorer), Web servers (Apache, Microsoft servers), and the HTTP application-layer protocol. HTTP defines only the format and sequence of messages exchanged between browser and Web server.\nExample 2 - Netflix: Netflix's video service includes servers that store and transmit videos, other servers that manage billing and other client functions, clients (the Netflix app on your smartphone, tablet, or computer), and the DASH application-layer protocol. DASH defines only the format and sequence of messages exchanged between a Netflix server and client.\nThus, an application-layer protocol is one component of the larger network application.",
          tags: [
            "Network Applications",
            "Application-Layer Protocols",
            "Comparison",
          ],
          ref: "Lecture 2 — Section 2.1.5 (Examples paragraph)",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the key characteristics of HTTP, including its architecture, transport protocol, default port, and state.",
          translation:
            "اشرح الخصائص الأساسية لـ HTTP، بما فيها الـ architecture، البروتوكول التحتي، البورت الافتراضي، والـ state.",
          answer:
            "HTTP (Hyper Text Transfer Protocol) is the Web's application-layer protocol, defined in RFCs 1945, 7230, and 7540.\nKey characteristics:\n1. Client-server architecture: client program (browser) and server program execute on different end systems and talk to each other by exchanging HTTP messages. The Web server is always on, with a fixed IP address, and services requests from potentially millions of different browsers.\n2. Uses TCP as its underlying transport protocol (not UDP). The HTTP client first initiates a TCP connection with the server.\n3. Default port number is 80.\n4. Stateless: the server maintains no state information about the client. If a client asks for the same object twice in a few seconds, the server resends the object because it has forgotten the previous request.\n5. Original version is HTTP/1.0 (early 1990s); as of 2020, the majority of HTTP transactions take place over HTTP/1.1; HTTP/2 is increasingly supported.",
          tags: ["HTTP", "Architecture", "TCP", "Port 80", "Stateless"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define the terms Web page, object, base HTML file, and URL, and explain how they are related.",
          translation:
            "عرّف المصطلحات: Web page، object، base HTML file، URL، واشرح العلاقة بينهم.",
          answer:
            "A Web page (also called a document) consists of objects.\nAn object is a file — such as an HTML file, a JPEG image, a JavaScript file, a CSS style sheet file, or a video clip — that is addressable by a single URL.\nMost Web pages consist of a base HTML file and several referenced objects.\nFor example, if a Web page contains HTML text and five JPEG images, then the Web page has six objects: the base HTML file plus the five images.\nThe base HTML file references the other objects in the page with the objects' URLs.\nEach URL has two components: the hostname of the server that houses the object, and the object's path name.\nExample: the URL www.someSchool.edu/someDepartment/picture.gif has www.someSchool.edu as the hostname and /someDepartment/picture.gif as the path name.",
          tags: ["Web Page", "Objects", "Base HTML", "URL"],
          ref: "Lecture 2 — Section 2.2.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain why HTTP is called a stateless protocol and what this means for the server.",
          translation:
            "اشرح ليه HTTP بيتوصف بأنه stateless وإيه معنى ده للسيرفر.",
          answer:
            "HTTP is called a stateless protocol because the server sends requested files to clients without storing any state information about the client.\nIf a particular client asks for the same object twice in a period of a few seconds, the server does not respond by saying that it just served the object to the client — instead, the server resends the object because it has completely forgotten what it did earlier.\nBecause an HTTP server maintains no information about clients, HTTP is said to be a stateless protocol.\nThis design simplifies server implementation and allows the server to handle many clients simultaneously without per-client state overhead.\nHowever, Web applications that need to track user behavior (e.g., shopping carts, login sessions) must add state on top of HTTP using mechanisms such as cookies — which are not part of the core HTTP protocol discussed here.",
          tags: ["HTTP", "Stateless"],
          ref: "Lecture 2 — Section 2.2.1 (stateless paragraph)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Compare non-persistent and persistent HTTP connections, mentioning the advantages of persistent connections.",
          translation:
            "قارن بين اتصالات non-persistent و persistent في HTTP، واذكر مزايا الـ persistent.",
          answer:
            "Non-persistent connections: each request/response pair is sent over a separate TCP connection. Each TCP connection transports exactly one request message and one response message, and the connection is closed after the server sends the object.\nPersistent connections: the server leaves the TCP connection open after sending a response. Subsequent requests and responses between the same client and server can be sent over the same connection.\n\nAdvantages of persistent connections:\n1. A brand-new connection does not need to be established and maintained for each requested object — this avoids TCP buffer allocation and TCP variable overhead on both client and server, reducing the burden on the Web server.\n2. With pipelining, requests for objects can be made back-to-back without waiting for replies to pending requests, which significantly reduces latency.\n3. An entire Web page (e.g., the base HTML file and 10 images) can be sent over a single persistent TCP connection; even multiple Web pages from the same server can be sent over a single connection.\n\nDisadvantages of non-persistent connections:\n1. Each object suffers a delivery delay of two RTTs (one RTT for connection setup, one for request/response).\n2. They place a significant burden on the Web server, which must allocate buffers and variables for each new connection.\n\nThe default mode of HTTP uses persistent connections with pipelining.",
          tags: ["HTTP", "Non-persistent", "Persistent", "Pipelining"],
          ref: "Lecture 2 — Section 2.2.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain the structure of an HTTP request message in detail, listing its main components.",
          translation:
            "اشرح بنية رسالة HTTP request بالتفصيل، مع ذكر المكونات الرئيسية.",
          answer:
            "An HTTP request message is written in ordinary ASCII text so that it can be read by humans. It consists of:\n1. A request line (the first line), which has three fields: the method field, the URL field, and the HTTP version field. The method field can take on values including GET, POST, HEAD, PUT, and DELETE.\n2. Header lines (subsequent lines), each followed by a carriage return and a line feed. Common header lines include Host, Connection, User-agent, and Accept-language.\n3. An entity body (after the header lines and an additional carriage return/line feed). The entity body is empty with the GET method, but is used with the POST method to carry the user's input from a form.\n\nExample request message:\nGET /somedir/page.html HTTP/1.1\nHost: www.someschool.edu\nConnection: close\nUser-agent: Mozilla/5.0\nAccept-language: fr\n\nThe Host: header specifies the host on which the object resides. Connection: close tells the server the browser wants the connection closed after sending the object. User-agent: identifies the browser type. Accept-language: indicates the user's preferred language.",
          tags: ["HTTP Request", "Request line", "Headers"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Explain the structure of an HTTP response message in detail.",
          translation: "اشرح بنية رسالة HTTP response بالتفصيل.",
          answer:
            "An HTTP response message has three sections:\n1. An initial status line (the first line), with three fields: the protocol version field, a status code, and a corresponding status message.\n2. Six (or more) header lines, such as Connection, Date, Server, Last-Modified, Content-Length, and Content-Type.\n3. An entity body, which is the meat of the message — it contains the requested object itself.\n\nExample response message:\nHTTP/1.1 200 OK\nConnection: close\nDate: Tue, 18 Aug 2015 15:44:04 GMT\nServer: Apache/2.2.3 (CentOS)\nLast-Modified: Tue, 18 Aug 2015 15:11:03 GMT\nContent-Length: 6821\nContent-Type: text/html\n(data data data data data ...)\n\nConnection: close means the server will close the TCP connection after sending the message. Date: is when the response was created/sent (not when the object was created). Server: identifies the server software. Last-Modified: indicates when the object was last changed and is critical for caching. Content-Length: is the byte count of the object. Content-Type: indicates the object's media type.",
          tags: ["HTTP Response", "Status line", "Headers"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. List and explain the common HTTP status codes given in this lecture.",
          translation:
            "اكتب واشرح أكواد الـ status الشائعة اللي ذكرت في المحاضرة.",
          answer:
            "Common HTTP status codes and their associated phrases:\n1. 200 OK: The request succeeded and the information (the requested object) is returned in the response.\n2. 301 Moved Permanently: The requested object has been permanently moved; the new URL is specified in the Location: header of the response message. The client software will automatically retrieve the new URL.\n3. 400 Bad Request: A generic error code indicating that the request could not be understood by the server.\n4. 404 Not Found: The requested document does not exist on this server.\n5. 505 HTTP Version Not Supported: The requested HTTP protocol version is not supported by the server.",
          tags: ["HTTP Status Codes"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Response Message)",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. Compare the GET and POST HTTP methods, and briefly mention the HEAD, PUT, and DELETE methods.",
          translation:
            "قارن بين طريقتي GET و POST في HTTP، واذكر باختصار HEAD و PUT و DELETE.",
          answer:
            "GET method: used when the browser requests an object, with the requested object identified in the URL field. The entity body is empty with GET. It is the most common HTTP method.\nPOST method: an HTTP client often uses the POST method when the user fills out a form — for example, when a user provides search words to a search engine. With POST, the user is still requesting a Web page, but the specific content depends on what the user entered into the form fields. The entity body contains what the user entered in the form fields.\nImportant note: HTML forms do not necessarily use POST — they can use GET and include the inputted data in the requested URL (e.g., www.somesite.com/animalsearch?monkeys&bananas).\n\nOther methods:\n1. HEAD: similar to GET; often used by application developers for debugging.\n2. PUT: often used in conjunction with Web publishing tools; allows a user to upload an object to a specific path (directory) on a specific Web server.\n3. DELETE: allows a user or an application to delete an object on a Web server.",
          tags: ["HTTP Methods", "GET", "POST", "HEAD", "PUT", "DELETE"],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "high",
        },
        {
          type: "essay",
          q: "15. List the five important network applications covered in this chapter and briefly state why each is included.",
          translation:
            "اكتب التطبيقات الخمسة المهمة اللي الكتاب بيركز عليها في الفصل وإيه سبب إدراج كل واحد.",
          answer:
            "The book covers five important network applications:\n1. The Web — enormously popular; its application-layer protocol, HTTP, is straightforward and easy to understand.\n2. Electronic mail — the Internet's first killer application; more complex than the Web because it uses several application-layer protocols.\n3. DNS (directory service) — provides a directory service for the Internet; users invoke DNS indirectly through other applications; illustrates how core network functionality (name-to-address translation) can be implemented at the application layer.\n4. P2P file sharing applications.\n5. Video streaming on demand, including distributing stored video over content distribution networks.",
          tags: ["Network Applications"],
          ref: "Lecture 2 — Section 2.1.6",
          likely: "medium",
        },
        {
          type: "essay",
          q: "16. Explain the role of the following HTTP request header lines: Host, Connection, User-agent, and Accept-language.",
          translation:
            "اشرح دور الـ header lines دي في HTTP request: Host, Connection, User-agent, Accept-language.",
          answer:
            "Host: www.someschool.edu — specifies the host on which the object resides. This may seem unnecessary because a TCP connection is already in place to the host, but the information provided by the host header line is required by Web proxy caches.\nConnection: close — tells the server that the browser does not want to bother with persistent connections; it wants the server to close the connection after sending the requested object.\nUser-agent: Mozilla/5.0 — specifies the user agent, i.e., the browser type making the request. Here the user agent is a Firefox browser. This header is useful because the server can actually send different versions of the same object to different types of user agents.\nAccept-language: fr — indicates that the user prefers to receive a French version of the object, if such an object exists on the server; otherwise, the server should send its default version. Accept-language is one of many content negotiation headers available in HTTP.",
          tags: [
            "HTTP Headers",
            "Host",
            "Connection",
            "User-agent",
            "Accept-language",
          ],
          ref: "Lecture 2 — Section 2.2.3 (HTTP Request Message)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. (Calculation) Calculate the total response time for fetching a base HTML file using non-persistent HTTP. Given: RTT = 100 ms, transmission time of the HTML file at the server = 50 ms. Ignore all other delays.",
          translation:
            "(مسألة) احسب إجمالي زمن الاستجابة لجلب base HTML file باستخدام non-persistent HTTP. المعطيات: RTT = 100 ms، زمن نقل الـ HTML على السيرفر = 50 ms. تجاهل باقي التأخيرات.",
          answer:
            "Given:\n- RTT (round-trip time) = 100 ms\n- Transmission time of the HTML file at the server = 50 ms\n\nFormula (from lecture): Total response time = 2 RTTs + transmission time at the server.\n\nStep-by-step reasoning:\n1. The first two parts of the three-way handshake take 1 RTT (100 ms).\n2. After completing the first two parts of the handshake, the client sends the HTTP request message combined with the third part of the three-way handshake (the acknowledgment). Once the request arrives at the server, the server sends the HTML file. This HTTP request/response eats up another RTT (100 ms).\n3. The server transmits the HTML file, which takes the transmission time (50 ms).\n\nTotal response time = 2 * 100 ms + 50 ms = 200 ms + 50 ms = 250 ms.\n\nAnswer: 250 ms.",
          tags: ["Calculation", "RTT", "Non-persistent"],
          ref: "Lecture 2 — Section 2.2.2 (response time formula)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. (Calculation) How many TCP connections are needed to fetch a Web page consisting of a base HTML file and 10 JPEG images over non-persistent HTTP? All objects reside on the same server.",
          translation:
            "(مسألة) كام TCP connection محتاج عشان تجيب صفحة ويب فيها base HTML + 10 صور JPEG باستخدام non-persistent HTTP؟ كل الـ objects على نفس السيرفر.",
          answer:
            "Given:\n- Web page consists of 1 base HTML file + 10 JPEG images = 11 objects total.\n- All objects reside on the same server.\n- Connection mode: non-persistent HTTP.\n\nIn non-persistent HTTP, each TCP connection transports exactly one request message and one response message, and the connection is closed after the server sends the object.\n\nTherefore, the number of TCP connections = number of objects = 11.\n\nAnswer: 11 TCP connections are generated when the user requests this Web page.\n\nNote: This is exactly why the lecture introduces persistent connections — to avoid opening a new TCP connection for each object.",
          tags: ["Calculation", "TCP connections", "Non-persistent"],
          ref: "Lecture 2 — Section 2.2.2 (Non-persistent walk-through)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. (Calculation) Calculate the total time to fetch a Web page with 1 base HTML file and 9 JPEG images (10 objects total) using non-persistent HTTP, assuming serial TCP connections (one connection at a time). Given: RTT = 200 ms, transmission time per object = 20 ms. Ignore other delays.",
          translation:
            "(مسألة) احسب إجمالي الزمن لجلب صفحة ويب فيها 1 HTML + 9 JPEG (10 objects) باستخدام non-persistent HTTP مع اتصالات serial. المعطيات: RTT = 200 ms، زمن النقل لكل object = 20 ms.",
          answer:
            "Given:\n- Number of objects = 1 HTML + 9 JPEG = 10 objects.\n- RTT = 200 ms.\n- Transmission time per object = 20 ms.\n- Non-persistent HTTP, serial (one TCP connection at a time).\n\nFormula per object: Time per object = 2 RTTs + transmission time.\n\nTime per object = 2 * 200 + 20 = 400 + 20 = 420 ms.\n\nTotal time = number of objects * time per object = 10 * 420 = 4200 ms = 4.2 seconds.\n\nAnswer: 4200 ms (4.2 seconds).\n\nNote: If the browser opens parallel TCP connections instead of serial, the actual wall-clock time could be shorter — but the total connection work and total bytes transferred remain the same.",
          tags: ["Calculation", "RTT", "Non-persistent"],
          ref: "Lecture 2 — Section 2.2.2 (response time formula + non-persistent walk-through)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. (Calculation) Using persistent HTTP with pipelining, calculate the total time to fetch the same Web page (1 base HTML file + 9 JPEG images, 10 objects total). Given: RTT = 200 ms, transmission time per object = 20 ms. Assume requests are pipelined after the base HTML is received.",
          translation:
            "(مسألة) باستخدام persistent HTTP مع pipelining، احسب إجمالي الزمن لجلب نفس الصفحة (1 HTML + 9 JPEG = 10 objects). المعطيات: RTT = 200 ms، زمن النقل لكل object = 20 ms. افترض إن الطلبات بتتحط pipelined بعد ما HTML بيوصلك.",
          answer:
            "Given:\n- 10 objects (1 base HTML + 9 JPEG).\n- RTT = 200 ms.\n- Transmission time per object = 20 ms.\n- Persistent HTTP with pipelining.\n\nSteps:\n1. TCP three-way handshake: the first two parts take 1 RTT = 200 ms.\n2. After the handshake, the client sends the HTTP request for the base HTML file over the same connection. The server returns the HTML file. This request/response takes 1 RTT + transmission time of the HTML = 200 + 20 = 220 ms.\n3. With pipelining, after the HTML is received, the client sends requests for the 9 JPEG objects back-to-back over the same TCP connection (no new handshakes needed). The server sends them back-to-back.\n   - One additional RTT for the 9-image request/response batch = 200 ms.\n   - Transmission time for 9 images = 9 * 20 = 180 ms.\n\nTotal time = 200 (handshake) + 220 (HTML round) + 200 (images request/response) + 180 (images transmission) = 800 ms.\n\nSimplified rough estimate (treating all 10 objects as one pipelined batch after the handshake):\nTotal ≈ 2 RTTs + sum of all transmission times = 2 * 200 + 10 * 20 = 400 + 200 = 600 ms.\n\nAnswer: between 600 ms and 800 ms, roughly 600 ms (compared to 4200 ms for non-persistent serial — a ~7x speedup).",
          tags: ["Calculation", "RTT", "Persistent", "Pipelining"],
          ref: "Lecture 2 — Section 2.2.2 (Persistent connections)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. (Calculation) For a Web page with 1 base HTML file + 4 JPEG images (5 objects total), calculate the total time over non-persistent HTTP (serial, one TCP connection at a time). Given: RTT = 150 ms, transmission time per object = 30 ms.",
          translation:
            "(مسألة) لصفحة ويب فيها 1 HTML + 4 JPEG (5 objects)، احسب إجمالي الزمن على non-persistent HTTP (serial). المعطيات: RTT = 150 ms، زمن النقل لكل object = 30 ms.",
          answer:
            "Given:\n- 5 objects (1 HTML + 4 JPEG).\n- RTT = 150 ms.\n- Transmission time per object = 30 ms.\n- Non-persistent HTTP, serial.\n\nFormula per object: Time = 2 RTTs + transmission time = 2 * 150 + 30 = 300 + 30 = 330 ms.\n\nTotal time (serial, 5 objects) = 5 * 330 = 1650 ms = 1.65 seconds.\n\nAnswer: 1650 ms (1.65 seconds).\n\nComparison: over persistent HTTP with pipelining, the same page would take roughly 2 RTTs + 5 transmission times = 2 * 150 + 5 * 30 = 300 + 150 = 450 ms — about 3.7x faster than non-persistent serial.",
          tags: ["Calculation", "RTT", "Non-persistent"],
          ref: "Lecture 2 — Section 2.2.2 (Non-persistent walk-through)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. (Calculation) An Internet telephony application sends 200 packets per second. Each packet is 200 bytes. Calculate the data rate at which the sender pumps data, and explain why this is acceptable for UDP but problematic for TCP.",
          translation:
            "(مسألة) تطبيق إنترنت تليفوني بيبعت 200 باكت في الثانية، كل باكت 200 بايت. احسب معدل ضخ البيانات، واشرح ليه ده مقبول لـ UDP ومشكلة لـ TCP.",
          answer:
            "Given:\n- 200 packets/second.\n- Each packet = 200 bytes.\n\nCalculation:\nTotal data rate = 200 packets/s * 200 bytes/packet = 40,000 bytes/s = 40 KB/s = 320 kbps (since 1 byte = 8 bits).\n\nExplanation:\nUDP has no congestion-control mechanism, so the sender can pump data at this rate (320 kbps) regardless of the network state. Internet telephony is designed to tolerate some loss, so it works fine.\nIf TCP were used instead, TCP's congestion-control mechanism would throttle the sender when the network is congested between sender and receiver. This throttling causes additional latency and retransmission that is undesirable for time-sensitive applications like Internet telephony.\nTherefore, developers of Internet telephony applications prefer UDP for lower latency, circumventing TCP's congestion control. They use TCP as a backup only when firewalls block UDP traffic.",
          tags: ["Calculation", "UDP", "TCP", "Congestion Control"],
          ref: "Lecture 2 — Section 2.1.4 (UDP Services + Figure 2.5 commentary)",
          likely: "medium",
        },
      ],
    },
    {
      t: "  — المحاضرة 6 الفصل الثاني (الجزء الثالث): الكوكيز، التخزين المؤقت للويب، HTTP/2 و HTTP/3",
      d: "مفاهيم الكوكيز (Cookies)، التخزين المؤقت للويب (Web Caching) عبر الخادم الوسيط، طلبات GET الشرطية (Conditional GET)، تأطير HTTP/2 ودفع الخادم (Server Push)، و HTTP/3 عبر بروتوكول QUIC.",
      id: "computer-networks-lecture-6",
      pdf: "datenew/subjects/computer-networks/lectures/lec 6/Lecture-6.pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/Ch02/Lecture-6-Questions.pdf",
      // المحاضرة: Computer Networks — Lecture 6 (Ch 2, Lec 3) — Cookies, Web Caching (Proxy Server), Conditional GET, HTTP/2 (Framing, Prioritization, Server Push), HTTP/3 over QUIC

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمواضيع المحاضرة 6 (المحاضرة 3 داخل الفصل 2): cookies، web caching، HTTP/2 و HTTP/3.",
          links: [
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي كامل لكتاب Kurose & Ross:Application Layer: Principles of Network Applications & HTTP، فديوهات (من 10 الي 11) ",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL8v_bZALWLKE9Lo2BIy8nsdsakbSvQlEo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شبكات الحاسوب - A Top-Down Approach (الكتاب نفسه)",
              d: "شرح عربي كامل لكتاب Kurose & Ross:Application Layer: Principles of Network Applications & HTTP، فديوهات (12) ",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=n1qn1UUaMog&list=PLYljoJMAPFLHrCVfzuMLkJOZHhCgfSXG-&index=12",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح مفهوم Cookies وكيفية عملها داخل المواقع الإلكترونية",
              d: "شرح بالعربي لآلية عمل cookies: Set-cookie في الـ response، Cookie في الـ request، تخزين الـ cookie file على جهاز اليوزر، والـ back-end database. مناسب لفهم القسم 2.2.4.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=uO1WQcX5W8o",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "قائمة شرح Cookies بالعربي (Cookies playlist)",
              d: "قائمة تشغيل بالعربي بتشرح كل ما تحتاج معرفته عن cookies: التعريف، أنواعها، آلية عملها، وأهميتها لأصحاب المواقع. تكمل القسم 2.2.4.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLOXBaGn5vGihwbPijry3Vp14OqY21D2ae",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "ما تحتاج معرفته عن الكوكيز (Cookies) — مقال بالعربي",
              d: "مقال بالعربي عن cookies: أنواعها، طريقة عملها، وأهميتها لأصحاب المواقع. مفيد لفهم الـ privacy concern المذكورة في المحاضرة 6 (Ch 2, Lec 3).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://nakibvps.com/blog/%D8%A7%D9%84%D9%83%D9%88%D9%83%D9%8A%D8%B2-cookies",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات إنجليزية مرئية وقنوات معروفة بشرح HTTP/2، HTTP/3، و QUIC.",
          links: [
            {
              t: "Hussein Nasser — HTTP/2 Crash Course",
              d: "قائمة تشغيل لمهندس باك-إند معروف، فيها شرح HTTP 1.0 / 1.1 / 2 بعمق، ومقارنة بين النسخ. مفيد جداً لفهم القسم 2.2.6 (HTTP/2 framing و server push).",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLQnljOFTspQWbBegaU790WhH7gNKcMAl-",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "PowerCert Animated Videos — Networking (English Version)",
              d: "قائمة فيديوهات Animated بتشرح HTTP/2، HTTP/3، TLS، و QUIC بأسلوب بصري مفهوم. الأسلوب البصري بيساعد على تثبيت الفروق بين النسخ في الذاكرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpXfHEl2fzl72d5ne2gsxSyFNagcHyCML",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Khan Academy — Internet 101 (Computer Science)",
              d: "قائمة تشغيل من Khan Academy بتشرح أساسيات الإنترنت بما فيها TCP/UDP و DNS و HTTP. مفهوم كمقدمة للمحاضرة 6 وربطها بـ Chapter 1.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HD8wtmKZh0nKOsOvP1KYaNO",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },

        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مصادر مكتوبة رسمية: Cloudflare Learning، MDN Web Docs، Wikipedia، GeeksforGeeks — بشرح cookies و HTTP/2 و HTTP/3 و conditional GET و caching.",
          links: [
            {
              t: "MDN Web Docs (Mozilla) — HTTP Cookies",
              d: "المرجع الرسمي لمطوري الويب لشرح cookies: Set-Cookie header، Cookie header، السمات (attributes)، والـ security flags. مطابق للقسم 2.2.4.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 Using HTTP cookies",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 Set-Cookie header reference",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 Cookie header reference",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cookie",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Cloudflare Learning Center",
              d: "مصدر رسمي من Cloudflare بشرح HTTP/2، HTTP/3، و QUIC بأسلوب مبسط ودقيق. مهم لفهم القسم 2.2.6 (HTTP/2 و HTTP/3).",
              icon: "📚",
              actions: [
                {
                  label: "🌐 HTTP/2 vs. HTTP/1.1",
                  url: "https://www.cloudflare.com/learning/performance/http2-vs-http1.1",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 What is HTTP/3?",
                  url: "https://www.cloudflare.com/learning/performance/what-is-http3",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 What is caching? (CDN)",
                  url: "https://www.cloudflare.com/learning/cdn/what-is-caching",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Wikipedia — HTTP/2 and HTTP/3",
              d: "مقال موسوعي عن HTTP/2 (تاريخه، framing، multiplexing، server push، HPACK) وعن HTTP/3 و QUIC. يكمل المحاضرة 6 (Ch 2, Lec 3) بتفاصيل إضافية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 HTTP/2 — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/HTTP/2",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 HTTP cookie — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/HTTP_cookie",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks — HTTP State Management (Cookies)",
              d: "مقال تعليمي عن cookies في الشبكات: تعريفها، أنواعها، آلية عملها، و أمثلة. مفهوم لمراجعة القسم 2.2.4.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 HTTP State Management (Cookies)",
                  url: "https://www.geeksforgeeks.org/computer-networks/http-state-management-cookies",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات عملية لاختبار cookies و HTTP/2 / HTTP/3 — تستخدم في الـ labs لمراقبة الـ headers والـ protocol versions.",
          links: [
            {
              t: "Wireshark — Network Protocol Analyzer",
              d: "أداة لالتقاط وتحليل باكتات الشبكة. ممكن تستخدمها عشان تشوف Set-cookie و Cookie headers فعلًا، وكمان الـ frames بتاعت HTTP/2. أداة معتمدة في معظم مقررات الشبكات.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "Squid — Optimising Web Delivery (Caching Proxy)",
              d: "أداة open-source شهيرة لـ Web caching / proxy server — عملياً تطبيق لمفهوم الـ Web cache (proxy server) المذكور في القسم 2.2.5. بتستخدمها مؤسسات كتير لتقليل الـ traffic على الـ access link.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.squid-cache.org",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "nghttp2 — HTTP/2 Command-Line Client",
              d: "أداة سطر أوامر لاختبار HTTP/2 (و HTTP/3 في نسخ حديثة). ممكن تشوف بيها framing و prioritization و server push فعلًا على جهازك. مفهوم لـ labs متقدمة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://nghttp2.org",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        {
          q: "1. HTTP uses cookies because the HTTP server is:",
          options: [
            "Reliable",
            "Persistent",
            "Connection-oriented",
            "Stateless",
          ],
          correct: 3,
          translation: "HTTP بيستخدم cookies لأن السيرفر بيتوصف بـ إيه؟",
          explanation:
            "HTTP server stateless — ما بيبقاش عنده معلومات عن الـ clients. cookies بتحل المشكلة دي عشان تـ track المستخدمين.",
          tags: ["Cookies", "Stateless"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          q: "2. Cookie technology has how many components?",
          options: ["Two", "Three", "Four", "Five"],
          correct: 2,
          translation: "تقنية cookies فيها كام مكوّن؟",
          explanation:
            "4 مكونات: cookie header في الـ response، cookie header في الـ request، cookie file على جهاز اليوزر، back-end database على السيرفر. نقطة مرقمة مهمة.",
          tags: ["Cookies", "Components"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (Figure 2.10)",
          likely: "high",
        },
        {
          q: "3. Which of the following is NOT a component of cookie technology?",
          options: [
            "A back-end database at the Web site",
            "A cookie header line in the HTTP request message",
            "A cookie header line in the TCP handshake",
            "A cookie header line in the HTTP response message",
          ],
          correct: 2,
          translation: "إيه اللي مش مكون من مكونات الـ cookies؟",
          explanation:
            "الـ 4 مكونات هي: header في الـ response، header في الـ request، file على اليوزر، database على السيرفر. مفيش cookie header في الـ TCP handshake.",
          tags: ["Cookies", "Components"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (Figure 2.10)",
          likely: "high",
        },
        {
          q: "4. Which HTTP response header is used by the server to send a cookie to the browser?",
          options: [
            "If-Modified-Since:",
            "Last-Modified:",
            "Set-cookie:",
            "Cookie:",
          ],
          correct: 2,
          translation:
            "إيه الـ HTTP response header اللي السيرفر بيبعته للـ browser عشان يبعت cookie؟",
          explanation:
            "Set-cookie: في الـ response من السيرفر. Cookie: في الـ request من الـ browser. Last-Modified و If-Modified-Since للـ conditional GET.",
          tags: ["Cookies", "Set-cookie", "Headers"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          q: "5. Which HTTP request header does the browser use to send a stored cookie back to the server?",
          options: ["Set-cookie:", "Host:", "User-agent:", "Cookie:"],
          correct: 3,
          translation:
            "إيه الـ HTTP request header اللي الـ browser بيستخدمه عشان يبعت cookie للسيرفر؟",
          explanation:
            "Cookie: في الـ request. مثال: Cookie: 1678. Set-cookie: بيتحط في الـ response، مش الـ request.",
          tags: ["Cookies", "Cookie header"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          q: "6. Where is the cookie file kept?",
          options: [
            "On the user's end system, managed by the user's browser",
            "On the origin server only",
            "On the Web cache",
            "Inside the HTTP response message",
          ],
          correct: 0,
          translation: "فين الـ cookie file بيتخزّن؟",
          explanation:
            "على جهاز اليوزر (end system) وبيديره الـ browser. مش على السيرفر ولا على الـ cache ولا جوه رسالة HTTP.",
          tags: ["Cookies", "Cookie file"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          q: "7. When Susan visits Amazon for the first time, what does the Amazon Web server do?",
          options: [
            "Stores the cookie directly inside the HTTP request",
            "Creates a unique identification number and an entry in its back-end database indexed by that number",
            "Rejects the request because Susan has no cookie yet",
            "Asks Susan to register with full name and address",
          ],
          correct: 1,
          translation: "لما Susan تزور Amazon أول مرة، السيرفر بيعمل إيه؟",
          explanation:
            "السيرفر بيعمل unique ID وentry في الـ back-end database، ويبعتها في Set-cookie header. مش بطلب تسجيل فوراً ولا برفض.",
          tags: ["Cookies", "Back-end database"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (Susan/Amazon example)",
          likely: "high",
        },
        {
          q: "8. What does the browser do when it receives a Set-cookie: header in an HTTP response?",
          options: [
            "Sends the cookie to all servers it knows",
            "Discards the cookie after the session",
            "Stores the cookie in the origin server's database",
            "Appends a line to the special cookie file it manages, including the hostname and the identification number",
          ],
          correct: 3,
          translation:
            "إيه اللي الـ browser بيعمله لما يستقبل Set-cookie header في الـ response؟",
          explanation:
            "بيـ append سطر للـ cookie file فيه hostname + ID. مش بيـ discard ولا بيـ broadcast على كل السيرفرز.",
          tags: ["Cookies", "Browser behavior"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          q: "9. What is the primary reason cookies are considered controversial?",
          options: [
            "They are slow and increase latency",
            "They require upgrading the access link",
            "They can be considered an invasion of privacy",
            "They are unreliable and cause data loss",
          ],
          correct: 2,
          translation: "ليه cookies بيتعتبر عليها جدل؟",
          explanation:
            "لأنها ممكن تعتبر انتهاك privacy — السيرفر يقدر يتعلم كتير عن اليوزر ويبيع معلوماته لطرف تالت. مش لأنها بطيئة ولا غير موثوقة.",
          tags: ["Cookies", "Privacy"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (privacy paragraph)",
          likely: "high",
        },
        {
          q: "10. Amazon uses cookies to provide which service?",
          options: [
            "Shopping cart service",
            "File transfer",
            "DNS resolution",
            "E-mail routing",
          ],
          correct: 0,
          translation: "Amazon بيستخدم cookies عشان يوفّر إيه؟",
          explanation:
            "shopping cart: بيحتفظ بقائمة مشتريات Susan عشان تدفع collectively في الآخر. DNS و الإيميل و FTP مالهم علاقة بـ Amazon cookies.",
          tags: ["Cookies", "Shopping cart"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          q: "11. A Web site can learn a lot about a user by combining:",
          options: [
            "Cookies and TCP sequence numbers",
            "Cookies and ARP tables",
            "Cookies and user-supplied account information",
            "Cookies and DNS records",
          ],
          correct: 2,
          translation:
            "الموقع يقدر يتعلم كتير عن اليوزر عن طريق دمج إيه مع إيه؟",
          explanation:
            "cookies + معلومات الحساب اللي اليوزر بيدخلها (الاسم، الإيميل، البطاقة). DNS و ARP و TCP sequence مالهم علاقة.",
          tags: ["Cookies", "Privacy"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (privacy paragraph)",
          likely: "high",
        },
        {
          q: "12. A Web cache is also called a:",
          options: [
            "Origin server",
            "Proxy server",
            "Mail server",
            "DNS server",
          ],
          correct: 1,
          translation: "الـ Web cache بيتسمى كمان؟",
          explanation:
            "proxy server. بيـ satisfy طلبات HTTP نيابة عن الـ origin server. origin server هو السيرفر الأصلي، mail و DNS ملهمش علاقة.",
          tags: ["Web Caching", "Proxy server"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5",
          likely: "high",
        },
        {
          q: "13. A Web cache satisfies HTTP requests on the behalf of what?",
          options: [
            "A mail server",
            "A DNS server",
            "A router",
            "An origin Web server",
          ],
          correct: 3,
          translation: "الـ Web cache بيـ satisfy طلبات HTTP نيابة عن إيه؟",
          explanation:
            "نيابة عن الـ origin Web server. لو عنده نسخة من الـ object بيبعته للـ client من غير ما يروح للـ origin.",
          tags: ["Web Caching", "Origin server"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5",
          likely: "high",
        },
        {
          q: "14. Where does the Web cache keep copies of recently requested objects?",
          options: [
            "In the DNS",
            "In the origin server",
            "In its own disk storage",
            "In the user's browser only",
          ],
          correct: 2,
          translation:
            "فين الـ Web cache بيخزّن نسخ الـ objects اللي اتطلبت قريب؟",
          explanation:
            "في disk storage بتاعه. مش في browser ولا في origin server ولا DNS — الـ cache عنده storage خاص بيه.",
          tags: ["Web Caching", "Storage"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5",
          likely: "high",
        },
        {
          q: "15. What is the first step when a browser requests an object through a Web cache?",
          options: [
            "The browser sends a UDP packet to the origin server",
            "The browser queries DNS for the cache's IP",
            "The browser establishes a TCP connection to the Web cache and sends an HTTP request for the object to the Web cache",
            "The browser establishes a TCP connection directly to the origin server",
          ],
          correct: 2,
          translation:
            "إيه أول خطوة لما الـ browser يطلب object عبر Web cache؟",
          explanation:
            "الـ browser بيفتح TCP للـ cache ويبعت HTTP request له. مش لـ origin مباشرة ولا UDP ولا DNS query.",
          tags: ["Web Caching", "Steps"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (4 steps)",
          likely: "high",
        },
        {
          q: "16. If the Web cache does NOT have a copy of the requested object, what does it do?",
          options: [
            "Returns an error to the browser",
            "Opens a TCP connection to the origin server, sends an HTTP request, and stores a copy when it receives the object",
            "Sends the request to another browser",
            "Forwards the request via UDP multicast",
          ],
          correct: 1,
          translation: "لو الـ Web cache معندوش نسخة من الـ object، بيعمل إيه؟",
          explanation:
            "يفتح TCP للـ origin server، يبعت HTTP request، يستقبل الـ object، يخزّن نسخة محلياً، ويبعت نسخة للـ browser. مش error ولا broadcast.",
          tags: ["Web Caching", "Steps"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (4 steps)",
          likely: "high",
        },
        {
          q: "17. A Web cache acts as:",
          options: [
            "Both a server and a client at the same time",
            "Only a client",
            "Only a router",
            "Only a server",
          ],
          correct: 0,
          translation: "الـ Web cache بيشتغل كـ إيه؟",
          explanation:
            "server (لما يبعت response للـ browser) و client (لما يبعت request للـ origin server) في نفس الوقت. نقطة مهمة.",
          tags: ["Web Caching", "Server/Client"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5",
          likely: "high",
        },
        {
          q: "18. Web caching has been deployed for which two main reasons?",
          options: [
            "To replace TCP with UDP for faster transport",
            "To reduce response time for client requests and to reduce traffic on an institution's access link",
            "To eliminate the need for DNS",
            "To encrypt HTTP messages and provide security",
          ],
          correct: 1,
          translation:
            "Web caching اتعمل deployment عشان إيه السببين الأساسيين؟",
          explanation:
            "تقليل response time و تقليل traffic على access link. التشفير والـ UDP و إلغاء DNS مالهمش علاقة بـ caching.",
          tags: ["Web Caching", "Benefits"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (two reasons)",
          likely: "high",
        },
        {
          q: "19. In the institutional network example, the access link between the institutional router and the Internet router has a rate of:",
          options: ["1 Mbps", "100 Mbps", "15 Mbps", "1 Gbps"],
          correct: 2,
          translation:
            "في المثال، الـ access link بين راوتر المؤسسة وراوتر الإنترنت سرعته كام؟",
          explanation:
            "15 Mbps. الـ LAN أسرع (100 Mbps). 15 Mbps هي الـ bottleneck اللي بيدخل الـ traffic intensity = 1.",
          tags: ["Web Caching", "Example"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "20. In the institutional example, the Internet delay is approximately:",
          options: ["2 seconds", "2 ms", "200 ms", "20 seconds"],
          correct: 0,
          translation: "في المثال، الـ Internet delay تقريباً كام؟",
          explanation:
            "ثانيتين (2 seconds). بتستخدم في حساب الـ average response time مع الـ hit rate.",
          tags: ["Web Caching", "Example"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "21. What is the traffic intensity on the access link in the original (no-cache) example?",
          options: ["1.0", "0.4", "0.15", "0.6"],
          correct: 0,
          translation:
            "إيه الـ traffic intensity على الـ access link في المثال من غير cache؟",
          explanation:
            "15 req/s * 1 Mbits / 15 Mbps = 1.0. الـ LAN بتطلع 0.15 (مهملة)، بس 1.0 على access link معناها delay كبير بيكبر من غير bound.",
          tags: ["Web Caching", "Traffic intensity"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "22. When the traffic intensity on a link approaches 1, the delay on that link:",
          options: [
            "Decreases linearly",
            "Becomes very large and grows without bound",
            "Stays constant at a few milliseconds",
            "Becomes zero",
          ],
          correct: 1,
          translation:
            "لما الـ traffic intensity تقرب من 1 على link، الـ delay بيعمل إيه؟",
          explanation:
            "بيكبر بشكل كبير وبدون bound. ده عكس intensity 0.15 اللي بتعني delay صغير (tens of ms).",
          tags: ["Web Caching", "Traffic intensity"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "23. The first solution in the example was to upgrade the access link to 100 Mbps. What does this give?",
          options: [
            "No change in response time",
            "Traffic intensity 0.4, total response time 1.2 seconds",
            "Traffic intensity 0.15, total response time roughly 2 seconds (the Internet delay)",
            "Traffic intensity 1.0, total response time on the order of minutes",
          ],
          correct: 2,
          translation: "الحل الأول (ترقية الـ link لـ 100 Mbps) بيدّي إيه؟",
          explanation:
            "intensity 0.15 (مهملة) + Internet delay 2 seconds = إجمالي ~2 seconds. بس مكلف جداً (upgrade link).",
          tags: ["Web Caching", "Upgrade solution"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "24. The second solution installs a Web cache with a hit rate of 0.4. What is the resulting average delay?",
          options: [
            "Roughly 2 seconds",
            "Roughly 0.01 seconds",
            "On the order of minutes",
            "Slightly greater than 1.2 seconds",
          ],
          correct: 3,
          translation:
            "الحل التاني (Web cache hit rate 0.4) بيدّي إيه average delay؟",
          explanation:
            "0.4*0.01 + 0.6*2.01 = 0.004 + 1.206 ≈ 1.21 seconds. أقل من الحل الأول ومش محتاج upgrade.",
          tags: ["Web Caching", "Cache solution"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "25. With a cache hit rate of 0.4, the traffic intensity on the access link is reduced from 1.0 to:",
          options: ["0.01", "0.4", "0.15", "0.6"],
          correct: 3,
          translation:
            "مع hit rate 0.4، الـ traffic intensity على الـ access link بتقل من 1.0 لـ كام؟",
          explanation:
            "0.6 — لأن 60% من الـ requests (اللي miss) بتمر على الـ access link. 40% بـ hit على الـ cache وما بتمرش.",
          tags: ["Web Caching", "Traffic intensity"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "high",
        },
        {
          q: "26. CDN companies install what to localize much of the Internet traffic?",
          options: [
            "Many routers only",
            "A single central cache",
            "Many DNS servers",
            "Many geographically distributed caches",
          ],
          correct: 3,
          translation: "شركات CDN بـ install إيه عشان تـ localize الـ traffic؟",
          explanation:
            "caches موزعة جغرافياً. ده بيخلي الـ traffic قريب من اليوزر. مش cache مركزي ولا DNS.",
          tags: ["CDN", "Caching"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (CDN paragraph)",
          likely: "high",
        },
        {
          q: "27. What problem does the conditional GET solve?",
          options: [
            "DNS resolution may fail",
            "The cached copy of an object may be stale",
            "Cookies may be lost",
            "TCP connections may be dropped",
          ],
          correct: 1,
          translation: "الـ conditional GET بيحل إيه مشكلة؟",
          explanation:
            "النسخة المخزنة في الـ cache ممكن تبقى stale (الـ object اتغير على الـ origin server). cookies و TCP و DNS مالهمش علاقة.",
          tags: ["Conditional GET", "Staleness"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET)",
          likely: "high",
        },
        {
          q: "28. An HTTP request message is a conditional GET if it uses the GET method AND:",
          options: [
            "Includes a Cookie: header line",
            "Includes a User-agent: header line",
            "Includes a Set-cookie: header line",
            "Includes an If-Modified-Since: header line",
          ],
          correct: 3,
          translation:
            "رسالة HTTP request بتبقى conditional GET لو بتستخدم GET وبتشمل إيه؟",
          explanation:
            "شرطين: (1) GET method + (2) If-Modified-Since: header. Set-cookie و Cookie و User-agent شروط تانية مختلفة.",
          tags: ["Conditional GET", "If-Modified-Since"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET definition)",
          likely: "high",
        },
        {
          q: "29. The If-Modified-Since: header line value is taken from which previous server response header?",
          options: [
            "Last-Modified:",
            "Content-Length:",
            "Set-cookie:",
            "Date:",
          ],
          correct: 0,
          translation:
            "قيمة If-Modified-Since بتيجي من إيه header في الـ response القديم؟",
          explanation:
            "من Last-Modified: header اللي السيرفر بعت في الـ response الأصلي. ده اللي بيخلي الـ cache يحدد لو الـ object اتغير.",
          tags: ["Conditional GET", "Last-Modified"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET example)",
          likely: "high",
        },
        {
          q: "30. If the object has NOT been modified since the specified date, the Web server responds with which status code?",
          options: [
            "200 OK",
            "301 Moved Permanently",
            "404 Not Found",
            "304 Not Modified",
          ],
          correct: 3,
          translation:
            "لو الـ object ما اتغيرش، السيرفر بيرد بـ أيه status code؟",
          explanation:
            "304 Not Modified. 200 OK معناها السيرفر بيبعت الـ object، 404 معناها مش موجود، 301 معناها اتنقل.",
          tags: ["Conditional GET", "304 Not Modified"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET example)",
          likely: "high",
        },
        {
          q: "31. When a 304 Not Modified response is sent, what is the entity body?",
          options: [
            "The full requested object",
            "The cookies for the user",
            "Empty — the requested object is NOT included",
            "A small error message",
          ],
          correct: 2,
          translation:
            "لما السيرفر يبعت 304 Not Modified، الـ entity body فيها إيه؟",
          explanation:
            "فاضية — مفيش object. لو السيرفر بعت الـ object هيضيع bandwidth ويزود الـ response time بدون داعي.",
          tags: ["Conditional GET", "Empty body"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET example)",
          likely: "high",
        },
        {
          q: "32. Why is the conditional GET important?",
          options: [
            "It removes the need for TCP",
            "It speeds up DNS resolution",
            "It confirms that a cache has up-to-date objects without re-sending the full object when nothing has changed",
            "It encrypts the HTTP request",
          ],
          correct: 2,
          translation: "ليه الـ conditional GET مهم؟",
          explanation:
            "بيـ verify الـ cache up-to-date من غير إعادة إرسال الـ object لو ما اتغيرش — بيوفّر bandwidth و delay.",
          tags: ["Conditional GET", "Benefits"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET)",
          likely: "high",
        },
        {
          q: "33. When was HTTP/2 standardized?",
          options: ["2020", "2015", "2005", "1997"],
          correct: 1,
          translation: "متى HTTP/2 اتعمل standardization؟",
          explanation:
            "2015 (RFC 7540). HTTP/1.1 اتـ standard في 1997. نقطة مهمة في بداية القسم 2.2.6.",
          tags: ["HTTP/2", "History"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6",
          likely: "high",
        },
        {
          q: "34. What was the first new version of HTTP since HTTP/1.1?",
          options: ["HTTPS", "HTTP/3", "HTTP/2", "QUIC"],
          correct: 2,
          translation: "إيه أول نسخة جديدة من HTTP بعد HTTP/1.1؟",
          explanation:
            "HTTP/2 (2015). HTTP/3 لسه بعده. HTTPS مش نسخة، ده HTTP مع TLS. QUIC بروتوكول نقل مش HTTP.",
          tags: ["HTTP/2", "Versions"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6",
          likely: "high",
        },
        {
          q: "35. As of 2020, what percentage of the top 10 million websites supported HTTP/2?",
          options: ["Over 40%", "Exactly 100%", "Over 90%", "Under 10%"],
          correct: 0,
          translation:
            "حتى 2020، كام نسبة من أكبر 10 مليون موقع بتـ support HTTP/2؟",
          explanation: "أكتر من 40%. نقطة مهمة في المحاضرة.",
          tags: ["HTTP/2", "Adoption"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6",
          likely: "high",
        },
        {
          q: "36. Which is NOT a primary goal of HTTP/2?",
          options: [
            "Provide request prioritization and server push",
            "Reduce perceived latency via request/response multiplexing over a single TCP connection",
            "Provide efficient compression of HTTP header fields",
            "Replace HTTP/1.1 status codes and URLs",
          ],
          correct: 3,
          translation: "إيه اللي مش هدف أساسي من HTTP/2؟",
          explanation:
            "HTTP/2 ما بياخدش status codes ولا URLs — دي بتفل كما هي. الأهداف: multiplexing + prioritization + server push + header compression.",
          tags: ["HTTP/2", "Goals"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (primary goals paragraph)",
          likely: "high",
        },
        {
          q: "37. What does HTTP/2 NOT change?",
          options: [
            "HTTP methods, status codes, URLs, or header fields",
            "The default port number",
            "The transport protocol used",
            "How data is formatted and transported between client and server",
          ],
          correct: 0,
          translation: "HTTP/2 ما بياخدش إيه؟",
          explanation:
            "methods و status codes و URLs و headers بتفل كما هي. بس HTTP/2 بياخد إزاي الـ data متformat ومتنقلة.",
          tags: ["HTTP/2", "Compatibility"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6",
          likely: "high",
        },
        {
          q: "38. HTTP/2 changes which aspect of HTTP/1.1?",
          options: [
            "URL structure",
            "Status codes (200, 404, etc.)",
            "HTTP methods (GET, POST, etc.)",
            "How the data is formatted and transported between the client and server",
          ],
          correct: 3,
          translation: "HTTP/2 بياخد إيه في HTTP/1.1؟",
          explanation:
            "إزاي الـ data متـ format ومتنقل (framing + interleaving + binary). methods و codes و URLs بتفل كما هي.",
          tags: ["HTTP/2", "Changes"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6",
          likely: "high",
        },
        {
          q: "39. What problem arises when sending all objects of a Web page over a single HTTP/1.1 TCP connection?",
          options: [
            "DNS resolution failure",
            "Head of Line (HOL) blocking",
            "Cookie overflow",
            "TLS handshake error",
          ],
          correct: 1,
          translation:
            "إيه المشكلة لما نبعت كل objects صفحة ويب على TCP connection واحد في HTTP/1.1؟",
          explanation:
            "HOL blocking — فيديو كبير على رأس الصف بيـ block الـ small objects وراه. cookies و DNS و TLS مالهمش علاقة.",
          tags: ["HTTP/2", "HOL blocking"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HOL blocking paragraph)",
          likely: "high",
        },
        {
          q: "40. In HOL blocking, which object blocks the small objects behind it?",
          options: [
            "A DNS query",
            "A small image file",
            "A cookie file",
            "A large video clip at the head of the line on a low-to-medium speed bottleneck link",
          ],
          correct: 3,
          translation:
            "في HOL blocking، إيه اللي بـ block الـ small objects وراه؟",
          explanation:
            "فيديو كبير على رأس الصف على bottleneck link. small objects بتستنى وراه.",
          tags: ["HTTP/2", "HOL blocking"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HOL blocking example)",
          likely: "high",
        },
        {
          q: "41. How do HTTP/1.1 browsers typically work around the HOL blocking problem?",
          options: [
            "By disabling cookies",
            "By opening multiple parallel TCP connections",
            "By sending all requests over UDP",
            "By switching to HTTP/3",
          ],
          correct: 1,
          translation: "إزاي HTTP/1.1 browsers بيتعاملوا مع HOL blocking؟",
          explanation:
            "بفتح TCP connections متوازية. ده بيخلي small objects تيجي بسرعة. UDP و HTTP/3 و cookies مالهمش علاقة.",
          tags: ["HTTP/2", "HTTP/1.1", "Parallel connections"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/1.1 workaround)",
          likely: "high",
        },
        {
          q: "42. Why does TCP congestion control give browsers an unintended incentive to use multiple parallel TCP connections?",
          options: [
            "TCP congestion control disables itself for parallel connections",
            "UDP is faster than TCP for small objects",
            "TCP requires authentication before opening parallel connections",
            "Each TCP connection sharing a bottleneck link gets approximately 1/n of the bandwidth, so opening n connections lets the browser grab a larger portion",
          ],
          correct: 3,
          translation:
            "ليه TCP congestion control بيدي browsers حافز لفتح parallel TCP connections؟",
          explanation:
            "n TCP connections على bottleneck بياخدوا 1/n لكل واحد — فلو فتحت كذا connection تقدر تـ grab أكتر bandwidth (cheat). مش عشان UDP ولا authentication.",
          tags: ["HTTP/2", "TCP congestion control"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (TCP congestion control incentive)",
          likely: "high",
        },
        {
          q: "43. What is the HTTP/2 solution to HOL blocking?",
          options: [
            "Open more TCP connections per Web page",
            "Send all objects sequentially without interleaving",
            "Use UDP instead of TCP",
            "Break each message into small frames and interleave the request and response messages on the same TCP connection",
          ],
          correct: 3,
          translation: "إيه حل HTTP/2 لمشكلة HOL blocking؟",
          explanation:
            "break message لـ frames صغيرة و interleave على نفس TCP connection. مش parallel connections ولا UDP ولا sequential.",
          tags: ["HTTP/2", "Framing", "Interleaving"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/2 Framing)",
          likely: "high",
        },
        {
          q: "44. In the framing example (1 large video of 1000 frames + 8 small objects of 2 frames each), how many frames are sent before all small objects are sent with interleaving?",
          options: ["1000 frames", "18 frames", "8 frames", "1016 frames"],
          correct: 1,
          translation:
            "في مثال framing (فيديو 1000 frame + 8 objects كل واحد 2 frames)، مع interleaving بتبعت كام frame قبل ما كل small objects تتبعت؟",
          explanation:
            "18 frame: بعد frame 1 من الفيديو، أول frames لكل object (8)؛ بعد frame 2 من الفيديو، آخر frames لكل object (8) → 1+8+1+8=18. من غير interleaving 1016 frame.",
          tags: ["HTTP/2", "Framing", "Interleaving"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (framing example)",
          likely: "high",
        },
        {
          q: "45. In the framing example, without interleaving, how many frames would be sent before all small objects are sent?",
          options: ["1016 frames", "18 frames", "1000 frames", "2000 frames"],
          correct: 0,
          translation:
            "في نفس المثال، من غير interleaving، كام frame هتتبعت قبل كل small objects؟",
          explanation:
            "1016 frame: الفيديو 1000 frame + كل small object 2 frame = 1000 + 16 = 1016. مع interleaving: 18 frame بس.",
          tags: ["HTTP/2", "Framing"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (framing example)",
          likely: "high",
        },
        {
          q: "46. What is described as the single most important enhancement of HTTP/2?",
          options: [
            "The Last-Modified: header",
            "The ability to break down an HTTP message into independent frames, interleave them, and reassemble them on the other end",
            "Conditional GET",
            "Cookies",
          ],
          correct: 1,
          translation: "إيه أهم enhancement في HTTP/2؟",
          explanation:
            "framing + interleaving + reassembly. ده اللي بيخلي multiplexing ممكن ويقلل user-perceived delay بشكل كبير.",
          tags: ["HTTP/2", "Framing"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/2 Framing)",
          likely: "high",
        },
        {
          q: "47. Why does the framing sublayer also binary-encode the frames?",
          options: [
            "Binary protocols are more efficient to parse, lead to slightly smaller frames, and are less error-prone",
            "Binary encoding is more secure than text",
            "Binary encoding is required by TCP",
            "Binary encoding removes the need for TLS",
          ],
          correct: 0,
          translation: "ليه framing sublayer بـ binary encode الـ frames؟",
          explanation:
            "binary أكفأ في الـ parsing، أصغر، وأقل خطأ. مش شرط من TCP ولا أأمن ولا بيستبدل TLS.",
          tags: ["HTTP/2", "Binary encoding"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (framing sublayer)",
          likely: "high",
        },
        {
          q: "48. In HTTP/2 response prioritization, what weight range can a client assign to each message?",
          options: [
            "Between 1 and 1024",
            "Between 1 and 10",
            "Between 1 and 256",
            "Between 0 and 100",
          ],
          correct: 2,
          translation: "في HTTP/2 prioritization، نطاق الـ weight كام؟",
          explanation:
            "1 لـ 256. رقم أكبر = أولوية أعلى. السيرفر بيبعت frames الأولى للـ responses ذات الأولوية الأعلى.",
          tags: ["HTTP/2", "Prioritization"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Response Message Prioritization)",
          likely: "high",
        },
        {
          q: "49. In HTTP/2 prioritization, a higher weight number indicates:",
          options: [
            "Slower response time",
            "Lower priority",
            "Larger object size",
            "Higher priority",
          ],
          correct: 3,
          translation: "في HTTP/2 prioritization، رقم weight أكبر معناه إيه؟",
          explanation:
            "أولوية أعلى. السيرفر بيبعت frames الأولى للـ responses ذات الأولوية الأعلى.",
          tags: ["HTTP/2", "Prioritization"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Response Message Prioritization)",
          likely: "high",
        },
        {
          q: "50. Which HTTP/2 feature allows a server to send multiple responses for a single client request?",
          options: [
            "Server push",
            "Cookies",
            "Last-Modified",
            "Conditional GET",
          ],
          correct: 0,
          translation:
            "إيه ميزة HTTP/2 اللي بتسمح للسيرفر يبعت كذا response لطلب واحد؟",
          explanation:
            "Server push. السيرفر بيشوف الـ HTML وبيـ push الـ objects اللي اليوزر محتاجها قبل ما يطلبها. conditional GET و cookies مالهمش علاقة.",
          tags: ["HTTP/2", "Server push"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Server Push)",
          likely: "high",
        },
        {
          q: "51. How does the server know which objects to push in HTTP/2?",
          options: [
            "The cookies tell the server what to push",
            "The DNS provides the list of objects",
            "The HTML base page indicates the objects that will be needed to fully render the Web page",
            "The client explicitly requests each pushed object",
          ],
          correct: 2,
          translation: "إزاي السيرفر بيعرف إيه objects اللي هـ push في HTTP/2؟",
          explanation:
            "الـ HTML base page بيقول إيه objects اللي محتاجة. السيرفر بيشوفها ويـ push قبل ما اليوزر يطلب. مش الـ client ولا DNS ولا cookies.",
          tags: ["HTTP/2", "Server push"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Server Push)",
          likely: "high",
        },
        {
          q: "52. What does server push eliminate?",
          options: [
            "The need for cookies",
            "The need for TCP connections",
            "The extra latency due to waiting for the requests",
            "The need for DNS",
          ],
          correct: 2,
          translation: "Server push بيـ eliminate إيه؟",
          explanation:
            "latency اللي بيتسبب عن استنى الطلبات. السيرفر بيبعت objects قبل ما اليوزر يطلبها. مش cookies ولا TCP ولا DNS.",
          tags: ["HTTP/2", "Server push"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Server Push)",
          likely: "high",
        },
        {
          q: "53. HTTP/3 is designed to operate over which transport protocol?",
          options: ["QUIC", "UDP directly", "SCTP", "TCP"],
          correct: 0,
          translation: "HTTP/3 متصمم عشان يشتغل فوق إيه؟",
          explanation: "QUIC. مش TCP ولا UDP مباشرة. QUIC بروتوكول نقل جديد.",
          tags: ["HTTP/3", "QUIC"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "high",
        },
        {
          q: '54. QUIC is a new "transport" protocol implemented in which layer over the bare-bones UDP protocol?',
          options: [
            "The application layer",
            "The network layer",
            "The physical layer",
            "The transport layer",
          ],
          correct: 0,
          translation:
            "QUIC بروتوكول نقل جديد متـ implement في أي طبقة فوق UDP؟",
          explanation:
            "application layer فوق UDP. ده ملاحظة مهمة — QUIC مش في transport layer بتاع OS، ده application-level.",
          tags: ["HTTP/3", "QUIC", "Application layer"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "high",
        },
        {
          q: "55. QUIC is implemented over which underlying protocol?",
          options: ["IP", "UDP", "TLS", "TCP"],
          correct: 1,
          translation: "QUIC متـ implement فوق إيه؟",
          explanation:
            "UDP bare-bones. ده اللي بيخليه أسرع وأقدر يـ multiplex من غير head-of-line blocking بتاع TCP.",
          tags: ["HTTP/3", "QUIC", "UDP"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "high",
        },
        {
          q: "56. Which desirable features does QUIC have for HTTP?",
          options: [
            "Encryption, authentication, and routing only",
            "File transfer, e-mail, and DNS",
            "Cookies, conditional GET, and DNS",
            "Message multiplexing (interleaving), per-stream flow control, and low-latency connection establishment",
          ],
          correct: 3,
          translation: "QUIC فيه إيه مميزات مرغوبة لـ HTTP؟",
          explanation:
            "message multiplexing، per-stream flow control، low-latency connection establishment. النقاط دي بتسمح لـ HTTP/3 بـ design أبسط.",
          tags: ["HTTP/3", "QUIC", "Features"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "high",
        },
        {
          q: "57. Because QUIC subsumes many HTTP/2 features, what does HTTP/3's design become?",
          options: [
            "More complex and slower",
            "Simpler and more streamlined",
            "Identical to HTTP/1.1",
            "Backward-compatible with HTTP/0.9",
          ],
          correct: 1,
          translation:
            "بما إن QUIC بـ subsume مميزات HTTP/2، HTTP/3 بيبقى إزاي؟",
          explanation:
            "أبسط وأكتر streamlined. مش أكتر تعقيد، ولا متوافق مع HTTP/0.9، ولا زي HTTP/1.1.",
          tags: ["HTTP/3", "QUIC", "Design"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "high",
        },
        {
          q: "58. Cookies are defined in which RFC?",
          options: ["RFC 6265", "RFC 7230", "RFC 7540", "RFC 7232"],
          correct: 0,
          translation: "Cookies متعرفة في RFC كام؟",
          explanation:
            "RFC 6265. RFC 7230 لـ HTTP/1.1، RFC 7540 لـ HTTP/2، RFC 7232 لـ conditional GET.",
          tags: ["Cookies", "RFC"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "medium",
        },
        {
          q: "59. Typically, who purchases and installs a Web cache?",
          options: [
            "The origin Web server",
            "An ISP (for example, a university on its campus network)",
            "The DNS registry",
            "The end user on a personal computer",
          ],
          correct: 1,
          translation: "مين بيـ install الـ Web cache عادة؟",
          explanation:
            "ISP (مثل جامعة على campus network). اليوزر مش بيـ install الـ cache بنفسه، ولا الـ origin server.",
          tags: ["Web Caching", "ISP"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5",
          likely: "medium",
        },
        {
          q: "60. In the institutional example, what is the average object size?",
          options: ["10 Mbits", "1 Mbits", "100 Kbits", "1 Kbits"],
          correct: 1,
          translation: "في المثال، إيه حجم الـ object المتوسط؟",
          explanation:
            "1 Mbits. الـ request rate 15 req/s، فالـ traffic intensity = 15*1/15 = 1 على الـ access link.",
          tags: ["Web Caching", "Example"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12 example)",
          likely: "medium",
        },
        {
          q: "61. In practice, hit rates for Web caches typically range from:",
          options: ["0.5 to 0.9", "0.9 to 1.0", "0.2 to 0.7", "0.01 to 0.1"],
          correct: 2,
          translation:
            "في الواقع، الـ hit rates للـ Web caches بتتراوح بين كام؟",
          explanation: "0.2 لـ 0.7. القيم دي معقولة للـ caches في المؤسسات.",
          tags: ["Web Caching", "Hit rate"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (hit rate paragraph)",
          likely: "medium",
        },
        {
          q: "62. The conditional GET is defined in which RFC?",
          options: ["RFC 7232", "RFC 1945", "RFC 6265", "RFC 7540"],
          correct: 0,
          translation: "الـ conditional GET متعرف في RFC كام؟",
          explanation:
            "RFC 7232. RFC 6265 لـ cookies، RFC 7540 لـ HTTP/2، RFC 1945 لـ HTTP/1.0.",
          tags: ["Conditional GET", "RFC"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET)",
          likely: "medium",
        },
        {
          q: "63. How many parallel TCP connections do many HTTP/1.1 browsers typically open?",
          options: ["Up to two", "Up to ten", "Up to one hundred", "Up to six"],
          correct: 3,
          translation: "كم TCP connection متوازي بيفتح HTTP/1.1 browser؟",
          explanation:
            "لـ 6 parallel TCP connections. عشان يتجاوزوا HOL ويـ grab أكتر bandwidth.",
          tags: ["HTTP/2", "HTTP/1.1", "Parallel connections"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6",
          likely: "medium",
        },
        {
          q: "64. As of 2020, HTTP/3 was described in what status?",
          options: [
            "Internet drafts, not yet fully standardized",
            "Proprietary to Google only",
            "Already obsolete",
            "Fully standardized RFC",
          ],
          correct: 0,
          translation: "حتى 2020، HTTP/3 كان في أيه status؟",
          explanation:
            "Internet drafts — لسه مش متـ standardize بالكامل. مش RFC نهائي، ولا obsolete، ولا proprietary.",
          tags: ["HTTP/3", "Status"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define cookies and explain why HTTP uses them despite the server being stateless.",
          translation:
            "عرّف cookies واشرح ليه HTTP بيستخدمها رغم إن السيرفر stateless.",
          answer:
            "HTTP is a stateless protocol: the HTTP server maintains no information about clients, which simplifies server design and allows high-performance Web servers to handle thousands of simultaneous TCP connections.\nHowever, it is often desirable for a Web site to identify users, either to restrict user access or to serve content as a function of the user identity.\nFor these purposes, HTTP uses cookies (defined in RFC 6265).\nCookies allow sites to keep track of users — most major commercial Web sites use cookies today.\nSo cookies add per-user state on top of the otherwise-stateless HTTP protocol, while keeping the core protocol simple.",
          tags: ["Cookies", "Stateless", "Definition"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. List the four components of cookie technology and briefly explain the role of each.",
          translation:
            "اكتب المكونات الأربعة لتقنية cookies واشرح دور كل واحد باختصار.",
          answer:
            "Cookie technology has four components (Figure 2.10):\n1. A cookie header line in the HTTP response message — the server sends this to give the browser a unique identification number (e.g., Set-cookie: 1678).\n2. A cookie header line in the HTTP request message — the browser sends this back to the server on subsequent requests so the server can identify the user (e.g., Cookie: 1678).\n3. A cookie file kept on the user's end system and managed by the user's browser — stores the hostname and the identification number for each site the user has visited.\n4. A back-end database at the Web site — indexed by the identification number, it stores per-user information (visited pages, shopping cart, registration data, etc.).",
          tags: ["Cookies", "Components"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (Figure 2.10)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Walk through the Susan/Amazon example to illustrate how cookies work.",
          translation: "اتمم مثال Susan/Amazon عشان توضح إزاي cookies بتشتغل.",
          answer:
            "1. Susan contacts Amazon.com for the first time from her home PC using Internet Explorer; suppose she has previously visited eBay.\n2. When the request reaches the Amazon Web server, the server creates a unique identification number (e.g., 1678) and creates an entry in its back-end database indexed by that number.\n3. The Amazon server responds with an HTTP response containing a Set-cookie: 1678 header.\n4. Susan's browser receives the response, sees the Set-cookie: header, and appends a line to its cookie file including the Amazon hostname and the number 1678 (the file already has an eBay entry from her past visit).\n5. As Susan continues browsing Amazon, each subsequent request includes the header line Cookie: 1678, allowing Amazon to track which pages user 1678 visited, in which order, and at what times.\n6. Amazon uses this for its shopping cart service (collecting purchases for later combined checkout) and for product recommendations.\n7. If Susan registers (name, e-mail, address, credit card), Amazon associates that information with the number 1678 in its database — enabling 'one-click shopping'.\n8. When Susan returns a week later, her browser still sends Cookie: 1678, so Amazon can identify her again.",
          tags: ["Cookies", "Example"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (Susan/Amazon example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Discuss the privacy concerns associated with cookies.",
          translation: "ناقش المخاوف الـ privacy المرتبطة بـ cookies.",
          answer:
            "Although cookies often simplify the Internet shopping experience for the user, they are controversial because they can also be considered as an invasion of privacy.\nUsing a combination of cookies and user-supplied account information, a Web site can learn a lot about a user — including which pages were visited, in what order, at what times, plus full name, e-mail address, postal address, and credit card information if the user registered.\nThe site can then potentially sell this information to a third party.\nEven without explicit registration, a site that combines cookies across visits can build a detailed profile of user behavior and interests.\nThis is the core of the privacy debate: cookies are technically just an identification mechanism, but the data they enable to be collected is what raises the privacy concern.",
          tags: ["Cookies", "Privacy"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.4 (privacy paragraph)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Define a Web cache (proxy server) and describe the four steps of how it handles a browser request.",
          translation:
            "عرّف الـ Web cache (proxy server) ووصّف الخطوات الأربعة لإزاي بيتعامل مع طلب browser.",
          answer:
            "A Web cache — also called a proxy server — is a network entity that satisfies HTTP requests on the behalf of an origin Web server. The Web cache has its own disk storage and keeps copies of recently requested objects.\nSteps when a browser requests an object (e.g., www.someschool.edu/campus.gif):\n1. The browser establishes a TCP connection to the Web cache and sends an HTTP request for the object to the Web cache.\n2. The Web cache checks if it has a copy of the object stored locally. If it does, the Web cache returns the object within an HTTP response message to the client browser.\n3. If the Web cache does NOT have the object, the Web cache opens a TCP connection to the origin server, sends an HTTP request for the object, and the origin server sends the object back to the cache in an HTTP response.\n4. When the Web cache receives the object, it stores a copy in its local storage and sends a copy, within an HTTP response message, to the client browser (over the existing TCP connection between the client and the cache).",
          tags: ["Web Caching", "Steps"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (4 steps)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain why a Web cache can act as both a server and a client at the same time.",
          translation:
            "اشرح ليه الـ Web cache يقدر يشتغل كـ server و client في نفس الوقت.",
          answer:
            "A Web cache plays two roles depending on which side it is talking to:\n- When it receives requests from a browser and sends responses back to the browser, it acts as a server.\n- When it sends requests to the origin server and receives responses from the origin server, it acts as a client.\nThese two roles are interleaved within a single user request: first the cache is a server toward the browser, then (on a cache miss) it becomes a client toward the origin server, and finally it is again a server toward the browser when delivering the object.\nThis dual role is exactly what allows the cache to satisfy the browser's request without the browser having to talk to the origin server directly.",
          tags: ["Web Caching", "Server/Client"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. State the two main reasons Web caching has been deployed in the Internet.",
          translation:
            "اكتب السببين الأساسيين لـ deployment الـ Web caching في الإنترنت.",
          answer:
            "Web caching has been deployed for two main reasons:\n1. Reduced response time for client requests — particularly when the bottleneck bandwidth between the client and the origin server is much less than the bottleneck bandwidth between the client and the cache. If there is a high-speed connection between the client and the cache and the cache has the requested object, the cache can deliver the object rapidly.\n2. Reduced traffic on an institution's access link to the Internet — by reducing traffic, the institution does not have to upgrade bandwidth as quickly, reducing costs. Furthermore, Web caches can substantially reduce Web traffic in the Internet as a whole, improving performance for all applications.",
          tags: ["Web Caching", "Benefits"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (two reasons)",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define a conditional GET and list the two conditions that make an HTTP request a conditional GET.",
          translation:
            "عرّف الـ conditional GET واكتب الشرطين اللي بيخلوها conditional GET.",
          answer:
            "A conditional GET is an HTTP mechanism that allows a cache to verify that its cached objects are up to date without re-downloading the full object if it has not changed.\nAn HTTP request message is a conditional GET if BOTH:\n1. The request message uses the GET method.\n2. The request message includes an If-Modified-Since: header line.\nIf the object has not been modified since the specified date, the server returns a 304 Not Modified response with an empty entity body, telling the cache that its local copy is still valid. This saves bandwidth and reduces user-perceived response time, especially for large objects.",
          tags: ["Conditional GET", "Definition"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET)",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Walk through the conditional GET example with the kiwi.gif object.",
          translation: "اتمم مثال الـ conditional GET مع object الـ kiwi.gif.",
          answer:
            "First, on behalf of a requesting browser, the proxy cache sends a request to the Web server:\n  GET /fruit/kiwi.gif HTTP/1.1\n  Host: www.exotiquecuisine.com\n\nSecond, the Web server responds with the object plus a Last-Modified: header:\n  HTTP/1.1 200 OK\n  Last-Modified: Wed, 9 Sep 2015 09:23:24\n  Content-Type: image/gif\n  (data ...)\nThe cache forwards the object to the browser but also stores it locally along with the Last-Modified date.\n\nThird, one week later, another browser requests the same object via the cache and the object is still in the cache. The cache issues a conditional GET:\n  GET /fruit/kiwi.gif HTTP/1.1\n  Host: www.exotiquecuisine.com\n  If-modified-since: Wed, 9 Sep 2015 09:23:24\nThe value of If-Modified-Since is exactly the Last-Modified value the server sent one week ago.\n\nFourth, if the object has NOT been modified since 9 Sep 2015 09:23:24, the server responds:\n  HTTP/1.1 304 Not Modified\n  (empty entity body)\nThe 304 status tells the cache it can go ahead and forward its cached copy to the requesting browser. The object itself is not re-sent, saving bandwidth.",
          tags: ["Conditional GET", "Example"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Conditional GET example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the Head of Line (HOL) blocking problem in HTTP/1.1 and how HTTP/1.1 browsers work around it.",
          translation:
            "اشرح مشكلة الـ Head of Line blocking في HTTP/1.1 وإزاي browsers بيتعاملوا معاها.",
          answer:
            "HOL blocking arises because HTTP/1.1 uses persistent TCP connections, sending all objects of a Web page over a single TCP connection.\nConsider a Web page with an HTML base page, a large video clip near the top, and many small objects below the video. With a low-to-medium speed bottleneck link on the path between server and client, the video clip takes a long time to pass through the bottleneck link, while the small objects behind it must wait — the video clip at the head of the line blocks the small objects behind it.\n\nHTTP/1.1 browsers typically work around this by opening multiple parallel TCP connections, sending objects in parallel. This way the small objects can arrive and render faster, reducing user-perceived delay.\nTCP congestion control gives browsers an unintended incentive for this: roughly, n TCP connections sharing a bottleneck each get 1/n of the bandwidth, so opening more connections lets a browser grab a larger portion. Many HTTP/1.1 browsers open up to six parallel TCP connections — both to circumvent HOL blocking and to obtain more bandwidth.",
          tags: ["HTTP/2", "HTTP/1.1", "HOL blocking"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HOL blocking)",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain the primary goals of HTTP/2 and what HTTP/2 does NOT change.",
          translation: "اشرح أهداف HTTP/2 الأساسية وإيه اللي ما بياخدش.",
          answer:
            "The primary goals of HTTP/2 are:\n1. Reduce perceived latency by enabling request and response multiplexing over a single TCP connection.\n2. Provide request prioritization.\n3. Provide server push.\n4. Provide efficient compression of HTTP header fields.\n\nWhat HTTP/2 does NOT change:\n- HTTP methods (GET, POST, HEAD, PUT, DELETE, etc.) — same as before.\n- Status codes (200, 301, 404, 505, etc.) — same as before.\n- URLs — same as before.\n- Header fields — same as before.\nInstead, HTTP/2 changes how the data is formatted and transported between the client and server (framing + interleaving + binary encoding). This keeps existing HTTP applications compatible while improving performance.",
          tags: ["HTTP/2", "Goals", "Compatibility"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (primary goals paragraph)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Explain HTTP/2 framing and how interleaving solves HOL blocking.",
          translation:
            "اشرح HTTP/2 framing وإزاي interleaving بيحل مشكلة HOL blocking.",
          answer:
            "HTTP/2's solution for HOL blocking is to break each HTTP message into small frames and interleave the request and response messages on the same TCP connection.\nExample: a Web page with one large video clip (1000 frames) and 8 smaller objects (2 frames each). The server receives 9 concurrent requests and needs to send 9 competing responses.\nWith frame interleaving: after sending one frame of the video clip, the first frame of each of the 8 small objects is sent; then the second frame of the video clip, then the second (last) frame of each small object. So all 8 small objects are fully sent after only 18 frames total.\nWithout interleaving, the smaller objects would only be sent after sending 1016 frames (1000 video + 16 small-objects), so the user would wait much longer to see any of the small objects render.\nThe framing sublayer also binary-encodes the frames — binary protocols are more efficient to parse, lead to slightly smaller frames, and are less error-prone.\nThis ability to break down an HTTP message into independent frames, interleave them, and reassemble them on the other end is the single most important enhancement of HTTP/2.",
          tags: ["HTTP/2", "Framing", "Interleaving"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/2 Framing)",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. Explain HTTP/2 response prioritization.",
          translation: "اشرح HTTP/2 response prioritization.",
          answer:
            "Message prioritization allows developers to customize the relative priority of requests to better optimize application performance.\nThe framing sub-layer organizes messages into parallel streams of data destined to the same requestor.\nWhen a client sends concurrent requests to a server, it can prioritize the responses it is requesting by assigning a weight between 1 and 256 to each message. A higher number indicates higher priority.\nUsing these weights, the server can send first the frames for the responses with the highest priority, so that the most important content reaches the user as early as possible.",
          tags: ["HTTP/2", "Prioritization"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Response Message Prioritization)",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. Explain HTTP/2 server push and how it reduces latency.",
          translation: "اشرح HTTP/2 server push وإزاي بيقلل latency.",
          answer:
            "Server push is an HTTP/2 feature that allows a server to send multiple responses for a single client request. In addition to the response to the original request, the server can push additional objects to the client without the client having to request each one.\nThis is possible because the HTML base page indicates the objects that will be needed to fully render the Web page. Instead of waiting for HTTP requests for these objects, the server analyzes the HTML page, identifies the objects that are needed, and sends them to the client before receiving explicit requests for them.\nServer push eliminates the extra latency that would be caused by waiting for the requests to arrive — the user's browser can start rendering the additional objects as soon as they are pushed, without first having to issue and wait for separate requests.",
          tags: ["HTTP/2", "Server push"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (Server Push)",
          likely: "high",
        },
        {
          type: "essay",
          q: "15. Explain HTTP/3 and QUIC, and how HTTP/3 differs from HTTP/2.",
          translation: "اشرح HTTP/3 و QUIC، وإزاي HTTP/3 بيختلف عن HTTP/2.",
          answer:
            "HTTP/3 is a new HTTP protocol designed to operate over QUIC. As of 2020, HTTP/3 was described in Internet drafts and had not yet been fully standardized.\nQUIC is a new 'transport' protocol that is implemented in the application layer over the bare-bones UDP protocol (i.e., not in the OS transport layer like TCP).\nQUIC has several features that are desirable for HTTP:\n- Message multiplexing (interleaving) — like HTTP/2's interleaving but at the transport level.\n- Per-stream flow control.\n- Low-latency connection establishment.\nBecause QUIC subsumes many of the HTTP/2 features (such as message interleaving), HTTP/3 can have a simpler, streamlined design — much of what HTTP/2 had to do at the application layer is handled by QUIC at the transport layer. HTTP/3 over QUIC also avoids TCP's head-of-line blocking problem.",
          tags: ["HTTP/3", "QUIC"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (HTTP/3)",
          likely: "high",
        },
        {
          type: "essay",
          q: "16. Compare HTTP/1.1, HTTP/2, and HTTP/3 in terms of transport protocol and key features.",
          translation:
            "قارن HTTP/1.1 و HTTP/2 و HTTP/3 من حيث بروتوكول النقل والميزات الأساسية.",
          answer:
            "HTTP/1.1 (RFC 7230, standardized 1997):\n- Transport: TCP.\n- Persistent connections by default.\n- Pipelining allowed but rarely used because of HOL blocking.\n- Browsers typically open multiple parallel TCP connections (up to ~6) to circumvent HOL blocking and to grab more bandwidth.\n\nHTTP/2 (RFC 7540, standardized 2015):\n- Transport: TCP.\n- Same methods, status codes, URLs, and headers as HTTP/1.1.\n- Framing + interleaving on a single TCP connection to solve HOL blocking.\n- Binary-encoded frames (more efficient parsing, smaller frames, less error-prone).\n- Response prioritization (weight 1–256).\n- Server push.\n- Header compression (HPACK).\n\nHTTP/3 (over QUIC, drafts as of 2020):\n- Transport: QUIC over UDP (application-layer transport).\n- Solves TCP-level HOL blocking by using QUIC streams.\n- Per-stream flow control and low-latency connection establishment.\n- Encryption built into QUIC by default.\n- Simpler design than HTTP/2 because many HTTP/2 features (e.g., interleaving) are subsumed by QUIC.",
          tags: ["HTTP/1.1", "HTTP/2", "HTTP/3", "Comparison"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (whole)",
          likely: "high",
        },
        {
          type: "essay",
          q: "1. Compare the two solutions to the institutional network bottleneck problem: upgrading the access link vs installing a Web cache.",
          translation:
            "قارن بين حلّين لمشكلة الـ bottleneck في الشبكة المؤسسية: ترقية الـ access link مقابل install Web cache.",
          answer:
            "Setup: institutional LAN (high-speed), 15 Mbps access link to the Internet, average object size 1 Mbits, request rate 15 req/s, Internet delay 2 seconds.\nWithout any change, traffic intensity on access link = 15*1/15 = 1.0, so delay on the link grows without bound and average response time is on the order of minutes.\n\nSolution 1 — Upgrade access link to 100 Mbps:\n- Traffic intensity drops to 0.15 (negligible delay).\n- Total response time ≈ Internet delay ≈ 2 seconds.\n- Cost: institution must pay to upgrade the access link (expensive).\n\nSolution 2 — Install a Web cache (no link upgrade):\n- Cache hit rate 0.4: 40% of requests satisfied in ~10 ms by the cache (over the high-speed LAN).\n- The remaining 60% go to origin servers, so traffic intensity on access link drops from 1.0 to 0.6 (small delay, tens of milliseconds).\n- Average delay = 0.4 * 0.01 + 0.6 * 2.01 ≈ 1.21 seconds.\n- Cost: only the cost of purchasing and installing a Web cache (low).\n\nConclusion: Solution 2 gives an even lower response time (1.21 s vs ~2 s) at a much lower cost — caching wins on both metrics.",
          tags: ["Web Caching", "Comparison", "Calculation reasoning"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12/2.13 example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. (Calculation) Compute the average response time for the institutional network example with a Web cache hit rate of 0.4. Given: cache hit delay ≈ 0.01 s (10 ms) for 40% of requests, miss delay ≈ 2.01 s (2 s Internet delay + small access-link delay) for 60% of requests.",
          translation:
            "(مسألة) احسب إجمالي average response time في مثال المؤسسة مع hit rate 0.4. المعطيات: cache hit delay ≈ 0.01 s لـ 40% من الطلبات، miss delay ≈ 2.01 s لـ 60% من الطلبات.",
          answer:
            "Given:\n- Cache hit rate = 0.4 (40% of requests).\n- Cache hit delay ≈ 0.01 s (objects served locally over the high-speed LAN).\n- Cache miss rate = 0.6 (60% of requests still go to the origin server).\n- Cache miss delay ≈ 2.01 s (small access-link delay + 2 s Internet delay).\n\nFormula: Average response time = (hit rate * hit delay) + (miss rate * miss delay).\n\nCalculation:\nAverage response time = 0.4 * 0.01 + 0.6 * 2.01\n                     = 0.004 + 1.206\n                     = 1.21 seconds.\n\nAnswer: about 1.21 seconds (slightly greater than 1.2 s).\n\nComparison: with the no-cache solution the access link intensity is 1.0 → delay grows without bound → on the order of minutes; with the upgrade-to-100 Mbps solution the total is ~2 s. So the cache solution is faster AND cheaper.",
          tags: ["Calculation", "Web Caching", "Hit rate"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12/2.13 example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. (Calculation) Compute the traffic intensity on the access link in the institutional example if the cache hit rate is 0.4. Given: 15 requests/s, 1 Mbits per object, 15 Mbps access link.",
          translation:
            "(مسألة) احسب الـ traffic intensity على الـ access link لو hit rate = 0.4. المعطيات: 15 req/s، 1 Mbits/object، 15 Mbps access link.",
          answer:
            "Given:\n- Request rate = 15 requests/s.\n- Average object size = 1 Mbits.\n- Access link rate = 15 Mbps.\n- Cache hit rate = 0.4 → 40% served by cache (do not use access link), 60% go to origin (use access link).\n\nWithout cache:\nTraffic intensity = (15 req/s * 1 Mbits/req) / 15 Mbps = 15 / 15 = 1.0.\n\nWith cache hit rate 0.4, only 60% of requests traverse the access link:\nEffective request rate on access link = 0.6 * 15 = 9 req/s.\nTraffic intensity = (9 req/s * 1 Mbits/req) / 15 Mbps = 9 / 15 = 0.6.\n\nAnswer: 0.6 — a traffic intensity less than 0.8 corresponds to a small delay (tens of milliseconds), which is negligible compared with the 2-second Internet delay.",
          tags: ["Calculation", "Web Caching", "Traffic intensity"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12/2.13 example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. (Calculation) In the HTTP/2 framing example, compare the number of frames needed to send all 8 small objects (2 frames each) before sending the large video (1000 frames): (a) with interleaving, (b) without interleaving.",
          translation:
            "(مسألة) في مثال framing: 8 small objects (كل واحد 2 frames) + فيديو 1000 frames. قارن كام frames لازم عشان كل small objects تتبعت: (a) مع interleaving، (b) من غير interleaving.",
          answer:
            "Given:\n- 1 large video clip = 1000 frames.\n- 8 small objects, each = 2 frames (total 16 frames for the small objects).\n- All frames are of fixed length.\n\n(a) With interleaving:\nStep 1: send 1 frame of the video.\nStep 2: send the FIRST frame of each of the 8 small objects (8 frames).\nStep 3: send the SECOND frame of the video.\nStep 4: send the LAST frame of each of the 8 small objects (8 frames).\nTotal frames sent before ALL small objects are completely sent = 1 + 8 + 1 + 8 = 18 frames.\n\n(b) Without interleaving (sequential):\nAll 1000 video frames must be sent first, then the 8 small objects' frames are sent.\nTotal frames before all small objects are sent = 1000 (video) + 16 (small objects) = 1016 frames.\n\nAnswer: 18 frames with interleaving vs 1016 frames without interleaving. HTTP/2 framing decreases user-perceived delay by roughly 1016 / 18 ≈ 56× for the small objects in this example.",
          tags: ["Calculation", "HTTP/2", "Framing", "Interleaving"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.6 (framing example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. (Calculation) An institution has a 15 Mbps access link, request rate 15 req/s, object size 1 Mbits, Internet delay 2 s. Estimate the average response time if the cache hit rate is 0.6 (instead of 0.4) and the cache hit delay is 0.01 s.",
          translation:
            "(مسألة) مؤسسة معها 15 Mbps access link، 15 req/s، 1 Mbits/object، Internet delay 2 s. احسب average response time لو hit rate = 0.6 (بدل 0.4) و cache hit delay = 0.01 s.",
          answer:
            "Given:\n- Access link rate = 15 Mbps.\n- Request rate = 15 req/s.\n- Object size = 1 Mbits.\n- Internet delay = 2 s.\n- Cache hit rate = 0.6.\n- Cache hit delay = 0.01 s.\n- Cache miss rate = 0.4.\n\nStep 1 — Traffic intensity on access link with cache:\nOnly 40% of requests traverse the access link:\nEffective request rate on access link = 0.4 * 15 = 6 req/s.\nTraffic intensity = (6 * 1) / 15 = 0.4 (well below 0.8 → small delay, tens of ms).\n\nStep 2 — Miss delay ≈ access-link delay (small, say 0.01 s) + Internet delay (2 s) ≈ 2.01 s.\n\nStep 3 — Average response time = hit rate * hit delay + miss rate * miss delay\n= 0.6 * 0.01 + 0.4 * 2.01\n= 0.006 + 0.804\n= 0.81 seconds.\n\nAnswer: about 0.81 seconds.\n\nComparison: with hit rate 0.4 the average was ~1.21 s; raising the hit rate to 0.6 brings the average down to ~0.81 s — a 33% improvement. This shows why improving cache hit rate directly improves user-perceived response time.",
          tags: ["Calculation", "Web Caching", "Hit rate"],
          ref: "Lecture 6 (Ch 2, Lec 3) — Section 2.2.5 (Figure 2.12/2.13 example, variant)",
          likely: "high",
        },
      ],
    },
    {
      id: "computer-networks-lecture-7",
      t: "المحاضرة السابعة — الفصل الثالث (جزء 1): طبقة النقل — مقدمة وخدمات طبقة النقل",
      d: "دور طبقة النقل، الفرق بين طبقة النقل وطبقة الشبكة، نموذج خدمة IP، خدمات TCP وUDP، والـ Multiplexing/Demultiplexing.",
      pdf: "datenew/subjects/computer-networks/lectures/CH03/lec07/Computer_Networks_Lecture07_(CH03_Lec1).pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/CH03/Lec07/Lecture-7-Questions.pdf",
      // المحاضرة: Computer Networks — Lecture 7 (Ch 3, Lec 1) — Transport Layer: Introduction & Transport-Layer Services (Transport vs Network Layer, IP service model, TCP vs UDP services, multiplexing/demultiplexing)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمواضيع المحاضرة 7 (المحاضرة 1 داخل الفصل 3): طبقة النقل، TCP vs UDP، IP، وعلاقة طبقة النقل بطبقة الشبكة.",
          links: [
            {
              t: "شبكات الحاسوب | Transport layer - part 1, TCP , UDP (محمد ب. أبوبكر)",
              d: "فيديو عربي أكاديمي بشرح Transport layer - part 1: TCP و UDP والفرق بينهم. مناسب جداً لفهم القسم 3.1.2 (Overview of Transport Layer in the Internet).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpHpCzb7rhlV1MbRgGwTIoK1kHW3iWdmh",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح Layer 4 (Transport Layer) يا مهندس – TCP vs UDP بعمق",
              d: "شرح بالعربي لطبقة النقل (Layer 4): Segments، Ports، TCP vs UDP بعمق. مفيد لفهم القسم 3.1 (Introduction) والقسم 3.1.2 (Overview).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://www.facebook.com/ITWithHossam/posts/1547208943643611",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "ما هو UDP و TCP — شرح بالعربي",
              d: "مقال بالعربي بشرح TCP و UDP: TCP بروتوكول connection-oriented بضمن سلامة وتسلسل الحزم، UDP بروتوكول connectionless خفيف وسريع. مفهوم للمقارنة بين الاتنين.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://shelleyes.com/ar/posts/what-is-udp-and-tcp",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات إنجليزية مرئية وقنوات معروفة بشرح Transport Layer و TCP/UDP.",
          links: [
            {
              t: "PowerCert Animated Videos — Networking (English Version)",
              d: "قائمة فيديوهات Animated بتشرح TCP و UDP و OSI Model و Transport Layer بأسلوب بصري مفهوم. الأسلوب البصري بيساعد على تثبيت الفروق بين TCP و UDP في الذاكرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpXfHEl2fzl72d5ne2gsxSyFNagcHyCML",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Hussein Nasser — TCP 3-Way Handshake + Networking Videos",
              d: "قائمة تشغيل لمهندس باك-إند معروف، فيها شرح TCP / UDP / IP بعمق. مفهوم لفهم إزاي TCP بيحوّل خدمة IP الـ unreliable لـ reliable.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLQnljOFTspQWbBegaU790WhH7gNKcMAl-",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Khan Academy — Internet 101 (Computer Science)",
              d: "قائمة تشغيل من Khan Academy بتشرح أساسيات الإنترنت بما فيها TCP/IP، packets، و routers. مفهوم كمقدمة للمحاضرة 7 وربطها بالفصول السابقة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HD8wtmKZh0nKOsOvP1KYaNO",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },

        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مصادر مكتوبة رسمية: GeeksforGeeks، Cloudflare Learning، Wikipedia — بشرح Transport Layer و TCP/UDP و IP.",
          links: [
            {
              t: "GeeksforGeeks — Transport Layer in OSI Model",
              d: "مقال تعليمي بشرح Transport Layer في OSI model: دورها، الـ segments، الـ multiplexing، والفرق بين TCP و UDP. مطابق لمحتوى القسم 3.1.2.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 Transport Layer in OSI Model",
                  url: "https://www.geeksforgeeks.org/computer-networks/transport-layer-in-osi-model",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 Differences between TCP and UDP",
                  url: "https://www.geeksforgeeks.org/computer-networks/differences-between-tcp-and-udp",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 User Datagram Protocol (UDP)",
                  url: "https://www.geeksforgeeks.org/computer-networks/user-datagram-protocol-udp",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Cloudflare Learning Center",
              d: "مصدر رسمي من Cloudflare بشرح OSI model (مع Transport Layer كـ Layer 4) والـ network layer. مهم لفهم القسم 3.1.1 (Relationship Between Transport and Network Layers).",
              icon: "📚",
              actions: [
                {
                  label: "🌐 What is the OSI Model? (Layer 4 = Transport)",
                  url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 What is the network layer?",
                  url: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Wikipedia — Transport layer and Internet protocol suite",
              d: "مقال موسوعي عن Transport layer (دورها، protocols، الـ multiplexing) وعن Internet protocol suite (TCP/IP). يكمل المحاضرة 7 بتفاصيل إضافية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 Transport layer — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/Transport_layer",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 Internet protocol suite — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/Internet_protocol_suite",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات عملية لمراقبة طبقة النقل — تستخدم في الـ labs لمراقبة segments بتاعت TCP/UDP فعلًا.",
          links: [
            {
              t: "Wireshark — Network Protocol Analyzer",
              d: "أداة لالتقاط وتحليل باكتات الشبكة. ممكن تستخدمها عشان تشوف TCP segments و UDP segments فعلًا، وكمان الـ port numbers (مهم لمفهوم multiplexing/demultiplexing). أداة معتمدة في معظم مقررات الشبكات.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "Cisco Packet Tracer",
              d: "أداة محاكاة رسمية من Cisco لمحاكاة الشبكات بما فيها TCP/UDP traffic. ممكن تشوف بيها إزاي الـ segments بتتنقل بين hosts و routers. مجانية للطلاب.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ صفحة التحميل الرسمية",
                  url: "https://www.netacad.com/cisco-packet-tracer",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "nghttp2 — HTTP/2 Command-Line Client",
              d: "أداة سطر أوامر لاختبار TCP connections و HTTP. ممكن تشوف بيها الـ TCP handshake و الـ segments فعلًا. مفهوم لـ labs عملية على طبقة النقل.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://nghttp2.org",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. Where does the transport layer reside in the layered network architecture?",
          options: [
            "Above the application layer",
            "Between the physical layer and the data link layer",
            "Between the application layer and the network layer",
            "Between the network layer and the data link layer",
          ],
          correct: 2,
          translation: "فين طبقة النقل في الـ layered network architecture؟",
          explanation:
            "طبقة النقل بين طبقة التطبيق (فوقها) وطبقة الشبكة (تحتها) — ده دور مركزي. مش بين physical و data link، ولا بين network و data link، ولا فوق application.",
          tags: ["Transport Layer", "Architecture"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1 (intro)",
          likely: "high",
        },
        {
          q: "2. The transport layer provides communication services directly to:",
          options: [
            "Application processes running on different hosts",
            "Routers along the path",
            "The physical links only",
            "DNS servers only",
          ],
          correct: 0,
          translation: "طبقة النقل بتوفّر خدمات اتصال مباشرة لـ إيه؟",
          explanation:
            "للـ application processes على hosts مختلفة. ده دورها الأساسي. مش للـ routers ولا الـ links ولا DNS.",
          tags: ["Transport Layer", "Application processes"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1 (intro)",
          likely: "high",
        },
        {
          q: "3. A transport-layer protocol provides for logical communication between:",
          options: [
            "Application processes running on different hosts",
            "Hosts only",
            "Physical links only",
            "Routers only",
          ],
          correct: 0,
          translation:
            "بروتوكول طبقة النقل بيوفّر logical communication بين إيه؟",
          explanation:
            "بين application processes على hosts مختلفة. من منظور التطبيق، كأن الـ hosts متصلين مباشرة رغم إنهم ممكن يكونوا على جانبي الكوكب.",
          tags: ["Transport Layer", "Logical communication"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: '4. By "logical communication" between processes, we mean that:',
          options: [
            "The processes are physically connected by a wire",
            "From an application's perspective, it is as if the hosts running the processes were directly connected",
            "The routers handle the application messages directly",
            "The transport layer routes packets through the network core",
          ],
          correct: 1,
          translation: 'إيه معنى "logical communication" بين العمليات؟',
          explanation:
            "من منظور التطبيق، كأن الـ hosts متصلة مباشرة — رغم إن في الواقع ممكن يكونوا على جانبي الكوكب متصلين عبر راوترز وروابط.",
          tags: ["Transport Layer", "Logical communication", "Definition"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "5. On the sending side, the transport layer converts application-layer messages into:",
          options: [
            "Network-layer datagrams",
            "Transport-layer segments",
            "Physical bits",
            "Application frames",
          ],
          correct: 1,
          translation:
            "على جانب الإرسال، طبقة النقل بتحوّل رسائل التطبيق لـ إيه؟",
          explanation:
            "لـ transport-layer segments. الـ network layer بعدها بـ encapsulate الـ segment جوه datagram. مش datagrams (ده شغل الـ network layer).",
          tags: ["Transport Layer", "Segments", "Sending side"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "6. How does the transport layer create a transport-layer segment?",
          options: [
            "By routing the message through the network core",
            "By encrypting the entire application message",
            "By compressing the message into a single byte",
            "(Possibly) breaking the application messages into smaller chunks and adding a transport-layer header to each chunk",
          ],
          correct: 3,
          translation: "إزاي طبقة النقل بتعمل transport-layer segment؟",
          explanation:
            "بتكسر رسالة التطبيق لـ chunks أصغيرة (لو لزم) وتضيف transport-layer header لكل chunk. ده اللي بيعمل segment. مش تشفير ولا توجيه ولا ضغط.",
          tags: ["Transport Layer", "Segments", "Encapsulation"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "7. The transport layer passes the segment to the network layer, where the segment is:",
          options: [
            "Discarded and re-created at the destination",
            "Encapsulated within a network-layer packet (a datagram) and sent to the destination",
            "Sent directly to the application layer at the destination",
            "Stored in the routers along the path",
          ],
          correct: 1,
          translation:
            "طبقة النقل بتسلم الـ segment لطبقة الشبكة، وهناك الـ segment بيتعمله إيه؟",
          explanation:
            "بيـ encapsulate جوه network-layer packet (datagram) ويتابع للـ destination. الـ routers بتشتغل على الـ network-layer fields فقط.",
          tags: ["Transport Layer", "Network layer", "Encapsulation"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "8. Network routers act on which fields of the datagram?",
          options: [
            "Only the network-layer fields; they do not examine the transport-layer segment fields",
            "Only the transport-layer fields",
            "Only the application-layer fields",
            "Both the network-layer and transport-layer fields",
          ],
          correct: 0,
          translation: "الـ routers بتشتغل على أي fields في الـ datagram؟",
          explanation:
            "على network-layer fields فقط — ما بتفحصش transport-layer segment fields. ده نقطة مهمة: الـ transport layer بتعيش في الـ end systems فقط.",
          tags: ["Routers", "Network layer", "Transport layer"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "9. On the receiving side, what does the network layer do with the transport-layer segment?",
          options: [
            "Forwards it to another router",
            "Encrypts it before passing to the transport layer",
            "Extracts it from the datagram and passes it up to the transport layer",
            "Discards it after routing",
          ],
          correct: 2,
          translation:
            "على جانب الاستقبال، طبقة الشبكة بتعمل إيه بالـ transport-layer segment؟",
          explanation:
            "بتـ extract الـ segment من الـ datagram وبتسلمه لطبقة النقل فوق. بعدها طبقة النقل بتعالجه وتسلم البيانات للتطبيق.",
          tags: ["Network layer", "Receiving side"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "10. How many transport-layer protocols does the Internet make available to network applications?",
          options: [
            "One — only TCP",
            "Three — TCP, UDP, and ICMP",
            "Two — TCP and UDP",
            "Five",
          ],
          correct: 2,
          translation: "الإنترنت بيوفّر كام بروتوكول نقل للتطبيقات؟",
          explanation:
            "بروتوكولين: TCP و UDP. كل واحد بيوفّر set مختلف من خدمات النقل للتطبيق.",
          tags: ["Transport Layer", "TCP", "UDP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "11. Whereas a transport-layer protocol provides logical communication between processes, a network-layer protocol provides logical communication between:",
          options: ["Hosts", "Processes", "Applications", "Routers"],
          correct: 0,
          translation:
            "بروتوكول طبقة الشبكة بيوفّر logical communication بين إيه (مقابل طبقة النقل اللي بين العمليات)؟",
          explanation:
            "بين hosts. ده فرق أساسي: transport = process-to-process، network = host-to-host. النقطة دي subtle بس مهمة.",
          tags: ["Transport vs Network", "Hosts", "Processes"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "12. The distinction between transport-layer (process-to-process) and network-layer (host-to-host) communication is:",
          options: [
            "Irrelevant",
            "Subtle but important",
            "False — both are process-to-process",
            "False — both are host-to-host",
          ],
          correct: 1,
          translation:
            "الفرق بين transport layer (process-to-process) و network layer (host-to-host) إيه طبيعته؟",
          explanation:
            "subtle لكن مهم. الـ transport بيكمل شغل الـ network بيوصله من host-host لـ process-process. تعريف مهم الدكتور بيشدد عليه.",
          tags: ["Transport vs Network", "Distinction"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "13. Where do transport-layer protocols live?",
          options: [
            "In the physical links",
            "In the end systems",
            "In the network core",
            "In the routers",
          ],
          correct: 1,
          translation: "بروتوكولات طبقة النقل بتعيش فين؟",
          explanation:
            "في الـ end systems. مش في الـ routers ولا في الـ network core. ده عشان كده الـ routers ما بتعترفش بمعلومات الـ transport.",
          tags: ["Transport Layer", "End systems"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "14. Within an end system, what does a transport protocol do (regarding the network edge)?",
          options: [
            "Encrypts messages for the network layer",
            "Moves messages from application processes to the network edge (the network layer) and vice versa",
            "Manages the routers along the path",
            "Routes packets through the network core",
          ],
          correct: 1,
          translation:
            "جوه الـ end system، بروتوكول النقل بيعمل إيه بالنسبة للـ network edge؟",
          explanation:
            "بيحرّك رسائل من العمليات لـ network edge (لـ network layer) والعكس. مالوش أي دور في إزاي الرسائل بتتحرك جوه الـ network core.",
          tags: ["Transport Layer", "Network edge"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "15. Does a transport protocol have any say about how messages are moved within the network core?",
          options: [
            "No, it does not have any say",
            "Yes, it routes the messages itself",
            "Yes, it encrypts them inside the core",
            "Yes, it controls the routers",
          ],
          correct: 0,
          translation:
            "هل بروتوكول النقل عنده أي رأي في إزاي الرسائل بتتحرك جوه الـ network core؟",
          explanation:
            "لا — مالوش أي دور. الـ transport بتعيش في الـ end systems فقط والـ routers ما بتعترفش بمعلوماتها.",
          tags: ["Transport Layer", "Network core"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "16. Intermediate routers recognize what information that the transport layer may have added to application messages?",
          options: [
            "They act on it and route based on it",
            "They encrypt it before forwarding",
            "They neither act on nor recognize any such information",
            "They recognize it but do not act on it",
          ],
          correct: 2,
          translation:
            "الـ routers الوسيطة بتعترف بإيه من معلومات طبقة النقل اللي ممكن تكون اتضافت؟",
          explanation:
            "لا بتعترف ولا بتشتغل عليها. الـ routers بتشتغل على network-layer fields فقط — معلومات الـ transport ليها شأنها بس في الـ end systems.",
          tags: ["Routers", "Transport Layer"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "17. A computer network may make available how many transport protocols?",
          options: [
            "None — applications handle transport themselves",
            "Only one",
            "Multiple, with each protocol offering a different service model to applications",
            "Always exactly three",
          ],
          correct: 2,
          translation: "الشبكة ممكن توفّر كام بروتوكول نقل؟",
          explanation:
            "ممكن كذا بروتوكول، كل واحد بيوفّر service model مختلف للتطبيقات. الإنترنت عنده TCP و UDP كمثال.",
          tags: ["Transport Layer", "Service models"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "18. The services that a transport protocol can provide are often constrained by:",
          options: [
            "The DNS resolver",
            "The physical layer's bandwidth only",
            "The application layer's preferences",
            "The service model of the underlying network-layer protocol",
          ],
          correct: 3,
          translation:
            "الخدمات اللي بروتوكول النقل يقدر يوفّرها بتبقى مقيدة غالبًا بـ إيه؟",
          explanation:
            "بـ service model بتاع الـ network-layer protocol اللي تحته. لو الـ network ما بيوفرش delay/bandwidth guarantees، الـ transport ما يقدرش يوفرها للتطبيقات.",
          tags: ["Transport Layer", "Network Layer", "Constraints"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "19. If the network-layer protocol cannot provide delay or bandwidth guarantees, what can the transport-layer protocol do?",
          options: [
            "It can still provide them by using a different physical link",
            "It can still provide them by buffering in the routers",
            "It cannot provide delay or bandwidth guarantees for application messages sent between processes",
            "It can still provide them by encrypting the segments",
          ],
          correct: 2,
          translation:
            "لو الـ network-layer ما بيوفرش delay أو bandwidth guarantees، الـ transport-layer يقدر يعمل إيه؟",
          explanation:
            "ما يقدرش يوفّرها. الـ transport بتبقى constrained بـ service model بتاع الـ network اللي تحتها.",
          tags: ["Transport Layer", "Network Layer", "Constraints"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "20. What service can a transport protocol offer even when the underlying network protocol is unreliable (loses, garbles, or duplicates packets)?",
          options: [
            "Lower delay than the network layer",
            "Reliable data transfer service to an application",
            "Encryption of all messages",
            "Higher bandwidth than the network layer",
          ],
          correct: 1,
          translation:
            "إيه خدمة بروتوكول النقل يقدر يوفّرها حتى لو الـ network protocol مش موثوق؟",
          explanation:
            "reliable data transfer service. ده مثال على إن الـ transport يقدر يضيف خدمات حتى لو الـ network تحتها ما بيوفرشها — TCP بيعمل كده فوق IP.",
          tags: ["Transport Layer", "Reliable data transfer"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "21. What can a transport protocol use to guarantee that application messages are not read by intruders, even when the network layer cannot guarantee confidentiality?",
          options: [
            "Encryption",
            "Acknowlegments",
            "Sequence numbers",
            "Timers",
          ],
          correct: 0,
          translation:
            "بماذا يمكن لبروتوكول النقل أن يضمن عدم قراءة الرسائل من قبل المتسللين، حتى لو كانت طبقة الشبكة لا تستطيع؟",
          explanation:
            "encryption. ده موضوع Chapter 8 (network security). نقطة مهمة: الـ transport يقدر يضيف security فوق ما الـ network يوفره.",
          tags: ["Transport Layer", "Encryption", "Security"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "22. The Internet makes how many distinct transport-layer protocols available to the application layer?",
          options: ["One", "Two", "Four", "Three"],
          correct: 1,
          translation:
            "الإنترنت بيوفّر كام بروتوكول نقل مختلف للـ application layer؟",
          explanation:
            "بروتوكولين: UDP و TCP. نقطة أساسية في بداية القسم 3.1.2.",
          tags: ["Internet Transport", "TCP", "UDP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (intro)",
          likely: "high",
        },
        {
          q: "23. UDP (User Datagram Protocol) provides which type of service to the invoking application?",
          options: [
            "Reliable, connection-oriented service",
            "Unreliable, connection-oriented service",
            "Reliable, connectionless service",
            "Unreliable, connectionless service",
          ],
          correct: 3,
          translation: "UDP بيوفّر إيه نوع خدمة للتطبيق؟",
          explanation:
            "unreliable + connectionless. عكس TCP اللي reliable + connection-oriented. تعريف أساسي.",
          tags: ["UDP", "Services"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "24. TCP (Transmission Control Protocol) provides which type of service to the invoking application?",
          options: [
            "Reliable, connection-oriented service",
            "Reliable, connectionless service",
            "Unreliable, connectionless service",
            "Unreliable, connection-oriented service",
          ],
          correct: 0,
          translation: "TCP بيوفّر إيه نوع خدمة للتطبيق؟",
          explanation: "reliable + connection-oriented. عكس UDP. تعريف أساسي.",
          tags: ["TCP", "Services"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "25. When designing a network application, the application developer must:",
          options: [
            "Use only TCP",
            "Specify one of the two transport protocols (TCP or UDP)",
            "Use only UDP",
            "Implement their own transport protocol",
          ],
          correct: 1,
          translation: "لما تطور network application، المطور لازم يعمل إيه؟",
          explanation:
            "يحدد واحد من البروتوكولين (TCP أو UDP). ما يقدرش يكتب بروتوكول نقله الخاص، ولا هو مضطر يستخدم واحد بس.",
          tags: ["Transport Layer", "Application developer"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "26. In this book, the transport-layer packet is referred to as:",
          options: ["A bit", "A segment", "A frame", "A datagram"],
          correct: 1,
          translation: "في الكتاب ده، الـ transport-layer packet بيتسمى إيه؟",
          explanation:
            'segment. الكتاب اختار ده عشان يتجنب اللبس. RFCs بتستخدم "datagram" للـ UDP ساعات وللـ network-layer ساعات.',
          tags: ["Transport Layer", "Terminology", "Segment"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (terminology)",
          likely: "high",
        },
        {
          q: "27. The Internet's network-layer protocol is called:",
          options: ["HTTP", "UDP", "TCP", "IP (Internet Protocol)"],
          correct: 3,
          translation: "بروتوكول طبقة الشبكة في الإنترنت بيتسمى إيه؟",
          explanation:
            "IP (Internet Protocol). TCP و UDP بروتوكولات نقل، HTTP بروتوكول تطبيق. تعريف أساسي.",
          tags: ["Network Layer", "IP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "28. What kind of communication does IP provide?",
          options: [
            "Logical communication between routers",
            "Logical communication between hosts",
            "Logical communication between processes",
            "Physical communication between hosts",
          ],
          correct: 1,
          translation: "IP بيوفّر إيه نوع اتصال؟",
          explanation:
            "logical communication بين hosts. الـ transport layer (TCP/UDP) بيوصل ده لـ process-to-process.",
          tags: ["IP", "Logical communication", "Hosts"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "29. The IP service model is best described as:",
          options: [
            "A best-effort delivery service",
            "A reliable delivery service",
            "A guaranteed-bandwidth delivery service",
            "A connection-oriented delivery service",
          ],
          correct: 0,
          translation: "IP service model بيتوصف بإيه؟",
          explanation:
            "best-effort delivery service. IP بيعمل جهده يوصل الـ segments، بس ما بيضمنش حاجة. تعريف أساسي.",
          tags: ["IP", "Best-effort", "Service model"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "30. Which of the following does IP NOT guarantee?",
          options: [
            "Segment delivery only",
            "Integrity of data in segments only",
            "All of these: segment delivery, orderly delivery, and integrity of data in segments",
            "Orderly delivery of segments only",
          ],
          correct: 2,
          translation: "IP ما بيضمنش إيه؟",
          explanation:
            'ما بيضمنش أي حاجة من التلاتة: لا وصول، لا ترتيب، لا سلامة البيانات. عشان كده IP اسمه unreliable service. ده عكس الـ All/None of the above، إجابة "All of these" صحيحة كتفصيل هنا.',
          tags: ["IP", "Unreliable", "Guarantees"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "31. IP is said to be an unreliable service because:",
          options: [
            "It does not guarantee segment delivery, orderly delivery, or integrity of the data in segments",
            "It always loses packets on purpose",
            "It only works on local networks",
            "It encrypts all segments",
          ],
          correct: 0,
          translation: "ليه IP بيتوصف بأنه unreliable service؟",
          explanation:
            "لأنه ما بيضمنش أي حاجة: لا وصول الـ segments، لا ترتيبها، لا سلامة بياناتها. تعريف مهم.",
          tags: ["IP", "Unreliable", "Definition"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "32. Every host has at least one:",
          options: [
            "Physical port number",
            "DNS resolver",
            "Network-layer address (IP address)",
            "Transport-layer address only",
          ],
          correct: 2,
          translation: "كل host عنده على الأقل إيه؟",
          explanation:
            "IP address (network-layer address). نقطة مهمة: كل host في الإنترنت عنده IP address. هنفصلها في Chapter 4.",
          tags: ["IP address", "Hosts"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "33. The most fundamental responsibility of UDP and TCP is to:",
          options: [
            "Replace IP with a faster protocol",
            "Provide routing within the network core",
            "Extend IP's host-to-host delivery service to a process-to-process delivery service",
            "Encrypt all application messages",
          ],
          correct: 2,
          translation: "إيه الـ fundamental responsibility بتاع UDP و TCP؟",
          explanation:
            "يوسّعوا host-to-host delivery بتاع IP لـ process-to-process delivery. ده اسمه transport-layer multiplexing and demultiplexing.",
          tags: ["UDP", "TCP", "Multiplexing"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "34. Extending host-to-host delivery to process-to-process delivery is called:",
          options: [
            "Transport-layer multiplexing and demultiplexing",
            "Physical-layer modulation",
            "Application-layer caching",
            "Network-layer routing",
          ],
          correct: 0,
          translation:
            "توسيع host-to-host delivery لـ process-to-process delivery بيتسمى إيه؟",
          explanation:
            "transport-layer multiplexing and demultiplexing. هنقاشه بالتفصيل في القسم اللي after.",
          tags: ["Multiplexing", "Demultiplexing", "Definition"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "35. UDP and TCP also provide integrity checking by:",
          options: [
            "Compressing the segments",
            "Encrypting the segments",
            "Including error-detection fields in their segments' headers",
            "Routing through different paths",
          ],
          correct: 2,
          translation: "UDP و TCP بيوفّروا integrity checking بإيه؟",
          explanation:
            "بيضيفوا error-detection fields في headers بتاعتهم. ده بتاع الخدمة التانية من الخدمتين الأساسيين.",
          tags: ["UDP", "TCP", "Error detection", "Integrity"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "36. How many minimal transport-layer services does UDP provide?",
          options: [
            "One — only process-to-process data delivery",
            "Three — delivery, error checking, and congestion control",
            "Two — process-to-process data delivery and error checking",
            "Four — delivery, error checking, congestion control, and reliability",
          ],
          correct: 2,
          translation: "UDP بيوفّر كام خدمة نقل أساسية؟",
          explanation:
            "خدمتين فقط: process-to-process data delivery + error checking. مش بيوفّر reliable transfer ولا congestion control.",
          tags: ["UDP", "Minimal services"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "37. Like IP, UDP is said to be an unreliable service because:",
          options: [
            "It always delays packets by 5 seconds",
            "It encrypts data so the destination cannot read it",
            "It does not guarantee that data sent by one process will arrive intact (or at all) to the destination process",
            "It only works on local networks",
          ],
          correct: 2,
          translation: "زي IP، UDP بيتوصف بأنه unreliable ليه؟",
          explanation:
            "ما بيضمنش إن البيانات المبعوتة توصل سليمة (أو توصل أصلاً) للـ process المستقبلة. تعريف مهم.",
          tags: ["UDP", "Unreliable"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "38. Compared to UDP, TCP offers several additional services to applications. Which is one of them?",
          options: [
            "Smaller segment size",
            "Connectionless communication",
            "Lower latency than UDP",
            "Reliable data transfer",
          ],
          correct: 3,
          translation:
            "بالنسبة لـ UDP، TCP بيوفّر خدمات إضافية. إيه واحدة منها؟",
          explanation:
            "reliable data transfer (وأيضاً congestion control). UDP ما بيوفرش أي حاجة من الاتنين.",
          tags: ["TCP", "Reliable data transfer"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "39. Which techniques does TCP use to ensure data is delivered correctly and in order?",
          options: [
            "Compression and decompression",
            "Routing through different paths",
            "Flow control, sequence numbers, acknowledgments, and timers",
            "Encryption only",
          ],
          correct: 2,
          translation:
            "TCP بيستخدم إيه تقنيات عشان يضمن وصول البيانات صح وبالترتيب؟",
          explanation:
            "flow control, sequence numbers, acknowledgments, timers. النقاط دي هنقاشها بالتفصيل في الفصل.",
          tags: ["TCP", "Reliable data transfer techniques"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "40. TCP converts IP's unreliable service between end systems into:",
          options: [
            "A reliable data transport service between processes",
            "An encrypted service only",
            "A connectionless service",
            "A faster, less reliable service",
          ],
          correct: 0,
          translation:
            "TCP بيحوّل خدمة IP الـ unreliable بين الـ end systems لـ إيه؟",
          explanation:
            "لـ reliable data transport service بين العمليات. ده دور TCP الأساسي فوق IP.",
          tags: ["TCP", "Reliable data transfer", "IP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "41. In addition to reliable data transfer, what other major service does TCP provide?",
          options: [
            "Encryption of all messages",
            "Connectionless communication",
            "Faster routing than IP",
            "Congestion control",
          ],
          correct: 3,
          translation:
            "بالإضافة لـ reliable data transfer، TCP بيوفّر إيه خدمة تانية؟",
          explanation:
            "congestion control. بيمنع أي TCP connection من إنه يغرق الـ links و الـ routers بـ traffic زيادة.",
          tags: ["TCP", "Congestion control"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "42. TCP congestion control prevents any one TCP connection from:",
          options: [
            "Sending more than one packet",
            "Using UDP as a transport",
            "Swamping the links and routers between communicating hosts with an excessive amount of traffic",
            "Encrypting all data",
          ],
          correct: 2,
          translation: "TCP congestion control بيمنع أيه؟",
          explanation:
            "يمنع أي TCP connection من إنه يغرق الـ links و الـ routers بـ traffic زيادة. ده لحماية الشبكة كلها.",
          tags: ["TCP", "Congestion control"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "43. Compared to TCP traffic, UDP traffic is:",
          options: [
            "Strictly regulated by TCP",
            "Regulated by the routers",
            "Always limited to 1 Mbps",
            "Unregulated — an application using UDP can send at any rate it pleases, for as long as it pleases",
          ],
          correct: 3,
          translation: "بالنسبة لـ TCP traffic، الـ UDP traffic بيتوصف بإيه؟",
          explanation:
            "unregulated. التطبيق يقدر يبعت بأي معدل و لأي مدة من غير ما حد يوقفه. ده فرق أساسي بين TCP و UDP.",
          tags: ["UDP", "Unregulated", "TCP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "44. An application using UDP transport can:",
          options: [
            "Only send for a maximum of 60 seconds",
            "Only send during non-peak hours",
            "Only send at a rate determined by the routers",
            "Send at any rate it pleases, for as long as it pleases",
          ],
          correct: 3,
          translation: "التطبيق اللي بيستخدم UDP يقدر يعمل إيه؟",
          explanation:
            "يبعت بأي معدل و لأي مدة من غير تنظيم. ده ممكن يسبب مشاكل congestion للشبكة — لكنها مشكلة الشبكة مش التطبيق.",
          tags: ["UDP", "Unregulated traffic"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "45. Which two minimal services are the only services that UDP provides?",
          options: [
            "Encryption and authentication",
            "Reliable data transfer and congestion control",
            "Routing and forwarding",
            "Process-to-process data delivery and error checking",
          ],
          correct: 3,
          translation:
            "إيه الخدمتين الأساسيين اللي UDP بيوفّرهم وبيقصروا عليهم؟",
          explanation:
            "process-to-process data delivery + error checking.UDP ما بيوفرش reliable transfer ولا congestion control.",
          tags: ["UDP", "Minimal services"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "46. The transport layer in the Internet is the central piece of the layered network architecture because it:",
          options: [
            "Manages the physical layer connections",
            "Routes packets through the network core",
            "Encodes data into bits for transmission",
            "Provides communication services directly to application processes running on different hosts",
          ],
          correct: 3,
          translation:
            "ليه طبقة النقل بتعتبر central piece في الـ layered architecture؟",
          explanation:
            "لأنها بتوفّر خدمات اتصال مباشرة لـ application processes على hosts مختلفة. ده دورها المركزي.",
          tags: ["Transport Layer", "Architecture"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1 (intro)",
          likely: "high",
        },
        {
          q: "47. Which protocol's service model constrains the services that a transport protocol can offer?",
          options: [
            "The physical-layer protocol",
            "The underlying network-layer protocol",
            "The data-link-layer protocol",
            "The application-layer protocol",
          ],
          correct: 1,
          translation: "بروتوكول إيه اللي بيقيّد خدمات الـ transport؟",
          explanation:
            "الـ network-layer protocol اللي تحت. لو الـ network ما بيوفرش delay/bandwidth guarantees، الـ transport ما يقدرش يوفرها.",
          tags: ["Transport Layer", "Network Layer"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          q: "48. When the receiving transport layer processes the received segment, it:",
          options: [
            "Discards it to save space",
            "Makes the data in the segment available to the receiving application",
            "Forwards it to another router",
            "Encrypts it before delivery",
          ],
          correct: 1,
          translation:
            "لما طبقة النقل على جانب الاستقبال تعالج الـ segment، بتعمل إيه؟",
          explanation:
            "بتسلم البيانات للتطبيق المستقبل. ده آخر خطوة في رحلة الـ segment من المرسل للمستقبل.",
          tags: ["Transport Layer", "Receiving side"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          q: "49. Which is NOT a service that the IP service model guarantees?",
          options: [
            "Orderly delivery of segments",
            "All of these are NOT guaranteed by IP",
            "Segment delivery",
            "Integrity of the data in segments",
          ],
          correct: 1,
          translation: "إيه اللي مش خدمة بيضمنها IP؟",
          explanation:
            'IP ما بيضمنش أي حاجة من التلاتة. عشان كده اسمه unreliable service. ملاحظة: "All of these are NOT guaranteed" بمعنى إن الـ IP مش بيضمن أي واحدة منهم — مختلف عن "All of the above" في صياغة سؤال عادي.',
          tags: ["IP", "Unreliable"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          q: "50. Which statement best describes the relationship between the transport layer and the network layer?",
          options: [
            "The two layers are independent and unrelated",
            "The network layer extends the transport layer's process-to-process delivery",
            "The transport layer replaces the network layer",
            "The transport layer extends the host-to-host delivery of the network layer to a process-to-process delivery",
          ],
          correct: 3,
          translation: "إيه العبارة الأصح عن علاقة طبقة النقل بطبقة الشبكة؟",
          explanation:
            "الـ transport بيتوسّع host-to-host بتاع الـ network لـ process-to-process. العلاقة دي hierarchical ومهمة.",
          tags: ["Transport Layer", "Network Layer", "Relationship"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1 + 3.1.2",
          likely: "high",
        },
        {
          q: "51. The Internet literature (RFCs) refers to the TCP packet as:",
          options: ["A segment", "A message", "A datagram", "A frame"],
          correct: 0,
          translation: "أدبيات الإنترنت (RFCs) بتعرف الـ TCP packet بإيه؟",
          explanation:
            "segment. لكن بتقول إن UDP packet ساعات بيتسمى datagram — ده اللي بيخلق لبس.",
          tags: ["RFC", "Terminology", "Segment"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (terminology)",
          likely: "medium",
        },
        {
          q: "52. The Internet literature often refers to the UDP packet as:",
          options: ["A bit", "A frame", "A datagram", "A segment"],
          correct: 2,
          translation: "أدبيات الإنترنت بتعرف الـ UDP packet ساعات بإيه؟",
          explanation:
            'datagram. ده بيخلق لبس لإن نفس الاسم بيتستخدم للـ network-layer packet. عشان كده الكتاب اختار "segment" للاتنين.',
          tags: ["RFC", "Terminology", "Datagram"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (terminology)",
          likely: "medium",
        },
        {
          q: '53. Why does this book refer to both TCP and UDP packets as "segments"?',
          options: [
            'To reserve the term "datagram" for the network-layer packet and avoid confusion',
            "Because the RFCs require it",
            "Because TCP and UDP are the same protocol",
            "Because the network layer does not use datagrams",
          ],
          correct: 0,
          translation: 'ليه الكتاب بيسمي TCP و UDP packets بـ "segments"؟',
          explanation:
            'عشان يحجز "datagram" للـ network-layer packet ويقلل اللبس. ملحوظة منهجية مهمة.',
          tags: ["Terminology", "Segment", "Datagram"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (terminology)",
          likely: "medium",
        },
        {
          q: "54. Which layer is responsible for breaking application messages into smaller chunks (if needed) on the sending side?",
          options: [
            "The data link layer",
            "The physical layer",
            "The network layer",
            "The transport layer",
          ],
          correct: 3,
          translation:
            "إيه الطبقة المسؤولة عن تكسير رسائل التطبيق لـ chunks أصغر (لو لزم) على جانب الإرسال؟",
          explanation:
            "طبقة النقل. بـ (possibly) break لـ chunks أصغر وبتضيف header لكل chunk.",
          tags: ["Transport Layer", "Sending side"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "medium",
        },
        {
          q: '55. The book uses the term "datagram" to refer specifically to:',
          options: [
            "A network-layer packet",
            "A transport-layer packet (TCP)",
            "An application-layer message",
            "A transport-layer packet (UDP)",
          ],
          correct: 0,
          translation: 'الكتاب بيستخدم "datagram" لـ إيه بالظبط؟',
          explanation:
            "network-layer packet. عشان يتجنب اللبس مع UDP packet اللي RFCs ساعات بتسميه datagram.",
          tags: ["Terminology", "Datagram"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (terminology)",
          likely: "medium",
        },
        {
          q: "56. What is the chapter's discussion of network security (Chapter 8) relevant to in this section?",
          options: [
            "UDP cannot use encryption",
            "TCP requires encryption for all messages",
            "IP encrypts all packets by default",
            "A transport protocol can use encryption to guarantee that application messages are not read by intruders",
          ],
          correct: 3,
          translation: "إيه علاقة Chapter 8 (network security) بالقسم ده؟",
          explanation:
            "بيوضّح إن الـ transport يقدر يستخدم encryption يحمي بيها الرسائل من المتسللين — حتى لو الـ network layer ما بيضمنش confidentiality. ده مثال على إضافة الـ transport لخدمات فوق الـ network.",
          tags: ["Security", "Encryption"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "medium",
        },
        {
          type: "essay",
          q: '1. Define the role of the transport layer in the layered network architecture, and explain what is meant by "logical communication between processes".',
          translation:
            'عرّف دور طبقة النقل في الـ layered network architecture، واشرح إيه معنى "logical communication between processes".',
          answer:
            "The transport layer resides between the application layer and the network layer and is a central piece of the layered network architecture. It has the critical role of providing communication services directly to the application processes running on different hosts.\nA transport-layer protocol provides for logical communication between application processes running on different hosts. By logical communication, we mean that from an application's perspective, it is as if the hosts running the processes were directly connected; in reality, the hosts may be on opposite sides of the planet, connected via numerous routers and a wide range of link types.\nApplication processes use the logical communication provided by the transport layer to send messages to each other, free from the worry of the details of the physical infrastructure used to carry these messages.",
          tags: ["Transport Layer", "Logical communication", "Definition"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1 (intro)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain what the transport layer does on the sending side and on the receiving side of an end system.",
          translation:
            "اشرح إيه اللي طبقة النقل بتعمله على جانب الإرسال وعلى جانب الاستقبال في الـ end system.",
          answer:
            "On the sending side, the transport layer converts the application-layer messages it receives from a sending application process into transport-layer packets, known as transport-layer segments in Internet terminology.\nThis is done by (possibly) breaking the application messages into smaller chunks and adding a transport-layer header to each chunk to create the transport-layer segment. The transport layer then passes the segment to the network layer at the sending end system, where the segment is encapsulated within a network-layer packet (a datagram) and sent to the destination.\nIt's important to note that network routers act only on the network-layer fields of the datagram; they do not examine the fields of the transport-layer segment encapsulated with the datagram.\nOn the receiving side, the network layer extracts the transport-layer segment from the datagram and passes the segment up to the transport layer. The transport layer then processes the received segment, making the data in the segment available to the receiving application.",
          tags: ["Transport Layer", "Sending side", "Receiving side"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Distinguish between the transport layer and the network layer, in terms of what each provides logical communication between and where each protocol lives.",
          translation:
            "بيّن الفرق بين طبقة النقل وطبقة الشبكة، من حيث إيه اللي كل واحدة بتوفّر logical communication بينه وفين كل بروتوكول بتعيش.",
          answer:
            "Whereas a transport-layer protocol provides logical communication between processes running on different hosts, a network-layer protocol provides logical communication between hosts. This distinction is subtle but important.\nTransport-layer protocols live in the end systems. Within an end system, a transport protocol moves messages from application processes to the network edge (that is, the network layer) and vice versa, but it doesn't have any say about how the messages are moved within the network core.\nIn fact, intermediate routers neither act on, nor recognize, any information that the transport layer may have added to the application messages.\nThe network layer (e.g., IP in the Internet), in contrast, is what gets messages from one host to another across the network core, and routers in the core act on the network-layer fields of the datagram.",
          tags: ["Transport vs Network", "Distinction"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Explain how the service model of the underlying network-layer protocol constrains the services that a transport protocol can offer, and give an example of a service that a transport protocol can still offer despite an unreliable network layer.",
          translation:
            "اشرح إزاي service model بتاع الـ network-layer protocol بيقيّد خدمات الـ transport، واذكر مثال لخدمة الـ transport يقدر يوفّرها رغم إن الـ network مش موثوق.",
          answer:
            "A computer network may make available multiple transport protocols, with each protocol offering a different service model to applications. The services that a transport protocol can provide are often constrained by the service model of the underlying network-layer protocol.\nIf the network-layer protocol cannot provide delay or bandwidth guarantees for transport-layer segments sent between hosts, then the transport-layer protocol cannot provide delay or bandwidth guarantees for application messages sent between processes.\nNevertheless, certain services can be offered by a transport protocol even when the underlying network protocol doesn't offer the corresponding service at the network layer:\n- A transport protocol can offer reliable data transfer service to an application even when the underlying network protocol is unreliable — that is, even when the network protocol loses, garbles, or duplicates packets. (TCP over IP is exactly this case.)\n- A transport protocol can use encryption to guarantee that application messages are not read by intruders, even when the network layer cannot guarantee the confidentiality of transport-layer segments (a topic explored in Chapter 8 on network security).",
          tags: [
            "Transport Layer",
            "Network Layer",
            "Constraints",
            "Reliable data transfer",
          ],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. List and briefly explain the two transport-layer protocols available in the Internet and the services each one provides.",
          translation:
            "اكتب واشرح باختصار البروتوكولين بتوع النقل اللي الإنترنت بيوفّرهم والخدمات اللي كل واحد بيوفّرها.",
          answer:
            "The Internet makes two distinct transport-layer protocols available to the application layer:\n\n1. UDP (User Datagram Protocol) — provides an unreliable, connectionless service to the invoking application. UDP provides only two minimal services: process-to-process data delivery and error checking (via error-detection fields in its segment header). Like IP, UDP is an unreliable service — it does not guarantee that data sent by one process will arrive intact (or at all) to the destination process.\n\n2. TCP (Transmission Control Protocol) — provides a reliable, connection-oriented service to the invoking application. TCP offers several additional services beyond what UDP offers:\n   - Reliable data transfer: using flow control, sequence numbers, acknowledgments, and timers, TCP ensures that data is delivered from sending process to receiving process, correctly and in order. TCP thus converts IP's unreliable service between end systems into a reliable data transport service between processes.\n   - Congestion control: TCP prevents any one TCP connection from swamping the links and routers between communicating hosts with an excessive amount of traffic. UDP traffic, on the other hand, is unregulated — an application using UDP can send at any rate it pleases, for as long as it pleases.",
          tags: ["TCP", "UDP", "Services", "Comparison"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          type: "essay",
          q: '6. Define the IP service model and explain why IP is called an "unreliable service".',
          translation:
            'عرّف IP service model واشرح ليه IP بيتسمى "unreliable service".',
          answer:
            "The Internet's network-layer protocol has a name — IP, for Internet Protocol. IP provides logical communication between hosts.\nThe IP service model is a best-effort delivery service. This means that IP makes its \"best effort\" to deliver segments between communicating hosts, but it makes no guarantees.\nIn particular, IP does not guarantee:\n1. Segment delivery (a segment might be lost).\n2. Orderly delivery of segments (segments might arrive out of order).\n3. The integrity of the data in the segments (a segment's contents might be corrupted).\nFor these reasons, IP is said to be an unreliable service.\nWe also mention that every host has at least one network-layer address, a so-called IP address. IP addressing is examined in detail in Chapter 4.",
          tags: ["IP", "Service model", "Best-effort", "Unreliable"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Define transport-layer multiplexing and demultiplexing, and explain why it is the most fundamental responsibility of UDP and TCP.",
          translation:
            "عرّف transport-layer multiplexing و demultiplexing، واشرح ليه ده الـ fundamental responsibility بتاع UDP و TCP.",
          answer:
            "Extending host-to-host delivery (provided by IP) to process-to-process delivery is called transport-layer multiplexing and demultiplexing.\nOn the sending side, multiple application processes on a single host can all send messages through the same transport layer; the transport layer multiplexes these messages onto the network layer (each with appropriate port/header information so the receiver can demultiplex them later).\nOn the receiving side, the transport layer demultiplexes incoming segments: it examines the segment headers to determine which application process should receive each segment, and passes the segment data to that process.\nThis is the most fundamental responsibility of UDP and TCP because it is what extends IP's host-to-host delivery into a process-to-process delivery service — which is exactly what applications need.\nIn addition to multiplexing/demultiplexing, UDP and TCP also provide integrity checking by including error-detection fields in their segments' headers. These two minimal transport-layer services — process-to-process data delivery and error checking — are the only two services that UDP provides; TCP adds reliable data transfer and congestion control on top.",
          tags: ["Multiplexing", "Demultiplexing", "UDP", "TCP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Compare the services offered by TCP and UDP. State what each protocol does and does NOT provide.",
          translation:
            "قارن بين خدمات TCP و UDP. اكتب إيه اللي كل واحد بيوفّره وإيه اللي مش بيوفّره.",
          answer:
            "Both TCP and UDP extend IP's host-to-host delivery to process-to-process delivery (multiplexing/demultiplexing) and both provide integrity checking via error-detection fields in the segment header. Beyond these two minimal services, the two protocols differ substantially.\n\nUDP:\n- Provides: process-to-process data delivery and error checking (only two minimal services).\n- Does NOT provide: reliable data transfer, congestion control, connection setup, flow control, sequence numbers, acknowledgments, or timers.\n- Like IP, UDP is an unreliable service — it does not guarantee that data sent by one process will arrive intact (or at all) to the destination process.\n- UDP traffic is unregulated — an application can send at any rate it pleases, for as long as it pleases.\n\nTCP:\n- Provides: process-to-process data delivery, error checking, plus reliable data transfer (using flow control, sequence numbers, acknowledgments, and timers) and congestion control.\n- TCP is connection-oriented.\n- TCP converts IP's unreliable service between end systems into a reliable data transport service between processes.\n- TCP congestion control prevents any one TCP connection from swamping the links and routers between communicating hosts with an excessive amount of traffic.\n\nWhen designing a network application, the application developer must specify one of these two transport protocols.",
          tags: ["TCP", "UDP", "Comparison"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain what is meant by TCP congestion control and how it differs from UDP traffic in terms of regulation.",
          translation:
            "اشرح إيه معنى TCP congestion control وإزاي يختلف عن UDP traffic من حيث التنظيم.",
          answer:
            "TCP provides congestion control. Loosely speaking, TCP congestion control prevents any one TCP connection from swamping the links and routers between communicating hosts with an excessive amount of traffic.\nEach TCP connection adjusts its sending rate in response to congestion signals (such as packet loss or delay) observed in the network, so that no single TCP connection unfairly consumes the available bandwidth at the expense of other connections or other traffic. (The exact mechanisms of TCP congestion control are studied in detail later in Chapter 3.)\nUDP traffic, on the other hand, is unregulated. An application using UDP transport can send at any rate it pleases, for as long as it pleases. There is no built-in mechanism in UDP to slow down in response to congestion.\nThis difference has practical consequences: a single UDP application could in principle overwhelm the network with its traffic, while a TCP connection will back off when congestion is detected.",
          tags: ["TCP", "Congestion control", "UDP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2",
          likely: "high",
        },
        {
          type: "essay",
          q: '10. Why is the transport layer described as a "central piece of the layered network architecture"? Justify with at least three reasons based on the lecture.',
          translation:
            'ليه طبقة النقل بتعتبر "central piece of the layered network architecture"؟ برّر بثلاث أسباب على الأقل من المحاضرة.',
          answer:
            "The transport layer is described as a central piece of the layered network architecture for several reasons based on the lecture:\n\n1. Position in the stack: It resides between the application layer and the network layer, acting as the bridge between what applications need and what the network can provide.\n\n2. Direct service to applications: It has the critical role of providing communication services directly to the application processes running on different hosts. From the application's perspective, the transport layer provides logical communication, so processes can exchange messages without worrying about the underlying physical infrastructure.\n\n3. Hides network imperfections from applications: Even when the underlying network layer (IP) is unreliable (loses, garbles, or duplicates packets), a transport protocol such as TCP can offer reliable data transfer to applications — making the network imperfections invisible to the application.\n\n4. Adds new services beyond what the network offers: Beyond reliability, the transport layer can add congestion control (TCP) and even security via encryption (Chapter 8), neither of which is provided by the underlying network layer.",
          tags: ["Transport Layer", "Architecture", "Role"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1 (intro)",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Describe the journey of an application-layer message from a sending process to a receiving process, mentioning the role of the transport and network layers at each step.",
          translation:
            "وصّف رحلة application-layer message من process مرسِل لـ process مستقبِل، مع ذكر دور طبقة النقل وطبقة الشبكة في كل خطوة.",
          answer:
            "1. On the sending side, the sending application process creates an application-layer message and passes it down to the transport layer.\n2. The transport layer (possibly) breaks the application message into smaller chunks and adds a transport-layer header to each chunk, creating one or more transport-layer segments.\n3. The transport layer passes each segment down to the network layer at the sending end system.\n4. The network layer encapsulates each segment within a network-layer packet (a datagram) and sends it toward the destination. Network routers along the path act only on the network-layer fields of the datagram — they do not examine the transport-layer segment fields inside.\n5. On the receiving side, the network layer at the destination end system extracts the transport-layer segment from the datagram and passes the segment up to the transport layer.\n6. The transport layer on the receiving side processes the received segment (using its header information for demultiplexing and integrity checking) and makes the data in the segment available to the receiving application.\nThroughout this journey, the transport layer lives only in the end systems — the routers in the network core never act on or recognize transport-layer information.",
          tags: [
            "Transport Layer",
            "Network Layer",
            "Encapsulation",
            "Journey",
          ],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. State at least three things that IP does NOT guarantee, and explain the consequence for a transport protocol built on top of IP.",
          translation:
            "اكتب على الأقل تلات حاجات IP ما بيضمنشهم، واشرح النتيجة على بروتوكول نقل مبني فوق IP.",
          answer:
            "IP (the Internet's network-layer protocol) is a best-effort delivery service and does NOT guarantee:\n1. Segment delivery — a segment might be lost in the network and never arrive at the destination.\n2. Orderly delivery of segments — segments might arrive at the destination in a different order than they were sent.\n3. The integrity of the data in the segments — the contents of a segment might be corrupted in transit.\nBecause of these missing guarantees, IP is said to be an unreliable service.\nConsequence for a transport protocol built on top of IP:\n- If a transport protocol needs to provide reliable data transfer to applications (as TCP does), it must add its own mechanisms to detect lost segments (timers + retransmission), restore order (sequence numbers), and detect corrupted data (error-detection fields + acknowledgments). TCP does all of this using flow control, sequence numbers, acknowledgments, and timers, thereby converting IP's unreliable service into a reliable data transport service between processes.\n- If a transport protocol does not need to provide reliability (as UDP does not), it can simply pass through the unreliability of IP, only adding multiplexing/demultiplexing and integrity checking. UDP is therefore also unreliable, like IP.",
          tags: ["IP", "Unreliable", "Consequences", "TCP", "UDP"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.1 + 3.1.2",
          likely: "high",
        },
        {
          type: "essay",
          q: '13. Explain the terminology used in the Internet literature for transport-layer and network-layer packets, and why this book chooses to refer to both TCP and UDP packets as "segments".',
          translation:
            'اشرح المصطلحات اللي أدبيات الإنترنت بتستخدمها لـ transport-layer و network-layer packets، وليه الكتاب اختار يسمي TCP و UDP packets بـ "segments".',
          answer:
            "To simplify terminology, this book refers to the transport-layer packet as a segment. The Internet literature (for example, the RFCs) refers to the transport-layer packet for TCP as a segment but often refers to the packet for UDP as a datagram.\nHowever, this same Internet literature also uses the term datagram for the network-layer packet!\nFor an introductory book on computer networking such as this, referring to both TCP and UDP packets as datagrams would be confusing, because the term datagram would then refer to two different things: a transport-layer packet (UDP) and a network-layer packet (IP).\nTherefore, the book chooses to refer to both TCP and UDP packets as segments, and reserve the term datagram for the network-layer packet. This reduces ambiguity for the reader.",
          tags: ["Terminology", "Segment", "Datagram"],
          ref: "Lecture 7 (Ch 3, Lec 1) — Section 3.1.2 (terminology)",
          likely: "medium",
        },
      ],
    },
    {
      id: "computer-networks-lecture-8",

      t: "المحاضرة 8 (الفصل 3، المحاضرة 2): تعدد الإرسال/فصل الإرسال، ومبادئ UDP ونقل البيانات الموثوق",

      d: "تعدد الإرسال وفصل الإرسال (مقابس UDP وTCP، وأرقام المنافذ)، وبنية مقطع UDP، ومجموع تحقق UDP، ومبادئ نقل البيانات الموثوق.",

      pdf: "datenew/subjects/computer-networks/lectures/CH03/lec08/Computer_Networks_Lecture08_(CH03_Lec2).pdf",
      pdf2: "datenew/subjects/computer-networks/questions/Questions on each lecture/CH03/Lec08/Lecture-8-Questions.pdf",
      // المحاضرة: Computer Networks — Lecture 8 (Ch 3, Lec 2) — Multiplexing/Demultiplexing, UDP (Connectionless Transport), UDP Segment Structure, UDP Checksum, Principles of Reliable Data Transfer

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمواضيع المحاضرة 8 (المحاضرة 2 داخل الفصل 3): multiplexing/demultiplexing، UDP، port numbers، و reliable data transfer.",
          links: [
            {
              t: "شبكات الحاسوب | Transport layer - part 1, TCP , UDP (محمد ب. أبوبكر)",
              d: "قائمة تشغيل عربية أكاديمية بشرح Transport layer - part 1: TCP و UDP والفرق بينهم، ومنها دروس عن UDP segment structure و checksum. مناسب جداً لفهم القسم 3.3 (Connectionless Transport: UDP).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpHpCzb7rhlV1MbRgGwTIoK1kHW3iWdmh",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح Layer 4 (Transport Layer) يا مهندس – TCP vs UDP بعمق",
              d: "شرح بالعربي لطبقة النقل (Layer 4): Segments، Ports، TCP vs UDP بعمق. مفيد لفهم القسم 3.2 (Multiplexing و Demultiplexing) والقسم 3.3 (UDP).",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://www.facebook.com/ITWithHossam/posts/1547208943643611",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "ما هو UDP و TCP — شرح بالعربي",
              d: "مقال بالعربي بشرح TCP و UDP: TCP بروتوكول connection-oriented بيضمن سلامة وتسلسل الحزم، UDP بروتوكول connectionless خفيف وسريع. مفهوم للمقارنة بين الاتنين في القسم 3.3.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح المقال",
                  url: "https://shelleyes.com/ar/posts/what-is-udp-and-tcp",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات إنجليزية مرئية وقنوات معروفة بشرح Multiplexing/Demultiplexing و UDP.",
          links: [
            {
              t: "PowerCert Animated Videos — Networking (English Version)",
              d: "قائمة فيديوهات Animated بتشرح TCP و UDP و OSI Model و Transport Layer و Port Numbers بأسلوب بصري مفهوم. مفيد جداً لفهم الـ multiplexing/demultiplexing والفرق بين TCP و UDP.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLpXfHEl2fzl72d5ne2gsxSyFNagcHyCML",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Transport Layer and User Datagram Protocol Explained (Richard G Clegg)",
              d: "شرح أكاديمي كامل للـ Transport Layer و UDP — رغم إنه قديم شوية، المحتوى عن UDP segment structure و checksum واضح ومفهوم. مفيد لفهم القسم 3.3.1 و 3.3.2.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=Y-wAt2jOtAw",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Khan Academy — Internet 101 (Computer Science)",
              d: "قائمة تشغيل من Khan Academy بتشرح أساسيات الإنترنت بما فيها TCP/IP، packets، routers. مفهوم كمقدمة للمحاضرة 8 وربطها بالفصول السابقة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HD8wtmKZh0nKOsOvP1KYaNO",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },

        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مصادر مكتوبة رسمية: GeeksforGeeks، Cloudflare Learning، Wikipedia، MDN — بشرح Multiplexing و UDP و Reliable Data Transfer.",
          links: [
            {
              t: "GeeksforGeeks — Multiplexing and Demultiplexing + UDP",
              d: "مقالات تعليمية بشرح Multiplexing/Demultiplexing في طبقة النقل، User Datagram Protocol، و Examples على UDP Header. مطابق لمحتوى القسم 3.2 و 3.3.1.",
              icon: "📚",
              actions: [
                {
                  label:
                    "🌐 Multiplexing and Demultiplexing in Transport Layer",
                  url: "https://www.geeksforgeeks.org/multiplexing-and-demultiplexing-in-transport-layer",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 User Datagram Protocol (UDP)",
                  url: "https://www.geeksforgeeks.org/computer-networks/user-datagram-protocol-udp",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 Examples on UDP Header",
                  url: "https://www.geeksforgeeks.org/computer-networks/examples-on-udp-header",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Cloudflare Learning Center — UDP",
              d: "مصدر رسمي من Cloudflare بشرح User Datagram Protocol (UDP) و UDP flood DDoS attack. مهم لفهم القسم 3.3 (UDP) والـ congestion warning عن UDP traffic.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 What is UDP?",
                  url: "https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 UDP Flood DDoS Attack",
                  url: "https://www.cloudflare.com/learning/ddos/udp-flood-ddos-attack",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Wikipedia — User Datagram Protocol + Reliable Data Transfer",
              d: "مقال موسوعي عن UDP (RFC 768، segment structure، checksum، pseudo-header) وعن Reliable Data Transfer concept. يكمل المحاضرة 8 بتفاصيل إضافية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 User Datagram Protocol — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol",
                  type: "view",
                  color: "blue",
                },
                {
                  label: "🌐 Reliable Data Transfer — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/Reliable_Data_Transfer",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "MDN Web Docs (Mozilla) — UDP Glossary",
              d: "تعريف موجز ودقيق لـ UDP في MDN: connectionless، checksums for data integrity، port numbers for addressing. مفهوم لمراجعة سريعة للقسم 3.3.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 UDP — MDN Glossary",
                  url: "https://developer.mozilla.org/en-US/docs/Glossary/UDP",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },

        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات عملية لمراقبة طبقة النقل — تستخدم في الـ labs لمراقبة UDP segments و port numbers فعلًا.",
          links: [
            {
              t: "Wireshark — Network Protocol Analyzer",
              d: "أداة لالتقاط وتحليل باكتات الشبكة. ممكن تستخدمها عشان تشوف UDP segments فعلًا، وتفحص الـ port numbers (source و destination) و الـ header fields و الـ checksum. أداة معتمدة في معظم مقررات الشبكات.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "Cisco Packet Tracer",
              d: "أداة محاكاة رسمية من Cisco لمحاكاة الشبكات بما فيها TCP/UDP traffic. ممكن تشوف بيها إزاي الـ segments بتتنقل بين hosts و routers. مجانية للطلاب.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ صفحة التحميل الرسمية",
                  url: "https://www.netacad.com/cisco-packet-tracer",
                  type: "download",
                  color: "green",
                },
              ],
            },
            {
              t: "netcat — The TCP/IP Swiss Army Knife",
              d: "أداة سطر أوامر شهيرة لـ debugging TCP و UDP. ممكن تستخدمها عشان تـ send و receive UDP packets يدوياً، وتشوف إزاي الـ port numbers بتشتغل. مفهوم لـ labs عملية على multiplexing/demultiplexing.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://nc110.sourceforge.io",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. Transport-layer multiplexing and demultiplexing extend which service to a process-to-process delivery service?",
          options: [
            "The host-to-host delivery service provided by the network layer",
            "The frame-delivery service of the data-link layer",
            "The application-layer routing service",
            "The bit-level delivery service of the physical layer",
          ],
          correct: 0,
          translation:
            "transport-layer multiplexing و demultiplexing بيوسّعوا إيه خدمة لـ process-to-process delivery؟",
          explanation:
            "host-to-host delivery بتاع الـ network layer بيتوسّع لـ process-to-process delivery. ده التعريف الأساسي من القسم 3.2.",
          tags: ["Multiplexing", "Demultiplexing", "Definition"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "2. At the destination host, the transport layer receives segments from which layer?",
          options: [
            "The data-link layer",
            "The physical layer",
            "The network layer just below",
            "The application layer above",
          ],
          correct: 2,
          translation:
            "على الـ destination host، طبقة النقل بتستقبل segments من أنهي طبقة؟",
          explanation:
            "من الـ network layer اللي تحتها. بعدها بتسلم البيانات للـ process المناسب.",
          tags: ["Transport Layer", "Network Layer"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "3. The transport layer in the receiving host delivers data to which intermediary?",
          options: [
            "Directly to the process",
            "Directly to the application layer",
            "A socket",
            "Directly to a router",
          ],
          correct: 2,
          translation: "طبقة النقل على الـ receiving host بتسلم البيانات لمين؟",
          explanation:
            "لـ socket مش لـ process مباشرة. الـ process بياخد البيانات عبر الـ socket.",
          tags: ["Sockets", "Demultiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (sockets)",
          likely: "high",
        },
        {
          q: "4. Because there can be more than one socket in the receiving host, each socket has:",
          options: [
            "A duplicate identifier shared with other sockets",
            "An identifier only on the sending side",
            "A unique identifier",
            "No identifier at all",
          ],
          correct: 2,
          translation:
            "بما إن في أكتر من socket على الـ receiving host، كل socket عنده إيه؟",
          explanation:
            "unique identifier. ده ضروري عشان الـ demultiplexing يقدر يوجّه الـ segment للـ socket الصح.",
          tags: ["Sockets", "Identifiers"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "5. The job of delivering the data in a transport-layer segment to the correct socket is called:",
          options: [
            "Encapsulation",
            "Multiplexing",
            "Routing",
            "Demultiplexing",
          ],
          correct: 3,
          translation:
            "شغل توصيل بيانات الـ segment للـ socket الصح بيتسمى إيه؟",
          explanation:
            'demultiplexing (الـ "de" معناها توزيع/فصل). عكس multiplexing اللي بيجمع.',
          tags: ["Demultiplexing", "Definition"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (definition)",
          likely: "high",
        },
        {
          q: "6. The job of gathering data chunks at the source host from different sockets, encapsulating each chunk with header information, and passing the segments to the network layer is called:",
          options: [
            "Routing",
            "Demultiplexing",
            "Multiplexing",
            "Decapsulation",
          ],
          correct: 2,
          translation:
            "شغل جمع data chunks من sockets مختلفة على الـ source host و encapsulate كل chunk بـ header وتمريرها لطبقة الشبكة بيتسمى إيه؟",
          explanation:
            'multiplexing (الـ "multi" معناها جمع). عكس demultiplexing.',
          tags: ["Multiplexing", "Definition"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (definition)",
          likely: "high",
        },
        {
          q: "7. Transport-layer multiplexing requires which two things?",
          options: [
            "(1) sockets have unique identifiers, and (2) each segment has special fields that indicate the socket to which the segment is to be delivered",
            "(1) routers have unique IP addresses, and (2) packets have TTL fields",
            "(1) applications have unique names, and (2) messages have priority fields",
            "(1) hosts have MAC addresses, and (2) frames have FCS fields",
          ],
          correct: 0,
          translation: "transport-layer multiplexing بيحتاج إيه حاجتين؟",
          explanation:
            " sockets بـ unique identifiers + segments فيها special fields بتشير للـ socket الصح. نقطة مرقمة مهمة.",
          tags: ["Multiplexing", "Requirements"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (requirements)",
          likely: "high",
        },
        {
          q: "8. The special fields used by the transport layer to indicate the receiving socket are:",
          options: [
            "The TTL and checksum fields",
            "The sequence number and acknowledgment number fields",
            "The source IP address and destination IP address",
            "The source port number field and the destination port number field",
          ],
          correct: 3,
          translation:
            "الـ special fields اللي طبقة النقل بتستخدمها لتحدد الـ socket المستقبل هي إيه؟",
          explanation:
            "source port number + destination port number. الـ IP addresses شغل الـ network layer.",
          tags: ["Port numbers", "Multiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Figure 3.3)",
          likely: "high",
        },
        {
          q: "9. Each port number is a how-many-bit number?",
          options: ["64-bit", "16-bit", "8-bit", "32-bit"],
          correct: 1,
          translation: "كل port number عبارة عن كام bit؟",
          explanation: "16-bit. بتتراوح من 0 لـ 65535.",
          tags: ["Port numbers", "Size"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "10. Port numbers range from:",
          options: ["0 to 65535", "0 to 1023", "0 to 4096", "0 to 255"],
          correct: 0,
          translation: "port numbers بتتراوح من كم لكم؟",
          explanation:
            "0 لـ 65535 (لأنها 16-bit). 0-1023 خاصة بالـ well-known.",
          tags: ["Port numbers", "Range"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "11. The port numbers ranging from 0 to 1023 are called:",
          options: [
            "Dynamic port numbers",
            "Ephemeral port numbers",
            "Reserved port numbers for routers only",
            "Well-known port numbers",
          ],
          correct: 3,
          translation: "port numbers من 0 لـ 1023 بيتسموا إيه؟",
          explanation:
            "well-known port numbers — reserved للتطبيقات المعروفة (HTTP 80، FTP 21).",
          tags: ["Port numbers", "Well-known"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "12. Well-known port numbers are restricted, meaning they are reserved for:",
          options: [
            "Ephemeral client-side ports",
            "DNS root servers only",
            "Router-to-router communication only",
            "Well-known application protocols (such as HTTP and FTP)",
          ],
          correct: 3,
          translation: "well-known port numbers محجوزة لـ إيه؟",
          explanation:
            "للتطبيقات المعروفة. مثلاً HTTP بـ port 80 و FTP بـ port 21.",
          tags: ["Port numbers", "Well-known"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "13. HTTP uses which well-known port number?",
          options: ["25", "443", "80", "21"],
          correct: 2,
          translation: "HTTP بيستخدم بورت كم؟",
          explanation: "80. 21 لـ FTP، 25 لـ SMTP، 443 لـ HTTPS.",
          tags: ["Port numbers", "HTTP"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "14. FTP uses which well-known port number?",
          options: ["53", "21", "80", "23"],
          correct: 1,
          translation: "FTP بيستخدم بورت كم؟",
          explanation: "21. 80 لـ HTTP، 23 لـ Telnet، 53 لـ DNS.",
          tags: ["Port numbers", "FTP"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "15. When we develop a new application, we must:",
          options: [
            "Assign the application a port number",
            "Use a random IP address",
            "Use only port 80",
            "Use only port 21",
          ],
          correct: 0,
          translation: "لما نطوّر application جديد، لازم نعمل إيه؟",
          explanation:
            "نـ assign port number للتطبيق. مش بنستخدم بورت ثابت ولا IP عشوائي.",
          tags: ["Port numbers", "Application"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          q: "16. In UDP, on the client side, the port number is typically:",
          options: [
            "Reserved by the router",
            "Always 80",
            "Automatically (and transparently) assigned by the transport layer",
            "Manually chosen by the user",
          ],
          correct: 2,
          translation:
            "في UDP، على جانب الـ client، الـ port number بيتحدد إزاي؟",
          explanation:
            "الـ transport layer بـ assign port تلقائياً وشفافاً. الـ server side بيـ assign port محدد.",
          tags: ["UDP", "Multiplexing", "Client"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connectionless Mux/Demux)",
          likely: "high",
        },
        {
          q: "17. In UDP, the server side of the application typically:",
          options: [
            "Lets the transport layer auto-assign the port",
            "Asks the client for a port number",
            "Assigns a specific port number",
            "Uses no port at all",
          ],
          correct: 2,
          translation: "في UDP، على جانب الـ server، الـ port بيتحدد إزاي؟",
          explanation:
            "السيرفر بيـ assign port محدد (زي 80 لـ HTTP). عكس الـ client اللي بيتـ auto-assign.",
          tags: ["UDP", "Multiplexing", "Server"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connectionless Mux/Demux)",
          likely: "high",
        },
        {
          q: "18. When a UDP segment arrives at Host B, how does the transport layer deliver the segment to the correct socket?",
          options: [
            "By examining the segment length field only",
            "By examining the source IP address only",
            "By examining the destination port number in the segment",
            "By examining the destination IP address only",
          ],
          correct: 2,
          translation:
            "لما UDP segment يوصل لـ Host B، إزاي طبقة النقل تسلّمه للـ socket الصح؟",
          explanation:
            "بتفحص destination port number في الـ segment. الـ IP address شغل الـ network layer.",
          tags: ["UDP", "Demultiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connectionless Mux/Demux)",
          likely: "high",
        },
        {
          q: "19. In the A-to-B UDP segment, the source port number serves as:",
          options: [
            "The destination port for B",
            "A sequence number",
            'Part of a "return address"',
            "An acknowledgment number",
          ],
          correct: 2,
          translation:
            "في الـ A-to-B UDP segment، الـ source port number بيشتغل كـ إيه؟",
          explanation:
            "part of return address — لما B يبعت segment لـ A، الـ destination port في الـ B-to-A segment بياخد قيمته من الـ source port بتاع الـ A-to-B segment.",
          tags: ["UDP", "Source port", "Return address"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Figure 3.4 commentary)",
          likely: "high",
        },
        {
          q: "20. A TCP socket is identified by which set of values?",
          options: [
            "(sequence number, acknowledgment number)",
            "(source port number, destination port number) only",
            "(source IP address, destination IP address) only",
            "(source IP address, source port number, destination IP address, destination port number)",
          ],
          correct: 3,
          translation: "TCP socket بيتحدد بأيه قيم؟",
          explanation:
            "four-tuple: source IP، source port، destination IP، destination port. عكس UDP اللي بـ destination port بس.",
          tags: ["TCP", "Socket", "Four-tuple"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connection-Oriented Mux/Demux)",
          likely: "high",
        },
        {
          q: "21. When a TCP segment arrives at a host, the host uses how many fields to direct the segment to the appropriate socket?",
          options: [
            "Only the destination IP address",
            "Only the source IP address",
            "Only the destination port",
            "All four: source IP address, source port, destination IP address, destination port",
          ],
          correct: 3,
          translation:
            "لما TCP segment يوصل، الـ host بيستخدم كام field عشان يوجّهه للـ socket الصح؟",
          explanation:
            "الاتنين الأربعة. ده عكس UDP اللي بـ destination port بس.",
          tags: ["TCP", "Demultiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connection-Oriented Mux/Demux)",
          likely: "high",
        },
        {
          q: "22. Why is it NOT a problem if Host A and Host C both assign source port 26145 to their HTTP connections to server B?",
          options: [
            "Because TCP only uses destination ports",
            "Because UDP is used instead of TCP",
            "Because both hosts use the same IP address",
            "Because server B uses all four values to demultiplex, and the two connections have different source IP addresses",
          ],
          correct: 3,
          translation:
            "ليه مش مشكلة لو Host A و Host C الانتين بيـ assign source port 26145 لـ HTTP connections لـ server B؟",
          explanation:
            "لأن السيرفر بيستخدم الـ four-tuple كله، والاتنين عندهم source IP مختلف. نقطة مهمة عن الـ TCP demux.",
          tags: ["TCP", "Demultiplexing", "Source port"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Figure 3.5 commentary)",
          likely: "high",
        },
        {
          q: "23. How does a Web server running on port 80 distinguish segments from different clients?",
          options: [
            "Using source IP addresses and source port numbers",
            "Using only the destination port",
            "Using only the destination IP address",
            "Using sequence numbers only",
          ],
          correct: 0,
          translation:
            "إزاي Web server بيشتغل على port 80 يفرّق بين segments من clients مختلفة؟",
          explanation:
            "بالـ source IP + source port. كل client عنده source IP مختلف و/أو source port مختلف.",
          tags: ["TCP", "Web Server", "Demultiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Web Servers and TCP)",
          likely: "high",
        },
        {
          q: "24. Today's high-performing Web servers often use:",
          options: [
            "A new process for each connection",
            "A single thread for all connections",
            "Only one process, and create a new thread with a new connection socket for each new client connection",
            "A single socket for all clients",
          ],
          correct: 2,
          translation: "Web servers عالية الأداء دلوقتي بتستخدم إيه؟",
          explanation:
            "process واحد بس، وبيخلقوا thread جديد مع connection socket جديد لكل client جديد. عكس الـ older approach اللي كان بيـ spawn process جديد لكل connection.",
          tags: ["TCP", "Web Server", "Threads"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Web Servers and TCP)",
          likely: "high",
        },
        {
          q: "25. For a Web server using persistent HTTP, when does the client and server exchange HTTP messages via the same server socket?",
          options: [
            "Only for the first request",
            "Never — a new socket is created for every message",
            "Throughout the duration of the persistent connection",
            "Only for the first response",
          ],
          correct: 2,
          translation:
            "في Web server بيستخدم persistent HTTP، إمتى الـ client و الـ server يتبادلوا HTTP messages عبر نفس الـ server socket؟",
          explanation:
            "طول مدة الـ persistent connection. عكس non-persistent اللي بـ create socket جديد لكل request/response.",
          tags: ["TCP", "Web Server", "Persistent HTTP"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Web Servers and TCP)",
          likely: "high",
        },
        {
          q: "26. For non-persistent HTTP, what happens for every request/response?",
          options: [
            "UDP is used instead",
            "A new TCP connection is created and closed",
            "No socket is created",
            "The same socket is reused",
          ],
          correct: 1,
          translation:
            "في non-persistent HTTP، إيه اللي بيحصل لكل request/response؟",
          explanation:
            "TCP connection جديد بيخلق ويقفل لكل request/response. ده ممكن يأثر على أداء الـ Web server المشغول.",
          tags: ["TCP", "Web Server", "Non-persistent HTTP"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 2.2 (Web Servers and TCP)",
          likely: "high",
        },
        {
          q: "27. Aside from the multiplexing/demultiplexing function and some light error checking, UDP adds what to IP?",
          options: [
            "Congestion control",
            "Connection setup",
            "Reliable data transfer",
            "Nothing — it adds nothing to IP",
          ],
          correct: 3,
          translation:
            "بخلاف الـ multiplexing/demultiplexing و light error checking، UDP بيضيف إيه لـ IP؟",
          explanation:
            'ما بيضيفش أي حاجة — ده اللي بيخليه "almost directly talking with IP". تعريف أساسي.',
          tags: ["UDP", "Services"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3",
          likely: "high",
        },
        {
          q: "28. If the application developer chooses UDP instead of TCP, then the application is:",
          options: [
            "Talking directly to the physical layer",
            "Almost directly talking with IP",
            "Talking only to DNS",
            "Guaranteed reliable delivery",
          ],
          correct: 1,
          translation: "لو المطور اختار UDP بدل TCP، التطبيق هيكون إزاي؟",
          explanation:
            "بيتكلم تقريباً مباشرة مع IP. عشان UDP ما بيضيفش حاجة تقريباً على IP.",
          tags: ["UDP", "IP"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3",
          likely: "high",
        },
        {
          q: "29. UDP takes messages from the application process and attaches which fields for the multiplexing/demultiplexing service?",
          options: [
            "Source and destination port number fields",
            "Congestion window and RTT",
            "IP addresses only",
            "Sequence and acknowledgment numbers",
          ],
          correct: 0,
          translation:
            "UDP بياخد messages من الـ process وبيضيف إيه fields للـ multiplexing/demultiplexing؟",
          explanation:
            "source + destination port numbers. بعد كده بيمرر الـ segment للـ network layer.",
          tags: ["UDP", "Port numbers"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3",
          likely: "high",
        },
        {
          q: "30. UDP is said to be connectionless because:",
          options: [
            "It requires DNS first",
            "It cannot send any data",
            "There is no handshaking between sending and receiving transport-layer entities before sending a segment",
            "It uses IP addresses only",
          ],
          correct: 2,
          translation: "UDP بيتوصف بأنه connectionless ليه؟",
          explanation:
            "مفيش handshaking قبل إرسال segment. عكس TCP اللي بيعمل 3-way handshake.",
          tags: ["UDP", "Connectionless", "Definition"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3",
          likely: "high",
        },
        {
          q: "31. Which application-layer protocol typically uses UDP?",
          options: ["DNS", "SMTP", "HTTP", "FTP"],
          correct: 0,
          translation: "إيه بروتوكول تطبيق بيستخدم UDP عادةً؟",
          explanation:
            "DNS. HTTP و FTP و SMTP بتستخدم TCP عشان محتاجة reliable data transfer.",
          tags: ["UDP", "DNS", "Applications"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (DNS example)",
          likely: "high",
        },
        {
          q: "32. When a DNS application in a host wants to make a query, what happens (in terms of UDP)?",
          options: [
            "UDP first performs a three-way handshake with the destination",
            "It passes the DNS query message to UDP; UDP adds header fields and passes the resulting segment to the network layer without any handshaking",
            "UDP encrypts the message before sending",
            "UDP waits for the destination to be ready",
          ],
          correct: 1,
          translation:
            "لما DNS application عايز يعمل query، إيه اللي بيحصل (بالنسبة لـ UDP)؟",
          explanation:
            "UDP بيضيف header fields ويمرر segment للـ network layer من غير handshaking. ده عكس TCP.",
          tags: ["UDP", "DNS", "Connectionless"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (DNS example)",
          likely: "high",
        },
        {
          q: "33. If DNS does not receive a reply to its query, it might:",
          options: [
            "Try resending the query, try sending to another name server, or inform the invoking application that it can't get a reply",
            "Switch to TCP automatically",
            "Crash the application",
            "Wait forever",
          ],
          correct: 0,
          translation: "لو DNS ما استقبلش رد على query، ممكن يعمل إيه؟",
          explanation:
            "يحاول resend، أو يبعت لـ name server تاني، أو يـ inform التطبيق. مفيش انتظار للأبد ولا switch تلقائي لـ TCP.",
          tags: ["UDP", "DNS", "Retransmission"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (DNS example)",
          likely: "high",
        },
        {
          q: "34. Which is NOT a reason why some applications are better suited for UDP than TCP?",
          options: [
            "Finer application-level control over what data is sent, and when",
            "No connection state",
            "Built-in reliable data transfer",
            "No connection establishment",
          ],
          correct: 2,
          translation: "إيه اللي مش سبب إن التطبيقات تفضل UDP؟",
          explanation:
            "UDP ما بيوفرش reliable data transfer — دي ميزة TCP. الأسباب التانية كلها أسباب حقيقية لتفضيل UDP.",
          tags: ["UDP", "Advantages"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (reasons)",
          likely: "high",
        },
        {
          q: "35. Under UDP, as soon as an application process passes data to UDP:",
          options: [
            "UDP will throttle the sending rate",
            "UDP will wait for a handshake",
            "UDP will retransmit until acknowledged",
            "UDP will package the data inside a UDP segment and immediately pass the segment to the network layer",
          ],
          correct: 3,
          translation:
            "تحت UDP، أول ما التطبيق يمرر data لـ UDP، إيه اللي بيحصل؟",
          explanation:
            "UDP بيـ package الـ data في segment ويمرره للـ network layer على طول. عكس TCP اللي ممكن يـ throttle أو يستنى ACK.",
          tags: ["UDP", "Application control"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (finer control)",
          likely: "high",
        },
        {
          q: "36. TCP's congestion-control mechanism throttles the transport-layer TCP sender when:",
          options: [
            "The destination buffer is full",
            "The DNS server is down",
            "One or more links between the source and destination hosts become excessively congested",
            "The router runs out of memory",
          ],
          correct: 2,
          translation:
            "TCP congestion-control mechanism بيـ throttle الـ sender إمتى؟",
          explanation:
            "لما واحد أو أكتر من الـ links يبقى congested زيادة. عكس UDP اللي ما بيعملش throttling.",
          tags: ["TCP", "Congestion control"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (finer control)",
          likely: "high",
        },
        {
          q: "37. Why does DNS run over UDP rather than TCP?",
          options: [
            "Because UDP encrypts the queries",
            "Because UDP is more reliable than TCP",
            "Because TCP cannot carry DNS queries",
            "Because UDP does not introduce any delay to establish a connection (no handshaking)",
          ],
          correct: 3,
          translation: "ليه DNS بيشتغل فوق UDP مش TCP؟",
          explanation:
            "عشان UDP ما بيعملش handshaking، فمفيش delay لإنشاء connection. DNS هيكون أبطل لو اشتغل فوق TCP.",
          tags: ["UDP", "DNS", "No connection setup"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (no connection establishment)",
          likely: "high",
        },
        {
          q: "38. HTTP uses TCP rather than UDP because:",
          options: [
            "Reliability is critical for Web pages with text",
            "HTTP requires connectionless transport",
            "HTTP requires DNS",
            "HTTP needs no congestion control",
          ],
          correct: 0,
          translation: "HTTP بيستخدم TCP مش UDP ليه؟",
          explanation:
            "لأن الـ reliability حرجة لصفحات الـ Web (نصوص). UDP ما بيوفرش reliability.",
          tags: ["TCP", "HTTP", "Reliability"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (no connection establishment)",
          likely: "high",
        },
        {
          q: "39. A server devoted to a particular application can typically support many more active clients when the application runs over UDP rather than TCP because:",
          options: [
            "UDP does not maintain connection state",
            "UDP has faster routing",
            "UDP encrypts all traffic",
            "UDP uses larger segments",
          ],
          correct: 0,
          translation:
            "ليه السيرفر يقدر يـ support عملاء أكتر لما التطبيق يشتغل فوق UDP؟",
          explanation:
            "UDP ما بـ maintain connection state — مفيش buffers ولا congestion-control parameters ولا sequence/ACK parameters زي TCP.",
          tags: ["UDP", "Connection state", "Scalability"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (no connection state)",
          likely: "high",
        },
        {
          q: "40. TCP connection state includes which of the following?",
          options: [
            "Receive and send buffers, congestion-control parameters, and sequence and acknowledgment number parameters",
            "Only the destination IP address",
            "Only the segment length",
            "Only the source port number",
          ],
          correct: 0,
          translation: "TCP connection state بيشمل إيه؟",
          explanation:
            "receive/send buffers، congestion-control parameters، sequence/ACK parameters. النقاط دي محتاجة لكل connection — عكس UDP.",
          tags: ["TCP", "Connection state"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (no connection state)",
          likely: "high",
        },
        {
          q: "41. The TCP segment has how many bytes of header overhead per segment?",
          options: ["16 bytes", "8 bytes", "20 bytes", "40 bytes"],
          correct: 2,
          translation: "TCP segment فيها كام byte من header overhead؟",
          explanation: "20 bytes. UDP عنده 8 bytes بس — ده فرق مهم.",
          tags: ["TCP", "Header overhead"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (small header overhead)",
          likely: "high",
        },
        {
          q: "42. The UDP segment has how many bytes of header overhead per segment?",
          options: ["20 bytes", "8 bytes", "4 bytes", "40 bytes"],
          correct: 1,
          translation: "UDP segment فيها كام byte من header overhead؟",
          explanation:
            "8 bytes. TCP عنده 20 bytes — ليه UDP أنسب للتطبيقات اللي بتحتاج small packet overhead.",
          tags: ["UDP", "Header overhead"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (small header overhead)",
          likely: "high",
        },
        {
          q: "43. Which set of applications typically runs over TCP?",
          options: [
            "DNS only",
            "E-mail, remote terminal access, and file transfer",
            "Video conferencing only",
            "Internet phone only",
          ],
          correct: 1,
          translation: "إيه التطبيقات اللي بتشتغل عادة فوق TCP؟",
          explanation:
            "e-mail، remote terminal، file transfer — كلهم محتاجين reliable data transfer بتاع TCP.",
          tags: ["TCP", "Applications"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (Figure 3.6)",
          likely: "high",
        },
        {
          q: "44. Multimedia applications (Internet phone, video conferencing, streaming) can:",
          options: [
            "Be blocked by all routers",
            "Not tolerate any packet loss at all",
            "Only work over TCP",
            "Tolerate a small amount of packet loss, so reliable data transfer is not absolutely critical",
          ],
          correct: 3,
          translation:
            "تطبيقات الـ multimedia (Internet phone، video conferencing) تعمل إزاي؟",
          explanation:
            "بتتحمل small packet loss — عشان كده مش محتاجة reliable transfer absoluta. كمان بتتفاعل poorly مع TCP congestion control.",
          tags: ["UDP", "Multimedia", "Packet loss"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (Figure 3.6 commentary)",
          likely: "high",
        },
        {
          q: "45. Real-time applications like Internet phone and video conferencing react how to TCP's congestion control?",
          options: [
            "Very well",
            "Very poorly",
            "They ignore it",
            "They require it",
          ],
          correct: 1,
          translation:
            "التطبيقات real-time زي Internet phone و video conferencing بتتفاعل إزاي مع TCP congestion control؟",
          explanation: "very poorly. عشان كده المطورين بيفضلوا UDP.",
          tags: ["UDP", "TCP", "Real-time"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (multimedia paragraph)",
          likely: "high",
        },
        {
          q: "46. If everyone were to start streaming high-bit-rate video without using any congestion control, what would happen?",
          options: [
            "There would be so much packet overflow at routers that very few UDP packets would successfully traverse the source-to-destination path",
            "All packets would arrive faster",
            "The network would become more reliable",
            "TCP traffic would speed up",
          ],
          correct: 0,
          translation:
            "لو الكل بدأ يبعت high-bit-rate video من غير congestion control، إيه اللي هيحصل؟",
          explanation:
            "overflow عند الـ routers، وفقدان معظم الـ UDP packets.UDP ما عندهوش congestion control.",
          tags: ["UDP", "Congestion", "Routers"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (congestion warning)",
          likely: "high",
        },
        {
          q: "47. High loss rates induced by uncontrolled UDP senders would cause TCP senders to:",
          options: [
            "Stop sending entirely",
            "Switch to UDP",
            "Increase their rates",
            "Dramatically decrease their rates",
          ],
          correct: 3,
          translation:
            "loss rates العالية اللي سببها UDP senders غير المتحكم فيها هتخلي TCP senders يعملوا إيه؟",
          explanation:
            "TCP senders بيقللوا معدلهم بشكل كبير — UDP بـ crowd out الـ TCP sessions.",
          tags: ["UDP", "TCP", "Congestion"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (congestion warning)",
          likely: "high",
        },
        {
          q: "48. Is it possible for an application to have reliable data transfer when using UDP?",
          options: [
            "Yes, if reliability is built into the application itself (e.g., by adding acknowledgment and retransmission mechanisms)",
            "Yes, but only when the network is reliable",
            "Yes, but only with DNS",
            "No, UDP is always unreliable",
          ],
          correct: 0,
          translation:
            "هل ممكن التطبيق يكون عنده reliable data transfer لما بيستخدم UDP؟",
          explanation:
            "آه، لو الـ reliability متبني جوه التطبيق نفسه (ACKs + retransmission). QUIC بيعمل كده — reliability فوق UDP.",
          tags: ["UDP", "Reliable data transfer", "QUIC"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (reliability over UDP)",
          likely: "high",
        },
        {
          q: "49. Which protocol implements reliability in an application-layer protocol on top of UDP?",
          options: ["QUIC", "DNS", "TCP", "HTTP"],
          correct: 0,
          translation:
            "إيه بروتوكول بيعمل reliability كـ application-layer فوق UDP؟",
          explanation:
            "QUIC. ده مثال على إن التطبيقات تقدر تضيف reliability فوق UDP — بس دي مهمة صعبة.",
          tags: ["UDP", "QUIC", "Reliability"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (reliability over UDP)",
          likely: "high",
        },
        {
          q: "50. In the UDP segment, the application data occupies which field?",
          options: [
            "The header field",
            "The checksum field",
            "The length field",
            "The data field",
          ],
          correct: 3,
          translation: "في UDP segment، الـ application data بيشغل أنهي field؟",
          explanation:
            "data field. مثلاً لـ DNS، الـ data field فيها query أو response message.",
          tags: ["UDP", "Segment Structure", "Data field"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "51. The UDP header has how many fields?",
          options: ["Six", "Two", "Four", "Eight"],
          correct: 2,
          translation: "UDP header فيها كام field؟",
          explanation:
            "4 fields: source port، destination port، length، checksum.",
          tags: ["UDP", "Segment Structure", "Header"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "52. Each field in the UDP header consists of how many bytes?",
          options: ["Four bytes", "Eight bytes", "Two bytes", "One byte"],
          correct: 2,
          translation: "كل field في UDP header فيها كام byte؟",
          explanation:
            "2 bytes. 4 fields × 2 bytes = 8 bytes total header (وده الـ overhead الصغير).",
          tags: ["UDP", "Segment Structure", "Header"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "53. Which of the following is one of the four UDP header fields?",
          options: [
            "Sequence number",
            "Source port number",
            "Acknowledgment number",
            "Congestion window",
          ],
          correct: 1,
          translation: "إيه واحد من الـ 4 fields في UDP header؟",
          explanation:
            "source port number. الـ 4 fields: source port، destination port، length، checksum. التلاتة التانيين من TCP.",
          tags: ["UDP", "Segment Structure", "Header fields"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "54. The length field in the UDP segment specifies:",
          options: [
            "The IP header length",
            "The number of bytes in the UDP segment (header plus data)",
            "Only the number of bytes in the data",
            "Only the number of bytes in the header",
          ],
          correct: 1,
          translation: "length field في UDP segment بيشير لإيه؟",
          explanation:
            "عدد bytes في الـ UDP segment كله (header + data). explicit value مهم عشان حجم الـ data ممكن يختلف.",
          tags: ["UDP", "Segment Structure", "Length field"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "55. Why is an explicit length value needed in the UDP segment?",
          options: [
            "Because the checksum needs it",
            "Because IP requires it",
            "Because the header size varies",
            "Because the size of the data field may differ from one UDP segment to the next",
          ],
          correct: 3,
          translation: "ليه explicit length value لازم في UDP segment؟",
          explanation:
            "حجم الـ data field ممكن يختلف من segment للتاني. لازم قيمة explicit.",
          tags: ["UDP", "Segment Structure", "Length field"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "56. The checksum field in the UDP segment is used to:",
          options: [
            "Route the segment",
            "Check whether errors have been introduced into the segment",
            "Encrypt the segment",
            "Compress the segment",
          ],
          correct: 1,
          translation: "checksum field في UDP segment بتستخدم لـ إيه؟",
          explanation:
            "للـ error detection — تتأكد إن مفيش bits اتغيرت في الـ segment.",
          tags: ["UDP", "Segment Structure", "Checksum"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          q: "57. The UDP checksum provides for:",
          options: [
            "Compression",
            "Error detection",
            "Encryption",
            "Error correction",
          ],
          correct: 1,
          translation: "UDP checksum بيوفّر إيه؟",
          explanation:
            "error detection — تحديد لو الـ bits اتغيّرت. مش correction.",
          tags: ["UDP", "Checksum", "Error detection"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          q: "58. The UDP checksum is used to determine whether bits within the UDP segment have been altered by:",
          options: [
            "Compression by the network layer",
            "Encryption by the sender",
            "Noise in the links or while stored in a router",
            "Routing protocols only",
          ],
          correct: 2,
          translation:
            "UDP checksum بيتحدد بيه لو الـ bits في الـ segment اتغيّرت بسبب إيه؟",
          explanation:
            "noise في الـ links أو لما الـ segment يتخزّن في راوتر. مصادر تانية للـ bit errors.",
          tags: ["UDP", "Checksum", "Bit errors"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          q: "59. Why does UDP provide a checksum, even though many link-layer protocols (including Ethernet) also provide error checking?",
          options: [
            "Because there is no guarantee that all the links between source and destination provide error checking",
            "Because the checksum is faster than Ethernet",
            "Because the application demands it",
            "Because UDP requires it for routing",
          ],
          correct: 0,
          translation:
            "ليه UDP بيوفر checksum رغم إن link-layer protocols بتوفر error checking؟",
          explanation:
            "مفيش ضمان إن كل الـ links بتوفر error checking. كمان bit errors ممكن تحصل لما الـ segment يتخزّن في راوتر.",
          tags: ["UDP", "Checksum", "End-to-end"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          q: "60. Even if segments are correctly transferred across a link, bit errors could be introduced when:",
          options: [
            "The application is busy",
            "A segment is stored in a router's memory",
            "The destination process is sleeping",
            "The network layer is overloaded",
          ],
          correct: 1,
          translation:
            "حتى لو الـ segments اتنقلت صح على link، bit errors ممكن تحصل إمتى؟",
          explanation:
            "لما الـ segment يتخزّن في router memory. ده سبب تاني إن UDP لازم يوفر error detection end-to-end.",
          tags: ["UDP", "Checksum", "Router memory"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          q: "61. UDP must provide error detection at the transport layer, on an end-end basis, because:",
          options: [
            "IP requires it",
            "Neither link-by-link reliability nor in-memory error detection is guaranteed",
            "TCP requires it",
            "The application requires it",
          ],
          correct: 1,
          translation:
            "UDP لازم يوفّر error detection في طبقة النقل end-to-end ليه؟",
          explanation:
            "link-by-link reliability و in-memory error detection الاتنين مش guaranteed. عشان كده لازم end-to-end.",
          tags: ["UDP", "Checksum", "End-to-end"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          q: "62. Although UDP provides error checking, it does not do anything to:",
          options: [
            "Detect an error",
            "Encrypt the data",
            "Recover from an error",
            "Compress the segment",
          ],
          correct: 2,
          translation: "UDP بيوفّر error checking بس مش بيعمل إيه؟",
          explanation:
            "ما بيعملش حاجة لـ recover من الـ error — detection فقط. بعض الـ implementations بـ discard، تانية بتمررها مع warning.",
          tags: ["UDP", "Checksum", "No recovery"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          q: "63. A protocol that provides reliable data transfer and congestion control is necessarily:",
          options: ["Simple", "Complex", "Always TCP", "Trivial"],
          correct: 1,
          translation:
            "بروتوكول بيوفّر reliable data transfer و congestion control بيكون إزاي؟",
          explanation:
            "complex — محتاج sections كتير في الفصل. عشان كده TCP معقد أكتر من UDP.",
          tags: ["Reliable Data Transfer", "Complexity"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "64. The service abstraction provided to the upper-layer entities in reliable data transfer is:",
          options: [
            "A connectionless socket",
            "An unreliable channel like IP",
            "A reliable channel through which data can be transferred",
            "A noisy physical link",
          ],
          correct: 2,
          translation:
            "إيه الـ service abstraction اللي reliable data transfer بيوفّرها للـ upper layers؟",
          explanation:
            "reliable channel — ما بتفقدش bits، ما بتـ corrupt، بيوصل بالترتيب. ده اللي TCP بيوفّره للتطبيقات.",
          tags: ["Reliable Data Transfer", "Service abstraction"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "65. With a reliable channel, which of the following is true?",
          options: [
            "Bits may be delivered out of order",
            "No transferred data bits are corrupted or lost, and all are delivered in the order in which they were sent",
            "Bits may be lost but not corrupted",
            "Bits may be corrupted but not lost",
          ],
          correct: 1,
          translation: "في reliable channel، إيه اللي بيحصل؟",
          explanation:
            "ما بيحصلش corruption ولا loss، وكل البيانات بيوصل بالترتيب. ده service model بتاع TCP.",
          tags: ["Reliable Data Transfer", "Reliable channel"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "66. The task of implementing reliable data transfer is made difficult by:",
          options: [
            "The fact that the network layer is always reliable",
            "The fact that the physical layer is always reliable",
            "The fact that the application layer is unreliable",
            "The fact that the layer below the reliable data transfer protocol may be unreliable",
          ],
          correct: 3,
          translation: "ليه تنفيذ reliable data transfer صعب؟",
          explanation:
            "الطبقة اللي تحت ممكن تكون unreliable. مثلاً TCP فوق IP (unreliable) لازم يحوّلها لـ reliable.",
          tags: ["Reliable Data Transfer", "Difficulty"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "67. TCP is a reliable data transfer protocol implemented on top of:",
          options: [
            "A reliable data-link layer",
            "A reliable network layer",
            "A reliable physical layer",
            "An unreliable (IP) end-to-end network layer",
          ],
          correct: 3,
          translation: "TCP بروتوكول reliable data transfer مبني فوق إيه؟",
          explanation:
            "IP (unreliable). ده مثال رئيسي على إن الـ transport يقدر يضيف reliability فوق unreliable network.",
          tags: ["TCP", "IP", "Reliable Data Transfer"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "68. On the sending side of the data transfer protocol, what is the function called that is invoked from above?",
          options: ["rdt_send()", "rdt_rcv()", "udt_send()", "deliver_data()"],
          correct: 0,
          translation: "على جانب الإرسال، إيه الـ function اللي بتنادى من فوق؟",
          explanation:
            "rdt_send(). rdt_rcv() على جانب الاستقبال. udt_send() للـ unreliable data transfer.",
          tags: ["Reliable Data Transfer", "rdt_send", "Interface"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (interfaces)",
          likely: "high",
        },
        {
          q: "69. On the receiving side, which function is called when a packet arrives?",
          options: ["rdt_rcv()", "deliver_data()", "udt_send()", "rdt_send()"],
          correct: 0,
          translation:
            "على جانب الاستقبال، إيه الـ function اللي بتنادى لما packet يوصل؟",
          explanation:
            "rdt_rcv(). ده على جانب الاستقبال — رد على rdt_send() بتاع المرسل.",
          tags: ["Reliable Data Transfer", "rdt_rcv", "Interface"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (interfaces)",
          likely: "high",
        },
        {
          q: "70. When the rdt protocol wants to deliver data to the upper layer, it does so by calling:",
          options: ["udt_send()", "deliver_data()", "rdt_rcv()", "rdt_send()"],
          correct: 1,
          translation:
            "لما rdt protocol عايز يسلّم data للطبقة اللي فوق بيعمل إيه؟",
          explanation:
            "deliver_data(). ده الـ interface بين rdt والتطبيق المستقبل.",
          tags: ["Reliable Data Transfer", "deliver_data", "Interface"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (interfaces)",
          likely: "high",
        },
        {
          q: "71. Both the send and receive sides of rdt send packets to the other side by a call to:",
          options: [
            "udt_send() (unreliable data transfer)",
            "rdt_rcv()",
            "deliver_data()",
            "rdt_send()",
          ],
          correct: 0,
          translation:
            "الاتنين send و receive sides بتاع rdt بيبعتوا packets للطرف التاني بإيه؟",
          explanation:
            "udt_send() — unreliable data transfer. ده لإن الـ channel اللي تحت ممكن يكون unreliable.",
          tags: ["Reliable Data Transfer", "udt_send", "Interface"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (interfaces)",
          likely: "high",
        },
        {
          q: "72. Although only unidirectional data transfer is considered, the sending and receiving sides will need to:",
          options: [
            "Transmit packets in both directions (control packets as well as data packets)",
            "Only receive control packets",
            "Only send data packets one way",
            "Never transmit any packets",
          ],
          correct: 0,
          translation:
            "رغم إن unidirectional بس، الـ sending و receiving sides محتاجين يعملوا إيه؟",
          explanation:
            "يبعتوا packets في الاتنين الاتجاهات — data + control packets (ACKs, NAKs).",
          tags: ["Reliable Data Transfer", "Bidirectional control"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "73. In addition to exchanging packets containing data, the sending and receiving sides of rdt will also need to exchange:",
          options: [
            "Encryption keys only",
            "Control packets back and forth",
            "DNS queries",
            "IP addresses only",
          ],
          correct: 1,
          translation:
            "بالإضافة لـ data packets، الـ rdt sides محتاجة تتبادل إيه؟",
          explanation:
            "control packets (ACKs, NAKs, إلخ). دي بتتحرك في الاتنين الاتجاهات.",
          tags: ["Reliable Data Transfer", "Control packets"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "high",
        },
        {
          q: "74. The list of well-known port numbers is given in:",
          options: ["RFC 791", "RFC 2616", "RFC 768", "RFC 1700"],
          correct: 3,
          translation: "قائمة well-known port numbers موجودة في RFC كام؟",
          explanation:
            "RFC 1700 (وتتحدّث في iana.org). RFC 768 لـ UDP، RFC 791 لـ IP، RFC 2616 لـ HTTP/1.1.",
          tags: ["Port numbers", "RFC"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "medium",
        },
        {
          q: "75. UDP is defined in which RFC?",
          options: ["RFC 768 and RFC 793", "RFC 791", "RFC 768", "RFC 1700"],
          correct: 2,
          translation: "UDP متعرف في RFC كام؟",
          explanation:
            "RFC 768. RFC 791 لـ IP، RFC 1700 لـ well-known ports، RFC 793 لـ TCP.",
          tags: ["UDP", "RFC"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3",
          likely: "medium",
        },
        {
          q: "76. The UDP segment structure is defined in:",
          options: ["RFC 2616", "RFC 768", "RFC 791", "RFC 1700"],
          correct: 1,
          translation: "UDP segment structure متعرف في RFC كام؟",
          explanation: "RFC 768. ده نفس الـ RFC اللي عرّف UDP كله.",
          tags: ["UDP", "Segment Structure", "RFC"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "medium",
        },
        {
          q: "77. In truth, the UDP checksum is also calculated over which additional fields?",
          options: [
            "Only the application data",
            "A few of the fields in the IP header in addition to the UDP segment",
            "Only the source and destination ports",
            "Only the UDP header fields",
          ],
          correct: 1,
          translation: "بالحقيقة، الـ UDP checksum بيتحسب كمان على إيه؟",
          explanation:
            "على بعض fields في الـ IP header بالإضافة للـ UDP segment. ده اسمه pseudo-header.",
          tags: ["UDP", "Segment Structure", "Checksum", "Pseudo-header"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "medium",
        },
        {
          q: "78. Some implementations of UDP, when an error is detected:",
          options: [
            "Simply discard the damaged segment",
            "Convert to TCP",
            "Encrypt the segment",
            "Always retransmit the segment",
          ],
          correct: 0,
          translation: "بعض UDP implementations لما يكتشف error بيعمل إيه؟",
          explanation:
            "discard للـ damaged segment. تانية بتمررها للتطبيق مع warning.",
          tags: ["UDP", "Checksum", "Discard"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "medium",
        },
        {
          q: "79. Other implementations of UDP, when an error is detected:",
          options: [
            "Discard silently without warning",
            "Always retransmit the segment",
            "Send an ACK back",
            "Pass the damaged segment to the application with a warning",
          ],
          correct: 3,
          translation: "UDP implementations تانية لما يكتشف error بتعمل إيه؟",
          explanation:
            "تمرر الـ damaged segment للتطبيق مع warning. implementations بتختلف.",
          tags: ["UDP", "Checksum", "Warning"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "medium",
        },
        {
          q: "80. The approach taken in this chapter is to:",
          options: [
            "Alternate between basic principles and the TCP protocol",
            "Cover only principles without TCP",
            "Cover UDP only",
            "Cover only TCP without principles",
          ],
          correct: 0,
          translation: "الـ approach في الفصل ده هو إيه؟",
          explanation:
            "alternate بين principles و TCP. مثلاً: reliable data transfer بشكل عام الأول، بعدها إزاي TCP بيوفّره.",
          tags: ["Reliable Data Transfer", "Approach"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "medium",
        },
        {
          q: "81. What assumption is adopted throughout the discussion of reliable data transfer?",
          options: [
            "Packets are always encrypted",
            "Packets are always delivered reliably",
            "Packets will be delivered in the order in which they were sent, with some packets possibly being lost",
            "Packets may be reordered but never lost",
          ],
          correct: 2,
          translation:
            "إيه الـ assumption المتبنّى في نقاش reliable data transfer؟",
          explanation:
            "الـ underlying channel ما بيعيدش ترتيب الـ packets، بس ممكن يفقد بعضها. تبسيط للـ model.",
          tags: ["Reliable Data Transfer", "Assumptions"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro)",
          likely: "medium",
        },
        {
          q: "82. In this section, the case considered is:",
          options: [
            "Multicast data transfer",
            "Broadcast data transfer",
            "Bidirectional (full-duplex) data transfer only",
            "Unidirectional data transfer (from sending to receiving side)",
          ],
          correct: 3,
          translation: "في القسم ده، بيتعتبر أيه case؟",
          explanation:
            "unidirectional — من المرسل للمستقبل بس. bidirectional مش أصعب بس tedious في الشرح.",
          tags: ["Reliable Data Transfer", "Unidirectional"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (unidirectional)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define transport-layer multiplexing and demultiplexing, and explain why they are needed.",
          translation:
            "عرّف transport-layer multiplexing و demultiplexing، واشرح ليه محتاجينهم.",
          answer:
            "Transport-layer multiplexing and demultiplexing extend the host-to-host delivery service provided by the network layer to a process-to-process delivery service for applications running on the hosts.\nA multiplexing/demultiplexing service is needed for all computer networks.\nAt the destination host, the transport layer receives segments from the network layer just below. The transport layer has the responsibility of delivering the data in these segments to the appropriate application process running in the host.\nBecause at any given time there can be more than one application process running on a host (e.g., a Web browser, an FTP session, and two Telnet sessions), the transport layer needs to direct the received data to one specific process. This directing of incoming segments to the appropriate socket (and hence process) is demultiplexing.\nConversely, on the sending side, gathering data chunks from different sockets, encapsulating each with header information, and passing the resulting segments down to the network layer is multiplexing.\nThus, multiplexing/demultiplexing is the bridge that turns the network layer's host-to-host delivery into the process-to-process delivery that applications actually need.",
          tags: ["Multiplexing", "Demultiplexing", "Definition"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain how a receiving host directs an incoming transport-layer segment to the appropriate socket, including the role of port numbers.",
          translation:
            "اشرح إزاي الـ receiving host بيوجّه الـ transport-layer segment للـ socket الصح، مع دور port numbers.",
          answer:
            "Each transport-layer segment has a set of fields in the segment for the purpose of directing it to the appropriate socket. These special fields are the source port number field and the destination port number field.\nEach port number is a 16-bit number, ranging from 0 to 65535. The port numbers ranging from 0 to 1023 are called well-known port numbers and are restricted, meaning that they are reserved for use by well-known application protocols such as HTTP (port 80) and FTP (port 21).\nWhen a segment arrives at the host, the transport layer examines the destination port number in the segment and directs the segment to the corresponding socket. The segment's data then passes through the socket into the attached process.\nOn the sending side, the transport layer attaches the source port number (so the receiver knows where to send replies) and the destination port number (so the receiver knows which socket to deliver to).",
          tags: ["Multiplexing", "Port numbers", "Demultiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Distinguish between connectionless (UDP) and connection-oriented (TCP) multiplexing/demultiplexing.",
          translation:
            "بيّن الفرق بين connectionless (UDP) و connection-oriented (TCP) multiplexing/demultiplexing.",
          answer:
            "Connectionless (UDP) multiplexing/demultiplexing:\n- A UDP socket is identified by a destination port number only (and the destination host's IP address, which the network layer uses).\n- When a UDP segment arrives at a host, the transport layer examines the destination port number and delivers the segment to the socket identified by that port.\n- The client side typically lets the transport layer auto-assign the port number; the server side assigns a specific port number.\n- The source port in the A-to-B segment serves as part of a 'return address' for B's reply.\n\nConnection-oriented (TCP) multiplexing/demultiplexing:\n- A TCP socket is identified by a four-tuple: (source IP address, source port number, destination IP address, destination port number).\n- When a TCP segment arrives from the network to a host, the host uses all four values to direct (demultiplex) the segment to the appropriate socket.\n- The server host may support many simultaneous TCP connection sockets, each identified by its own four-tuple.\n- Because all four fields are used, two clients can independently choose the same source port number without causing a problem — the server distinguishes them by their different source IP addresses.",
          tags: ["Multiplexing", "TCP", "UDP", "Comparison"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connectionless vs Connection-Oriented)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Describe how a Web server uses TCP port numbers to handle multiple simultaneous client connections.",
          translation:
            "وصّف إزاي Web server بيستخدم TCP port numbers عشان يتعامل مع كذا client connection في نفس الوقت.",
          answer:
            "Consider a host running a Web server (such as Apache) on port 80. When clients (browsers) send segments to the server, all segments will have destination port 80.\nIn particular, both the initial connection-establishment segments and the segments carrying HTTP request messages will have destination port 80.\nThe server distinguishes the segments from the different clients using source IP addresses and source port numbers — because the TCP socket is identified by the four-tuple (source IP, source port, destination IP, destination port), each connection has a unique identifier even though the destination port is the same.\nToday's high-performing Web servers often use only one process and create a new thread with a new connection socket for each new client connection. So at any given time there may be many connection sockets (with different identifiers) attached to the same process.\nIf the client and server use persistent HTTP, then throughout the duration of the persistent connection the client and server exchange HTTP messages via the same server socket.\nIf they use non-persistent HTTP, a new TCP connection is created and closed for every request/response, and hence a new socket is created and later closed for every request/response — this frequent creating and closing of sockets can severely impact the performance of a busy Web server.",
          tags: ["TCP", "Web Server", "Multiplexing"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Web Servers and TCP)",
          likely: "high",
        },
        {
          type: "essay",
          q: '5. Explain what UDP does when sending a segment from a process, and why UDP is said to be "connectionless".',
          translation:
            'اشرح إيه اللي UDP بيعمله لما يبعت segment من process، وليه UDP بيتوصف بأنه "connectionless".',
          answer:
            "UDP takes messages from the application process, attaches source and destination port number fields for the multiplexing/demultiplexing service, adds two other small fields, and passes the resulting segment to the network layer.\nThe network layer encapsulates the transport-layer segment into an IP datagram and then makes a best-effort attempt to deliver the segment to the receiving host.\nIf the segment arrives at the receiving host, UDP uses the destination port number to deliver the segment's data to the correct application process.\nThere is no handshaking between sending and receiving transport-layer entities before sending a segment. For this reason, UDP is said to be connectionless.\nDNS is an example of an application-layer protocol that typically uses UDP: when the DNS application in a host wants to make a query, it constructs a DNS query message and passes it to UDP. Without performing any handshaking, the host-side UDP adds header fields to the message and passes the resulting segment to the network layer.",
          tags: ["UDP", "Connectionless", "DNS"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and explain the four reasons why an application developer might choose UDP over TCP.",
          translation:
            "اكتب واشرح الأسباب الأربعة اللي ممكن تخلي المطور يختار UDP بدل TCP.",
          answer:
            "1. Finer application-level control over what data is sent, and when: Under UDP, as soon as an application process passes data to UDP, UDP will package the data inside a UDP segment and immediately pass the segment to the network layer. TCP, on the other hand, has a congestion-control mechanism that throttles the sender when links become congested, and will continue to resend a segment until it is acknowledged. Since real-time applications often require a minimum sending rate, do not want to overly delay segment transmission, and can tolerate some data loss, TCP's service model is not particularly well matched to these applications' needs.\n\n2. No connection establishment: TCP uses a three-way handshake before it starts to transfer data. UDP just blasts away without any formal preliminaries. Thus UDP does not introduce any delay to establish a connection. This is the principal reason why DNS runs over UDP rather than TCP.\n\n3. No connection state: TCP maintains connection state in the end systems, including receive and send buffers, congestion-control parameters, and sequence and acknowledgment number parameters. UDP does not maintain connection state and does not track any of these parameters. For this reason, a server devoted to a particular application can typically support many more active clients when the application runs over UDP rather than TCP.\n\n4. Small packet header overhead: The TCP segment has 20 bytes of header overhead in every segment, whereas UDP has only 8 bytes of overhead.",
          tags: ["UDP", "TCP", "Advantages", "Comparison"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (reasons)",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the UDP segment structure, including each header field and its purpose.",
          translation:
            "اشرح UDP segment structure، بما فيها كل header field و هدفه.",
          answer:
            "The UDP segment structure, defined in RFC 768, has the application data occupying the data field of the segment (e.g., for DNS, the data field contains either a query message or a response message; for a streaming audio application, audio samples fill the data field).\nThe UDP header has only four fields, each consisting of two bytes:\n1. Source port number — allows the destination host to know which process (and socket) sent the segment, so the destination can reply.\n2. Destination port number — allows the destination host to pass the application data to the correct process running on the destination end system (i.e., to perform the demultiplexing function).\n3. Length — specifies the number of bytes in the UDP segment (header plus data). An explicit length value is needed since the size of the data field may differ from one UDP segment to the next.\n4. Checksum — used by the receiving host to check whether errors have been introduced into the segment. (In truth, the checksum is also calculated over a few of the fields in the IP header in addition to the UDP segment, using a pseudo-header.)\nThe total header overhead is 8 bytes (4 fields × 2 bytes each).",
          tags: ["UDP", "Segment Structure", "Header"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Explain why UDP provides a checksum at the transport layer, even though many link-layer protocols also provide error checking.",
          translation:
            "اشرح ليه UDP بيوفّر checksum في طبقة النقل، رغم إن link-layer protocols بتوفّر error checking.",
          answer:
            "The UDP checksum provides for error detection — it is used to determine whether bits within the UDP segment have been altered (e.g., by noise in the links or while stored in a router) as it moved from source to destination.\nAlthough many link-layer protocols (including the popular Ethernet protocol) also provide error checking, UDP provides a checksum for the following reasons:\n1. There is no guarantee that all the links between source and destination provide error checking; that is, one of the links may use a link-layer protocol that does not provide error checking.\n2. Even if segments are correctly transferred across a link, it is possible that bit errors could be introduced when a segment is stored in a router's memory.\nGiven that neither link-by-link reliability nor in-memory error detection is guaranteed, UDP must provide error detection at the transport layer, on an end-to-end basis. Because IP is supposed to run over just about any layer-2 protocol, it is useful for the transport layer to provide error checking as a safety measure.\nHowever, although UDP provides error checking, it does not do anything to recover from an error. Some implementations simply discard the damaged segment; others pass the damaged segment to the application with a warning.",
          tags: ["UDP", "Checksum", "Error detection", "End-to-end"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Describe the framework for the study of reliable data transfer, including the service abstraction and the interfaces used.",
          translation:
            "وصّف framework لدراسة reliable data transfer، بما فيها الـ service abstraction و الـ interfaces.",
          answer:
            "The service abstraction provided to the upper-layer entities is that of a reliable channel through which data can be transferred. With a reliable channel, no transferred data bits are corrupted (flipped from 0 to 1, or vice versa) or lost, and all are delivered in the order in which they were sent. This is precisely the service model offered by TCP to the Internet applications that invoke it.\nIt is the responsibility of a reliable data transfer protocol (rdt) to implement this service abstraction. This task is made difficult by the fact that the layer below the reliable data transfer protocol may be unreliable. For example, TCP is a reliable data transfer protocol implemented on top of an unreliable (IP) end-to-end network layer.\nAssumption: packets will be delivered in the order in which they were sent, with some packets possibly being lost; that is, the underlying channel will not reorder packets.\nThe interfaces are:\n- rdt_send(): called from above on the sending side to pass data down to be delivered to the upper layer at the receiving side.\n- rdt_rcv(): called on the receiving side when a packet arrives from the receiving side of the channel.\n- deliver_data(): called by the rdt protocol to deliver data to the upper layer.\n- udt_send(): called by both send and receive sides to send packets to the other side via the unreliable channel (udt = unreliable data transfer).\nThe section considers only unidirectional data transfer, but the sending and receiving sides nonetheless need to transmit packets in both directions — including control packets such as acknowledgments.",
          tags: ["Reliable Data Transfer", "Service abstraction", "Interfaces"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.4 (intro + interfaces)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Compare the port-number-based demultiplexing of UDP with the four-tuple-based demultiplexing of TCP, and explain the practical implication for Web servers handling many clients.",
          translation:
            "قارن بين demultiplexing في UDP (المبني على port number) و في TCP (المبني على four-tuple)، واشرح الأثر العملي على Web servers اللي بتخدم عملاء كتير.",
          answer:
            "UDP demultiplexing uses only the destination port number to direct an incoming segment to the appropriate socket. So when a UDP segment arrives at Host B, the transport layer examines the destination port number in the segment and delivers the segment to its socket identified by that port. Host B can be running multiple processes, each with its own UDP socket and associated port number, and segments are routed to the appropriate socket based solely on the destination port.\n\nTCP demultiplexing uses all four values of the four-tuple: (source IP address, source port number, destination IP address, destination port number). When a TCP segment arrives at a host, all four fields are used to direct the segment to the appropriate socket. The server host may support many simultaneous TCP connection sockets, each identified by its own four-tuple.\n\nPractical implication for Web servers: A Web server running on port 80 receives segments from many clients — all of which have destination port 80. Because TCP demultiplexing uses the source IP and source port in addition to the destination fields, the server can correctly distinguish segments from different clients even if two clients happen to choose the same source port number (because their source IP addresses differ). This is why a single Web server can handle many simultaneous TCP connections to the same port 80 — each connection has a unique four-tuple.\nWith UDP, by contrast, all segments destined to the same destination port go to the same socket, so a UDP server must do its own application-level demultiplexing if it wants to handle multiple clients on a single socket.",
          tags: ["UDP", "TCP", "Demultiplexing", "Web Server"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connectionless vs Connection-Oriented + Web Servers)",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Discuss the dangers of running multimedia applications over UDP without congestion control, and what mechanisms researchers have proposed to address them.",
          translation:
            "ناقش مخاطر تشغيل تطبيقات multimedia فوق UDP من غير congestion control، وإيه mechanisms اللي الباحثين اقترحوها للتعامل معاها.",
          answer:
            "Although commonly done today, running multimedia applications over UDP needs to be done with care. UDP has no congestion control.\nCongestion control is needed to prevent the network from entering a congested state in which very little useful work is done. If everyone were to start streaming high-bit-rate video without using any congestion control, there would be so much packet overflow at routers that very few UDP packets would successfully traverse the source-to-destination path.\nMoreover, the high loss rates induced by the uncontrolled UDP senders would cause the TCP senders (which, as we'll see, do decrease their sending rates in the face of congestion) to dramatically decrease their rates. Thus, the lack of congestion control in UDP can result in:\n- High loss rates between a UDP sender and receiver.\n- The crowding out of TCP sessions (TCP traffic is starved because UDP traffic consumes the bandwidth).\nMany researchers have proposed new mechanisms to force all sources, including UDP sources, to perform adaptive congestion control (e.g., Mahdavi 1997; Floyd 2000; Kohler 2006: RFC 4340, which is DCCP — the Datagram Congestion Control Protocol).\nAdditionally, because some organizations block UDP traffic for security reasons (see Chapter 8), TCP becomes an increasingly attractive protocol for streaming media transport, despite its congestion control.",
          tags: ["UDP", "Congestion control", "Multimedia", "TCP fairness"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (multimedia + congestion warning)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Explain whether it is possible for an application to have reliable data transfer when using UDP, and how this is achieved.",
          translation:
            "اشرح هل ممكن التطبيق يكون عنده reliable data transfer لما بيستخدم UDP، وإزاي بيتحقق ده.",
          answer:
            "Yes, it is possible for an application to have reliable data transfer when using UDP. This can be done if reliability is built into the application itself (for example, by adding acknowledgment and retransmission mechanisms such as those studied in the next section).\nThe QUIC protocol implements reliability in an application-layer protocol on top of UDP — QUIC is built directly on UDP and provides its own acknowledgment, retransmission, and congestion-control mechanisms at the application layer.\nHowever, this is a nontrivial task that would keep an application developer busy debugging for a long time. Building reliability on top of UDP means re-implementing many of the same mechanisms that TCP already provides (sequence numbers, acknowledgments, timers, retransmission strategies, congestion control). Developers generally only do this when they need features TCP cannot provide (such as QUIC's faster connection establishment, multiplexing of multiple streams without head-of-line blocking, and built-in encryption).",
          tags: [
            "UDP",
            "Reliable data transfer",
            "QUIC",
            "Application-level reliability",
          ],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (reliability over UDP)",
          likely: "high",
        },
        {
          type: "essay",
          q: "1. Suppose Host A (with UDP port 19157) wants to send application data to Host B (with UDP port 46428). Walk through exactly what happens at the transport layer on both the sending and receiving sides.",
          translation:
            "(مسألة تطبيقية) لنفترض إن Host A (UDP port 19157) عايز يبعت data لـ Host B (UDP port 46428). اتمم إيه اللي بيحصل في طبقة النقل على الاتنين الإرسال والاستقبال.",
          answer:
            "Sending side (Host A):\n1. The application process at Host A (which has UDP port 19157) passes the chunk of application data down to UDP.\n2. The transport layer in Host A creates a transport-layer segment that includes:\n   - The application data.\n   - The source port number: 19157.\n   - The destination port number: 46428.\n   - Two other small fields (length and checksum — discussed later).\n3. The transport layer passes the resulting segment to the network layer.\n4. The network layer encapsulates the segment in an IP datagram (with source IP = A's IP and destination IP = B's IP) and makes a best-effort attempt to deliver the segment to the receiving host.\n\nReceiving side (Host B):\n1. If the segment arrives at Host B, the transport layer at the receiving host examines the destination port number in the segment (46428).\n2. The transport layer delivers the segment to the socket identified by port 46428.\n3. The segment's data then passes through that socket into the attached process.\n\nNote that Host B could be running multiple processes, each with its own UDP socket and associated port number. As UDP segments arrive from the network, Host B directs (demultiplexes) each segment to the appropriate socket by examining the segment's destination port number.\n\nReturn path: When Host B wants to send a segment back to Host A, the destination port in the B-to-A segment will take its value from the source port value of the A-to-B segment (i.e., 19157) — so the source port in A's segment serves as part of a 'return address'.",
          tags: [
            "UDP",
            "Multiplexing",
            "Demultiplexing",
            "Example",
            "Calculation reasoning",
          ],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.2 (Connectionless Mux/Demux example)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. (Calculation) A UDP segment has 1000 bytes of application data. Calculate the total segment size (header + data) and the percentage overhead.",
          translation:
            "(مسألة) UDP segment فيه 1000 bytes من application data. احسب إجمالي حجم الـ segment (header + data) ونسبة الـ overhead.",
          answer:
            "Given:\n- Application data size = 1000 bytes.\n- UDP header size = 8 bytes (4 fields × 2 bytes each: source port, destination port, length, checksum).\n\nStep 1 — Total segment size = header size + data size = 8 + 1000 = 1008 bytes.\n\nStep 2 — Overhead percentage = (header size / total segment size) × 100\n        = (8 / 1008) × 100\n        ≈ 0.79%.\n\nAnswer:\n- Total segment size = 1008 bytes.\n- Overhead percentage ≈ 0.79% (very small).\n\nComparison with TCP: TCP header overhead is 20 bytes per segment, so for the same 1000 bytes of application data the total TCP segment would be 1020 bytes and the overhead would be (20 / 1020) × 100 ≈ 1.96%. UDP has roughly 2.5× less overhead than TCP for this payload size — this is one of the reasons UDP is preferred for small-payload applications like DNS.",
          tags: ["Calculation", "UDP", "Header overhead", "Segment size"],
          ref: "Lecture 8 (Ch 3, Lec 2) — Section 3.3 (small header overhead) + 3.3.1 (header structure)",
          likely: "high",
        },
      ],
    },
  ],
  chapters: [
    {
      t: "الفصل الأول: الأساسيات", // عنوان الفصل
      icon: "📘", // أيقونة (اختياري)
      d: "مقدمة وأساسيات", // وصف (اختياري)
      lectures: [0, 1, 2], // ← أرقام المحاضرات في الفصل
      open: false,
    },
    {
      t: "الفصل الثاني :(Application Layer)", // عنوان الفصل
      icon: "📘", // أيقونة (اختياري)
      lectures: [3, 4, 5], // ← أرقام المحاضرات في الفصل
      open: false,
    },
    {
      t: "الفصل الثالث :(Transport Layer)",
      icon: "📘", // أيقونة (اختياري)
      lectures: [6, 7, 8, 9], // ← أرقام المحاضرات في الفصل
      open: true,
    },
  ],
  examSections: {
    showLectures: false, // الأقسام تظهر بدل شكل المحاضرات العادي

    midterm: {
      mode: "separate", // الميد قسم لوحده (بيختفي من مكانه لو الفاينل includeMidterm: true)
      open: true, // false = مقلّص | true = مفتوح
      title: "محتوى الميد", // اختياري
      icon: "📝", // اختياري
      notesOpen: true, // الملاحظات: true = مفتوحة | false = مقلّصة (والطالب يقدر يفتحها ويقفلها)
      notes: [
        "ركّز على: طبقات الشبكة ووحدات البيانات، TCP/UDP، DNS، HTTP، الـ Delays، Circuit vs Packet Switching",
        "أسئلة مقالية متوقعة: طبقات OSI، Encapsulation، Client-Server vs P2P، TCP vs UDP، DNS Hierarchy",
        "ركّز على أسئلة الـ Sockets وعددها في سيرفر TCP مع عدد clients",
        "تاريخ الامتحان: الاثنين 26 نوفمبر",
        "1:15 من الساعة 12:15 إلى ",
      ],
      chapters: [
        "الفصل الأول: الأساسيات",
        "الفصل الثاني :(Application Layer)",
        {
          t: "الفصل الثالث :(Transport Layer)",
          lectures: ["computer-networks-lecture-7"],
        },
      ],

      // lectures: ["computer-networks-lecture-7"], // اختياري: محاضرات منفردة بالـ id أو الرقم
    },
  },

  midtermsCategories: [
    {
      category: "Dr. Ebram Kamal - Midterms",
      icon: "📚",
      description: "Computer Networks midterm exams extracted from PDF files",
      items: [
        {
          t: "MidTerm 2023 — Dr. Ebram (PDF)",
          d: "Midterm exam — 18/11/2023, IT351, Assiut University",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Dr. Ebram/2023/MidTerm 2023 - Questions - Networks-Answers.pdf",
          questions: [
            {
              q: "How many sockets are there in a TCP server communicating with 13 clients concurrently?",
              options: ["15", "None of the options", "13", "12", "14"],
              correct: 4,
              translation: "كم عدد الـ Sockets في سيرفر TCP يتواصل مع 13 عميل؟",
              explanation:
                "14 — واحد للاستقبال (welcoming socket) + 13 للعملاء.",
            },
            {
              q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
              options: ["100", "500", "400", "None of the options", "200"],
              correct: 1,
              translation: "ما هو معدل النقل (Throughput)؟",
              explanation:
                "500 bps — (100 * 2000) / (100 * (1 + 3000) * 10^-3) ≈ 500 bps.",
            },
            {
              q: "Which of the following statements is true about TCP and not true about UDP?",
              options: [
                "Provides timing service.",
                "Provides reliable transport service.",
                "Provides security service.",
                "Provides minimum throughput guarantee service.",
              ],
              correct: 1,
              translation: "أي عبارة صحيحة عن TCP وليست صحيحة عن UDP؟",
              explanation:
                "Provides reliable transport service — TCP يوفر نقل موثوق، UDP لا.",
            },
            {
              q: "Top-level domain (TLD) servers are organization's own DNS server(s), providing authoritative hostname to IP mappings for organization's named hosts.",
              options: ["No", "Yes"],
              correct: 0,
              translation:
                "سيرفرات النطاق الأعلى (TLD) هي سيرفرات DNS الخاصة بالمنظمة.",
              explanation:
                "No — TLD مسؤولة عن النطاقات (com, org)، مش عن المنظمات الفردية.",
            },
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: [
                "Physical layer",
                "Session layer",
                "Application layer",
                "None of the options",
                "Network layer",
                "Transport layer",
              ],
              correct: 1,
              translation: "أي طبقة لا تظهر في Internet Protocol Stack؟",
              explanation:
                "Session layer — غير موجودة في Internet Stack (5 طبقات فقط).",
            },
            {
              q: "Consider the following pseudo-code for rdt 3.0 receiver. Here, seq is the expected sequence number (either 0 or 1) by the receiver. We say that the receiver waits forever, if it is blocked at the while loop, waiting to receive a packet that will never arrive. We say that the sender loops forever, if it repeatedly retransmits the same packet over and over again. Which of the following statements is TRUE?",
              options: [
                "A single loss ACK packet is sufficient to cause the sender to loop forever.",
                "A single corrupted data packet is sufficient to cause the sender to loop forever.",
                "A single corrupted data packet is sufficient to cause the receiver to wait forever.",
                "A single premature timeout is sufficient to cause the sender to loop forever.",
              ],
              correct: 2,
              translation: "في rdt 3.0، أي عبارة صحيحة؟",
              explanation:
                "حزمة بيانات تالفة واحدة كافية لجعل المستقبل ينتظر للأبد.",
            },
            {
              q: "Which of the following statements is true about circuit switching?",
              options: [
                "The path between a source and a destination is not fixed",
                "Packet transmission can use the full link bandwidth",
                "None of the options",
                "Resources are pre-allocated regardless of demand",
                "All of the options",
              ],
              correct: 3,
              translation: "أي عبارة صحيحة عن circuit switching؟",
              explanation: "Resources are pre-allocated regardless of demand.",
            },
            {
              q: "A packet switch receives a packet and determines the outbound link to which the packet should be forwarded. When the packet arrives, x bits of the currently-being-transmitted packet have been transmitted on this outbound link and n other packets are waiting to be transmitted. Packets are transmitted continuously in order of arrival. Suppose all packets are L bits and the link rate is R bps. What is the queuing delay?",
              options: [
                "(nL + (L-x))/R",
                "nL/R",
                "n(L-x)/R",
                "nL +(L-x)/R",
                "(nL + (x-L))/R",
              ],
              correct: 0,
              translation: "ما هو تأخير الانتظار (Queuing Delay)؟",
              explanation:
                "(nL + (L-x))/R — مجموع بتات الحزم المنتظرة + الباقي من الحزمة الحالية ÷ معدل الرابط.",
            },
            {
              q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
              options: ["N; N", "N;1", "1,1", "N-1,N-1", "N-1;1"],
              correct: 1,
              translation:
                "في Go-back-N، ما أحجام مخازن المرسل والمستقبل لحجم نافذة N؟",
              explanation: "N; 1 — المرسل N والمستقبل 1.",
            },
            {
              q: "Which of the following statements about DNS is TRUE?",
              options: [
                "None of the options",
                "Every Web server must have a canonical name.",
                "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
                "DNS server listens to TCP port 53.",
                "TLD servers store all the hostname to IP mappings of the Internet.",
              ],
              correct: 2,
              translation: "أي عبارة عن DNS صحيحة؟",
              explanation:
                "Local DNS server may provide out-of-date mapping — بسبب Caching.",
            },
            {
              q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining. Hong long (in milliseconds) does it take?",
              options: ["604", "204", "402.4", "404"],
              correct: 3,
              translation: "كم يستغرق تحميل الصفحة؟",
              explanation:
                "404 ms — 6 RTTs (50ms) = 300 + transmission time ≈ 404ms.",
            },
            {
              q: "HTTP protocol keeps state information at the server side about past client requests.",
              options: ["True", "False"],
              correct: 1,
              translation: "HTTP يحتفظ بمعلومات الحالة في السيرفر؟",
              explanation: "False — HTTP stateless.",
            },
            {
              q: "Which of the following statements is true about packet switching?",
              options: [
                "In packet switching, dedicated allocation is done between nodes.",
                "In packet switching, time is divided into 'slots' between the nodes.",
                "In packet switching, bandwidth is divided into 'pieces' between the nodes.",
                "In packet switching, resources are reserved for nodes.",
                "None of the options.",
              ],
              correct: 4,
              translation: "أي عبارة صحيحة عن packet switching؟",
              explanation:
                "None of the options — كل الخيارات الأخرى تصف Circuit Switching.",
            },
            {
              q: "In Non-persistent HTTP, the client closes the TCP connection after fetching one object (one pair of HTTP request and HTTP response)",
              options: ["False", "True"],
              correct: 1,
              translation:
                "في Non-persistent HTTP، العميل يغلق اتصال TCP بعد جلب كائن واحد.",
              explanation: "True — اتصال TCP جديد لكل كائن.",
            },
            {
              q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
              options: [
                "No, an HTTP response message can never have an empty body.",
                "Yes, if the requested object is recently modified.",
                "Yes, if the requested object is very small in size.",
                "Yes, if the requested object has been moved to a new location.",
              ],
              correct: 3,
              translation:
                "هل يمكن أن تحتوي رسالة HTTP response على جسم فارغ؟ ومتى؟",
              explanation: "Yes, if moved to a new location (status 301/302).",
            },
            {
              q: "In circuit switching, circuit segment is idle if not used by call.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في circuit switching، قطاع الدائرة خامل لو لم يُستخدم.",
              explanation: "True — الموارد محجوزة حتى لو خاملة.",
            },
            {
              q: "A browser requests to download index.html from a Web server. The HTTP response header received by the browser is shown below. Which of the following statements is TRUE? (Header includes: Set-Cookie: PHPSESSID=..., Content-Length: 1256)",
              options: [
                "Suppose TCP header is 20 bytes, the length of the TCP segment containing the HTTP response is 1276 bytes.",
                "In the HTTP request, browser has requested for a non-persistent connection.",
                "None of the options.",
                "The index.html file received by the browser may have been corrupted during transmission.",
                "The Web server uses a cookie to keep the state information of the client.",
              ],
              correct: 4,
              translation: "بناءً على الهيدر، أي عبارة صحيحة؟",
              explanation:
                "Set-Cookie يعني السيرفر يستخدم الكوكيز للحفاظ على حالة العميل.",
            },
            {
              q: "Assume a sender and a receiver connected via one packet-switch. The sender sends a message of size 24 KBytes using packets of length 1000 Bytes. The bit rates are 2 kbps and 5 kbps for the first and the second link, respectively. Using store and forward, what is the end-to-end delay (in seconds)? You may ignore the propagation delay!",
              options: [
                "16800",
                "134.4",
                "16.8",
                "None of the options",
                "0.1008",
              ],
              correct: 1,
              translation:
                "ما هو تأخير النهاية إلى النهاية (بالثواني) باستخدام store and forward؟",
              explanation:
                "134.4s — link1: 24000*8/2000 = 96s + link2: 24000*8/5000 = 38.4s.",
            },
            {
              q: "End-to-end delay is the time taken for a packet to travel from source to destination. It consists of which of the following delays?",
              options: [
                "Propagation delay.",
                "Queuing delay.",
                "Processing delay.",
                "All the options.",
                "Transmission delay.",
                "None of the options.",
              ],
              correct: 3,
              translation: "تأخير النهاية-للنهاية يتكون من أي تأخيرات؟",
              explanation:
                "All the options — Transmission + Propagation + Queuing + Processing.",
            },
            {
              q: "Which of the following statements is true?",
              options: [
                "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
                "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
                "None of the options",
                "In the Internet, packets from the same source always take the same path to reach destination.",
                "Both the Internet and traditional telephone networks use packet-switching.",
              ],
              correct: 0,
              translation: "أي عبارة صحيحة؟",
              explanation:
                "Internet = packet switching، الهاتف = circuit switching.",
            },
            {
              q: "Which of the following HTTP protocols does the given figure represent to fetch a web page with 2 reference objects?",
              options: [
                "Persistent HTTP with pipelining.",
                "Non-persistent HTTP.",
                "Persistent HTTP.",
                "Non-persistent HTTP with parallel connection.",
              ],
              correct: 0,
              translation: "أي بروتوكول HTTP يمثله المخطط؟",
              explanation:
                "Persistent HTTP with pipelining — بناءً على المخطط.",
            },
            {
              q: "Which of the following statements about socket programming with TCP is true?",
              options: [
                "Server cannot send data to client after a client initiates TCP connection to the server.",
                "Client explicitly attaches destination IP address and port number to every packet",
                "Server extracts sender IP address and port number from the received packet.",
                "None of the above",
              ],
              correct: 2,
              translation: "أي عبارة صحيحة عن برمجة السوكيت باستخدام TCP؟",
              explanation:
                "Server extracts sender IP address and port number from received packet.",
            },
            {
              q: "Which of the following statements is true about Client-Server Architecture?",
              options: [
                "In Client-Server Architecture, the server typically requests service from the client while the client provides requested service to server.",
                "In Client-Server Architecture, the server waits for incoming requests while the client Initiates contact with server.",
                "In Client-Server Architecture, the client waits for incoming requests while the server Initiates contact with server.",
                "All of the options.",
                "None of the options.",
              ],
              correct: 1,
              translation: "أي عبارة صحيحة عن Client-Server؟",
              explanation: "السيرفر ينتظر والعميل يبدأ التواصل.",
            },
            {
              q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Every data packet embeds a k-bit sequence number field (k is an constant unknown to you). Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
              options: ["3", "0", "10", "2", "6"],
              correct: 4,
              translation: "أي رقم لا يمكن أن يكون seq للحزمة التالية؟",
              explanation: "6 — لا يمكن أن يكون seq للحزمة التالية.",
            },
            {
              q: "Using Conditional GET in HTTP Protocol, the number of RTT is reduced if the object is not modified since the date of the cached copy!",
              options: ["False", "True"],
              correct: 1,
              translation:
                "باستخدام Conditional GET، عدد RTT يقل لو الكائن لم يتغير.",
              explanation: "True — يوفر نقل الكائن كامل.",
            },
            {
              q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen? You may assume that the application riding on UDP doesn't implement any reliability mechanisms.",
              options: [
                "UDP receiver receives duplicate packets from UDP sender.",
                "None of the above",
                "UDP receiver receives out-of-order packets from UDP sender.",
                "UDP receiver fails to receive any packet from UDP sender.",
                "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
              ],
              correct: 4,
              translation: "أي مما يلي لن يحدث أبداً في نقل UDP؟",
              explanation:
                "UDP receiver receives corrupted packets but fails to detect — إذا كان checksum مفعل، يكتشف الأخطاء.",
            },
            {
              q: "What is the checksum (1's complement of the sum) of the following 3 bytes? 11110100, 10010011, 10011001",
              options: ["11011101", "11011110", "00100010", "11011111"],
              correct: 0,
              translation: "ما هو الـ checksum للبايتات الثلاثة التالية؟",
              explanation: "11011101.",
            },
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: [
                "Status code",
                "None of the options",
                "URL",
                "HTTP version number",
                "Request method",
              ],
              correct: 3,
              translation:
                "أي مما يلي موجود في كل من HTTP request line و status line؟",
              explanation: "HTTP version number — موجود في كلا السطرين.",
            },
            {
              q: "Consider the following Python code snippet: s1.bind(('', 8080)) ; s2, addr = s1.accept(). Suppose no exception is raised when the above code snippet is executed, which of the following statements is TRUE?",
              options: [
                "s2 listens to a random port number assigned by operation system",
                "s1 is a UDP socket",
                "None of the options.",
                "Server uses s1 to transmit application data to client",
                "s2 listens to port 8080",
              ],
              correct: 4,
              translation: "بناءً على الكود، أي عبارة صحيحة؟",
              explanation:
                "s2 listens to port 8080 (نفس المنفذ المرتبط بـ s1).",
            },
            {
              q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. None of the packets shown in the following figure are corrupted packets. However, the third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
              options: [
                "13, 14,0, 1",
                "12, 13, 14, 15",
                "13, 14, 15,0",
                "13, 14, 15, 16",
              ],
              correct: 0,
              translation:
                "ما هي نافذة المرسل على مساحة الأرقام التسلسلية في الوقت t؟",
              explanation: "13, 14, 0, 1.",
            },
          ],
        },
        {
          t: "MidTerm 2024 — Dr. Ebram (PDF)",
          d: "Midterm exam — IT351",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Dr. Ebram/2024/MidTerm 2024 - Questions - Networks.pdf",
          questions: [
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: [
                "HTTP version number",
                "Request method",
                "Status code",
                "URL",
              ],
              correct: 0,
              translation:
                "أي مما يلي موجود في كل من HTTP request line و status line؟",
              explanation: "HTTP version number.",
            },
            {
              q: "Which of the following statements is true about circuit switching?",
              options: [
                "Resources are pre-allocated regardless of demand",
                "Packet transmission can use the full link bandwidth",
                "The path between a source and a destination is not fixed",
                "All of the options",
              ],
              correct: 0,
              translation: "أي عبارة صحيحة عن circuit switching؟",
              explanation: "Resources are pre-allocated regardless of demand.",
            },
            {
              q: "Which of the following statements is true about TCP and not true about UDP?",
              options: [
                "Provides timing service.",
                "Provides minimum throughput guarantee service.",
                "Provides security service.",
                "Provides reliable transport service.",
              ],
              correct: 3,
              translation: "أي عبارة صحيحة عن TCP وليست عن UDP؟",
              explanation: "Provides reliable transport service.",
            },
            {
              q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining. Hong long (in milliseconds) does it take for the client to download the entire webpage from the Web server?",
              options: ["404", "604", "204", "402.4"],
              correct: 0,
              translation: "كم يستغرق تحميل الصفحة؟",
              explanation: "404 ms.",
            },
            {
              q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. None of the packets shown in the following figure are corrupted packets. However, the third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
              options: [
                "12, 13, 14, 15",
                "13, 14, 0, 1",
                "13, 14, 15, 0",
                "13, 14, 15, 16",
              ],
              correct: 1,
              translation: "ما هي نافذة المرسل في الوقت t؟",
              explanation: "13, 14, 0, 1.",
            },
            {
              q: "Which of the following statements is true?",
              options: [
                "Both the Internet and traditional telephone networks use packet-switching.",
                "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
                "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
                "In the Internet, packets from the same source always take the same path to reach destination.",
              ],
              correct: 2,
              translation: "أي عبارة صحيحة؟",
              explanation:
                "Internet = packet switching، الهاتف = circuit switching.",
            },
            {
              q: "Which of the following statements about DNS is TRUE?",
              options: [
                "TLD servers store all the hostname to IP mappings of the Internet.",
                "Every Web server must have a canonical name.",
                "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
                "DNS server listens to TCP port 53.",
              ],
              correct: 2,
              translation: "أي عبارة عن DNS صحيحة؟",
              explanation: "Local DNS server may provide out-of-date mapping.",
            },
            {
              q: "How many sockets are there in a TCP server communicating with 13 clients concurrently?",
              options: ["13", "14", "15", "12"],
              correct: 1,
              translation: "كم socket في سيرفر TCP يتواصل مع 13 عميل؟",
              explanation: "14 — 13 + 1 للاستقبال.",
            },
            {
              q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
              options: ["200", "500", "100", "400"],
              correct: 1,
              translation: "ما هو معدل النقل (Throughput)؟",
              explanation: "500 bps.",
            },
            {
              q: "Which of the following statements is true about packet switching?",
              options: [
                "In packet switching, bandwidth is divided into 'pieces' between the nodes.",
                "In packet switching, dedicated allocation is done between nodes.",
                "In packet switching, resources are reserved for nodes.",
                "None of the options.",
              ],
              correct: 3,
              translation: "أي عبارة صحيحة عن packet switching؟",
              explanation:
                "None of the options — كل الخيارات الأخرى تصف Circuit Switching.",
            },
            {
              q: "Consider the following Python code snippet. Suppose no exception is raised when the above code snippet is executed, which of the following statements is TRUE? s1.bind(('', 8080)) ; s2, addr = s1.accept()",
              options: [
                "s1 is a UDP socket",
                "Server uses s1 to transmit application data to client",
                "s2 listens to port 8080",
                "s2 listens to a random port number assigned by operation system",
              ],
              correct: 2,
              translation: "بناءً على الكود، أي عبارة صحيحة؟",
              explanation: "s2 listens to port 8080.",
            },
            {
              q: "A browser requests to download index.html from a Web server. The HTTP response header received by the browser is shown below. Which of the following statements is TRUE? (Header includes Set-Cookie: PHPSESSID=..., Content-Length: 1256)",
              options: [
                "In the HTTP request, browser has requested for a non-persistent connection.",
                "Suppose TCP header is 20 bytes, the length of the TCP segment containing the HTTP response is 1276 bytes.",
                "The index.html file received by the browser may have been corrupted during transmission.",
                "The Web server uses a cookie to keep the state information of the client.",
              ],
              correct: 3,
              translation: "بناءً على الهيدر، أي عبارة صحيحة؟",
              explanation: "Set-Cookie يعني السيرفر يستخدم الكوكيز.",
            },
            {
              q: "In circuit switching, circuit segment is idle if not used by call.",
              options: ["True", "False"],
              correct: 0,
              translation: "قطاع الدائرة خامل لو لم يُستخدم.",
              explanation: "True — الموارد محجوزة حتى لو خاملة.",
            },
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: [
                "Application layer",
                "Network layer",
                "Transport layer",
                "Session layer",
              ],
              correct: 3,
              translation: "أي طبقة لا تظهر في Internet Protocol Stack؟",
              explanation: "Session layer.",
            },
            {
              q: "Which of the following HTTP protocols does the given figure represent to fetch a web page with 2 reference objects?",
              options: [
                "Non-persistent HTTP.",
                "Persistent HTTP.",
                "Non-persistent HTTP with parallel connection.",
                "Persistent HTTP with pipelining.",
              ],
              correct: 3,
              translation: "أي بروتوكول HTTP يمثله المخطط؟",
              explanation: "Persistent HTTP with pipelining.",
            },
            {
              q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
              options: [
                "No, an HTTP response message can never have an empty body.",
                "Yes, if the requested object has been moved to a new location.",
                "Yes, if the requested object is recently modified.",
                "Yes, if the requested object is very small in size.",
              ],
              correct: 1,
              translation:
                "هل يمكن أن تحتوي رسالة HTTP response على جسم فارغ؟ ومتى؟",
              explanation: "Yes, if moved to a new location (301/302).",
            },
            {
              q: "A packet switch receives a packet and determines the outbound link to which the packet should be forwarded. When the packet arrives, x bits of the currently-being-transmitted packet have been transmitted on this outbound link and n other packets are waiting to be transmitted. Packets are transmitted continuously in order of arrival. Suppose all packets are L bits and the link rate is R bps. What is the queuing delay?",
              options: [
                "nL / R",
                "(nL + (x - L)) / R",
                "n(L - x) / R",
                "(nL + (L - x)) / R",
              ],
              correct: 3,
              translation: "ما هو تأخير الانتظار؟",
              explanation: "(nL + (L - x)) / R.",
            },
            {
              q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
              options: ["1; 1", "N – 1; 1", "N – 1; N – 1", "N; 1"],
              correct: 3,
              translation: "في Go-back-N، ما أحجام المخازن لحجم نافذة N؟",
              explanation: "N; 1.",
            },
            {
              q: "Using Conditional GET in HTTP Protocol, the number of RTT is reduced if the object is not modified since the date of the cached copy!",
              options: ["True", "False"],
              correct: 0,
              translation:
                "باستخدام Conditional GET، عدد RTT يقل لو الكائن لم يتغير.",
              explanation: "True.",
            },
            {
              q: "Which of the following statements is true about Client-Server Architecture?",
              options: [
                "In Client-Server Architecture, the server waits for incoming requests while the client Initiates contact with server.",
                "In Client-Server Architecture, the client waits for incoming requests while the server Initiates contact with server.",
                "In Client-Server Architecture, the server typically requests service from the client while the client provides requested service to server.",
                "All of the options.",
              ],
              correct: 0,
              translation: "أي عبارة صحيحة عن Client-Server؟",
              explanation: "السيرفر ينتظر والعميل يبدأ التواصل.",
            },
            {
              q: "HTTP protocol keeps state information at the server side about past client requests.",
              options: ["True", "False"],
              correct: 1,
              translation: "HTTP يحتفظ بمعلومات الحالة في السيرفر؟",
              explanation: "False — HTTP stateless.",
            },
            {
              q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen? You may assume that the application riding on UDP doesn't implement any reliability mechanisms.",
              options: [
                "UDP receiver fails to receive any packet from UDP sender.",
                "UDP receiver receives out-of-order packets from UDP sender.",
                "UDP receiver receives duplicate packets from UDP sender.",
                "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
              ],
              correct: 3,
              translation: "أي مما يلي لن يحدث أبداً في نقل UDP؟",
              explanation:
                "UDP receiver receives corrupted packets but fails to detect bit errors.",
            },
            {
              q: "End-to-end delay is the time taken for a packet to travel from source to destination. It consists of which of the following delays?",
              options: [
                "Transmission delay.",
                "Propagation delay.",
                "Queuing and Processing delays.",
                "All of the options",
              ],
              correct: 3,
              translation: "تأخير النهاية-للنهاية يتكون من أي تأخيرات؟",
              explanation: "All of the options — الأربعة.",
            },
            {
              q: "In Non-persistent HTTP, the client closes the TCP connection after fetching one object (one pair of HTTP request and HTTP response)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في Non-persistent HTTP، العميل يغلق اتصال TCP بعد جلب كائن واحد.",
              explanation: "True.",
            },
            {
              q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Every data packet embeds a k-bit sequence number field (k is an constant unknown to you). Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
              options: ["0", "2", "3", "6"],
              correct: 3,
              translation: "أي رقم لا يمكن أن يكون seq للحزمة التالية؟",
              explanation: "6.",
            },
            {
              q: "Assume a sender and a receiver connected via one packet-switch. The sender sends a message of size 24 KBytes using packets of length 1000 Bytes. The bit rates are 2 kbps and 5 kbps for the first and the second link, respectively. Using store and forward, what is the end-to-end delay (in seconds)? You may ignore the propagation delay!",
              options: ["16.8", "134.4", "0.1008", "16800"],
              correct: 1,
              translation: "ما هو تأخير النهاية إلى النهاية (بالثواني)؟",
              explanation: "134.4s.",
            },
            {
              q: "Top-level domain (TLD) servers are organization's own DNS server(s), providing authoritative hostname to IP mappings for organization's named hosts.",
              options: ["Yes", "No"],
              correct: 1,
              translation: "سيرفرات TLD هي سيرفرات DNS الخاصة بالمنظمة.",
              explanation: "No — TLD مسؤولة عن النطاقات.",
            },
          ],
        },
        {
          t: "BIS 2025 — Dr. Ebram (PDF)",
          d: "Midterm Exam 1 — Nov 2025 — Q1 fill-in-the-blanks (a)-(j) + Q2 problems (a)-(i)",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Dr. Ebram/2025/BIS 2025 - Dr. Ebram - Computer Networks.pdf",
          questions: [
            // ================= Q1: Fill in the blanks =================
            {
              q: "[Q1(a)] In a host that is sending data to the network, UDP receives data from the ____ layer and sends data to the ____ layer.",
              options: [
                "Application / Network",
                "Transport / Network",
                "Application / Link",
                "Network / Transport",
              ],
              correct: 0,
              translation:
                "في الجهاز المُرسِل، يستقبل UDP البيانات من طبقة ____ ويرسلها إلى طبقة ____.",
              explanation:
                "Application / Network — UDP يعمل في طبقة Transport: يأخذ البيانات من طبقة Application ويمررها لطبقة Network (IP).",
            },
            {
              q: "[Q1(b)] HTTP is an ____ layer protocol that typically runs on top of ____.",
              options: [
                "Application / TCP",
                "Transport / UDP",
                "Application / IP",
                "Network / TCP",
              ],
              correct: 0,
              translation: "HTTP بروتوكول في طبقة ____ وعادةً يعمل فوق ____.",
              explanation:
                "Application / TCP — HTTP بروتوكول طبقة التطبيق ويستخدم TCP (منفذ 80) لأنه يحتاج نقلاً موثوقاً.",
            },
            {
              q: "[Q1(c)] UDP is a ____ tuple de-multiplexing while TCP is a ____ tuple de-multiplexing to dispatch incoming packets to different processes in the same host.",
              options: [
                "two / four",
                "four / two",
                "two / two",
                "three / four",
              ],
              correct: 0,
              translation:
                "UDP يستخدم demultiplexing بـ ____ عناصر بينما TCP يستخدم ____ عناصر لتوزيع الحزم على العمليات داخل نفس الجهاز.",
              explanation:
                "two / four — UDP: (destination IP, destination port) = 2-tuple. TCP: (source IP, source port, destination IP, destination port) = 4-tuple.",
            },
            {
              q: "[Q1(d)] In client/server paradigm, ____ must always be alive and offers service while ____ requests for service from server.",
              options: [
                "server / client",
                "client / server",
                "server / server",
                "client / client",
              ],
              correct: 0,
              translation:
                "في نموذج client/server، ____ يجب أن يكون دائماً شغّالاً ويقدّم الخدمة بينما ____ يطلب الخدمة من السيرفر.",
              explanation:
                "server / client — السيرفر دائماً شغّال وينتظر الطلبات، والعميل (client) هو من يبدأ الطلب.",
            },
            {
              q: "[Q1(e)] ____ provides hostname to IP address mapping and typically listens to ____ port 53.",
              options: ["DNS / UDP", "DNS / TCP", "HTTP / UDP", "DHCP / TCP"],
              correct: 0,
              translation:
                "____ يوفّر تحويل اسم المضيف إلى عنوان IP وعادةً يستمع على المنفذ 53 الخاص بـ ____.",
              explanation:
                "DNS / UDP — DNS يحوّل hostname إلى IP ويستمع عادةً على UDP port 53 (ويستخدم TCP في حالات خاصة مثل الردود الكبيرة).",
            },
            {
              q: "[Q1(f)] The ____ layer of the Internet protocol stack is responsible for delivering data from sending process to receiving process while the ____ layer of the Internet protocol stack is responsible for delivering data from sending host to receiving host.",
              options: [
                "Transport / Network",
                "Network / Transport",
                "Application / Transport",
                "Transport / Application",
              ],
              correct: 0,
              translation:
                "طبقة ____ مسؤولة عن توصيل البيانات من العملية المُرسِلة إلى العملية المستقبِلة، بينما طبقة ____ مسؤولة عن التوصيل من الجهاز المُرسِل إلى الجهاز المستقبِل.",
              explanation:
                "Transport / Network — Transport = process-to-process (عن طريق ports)، Network = host-to-host (عن طريق IP).",
            },
            {
              q: "[Q1(g)] ____ delay, ____ delay, ____ delay and ____ delay make up the end-to-end delay.",
              options: [
                "Transmission, propagation, processing and queuing",
                "Transmission, propagation, processing and routing",
                "Transmission, propagation, queuing and handshake",
                "Propagation, processing, queuing and encryption",
              ],
              correct: 0,
              translation:
                "الأنواع الأربعة للتأخير التي تكوّن التأخير الكلي من البداية للنهاية.",
              explanation:
                "Transmission delay + Propagation delay + Processing delay + Queuing delay = end-to-end (nodal) delay.",
            },
            {
              q: "[Q1(h)] The first line in an HTTP request message is called the ____ line. The first line in an HTTP response message is called the ____ line.",
              options: [
                "request / status",
                "status / request",
                "header / request",
                "request / header",
              ],
              correct: 0,
              translation:
                "السطر الأول في رسالة HTTP request اسمه ____ line، والسطر الأول في رسالة HTTP response اسمه ____ line.",
              explanation:
                "request line / status line — مثال: 'GET /index.html HTTP/1.1' هو request line، و'HTTP/1.1 200 OK' هو status line.",
            },
            {
              q: "[Q1(i)] HTTP stands for ____.",
              options: [
                "HyperText Transfer Protocol",
                "HyperText Transmission Protocol",
                "High Transfer Text Protocol",
                "HyperLink Transfer Protocol",
              ],
              correct: 0,
              translation: "HTTP هي اختصار لـ ____.",
              explanation: "HTTP = HyperText Transfer Protocol.",
            },
            {
              q: "[Q1(j)] The ____ layer is responsible for moving datagrams from the source host to the destination host.",
              options: ["Network", "Transport", "Link", "Application"],
              correct: 0,
              translation:
                "طبقة ____ مسؤولة عن نقل الـ datagrams من الجهاز المصدر إلى الجهاز الوجهة.",
              explanation:
                "Network — طبقة الشبكة (IP + routing) تنقل الـ datagrams من host المصدر إلى host الوجهة.",
            },

            // ================= Q2: Problems =================
            {
              q: "[Q2(a)] Host A sends 5 data packets to host B using TCP protocol. Each data packet contains 10 bytes of application data. Suppose 5 data packets arrive in order and all are accepted by B. The last ACK packet sent by B has ACK number 99. What is the sequence number of the first data packet sent by A?",
              options: ["49", "50", "59", "99"],
              correct: 0,
              translation:
                "ما هو الرقم التسلسلي (sequence number) لأول حزمة بيانات أرسلها A؟",
              explanation:
                "49 — إجمالي البيانات = 5 × 10 = 50 بايت. ACK number = رقم البايت التالي المتوقع = seq الأولى + 50 = 99، إذن seq الأولى = 99 − 50 = 49.",
            },
            {
              q: "[Q2(b)] Two hosts A and B are 2000 km apart and are connected by a direct link of 200 kbps. Propagation speed on the link is 2.5 * 10^8 m/s. A is sending 10 packets to B continuously. Each packet is 100 bytes in size. Suppose the channel is error-free, how long (in seconds) does it take for B to receive all the packets?",
              options: ["0.084", "0.048", "0.028", "0.024"],
              correct: 1,
              translation:
                "كم من الوقت (بالثواني) يستغرقه B لاستلام جميع الحزم؟",
              explanation:
                "0.048 s — Transmission = (10 × 100 × 8) / 200,000 = 8000 / 200,000 = 0.04 s. Propagation = 2,000,000 m / 2.5×10^8 = 0.008 s. المجموع = 0.04 + 0.008 = 0.048 s.",
            },
            {
              q: "[Q2(c)] A UDP server needs only one socket to communicate with n different clients simultaneously. How many sockets would a TCP server have ever created for the same situation?",
              options: ["n", "n + 1", "2n", "1"],
              correct: 1,
              translation:
                "سيرفر UDP يحتاج socket واحد فقط للتواصل مع n عميل. كم عدد الـ sockets التي سينشئها سيرفر TCP لنفس الحالة؟",
              explanation:
                "n + 1 — socket واحد للاستماع (welcoming socket) + socket مستقل لكل عميل (n).",
            },
            {
              q: "[Q2(d)] A Web server supports both HTTP/1.0 and HTTP/1.1. So far 40 clients have downloaded a web page from the server, which contains 1 HTML file and 3 other Web objects referenced by the HTML file. Half of the clients run HTTP/1.0 and the other half run HTTP/1.1. How many sockets has the Web server ever created since it starts running?",
              options: ["80", "100", "101", "240"],
              correct: 2,
              translation:
                "كم socket أنشأها الويب سيرفر منذ بدء التشغيل؟ (40 عميل: نصفهم HTTP/1.0 ونصفهم HTTP/1.1، والصفحة فيها ملف HTML + 3 كائنات).",
              explanation:
                "101 — HTTP/1.0 (non-persistent): كل كائن له اتصال مستقل = 4 اتصالات × 20 عميل = 80. HTTP/1.1 (persistent): اتصال واحد لكل عميل = 20. المجموع = 100 socket اتصال + 1 welcoming socket = 101 (وتكون 100 لو لم يُحسب socket الاستماع).",
            },
            {
              q: "[Q2(e)] What is the checksum of the following 3 bytes? (the first byte shown is 11110100 — the other two bytes are in the figure)",
              options: ["(open answer)"],
              correct: 0,
              translation: "ما هو الـ checksum للبايتات الثلاثة التالية؟",
              explanation:
                "طريقة الحل: اجمع البايتات الثلاثة (8 bit لكل واحد) وأي carry خارج من الـ 8 بتات يُضاف على الناتج (wrap-around)، ثم اعمل one's complement (اقلب كل البتات). ملاحظة: في صورة الورقة ظهر البايت الأول فقط (11110100) والباقي مخفي بالإصبع، فلازم تراجع البايتين الباقيين من الورقة الأصلية.",
            },
            {
              q: "[Q2(f)] A huge file is transferred over an existing TCP connection (i.e., 3-way handshake is already done). The connection is still open after transmission. The first and last TCP segments have the sequence numbers 12345 and 2345 respectively. The last TCP segment carries 1000 bytes of data. What could be the size of the file transferred in bytes?",
              options: ["(open answer)"],
              correct: 0,
              translation: "ما هو حجم الملف المنقول بالبايت؟",
              explanation:
                "4,294,958,296 بايت (= 2^32 − 9000) — الـ sequence number التف حول 2^32 (wrap-around). آخر segment يبدأ عند 2345 وتحمل 1000 بايت، فالبايت التالي = 3345. الحجم = 2^32 − 12345 + 3345 = 4,294,967,296 − 9,000 = 4,294,958,296. (ويمكن أن يكون أي مضاعف إضافي لـ 2^32 لأن السؤال 'could be').",
            },
            {
              q: "[Q2(g)] A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
              options: ["(open answer)"],
              correct: 0,
              translation: "ما هو معدل النقل الفعلي (Throughput) بالـ bps؟",
              explanation:
                "500 bps — Propagation = 3×10^8 m / 2×10^8 = 1.5 s. Transmission = 2000 / 2000 = 1 s. RDT 2.2 هو stop-and-wait فكل حزمة تأخذ 1 + 1.5 + 1.5 = 4 s. الزمن الكلي = 100 × 4 = 400 s. Throughput = (100 × 2000) / 400 = 500 bps.",
            },
            {
              q: "[Q2(h)] A source and a destination are separated by 20,000 km and are connected by a direct link of 2 Mbps. The propagation speed over the link is 2.5 * 10^8 m/s. The source sends 20 data packets to the destination using a stop-and-wait protocol. Each data packet is 5,000 bytes long. Suppose ACK packets are of negligible size, and 10% of the data packets are corrupted but retransmission is always successful. How long does it take for the source to know all data packets are successfully received by the destination? Write down your answer in seconds.",
              options: ["(open answer)"],
              correct: 0,
              translation:
                "كم من الوقت يستغرقه المصدر ليعرف أن كل الـ 20 packet وصلت بنجاح؟ (بالثواني)",
              explanation:
                "3.96 s — Transmission = (5000 × 8) / 2×10^6 = 0.02 s. Propagation = 2×10^7 / 2.5×10^8 = 0.08 s. الزمن لكل محاولة = 0.02 + 0.08 + 0.08 (ACK راجع) = 0.18 s. عدد الإرسالات = 20 + 10% × 20 = 22. الزمن الكلي = 22 × 0.18 = 3.96 s.",
            },
            {
              q: "[Q2(i)] The following graph shows a sequence of TCP segments sent from host X to host Y. Each dot represents a TCP segment, plotting its sequence number versus the time it is received by Y. Each segment carries exactly 100 bytes of payload. The segments labelled with A and F are the first and last segments sent by X, respectively. Assume that no segment is corrupted during transmission and Y buffers out-of-order segments for eventual delivery to the application. What will be the ACK number in the last ACK segment sent by Y?",
              options: ["(open answer)"],
              correct: 0,
              translation: "ما هو ACK number في آخر ACK segment أرسله Y؟",
              explanation:
                "800 (حسب قراءة الرسم) — الـ segments تغطي أرقام 100 إلى 700 بدون فجوات (A=100 … والأخيرة F=700 وتحمل 100 بايت)، وY يخزّن الـ out-of-order، فبعد وصول آخر segment يكون ACK التراكمي = 700 + 100 = 800. تنبيه: الرسم في الصورة غير واضح تماماً، فتأكد من قيم المحور الرأسي من الورقة الأصلية.",
            },
          ],
        },
      ],
    },

    {
      category: "Dr. Tarek Mohamed",
      icon: "👨‍🏫",
      description: "Computer Networks midterms by Dr. Tarek Mohamed",
      items: [
        {
          t: "MidTerm 2022 — Computer Networks",
          d: "Introduction to Computer Networks — 2022",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Dr. Tarek/2022/MidTerm 2026 - National - Networks.pdf",

          questions: [
            /* ---------- 25 MCQ (بنفس ترتيب ملف الإجابات) ---------- */

            /* Q1 */
            {
              q: "The number of layers in ISO OSI reference model is ______",
              options: ["5", "7", "6", "10"],
              correct: 1,
              translation: "عدد الطبقات في نموذج ISO OSI المرجعي هو ______",
              explanation:
                "نموذج OSI المرجعي يتكون من 7 طبقات، من الأسفل للأعلى: Physical (الفيزيائية)، Data Link (ربط البيانات)، Network (الشبكة)، Transport (النقل)، Session (الجلسة)، Presentation (العرض)، Application (التطبيق).",
            },

            /* Q2 */
            {
              q: "A ______ set of rules that governs data communication.",
              options: ["Protocols", "Standards", "RFCs", "Servers"],
              correct: 0,
              translation:
                "________ مجموعة من القواعد التي تحكم اتصال البيانات.",
              explanation:
                "البروتوكول (Protocol) هو مجموعة قواعد ومواصفات تحكم تبادل البيانات بين الأجهزة، مثل كيفية الإرسال والتلقي ومعالجة الأخطاء. المعايير (Standards) هي القواعد المعتمدة، و RFCs هي وثائق اقتراحات الإنترنت، أما الخوادم فهي أجهزة وليست قواعد.",
            },

            /* Q3 */
            {
              q: "The structure or format of data is called ______",
              options: ["Syntax", "Semantics", "Struct", "Formatting"],
              correct: 0,
              translation: "بنية أو صيغة البيانات تسمى ______",
              explanation:
                "البنية (Syntax) تصف شكل البيانات وترتيبها (مثلاً: أي حقل يأتي أولاً في الترويسة). الدلالات (Semantics) تصف معنى كل حقل وكيف يجب تفسيره.",
            },

            /* Q4 */
            {
              q: "A ______ is the physical path over which a message travels.",
              options: ["Path", "Medium", "Protocol", "Route"],
              correct: 1,
              translation:
                "________ هو المسار الفيزيائي الذي ينتقل عبره الرسالة.",
              explanation:
                "الوسيط (Medium) هو القناة الفيزيائية (سلك نحاسي، ألياف ضوئية، أو لاسلكي) التي تنتقل عبرها الإشارات بين المرسل والمستقبل.",
            },

            /* Q5 */
            {
              q: "Which of this is not a network edge device?",
              options: ["PC", "Smartphones", "Servers", "Switch"],
              correct: 3,
              translation:
                "أي مما يلي ليس جهاز طرف شبكة (network edge device)؟",
              explanation:
                "أجهزة طرف الشبكة (edge devices) هي التي تستضيف تطبيقات المستخدم النهائي مثل PC والهواتف الذكية والخوادم. المحول (Switch) هو جهاز شبكة داخلي (core) يعمل في طبقة ربط البيانات لربط الأجهزة داخل الشبكة المحلية.",
            },

            /* Q6 */
            {
              q: "A ______ is a device that forwards packets between networks by processing the routing information included in the packet.",
              options: ["bridge", "firewall", "router", "hub"],
              correct: 2,
              translation:
                "________ هو جهاز يقوم بإعادة توجيه الحزم بين الشبكات بمعالجة معلومات التوجيه المتضمنة في الحزمة.",
              explanation:
                "الموجه (Router) يعمل في طبقة الشبكة (Layer 3) ويستخدم عنوان IP ومعلومات جدول التوجيه لإعادة توجيه الحزم بين شبكات مختلفة. الجسر (Bridge) يعمل في Layer 2، والجدار الناري (Firewall) يفلتر الحركة، والموزع (Hub) مجرد مكبر إشارة.",
            },

            /* Q7 */
            {
              q: "A list of protocols used by a system, one protocol per layer, is called ______",
              options: [
                "protocol architecture",
                "protocol stack",
                "protocol suite",
                "protocol system",
              ],
              correct: 1,
              translation:
                "قائمة البروتوكولات المستخدمة بواسطة نظام، بروتوكول واحد لكل طبقة، تسمى ______",
              explanation:
                "مكدس البروتوكولات (Protocol Stack) هو القائمة المرتبة للبروتوكولات المستخدمة في كل طبقة (مثلاً: Ethernet / IP / TCP / HTTP). مجموعة البروتوكولات (Protocol Suite) هي كل البروتوكولات معاً بدون ترتيب طبقي صريح.",
            },

            /* Q8 */
            {
              q: "Network congestion occurs ______",
              options: [
                "in case of traffic overloading",
                "when a system terminates",
                "when connection between two nodes terminates",
                "in case of transfer failure",
              ],
              correct: 0,
              translation: "يحدث ازدحام الشبكة ______",
              explanation:
                "ازدحام الشبكة يحدث عندما يفوق حجم البيانات المرسلة قدرة الموجهات والرواتر على المعالجة، فيتراكم في الطوابير ويزداد التأخير وقد تُفقد الحزم. إنهاء نظام أو إنهاء اتصال لا يُسمى ازدحاماً.",
            },

            /* Q9 */
            {
              q: "P2P applications face the challenge",
              options: ["ISP Friendly", "Security", "all of the mentioned"],
              correct: 2,
              translation: "تطبيقات P2P تواجه التحدي",
              explanation:
                "تطبيقات الند للند (P2P) تواجه تحديات متعددة منها: تحدي الود مع مزودي خدمة الإنترنت (ISP friendly) لأنها تستهلك عرض نطاق ترددي عالياً وغير متماثل، وتحديات الأمان لأنه لا يوجد خادم مركزي للتحكم أو التحقق.",
            },

            /* Q10 */
            {
              q: "the rate at which data is transferred is referred to ______",
              options: [
                "transmission rate",
                "transfer ratio",
                "compression rate",
              ],
              correct: 0,
              translation: "المعدل الذي تُنقل به البيانات يُشار إليه بـ ______",
              explanation:
                "معدل النقل (Transmission Rate) هو كمية البيانات المرسلة في وحدة الزمن، ويُقاس عادةً بالبت في الثانية (bps) أو مضاعفاتها (Kbps, Mbps, Gbps).",
            },

            /* Q11 */
            {
              q: "End systems access the Internet through",
              options: [
                "Internet Service Providers ISPs",
                "Customer premises Equipment CBE",
                "Digital subscriber line DSL",
              ],
              correct: 0,
              translation: "تصل الأنظمة الطرفية إلى الإنترنت عبر",
              explanation:
                "تتصل الأنظمة الطرفية (end systems) بالإنترنت عبر مزودي خدمة الإنترنت (ISPs). أما DSL فهي تقنية خط سماوي تستخدم للوصول إلى ISP، و CPE هي الأعدات الموجودة عند العميل لكن الدخول الفعلي للإنترنت يتم عبر ISP.",
            },

            /* Q12 */
            {
              q: "The only control that the application developer has on the transport-layer side is",
              options: [
                "the choice of transport protocol",
                "perhaps the ability to fix a few transport-layer parameters",
                "all of the mentioned",
              ],
              correct: 2,
              translation:
                "التحكم الوحيد الذي يمتلكه مطور التطبيق في طبقة النقل هو",
              explanation:
                "مطور التطبيق لا يستطيع تغيير طبقة النقل نفسها، لكنه يستطيع: (1) اختيار بروتوكول النقل (TCP أو UDP)، و (2) ضبط بعض المعاملات مثل حجم المخزن المؤقت. لذا الإجابة الصحيحة هي 'كل ما سبق'.",
            },

            /* Q13 */
            {
              q: "Processes on two different end systems communicate with each other",
              options: [
                "by exchanging messages across the computer network",
                "with interprocess communication",
                "all of the mentioned",
              ],
              correct: 0,
              translation:
                "تتواصل العمليات على نظامين طرفيين مختلفين مع بعضها البعض",
              explanation:
                "العمليات على أنظمة مختلفة تتواصل عبر تبادل الرسائل (messages) عبر الشبكة. الـ Interprocess Communication (IPC) هو فقط للعمليات على نفس الجهاز، وليس عبر الشبكة.",
            },

            /* Q14 */
            {
              q: "Two devices are in network if",
              options: [
                "a process in one device is able to exchange information with a process in another device",
                "a process is running on both devices",
                "PIDs of the processes running of different devices are same",
              ],
              correct: 0,
              translation: "يُقال أن جهازين في شبكة إذا",
              explanation:
                "شرط وجود شبكة هو قدرة عملية على جهاز من تبادل المعلومات مع عملية على جهاز آخر. مجرد وجود عملية قيد التشغيل على كلا الجهازين أو تطابق PIDs لا يعني وجود شبكة.",
            },

            /* Q15 */
            {
              q: "What is client process",
              options: [
                "Process that initiates communication",
                "Process that waits to be contacted",
                "protocol in the application layer",
              ],
              correct: 0,
              translation: "ما هي عملية العميل (client process)؟",
              explanation:
                "عملية العميل (client) هي التي تبدأ الاتصال وترسل الطلب الأول. عملية الخادم (server) هي التي تنتظر طلبات العملاء الواردة على منفذ معروف.",
            },

            /* Q16 */
            {
              q: "When this client-server interaction is taking place over TCP, the application developer needs to make an important decision—should each request/response pair be sent over a separate TCP connection, or should all of the requests and their corresponding responses be sent over the same TCP connection? In the former approach, the application is said to use ---",
              options: [
                "non-persistent connections",
                "persistent connections",
                "none of the above",
              ],
              correct: 0,
              translation:
                "عندما يتم تفاعل العميل-الخادم عبر TCP، يحتاج المطور لاتخاذ قرار مهم: هل يجب إرسال كل زوج طلب/استجابة عبر اتصال TCP منفصل، أم أن جميع الطلبات واستجاباتها تُرسل عبر نفس اتصال TCP؟ في النهج الأول، يقال أن التطبيق يستخدم ---",
              explanation:
                "الاتصالات غير المستمرة (non-persistent) تفتح اتصال TCP جديداً لكل زوج طلب/استجابة ثم تغلقه فوراً. الاتصالات المستمرة (persistent) تبقي اتصال TCP مفتوحاً لطلبات متعددة، مما يقلل زمن المصافحة ويحسّن الأداء.",
            },

            /* Q17 */
            {
              q: "The RTT includes",
              options: [
                "packet-propagation delays",
                "packet-queuing delays",
                "all of the mentioned",
              ],
              correct: 2,
              translation: "زمن الذهاب والإياب (RTT) يتضمن",
              explanation:
                "RTT (Round-Trip Time) هو الزمن الكلي لذهاب الحزمة وإيابها، ويتضمن: زمن الإرسال (transmission)، زمن الانتشار (propagation)، زمن المعالجة (processing) في الرواتر، وزمن الانتظار في الطوابير (queuing). لذا الإجابة هي 'كل ما سبق'.",
            },

            /* Q18 */
            {
              q: "malware can record keystrokes, web sites visited, upload info to collection site",
              options: ["virus", "worm", "spyware"],
              correct: 2,
              translation:
                "برمجية خبيثة تسجل ضغطات المفاتيح والمواقع التي تتم زيارتها وترفع المعلومات إلى موقع تجميع",
              explanation:
                "برامج التجسس (Spyware) تتجسس على نشاط المستخدم وتجمع معلومات (ضغطات مفاتيح، مواقع) وترسلها لطرف ثالث دون علم المستخدم. الفيروس (Virus) يلتصق بملفات لينتشر، والدودة (Worm) تنتشر ذاتياً عبر الشبكة بدون الحاجة لمضيف.",
            },

            /* Q19 */
            {
              q: "Which is not a application layer protocol",
              options: ["HTTP", "SMTP", "TCP"],
              correct: 2,
              translation: "أي مما يلي ليس بروتوكول طبقة التطبيق",
              explanation:
                "HTTP و SMTP هما بروتوكولا طبقة التطبيق (Layer 7). أما TCP فهو بروتوكول طبقة النقل (Layer 4)، وليس بروتوكول تطبيق.",
            },

            /* Q20 */
            {
              q: "What is the HTTP port number",
              options: ["25", "110", "80"],
              correct: 2,
              translation: "ما هو رقم منفذ HTTP",
              explanation:
                "منفذ HTTP الافتراضي هو 80. المنفذ 25 مخصص لـ SMTP (إرسال بريد)، والمنفذ 110 مخصص لـ POP3 (استقبال بريد).",
            },

            /* Q21 */
            {
              q: "---------- can make use of as much, or as little, throughput as happens to be available",
              options: [
                "bandwidth-sensitive applications",
                "elastic applications",
                "all of the mentioned",
              ],
              correct: 1,
              translation:
                "________ يمكنها استخدام أكبر أو أصغر قدر من الإنتاجية (throughput) متاح",
              explanation:
                "التطبيقات المرنة (Elastic) مثل البريد الإلكتروني و FTP و WWW يمكنها التكيف مع أي قدر متاح من الإنتاجية وتعمل بدرجة مقبولة. التطبيقات الحساسة لعرض النطاق (bandwidth-sensitive) مثل المكالمات الصوتية والفيديو تتطلب إنتاجية محددة لتعمل بشكل صحيح.",
            },

            /* Q22 */
            {
              q: "Which protocol is a protocol of application layer",
              options: ["HTTP", "TCP", "IP"],
              correct: 0,
              translation: "أي بروتوكول هو بروتوكول طبقة التطبيق",
              explanation:
                "HTTP هو بروتوكول طبقة تطبيق (Layer 7). TCP هو بروتوكول طبقة نقل (Layer 4)، و IP هو بروتوكول طبقة شبكة (Layer 3).",
            },

            /* Q23 */
            {
              q: "The structure or format of data is called ________",
              options: ["Syntax", "Semantics", "Struct"],
              correct: 0,
              translation: "بنية أو صيغة البيانات تسمى ________",
              explanation:
                "البنية (Syntax) تصف شكل البيانات وترتيبها. الدلالات (Semantics) تصف معنى كل حقل وكيف يجب تفسيره.",
            },

            /* Q24 */
            {
              q: "data over DSL phone line goes to....................",
              options: ["internet", "telephone net", "none of the above"],
              correct: 0,
              translation: "البيانات عبر خط هاتف DSL تذهب إلى ...",
              explanation:
                "DSL (Digital Subscriber Line) يستخدم خطوط الهاتف النحاسية لإرسال بيانات الإنترنت عالية السرعة. إشارة البيانات تذهب إلى شبكة الإنترنت، بينما المكالمات الصوتية تذهب إلى شبكة الهاتف العادية، والاثنتان تعملان معاً بفضل تقسيم الترددات.",
            },

            /* Q25 */
            {
              q: "In computer network nodes are ________",
              options: [
                "the computer that originates the data",
                "the computer that routes the data",
                "all of the mentioned",
              ],
              correct: 2,
              translation: "في شبكة الكمبيوتر، العقد (nodes) هي ________",
              explanation:
                "العقدة (node) في الشبكة هي أي جهاز قادر على إنشاء البيانات أو استقبالها أو توجيهها. هذا يشمل الأجهزة المُصدِّرة للبيانات (PC، خادم) والأجهزة المُوجِّهة (router، switch). لذا الإجابة هي 'كل ما سبق'.",
            },

            /* ---------- السؤال المفقود من ورقة الامتحان (Q10 في ملف الأسئلة) ---------- */
            /* Q26 — مُضاف في النهاية لأنه غير موجود في ملف الإجابات */
            {
              q: "In the layer hierarchy as the data packet moves from the upper to the lower layers, headers are ___________",
              options: ["Added", "Removed", "Rearranged"],
              correct: 0,
              translation:
                "في التسلسل الطبقي، عندما تنتقل حزمة البيانات من الطبقات العليا إلى الطبقات السفلى، فإن الترويسات ___________",
              explanation:
                "عند نزول البيانات من الطبقات العليا إلى السفلى في نموذج OSI أو TCP/IP، كل طبقة تضيف ترويسة (header) خاصة بها إلى البيانات القادمة من الطبقة الأعلى — تسمى هذه العملية التغليف (encapsulation). أما عند الصعود من الطبقات السفلى إلى العليا فإن كل طبقة تزيل ترويستها (decapsulation). لذا الإجابة الصحيحة هي 'Added'.",
            },
          ],
        },

        {
          t: "MidTerm 2026 — National — Computer Networks",
          d: "Introduction to Computer Networks — National Midterm Exam",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Dr. Tarek/MidTerm 2026 - National - Networks.pdf.pdf",

          questions: [
            /* ---------- 5 MCQs (2 marks each) ---------- */

            {
              q: 'Which of the following descriptions below correspond to a "nuts-and-bolts" view of the Internet?',
              options: [
                "A platform for building network applications.",
                "A place I go for information, entertainment, and to communicate with people.",
                'A "network of networks".',
                "All of the above.",
              ],
              correct: 3,
              translation:
                'أي من الأوصاف التالية يقابل النظرة "التفصيلية" (nuts-and-bolts) للإنترنت؟',
              explanation:
                "النظرة التفصيلية (nuts-and-bolts view) للإنترنت تراه من منظور المكونات: شبكة من الشبكات، منصة لبناء التطبيقات الشبكية، ومكان للوصول للمعلومات والتواصل. جميعها تصف منظوراً مختلفاً لكن صحيحاً، لذا الإجابة هي 'كل ما سبق'. النظرة الأخرى (services view) ترى الإنترنت كبنية تحتية تقدم خدمات للتطبيقات.",
            },

            {
              q: "Time needed to perform an integrity check, lookup packet information in a local table and move the packet from an input link to an output link in a router.",
              options: [
                "Processing delay",
                "Propagation delay",
                "Transmission delay",
                "Queueing delay",
              ],
              correct: 0,
              translation:
                "الزمن اللازم لإجراء فحص سلامة، والبحث عن معلومات الحزمة في جدول محلي، ونقل الحزمة من وصلة دخل إلى وصلة خرج في الموجه.",
              explanation:
                "زمن المعالجة (Processing delay) هو الزمن الذي يحتاجه الموجه لفحص الترويسة، التحقق من سلامة الحزمة (bit error check)، والبحث في جدول التوجيه لتحديد الوصلة الخارجية. أما زمن الانتشار (Propagation) فهو زمن انتقال البتات عبر الوسيط، وزمن النقل (Transmission) هو زمن دفع البتات على الوصلة، وزمن الانتظار (Queueing) هو الزمن الذي تقضيه الحزمة في طابور الموجه.",
            },

            {
              q: "What is the maximum throughput achievable between sender and receiver in the scenario shown below? [sender — 1.5 Mbits/sec link — router — 10 Mbits/sec link — receiver]",
              options: [
                "1.5 Mbps",
                "11.5 Mbps",
                "10 Mbps",
                "None of the above",
              ],
              correct: 0,
              translation:
                "ما هو أقصى إنتاجية (throughput) يمكن تحقيقها بين المرسِل والمستقبِل في السيناريو التالي؟ [مرسِل — وصلة 1.5 Mbits/sec — موجه — وصلة 10 Mbits/sec — مستقبِل]",
              explanation:
                "الإنتاجية الطرفية (end-to-end throughput) محكومة بـ bottleneck link (الوصلة الأبطأ). هنا الوصلة 1.5 Mbits/sec أبطأ من 10 Mbits/sec، لذا أقصى إنتاجية = 1.5 Mbps. لا يمكن أن تتجاوز الإنتاجية سعة الوصلة الأبطأ في المسار.",
            },

            {
              q: 'Which of the definitions below describe what is meant by the term "encapsulation"?',
              options: [
                "Determining the name of the destination host, translating that name to an IP address and then placing that value in a packet header field.",
                "Starting a transport layer timer for a transmitted segment, and then if an ACK segment isn't received before the timeout, placing that segment in a retransmission queue.",
                'Taking data from the layer above, adding header fields appropriate for this layer, and then placing the data in the payload field of the "packet" for that layer.',
                "Computing the sum of all of the bytes within a packet and placing that value in the packet header field.",
              ],
              correct: 2,
              translation:
                'أي من التعريفات التالية تصف معنى مصطلح "التغليف" (encapsulation)؟',
              explanation:
                "التغليف (encapsulation) هو العملية التي تأخذ فيها كل طبقة البيانات من الطبقة الأعلى، تضيف ترويسة (header) خاصة بها، ثم تضع الكل في حقل الحمولة (payload) لحزمة تلك الطبقة. الخيار A يصف DNS resolution، والخيار B يصف إعادة الإرسال (retransmission)، والخيار D يصف فحص المجموع الاختباري (checksum).",
            },

            {
              q: "Which of the characteristics below are associated with a P2P approach to structuring network applications (as opposed to a client-server approach)?",
              options: [
                "A process requests service from those it contacts and will provide service to processes that contact it.",
                "There is a server that is always on.",
                "HTTP uses this application structure.",
                "There is a server with a well known server IP address.",
              ],
              correct: 0,
              translation:
                "أي من الخصائص التالية مرتبطة بنهج الند للند (P2P) في هيكلة تطبيقات الشبكة (بعكس نهج العميل-الخادم)؟",
              explanation:
                "في معمارية P2P، كل عملية (peer) تعمل كعميل وخادم في نفس الوقت؛ تطلب الخدمة ممن تتواصل معه وتوفر الخدمة لمن يتواصل معها. الخيارات B و C و D كلها تصف معمارية العميل-الخادم: خادم دائم التشغيل، HTTP يستخدم بنية client-server، وخادم بعنوان IP معروف.",
            },

            /* ---------- 3 Essay questions (5 marks each) ---------- */

            {
              type: "essay",
              q: "Draw FSM for Reliable Data Transfer over a Perfectly Reliable Channel: rdt1.0?",
              translation:
                "ارسم آلة الحالة المحدودة (FSM) لنقل البيانات الموثوق عبر قناة موثوقة تماماً: rdt1.0؟",
              answer:
                "بروتوكول rdt1.0 يفترض أن القناة موثوقة تماماً (لا فقدان، لا تلف، لا إعادة ترتيب)، لذا لا حاجة لـ ACK أو إعادة إرسال أو أرقام تسلسل. الـ FSM يتكون من حالتين فقط (واحدة للمرسِل وواحدة للمستقبِل)، كل منهما بحالة واحدة فقط:\n\n" +
                'مرسِل (Sender) — حالة واحدة: "Wait for call from above"\n' +
                "  - الحدث: rdt_send(data) — يستقبل البيانات من طبقة التطبيق العليا.\n" +
                "  - الإجراء: make_pkt(data) ثم udt_send(packet) — يبني الحزمة ويرسلها عبر القناة.\n" +
                "  - الحالة التالية: تبقى نفس الحالة (لا انتقال).\n\n" +
                'مستقبِل (Receiver) — حالة واحدة: "Wait for call from below"\n' +
                "  - الحدث: rdt_rcv(packet) — يستقبل الحزمة من القناة.\n" +
                "  - الإجراء: extract(packet, data) ثم deliver_data(data) — يستخرج البيانات ويسلّمها لطبقة التطبيق العليا.\n" +
                "  - الحالة التالية: تبقى نفس الحالة.\n\n" +
                "ملاحظات: لا يوجد تمييز بين الحزم لأن القناة موثوقة. لا يوجد مؤقت (timer) ولا ACK ولا NAK. كل حزمة تُسلَّم كما هي مرة واحدة بترتيبها الصحيح. هو أبسط نموذج RDT ويُستخدم كنقطة انطلاق لـ rdt2.0 و rdt3.0.",
              tags: ["rdt", "FSM", "chapter 3", "important"],
              ref: "Reference: Computer Networking: A Top-Down Approach, Kurose & Ross, Chapter 3.1",
            },

            {
              type: "essay",
              q: "Explain how cookies work?",
              translation: "اشرح كيف تعمل الكوكيز (cookies)؟",
              answer:
                "الكوكيز (cookies) هي آلية تسمح للموقع بتتبع حالة المستخدم عبر جلسات HTTP المتعددة، لأن HTTP بحد ذاته عديم الحالة (stateless).\n\n" +
                "المكونات الأربعة للكوكيز:\n" +
                "1. سطر ترويسة Set-Cookie في رسالة استجابة HTTP من الخادم.\n" +
                "2. سطر ترويسة Cookie في رسالة طلب HTTP من المتصفح.\n" +
                "3. ملف كوكيز محفوظ على جهاز المستخدم يديره المتصفح.\n" +
                "4. قاعدة بيانات خلفية في الموقع لتخزين بيانات الكوكيز.\n\n" +
                "خطوات العمل:\n" +
                "- الطلب الأول: المستخدم يزور الموقع لأول مرة، الخادم يولّد معرف فريد (session ID) ويرسله في ترويسة Set-Cookie ضمن استجابة HTTP.\n" +
                "- التخزين: المتصفح يضيف هذا الكوكيز إلى ملف الكوكيز المحلي المرتبط بالموقع.\n" +
                "- الطلبات اللاحقة: في كل طلب HTTP للموقع، المتصفح يضمّن ترويسة Cookie ويحتوي على نفس معرف الجلسة.\n" +
                "- التتبع: الخادم يطابق المعرف في قاعدة بياناته لاسترجاع تفضيلات المستخدم، حالة الجلسة، أو سجل النشاط.\n\n" +
                "الاستخدامات الرئيسية:\n" +
                "- إدارة الجلسة (session management): تسجيل الدخول، عربة التسوق.\n" +
                "- التخصيص (personalization): تفضيلات المستخدم، اللغة، السمة.\n" +
                "- التتبع (tracking): تحليلات، إعلانات موجّهة.\n\n" +
                "ملاحظات أمنية: الكوكيز يمكن أن تُسرق أو تُزوَّر، لذلك تُستخدم ميزات مثل HttpOnly (يمنع الوصول عبر JavaScript) و Secure (يُرسل فقط عبر HTTPS) و SameSite (يقي من هجمات CSRF).",
              tags: ["cookies", "HTTP", "chapter 2", "important"],
              ref: "Reference: Kurose & Ross, Chapter 2.4",
            },

            {
              type: "essay",
              q: "Explain how flow control works?",
              translation: "اشرح كيف يعمل التحكم بالتدفق (flow control)؟",
              answer:
                "التحكم بالتدفق (flow control) هو آلية في طبقة النقل (TCP) تضمن ألا يرسل المرسِل بيانات أسرع مما يستطيع المستقبِل معالجتها وتخزينها، فيمنع فيضان المخزن المؤقت (buffer overflow) عند المستقبِل.\n\n" +
                "الآلية في TCP:\n" +
                "- المستقبِل يعلن عن حجم المخزن المؤقت المتاح عبر حقل rwnd (receive window) في كل قطعة ACK يرسلها.\n" +
                "- المرسِل يحافظ على متغيرين لكل اتصال:\n" +
                "    • LastByteSent: آخر بايت أُرسل ولم يُعرف استلامه بعد.\n" +
                "    • LastByteAcked: آخر بايت تم تأكيد استلامه.\n" +
                "- المرسِل يحافظ على شرط: LastByteSent - LastByteAcked ≤ rwnd.\n" +
                "  أي أن البيانات المرسلة وغير المؤكدة لا تتجاوز المخزن المتاح عند المستقبِل.\n\n" +
                "المشكلة والحل عند rwnd = 0:\n" +
                "- إذا أعلن المستقبِل rwnd = 0 (المخزن ممتلئ)، يتوقف المرسِل عن الإرسال.\n" +
                "- المشكلة: إذا ضاعت رسالة ACK التي تحمل تحديث rwnd بعد ذلك، يحدث الجمود (deadlock).\n" +
                "- الحل: المرسِل يرسل قطع صغيرة (1 بايت) بشكل دوري ليجبر المستقبِل على إعادة إرسال ACK بتحديث rwnd.\n\n" +
                "الفرق بين flow control و congestion control:\n" +
                "- Flow control: يحمي المستقبِل من الفيضان (سببها سرعة المستقبِل).\n" +
                "- Congestion control: يحمي الشبكة من الازدحام (سببها قدرة الرواتر والوصلات).",
              tags: ["flow control", "TCP", "chapter 3", "important"],
              ref: "Reference: Kurose & Ross, Chapter 3.5",
            },
          ],
        },
      ],
    },

    {
      category: "Other Midterms",
      icon: "📁",
      description: "Miscellaneous Computer Networks midterms",
      items: [
        {
          t: "MidTerm - Answers - Networks(1)",
          d: "MidTerm Answers and Short Questions",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Other/MidTerm - Answers - Networks(1).pdf",
          questions: [
            {
              q: "The ______ layer is responsible for moving datagrams from the source host to the destination host.",
              options: ["network"],
              correct: 0,
              translation:
                "الطبقة المسؤولة عن نقل مخططات البيانات من المصدر إلى الوجهة هي:",
              explanation: "طبقة الشبكة (network).",
            },
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: ["HTTP version number"],
              correct: 0,
              translation: "ما الموجود في كل من سطر الطلب وسطر الحالة؟",
              explanation: "رقم إصدار HTTP.",
            },
            {
              q: "Which of the following protocols run at the application layer? i) SMTP ii) UDP iii) POP iv) DNS",
              options: ["(i), (iii) and (iv) only"],
              correct: 0,
              translation: "أي البروتوكولات تعمل في طبقة التطبيق؟",
              explanation: "SMTP و POP و DNS.",
            },
            {
              q: "The data value to be transmitted is 10100110 and the CRC generator is 11001. What is the CRC value computed?",
              options: ["1001"],
              correct: 0,
              translation: "ما هي قيمة CRC المحسوبة؟",
              explanation: "1001",
            },
            {
              q: "Which of the following statement regarding TCP is TRUE?",
              options: [
                "TCP provides a connection-oriented service to its applications.",
              ],
              correct: 0,
              translation: "أي عبارة حول TCP صحيحة؟",
              explanation: "TCP يوفر خدمة موجهة نحو الاتصال.",
            },
            {
              q: "Which of the following statements regarding application layer protocol is FALSE?",
              options: [
                "A browser can open only one TCP connection at a time.",
              ],
              correct: 0,
              translation: "أي عبارة حول بروتوكولات طبقة التطبيق خاطئة؟",
              explanation: "المتصفح يمكنه فتح أكثر من اتصال TCP في نفس الوقت.",
            },
            {
              q: "Host A sends 5 data packets... The last ACK packet sent by B has ACK number 99. What is the sequence number of the first data packet sent by A?",
              options: ["58"],
              correct: 0,
              translation: "ما هو رقم التسلسل لأول حزمة بيانات أرسلها A؟",
              explanation: "58",
            },
            {
              q: "Microwave link between satellite and Earth (distance 3.6*10^7 m, speed 2.4*10^8 m/s). Find propagation delay and minimum value of x.",
              options: ["Propagation delay = 0.15 s, x = 2.4 x 10^8 bits"],
              correct: 0,
              translation: "احسب تأخير الانتشار وقيمة x.",
              explanation: "0.15 ثانية، x = 2.4 × 10^8 بت.",
            },
            {
              q: "Minimal frame size L in CSMA/CD protocol.",
              options: ["2 * d * r"],
              correct: 0,
              translation: "الحد الأدنى لحجم الإطار في CSMA/CD.",
              explanation: "2 * d * r",
            },
            {
              q: "Consider a datagram network using 8-bit IP addresses... For interface 4, give associated range.",
              options: ["1010 0000 – 1011 1111, 32"],
              correct: 0,
              translation: "بالنسبة للواجهة 4، أعط النطاق المرتبط.",
              explanation: "1010 0000 – 1011 1111, 32",
            },
            {
              q: "Which of the following end-to-end delay component is constant?",
              options: ["Propagation delay"],
              correct: 0,
              translation: "أي مكون من مكونات التأخير ثابت؟",
              explanation: "تأخير الانتشار.",
            },
            {
              q: "CSMA/CD is a (an) ______ layer protocol.",
              options: ["link"],
              correct: 0,
              translation: "CSMA/CD هو بروتوكول طبقة:",
              explanation: "link",
            },
            {
              q: "An IP datagram with destination address 192.168.1.10 reaches a router... Which entry will be used?",
              options: ["192.168.1.0/24"],
              correct: 0,
              translation: "أي إدخال في جدول التوجيه سيُستخدم؟",
              explanation: "192.168.1.0/24",
            },
            {
              q: "A host uses a variety of protocols... Which statement is FALSE?",
              options: [
                "To get an IP address assigned, a host must first discover the IP address of its DHCP server using DNS.",
              ],
              correct: 0,
              translation: "أي عبارة خاطئة؟",
              explanation: "يستخدم DHCP لاكتشاف عنوان IP، وليس DNS.",
            },
            {
              q: "Is it necessary for an IP datagram to carry both the source and the destination IP addresses?",
              options: ["Yes"],
              correct: 0,
              translation:
                "هل من الضروري أن تحمل حزمة IP عنواني المصدر والوجهة؟",
              explanation: "نعم.",
            },
            {
              q: "Which of the following is the Web's application layer protocol?",
              options: ["HTTP"],
              correct: 0,
              translation: "ما هو بروتوكول طبقة التطبيق للويب؟",
              explanation: "HTTP",
            },
            {
              q: "How many of the given IP addresses belong to subnet 192.168.160.0/20?",
              options: ["2"],
              correct: 0,
              translation:
                "كم عدد عناوين IP التي تنتمي إلى الشبكة الفرعية 192.168.160.0/20؟",
              explanation: "2",
            },
            {
              q: "Which of the following statement about 2-dimensional parity bits is FALSE?",
              options: ["It can correct any two-bit error."],
              correct: 0,
              translation: "أي عبارة حول بتات التكافؤ ثنائية الأبعاد خاطئة؟",
              explanation: "يمكنها تصحيح أي خطأ من بتين (خاطئة).",
            },
            {
              q: "Live video streaming often runs over TCP – fast; relatively stable throughput!",
              options: ["False"],
              correct: 0,
              translation: "غالباً ما يتم بث الفيديو المباشر عبر TCP!",
              explanation: "خطأ، عادة يستخدم UDP.",
            },
            {
              q: "Which of the following makes up the end-to-end delay?",
              options: [
                "processing delay, propagation delay, queueing delay, transmission delay",
              ],
              correct: 0,
              translation: "ما الذي يشكل تأخير النهاية إلى النهاية؟",
              explanation: "جميع التأخيرات الأربعة.",
            },
            {
              q: "If the fragment offset in an IP header has a value of 100, it means that ______.",
              options: [
                "this first byte of payload in the IP datagram is byte 800",
              ],
              correct: 0,
              translation: "إذا كانت إزاحة التجزئة 100، فهذا يعني:",
              explanation: "أول بايت في الحمولة هو البايت 800.",
            },
            {
              q: "rdt 4.0 protocol design... Which statement is TRUE?",
              options: ["Receiver must send ACKs for duplicate packets."],
              correct: 0,
              translation: "أي عبارة صحيحة حول rdt 4.0؟",
              explanation: "يجب على المستقبل إرسال ACKs للحزم المكررة.",
            },
            {
              q: "The ______ field in IP header prevents an IP datagram from continuously wandering through the Internet.",
              options: ["TTL"],
              correct: 0,
              translation: "الحقل الذي يمنع مخطط البيانات من التجول باستمرار:",
              explanation: "TTL",
            },
            {
              q: "The access method for wireless LAN (IEEE 802.11) is based on ______.",
              options: ["CSMA/CA"],
              correct: 0,
              translation: "طريقة الوصول لشبكة LAN اللاسلكية:",
              explanation: "CSMA/CA",
            },
            {
              q: "Which of the following best characterizes CSMA/CD protocol?",
              options: ["Listen to the channel before accessing it."],
              correct: 0,
              translation: "ما الذي يميز بروتوكول CSMA/CD؟",
              explanation: "الاستماع للقناة قبل الوصول إليها.",
            },
            {
              q: "Can HTTP response message contain an empty body?",
              options: [
                "Yes, if the requested object has been moved to a new location.",
              ],
              correct: 0,
              translation: "هل يمكن أن تحتوي استجابة HTTP على جسم فارغ؟",
              explanation: "نعم، إذا تم نقل الكائن.",
            },
            {
              q: "In circuit switching, circuit segment is idle if not used by call.",
              options: ["Agree"],
              correct: 0,
              translation:
                "في تبديل الدوائر، يكون جزء الدائرة خاملاً إذا لم يستخدم.",
              explanation: "أوافق.",
            },
            {
              q: "Troubleshooting web access: dig, ping, traceroute, telnet. Which one checks if www.example.org is listening on port 80?",
              options: [
                "You run telnet to check if www.example.org is listening on port 80.",
              ],
              correct: 0,
              translation: "أي أداة تتحقق من الاستماع على المنفذ 80؟",
              explanation: "telnet",
            },
            {
              q: "Which of the following statements about TCP/UDP checksum are TRUE?",
              options: ["(iii) and (v) only"],
              correct: 0,
              translation: "أي العبارات حول TCP/UDP checksum صحيحة؟",
              explanation: "(iii) and (v) only",
            },
            {
              q: "Which of the following fields is present in both UDP header and TCP header?",
              options: ["Checksum"],
              correct: 0,
              translation: "أي حقل موجود في كل من رأس UDP و TCP؟",
              explanation: "Checksum (المجموع الاختباري).",
            },
            {
              q: "Ethernet uses a ____ physical address that is imprinted on the NIC.",
              options: ["48-byte"],
              correct: 0,
              translation: "يستخدم الإيثرنت عنواناً فيزيائياً بطول:",
              explanation: "48 بت.",
            },
            {
              q: "For the screenshot, what is the IP address of the hand phone in CIDR format?",
              options: ["117.91.224.0/22"],
              correct: 0,
              translation: "ما هو عنوان IP للهاتف في تنسيق CIDR؟",
              explanation: "117.91.224.0/22",
            },
            {
              q: "In a host sending data, UDP receives data from the ____ layer and sends to the ____ layer.",
              options: ["application; transport"],
              correct: 0,
              translation:
                "في مضيف يرسل بيانات، يتلقى UDP البيانات من طبقة ____ ويرسلها إلى طبقة ____.",
              explanation: "application; transport",
            },
            {
              q: "Ethernet provides an unreliable service. Therefore, ____.",
              options: [
                "Ethernet drops a frame that fails error checking without retransmission",
              ],
              correct: 0,
              translation: "يقدم الإيثرنت خدمة غير موثوقة. لذلك، ____.",
              explanation:
                "يسقط الإطار الذي يفشل في فحص الأخطاء دون إعادة إرسال.",
            },
            {
              q: "The first line in an HTTP request message is called the ____ line. The first line in an HTTP response message is called the ____ line.",
              options: ["request; status;"],
              correct: 0,
              translation:
                "السطر الأول في طلب HTTP يسمى ____ وفي الاستجابة يسمى ____.",
              explanation: "request; status.",
            },
            {
              q: "Which of the following technique is most essential in reliable transmission protocols?",
              options: ["Encapsulation"],
              correct: 0,
              translation:
                "أي تقنية هي الأكثر أهمية في بروتوكولات النقل الموثوقة؟",
              explanation: "Encapsulation (التغليف).",
            },
            {
              q: "The ____ layer is responsible for moving frames from one hop (node) to the next.",
              options: ["link"],
              correct: 0,
              translation: "الطبقة المسؤولة عن نقل الإطارات من عقدة إلى أخرى:",
              explanation: "link",
            },
            {
              q: "The Internet protocol stack consists of ____ protocol layers.",
              options: ["5"],
              correct: 0,
              translation: "تتكون حزمة بروتوكولات الإنترنت من ____ طبقات.",
              explanation: "5",
            },
            {
              q: "1s complement is used as checksum in ____.",
              options: ["Both TCP and UDP"],
              correct: 0,
              translation: "يستخدم المكمل الأول كمجموع اختباري في ____.",
              explanation: "Both TCP and UDP",
            },
            {
              q: "In Non-persistent HTTP, the client closes the TCP connection after fetching one object.",
              options: ["True"],
              correct: 0,
              translation:
                "في HTTP غير المستمر، يغلق العميل اتصال TCP بعد جلب كائن واحد.",
              explanation: "صحيح.",
            },
            {
              q: "What is the 1s complement of the sum of 11011010 and 01100101?",
              options: ["00111110"],
              correct: 0,
              translation: "ما هو المكمل الأول لمجموع 11011010 و 01100101؟",
              explanation: "00111110",
            },
            {
              q: "FTP runs over UDP – need to ensure files are uploaded/downloaded intact.",
              options: ["False"],
              correct: 0,
              translation: "يعمل FTP عبر UDP – لضمان نقل الملفات سليمة.",
              explanation: "خطأ، FTP يعمل عبر TCP.",
            },
            {
              q: "Which of the following is a VALID subnet mask?",
              options: ["255.255.255.128"],
              correct: 0,
              translation: "أي من أقنعة الشبكة الفرعية التالية صالح؟",
              explanation: "255.255.255.128",
            },
            {
              q: "Which of the following statements regarding the Internet is TRUE?",
              options: ["The Internet is structured as a network of networks."],
              correct: 0,
              translation: "أي عبارة حول الإنترنت صحيحة؟",
              explanation: "الإنترنت عبارة عن شبكة من الشبكات.",
            },
            {
              q: "What does HTTP stand for?",
              options: ["Hypertext Transfer Protocol"],
              correct: 0,
              translation: "ماذا تعني HTTP؟",
              explanation: "Hypertext Transfer Protocol",
            },
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: ["session"],
              correct: 0,
              translation: "أي طبقة لا تظهر في حزمة بروتوكولات الإنترنت؟",
              explanation: "session",
            },
            {
              q: "Huge file over TCP connection... How many TCP segments are used?",
              options: ["4,194,295"],
              correct: 0,
              translation:
                "ملف ضخم عبر اتصال TCP... كم عدد مقاطع TCP المستخدمة؟",
              explanation: "4,194,295",
            },
            {
              q: "The ______ layer of the Internet protocol stack is responsible for delivering data from sending process to receiving process.",
              options: ["transport"],
              correct: 0,
              translation:
                "الطبقة المسؤولة عن تسليم البيانات من عملية الإرسال إلى عملية الاستقبال:",
              explanation: "transport",
            },
            {
              q: "Two hosts 2000 km apart... How long does it take for B to receive all the packets?",
              options: ["0.048 seconds"],
              correct: 0,
              translation: "كم من الوقت يستغرق B لتلقي جميع الحزم؟",
              explanation: "0.048 seconds",
            },
          ],
        },
        {
          t: "MidTerm 2024 - Questions",
          d: "MidTerm 2024 - Computer Networks",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Other/MidTerm 2024 - Questions - Networks.pdf",
          questions: [
            {
              q: "In BitTorrent, if Alice has a subset of chunks and knows which chunks her neighbors have, then Alice requests small size chunks first from her neighbors.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في BitTorrent، تطلب Alice الحزم الصغيرة أولاً من جيرانها.",
              explanation: "صحيح.",
            },
            {
              q: "Which services can be grantee and can't be grantee by TCP when it uses flow control and congestion control? (Justify your answer)",
              options: [
                "TCP only grantee the relapilty but dose not grantee security or time or throughput",
              ],
              correct: 0,
              translation: "ما الخدمات التي يمنحها TCP وما لا يمنحه؟",
              explanation: "TCP يضمن الموثوقية فقط.",
            },
            {
              q: "Why a Web cache is considered both a server and a client at the same time?",
              options: [
                "it send the requsted messages to the clients so it acts like a server and it requeset the pages from the main server to cache it o it acts as a client",
              ],
              correct: 0,
              translation: "لماذا يعتبر Web cache خادماً وعميلاً في نفس الوقت؟",
              explanation: "يعمل كخادم للعملاء وكعميل للخادم الرئيسي.",
            },
            {
              q: "Why do Mail servers use SMTP handshaking in application layer although there is a TCP handshaking in the transport layer?",
              options: [
                "to check if the email is sender is not blocked and ok to send and to check if the receiver mail is in the mail server",
              ],
              correct: 0,
              translation: "لماذا تستخدم خوادم البريد مصافحة SMTP؟",
              explanation: "للتحقق من حالة المرسل والمستقبل.",
            },
            {
              q: "Dial-up and DSL are both dedicated access technology, where HFC and FTTH(PON) are completely shared along the path.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "Dial-up و DSL هما تقنيتا وصول مخصصتان، بينما HFC و FTTH مشتركتان.",
              explanation: "صحيح.",
            },
            {
              q: "Assume that a file of size F is to be distributed to N clients in client-server architecture. If the upload rate of the server's access link is us, then the time to distribute the file to N clients is equal to NF / us",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في بنية العميل-الخادم، وقت توزيع الملف يساوي NF/us.",
              explanation: "صحيح.",
            },
            {
              q: "Consider an institution has an access line of 15 Mbps. The access line services 20 requests per second. Suppose that the average size of a request is 1Mbits. Consider that the Internet delay is 2 sec; LAN delay is 50 msec. What is the average delay experienced by requests when using proxy server with hit rate =20%? (justify your answer).",
              options: [
                "hit rate is 20% then the file size that will be tarnsmit on the link is  0.8*20*(1*10^6) = 16*10^6 bit the traffic delay = (16*10^6)/(15*10^6) = 1.06 whih is more than 1 the the delay will be infinity.",
              ],
              correct: 0,
              translation: "ما هو متوسط التأخير مع خادم وكيل بنسبة إصابة 20%؟",
              explanation: "شدة المرور أكبر من 1، لذا التأخير لا نهائي.",
            },
            {
              q: "UDP socket is fully identified by a source port number, and a destination port number while TCP socket is fully identified by a source port number, a destination port number, a source IP address and a destination IP address.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يتم تحديد مقبس UDP برقمي المنفذين فقط، بينما TCP برقمي المنفذين وعنواني IP.",
              explanation: "صحيح.",
            },
            {
              q: "List the components of cookie technology.",
              options: [
                "- file at the local host manged by the user browser - row in a database of the website for each user - the server sends a cookie number (id) for the user if it enters the website for the first time",
              ],
              correct: 0,
              translation: "اذكر مكونات تقنية الكوكيز.",
              explanation:
                "ملف محلي، صف في قاعدة البيانات، ومعرف يرسله الخادم.",
            },
            {
              q: "The ability to inject packets into the Internet with a false source address is known as IP spoofing, while a passive receiver that records a copy of every packet that flies by is called a packet sniffer",
              options: ["True", "False"],
              correct: 0,
              translation:
                "حقن حزم بعنوان مصدر مزيف هو IP spoofing، والمستقبل السلبي هو packet sniffer.",
              explanation: "صحيح.",
            },
            {
              q: "Consider that there are 20 servers, and 20 clients connected to the core of the computer network. Assume that there are 20 simultaneous downloads taking place, involving 20 client-server pairs. Suppose that these 20 downloads are the only traffic in the network at the current time. Consider that there is a common link with transmission rate of 5Mbps in the core traversed by all 20 downloads. Suppose that every server access link has rate of 2 Mbps; every client access link has rate of 1Mbps; the transmission rates of other links in the core except the one common link are much larger than 5 Mbps. What is the end-to-end throughput for each download? (Answer with justification).",
              options: [
                "it will be the smallest rate which is (5/20) = 0.25MbPS",
              ],
              correct: 0,
              translation: "ما هي الإنتاجية من طرف إلى طرف لكل تنزيل؟",
              explanation: "أصغر معدل هو 5/20 = 0.25 Mbps.",
            },
            {
              q: "In packet switching, end-end resources along path are reserved for the duration of communication session",
              options: ["True", "False"],
              correct: 1,
              translation: "في تبديل الحزم، يتم حجز الموارد طوال مدة الجلسة.",
              explanation: "خطأ، هذا يحدث في تبديل الدوائر.",
            },
            {
              q: "Given that the requested information is not available at any intermediate databases, a recursive DNS query from a requesting host would follow the path.....",
              options: [
                "root DNS server, TLD server, local DNS server, authoritative DNS server",
                "authoritative DNS server, root server, TLD server, local DNS server",
                "local DNS server, root DNS server, local DNS server, TLD server, local DNS server, authoritative DNS server",
                "local DNS server, root DNS server, TLD server, authoritative DNS server",
                "None of the above",
              ],
              correct: 3,
              translation: "ما هو مسار استعلام DNS العودي؟",
              explanation: "local DNS, root, TLD, authoritative.",
            },
            {
              q: "Describe two advantages and two challenges of peer-to-peer application architecture.",
              options: [
                "advantages is sclapility and distribute the traffic (not to be on one server) challenges of peer-to-peer is security and the difference between the upload and download rates (upload rates i lower)",
              ],
              correct: 0,
              translation: "اذكر ميزتين وتحديين لبنية P2P.",
              explanation:
                "المزايا: قابلية التوسع، توزيع الحمل. التحديات: الأمان، اختلاف معدلات الرفع/التنزيل.",
            },
            {
              q: "Consider a sender can transmit at a rate of 1Mbps bits/sec in both directions. Suppose packets containing only control (e.g., ACK or handshaking or request) are 100 bits long. Consider the HTTP protocol, and suppose that the initial downloaded object contains 3 referenced objects from the same server. Suppose that each downloaded object is 100 Kbits long except the last one which has 200Kbits. Let RTT denotes the round trip time between the local host and the server containing the objects. Find with justification the total time needed to download the objects assuming parallel persistent HTTP.",
              options: [
                "3RTT + (3*100/10^6) + (100*10^3/10^6) + (100/10^6/3) + (200*10^3/10^6/3)",
              ],
              correct: 0,
              translation:
                "احسب الوقت الإجمالي لتنزيل الكائنات بافتراض HTTP المستمر المتوازي.",
              explanation: "المعادلة الرياضية المذكورة.",
            },
            {
              q: "Consider that there is a shared link of 1 Mb/s. In case of using TDM with 10 slots per frame and each slot 1000 bit, then the number of frames per second will be 100000.",
              options: ["True", "False"],
              correct: 1,
              translation: "عدد الإطارات في الثانية سيكون 100000.",
              explanation:
                "خطأ، سيكون 100 إطار في الثانية (1Mbps / (10*1000)).",
            },
            {
              q: "When the server side receives a command for a file transfer over the control connection (either to, or from, the remote host), the server side initiates a TCP data connection to the client side, then FTP sends exactly one file over the data connection, and then closes the data connection.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "خادم FTP يفتح اتصال بيانات TCP ويرسل ملفاً واحداً ثم يغلقه.",
              explanation: "صحيح.",
            },
            {
              q: "Because many firewalls are configured to block (most types of) UDP traffic, designers have increasingly chosen to run multimedia and real-time applications over TCP.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "لأن الجدران النارية تحظر UDP، يختار المصممون تشغيل الوسائط المتعددة عبر TCP.",
              explanation: "خطأ، عادة ما يفضلون UDP لتجنب تأخير TCP.",
            },
            {
              q: "Consider that there are two hosts (A & B) connected by 2 packet-switches and three links; every link has transmission rate of R bps. Consider that host (A) sends 4 packets to host (B) back-to-back; each packet has length of L bits. Let di and si, for i = 1, 2, 3, denote the length and the propagation speed respectively of link i starting from host(A). Ignore the processing delay and find with justification the time that the 4 packets take to reach Host (B) in case of one of the packet-switches uses store and forward and the other one uses cut-through.",
              options: ["2*(L/R) + ps1+ps2+ps3 + 3*(L/R)"],
              correct: 0,
              translation:
                "احسب الوقت الإجمالي للوصول في حالة تبديل التخزين والتوجيه مقابل القطع.",
              explanation: "2*(L/R) + ps1+ps2+ps3 + 3*(L/R)",
            },
          ],
        },
        {
          t: "MidTerm 2023 - Assessment",
          d: "IT351 Computer Networks (Summer 2023-2024)",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Other/MidTerm 2023 - Assessment - Networks.pdf",
          questions: [
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: [
                "Application layer",
                "Network layer",
                "Transport layer",
                "Session layer",
                "Physical layer",
              ],
              correct: 3,
              translation:
                "أي من الطبقات التالية لا تظهر في حزمة بروتوكولات الإنترنت؟",
              explanation: "طبقة الجلسة (Session layer).",
            },
            {
              q: "Which of the following statements is true?",
              options: [
                "Both the Internet and traditional telephone networks use packet-switching.",
                "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
                "In the Internet, packets from the same source always take the same path to reach destination.",
                "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي من العبارات التالية صحيحة؟",
              explanation:
                "الإنترنت يستخدم تبديل الحزم، وشبكات الهاتف التقليدية تستخدم تبديل الدوائر.",
            },
            {
              q: "Which of the following statements is true about circuit switching?",
              options: [
                "Resources are pre-allocated regardless of demand",
                "Packet transmission can use the full link bandwidth",
                "The path between a source and a destination is not fixed",
                "None of the above",
                "All of the above",
              ],
              correct: 0,
              translation: "أي من العبارات التالية صحيحة حول تبديل الدوائر؟",
              explanation: "يتم تخصيص الموارد مسبقاً.",
            },
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: [
                "HTTP version number",
                "Request method",
                "Status code",
                "URL",
                "None of the above",
              ],
              correct: 0,
              translation:
                "أي مما يلي موجود في كل من سطر طلب HTTP وسطر الحالة؟",
              explanation: "رقم إصدار HTTP.",
            },
            {
              q: "Which of the following statements about DNS is TRUE?",
              options: [
                "TLD servers store all the hostname to IP mappings of the Internet.",
                "Every Web server must have a canonical name.",
                "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
                "DNS server listens to TCP port 53.",
                "None of the above",
              ],
              correct: 2,
              translation: "أي من العبارات التالية حول DNS صحيحة؟",
              explanation: "قد يقدم خادم DNS المحلي أحياناً تعيينات قديمة.",
            },
            {
              q: "A packet switch receives a packet and determines the outbound link to which the packet should be forwarded. When the packet arrives, x bits of the currently-being-transmitted packet have been transmitted on this outbound link and n other packets are waiting to be transmitted. Packets are transmitted continuously in order of arrival. Suppose all packets are L bits and the link rate is R bps. What is the queuing delay?",
              options: [
                "nL / R",
                "L / R",
                "n(L - x) / R",
                "nL + (L - x) / R",
                "(nL + (L - x)) / R",
                "(nL + (x - L)) / R",
              ],
              correct: 4,
              translation: "ما هو تأخير الطابور في مبدل الحزم؟",
              explanation: "(nL + (L - x)) / R",
            },
            {
              q: "A TCP client sends a sequence of packets to a TCP server. Each packet is 1000 bytes and the link rate is 2 Mbps. The propagation delay between the client and server is 5 ms. Which of following is the best timeout value chosen by the TCP client?",
              options: ["7 ms", "9 ms", "11 ms", "14 ms", "16 ms"],
              correct: 3,
              translation: "ما هي أفضل قيمة مهلة (timeout) يختارها عميل TCP؟",
              explanation: "14 ms.",
            },
            {
              q: "Consider the following Python code snippet. Suppose no exception is raised when the above code snippet is executed, which of the following statements is TRUE? s1.bind('', 8080)) s2, addr = s1.accept()",
              options: [
                "s1 is a UDP socket",
                "Server uses s1 to transmit application data to client",
                "s2 listens to port 8080",
                "s2 listens to a random port number assigned by operation system",
                "None of the above",
              ],
              correct: 3,
              translation: "في كود بايثون المرفق، أي عبارة صحيحة؟",
              explanation: "s2 يستمع إلى رقم منفذ عشوائي.",
            },
            {
              q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen? You may assume that the application riding on UDP doesn't implement any reliability mechanisms.",
              options: [
                "UDP receiver fails to receive any packet from UDP sender.",
                "UDP receiver receives out-of-order packets from UDP sender.",
                "UDP receiver receives duplicate packets from UDP sender.",
                "Option 5UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي مما يلي لن يحدث أبداً في UDP؟",
              explanation:
                "قد يتلقى المستقبل حزماً تالفة ولا يكتشف أخطاء البتات.",
            },
            {
              q: "A browser requests to download index.html from a Web server. The HTTP response header received by the browser is shown below. Which of the following statements is TRUE?",
              options: [
                "In the HTTP request, browser has requested for a non-persistent connection.",
                "Suppose TCP header is 20 bytes, the length of the TCP segment containing the HTTP response is 1276 bytes.",
                "The index.html file received by the browser may have been corrupted during transmission.",
                "The Web server uses a cookie to keep the state information of the client.",
                "None of the above",
              ],
              correct: 1,
              translation:
                "أي من العبارات التالية صحيحة بناءً على استجابة HTTP؟",
              explanation: "طول مقطع TCP هو 1276 بايت.",
            },
            {
              q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
              options: ["1; 1", "N - 1; 1", "N - 1; N - 1", "N; 1", "N; N"],
              correct: 3,
              translation: "في بروتوكول Go-back-N، ما هو حجم المخازن المؤقتة؟",
              explanation: "N للمرسل و 1 للمستقبل.",
            },
            {
              q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. None of the packets shown in the following figure are corrupted packets. However, the third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
              options: [
                "12, 13, 14, 15",
                "13, 14, 0, 1",
                "13, 14, 15, 0",
                "13, 14, 20, 16",
                "None of the above",
              ],
              correct: 1,
              translation:
                "ما هي نافذة المرسل في بروتوكول Selective Repeat في الوقت t؟",
              explanation: "13, 14, 0, 1",
            },
            {
              q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Every data packet embeds a k-bit sequence number field (k is an constant unknown to you). Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
              options: ["0", "2", "3", "6", "10"],
              correct: 4,
              translation:
                "أي من أرقام التسلسل التالية لا يمكن أن يكون للحزمة التالية المرسلة؟",
              explanation: "10",
            },
            {
              q: "Consider the following pseudo-code for rdt 3.0 receiver. Here, seq is the expected sequence number (either 0 or 1) by the receiver. The meaning of the rest function calls and variables are the same as those in FSM diagram. We say that the receiver waits forever, if it is blocked at the while loop, waiting to receive a packet that will never arrive. We say that the sender loops forever, if it repeatedly retransmits the same packet over and over again. Which of the following statements is TRUE?",
              options: [
                "A single premature timeout is sufficient to cause the sender to loop forever.",
                "A single loss ACK packet is sufficient to cause the sender to loop forever.",
                "A single corrupted data packet is sufficient to cause the sender to loop forever.",
                "A single corrupted data packet is sufficient to cause the receiver to wait forever.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي من العبارات التالية صحيحة حول rdt 3.0؟",
              explanation:
                "حزمة بيانات تالفة واحدة كافية لجعل المستقبل ينتظر إلى الأبد.",
            },
            {
              q: "Suppose 5 data packets arrive at a TCP receiver. Each packet contains 10 bytes of application data. The sequence numbers of these 5 packets (shown in the order of arrival) are 50, 60, 90, 70 and 80 respectively. After receiving each packet, the TCP receiver sends an ACK packet. Suppose the first ACK packet has ACK number 60. What is the ACK number of the 3rd ACK packet?",
              options: ["70"],
              correct: 0,
              translation: "ما هو رقم ACK للحزمة الثالثة؟",
              explanation: "70",
            },
            {
              q: "What is the checksum (1's complement of the sum) of the following 3 bytes? 11110100 10010011 10011001",
              options: ["11011101"],
              correct: 0,
              translation: "ما هو المجموع المكمل للبايتات الثلاثة؟",
              explanation: "11011101",
            },
            {
              q: "The following diagram shows two hosts X and Y communicating over a channel using TCP. X and Y are sending data to each other. Each TCP segment contains 100 bytes of data. None of the segments shown in the figure are retransmitted, out-of-order or corrupted packets. The first segment received by X has the sequence number 100 and ACK number 150. What would be the sequence number (S) in the last segment received by Y?",
              options: ["200", "250"],
              correct: 1,
              translation:
                "ما هو رقم التسلسل (S) في آخر مقطع تم استلامه بواسطة Y؟",
              explanation: "250",
            },
            {
              q: "The following diagram shows two hosts X and Y communicating over a channel using TCP. X and Y are sending data to each other. Each TCP segment contains 100 bytes of data. None of the segments shown in the figure are retransmitted, out-of-order or corrupted packets. The first segment received by X has the sequence number 100 and ACK number 150. What would be the ACK number (A) in the last segment received by Y?",
              options: ["250", "200"],
              correct: 1,
              translation: "ما هو رقم ACK (A) في آخر مقطع تم استلامه بواسطة Y؟",
              explanation: "200",
            },
            {
              q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
              options: ["2000 bps", "500"],
              correct: 1,
              translation: "ما هي الإنتاجية (بالبت في الثانية) للإرسال؟",
              explanation: "500",
            },
            {
              q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining (i.e. the next HTTP request is sent after the response for the previous HTTP request is received). Assume HTTP header, TCP header and ACK packets are of negligible size, transmission channel is perfectly reliable, time to establish and close TCP connection can be ignored. Hong long (in milliseconds) does it take for the client to download the entire webpage from the Web server?",
              options: [".154", "304"],
              correct: 1,
              translation: "كم من الوقت يستغرق تحميل صفحة الويب؟",
              explanation: "304",
            },
          ],
        },
        {
          t: "MidTerm - Answers - Networks",
          d: "MidTerm Short Answer Questions",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Other/MidTerm - Answers - Networks.pdf",
          questions: [
            {
              q: "Why do Mail servers use SMTP handshaking in application layer although there is a TCP handshaking in the transport layer?",
              options: [
                "to check if the email sender is not blocked and ok to send and to check if the receiver mail is in the mail server",
              ],
              correct: 0,
              translation:
                "لماذا تستخدم خوادم البريد مصافحة SMTP في طبقة التطبيق رغم وجود مصافحة TCP في طبقة النقل؟",
              explanation:
                "للتحقق من أن المرسل غير محظور وأن بريد المستقبل موجود على خادم البريد.",
            },
            {
              q: "List the components of cookie technology.",
              options: [
                "1- cookie header in response message 2- cookie header in request message 3- cookie file in the user's end system 4- back-end database",
              ],
              correct: 0,
              translation: "اذكر مكونات تقنية الكوكيز.",
              explanation:
                "ترويسة Cookie في رسالة الاستجابة، ترويسة Cookie في رسالة الطلب، ملف Cookie في النظام الطرفي للمستخدم، وقاعدة بيانات خلفية.",
            },
            {
              q: "Which services can be granted and can't be granted by TCP when it uses flow control and congestion control? (Justify your answer)",
              options: [
                "TCP guarantees reliable delivery, flow control, and congestion control, but it does not guarantee security, delay/timing, or throughput.",
              ],
              correct: 0,
              translation:
                "ما الخدمات التي يضمنها TCP وما لا يضمنها عند استخدام التحكم في التدفق والازدحام؟",
              explanation:
                "TCP يضمن النقل الموثوق والتحكم في التدفق والازدحام، لكنه لا يضمن الأمان ولا التأخير ولا معدل النقل/الإنتاجية.",
            },
            {
              q: "Describe two advantages and two challenges of peer-to-peer application architecture.",
              options: [
                "Advantages: scalability and distributing the traffic/load. Challenges: security and motivating peers to contribute with others.",
              ],
              correct: 0,
              translation: "اذكر ميزتين وتحديين لبنية تطبيقات الند للند P2P.",
              explanation:
                "المزايا: قابلية التوسع وتوزيع الحمل. التحديات: الأمان وتحفيز الأقران على المشاركة.",
            },
            {
              q: "Consider an institution has an access line of 15 Mbps. The access line services 20 requests per second. Suppose that the average size of a request is 1 Mbits. Consider that the Internet delay is 2 sec; LAN delay is 50 msec. What is the average delay experienced by requests when using proxy server with hit rate = 20%? (justify your answer).",
              options: [
                "Traffic intensity on access link = (20 * 1*10^6 * 0.8) / 15*10^6 = 1.0667; since traffic intensity > 1, the delay is infinity (cannot determine a finite average delay).",
              ],
              correct: 0,
              translation:
                "ما متوسط التأخير الذي تختبره الطلبات عند استخدام خادم وكيل بنسبة إصابة 20%؟",
              explanation:
                "شدة المرور = (20 × 10^6 × 0.8) / 15×10^6 ≈ 1.0667 وهي أكبر من 1، لذلك التأخير لا نهائي/غير محدد.",
            },
            {
              q: "Why a Web cache is considered both a server and a client at the same time?",
              options: [
                "It sends requested objects to clients, so it acts like a server; and it requests pages from the origin server to cache them, so it acts as a client.",
              ],
              correct: 0,
              translation: "لماذا يعتبر Web cache خادمًا وعميلًا في نفس الوقت؟",
              explanation:
                "يرسل الكائنات المطلوبة إلى العملاء فيعمل كخادم، ويطلب الصفحات من الخادم الأصلي ليخزنها فيعمل كعميل.",
            },
            {
              q: "Consider that there are 20 servers, and 20 clients connected to the core of the computer network. Assume that there are 20 simultaneous downloads taking place, involving 20 client-server pairs. Suppose that these 20 downloads are the only traffic in the network at the current time. Consider that there is a common link with transmission rate of 5 Mbps in the core traversed by all 20 downloads. Suppose that every server access link has rate of 2 Mbps; every client access link has rate of 1 Mbps; the transmission rates of other links in the core except the one common link are much larger than 5 Mbps. What is the end-to-end throughput for each download? (Answer with justification).",
              options: [
                "It will be the smallest rate, which is (5/20) = 0.25 Mbps.",
              ],
              correct: 0,
              translation: "ما هي الإنتاجية من طرف إلى طرف لكل تنزيل؟",
              explanation:
                "الرابط المشترك 5 Mbps مقسوم على 20 تنزيلًا، فيكون لكل تنزيل 0.25 Mbps، وهو أصغر من معدلات روابط الخوادم والعملاء.",
            },
            {
              q: "Consider that there are two hosts (A & B) connected by 2 packet-switches and three links; every link has transmission rate of R bps. Consider that host (A) sends 4 packets to host (B) back-to-back; each packet has length of L bits. Let di and si, for i = 1, 2, 3, denote the length and the propagation speed respectively of link i starting from host(A). Ignore the processing delay and find with justification the time that the 4 packets take to reach Host (B) in case of one of the packet-switches uses store and forward and the other one uses cut-through.",
              options: [
                "L/R + d1/s1 + L/R + d2/s2 + d3/s3",
                "L/R + L/R + d1/s1 + L/R + d2/s2 + d3/s3",
                "2L/R + L/R + d1/s1 + L/R + d2/s2 + d3/s3",
                "3L/R + L/R + d1/s1 + L/R + d2/s2 + d3/s3",
              ],
              correct: 2,
              translation:
                "احسب الزمن الكلي لوصول 4 حزم في حالة استخدام أحد المبدلين store-and-forward والآخر cut-through.",
              explanation: "الزمن = 2L/R + L/R + d1/s1 + L/R + d2/s2 + d3/s3.",
            },
            {
              q: "Consider a sender can transmit at a rate of 1 Mbps bits/sec in both directions. Suppose packets containing only control (e.g., ACK or handshaking or request) are 100 bits long. Consider the HTTP protocol, and suppose that the initial downloaded object contains 3 referenced objects from the same server. Suppose that each downloaded object is 100 Kbits long except the last one which has 200 Kbits. Let RTT denotes the round trip time between the local host and the server containing the objects. Find with justification the total time needed to download the objects assuming parallel persistent HTTP.",
              options: [
                "3RTT + (3*100/10^6) + (100*10^3/10^6) + (100/10^6/3) + (200*10^3/10^6/3)",
              ],
              correct: 0,
              translation:
                "احسب الزمن الكلي اللازم لتنزيل الكائنات بافتراض HTTP المستمر المتوازي.",
              explanation:
                "المعادلة المطلوبة: 3RTT + (3×100)/10^6 + (100×10^3)/10^6 + (100/10^6)/3 + (200×10^3)/10^6/3.",
            },
          ],
        },
        {
          t: "Exam",
          d: "MidTerm Answers and Short Questions",
          pdf: "datenew/subjects/computer-networks/questions/Mid/Other/Exam.pdf",
          questions: [
            {
              q: "Can an HTTP response message contain an empty body? If yes, when can this happen?",
              options: [
                "Yes, if the requested object is recently modified.",
                "Yes, if the requested object has been moved to a new location.",
                "No, an HTTP response message can never have an empty body.",
                "Yes, if the requested object is very small in size.",
              ],
              correct: 0,
              translation:
                "هل يمكن أن تحتوي رسالة استجابة HTTP على جسم فارغ؟ إذا كان الجواب نعم، متى يمكن أن يحدث ذلك؟",
              explanation:
                "يمكن أن تحتوي استجابة HTTP على جسم فارغ في ظروف معينة، مثل عندما يكون الكائن المطلوب معدلاً مؤخرًا، أو إذا لم يكن هناك محتوى لإرجاعه (مثل رمز الحالة 204 No Content).",
            },
            {
              q: "Using Conditional GET in the HTTP Protocol, the number of RTT (Round Trip Time) is reduced if the object has not been modified since the date of the cached copy!",
              options: ["False", "True"],
              correct: 1,
              translation:
                "باستخدام Conditional GET في بروتوكول HTTP، يتم تقليل عدد RTT (وقت الذهاب والإياب) إذا لم يتم تعديل الكائن منذ تاريخ النسخة المخزنة مؤقتًا!",
              explanation:
                "يقلل استخدام Conditional GET من عدد RTTs عندما لا يتغير الكائن المخزن مؤقتًا، حيث سيعيد الخادم استجابة 304 Not Modified.",
            },
            {
              q: "Top-level domain (TLD) servers are an organization's own DNS servers, providing authoritative hostname to IP mappings for the organization's named hosts.",
              options: ["Yes", "No"],
              correct: 1,
              translation:
                "خوادم النطاق الأعلى (TLD) هي خوادم DNS الخاصة بالمؤسسة، وتوفر تعيينات اسم المضيف إلى IP الموثوقة لمضيفي المؤسسة المسمين.",
              explanation:
                "خوادم TLD ليست خاصة بأي مؤسسة واحدة. فهي تتعامل مع تحليل اسم النطاق الموثوق للنطاقات العليا مثل .com و .org، ولكن ليس لتعيينات المضيفين الداخلية للمؤسسة.",
            },
            {
              q: "How many sockets are there in a TCP server communicating with 13 clients concurrently?",
              options: [
                "13 sockets",
                "14 sockets",
                "1 socket",
                "None of the options",
              ],
              correct: 1,
              translation:
                "كم عدد المقابس (sockets) الموجودة في خادم TCP الذي يتواصل مع 13 عميلاً في نفس الوقت؟",
              explanation:
                "يستخدم الخادم مقبسًا واحدًا للاستماع إلى الاتصالات الواردة، ومقبسًا واحدًا لكل عميل من العملاء الـ 13، لذا يوجد 14 مقبسًا في المجموع.",
            },
            {
              q: "Which of the following statements about DNS is TRUE?",
              options: [
                "TLD servers store all the hostname-to-IP mappings of the Internet.",
                "DNS servers listen to TCP port 53.",
                "Every Web server must have a canonical name.",
                "The local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
              ],
              correct: 3,
              translation: "أي من العبارات التالية حول DNS صحيحة؟",
              explanation:
                "قد توفر خوادم DNS المحلية أحيانًا تعيينات قديمة بسبب البيانات المخزنة مؤقتًا.",
            },
            {
              q: "A source and a destination are separated by 300,000 kilometers and are connected by a direct link with a speed of 2 Kbps. The propagation speed over the link is 20,000 meters/second. The source sends 100 packets to the destination using RDT2.2. Each packet is 2 ×10^43 bits long. Suppose ACK packets are of negligible size and the transmission channel is error-free. What will be the transmission time?",
              options: [
                "5 seconds",
                "100 seconds",
                "It depends on the propagation delay",
                "Transmission time cannot be calculated",
              ],
              correct: 2,
              translation:
                "يفصل بين المصدر والوجهة مسافة 300,000 كيلومتر ويتم توصيلهما عبر رابط مباشر بسرعة 2 كيلوبت في الثانية. سرعة الانتشار عبر الرابط هي 20,000 متر/ثانية. يرسل المصدر 100 حزمة إلى الوجهة باستخدام RDT2.2. كل حزمة يبلغ طولها 2 × 10^43 بت. لنفترض أن حزم ACK ذات حجم ضئيل وأن قناة الإرسال خالية من الأخطاء. ما سيكون وقت الإرسال؟",
              explanation:
                "يتم حساب وقت الإرسال مع الأخذ في الاعتبار الوقت المستغرق لإرسال الحزم وتأخير الانتشار عبر المسافة. يجب دمج كلا العاملين.",
            },
            {
              q: "What happens if the packets are too small in size for HTTP or TCP protocols?",
              options: [
                "The packets are lost due to insufficient bandwidth.",
                "The network load increases due to an increased number of packets.",
                "The protocols automatically adjust the packet size.",
                "It has no impact on the network.",
              ],
              correct: 1,
              translation:
                "ماذا يحدث إذا كانت الحزم صغيرة جدًا بالنسبة لبروتوكولات HTTP أو TCP؟",
              explanation:
                "تؤدي الحزم الصغيرة إلى زيادة الحمل على الشبكة بسبب زيادة عدد الحزم.",
            },
          ],
        },
      ],
    },
  ],

  finalsCategories: [
    {
      category: "Dr. Ebram Kamal - Finals (Updated)",
      icon: "🎓",
      description: "Computer Networks final exams extracted from PDF files",
      items: [
        {
          t: "Final 2023 — Dr. Ebram (PDF)",
          d: "Final exam — 10/9/2023, 9:00-11:00, IT351, Assiut University",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Ebram/2023/Final 2023 Dr. Ebram.pdf",
          questions: [
            {
              q: "Which of the following is a valid subnet mask?",
              options: [
                "0.0.0.0",
                "127.0.0.1",
                "255.0.0.0",
                "255.244.0.0",
                "None of the above",
              ],
              correct: 2,
              translation: "أي مما يلي subnet mask صالح؟",
              explanation: "255.0.0.0 — قناع صحيح (1s متتالية ثم 0s).",
            },
            {
              q: "A browser requests to download index.html from a Web server. The HTTP response header received by the browser is shown below. Which of the following statements is TRUE? (Header: HTTP/1.1 200 OK, Set-Cookie: PHPSESSID=..., Content-Length: 1256)",
              options: [
                "In the HTTP request, browser has requested for a non-persistent connection.",
                "The Web server uses a cookie to keep the state information of the client.",
                "Suppose TCP header is 20 bytes, the length of the TCP segment containing the HTTP response is 1276 bytes.",
                "The index.html file received by the browser may have been corrupted during transmission.",
                "None of the above",
              ],
              correct: 1,
              translation: "بناءً على الهيدر، أي عبارة صحيحة؟",
              explanation: "Set-Cookie يعني السيرفر يستخدم الكوكيز.",
            },
            {
              q: "Which of the following is a public IP address?",
              options: [
                "10.10.10.10",
                "172.31.31.31",
                "172.17.17.17",
                "192.169.10.10",
                "None of the above",
              ],
              correct: 3,
              translation: "أي مما يلي عنوان IP عام؟",
              explanation:
                "192.169.10.10 — عناوين 10.x و 172.16-31.x و 192.168.x خاصة.",
            },
            {
              q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining. Hong long (in milliseconds) does it take?",
              options: ["204", "200", "304", "None of the above"],
              correct: 2,
              translation: "كم يستغرق تحميل الصفحة؟",
              explanation: "304 ms — 6 RTTs × 50ms = 300 + transmission ≈ 304.",
            },
            {
              q: "Which of the following statements is true?",
              options: [
                "Both the Internet and traditional telephone networks use packet-switching.",
                "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
                "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
                "In the Internet, packets from the same source always take the same path to reach destination.",
                "None of the above",
              ],
              correct: 2,
              translation: "أي عبارة صحيحة؟",
              explanation:
                "Internet = packet switching، الهاتف = circuit switching.",
            },
            {
              q: "Consider the following Python code snippet. Suppose no exception is raised when the above code snippet is executed, which of the following statements is TRUE? s1.bind(('', 8080)) ; s2, addr = s1.accept()",
              options: [
                "s1 is a UDP socket",
                "Server uses s1 to transmit application data to client",
                "s2 listens to a random port number assigned by operation system",
                "s2 listens to port 8080",
                "None of the above",
              ],
              correct: 3,
              translation: "بناءً على الكود، أي عبارة صحيحة؟",
              explanation: "s2 listens to port 8080.",
            },
            {
              q: "What is the checksum (1's complement of the sum) of the following 3 bytes? 11110100, 10010011, 10011001",
              options: [
                "111011101",
                "101101101",
                "11011101",
                "11001101",
                "11011100",
                "None of the above",
              ],
              correct: 2,
              translation: "ما هو الـ checksum للبايتات الثلاثة؟",
              explanation: "11011101.",
            },
            {
              q: "The following diagram shows two hosts X and Y communicating over a channel using TCP. X and Y are sending data to each other. Each TCP segment contains 100 bytes of data. None of the segments shown in the figure are retransmitted, out-of-order or corrupted packets. The first segment received by X has the sequence number 100 and ACK number 150. What would be the ACK number (A) in the last segment received by Y?",
              options: ["250", "100", "150", "50", "None of the above"],
              correct: 0,
              translation: "ما ACK number في آخر segment يصل لـ Y؟",
              explanation: "250 — بناءً على المخطط.",
            },
            {
              q: "Which of the following commands would NOT cause a DNS query to be generated?",
              options: [
                "dig a www.aun.edu.eg",
                "telnet www.example.org",
                "curl -I www.aun.edu.eg/fci/",
                "nslookup www.google.com",
              ],
              correct: 1,
              translation: "أي أمر لا يُولّد DNS query؟",
              explanation:
                "telnet — قد يستخدم IP مباشر. dig و nslookup متخصصان في DNS.",
            },
            {
              q: "There are many nodes in a shared medium network and most nodes are likely to transmit frequently. Which of the following multiple access protocol(s) is (are) suitable?",
              options: [
                "TDMA",
                "CSMA",
                "ALOHA",
                "Token passing",
                "FDMA",
                "All of the above",
                "None of the above",
              ],
              correct: 3,
              translation:
                "في شبكة medium مشترك فيها عقد كثيرة تنقل كثيراً، أي بروتوكول مناسب؟",
              explanation: "Token passing — مناسب للحمل العالي.",
            },
            {
              q: "A packet switch receives a packet and determines the outbound link to which the packet should be forwarded. When the packet arrives, x bits of the currently-being-transmitted packet have been transmitted on this outbound link and n other packets are waiting to be transmitted. Packets are transmitted continuously in order of arrival. Suppose all packets are L bits and the link rate is R bps. What is the queuing delay?",
              options: [
                "nL/R",
                "L/R",
                "n(L-x)/R",
                "nL +(L-x)/R",
                "(nL + (x-L))/R",
              ],
              correct: 3,
              translation: "ما هو تأخير الانتظار؟",
              explanation: "(nL + (L-x))/R.",
            },
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: [
                "Application layer",
                "Network layer",
                "Transport layer",
                "Session layer",
                "Physical layer",
              ],
              correct: 3,
              translation: "أي طبقة لا تظهر في Internet Protocol Stack؟",
              explanation: "Session layer.",
            },
            {
              q: "Which of the following statements is true about circuit switching?",
              options: [
                "Packet transmission can use the full link bandwidth",
                "The path between a source and a destination is not fixed",
                "None of the above",
                "All of the above",
              ],
              correct: 2,
              translation: "أي عبارة صحيحة عن circuit switching؟",
              explanation: "None of the above — الخيار الصحيح غير موجود.",
            },
            {
              q: "Which of the following statements about DHCP is FALSE?",
              options: [
                "DHCP is widely adopted in large networks where manual configuration is troublesome.",
                "DHCP server dynamically assigns an IP address to a host joining a network.",
                "DHCP can only allocate private IP addresses.",
                "DHCP server provides network configuration parameters such as subnet mask to host.",
                "DHCP messages are encapsulated in UDP segments.",
              ],
              correct: 2,
              translation: "أي عبارة عن DHCP خاطئة؟",
              explanation:
                "DHCP can only allocate private IP addresses — خاطئة، DHCP يخصص عناوين خاصة وعامة.",
            },
            {
              q: "Which of the following statements about DNS is TRUE?",
              options: [
                "TLD servers store all the hostname to IP mappings of the Internet.",
                "Every Web server must have a canonical name.",
                "DNS server listens to TCP port 53.",
                "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي عبارة عن DNS صحيحة؟",
              explanation: "Local DNS may provide out-of-date mapping.",
            },
            {
              q: "Consider the generator, G=1001, what is the CRC value R if data D = 11000111010?",
              options: ["110", "011", "101", "001", "111", "None of the above"],
              correct: 0,
              translation:
                "باستخدام G=1001، ما CRC R للبيانات D = 11000111010؟",
              explanation: "110.",
            },
            {
              q: "A TCP client sends a sequence of packets to a TCP server. Each packet is 1000 bytes and the link rate is 2 Mbps. The propagation delay between the client and server is 6 ms. Which of following is the best timeout value chosen by the TCP client?",
              options: ["7ms", "9ms", "11ms", "14ms", "18ms"],
              correct: 4,
              translation:
                "TCP client يرسل packets لـ server. كل packet 1000 بايت، link rate 2 Mbps، propagation 6ms. ما أفضل timeout؟",
              explanation:
                "18ms — RTT > 12ms، timeout يجب أن يكون أكبر من RTT.",
            },
            {
              q: "Consider a datagram network using 8-bit host addresses. Suppose a router uses longest prefix matching and has the following forwarding table. What is the number of destination host addresses that is associated with interface 3? (10→3, 1010→1, 110→2, otherwise→0)",
              options: ["40", "58", "48", "50", "128"],
              correct: 2,
              translation: "كم عنوان مرتبط بـ interface 3 (prefix 10)؟",
              explanation:
                "48 — prefix 10 يطابق 64 عنوان، نخصم 16 (prefix 1010) = 48.",
            },
            {
              q: "Suppose 5 data packets arrive at a TCP receiver. Each packet contains 10 bytes of application data. The sequence numbers of these 5 packets (shown in the order of arrival) are 50, 60, 90, 70 and 80 respectively. After receiving each packet, the TCP receiver sends an ACK packet. Suppose the first ACK packet has ACK number 60. What is the ACK number of the 3rd ACK packet?",
              options: ["60", "50", "90", "70", "80", "None of the above"],
              correct: 3,
              translation: "ما هو ACK number للـ 3rd ACK packet؟",
              explanation:
                "70 — بعد receipt 50 و 60، المتوقع = 70. الـ 3rd packet (seq 90) خارج الترتيب.",
            },
            {
              q: "An IP address block 192.168.108/19 can be further divided into X subnets, each supporting a maximum of Y hosts. Which of the following is NOT a valid assignment?",
              options: [
                "X = 4; Y = 2000",
                "X = 32; Y = 260",
                "X = 64; Y = 125",
                "X = 128; Y = 60",
                "X = 256; Y = 30",
              ],
              correct: 1,
              translation:
                "كتلة 192.168.108/19 يمكن تقسيمها لـ X subnet يدعم كل واحد Y hosts. أي تقسيم غير صالح؟",
              explanation: "X=32, Y=260 — غير صالح.",
            },
            {
              q: "The following diagram shows two hosts X and Y communicating over a channel using TCP. X and Y are sending data to each other. Each TCP segment contains 100 bytes of data. The first segment received by X has the sequence number 100 and ACK number 150. What would be the sequence number (S) in the last segment received by Y?",
              options: ["250", "200", "100", "150", "50", "None of the above"],
              correct: 1,
              translation: "ما seq number في آخر segment يصل لـ Y؟",
              explanation: "200 — بناءً على المخطط.",
            },
            {
              q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
              options: ["1,1", "N-1;1", "N;1"],
              correct: 2,
              translation: "في Go-back-N، ما أحجام المخازن لحجم نافذة N؟",
              explanation: "N; 1.",
            },
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: [
                "Request method",
                "Status code",
                "HTTP version number",
                "URL",
                "None of the above",
              ],
              correct: 2,
              translation:
                "أي مما يلي موجود في كل من HTTP request line و status line؟",
              explanation: "HTTP version number.",
            },
            {
              q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen? You may assume that the application riding on UDP doesn't implement any reliability mechanisms.",
              options: [
                "UDP receiver fails to receive any packet from UDP sender.",
                "UDP receiver receives duplicate packets from UDP sender.",
                "UDP receiver receives out-of-order packets from UDP sender.",
                "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي مما يلي لن يحدث أبداً في نقل UDP؟",
              explanation:
                "UDP receiver receives corrupted packets but fails to detect bit errors.",
            },
            {
              q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
              options: ["500", "550", "600", "450", "400", "None of the above"],
              correct: 0,
              translation: "ما هو معدل النقل (Throughput)؟",
              explanation: "500 bps.",
            },
          ],
        },
        {
          t: "Final 2025 — Dr. Ebram (PDF)",
          d: "Final exam — 28/12/2024, 12:00-2:00",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Ebram/2026/Final 2025 Dr. Ebram.pdf",
          questions: [
            {
              q: "1s complement is used as checksum in __________.",
              options: [
                "TCP and HTTP",
                "TCP but not UDP",
                "UDP but not TCP",
                "Both TCP and UDP",
              ],
              correct: 3,
              translation: "مكمل 1 يُستخدم كـ checksum في __________.",
              explanation: "Both TCP and UDP.",
            },
            {
              q: "FTP runs over UDP – need to ensure files are uploaded/downloaded intact;",
              options: ["True", "False"],
              correct: 1,
              translation: "FTP يعمل فوق UDP — لضمان رفع وتحميل الملفات سليمة.",
              explanation: "False — FTP يعمل فوق TCP.",
            },
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: [
                "URL",
                "HTTP version number",
                "Request method",
                "Status code",
              ],
              correct: 1,
              translation:
                "أي مما يلي موجود في كل من HTTP request line و status line؟",
              explanation: "HTTP version number.",
            },
            {
              q: "Host A sends 5 data packets to host B using TCP protocol. Each data packet contains 10 bytes of application data. Suppose 5 data packets arrive in order and all are accepted by B. The last ACK packet sent by B has ACK number 99. What is the sequence number of the first data packet sent by A?",
              options: ["58", "100", "99", "49"],
              correct: 3,
              translation: "ما هو seq number لأول packet أرسله A؟",
              explanation: "49.",
            },
            {
              q: "If the fragment offset in an IP header has a value of 100, it means that __________.",
              options: [
                "this IP datagram is 100 bytes in size",
                "this IP datagram is not a fragment",
                "this first byte of payload in the IP datagram is byte 100",
                "this first byte of payload in the IP datagram is byte 800",
              ],
              correct: 3,
              translation:
                "إذا كانت قيمة fragment offset = 100، فهذا يعني __________.",
              explanation:
                "byte 800 — fragment offset بوحدات 8 بايت، فـ 100*8 = 800.",
            },
            {
              q: "Suppose the propagation delay between furthest nodes is d and link rate is r. What is the minimal frame size L to ensure collision will always be detected in CSMA/CD protocol?",
              options: ["2 * d * r", "2 * d + r", "d + r", "2 * (d + r)"],
              correct: 0,
              translation:
                "ما أقل حجم frame L لضمان اكتشاف التصادم في CSMA/CD؟",
              explanation:
                "L = 2 * d * r — ضمان استمرار الإرسال لمدة RTT على الأقل.",
            },
            {
              q: "Which of the following protocols run at the application layer? i) SMTP ii) UDP iii) POP iv) DNS",
              options: [
                "(i) and (iv) only",
                "(i), (iii) and (iv) only",
                "(i), (ii) and (iv) only",
                "(i) and (iii) only",
              ],
              correct: 1,
              translation: "أي البروتوكولات تعمل في طبقة التطبيق؟",
              explanation:
                "(i), (iii), (iv) — SMTP, POP, DNS. UDP في طبقة النقل.",
            },
            {
              q: "What is the 1s complement of the sum of the following 2 bytes: 11011010 and 01100101?",
              options: ["00111110", "11000001", "01000000", "10111111"],
              correct: 3,
              translation: "ما هو مكمل 1 لمجموع البايتين؟",
              explanation:
                "10111111 — المجموع = 218+101 = 319، بعد wrap = 01000000، مكمل 1 = 10111111.",
            },
            {
              q: "In a subnet, the first IP address is 172.18.176.0 and the last IP address is 172.18.183.255. What is the length of network prefix of this subnet?",
              options: ["29", "28", "22", "21"],
              correct: 3,
              translation: "ما طول network prefix للـ subnet؟",
              explanation: "21 — 8*256 = 2048 = 2^11، prefix = 32-11 = 21.",
            },
            {
              q: "The access method for wireless LAN as defined by IEEE 802.11 is based on ______.",
              options: ["CSMA/CD", "Polling", "CSMA", "CSMA/CA"],
              correct: 3,
              translation:
                "طريقة الوصول للـ wireless LAN حسب IEEE 802.11 تعتمد على ______.",
              explanation: "CSMA/CA — Collision Avoidance.",
            },
            {
              q: "How many of the following IP addresses belong to the subnet 192.168.160.0/20? i) 192.168.15.1 ii) 192.168.177.254 iii) 192.188.168.230 iv) 192.168.169.31",
              options: ["0", "3", "1", "2"],
              correct: 2,
              translation: "كم عنوان ينتمي لـ subnet 192.168.160.0/20؟",
              explanation:
                "1 — فقط 192.168.169.31 (range: 192.168.160.0 - 192.168.175.255).",
            },
            {
              q: "The _______ layer of the Internet protocol stack is responsible for delivering data from sending process to receiving process.",
              options: ["application", "transport", "network", "link"],
              correct: 1,
              translation: "طبقة _______ مسؤولة عن التسليم من عملية لعملية.",
              explanation: "transport — process-to-process delivery.",
            },
            {
              q: "Which of the following is the Web's application layer protocol?",
              options: ["HTTP", "UDP", "TCP", "DHCP"],
              correct: 0,
              translation: "أي مما يلي بروتوكول طبقة التطبيق للويب؟",
              explanation: "HTTP.",
            },
            {
              q: "What does HTTP stand for?",
              options: [
                "Hypertext Translation Protocol",
                "Hypertext Transfer Protocol",
                "Hypertext Transition Protocol",
                "Hypertext Transmission Protocol",
              ],
              correct: 1,
              translation: "ماذا يعني HTTP؟",
              explanation: "Hypertext Transfer Protocol.",
            },
            {
              q: "The Internet protocol stack consists of _________ protocol layers.",
              options: ["7", "6", "4", "5"],
              correct: 3,
              translation: "Internet protocol stack يتكون من _________ طبقات.",
              explanation:
                "5 — Application, Transport, Network, Link, Physical.",
            },
            {
              q: "Which of the following is a VALID subnet mask?",
              options: [
                "224.0.0.0",
                "255.255.255.128",
                "255.254.0.1",
                "254.240.0.0",
              ],
              correct: 1,
              translation: "أي مما يلي subnet mask صالح؟",
              explanation: "255.255.255.128 — 1s متتالية ثم 0s.",
            },
            {
              q: "Which of the following statements regarding the Internet is TRUE?",
              options: [
                "A call setup is always performed before data transmission starts.",
                "The Internet is structured as a network of networks.",
                "The only access network technologies allowed are Ethernet and Wi-Fi.",
                "A packet passes through no more than two autonomous systems to reach destination host.",
              ],
              correct: 1,
              translation: "أي عبارة عن الإنترنت صحيحة؟",
              explanation:
                "The Internet is structured as a network of networks.",
            },
            {
              q: "The ________ field in IP header prevents an IP datagram from continuously wandering through the Internet.",
              options: [
                "upper layer protocol",
                "header checksum",
                "destination IP address",
                "TTL",
              ],
              correct: 3,
              translation:
                "حقل ________ في IP header يمنع تجوال datagram بلا حدود.",
              explanation: "TTL.",
            },
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: ["session", "transport", "application", "network"],
              correct: 0,
              translation: "أي طبقة لا تظهر في Internet Protocol Stack؟",
              explanation: "session.",
            },
            {
              q: "Two hosts A and B are 2000 km apart and are connected by a direct link of 200 kbps. Propagation speed on the link is 2.5 * 10^8 m/s. A is sending 10 packets to B continuously. Each packet is 100 bytes in size. Suppose the channel is error-free, how long (in seconds) does it take for B to receive all the packets?",
              options: [
                "0.084",
                "0.048 seconds",
                "0.008 seconds",
                "0.04 seconds",
              ],
              correct: 1,
              translation: "كم من الوقت يستغرقه B لاستلام جميع الحزم؟",
              explanation: "0.048s — 0.04 + 0.008.",
            },
            {
              q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
              options: [
                "Yes, if the requested object is recently modified.",
                "No, an HTTP response message can never have an empty body.",
                "Yes, if the requested object is very small in size.",
                "Yes, if the requested object has been moved to a new location.",
              ],
              correct: 3,
              translation:
                "هل يمكن أن تحتوي رسالة HTTP response على جسم فارغ؟ ومتى؟",
              explanation: "Yes, if moved to a new location (301/302).",
            },
            {
              q: "An IP datagram with destination address 192.168.1.10 reaches a router with the following 4 routing entries. Which entry will be used to forward this packet?",
              options: [
                "192.168.1.0/24",
                "192.168.8.0/22",
                "192.168.1.16/27",
                "192.168.0.0/23",
              ],
              correct: 0,
              translation:
                "أي entry سيُستخدم لتوجيه packet وجهته 192.168.1.10؟",
              explanation: "192.168.1.0/24 — longest prefix matching.",
            },
            {
              q: "Consider a datagram network using 8-bit IP addresses. Suppose a router uses longest prefix matching and has the following forwarding table. For interface 4, give the associated range of destination IP addresses and the number of destination IP addresses in that range.",
              options: [
                "1000 0000 – 1001 1111, 32",
                "0000 0000 – 0111 1111, 128",
                "1010 0000 – 1011 1111, 32",
                "1101 0000 – 1101 1111, 16",
              ],
              correct: 3,
              translation: "ما الـ range لـ interface 4 وعدد العناوين؟",
              explanation:
                "1101 0000 – 1101 1111, 16 — prefix /28 يطابق 16 عنوان.",
            },
            {
              q: "The ________ layer is responsible for moving datagrams from the source host to the destination host.",
              options: ["application", "link", "transport", "network"],
              correct: 3,
              translation:
                "طبقة ________ مسؤولة عن نقل datagrams من المصدر للوجهة.",
              explanation: "network — host-to-host delivery.",
            },
            {
              q: "Live video streaming often runs over TCP – fast; relatively stable throughput!",
              options: ["True", "False"],
              correct: 1,
              translation: "البث المباشر للفيديو يعمل غالباً فوق TCP.",
              explanation:
                "False — غالباً يستخدم UDP لتفادي تأخير إعادة الإرسال.",
            },
            {
              q: "Consider sending a sequence of packets from a host in Assiut University to another host in Assiut National University. Packets may be of different length but all go through the same route to the destination. Which of the following end-to-end delay component is a constant (i.e. doesn't vary from packet to packet)?",
              options: [
                "Processing delay",
                "Queueing delay",
                "Propagation delay",
                "Transmission delay",
              ],
              correct: 2,
              translation:
                "أي مكون من end-to-end delay ثابت لنفس المسار لكن packets بأطوال مختلفة؟",
              explanation: "Propagation delay — يعتمد على المسافة والسرعة فقط.",
            },
            {
              q: "Knowing that you have taken Computer Networks, a friend approaches you for help with his laptop. He says that he cannot access the Web page hosted at www.example.org. Using the tools you have learned in Computer Networks, you run the following commands on his laptop to troubleshoot what could be the reason.",
              options: [
                "You run telnet to check if www.example.org is listening on port 80.",
                "You run traceroute to check if there is a route from the laptop to www.example.org.",
                "You run ping to check if you can establish a TCP connection to www.example.org.",
                "You run dig to check if his DNS server is able to resolve the IP address of host name www.example.org.",
              ],
              correct: 3,
              translation:
                "صديق لا يستطيع الوصول لـ www.example.org. أي أمر تستخدمه؟",
              explanation: "dig — للتحقق من قدرة DNS على حل اسم المضيف.",
            },
            {
              q: "Which of the following best characterizes CSMA/CD protocol?",
              options: [
                "Listen to the channel before accessing it and continue listening to the channel while the transmission is in progress.",
                "Listen to the channel before accessing it.",
                "Send whenever there is data ready to send.",
                "Send whenever there is data and then listen to the channel for collision.",
              ],
              correct: 0,
              translation: "أي مما يلي يصف CSMA/CD بشكل أفضل؟",
              explanation:
                "Listen before AND continue listening during transmission.",
            },
            {
              q: "CSMA/CD is a (an) ___________ layer protocol.",
              options: ["transport", "application", "link", "network"],
              correct: 2,
              translation: "CSMA/CD هو بروتوكول طبقة ___________.",
              explanation: "link.",
            },
            {
              q: "For the following screenshot taken on a hand phone, what is the IP address of the hand phone in CIDR format?",
              options: [
                "117.91.224.0/22",
                "117.91.226.234/22",
                "117.91.224.1/22",
                "117.91.224.0/24",
              ],
              correct: 1,
              translation: "ما IP address للهاتف بالـ CIDR format؟",
              explanation: "117.91.226.234/22 — عنوان محدد للهاتف.",
            },
            {
              q: "A sender and a receiver communicate over an unreliable channel of the following characteristics: packets may be lost or delayed for arbitrarily long time but won't be corrupted or reordered. We would like to design a stop-and-wait, NAK-free protocol called rdt 4.0 to ensure reliable transmission. In rdt 4.0, sender keeps a timer for a sent but unacknowledged packet. When timer expires, sender deems the packet is lost and will retransmit it. You are to design other features of rdt 4.0 to make it a reliable protocol for the given scenario. Which of the following statements about your rdt 4.0 is TRUE?",
              options: [
                "Receiver must maintain a timer for the ACK sent. If no packet arrives before timer expires, receiver should retransmit the ACK.",
                "Sender must resend data packet if a duplicate ACK is received.",
                "Sender won't receive duplicate ACKs at all.",
                "Receiver must send ACKs for duplicate packets.",
              ],
              correct: 3,
              translation: "في تصميم rdt 4.0، أي عبارة صحيحة؟",
              explanation: "Receiver must send ACKs for duplicate packets.",
            },
            {
              q: "In a host that is sending data to the network, UDP receives data from the _______ layer and sends data to the _________ layer.",
              options: [
                "transport; network",
                "network; application",
                "application; network",
                "application; transport",
              ],
              correct: 2,
              translation:
                "في host يرسل بيانات، UDP يستقبل من طبقة _______ ويرسل لطبقة _______.",
              explanation: "application; network.",
            },
            {
              q: "Which of the following statement regarding TCP is TRUE?",
              options: [
                "If a TCP segment has sequence number m, then ACK for this segment must have acknowledgement number m + 1.",
                "Host A is sending a file to Host B over a TCP connection. If the sequence number of a TCP segment is m, then the sequence number of the subsequent segments must be greater than m.",
                "If a TCP segment has sequence number m, then ACK for this segment must have acknowledgement number m.",
                "TCP provides a connection-oriented service to its applications.",
              ],
              correct: 3,
              translation: "أي عبارة عن TCP صحيحة؟",
              explanation: "TCP provides a connection-oriented service.",
            },
            {
              q: "In circuit switching, circuit segment is idle if not used by call.",
              options: ["Agree", "Disagree"],
              correct: 0,
              translation:
                "في circuit switching، قطاع الدائرة خامل إذا لم يُستخدم.",
              explanation: "Agree.",
            },
            {
              q: "A host uses a variety of protocols to discover information about the network it is connected to. Which of the following statements is FALSE?",
              options: [
                "To perform a DNS lookup, a host must first discover the IP address of its local DNS server using DHCP.",
                "To send a packet outside the host's subnet, a host must first discover the IP address of the destination host using DNS.",
                "To get an IP address assigned, a host must first discover the IP address of its DHCP server using DNS.",
                "To send a packet outside the host's subnet, the host must first discover the IP address of its first-hop router using DHCP.",
              ],
              correct: 2,
              translation: "أي عبارة خاطئة؟",
              explanation: "DHCP يُكتشف عبر broadcast، ليس DNS.",
            },
            {
              q: "The first line in an HTTP request message is called the _________ line. The first line in an HTTP response message is called the _________ line.",
              options: [
                "status; status;",
                "request; status;",
                "request; header;",
                "request; response;",
              ],
              correct: 1,
              translation:
                "أول سطر في HTTP request message يسمى سطر _________. أول سطر في HTTP response message يسمى سطر _________.",
              explanation: "request; status.",
            },
            {
              q: "Is it necessary for an IP datagram to carry both the source and the destination IP addresses?",
              options: ["No", "Yes"],
              correct: 1,
              translation:
                "هل من الضروري أن يحمل IP datagram كلاً من عنوان المصدر والوجهة؟",
              explanation: "Yes — كلاهما ضروري للتوجيه والرد.",
            },
            {
              q: "Which of the following makes up the end-to-end delay?",
              options: [
                "processor delay, processing delay, queueing delay, transmission delay",
                "packing delay, propagation delay, receiving delay, transmission delay",
                "processing delay, propagation delay, queueing delaying, transmission delay",
                "routing delay, propagation delay, queueing delay, receiving delay",
              ],
              correct: 2,
              translation: "أي مما يلي يكوّن end-to-end delay؟",
              explanation: "processing, propagation, queueing, transmission.",
            },
            {
              q: "Which of the following fields is present in both UDP header and TCP header?",
              options: [
                "Checksum",
                "Destination IP address",
                "Acknowledgement number",
                "Sequence number",
              ],
              correct: 0,
              translation: "أي حقل موجود في كل من UDP header و TCP header؟",
              explanation: "Checksum — موجود في كلا البروتوكولين.",
            },
            {
              q: "The data value to be transmitted is 10100110 and the CRC generator is 11001. What is the CRC value computed?",
              options: ["1001", "0010", "0101", "1100"],
              correct: 3,
              translation:
                "بيانات 10100110 و CRC generator 11001. ما قيمة CRC؟",
              explanation: "1100.",
            },
            {
              q: "Ethernet provides an unreliable service. Therefore,",
              options: [
                "CRC is not used for error checking",
                "Ethernet drops a frame that fails error checking without retransmission",
                "Ethernet sends a negative acknowledgement to the sender to indicate packet loss.",
                "Ethernet does not function correctly when bit errors in frames are detected",
              ],
              correct: 1,
              translation: "Ethernet يقدم خدمة غير موثوقة. لذلك،",
              explanation: "Ethernet drops a frame without retransmission.",
            },
            {
              q: "Suppose there is a 10 Mbps microwave link between a geostationary satellite and its base station on Earth, which are 3.6 * 10^7 meters apart. The satellite takes a digital photo once in a while and then sends it to the base station. Assume a propagation speed of 2.4 * 10^8 meters/second. What is the propagation delay (in seconds) of the link? Suppose the satellite takes a photo every 24 seconds and let x denote the size of the photo. What is the minimum value of x (in bits) for the microwave link to be fully utilized?",
              options: [
                "The propagation delay is 0.15 seconds and the minimum value of x is 2.4 * 10^8.",
                "The propagation delay is 0.15 seconds and the minimum value of x is 0.024 * 10^8.",
                "The propagation delay is 1.5 seconds and the minimum value of x is 0.24 * 10^8.",
                "The propagation delay is 0.24 seconds and the minimum value of x is 3.6 * 10^8.",
              ],
              correct: 0,
              translation:
                "ما propagation delay للوصلة وما أقل x لاستغلال الوصلة بالكامل؟",
              explanation: "0.15s propagation, x = 2.4*10^8 bits.",
            },
            {
              q: "Which of the following statements regarding application layer protocol is FALSE?",
              options: [
                "One reason DNS queries use UDP instead of TCP is that the use of TCP incurs a longer delay.",
                "A browser can open only one TCP connection at a time.",
                "HTTP typically runs over TCP.",
                "Applications that have very strict time constraint but can tolerate packet loss should use UDP as the underlying transport protocol.",
              ],
              correct: 1,
              translation: "أي عبارة عن بروتوكولات طبقة التطبيق خاطئة؟",
              explanation:
                "A browser can open only one TCP connection at a time — خاطئة.",
            },
            {
              q: "Which of the following technique/mechanism is most essential in the design of reliable transmission protocols?",
              options: [
                "Addressing",
                "Layering",
                "Encapsulation",
                "Error detection",
              ],
              correct: 3,
              translation:
                "أي تقنية أساسية في تصميم بروتوكولات النقل الموثوقة؟",
              explanation: "Error detection.",
            },
            {
              q: "Which of the following statement about 2-dimensional parity bits is FALSE?",
              options: [
                "It can correct any two-bit error.",
                "It can correct any one-bit error.",
                "It can detect any one-bit error.",
                "It can detect any two-bit error.",
              ],
              correct: 0,
              translation: "أي عبارة عن 2D parity bits خاطئة؟",
              explanation:
                "It can correct any two-bit error — خاطئة، يكتشف خطأين لكن لا يصححهما.",
            },
            {
              q: "Ethernet uses a __________ physical address that is imprinted on the network interface card (NIC).",
              options: ["48-byte", "32-bit", "6-byte", "64-bit"],
              correct: 2,
              translation:
                "Ethernet يستخدم عنوان فيزيائي __________ مطبوع على NIC.",
              explanation: "6-byte — عنوان MAC هو 6 بايت (48 بت).",
            },
            {
              q: "The _______ layer is responsible for moving frames from one hop (node) to the next.",
              options: ["application", "transport", "network", "link"],
              correct: 3,
              translation: "طبقة _______ مسؤولة عن نقل frames من hop لـ hop.",
              explanation: "link — hop-to-hop delivery.",
            },
            {
              q: "Which of the following statements about TCP/UDP checksum are TRUE? i) It is used to detect packet lost and corruption. ii) It can correct any 1-bit error. iii) It is computed using 1's complement. iv) It is computed over application data only, exclusive of TCP/UDP header. v) It can detect any 1-bit error.",
              options: [
                "(iii) and (iv) only",
                "(i), (iv) and (v) only",
                "(iii) and (v) only",
                "(ii) and (iii) only",
              ],
              correct: 2,
              translation: "أي عبارات عن TCP/UDP checksum صحيحة؟",
              explanation: "(iii) and (v) only — مكمل 1 و يكتشف أي خطأ 1-bit.",
            },
            {
              q: "A huge file is transferred over an existing TCP connection (i.e., 3-way handshake is already done). The connection is still open after transmission. The first and last TCP segments have the sequence numbers 12,345 and 2,105 respectively. Each TCP segment carries 1,024 bytes of app data. How many TCP segments are used to transfer the file, assuming the communication channel is perfectly reliable?",
              options: ["4,194,303", "10", "4,194,295", "4,194,294"],
              correct: 2,
              translation: "كم segment استُخدم لنقل الملف؟",
              explanation:
                "4,194,295 — (N-1)*1024 = 2^32 - 10240, N = 2^22 - 10 + 1.",
            },
            {
              q: "In Non-persistent HTTP, the client closes the TCP connection after fetching one object (one pair of HTTP request and HTTP response)",
              options: ["False", "True"],
              correct: 1,
              translation:
                "في Non-persistent HTTP، العميل يغلق اتصال TCP بعد جلب كائن واحد.",
              explanation: "True.",
            },
          ],
        },
        {
          t: "Final 2026 — Dr. Ebram (PDF)",
          d: "Final exam — Computer Networks - Credit",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Ebram/2026/Final 2026 - Computer Networks - Credit - Dr. Ebram.pdf",
          questions: [
            {
              q: "In Go-back-N protocol, what are the size of the respective sender and receiver buffers required for a window size of N?",
              options: ["1; 1", "N – 1; 1", "N; N", "N; 1"],
              correct: 3,
              translation: "في Go-back-N، ما أحجام المخازن لحجم نافذة N؟",
              explanation: "N; 1.",
            },
            {
              q: "Assume a sender and a receiver connected via one packet-switch. The sender sends a message of size 24 KBytes using packets of length 1000 Bytes. The bit rates are 2 kbps and 5 kbps for the first and the second link, respectively. Using store and forward, what is the end-to-end delay (in seconds)? You may ignore the propagation delay!",
              options: ["16.8", "134.4", "124", "16800"],
              correct: 1,
              translation: "ما هو تأخير النهاية إلى النهاية؟",
              explanation: "134.4s — 96 + 38.4.",
            },
            {
              q: "Consider sending a 1500-byte IP datagram into a link that has an MTU of 500 bytes. Suppose that IP header is 20 bytes long. How many fragments will be generated?",
              options: ["3", "4", "5", "2"],
              correct: 1,
              translation:
                "إرسال IP datagram 1500 بايت عبر link بـ MTU 500. IP header 20 بايت. كم fragment؟",
              explanation:
                "4 — payload = 1480، كل fragment يحمل 480 (500-20). 1480/480 = 3.08 → 4.",
            },
            {
              q: "The following diagram shows a simple network topology with 4 nodes. The links in the diagram are labeled with the cost of each link. The nodes run distance vector routing protocol. The protocol has just started, at node X, what is the cost to node z?",
              options: ["6", "3", "5", "23"],
              correct: 1,
              translation:
                "في distance vector عند البدء، ما التكلفة من X إلى Z؟",
              explanation:
                "3 — عند البدء، X يعرف فقط تكلفة الروابط المباشرة لجيرانه.",
            },
            {
              q: "Router R3 received two datagrams, which router to deliver it to if the datagrams has a destination IP address 200.23.19.3 and 200.23.18.33?",
              options: ["R2, R1", "R2, R2", "R1, R1", "R1, R2"],
              correct: 3,
              translation:
                "Router R3 استلم datagramين بعناوين 200.23.19.3 و 200.23.18.33. لأي router يسلّم؟",
              explanation: "R1, R2 — بناءً على جدول التوجيه.",
            },
            {
              q: "Which of the following protocols can be used to get the mappings of IP address and MAC address of other nodes in a different subnet?",
              options: ["ARP", "DNS", "DHCP", "None of the options"],
              correct: 3,
              translation:
                "أي بروتوكول للحصول على mapping بين IP و MAC لعقد في subnet مختلف؟",
              explanation:
                "None of the options — ARP يعمل فقط داخل نفس الـ subnet.",
            },
            {
              q: "Consider the transmission between a UDP sender and a UDP receiver. Which of the following will never happen? You may assume that the application riding on UDP doesn't implement any reliability mechanisms.",
              options: [
                "UDP receiver fails to receive any packet from UDP sender.",
                "UDP receiver receives out-of-order packets from UDP sender.",
                "UDP receiver receives duplicate packets from UDP sender.",
                "UDP receiver receives corrupted packets from UDP sender but fails to detect bit errors.",
              ],
              correct: 3,
              translation: "أي مما يلي لن يحدث أبداً في نقل UDP؟",
              explanation:
                "UDP receiver receives corrupted packets but fails to detect bit errors.",
            },
            {
              q: "Can HTTP response message contains an empty body? If yes, When can this happen?",
              options: [
                "No, an HTTP response message can never have an empty body.",
                "Yes, if the requested object has been moved to a new location.",
                "Yes, if the requested object is recently modified.",
                "Yes, if the requested object is very small in size.",
              ],
              correct: 1,
              translation:
                "هل يمكن أن تحتوي رسالة HTTP response على جسم فارغ؟ ومتى؟",
              explanation: "Yes, if moved to a new location (301/302).",
            },
            {
              q: "Which of the following statements is true?",
              options: [
                "Both the Internet and traditional telephone networks use packet-switching.",
                "Performance metrics such as end-to-end delay and throughput can be guaranteed in the Internet, if TCP is chosen as the transport layer protocol.",
                "In the Internet, packets from the same source always take the same path to reach destination.",
                "The Internet uses packet switching and traditional telephone networks uses circuit switching.",
              ],
              correct: 3,
              translation: "أي عبارة صحيحة؟",
              explanation:
                "Internet = packet switching، الهاتف = circuit switching.",
            },
            {
              q: "Consider the following diagram, what is the destination MAC address in the frame transmitted from node A if node A is sending to node B?",
              options: [
                "74-29-9C-E8-FF-55",
                "E6-E9-00-17-BB-4B",
                "1A-23-F9-CD-06-9B",
                "49-BD-D2-C7-56-2A",
              ],
              correct: 0,
              translation: "ما destination MAC address في frame من A إلى B؟",
              explanation: "74-29-9C-E8-FF-55 — بناءً على المخطط.",
            },
            {
              q: "Which of the following is present in both HTTP request line and status line?",
              options: [
                "HTTP version number",
                "Request method",
                "Status code",
                "URL",
              ],
              correct: 0,
              translation:
                "أي مما يلي موجود في كل من HTTP request line و status line؟",
              explanation: "HTTP version number.",
            },
            {
              q: "Which of the following HTTP protocols does the given figure represent to fetch a web page with 2 reference objects?",
              options: [
                "Non-persistent HTTP.",
                "Persistent HTTP.",
                "Non-persistent HTTP with parallel connection.",
                "Persistent HTTP with pipelining.",
              ],
              correct: 3,
              translation: "أي بروتوكول HTTP يمثله المخطط؟",
              explanation: "Persistent HTTP with pipelining.",
            },
            {
              q: "Considering the operation of a learning switch and its forwarding table in the following figure. Which interface will the switch forward a frame transmitted from node D to node A?",
              options: ["1", "3", "4", "1, 2, 4"],
              correct: 3,
              translation:
                "في learning switch، أي interface سيُحيل frame من D إلى A؟",
              explanation: "1, 2, 4 — flooding (إذا A غير معروف في الـ table).",
            },
            {
              q: "Consider a 4-bit generator G with value 1001, what is the CRC checksum R if data D has the value 10001100001?",
              options: ["011", "100", "110", "0110"],
              correct: 2,
              translation:
                "باستخدام G=1001 (4-bit)، ما CRC checksum R للبيانات D=10001100001؟",
              explanation: "110.",
            },
            {
              q: "Given a subnet with network prefix 192.168.1.0/24, how many hosts can be connected to this subnet?",
              options: ["256", "255", "253", "254"],
              correct: 3,
              translation: "بـ subnet 192.168.1.0/24، كم host يمكن توصيله؟",
              explanation: "254 — 2^8 - 2.",
            },
            {
              q: "Which of the following statements is true about TCP and not true about UDP?",
              options: [
                "Provides timing service.",
                "Provides minimum throughput guarantee service.",
                "Provides security service.",
                "Provides reliable transport service.",
              ],
              correct: 3,
              translation: "أي عبارة صحيحة عن TCP وليست عن UDP؟",
              explanation: "Provides reliable transport service.",
            },
            {
              q: "Which of the following statements is true about circuit switching?",
              options: [
                "Resources are pre-allocated regardless of demand",
                "Packet transmission can use the full link bandwidth",
                "The path between a source and a destination is not fixed",
                "All of the options",
              ],
              correct: 0,
              translation: "أي عبارة صحيحة عن circuit switching؟",
              explanation: "Resources are pre-allocated regardless of demand.",
            },
            {
              q: "Which of the following layers doesn't appear in the Internet Protocol Stack?",
              options: [
                "Application layer",
                "Network layer",
                "Transport layer",
                "Session layer",
              ],
              correct: 3,
              translation: "أي طبقة لا تظهر في Internet Protocol Stack؟",
              explanation: "Session layer.",
            },
            {
              q: "Which of the following statements about DNS is TRUE?",
              options: [
                "TLD servers store all the hostname to IP mappings of the Internet.",
                "Every Web server must have a canonical name.",
                "Local DNS server sometimes may provide out-of-date hostname-to-IP-address mapping.",
                "DNS server listens to TCP port 53.",
              ],
              correct: 2,
              translation: "أي عبارة عن DNS صحيحة؟",
              explanation: "Local DNS may provide out-of-date mapping.",
            },
            {
              q: "Which of the following protocols can be used by routers for error signaling?",
              options: ["DHCP", "ICMP", "ARP", "NAT"],
              correct: 1,
              translation: "أي بروتوكول يستخدمه router للإشارة للأخطاء؟",
              explanation: "ICMP — Internet Control Message Protocol.",
            },
            {
              q: "A Web server stores a webpage that comprises a base HTML file and 2 images referenced by the base HTML file. The HTML file is 100 bytes and each image is 200 bytes. A client is connected to the Web server through a direct link of 1 Mbps. Propagation delay between the Web server and the client is 50 milliseconds. The client downloads the webpage using persistent HTTP but without pipelining. Hong long (in milliseconds) does it take?",
              options: ["404", "604", "204", "402.4"],
              correct: 0,
              translation: "كم يستغرق تحميل الصفحة؟",
              explanation: "404 ms.",
            },
            {
              q: "A source and a destination are separated by 3*10^5 kilometers and are connected by a direct link of 2 Kbps. The propagation speed over the link is 2*10^8 meters/second. The source sends 100 packets to the destination using RDT 2.2. Each packet is of 2*10^3 bits long. Suppose ACK packets are of negligible size and transmission channel is perfectly reliable. What is the throughput (in bps) of transmission?",
              options: ["200", "500", "100", "400"],
              correct: 1,
              translation: "ما هو معدل النقل (Throughput)؟",
              explanation: "500 bps.",
            },
            {
              q: "A Selective Repeat sender just receives an ACK packet with ACK number 7. This ACK number falls within sender window which has the window size 3. Every data packet embeds a k-bit sequence number field (k is an constant unknown to you). Which of the following definitely CANNOT be the sequence number of the next packet transmitted by the sender?",
              options: ["0", "2", "3", "6"],
              correct: 3,
              translation: "أي رقم لا يمكن أن يكون seq للحزمة التالية؟",
              explanation: "6.",
            },
            {
              q: "Consider a sender and a receiver communicating using Selective Repeat protocol. Every packet embeds a 4-bit sequence number field. Sender window size is 4. None of the packets shown in the following figure are corrupted packets. However, the third data packet and the second ACK packet are lost. What is the sender window over the sequence number space at time t?",
              options: [
                "12, 13, 14, 15",
                "13, 14, 0, 1",
                "13, 14, 15, 0",
                "13, 14, 15, 16",
              ],
              correct: 1,
              translation: "ما هي نافذة المرسل في الوقت t؟",
              explanation: "13, 14, 0, 1.",
            },
            {
              q: "The router in the following figure is a NAT enabled router, what is the source IP address when the router forwards a datagram transmitted from the host with IP address 172.26.184.3 to a server with IP address 128.119.40.186.",
              options: [
                "172.26.184.3",
                "128.119.40.186",
                "172.26.184.1",
                "137.132.228.5",
              ],
              correct: 3,
              translation:
                "router NAT-enabled، ما source IP عند توجيه datagram من host (172.26.184.3) لـ server (128.119.40.186)؟",
              explanation:
                "137.132.228.5 — NAT يبدل source IP بعنوان الـ WAN-side للـ router.",
            },
          ],
        },
      ],
    },

    {
      category: "Dr. Nago",
      icon: "👨‍🏫",
      description: "Computer Networks finals by Dr. Nago",
      items: [
        {
          t: "Final 2026 — Dr. Nago",
          d: "Final 2026 (Q8–Q48). Answer key solved manually: the PDF has no official key. Questions whose stem is missing in the PDF (26, 29, 30, 32, 34, 37, 40) are omitted.",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Nago/Final 2026 - Computer Networks - Dr. Nago.pdf",
          questions: [
            {
              q: "A NAT translation table typically maps:",
              options: [
                "Public IP address --> Private IP address only",
                "Public port number --> Private port number only",
                "(Private IP address, Private port number) <--> (Public IP address, Public port number)",
                "Private IP address --> Public IP address only",
                "Private port number --> Public port number only",
                "None of the above",
              ],
              correct: 2,
              translation: "جدول ترجمة NAT يربط عادةً:",
              explanation: "(IP خاص، منفذ خاص) ↔ (IP عام، منفذ عام).",
            },
            {
              q: 'Suppose that there is exactly one packet switch "X" between a sending host "A" and a receiving host "B". The transmission rate of the link between "A" and "X" as well as the link between "X" and "B" is R bps. Assume that the packet switch "X" uses cut-through. If the processing, queuing, and propagation delays are ignored, what is the total end-to-end delay to send a packet of length L bits from "A" to "B"?',
              options: [
                "Zero",
                "2L/R",
                "2R/L",
                "L/R",
                "R/L",
                "None of the above",
              ],
              correct: 3,
              translation:
                'لو يوجد سويتش واحد "X" بين المرسل A والمستقبل B ومعدل الرابطين R بت/ث، والسويتش يستخدم cut-through، وتم تجاهل تأخيرات المعالجة والطابور والانتشار، فما التأخير الكلي لإرسال حزمة طولها L بت؟',
              explanation:
                "مع cut-through لا ينتظر السويتش وصول الحزمة كاملة، فالتأخير = L/R.",
            },
            {
              q: "Which of the following statements correctly describe the advantages and disadvantages of switches and routers?",
              options: [
                "Switches always require manual configuration and cannot operate at full-duplex. Routers eliminate collisions and are faster because they process packets only up to link layer.",
                "Switches support hierarchical addressing and firewall protection. Routers are plug-and-play and eliminate collision.",
                "Switches are plug-and-play, do not offer any protection against broadcast storms, and the active topology of a switched network is restricted to spanning tree. Routers have a larger per-packet processing time than switches, support hierarchical addressing, but require configuration.",
                "There is no restriction on switched network topology. But the active topology of the network that uses routers is restricted to spanning tree.",
                "None of the above",
              ],
              correct: 2,
              translation:
                "أي العبارات التالية تصف بشكل صحيح مزايا وعيوب السويتشات والراوترات؟",
              explanation:
                "السويتش plug-and-play ومقيد بـ spanning tree، أما الراوتر فمعالجته أبطأ ويدعم العنونة الهرمية ويحتاج إعدادًا.",
            },
            {
              q: "Assume Host A sends five consecutive data segments to Host B using GBN, or TCP (no delayed ACK). The timeout values for all protocols are sufficiently long such that all five data segments and their corresponding ACKs can be received by both hosts before any timeout event, if not lost in the channel. Suppose the second ACK from host B is lost and no further losses or errors occur after that. In the end, all five data segments have been correctly received by Host B. Which of the following correctly describes the total segments sent by Host A and total ACKs sent by Host B?",
              options: [
                "Number of (GBN, TCP) Segments sent by A is (GBN 6, TCP 6); Number of ACKs sent by B is (GBN 5, TCP 5)",
                "Number of (GBN, TCP) Segments sent by A is (GBN 9, TCP 6); Number of ACKs sent by B is (GBN 7, TCP 5)",
                "Number of (GBN, TCP) Segments sent by A is (GBN 5, TCP 5); Number of ACKs sent by B is (GBN 6, TCP 6)",
                "Number of (GBN, TCP) Segments sent by A is (GBN 9, TCP 6); Number of ACKs sent by B is (GBN 5, TCP 5)",
                "Number of (GBN, TCP) Segments sent by A is (GBN 5, TCP 5); Number of ACKs sent by B is (GBN 5, TCP 5)",
                "Number of (GBN, TCP) Segments sent by A is (GBN 9, TCP 6); Number of ACKs sent by B is (GBN 8, TCP 5)",
                "Number of (GBN, TCP) Segments sent by A is (GBN 9, TCP 5); Number of ACKs sent by B is (GBN 8, TCP 5)",
                "None of the above",
              ],
              correct: 4,
              translation:
                "المضيف A يرسل خمسة قطاعات متتالية إلى B باستخدام GBN أو TCP (بدون delayed ACK). مهلات الانتظار طويلة بما يكفي لوصول كل القطاعات وإقراراتها قبل أي timeout. إذا فُقد الإقرار الثاني فقط، فما إجمالي القطاعات المرسلة من A وإجمالي الإقرارات المرسلة من B؟",
              explanation:
                "الإقرار التراكمي الثالث يغطي القطاع الثاني فلا توجد إعادة إرسال: 5 قطاعات و5 إقرارات في الحالتين. (العلامة في الـ PDF كانت الخيار 6 وهي غير صحيحة).",
            },
            {
              q: "Which of the following correctly describes the characteristics of switching fabrics inside a router?",
              options: [
                "Switching via memory and bus forwards multiple packets simultaneously.",
                "Switching via bus is faster than switching via interconnection network.",
                "Switching via bus forwards only one packet at a time, while switching via standard interconnection network can forward multiple packets in parallel unless they target the same output.",
                "Switching via memory forward packets without routing processor intervention.",
                "All of the above",
                "None of the above",
              ],
              correct: 2,
              translation:
                "أي مما يلي يصف بشكل صحيح خصائص هياكل التبديل (switching fabrics) داخل الراوتر؟",
              explanation:
                "الـ bus يمرر حزمة واحدة في كل مرة، أما interconnection network فتمرر عدة حزم بالتوازي ما لم تتجه لنفس المخرج.",
            },
            {
              q: "Which of the following best distinguishes forwarding from routing in the internet network layer?",
              options: [
                "Forwarding moves packets within a router; routing determines best end-to-end paths.",
                "Forwarding is network-wide; routing is router-local.",
                "Forwarding determines paths; routing moves packets between nodes on these paths.",
                "Forwarding is fixed; routing is dynamic.",
                "None of the above",
              ],
              correct: 0,
              translation:
                "أي مما يلي يميز forwarding عن routing في طبقة الشبكة بأفضل شكل؟",
              explanation:
                "forwarding ينقل الحزم داخل الراوتر، وrouting يحدد أفضل مسار من المصدر للوجهة.",
            },
            {
              q: "Why does a DHCP client initially send its discover message to 255.255.255.255?",
              options: [
                "Because the client does not yet know the IP address of DHCP server.",
                "Because the DHCP server only listens to broadcast messages with broadcast IPs.",
                "Because DHCP server does not know the IP address of the client.",
                "None of the above",
              ],
              correct: 0,
              translation:
                "لماذا يرسل عميل DHCP رسالة discover الأولى إلى 255.255.255.255؟",
              explanation:
                "لأن العميل لا يعرف عنوان IP الخاص بخادم DHCP بعد. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "Which of the following statements correctly describes circuit switching?",
              options: [
                "Circuit switching allows multiple users to share the same channel dynamically, providing high efficiency during idle periods, but it cannot guarantee bandwidth or delay.",
                "Circuit switching eliminates the need for a dedicated path, uses packet-based transmission, and is highly efficient, but it suffers from high delay during congestion.",
                "Circuit switching provides no dedicated resources, allows dynamic bandwidth allocation, and guarantees low delay, but is prone to packet loss.",
                "Circuit switching can provide a dedicated path with guaranteed bandwidth and low delay for the duration of the connection, but it can be inefficient if the circuit is idle, and call setup introduces additional delay.",
                "None of the above",
              ],
              correct: 3,
              translation:
                "أي العبارات التالية تصف تبديل الدوائر (circuit switching) بشكل صحيح؟",
              explanation:
                "يوفر مسارًا مخصصًا بعرض نطاق وتأخير مضمونين، لكنه غير فعال عند خمول الدائرة ويحتاج وقت إعداد.",
            },
            {
              q: "Which of the following is a disadvantage of TDM and FDM?",
              options: [
                "Collisions are frequent and unavoidable.",
                "Nodes must use random backoff algorithm.",
                "A master node is needed.",
                "A node is limited to use a fraction of the channel even if it is the only active node.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي مما يلي يُعد عيبًا في TDM و FDM؟",
              explanation:
                "العقدة محدودة بجزء من القناة حتى لو كانت هي العقدة النشطة الوحيدة.",
            },
            {
              q: "Which of the following correctly lists Cookie technology components in the Web?",
              options: [
                "A cookie header in the HTTP response; a cookie header in the HTTP request; a proxy cache that stores cookies; and a DNS database at the server.",
                "A cookie file in the HTTP response message; a cookie file in the HTTP request message; a cookie file stored on the user’s end system; and a back-end database at the Web site.",
                "A cookie header line in the HTTP response message; a cookie header line in the HTTP request message; a shared proxy cache managed by the ISP; and a back-end database at the Web site.",
                "A cookie header line in the HTTP response; a cookie header line in the HTTP request; a cookie file kept on the user’s end system and managed by the user’s browser; and a back-end database at the Web site.",
                "A cookie header line in the HTTP response; a cookie header line in the HTTP request; a cookie file kept on the user’s end system; and a back-end DNS database at the server.",
                "None of the above",
              ],
              correct: 3,
              translation:
                "أي مما يلي يسرد مكونات تقنية الكوكيز (Cookies) في الويب بشكل صحيح؟",
              explanation:
                "سطر cookie في الاستجابة، وسطر cookie في الطلب، وملف كوكيز على جهاز المستخدم يديره المتصفح، وقاعدة بيانات خلفية في الموقع.",
            },
            {
              q: "Which of the following correctly describes DNS servers?",
              options: [
                "Root servers store all DNS records; TLD servers map hostnames; authoritative servers are connected directly to local servers, which are connected to local users.",
                "Root servers provide the IP addresses of TLD servers; TLD servers provide the IP addresses of authoritative servers; authoritative servers maintain host-to-IP mappings; and local servers are connected to local users.",
                "Root servers map hostnames for TLD servers; TLD servers map hostnames for authoritative servers; and authoritative servers provide IP addresses of local servers.",
                "Root servers maintain host-to-IP mappings of TLD servers; TLD servers maintain host-to-IP mappings of authoritative servers; authoritative servers maintain host-to-IP mappings of local servers; and local servers maintain host-to-IP mappings of local users.",
                "None of the above",
              ],
              correct: 1,
              translation: "أي مما يلي يصف خوادم DNS بشكل صحيح؟",
              explanation:
                "خوادم root تعطي عناوين TLD، وTLD تعطي عناوين authoritative، وauthoritative تحتفظ بربط الاسم بـ IP.",
            },
            {
              q: "A client retrieves a web page consisting of one base HTML file and two embedded objects, all stored on the same web server. The size of the HTML file and each embedded object is 100 Kbits. The round-trip time between the client and the server is 50 ms, and the data transmission rate is 10 Mbps. The client uses persistent HTTP with pipelining. Assume that the transmission time of control packets (TCP three-way handshake, HTTP requests, and acknowledgments) is negligible. What is the minimum time required for the client to completely receive the entire web page?",
              options: [
                "80 ms",
                "130 ms",
                "150 ms",
                "180 ms",
                "200 ms",
                "230 ms",
                "330 ms",
                "None of the above",
              ],
              correct: 3,
              translation:
                "عميل يحمّل صفحة من ملف HTML أساسي وكائنين مضمنين، حجم كل منها 100 كيلوبت، وRTT = 50 ms ومعدل النقل 10 Mbps، ويستخدم HTTP مستمر مع pipelining. ما أقل زمن لاستلام الصفحة كاملة؟",
              explanation:
                "1 RTT للمصافحة + (1 RTT + 10 ms) للـ HTML + (1 RTT + 20 ms) للكائنين = 150 + 30 = 180 ms.",
            },
            {
              q: "In BitTorrent, why does a peer request the rarest chunk first from its neighbors?",
              options: [
                "To maximize the peer’s individual download speed by selecting chunks that arrive fastest.",
                "To prioritize sending chunks to peers that upload the fastest to others.",
                "To give priority to chunks uploaded directly from the original server.",
                "To force peers to remain in the torrent until everyone finishes.",
                "To ensure that the rarest chunks are more quickly redistributed and are obtained early before the peers that own them leave the torrent.",
                "None of the above",
              ],
              correct: 4,
              translation:
                "في BitTorrent، لماذا يطلب النظير الجزء الأندر (rarest chunk) أولًا من جيرانه؟",
              explanation:
                "لضمان سرعة إعادة توزيع الأجزاء النادرة والحصول عليها مبكرًا قبل مغادرة النظراء الذين يملكونها.",
            },
            {
              q: "In TCP, if the receiver window is zero, what can the sender do?",
              options: [
                "Stop sending segments until the receiver advertises a nonzero window",
                "Continue to send segments with one data byte until the receiver advertises a nonzero window",
                "Continue sending normal segment size",
                "Ask the receiver to increase its window size",
                "None of the above",
              ],
              correct: 1,
              translation:
                "في TCP، إذا كانت نافذة المستقبل تساوي صفرًا، فماذا يفعل المرسل؟",
              explanation:
                "يستمر في إرسال قطاعات بحجم بايت واحد حتى يعلن المستقبل عن نافذة غير صفرية. (العلامة في الـ PDF كانت الخيار 1).",
            },
            {
              q: "A host “X” on Subnet 1 wants to send a datagram to a host “Y” on Subnet 2. Which MAC address will the ARP module in host “X” request if it does not already have it?",
              options: [
                "The MAC address of the host “Y” interface",
                "The MAC address of the last-hop router interface on Subnet 2",
                "The MAC address of the first-hop router interface on Subnet 1",
                "None of the above",
              ],
              correct: 2,
              translation:
                "المضيف X في الشبكة الفرعية 1 يريد إرسال داتاجرام إلى المضيف Y في الشبكة الفرعية 2. أي عنوان MAC سيطلبه ARP في X إن لم يكن لديه؟",
              explanation:
                "عنوان MAC لواجهة أول راوتر (الـ gateway) في الشبكة الفرعية 1. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "Which of the following statements about FTP is correct?",
              options: [
                "FTP uses a single TCP connection for both control and data.",
                "The FTP control connection is persistent, but a new data connection is created for each file.",
                "FTP data connection remains open throughout the session.",
                "Both FTP control connection and data connection remain open throughout the session.",
                "None of the above",
              ],
              correct: 1,
              translation: "أي العبارات التالية عن FTP صحيحة؟",
              explanation:
                "اتصال التحكم مستمر طوال الجلسة، ويُنشأ اتصال بيانات جديد لكل ملف.",
            },
            {
              q: "Which of the following best explains HTTP and SMTP?",
              options: [
                "HTTP connection can be persistent or non-persistent; SMTP connection is persistent.",
                "SMTP sends each object in a separate response message; HTTP sends all objects in one message.",
                "SMTP and HTTP require 7-bit ASCII encoding.",
                "HTTP is push protocol; SMTP is pull protocol.",
                "All of the above",
                "None of the above",
              ],
              correct: 0,
              translation: "أي مما يلي يشرح HTTP و SMTP بأفضل شكل؟",
              explanation:
                "HTTP قد يكون مستمرًا أو غير مستمر، أما SMTP فاتصاله مستمر.",
            },
            {
              q: "Consider that a switch has the following forwarding table: MAC address 62-FE-F7-11-89-A3 is associated with interface 1, and MAC address 7C-BA-B2-B4-91-10 is associated with interface 3. A frame with source MAC address AA-BB-CC-DD-EE-FF arrives at interface 2 and has destination MAC address 11-22-33-44-55-66. What action does the switch take?",
              options: [
                "The switch broadcasts the frame to all interfaces except interface 2 and adds a new entry to the forwarding table that associates the MAC address AA-BB-CC-DD-EE-FF with interface 2.",
                "The switch drops the frame (Filtering).",
                "The switch forwards the frame only to interface 2.",
                "The switch broadcasts the frame to all interfaces except interface 2 and adds a new entry to the forwarding table that associates the MAC address 11-22-33-44-55-66 with interface 2.",
                "The switch forwards the frame only to interface 2 and adds a new entry to the forwarding table that associates the MAC address 11-22-33-44-55-66 with interface 2.",
                "None of the above",
              ],
              correct: 0,
              translation:
                "سويتش جدول تحويله يحتوي عنوانين معروفين. وصل إطار على الواجهة 2 عنوان مصدره AA-BB-CC-DD-EE-FF ووجهته 11-22-33-44-55-66. ماذا يفعل السويتش؟",
              explanation:
                "الوجهة غير معروفة فيبث (flood) الإطار على كل الواجهات عدا 2، ويتعلم عنوان المصدر ويربطه بالواجهة 2. (العلامة في الـ PDF كانت الخيار 4).",
            },
            {
              q: "Which of the following is a key difference between TCP and UDP from the transport layer services perspective?",
              options: [
                "TCP provides de-multiplexing; UDP does not.",
                "TCP provides reliable, connection-oriented service; UDP provides unreliable, connectionless service.",
                "UDP guarantees timing and throughput; TCP does not.",
                "UDP guarantees timing and throughput; TCP guarantees reliability and security.",
                "None of the above",
              ],
              correct: 1,
              translation:
                "أي مما يلي فرق رئيسي بين TCP و UDP من منظور خدمات طبقة النقل؟",
              explanation:
                "TCP موثوق وموجه بالاتصال، أما UDP فغير موثوق وبدون اتصال.",
            },
            {
              q: "A router interconnects three subnets (A, B, and C), all using addresses from 192.168.10.0/24, where Subnet A requires at least 100 interfaces, Subnet B requires at least 50 interfaces, and Subnet C requires at least 20 interfaces. Which of the following sets of subnet network addresses satisfies all these constraints if oversized subnets are allowed?",
              options: [
                "Subnet A uses 192.168.10.0/26, Subnet B uses 192.168.10.64/25, and Subnet C uses 192.168.10.192/28.",
                "Subnet A uses 192.168.10.0/25, Subnet B uses 192.168.10.128/26, and Subnet C uses 192.168.10.192/26.",
                "Subnet A uses 192.168.10.0/25, Subnet B uses 192.168.10.64/26, and Subnet C uses 192.168.10.128/27.",
                "Subnet A uses 192.168.10.0/26, Subnet B uses 192.168.10.64/26, and Subnet C uses 192.168.10.128/27.",
                "None of the above",
              ],
              correct: 1,
              translation:
                "راوتر يربط ثلاث شبكات فرعية (A و B و C) من 192.168.10.0/24، الشبكة A تحتاج 100 واجهة على الأقل، و B تحتاج 50، و C تحتاج 20. أي مجموعة عناوين تحقق الشروط (مسموح بشبكات أكبر من اللازم)؟",
              explanation:
                "A: /25 (126 مضيف)، B: /26 (62)، C: /26 (62) بدون تداخل. الخيار 3 فيه تداخل بين A و B. (العلامة في الـ PDF كانت الخيار 3).",
            },
            {
              q: "Consider the GBN protocol with a sender window size of 4 and a sequence number range of 1,024. Suppose that at time t, the next in-order packet that the receiver is expecting has a sequence number of k. Assume that the medium does not reorder messages. Which of the following is possible set of sequence numbers inside the sender’s window at time t?",
              options: [
                "{k,k+1,k+2,k+3}",
                "{k-1,k,k+1,k+2}",
                "{k-2,k-1,k,k+1}",
                "{k-3,k-2,k-1,k}",
                "{k-4,k-3,k-2,k-1}",
                "All of the above",
                "None of the above",
              ],
              correct: 5,
              translation:
                "في بروتوكول GBN بحجم نافذة مرسل 4 ومدى أرقام تسلسل 1024، لو كان المستقبل ينتظر الحزمة k عند الزمن t، فأي مجموعة أرقام ممكنة داخل نافذة المرسل؟",
              explanation:
                "كل الاحتمالات ممكنة حسب عدد الإقرارات الضائعة أو المتأخرة. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "An IP datagram of 3000 bytes (no options header) is transmitted over a link with an MTU of 1500 bytes. Which of the following option is correct?",
              options: [
                "Number of Fragments = 3; Frag#1: Offset=0, MF=1; Frag#2: Offset=1500, MF=1; Frag#3: Offset=3000, MF=0",
                "Number of Fragments = 2; Frag#1: Offset=0, MF=1; Frag#2: Offset=185, MF=0",
                "Number of Fragments = 3; Frag#1: Offset=0, MF=0; Frag#2: Offset=1480, MF=0; Frag#3: Offset=2960, MF=1",
                "Number of Fragments = 2; Frag#1: Offset=0, MF=1; Frag#2: Offset=1500, MF=0",
                "Number of Fragments = 3; Frag#1: Offset=0, MF=1; Frag#2: Offset=185, MF=1; Frag#3: Offset=370, MF=0",
                "Number of Fragments = 2; Frag#1: Offset=0, MF=0; Frag#2: Offset=1500, MF=1",
                "None of the above",
              ],
              correct: 4,
              translation:
                "داتاجرام IP حجمه 3000 بايت (بدون خيارات) يُرسل عبر رابط MTU فيه 1500 بايت. أي خيار صحيح؟",
              explanation:
                "البيانات 2980 بايت، وكل جزء يحمل 1480 بايت: 3 أجزاء بإزاحات 0 و185 و370 وقيم MF = 1 و1 و0.",
            },
            {
              q: "Consider TCP receiver waits for the segment with sequence number 1000. The sender sends two segments back-to-back with sequence numbers: 1000 contains 500 bytes, 1500 contains 500 bytes. If the first segment is lost and the second arrives, the receiver sends:",
              options: [
                "ACK 1000",
                "ACK 1500",
                "ACK 2000",
                "ACK 2500",
                "None of the above",
              ],
              correct: 0,
              translation:
                "مستقبل TCP ينتظر القطاع ذا رقم التسلسل 1000. أرسل المرسل قطاعين متتاليين: 1000 (500 بايت) و1500 (500 بايت). إذا فُقد الأول ووصل الثاني، فإن المستقبل يرسل:",
              explanation:
                "ACK 1000 (إقرار مكرر) لأنه لا يزال ينتظر البايت 1000. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "Which of the following is NOT true about RIP?",
              options: [
                "RIP counts the number of subnets traversed along the shortest path from source router to destination subnet including the destination subnet.",
                "The maximum cost of a path is limited to 15.",
                "Routing updates are exchanged between neighbors approximately every 30 seconds using RIP response message.",
                "RIP requires each node to first obtain a complete map of the network before running the algorithm.",
                "None of the above",
              ],
              correct: 3,
              translation: "أي مما يلي ليس صحيحًا بخصوص RIP؟",
              explanation:
                "RIP يعتمد على distance vector ولا يحتاج خريطة كاملة للشبكة (هذا خاص بـ link-state).",
            },
            {
              q: "A mail server runs an SMTP service on port 25. At a given time, the server has three active SMTP connections, all destined for port 25, established by three different clients. Which of the following is used to deliver incoming segments to the correct connection?",
              options: [
                "Matching only the destination IP address and destination port number",
                "Matching only the source IP address and source port number",
                "Matching only the source IP address and destination port number",
                "Matching only the source port number and destination IP address",
                "Matching the source IP address, source port number, destination IP address, and destination port number",
                "None of the above",
              ],
              correct: 4,
              translation:
                "خادم بريد يشغّل SMTP على المنفذ 25 ولديه ثلاثة اتصالات نشطة من ثلاثة عملاء. ما الذي يُستخدم لتسليم القطاعات للاتصال الصحيح؟",
              explanation:
                "يعتمد TCP على الأربعية: IP المصدر، منفذ المصدر، IP الوجهة، منفذ الوجهة.",
            },
            {
              q: "Which of the following is correct?",
              options: [
                "IMAP provides commands to allow users to create folders and move messages from one folder to another.",
                "IMAP provides commands that allow users to search remote folders for messages matching specific criteria.",
                "Unlike POP3, an IMAP server maintains state information across IMAP sessions.",
                "IMAP has commands that permit a user agent to obtain components of messages.",
                "All of the above",
                "None of the above",
              ],
              correct: 4,
              translation: "أي مما يلي صحيح؟",
              explanation: "كل ما سبق صحيح عن IMAP.",
            },
            {
              q: "Three nodes X, Y, and Z share a common broadcast channel and use CSMA/CD. Node X starts transmitting at 0 ms, Nodes Y and Z attempt to transmit at 2 ms and 3 ms, respectively. The propagation delays between X–Y, Y–Z, and X–Z are 1 ms, 1 ms, and 2 ms, respectively. Assume the packet transmission time is 4 ms. Which statement is correct?",
              options: [
                "Node Y postpones transmission, node Z postpones transmission, and no collision occurs.",
                "Node Y transmits at 2 ms, node Z transmits at 3 ms, and a collision occurs.",
                "Node Y postpones transmission, node Z transmits at 3 ms, and no collision occurs.",
                "Node Y transmits at 2 ms, node Z postpones transmission, and a collision occurs.",
                "None of the above",
              ],
              correct: 0,
              translation:
                "ثلاث عقد X و Y و Z تتشارك قناة بث وتستخدم CSMA/CD. X تبدأ الإرسال عند 0 ms، و Y عند 2 ms، و Z عند 3 ms. تأخيرات الانتشار X–Y = 1 ms و Y–Z = 1 ms و X–Z = 2 ms، وزمن إرسال الحزمة 4 ms. أي عبارة صحيحة؟",
              explanation:
                "إشارة X تصل Y عند 1 ms و Z عند 2 ms، فكلتاهما تجد القناة مشغولة وتؤجل الإرسال ولا يحدث تصادم. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "Which of the following is NOT a challenge of P2P application architecture?",
              options: [
                "Security due to the distributed and open nature",
                "Incentivizing users to share bandwidth, storage, and computation",
                "ISP friendliness and asymmetrical bandwidth usage",
                "Infrastructure-intensive requirements such as data centers",
                "All of the above",
                "None of the above",
              ],
              correct: 3,
              translation: "أي مما يلي ليس تحديًا في معمارية تطبيقات P2P؟",
              explanation:
                "الاحتياج لبنية تحتية ضخمة مثل مراكز البيانات هو سمة client-server وليس تحديًا لـ P2P. (العلامة في الـ PDF كانت الخيار 3).",
            },
            {
              q: "Which of the following statements correctly describes ISP network structures?",
              options: [
                "Network Structure#1 consists of multiple global ISPs, and Network Structure#3 extends the hierarchy by adding IXPs networks.",
                "Network Structure#1 is based on dial-up access, Network Structure#2 is based on DSL access, Network Structure#3 uses cable networks, Network Structure#4 uses FTTH, and Network Structure#5 is entirely wireless.",
                "Network Structure#2 introduces multiple global transit ISPs, Network Structure#3 introduces multiple competing regional ISPs, and Network Structure#5 allows large content provider networks to connect directly to access ISPs.",
                "Network Structure#3 adds peering links through Internet Exchange Points, and Network Structure#4 allows content provider networks to connect directly to access ISPs.",
                "None of the above",
              ],
              correct: 2,
              translation: "أي العبارات التالية تصف هياكل شبكات ISP بشكل صحيح؟",
              explanation:
                "الهيكل 2 يضيف عدة ISPs عالمية، والهيكل 3 يضيف ISPs إقليمية متنافسة، والهيكل 5 يسمح لشبكات مزودي المحتوى بالاتصال المباشر. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "Which of the following is a characteristic of P2P file distribution?",
              options: [
                "Distribution time increases linearly with the number of peers",
                "The server must send a complete copy of the file to each peer.",
                "Distribution is self-scalable due to peers acting as redistributors.",
                "More secure than client-server distribution.",
                "None of the above",
              ],
              correct: 2,
              translation: "أي مما يلي من خصائص توزيع الملفات في P2P؟",
              explanation: "قابل للتوسع ذاتيًا لأن النظراء يعيدون توزيع الملف.",
            },
            {
              q: "Which statement correctly compares HFC, FTTH, DSL, and Dial-Up?",
              options: [
                "DSL and Dial-Up are shared, while HFC and FTTH are dedicated",
                "HFC and Dial-Up are dedicated, while DSL and FTTH are shared",
                "HFC is shared, DSL is dedicated, Point-to-Point (Direct) FTTH is dedicated, while Dial-Up is dedicated and has the lowest rate",
                "DSL and HFC are shared, while Dial-up and FTTH are dedicated",
                "None of the above",
              ],
              correct: 2,
              translation:
                "أي عبارة تقارن HFC و FTTH و DSL و Dial-Up بشكل صحيح؟",
              explanation:
                "HFC مشترك، و DSL مخصص، و FTTH المباشر مخصص، و Dial-Up مخصص وأقل معدل.",
            },
            {
              q: "Consider router D, which is a neighbor of routers A and B. Router D has an existing path to subnet Z via router B with a hop count of 7 from D to Z. Later, router D receives a routing advertisement from router A indicating that subnet Z is 6 hops away from router A. In this case, classic RIP, which keeps the existing path unless the new one is better, will:",
              options: [
                "Keep the existing path.",
                "Update the routing table to route via router A instead of router B.",
                "Cause a count-to-infinity problem.",
                "Cause an oscillation problem.",
                "None of the above",
              ],
              correct: 0,
              translation:
                "الراوتر D جار للراوترين A و B ولديه مسار إلى الشبكة Z عبر B بعدد قفزات 7. ثم وصله إعلان من A بأن Z تبعد 6 قفزات عنه. في RIP التقليدي الذي يُبقي المسار الحالي ما لم يكن الجديد أفضل:",
              explanation:
                "المسار عبر A = 6 + 1 = 7 قفزات وهو مساوٍ للحالي وليس أفضل، فيُبقي المسار الحالي. (العلامة في الـ PDF كانت الخيار 3).",
            },
            {
              q: "Which of the following is correct about IP and MAC addresses?",
              options: [
                "MAC address allows communication across different subnets, while IP address is used within a LAN.",
                "IP address is used to identify interfaces on the same LAN, while MAC address is used globally.",
                "Unlike IP address, MAC address enables device to receive frames at the link layer without the host being interrupted by irrelevant frames.",
                "IP address has flat structure while MAC address has hierarchical structure.",
                "All of the above",
                "None of the above",
              ],
              correct: 2,
              translation: "أي مما يلي صحيح بخصوص عناوين IP و MAC؟",
              explanation:
                "عنوان MAC يتيح للمحول استقبال الإطارات المناسبة فقط دون إزعاج المضيف. باقي الخيارات معكوسة. (العلامة في الـ PDF كانت الخيار 2).",
            },
            {
              q: "IPv6/IPv4 Node A wants to send data to IPv6/IPv4 Node B through an IPv4-only router. Which statement is TRUE for Tunneling Scenario?",
              options: [
                "Node A drops the datagram.",
                "Node B must downgrade to IPv4.",
                "Node A automatically converts IPv6 headers to IPv4 headers.",
                "Node A encapsulates the IPv6 datagram inside an IPv4 datagram.",
                "None of the above",
              ],
              correct: 3,
              translation:
                "العقدة A (IPv6/IPv4) تريد إرسال بيانات إلى العقدة B (IPv6/IPv4) عبر راوتر IPv4 فقط. أي عبارة صحيحة في سيناريو النفق (Tunneling)؟",
              explanation: "العقدة A تغلف داتاجرام IPv6 داخل داتاجرام IPv4.",
            },
          ],
        },
        {
          t: "Final General — Dr. Nago",
          d: "Final General (Q8–Q48). Answers follow the yellow highlights in the PDF. Figure-based questions have a `figure` field.",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Nago/Final.pdf",
          questions: [
            {
              q: "Which statement is correct about Distance Vector routing?",
              options: [
                "Nodes have to calculate the costs to only direct neighbouring nodes",
                "Nodes have to calculate the costs to all the nodes in the network",
                "None of the above",
              ],
              correct: 0,
              translation: "أي عبارة صحيحة عن توجيه Distance Vector؟",
              explanation: "العقد تحسب التكاليف للجيران المباشرين فقط.",
            },
            {
              q: "Suppose there are M paths between the server and the client. No two paths share a link. Path k (k = 1, ..., M) consists of N links with transmission rates R₁ᵏ, R₂ᵏ, ..., Rₙᵏ. The server can use all M paths to send data. The maximum throughput that the server can achieve is:",
              options: [
                "min{R₁¹, R₂¹, ..., Rₙ¹}",
                "max{R₁¹, R₂¹, ..., Rₙ¹}",
                "Σ (k = 1 to M) min{R₁ᵏ, R₂ᵏ, ..., Rₙᵏ}",
                "max of the per-path bottleneck rates: max{min(R₁¹,...,Rₙ¹), min(R₁²,...,Rₙ²), ..., min(R₁ᴹ,...,Rₙᴹ)}",
                "Σ (k = 1 to M) max{R₁ᵏ, R₂ᵏ, ..., Rₙᵏ}",
                "min of the per-path maximum rates: min{max(R₁¹,...,Rₙ¹), max(R₁²,...,Rₙ²), ..., max(R₁ᴹ,...,Rₙᴹ)}",
                "None of the above",
              ],
              correct: 2,
              translation:
                "يوجد M مسارًا بين الخادم والعميل ولا يشترك مساران في رابط. المسار k يتكون من N رابطًا بمعدلات R₁ᵏ ... Rₙᵏ. يستطيع الخادم استخدام كل المسارات. أقصى إنتاجية ممكنة هي:",
              explanation:
                "مجموع عنق الزجاجة (أصغر معدل) لكل مسار: Σ min{...}.",
            },
            {
              q: "To perform load distribution, when clients make a DNS query for a name mapped to a set of addresses, the server responds with the entire set of IP addresses, but rotates the ordering of the addresses within each reply.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "لتوزيع الحمل، عندما يستعلم العملاء عن اسم مرتبط بمجموعة عناوين، يرد الخادم بكامل المجموعة لكن يدوّر ترتيب العناوين في كل رد.",
              explanation: "صحيح (DNS round robin).",
            },
            {
              q: "Suppose that the TCP receiver computes the internet checksum for the received TCP segment and finds that it matches the value carried in the checksum field. Accordingly, the receiver should be certain that no bit errors have occurred.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "إذا حسب مستقبل TCP الـ checksum للقطاع المستلم ووجده مطابقًا للقيمة المحمولة، فيجب أن يكون متأكدًا من عدم حدوث أخطاء بتات.",
              explanation: "خطأ، التطابق لا يضمن غياب الأخطاء.",
            },
            {
              q: "The following figure represents correct operation of the GBN protocol for the case of a window size of 4 packets. Consider that there is no problem that the protocol starts the operation by sending from pkt0.\n\n(انظر إلى السؤال رقم 12 في ملف الامتحان بالأعلى 👆)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "الشكل التالي يمثل التشغيل الصحيح لبروتوكول GBN بحجم نافذة 4 حزم، مع بدء الإرسال من pkt0.",
              explanation:
                "صحيح: ضياع pkt2 يؤدي لتجاهل الحزم غير المرتبة ثم timeout وإعادة إرسال من pkt2.",
              figure: "assets/final-general-q12-gbn.png",
            },
            {
              q: "A switch is a plug-and-play device that builds its table automatically. For each incoming frame received on an interface, the switch stores: (1) the MAC address in the frame destination address field, (2) the interface from which the frame arrived, and (3) the current time.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "السويتش جهاز plug-and-play يبني جدوله تلقائيًا. لكل إطار وارد يخزن: (1) عنوان MAC في حقل عنوان الوجهة، (2) الواجهة التي وصل منها، (3) الوقت الحالي.",
              explanation: "خطأ، يخزن عنوان MAC المصدر (source) وليس الوجهة.",
            },
            {
              q: "An ISP has been allocated the address block 200.23.16.0/23 and wants to divide this block into 4 equal-sized contiguous address blocks. The following are correct block addresses: 200.23.16.0/25; 200.23.16.128/25; 200.23.17.0/25; 200.23.17.128/25.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "حُجزت لمزود خدمة الكتلة 200.23.16.0/23 ويريد تقسيمها إلى 4 كتل متساوية متجاورة. العناوين التالية صحيحة: 200.23.16.0/25 ؛ 200.23.16.128/25 ؛ 200.23.17.0/25 ؛ 200.23.17.128/25.",
              explanation: "صحيح، /23 مقسمة إلى أربع كتل /25.",
            },
            {
              q: "Suppose the following network and consider the RIP protocol. Suppose the following figure shows the routing table for router 'D'... If router 'D' receives from router 'A' the advertisement... Then router 'D' will update its routing table, as shown in the following figure. Is the illustrated update correct?\n\n(انظر إلى السؤال رقم 15 في ملف الامتحان بالأعلى 👆)",
              options: ["True", "False"],
              correct: 1,
              translation:
                "لنفترض أن الشبكة وجداول التوجيه في الشكل تستخدم RIP. يعرض الشكل جدول الراوتر D وإعلانًا استلمه من A والجدول المحدّث الناتج. هل التحديث المعروض صحيح؟",
              explanation: "خطأ.",
              figure: "assets/final-general-q15-rip-tables.png",
            },
            {
              q: "In circuit switching, link transmission is shared on a packet-by-packet basis among only users who have packets that need to be transmitted over the link.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في تبديل الدوائر، تُشارك سعة الرابط على أساس حزمة بحزمة بين المستخدمين الذين لديهم حزم للإرسال فقط.",
              explanation: "خطأ، هذا وصف packet switching.",
            },
            {
              q: "The following figure represents correct operation of the TCP protocol.\n\n(انظر إلى السؤال رقم 17 في ملف الامتحان بالأعلى 👆)",
              options: ["True", "False"],
              correct: 0,
              translation: "الشكل التالي يمثل التشغيل الصحيح لبروتوكول TCP.",
              explanation: "صحيح.",
              figure: "assets/final-general-q17-tcp-diagram.png",
            },
            {
              q: "If an IPv4 datagram of 5000 bytes is fragmented to fit an MTU of 1500 bytes, then:",
              options: [
                "There will be 3 fragments with offsets 0, 185, 370 respectively",
                "There will be 4 fragments with offsets 0, 1480, 2960, 4440 respectively",
                "There will be 4 fragments with offsets 0, 185, 370, 555 respectively",
                "There will be 3 fragments with flags 1, 1, 0 respectively",
                "There will be 4 fragments with flags 0, 0, 0, 1 respectively",
                "None of the above",
              ],
              correct: 2,
              translation:
                "إذا قُسّم داتاجرام IPv4 حجمه 5000 بايت ليلائم MTU قدره 1500 بايت، فإن:",
              explanation:
                "البيانات 4980 بايت، كل جزء 1480: 4 أجزاء بإزاحات 0 و185 و370 و555.",
            },
            {
              q: "Consider two hosts, “A” and “B”, separated by router S, and suppose that the ARP table of host A is empty. If host A needs to send a frame to host B, it acquires the MAC address for the interface of host B and sends its IP datagram encapsulated in a frame whose destination MAC is that of node B, which responds to the ARP query.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "مضيفان A و B يفصل بينهما الراوتر S، وجدول ARP للمضيف A فارغ. إذا أراد A إرسال إطار إلى B فإنه يحصل على عنوان MAC لواجهة B ويرسل الداتاجرام في إطار وجهته MAC الخاص بـ B الذي يرد على استعلام ARP.",
              explanation:
                "خطأ، A يطلب MAC الخاص بواجهة الراوتر (gateway) وليس B.",
            },
            {
              q: "The following FSM for rdt3 sender side is working in a correct and good way to premature (early) timeout.\n\n(انظر إلى السؤال رقم 20 في ملف الامتحان بالأعلى 👆)",
              options: ["True", "False"],
              correct: 1,
              translation:
                "آلة الحالات (FSM) التالية لجانب المرسل في rdt3 تعمل بشكل صحيح لمنع الـ timeout المبكر.",
              explanation: "خطأ.",
              figure: "assets/final-general-q20-rdt3-fsm.png",
            },
            {
              q: "In NAT, a router must replace the Source IP address and Source Port number of every outgoing datagram with the NAT IP address and a new port number. It also replaces the NAT IP address and new port number in the destination fields of every incoming datagram with the corresponding Source IP address and Port number stored in the NAT table.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في NAT يستبدل الراوتر عنوان IP المصدر ورقم المنفذ المصدر لكل داتاجرام صادر بعنوان NAT IP ورقم منفذ جديد، ويستبدل في كل داتاجرام وارد عنوان NAT IP والمنفذ الجديد في حقول الوجهة بالعنوان والمنفذ الأصليين المخزنين في جدول NAT.",
              explanation: "صحيح.",
            },
            {
              q: "Consider the following forwarding table in the router. Prefix matches: 11001000 00010111 00010 → interface 0; 11001000 00010111 00011000 → interface 1; 11001000 00010111 00001111 → interface 2; otherwise → interface 3. The destination address is 11001000 00010111 00011000 10101010. Which link interface will be used?\n\n(انظر إلى السؤال رقم 22 في ملف الامتحان بالأعلى 👆)",
              options: [
                "Link Interface 0",
                "Link Interface 1",
                "Link Interface 2",
                "Link Interface 3",
                "None of the above",
              ],
              correct: 1,
              translation:
                "جدول التحويل في الراوتر مبني على مطابقة البادئة (prefix) كما في السؤال. العنوان الوجهة هو 11001000 00010111 00011000 10101010. أي واجهة ستُستخدم؟",
              explanation:
                "العنوان يطابق البادئة 11001000 00010111 00011000 فيذهب إلى Link Interface 1.",
              figure: "assets/final-general-q22-forwarding-table.png",
            },
            {
              q: "A transport-layer segment includes a source port number to be used for demultiplexing in the case of TCP and UDP.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "يتضمن قطاع طبقة النقل رقم منفذ المصدر ليُستخدم في فصل البيانات (demultiplexing) في حالتي TCP و UDP.",
              explanation: "خطأ حسب مفتاح الـ PDF.",
            },
            {
              q: "Consider the network and link costs shown in the figure. Using Dijkstra’s shortest-path algorithm from node z, the resulting shortest-path computation is as shown in the table. Is the result correct?\n\n(انظر إلى السؤال رقم 24 في ملف الامتحان بالأعلى 👆)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "لاحظ الشبكة وتكاليف الروابط في الشكل. باستخدام خوارزمية Dijkstra لأقصر مسار من العقدة z، تظهر نتيجة الحساب في الجدول. هل النتيجة صحيحة؟",
              explanation: "صحيح.",
              figure: "assets/final-general-q24-dijkstra.png",
            },
            {
              q: "DHCP discover, DHCP offer, and DHCP request messages between clients and servers on the same subnet are all broadcast and sent using UDP. But the DHCP ACK message is sent unicast to the client.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "رسائل DHCP discover و offer و request بين العملاء والخوادم في نفس الشبكة الفرعية كلها بث وتُرسل عبر UDP، أما رسالة DHCP ACK فتُرسل unicast إلى العميل.",
              explanation: "خطأ، رسالة ACK أيضًا تُرسل بالبث.",
            },
            {
              q: "A packet switch receives a packet and determines the outbound link to which it should be forwarded. When the packet arrives, one other packet is 75% done being transmitted on this outbound link and 5 other packets are waiting to be transmitted. Packets are transmitted in order of arrival. Suppose all packets are 1200 bytes and the link rate is 2 Mbps. The queuing delay of a packet will be approximately 25.2 ms.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يستقبل سويتش حزمة ويحدد رابط الإخراج. عند وصولها تكون حزمة أخرى أنجزت 75% من إرسالها على هذا الرابط وتنتظر 5 حزم أخرى. كل الحزم 1200 بايت ومعدل الرابط 2 Mbps. تأخير الطابور للحزمة تقريبًا 25.2 ms.",
              explanation:
                "صحيح: زمن الحزمة 4.8 ms، المتبقي 25% = 1.2 ms، و5 حزم = 24 ms، المجموع 25.2 ms.",
            },
            {
              q: "UDP has fine application-level control over when data is sent because, as soon as an application process passes data to UDP, UDP packages the data inside a UDP segment and immediately passes the segment to the network layer.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يوفر UDP تحكمًا دقيقًا على مستوى التطبيق في وقت إرسال البيانات لأنه فور تمرير العملية للبيانات يغلفها في قطاع UDP ويمرره فورًا إلى طبقة الشبكة.",
              explanation: "صحيح.",
            },
            {
              q: "A web server runs in Host C on port 80 and uses persistent connections. It is currently receiving requests with the same source port number from two different hosts, A and B. Then all requests will be sent through the same socket at Host C.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "خادم ويب على المضيف C منفذ 80 ويستخدم اتصالات مستمرة، ويستقبل طلبات بنفس رقم منفذ المصدر من مضيفين مختلفين A و B. إذن ستمر كل الطلبات عبر نفس المقبس (socket) في C.",
              explanation:
                "خطأ، المقبس يُحدد بعنوان IP المصدر أيضًا فيكون لكل اتصال socket مختلف.",
            },
            {
              q: "Throughout a session, the FTP server must maintain state about the user: it associates the control connection with a specific user account and tracks the user’s current directory. HTTP, on the other hand, is stateless because it does not keep track of any user state.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "طوال الجلسة يجب أن يحتفظ خادم FTP بحالة المستخدم (يربط اتصال التحكم بحساب محدد ويتتبع الدليل الحالي)، بينما HTTP عديم الحالة لأنه لا يتتبع حالة المستخدم.",
              explanation: "صحيح.",
            },
            {
              q: "If a proxy server does not have the object requested by the browser, it directly opens a TCP connection with the server name in the Host header of the HTTP request received from the browser. If it has the object, it sends it directly to the browser.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "إذا لم يكن لدى الخادم الوكيل (proxy) الكائن المطلوب من المتصفح فإنه يفتح مباشرة اتصال TCP مع الخادم المذكور في ترويسة Host، وإذا كان لديه الكائن يرسله مباشرة للمتصفح.",
              explanation: "خطأ حسب مفتاح الـ PDF.",
            },
            {
              q: "TDMA has the following characteristic if M nodes share a link of rate R bps:",
              options: [
                "When only one node has data to send, it can send at rate R bps.",
                "When M nodes have data to send, each can send with a rate of R/M.",
                "It allows some collisions at low load.",
                "It uses a master node that selects each of the nodes in a round-robin fashion.",
                "None of the above",
              ],
              correct: 1,
              translation:
                "يتميز TDMA بالخاصية التالية إذا تقاسمت M عقدة رابطًا معدله R بت/ث:",
              explanation:
                "عندما تملك M عقد بيانات للإرسال، تُرسل كل منها بمعدل R/M.",
            },
            {
              q: "Unlike POP3, IMAP provides commands to allow users to create folders and move messages from one folder to another. Also, unlike POP3, an IMAP server maintains state information across IMAP sessions.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "على عكس POP3، يوفر IMAP أوامر لإنشاء المجلدات ونقل الرسائل بينها، وخادم IMAP يحتفظ بمعلومات الحالة عبر الجلسات.",
              explanation: "صحيح.",
            },
            {
              q: "Suppose the client decides to close the TCP connection. The client TCP sends a special TCP segment with the FIN bit set to 1 to the server process. When the server receives this segment, it immediately sends its own shut-down segment with the FIN bit set to 1.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "إذا قرر العميل إغلاق اتصال TCP، يرسل قطاعًا بـ FIN = 1 إلى الخادم. عندما يستلمه الخادم يرسل فورًا قطاع الإغلاق الخاص به بـ FIN = 1.",
              explanation: "خطأ حسب مفتاح الـ PDF: يرسل أولًا ACK ثم FIN.",
            },
            {
              q: "In the unusual case that HTTP is configured to use back-to-back UDP instead of TCP, a browser requests a base HTML object from a server. The HTML file references 3 objects, each located on that server. Let RTT be the round-trip time between the host and server. Ignoring transmission delay, how long does it take from clicking the link until receiving the complete webpage?",
              options: [
                "RTT",
                "2RTT",
                "3RTT",
                "4RTT",
                "5RTT",
                "6RTT",
                "8RTT",
                "None of the above",
              ],
              correct: 1,
              translation:
                "في حالة نادرة يُضبط فيها HTTP على UDP بدلًا من TCP، يطلب المتصفح ملف HTML أساسيًا من خادم، ويشير الملف إلى 3 كائنات على نفس الخادم. إذا تجاهلنا زمن الإرسال، فكم يستغرق الأمر من النقر حتى استلام الصفحة كاملة؟",
              explanation:
                "1 RTT للـ HTML + 1 RTT للكائنات الثلاثة معًا = 2RTT.",
            },
            {
              q: "The count-to-infinity problem in the Distance Vector (DV) algorithm under certain conditions may be solved by:",
              options: [
                "Randomizing the time in which the nodes send out the distance vectors",
                "Ensuring that all routers do not run the DV algorithm at the same time",
                "Adding Poisoned Reverse",
                "None of the above",
              ],
              correct: 2,
              translation:
                "مشكلة العد إلى ما لا نهاية (count-to-infinity) في خوارزمية DV قد تُحل تحت شروط معينة عن طريق:",
              explanation: "إضافة Poisoned Reverse.",
            },
            {
              q: "Traceroute program always gives a delay to the first router that is less than the delay to the second router along the route.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "برنامج Traceroute يعطي دائمًا تأخيرًا للراوتر الأول أقل من تأخير الراوتر الثاني على المسار.",
              explanation:
                "خطأ، التأخير يتغير بسبب الطابور وقد يكون الأول أكبر.",
            },
            {
              q: "The Internet can be defined as a communication infrastructure that provides services to distributed applications and consists of 4 components: (1) End systems, (2) Media, (3) Core, and (4) Protocols.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يمكن تعريف الإنترنت بأنه بنية تحتية للاتصال توفر خدمات للتطبيقات الموزعة وتتكون من 4 مكونات: (1) الأنظمة الطرفية، (2) الوسائط، (3) القلب، (4) البروتوكولات.",
              explanation: "صحيح.",
            },
            {
              q: "Suppose host B’s receive buffer becomes full, so its RcvWindow = 0. After advertising RcvWindow = 0 to host A, suppose host B has nothing to send to host A. Accordingly, host A is blocked based on TCP specification and does not transmit any data of any size to host B.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "إذا امتلأ بافر استقبال المضيف B فأصبحت RcvWindow = 0، وبعد إعلانها للمضيف A لا يملك B شيئًا ليرسله، فإن A يتوقف حسب مواصفات TCP ولا يرسل أي بيانات مهما كان حجمها.",
              explanation: "خطأ، يستمر A في إرسال قطاعات بحجم بايت واحد.",
            },
            {
              q: "Unlike HTTP, SMTP requires each message, including the body of each message, to be in 7-bit ASCII format. Similar to HTTP, SMTP sends its control information in-band.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "على عكس HTTP، يتطلب SMTP أن تكون كل رسالة بما في ذلك جسمها بتنسيق ASCII من 7 بت. ومثل HTTP، يرسل SMTP معلومات التحكم داخل النطاق (in-band).",
              explanation: "صحيح.",
            },
            {
              q: "Suppose a frame with destination address 49-BD-D2-C7-56-2A arrives at the switch on interface X. If the forwarding table associates 49-BD-D2-C7-56-2A with interface X, the switch performs forwarding by putting the frame in the output buffer preceding interface X.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "وصل إطار عنوان وجهته 49-BD-D2-C7-56-2A إلى السويتش على الواجهة X. إذا ربط جدول التحويل هذا العنوان بالواجهة X فإن السويتش يحوّله بوضعه في بافر الإخراج قبل الواجهة X.",
              explanation:
                "خطأ، الإطار يُحذف (filtering) لأن الوجهة على نفس الواجهة.",
            },
            {
              q: "In switching via memory, an input port with an arriving packet first signals the routing processor via an interrupt. The packet is copied from the input port into processor memory. The routing processor extracts the destination address, looks up the appropriate output port in the forwarding table, and copies the packet to the output-port buffer.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في التبديل عبر الذاكرة، ينبه منفذ الإدخال الذي وصلته حزمة معالج التوجيه بمقاطعة، فتُنسخ الحزمة إلى ذاكرة المعالج، ثم يستخرج المعالج عنوان الوجهة ويبحث عن منفذ الإخراج في جدول التحويل وينسخ الحزمة إلى بافر الإخراج.",
              explanation: "صحيح.",
            },
            {
              q: "Consider a packet of length L that begins at end system A and travels over 4 links to destination end system B. The 4 links are connected by 3 packet switches; 2 switches use store-and-forward and 1 uses cut-through. Let dᵢ and sᵢ denote the propagation distance and propagation speed of link i (i = 1,2,3,4). Ignore processing delay and suppose R₁ = R₂ = R₃ = R₄ = R. The statement in the figure gives the total end-to-end delay as 4L/R + d₁/s₁ + d₂/s₂ + d₃/s₃ + d₄/s₄. Is this statement correct?\n\n(انظر إلى السؤال رقم 42 في ملف الامتحان بالأعلى 👆)",
              options: ["True", "False"],
              correct: 1,
              translation:
                "حزمة طولها L تنتقل من النظام الطرفي A عبر 4 روابط إلى B، متصلة بـ 3 سويتشات: اثنان store-and-forward وواحد cut-through. إذا كانت R₁ = R₂ = R₃ = R₄ = R وتم تجاهل المعالجة، فهل التأخير الكلي = 4L/R + d₁/s₁ + d₂/s₂ + d₃/s₃ + d₄/s₄ صحيح؟",
              explanation:
                "خطأ، لأن السويتش cut-through لا ينتظر الحزمة كاملة فيكون الإرسال الكلي 3L/R.",
              figure: "assets/final-general-q42-delay-formula.png",
            },
            {
              q: "Consider a sender that can transmit at a rate of 1 Mbps in both directions. Packets containing only control (e.g., ACK, 3-way handshaking, or request) are 100 bits long. HTTP is used to download a webpage whose initial HTML object contains 3 referenced objects from the same server. Each downloaded object is 100 Kbits long except the last, which is 200 Kbits. Let RTT denote the round-trip time. The total time needed to download the objects using parallel non-persistent HTTP with 3 parallel connections is approximately 4RTT + 0.7012 sec.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "مرسل يستطيع الإرسال بمعدل 1 Mbps في الاتجاهين، وحزم التحكم (ACK أو المصافحة الثلاثية أو الطلب) طولها 100 بت. يُستخدم HTTP لتحميل صفحة ملف HTML الأولي فيها يشير إلى 3 كائنات من نفس الخادم، كل كائن 100 كيلوبت عدا الأخير 200 كيلوبت. الزمن الكلي باستخدام HTTP غير مستمر متوازٍ بثلاثة اتصالات متوازية تقريبًا 4RTT + 0.7012 ثانية.",
              explanation: "صحيح حسب مفتاح الـ PDF.",
            },
            {
              q: "Consider distributing a file of F bits to N peers using a client-server architecture. Let us be the upload rate of the server’s access link and dmin the download rate of the slowest peer. Assume a fluid model in which the server can transmit to multiple peers simultaneously at different rates, provided their combined rate does not exceed us. Suppose us/N ≤ dmin. Which distribution scheme has distribution time NF/us?",
              options: [
                "A distribution scheme in which the server sends the file to each client, in parallel, at a rate of us/N.",
                "A distribution scheme in which the server sends the file to each client, in parallel, at a rate of dmin.",
                "A distribution scheme in which the server sends the file to each client, in serial, at a rate of us/N.",
                "A distribution scheme in which the server sends the file to each client, in serial, at a rate of dmin.",
                "None of the above",
              ],
              correct: 0,
              translation:
                "نوزع ملفًا حجمه F بت على N نظيرًا بمعمارية client-server، حيث us معدل رفع الخادم و dmin معدل تحميل أبطأ نظير، وus/N ≤ dmin. أي مخطط توزيع زمنه NF/us؟",
              explanation:
                "إرسال الملف لكل عميل بالتوازي بمعدل us/N يعطي F ÷ (us/N) = NF/us.",
            },
            {
              q: "In CSMA, if the adapter senses that the channel is idle, it starts to transmit the frame. If the adapter senses that the channel is busy, it waits until it senses no signal energy and then starts to transmit the frame. While transmitting, the adapter monitors for signal energy coming from other adapters that use the channel.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في CSMA إذا وجد المحول القناة خاملة يبدأ إرسال الإطار، وإذا وجدها مشغولة ينتظر حتى لا يشعر بطاقة إشارة ثم يبدأ الإرسال. وأثناء الإرسال يراقب طاقة الإشارة القادمة من محولات أخرى.",
              explanation:
                "خطأ، مراقبة القناة أثناء الإرسال من سمات CSMA/CD وليس CSMA العادي.",
            },
            {
              q: "Ethernet technology provides connectionless service to the network layer. It also provides an unreliable service: when adapter B receives a frame from A, it runs the CRC check but does not send an acknowledgment or negative acknowledgment. When a frame fails the CRC check, adapter B discards it.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "تقدم تقنية Ethernet خدمة غير موجهة بالاتصال لطبقة الشبكة، وهي أيضًا غير موثوقة: عندما يستلم المحول B إطارًا من A يفحص CRC دون إرسال إقرار أو إقرار سلبي، وإذا فشل الفحص يتجاهل الإطار.",
              explanation: "صحيح.",
            },
            {
              q: "Suppose two IPv6 nodes want to communicate using IPv6 datagrams that the receiver must receive unchanged, but the two nodes are connected to each other by IPv4 routers. What is the preferred method?",
              options: [
                "Using dual-stack approach",
                "Using Tunneling",
                "Using NAT",
                "None of the above",
              ],
              correct: 1,
              translation:
                "عقدتا IPv6 تريدان التواصل بداتاجرامات IPv6 يجب أن تصل دون تغيير، لكنهما متصلتان عبر راوترات IPv4. ما الطريقة المفضلة؟",
              explanation: "النفق (Tunneling).",
            },
            {
              q: "When a frame is broadcast, each adapter that receives the frame checks whether the destination MAC address matches its own MAC address. If it does not match, the adapter discards the frame without passing the network-layer datagram up the protocol stack.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "عند بث إطار، يفحص كل محول يستقبله هل يطابق عنوان MAC الوجهة عنوانه. إذا لم يطابق يتجاهل الإطار دون تمرير الداتاجرام لأعلى.",
              explanation:
                "خطأ، عنوان الوجهة في البث هو عنوان البث (FF-FF-FF-FF-FF-FF) فيقبله كل المحولات.",
            },
          ],
        },
      ],
    },

    {
      category: "Dr. Tarek Mohamed",
      icon: "👨‍🏫",
      description: "Computer Networks finals by Dr. Tarek Mohamed",
      items: [
        // Final 2026 - National - Dr.Tarek (GEPZ) - JavaScript module
        {
          t: "Final 2026 - National - Dr.Tarek",
          d: "Final Answers and Short Questions",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Tarek/Final 2026 - National - Dr.Tarek.pdf",
          questions: [
            {
              q: "What is an HTTP cookie used for?",
              options: [
                "Like dessert, cookies are used at the end of a transaction, to indicate the end of the transaction",
                "A cookies is a code used by a server, carried on a client’s HTTP request, to access information the server had earlier stored about an earlier interaction with this person. [Think about the distinction between a browser and a person.]",
                "A cookie is a code used by a server, carried on a client’s HTTP request, to access information the server had earlier stored about an earlier interaction with this Web browser. [Think about the distinction between a browser and a person.]",
                "A cookie is a code used by a client to authenticate a person’s identity to an HTTP server.",
              ],
              correct: 2,
              translation: "ما هو استخدام ملف تعريف ارتباط HTTP (Cookie)؟",
              explanation:
                "الكوكي هو كود يستخدمه الخادم ويُحمل على طلب HTTP من العميل للوصول إلى معلومات خزّنها الخادم سابقًا عن تفاعل سابق مع هذا المتصفح، وليس بالضرورة مع الشخص نفسه.",
            },
            {
              q: "an IPv4 datagram has a",
              options: [
                "4-byte header",
                "8-byte header",
                "20-byte header",
                "20+ byte header",
              ],
              correct: 3,
              translation: "حزمة IPv4 datagram تحتوي على:",
              explanation:
                "رأس IPv4 يكون 20 بايت كحد أدنى، ويمكن أن يزيد عند وجود خيارات (Options)، لذلك 20+ byte header هو الأنسب.",
            },
            {
              q: "Which of the characteristics below are associated with a client-server approach to structuring network applications (as opposed to a P2P approach)",
              options: [
                "A process requests service from those it contacts and will provide service to processes that contact it.",
                "There is a server with a well known server IP address.",
                "There is not a server that is always on",
                "None of the above",
              ],
              correct: 1,
              translation:
                "أي الخصائص التالية ترتبط بنهج client-server في بناء تطبيقات الشبكة (بدلاً من P2P)؟",
              explanation:
                "في client-server يوجد خادم معروف بعنوان IP معروف، وعادة يكون دائم التشغيل. الخيار الآخر يصف P2P.",
            },
            {
              q: "Transfer of a bit into and out of a transmission media",
              options: [
                "Application Layer",
                "Transport layer",
                "Network layer",
                "Physical layer",
              ],
              correct: 3,
              translation: "نقل البت إلى داخل وخارج وسيط الإرسال",
              explanation: "هذه وظيفة الطبقة الفيزيائية (Physical layer).",
            },
            {
              q: "What specifies the format of packets that are sent and received among routers and end systems",
              options: ["TCP", "UDP", "IP", "DNS"],
              correct: 2,
              translation:
                "ما الذي يحدد تنسيق الحزم التي تُرسل وتُستقبل بين الموجهات وأنظمة النهاية؟",
              explanation: "بروتوكول IP هو الذي يحدد تنسيق حزم IP (datagrams).",
            },
            {
              q: "Which of the following descriptions below correspond to a 'services' view of the Internet?",
              options: [
                "A platform for building network applications",
                "A collection of billions of computing devices, and packet switches interconnected by links",
                "A 'network of networks'.",
                "A collection of hardware and software components executing protocols that define the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.",
              ],
              correct: 0,
              translation:
                "أي من الأوصاف التالية يمثل النظرة الخدمية (services view) للإنترنت؟",
              explanation:
                "النظرة الخدمية ترى الإنترنت كمنصة لبناء تطبيقات الشبكة وتقديم الخدمات للتطبيقات.",
            },
            {
              q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Replies to DNS query by local host, by contacting other DNS servers to answer the query.",
              options: [
                "Local DNS server",
                "Authoritative DNS server",
                "DNS root servers",
                "Top Level Domain (TLD) servers",
              ],
              correct: 0,
              translation:
                "طابق وظيفة الخادم مع نوع خادم DNS في التسلسل الهرمي. يرد على استعلام DNS من المضيف المحلي بالاتصال بخوادم DNS أخرى للإجابة.",
              explanation: "هذا هو دور Local DNS server (الخادم المحلي).",
            },
            {
              q: "Time spent transmitting packets bits into the link",
              options: [
                "Processing delay",
                "Propagation delay",
                "Transmission delay",
                "Queueing delay",
              ],
              correct: 2,
              translation: "الوقت المستغرق لإرسال بتات الحزمة إلى الرابط",
              explanation: "هذا هو Transmission delay (تأخير الإرسال).",
            },
            {
              q: "Which of the following are changes between HTTP 1.1 and HTTP/2?",
              options: [
                "HTTP/2 allows a large object to be broken down into smaller pieces, and the transmission of those pieces to be interleaved with transmission other smaller objects, thus preventing a large object from forcing many smaller objects to wait their turn for transmission.",
                "HTTP/2 provides enhanced security by using transport layer security (TLS).",
                "HTTP/2 has many new HTTP methods and status codes.",
                "All of the above",
              ],
              correct: 0,
              translation: "أي مما يلي يمثل تغييرات بين HTTP 1.1 و HTTP/2؟",
              explanation:
                "HTTP/2 يسمح بتقسيم الكائنات الكبيرة وتداخل إرسالها مع كائنات أصغر (multiplexing). TLS ليس شرطًا في مواصفة HTTP/2، ولا توجد طرق وأكواد حالة جديدة كثيرة.",
            },
            {
              q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Application layer",
              options: ["Datagram", "Message", "Bit", "Segment"],
              correct: 1,
              translation:
                "طابق اسم طبقة الإنترنت مع وحدة البيانات المتبادلة بين كيانات البروتوكول في تلك الطبقة: طبقة التطبيق",
              explanation:
                "وحدة البيانات في طبقة التطبيق تسمى Message (رسالة).",
            },
            {
              q: "Forwarding is the local action of moving arriving packets from router’s input link to appropriate router output link, while routing is the global action of determining the source-destination paths taken by packets.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "إعادة التوجيه (Forwarding) هي العملية المحلية لنقل الحزم الواردة من رابط إدخال الموجه إلى رابط الإخراج المناسب، بينما التوجيه (Routing) هو العملية العامة لتحديد المسارات من المصدر إلى الوجهة التي تأخذها الحزم.",
              explanation: "العبارة صحيحة.",
            },
            {
              q: "When an application uses a UDP socket, what transport services are provided to the application by UDP?",
              options: [
                "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
                "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
                "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
                "Flow Control. The provided service will ensure that the sender does not send so fast as to overflow receiver buffers.",
              ],
              correct: 2,
              translation:
                "عندما يستخدم تطبيق مقبس UDP، ما الخدمات التي يوفرها UDP للتطبيق؟",
              explanation:
                "UDP يقدم خدمة best-effort، دون ضمانات تسليم أو تحكم في الازدحام أو التدفق.",
            },
            {
              q: "What is the purpose of a cookie value in the HTTP GET request?",
              options: [
                "The cookie value encodes a default set of preferences that the user has previously specified for this web site",
                "The cookie value encodes the format of the reply preferred by the client in the response to this GET request",
                "The cookie value itself doesn't mean anything. It is just a value that was returned by a web server to this client during an earlier interaction",
                "The cookie value indicates whether the user wants to use HTTP/1, HTTP/1.1, or HTTP/2 for this GET request.",
              ],
              correct: 2,
              translation: "ما الغرض من قيمة الكوكي في طلب HTTP GET؟",
              explanation:
                "قيمة الكوكي نفسها لا تعني شيئًا محددًا؛ هي مجرد قيمة أرجعها الخادم للعميل في تفاعل سابق.",
            },
            {
              q: "What is the purpose of the HTTP GET message?",
              options: [
                "The HTTP GET request message is sent by a web server to a web client to get the identity of the web client.",
                "The HTTP GET request message is sent by a web server to a web client to get the next request from the web client.",
                "The HTTP GET request message is used by a web client to request a web server to send the requested object from the server to the client.",
                "The HTTP GET request message is used by a web client to post an object on a web server.",
              ],
              correct: 2,
              translation: "ما الغرض من رسالة HTTP GET؟",
              explanation:
                "يستخدمها عميل الويب لطلب كائن من خادم الويب وإرساله إلى العميل.",
            },
            {
              q: "Which of the fields below are in a UDP segment header",
              options: [
                "Internet checksum",
                "Upper layer protocol",
                "Data (payload)",
                "Sequence number",
              ],
              correct: 0,
              translation: "أي الحقول التالية موجود في رأس مقطع UDP؟",
              explanation:
                "رأس UDP يحتوي على منفذ المصدر، منفذ الوجهة، الطول، والمجموع الاختباري (checksum).",
            },
            {
              q: "Time spent waiting in packet buffers for link transmission",
              options: [
                "Processing delay",
                "Propagation delay",
                "Transmission delay",
                "Queueing delay",
              ],
              correct: 3,
              translation:
                "الوقت المستغرق في الانتظار في مخازن الحزم قبل الإرسال على الرابط",
              explanation: "هذا هو Queueing delay (تأخير الانتظار في الطابور).",
            },
            {
              q: "What do we mean when we say 'HTTP is stateless'? In answering this question, assume that cookies are not used",
              options: [
                "The HTTP protocol is not licensed in any country.",
                "An HTTP client does not remember anything about what happened during earlier steps in interacting with any HTTP server.",
                "An HTTP server does not remember anything about what happened during earlier steps in interacting with this HTTP client",
                "An HTTP client does not remember the identities of the servers with which it has interacted.",
              ],
              correct: 2,
              translation:
                "ماذا نعني بقولنا إن HTTP عديم الحالة (stateless)؟ بافتراض عدم استخدام الكوكيز.",
              explanation:
                "الخادم لا يحتفظ بمعلومات عن الخطوات السابقة في تفاعله مع هذا العميل.",
            },
            {
              q: "What is the purpose of the HTTP GET message?",
              options: [
                "The HTTP GET request message is sent by a web server to a web client to get the identity of the web client.",
                "The HTTP GET request message is sent by a web server to a web client to get the next request from the web client.",
                "The HTTP GET request message is used by a web client to request a web server to send the requested object from the server to the client.",
                "The HTTP GET request message is used by a web client to post an object on a web server.",
              ],
              correct: 2,
              translation: "ما الغرض من رسالة HTTP GET؟",
              explanation: "يستخدمها عميل الويب لطلب كائن من خادم الويب.",
            },
            {
              q: "Time spent waiting in packet buffers for link transmission",
              options: [
                "Processing delay",
                "Propagation delay",
                "Transmission delay",
                "Queueing delay",
              ],
              correct: 3,
              translation:
                "الوقت المستغرق في الانتظار في مخازن الحزم قبل الإرسال على الرابط",
              explanation: "هذا هو Queueing delay.",
            },
            {
              q: "Which of the characteristics below are associated with the technique of circuit switching?",
              options: [
                "This technique is used in the Internet",
                "Congestion loss and variable end-end delays are possible with this technique",
                "Resources are used on demand, not reserved in advance",
                "Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are two approaches for implementing this technique",
              ],
              correct: 3,
              translation:
                "أي الخصائص التالية ترتبط بتقنية تبديل الدوائر (circuit switching)؟",
              explanation:
                "تبديل الدوائر يحجز الموارد مسبقًا، ومن طرق تنفيذه FDM و TDM.",
            },
            {
              q: "When we say that the Internet is a 'network of networks,' we mean?",
              options: [
                "The Internet is the largest network ever built",
                "The Internet is made up of a lot of different networks that are interconnected to each other",
                "The Internet is the fastest network ever built",
                "All of the above",
              ],
              correct: 1,
              translation:
                "عندما نقول إن الإنترنت 'شبكة من الشبكات'، فإننا نعني؟",
              explanation:
                "الإنترنت مكوّن من العديد من الشبكات المختلفة المترابطة معًا.",
            },
            {
              q: "What is the purpose of the conditional HTTP GET request message?",
              options: [
                "To allow a server to only send the requested object to the client if the server is not overloaded.",
                "To allow a server to only send the requested object to the client if this object has changed since the server last sent this object to the client",
                "To allow a server to only send the requested object to the client if the client is authorized to received that object.",
                "To allow a server to only send the requested object to the client if the client has never requested that object before",
              ],
              correct: 1,
              translation: "ما الغرض من رسالة HTTP GET الشرطية؟",
              explanation:
                "تسمح للخادم بإرسال الكائن فقط إذا تغير منذ آخر مرة أرسله فيها إلى العميل.",
            },
            {
              q: "Time need for bits to physically propagate through the transmission medium from end one of a link to the other",
              options: [
                "Processing delay",
                "Propagation delay",
                "Transmission delay",
                "Queueing delay",
              ],
              correct: 1,
              translation:
                "الوقت اللازم للبتات لتنتشر فيزيائيًا عبر وسيط الإرسال من طرف الرابط إلى الطرف الآخر",
              explanation: "هذا هو Propagation delay (تأخير الانتشار).",
            },
            {
              q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Link layer",
              options: ["Datagram", "Message", "Segment", "Frame"],
              correct: 3,
              translation:
                "طابق اسم طبقة الإنترنت مع وحدة البيانات المتبادلة بين كيانات البروتوكول في تلك الطبقة: طبقة الرابط (Link layer)",
              explanation: "وحدة البيانات في طبقة الرابط تسمى Frame (إطار).",
            },
            {
              q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Transport layer",
              options: ["Datagram", "Message", "Bit", "Segment"],
              correct: 3,
              translation:
                "طابق اسم طبقة الإنترنت مع وحدة البيانات المتبادلة بين كيانات البروتوكول في تلك الطبقة: طبقة النقل (Transport layer)",
              explanation: "وحدة البيانات في طبقة النقل تسمى Segment (مقطع).",
            },
            {
              q: "What is the purpose of the conditional HTTP GET request message?",
              options: [
                "To allow a server to only send the requested object to the client if the server is not overloaded.",
                "To allow a server to only send the requested object to the client if this object has changed since the server last sent this object to the client.",
                "To allow a server to only send the requested object to the client if the client is authorized to received that object.",
                "To allow a server to only send the requested object to the client if the client has never requested that object before",
              ],
              correct: 1,
              translation: "ما الغرض من رسالة HTTP GET الشرطية؟",
              explanation:
                "تسمح للخادم بإرسال الكائن فقط إذا تغير منذ آخر إرسال له إلى العميل.",
            },
            {
              q: "Delivery of datagrams from a source host to a destination host (typically)",
              options: [
                "Link layer",
                "Application Layer",
                "Transport layer",
                "Network layer",
              ],
              correct: 3,
              translation:
                "تسليم مخططات البيانات (datagrams) من مضيف المصدر إلى مضيف الوجهة (عادة)",
              explanation: "هذه وظيفة طبقة الشبكة (Network layer).",
            },
            {
              q: "Which of the characteristics below are associated with the technique of packet switching?",
              options: [
                "Frequency Division Multiplexing (FDM) and Time Division Multiplexing (TDM) are two approaches for implementing this technique.",
                "This technique was the basis for the telephone call switching during the 20th century and into the beginning of this current century.",
                "Data may be queued before being transmitted due to other user's data that's also queueing for transmission.",
                "Reserves resources needed for a call from source to destination",
              ],
              correct: 2,
              translation:
                "أي الخصائص التالية ترتبط بتقنية تبديل الحزم (packet switching)؟",
              explanation:
                "في تبديل الحزم قد تنتظر البيانات في الطوابير بسبب بيانات مستخدمين آخرين. لا يحجز الموارد مسبقًا.",
            },
            {
              q: "P2P networks do not need a server",
              options: ["True", "False"],
              correct: 0,
              translation: "شبكات P2P لا تحتاج إلى خادم.",
              explanation:
                "شبكات P2P لا تحتاج بالضرورة إلى خادم دائم التشغيل؛ الأقران يمكنهم تقديم وطلب الخدمات.",
            },
            {
              q: "When an application uses a UDP socket, what transport services are provided to the application by UDP?",
              options: [
                "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
                "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
                "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
                "Flow Control. The provided service will ensure that the sender does not send so fast as to overflow receiver buffers.",
              ],
              correct: 2,
              translation:
                "عندما يستخدم تطبيق مقبس UDP، ما خدمات النقل التي يوفرها UDP للتطبيق؟",
              explanation: "UDP يقدم خدمة best-effort فقط.",
            },
            {
              q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Provides authoritative hostname to IP mappings for organization's named hosts.",
              options: [
                "Local DNS server",
                "Authoritative DNS server",
                "DNS root servers",
                "Top Level Domain (TLD) servers",
              ],
              correct: 1,
              translation:
                "طابق وظيفة الخادم مع نوع خادم DNS في التسلسل الهرمي. يوفر تعيينات اسم المضيف إلى IP الموثوقة لمضيفي المؤسسة المسمين.",
              explanation:
                "هذا دور Authoritative DNS server (خادم DNS الموثوق).",
            },
            {
              q: "Transfer of data between one process and another process (typically on different hosts)",
              options: [
                "Link layer",
                "Application Layer",
                "Transport layer",
                "Network layer",
              ],
              correct: 2,
              translation:
                "نقل البيانات بين عملية وأخرى (عادة على مضيفين مختلفين)",
              explanation: "هذه وظيفة طبقة النقل (Transport layer).",
            },
            {
              q: "Which of the following descriptions below correspond to a 'nuts-and-bolts' view of the Internet?",
              options: [
                "A platform for building network applications",
                "A 'network of networks'",
                "A place I go for information, entertainment, and to communicate with people",
                "All of the above",
              ],
              correct: 1,
              translation:
                "أي من الأوصاف التالية يمثل النظرة المادية/التفصيلية (nuts-and-bolts) للإنترنت؟",
              explanation:
                "النظرة المادية تصف الإنترنت كشبكة من الشبكات مكونة من أجهزة وروابط ومبدلات.",
            },
            {
              q: "Where is transport-layer functionality primarily implemented",
              options: [
                "Transport layer functions are implemented primarily at the hosts at the 'edge' of the network",
                "Transport layer functions are implemented primarily at the routers and switches in the network",
                "Transport layer functions are implemented primarily at each end of a physical link connecting one host/router/switch to another one host/router/switch",
                "None of the above",
              ],
              correct: 0,
              translation: "أين تُنفذ وظائف طبقة النقل بشكل أساسي؟",
              explanation:
                "تُنفذ بشكل أساسي في المضيفات عند أطراف الشبكة (edge).",
            },
            {
              q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Network layer",
              options: ["Datagram", "Message", "Segment", "Frame"],
              correct: 0,
              translation:
                "طابق اسم طبقة الإنترنت مع وحدة البيانات المتبادلة بين كيانات البروتوكول في تلك الطبقة: طبقة الشبكة (Network layer)",
              explanation: "وحدة البيانات في طبقة الشبكة تسمى Datagram.",
            },
            {
              q: "UDP packet has",
              options: [
                "2 byte header",
                "8 byte header",
                "12 byte header",
                "16 byte header",
              ],
              correct: 1,
              translation: "حزمة UDP تحتوي على:",
              explanation: "رأس UDP ثابت الطول ويساوي 8 بايت.",
            },
            {
              q: "Which of the characteristics below are associated with a P2P approach to structuring network applications (as opposed to a client-server approach)?",
              options: [
                "There is a server that is always on",
                "HTTP uses this application structure",
                "There is a server with a well known server IP address",
                "There is not a server that is always on",
              ],
              correct: 3,
              translation:
                "أي الخصائص التالية ترتبط بنهج P2P في بناء تطبيقات الشبكة (بدلاً من client-server)؟",
              explanation: "في P2P لا يوجد خادم دائم التشغيل بالضرورة.",
            },
            {
              q: "What is the purpose of a cookie value in the HTTP GET request?",
              options: [
                "The cookie value encodes a default set of preferences that the user has previously specified for this web site.",
                "The cookie value encodes the format of the reply preferred by the client in the response to this GET request.",
                "The cookie value itself doesn't mean anything. It is just a value that was returned by a web server to this client during an earlier interaction.",
                "The cookie value indicates whether the user wants to use HTTP/1, HTTP/1.1, or HTTP/2 for this GET request.",
              ],
              correct: 2,
              translation: "ما الغرض من قيمة الكوكي في طلب HTTP GET؟",
              explanation:
                "قيمة الكوكي نفسها مجرد قيمة أرجعها الخادم للعميل في تفاعل سابق.",
            },
            {
              q: "Match the name of an Internet layer with unit of data that is exchanged among protocol entities at that layer, Physical layer",
              options: ["Datagram", "Message", "Bit", "Segment"],
              correct: 2,
              translation:
                "طابق اسم طبقة الإنترنت مع وحدة البيانات المتبادلة بين كيانات البروتوكول في تلك الطبقة: الطبقة الفيزيائية (Physical layer)",
              explanation: "وحدة البيانات في الطبقة الفيزيائية هي Bit.",
            },
            {
              q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Responsible for a domain (e.g., *.com, *.edu); knows how to contact authoritative name servers",
              options: [
                "Local DNS server",
                "Authoritative DNS server",
                "DNS root servers",
                "Top Level Domain (TLD) servers",
              ],
              correct: 3,
              translation:
                "طابق وظيفة الخادم مع نوع خادم DNS في التسلسل الهرمي. مسؤول عن نطاق مثل *.com و *.edu؛ ويعرف كيفية الاتصال بخوادم الأسماء الموثوقة.",
              explanation: "هذا دور خوادم Top Level Domain (TLD) servers.",
            },
            {
              q: "Which of the definitions below describe what is meant by the term 'encapsulation'?",
              options: [
                "Determining the name of the destination host, translating that name to an IP address and then placing that value in a packet header field.",
                "Starting a transport layer timer for a transmitted segment, and then if an ACK segment isn't received before the timeout, placing that segment in a retransmission queue.",
                "Taking data from the layer above, adding header fields appropriate for this layer, and then placing the data in the payload field of the 'packet' for that layer.",
                "Receiving a 'packet' from the layer below, extracting the payload field, and after some internal actions possibly delivering that payload to an upper layer protocol.",
              ],
              correct: 2,
              translation:
                "أي التعريفات التالية يصف مصطلح 'التغليف' (encapsulation)؟",
              explanation:
                "التغليف هو أخذ البيانات من الطبقة الأعلى وإضافة حقول رأس مناسبة لهذه الطبقة ثم وضع البيانات في حقل الحمولة.",
            },
            {
              q: "Match the function of a server to a given type of DNS server in the DNS server hierarchy. Highest level of the DNS hierarchy, knows how to reach servers responsible for a given domain (e.g., *.com, *.edu)",
              options: [
                "Local DNS server",
                "Authoritative DNS server",
                "DNS root servers",
                "Top Level Domain (TLD) servers",
              ],
              correct: 2,
              translation:
                "طابق وظيفة الخادم مع نوع خادم DNS في التسلسل الهرمي. أعلى مستوى في هرمية DNS، ويعرف كيفية الوصول إلى الخوادم المسؤولة عن نطاق معين مثل *.com و *.edu.",
              explanation: "هذا هو دور DNS root servers.",
            },
            {
              q: "Which of the characteristics below are associated with a client-server approach to structuring network applications (as opposed to a P2P approach)",
              options: [
                "A process requests service from those it contacts and will provide service to processes that contact it.",
                "There is a server with a well known server IP address",
                "There is not a server that is always on",
                "All of the above",
              ],
              correct: 1,
              translation:
                "أي الخصائص التالية ترتبط بنهج client-server في بناء تطبيقات الشبكة (بدلاً من P2P)؟",
              explanation: "في client-server يوجد خادم بعنوان IP معروف.",
            },
            {
              q: "Transfer of data between neighboring network devices",
              options: [
                "Link layer",
                "Application Layer",
                "Transport layer",
                "Network layer",
              ],
              correct: 0,
              translation: "نقل البيانات بين أجهزة الشبكة المتجاورة",
              explanation: "هذه وظيفة طبقة الرابط (Link layer).",
            },
            {
              q: "When there is not enough memory to buffer an incoming packet, a decision must be made to either drop the arriving packet (a policy known as drop-tail) or remove one or more already-queued packets to make room for the newly arrived packet.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "عندما لا توجد ذاكرة كافية لتخزين حزمة واردة مؤقتًا، يجب اتخاذ قرار إما بإسقاط الحزمة القادمة (سياسة تُعرف باسم drop-tail) أو إزالة حزمة أو أكثر من الحزم الموجودة في الطابور لإفساح مجال للحزمة القادمة.",
              explanation: "العبارة صحيحة.",
            },
            {
              q: "Time needed to perform an integrity check, lookup packet information in a local table and move the packet from an input link to an output link in a router.",
              options: [
                "Processing delay",
                "Propagation delay",
                "Transmission delay",
                "Queueing delay",
              ],
              correct: 0,
              translation:
                "الوقت اللازم لإجراء فحص سلامة، والبحث عن معلومات الحزمة في جدول محلي، ونقل الحزمة من رابط إدخال إلى رابط إخراج في موجه.",
              explanation: "هذا هو Processing delay (تأخير المعالجة).",
            },
            {
              q: "Protocols that are part of a distributed network application",
              options: [
                "Link layer",
                "Application Layer",
                "Transport layer",
                "Network layer",
              ],
              correct: 1,
              translation: "البروتوكولات التي تشكل جزءًا من تطبيق شبكة موزع",
              explanation:
                "بروتوكولات تطبيقات الشبكة الموزعة تكون في طبقة التطبيق (Application Layer).",
            },
            {
              q: "Which of the following physical layer technologies has the highest transmission rate and lowest bit error rate in practice?",
              options: [
                "Twisted pair (e.g., CAT5, CAT6)",
                "Coaxial cable",
                "Satellite channel",
                "Fiber optic cable",
              ],
              correct: 3,
              translation:
                "أي من تقنيات الطبقة الفيزيائية التالية لديها أعلى معدل إرسال وأقل معدل خطأ بت عمليًا؟",
              explanation:
                "الألياف البصرية (Fiber optic cable) هي الأعلى في معدل النقل والأقل في معدل الخطأ.",
            },
            {
              q: "When an application uses a TCP socket, what transport services are provided to the application by TCP?",
              options: [
                "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
                "Real-time delivery. The service will guarantee that data will be delivered to the receiver within a specified time bound.",
                "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
                "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
              ],
              correct: 2,
              translation:
                "عندما يستخدم تطبيق مقبس TCP، ما خدمات النقل التي يوفرها TCP للتطبيق؟",
              explanation:
                "TCP يوفر التحكم في الازدحام (Congestion control) بالإضافة إلى النقل الموثوق والتحكم في التدفق.",
            },
            {
              q: "When an application uses a TCP socket, what transport services are provided to the application by TCP?",
              options: [
                "Throughput guarantee. The socket can be configured to provide a minimum throughput guarantee between sender and receiver.",
                "Real-time delivery. The service will guarantee that data will be delivered to the receiver within a specified time bound.",
                "Congestion control. The service will control senders so that the senders do not collectively send more data than links in the network can handle.",
                "Best effort service. The service will make a best effort to deliver data to the destination but makes no guarantees that any particular segment of data will actually get there.",
              ],
              correct: 2,
              translation:
                "عندما يستخدم تطبيق مقبس TCP، ما خدمات النقل التي يوفرها TCP للتطبيق؟",
              explanation: "TCP يوفر التحكم في الازدحام (Congestion control).",
            },
          ],
        },
        {
          t: "Final Exam (Dr. Tarek) — 50 MCQs",
          d: "Comprehensive final exam by Dr. Tarek",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Tarek/Computer_Networks_Final_Dr_Tarek.pdf",
          questions: [
            {
              q: "Digital Subscriber Line (DSL) uses existing ......... lines to connect machines to the Internet.",
              options: ["Telephone", "Internet", "TV", "Water"],
              correct: 0,
              translation:
                "يستخدم خط الاشتراك الرقمي (DSL) خطوط ......... الموجودة لتوصيل الأجهزة بالإنترنت.",
              explanation: "خطوط الهاتف (Telephone).",
            },
            {
              q: "A / An ......... defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.",
              options: ["protocol", "modem", "Internet", "end system"],
              correct: 0,
              translation:
                "......... يحدد تنسيق وترتيب الرسائل المتبادلة بين كيانين أو أكثر، وكذلك الإجراءات المتخذة عند إرسال أو استقبال رسالة أو حدث آخر.",
              explanation: "البروتوكول (protocol).",
            },
            {
              q: "The ......... is an infrastructure that provides services to applications and a programming interface to distributed applications.",
              options: ["Internet", "modem", "router", "protocol"],
              correct: 0,
              translation:
                "......... هو بنية تحتية توفر خدمات للتطبيقات وواجهة برمجية للتطبيقات الموزعة.",
              explanation: "الإنترنت (Internet).",
            },
            {
              q: "......... is the actual rate at which bits are being sent from sender to receiver measured in bits/time unit.",
              options: ["Bandwidth", "Throughput", "Data rate", "Bottleneck"],
              correct: 1,
              translation:
                "......... هو المعدل الفعلي الذي تُرسل به البتات من المرسل إلى المستقبل مقاسًا بالبت/وحدة زمن.",
              explanation: "الإنتاجية (Throughput).",
            },
            {
              q: "Moving arriving data packets from router's input link to appropriate router output link is known as .........",
              options: ["routing", "switching", "forwarding", "B and C"],
              correct: 2,
              translation:
                "نقل الحزم الواصلة من رابط الإدخال في الراوتر إلى رابط الإخراج المناسب يُعرف بـ .........",
              explanation: "إعادة التوجيه (forwarding).",
            },
            {
              q: "The functionalities of the presentation layer include .........",
              options: [
                "Data compression",
                "Data encryption",
                "Data description",
                "All of the mentioned",
              ],
              correct: 3,
              translation: "وظائف طبقة العرض (presentation) تشمل .........",
              explanation: "كل ما ذُكر (ضغط، تشفير، وصف البيانات).",
            },
            {
              q: "In the OSI model, as a data packet moves from the lower to the upper layers, headers are..",
              options: ["Added", "Removed", "Rearranged", "Randomized"],
              correct: 1,
              translation:
                "في نموذج OSI، عندما تتحرك الحزمة من الطبقات الدنيا إلى العليا، تكون الترويسات (headers)..",
              explanation: "تتم إزالتها (Removed).",
            },
            {
              q: "The time required to examine the packet's header and determine where to direct the packet is part of the .........",
              options: [
                "queuing delay",
                "transmission delay",
                "propagation delay",
                "processing delay",
              ],
              correct: 3,
              translation:
                "الوقت اللازم لفحص ترويسة الحزمة وتحديد وجهتها هو جزء من .........",
              explanation: "تأخير المعالجة (processing delay).",
            },
            {
              q: "Which connection is necessary for a computer to join the internet?",
              options: [
                "internet society",
                "internet service provider",
                "different computer",
                "internet architecture board",
              ],
              correct: 1,
              translation: "أي اتصال ضروري لانضمام الكمبيوتر إلى الإنترنت؟",
              explanation: "مزود خدمة الإنترنت (ISP).",
            },
            {
              q: "The ......... is the amount of time required to push all of the packet's bits into the link calculated by L/R, where L is the length of the packet and R is the transmission rate of the link.",
              options: [
                "queuing delay",
                "transmission delay",
                "propagation delay",
                "processing delay",
              ],
              correct: 1,
              translation:
                "......... هو الوقت اللازم لدفع جميع بتات الحزمة إلى الرابط ويُحسب بـ L/R حيث L طول الحزمة و R معدل إرسال الرابط.",
              explanation: "تأخير الإرسال (transmission delay).",
            },
            {
              q: "The ......... is the time required to propagate from the beginning of the link to another router calculated by d/s, where d is the length of the physical link and s is the propagation speed.",
              options: [
                "queuing delay",
                "transmission delay",
                "propagation delay",
                "processing delay",
              ],
              correct: 2,
              translation:
                "......... هو الوقت اللازم للانتشار من بداية الرابط إلى راوتر آخر ويُحسب بـ d/s حيث d طول الرابط المادي و s سرعة الانتشار.",
              explanation: "تأخير الانتشار (propagation delay).",
            },
            {
              q: "The ......... is the delay the packet experiences waiting to be transmitted at the output link and is affected by the congestion level of the router.",
              options: [
                "queuing delay",
                "transmission delay",
                "propagation delay",
                "processing delay",
              ],
              correct: 0,
              translation:
                "......... هو التأخير الذي تعانيه الحزمة أثناء انتظار إرسالها على رابط الإخراج ويتأثر بمستوى ازدحام الراوتر.",
              explanation: "تأخير الطابور (queuing delay).",
            },
            {
              q: "Which of this is not a network edge device?",
              options: ["Switch", "PC", "Smartphones", "Servers"],
              correct: 0,
              translation: "أي من التالي ليس جهازًا طرفيًا (edge) في الشبكة؟",
              explanation:
                "السويتش (Switch) جزء من قلب الشبكة وليس جهازًا طرفيًا.",
            },
            {
              q: "The ......... is where network applications and their protocols reside.",
              options: [
                "application layer",
                "transport layer",
                "link layer",
                "network layer",
              ],
              correct: 0,
              translation:
                "......... هي المكان الذي توجد فيه تطبيقات الشبكة وبروتوكولاتها.",
              explanation: "طبقة التطبيق (application layer).",
            },
            {
              q: "TCP and UDP are ......... protocols.",
              options: [
                "physical layer",
                "link layer",
                "transport layer",
                "network layer",
              ],
              correct: 2,
              translation: "بروتوكولا TCP و UDP هما بروتوكولات طبقة .........",
              explanation: "طبقة النقل (transport layer).",
            },
            {
              q: "The ......... routes datagrams from source to destination.",
              options: [
                "link layer",
                "application layer",
                "physical layer",
                "network layer",
              ],
              correct: 3,
              translation:
                "......... تقوم بتوجيه الداتاجرامات من المصدر إلى الوجهة.",
              explanation: "طبقة الشبكة (network layer).",
            },
            {
              q: "The ......... moves the individual bits of a frame from one node to the next through communication links.",
              options: [
                "physical layer",
                "link layer",
                "network layer",
                "application layer",
              ],
              correct: 0,
              translation:
                "......... تنقل البتات الفردية للإطار من عقدة إلى التالية عبر روابط الاتصال.",
              explanation: "الطبقة الفيزيائية (physical layer).",
            },
            {
              q: "Ethernet, 802.11 and PPP are ......... protocols.",
              options: [
                "application layer",
                "transport layer",
                "network layer",
                "link layer",
              ],
              correct: 3,
              translation:
                "Ethernet و 802.11 و PPP هي بروتوكولات طبقة .........",
              explanation: "طبقة الرابط (link layer).",
            },
            {
              q: "The ......... provides synchronization, checkpointing and data exchange recovery during communication between applications.",
              options: [
                "application layer",
                "presentation layer",
                "session layer",
                "link layer",
              ],
              correct: 2,
              translation:
                "......... توفر المزامنة ونقاط الفحص واسترجاع تبادل البيانات أثناء الاتصال بين التطبيقات.",
              explanation: "طبقة الجلسة (session layer).",
            },
            {
              q: "In the data link layer, what is the primary function of the framing process?",
              options: [
                "To encapsulate data with header information for addressing and error detection.",
                "To compress data for more efficient transmission.",
                "To route data packets across different networks.",
                "To establish and manage connections between applications.",
              ],
              correct: 0,
              translation:
                "في طبقة ربط البيانات، ما الوظيفة الأساسية لعملية التأطير (framing)؟",
              explanation:
                "تغليف البيانات بمعلومات ترويسة للعنونة وكشف الأخطاء.",
            },
            {
              q: "What is port numbers for HTTP protocols?",
              options: ["80", "200", "25", "403"],
              correct: 0,
              translation: "ما هو رقم المنفذ لبروتوكول HTTP؟",
              explanation: "80.",
            },
            {
              q: "What is the difference between connection-oriented and connectionless services in the data link layer?",
              options: [
                "Connection-oriented services establish a connection before data transfer, while connectionless services transmit data without any pre-established connection.",
                "Connection-oriented services are faster, while connectionless services offer more reliable data transfer.",
                "Connection-oriented services are used in LANs, while connectionless services are used in WANs.",
                "Connection-oriented services require less overhead, while connectionless services have additional header information.",
              ],
              correct: 0,
              translation:
                "ما الفرق بين الخدمات الموجهة بالاتصال وغير الموجهة بالاتصال في طبقة ربط البيانات؟",
              explanation:
                "الموجهة بالاتصال تنشئ اتصالًا قبل نقل البيانات، أما غير الموجهة فترسل دون اتصال مسبق.",
            },
            {
              q: "What is the primary function of the Address Resolution Protocol (ARP) in the data link layer?",
              options: [
                "To map logical IP addresses to physical MAC addresses of network devices.",
                "To manage network congestion and flow control.",
                "To translate domain names into corresponding IP addresses.",
                "To establish and tear down connections for communication sessions.",
              ],
              correct: 0,
              translation:
                "ما الوظيفة الأساسية لبروتوكول ARP في طبقة ربط البيانات؟",
              explanation: "ربط عناوين IP المنطقية بعناوين MAC الفيزيائية.",
            },
            {
              q: "What is the key difference between a Point-to-Point (PPP) and an Ethernet link?",
              options: [
                "Ethernet is typically used in LANs, while PPP is used in WANs.",
                "PPP supports full-duplex communication, while Ethernet is half-duplex.",
                "Ethernet operates at higher speeds compared to PPP.",
                "PPP requires more complex cabling compared to Ethernet.",
              ],
              correct: 0,
              translation: "ما الفرق الأساسي بين رابط PPP ورابط Ethernet؟",
              explanation:
                "Ethernet يُستخدم عادةً في الشبكات المحلية LAN بينما PPP في الشبكات الواسعة WAN.",
            },
            {
              q: "What is port numbers for HTTPS protocols?",
              options: ["200", "25", "403", "80"],
              correct: 2,
              translation: "ما هو رقم المنفذ لبروتوكول HTTPS؟",
              explanation:
                "الإجابة المعلّمة في الامتحان هي 403 (C). ملحوظة: رقم منفذ HTTPS الحقيقي هو 443 ولكنه غير موجود في الخيارات.",
            },
            {
              q: "What is port numbers for SMTP protocols?",
              options: ["200", "25", "403", "80"],
              correct: 1,
              translation: "ما هو رقم المنفذ لبروتوكول SMTP؟",
              explanation: "25.",
            },
            {
              q: "What are the main advantages of using a switched network compared to a sharedmedia network?",
              options: [
                "Switched networks are less expensive to implement and require simpler cabling.",
                "Switched networks offer higher bandwidth and reduced collisions for individual devices.",
                "Switched networks are easier to manage and troubleshoot compared to sharedmedia networks.",
                "Switched networks are inherently more secure due to isolated data paths.",
              ],
              correct: 1,
              translation:
                "ما المزايا الرئيسية لاستخدام الشبكة المبدّلة (switched) مقارنة بالشبكة ذات الوسط المشترك؟",
              explanation: "عرض نطاق أعلى وتصادمات أقل لكل جهاز.",
            },
            {
              q: "Briefly describe the concept of Virtual LANs (VLANs).",
              options: [
                "A method for segmenting a physical network into logical subnetworks based on security or administrative purposes.",
                "A technique to combine multiple physical networks into a single logical network.",
                "A way to prioritize network traffic for different types of data.",
                "A method for encrypting data packets for secure communication.",
              ],
              correct: 0,
              translation:
                "صف باختصار مفهوم الشبكات المحلية الافتراضية (VLANs).",
              explanation:
                "تقسيم شبكة فيزيائية إلى شبكات فرعية منطقية لأغراض أمنية أو إدارية.",
            },
            {
              q: "What is the primary function of the Internet Protocol (IP) in the network layer?",
              options: [
                "To encapsulate data with header information for addressing and error detection.",
                "To route data packets across interconnected networks based on their destination addresses.",
                "To establish and manage connections between applications.",
                "To provide reliable data transfer with error checking and retransmission.",
              ],
              correct: 1,
              translation: "ما الوظيفة الأساسية لبروتوكول IP في طبقة الشبكة؟",
              explanation:
                "توجيه الحزم عبر الشبكات المترابطة بناءً على عناوين الوجهة.",
            },
            {
              q: "What is the difference between datagrams and virtual circuits in network layer services?",
              options: [
                "Datagrams are used in LANs, while virtual circuits are used in WANs.",
                "Datagrams provide a connectionless service, while virtual circuits offer connectionoriented communication with guaranteed delivery.",
                "Datagrams are more reliable than virtual circuits due to error correction mechanisms.",
                "Datagrams require more complex routing protocols compared to virtual circuits.",
              ],
              correct: 1,
              translation:
                "ما الفرق بين الداتاجرامات والدوائر الافتراضية في خدمات طبقة الشبكة؟",
              explanation:
                "الداتاجرام خدمة غير موجهة بالاتصال، أما الدائرة الافتراضية فموجهة بالاتصال مع تسليم مضمون.",
            },
            {
              q: "What is the function of the Internet Control Message Protocol in the network layer?",
              options: [
                "To exchange control messages for network diagnostics and error reporting.",
                "To route data packets based on their destination IP addresses.",
                "To provide reliable data transfer with error checking and retransmission.",
                "To translate domain names into corresponding IP addresses.",
              ],
              correct: 0,
              translation: "ما وظيفة بروتوكول ICMP في طبقة الشبكة؟",
              explanation:
                "تبادل رسائل التحكم لتشخيص الشبكة والإبلاغ عن الأخطاء.",
            },
            {
              q: "What is the purpose of port numbers in the transport layer?",
              options: [
                "To differentiate between different applications on a single device.",
                "To identify the source and destination devices on the network.",
                "To route data packets across different networks based on their destination addresses.",
                "To provide error detection and correction for reliable data transfer.",
              ],
              correct: 0,
              translation: "ما الغرض من أرقام المنافذ (ports) في طبقة النقل؟",
              explanation: "التمييز بين التطبيقات المختلفة على الجهاز الواحد.",
            },
            {
              q: "What is response status codes for request succeeded, requested object later in this message?",
              options: ["200", "301", "400", "505"],
              correct: 0,
              translation:
                "ما رمز حالة الاستجابة لطلب نجح والكائن المطلوب لاحقًا في هذه الرسالة؟",
              explanation: "200 OK.",
            },
            {
              q: "What is the role of the Domain Name System (DNS) in the application layer?",
              options: [
                "To translate domain names into corresponding IP addresses for user-friendly access.",
                "To manage network congestion and flow control.",
                "To establish and manage sessions between applications.",
                "To encrypt data packets for secure communication.",
              ],
              correct: 0,
              translation: "ما دور نظام أسماء النطاقات (DNS) في طبقة التطبيق؟",
              explanation: "ترجمة أسماء النطاقات إلى عناوين IP.",
            },
            {
              q: "What is response status codes for requested object moved, new location specified later in this message (in Location: field)?",
              options: ["301", "404", "400", "505"],
              correct: 0,
              translation:
                "ما رمز حالة الاستجابة لكائن تم نقله وموقعه الجديد محدد لاحقًا في الرسالة (في حقل Location:)؟",
              explanation: "301 Moved Permanently.",
            },
            {
              q: "What are some common techniques used for congestion control in networks?",
              options: [
                "Increasing the bandwidth of network media.",
                "Employing traffic shaping to prioritize critical data.",
                "Implementing queueing mechanisms to manage data flow.",
                "All the above",
              ],
              correct: 3,
              translation:
                "ما بعض التقنيات الشائعة للتحكم في الازدحام في الشبكات؟",
              explanation: "كل ما سبق.",
            },
            {
              q: "What is the function of the File Transfer Protocol (FTP) in the application layer?",
              options: [
                "To send and receive email messages.",
                "To exchange control messages for network diagnostics and error reporting.",
                "To browse the web and access information on remote servers.",
                "To transfer files between devices on a network.",
              ],
              correct: 3,
              translation:
                "ما وظيفة بروتوكول نقل الملفات (FTP) في طبقة التطبيق؟",
              explanation: "نقل الملفات بين الأجهزة على الشبكة.",
            },
            {
              q: "How does the Simple Mail Transfer Protocol (SMTP) differ from the Post Office Protocol (POP) in the application layer?",
              options: [
                "SMTP is used for sending emails, while POP is used for retrieving emails from a server.",
                "SMTP requires authentication for secure email access, while POP does not.",
                "SMTP operates on a different port number compared to POP.",
                "All the above",
              ],
              correct: 0,
              translation: "كيف يختلف SMTP عن POP في طبقة التطبيق؟",
              explanation:
                "SMTP لإرسال البريد بينما POP لاسترجاع البريد من الخادم.",
            },
            {
              q: "What is the purpose of the Hypertext Transfer Protocol (HTTP) in the application layer?",
              options: [
                "To exchange control messages for network diagnostics and error reporting.",
                "To transfer files between devices on a network.",
                "To send and receive email messages.",
                "To provide a protocol for accessing and interacting with web resources.",
              ],
              correct: 3,
              translation: "ما الغرض من بروتوكول HTTP في طبقة التطبيق؟",
              explanation:
                "توفير بروتوكول للوصول إلى موارد الويب والتفاعل معها.",
            },
            {
              q: "What are the main benefits of using a layered network architecture approach?",
              options: [
                "Provides a less secure communication environment",
                "Simplifies network design by combining all functionalities into a single layer.",
                "Reduces the complexity of network protocols and standards.",
                "Enables modularity, allowing independent development and modification of specific layers.",
              ],
              correct: 3,
              translation:
                "ما الفوائد الرئيسية لاستخدام معمارية الشبكة متعددة الطبقات؟",
              explanation:
                "تتيح الوحدوية (modularity) وتطوير وتعديل كل طبقة بشكل مستقل.",
            },
            {
              q: "if named host changes IP address, may not be known Internet-wide until all ....... expire!?",
              options: ["TTLs", "TLD", "UDP", "TCP"],
              correct: 0,
              translation:
                "إذا غيّر مضيف مسمّى عنوان IP الخاص به، فقد لا يُعرف على مستوى الإنترنت حتى تنتهي صلاحية كل .......",
              explanation: "TTLs (مدة صلاحية السجلات المخزنة مؤقتًا).",
            },
            {
              q: "What is response status codes for request msg not understood by server?",
              options: ["404", "301", "400", "505"],
              correct: 2,
              translation: "ما رمز حالة الاستجابة لرسالة طلب لم يفهمها الخادم؟",
              explanation: "400 Bad Request.",
            },
            {
              q: "What is the significance of firewalls in network security?",
              options: [
                "Firewalls provide secure remote access capabilities for authorized users",
                "Firewalls encrypt data packets for secure communication.",
                "Firewalls detect and prevent malware and malicious software from entering the network.",
                "Firewalls filter incoming and outgoing network traffic based on predefined security policies.",
              ],
              correct: 3,
              translation: "ما أهمية جدران الحماية (firewalls) في أمن الشبكات؟",
              explanation:
                "تقوم بتصفية الترافيك الداخل والخارج بناءً على سياسات أمنية محددة مسبقًا.",
            },
            {
              q: "What is the purpose of IP spoofing?",
              options: [
                "Packet interception",
                "Denial of Service",
                "Botnet",
                "Injection of false source address",
              ],
              correct: 3,
              translation: "ما الغرض من انتحال IP (IP spoofing)؟",
              explanation: "حقن عنوان مصدر مزيف.",
            },
            {
              q: "The number of layers in ISO OSI reference model is...",
              options: ["5", "7", "6", "10"],
              correct: 1,
              translation: "عدد طبقات نموذج ISO OSI المرجعي هو...",
              explanation: "7.",
            },
            {
              q: "What does SMTP stand for?",
              options: [
                "Simple Messaging Transferal Protocol",
                "Simple Mail Transfer Protocol",
                "Simplified Mail Transfer Protocol",
                "Simple Mailman Trail Protocol",
              ],
              correct: 1,
              translation: "ماذا يعني اختصار SMTP؟",
              explanation: "Simple Mail Transfer Protocol.",
            },
            {
              q: "E-mail uses which Application layer protocol?",
              options: ["SMTP", "HTTP", "FTP", "SIP"],
              correct: 0,
              translation:
                "البريد الإلكتروني يستخدم أي بروتوكول من طبقة التطبيق؟",
              explanation: "SMTP.",
            },
            {
              q: "Always-on host.",
              options: ["Client", "Server", "a and b", "None of the above"],
              correct: 1,
              translation: "المضيف الدائم التشغيل (Always-on host).",
              explanation: "الخادم (Server).",
            },
            {
              q: "Identifier includes...",
              options: ["IP address", "Port numbers", "Socket", "Both A and B"],
              correct: 3,
              translation: "المُعرِّف (Identifier) يتضمن...",
              explanation: "عنوان IP ورقم المنفذ معًا (Both A and B).",
            },
            {
              q: "Socket... messages.",
              options: ["Send", "Receive", "Both A and B", "None of the above"],
              correct: 2,
              translation: "المقبس (Socket) ... الرسائل.",
              explanation: "يرسل ويستقبل (Both A and B).",
            },
          ],
        },
        {
          t: "Final 2023 — Answers (MCQs & T/F) — 50 Questions",
          d: "Final exam 2023 (30 MCQ + 20 True/False)",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Tarek/Final 2023 - Answers - Computer Networks.pdf",
          questions: [
            {
              q: "time for a small packet to travel from a client to server and come back.",
              options: ["RTT", "HTTP", "URL"],
              correct: 0,
              translation:
                "الوقت الذي تستغرقه حزمة صغيرة للسفر من العميل إلى الخادم والعودة.",
              explanation: "RTT (زمن الرحلة ذهابًا وإيابًا).",
            },
            {
              q: "process in different hosts communicate by",
              options: [
                "exchanging messages",
                "inter-process communication",
                "URL",
              ],
              correct: 0,
              translation: "تتواصل العمليات في المضيفات المختلفة عن طريق:",
              explanation: "تبادل الرسائل (exchanging messages).",
            },
            {
              q: "data over DSL phone line goes to .......",
              options: ["Internet", "telephone net", "none of the previous"],
              correct: 0,
              translation: "البيانات عبر خط هاتف DSL تذهب إلى .......",
              explanation: "الإنترنت (Internet).",
            },
            {
              q: "if L=7.5 Mbits, R=1.5 Mbps then one-hop transmission delay .... Sec",
              options: ["1.5", "11.25", "5"],
              correct: 2,
              translation:
                "إذا كان L = 7.5 ميجابت و R = 1.5 ميجابت/ث فإن تأخير الإرسال لقفزة واحدة .... ثانية",
              explanation: "L/R = 7.5 ÷ 1.5 = 5 ثوانٍ.",
            },
            {
              q: ".... moves packets from router input to appropriate router output.",
              options: ["routing", "forwarding", "switching"],
              correct: 1,
              translation:
                ".... ينقل الحزم من مدخل الراوتر إلى المخرج المناسب.",
              explanation: "إعادة التوجيه (forwarding).",
            },
            {
              q: "socket ..... messages.",
              options: ["send", "receive", "send and receive"],
              correct: 2,
              translation: "المقبس (socket) ..... الرسائل.",
              explanation: "يرسل ويستقبل (send and receive).",
            },
            {
              q: "send packet with false source address.",
              options: [
                "type wrong address by mistake",
                "IP spoofing",
                "all of the previous",
              ],
              correct: 1,
              translation: "إرسال حزمة بعنوان مصدر مزيف.",
              explanation: "انتحال IP (IP spoofing).",
            },
            {
              q: "which of the following terms is not associated with the DSL?",
              options: ["DSLAM", "splitter", "CMTS"],
              correct: 2,
              translation: "أي من المصطلحات التالية لا يرتبط بـ DSL؟",
              explanation: "CMTS (يخص شبكات الكابل).",
            },
            {
              q: "Which of the following is an architecture paradigm?",
              options: ["P2P", "client-server", "all of the previous"],
              correct: 2,
              translation: "أي مما يلي يُعد نموذجًا معماريًا؟",
              explanation: "كل ما سبق (P2P و client-server).",
            },
            {
              q: "which of the following is false with respect to TCP?",
              options: [
                "connection-oriented",
                "transport layer protocol",
                "unreliable",
              ],
              correct: 2,
              translation: "أي مما يلي خاطئ بخصوص TCP؟",
              explanation: "unreliable — لأن TCP بروتوكول موثوق.",
            },
            {
              q: "application layer protocol defines ......",
              options: [
                "types of messages exchanged",
                "rules for when and how processes send and respond to messages",
                "all of the above",
              ],
              correct: 2,
              translation: "بروتوكول طبقة التطبيق يحدد ......",
              explanation: "كل ما سبق.",
            },
            {
              q: "when displaying a web page, the application layer uses the .....",
              options: ["HTTP", "FTP", "SMTP"],
              correct: 0,
              translation: "عند عرض صفحة ويب، تستخدم طبقة التطبيق .....",
              explanation: "HTTP.",
            },
            {
              q: "All communication activities in internet is governed by",
              options: ["router", "protocol", "network"],
              correct: 1,
              translation: "جميع أنشطة الاتصال في الإنترنت تحكمها:",
              explanation: "البروتوكولات (protocol).",
            },
            {
              q: "P2P applications face the challenge",
              options: ["ISP Friendly", "Security", "All of the previous"],
              correct: 2,
              translation: "تطبيقات P2P تواجه التحدي:",
              explanation: "كل ما سبق (ISP friendly و Security ...).",
            },
            {
              q: "End systems access the Internet through ______________",
              options: [
                "Internet Service Providers (ISPs)",
                "Customer premises Equipment (CBE)",
                "Digital subscriber line (DSL)",
              ],
              correct: 0,
              translation:
                "تصل الأنظمة الطرفية إلى الإنترنت عن طريق ______________",
              explanation: "مزودي خدمة الإنترنت (ISPs).",
            },
            {
              q: "The only control that the application developer has on the transport-layer side is",
              options: [
                "the choice of transport protocol",
                "the choice of link protocol",
                "the choice of network protocol",
              ],
              correct: 0,
              translation: "التحكم الوحيد لمطور التطبيق في جانب طبقة النقل هو:",
              explanation: "اختيار بروتوكول النقل.",
            },
            {
              q: "-------- can make use of as much, or as little, throughput as happens to be available.",
              options: [
                "bandwidth-sensitive applications",
                "elastic applications",
                "critical applications",
              ],
              correct: 1,
              translation:
                "-------- يمكنها استخدام أي قدر من الإنتاجية المتاحة، قليلًا كان أو كثيرًا.",
              explanation: "التطبيقات المرنة (elastic applications).",
            },
            {
              q: "When this client-server interaction is taking place over TCP, the application developer needs to make an important decision—should each request/response pair be sent over a separate TCP connection, or should all of the requests and their corresponding responses be sent over the same TCP connection? In the former approach, the application is said to use ---",
              options: [
                "non-persistent connections",
                "persistent connections",
                "critical connections",
              ],
              correct: 0,
              translation:
                "في النهج الأول (كل زوج طلب/استجابة على اتصال TCP منفصل) يُقال إن التطبيق يستخدم ---",
              explanation: "اتصالات غير مستمرة (non-persistent).",
            },
            {
              q: "The RTT includes",
              options: [
                "packet-propagation delays",
                "packet-queuing delays",
                "all of the previous",
              ],
              correct: 2,
              translation: "زمن الرحلة ذهابًا وإيابًا (RTT) يشمل",
              explanation: "كل ما سبق.",
            },
            {
              q: "The number of layers in ISO / OSI reference model is __________",
              options: ["10", "7", "6"],
              correct: 1,
              translation: "عدد طبقات نموذج ISO / OSI المرجعي هو __________",
              explanation: "7.",
            },
            {
              q: "Which is not an application layer protocol?",
              options: ["HTTP", "SMTP", "TCP"],
              correct: 2,
              translation: "أي مما يلي ليس بروتوكول طبقة تطبيق؟",
              explanation: "TCP (بروتوكول طبقة النقل).",
            },
            {
              q: "e -mail uses which protocol?",
              options: ["SMTP", "HTTP", "FTP"],
              correct: 0,
              translation: "البريد الإلكتروني يستخدم أي بروتوكول؟",
              explanation: "SMTP.",
            },
            {
              q: "malware can record keystrokes, web sites visited, upload info to collection site.",
              options: ["virus", "worm", "spyware"],
              correct: 2,
              translation:
                "برمجية خبيثة تستطيع تسجيل ضغطات المفاتيح والمواقع التي تمت زيارتها ورفع المعلومات إلى موقع التجميع.",
              explanation: "برامج التجسس (spyware).",
            },
            {
              q: "Which protocol is a protocol of application layer?",
              options: ["HTTP", "TCP", "IP"],
              correct: 0,
              translation: "أي بروتوكول هو بروتوكول من طبقة التطبيق؟",
              explanation: "HTTP.",
            },
            {
              q: "What is client process?",
              options: [
                "Process that initiates communication.",
                "Process that waits to be contacted.",
                "protocol in the application layer.",
              ],
              correct: 0,
              translation: "ما هي عملية العميل (client process)؟",
              explanation: "العملية التي تبدأ الاتصال.",
            },
            {
              q: "What is the HTTP port number?",
              options: ["25", "110", "80"],
              correct: 2,
              translation: "ما هو رقم منفذ HTTP؟",
              explanation: "80.",
            },
            {
              q: "voice over DSL phone line goes to................",
              options: ["internet", "telephone net", "cable net"],
              correct: 1,
              translation: "الصوت عبر خط هاتف DSL يذهب إلى................",
              explanation: "شبكة الهاتف (telephone net).",
            },
            {
              q: "..........are the 2 key network core functions",
              options: [
                "routing& switching",
                "routing&forwarding",
                "none of the previous",
              ],
              correct: 1,
              translation: "..........هما وظيفتا قلب الشبكة الرئيسيتان.",
              explanation: "التوجيه وإعادة التوجيه (routing & forwarding).",
            },
            {
              q: "check bit errors.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
              ],
              correct: 0,
              translation: "فحص أخطاء البتات.",
              explanation: "معالجة العقدة (nodal processing).",
            },
            {
              q: "determine output link.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
              ],
              correct: 0,
              translation: "تحديد رابط الإخراج.",
              explanation: "معالجة العقدة (nodal processing).",
            },
            {
              q: "In a client-server architecture, there is an always-on host, called the server",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم، يوجد مضيف دائم التشغيل يسمى الخادم.",
              explanation: "صحيح.",
            },
            {
              q: "with the client-server architecture, clients directly communicate with each other",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في معمارية العميل-الخادم، يتواصل العملاء مباشرة مع بعضهم.",
              explanation: "خطأ، العملاء يتواصلون مع الخادم وليس مع بعضهم.",
            },
            {
              q: "in the client-server architecture is that the server has a fixed, well-known address, called an IP address",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم، للخادم عنوان ثابت ومعروف يسمى عنوان IP.",
              explanation: "صحيح.",
            },
            {
              q: "a client can always contact the server by sending a packet to the server's IP address",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يستطيع العميل دائمًا الاتصال بالخادم بإرسال حزمة إلى عنوان IP الخاص بالخادم.",
              explanation: "صحيح.",
            },
            {
              q: "a popular social-networking site can quickly become overwhelmed if it has only one server handling all of its requests",
              options: ["True", "False"],
              correct: 0,
              translation:
                "موقع تواصل اجتماعي شهير قد يُرهَق بسرعة إذا كان لديه خادم واحد فقط يعالج كل الطلبات.",
              explanation: "صحيح.",
            },
            {
              q: "A data center can have hundreds of thousands of servers, which must be powered and maintained",
              options: ["True", "False"],
              correct: 0,
              translation:
                "قد يحتوي مركز البيانات على مئات الآلاف من الخوادم التي يجب تشغيلها وصيانتها.",
              explanation: "صحيح.",
            },
            {
              q: "the service providers do not pay recurring interconnection and bandwidth costs for sending data from their data centers.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "مزودو الخدمة لا يدفعون تكاليف الربط وعرض النطاق المتكررة لإرسال البيانات من مراكز البيانات الخاصة بهم.",
              explanation: "خطأ، هم يدفعون هذه التكاليف.",
            },
            {
              q: "In a P2P architecture, the peers are owned by the service provider.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في معمارية P2P، الأقران (peers) مملوكة لمزود الخدمة.",
              explanation: "خطأ، الأقران يملكها المستخدمون.",
            },
            {
              q: "One of the most compelling features of P2P architectures is their self-scalability.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "من أكثر مزايا معمارية P2P جاذبية قابليتها للتوسع الذاتي.",
              explanation: "صحيح.",
            },
            {
              q: "A process can be thought of as a program that is running within an end system.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يمكن اعتبار العملية (process) برنامجًا قيد التشغيل داخل نظام طرفي.",
              explanation: "صحيح.",
            },
            {
              q: "a process in a P2P file-sharing system can not both upload and download files.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "لا تستطيع العملية في نظام مشاركة ملفات P2P رفع وتنزيل الملفات معًا.",
              explanation: "خطأ، تستطيع رفع وتنزيل الملفات معًا.",
            },
            {
              q: "In the context of a communication session between a pair of processes, the process that initiates the communication is labeled as the server. The process that waits to be contacted to begin the session is the client.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في سياق جلسة اتصال بين عمليتين، العملية التي تبدأ الاتصال تسمى الخادم، والعملية التي تنتظر الاتصال لبدء الجلسة هي العميل.",
              explanation:
                "خطأ، العكس هو الصحيح: التي تبدأ هي العميل والتي تنتظر هي الخادم.",
            },
            {
              q: "A process sends messages into, and receives messages from, the network through a software interface called a socket.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "ترسل العملية الرسائل إلى الشبكة وتستقبلها منها عبر واجهة برمجية تسمى المقبس (socket).",
              explanation: "صحيح.",
            },
            {
              q: "the interface between the application layer and the transport layer within a host is also referred to as the Application Programming Interface (API) between the application and the network",
              options: ["True", "False"],
              correct: 0,
              translation:
                "تُسمى الواجهة بين طبقة التطبيق وطبقة النقل داخل المضيف أيضًا واجهة برمجة التطبيقات (API) بين التطبيق والشبكة.",
              explanation: "صحيح.",
            },
            {
              q: "The application developer has control of everything on the application-layer side of the socket and has control of everything of the transport-layer side of the socket.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "يتحكم مطور التطبيق في كل شيء في جانب طبقة التطبيق من المقبس وفي كل شيء في جانب طبقة النقل منه.",
              explanation: "خطأ، يتحكم في جانب طبقة التطبيق فقط.",
            },
            {
              q: "Popular applications have not been assigned specific port numbers.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "التطبيقات الشائعة لم يتم تخصيص أرقام منافذ محددة لها.",
              explanation: "خطأ، التطبيقات الشائعة لها أرقام منافذ محددة.",
            },
            {
              q: "something has to be done to guarantee that the data sent by one end of the application is delivered correctly and completely to the other end of the application. If a protocol provides such a guaranteed data delivery service, it is said to provide reliable data transfer.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يجب فعل شيء لضمان وصول البيانات المرسلة من أحد طرفي التطبيق إلى الطرف الآخر بشكل صحيح وكامل. إذا وفّر بروتوكول خدمة التسليم المضمونة هذه يُقال إنه يوفر نقل بيانات موثوقًا.",
              explanation: "صحيح.",
            },
            {
              q: "When a transport-layer protocol doesn't provide reliable data transfer, this is not acceptable for loss-tolerant applications,",
              options: ["True", "False"],
              correct: 1,
              translation:
                "عندما لا يوفر بروتوكول طبقة النقل نقل بيانات موثوقًا، فإن هذا غير مقبول للتطبيقات التي تتحمل فقدان البيانات.",
              explanation: "خطأ، هذا مقبول للتطبيقات المتسامحة مع الفقد.",
            },
            {
              q: "in UDP there is handshaking before the two processes start to communicate.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في UDP يوجد مصافحة (handshaking) قبل أن تبدأ العمليتان بالتواصل.",
              explanation: "خطأ، UDP لا يستخدم المصافحة.",
            },
            {
              q: "UDP provides a reliable data transfer service.",
              options: ["True", "False"],
              correct: 1,
              translation: "يوفر UDP خدمة نقل بيانات موثوقة.",
              explanation: "خطأ، UDP غير موثوق.",
            },
          ],
        },
        {
          t: "Final MC354 — Answers (10 MCQ + 57 T/F)",
          d: "Final Exam MC354",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Tarek/Final_MC354-Answers-Computer_Networks.pdf",
          questions: [
            {
              q: "check bit errors.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
                "propagation delay",
              ],
              correct: 0,
              translation: "فحص أخطاء البتات.",
              explanation: "معالجة العقدة (nodal processing).",
            },
            {
              q: "determine output link.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
                "propagation delay",
              ],
              correct: 0,
              translation: "تحديد رابط الإخراج.",
              explanation: "معالجة العقدة (nodal processing).",
            },
            {
              q: "time waiting at output link for transmission.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
                "propagation delay",
              ],
              correct: 1,
              translation: "وقت الانتظار عند رابط الإخراج للإرسال.",
              explanation: "تأخير الطابور (queueing delay).",
            },
            {
              q: "depends on congestion level of router.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
                "propagation delay",
              ],
              correct: 1,
              translation: "يعتمد على مستوى الازدحام في الراوتر.",
              explanation: "تأخير الطابور (queueing delay).",
            },
            {
              q: "= L/R, L: packet length (bits), R: link bandwidth (bps).",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
                "propagation delay",
              ],
              correct: 2,
              translation:
                "= L/R، حيث L: طول الحزمة (بت)، R: عرض نطاق الرابط (بت/ث).",
              explanation: "تأخير الإرسال (transmission delay).",
            },
            {
              q: "= d/s, d: length of physical link, s: propagation speed in medium.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
                "propagation delay",
              ],
              correct: 3,
              translation:
                "= d/s، حيث d: طول الرابط المادي، s: سرعة الانتشار في الوسط.",
              explanation: "تأخير الانتشار (propagation delay).",
            },
            {
              q: "self-replicating infection by receiving/executing object (e.g., e-mail attachment)",
              options: ["virus", "worm", "spyware", "botnet"],
              correct: 0,
              translation:
                "عدوى ذاتية التكاثر عن طريق استقبال/تنفيذ كائن (مثل مرفق بريد إلكتروني).",
              explanation: "فيروس (virus).",
            },
            {
              q: "self-replicating infection by passively receiving object that gets itself executed",
              options: ["virus", "worm", "spyware", "botnet"],
              correct: 1,
              translation:
                "عدوى ذاتية التكاثر عن طريق استقبال كائن بشكل سلبي يقوم بتنفيذ نفسه.",
              explanation: "دودة (worm).",
            },
            {
              q: "malware can record keystrokes, web sites visited, upload info to collection site.",
              options: ["virus", "worm", "spyware", "botnet"],
              correct: 2,
              translation:
                "برمجية خبيثة تسجل ضغطات المفاتيح والمواقع المزارة وترفع المعلومات إلى موقع التجميع.",
              explanation: "برامج التجسس (spyware).",
            },
            {
              q: "attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming resource with bogus traffic.",
              options: ["virus", "worm", "spyware", "DoS"],
              correct: 3,
              translation:
                "يجعل المهاجمون الموارد (الخادم، عرض النطاق) غير متاحة للترافيك المشروع عن طريق إغراقها بترافيك زائف.",
              explanation: "هجوم حجب الخدمة (DoS).",
            },
            {
              q: "RFC stands for Request for comments.",
              options: ["True", "False"],
              correct: 0,
              translation: "RFC تعني Request for comments.",
              explanation: "صحيح.",
            },
            {
              q: "IETF stands for Internet Engineering Task Force.",
              options: ["True", "False"],
              correct: 0,
              translation: "IETF تعني Internet Engineering Task Force.",
              explanation: "صحيح.",
            },
            {
              q: "protocols define format, order of msgs sent and received among network entities, and actions taken on msg transmission, receipt.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "تحدد البروتوكولات تنسيق وترتيب الرسائل المرسلة والمستقبلة بين كيانات الشبكة والإجراءات المتخذة عند إرسال/استقبال الرسالة.",
              explanation: "صحيح.",
            },
            {
              q: "voice over DSL phone line goes to Internet.",
              options: ["True", "False"],
              correct: 1,
              translation: "الصوت عبر خط هاتف DSL يذهب إلى الإنترنت.",
              explanation: "خطأ، يذهب إلى شبكة الهاتف.",
            },
            {
              q: "data over DSL phone line goes to telephone net.",
              options: ["True", "False"],
              correct: 1,
              translation: "البيانات عبر خط هاتف DSL تذهب إلى شبكة الهاتف.",
              explanation: "خطأ، تذهب إلى الإنترنت.",
            },
            {
              q: "In DSL, voice, data transmitted at different frequencies over dedicated line to central office.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في DSL يتم إرسال الصوت والبيانات بترددات مختلفة عبر خط مخصص إلى المكتب المركزي.",
              explanation: "صحيح.",
            },
            {
              q: "DSL stands for digital subscriber line.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "DSL تعني digital subscriber line (خط المشترك الرقمي).",
              explanation: "صحيح.",
            },
            {
              q: "In cable network, data, TV transmitted at different frequencies over shared cable distribution network.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في شبكة الكابل يتم إرسال البيانات والتلفزيون بترددات مختلفة عبر شبكة توزيع كابل مشتركة.",
              explanation: "صحيح.",
            },
            {
              q: "link transmission rate, aka link capacity, aka link bandwidth.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "معدل إرسال الرابط، ويُعرف أيضًا بسعة الرابط أو عرض نطاق الرابط.",
              explanation: "صحيح.",
            },
            {
              q: "packet transmission delay = time needed to transmit L-bit packet into link .",
              options: ["True", "False"],
              correct: 0,
              translation:
                "تأخير إرسال الحزمة = الوقت اللازم لإرسال حزمة من L بت إلى الرابط.",
              explanation: "صحيح.",
            },
            {
              q: "twisted pair (TP) is two insulated copper wires.",
              options: ["True", "False"],
              correct: 0,
              translation: "الزوج الملتوي (TP) هو سلكان نحاسيان معزولان.",
              explanation: "صحيح.",
            },
            {
              q: "In packet-switching hosts break application-layer messages into packets.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في تبديل الحزم تقوم المضيفات بتقسيم رسائل طبقة التطبيق إلى حزم.",
              explanation: "صحيح.",
            },
            {
              q: "If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: packets will queue, wait to be transmitted on link .",
              options: ["True", "False"],
              correct: 0,
              translation:
                "إذا تجاوز معدل الوصول (بالبت) إلى الرابط معدل إرسال الرابط لفترة من الزمن: ستنتظر الحزم في الطابور ليتم إرسالها على الرابط.",
              explanation: "صحيح.",
            },
            {
              q: "If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: packets can be dropped (lost) if memory (buffer) fills up.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "إذا تجاوز معدل الوصول إلى الرابط معدل إرساله لفترة من الزمن: يمكن إسقاط الحزم (فقدانها) إذا امتلأت الذاكرة (البافر).",
              explanation: "صحيح.",
            },
            {
              q: "forwarding: determines source-destination route taken by packets.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "forwarding: يحدد مسار المصدر-الوجهة الذي تسلكه الحزم.",
              explanation: "خطأ، هذا تعريف routing.",
            },
            {
              q: "routing: move packets from router's input to appropriate router output.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "routing: ينقل الحزم من مدخل الراوتر إلى المخرج المناسب.",
              explanation: "خطأ، هذا تعريف forwarding.",
            },
            {
              q: "connecting each access ISP to each other directly does scale.",
              options: ["True", "False"],
              correct: 1,
              translation: "توصيل كل ISP وصول بالآخر مباشرةً قابل للتوسع.",
              explanation: "خطأ، غير قابل للتوسع (O(N²) اتصال).",
            },
            {
              q: "R: link bandwidth (bps), L: packet length (bits), a: average packet arrival rate, La/R ~ 0: avg. queueing delay small.",
              options: ["True", "False"],
              correct: 0,
              translation: "La/R ≈ 0: متوسط تأخير الطابور صغير.",
              explanation: "صحيح.",
            },
            {
              q: "R: link bandwidth (bps), L: packet length (bits), a: average packet arrival rate, La/R -> 1: avg. queueing delay large.",
              options: ["True", "False"],
              correct: 0,
              translation: "La/R → 1: متوسط تأخير الطابور كبير.",
              explanation: "صحيح.",
            },
            {
              q: "R: link bandwidth (bps), L: packet length (bits), a: average packet arrival rate, La/R > 1: more “work” arriving than can be serviced, average delay infinite!",
              options: ["True", "False"],
              correct: 0,
              translation:
                'La/R > 1: يصل "عمل" أكثر مما يمكن خدمته، فيصبح متوسط التأخير لانهائيًا!',
              explanation: "صحيح.",
            },
            {
              q: "lost packet may be retransmitted by previous node, by source end system, or not at all.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "قد تُعاد إرسال الحزمة المفقودة بواسطة العقدة السابقة أو نظام المصدر الطرفي أو لا تُعاد إطلاقًا.",
              explanation: "صحيح.",
            },
            {
              q: "throughput: rate (bits/time unit) at which bits transferred between sender/receiver.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "الإنتاجية (throughput): المعدل (بت/وحدة زمن) الذي تُنقل به البتات بين المرسل والمستقبل.",
              explanation: "صحيح.",
            },
            {
              q: "instantaneous throughput: rate at given point in time.",
              options: ["True", "False"],
              correct: 0,
              translation: "الإنتاجية اللحظية: المعدل عند نقطة زمنية معينة.",
              explanation: "صحيح.",
            },
            {
              q: "average throughput: rate over longer period of time.",
              options: ["True", "False"],
              correct: 0,
              translation: "متوسط الإنتاجية: المعدل على مدى فترة زمنية أطول.",
              explanation: "صحيح.",
            },
            {
              q: "In Internet protocol stack, application: supporting network applications (FTP, SMTP, HTTP)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في حزمة بروتوكولات الإنترنت، طبقة التطبيق: تدعم تطبيقات الشبكة (FTP, SMTP, HTTP).",
              explanation: "صحيح.",
            },
            {
              q: "In Internet protocol stack, transport: process-process data transfer (TCP, UDP)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في حزمة بروتوكولات الإنترنت، طبقة النقل: نقل البيانات بين العمليات (TCP, UDP).",
              explanation: "صحيح.",
            },
            {
              q: "In Internet protocol stack, network: routing of datagrams from source to destination (IP, routing protocols)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في حزمة بروتوكولات الإنترنت، طبقة الشبكة: توجيه الداتاجرامات من المصدر إلى الوجهة (IP وبروتوكولات التوجيه).",
              explanation: "صحيح.",
            },
            {
              q: "In Internet protocol stack, link: data transfer between neighboring network elements (Ethernet, 802.111 (WiFi), PPP)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في حزمة بروتوكولات الإنترنت، طبقة الرابط: نقل البيانات بين عناصر الشبكة المتجاورة (Ethernet, 802.11 (WiFi), PPP).",
              explanation: "صحيح.",
            },
            {
              q: "In Internet protocol stack, physical: bits “on the wire”.",
              options: ["True", "False"],
              correct: 0,
              translation:
                'في حزمة بروتوكولات الإنترنت، الطبقة الفيزيائية: البتات "على السلك".',
              explanation: "صحيح.",
            },
            {
              q: "In ISO/OSI reference model, presentation: allow applications to interpret meaning of data, e.g., encryption, compression, machine-specific conventions.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في نموذج ISO/OSI، طبقة العرض: تسمح للتطبيقات بتفسير معنى البيانات مثل التشفير والضغط والاصطلاحات الخاصة بالجهاز.",
              explanation: "صحيح.",
            },
            {
              q: "In ISO/OSI reference model, session: synchronization, checkpointing, recovery of data exchange.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في نموذج ISO/OSI، طبقة الجلسة: المزامنة ونقاط الفحص واسترجاع تبادل البيانات.",
              explanation: "صحيح.",
            },
            {
              q: "Internet stack missing the layers presentation and session.",
              options: ["True", "False"],
              correct: 0,
              translation: "حزمة الإنترنت تفتقد طبقتي العرض والجلسة.",
              explanation: "صحيح.",
            },
            {
              q: "Internet not originally designed with (much) security in mind.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "لم يُصمَّم الإنترنت في الأصل مع أخذ الأمان (بدرجة كبيرة) في الاعتبار.",
              explanation: "صحيح.",
            },
            {
              q: "infected host can be enrolled in botnet, used for spam.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يمكن ضم المضيف المصاب إلى botnet واستخدامه في إرسال البريد المزعج.",
              explanation: "صحيح.",
            },
            {
              q: "IP spoofing: send packet with true source address.",
              options: ["True", "False"],
              correct: 1,
              translation: "انتحال IP: إرسال حزمة بعنوان مصدر حقيقي.",
              explanation: "خطأ، يكون العنوان مزيفًا (false source address).",
            },
            {
              q: "server not always-on host.",
              options: ["True", "False"],
              correct: 1,
              translation: "الخادم ليس مضيفًا دائم التشغيل.",
              explanation: "خطأ، الخادم مضيف دائم التشغيل.",
            },
            {
              q: "server has permanent IP address.",
              options: ["True", "False"],
              correct: 0,
              translation: "للخادم عنوان IP دائم.",
              explanation: "صحيح.",
            },
            {
              q: "server has data centers for scaling",
              options: ["True", "False"],
              correct: 0,
              translation: "الخادم لديه مراكز بيانات للتوسع.",
              explanation: "صحيح.",
            },
            {
              q: "In client-server architecture, clients communicate with server.",
              options: ["True", "False"],
              correct: 0,
              translation: "في معمارية العميل-الخادم يتواصل العملاء مع الخادم.",
              explanation: "صحيح.",
            },
            {
              q: "In client-server architecture, clients may be intermittently connected.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم قد يكون العملاء متصلين بشكل متقطع.",
              explanation: "صحيح.",
            },
            {
              q: "In client-server architecture, clients may have dynamic IP addresses.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم قد يكون للعملاء عناوين IP ديناميكية.",
              explanation: "صحيح.",
            },
            {
              q: "In client-server architecture, clients do not communicate directly with each other.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم لا يتواصل العملاء مباشرة مع بعضهم.",
              explanation: "صحيح.",
            },
            {
              q: "In P2P architecture, no always-on server.",
              options: ["True", "False"],
              correct: 0,
              translation: "في معمارية P2P لا يوجد خادم دائم التشغيل.",
              explanation: "صحيح.",
            },
            {
              q: "In P2P architecture, arbitrary end systems directly communicate.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية P2P تتواصل الأنظمة الطرفية العشوائية مباشرة.",
              explanation: "صحيح.",
            },
            {
              q: "In P2P architecture, peers request service from other peers, provide service in return to other peers.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية P2P يطلب الأقران خدمة من أقران آخرين ويقدمون خدمة في المقابل.",
              explanation: "صحيح.",
            },
            {
              q: "In P2P architecture, peers are intermittently connected and change IP addresses.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية P2P يكون الأقران متصلين بشكل متقطع ويغيرون عناوين IP.",
              explanation: "صحيح.",
            },
            {
              q: "HTTP is “stateless”.",
              options: ["True", "False"],
              correct: 0,
              translation: 'HTTP هو بروتوكول "عديم الحالة" (stateless).',
              explanation: "صحيح.",
            },
            {
              q: "non-persistent HTTP: at most one object sent over TCP connection, connection then closed.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "HTTP غير المستمر: يُرسل كائن واحد على الأكثر عبر اتصال TCP ثم يُغلق الاتصال.",
              explanation: "صحيح.",
            },
            {
              q: "non-persistent HTTP: downloading multiple objects required multiple connections.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "HTTP غير المستمر: تنزيل كائنات متعددة يتطلب اتصالات متعددة.",
              explanation: "صحيح.",
            },
            {
              q: "persistent HTTP: multiple objects can be sent over single TCP connection between client, server.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "HTTP المستمر: يمكن إرسال كائنات متعددة عبر اتصال TCP واحد بين العميل والخادم.",
              explanation: "صحيح.",
            },
            {
              q: "RTT : time for a small packet to travel from client to server and back.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "RTT: الوقت الذي تستغرقه حزمة صغيرة للسفر من العميل إلى الخادم والعودة.",
              explanation: "صحيح.",
            },
            {
              q: "status code appears in 1st line in server-to-client response message.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يظهر رمز الحالة في السطر الأول من رسالة الاستجابة من الخادم إلى العميل.",
              explanation: "صحيح.",
            },
            {
              q: "status code: 200 OK — request succeeded, requested object later in this msg.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "رمز الحالة 200 OK: نجح الطلب والكائن المطلوب لاحقًا في هذه الرسالة.",
              explanation: "صحيح.",
            },
            {
              q: "status code: 301 Moved Permanently — requested object moved, new location specified later in this msg (Location:)",
              options: ["True", "False"],
              correct: 0,
              translation:
                "رمز الحالة 301 Moved Permanently: تم نقل الكائن المطلوب والموقع الجديد محدد لاحقًا في الرسالة (Location:).",
              explanation: "صحيح.",
            },
            {
              q: "status code: 400 Bad Request — request msg not understood by server",
              options: ["True", "False"],
              correct: 0,
              translation:
                "رمز الحالة 400 Bad Request: رسالة الطلب لم يفهمها الخادم.",
              explanation: "صحيح.",
            },
            {
              q: "status code: 404 Not Found — requested document not found on this server",
              options: ["True", "False"],
              correct: 0,
              translation:
                "رمز الحالة 404 Not Found: المستند المطلوب غير موجود على هذا الخادم.",
              explanation: "صحيح.",
            },
            {
              q: "status code: 505 HTTP Version Not Supported",
              options: ["True", "False"],
              correct: 0,
              translation: "رمز الحالة 505 HTTP Version Not Supported.",
              explanation: "صحيح.",
            },
          ],
        },
        {
          t: "Final Exam  — Q16 to Q50",
          d: "Same exam as Final 2023 (questions 16–50), partially highlighted",
          pdf: "datenew/subjects/computer-networks/questions/Final/Dr. Tarek/Computer Networks Final.pdf",
          questions: [
            {
              q: "The only control that the application developer has on the transport-layer side is",
              options: [
                "the choice of transport protocol",
                "the choice of link protocol",
                "the choice of network protocol",
              ],
              correct: 0,
              translation: "التحكم الوحيد لمطور التطبيق في جانب طبقة النقل هو:",
              explanation: "اختيار بروتوكول النقل.",
            },
            {
              q: "-------- can make use of as much, or as little, throughput as happens to be available.",
              options: [
                "bandwidth-sensitive applications",
                "elastic applications",
                "critical applications",
              ],
              correct: 1,
              translation:
                "-------- يمكنها استخدام أي قدر من الإنتاجية المتاحة، قليلًا كان أو كثيرًا.",
              explanation: "التطبيقات المرنة (elastic applications).",
            },
            {
              q: "When this client-server interaction is taking place over TCP, the application developer needs to make an important decision—should each request/response pair be sent over a separate TCP connection, or should all of the requests and their corresponding responses be sent over the same TCP connection? In the former approach, the application is said to use ---",
              options: [
                "non-persistent connections",
                "persistent connections",
                "critical connections",
              ],
              correct: 0,
              translation:
                "في النهج الأول (كل زوج طلب/استجابة على اتصال TCP منفصل) يُقال إن التطبيق يستخدم ---",
              explanation: "اتصالات غير مستمرة (non-persistent).",
            },
            {
              q: "The RTT includes",
              options: [
                "packet-propagation delays",
                "packet-queuing delays",
                "all of the previous",
              ],
              correct: 2,
              translation: "زمن الرحلة ذهابًا وإيابًا (RTT) يشمل",
              explanation: "كل ما سبق.",
            },
            {
              q: "The number of layers in ISO / OSI reference model is __________",
              options: ["10", "7", "6"],
              correct: 1,
              translation: "عدد طبقات نموذج ISO / OSI المرجعي هو __________",
              explanation: "7.",
            },
            {
              q: "Which is not an application layer protocol?",
              options: ["HTTP", "SMTP", "TCP"],
              correct: 2,
              translation: "أي مما يلي ليس بروتوكول طبقة تطبيق؟",
              explanation: "TCP (بروتوكول طبقة النقل).",
            },
            {
              q: "e -mail uses which protocol?",
              options: ["SMTP", "HTTP", "FTP"],
              correct: 0,
              translation: "البريد الإلكتروني يستخدم أي بروتوكول؟",
              explanation: "SMTP.",
            },
            {
              q: "malware can record keystrokes, web sites visited, upload info to collection site.",
              options: ["virus", "worm", "spyware"],
              correct: 2,
              translation:
                "برمجية خبيثة تستطيع تسجيل ضغطات المفاتيح والمواقع المزارة ورفع المعلومات إلى موقع التجميع.",
              explanation: "برامج التجسس (spyware).",
            },
            {
              q: "Which protocol is a protocol of application layer?",
              options: ["HTTP", "TCP", "IP"],
              correct: 0,
              translation: "أي بروتوكول هو بروتوكول من طبقة التطبيق؟",
              explanation: "HTTP.",
            },
            {
              q: "What is client process?",
              options: [
                "Process that initiates communication.",
                "Process that waits to be contacted.",
                "protocol in the application layer.",
              ],
              correct: 0,
              translation: "ما هي عملية العميل (client process)؟",
              explanation: "العملية التي تبدأ الاتصال.",
            },
            {
              q: "What is the HTTP port number?",
              options: ["25", "110", "80"],
              correct: 2,
              translation: "ما هو رقم منفذ HTTP؟",
              explanation: "80.",
            },
            {
              q: "voice over DSL phone line goes to................",
              options: ["internet", "telephone net", "cable net"],
              correct: 1,
              translation: "الصوت عبر خط هاتف DSL يذهب إلى................",
              explanation: "شبكة الهاتف (telephone net).",
            },
            {
              q: "..........are the 2 key network core functions",
              options: [
                "routing& switching",
                "routing&forwarding",
                "none of the previous",
              ],
              correct: 1,
              translation: "..........هما وظيفتا قلب الشبكة الرئيسيتان.",
              explanation: "التوجيه وإعادة التوجيه (routing & forwarding).",
            },
            {
              q: "check bit errors.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
              ],
              correct: 0,
              translation: "فحص أخطاء البتات.",
              explanation: "معالجة العقدة (nodal processing).",
            },
            {
              q: "determine output link.",
              options: [
                "nodal processing",
                "queueing delay",
                "transmission delay",
              ],
              correct: 0,
              translation: "تحديد رابط الإخراج.",
              explanation: "معالجة العقدة (nodal processing).",
            },
            {
              q: "In a client-server architecture, there is an always-on host, called the server",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم، يوجد مضيف دائم التشغيل يسمى الخادم.",
              explanation: "صحيح.",
            },
            {
              q: "with the client-server architecture, clients directly communicate with each other",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في معمارية العميل-الخادم، يتواصل العملاء مباشرة مع بعضهم.",
              explanation: "خطأ.",
            },
            {
              q: "in the client-server architecture is that the server has a fixed, well-known address, called an IP address",
              options: ["True", "False"],
              correct: 0,
              translation:
                "في معمارية العميل-الخادم، للخادم عنوان ثابت ومعروف يسمى عنوان IP.",
              explanation: "صحيح.",
            },
            {
              q: "a client can always contact the server by sending a packet to the server's IP address",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يستطيع العميل دائمًا الاتصال بالخادم بإرسال حزمة إلى عنوان IP الخاص بالخادم.",
              explanation:
                "صحيح (ملحوظة: التظليل في هذا الملف يشير إلى False لكن الإجابة النموذجية في Final 2023 هي True).",
            },
            {
              q: "a popular social-networking site can quickly become overwhelmed if it has only one server handling all of its requests",
              options: ["True", "False"],
              correct: 0,
              translation:
                "موقع تواصل اجتماعي شهير قد يُرهَق بسرعة إذا كان لديه خادم واحد فقط يعالج كل الطلبات.",
              explanation: "صحيح.",
            },
            {
              q: "A data center can have hundreds of thousands of servers, which must be powered and maintained",
              options: ["True", "False"],
              correct: 0,
              translation:
                "قد يحتوي مركز البيانات على مئات الآلاف من الخوادم التي يجب تشغيلها وصيانتها.",
              explanation: "صحيح.",
            },
            {
              q: "the service providers do not pay recurring interconnection and bandwidth costs for sending data from their data centers.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "مزودو الخدمة لا يدفعون تكاليف الربط وعرض النطاق المتكررة لإرسال البيانات من مراكز البيانات الخاصة بهم.",
              explanation: "خطأ، هم يدفعون هذه التكاليف.",
            },
            {
              q: "In a P2P architecture, the peers are owned by the service provider.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في معمارية P2P، الأقران (peers) مملوكة لمزود الخدمة.",
              explanation: "خطأ.",
            },
            {
              q: "One of the most compelling features of P2P architectures is their self-scalability.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "من أكثر مزايا معمارية P2P جاذبية قابليتها للتوسع الذاتي.",
              explanation: "صحيح.",
            },
            {
              q: "A process can be thought of as a program that is running within an end system.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يمكن اعتبار العملية (process) برنامجًا قيد التشغيل داخل نظام طرفي.",
              explanation: "صحيح.",
            },
            {
              q: "a process in a P2P file-sharing system can not both upload and download files.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "لا تستطيع العملية في نظام مشاركة ملفات P2P رفع وتنزيل الملفات معًا.",
              explanation: "خطأ، تستطيع الاثنين معًا.",
            },
            {
              q: "In the context of a communication session between a pair of processes, the process that initiates the communication is labeled as the server. The process that waits to be contacted to begin the session is the client.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في سياق جلسة اتصال بين عمليتين، العملية التي تبدأ الاتصال تسمى الخادم، والتي تنتظر الاتصال هي العميل.",
              explanation: "خطأ، العكس هو الصحيح.",
            },
            {
              q: "A process sends messages into, and receives messages from, the network through a software interface called a socket.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "ترسل العملية الرسائل إلى الشبكة وتستقبلها منها عبر واجهة برمجية تسمى المقبس (socket).",
              explanation: "صحيح.",
            },
            {
              q: "the interface between the application layer and the transport layer within a host is also referred to as the Application Programming Interface (API) between the application and the network",
              options: ["True", "False"],
              correct: 0,
              translation:
                "تُسمى الواجهة بين طبقة التطبيق وطبقة النقل داخل المضيف أيضًا واجهة برمجة التطبيقات (API) بين التطبيق والشبكة.",
              explanation: "صحيح.",
            },
            {
              q: "The application developer has control of everything on the application-layer side of the socket and has control of everything of the transport-layer side of the socket.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "يتحكم مطور التطبيق في كل شيء في جانب طبقة التطبيق من المقبس وفي كل شيء في جانب طبقة النقل منه.",
              explanation: "خطأ، يتحكم في جانب طبقة التطبيق فقط.",
            },
            {
              q: "Popular applications have not been assigned specific port numbers.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "التطبيقات الشائعة لم يتم تخصيص أرقام منافذ محددة لها.",
              explanation: "خطأ.",
            },
            {
              q: "something has to be done to guarantee that the data sent by one end of the application is delivered correctly and completely to the other end of the application. If a protocol provides such a guaranteed data delivery service, it is said to provide reliable data transfer.",
              options: ["True", "False"],
              correct: 0,
              translation:
                "يجب فعل شيء لضمان وصول البيانات المرسلة من أحد طرفي التطبيق إلى الطرف الآخر بشكل صحيح وكامل. إذا وفّر بروتوكول خدمة التسليم المضمونة هذه يُقال إنه يوفر نقل بيانات موثوقًا.",
              explanation: "صحيح.",
            },
            {
              q: "When a transport-layer protocol doesn't provide reliable data transfer, this is not acceptable for loss-tolerant applications,",
              options: ["True", "False"],
              correct: 1,
              translation:
                "عندما لا يوفر بروتوكول طبقة النقل نقل بيانات موثوقًا، فإن هذا غير مقبول للتطبيقات التي تتحمل فقدان البيانات.",
              explanation: "خطأ.",
            },
            {
              q: "in UDP there is handshaking before the two processes start to communicate.",
              options: ["True", "False"],
              correct: 1,
              translation:
                "في UDP يوجد مصافحة (handshaking) قبل أن تبدأ العمليتان بالتواصل.",
              explanation: "خطأ.",
            },
            {
              q: "UDP provides a reliable data transfer service.",
              options: ["True", "False"],
              correct: 1,
              translation: "يوفر UDP خدمة نقل بيانات موثوقة.",
              explanation: "خطأ.",
            },
          ],
        },
      ],
    },
  ],

  testBanks: [
    {
      t: "Test Bank Dr. Tarek",
      d: "Comprehensive Test Bank by Dr. Tarek",
      pdf: "datenew/subjects/computer-networks/questions/Test Bank/Dr. Tarek/Test Bank Dr. Tarek.pdf",
      questions: [
        {
          q: "A computer network:",
          options: [
            "Is a collection of hardware components and computers",
            "Is interconnected by communication channels",
            "Allows sharing of resources and information",
            "All of the above",
          ],
          correct: 3,
          translation: "شبكة الكمبيوتر:",
          explanation: "كل ما سبق.",
        },
        {
          q: "What is a firewall in a computer network?",
          options: [
            "The physical boundary of the network",
            "An operating system of a computer network",
            "A system designed to prevent unauthorized access",
            "A web browsing software",
          ],
          correct: 2,
          translation: "ما هو الجدار الناري (Firewall) في شبكة الكمبيوتر؟",
          explanation: "نظام مصمم لمنع الوصول غير المصرح به.",
        },
        {
          q: "What is the use of Bridge in the network?",
          options: [
            "To connect LANs",
            "To separate LANs",
            "To control network speed",
            "All of the above",
          ],
          correct: 0,
          translation: "ما هو استخدام الجسر (Bridge) في الشبكة؟",
          explanation: "لتوصيل شبكات LAN.",
        },
        {
          q: "Each IP packet must contain:",
          options: [
            "Only Source address",
            "Only Destination address",
            "Source and Destination address",
            "Source or Destination address",
          ],
          correct: 2,
          translation: "يجب أن تحتوي كل حزمة IP على:",
          explanation: "عنوان المصدر والوجهة.",
        },
        {
          q: "Which of these is not a communication channel?",
          options: ["Satellite", "Microwave", "Radio wave", "Wi-Fi"],
          correct: 3,
          translation: "أي مما يلي ليس قناة اتصال؟",
          explanation:
            "Wi-Fi هو تقنية اتصال لاسلكي، وليس قناة (وسط) فيزيائي بحد ذاته مثل الأقمار أو الموجات الدقيقة.",
        },
        {
          q: "MAN Stands for ____.",
          options: [
            "Metropolitan Area Network",
            "Main Area Network",
            "Metropolitan Access Network",
            "Metro Access Network",
          ],
          correct: 0,
          translation: "MAN تعني:",
          explanation: "شبكة المناطق الحضرية (Metropolitan Area Network).",
        },
        {
          q: "Which of these is not an example of unguided media?",
          options: [
            "Optical Fibre Cable",
            "Radio wave",
            "Bluetooth",
            "Satellite",
          ],
          correct: 0,
          translation:
            "أي مما يلي ليس مثالاً على الوسائط غير الموجهة (Unguided)؟",
          explanation: "كابل الألياف البصرية هو وسيط موجه.",
        },
        {
          q: "In which topology is all the nodes connected through a single Coaxial cable?",
          options: ["Star", "Tree", "Bus", "Ring"],
          correct: 2,
          translation:
            "في أي طوبولوجيا يتم توصيل جميع العقد من خلال كابل محوري واحد؟",
          explanation: "طوبولوجيا الناقل (Bus).",
        },
        {
          q: "Which of the following is the smallest network?",
          options: ["WAN", "MAN", "LAN", "Wi-Fi"],
          correct: 2,
          translation: "أي من الشبكات التالية هي الأصغر؟",
          explanation: "شبكة المنطقة المحلية (LAN).",
        },
        {
          q: "Which protocol is used for the transfer of hypertext content over the web?",
          options: ["HTML", "HTTP", "TCP/IP"],
          correct: 1,
          translation: "أي بروتوكول يستخدم لنقل محتوى النص التشعبي عبر الويب؟",
          explanation: "HTTP.",
        },
        {
          q: "What is a standalone computer?",
          options: [
            "A computer that is not connected to a network",
            "A computer that is being used as a server",
            "A computer that does not have any peripherals attached to it",
            "A computer that is used by only one person",
          ],
          correct: 0,
          translation: "ما هو الكمبيوتر المستقل (standalone)؟",
          explanation: "كمبيوتر غير متصل بشبكة.",
        },
        {
          q: "Central Computer which is powerful than other computers in the network is called as ______.",
          options: ["Client", "Server", "Hub", "Switch"],
          correct: 1,
          translation: "الكمبيوتر المركزي الأقوى في الشبكة يسمى:",
          explanation: "الخادم (Server).",
        },
        {
          q: "Network in which every computer is capable of playing the role of a client, or a server or both at same time is called",
          options: [
            "peer-to-peer network",
            "local area network",
            "dedicated server network",
            "wide area network",
          ],
          correct: 0,
          translation:
            "الشبكة التي يمكن فيها لكل كمبيوتر لعب دور العميل أو الخادم في نفس الوقت:",
          explanation: "شبكة الند للند (peer-to-peer).",
        },
        {
          q: "In peer-to-peer network, each computer in a network is referred as",
          options: ["server", "client", "peer", "sender"],
          correct: 2,
          translation: "في شبكة الند للند، يشار إلى كل كمبيوتر باسم:",
          explanation: "القرين (peer).",
        },
        {
          q: "Which transmission media is capable of having a much higher bandwidth (data capacity)?",
          options: [
            "Coaxial",
            "Twisted pair cable",
            "Untwisted cable",
            "Fiber optic",
          ],
          correct: 3,
          translation:
            "أي وسائط النقل قادرة على الحصول على عرض نطاق أعلى بكثير؟",
          explanation: "الألياف البصرية (Fiber optic).",
        },
        {
          q: "Which type of transmission media is the least expensive to manufacture?",
          options: [
            "Coaxial",
            "Twisted pair cable",
            "CAT cable",
            "Fiber optic",
          ],
          correct: 1,
          translation: "أي نوع من وسائط النقل هو الأقل تكلفة للتصنيع؟",
          explanation: "الكابل المزدوج المجدول (Twisted pair).",
        },
        {
          q: "Which of these components is internal to a computer and is required to connect the computer to a network ?",
          options: [
            "Wireless Access Point",
            "Network Interface card",
            "Switch",
            "Hub",
          ],
          correct: 1,
          translation:
            "أي من هذه المكونات داخلي في الكمبيوتر ومطلوب لتوصيله بشبكة؟",
          explanation: "بطاقة واجهة الشبكة (NIC).",
        },
        {
          q: "A device that forwards data packet from one network to another is called a",
          options: ["Bridge", "Router", "Hub", "Gateway"],
          correct: 1,
          translation: "الجهاز الذي يمرر حزم البيانات من شبكة إلى أخرى يسمى:",
          explanation: "الموجّه (Router).",
        },
        {
          q: "Which of the following is the fastest media of data transfer?",
          options: [
            "Co-axial Cable",
            "Untwisted Wire",
            "Telephone Lines",
            "Fiber Optic",
          ],
          correct: 3,
          translation: "أي مما يلي هو أسرع وسائط نقل البيانات؟",
          explanation: "الألياف البصرية (Fiber Optic).",
        },
        {
          q: "Hub is a",
          options: [
            "Broadcast device",
            "Uni-cast device",
            "Multi-cast device",
            "None of the above",
          ],
          correct: 0,
          translation: "المجمع (Hub) هو:",
          explanation: "جهاز بث (Broadcast device).",
        },
        {
          q: "Switch is a",
          options: [
            "Broadcast device",
            "Uni-cast device",
            "Multi-cast device",
            "None of the above",
          ],
          correct: 1,
          translation: "المبدل (Switch) هو:",
          explanation: "جهاز أحادي الإرسال (Uni-cast device).",
        },
        {
          q: "The device that can operate in place of a hub is a :",
          options: ["Switch", "Bridge", "Router", "Gateway"],
          correct: 0,
          translation: "الجهاز الذي يمكن أن يعمل بدلاً من المجمع (Hub) هو:",
          explanation: "المبدل (Switch).",
        },
        {
          q: "A repeater takes a weak and corrupted signal and ______ it.",
          options: ["Amplifies", "Regenerates", "Resembles", "Reroutes"],
          correct: 1,
          translation:
            "المكرر (Repeater) يأخذ إشارة ضعيفة وتالفة و ______ لها.",
          explanation: "يعيد توليدها (Regenerates).",
        },
        {
          q: "Which of the following is not a type of cloud?",
          options: ["Private", "Public", "Protected", "Hybrid"],
          correct: 2,
          translation: "أي مما يلي ليس نوعاً من السحابة؟",
          explanation: "Protected (المحمية) ليست نوعاً قياسياً.",
        },
        {
          q: "Protocols are",
          options: [
            "Agreements on how communication components and devices are to communicate",
            "Logical communication channels for transferring data",
            "Physical communication channels used for transferring data",
            "None of above",
          ],
          correct: 0,
          translation: "البروتوكولات هي:",
          explanation: "اتفاقيات حول كيفية تواصل مكونات وأجهزة الاتصال.",
        },
        {
          q: "In computer, converting a digital signal in to an analog signal is called",
          options: [
            "modulation",
            "demodulation",
            "conversion",
            "transformation",
          ],
          correct: 0,
          translation:
            "في الكمبيوتر، تحويل الإشارة الرقمية إلى إشارة تماثلية يسمى:",
          explanation: "التضمين (modulation).",
        },
        {
          q: "Protocol/Standard that is used to transfer data among computers on the Internet",
          options: ["FTP", "Archie", "TCP", "Gopher"],
          correct: 2,
          translation:
            "البروتوكول/المعيار المستخدم لنقل البيانات بين أجهزة الكمبيوتر على الإنترنت:",
          explanation: "TCP.",
        },
        {
          q: "Which address is used in an internet employing the TCP/IP protocols?",
          options: [
            "physical address and logical address",
            "port address",
            "specific address",
            "all of the mentioned",
          ],
          correct: 3,
          translation: "أي عنوان يستخدم في إنترنت يستعمل بروتوكولات TCP/IP؟",
          explanation: "كل ما ذُكر (العنوان الفيزيائي، المنطقي، والمنفذ).",
        },
        {
          q: "Transmission data rate is decided by",
          options: [
            "network layer",
            "physical layer",
            "data link layer",
            "transport layer",
          ],
          correct: 1,
          translation: "يتم تحديد معدل نقل البيانات بواسطة:",
          explanation: "الطبقة الفيزيائية (physical layer).",
        },
        {
          q: "When collection of various computers seems a single coherent system to its client, then it is called",
          options: [
            "computer network",
            "distributed system",
            "both (a) and (b)",
            "none of the mentioned",
          ],
          correct: 1,
          translation:
            "عندما تبدو مجموعة من أجهزة الكمبيوتر المختلفة وكأنها نظام واحد متماسك لعميلها، فإنها تسمى:",
          explanation: "نظام موزع (distributed system).",
        },
        {
          q: "Which one of the following computer network is built on the top of another network?",
          options: [
            "prior network",
            "chief network",
            "prime network",
            "overlay network",
          ],
          correct: 3,
          translation: "أي من شبكات الكمبيوتر التالية تم بناؤها فوق شبكة أخرى؟",
          explanation: "الشبكة المتراكبة (overlay network).",
        },
        {
          q: "Bluetooth is an example of",
          options: [
            "personal area network",
            "local area network",
            "virtual private network",
            "none of the mentioned",
          ],
          correct: 0,
          translation: "البلوتوث هو مثال على:",
          explanation: "شبكة المنطقة الشخصية (PAN).",
        },
        {
          q: "How many layers does OSI have?",
          options: ["4", "7", "5", "6"],
          correct: 1,
          translation: "كم عدد طبقات OSI؟",
          explanation: "7.",
        },
        {
          q: "Collection of network or networks is called",
          options: ["Intranet", "Internet", "Extranet", "LAN network"],
          correct: 1,
          translation: "مجموعة من الشبكات أو الشبكات تسمى:",
          explanation: "الإنترنت (Internet).",
        },
        {
          q: "What is the meaning of Bandwidth in Network?",
          options: [
            "Transmission capacity of a communication channels",
            "Connected Computers in the Network",
            "Class of IP used in Network",
            "None of Above",
          ],
          correct: 0,
          translation: "ما معنى عرض النطاق الترددي في الشبكة؟",
          explanation: "سعة الإرسال لقنوات الاتصال.",
        },
        {
          q: "ADSL is the abbreviation of",
          options: [
            "Asymmetric Dual Subscriber Line",
            "Asymmetric Digital System Line",
            "Asymmetric Dual System Line",
            "Asymmetric Digital Subscriber Line",
          ],
          correct: 3,
          translation: "ADSL هي اختصار لـ:",
          explanation: "Asymmetric Digital Subscriber Line.",
        },
        {
          q: "The Internet is an example of",
          options: [
            "Cell switched network",
            "circuit switched network",
            "Packet switched network",
            "All of above",
          ],
          correct: 2,
          translation: "الإنترنت هو مثال على:",
          explanation: "شبكة تبديل الحزم (Packet switched network).",
        },
        {
          q: "Which of the following includes the benefit of the Networking?",
          options: [
            "File Sharing",
            "Easier access to Resources",
            "Easier Backups",
            "All of the Above",
          ],
          correct: 3,
          translation: "أي مما يلي يشمل فائدة الشبكات؟",
          explanation: "كل ما سبق.",
        },
        {
          q: "Which of the following is not the Networking Devices?",
          options: ["Gateways", "Linux", "Routers", "Firewalls"],
          correct: 1,
          translation: "أي مما يلي ليس جهاز شبكة؟",
          explanation: "Linux هو نظام تشغيل.",
        },
        {
          q: "We can divide today's networks into ____ broad categories based on switching.",
          options: ["four", "three", "five", "two"],
          correct: 3,
          translation:
            "يمكننا تقسيم شبكات اليوم إلى ____ فئات عريضة بناءً على التبديل.",
          explanation: "فئتان (تبديل الدوائر وتبديل الحزم).",
        },
        {
          q: "A ____ is a device that operates only in the physical layer.",
          options: ["passive hub", "repeater", "bridge", "router"],
          correct: 1,
          translation: "____ هو جهاز يعمل فقط في الطبقة الفيزيائية.",
          explanation: "المكرر (repeater).",
        },
        {
          q: "Which protocol assigns IP address to the client connected in the internet?",
          options: ["DHCP", "IP", "RPC", "none of the above"],
          correct: 0,
          translation: "أي بروتوكول يعين عنوان IP للعميل المتصل بالإنترنت؟",
          explanation: "DHCP.",
        },
        {
          q: "____ is a network that covers geographic areas that are larger, such as districts or cities.",
          options: ["LAN", "MAN", "WAN"],
          correct: 1,
          translation:
            "____ هي شبكة تغطي مناطق جغرافية أكبر، مثل المقاطعات أو المدن.",
          explanation: "MAN.",
        },
        {
          q: "HTTP is the acronym of ............",
          options: [
            "Hyper Text Transfer Protocol",
            "Hyper Test Transfer Protocol",
            "Hyper Text Transport Protocol",
            "Hyper Text Transport Program",
          ],
          correct: 0,
          translation: "HTTP هي اختصار لـ:",
          explanation: "Hyper Text Transfer Protocol.",
        },
        {
          q: "DHCP is the abbreviation of",
          options: [
            "Dynamic Host Control Protocol",
            "Dynamic Host Configuration Protocol",
            "Dynamic Hyper Control Protocol",
            "Dynamic Hyper Configuration Protocol",
          ],
          correct: 1,
          translation: "DHCP هي اختصار لـ:",
          explanation: "Dynamic Host Configuration Protocol.",
        },
        {
          q: "In DSL telco provides these services",
          options: [
            "Wired phone access",
            "ISP",
            "All of the mentioned",
            "None of the mentioned",
          ],
          correct: 2,
          translation: "في DSL تقدم شركة الاتصالات هذه الخدمات:",
          explanation: "كل ما ذُكر.",
        },
        {
          q: "Physical or logical arrangement of network is _________",
          options: [
            "Topology",
            "Routing",
            "Networking",
            "None of the mentioned",
          ],
          correct: 0,
          translation: "الترتيب المادي أو المنطقي للشبكة هو:",
          explanation: "الطوبولوجيا (Topology).",
        },
        {
          q: "Data communication system within a building or campus is _________",
          options: ["LAN", "WAN", "MAN", "None of the mentioned"],
          correct: 0,
          translation: "نظام اتصال البيانات داخل مبنى أو حرم جامعي هو:",
          explanation: "LAN.",
        },
        {
          q: "Bridge works in which layer of the OSI model?",
          options: [
            "Application layer",
            "Transport layer",
            "Network layer",
            "Datalink layer",
          ],
          correct: 3,
          translation: "يعمل الجسر (Bridge) في أي طبقة من نموذج OSI؟",
          explanation: "طبقة ربط البيانات (Datalink layer).",
        },
        {
          q: "______ provides a connection-oriented reliable service for sending messages",
          options: ["TCP", "IP", "UDP", "All of the above"],
          correct: 0,
          translation:
            "______ يوفر خدمة موثوقة موجهة نحو الاتصال لإرسال الرسائل.",
          explanation: "TCP.",
        },
        {
          q: "Which layers of the OSI model are host-to-host layers?",
          options: [
            "Transport, Session, Presentation, Application",
            "Network, Transport, Session, Presentation",
            "Datalink, Network, Transport, Session",
            "Physical, Datalink, Network, Transport",
          ],
          correct: 0,
          translation: "أي طبقات من نموذج OSI هي طبقات مضيف إلى مضيف؟",
          explanation: "Transport, Session, Presentation, Application.",
        },
        {
          q: "The last address of IP address represents",
          options: [
            "Unicast address",
            "Network address",
            "Broadcast address",
            "None of above",
          ],
          correct: 2,
          translation: "العنوان الأخير لعنوان IP يمثل:",
          explanation: "عنوان البث (Broadcast address).",
        },
        {
          q: "Which of the following layer of OSI model also called end-to-end layer?",
          options: [
            "Presentation layer",
            "Network layer",
            "Session layer",
            "Transport layer",
          ],
          correct: 3,
          translation:
            "أي من طبقات نموذج OSI التالية تسمى أيضاً طبقة طرف إلى طرف (end-to-end)؟",
          explanation: "طبقة النقل (Transport layer).",
        },
      ],
    },

    {
      t: "Test Bank - Answers",
      d: "General Test Bank",
      pdf: "datenew/subjects/computer-networks/questions/Test Bank/Other/Test Bank - Answers - Computer Networks.pdf",
      questions: [
        {
          q: "check bit errors.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 0,
          translation: "فحص أخطاء البتات.",
          explanation: "nodal processing.",
        },
        {
          q: "determine output link.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 0,
          translation: "تحديد رابط الإخراج.",
          explanation: "nodal processing.",
        },
        {
          q: "time waiting at output link for transmission.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 1,
          translation: "وقت الانتظار في رابط الإخراج للإرسال.",
          explanation: "queueing delay.",
        },
        {
          q: "depends on congestion level of router.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 1,
          translation: "يعتمد على مستوى الازدحام.",
          explanation: "queueing delay.",
        },
        {
          q: "= L/R, L: packet length (bits), R: link bandwidth (bps).",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 2,
          translation: "= L/R.",
          explanation: "transmission delay.",
        },
        {
          q: "= d/s, d: length of physical link, s: propagation speed in medium.",
          options: [
            "nodal processing",
            "queueing delay",
            "transmission delay",
            "propagation delay",
          ],
          correct: 3,
          translation: "= d/s.",
          explanation: "propagation delay.",
        },
        {
          q: "self-replicating infection by receiving/executing object (e.g., e-mail attachment).",
          options: ["virus", "worm", "spyware", "botnet"],
          correct: 0,
          translation: "عدوى ذاتية التكرار عن طريق استقبال/تنفيذ كائن.",
          explanation: "virus.",
        },
        {
          q: "self-replicating infection by passively receiving object that gets itself executed.",
          options: ["virus", "worm", "spyware", "botnet"],
          correct: 1,
          translation: "عدوى ذاتية التكرار عن طريق استقبال كائن بشكل سلبي.",
          explanation: "worm.",
        },
        {
          q: "malware can record keystrokes, web sites visited, upload info to collection site.",
          options: ["virus", "worm", "spyware", "botnet"],
          correct: 2,
          translation: "برمجيات خبيثة تسجل ضغطات المفاتيح.",
          explanation: "spyware.",
        },
        {
          q: "attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming resource with bogus traffic.",
          options: ["virus", "worm", "spyware", "DoS"],
          correct: 3,
          translation: "جعل الموارد غير متاحة للترافيك المشروع.",
          explanation: "DoS.",
        },
        {
          q: "RFC stands for Request for comments.",
          options: ["True", "False"],
          correct: 0,
          translation: "RFC تعني Request for comments.",
          explanation: "صحيح.",
        },
        {
          q: "IETF stands for Internet Engineering Task Force.",
          options: ["True", "False"],
          correct: 0,
          translation: "IETF تعني Internet Engineering Task Force.",
          explanation: "صحيح.",
        },
        {
          q: "protocols define format, order of msgs sent and received among network entities, and actions taken on msg transmission, receipt.",
          options: ["True", "False"],
          correct: 0,
          translation: "البروتوكولات تحدد تنسيق وترتيب الرسائل.",
          explanation: "صحيح.",
        },
        {
          q: "voice over DSL phone line goes to Internet.",
          options: ["True", "False"],
          correct: 1,
          translation: "الصوت عبر خط هاتف DSL يذهب للإنترنت.",
          explanation: "خطأ.",
        },
        {
          q: "data over DSL phone line goes to telephone net.",
          options: ["True", "False"],
          correct: 1,
          translation: "البيانات عبر خط هاتف DSL تذهب لشبكة الهاتف.",
          explanation: "خطأ.",
        },
        {
          q: "In DSL, voice, data transmitted at different frequencies over dedicated line to central office.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "في DSL، يتم إرسال الصوت والبيانات بترددات مختلفة عبر خط مخصص.",
          explanation: "صحيح.",
        },
        {
          q: "DSL stands for digital subscriber line.",
          options: ["True", "False"],
          correct: 0,
          translation: "DSL تعني digital subscriber line.",
          explanation: "صحيح.",
        },
        {
          q: "In cable network, data, TV transmitted at different frequencies over shared cable distribution network.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "في شبكة الكابل، يتم إرسال البيانات والتلفزيون بترددات مختلفة.",
          explanation: "صحيح.",
        },
        {
          q: "link transmission rate, aka link capacity, aka link bandwidth.",
          options: ["True", "False"],
          correct: 0,
          translation: "معدل إرسال الرابط يعرف بسعة الرابط أو عرض النطاق.",
          explanation: "صحيح.",
        },
        {
          q: "packet transmission delay = time needed to transmit L-bit packet into link.",
          options: ["True", "False"],
          correct: 0,
          translation: "تأخير إرسال الحزمة = الوقت اللازم لإرسال حزمة L-bit.",
          explanation: "صحيح.",
        },
        {
          q: "twisted pair (TP) is two insulated copper wires.",
          options: ["True", "False"],
          correct: 0,
          translation: "الزوج المجدول هو سلكين نحاسيين معزولين.",
          explanation: "صحيح.",
        },
        {
          q: "In packet-switching hosts break application-layer messages into packets.",
          options: ["True", "False"],
          correct: 0,
          translation: "في تبديل الحزم، تقوم المضيفات بتقسيم الرسائل إلى حزم.",
          explanation: "صحيح.",
        },
        {
          q: "If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: packets will queue, wait to be transmitted on link.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "إذا تجاوز معدل الوصول معدل الإرسال، ستصطف الحزم في طابور.",
          explanation: "صحيح.",
        },
        {
          q: "If arrival rate (in bits) to link exceeds transmission rate of link for a period of time: packets can be dropped (lost) if memory (buffer) fills up.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "إذا تجاوز معدل الوصول معدل الإرسال، يمكن إسقاط الحزم إذا امتلأت الذاكرة.",
          explanation: "صحيح.",
        },
        {
          q: "forwarding: determines source-destination route taken by packets.",
          options: ["True", "False"],
          correct: 1,
          translation: "forwarding: يحدد المسار من المصدر إلى الوجهة.",
          explanation: "خطأ.",
        },
        {
          q: "routing: move packets from router's input to appropriate router output.",
          options: ["True", "False"],
          correct: 1,
          translation: "routing: ينقل الحزم من مدخلات الراوتر إلى المخرجات.",
          explanation: "خطأ.",
        },
        {
          q: "connecting each access ISP to each other directly does scale.",
          options: ["True", "False"],
          correct: 1,
          translation: "توصيل كل ISP وصول ببعضها البعض مباشرة يتوسع.",
          explanation: "خطأ.",
        },
        {
          q: "La/R ~ 0: avg. queueing delay small.",
          options: ["True", "False"],
          correct: 0,
          translation: "La/R ~ 0: متوسط تأخير الطابور صغير.",
          explanation: "صحيح.",
        },
        {
          q: "La/R -> 1: avg. queueing delay large.",
          options: ["True", "False"],
          correct: 0,
          translation: "La/R -> 1: متوسط تأخير الطابور كبير.",
          explanation: "صحيح.",
        },
        {
          q: "La/R > 1: more 'work' arriving than can be serviced, average delay infinite!",
          options: ["True", "False"],
          correct: 0,
          translation: "La/R > 1: متوسط التأخير لا نهائي!",
          explanation: "صحيح.",
        },
        {
          q: "lost packet may be retransmitted by previous node, by source end system, or not at all.",
          options: ["True", "False"],
          correct: 0,
          translation: "قد يتم إعادة إرسال الحزمة المفقودة.",
          explanation: "صحيح.",
        },
        {
          q: "throughput: rate (bits/time unit) at which bits transferred between sender/receiver.",
          options: ["True", "False"],
          correct: 0,
          translation: "الإنتاجية: المعدل الذي يتم به نقل البتات.",
          explanation: "صحيح.",
        },
        {
          q: "In ISO/OSI reference model, presentation: allow applications to interpret meaning of data, e.g., encryption, compression, machine-specific conventions.",
          options: ["True", "False"],
          correct: 0,
          translation: "طبقة العرض تسمح للتطبيقات بتفسير معنى البيانات.",
          explanation: "صحيح.",
        },
        {
          q: "Internet stack missing the layers presentation and session.",
          options: ["True", "False"],
          correct: 0,
          translation: "حزمة الإنترنت تفتقد لطبقتين العرض والجلسة.",
          explanation: "صحيح.",
        },
        {
          q: "infected host can be enrolled in botnet, used for spam.",
          options: ["True", "False"],
          correct: 0,
          translation: "يمكن تسجيل مضيف مصاب في شبكة بوتنت.",
          explanation: "صحيح.",
        },
        {
          q: "IP spoofing: send packet with true source address.",
          options: ["True", "False"],
          correct: 1,
          translation: "انتحال IP: إرسال حزمة بعنوان مصدر حقيقي.",
          explanation: "خطأ.",
        },
        {
          q: "server not always-on host.",
          options: ["True", "False"],
          correct: 1,
          translation: "الخادم ليس مضيفاً دائم التشغيل.",
          explanation: "خطأ.",
        },
        {
          q: "server has permanent IP address.",
          options: ["True", "False"],
          correct: 0,
          translation: "الخادم لديه عنوان IP دائم.",
          explanation: "صحيح.",
        },
        {
          q: "In client-server architecture, clients communicate with server.",
          options: ["True", "False"],
          correct: 0,
          translation: "في بنية العميل-الخادم، يتواصل العملاء مع الخادم.",
          explanation: "صحيح.",
        },
        {
          q: "In client-server architecture, clients may be intermittently connected.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "في بنية العميل-الخادم، قد يكون العملاء متصلين بشكل متقطع.",
          explanation: "صحيح.",
        },
      ],
    },

    {
      t: "Test Bank Network 4 chapters",
      d: "Chapters 1-4 Test Bank",
      pdf: "datenew/subjects/computer-networks/questions/Test Bank/Other/Test Bank Network 4 chapters.pdf",
      questions: [
        {
          q: "What are the two most prominent types of packet switches in today's Internet?",
          options: [
            "Modems and switches",
            "Hubs and bridges",
            "Routers and link-layer switches",
            "Servers and clients",
          ],
          correct: 2,
          translation: "ما هما النوعان الأبرز من مبدلات الحزم في إنترنت اليوم؟",
          explanation:
            "الموجهات ومبدلات طبقة الربط (Routers and link-layer switches).",
        },
        {
          q: "In the Internet protocol stack, application-layer protocols such as HTTP and SMTP are almost always implemented in software in the end systems.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "في حزمة بروتوكولات الإنترنت، يتم تنفيذ بروتوكولات طبقة التطبيق مثل HTTP و SMTP دائمًا في البرامج في الأنظمة النهائية.",
          explanation: "صحيح.",
        },
        {
          q: "Which of the following is NOT a type of delay experienced by packets in packet-switched networks?",
          options: [
            "Processing delay",
            "Queuing delay",
            "Compilation delay",
            "Propagation delay",
          ],
          correct: 2,
          translation:
            "أي مما يلي ليس نوعًا من التأخير الذي تتعرض له الحزم في الشبكات التي تبدل الحزم؟",
          explanation: "تأخير التجميع (Compilation delay).",
        },
        {
          q: "Which access technology uses a combination of fiber optics and coaxial cable, often referred to as HFC?",
          options: [
            "DSL",
            "FTTH",
            "Cable Internet access",
            "5G Fixed Wireless",
          ],
          correct: 2,
          translation:
            "أي تقنية وصول تستخدم مزيجًا من الألياف البصرية والكابل المحوري، والتي يشار إليها غالبًا باسم HFC؟",
          explanation:
            "الوصول إلى الإنترنت عبر الكابل (Cable Internet access).",
        },
        {
          q: "The propagation delay in a network is calculated as d/s, where d is the distance between routers and s is the propagation speed of the link.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "يتم حساب تأخير الانتشار في الشبكة على أنه d/s، حيث d هي المسافة بين الموجهات و s هي سرعة الانتشار للرابط.",
          explanation: "صحيح.",
        },
        {
          q: "Which type of multiplexing is used in circuit-switched networks?",
          options: [
            "Packet multiplexing",
            "Frequency-division multiplexing (FDM) or time-division multiplexing (TDM)",
            "Space-division multiplexing",
            "Code-division multiplexing",
          ],
          correct: 1,
          translation:
            "أي نوع من تعدد الإرسال يستخدم في الشبكات التي تبدل الدوائر؟",
          explanation: "تعدد الإرسال بتقسيم التردد (FDM) أو تقسيم الوقت (TDM).",
        },
        {
          q: "In the five-layer Internet protocol stack, which layers are typically implemented by link-layer switches?",
          options: [
            "Layers 1 and 2",
            "Layers 1, 2, and 3",
            "All five layers",
            "Only layer 1",
          ],
          correct: 0,
          translation:
            "في حزمة بروتوكولات الإنترنت المكونة من خمس طبقات، ما هي الطبقات التي يتم تنفيذها عادةً بواسطة مبدلات طبقة الربط؟",
          explanation: "الطبقتان 1 و 2.",
        },
        {
          q: "Consider a simple network with two end systems connected by a single router. If the source has three packets, each consisting of L bits, to send to the destination over links with transmission rate R, what is the total time for the destination to receive all three packets?",
          options: ["3L/R", "2L/R", "4L/R", "6L/R"],
          correct: 2,
          translation:
            "ضع في اعتبارك شبكة بسيطة بها نظامان نهائيان متصلان بموجه واحد. إذا كان لدى المصدر ثلاث حزم، كل منها يتكون من L بت، لإرسالها إلى الوجهة عبر روابط بمعدل إرسال R، فما هو الوقت الإجمالي لكي تستقبل الوجهة جميع الحزم الثلاث؟",
          explanation: "4L/R.",
        },
        {
          q: "In a network with N links between server and client, where each link has transmission rates R1, R2,..., RN, what determines the throughput for a file transfer?",
          options: [
            "The average of all transmission rates",
            "The sum of all transmission rates",
            "min{R1, R2, ..., RN}, which is the transmission rate of the bottleneck link",
            "The maximum transmission rate among all links",
          ],
          correct: 2,
          translation:
            "في شبكة بها N من الروابط بين الخادم والعميل، حيث يكون لكل رابط معدلات إرسال R1, R2, ..., RN، ما الذي يحدد الإنتاجية لنقل الملف؟",
          explanation:
            "الحد الأدنى {R1, R2, ..., RN}، وهو معدل إرسال رابط عنق الزجاجة.",
        },
        {
          q: "Which of the following statements about packet switching versus circuit switching is correct?",
          options: [
            "Circuit switching offers better sharing of transmission capacity",
            "Packet switching is more suitable for voice calls due to predictable delays",
            "Packet switching offers better sharing of transmission capacity and is simpler, more efficient, and less costly to implement than circuit switching",
            "Circuit switching has variable end-to-end delays",
          ],
          correct: 2,
          translation:
            "أي من العبارات التالية حول تبديل الحزم مقابل تبديل الدوائر صحيح؟",
          explanation:
            "يقدم تبديل الحزم مشاركة أفضل لسعة الإرسال وهو أبسط وأكثر كفاءة وأقل تكلفة في التنفيذ من تبديل الدوائر.",
        },
        {
          q: "Tier-1 ISPs do not pay anyone as they are at the top of the hierarchy in the Internet's network structure.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "لا يدفع مزودو خدمة الإنترنت من المستوى الأول (Tier-1) لأي شخص لأنهم في قمة التسلسل الهرمي في بنية شبكة الإنترنت.",
          explanation: "صحيح.",
        },
        {
          q: "What is encapsulation in the context of network protocols?",
          options: [
            "Encrypting data for security",
            "Compressing data to reduce size",
            "The process where each layer adds its header information to the packet from the layer above, creating a new packet",
            "Removing unnecessary data from packets",
          ],
          correct: 2,
          translation:
            "ما هو التغليف (encapsulation) في سياق بروتوكولات الشبكة؟",
          explanation:
            "العملية التي تضيف فيها كل طبقة معلومات رأسها إلى الحزمة من الطبقة الأعلى، مما يؤدي إلى إنشاء حزمة جديدة.",
        },
        {
          q: "Which physical medium is described as immune to electromagnetic interference, has very low signal attenuation up to 100 kilometers, and is very hard to tap?",
          options: [
            "Twisted-pair copper wire",
            "Coaxial cable",
            "Fiber optics",
            "Terrestrial radio channels",
          ],
          correct: 2,
          translation:
            "ما هو الوسط المادي الموصوف بأنه محصن ضد التداخل الكهرومغناطيسي، وله توهين إشارة منخفض جدًا يصل إلى 100 كيلومتر، ويصعب جدًا التنصت عليه؟",
          explanation: "الألياف البصرية (Fiber optics).",
        },
        {
          q: "In Network Structure 5, which describes today's Internet, content-provider networks like Google attempt to bypass upper-tier ISPs by doing what?",
          options: [
            "Building their own satellite networks",
            "Using only wireless connections",
            "Peering with lower-tier ISPs directly or at Internet Exchange Points (IXPs) and connecting to tier-1 ISPs for remaining access",
            "Eliminating the need for any ISP connections",
          ],
          correct: 2,
          translation:
            "في هيكل الشبكة 5، الذي يصف إنترنت اليوم، تحاول شبكات مزودي المحتوى مثل Google تجاوز مزودي خدمة الإنترنت من الطبقات العليا من خلال القيام بماذا؟",
          explanation:
            "الربط المباشر مع مزودي خدمة الإنترنت من الطبقات الأدنى أو في نقاط تبادل الإنترنت (IXPs) والاتصال بمزودي خدمة الإنترنت من المستوى 1 للوصول المتبقي.",
        },
        {
          q: "A distributed denial-of-service (DDoS) attack is harder to detect and defend against than a DoS attack from a single host.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "هجوم حجب الخدمة الموزع (DDoS) يكون اكتشافه والدفاع ضده أصعب من هجوم DoS من مضيف واحد.",
          explanation: "صحيح.",
        },
        {
          q: "socket is referred to as the.....between the application and the network",
          options: ["isp", "Api", "dns", "vpn"],
          correct: 1,
          translation:
            "يشار إلى المقبس (socket) على أنه ..... بين التطبيق والشبكة.",
          explanation: "API (واجهة برمجة التطبيقات).",
        },
        {
          q: "many multimedia applications are considered to be ......",
          options: [
            "bandwidth-sensitive application",
            "real time-sensitive application",
            "elastic application",
            "jitter-intolerant application",
          ],
          correct: 0,
          translation: "يعتبر العديد من تطبيقات الوسائط المتعددة ......",
          explanation:
            "تطبيقات حساسة لعرض النطاق الترددي (bandwidth-sensitive application).",
        },
        {
          q: "TCP connection is a half-duplex connection",
          options: ["True", "False"],
          correct: 1,
          translation: "اتصال TCP هو اتصال أحادي الاتجاه (half-duplex).",
          explanation: "خطأ، إنه ثنائي الاتجاه بالكامل (full-duplex).",
        },
        {
          q: "The TCP flow-control mechanism throttles a sending process (client or server) when the network is congested between sender and receiver",
          options: ["True", "False"],
          correct: 1,
          translation:
            "تقوم آلية التحكم في التدفق في TCP بخنق عملية الإرسال عندما تكون الشبكة مزدحمة بين المرسل والمستقبل.",
          explanation:
            "خطأ، التحكم في التدفق يمنع إغراق المستقبل، بينما التحكم في الازدحام يتعامل مع ازدحام الشبكة.",
        },
        {
          q: "The DNS protocol runs over ... and uses port ....",
          options: ["TCP, 35", "TCP, 80", "UDP, 53", "UDP, 80"],
          correct: 2,
          translation: "يعمل بروتوكول DNS عبر ... ويستخدم المنفذ ....",
          explanation: "UDP، 53.",
        },
        {
          q: "In the Domain Name System (DNS) hierarchy, what is the role of a top-level domain (TLD) server?",
          options: [
            "Providing the IP addresses of authorized DNS servers for a specific domain extension (e.g., .com or .edu).",
            "Providing the IP addresses of all root servers.",
            "Caching all recently resolved hostnames for the entire Internet Service Provider (ISP).",
            "Providing the final IP address for a specific hostname (e.g., www.google.com).",
          ],
          correct: 0,
          translation:
            "في التسلسل الهرمي لنظام أسماء النطاقات (DNS)، ما هو دور خادم النطاق الأعلى مستوى (TLD)؟",
          explanation:
            "توفير عناوين IP لخوادم DNS المعتمدة لامتداد نطاق معين (مثل .com أو .edu).",
        },
        {
          q: "Which type of DNS query involves a DNS server contacting other DNS servers on behalf of the client to resolve a domain name?",
          options: ["Recursive", "Iterative", "Parallel", "Static"],
          correct: 0,
          translation:
            "أي نوع من استعلامات DNS يتضمن اتصال خادم DNS بخوادم DNS أخرى نيابة عن العميل لحل اسم النطاق؟",
          explanation: "العودية (Recursive).",
        },
        {
          q: "A network entity that stores copies of recently requested objects in its local storage and satisfies HTTP requests on behalf of an origin server, often used by ISPs to reduce response time and traffic?",
          options: ["cookies", "proxy server", "DNS server", "DNS caching"],
          correct: 1,
          translation:
            "كيان شبكة يخزن نسخًا من الكائنات المطلوبة مؤخرًا في وحدة التخزين المحلية الخاصة به ويلبي طلبات HTTP نيابة عن خادم الأصل، وغالبًا ما يستخدمه مزودو خدمة الإنترنت لتقليل وقت الاستجابة وحركة المرور؟",
          explanation: "خادم وكيل (proxy server).",
        },
        {
          q: "UDP include a congestion-control mechanism",
          options: ["True", "False"],
          correct: 1,
          translation: "يتضمن UDP آلية للتحكم في الازدحام.",
          explanation: "خطأ.",
        },
        {
          q: "TCP is a no-frills, lightweight transport protocol",
          options: ["True", "False"],
          correct: 1,
          translation: "TCP هو بروتوكول نقل خفيف الوزن بدون زخرفة.",
          explanation: "خطأ، هذا يصف UDP.",
        },
        {
          q: "What is the primary function of cookies in the context of web browsing?",
          options: [
            "Storing the entire webpage on the user's computer.",
            "Compressing webpage data for faster loading.",
            "Verifying user identity using encryption.",
            "Allowing the website to track user activity across multiple requests.",
          ],
          correct: 3,
          translation:
            "ما هي الوظيفة الأساسية لملفات تعريف الارتباط (cookies) في سياق تصفح الويب؟",
          explanation: "السماح للموقع بتتبع نشاط المستخدم عبر طلبات متعددة.",
        },
        {
          q: "What type of protocol is the Simple Mail Transfer Protocol (SMTP) primarily classified as?",
          options: [
            "A 'push' protocol, used to send email from the sender's mail server to the recipient's mail server.",
            "A peer-to-peer protocol for direct email exchange between users.",
            "A protocol for formatting the content of email messages.",
            "A 'pull' protocol, used by a user agent to retrieve emails from the mailbox.",
          ],
          correct: 0,
          translation:
            "ما نوع البروتوكول الذي يصنف فيه بروتوكول نقل البريد البسيط (SMTP) بشكل أساسي؟",
          explanation:
            "بروتوكول 'دفع' (push)، يستخدم لإرسال البريد الإلكتروني من خادم بريد المرسل إلى خادم بريد المستلم.",
        },
        {
          q: "Why does a user agent need a protocol like IMAP or HTTP in addition to SMTP to manage email?",
          options: [
            "SMTP cannot handle attachments, so IMAP is used for files.",
            "SMTP is not secure, so HTTP with TLS is used instead.",
            "SMTP is for sending mail to the server, while IMAP or HTTP is needed to retrieve and manage mail from the server.",
            "IMAP is a newer and more efficient version of SMTP.",
          ],
          correct: 2,
          translation:
            "لماذا يحتاج وكيل المستخدم إلى بروتوكول مثل IMAP أو HTTP بالإضافة إلى SMTP لإدارة البريد الإلكتروني؟",
          explanation:
            "SMTP مخصص لإرسال البريد إلى الخادم، بينما IMAP أو HTTP مطلوب لاسترداد البريد وإدارته من الخادم.",
        },
        {
          q: "What is the main reason why peer-to-peer (P2P) file distribution architectures are considered 'self-scaling'?",
          options: [
            "Because every peer who joins to download a file also contributes their upload capacity to distribute the file to others.",
            "The file size is reduced for each peer that joins the network.",
            "All peers are required to have the same high-speed internet connection.",
            "The central server's capacity automatically increases as more peers join.",
          ],
          correct: 0,
          translation:
            "ما هو السبب الرئيسي الذي يجعل هندسة توزيع الملفات من نظير إلى نظير (P2P) تعتبر 'ذاتية التوسع'؟",
          explanation:
            "لأن كل نظير ينضم لتنزيل ملف يساهم أيضًا بسعة الرفع الخاصة به لتوزيع الملف على الآخرين.",
        },
        {
          q: "...is the principal application-layer protocol for Internet electronic mail.",
          options: ["FTP", "SMTP", "SIP", "Telnet"],
          correct: 1,
          translation:
            "... هو بروتوكول طبقة التطبيق الرئيسي للبريد الإلكتروني عبر الإنترنت.",
          explanation: "SMTP.",
        },
        {
          q: "The transport layer provides logical communication between processes running on different hosts, while the network layer provides logical communication between hosts.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "توفر طبقة النقل اتصالاً منطقيًا بين العمليات التي تعمل على مضيفين مختلفين، بينما توفر طبقة الشبكة اتصالاً منطقيًا بين المضيفين.",
          explanation: "صحيح.",
        },
        {
          q: "Which of the following statements about UDP and TCP is correct?",
          options: [
            "UDP provides connection-oriented service while TCP provides connectionless service",
            "Both UDP and TCP provide reliable data transfer services to applications",
            "UDP provides unreliable, connectionless service while TCP provides reliable, connection-oriented service",
            "None of the above",
          ],
          correct: 2,
          translation: "أي من العبارات التالية حول UDP و TCP صحيح؟",
          explanation:
            "يوفر UDP خدمة غير موثوقة وغير متصلة، بينما يوفر TCP خدمة موثوقة وموجهة نحو الاتصال.",
        },
        {
          q: "The process of delivering data in a transport-layer segment to the correct socket is called:",
          options: [
            "Encapsulation",
            "Multiplexing",
            "Demultiplexing",
            "Segmentation",
          ],
          correct: 2,
          translation:
            "تسمى عملية تسليم البيانات في مقطع طبقة النقل إلى المقبس الصحيح:",
          explanation: "فصل الإرسال (Demultiplexing).",
        },
        {
          q: "Well-known port numbers range from 0 to 1023 and are reserved for well-known application protocols such as HTTP and FTP.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "تتراوح أرقام المنافذ المعروفة من 0 إلى 1023 وهي محجوزة لبروتوكولات التطبيق المعروفة مثل HTTP و FTP.",
          explanation: "صحيح.",
        },
        {
          q: "In UDP, a socket is identified by which of the following?",
          options: [
            "A two-tuple consisting of destination IP address and destination port number",
            "A four-tuple consisting of source IP address, source port number, destination IP address, and destination port number",
            "Only the destination port number",
            "A three-tuple consisting of source port number, destination IP address, and destination port number",
          ],
          correct: 0,
          translation: "في UDP، يتم تحديد المقبس بأي مما يلي؟",
          explanation: "زوج مكون من عنوان IP الوجهة ورقم منفذ الوجهة.",
        },
        {
          q: "Which of the following is NOT an advantage of UDP over TCP?",
          options: [
            "No connection establishment delay",
            "No connection state maintenance",
            "Guaranteed reliable data transfer",
            "Smaller packet header overhead",
          ],
          correct: 2,
          translation: "أي مما يلي ليس ميزة لـ UDP على TCP؟",
          explanation: "نقل بيانات موثوق مضمون.",
        },
        {
          q: "A TCP socket is identified by a four-tuple consisting of source IP address, source port number, destination IP address, and destination port number.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "يتم تحديد مقبس TCP بواسطة رباعية تتكون من عنوان IP المصدر ورقم منفذ المصدر وعنوان IP الوجهة ورقم منفذ الوجهة.",
          explanation: "صحيح.",
        },
        {
          q: "The UDP segment header consists of how many fields?",
          options: ["Two fields", "Four fields", "Six fields", "Eight fields"],
          correct: 1,
          translation: "يتكون رأس مقطع UDP من كم عدد الحقول؟",
          explanation: "أربعة حقول.",
        },
        {
          q: "In the rdt2.0 protocol, which type of acknowledgments are used?",
          options: [
            "Only positive acknowledgments (ACK)",
            "Only negative acknowledgments (NAK)",
            "Both positive acknowledgments (ACK) and negative acknowledgments (NAK)",
            "Neither ACK nor NAK",
          ],
          correct: 2,
          translation: "في بروتوكول rdt2.0، أي نوع من الإقرارات يتم استخدامه؟",
          explanation: "كل من الإقرارات الإيجابية (ACK) والسلبية (NAK).",
        },
        {
          q: "The stop-and-wait protocol can have poor performance because the sender must wait for acknowledgment before sending the next packet.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "يمكن أن يكون أداء بروتوكول التوقف والانتظار ضعيفًا لأن المرسل يجب أن ينتظر الإقرار قبل إرسال الحزمة التالية.",
          explanation: "صحيح.",
        },
        {
          q: "In the rdt2.1 protocol, what is the purpose of adding sequence numbers to data packets?",
          options: [
            "To ensure packets arrive in order",
            "To allow the receiver to determine whether a received packet is a retransmission or contains new data",
            "To implement flow control",
            "To detect corrupted packets",
          ],
          correct: 1,
          translation:
            "في بروتوكول rdt2.1، ما الغرض من إضافة أرقام تسلسلية إلى حزم البيانات؟",
          explanation:
            "للسماح للمستقبل بتحديد ما إذا كانت الحزمة المستلمة عبارة عن إعادة إرسال أو تحتوي على بيانات جديدة.",
        },
        {
          q: "For a simple stop-and-wait protocol, a 1-bit sequence number is sufficient because:",
          options: [
            "It's the smallest possible sequence number",
            "It allows the receiver to distinguish between a new packet and a retransmission in modulo-2 arithmetic",
            "It reduces header overhead",
            "All of the above",
          ],
          correct: 3,
          translation:
            "بالنسبة لبروتوكول توقف وانتظار بسيط، فإن رقم تسلسل 1 بت كافٍ لأن:",
          explanation: "كل ما سبق.",
        },
        {
          q: "In the rdt3.0 protocol (alternating-bit protocol), which mechanism is used to handle packet loss?",
          options: [
            "Negative acknowledgments only",
            "Checksums only",
            "A timeout/retransmit mechanism where the sender retransmits if an ACK is not received within a timeout interval",
            "Forward error correction",
          ],
          correct: 2,
          translation:
            "في بروتوكول rdt3.0، ما الآلية المستخدمة للتعامل مع فقدان الحزم؟",
          explanation: "آلية المهلة/إعادة الإرسال.",
        },
        {
          q: "Pipelining techniques allow the sender to send multiple packets without waiting for acknowledgments, which significantly improves utilization compared to stop-and-wait protocols.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "تسمح تقنيات الأنابيب للمرسل بإرسال حزم متعددة دون انتظار الإقرارات، مما يحسن الاستفادة بشكل كبير مقارنة ببروتوكولات التوقف والانتظار.",
          explanation: "صحيح.",
        },
        {
          q: "In GBN protocol, the receiver discards out-of-order packets because:",
          options: [
            "It simplifies receiver buffering since the receiver doesn't need to buffer any out-of-order packets",
            "Out-of-order packets are always corrupted",
            "The protocol specification requires it",
            "It improves network throughput",
          ],
          correct: 0,
          translation:
            "في بروتوكول GBN، يتجاهل المستقبل الحزم غير المرتبة لأن:",
          explanation:
            "يبسط تخزين المستقبل حيث لا يحتاج المستقبل إلى تخزين أي حزم غير مرتبة.",
        },
        {
          q: "Which statement about Selective Repeat (SR) protocol is correct?",
          options: [
            "SR retransmits all unacknowledged packets when a timeout occurs",
            "SR retransmits only those packets that it suspects were received in error, requiring the receiver to individually acknowledge correctly received packets",
            "SR does not use acknowledgments",
            "SR is identical to GBN",
          ],
          correct: 1,
          translation: "أي عبارة عن بروتوكول التكرار الانتقائي (SR) صحيحة؟",
          explanation:
            "SR يعيد إرسال فقط تلك الحزم التي يشتبه في استلامها عن طريق الخطأ، مما يتطلب من المستقبل الإقرار بشكل فردي بالحزم المستلمة بشكل صحيح.",
        },
        {
          q: "TCP provides full-duplex service, meaning application-layer data can flow from Process A to Process B at the same time as data flows from Process B to Process A.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "يوفر TCP خدمة ثنائية الاتجاه بالكامل (full-duplex)، مما يعني أن بيانات طبقة التطبيق يمكن أن تتدفق من العملية A إلى العملية B في نفس الوقت الذي تتدفق فيه البيانات من العملية B إلى العملية A.",
          explanation: "صحيح.",
        },
        {
          q: "The three-way handshake in TCP connection establishment involves:",
          options: [
            "One segment from client to server",
            "Two segments exchanged between client and server",
            "Three segments exchanged where the client sends a SYN segment, the server responds with a SYNACK segment, and the client sends a final acknowledgment segment",
            "Four segments to ensure reliability",
          ],
          correct: 2,
          translation: "تتضمن المصافحة الثلاثية في إنشاء اتصال TCP:",
          explanation:
            "تبادل ثلاثة مقاطع حيث يرسل العميل مقطع SYN، ويستجيب الخادم بمقطع SYNACK، ويرسل العميل مقطع إقرار نهائي.",
        },
        {
          q: "The Maximum Segment Size (MSS) in TCP refers to:",
          options: [
            "The maximum size of the TCP segment including all headers",
            "The maximum amount of application-layer data in the segment, not including headers",
            "The maximum size of the TCP header",
            "The maximum size of the IP datagram",
          ],
          correct: 1,
          translation: "يشير الحد الأقصى لحجم المقطع (MSS) في TCP إلى:",
          explanation:
            "الحد الأقصى لكمية بيانات طبقة التطبيق في المقطع، باستثناء الرؤوس.",
        },
        {
          q: "TCP provides cumulative acknowledgments, which means:",
          options: [
            "TCP acknowledges every single packet individually",
            "TCP only acknowledges bytes up to the first missing byte in the stream",
            "TCP acknowledges only the last received packet",
            "TCP doesn't use acknowledgments",
          ],
          correct: 1,
          translation: "يوفر TCP إقرارات تراكمية، مما يعني:",
          explanation: "يقر TCP فقط بالبايتات حتى أول بايت مفقود في الدفق.",
        },
        {
          q: "When a TCP sender receives three duplicate ACKs for the same data, it performs a fast retransmit by retransmitting the missing segment before that segment's timer expires.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "عندما يتلقى مرسل TCP ثلاثة إقرارات مكررة لنفس البيانات، فإنه يقوم بإعادة إرسال سريع عن طريق إعادة إرسال المقطع المفقود قبل انتهاء مؤقت ذلك المقطع.",
          explanation: "صحيح.",
        },
        {
          q: "The TCP timeout interval (Timeout Interval) is calculated as:",
          options: [
            "EstimatedRTT only",
            "SampleRTT × 2",
            "EstimatedRTT + 4 × DevRTT",
            "DevRTT × 4",
          ],
          correct: 2,
          translation: "يتم حساب فاصل مهلة TCP على النحو التالي:",
          explanation: "EstimatedRTT + 4 × DevRTT.",
        },
        {
          q: "Flow control in TCP is implemented to:",
          options: [
            "Control congestion in the network",
            "Match the rate at which the sender is sending against the rate at which the receiving application is reading, preventing the sender from overflowing the receiver's buffer",
            "Ensure packets arrive in order",
            "Detect errors in transmitted segments",
          ],
          correct: 1,
          translation: "يتم تنفيذ التحكم في التدفق في TCP من أجل:",
          explanation:
            "مطابقة المعدل الذي يرسل به المرسل مع المعدل الذي يقرأ به التطبيق المستقبل، مما يمنع المرسل من طغيان المخزن المؤقت للمستقبل.",
        },
        {
          q: "The receive window (rwnd) in TCP is used to give the sender an idea of how much free buffer space is available at the receiver.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "يُستخدم نافذة الاستقبال (rwnd) في TCP لإعطاء المرسل فكرة عن مقدار المساحة الخالية المتاحة في المخزن المؤقت للمستقبل.",
          explanation: "صحيح.",
        },
        {
          q: "When the TCP timeout interval expires and a segment is retransmitted, TCP sets the next timeout interval to:",
          options: [
            "The same value as before",
            "Half the previous value",
            "Twice the previous value, causing intervals to grow exponentially after each retransmission",
            "A random value",
          ],
          correct: 2,
          translation:
            "عندما ينتهي فاصل مهلة TCP ويتم إعادة إرسال مقطع، يحدد TCP فاصل المهلة التالي على النحو التالي:",
          explanation:
            "ضعف القيمة السابقة، مما يتسبب في نمو الفواصل بشكل أسي بعد كل إعادة إرسال.",
        },
        {
          q: "The network layer in H1 encapsulates transport-layer segments into datagrams before sending them to the router.",
          options: ["True", "False"],
          correct: 0,
          translation:
            "تقوم طبقة الشبكة في H1 بتغليف مقاطع طبقة النقل في مخططات بيانات قبل إرسالها إلى الموجه.",
          explanation: "صحيح.",
        },
        {
          q: "Routing is typically done in hardware because it must operate at nanosecond timescales.",
          options: ["True", "False"],
          correct: 1,
          translation:
            "يتم التوجيه عادةً في الأجهزة لأنه يجب أن يعمل على نطاقات زمنية بالنانو ثانية.",
          explanation:
            "خطأ، إعادة التوجيه (forwarding) هي التي تتم في الأجهزة، بينما التوجيه (routing) في البرامج.",
        },
        {
          q: "A router uses its forwarding table by",
          options: [
            "Examining packet header fields and using them to select the correct output interface",
            "Determining end-to-end routes between H1 and H2",
            "Encrypting and decrypting packet headers",
            "Checking for transport-layer errors before forwarding",
          ],
          correct: 0,
          translation: "يستخدم الموجه جدول إعادة التوجيه الخاص به عن طريق:",
          explanation:
            "فحص حقول رأس الحزمة واستخدامها لتحديد واجهة الإخراج الصحيحة.",
        },
        {
          q: "Which router component is responsible for consulting the forwarding table to determine the correct output port?",
          options: [
            "Routing processor",
            "Input port",
            "Switching fabric",
            "Output port",
          ],
          correct: 1,
          translation:
            "أي مكون من مكونات الموجه مسؤول عن الرجوع إلى جدول إعادة التوجيه لتحديد منفذ الإخراج الصحيح؟",
          explanation: "منفذ الإدخال (Input port).",
        },
        {
          q: "Why is a complete forwarding table with one entry for each possible 32-bit IP address impossible?",
          options: [
            "It would require too much memory",
            "IP addresses do not use 32-bit values",
            "Forwarding tables cannot be stored on line cards",
            "The routing processor cannot compute them",
          ],
          correct: 0,
          translation:
            "لماذا يعتبر جدول إعادة توجيه كامل به إدخال واحد لكل عنوان IP 32 بت ممكنًا مستحيلاً؟",
          explanation: "سيتطلب ذاكرة كبيرة جدًا.",
        },
        {
          q: "Which of the following is NOT performed during input port processing?",
          options: [
            "Checking and updating the packet's TTL field",
            "Performing physical- and link-layer processing",
            "Running the routing protocol to compute forwarding tables",
            "Updating network management counters",
          ],
          correct: 2,
          translation: "أي مما يلي لا يتم تنفيذه أثناء معالجة منفذ الإدخال؟",
          explanation: "تشغيل بروتوكول التوجيه لحساب جداول إعادة التوجيه.",
        },
        {
          q: "In CIDR notation, the '/24' in the address 223.1.1.0/24 indicates:",
          options: [
            "The address has 24 host bits",
            "The network portion of the address is 24 bits",
            "There are 24 subnets",
            "There are 24 total addresses",
          ],
          correct: 1,
          translation: "في تدوين CIDR، يشير '/24' في العنوان 223.1.1.0/24 إلى:",
          explanation: "الجزء الخاص بالشبكة من العنوان هو 24 بت.",
        },
        {
          q: "Which of the following is a main reason for developing IPv6?",
          options: [
            "IPv4 addresses were running out",
            "To reduce the size of TCP headers",
            "To eliminate the need for routers",
            "To replace DNS",
          ],
          correct: 0,
          translation: "أي مما يلي هو السبب الرئيسي لتطوير IPv6؟",
          explanation: "نفاد عناوين IPv4.",
        },
        {
          q: "How does a NAT router know which internal host should receive a returning datagram from the Internet?",
          options: [
            "By checking the destination IP address alone",
            "By checking the destination IP address and destination port number against its NAT translation table",
            "By using DNS lookup",
            "By sending the datagram to all hosts in the private network",
          ],
          correct: 1,
          translation:
            "كيف يعرف موجه NAT أي مضيف داخلي يجب أن يستقبل مخطط بيانات عائد من الإنترنت؟",
          explanation:
            "من خلال التحقق من عنوان IP الوجهة ورقم منفذ الوجهة مقابل جدول ترجمة NAT الخاص به.",
        },
      ],
    },
  ],
});
