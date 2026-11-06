/* بيانات مادة: هندسة البرمجيات (software-engineering)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/software-engineering/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "هندسة البرمجيات",
  en: "Software Engineering",
  icon: "🏗️",
  slug: "software-engineering",
  // lectures: [
  //   /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
  //        pdf:"datenew/subjects/software-engineering/lectures/lec-01.pdf", questions:[] } */
  // ]
  lectures: [
    {
      t: "المحاضرة الأولى — الفصل الأول: مقدمة في هندسة البرمجيات",
      d: "مقدمة في هندسة البرمجيات ونماذج دورة الحياة SDLC.",
      id: "software-engineering-lec-01",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering Chapter 1 Lecture 1.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE_Chapter1_Section1.1_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الأول (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)
      notes:
        "الأسئلة المطلوبة من الكتاب:  1 , 2  ,3, 5 , 6 , 10  ,ال علينا في الفصل دي   1.1 Professional software development ",

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الفصل الأول من Sommerville: تعريف هندسة البرمجيات، خصائص السوفت وير الجيد، والأنشطة الأساسية",
          links: [
            {
              t: "دورة هندسة البرمجيات بالعربي - Chapter 1 Introduction",
              d: "كورس عربي شامل يغطي: تعريف Software Engineering، الفرق بين SE و CS، خصائص البرمجيات الجيدة (Maintainability, Dependability, Efficiency)، والأنشطة الأساسية الأربعة من فديو 1 الي 8",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PL4mqzqquSRgaJ9XMQMUvMQjPyllD1xY5f",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "CS251 Software Engineering 1 - بالعربي",
              d: "محاضرات جامعية عربية: مقدمة في هندسة البرمجيات، Software Products (Generic vs Customized)، و Application Types",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLsnvpvHuTUbC-yJkvcf-Stp_kLwfesnn-",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "مقدمة في هندسة البرمجيات (الأجزاء 1 - 4) - د. محمد المدهون",
              d: "شرح كامل لمقدمة هندسة البرمجيات من كتاب Sommerville: التعريفات، المصطلحات الأساسية، والأخلاقيات",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLSdxbt9aypHLpUEjVa96utjc_lcDndJ8K&si=_12REw8yZYYYPJpQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Software Engineering - د. أحمد العقيد (المحاضرة الأولى)",
              d: "المحاضرة الأولى: مقدمة شاملة في هندسة البرمجيات والمفاهيم الأساسية للمادة",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🎬 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=Kbt0cfPxTO8",
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
            "المحاضرة الرسمية من مؤلف الكتاب + مراجع عالمية مُتحقّق منها تطابق محتوى الفصل الأول",
          links: [
            {
              t: "Chapter 1 — Software Engineering (Ian Sommerville Official)",
              d: "الشرح المباشر المطابق للكتاب: Professional Software Development، Essential Attributes of Good Software، Ethics، والـ 4 Case Studies (Insulin Pump, Mentcare, Weather Station, iLearn)",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=GVDsxArvG2A",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Gate Smashers - Software Engineering Complete Course",
              d: "شرح شامل بالإنجليزية: SE Fundamentals، Software Attributes، Types of Software، و SE vs CS",
              icon: "🌍",
              actions: [
                {
                  label: "📖 Playlist كامل",
                  url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6Xup8p",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "كل شي يخص السكشن",
          icon: "💻",
          description:
            "حلول وشرح تمارين الفصل الأول (Software Engineering Exercises).",
          links: [
            {
              t: "حلول وشرح تمارين Chapter 1",
              d: "شرح مبسط بالعربي لأهم مفاهيم هندسة البرمجيات وإجابات التمارين الـ 10 من كتاب Sommerville.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 عرض الملف",
                  url: "https://drive.google.com/drive/folders/1u-6l9DA9B123kEdBcPP_cTbIFv_BXDFu?usp=drive_link",
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
            "المراجع الرسمية للكتاب + مقالات تغطي نفس مفاهيم الفصل الأول",
          links: [
            {
              t: "Sommerville Official Website - Slides, Videos & Instructor Guide",
              d: "الموقع الرسمي للكتاب: Presentations لكل فصل، فيديوهات المؤلف، Instructor's Guide، و Supplements — **المرجع الأول**",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://software-engineering-book.com/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Introduction to Software Engineering",
              d: "يغطي: تعريف SE، Objectives (Maintainability, Efficiency, Reliability, Correctness) — مطابق للـ Essential Attributes في الكتاب",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-introduction-to-software-engineering/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "TutorialsPoint - Software Engineering Tutorial",
              d: "مرجع منظم: SE Overview، SDLC، Software Design — لتعزيز الفهم العام",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح الدرس",
                  url: "https://www.tutorialspoint.com/software_engineering/index.htm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "Case Studies والأخلاقيات",
          icon: "🔧",
          description:
            "دراسات الحالة الأربعة المذكورة في الفصل + ميثاق أخلاقيات المهنة",
          links: [
            {
              t: "Sommerville Case Studies (Insulin Pump, Mentcare, Weather Station, iLearn)",
              d: "التوثيق الرسمي لدراسات الحالة الأربعة الأساسية المذكورة في نهاية الفصل الأول + Airbus 340 و Ariane 5 — **مطابق تماماً للملف**",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح دراسات الحالة",
                  url: "https://software-engineering-book.com/case-studies/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "ACM Code of Ethics and Professional Conduct",
              d: "الميثاق الرسمي لأخلاقيات مهنة الكمبيوتر: Confidentiality, Competence, IP Rights — المذكور في قسم 1.2 Software Engineering Ethics",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الميثاق",
                  url: "https://www.acm.org/code-of-ethics",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],

      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Software Engineering — هندسة البرمجيات
      //  المسار: datenew/software-engineering/software-engineering.js
      //  المرجع: Sommerville — Software Engineering (Chapter 1)
      //  الفهرس: subjects-index.js → { slug: "software-engineering" }
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ
        // ═══════════════════════════════════════════════════════
        {
          q: "According to the text, what is the key distinction of professional software compared to software written by hobbyists?",
          options: [
            "It is written faster",
            "It is intended for use by someone apart from its developer, and is usually developed by teams",
            "It never needs documentation",
            "It is always open-source",
          ],
          correct: 1,
          translation:
            "حسب النص، ما الفرق الجوهري بين البرمجيات الاحترافية والبرمجيات التي يكتبها الهواة؟",
          explanation:
            "البرمجيات الاحترافية موجهة للاستخدام من شخص آخر غير المطوّر، وعادةً تُطوَّر بواسطة فرق — مش فرد واحد.",
        },
        {
          q: "When talking about software engineering, 'software' refers to:",
          options: [
            "Only the compiled executable program",
            "The programs plus associated documentation, libraries, support websites, and configuration data",
            "Only the source code",
            "Only the user interface",
          ],
          correct: 1,
          translation: "عند الحديث عن هندسة البرمجيات، 'البرمجيات' تشير إلى:",
          explanation:
            "مش بس البرنامج المترجم — كمان التوثيق والمكتبات ومواقع الدعم وبيانات الإعداد. كل ده جزء من 'البرمجيات'.",
        },
        {
          q: "What is the essential difference between Generic products and Customized (bespoke) software?",
          options: [
            "Generic products are always more expensive",
            "In generic products the developing organization controls the specification; in customized software the buying organization controls the specification",
            "Customized software is sold on the open market",
            "There is no real difference between them",
          ],
          correct: 1,
          translation:
            "ما الفرق الجوهري بين المنتجات العامة (Generic) والبرمجيات المخصصة (Customized)؟",
          explanation:
            "الفرق الأساسي في مين بيتحكم في المواصفات: المنتج العام المطوّر بيتحكم، والمخصص العميل (المشتري) بيتحكم.",
        },
        {
          q: "Which of the following is given as an example of a Generic software product?",
          options: [
            "An air traffic control system built for a specific customer",
            "A word processor sold on the open market",
            "A control system commissioned for a particular electronic device",
            "A system written to support one company's specific business process",
          ],
          correct: 1,
          translation: "أي مما يلي مثال على منتج برمجي عام (Generic)؟",
          explanation:
            "معالج النصوص المباع في السوق المفتوح — منتج عام بيتباع لأي عميل عايز يشتريه. باقي الأمثلة برمجيات مخصصة.",
        },
        {
          q: "Enterprise Resource Planning (ERP) systems such as those from SAP and Oracle are given as an example of:",
          options: [
            "Pure customized software only",
            "Pure generic software only",
            "The blurring line between generic and customized products, where a generic base is adapted for a company",
            "Embedded control systems",
          ],
          correct: 2,
          translation:
            "أنظمة تخطيط موارد المؤسسات (ERP) زي SAP و Oracle أمثلة على:",
          explanation:
            "الخط الفاصل بين العام والمخصص بقى ضبابي — أنظمة ERP مبنية على قاعدة عامة بيتم تكييفها لكل شركة حسب احتياجاتها.",
        },
        {
          q: "According to the text, the quality of professional software must take into account:",
          options: [
            "Only what the software does functionally",
            "Only the price paid for the software",
            "The software's behavior while executing, and the structure and organization of the system and its documentation",
            "Only the programming language used",
          ],
          correct: 2,
          translation:
            "حسب النص، جودة البرمجيات الاحترافية يجب أن تأخذ في الاعتبار:",
          explanation:
            "مش بس الوظائف — كمان سلوك البرنامج أثناء التنفيذ، وبنية النظام وتنظيمه وتوثيقه. الجودة شاملة.",
        },
        {
          q: "How does the book define 'software engineering'?",
          options: [
            "A branch of mathematics concerned with algorithms",
            "An engineering discipline concerned with all aspects of software production from early specification through to maintaining the system after it is in use",
            "The study of computer hardware design",
            "A marketing process for selling software products",
          ],
          correct: 1,
          translation: "كيف يعرّف الكتاب 'هندسة البرمجيات'؟",
          explanation:
            "تخصص هندسي بيهتم بكل جوانب إنتاج البرمجيات — من المواصفات المبكرة لصيانة النظام بعد الاستخدام.",
        },
        {
          q: "According to Figure 1.1, what are the four fundamental software engineering activities?",
          options: [
            "Coding, testing, debugging, deployment",
            "Software specification, software development, software validation, software evolution",
            "Planning, designing, marketing, selling",
            "Analysis, synthesis, compilation, execution",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.1، ما أنشطة هندسة البرمجيات الأربعة الأساسية؟",
          explanation:
            "المواصفات (Specification) + التطوير (Development) + التحقق (Validation) + التطور (Evolution).",
        },
        {
          q: "Per Figure 1.1, roughly what percentage of software costs are development costs versus testing costs?",
          options: [
            "50% development, 50% testing",
            "Roughly 60% development, 40% testing",
            "90% development, 10% testing",
            "20% development, 80% testing",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.1، تقريباً كام في المية تكاليف التطوير مقابل تكاليف الاختبار؟",
          explanation:
            "حوالي 60% تطوير و40% اختبار — الاختبار بيمثل جزء كبير من التكلفة الإجمالية.",
        },
        {
          q: "According to Figure 1.1, what is the difference between software engineering and computer science?",
          options: [
            "They are exactly the same field",
            "Computer science focuses on theory and fundamentals; software engineering is concerned with the practicalities of developing and delivering useful software",
            "Computer science only studies hardware",
            "Software engineering has no relation to computer science",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.1، ما الفرق بين هندسة البرمجيات وعلوم الحاسب؟",
          explanation:
            "علوم الحاسب بتركز على النظرية والأساسيات، وهندسة البرمجيات بتهتم بالجانب العملي لتطوير وتسليم برمجيات مفيدة.",
        },
        {
          q: "According to Figure 1.1, what key challenges face software engineering?",
          options: [
            "Coping with increasing diversity, demands for reduced delivery times, and developing trustworthy software",
            "Only reducing the cost of hardware",
            "Only writing faster compilers",
            "Only training more programmers",
          ],
          correct: 0,
          translation:
            "حسب الشكل 1.1، ما التحديات الرئيسية التي تواجه هندسة البرمجيات؟",
          explanation:
            "التعامل مع التنوع المتزايد + المطالب بتقليل أوقات التسليم + تطوير برمجيات موثوقة.",
        },
        {
          q: "Which set of attributes are listed in Figure 1.2 as essential characteristics of a professional software system?",
          options: [
            "Acceptability, Dependability and security, Efficiency, Maintainability",
            "Speed, Color, Size, Popularity",
            "Price, Marketing, Branding, Packaging",
            "Portability, Novelty, Simplicity, Humor",
          ],
          correct: 0,
          translation:
            "أي مجموعة صفات مذكورة في الشكل 1.2 كخصائص أساسية لنظام برمجي احترافي؟",
          explanation:
            "القبول (Acceptability) + الاعتمادية والأمان + الكفاءة + القابلية للصيانة — أربع صفات أساسية.",
        },
        {
          q: "According to Figure 1.2, what does 'Maintainability' mean for professional software?",
          options: [
            "The software should never be changed after release",
            "The software should be written so it can evolve to meet the changing needs of customers",
            "The software should only run on one type of machine",
            "The software must be free of charge",
          ],
          correct: 1,
          translation:
            "حسب الشكل 1.2، ماذا تعني 'القابلية للصيانة' للبرمجيات الاحترافية؟",
          explanation:
            "البرنامج لازم يُكتب بطريقة تسمح بتطويره عشان يلبي احتياجات العملاء المتغيرة — مش يتجمد بعد الإصدار.",
        },
        {
          q: "Section 1.1.1 states that software engineering involves two key phrases in its definition. What is the first?",
          options: [
            "Marketing strategy",
            "Engineering discipline",
            "Programming language",
            "Database design",
          ],
          correct: 1,
          translation:
            "القسم 1.1.1 ينص على أن هندسة البرمجيات تتضمن عبارتين مفتاحيتين في تعريفها. ما الأولى؟",
          explanation:
            "'التخصص الهندسي' (Engineering discipline) — أول عبارة في التعريف.",
        },
        {
          q: "What does the phrase 'Engineering discipline' imply, as explained in section 1.1.1?",
          options: [
            "Engineers must always use the newest tools available",
            "Engineers apply theories, methods, and tools selectively, and work within organizational and financial constraints",
            "Engineers never make compromises",
            "Engineers only follow fixed rules with no creativity",
          ],
          correct: 1,
          translation:
            "ماذا تعني عبارة 'التخصص الهندسي' كما هو موضح في القسم 1.1.1؟",
          explanation:
            "المهندسون بيطبقوا النظريات والأساليب والأدوات بشكل انتقائي، وبيشتغلوا في إطار قيود تنظيمية ومالية.",
        },
        {
          q: "What does 'All aspects of software production' mean in the definition of software engineering?",
          options: [
            "Only the coding phase",
            "Only the testing phase",
            "It includes technical development as well as project management, and the development of supporting tools, methods, and theories",
            "Only the marketing phase",
          ],
          correct: 2,
          translation:
            "ماذا تعني 'كل جوانب إنتاج البرمجيات' في تعريف هندسة البرمجيات؟",
          explanation:
            "بتشمل التطوير التقني + إدارة المشروع + تطوير الأدوات والأساليب والنظريات الداعمة — مش بس مرحلة واحدة.",
        },
        {
          q: "According to the text, why is software engineering important? (Reason 1)",
          options: [
            "Individuals and society increasingly rely on advanced software systems, so reliable and trustworthy systems must be produced economically and quickly",
            "It makes software more expensive",
            "It is a legal requirement in every country",
            "It eliminates the need for programmers",
          ],
          correct: 0,
          translation: "حسب النص، لماذا هندسة البرمجيات مهمة؟ (السبب الأول)",
          explanation:
            "الأفراد والمجتمع بيعتمدوا بشكل متزايد على أنظمة برمجية متقدمة، فلازم نظم موثوقة تُنتَج اقتصاديًا وبسرعة.",
        },
        {
          q: "According to the text, why is software engineering important? (Reason 2)",
          options: [
            "It is usually cheaper in the long run than treating software development as a personal programming project",
            "It guarantees zero bugs",
            "It removes the need for documentation",
            "It replaces the need for computer science knowledge",
          ],
          correct: 0,
          translation: "حسب النص، لماذا هندسة البرمجيات مهمة؟ (السبب الثاني)",
          explanation:
            "أرخص على المدى الطويل من التعامل مع تطوير البرمجيات كمشروع برمجة شخصي — لأنها بتقلل الأخطاء وتكاليف الصيانة.",
        },
        {
          q: "What is a 'software process' as defined in the text?",
          options: [
            "A single line of code",
            "A sequence of activities that leads to the production of a software product",
            "A hardware component",
            "A type of programming language",
          ],
          correct: 1,
          translation:
            "ما هي 'العملية البرمجية' (Software Process) كما هي معرّفة في النص؟",
          explanation:
            "تسلسل من الأنشطة يؤدي لإنتاج منتج برمجي — مش سطر كود ولا مكون عتاد.",
        },
        {
          q: "How does the text distinguish software engineering from computer science?",
          options: [
            "Computer science theory is often most applicable to relatively small programs, while software engineering deals with practical problems of producing software",
            "Computer science is only about hardware",
            "They are identical disciplines with no differences",
            "Software engineering does not require any computer science knowledge",
          ],
          correct: 0,
          translation: "كيف يميّز النص بين هندسة البرمجيات وعلوم الحاسب؟",
          explanation:
            "نظرية علوم الحاسب غالباً بتُطبَّق على برامج صغيرة نسبيًا، بينما هندسة البرمجيات بتتعامل مع المشاكل العملية لإنتاج البرمجيات.",
        },
        {
          q: "How is software engineering related to system engineering?",
          options: [
            "They are unrelated fields",
            "System engineering covers hardware development, policy and process design, and system deployment, of which software engineering is a part",
            "System engineering is a subset of software engineering",
            "System engineering focuses only on marketing",
          ],
          correct: 1,
          translation:
            "ما علاقة هندسة البرمجيات بهندسة النظم (System Engineering)؟",
          explanation:
            "هندسة النظم بتشمل تطوير العتاد + تصميم السياسات والعمليات + نشر النظام، وهندسة البرمجيات جزء منها.",
        },
        {
          q: "Which of the following is listed as one of the four issues affecting many different types of software (Heterogeneity, Business and social change, Security and trust, Scale)?",
          options: [
            "Heterogeneity — the need to operate across different types of computers, mobile devices, and legacy systems",
            "Font selection",
            "Color theory",
            "Marketing budgets",
          ],
          correct: 0,
          translation:
            "أي مما يلي مذكور كواحد من القضايا الأربعة التي تؤثر على أنواع مختلفة من البرمجيات؟",
          explanation:
            "التباين (Heterogeneity) — الحاجة للتشغيل عبر أنواع مختلفة من الحواسيب والأجهزة المحمولة والأنظمة القديمة.",
        },
        {
          q: "According to section 1.1.2, what determines which software engineering methods and techniques are most important?",
          options: [
            "The programmer's personal preference only",
            "The type of application being developed",
            "The price of the software",
            "The country where the company is based",
          ],
          correct: 1,
          translation:
            "حسب القسم 1.1.2، ما الذي يحدد أي طرق وتقنيات هندسة البرمجيات هي الأهم؟",
          explanation:
            "نوع التطبيق الذي يتم تطويره — كل نوع تطبيق له متطلباته وأساليبه المناسبة.",
        },
        {
          q: "Which of the following is given as an example of a 'Stand-alone application'?",
          options: [
            "An e-commerce web application",
            "Office applications on a PC or CAD programs",
            "A billing system that processes data in batches",
            "A web service accessed by many remote clients",
          ],
          correct: 1,
          translation:
            "أي مما يلي مذكور كمثال على 'تطبيق مستقل' (Stand-alone)؟",
          explanation:
            "تطبيقات الأوفيس على الحاسوب الشخصي أو برامج CAD — بتشتغل محليًا على الجهاز.",
        },
        {
          q: "Which type of system is described as controlling and managing hardware devices, such as software in a mobile phone or a car's antilock braking system?",
          options: [
            "Batch processing systems",
            "Entertainment systems",
            "Embedded control systems",
            "Systems of systems",
          ],
          correct: 2,
          translation:
            "أي نوع نظام موصوف بأنه يتحكم ويدير أجهزة العتاد، زي البرامج في هاتف محمول أو نظام الفرامل المانعة للانغلاق في السيارة؟",
          explanation:
            "أنظمة التحكم المدمجة (Embedded Control Systems) — بتُدمج في الأجهزة للتحكم فيها.",
        },
        {
          q: "What is a 'Batch processing system', as described in the text?",
          options: [
            "A system for playing games",
            "A business system designed to process large numbers of individual inputs to create corresponding outputs, such as phone billing",
            "A system that only runs once",
            "A system used exclusively for scientific simulation",
          ],
          correct: 1,
          translation:
            "ما هو 'نظام المعالجة بالدفعات' (Batch Processing) كما هو موصوف في النص؟",
          explanation:
            "نظام أعمال مصمم لمعالجة أعداد كبيرة من المدخلات الفردية لإنتاج مخرجات مقابلة، زي فواتير الهاتف.",
        },
        {
          q: "What are 'Systems of systems', as defined in the text?",
          options: [
            "Simple stand-alone mobile apps",
            "Systems used in enterprises that are composed of a number of other software systems, such as generic products combined with specially written software",
            "A single embedded controller",
            "A batch billing program only",
          ],
          correct: 1,
          translation:
            "ما هي 'أنظمة الأنظمة' (Systems of Systems) كما هي معرّفة في النص؟",
          explanation:
            "أنظمة مستخدمة في المؤسسات تتكون من عدد من الأنظمة البرمجية الأخرى — زي منتجات عامة مدمجة مع برامج مكتوبة خصيصًا.",
        },
        {
          q: "Why does an embedded control system in an automobile need extensive verification and validation, according to the text?",
          options: [
            "Because it is cheap and easy to update after installation",
            "Because it is safety-critical and burned into ROM, making it very expensive to change after installation",
            "Because it has no impact on safety",
            "Because users interact with it constantly",
          ],
          correct: 1,
          translation:
            "لماذا يحتاج نظام التحكم المدمج في السيارة إلى تحقق واختبار مكثفين حسب النص؟",
          explanation:
            "لأنه حرج من ناحية السلامة ومحروق في ROM، وده بيخلي تغييره بعد التركيب مكلفًا جدًا.",
        },
        {
          q: "Which software engineering fundamentals does the text say apply to ALL types of software systems?",
          options: [
            "Only testing and debugging",
            "A managed development process, dependability and performance, managing requirements, and effective reuse of existing resources",
            "Only marketing and sales strategy",
            "Only programming language choice",
          ],
          correct: 1,
          translation:
            "أي أساسيات هندسة البرمجيات يقول النص إنها تنطبق على كل أنواع الأنظمة البرمجية؟",
          explanation:
            "عملية تطوير مُدارة + الاعتمادية والأداء + إدارة المتطلبات + إعادة الاستخدام الفعّالة للموارد الموجودة.",
        },
        {
          q: "According to section 1.1.3, around what year did the web start evolving so that more functionality was added to browsers, enabling web-based systems?",
          options: ["1990", "Around 2000", "2010", "2020"],
          correct: 1,
          translation:
            "حسب القسم 1.1.3، في أي سنة تقريبًا بدأ الويب يتطور بحيث تُضاف وظائف أكثر للمتصفحات، مما مكّن الأنظمة القائمة على الويب؟",
          explanation:
            "حوالي سنة 2000 — بداية عصر الويب 2.0 وإضافة وظائف تفاعلية أكثر للمتصفحات.",
        },
        {
          q: "What does 'software as a service' mean, as introduced in section 1.1.3?",
          options: [
            "Software that must be installed on every PC individually",
            "The delivery of web-based system products such as Google Apps and Microsoft Office 365, where software runs on remote clouds instead of local servers",
            "A service that repairs broken software",
            "A subscription only for hardware maintenance",
          ],
          correct: 1,
          translation:
            "ماذا تعني 'البرمجيات كخدمة' (SaaS) كما وردت في القسم 1.1.3؟",
          explanation:
            "تسليم منتجات نظامية قائمة على الويب زي Google Apps و Office 365، حيث البرنامج بيشتغل على سحابات بعيدة بدل السيرفرات المحلية.",
        },
        {
          q: "Before the emergence of the web, how were most business applications organized, according to the text?",
          options: [
            "Highly distributed across the world",
            "Mostly monolithic, single programs running on single computers or clusters",
            "Entirely cloud-based",
            "Built using service-oriented architecture",
          ],
          correct: 1,
          translation:
            "قبل ظهور الويب، كيف كانت معظم تطبيقات الأعمال منظّمة حسب النص؟",
          explanation:
            "كانت في الأغلب كتلة واحدة (Monolithic) — برامج فردية تعمل على حاسوب واحد أو عنقود.",
        },
        {
          q: "Which of the following is listed as an effect of the web on software engineering for web-based systems?",
          options: [
            "Software reuse becoming the dominant approach for constructing web-based systems",
            "The complete disappearance of software specifications",
            "The elimination of incremental development",
            "A return to monolithic single-computer applications",
          ],
          correct: 0,
          translation:
            "أي مما يلي مذكور كتأثير للويب على هندسة البرمجيات للأنظمة القائمة على الويب؟",
          explanation:
            "إعادة استخدام البرمجيات (Software Reuse) بقت النهج السائد لبناء الأنظمة القائمة على الويب.",
        },
        {
          q: "According to the text, why is it now generally recognized as impractical to specify all requirements for web-based systems in advance?",
          options: [
            "Because such systems are always developed and delivered incrementally",
            "Because web-based systems never change once released",
            "Because users do not have any requirements",
            "Because specifications are illegal for web systems",
          ],
          correct: 0,
          translation:
            "حسب النص، لماذا أصبح من غير العملي تحديد كل متطلبات الأنظمة القائمة على الويب مسبقًا؟",
          explanation:
            "لأن هذه الأنظمة دائمًا تُطوَّر وتُسلَّم بشكل تدريجي (Incremental) — المتطلبات بتتطور مع الوقت.",
        },
        {
          q: "Which interface development technologies are mentioned as supporting rich interfaces within a web browser?",
          options: [
            "COBOL and Fortran",
            "AJAX and HTML5",
            "Assembly and C",
            "SQL and XML only",
          ],
          correct: 1,
          translation:
            "أي تقنيات تطوير واجهات مذكورة كداعمة للواجهات الغنية داخل متصفح الويب؟",
          explanation:
            "AJAX و HTML5 — تقنيات حديثة بتدعم واجهات غنية وتفاعلية داخل المتصفح.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Explain the difference between Generic software products and Customized (bespoke) software, according to Section 1.1 of the textbook.",
          translation:
            "اشرح الفرق بين المنتجات البرمجية العامة (Generic) والبرمجيات المخصصة (Customized) حسب القسم 1.1 من الكتاب.",
          answer:
            "Generic products:\n" +
            "• Stand-alone systems produced by a development organization and sold on the open market to any customer able to buy them.\n" +
            "• Examples: mobile apps, PC software such as databases, word processors, drawing packages, project management tools, and 'vertical' applications like library information systems or accounting systems.\n" +
            "• The developing organization controls the software specification, so it can rethink what is to be developed if problems arise.\n\n" +
            "Customized (bespoke) software:\n" +
            "• Systems commissioned by and developed for a particular customer; a software contractor designs and implements the software especially for that customer.\n" +
            "• Examples: control systems for electronic devices, systems supporting a particular business process, air traffic control systems.\n" +
            "• The specification is developed and controlled by the buying organization, and developers must work to that specification.\n\n" +
            "Note: The distinction is becoming blurred, as many systems (e.g., ERP systems from SAP/Oracle) are now built from a generic base that is then adapted to a specific customer's needs.",
          tags: ["1.1", "Generic products", "Customized software"],
          ref: "Chapter 1 — Section 1.1",
        },
        {
          type: "essay",
          q: "According to Section 1.1.1, what is software engineering, and what are the two key phrases in its definition?",
          translation:
            "حسب القسم 1.1.1، ما هي هندسة البرمجيات، وما العبارتان المفتاحيتان في تعريفها؟",
          answer:
            "Definition:\n" +
            "Software engineering is an engineering discipline that is concerned with all aspects of software production, from the early stages of system specification through to maintaining the system after it has gone into use.\n\n" +
            "1. Engineering discipline:\n" +
            "• Engineers make things work by applying theories, methods, and tools selectively where appropriate.\n" +
            "• They also work within organizational and financial constraints, looking for solutions within these limits, and cannot be perfectionists.\n\n" +
            "2. All aspects of software production:\n" +
            "• Software engineering is not just about the technical process of development.\n" +
            "• It also includes activities such as software project management, and the development of tools, methods, and theories that support software development.",
          tags: ["1.1.1", "Software engineering definition"],
          ref: "Chapter 1 — Section 1.1.1",
        },
      ],
    },
    {
      t: "المحاضرة الثانية — الفصل الثاني: عمليات البرمجيات (Software Processes)",
      d: "مفاهيم الفصل الثاني: نماذج SDLC (Waterfall, Incremental, Reuse-oriented)، الأنشطة الأساسية الأربعة، التعامل مع التغيير (Prototyping & Incremental Delivery)، ونموذج CMMI.",
      id: "software-engineering-lec-02",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 2 - Software processes.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE_Chapter2_Sections2.1-2.2_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الثاني (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)
      notes:
        "الأسئلة المطلوبة من الكتاب:  1 , 3  , 4 , 6 , 8  ,ال علينا في الفصل دي  2.1 Software process models , 2.2 Process activities",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الفصل الثاني من Sommerville: نماذج عمليات البرمجيات، الأنشطة الأساسية، التعامل مع التغيير، وتحسين العمليات",
          links: [
            {
              t: "Software Engineering | Chapter 2 - Software processes  ",
              d: "شرح كامل لمفهوم Software Process، الأنشطة الأربعة الأساسية، ونماذج التطوير (Waterfall, Incremental, Reuse-oriented) فديو 9 الي 17",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PL4mqzqquSRgaJ9XMQMUvMQjPyllD1xY5f&si=x04llH8nKxoNJTVU",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "هندسة البرمجيات Chapter 2 - د. محمد المدهون",
              d: "محاضرات جامعية عربية تشرح الفصل الثاني من كتاب Sommerville 10th Edition: نماذج SDLC، إدارة التغيير، والنماذج الأولية (Prototyping) من فديو 7 الي 9",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtube.com/playlist?list=PLSg6pyQoe5kI&si=DDBf84TRoHTZ3DRU",
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
            "المحاضرات الرسمية لمؤلف الكتاب Ian Sommerville والشروحات العالمية المعتمدة للفصل الثاني",
          links: [
            {
              t: "Plan-based and Agile Software Processes (Ian Sommerville Official)",
              d: "الشرح المباشر من مؤلف الكتاب للفرق بين العمليات القائمة على التخطيط والعمليات المرنة ونماذج SDLC العامة",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=YMbAdgb6pG8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Fundamental Activities of Software Engineering (Ian Sommerville Official)",
              d: "محاضرة رسمية تشرح الأنشطة الأساسية الأربعة: Specification, Development, Validation, and Evolution",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=YMbAdgb6pG8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "SWEG3301 Sommerville Chapter Two Software Processes",
              d: "شرح أكاديمي شامل لجميع محتويات الفصل الثاني وفق منهج Sommerville المعتمد في الجامعات العالمية",
              icon: "🌍",
              actions: [
                {
                  label: "📖 مشاهدة الشرح",
                  url: "https://www.youtube.com/watch?v=DybqiqW27h0",
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
            "المراجع الرسمية لكتاب Sommerville والمقالات التعليمية المعتمدة للفصل الثاني",
          links: [
            {
              t: "Sommerville Official Website - Chapter 2 Slides & Web Supplements",
              d: "الموقع الرسمي للكتاب: العروض التقديمية (PowerPoint)، ملحقات RUP والـ Spiral Model ومراجع الفصل الثاني",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://software-engineering-book.com/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Software Processes in Software Engineering",
              d: "مقال تفصيلي يغطي: تعاريف Software Process، الأنشطة الأساسية، مقارنة SDLC Models (Waterfall, Agile, Scrum, DevOps)",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-processes-in-software-engineering/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "TutorialsPoint - Software Development Life Cycle (SDLC)",
              d: "مرجع منظم يغطي نماذج دورة حياة تطوير البرمجيات والأنشطة المرحلية بالتفصيل",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح الدرس",
                  url: "https://www.tutorialspoint.com/software_engineering/index.htm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        // {
        //   category: "تحسين العمليات ومستويات النضج",
        //   icon: "🔧",
        //   description:
        //     "المراجع الخاصة بنماذج نضج العمليات (CMMI) والعمليات الموجهة للتغيير",
        //   links: [
        //     {
        //       t: "Sommerville Web Chapter - Rational Unified Process (RUP) & Spiral Model",
        //       d: "التوثيق المكمل من كتاب Sommerville لنموذج RUP ومستوياته الثلاثية ونموذج بوهم الحلزوني (Boehm's Spiral Model)",
        //       icon: "🔧",
        //       actions: [
        //         {
        //           label: "🌐 فتح المرجع",
        //           url: "https://software-engineering-book.com/web/rup/",
        //           type: "view",
        //           color: "blue",
        //         },
        //       ],
        //     },

        //   ],
        // },
      ],
      // ═══════════════════════════════════════════════════════════════════
      //  مادة: Software Engineering — هندسة البرمجيات
      //  المسار: datenew/software-engineering/software-engineering.js → lectures[1].questions
      //  المرجع: Sommerville — Software Engineering (Chapter 2)
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ═══════════════════════════════════════════════════════
        // MCQ
        // ═══════════════════════════════════════════════════════
        {
          q: "A software process model (or Software Development Life Cycle, SDLC model) is best described as:",
          options: [
            "A simplified representation of a software process",
            "A complete and exhaustive description of every process activity",
            "A programming language",
            "A testing tool only",
          ],
          correct: 0,
          translation:
            "نموذج العملية البرمجية (أو نموذج دورة حياة تطوير البرمجيات SDLC) أفضل وصف له هو:",
          explanation:
            "تمثيل مبسّط لعملية برمجية — مش وصف كامل وشامل، ولا لغة برمجة، ولا أداة اختبار.",
        },
        {
          q: "Why does each process model only provide partial information about a process?",
          options: [
            "Because models are randomly generated",
            "Each model represents the process from a particular perspective, e.g., an activity model may not show the roles of people involved",
            "Because process models only apply to hardware",
            "Because process models are always outdated",
          ],
          correct: 1,
          translation:
            "لماذا يقدم كل نموذج عملية معلومات جزئية فقط عن العملية؟",
          explanation:
            "لأن كل نموذج يمثّل العملية من منظور معين — نموذج الأنشطة مثلاً مش بيوضح أدوار الأشخاص المشاركين.",
        },
        {
          q: "Which three general process models are covered in Section 2.1?",
          options: [
            "Spiral, V-model, and RUP only",
            "The waterfall model, incremental development, and integration and configuration",
            "Agile, Scrum, and Kanban",
            "Object-oriented, structured, and functional design",
          ],
          correct: 1,
          translation: "أي ثلاثة نماذج عملية عامة تُغطى في القسم 2.1؟",
          explanation:
            "نموذج الشلال (Waterfall) + التطوير التدريجي (Incremental) + التكامل والتهيئة (Integration and Configuration).",
        },
        {
          q: "What does the waterfall model do with the fundamental process activities of specification, development, validation, and evolution?",
          options: [
            "Represents them as separate, sequential process phases",
            "Runs them all in parallel",
            "Interleaves them continuously",
            "Removes validation entirely",
          ],
          correct: 0,
          translation:
            "ماذا يفعل نموذج الشلال بالأنشطة الأساسية: المواصفات، التطوير، التحقق، والتطور؟",
          explanation:
            "بيمثّلها كمراحل منفصلة ومتسلسلة — كل مرحلة تبدأ بعد انتهاء اللي قبلها.",
        },
        {
          q: "What does incremental development do with specification, development, and validation activities?",
          options: [
            "Keeps them strictly separate and sequential",
            "Skips validation until the very end",
            "Interleaves them, developing the system as a series of increasingly functional versions",
            "Performs them only once at the start",
          ],
          correct: 2,
          translation:
            "ماذا يفعل التطوير التدريجي بأنشطة المواصفات والتطوير والتحقق؟",
          explanation:
            "بيشبكهم مع بعض (Interleaves) — النظام بيتطور كسلسلة من الإصدارات المتزايدة الوظائف.",
        },
        {
          q: "What does the integration and configuration approach rely on?",
          options: [
            "Avoiding all software reuse",
            "A strictly sequential waterfall process",
            "The availability of reusable components or systems",
            "Writing every component from scratch",
          ],
          correct: 2,
          translation: "على ماذا يعتمد نهج التكامل والتهيئة؟",
          explanation:
            "على توفر مكونات أو أنظمة قابلة لإعادة الاستخدام — بيجمّعها بدل ما يكتب كل حاجة من الصفر.",
        },
        {
          q: "According to the text, what determines the right process model for a project?",
          options: [
            "Only the programming language chosen",
            "Only the preference of the lead programmer",
            "The customer and regulatory requirements, the environment where the software will be used, and the type of software being developed",
            "Only the size of the development team",
          ],
          correct: 2,
          translation: "حسب النص، ما الذي يحدد نموذج العملية المناسب للمشروع؟",
          explanation:
            "متطلبات العميل والجهات التنظيمية + بيئة استخدام البرنامج + نوع البرنامج المطوّر — ثلاث عوامل أساسية.",
        },
        {
          q: "Why is safety-critical software usually developed using a waterfall process?",
          options: [
            "Because safety-critical software never changes",
            "Because it is the cheapest approach",
            "Because waterfall requires no documentation",
            "Because lots of analysis and documentation is required before implementation begins",
          ],
          correct: 3,
          translation:
            "لماذا عادةً يُطوَّر البرنامج الحرج من ناحية السلامة باستخدام نموذج الشلال؟",
          explanation:
            "لأنه يتطلب تحليلاً وتوثيقاً كثيراً قبل بدء التنفيذ — خصوصاً تحليل السلامة والأمان لكل التصميم.",
        },
        {
          q: "According to the text, how are business systems increasingly being developed?",
          options: [
            "By configuring existing systems and integrating them to create a new system with the required functionality",
            "Always from scratch using the waterfall model",
            "Without any customer involvement",
            "Only through formal mathematical methods",
          ],
          correct: 0,
          translation: "حسب النص، كيف تُطوَّر أنظمة الأعمال بشكل متزايد؟",
          explanation:
            "بتهيئة أنظمة موجودة ودمجها لإنشاء نظام جديد بالوظائف المطلوبة — نهج إعادة الاستخدام.",
        },
        {
          q: "What does the Rational Unified Process (RUP) do?",
          options: [
            "Applies only to hardware engineering",
            "Brings together elements of all the general process models and supports prototyping and incremental delivery",
            "Replaces the need for any process model",
            "Is identical to the waterfall model",
          ],
          correct: 1,
          translation: "ماذا يفعل الـ RUP (عملية راشيونال الموحدة)؟",
          explanation:
            "بيجمع عناصر من كل نماذج العمليات العامة، ويدعم النماذج الأولية والتسليم التدريجي.",
        },
        {
          q: "The RUP is normally described from which three perspectives?",
          options: [
            "A hardware, software, and network perspective",
            "A testing, coding, and design perspective only",
            "A dynamic perspective, a static perspective, and a practice perspective",
            "A financial, legal, and marketing perspective",
          ],
          correct: 2,
          translation: "عادةً ما يوصف الـ RUP من أي ثلاث منظورات؟",
          explanation:
            "منظور ديناميكي (Dynamic) + منظور ثابت (Static) + منظور ممارسة (Practice).",
        },
        {
          q: "What are the four phases of the RUP?",
          options: [
            "Requirements, coding, debugging, and release",
            "Inception, elaboration, construction, and transition",
            "Planning, analysis, design, and testing",
            "Discovery, prototyping, scaling, and archiving",
          ],
          correct: 1,
          translation: "ما المراحل الأربعة للـ RUP؟",
          explanation:
            "البداية (Inception) + التفصيل (Elaboration) + البناء (Construction) + الانتقال (Transition).",
        },
        {
          q: "The first published model of the software development process was derived from:",
          options: [
            "Engineering process models used in large military systems engineering",
            "Object-oriented design principles",
            "Internet software engineering practices",
            "Agile manifesto principles",
          ],
          correct: 0,
          translation: "أول نموذج منشور لعملية تطوير البرمجيات اشتُق من:",
          explanation:
            "نماذج العمليات الهندسية المستخدمة في هندسة النظم العسكرية الكبيرة — الأصول التاريخية لنموذج الشلال.",
        },
        {
          q: "Why is the waterfall model also known as the 'software life cycle'?",
          options: [
            "Because every phase runs simultaneously",
            "Because it repeats infinitely",
            "Because of the cascade from one phase to another",
            "Because it was first used for websites",
          ],
          correct: 2,
          translation:
            "لماذا يُعرف نموذج الشلال أيضاً بـ 'دورة حياة البرمجيات'؟",
          explanation:
            "بسبب التتابع (Cascade) من مرحلة لأخرى — زي الشلال اللي بينزل من مستوى لمستوى.",
        },
        {
          q: "The waterfall model is described as an example of a:",
          options: [
            "Risk-driven process",
            "Reuse-driven process",
            "Test-driven process",
            "Plan-driven process",
          ],
          correct: 3,
          translation: "نموذج الشلال يُوصف كمثال على:",
          explanation:
            "عملية مدفوعة بالخطة (Plan-driven) — كل الأنشطة مخطط لها ومجدولة مسبقاً قبل بدء التطوير.",
        },
        {
          q: "What are the five stages of the waterfall model, in order?",
          options: [
            "Specification; prototyping; refactoring; release; archiving",
            "Design; coding; marketing; sales; support",
            "Requirements analysis and definition; system and software design; implementation and unit testing; integration and system testing; operation and maintenance",
            "Coding; testing; debugging; deployment; retirement",
          ],
          correct: 2,
          translation: "ما المراحل الخمس لنموذج الشلال بالترتيب؟",
          explanation:
            "تحليل وتعريف المتطلبات → تصميم النظام والبرمجيات → التنفيذ واختبار الوحدات → التكامل واختبار النظام → التشغيل والصيانة.",
        },
        {
          q: "In the waterfall model, what is normally the longest life-cycle phase?",
          options: [
            "Operation and maintenance",
            "Implementation and unit testing",
            "Requirements analysis and definition",
            "Integration and system testing",
          ],
          correct: 0,
          translation: "في نموذج الشلال، ما أطول مرحلة في دورة الحياة عادةً؟",
          explanation:
            "التشغيل والصيانة — لأن النظام بيفضل شغال لسنين بعد التسليم الأولي.",
        },
        {
          q: "Why do customers and developers sometimes prematurely freeze the software specification in a waterfall process?",
          options: [
            "Because it reduces testing time to zero",
            "Because freezing the specification is required by law",
            "Because changing documents at later stages requires customer approval and delays the overall process",
            "Because requirements never change in practice",
          ],
          correct: 2,
          translation:
            "لماذا يجمد العملاء والمطورون مواصفات البرنامج قبل أوانها أحياناً في عملية الشلال؟",
          explanation:
            "لأن تغيير المستندات في المراحل اللاحقة يتطلب موافقة العميل ويؤخر العملية الإجمالية — فبيفضلوا التجميد المبكر.",
        },
        {
          q: "According to the text, for which type of systems is the waterfall model appropriate? (choose the best single category)",
          options: [
            "Any system with changing requirements",
            "Systems developed informally by small teams",
            "Systems with no need for documentation",
            "Embedded systems where the software has to interface with hardware systems",
          ],
          correct: 3,
          translation:
            "حسب النص، لأي نوع من الأنظمة يكون نموذج الشلال مناسباً؟",
          explanation:
            "الأنظمة المدمجة حيث يجب أن يتفاعل البرنامج مع أنظمة العتاد — لأن العتاد ثابت والمتطلبات مستقرة.",
        },
        {
          q: "What is 'formal system development', mentioned as a variant of the waterfall model?",
          options: [
            "A method that skips specification entirely",
            "An approach where a mathematical model of a system specification is created and refined using mathematical transformations into executable code",
            "A purely visual, diagram-only design approach",
            "An informal agile technique with no documentation",
          ],
          correct: 1,
          translation:
            "ما هو 'تطوير النظام الرسمي' (Formal System Development) المذكور كتنويع لنموذج الشلال؟",
          explanation:
            "نهج بيتم فيه إنشاء نموذج رياضي لمواصفات النظام ثم تحويله عبر تحويلات رياضية لكود قابل للتنفيذ.",
        },
        {
          q: "Incremental development is based on the idea of:",
          options: [
            "Developing an initial implementation, getting feedback, and evolving the software through several versions",
            "Testing the system only after full development is complete",
            "Delivering only one final version with no feedback",
            "Writing complete documentation before any code is written",
          ],
          correct: 0,
          translation: "التطوير التدريجي يقوم على فكرة:",
          explanation:
            "تطوير تنفيذ أولي + الحصول على ملاحظات + تطوير البرنامج عبر عدة إصدارات — تطوير تكراري.",
        },
        {
          q: "In a plan-driven approach to incremental development, when are the system increments identified?",
          options: [
            "In advance",
            "Randomly during testing",
            "Only after the system is fully delivered",
            "They are never identified",
          ],
          correct: 0,
          translation:
            "في النهج المدفوع بالخطة للتطوير التدريجي، متى تُحدَّد زيادات النظام؟",
          explanation:
            "مسبقاً (In Advance) — كل الزيادات محددة في الخطة قبل البدء.",
        },
        {
          q: "In an agile approach to incremental development, how are later increments decided?",
          options: [
            "Early increments are identified, but later increments depend on progress and customer priorities",
            "They are decided purely by a random lottery",
            "Later increments are decided by a different company",
            "All increments are fixed in advance and never change",
          ],
          correct: 0,
          translation:
            "في النهج الرشيق (Agile) للتطوير التدريجي، كيف تُحدَّد الزيادات اللاحقة؟",
          explanation:
            "الزيادات المبكرة تُحدَّد، لكن الزيادات اللاحقة تعتمد على التقدم وأولويات العميل — مرونة أعلى.",
        },
        {
          q: "Incremental software development is better than a waterfall approach for systems:",
          options: [
            "Whose requirements are likely to change during the development process",
            "That have no functionality",
            "That require no customer feedback",
            "That will never be modified after release",
          ],
          correct: 0,
          translation: "التطوير التدريجي أفضل من نموذج الشلال للأنظمة التي:",
          explanation:
            "متطلباتها قابلة للتغيير أثناء عملية التطوير — لأن التطوير التدريجي بتعامل مع التغيير بسهولة أكبر.",
        },
        {
          q: "Which of the following is listed as a major advantage of incremental development over the waterfall model?",
          options: [
            "It removes the need for a development team",
            "It eliminates the need for testing",
            "The cost of implementing requirements changes is reduced",
            "It guarantees zero bugs",
          ],
          correct: 2,
          translation:
            "أي مما يلي مذكور كميزة رئيسية للتطوير التدريجي على نموذج الشلال؟",
          explanation:
            "تكلفة تنفيذ تغييرات المتطلبات بتقل — لأن التحليل والتوثيق اللي محتاج إعادة أقل.",
        },
        {
          q: "Why is it easier to get customer feedback with incremental development, according to the text?",
          options: [
            "Documentation replaces the need for any demonstration",
            "Feedback is collected only once a year",
            "Customers are not allowed to see the software until release",
            "Customers can comment on demonstrations of working software, which is easier to judge than design documents",
          ],
          correct: 3,
          translation:
            "لماذا يسهل الحصول على ملاحظات العميل مع التطوير التدريجي حسب النص؟",
          explanation:
            "لأن العميل يقدر يعلّق على عروض حية للبرنامج شغال — أسهل بكتير من الحكم على مستندات التصميم.",
        },
        {
          q: "From a management perspective, what is one problem with the incremental approach?",
          options: [
            "It produces too much documentation",
            "The process is not very visible, making it harder for managers to measure progress with regular deliverables",
            "It requires no planning at all",
            "It cannot be used for any business system",
          ],
          correct: 1,
          translation: "من منظور إداري، ما إحدى مشاكل النهج التدريجي؟",
          explanation:
            "العملية مش واضحة كفاية — صعب على المديرين قياس التقدم لأن مفيش مستندات منتظمة لكل نسخة.",
        },
        {
          q: "What tends to happen to system structure as new increments are added?",
          options: [
            "It automatically becomes cleaner",
            "It becomes impossible to test",
            "It stays exactly the same forever",
            "It tends to degrade, becoming messier as new functionality is added",
          ],
          correct: 3,
          translation: "ماذا يحدث عادةً لهيكل النظام مع إضافة زيادات جديدة؟",
          explanation:
            "بيتدهور — بيبقى أكتر فوضى مع إضافة وظائف جديدة. دي مشكلة معروفة في التطوير التدريجي.",
        },
        {
          q: "What do agile methods suggest to reduce structural degradation from incremental development?",
          options: [
            "Avoid testing to save time",
            "Regularly refactor (improve and restructure) the software",
            "Never modify the code after it is written",
            "Stop adding new increments after the second one",
          ],
          correct: 1,
          translation:
            "ماذا تقترح الطرق الرشيقة لتقليل التدهور الهيكلي الناتج عن التطوير التدريجي؟",
          explanation:
            "إعادة الهيكلة (Refactoring) بشكل دوري — تحسين وإعادة تنظيم الكود باستمرار.",
        },
        {
          q: "For large, complex, long-lifetime systems developed by different teams, what does incremental development's problems require?",
          options: [
            "A single developer working alone",
            "No planning at all",
            "Avoiding any architecture altogether",
            "A stable framework or architecture planned in advance, with clearly defined team responsibilities",
          ],
          correct: 3,
          translation:
            "للأنظمة الكبيرة المعقدة طويلة العمر التي تُطوَّر بواسطة فرق مختلفة، ماذا تتطلب مشاكل التطوير التدريجي؟",
          explanation:
            "إطار أو معمارية مستقرة مخطط لها مسبقاً + مسؤوليات واضحة لكل فريق — لازم هيكل يربط كل الفرق.",
        },
        {
          q: "What is the key difference between incremental development and incremental delivery?",
          options: [
            "Incremental delivery means no feedback is ever collected",
            "Incremental development does not necessarily mean delivering each increment to the customer, whereas incremental delivery means the software is used in real operational processes",
            "Incremental development always skips validation",
            "They are exactly the same concept",
          ],
          correct: 1,
          translation:
            "ما الفرق الجوهري بين التطوير التدريجي والتسليم التدريجي؟",
          explanation:
            "التطوير التدريجي مش بالضرورة بيوصّل كل زيادة للعميل، بينما التسليم التدريجي بيعني إن البرنامج بيُستخدم فعلاً في العمليات التشغيلية.",
        },
        {
          q: "What do reuse-oriented (integration and configuration) approaches rely on?",
          options: [
            "A purely sequential waterfall structure",
            "Avoiding all third-party software",
            "A base of reusable software components and an integrating framework for composing them",
            "Writing every line of code from scratch",
          ],
          correct: 2,
          translation:
            "على ماذا تعتمد المناهج الموجهة بإعادة الاستخدام (التكامل والتهيئة)؟",
          explanation:
            "قاعدة من مكونات برمجية قابلة لإعادة الاستخدام + إطار تكامل لتركيبها معاً.",
        },
        {
          q: "Which of the following is listed as a type of software component frequently reused?",
          options: [
            "Marketing brochures",
            "Physical hardware casings",
            "Printed user manuals",
            "Stand-alone application systems configured for use in a particular environment",
          ],
          correct: 3,
          translation:
            "أي مما يلي مذكور كنوع من المكونات البرمجية التي تُعاد استخدامها بشكل متكرر؟",
          explanation:
            "أنظمة تطبيقات مستقلة (Stand-alone) تُهيَّأ للاستخدام في بيئة معينة — زي أنظمة ERP.",
        },
        {
          q: "According to the text, what are the five stages of the reuse-oriented (integration and configuration) process model?",
          options: [
            "Specification; prototyping; refactoring; release; archiving",
            "Planning; coding; testing; debugging; deployment",
            "Design; marketing; sales; delivery; support",
            "Requirements specification; software discovery and evaluation; requirements refinement; application system configuration; component adaptation and integration",
          ],
          correct: 3,
          translation:
            "حسب النص، ما المراحل الخمس لنموذج العملية الموجه بإعادة الاستخدام؟",
          explanation:
            "مواصفات المتطلبات → اكتشاف البرمجيات وتقييمها → تحسين المتطلبات → تهيئة نظام التطبيق → تكييف المكونات وتكاملها.",
        },
        {
          q: "What is an obvious advantage of reuse-oriented software engineering, according to the text?",
          options: [
            "It eliminates the need for integration",
            "It guarantees the system perfectly meets every user need",
            "It removes the need for any requirements process",
            "It reduces the amount of software to be developed, reducing cost and risk, and usually leads to faster delivery",
          ],
          correct: 3,
          translation:
            "ما الميزة الواضحة لهندسة البرمجيات الموجهة بإعادة الاستخدام حسب النص؟",
          explanation:
            "بتقلل كمية البرمجيات المطلوب تطويرها — بتقلل التكلفة والمخاطر، وعادةً بتوصل لتسليم أسرع.",
        },
        {
          q: "What is a disadvantage of reuse-oriented software engineering mentioned in the text?",
          options: [
            "It removes the need for software discovery and evaluation",
            "Requirements compromises are inevitable, and some control over system evolution is lost since reusable components are not controlled by the organization using them",
            "It cannot be used with web services",
            "It is always more expensive than writing everything from scratch",
          ],
          correct: 1,
          translation:
            "ما عيب هندسة البرمجيات الموجهة بإعادة الاستخدام المذكور في النص؟",
          explanation:
            "لازم تقديم تنازلات في المتطلبات + فقدان بعض التحكم في تطور النظام لأن المكونات مش مملوكة للمنظمة المستخدمة.",
        },
        {
          q: "According to Section 2.2, what are the four basic process activities common to software processes?",
          options: [
            "Analysis, synthesis, compilation, and execution",
            "Planning, coding, marketing, and selling",
            "Design, testing, deployment, and retirement only",
            "Specification, development, validation, and evolution",
          ],
          correct: 3,
          translation:
            "حسب القسم 2.2، ما الأنشطة الأربعة الأساسية المشتركة بين العمليات البرمجية؟",
          explanation:
            "المواصفات (Specification) + التطوير (Development) + التحقق (Validation) + التطور (Evolution).",
        },
        {
          q: "How are these four basic activities organized in the waterfall model compared to incremental development?",
          options: [
            "They are only used in the waterfall model",
            "They are identical in both models",
            "In the waterfall model they are organized in sequence, whereas in incremental development they are interleaved",
            "They are skipped entirely in incremental development",
          ],
          correct: 2,
          translation:
            "كيف تُنظَّم هذه الأنشطة الأربعة في نموذج الشلال مقارنةً بالتطوير التدريجي؟",
          explanation:
            "في نموذج الشلال: متسلسلة (In Sequence). في التطوير التدريجي: متشابكة (Interleaved).",
        },
        {
          q: "Software specification (requirements engineering) is the process of:",
          options: [
            "Only designing the user interface",
            "Understanding and defining what services are required from the system and identifying constraints on its operation and development",
            "Writing the final source code",
            "Testing the system after release",
          ],
          correct: 1,
          translation: "مواصفات البرمجيات (هندسة المتطلبات) هي عملية:",
          explanation:
            "فهم وتعريف الخدمات المطلوبة من النظام + تحديد القيود على تشغيله وتطويره.",
        },
        {
          q: "What is the purpose of a feasibility or marketing study, carried out before requirements engineering starts?",
          options: [
            "To assess whether there is a need or market for the software and whether it is technically and financially realistic to develop",
            "To write the complete source code",
            "To train the future users of the system",
            "To test the final deployed system",
          ],
          correct: 0,
          translation:
            "ما الغرض من دراسة الجدوى أو السوق التي تُجرى قبل بدء هندسة المتطلبات؟",
          explanation:
            "تقييم إذا كان فيه حاجة أو سوق للبرنامج + إذا كان تطويره واقعياً تقنياً ومالياً.",
        },
        {
          q: "What are the three main activities in the requirements engineering process?",
          options: [
            "Planning, marketing, and sales",
            "Coding, testing, and debugging",
            "Requirements elicitation and analysis, requirements specification, and requirements validation",
            "Design, implementation, and deployment",
          ],
          correct: 2,
          translation: "ما الأنشطة الرئيسية الثلاثة في عملية هندسة المتطلبات؟",
          explanation:
            "استخلاص المتطلبات وتحليلها + مواصفات المتطلبات + التحقق من المتطلبات.",
        },
        {
          q: "What is the difference between user requirements and system requirements, as described in the text?",
          options: [
            "User requirements are abstract statements for the customer and end-user; system requirements are a more detailed description of the functionality",
            "They are exactly the same document",
            "System requirements are always shorter than user requirements",
            "User requirements are written only by programmers",
          ],
          correct: 0,
          translation:
            "ما الفرق بين متطلبات المستخدم ومتطلبات النظام حسب النص؟",
          explanation:
            "متطلبات المستخدم بيانات مجردة للعميل والمستخدم النهائي، ومتطلبات النظام وصف أكثر تفصيلاً للوظائف.",
        },
        {
          q: "What does requirements validation check for?",
          options: [
            "Realism, consistency, and completeness of the requirements",
            "Only the programming language to be used",
            "Only the budget of the project",
            "Only spelling errors in the document",
          ],
          correct: 0,
          translation: "ما الذي يتحقق منه التحقق من المتطلبات؟",
          explanation:
            "الواقعية والاتساق والاكتمال — ثلاث خصائص أساسية لمتطلبات صحيحة.",
        },
        {
          q: "In agile methods, how is requirements specification treated?",
          options: [
            "It is always a huge, separate document completed before any coding starts",
            "It is skipped entirely and never documented",
            "It is only done once at the very end of the project",
            "It is not a separate activity but part of system development, informally specified for each increment just before it is developed",
          ],
          correct: 3,
          translation: "في الطرق الرشيقة، كيف تُعالَج مواصفات المتطلبات؟",
          explanation:
            "مش نشاط منفصل، بل جزء من تطوير النظام — تُحدَّد بشكل غير رسمي لكل زيادة قبل تطويرها مباشرة.",
        },
        {
          q: "What is a software design, as defined in Section 2.2.2?",
          options: [
            "Only the marketing plan for the product",
            "Only the final compiled binary",
            "Only the user manual",
            "A description of the structure of the software to be implemented, the data models and structures used, the interfaces between components and, sometimes, the algorithms used",
          ],
          correct: 3,
          translation: "ما هو تصميم البرمجيات كما هو معرّف في القسم 2.2.2؟",
          explanation:
            "وصف هيكل البرنامج + نماذج وبنى البيانات + الواجهات بين المكونات + أحياناً الخوارزميات.",
        },
        {
          q: "According to Figure 2.5, which four activities may be part of the design process for information systems?",
          options: [
            "Architectural design, database design, interface design, and component selection and design",
            "Hardware design, network design, training design, and support design",
            "Testing design, debugging design, deployment design, and retirement design",
            "Marketing design, sales design, pricing design, and branding design",
          ],
          correct: 0,
          translation:
            "حسب الشكل 2.5، أي أربعة أنشطة قد تكون جزءاً من عملية التصميم لأنظمة المعلومات؟",
          explanation:
            "التصميم المعماري + تصميم قاعدة البيانات + تصميم الواجهات + اختيار وتصميم المكونات.",
        },
        {
          q: "What is architectural design concerned with?",
          options: [
            "Only designing the database schema",
            "Identifying the overall structure of the system, its principal components, their relationships, and how they are distributed",
            "Only choosing a programming language",
            "Only writing unit tests",
          ],
          correct: 1,
          translation: "بماذا يهتم التصميم المعماري؟",
          explanation:
            "تحديد الهيكل العام للنظام + المكونات الرئيسية + علاقاتها + كيفية توزيعها.",
        },
        {
          q: "Why must an interface specification be unambiguous?",
          options: [
            "So that it never needs to be documented",
            "So it can be skipped during testing",
            "So that only one developer can ever use it",
            "So a component may be used by other components without them having to know how it is implemented",
          ],
          correct: 3,
          translation: "لماذا يجب أن تكون مواصفات الواجهة غير غامضة؟",
          explanation:
            "عشان مكوّن يقدر يُستخدم بواسطة مكونات تانية بدون معرفة كيفية تنفيذه الداخلي — تجريد الواجهة.",
        },
        {
          q: "What is the difference between testing and debugging, according to the text?",
          options: [
            "Testing is only done by customers",
            "They are exactly the same activity",
            "Testing establishes the existence of defects, while debugging is concerned with locating and correcting these defects",
            "Debugging happens before any code is written",
          ],
          correct: 2,
          translation: "ما الفرق بين الاختبار والتنقيح (Debugging) حسب النص؟",
          explanation:
            "الاختبار بيثبت وجود العيوب، والتنقيح بيهتم بتحديد موقعها وتصحيحها — نشاطان مختلفان.",
        },
        {
          q: "What is the goal of software validation (verification and validation, V&V)?",
          options: [
            "To market the software product",
            "To show that a system both conforms to its specification and meets the expectations of the system customer",
            "To design the database schema",
            "To write new requirements for the next version",
          ],
          correct: 1,
          translation: "ما هدف التحقق من صحة البرمجيات (V&V)؟",
          explanation:
            "إثبات أن النظام يتوافق مع مواصفاته + يلبي توقعات العميل — الهدف المزدوج للـ V&V.",
        },
        {
          q: "What are the three stages of the testing process shown in Figure 2.6?",
          options: [
            "Design testing, documentation testing, and training testing",
            "Component testing, system testing, and customer testing",
            "Planning testing, coding testing, and marketing testing",
            "Unit testing, hardware testing, and network testing",
          ],
          correct: 1,
          translation:
            "ما المراحل الثلاث لعملية الاختبار الموضحة في الشكل 2.6؟",
          explanation:
            "اختبار المكونات (Component) + اختبار النظام (System) + اختبار العميل (Customer).",
        },
        {
          q: "What is component testing?",
          options: [
            "Testing performed only by the customer",
            "Testing individual components, such as functions or object classes, independently by the people developing the system",
            "Testing performed only after the product is released",
            "Testing the fully integrated system with real customer data",
          ],
          correct: 1,
          translation: "ما هو اختبار المكونات؟",
          explanation:
            "اختبار المكونات الفردية (زي الدوال أو الكلاسات) بشكل مستقل بواسطة المطورين — أداة JUnit مثلاً.",
        },
        {
          q: "What is system testing concerned with, according to the text?",
          options: [
            "Only testing a single isolated function",
            "Only checking spelling in the user manual",
            "Finding errors from unanticipated interactions between components and interface problems, and showing the system meets its requirements",
            "Only verifying the marketing plan",
          ],
          correct: 2,
          translation: "بماذا يهتم اختبار النظام حسب النص؟",
          explanation:
            "اكتشاف الأخطاء من التفاعلات غير المتوقعة بين المكونات + مشاكل الواجهات + إثبات أن النظام يلبي متطلباته.",
        },
        {
          q: "What is customer testing (also called beta testing for products)?",
          options: [
            "Testing performed only by the original programmer",
            "A stage that occurs before any requirements are gathered",
            "The final stage of testing where the system is tested by the system customer or potential customers rather than with simulated test data",
            "A stage used only for embedded hardware systems",
          ],
          correct: 2,
          translation:
            "ما هو اختبار العميل (المعروف أيضاً بالـ Beta Testing للمنتجات)؟",
          explanation:
            "المرحلة النهائية للاختبار حيث يُختبر النظام بواسطة العميل أو عملاء محتملين بدل بيانات اختبار مُحاكاة.",
        },
        {
          q: "What is the V-model of development, as mentioned in the text?",
          options: [
            "A model with no relationship to testing",
            "A representation (used in plan-driven testing) showing validation activities that correspond to each stage of the waterfall process, where test plans link testing and development",
            "A model that replaces the waterfall model entirely",
            "A model used only for agile development",
          ],
          correct: 1,
          translation: "ما هو نموذج V للتطوير كما ذُكر في النص؟",
          explanation:
            "تمثيل (يُستخدم في الاختبار المدفوع بالخطة) يوضح أنشطة التحقق المقابلة لكل مرحلة من عملية الشلال، حيث تربط خطط الاختبار بين الاختبار والتطوير.",
        },

        // ═══════════════════════════════════════════════════════
        // Essay
        // ═══════════════════════════════════════════════════════
        {
          type: "essay",
          q: "Describe the waterfall model, including its five stages, and explain why it is appropriate for some types of systems but problematic for others.",
          translation:
            "صِف نموذج الشلال بمراحله الخمس، واشرح لماذا هو مناسب لبعض الأنواع ومشكل لبعضها.",
          answer:
            "The waterfall model represents the fundamental software development activities as separate, sequential phases:\n" +
            "1. Requirements analysis and definition\n" +
            "2. System and software design\n" +
            "3. Implementation and unit testing\n" +
            "4. Integration and system testing\n" +
            "5. Operation and maintenance (normally the longest phase)\n" +
            "\n" +
            "It is a plan-driven process: in principle, all activities are planned and scheduled before development starts, and each phase's result is one or more approved documents, with the next phase not starting until the previous one has finished.\n" +
            "\n" +
            "Problems: in practice the software process is never purely linear — problems with requirements are found during design, design problems are found during coding, and so on, requiring feedback between phases. Both customers and developers may prematurely freeze the specification to avoid costly late changes, which can leave the system not doing what the user actually wants.\n" +
            "\n" +
            "It is appropriate for: (1) embedded systems that must interface with inflexible hardware, (2) critical systems needing extensive safety/security analysis of complete specification and design documents, and (3) large systems developed by several partner companies that need complete specifications for independent subsystem development. It is not appropriate where informal team communication is possible and requirements change quickly — iterative development and agile methods suit those cases better.",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
        {
          type: "essay",
          q: "Explain incremental development: how it works, its three advantages over the waterfall model, and the two problems it creates from a management perspective.",
          translation:
            "اشرح التطوير التدريجي: كيف يعمل، مزاياه الثلاث على نموذج الشلال، والمشكلتين اللتين يخلقهما من منظور إداري.",
          answer:
            "How it works: an initial implementation is developed, feedback is gathered from users, and the software evolves through several increasingly functional versions. Specification, development, and validation are interleaved rather than separate. Each increment incorporates some needed functionality, usually with the most important/urgent functionality delivered earliest.\n" +
            "\n" +
            "Three advantages over the waterfall model:\n" +
            "1. The cost of implementing requirements changes is reduced, since less analysis and documentation needs to be redone.\n" +
            "2. It is easier to get customer feedback, since customers can comment on working demonstrations rather than design documents.\n" +
            "3. Early delivery and deployment of useful software is possible, even before all functionality is included.\n" +
            "\n" +
            "Two management-perspective problems:\n" +
            "1. The process is not very visible, since it is not cost-effective to produce documents reflecting every version, making it harder for managers to measure progress with regular deliverables.\n" +
            "2. System structure tends to degrade as new increments are added, becoming messier and more costly to extend — agile methods suggest regular refactoring to address this.",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
        {
          type: "essay",
          q: "Describe the three main activities of the requirements engineering process (Section 2.2.1), and the four design activities shown in Figure 2.5 (Section 2.2.2).",
          translation:
            "صِف الأنشطة الثلاثة الرئيسية لعملية هندسة المتطلبات (القسم 2.2.1)، والأنشطة الأربعة للتصميم الموضحة في الشكل 2.5 (القسم 2.2.2).",
          answer:
            "Requirements engineering process (three activities):\n" +
            "1. Requirements elicitation and analysis — deriving system requirements through observation of existing systems, discussions with users/procurers, and task analysis, often involving system models and prototypes.\n" +
            "2. Requirements specification — translating the gathered information into a document defining a set of requirements, at two levels: user requirements (abstract, for customers/end-users) and system requirements (a more detailed description of functionality).\n" +
            "3. Requirements validation — checking the requirements for realism, consistency, and completeness, and modifying the document to correct any discovered errors.\n" +
            "\n" +
            "Design process activities (Figure 2.5, for information systems):\n" +
            "1. Architectural design — identifying the overall system structure, principal components/subsystems, their relationships, and distribution.\n" +
            "2. Database design — designing the system's data structures and how they will be represented in a database.\n" +
            "3. Interface design — defining unambiguous interfaces between system components so components can be used without knowing their implementation.\n" +
            "4. Component selection and design — searching for reusable components or designing new ones when none are suitable.",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
        {
          type: "essay",
          q: "Explain the three stages of the testing process shown in Figure 2.6, and the difference between testing and debugging.",
          translation:
            "اشرح المراحل الثلاث لعملية الاختبار الموضحة في الشكل 2.6، والفرق بين الاختبار والتنقيح.",
          answer:
            "Testing vs. debugging: testing establishes the existence of defects in a program; debugging is the separate process of locating and correcting those defects (generating hypotheses about observed behavior and testing them, often with the help of interactive debugging tools).\n" +
            "\n" +
            "The three stages of testing:\n" +
            "1. Component testing — individual components (e.g., functions or object classes) are tested independently by the people developing the system, often with automated test tools (e.g., JUnit).\n" +
            "2. System testing — components are integrated into a complete system; this stage finds errors from unanticipated interactions between components and interface problems, and checks that functional and non-functional requirements are met.\n" +
            "3. Customer testing — the final stage before acceptance for operational use, where the system is tested with real customer data (for custom software) or through beta testing by selected users (for products).",
          tags: ["Chapter 2", "2.1", "2.2"],
          ref: "Chapter 2 — Sections 2.1 and 2.2",
        },
      ],
    },
    {
      t: "المحاضرة الثالثة — الفصل الثالث: التطوير الرشيق للبرمجيات (Agile Software Development)",
      d: "مبررات طرق Agile وبيان Agile ومبادئها، ممارسات XP (user stories، refactoring، test-first، pair programming)، إدارة المشاريع بـ Scrum، وتوسيع Agile.",
      id: "software-engineering-lec-03",

      notes:
        "3.4 Scaling agile   للقراء فقط  ,   الأسئلة المطلوبة من الكتاب:  من 1 لحد 7",

      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 3 - Agile software development.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE-Lecture-03-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "فيديوهات تعليمية باللغة العربية تشرح أساسيات منهجيات Agile (سكرم، XP، ...).",
          links: [
            {
              t: "ما هي منهجية الأجايل Agile؟ ولماذا أصبحت الأشهر في إدارة المشاريع؟",
              d: "مقدمة لمنهجية تطوير البرمجيات الرشيقة Agile وأهم مميزاتها.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=MpeUJRRVdM8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "المبادئ الـ12 في Agile ببساطة: السر الحقيقي لنجاح المشاريع الحديثة",
              d: "شرح مبسّط لأهم المبادئ الاثني عشر في منهجية Agile.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=cAjCxnzGDAY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "كورس كامل: شرح إدارة المشاريع الرشيقة (Agile & Scrum) - د. أحمد السنوسي",
              d: "محاضرة شاملة تشرح منهجيات Agile و Scrum من الأساس للاحتراف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=a8P3i8smmBw",
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
            "فيديوهات تعليمية باللغة الإنجليزية حول Agile وScrum وأطر عمل Agile الأخرى.",
          links: [
            {
              t: "Agile Software Development and Extreme Programming (Lecture 3) - Edureka",
              d: "محاضرة تشرح أطر عمل Agile المختلفة مثل Scrum وKanban وLean وXP.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch Video",
                  url: "https://www.youtube.com/watch?v=KogKKAgN5Ps",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "What is Agile Project Management? (3min overview)",
              d: "شرح مختصر لمفهوم الإدارة الرشيقة للمشاريع (Agile PM) وفوائدها.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch Video",
                  url: "https://www.youtube.com/watch?v=3wMQZ_0gkt8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Scrum in 10 Minutes (David Sabine, PST) - Scrum.org",
              d: "فيديو قصير يشرح إطار عمل Scrum (الأدوار، الأحداث، والوثائق الرئيسية).",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch Video",
                  url: "https://www.youtube.com/watch?v=NtTXWAlIMC8",
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
            "مواقع ومراجع تشرح مفاهيم Agile وأطر عملها (Scrum وXP وغيرها) باللغتين العربية والإنجليزية.",
          links: [
            {
              t: "What is Scrum? - دليل إطار عمل Agile (Atlassian)",
              d: "دليل Atlassian يوضح مكونات إطار عمل Scrum وكيفية استخدامه في إدارة المشاريع.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.atlassian.com/agile/scrum",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "ما المقصود بإطار Scrum؟ - شرح إطار Scrum - AWS",
              d: "مقالة باللغة العربية تشرح إطار Scrum (سكرم) ومفاهيمه الرئيسية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://aws.amazon.com/ar/what-is/scrum/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Agile Methodology - GeeksforGeeks",
              d: "مقال شامل يتناول أساسيات منهجية Agile ومبادئها الأساسية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-testing/what-is-agile-methodology/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "البرمجة القصوى (Extreme Programming) - هارفارد بيزنس ريفيو بالعربية",
              d: "شرح لمعنى البرمجة القصوى (XP) وأهم ممارساتها في تطوير البرمجيات.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://hbrarabic.com/%D8%A7%D9%84%D9%85%D9%81%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9/%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A7%D9%84%D9%82%D8%B5%D9%88%D9%89/",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات برمجية لدعم منهجيات Agile، مثل إدارة المشاريع والأتمتة والاختبارات (Jira، Jest، GitHub Actions).",
          links: [
            {
              t: "Jira (Atlassian) - إدارة المشاريع بنهج Agile",
              d: "أداة شهيرة لإدارة المشاريع وتنظيم العمل باستخدام Scrum أو Kanban.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.atlassian.com/software/jira",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "GitHub Actions - التكامل المستمر (CI)",
              d: "منصة CI/CD مدمجة مع GitHub لأتمتة البناء والاختبار والنشر.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://github.com/features/actions",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Jest - إطار اختبار JavaScript",
              d: "إطار عمل لاختبار تطبيقات JavaScript (Node.js/React) بسهولة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://jestjs.io",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. According to the chapter, what is the most critical requirement for most business systems?",
          options: [
            "Complete and stable requirements",
            "Rapid software development and delivery",
            "Detailed design documentation",
            "Minimal use of development tools",
          ],
          correct: 1,
          translation: "حسب الفصل، ما هو أهم متطلب لمعظم أنظمة الأعمال؟",
          explanation:
            "الشركات تعمل في بيئة سريعة التغير فتحتاج برمجيات جديدة بسرعة لاستغلال الفرص، وقد تتنازل أحيانًا عن بعض الجودة أو المتطلبات مقابل التسليم السريع. وجود متطلبات كاملة ومستقرة شبه مستحيل في هذه البيئة.",
          tags: ["Agile", "Rapid delivery"],
          ref: "Lecture 03 — Chapter introduction",
        },
        {
          q: "2. For which type of software is a plan-driven approach still the right one, according to the chapter?",
          options: [
            "Small mobile apps",
            "Short-lived marketing websites",
            "Prototypes built for demonstrations",
            "Safety-critical control systems where a complete analysis is essential",
          ],
          correct: 3,
          translation:
            "لأي نوع من البرمجيات يظل النهج المبني على الخطة (plan-driven) هو الأنسب حسب الفصل؟",
          explanation:
            "الأنظمة الحرجة للسلامة مثل أنظمة التحكم تحتاج تحليلًا كاملًا للنظام، فالـ plan-driven مناسب لها. أما في بيئة الأعمال السريعة فقد يسبب مشاكل حقيقية.",
          tags: ["Plan-driven", "Safety-critical"],
          ref: "Lecture 03 — Chapter introduction",
        },
        {
          q: "3. Which of the following is a common characteristic of all agile methods?",
          options: [
            "Specification, design and implementation are interleaved",
            "A complete detailed specification is written before any coding",
            "Testing is done only after the whole system is built",
            "A new release is made once a year",
          ],
          correct: 0,
          translation: "أي مما يلي خاصية مشتركة بين كل طرق Agile؟",
          explanation:
            "في Agile عمليات المواصفات والتصميم والتنفيذ متداخلة ولا توجد مواصفات تفصيلية. الاختيارات الأخرى تصف نهجًا تقليديًا، كما أن الإصدارات في Agile تكون كل أسبوعين أو ثلاثة.",
          tags: ["Agile characteristics", "Interleaving"],
          ref: "Lecture 03 — Chapter introduction",
        },
        {
          q: "4. How does iteration differ between plan-driven and agile development (Figure 3.1)?",
          options: [
            "Plan-driven iterates across activities and agile iterates within activities",
            "Neither approach iterates",
            "In plan-driven development iteration occurs within activities, while in agile it occurs across activities",
            "Agile uses formal documents between stages while plan-driven does not",
          ],
          correct: 2,
          translation:
            "كيف يختلف التكرار (iteration) بين التطوير plan-driven وAgile (الشكل 3.1)؟",
          explanation:
            "في plan-driven يحدث التكرار داخل كل نشاط وتُستخدم مستندات رسمية للتواصل بين المراحل، أما في Agile فيحدث عبر الأنشطة فتُطوَّر المتطلبات والتصميم معًا. الاختيار الأول معكوس والرابع معكوس أيضًا.",
          tags: ["Plan-driven", "Agile", "Iteration"],
          ref: "Lecture 03 — Chapter introduction (Figure 3.1)",
        },
        {
          q: "5. According to the agile manifesto, which item is valued more than following a plan?",
          options: [
            "Comprehensive documentation",
            "Responding to change",
            "Contract negotiation",
            "Processes and tools",
          ],
          correct: 1,
          translation:
            "حسب بيان Agile (manifesto)، أي عنصر يُقدَّر أكثر من اتباع الخطة؟",
          explanation:
            "القيم الأربع: الأفراد والتفاعلات على العمليات والأدوات، والبرمجيات العاملة على التوثيق الشامل، وتعاون العميل على التفاوض على العقد، والاستجابة للتغيير على اتباع الخطة. بقية الاختيارات مذكورة كعناصر أقل قيمة.",
          tags: ["Agile manifesto", "Values"],
          ref: "Lecture 03 — 3.1 Agile methods",
        },
        {
          q: "6. Which agile principle says that the skills of the team should be exploited and team members should develop their own ways of working?",
          options: [
            "People, not process",
            "Incremental delivery",
            "Maintain simplicity",
            "Embrace change",
          ],
          correct: 0,
          translation:
            "أي مبدأ من مبادئ Agile ينص على استغلال مهارات الفريق وترك أعضائه يطورون طرق عملهم بأنفسهم؟",
          explanation:
            "مبدأ People, not process يعترف بمهارات الفريق ويتجنب العمليات الإلزامية. Incremental delivery عن التسليم على دفعات، وMaintain simplicity عن البساطة، وEmbrace change عن توقع تغيّر المتطلبات.",
          tags: ["Agile principles", "People not process"],
          ref: "Lecture 03 — 3.1 Agile methods (Figure 3.2)",
        },
        {
          q: "7. For which kinds of system development have agile methods been particularly successful?",
          options: [
            "Large systems built by many geographically dispersed teams",
            "Safety-critical systems with heavy regulation",
            "Systems tightly integrated with other systems built in parallel",
            "Small or medium-sized product development, and custom systems with a committed customer and few external stakeholders",
          ],
          correct: 3,
          translation: "في أي أنواع تطوير الأنظمة نجحت طرق Agile بشكل خاص؟",
          explanation:
            "نجحت في تطوير المنتجات الصغيرة والمتوسطة، وفي الأنظمة المخصصة داخل مؤسسة حيث العميل ملتزم بالمشاركة وعدد الجهات الخارجية والقوانين قليل. الاختيارات الأخرى بيئات تحتاج تنسيقًا وخطة.",
          tags: ["Agile", "Product development"],
          ref: "Lecture 03 — 3.1 Agile methods",
        },
        {
          q: "8. Why was the name 'Extreme Programming' (XP) chosen?",
          options: [
            "It was developed for extreme sports software",
            "It requires programmers to work extreme hours",
            "It pushes recognized good practices, such as iterative development, to 'extreme' levels",
            "It uses the largest possible amount of documentation",
          ],
          correct: 2,
          translation: "لماذا سُمّيت 'Extreme Programming' (XP) بهذا الاسم؟",
          explanation:
            "الاسم صاغه Kent Beck لأن النهج دفع الممارسات الجيدة المعروفة مثل التطوير التكراري إلى مستويات 'متطرفة'. وهو يرفض العمل لساعات طويلة (Sustainable pace)، فالاختيار الثاني خطأ.",
          tags: ["XP", "Kent Beck"],
          ref: "Lecture 03 — 3.2 Agile development techniques",
        },
        {
          q: "9. In XP, what does the practice 'collective ownership' mean?",
          options: [
            "Only the senior developer owns the core code",
            "Pairs of developers work on all areas of the system, so anyone can change anything and everyone takes responsibility for all the code",
            "Each developer owns one module exclusively",
            "The customer owns the source code",
          ],
          correct: 1,
          translation: "في XP، ماذا تعني ممارسة 'collective ownership'؟",
          explanation:
            "الأزواج يعملون على كل أجزاء النظام فلا تتكون جزر خبرة ويتحمل الجميع مسؤولية كل الكود. هذا عكس ملكية كل مبرمج لوحدة واحدة.",
          tags: ["XP", "Collective ownership"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          q: "10. Which XP practice requires that, once finished work is integrated into the whole system, all the unit tests in the system must pass?",
          options: [
            "Continuous integration",
            "Sustainable pace",
            "Small releases",
            "Simple design",
          ],
          correct: 0,
          translation:
            "أي ممارسة في XP تتطلب أنه بعد دمج العمل المنتهي في النظام يجب أن تنجح كل اختبارات الوحدة؟",
          explanation:
            "Continuous integration: بمجرد انتهاء المهمة تُدمج في النظام كله ويجب أن تنجح كل unit tests بعد كل دمج. Small releases عن الإصدارات المتكررة، وSimple design عن التصميم بقدر الحاجة فقط.",
          tags: ["XP", "Continuous integration"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          q: "11. Why does XP consider large amounts of overtime unacceptable (sustainable pace)?",
          options: [
            "It increases the cost of development tools",
            "It violates the customer contract",
            "The net effect is often to reduce code quality and medium-term productivity",
            "It makes pair programming impossible",
          ],
          correct: 2,
          translation:
            "لماذا تعتبر XP العمل الإضافي الكبير غير مقبول (sustainable pace)؟",
          explanation:
            "الفصل يوضح أن الأثر الصافي للإفراط في العمل غالبًا هو انخفاض جودة الكود والإنتاجية على المدى المتوسط. باقي الأسباب غير مذكورة.",
          tags: ["XP", "Sustainable pace"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          q: "12. What is the principal problem with user stories mentioned in the chapter?",
          options: [
            "Customers cannot understand them",
            "They require a formal specification language",
            "They cannot be broken into tasks",
            "Completeness: it is difficult to judge whether enough stories have been written to cover all essential requirements",
          ],
          correct: 3,
          translation:
            "ما المشكلة الرئيسية في قصص المستخدم (user stories) المذكورة في الفصل؟",
          explanation:
            "المشكلة هي الاكتمال: يصعب الحكم إن كانت القصص تغطي كل المتطلبات الأساسية، وقد لا تعطي قصة واحدة صورة حقيقية للنشاط لأن المستخدم الخبير يترك تفاصيل. على العكس، الناس يربطون بالقصص بسهولة وتُقسَّم إلى tasks.",
          tags: ["User stories", "Completeness"],
          ref: "Lecture 03 — 3.2.1 User stories",
        },
        {
          q: "13. What is refactoring in XP?",
          options: [
            "Rewriting the whole system at the end of the project",
            "Continuously looking for and implementing code improvements to keep the code simple and avoid structural degradation",
            "Adding generality to the code to anticipate future changes",
            "Removing all tests after a release",
          ],
          correct: 1,
          translation: "ما هو الـ refactoring في XP؟",
          explanation:
            "هو البحث المستمر عن تحسينات للكود وتنفيذها فورًا حتى لو لم تكن هناك حاجة عاجلة، لتجنب تدهور بنية البرنامج مع التغييرات المتتالية. XP ترفض 'التصميم للتغيير' بإضافة العمومية مسبقًا.",
          tags: ["Refactoring", "XP"],
          ref: "Lecture 03 — 3.2.2 Refactoring",
        },
        {
          q: "14. What does test-first development mean?",
          options: [
            "Writing automated tests for new functionality before implementing that functionality",
            "Testing the system only after a code review",
            "Letting an external team write the tests later",
            "Skipping unit tests for simple tasks",
          ],
          correct: 0,
          translation:
            "ماذا يعني التطوير بكتابة الاختبارات أولًا (test-first development)؟",
          explanation:
            "تُكتب الاختبارات (باستخدام إطار اختبار آلي مثل JUnit) قبل كتابة الكود، فتُعرّف الواجهة وسلوك الوظيفة وتقل سوء الفهم. الاختيارات الأخرى تصف اختبارًا متأخرًا أو خارجيًا.",
          tags: ["Test-first", "TDD"],
          ref: "Lecture 03 — 3.2.3 Test-first development",
        },
        {
          q: "15. What is the problem of 'test-lag' in testing?",
          options: [
            "Automated tests run too slowly",
            "Tests fail at random",
            "The developer works faster than the tester, so implementation gets ahead of testing and tests tend to be skipped",
            "The customer delays writing acceptance tests",
          ],
          correct: 2,
          translation: "ما هي مشكلة 'test-lag' في الاختبار؟",
          explanation:
            "تحدث حين يعمل المطوّر أسرع من المختبِر فيتقدم التنفيذ على الاختبار ويميل الفريق لتخطي الاختبارات للحفاظ على الجدول. الـ test-first يتفادى ذلك.",
          tags: ["Test-lag", "Testing"],
          ref: "Lecture 03 — 3.2.3 Test-first development",
        },
        {
          q: "16. Why does pair programming work as an informal review process?",
          options: [
            "A manager checks every pair at the end of the day",
            "Pairs stay the same for the whole project",
            "Only one developer types the code",
            "Each line of code is looked at by at least two people",
          ],
          correct: 3,
          translation: "لماذا يعمل pair programming كعملية مراجعة غير رسمية؟",
          explanation:
            "لأن كل سطر كود يراه شخصان على الأقل. هو أرخص وأسهل تنظيمًا من المراجعات الرسمية (code inspections) لكنه غالبًا يكتشف أخطاء أقل منها. الأزواج في XP تتغير ديناميكيًا.",
          tags: ["Pair programming", "Review"],
          ref: "Lecture 03 — 3.2.4 Pair programming",
        },
        {
          q: "17. What did the studies with more experienced programmers (Arisholm et al.) find about pair programming?",
          options: [
            "A significant loss of productivity compared with two programmers working alone, with some quality benefits that did not fully compensate",
            "Productivity was doubled",
            "No difference in productivity or quality",
            "Pair programming produced more errors",
          ],
          correct: 0,
          translation:
            "ماذا وجدت الدراسات على مبرمجين أكثر خبرة (Arisholm وزملاؤه) عن pair programming؟",
          explanation:
            "وجدوا فقدانًا ملحوظًا في الإنتاجية مقارنة بمبرمجين يعملان منفردين، مع فوائد جودة لم تعوّض الكلفة بالكامل. دراسة Williams على الطلاب وجدت إنتاجية مماثلة. ومع ذلك مشاركة المعرفة تقلل المخاطر عند ترك أعضاء الفريق.",
          tags: ["Pair programming", "Productivity"],
          ref: "Lecture 03 — 3.2.4 Pair programming",
        },
        {
          q: "18. What is the recommended maximum size of a Scrum development team?",
          options: [
            "Three people",
            "Seven people",
            "Twelve people",
            "Twenty people",
          ],
          correct: 1,
          translation: "ما الحد الأقصى الموصى به لحجم فريق التطوير في Scrum؟",
          explanation:
            "Development team: مجموعة منظِّمة لنفسها لا تزيد عن سبعة أشخاص.",
          tags: ["Scrum", "Development team"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "19. How long is a Scrum sprint usually?",
          options: [
            "1 to 3 days",
            "1 to 2 months",
            "2 to 4 weeks",
            "6 to 12 months",
          ],
          correct: 2,
          translation: "كم تستغرق دورة Sprint عادةً في Scrum؟",
          explanation:
            "الـ Sprint هو تكرار تطوير (development iteration) مدته عادةً من 2 إلى 4 أسابيع وبطول ثابت.",
          tags: ["Scrum", "Sprint"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "20. What is the job of the Product Owner in Scrum?",
          options: [
            "Making sure the Scrum process is followed and shielding the team from outside interference",
            "Writing all the code of the product",
            "Deciding top-down who works on which task",
            "Identifying product features or requirements, prioritizing them, and continuously reviewing the product backlog",
          ],
          correct: 3,
          translation: "ما دور الـ Product Owner في Scrum؟",
          explanation:
            "الـ Product Owner يحدد الميزات أو المتطلبات ويرتبها حسب الأولوية ويراجع الـ product backlog باستمرار. الاختيار الأول دور الـ ScrumMaster، والثالث غير صحيح لأن الفريق ينظّم نفسه.",
          tags: ["Scrum", "Product Owner"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "21. What is the product backlog in Scrum?",
          options: [
            "A list of 'to do' items the Scrum team must tackle, such as features, requirements, user stories or supplementary tasks",
            "A list of bugs found after the release",
            "Only the work selected for the current sprint",
            "The minutes of the daily Scrum",
          ],
          correct: 0,
          translation: "ما هو الـ product backlog في Scrum؟",
          explanation:
            "هو قائمة بنود العمل التي يجب أن يتناولها الفريق: ميزات، متطلبات، user stories أو مهام مساعدة مثل تعريف المعمارية أو التوثيق. أما العمل المختار للـ sprint فيسمى sprint backlog.",
          tags: ["Scrum", "Product backlog"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "22. What is 'velocity' in Scrum?",
          options: [
            "The speed of the team's network connection",
            "An estimate of how much product backlog effort a team can cover in a single sprint",
            "The number of developers in the team",
            "The date of the final delivery",
          ],
          correct: 1,
          translation: "ما هي الـ 'velocity' في Scrum؟",
          explanation:
            "هي تقدير لحجم جهد الـ product backlog الذي يستطيع الفريق إنجازه في sprint واحد، وتُستخدم لتقدير ما يمكن تغطيته في الـ sprint القادم ولقياس تحسن الأداء.",
          tags: ["Scrum", "Velocity"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "23. What happens to items that cannot be completed within a sprint?",
          options: [
            "The sprint is extended until they are finished",
            "They are deleted from the project",
            "They are returned to the product backlog, because sprints are never extended",
            "They are handed to the ScrumMaster",
          ],
          correct: 2,
          translation: "ماذا يحدث للبنود التي لا يمكن إنجازها داخل الـ sprint؟",
          explanation:
            "لا تُمدَّد الـ sprints أبدًا لاستيعاب العمل غير المنتهي، وتُعاد البنود إلى الـ product backlog.",
          tags: ["Scrum", "Sprint backlog"],
          ref: "Lecture 03 — 3.3 Agile project management",
        },
        {
          q: "24. Which statement about the ScrumMaster is correct?",
          options: [
            "He or she prioritizes the product backlog",
            "He or she writes the sprint backlog alone",
            "He or she directs the team top-down",
            "He or she ensures the Scrum process is followed and interfaces with the rest of the company, and Scrum developers insist this is not a project manager",
          ],
          correct: 3,
          translation: "أي عبارة عن الـ ScrumMaster صحيحة؟",
          explanation:
            "الـ ScrumMaster مسؤول عن اتباع عملية Scrum وإرشاد الفريق والتعامل مع باقي الشركة وحماية الفريق من التشتت، ومطورو Scrum يؤكدون أنه ليس project manager. ترتيب الـ backlog من مهام الـ Product Owner، ولا يوجد توجيه من أعلى لأسفل.",
          tags: ["Scrum", "ScrumMaster"],
          ref: "Lecture 03 — 3.3 Agile project management (Figure 3.8)",
        },
        {
          q: "25. What is the purpose of the daily Scrum meeting?",
          options: [
            "A short meeting to review progress and prioritize the work to be done that day",
            "A formal review presented to senior management",
            "Planning the next product release",
            "Writing the project documentation",
          ],
          correct: 0,
          translation: "ما الغرض من اجتماع الـ Scrum اليومي؟",
          explanation:
            "هو اجتماع قصير (يُفضَّل وجهًا لوجه ويشمل كل الفريق) لمراجعة التقدم وترتيب عمل اليوم: ماذا أنجز كل فرد وما المشاكل وما المخطط للغد. الاختيارات الأخرى ليست غرضه.",
          tags: ["Scrum", "Daily meeting"],
          ref: "Lecture 03 — 3.3 Agile project management",
        },
        {
          type: "essay",
          q: "1. Compare plan-driven and agile development, explaining why agile methods appeared.",
          translation:
            "قارن بين التطوير plan-driven وAgile مع شرح سبب ظهور طرق Agile.",
          answer:
            "Plan-driven development separates the process into stages with outputs (for example a requirements specification) used to plan the next activity. Iteration occurs within activities and formal documents communicate between stages.\n" +
            "Agile treats design and implementation as the central activities and incorporates requirements elicitation and testing into them. Iteration occurs across activities, so requirements and design are developed together.\n" +
            "Plan-driven overhead is justified for large, critical, long-lived systems built by multiple teams, but for small and medium business systems the overhead dominates and requirements changes force rework.\n" +
            "Dissatisfaction with heavyweight approaches led to agile methods in the late 1990s (Extreme Programming, Scrum, DSDM), which focus on delivering working software quickly and avoiding documentation that will never be used.\n" +
            "In practice the two can be mixed: plan-driven processes may use agile practices and agile methods may include some planned activities.",
          tags: ["Agile", "Plan-driven"],
          ref: "Lecture 03 — Chapter introduction and 3.1",
        },
        {
          type: "essay",
          q: "2. State the agile manifesto and the principles of agile methods.",
          translation: "اذكر بيان Agile (manifesto) ومبادئ طرق Agile.",
          answer:
            "The manifesto values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan. The items on the right still have value, but those on the left are valued more.\n" +
            "Principles (Figure 3.2): customer involvement (customers provide and prioritize requirements and evaluate iterations); embrace change (expect requirements to change); incremental delivery (customer specifies the requirements of each increment); maintain simplicity (in the software and in the process); people, not process (exploit team skills and let the team choose its own ways of working).",
          tags: ["Agile manifesto", "Principles"],
          ref: "Lecture 03 — 3.1 Agile methods",
        },
        {
          type: "essay",
          q: "3. What are the common characteristics of agile methods and in which situations do they work well?",
          translation:
            "ما الخصائص المشتركة لطرق Agile وفي أي مواقف تعمل جيدًا؟",
          answer:
            "Common characteristics: (1) specification, design and implementation are interleaved, with no detailed specification and minimal design documentation; (2) the system is developed in a series of increments, with end-users and stakeholders involved in specifying and evaluating each increment; (3) extensive tool support (automated testing, configuration management, integration, UI production tools).\n" +
            "Increments are small, with new releases typically every two or three weeks, and informal communication is used instead of formal documents.\n" +
            "They work well for product development of small or medium-sized products, and for custom systems within an organization with a committed customer and few external stakeholders or regulations.\n" +
            "They work because the customer and team can communicate continuously, the system is stand-alone, and co-located teams can use informal communication.",
          tags: ["Agile characteristics"],
          ref: "Lecture 03 — Chapter introduction and 3.1",
        },
        {
          type: "essay",
          q: "4. List and explain the main Extreme Programming practices.",
          translation: "اذكر واشرح أهم ممارسات Extreme Programming.",
          answer:
            "Incremental planning: requirements are recorded on story cards and the stories for a release are chosen by time available and priority; developers break them into tasks.\n" +
            "Small releases: the minimal useful set of functionality is released first and frequent releases add functionality.\n" +
            "Simple design: enough design to meet current requirements and no more. Test-first development: automated unit tests are written before the functionality.\n" +
            "Refactoring: continuous code improvement to keep code simple. Pair programming: developers work in pairs and check each other's work.\n" +
            "Collective ownership: anyone can change anything. Continuous integration: finished work is integrated at once and all unit tests must pass.\n" +
            "Sustainable pace: large overtime is not acceptable. On-site customer: a customer representative is available full time and defines acceptance tests.",
          tags: ["XP", "Practices"],
          ref: "Lecture 03 — 3.2 Agile development techniques (Figure 3.4)",
        },
        {
          type: "essay",
          q: "5. Explain user stories: how they are used in planning, and their advantages and problems.",
          translation:
            "اشرح قصص المستخدم (user stories): كيف تُستخدم في التخطيط ومميزاتها ومشاكلها.",
          answer:
            "A user story is a scenario of use that might be experienced by a system user. The customer works with the team to write a story card that briefly describes it; the example in the chapter is the 'Prescribing medication' story for the Mentcare system.\n" +
            "The team breaks stories into tasks, estimates effort, and the customer prioritizes the stories for the next release, aiming for functionality that can be implemented in about two weeks.\n" +
            "Advantage: people find stories easier to relate to than conventional requirements documents or use cases, and they help involve users in suggesting requirements.\n" +
            "Problem: completeness. It is hard to judge whether enough stories cover all essential requirements or whether a single story gives a true picture, because experienced users leave things out.",
          tags: ["User stories", "Story cards"],
          ref: "Lecture 03 — 3.2.1 User stories",
        },
        {
          type: "essay",
          q: "6. Explain refactoring: why XP uses it and what its limitations are.",
          translation: "اشرح الـ refactoring: لماذا تستخدمه XP وما حدوده.",
          answer:
            "Traditional software engineering says to design for change. XP discards this because anticipated changes often never materialize, so adding generality is wasted effort.\n" +
            "Instead the code is refactored constantly: the team looks for improvements and implements them immediately, even without an immediate need.\n" +
            "Reason: local changes during incremental development degrade the software structure (duplicated code, inappropriate reuse of parts). Refactoring improves structure and readability. Examples: reorganizing a class hierarchy to remove duplication, renaming attributes and methods, replacing similar code with library calls.\n" +
            "Limitations: development pressure may delay refactoring, and some changes cannot be handled by code-level refactoring and require architecture changes.",
          tags: ["Refactoring"],
          ref: "Lecture 03 — 3.2.2 Refactoring",
        },
        {
          type: "essay",
          q: "7. Explain test-first development and the problems of ensuring complete test coverage.",
          translation:
            "اشرح الـ test-first development ومشاكل ضمان تغطية اختبارات كاملة.",
          answer:
            "Test-first development: instead of writing code and then tests, tests are written before the code, so problems are discovered during development. Writing tests implicitly defines an interface and specification of behavior, reducing misunderstandings.\n" +
            "Key features in XP: test-first development, incremental test development from scenarios, user involvement in test development and validation, and automated testing frameworks such as JUnit. Each task generates one or more unit tests, and the customer helps develop acceptance tests.\n" +
            "It avoids test-lag, where implementation gets ahead of testing.\n" +
            "Coverage problems: programmers prefer programming and may write incomplete tests; some tests (for example display logic and screen workflow in a complex UI) are hard to write incrementally; a large set of tests may give a false impression of completeness and crucial parts may stay untested.",
          tags: ["Test-first", "Testing"],
          ref: "Lecture 03 — 3.2.3 Test-first development",
        },
        {
          type: "essay",
          q: "8. Discuss the advantages of pair programming and the results of studies on its productivity.",
          translation:
            "ناقش مميزات pair programming ونتائج الدراسات عن إنتاجيته.",
          answer:
            "Pair programming: two programmers sit at the same computer, and pairs are created dynamically so all team members work with each other.\n" +
            "Advantages: (1) it supports collective ownership and responsibility (egoless programming); (2) it acts as an informal review process since each line is seen by at least two people, cheaper and easier than formal inspections though it finds fewer errors; (3) it encourages refactoring because others benefit immediately.\n" +
            "Studies: with student volunteers (Williams et al.) productivity was comparable to two people working independently, because pairs discuss before development and have fewer false starts and less rework. Studies with experienced programmers (Arisholm et al.) found a significant loss of productivity, with quality benefits that did not fully compensate.\n" +
            "Knowledge sharing reduces project risk when team members leave, which may by itself make it worthwhile.",
          tags: ["Pair programming"],
          ref: "Lecture 03 — 3.2.4 Pair programming",
        },
        {
          type: "essay",
          q: "9. Describe the Scrum sprint cycle and the main Scrum roles and terms, and mention the benefits users report.",
          translation:
            "صِف دورة الـ sprint في Scrum وأهم الأدوار والمصطلحات والفوائد التي يذكرها المستخدمون.",
          answer:
            "Scrum is a framework for organizing agile projects that follows the agile manifesto but does not mandate specific practices such as pair programming or test-first development. It gives some external visibility of what is going on.\n" +
            "Cycle: the input is the product backlog. At the start of each sprint (2 to 4 weeks, fixed length) the Product Owner prioritizes items; the team selects what it can complete using velocity, creating the sprint backlog, and self-organizes. During the sprint the team holds daily Scrums, optionally using a Scrum board. At the end a review meeting improves the process and gives input to the next backlog review. Each sprint produces a potentially shippable product increment. Unfinished items return to the backlog.\n" +
            "Roles: development team (self-organizing, at most seven people), Product Owner (prioritizes backlog), ScrumMaster (ensures the process is followed and interfaces with the company; not formally a project manager).\n" +
            "Benefits: manageable chunks, unstable requirements do not hold up progress, team visibility improves communication and morale, customers see on-time increments and give feedback, and trust between customers and developers is established.",
          tags: ["Scrum", "Sprint"],
          ref: "Lecture 03 — 3.3 Agile project management",
        },
        {
          type: "essay",
          q: "10. Explain the issues of scaling agile methods and how Scrum is adapted for distributed development.",
          translation:
            "اشرح مشاكل توسيع طرق Agile وكيف يُكيَّف Scrum للتطوير الموزع.",
          answer:
            "Agile methods were designed for small co-located teams communicating informally. Scaling has two facets: scaling up to large systems too big for one small team, and scaling out from specialized teams to widespread use in a large company with many years of experience.\n" +
            "Scrum was designed for co-located teams meeting daily, but much development now involves distributed teams in different places, which gives access to lower cost staff and specialist skills and allows 24-hour development.\n" +
            "Distributed Scrum (Figure 3.10) requires: videoconferencing between product owner and team; the ScrumMaster located with the development team; the Product Owner visiting the developers to build trust; real-time communications such as instant messaging and video calls; continuous integration so everyone knows the product state; and a common development environment for all teams.",
          tags: ["Scaling agile", "Distributed Scrum"],
          ref: "Lecture 03 — 3.3 and 3.4 Scaling agile methods",
        },
      ],
    },
    {
      t: "المحاضرة الرابعة — الفصل الرابع (جزء 1): Requirements Engineering",
      d: "هندسة المتطلبات: متطلبات المستخدم والنظام، الوظيفية وغير الوظيفية، الاستنباط (Interviews, Ethnography, Stories, Scenarios) وتحليل المتطلبات.",
      id: "software-engineering-lec-04",

      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 4 - Requirements engineering_Part 1.pdf",
      pdf2: "/datenew/subjects/software-engineering/questions/Questions on each lecture/Lecture-04-Questions.pdf",

      // الفصل الرابع: هندسة المتطلبات (Requirements Engineering) - كتاب Software Engineering (Ian Sommerville)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "مجموعة من الفيديوهات الشارحة باللغة العربية لمفاهيم هندسة المتطلبات، والمتطلبات الوظيفية وغير الوظيفية، وطرق الاستخراج.",
          links: [
            {
              t: "شرح المتطلبات الوظيفية وغير الوظيفية - جامعة الملك خالد",
              d: "شرح أكاديمي ميسر يوضح الفرق بين المتطلبات الوظيفية ومتطلبات النظام والقيود التشغيلية وفق المناهج الجامعية.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=mq3MjT0_fKI",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "تحليل النظم: Functional and Non-Functional Requirements",
              d: "فيديو يتناول كيفية تحديد متطلبات النظام والأداء القياسي وتوثيق الخدمة المطلوبة للمستخدمين.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=dfh6DI_y8Tk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "هندسة المتطلبات واستخراج قصص المستخدم",
              d: "محاضرة تركز على كيفية استخراج المتطلبات وتحويلها إلى قصص مستخدم ومواصفات تقنية قابلة للتنفيذ.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=lf3V_3WFGzk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "مقدمة في هندسة المتطلبات البرمجية",
              d: "استعراض شامل لأهمية تحديد المتطلبات وأصحاب المصلحة (Stakeholders) ودورهم في نجاح المشروع البرمجي.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=XDey5x06ECI",
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
            "محاضرات ودروس تعليمية عالمية باللغة الإنجليزية تشرح هندسة المتطلبات وتقنيات الاستخراج والنمذجة.",
          links: [
            {
              t: "Functional vs Non-Functional Requirements Explained",
              d: "شرح مبسط وعملي يعتمد على الأمثلة التطبيقية للتمييز بين سلوك النظام وخصائص الأداء والأمان.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=IGnECjeVVJg",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Requirements Elicitation - University of Virginia (UVA)",
              d: "درس أكاديمي يوضح المرحلة الأولى من هندسة المتطلبات وكيفية التواصل مع العملاء لاستكشاف احتياجاتهم.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=pSQRetBoaRE",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Mastering Requirements Elicitation Techniques",
              d: "فيديو متقدم يشرح آليات إجراء المقابلات والملاحظة الإثنوغرافية لاستكشاف المتطلبات الضمنية للأنظمة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=HXdQ3NsaJbg",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Requirement Elicitation Methods - Tutorials Point",
              d: "استعراض لتقنيات العصف الذهني والاستبيانات وتحليل المستندات لاستخراج المتطلبات البرمجية.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=1UEzc2E71Hk",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات موثوقة ومراجع علمية تفصيلية تغطي مراحل هندسة المتطلبات وكتابة وثيقة SRS من منصة GeeksforGeeks.",
          links: [
            {
              t: "GeeksforGeeks: Requirements Engineering Process",
              d: "مقال يتناول دراسة الجدوى، واستخراج المتطلبات، والتوثيق، والتحقق، وإدارة التغيير في البرمجيات.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-requirements-engineering-process/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeeksforGeeks: Requirements Elicitation Techniques",
              d: "دليل مرجعي يتناول أساليب جمع المتطلبات مثل المقابلات، ورش العمل، والاستبيانات، والنماذج الأولية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-engineering-requirements-elicitation/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeeksforGeeks: How to Write a Good SRS Document",
              d: "شرح لكيفية كتابة مواصفات متطلبات البرمجيات (SRS) المعيارية وخصائصها كالاطراد والصحة والقابلية للاختبار.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/how-to-write-a-good-srs-for-your-project/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeeksforGeeks: Non-Functional Requirements in System Design",
              d: "تحليل مفصل لمتطلبات المنتجات ومتطلبات التنظيمية والخارجية مثل الأداء والاعتمادية والخصوصية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/what-are-non-functional-requirements-in-system-design-examples-definition/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات برمجية ومصادر تفاعلية رسمية لرسم المخططات وتوثيق متطلبات الأساليب الرشيقة وإدارة المشاريع.",
          links: [
            {
              t: "draw.io - Diagramming Software",
              d: "أداة مجانية ورسمية لرسم مخططات UML ومخططات تدفق البيانات (DFD) ومخططات حالات الاستخدام (Use Cases).",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.drawio.com/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Atlassian Jira - Agile Project & Requirements Management",
              d: "منصة لإدارة متطلبات المشاريع وتتبع قصص المستخدمين (User Stories) والمهام البرمجية في بيئات Agile.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.atlassian.com/software/jira/free",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Visual Paradigm - Systems & Requirements Modeling Tool",
              d: "بيئة عمل متكاملة لتوثيق وتصميم متطلبات البرمجيات وإدارة نماذج UML وSysML والمواصفات المعمارية.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.visual-paradigm.com/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. What is requirements engineering (RE)?",
          options: [
            "The process of writing and testing the code that implements the system services",
            "The process of finding out, analyzing, documenting and checking the services and constraints of a system",
            "The process of estimating the cost, schedule and staffing of a software project",
            "The process of deploying the system and training its users",
          ],
          correct: 1,
          translation: "ما هي هندسة المتطلبات (RE)؟",
          explanation:
            "الصح هو التعريف الأساسي: اكتشاف وتحليل وتوثيق والتحقق من الخدمات والقيود. الاختيار الأقرب (كتابة الكود) غلط لأنه تنفيذ مش متطلبات.",
          tags: ["RE definition"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "2. Which statement best describes USER requirements?",
          options: [
            "Statements, in natural language plus diagrams, of the services the system is expected to provide to its users and the constraints under which it must operate",
            "Detailed descriptions of the system's functions, services and operational constraints that define exactly what is to be implemented",
            "Formal mathematical models of the system behavior written for the developers",
            "Descriptions of the system architecture and software design decisions",
          ],
          correct: 0,
          translation:
            "أي عبارة تصف متطلبات المستخدم (User requirements) بشكل أفضل؟",
          explanation:
            "متطلبات المستخدم بلغة طبيعية ورسومات وعلى مستوى عالٍ. الاختيار الأول وصف لمتطلبات النظام (System requirements) وهو الأقرب للغلط.",
          tags: ["User requirements", "User vs System"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "3. Which statement best describes SYSTEM requirements?",
          options: [
            "High-level abstract statements of services written in natural language for the client managers",
            "More detailed descriptions of the system's functions, services and operational constraints that should define exactly what is to be implemented",
            "Statements of the needs of the end-users written without any technical detail",
            "A short early study of whether the system is technically and financially feasible",
          ],
          correct: 1,
          translation: "أي عبارة تصف متطلبات النظام (System requirements)؟",
          explanation:
            "متطلبات النظام أكثر تفصيلًا وتحدد بالظبط إيه اللي هيتنفذ. الاختيار الأول يخص User requirements، والأخير يخص Feasibility study.",
          tags: ["System requirements", "User vs System"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "4. The system requirements document is sometimes called a:",
          options: [
            "Feasibility study",
            "User requirements definition",
            "Functional specification",
            "Software design document",
          ],
          correct: 2,
          translation: "وثيقة متطلبات النظام بتتسمى أحيانًا:",
          explanation:
            "الكتاب بيقول إن System requirements document ممكن تتسمى Functional specification. User requirements definition هي المستوى الأعلى وليست نفس الوثيقة.",
          tags: ["System requirements"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "5. Why should requirements be written at different levels of detail?",
          options: [
            "Because natural language cannot express functional requirements",
            "Because different types of readers use them in different ways",
            "Because every contract legally requires two separate documents",
            "Because non-functional requirements cannot appear in the same document as functional ones",
          ],
          correct: 1,
          translation: "ليه لازم نكتب المتطلبات بمستويات تفصيل مختلفة؟",
          explanation:
            "السبب إن القراء مختلفين (مديرين، مستخدمين، مهندسين، مطورين) وكل نوع يستخدمها بطريقة. باقي الاختيارات ادعاءات مش مذكورة في المحاضرة.",
          tags: ["User vs System", "Readers"],
          ref: "Chapter 4 — Introduction (Figure 4.2)",
          likely: "high",
        },
        {
          q: "6. Which of the following is a definition of system stakeholders?",
          options: [
            "Only the end-users who interact directly with the system",
            "Anyone who is affected by the system in some way and so has a legitimate interest in it",
            "Only the customers who pay for the development of the system",
            "Only the developers and managers of the contractor",
          ],
          correct: 1,
          translation: "أي مما يلي تعريف الـ Stakeholders؟",
          explanation:
            "الـ Stakeholders هم أي حد يتأثر بالنظام وله اهتمام مشروع به (مستخدمين، مديرين، جهات تنظيمية...). الاختيارات الباقية بتضيّق التعريف.",
          tags: ["Stakeholders"],
          ref: "Chapter 4 — Introduction",
          likely: "high",
        },
        {
          q: "7. Which statement describes FUNCTIONAL requirements?",
          options: [
            "Constraints on timing, the development process and standards imposed on the system",
            "Requirements that apply only to the system as a whole, such as reliability",
            "Statements of services the system should provide, how it should react to particular inputs, and how it should behave in particular situations",
            "Requirements derived only from laws and regulations",
          ],
          correct: 2,
          translation:
            "أي عبارة تصف المتطلبات الوظيفية (Functional requirements)؟",
          explanation:
            "الوظيفية = خدمات النظام وردود أفعاله وسلوكه. الاختيار الأول والثاني تعريف الـ Non-functional.",
          tags: ["Functional requirements"],
          ref: "Chapter 4 — Section 4.1",
          likely: "high",
        },
        {
          q: "8. Non-functional requirements often apply to:",
          options: [
            "Only the individual services offered to the users",
            "Only the user interface of the system",
            "Only the database and data representation layer",
            "The system as a whole rather than to individual system features or services",
          ],
          correct: 3,
          translation: "المتطلبات غير الوظيفية غالبًا بتنطبق على:",
          explanation:
            "الـ NFR بتخص النظام ككل (زي الأداء والاعتمادية). الاختيار الأول غلط لأنه وصف للمتطلبات الوظيفية.",
          tags: ["Non-functional requirements"],
          ref: "Chapter 4 — Section 4.1",
          likely: "high",
        },
        {
          q: "9. Why are non-functional requirements often more critical than individual functional requirements?",
          options: [
            "Failing to meet a non-functional requirement can make the whole system unusable, while users can usually work around a function that does not meet their needs",
            "Because they are always cheaper to verify than functional requirements",
            "Because they can always be implemented in a single component",
            "Because customers find it easier to express them as measurable numbers",
          ],
          correct: 0,
          translation: "ليه الـ NFR غالبًا أهم من المتطلبات الوظيفية الفردية؟",
          explanation:
            "لأن فشل NFR (زي الاعتمادية في طيارة) ممكن يخلي النظام كله غير صالح، بينما وظيفة واحدة ممكن نلف حواليها. الباقي عكس اللي في المحاضرة (التحقق منها غالبًا مكلف وصعب).",
          tags: ["Non-functional requirements", "Importance"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "high",
        },
        {
          q: "10. According to Figure 4.3, non-functional requirements are classified into:",
          options: [
            "Product, process and operational requirements",
            "User, system and domain requirements",
            "Product, organizational and external requirements",
            "Functional, organizational and legislative requirements",
          ],
          correct: 2,
          translation: "حسب الشكل 4.3، المتطلبات غير الوظيفية بتتقسم إلى:",
          explanation:
            "التصنيف الصحيح: Product و Organizational و External. الاختيار الثاني مخلوط بمفاهيم مش من الشكل.",
          tags: ["Types of NFR", "Figure 4.3"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.3)",
          likely: "high",
        },
        {
          q: "11. The Mentcare requirement that the system must be available Mon–Fri, 08:30–17:30 with downtime not exceeding 5 seconds a day is an example of a:",
          options: [
            "Organizational requirement",
            "External requirement",
            "Functional requirement",
            "Product requirement",
          ],
          correct: 3,
          translation:
            "متطلب إتاحة Mentcare (الإتاحة من 8:30 لـ 17:30 وDowntime لا يزيد عن 5 ثواني) هو مثال على:",
          explanation:
            "الإتاحة بتحدد سلوك النظام وقت التشغيل فهي Product requirement. ما بتقولش وظيفة معينة فمش Functional.",
          tags: ["Product requirements", "Figure 4.4"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.4)",
          likely: "high",
        },
        {
          q: "12. Which type of non-functional requirement is derived from policies and procedures in the customer's and developer's organizations?",
          options: [
            "Organizational requirements",
            "Product requirements",
            "External requirements",
            "Domain requirements",
          ],
          correct: 0,
          translation:
            "أي نوع من الـ NFR بيجي من سياسات وإجراءات منظمة العميل والمطوّر؟",
          explanation:
            "الـ Organizational requirements (زي معايير التطوير ولغة البرمجة وطريقة الدخول بالكارت). الـ External بتيجي من عوامل خارج المنظمة.",
          tags: ["Organizational requirements"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "high",
        },
        {
          q: "13. Regulatory, legislative and ethical requirements belong to which category of non-functional requirements?",
          options: [
            "Product requirements",
            "Organizational requirements",
            "Dependability requirements only",
            "External requirements",
          ],
          correct: 3,
          translation:
            "المتطلبات التنظيمية (Regulatory) والتشريعية والأخلاقية تتبع أي فئة؟",
          explanation:
            "هذه كلها مصدرها خارج النظام وعملية تطويره، فهي External requirements.",
          tags: ["External requirements"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.3)",
          likely: "high",
        },
        {
          q: "14. Whenever possible, non-functional requirements should be written:",
          options: [
            "Quantitatively, so that they can be objectively tested",
            "As general goals such as ease of use",
            "Only in natural language without any numbers",
            "As part of the user interface design",
          ],
          correct: 0,
          translation: "كلما أمكن، المتطلبات غير الوظيفية يجب أن تُكتب:",
          explanation:
            "تُكتب بشكل كمّي قابل للقياس والاختبار. الأهداف العامة (Goals) تترك مجال للتفسير والخلاف.",
          tags: ["Testable NFR", "Goals vs requirements"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "high",
        },
        {
          q: "15. Which metric is used to specify the RELIABILITY of a system?",
          options: [
            "Training time",
            "Mean time to failure",
            "Processed transactions per second",
            "Percentage of target dependent statements",
          ],
          correct: 1,
          translation: "أي مقياس يُستخدم لتحديد الاعتمادية (Reliability)؟",
          explanation:
            "Mean time to failure من مقاييس الاعتمادية. Training time للـ Ease of use، والـ transactions/second للـ Speed، والنسبة الأخيرة للـ Portability.",
          tags: ["Metrics", "Figure 4.5"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.5)",
          likely: "high",
        },
        {
          q: "16. Which pair of metrics is used to specify EASE OF USE?",
          options: [
            "Screen refresh time and user/event response time",
            "Megabytes and number of ROM chips",
            "Time to restart after failure and probability of data corruption",
            "Training time and number of help frames",
          ],
          correct: 3,
          translation:
            "أي زوج من المقاييس يُستخدم لتحديد سهولة الاستخدام (Ease of use)؟",
          explanation:
            "Ease of use = Training time + Number of help frames. الاختيار الأول مقاييس Speed، والثاني Size، والثالث Robustness.",
          tags: ["Metrics", "Figure 4.5"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.5)",
          likely: "high",
        },
        {
          q: "17. What does CONSISTENCY mean for a functional requirements specification?",
          options: [
            "All services and information required by the user should be defined",
            "Requirements should not be contradictory",
            "Every requirement should be objectively testable",
            "Every requirement should be written in natural language",
          ],
          correct: 1,
          translation:
            "ماذا تعني الـ Consistency في مواصفات المتطلبات الوظيفية؟",
          explanation:
            "Consistency = عدم تناقض المتطلبات. الاختيار الأول هو تعريف Completeness (الأقرب للتشويش).",
          tags: ["Completeness", "Consistency"],
          ref: "Chapter 4 — Section 4.1.1",
          likely: "high",
        },
        {
          q: "18. Which of the following is NOT one of the three key questions that a feasibility study should answer?",
          options: [
            "Does the system contribute to the overall objectives of the organization?",
            "Can the system be implemented within schedule and budget using current technology?",
            "Have all stakeholders agreed on every detailed requirement?",
            "Can the system be integrated with other systems that are used?",
          ],
          correct: 2,
          translation:
            "أي مما يلي ليس من الأسئلة الثلاثة الأساسية في دراسة الجدوى (Feasibility study)؟",
          explanation:
            "الأسئلة الثلاثة: مساهمة النظام في أهداف المنظمة، إمكانية التنفيذ في الميزانية والجدول بتقنية حالية، والتكامل مع الأنظمة الأخرى. الاتفاق على كل المتطلبات مش منها.",
          tags: ["Feasibility study"],
          ref: "Chapter 4 — Introduction (Feasibility studies box)",
          likely: "high",
        },
        {
          q: "19. Which are the three key activities of the requirements engineering process?",
          options: [
            "Elicitation and analysis, specification, and validation",
            "Elicitation, design, and implementation",
            "Specification, testing, and maintenance",
            "Elicitation, validation, and deployment",
          ],
          correct: 0,
          translation: "ما الأنشطة الثلاثة الأساسية في عملية هندسة المتطلبات؟",
          explanation:
            "الأنشطة: Elicitation & analysis، Specification، Validation. باقي الاختيارات فيها مراحل من دورة تطوير البرمجيات مش من RE.",
          tags: ["RE process"],
          ref: "Chapter 4 — Section 4.2",
          likely: "high",
        },
        {
          q: "20. How is the requirements engineering process presented in Figure 4.6?",
          options: [
            "As a strictly sequential process where each activity finishes before the next starts",
            "As a one-pass process that ends with system implementation",
            "As a process where validation is done only once at the very end",
            "As an iterative spiral in which elicitation, specification and validation are interleaved",
          ],
          correct: 3,
          translation: "كيف تُعرض عملية هندسة المتطلبات في الشكل 4.6؟",
          explanation:
            "الشكل Spiral: الأنشطة متداخلة وتتكرر. الاختيارات الأخرى بتصور العملية خطية، والمحاضرة بتؤكد إنها iterative.",
          tags: ["RE process", "Spiral model", "Figure 4.6"],
          ref: "Chapter 4 — Section 4.2 (Figure 4.6)",
          likely: "high",
        },
        {
          q: "21. Which of the following is NOT a reason why eliciting requirements from stakeholders is difficult?",
          options: [
            "Stakeholders often do not know what they want except in general terms",
            "Political factors may influence the requirements of the system",
            "The economic and business environment changes during the analysis",
            "Stakeholders always know exactly what they want and express it in precise technical terms",
          ],
          correct: 3,
          translation:
            "أي مما يلي ليس من أسباب صعوبة استنباط المتطلبات (Elicitation)؟",
          explanation:
            "الصعوبة سببها إن المعنيين غالبًا مش عارفين بالظبط عايزين إيه. الاختيار الصحيح عكس ده تمامًا، فهو ليس سببًا.",
          tags: ["Elicitation", "Difficulties"],
          ref: "Chapter 4 — Section 4.3",
          likely: "high",
        },
        {
          q: "22. What is the correct order of the activities in the requirements elicitation and analysis process (Figure 4.7)?",
          options: [
            "Classification and organization → discovery and understanding → documentation → prioritization and negotiation",
            "Discovery and understanding → prioritization and negotiation → classification and organization → documentation",
            "Discovery and understanding → classification and organization → prioritization and negotiation → documentation",
            "Documentation → discovery and understanding → classification and organization → prioritization and negotiation",
          ],
          correct: 2,
          translation:
            "ما الترتيب الصحيح لأنشطة الـ Elicitation and Analysis (الشكل 4.7)؟",
          explanation:
            "الترتيب: Discovery → Classification → Prioritization & negotiation → Documentation. الاختيار الثاني بيقدّم الـ prioritization قبل التصنيف وهو الأقرب للغلط.",
          tags: ["Elicitation and analysis", "Figure 4.7"],
          ref: "Chapter 4 — Section 4.3 (Figure 4.7)",
          likely: "high",
        },
        {
          q: "23. Which activity of the elicitation and analysis process is concerned with finding and resolving conflicts between stakeholders' requirements?",
          options: [
            "Requirements classification and organization",
            "Requirements prioritization and negotiation",
            "Requirements discovery and understanding",
            "Requirements documentation",
          ],
          correct: 1,
          translation:
            "أي نشاط مسؤول عن اكتشاف وحل التعارضات بين متطلبات أصحاب المصلحة؟",
          explanation:
            "الـ Prioritization and negotiation هو اللي بيحل التعارض عن طريق التفاوض. الـ Classification بيجمّع المتطلبات المرتبطة فقط.",
          tags: ["Prioritization and negotiation"],
          ref: "Chapter 4 — Section 4.3",
          likely: "high",
        },
        {
          q: "24. What is a VIEWPOINT in requirements analysis?",
          options: [
            "A working prototype shown to the stakeholders for evaluation",
            "A way of collecting and organizing a set of requirements from a group of stakeholders who have something in common",
            "A diagram of the system architecture showing the subsystems",
            "A meeting where stakeholders negotiate requirement conflicts",
          ],
          correct: 1,
          translation: "ما هو الـ Viewpoint في تحليل المتطلبات؟",
          explanation:
            "الـ Viewpoint = تجميع متطلبات مجموعة stakeholders بينهم قاسم مشترك. الاجتماع التفاوضي نشاط مختلف.",
          tags: ["Viewpoints"],
          ref: "Chapter 4 — Section 4.3 (Viewpoints box)",
          likely: "high",
        },
        {
          q: "25. What are the two fundamental approaches to requirements elicitation?",
          options: [
            "Prototyping and testing",
            "Reviews and feasibility studies",
            "Interviewing and observation (ethnography)",
            "Scenarios and user stories",
          ],
          correct: 2,
          translation: "ما الأسلوبان الأساسيان لاستنباط المتطلبات؟",
          explanation:
            "الأساسيان: المقابلات (Interviewing) والملاحظة (Ethnography). الـ Stories/Scenarios أدوات لالتقاط المعلومات وليست الأسلوبين الأساسيين.",
          tags: ["Elicitation techniques"],
          ref: "Chapter 4 — Section 4.3.1",
          likely: "high",
        },
        {
          q: "26. What is a CLOSED interview?",
          options: [
            "An interview with no predefined agenda where a range of issues is explored",
            "An interview where the analyst watches people doing their job",
            "An interview held only with external stakeholders",
            "An interview where the stakeholder answers a predefined set of questions",
          ],
          correct: 3,
          translation: "ما هي المقابلة المغلقة (Closed interview)؟",
          explanation:
            "المغلقة = أسئلة محددة مسبقًا. الاختيار الأول وصف للمقابلة المفتوحة (Open).",
          tags: ["Interviewing", "Closed vs Open"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "high",
        },
        {
          q: "27. Interviews are NOT an effective technique for eliciting knowledge about:",
          options: [
            "Organizational requirements and constraints",
            "The overall understanding of what stakeholders do",
            "How stakeholders might interact with the new system",
            "The difficulties stakeholders face with current systems",
          ],
          correct: 0,
          translation: "المقابلات ليست فعّالة في استنباط المعرفة عن:",
          explanation:
            "لأن في علاقات قوة خفية والناس مترددة تتكلم عن السياسة والتنظيم الحقيقي. الباقي هي نقاط قوة المقابلات.",
          tags: ["Interviewing", "Limitations"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "high",
        },
        {
          q: "28. Which of the following does the chapter recommend to get an interview discussion going?",
          options: [
            "A springboard question, a requirements proposal, or working together on a prototype",
            'Asking the stakeholder to simply "tell me what you want"',
            "Handing the stakeholder the complete formal specification",
            "Running a completely open-ended discussion with no questions",
          ],
          correct: 0,
          translation: "ما الذي توصي به المحاضرة لبدء النقاش في المقابلة؟",
          explanation:
            'نستخدم springboard question أو requirements proposal أو prototype. قول "قولّي عايز إيه" مش بيدّي معلومات مفيدة.',
          tags: ["Interviewing", "Effective interviewer"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "high",
        },
        {
          q: "29. What is ethnography in requirements elicitation?",
          options: [
            "A structured interview with a predefined set of questions",
            "An observational technique where the analyst immerses himself or herself in the working environment where the system will be used",
            "A technique for grouping requirements into coherent clusters",
            "A technique for writing high-level narrative descriptions of system use",
          ],
          correct: 1,
          translation: "ما هي الـ Ethnography في استنباط المتطلبات؟",
          explanation:
            "الـ Ethnography ملاحظة المحلل لبيئة العمل الفعلية. الاختيار الأول مقابلة مغلقة، والأخير عن Stories.",
          tags: ["Ethnography"],
          ref: "Chapter 4 — Section 4.3.1.2",
          likely: "high",
        },
        {
          q: "30. Ethnography is particularly effective for discovering which two types of requirements?",
          options: [
            "Requirements derived from formal business process definitions and from legislation",
            "Organizational requirements and domain requirements",
            "Requirements for innovative new products and for regulatory approval",
            "Requirements derived from how people actually work, and from cooperation and awareness of other people's activities",
          ],
          correct: 3,
          translation:
            "الـ Ethnography فعّالة بشكل خاص في اكتشاف أي نوعين من المتطلبات؟",
          explanation:
            "تكتشف طريقة العمل الفعلية (مش الرسمية) والتعاون والوعي بأنشطة الآخرين. الاختيارات الأخرى هي أشياء الـ Ethnography ضعيفة فيها.",
          tags: ["Ethnography"],
          ref: "Chapter 4 — Section 4.3.1.2",
          likely: "high",
        },
        {
          q: "31. What is the main difference between STORIES and SCENARIOS?",
          options: [
            "Stories are structured with inputs and outputs, whereas scenarios are narrative high-level text",
            "Stories describe only errors, whereas scenarios describe only the normal flow",
            "Stories are narrative high-level descriptions of system use, whereas scenarios are structured descriptions with specific information such as inputs and outputs",
            "Stories are written by developers, whereas scenarios are written by users",
          ],
          correct: 2,
          translation: "ما الفرق الرئيسي بين الـ Stories والـ Scenarios؟",
          explanation:
            "Stories سردية وعالية المستوى (الصورة الكبيرة)، وScenarios مهيكلة وأكثر تفصيلًا. الاختيار الأول معكوس.",
          tags: ["Stories", "Scenarios"],
          ref: "Chapter 4 — Section 4.3.2",
          likely: "high",
        },
        {
          q: "32. Which of the following is NOT a part of a general scenario?",
          options: [
            "An estimate of the cost of implementing the scenario",
            "A description of the normal flow of events",
            "A description of what can go wrong and how problems are handled",
            "A description of the system state when the scenario ends",
          ],
          correct: 0,
          translation: "أي مما يلي ليس جزءًا من الـ Scenario العام؟",
          explanation:
            "عناصر الـ Scenario: الافتراض الأولي، التدفق الطبيعي، ما قد يسوء، الأنشطة المتزامنة، حالة النظام عند النهاية. تقدير التكلفة ليس منها.",
          tags: ["Scenarios"],
          ref: "Chapter 4 — Section 4.3.2",
          likely: "high",
        },
        {
          q: "33. How should USER requirements be written?",
          options: [
            "In natural language with simple tables, forms and intuitive diagrams, without software jargon or formal notations",
            "Using formal mathematical notations to avoid ambiguity",
            "Using software jargon and structured notations that developers understand",
            "Using system architecture and design details",
          ],
          correct: 0,
          translation: "كيف تُكتب متطلبات المستخدم؟",
          explanation:
            "تُكتب بلغة طبيعية وجداول ورسومات بسيطة لأن قراءها غير تقنيين. الصيغ الرسمية والجارجون خاصة بمتطلبات النظام.",
          tags: ["Requirements specification", "User requirements"],
          ref: "Chapter 4 — Section 4.4",
          likely: "high",
        },
        {
          q: "34. If an organization decides that an off-the-shelf software product can meet its needs, the focus should be on developing:",
          options: [
            "A detailed functional specification",
            "Domain requirements",
            "Product requirements",
            "Information requirements",
          ],
          correct: 3,
          translation:
            "لو قررت المنظمة أن منتجًا جاهزًا يلبي احتياجاتها، يجب التركيز على:",
          explanation:
            "في هذه الحالة التفصيل الوظيفي بلا فائدة، والأفضل تحديد Information requirements (المعلومات اللازمة وطريقة تقديمها).",
          tags: ["Information requirements"],
          ref: "Chapter 4 — Section 4.1.1",
          likely: "medium",
        },
        {
          q: "35. Domain requirements are derived from:",
          options: [
            "The policies of the developing organization only",
            "The interviews conducted with end-users only",
            "The application domain of the system rather than from the specific needs of system users",
            "The budget constraints of the customer",
          ],
          correct: 2,
          translation: "متطلبات الـ Domain تُشتق من:",
          explanation:
            "مصدرها مجال تطبيق النظام نفسه وليس احتياجات المستخدمين المحددة. المشكلة أن المهندسين قد لا يفهمون الـ domain.",
          tags: ["Domain requirements"],
          ref: "Chapter 4 — Section 4.1.1 (Domain requirements box)",
          likely: "medium",
        },
        {
          q: "36. How does combining ethnography with prototyping help (Figure 4.8)?",
          options: [
            "It removes the need for any stakeholder meetings",
            "It guarantees that all organizational requirements are discovered",
            "Ethnography informs the prototype so fewer refinement cycles are needed, and prototyping focuses the ethnography on specific questions",
            "It replaces the need for requirements validation",
          ],
          correct: 2,
          translation:
            "كيف يفيد الجمع بين الـ Ethnography والـ Prototyping (الشكل 4.8)؟",
          explanation:
            "الـ Ethnography تقلل دورات تحسين الـ prototype، والـ prototype يوجّه الـ ethnography لأسئلة محددة. باقي الاختيارات مبالغات.",
          tags: ["Ethnography", "Prototyping", "Figure 4.8"],
          ref: "Chapter 4 — Section 4.3.1.2 (Figure 4.8)",
          likely: "medium",
        },
        {
          q: "37. What does the Nokia versus Apple example show about ethnography?",
          options: [
            "Ethnography helps in understanding existing systems but does not always help with innovation",
            "Ethnography is the best technique for discovering innovative product ideas",
            "Ethnography should never be used for new product development",
            "Ethnography is effective for discovering broad organizational requirements",
          ],
          correct: 0,
          translation: "ماذا يوضح مثال Nokia مقابل Apple عن الـ Ethnography؟",
          explanation:
            "تساعد في فهم النظم الحالية لكن لا تضمن الابتكار (Apple تجاهلت الاستخدام الحالي وابتكرت). الاختيار الأول عكس المثال.",
          tags: ["Ethnography", "Innovation"],
          ref: "Chapter 4 — Section 4.3.1.2",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define requirements engineering, and distinguish between user requirements and system requirements. Use the Mentcare monthly report example.",
          translation:
            "عرّف هندسة المتطلبات، وفرّق بين متطلبات المستخدم ومتطلبات النظام مستخدمًا مثال Mentcare.",
          answer:
            "Requirements engineering (RE) is the process of finding out, analyzing, documenting and checking the services that a system should provide and the constraints on its operation.\n" +
            "User requirements: statements, in natural language plus diagrams, of the services the system is expected to provide to users and the constraints under which it must operate. They are high-level and general.\n" +
            "System requirements: more detailed descriptions of the system's functions, services and operational constraints. They define exactly what is to be implemented (sometimes called a functional specification) and may be part of the contract.\n" +
            'Example: the user requirement "The Mentcare system shall generate monthly management reports showing the cost of drugs prescribed by each clinic" is expanded into several system requirements (1.1 to 1.5), e.g. generate the report on the last working day after 17:30, one report per clinic, separate reports per dose unit, and restricted access.\n' +
            "They are written differently because different readers use them differently (managers and end-users vs. architects and developers).",
          tags: ["RE definition", "User vs System"],
          ref: "Chapter 4 — Introduction (Figures 4.1, 4.2)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Compare functional and non-functional requirements. Give an example of each from the Mentcare system.",
          translation:
            "قارن بين المتطلبات الوظيفية وغير الوظيفية مع مثال لكل منهما من نظام Mentcare.",
          answer:
            'Functional requirements: statements of services the system should provide, how it should react to particular inputs, and how it should behave in particular situations (sometimes also what it should not do). Example: "A user shall be able to search the appointments lists for all clinics."\n' +
            "Non-functional requirements: constraints on the services or functions offered by the system, such as timing constraints, constraints on the development process, and constraints imposed by standards. They often apply to the system as a whole. Example: the system shall be available Mon-Fri 08:30-17:30 with downtime not exceeding 5 seconds a day.\n" +
            "Non-functional requirements are often more critical: failing to meet one can make the whole system unusable.\n" +
            "The distinction is not clear-cut: a security requirement (limit access to authorized users) can generate functional requirements such as user authentication facilities.",
          tags: ["Functional requirements", "Non-functional requirements"],
          ref: "Chapter 4 — Section 4.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Draw and label the classification of non-functional requirements (Figure 4.3), and give an example of each type.",
          translation:
            "ارسم واكتب أسماء تصنيف المتطلبات غير الوظيفية (الشكل 4.3) مع مثال لكل نوع.",
          answer:
            "Non-functional requirements are divided into three branches:\n" +
            "1) Product requirements (performance, space, usability, efficiency, dependability, security). They specify or constrain runtime behavior. Example: availability and allowed downtime.\n" +
            "2) Organizational requirements (operational, development, environmental). They come from policies and procedures of the customer's and developer's organizations. Example: users identify themselves using their health authority identity card.\n" +
            "3) External requirements (regulatory, ethical, legislative; safety/security and accounting sub-types). They come from factors external to the system and its development process. Example: implementing the patient privacy provisions of a national privacy standard.",
          tags: ["Types of NFR", "Figure 4.3"],
          ref: "Chapter 4 — Section 4.1.2 (Figures 4.3, 4.4)",
          likely: "high",
        },
        {
          type: "essay",
          q: '4. Explain why non-functional requirements should be written quantitatively. Rewrite the goal "The system should be easy to use by medical staff" as a testable requirement and list metrics for non-functional properties.',
          translation:
            'اشرح لماذا يجب كتابة المتطلبات غير الوظيفية بشكل كمّي. أعد كتابة الهدف "النظام سهل الاستخدام" كمتطلب قابل للاختبار واذكر مقاييس الخصائص غير الوظيفية.',
          answer:
            "Stakeholders often propose goals (ease of use, fast response, recovery from failure). Goals leave scope for interpretation and dispute after delivery, and cannot be objectively verified.\n" +
            "Quantitative requirements can be objectively tested during system testing (e.g. by instrumenting the software to count errors).\n" +
            'Testable version: "Medical staff shall be able to use all the system functions after two hours of training. After this training, the average number of errors made by experienced users shall not exceed two per hour of system use."\n' +
            "Metrics (Figure 4.5): Speed = transactions/second, response time, screen refresh time; Size = megabytes, number of ROM chips; Ease of use = training time, number of help frames; Reliability = mean time to failure, probability of unavailability, rate of failure occurrence, availability; Robustness = time to restart after failure, percentage of events causing failure, probability of data corruption on failure; Portability = percentage of target dependent statements, number of target systems.\n" +
            "Difficulties: customers struggle to translate goals into measurable requirements, some goals (e.g. maintainability) have no simple metrics, and verification can be costly.",
          tags: ["Testable NFR", "Metrics", "Figure 4.5"],
          ref: "Chapter 4 — Section 4.1.2 (Figure 4.5)",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Explain the stages of the requirements elicitation and analysis process (Figure 4.7).",
          translation: "اشرح مراحل عملية استنباط وتحليل المتطلبات (الشكل 4.7).",
          answer:
            "It is an iterative process with continual feedback between activities; the cycle starts with discovery and ends with documentation, and understanding improves with each round.\n" +
            "1) Requirements discovery and understanding: interacting with stakeholders to discover their requirements, including domain requirements and documentation.\n" +
            "2) Requirements classification and organization: grouping related requirements into coherent clusters.\n" +
            "3) Requirements prioritization and negotiation: prioritizing requirements and resolving conflicts between stakeholders through negotiation and compromise.\n" +
            "4) Requirements documentation: documenting the requirements (draft document, whiteboards, wikis or shared documents) as input to the next round of the spiral, using simple language and diagrams.",
          tags: ["Elicitation and analysis", "Figure 4.7"],
          ref: "Chapter 4 — Section 4.3 (Figure 4.7)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and explain the reasons why eliciting and understanding requirements from stakeholders is difficult.",
          translation:
            "اذكر واشرح أسباب صعوبة استنباط وفهم المتطلبات من أصحاب المصلحة.",
          answer:
            "1) Stakeholders often do not know what they want except in general terms, find it hard to articulate it, and may make unrealistic demands.\n" +
            "2) Stakeholders express requirements in their own terms with implicit knowledge of their work, which engineers without domain experience may not understand.\n" +
            "3) Different stakeholders with diverse requirements express them differently; engineers must find all sources and discover commonalities and conflicts.\n" +
            "4) Political factors may influence requirements, e.g. managers demanding requirements that increase their influence.\n" +
            "5) The economic and business environment is dynamic; requirements' importance changes and new stakeholders may appear.",
          tags: ["Elicitation", "Difficulties"],
          ref: "Chapter 4 — Section 4.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Compare interviewing and ethnography as requirements elicitation techniques, mentioning the advantages and disadvantages of each.",
          translation:
            "قارن بين المقابلات والـ Ethnography كأساليب لاستنباط المتطلبات مع ذكر المميزات والعيوب.",
          answer:
            "Interviewing: talking to people about what they do. Types: closed (predefined questions) and open (no predefined agenda); in practice a mixture.\n" +
            "Advantages of interviews: good for an overall understanding of what stakeholders do, how they might use the new system and their difficulties with current systems; people like talking about their work.\n" +
            "Disadvantages of interviews: stakeholders rarely give specific detailed requirements without a prototype; domain jargon and tacit knowledge are hard to elicit; not effective for organizational requirements because of power relationships and reluctance to discuss politics; may miss essential information.\n" +
            "Ethnography: an analyst immerses himself or herself in the working environment and observes day-to-day work.\n" +
            "Advantages of ethnography: discovers implicit requirements reflecting how people actually work (not the formal process) and requirements from cooperation and awareness of others' activities; reveals critical process details missed by other techniques.\n" +
            "Disadvantages of ethnography: focused on the end-user, so not effective for broader organizational or domain requirements or for innovation.\n" +
            "Conclusion: use a mix of both, with other techniques.",
          tags: ["Interviewing", "Ethnography", "Comparison"],
          ref: "Chapter 4 — Section 4.3.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. What is the difference between stories and scenarios? List what a scenario may include.",
          translation:
            "ما الفرق بين الـ Stories والـ Scenarios؟ واذكر ما قد يتضمنه الـ Scenario.",
          answer:
            "Stories and scenarios are essentially the same: a description of how the system can be used for a particular task. The difference is in structure and level of detail.\n" +
            'Stories: narrative text, high-level description of system use; good for setting out the "big picture" and reaching a wider community (e.g. the iLearn photo-sharing story).\n' +
            "Scenarios: structured descriptions of example user interaction sessions with specific information such as inputs and outputs; more detailed and used to propose requirements.\n" +
            "A scenario may include: (1) what the system and users expect when it starts, (2) the normal flow of events, (3) what can go wrong and how it is handled, (4) other activities going on at the same time, (5) the system state when the scenario ends.",
          tags: ["Stories", "Scenarios"],
          ref: "Chapter 4 — Section 4.3.2 (Figures 4.9, 4.10)",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What is a feasibility study? State the three key questions it should answer.",
          translation:
            "ما هي دراسة الجدوى؟ اذكر الأسئلة الثلاثة الرئيسية التي يجب أن تجيب عنها.",
          answer:
            "A feasibility study is a short, focused study early in the RE process that assesses whether the system is technically and financially feasible, helping management decide whether to go ahead with procurement or development.\n" +
            "Key questions: (1) Does the system contribute to the overall objectives of the organization? (2) Can the system be implemented within schedule and budget using current technology? (3) Can the system be integrated with other systems that are used?\n" +
            "If the answer to any of these is no, you should probably not go ahead with the project.",
          tags: ["Feasibility study"],
          ref: "Chapter 4 — Introduction (Feasibility studies box)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the spiral view of the requirements engineering process (Figure 4.6).",
          translation:
            "اشرح المنظور الحلزوني (Spiral) لعملية هندسة المتطلبات (الشكل 4.6).",
          answer:
            "RE involves three key activities: elicitation and analysis, specification, and validation. In practice they are interleaved and organized as an iterative spiral; the output is a system requirements document.\n" +
            "Effort on each activity depends on the stage of the process, the type of system and the available budget.\n" +
            "Early iterations focus on high-level business requirements and user requirements; outer rings focus on more detailed system requirements and non-functional requirements.\n" +
            "The number of iterations can vary, so the spiral can be exited after some or all user requirements are elicited. Agile development can be used instead of prototyping so requirements and implementation are developed together.\n" +
            "Requirements change in virtually all systems, so changes must be managed (requirements management).",
          tags: ["RE process", "Spiral model", "Figure 4.6"],
          ref: "Chapter 4 — Section 4.2 (Figure 4.6)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "11. Who are the system stakeholders? Give examples of Mentcare stakeholders.",
          translation:
            "من هم الـ Stakeholders؟ اذكر أمثلة من أصحاب المصلحة في نظام Mentcare.",
          answer:
            "System stakeholders include anyone affected by the system in some way and so anyone with a legitimate interest in it: end-users, managers, and external stakeholders such as regulators who certify acceptability.\n" +
            "Mentcare examples: patients and their relatives; doctors; nurses; medical receptionists; IT staff; a medical ethics manager; health care managers; medical records staff.",
          tags: ["Stakeholders"],
          ref: "Chapter 4 — Introduction",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. Explain why it is only possible to achieve completeness and consistency for very small systems.",
          translation:
            "اشرح لماذا يمكن تحقيق الـ Completeness والـ Consistency فقط للأنظمة الصغيرة جدًا.",
          answer:
            "Completeness means all services and information required by the user are defined; consistency means requirements are not contradictory.\n" +
            "Reason 1: it is easy to make mistakes and omissions when writing specifications for large, complex systems.\n" +
            "Reason 2: large systems have many stakeholders with different backgrounds and expectations, whose needs are often inconsistent. These inconsistencies may only be discovered after deeper analysis or during development.\n" +
            "Imprecision can also lead to disputes: developers may interpret an ambiguous requirement in the way that is easiest to implement (e.g. the Mentcare search requirement).",
          tags: ["Completeness", "Consistency"],
          ref: "Chapter 4 — Section 4.1.1",
          likely: "medium",
        },
        {
          type: "essay",
          q: "13. Explain why non-functional requirements are difficult to implement and trace, and how they relate to functional requirements.",
          translation:
            "اشرح لماذا يصعب تنفيذ وتتبع المتطلبات غير الوظيفية وكيف ترتبط بالمتطلبات الوظيفية.",
          answer:
            "Their implementation may be spread throughout the system, for two reasons:\n" +
            "1) They may affect the overall architecture rather than individual components (e.g. organizing the system to minimize communication between components to meet performance requirements).\n" +
            "2) A single non-functional requirement, such as security, may generate several related functional requirements (new services) and may also constrain existing requirements, e.g. by limiting access to information.\n" +
            "Non-functional requirements also conflict and interact with others (e.g. a card-reader identification requirement conflicts with mobile access from tablets or smartphones).\n" +
            "Ideally, highlight requirements related to emergent properties such as performance or reliability, e.g. in a separate section.",
          tags: ["Non-functional requirements", "Emergent properties"],
          ref: "Chapter 4 — Section 4.1.2",
          likely: "medium",
        },
        {
          type: "essay",
          q: "14. Describe how ethnography can be combined with prototyping, and discuss its limitation for innovation (Nokia vs Apple).",
          translation:
            "صف كيف يمكن دمج الـ Ethnography مع الـ Prototyping، وناقش حدودها في الابتكار (Nokia مقابل Apple).",
          answer:
            "Figure 4.8: ethnographic analysis informs generic system development and prototyping, so fewer prototype refinement cycles are needed. Prototype evaluation identifies problems and questions that are discussed in debriefing meetings and then guide focused ethnography in the next phase.\n" +
            "Limitation: ethnography helps to understand existing systems but not always to innovate. Nokia is said to have used ethnography to see how people used phones, whereas Apple ignored current use and revolutionized the industry with the iPhone.\n" +
            "Because of its end-user focus it is not effective for broader organizational or domain requirements, so use it with other techniques.",
          tags: ["Ethnography", "Prototyping", "Figure 4.8"],
          ref: "Chapter 4 — Section 4.3.1.2 (Figure 4.8)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "15. What makes an effective interviewer? Mention the difficulties of eliciting domain knowledge in interviews.",
          translation:
            "ما الذي يجعل المحاور فعّالًا؟ اذكر صعوبات استنباط معرفة المجال (Domain knowledge) في المقابلات.",
          answer:
            'An effective interviewer is open-minded, avoids preconceived ideas, and is willing to change his or her mind if surprising requirements appear; and prompts the interviewee with a springboard question, a requirements proposal, or a prototype instead of "tell me what you want".\n' +
            "Difficulties with domain knowledge: (1) specialists use jargon in a precise and subtle way that engineers may misunderstand; (2) some knowledge is so familiar that stakeholders find it hard to explain or think it is not worth mentioning (e.g. the librarian cataloguing every acquisition).\n" +
            "Interviewing alone may miss essential information, so combine it with other techniques.",
          tags: ["Interviewing", "Domain knowledge"],
          ref: "Chapter 4 — Section 4.3.1.1",
          likely: "medium",
        },
      ],
    },
    {
      t: "المحاضرة الخامسة — الفصل الرابع (جزء 2): Requirements Engineering (Spec, Validation, Change)",
      d: "هندسة المتطلبات — الفصول 4.4 حتى 4.6 من كتاب Sommerville: مواصفة المتطلبات، التحقق، وإدارة التغيير.",
      id: "software-engineering-lec-05",
      pdf: "datenew/subjects/software-engineering/lectures/lec 5/Software Engineering, 10th GLOBAL Edition - Chapter 4 - Requirements engineering-lec 5.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/Lecture-05-Questions.pdf",
      // المحاضرة: Lecture 5 (Chapter 4, Lec : 2) — Requirements Engineering (Sommerville Ch.4 — Sections 4.4-4.6) — موضوعها: مواصفة المتطلبات، التحقق، وإدارة تغيير المتطلبات، use cases، SRS، traceability.
      notes: "الاسئلة المطلوب حله من 1 لي 8.",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمواضيع هندسة المتطلبات: مواصفة المتطلبات، SRS، use cases، و traceability — مناسب لمراجعة المحاضرة كاملة.",
          links: [
            {
              t: "كورس هندسة متطلبات البرمجيات (Playlist)",
              d: "سلسلة محاضرات بالعربي تغطي أساسيات هندسة المتطلبات: تعريفها، أنواعها، عملية elicitation و specification و validation. مناسب لمراجعة القسم 4.4 و 4.5 من المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ تشغيل القائمة",
                  url: "https://www.youtube.com/playlist?list=PLquXYvvn8Qk-vWE-6e8w8YKz-qv7gRFxG",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "هندسة البرمجيات — شرح كتاب Sommerville (Playlist)",
              d: "كورس شامل بالعربي لكتاب Sommerville العالمي (نفس كتاب المحاضرة). يشمل محاضرات عن Requirements Engineering وتطبيقاتها. مناسب لفهم السياق العام للمحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ تشغيل القائمة",
                  url: "https://www.youtube.com/playlist?list=PLSdxbt9aypHLpUEjVa96utjc_lcDndJ8K",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Requirements Engineering - Lecture 1 (بالعربي)",
              d: "محاضرة مقدمة في هندسة المتطلبات بالعربي تشرح المفاهيم الأساسية: functional vs non-functional requirements، وعملية requirements engineering. مناسب لمراجعة تعريفات القسم 4.4.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة",
                  url: "https://www.youtube.com/watch?v=lrIe_mI4asE",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "UML Use Case Diagram — شرح بالعربي",
              d: "شرح عربي لمخطط حالات الاستخدام (Use Case Diagram): الممثلون (actors)، التفاعلات، والعلاقات. مناسب لفهم القسم 4.4.3 من المحاضرة عن use cases و UML.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة",
                  url: "https://www.youtube.com/watch?v=nF18GZmTiYQ",
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
            "مصادر فيديو بالإنجليزي لتعميق الفهم: SRS document، use case diagrams، و requirements validation. ملاحظة: الزراي نوع search لأنه يفتح صفحة بحث يوتيوب لا فيديو محدد.",
          links: [
            {
              t: "🔎 بحث في يوتيوب: Requirements Engineering Tutorial",
              d: "صفحة بحث يوتيوب تعرض عشرات الفيديوهات العالمية عن هندسة المتطلبات. اختر فيديو مشاهدة عالية ومدته مناسبة. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=requirements+engineering+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Use Case Diagram UML",
              d: "صفحة بحث يوتيوب لفيديوهات UML Use Case Diagram. اختر فيديو يشرح الممثلين والتفاعلات و system boundary. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=use+case+diagram+UML+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Software Requirements Specification SRS",
              d: "صفحة بحث يوتيوب لفيديوهات تشرح SRS document وهيكل IEEE الخاص به. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=software+requirements+specification+SRS+document",
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
            "مقالات مرجعية مفصّلة تشرح مفاهيم المحاضرة: SRS format، Use Case Diagram، و Requirements Traceability Matrix.",
          links: [
            {
              t: "Software Requirement Specification (SRS) Format — GeeksforGeeks",
              d: "مقال مفصّل يشرح هيكل مستند SRS: المقدمة، الوصف العام، Functional Requirements، Interface Requirements، Performance Requirements، Non-Functional Attributes. مناسب لفهم القسم 4.4.4 من المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/software-requirement-specification-srs-format",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Software Requirements Specification — Wikipedia",
              d: "مقال موسوعي عن SRS: تعريفها، تاريخ معايير IEEE (830-1984 و 29148:2018)، خصائص الجودة للمتطلبات (necessary, unambiguous, complete, consistent, feasible). مناسب لمراجعة تعريف SRS والمعايير.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://en.wikipedia.org/wiki/Software_requirements_specification",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "What is Use Case Diagram? — Visual Paradigm Guide",
              d: "دليل شامل عن Use Case Diagrams: المكونات (actors, use cases, communication links, system boundaries)، أنواع العلاقات (extends, include, generalization)، ونصائح للرسم. مناسب لفهم القسم 4.4.3.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Requirements Traceability Matrix (RTM) — GeeksforGeeks",
              d: "شرح كامل لـ RTM: تعريفها، أنواعها (Forward, Backward, Bidirectional)، مكوناتها، وأهميتها في تغطية الاختبارات. مناسب لفهم traceability المذكور في القسم 4.6.1.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-testing/requirement-traceability-matrix",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Implementing Requirements Traceability — SodiusWillert",
              d: "دليل تطبيقي عن traceability: الفرق بين forward و backward traceability، الفوائد، تحديات التنفيذ، وأفضل الممارسات. مناسب لتعميق فهم إدارة تغيير المتطلبات في القسم 4.6.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.sodiuswillert.com/en/blog/implementing-requirements-traceability-in-systems-software-engineering",
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
            "أدوات عملية لرسم Use Case Diagrams وإدارة المتطلبات بشكل احترافي — مناسبة للتطبيق العملي والتدريب على مفاهيم المحاضرة.",
          links: [
            {
              t: "Visual Paradigm Online — أداة Use Case Diagram مجانية",
              d: "أداة أونلاين مجانية لرسم UML Use Case Diagrams بمحرر drag-and-drop وقوالب جاهزة. تدعم التصدير بصيغ PNG, JPG, SVG, PDF. مناسب للتدريب العملي على رسم المخططات المذكورة في القسم 4.4.3.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://online.visual-paradigm.com/diagrams/features/use-case-diagram-software",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Lucidchart — Use Case Diagram Tool",
              d: "أداة شائعة لرسم المخططات من ضمنها Use Case Diagrams، مع شرح للرموز (actors as stick figures, use cases as ovals, system boundaries). مناسب للتدريب على use cases.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://lucid.co/diagram/uml/use-case-diagram-tutorial",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "IBM Engineering Requirements Management DOORS",
              d: "أداة DOORS من IBM لإدارة المتطلبات على المستوى المؤسسي — نفس الأداة المذكورة في المحاضرة (القسم 4.6.1) كأداة متخصصة للأنظمة الأكبر. تنفّذ traceability و change management.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.ibm.com/products/requirements-management",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],

      questions: [
        // ============ MCQ — likely: high ============
        {
          q: "1. What is requirements specification?",
          options: [
            "The process of writing down the user and system requirements in a requirements document.",
            "The process of gathering requirements from stakeholders using interviews.",
            "The process of checking that requirements define the system the customer wants.",
            "The process of managing changes to requirements after the document is approved.",
          ],
          correct: 0,
          translation: "ما هي مواصفة المتطلبات (Requirements specification)؟",
          explanation:
            'الإجابة الصحيحة هي الأولى لأن التعريف المذكور في المحاضرة هو "the process of writing down the user and system requirements in a requirements document". الخيارات الأخرى تصف عمليات أخرى: الثاني يصف الـ elicitation، الثالث يصف الـ validation، والرابع يصف الـ change management.',
          tags: ["Requirements specification", "Definitions"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          q: "2. User requirements are almost always written in:",
          options: [
            "Mathematical specifications based on finite-state machines.",
            "Natural language supplemented by appropriate diagrams and tables.",
            "Programming language constructs with iteration and alternatives.",
            "Formal set-theory notations only.",
          ],
          correct: 1,
          translation: "متطلبات المستخدم تُكتب دائمًا تقريبًا باستخدام:",
          explanation:
            "المحاضرة تنص صراحة على أن user requirements تُكتب بلغة طبيعية معززة بمخططات وجداول. الرياضية والبرمجية تستخدم للـ system requirements وليست للـ user requirements لأنها تتطلب خبرة تقنية.",
          tags: ["User requirements", "Natural language"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          q: "3. Ideally, user requirements should specify:",
          options: [
            "The internal architecture and design of the system.",
            "The database schema and implementation details.",
            "Only the external behavior of the system.",
            "The programming language and frameworks to be used.",
          ],
          correct: 2,
          translation: "من المفترض مثاليًا أن متطلبات المستخدم تحدد:",
          explanation:
            "المحاضرة تؤكد أن user requirements should specify only the external behavior of the system، ولا يجب أن تتضمن تفاصيل التصميم أو البنية المعمارية لأنها موجهة لمستخدمين غير تقنيين.",
          tags: ["User requirements", "External behavior"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          q: "4. According to the lecture, which notation is the most widely used way of specifying system and software requirements?",
          options: [
            "Mathematical specifications.",
            "Graphical notations such as UML diagrams.",
            "Natural language.",
            "Structured programming constructs.",
          ],
          correct: 2,
          translation:
            "وفقًا للمحاضرة، ما هي الطريقة الأكثر استخدامًا لكتابة متطلبات النظام والبرمجيات؟",
          explanation:
            "رغم وجود بدائل كثيرة، المحاضرة تنص على أن natural language will continue to be the most widely used way. السبب أنها معبّرة وبديهية وعالمية، رغم مشاكل الغموض فيها.",
          tags: ["Natural language", "Notations"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1",
          likely: "high",
        },
        {
          q: '5. In natural language requirements, the word "shall" is used to indicate:',
          options: [
            "Desirable requirements that are not essential.",
            "Mandatory requirements that the system must support.",
            "Optional requirements for future versions.",
            "Requirements that have been cancelled.",
          ],
          correct: 1,
          translation:
            'في متطلبات اللغة الطبيعية، كلمة "shall" تستخدم للإشارة إلى:',
          explanation:
            'المحاضرة تفرّق: mandatory requirements تُكتب بـ "shall"، أما desirable requirements فتُكتب بـ "should". هذا التمييز يساعد على فهم أولوية المتطلب.',
          tags: ["Natural language", "Guidelines", "shall vs should"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guideline 2)",
          likely: "high",
        },
        {
          q: '6. In natural language requirements, the word "should" is used to indicate:',
          options: [
            "Mandatory requirements that must be supported.",
            "Desirable requirements that are not essential.",
            "Critical safety requirements only.",
            "Requirements that have already been implemented.",
          ],
          correct: 1,
          translation:
            'في متطلبات اللغة الطبيعية، كلمة "should" تستخدم للإشارة إلى:',
          explanation:
            'حسب التوجيه الثاني: "Desirable requirements are not essential and are written using should". هذا يفصل بين الإلزامي (shall) والمستحسن (should).',
          tags: ["Natural language", "Guidelines", "shall vs should"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guideline 2)",
          likely: "high",
        },
        {
          q: "7. Which of the following is NOT one of the recommended guidelines for writing natural language requirements?",
          options: [
            "Invent a standard format and ensure all requirements adhere to it.",
            "Use text highlighting (bold, italic, or color) to pick out key parts.",
            'Use software jargon such as "architecture" and "module" to be precise.',
            "Associate a rationale with each user requirement.",
          ],
          correct: 2,
          translation:
            "أيٌّ مما يلي ليس من التوجيهات الموصى بها لكتابة متطلبات اللغة الطبيعية؟",
          explanation:
            "التوجيه الرابع يوصي بتجنب الـ jargon والاختصارات لأنها تُساء فهمها. الخيارات الأخرى كلها من التوجيهات الخمسة المذكورة في المحاضرة.",
          tags: ["Natural language", "Guidelines"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guidelines)",
          likely: "high",
        },
        {
          q: "8. The fifth guideline for natural language requirements recommends associating each user requirement with a:",
          options: [
            "Source code reference.",
            "Rationale explaining why the requirement was included.",
            "Database schema diagram.",
            "Test case specification.",
          ],
          correct: 1,
          translation:
            "التوجيه الخامس لكتابة متطلبات اللغة الطبيعية يوصي بربط كل متطلب بـ:",
          explanation:
            "التوجيه الخامس يقول: try to associate a rationale with each user requirement يشرح سبب وجود المتطلب ومَن اقترحه، وهذا مفيد عند تغيير المتطلبات لمعرفة مَن تستشيره.",
          tags: ["Natural language", "Guidelines", "Rationale"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1 (Guideline 5)",
          likely: "high",
        },
        {
          q: "9. Structured natural language specifications use:",
          options: [
            "Mathematical concepts such as finite-state machines.",
            "Standard templates or forms to specify requirements.",
            "Only graphical models without any text.",
            "Free-form text written by each developer independently.",
          ],
          correct: 1,
          translation: "المواصفات المنظّمة (Structured specifications) تستخدم:",
          explanation:
            "Structured language notations use templates to specify system requirements. هذا يحافظ على معظم مرونة اللغة الطبيعية لكنه يفرض توحيدًا على المواصفة.",
          tags: ["Structured specifications", "Templates"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.2",
          likely: "high",
        },
        {
          q: '10. In a structured specification form, the "precondition" field specifies:',
          options: [
            "What must be true after the function is called.",
            "What must be true before the function is called.",
            "The side effects of the operation.",
            "The destination of the outputs.",
          ],
          correct: 1,
          translation: 'في نموذج المواصفة المنظّمة، حقل "precondition" يحدد:',
          explanation:
            "precondition = what must be true before the function is called. أما postcondition فيحدد what is true after the function is called. هذا تمييز أساسي في النهج الوظيفي (functional approach).",
          tags: ["Structured specifications", "Precondition", "Postcondition"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.2 (Figure 4.13)",
          likely: "high",
        },
        {
          q: "11. Use cases were first introduced in:",
          options: [
            "The VOLERE method by Robertson and Robertson.",
            "The Objectory method by Jacobsen et al.",
            "The Waterfall model by Royce.",
            "The Agile Manifesto in 2001.",
          ],
          correct: 1,
          translation: "حالات الاستخدام (Use cases) ظهرت لأول مرة في:",
          explanation:
            "المحاضرة تقول: They were first introduced in the Objectory method (Jacobsen et al. 1993). ثم أصبحت جزءًا أساسيًا من UML.",
          tags: ["Use cases", "Objectory", "Jacobsen"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "12. In a use case diagram, actors are represented as:",
          options: [
            "Named ellipses.",
            "Stick figures.",
            "Rectangles with rounded corners.",
            "Diamonds.",
          ],
          correct: 1,
          translation:
            "في مخطط حالات الاستخدام، يُمثَّل الممثلون (actors) على شكل:",
          explanation:
            "Actors may be human or other systems, and are represented as stick figures. أما الـ interactions فيتم تمثيلها كـ named ellipses.",
          tags: ["Use cases", "Actors", "UML"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "13. In a use case diagram, each class of interaction is represented as:",
          options: [
            "A stick figure.",
            "A named ellipse.",
            "A rectangle.",
            "An arrow with a diamond head.",
          ],
          correct: 1,
          translation:
            "في مخطط حالات الاستخدام، يتم تمثيل كل صنف من التفاعلات على شكل:",
          explanation:
            "Each class of interaction is represented as a named ellipse. الـ stick figures للممثلين، والخطوط تربط الممثلين بالتفاعلات، والأسهم اختيارية لبيان direction of initiation.",
          tags: ["Use cases", "Interaction", "UML"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "14. Use cases have now become a fundamental feature of:",
          options: [
            "The Unified Modeling Language (UML).",
            "The IEEE 830 standard for SRS.",
            "The DOORS requirements management tool.",
            "The VOLERE requirements method.",
          ],
          correct: 0,
          translation: "حالات الاستخدام أصبحت ميزة أساسية في:",
          explanation:
            "Use cases have now become a fundamental feature of the Unified Modeling Language (UML). الـ UML هو معيار قياسي للنمذجة object-oriented.",
          tags: ["Use cases", "UML"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          q: "15. The software requirements document is also called the:",
          options: [
            "Software Design Document (SDD).",
            "Software Requirements Specification (SRS).",
            "System Architecture Document (SAD).",
            "User Acceptance Document (UAD).",
          ],
          correct: 1,
          translation: "يُسمى مستند متطلبات البرمجيات أيضًا:",
          explanation:
            "The software requirements document (sometimes called the software requirements specification or SRS). هو البيان الرسمي لما يجب على مطوري النظام تنفيذه.",
          tags: ["SRS", "Definitions"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4",
          likely: "high",
        },
        {
          q: "16. According to the IEEE standard structure of a requirements document, which chapter defines the technical terms used in the document?",
          options: ["Preface.", "Glossary.", "Introduction.", "Index."],
          correct: 1,
          translation:
            "وفقًا لمعيار IEEE لهيكل مستند المتطلبات، أي فصل يعرّف المصطلحات التقنية المستخدمة؟",
          explanation:
            "Glossary يعرّف المصطلحات التقنية، ويجب ألا تفترض خبرة القارئ. أما Preface فيتحدث عن readership و version history، و Introduction يشرح حاجة النظام، و Index فهو فهرس.",
          tags: ["SRS", "IEEE standard", "Glossary"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.17)",
          likely: "high",
        },
        {
          q: "17. Which chapter of the IEEE-standard requirements document describes anticipated future changes to the system?",
          options: [
            "System architecture.",
            "System models.",
            "System evolution.",
            "Appendices.",
          ],
          correct: 2,
          translation:
            "أي فصل في مستند المتطلبات (معيار IEEE) يصف التغييرات المستقبلية المتوقعة على النظام؟",
          explanation:
            "System evolution يصف الافتراضات الأساسية والتغييرات المتوقعة بسبب تطور الـ hardware أو تغير احتياجات المستخدمين. هذا يساعد المصممين على تجنب قرارات تصميم مقيدة.",
          tags: ["SRS", "IEEE standard", "System evolution"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.17)",
          likely: "high",
        },
        {
          q: "18. According to agile methods, requirements documents are often replaced with:",
          options: [
            "Detailed mathematical specifications.",
            "User stories written on cards or whiteboards.",
            "Formal contracts signed by all stakeholders.",
            "IEEE-standard requirements documents.",
          ],
          correct: 1,
          translation:
            "وفقًا للأساليب Agile، تُستبدل مستندات المتطلبات غالبًا بـ:",
          explanation:
            "Agile argues that requirements change so rapidly that a requirements document is out of date as soon as it is written. لذلك يستخدمون user stories مكتوبة على cards أو whiteboards، والمستخدم يعطيها أولوية.",
          tags: ["Agile", "User stories", "SRS"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4",
          likely: "high",
        },
        {
          q: "19. Requirements validation is the process of checking that requirements define:",
          options: [
            "The system that developers prefer to build.",
            "The system that the customer really wants.",
            "The cheapest possible system within budget.",
            "The system architecture in detail.",
          ],
          correct: 1,
          translation:
            "التحقق من المتطلبات (Requirements validation) هو عملية التأكد من أن المتطلبات تحدد:",
          explanation:
            "Requirements validation is the process of checking that requirements define the system that the customer really wants. تختلف عن الـ specification (الكتابة) وعن الـ change management (إدارة التغيير).",
          tags: ["Requirements validation", "Definitions"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "20. Which type of validation check ensures that requirements in the document do not conflict with each other?",
          options: [
            "Validity checks.",
            "Consistency checks.",
            "Completeness checks.",
            "Realism checks.",
          ],
          correct: 1,
          translation:
            "أي نوع من فحوص التحقق يضمن عدم تعارض المتطلبات مع بعضها؟",
          explanation:
            "Consistency checks: requirements should not conflict، أي لا توجد قيود متناقضة أو أوصاف مختلفة لنفس الوظيفة. الـ validity يفحص عكس احتياجات المستخدم، والـ completeness يفحص اكتمال الوظائف، والـ realism يفحص قابلية التنفيذ بالميزانية.",
          tags: ["Requirements validation", "Consistency checks"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "21. Which type of validation check ensures that the requirements document includes all functions and constraints intended by the user?",
          options: [
            "Validity checks.",
            "Consistency checks.",
            "Completeness checks.",
            "Verifiability.",
          ],
          correct: 2,
          translation:
            "أي نوع من فحوص التحقق يضمن أن المستند يتضمن كل الوظائف والقيود التي قصدها المستخدم؟",
          explanation:
            "Completeness checks تتأكد من أن المستند يشمل كل functions و constraints المقصودة. الـ validity يقارن بالاحتياج الحقيقي للمستخدم، والـ verifiability تتعلق بإمكانية كتابة tests للمتطلبات.",
          tags: ["Requirements validation", "Completeness checks"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "22. Which validation technique involves developing an executable model of the system and using it with end-users?",
          options: [
            "Requirements reviews.",
            "Prototyping.",
            "Test-case generation.",
            "Traceability analysis.",
          ],
          correct: 1,
          translation:
            "أي تقنية تحقق تشمل تطوير نموذج قابل للتنفيذ واستخدامه مع المستخدمين النهائيين؟",
          explanation:
            "Prototyping: developing an executable model of a system and using this with end-users and customers to see if it meets their needs. الـ reviews تعتمد على قراءة المستند، والـ test-case generation يكتب tests للمتطلبات.",
          tags: ["Requirements validation", "Prototyping"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "23. According to the lecture, the cost of fixing a requirements problem by making a system change is usually:",
          options: [
            "Much less than repairing design or coding errors.",
            "About the same as fixing a coding error.",
            "Much greater than repairing design or coding errors.",
            "Negligible if discovered before implementation.",
          ],
          correct: 2,
          translation:
            "وفقًا للمحاضرة، تكلفة إصلاح مشكلة في المتطلبات عادةً تكون:",
          explanation:
            "The cost of fixing a requirements problem by making a system change is usually much greater than repairing design or coding errors. لأن تغيير المتطلب يعني تغيير التصميم والتنفيذ وإعادة الاختبار.",
          tags: ["Requirements validation", "Cost"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          q: "24. Requirements that are associated with the core, slow-to-change activities of an organization are called:",
          options: [
            "Volatile requirements.",
            "Enduring requirements.",
            "Functional requirements.",
            "Domain requirements.",
          ],
          correct: 1,
          translation:
            "المتطلبات المرتبطة بالأنشطة الأساسية بطيئة التغير في المنظمة تسمى:",
          explanation:
            "Enduring requirements ترتبط بالأنشطة الأساسية fundamental work activities. أما Volatile requirements فأكثر عرضة للتغير وترتبط بالأنشطة الداعمة supporting activities.",
          tags: ["Requirements change", "Enduring", "Volatile"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },
        {
          q: "25. Requirements that are more likely to change and are usually associated with supporting activities are called:",
          options: [
            "Enduring requirements.",
            "Volatile requirements.",
            "Product requirements.",
            "Organizational requirements.",
          ],
          correct: 1,
          translation:
            "المتطلبات الأكثر عرضة للتغير والمرتبطة بالأنشطة الداعمة تسمى:",
          explanation:
            "Volatile requirements reflect how the organization does its work rather than the work itself. هذا التمييز بين enduring و volatile يساعد في إدارة المتطلبات المتغيرة.",
          tags: ["Requirements change", "Enduring", "Volatile"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },
        {
          q: "26. Which of the following is NOT one of the issues that must be decided during requirements management planning?",
          options: [
            "Requirements identification.",
            "A change management process.",
            "Traceability policies.",
            "Selecting the programming language for implementation.",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس من المسائل التي تُقرر خلال تخطيط إدارة المتطلبات؟",
          explanation:
            "المحاضرة تذكر 4 مسائل: requirements identification، change management process، traceability policies، tool support. اختيار لغة البرمجة ليس من اختصاص إدارة المتطلبات بل من اختصاص التصميم.",
          tags: ["Requirements management", "Planning"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1",
          likely: "high",
        },
        {
          q: "27. The requirements management tool mentioned in the lecture as suitable for larger systems is:",
          options: [
            "Microsoft Word with track changes.",
            "Shared spreadsheets only.",
            "DOORS (by IBM).",
            "GitHub Issues.",
          ],
          correct: 2,
          translation:
            "أداة إدارة المتطلبات المذكورة في المحاضرة كمناسبة للأنظمة الأكبر هي:",
          explanation:
            "للأنظمة الصغيرة يمكن استخدام spreadsheets و databases، أما للأنظمة الأكبر فالمحاضرة تذكر DOORS (IBM 2013) كأداة متخصصة تسهل متابعة عدد كبير من المتطلبات المتغيرة.",
          tags: ["Requirements management", "DOORS", "Tools"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1",
          likely: "high",
        },
        {
          q: "28. The first stage of the requirements change management process is:",
          options: [
            "Problem analysis and change specification.",
            "Change analysis and costing.",
            "Change implementation.",
            "System testing and validation.",
          ],
          correct: 0,
          translation: "المرحلة الأولى من عملية إدارة تغيير المتطلبات هي:",
          explanation:
            "Problem analysis and change specification: تبدأ بمشكلة متطلب محددة أو اقتراح تغيير، يتم تحليلها للتحقق من صحتها. تليها change analysis and costing ثم change implementation.",
          tags: ["Requirements change", "Change management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.2 (Figure 4.19)",
          likely: "high",
        },
        {
          q: "29. The second stage of the requirements change management process, where the cost of the change is estimated, is:",
          options: [
            "Problem analysis and change specification.",
            "Change analysis and costing.",
            "Change implementation.",
            "Requirements review.",
          ],
          correct: 1,
          translation:
            "المرحلة الثانية من إدارة تغيير المتطلبات، حيث تُقدَّر تكلفة التغيير، هي:",
          explanation:
            "Change analysis and costing: تقييم أثر التغيير المقترح باستخدام traceability information ومعرفة عامة بالمتطلبات، وتقدير التكلفة من حيث تعديل المستند والتصميم والتنفيذ، ثم اتخاذ قرار المضي قدمًا.",
          tags: ["Requirements change", "Change management", "Costing"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.2 (Figure 4.19)",
          likely: "high",
        },
        {
          q: "30. Requirements traceability means:",
          options: [
            "Tracking the project budget and schedule.",
            "Keeping track of relationships between requirements, their sources, and the system design.",
            "Tracking the development team's working hours.",
            "Tracking the number of bugs found in testing.",
          ],
          correct: 1,
          translation: "متطلبات الـ traceability تعني:",
          explanation:
            "Traceability: keeping track of relationships between requirements, their sources, and the system design. هذا يسمح بتحليل أسباب التغييرات المقترحة وأثرها على أجزاء النظام الأخرى عند حدوث تغيير.",
          tags: ["Traceability", "Requirements management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },

        // ============ MCQ — likely: medium ============
        {
          q: "31. The VOLERE requirements engineering method was developed by:",
          options: [
            "Jacobsen et al. in 1993.",
            "Robertson and Robertson in 2013.",
            "Rittel and Webber in 1973.",
            "IEEE in 1998.",
          ],
          correct: 1,
          translation: "طريقة VOLERE لهندسة المتطلبات طوّرها:",
          explanation:
            "المحاضرة تنص صراحة أن Robertsons (Robertson and Robertson 2013) في كتابهم عن VOLERE اقترحوا كتابة متطلبات المستخدم على بطاقات. Jacobsen طوّر الـ Objectory والـ use cases، و Rittel and Webber طوّرا مفهوم wicked problems.",
          tags: ["Structured specifications", "VOLERE", "Robertson"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.2",
          likely: "medium",
        },
        {
          q: "32. According to the author's experience, use cases are:",
          options: [
            "More helpful in requirements engineering than in system design.",
            "More helpful in systems design than in requirements engineering.",
            "Useless in both requirements engineering and design.",
            "Only useful for embedded systems.",
          ],
          correct: 1,
          translation: "وفقًا لتجربة المؤلف، حالات الاستخدام:",
          explanation:
            "المحاضرة تقول: I find use cases to be more helpful in systems design than in requirements engineering. السبب أن الـ stakeholders لا يفهمون مصطلح use case ولا يجدون النموذج الرسومي مفيدًا.",
          tags: ["Use cases", "Design", "Requirements engineering"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "medium",
        },
        {
          q: '33. The concept of "wicked problems" — problems that cannot be completely defined — was introduced by:',
          options: [
            "Robertson and Robertson (2013).",
            "Jacobsen et al. (1993).",
            "Rittel and Webber (1973).",
            "IEEE (1998).",
          ],
          correct: 2,
          translation: 'مفهوم "المشكلات الشريرة" (wicked problems) قدّمه:',
          explanation:
            "Rittel and Webber (1973) قدّما مفهوم wicked problems. ولأن هذه المشكلات لا يمكن تعريفها بالكامل، فمتطلبات البرمجيات تكون incomplete وتتغير مع تطور الفهم.",
          tags: ["Requirements change", "Wicked problems"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6",
          likely: "medium",
        },
        {
          q: "34. Which of the following is a reason why system requirements may include some design information?",
          options: [
            "An initial architecture may be needed to help structure the requirements specification.",
            "IEEE standards always require design details in the SRS.",
            "Customers prefer to review design details rather than requirements.",
            "Agile methods prohibit separating requirements from design.",
          ],
          correct: 0,
          translation:
            "أيٌّ مما يلي سبب لاحتواء متطلبات النظام على بعض معلومات التصميم؟",
          explanation:
            "المحاضرة تذكر 3 أسباب: (1) قد تضطر لتصميم architecture مبدئي لتنظيم المواصفة، (2) التشغيل البيني مع أنظمة موجودة يفرض قيود تصميم، (3) استخدام architecture محددة لتحقيق non-functional requirements أو لتلبية متطلبات regulator خارجي.",
          tags: ["System requirements", "Design information"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "medium",
        },
        {
          q: "35. According to the lecture, the principal users of a requirements document include all of the following EXCEPT:",
          options: [
            "System customers.",
            "System test engineers.",
            "Marketing interns with no technical role.",
            "System maintenance engineers.",
          ],
          correct: 2,
          translation:
            "وفقًا للمحاضرة، المستخدمون الرئيسيون لمستند المتطلبات يشملون كل ما يلي ما عدا:",
          explanation:
            "المستخدمون المذكورون هم: system customers، managers، system engineers، system test engineers، system maintenance engineers. الـ marketing interns دون دور تقني ليسوا من مستخدمي المستند.",
          tags: ["SRS", "Document users"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.16)",
          likely: "medium",
        },

        // ============ ESSAY — likely: high ============
        {
          type: "essay",
          q: "1. Define requirements specification and explain the difference between user requirements and system requirements.",
          translation:
            "عرّف مواصفة المتطلبات واشرح الفرق بين متطلبات المستخدم ومتطلبات النظام.",
          answer:
            "Requirements specification is the process of writing down the user and system requirements in a requirements document.\n" +
            "User requirements are written for system users who do not have detailed technical knowledge.\n" +
            "They are almost always written in natural language supplemented by diagrams and tables, and they should specify only the external behavior of the system without including design or implementation details.\n" +
            "System requirements are expanded versions of the user requirements that software engineers use as the starting point for system design.\n" +
            "They add detail and explain how the system should provide the user requirements.\n" +
            "They may be used as part of the contract for the implementation of the system and should therefore be a complete and detailed specification of the whole system.",
          tags: ["Requirements specification", "User vs System requirements"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. List and explain the five guidelines recommended for writing natural language requirements.",
          translation:
            "اذكر واشرح التوجيهات الخمسة الموصى بها لكتابة متطلبات اللغة الطبيعية.",
          answer:
            "1. Invent a standard format and ensure that all requirement definitions adhere to that format. Standardizing the format makes omissions less likely and requirements easier to check.\n" +
            '2. Use language consistently to distinguish between mandatory and desirable requirements. Use "shall" for mandatory requirements that the system must support, and "should" for desirable requirements that are not essential.\n' +
            "3. Use text highlighting (bold, italic, or color) to pick out key parts of the requirement.\n" +
            "4. Do not assume that readers understand technical, software engineering language. Avoid the use of jargon, abbreviations, and acronyms.\n" +
            "5. Whenever possible, associate a rationale with each user requirement explaining why the requirement has been included and who proposed it, so that you know whom to consult if the requirement has to be changed.",
          tags: ["Natural language", "Guidelines"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Compare natural language specification with structured specification. Mention the advantages and disadvantages of each.",
          translation:
            "قارن بين المواصفة باللغة الطبيعية والمواصفة المنظّمة. اذكر مميزات وعيوب كل منهما.",
          answer:
            "Natural language specification:\n" +
            "Advantages: It is expressive, intuitive, and universal. It has been used since the 1950s and is the most widely used way of specifying requirements.\n" +
            "Disadvantages: It is potentially vague and ambiguous, its interpretation depends on the background of the reader, it is easy to amalgamate several requirements into a single sentence, and structuring natural language requirements can be difficult.\n" +
            "Structured specification:\n" +
            "Advantages: It maintains most of the expressiveness and understandability of natural language but imposes some uniformity on the specification. Variability is reduced, and requirements are organized more effectively.\n" +
            "Disadvantages: It is still sometimes difficult to write requirements in a clear and unambiguous way, particularly when complex computations are to be specified.",
          tags: ["Natural language", "Structured specifications", "Comparison"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Sections 4.4.1 and 4.4.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. What is a use case? Describe the components of a use case diagram and how actors and interactions are represented.",
          translation:
            "ما هي حالة الاستخدام؟ صف مكونات مخطط حالات الاستخدام وكيف يتم تمثيل الممثلين والتفاعلات.",
          answer:
            "A use case is a way of describing interactions between users and a system using a graphical model and structured text.\n" +
            "Use cases were first introduced in the Objectory method (Jacobsen et al. 1993) and have become a fundamental feature of the Unified Modeling Language (UML).\n" +
            "A high-level use case diagram has the following components:\n" +
            "- Actors: entities (human or other systems) that interact with the system. They are represented as stick figures.\n" +
            "- Use cases (interactions): each class of interaction is represented as a named ellipse.\n" +
            "- Lines: they link the actors with the interactions.\n" +
            "- Optional arrowheads: may be added to lines to show how the interaction is initiated.\n" +
            "Each use case should be documented with a textual description that can be linked to other UML models such as sequence or state charts.",
          tags: ["Use cases", "UML", "Actors"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Describe the structure of a software requirements document based on the IEEE standard. List its main chapters.",
          translation:
            "صف هيكل مستند متطلبات البرمجيات بناءً على معيار IEEE. اذكر الفصول الرئيسية.",
          answer:
            "The software requirements document (also called SRS) is an official statement of what the system developers should implement.\n" +
            "Its structure is based on an IEEE standard for requirements documents (IEEE 1998). The main chapters are:\n" +
            "1. Preface — defines the expected readership and version history.\n" +
            "2. Introduction — describes the need for the system and how it fits into business objectives.\n" +
            "3. Glossary — defines the technical terms used.\n" +
            "4. User requirements definition — describes the services provided for the user, including non-functional requirements.\n" +
            "5. System architecture — a high-level overview of the anticipated architecture.\n" +
            "6. System requirements specification — describes functional and non-functional requirements in detail.\n" +
            "7. System models — graphical models showing relationships between components.\n" +
            "8. System evolution — describes anticipated changes due to hardware evolution and changing user needs.\n" +
            "9. Appendices — detailed specific information such as hardware and database descriptions.\n" +
            "10. Index — alphabetic index and indexes of diagrams and functions.",
          tags: ["SRS", "IEEE standard", "Document structure"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4.4 (Figure 4.17)",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. List and explain the five types of checks performed during requirements validation.",
          translation:
            "اذكر واشرح أنواع الفحوص الخمسة التي تُجرى أثناء التحقق من المتطلبات.",
          answer:
            "Requirements validation is the process of checking that requirements define the system that the customer really wants.\n" +
            "The five types of checks are:\n" +
            "1. Validity checks — check that the requirements reflect the real needs of system users, since circumstances may have changed since the requirements were originally elicited.\n" +
            "2. Consistency checks — requirements in the document should not conflict; there should not be contradictory constraints or different descriptions of the same system function.\n" +
            "3. Completeness checks — the requirements document should include requirements that define all functions and constraints intended by the system user.\n" +
            "4. Realism checks — the requirements should be checked to ensure that they can be implemented within the proposed budget and schedule for the system.\n" +
            "5. Verifiability — system requirements should be written so that they are verifiable, meaning that a set of tests can be written to demonstrate that the delivered system meets each specified requirement.",
          tags: ["Requirements validation", "Validation checks"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the three principal stages of the requirements change management process.",
          translation:
            "اشرح المراحل الثلاث الرئيسية لعملية إدارة تغيير المتطلبات.",
          answer:
            "Requirements change management should be applied to all proposed changes after the requirements document has been approved.\n" +
            "The three principal stages are:\n" +
            "1. Problem analysis and change specification: The process starts with an identified requirements problem or a specific change proposal. The problem or proposal is analyzed to check that it is valid. The analysis is fed back to the change requestor who may respond with a more specific proposal or withdraw the request.\n" +
            "2. Change analysis and costing: The effect of the proposed change is assessed using traceability information and general knowledge of the system requirements. The cost of making the change is estimated in terms of modifications to the requirements document and, if appropriate, to the system design and implementation. A decision is then made on whether or not to proceed.\n" +
            "3. Change implementation: The requirements document and, where necessary, the system design and implementation are modified. The document should be organized so that changes can be made without extensive rewriting, by minimizing external references and making sections as modular as possible.",
          tags: ["Requirements change", "Change management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.2 (Figure 4.19)",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Discuss the reasons why requirements for large software systems are always changing.",
          translation:
            "ناقش الأسباب التي تجعل متطلبات أنظمة البرمجيات الكبيرة دائمًا في حالة تغيير.",
          answer:
            'Large software systems are often developed to address "wicked problems" — problems that cannot be completely defined. As the stakeholders\' understanding of the problem changes, the requirements must evolve.\n' +
            "After a system is installed, new requirements emerge for several reasons:\n" +
            "1. The business and technical environment always changes after installation. New hardware may be introduced, the system may need to interface with other systems, business priorities may change, and new legislation and regulations may require compliance.\n" +
            "2. The people who pay for a system and the users of that system are rarely the same people. Customers impose requirements because of organizational and budgetary constraints that may conflict with end-user requirements. After delivery, new features may have to be added for user support.\n" +
            "3. Large systems usually have a diverse stakeholder community with conflicting or contradictory priorities. The final requirements are a compromise. With experience, the balance of support given to different stakeholders often has to be changed and requirements re-prioritized.",
          tags: ["Requirements change", "Wicked problems"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What is the difference between enduring and volatile requirements? Give an example of each.",
          translation:
            "ما الفرق بين المتطلبات الدائمة (enduring) والمتطلبات المتقلبة (volatile)؟ أعطِ مثالاً لكل منهما.",
          answer:
            "Enduring requirements are the requirements that are associated with the core, slow-to-change activities of an organization. They are associated with fundamental work activities and tend to remain stable over the lifetime of the system.\n" +
            "Volatile requirements are more likely to change. They are usually associated with supporting activities that reflect how the organization does its work rather than the work itself.\n" +
            "Example of enduring requirements: In a hospital system, the requirement that patient records must be kept confidential and accurate is enduring because patient care is a fundamental activity.\n" +
            "Example of volatile requirements: In the same hospital system, the requirement that reports must be printed on a specific type of form, or that data must be exchanged with a particular external system, is volatile because the supporting procedures and external systems change over time.",
          tags: ["Requirements change", "Enduring", "Volatile"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6 (sidebar)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain what is meant by requirements management planning and list the issues that must be decided during this stage.",
          translation:
            "اشرح ما يقصد بتخطيط إدارة المتطلبات واذكر المسائل التي تُقرر خلال هذه المرحلة.",
          answer:
            "Requirements management planning is concerned with establishing how a set of evolving requirements will be managed.\n" +
            "During the planning stage, the following issues must be decided:\n" +
            "1. Requirements identification — each requirement must be uniquely identified so that it can be cross-referenced with other requirements and used in traceability assessments.\n" +
            "2. A change management process — the set of activities that assess the impact and cost of changes.\n" +
            "3. Traceability policies — these policies define the relationships between each requirement and between the requirements and the system design that should be recorded, and how these records should be maintained.\n" +
            "4. Tool support — requirements management involves processing large amounts of information. Tools may range from specialist requirements management systems to shared spreadsheets and simple database systems.\n" +
            "Tool support is needed for: requirements storage, change management, and traceability management. For larger systems, specialized tools such as DOORS make it easier to keep track of a large number of changing requirements.",
          tags: ["Requirements management", "Planning", "Traceability"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. What is requirements traceability and why is it important in requirements management?",
          translation:
            "ما هي الـ traceability في المتطلبات ولماذا هي مهمة في إدارة المتطلبات؟",
          answer:
            "Requirements traceability is the ability to keep track of the relationships between requirements, their sources, and the system design.\n" +
            "It allows you to trace how a change ripples its way through the system.\n" +
            "It is important for two main reasons:\n" +
            "1. To analyze the reasons for proposed changes — knowing the source and rationale of a requirement helps decide whether a change is necessary and whether it is desirable.\n" +
            "2. To assess the impact that changes are likely to have on other parts of the system — when a requirement changes, traceability links reveal which other requirements, design components, and tests are affected, so that the cost and risk of the change can be evaluated.\n" +
            "Traceability policies should define which relationships must be recorded (between requirements, between requirements and design, and between requirements and sources) and how these records should be maintained.",
          tags: ["Traceability", "Requirements management"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.6.1 (sidebar)",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. List the notations that can be used for writing system requirements and briefly describe each.",
          translation:
            "اذكر الطرق المستخدمة لكتابة متطلبات النظام وصف كلًا منها باختصار.",
          answer:
            "According to Figure 4.11, the possible notations for writing system requirements are:\n" +
            "1. Natural language sentences — the requirements are written using numbered sentences in natural language. Each sentence should express one requirement.\n" +
            "2. Structured natural language — the requirements are written in natural language on a standard form or template. Each field provides information about an aspect of the requirement.\n" +
            "3. Graphical notations — graphical models, supplemented by text annotations, are used to define the functional requirements for the system. UML use case and sequence diagrams are commonly used.\n" +
            "4. Mathematical specifications — these notations are based on mathematical concepts such as finite-state machines or sets. Although they are unambiguous, most customers do not understand a formal specification and cannot check that it represents what they want, so they are reluctant to accept it as a system contract.\n" +
            "Despite these alternatives, natural language remains the most widely used way of specifying system and software requirements.",
          tags: ["Notations", "System requirements"],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.4 (Figure 4.11)",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. List and briefly describe the three requirements validation techniques mentioned in the lecture.",
          translation:
            "اذكر واشرح باختصار تقنيات التحقق الثلاث المذكورة في المحاضرة.",
          answer:
            "A number of requirements validation techniques can be used individually or in conjunction with one another:\n" +
            "1. Requirements reviews — the requirements are analyzed systematically by a team of reviewers who check for errors and inconsistencies.\n" +
            "2. Prototyping — this involves developing an executable model of a system and using this with end-users and customers to see if it meets their needs and expectations. Stakeholders experiment with the system and feed back requirements changes to the development team.\n" +
            "3. Test-case generation — requirements should be testable. If the tests for the requirements are devised as part of the validation process, this often reveals requirements problems. If a test is difficult or impossible to design, this usually means that the requirements will be difficult to implement and should be reconsidered. Developing tests from the user requirements before any code is written is an integral part of test-driven development.",
          tags: [
            "Requirements validation",
            "Reviews",
            "Prototyping",
            "Test-case generation",
          ],
          ref: "Lecture 5 (Chapter 4, Lec : 2) — Section 4.5",
          likely: "high",
        },
      ],
    },
    {
      id: "se-lecture-06",
      t: "Lecture 6 (Chapter 5) — System Modeling (Context, Interaction, Structural, Behavioral, MDE)",
      d: "نمذجة النظام — الفصول 5.1 حتى 5.4 من كتاب Sommerville: نماذج السياق، التفاعل، البنية، السلوك، وهندسة النمذجة الموجهة (MDE).",
      pdf: "datenew/subjects/software-engineering/lectures/lec 6/Software Engineering, 10th GLOBAL Edition - Chapter 5 - System modeling.pdf.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/Lecture-06-Questions.pdf",
      // المحاضرة: Lecture 6 (Chapter 5) — System Modeling (Sommerville Ch.5) — موضوعها: نماذج السياق، التفاعل، البنية، والسلوك، UML (Activity, Use Case, Sequence, Class, State diagrams)، generalization، aggregation، DFDs، statecharts، و Model-Driven Engineering (MDE).

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لمخططات UML المختلفة (Activity، Use Case، Sequence، Class، State) — مناسب لمراجعة كل أقسام المحاضرة.",
          links: [
            {
              t: "UML Use Case Diagram | شرح مخطط الاستخدام بالعربي",
              d: "شرح عربي لمخطط حالات الاستخدام (Use Case Diagram): الممثلون (actors)، التفاعلات، والعلاقات. مناسب لفهم القسم 5.2.1 من المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة",
                  url: "https://www.youtube.com/watch?v=nF18GZmTiYQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: UML Activity Diagram بالعربي",
              d: "صفحة بحث يوتيوب لفيديوهات عربية تشرح مخططات النشاط (Activity Diagrams): البداية، النهاية، الأنشطة، الـ fork/join bars، والـ guards. مناسب لفهم القسم 5.1. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=UML+activity+diagram+شرح+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: UML Class Diagram بالعربي",
              d: "صفحة بحث يوتيوب لفيديوهات عربية تشرح مخططات الفئات (Class Diagrams): الـ attributes، operations، multiplicities، generalization، و aggregation. مناسب لفهم القسم 5.3. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=UML+class+diagram+شرح+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: State Diagram بالعربي",
              d: "صفحة بحث يوتيوب لفيديوهات عربية تشرح مخططات الحالة (State Diagrams): الحالات، الانتقالات، الـ stimuli، والـ superstate. مناسب لفهم القسم 5.4.2. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=UML+state+diagram+شرح+بالعربي",
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
            "فيديوهات بالإنجليزي تشرح مخططات UML وأنواعها المختلفة. ملاحظة: كلها روابط بحث يوتيوب لأنه يصعب التحقق من فيديو محدد.",
          links: [
            {
              t: "🔎 بحث في يوتيوب: UML Activity Diagram Tutorial",
              d: "صفحة بحث يوتيوب لفيديوهات عالمية تشرح مخططات النشاط: start node، end node، activities، fork/join bars، guards. مناسب لفهم القسم 5.1. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=UML+activity+diagram+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: UML Sequence Diagram Tutorial",
              d: "صفحة بحث يوتيوب لفيديوهات عالمية تشرح مخططات التتابع: lifelines، messages، alt fragments، object creation. مناسب لفهم القسم 5.2.2. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=UML+sequence+diagram+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: UML Class Diagram Aggregation Generalization",
              d: "صفحة بحث يوتيوب لفيديوهات عالمية تشرح class diagrams بالتفصيل بما فيها aggregation و generalization. مناسب لفهم القسم 5.3. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=UML+class+diagram+aggregation+generalization+tutorial",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Model Driven Engineering MDE",
              d: "صفحة بحث يوتيوب لفيديوهات عالمية تشرح Model-Driven Engineering (MDE) ومفهوم توليد الكود من النماذج. مناسب لفهم القسم 5.4.3. ملاحظة: هذا رابط بحث وليس فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔎 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=model+driven+engineering+MDE+tutorial",
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
            "مقالات مرجعية موثوقة تشرح كل نوع من مخططات UML المذكورة في المحاضرة، بالإضافة إلى MDE و DFDs.",
          links: [
            {
              t: "Unified Modeling Language (UML) Diagrams — GeeksforGeeks",
              d: "مقدمة شاملة عن UML وأنواعه الـ 13 من المخططات (structural و behavioral و interaction). يشرح الـ 5 الأكثر استخدامًا: Activity، Use Case، Sequence، Class، State. مناسب لمراجعة مقدمة المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/unified-modeling-language-uml-introduction",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Activity Diagrams in UML — GeeksforGeeks",
              d: "شرح مفصّل لمخططات النشاط: start node (filled circle)، end node (filled circle inside circle)، activities (rounded rectangles)، guards، fork/join bars (solid bars). مناسب لفهم القسم 5.1.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/unified-modeling-language-uml-activity-diagrams",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "State Machine Diagrams in UML — GeeksforGeeks",
              d: "شرح كامل لمخططات الحالة (State Machine Diagrams): states (rounded rectangles)، transitions (labeled arrows)، initial state، final state، composite states (شبيهة بالـ superstate). مناسب لفهم القسم 5.4.2.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/unified-modeling-language-uml-state-diagrams",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "UML 2 Sequence Diagram Tutorial — Sparx Systems",
              d: "دليل رسمي لـ Sparx Systems يشرح مخططات التتابع بالتفصيل: lifelines، messages (synchronous/asynchronous)، execution occurrence، combined fragments (alt, opt, loop, par). مناسب لفهم القسم 5.2.2.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://sparxsystems.com/resources/tutorials/uml2/sequence-diagram.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "UML 2 State Machine Diagram Tutorial — Sparx Systems",
              d: "دليل رسمي يشرح UML State Machine Diagrams: state notation، initial/final states، transitions مع triggers و guards و effects، compound states و sub-machine diagrams. مناسب لفهم القسم 5.4.2.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://sparxsystems.com/resources/tutorials/uml2/state-diagram.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "UML Association vs Aggregation vs Composition — Visual Paradigm",
              d: "مقال ممتاز يفرّق بين association و aggregation و composition في class diagrams. يشرح أن aggregation تعني part-of relationship مع إمكانية وجود الـ parts بشكل مستقل. مناسب لفهم القسم 5.3.3.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "What is DFD (Data Flow Diagram) — GeeksforGeeks",
              d: "شرح مفصّل لـ Data Flow Diagrams: processes، data stores، data flows. يشرح الـ levels المختلفة (0، 1، 2) والفرق بين logical و physical DFDs. مناسب لفهم القسم 5.4.1.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/software-engineering/what-is-dfddata-flow-diagram",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Model-Driven Engineering — Wikipedia",
              d: "مقال موسوعي عن MDE: تعريفها، تاريخها، علاقتها بـ OMG's Model-Driven Architecture (MDA)، الفوائد، والأدوات المستخدمة. مناسب لفهم القسم 5.4.3.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://en.wikipedia.org/wiki/Model-driven_engineering",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Unified Modeling Language — Wikipedia",
              d: "مقال موسوعي عن UML: تاريخه (UML 2 finalized in 2004)، تصنيف الـ 13/14 diagram type إلى structure و behavior و interaction diagrams، واستخداماته في مجالات متعددة. مناسب لمراجعة الخلفية العامة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://en.wikipedia.org/wiki/Unified_Modeling_Language",
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
            "أدوات عملية لرسم كل أنواع مخططات UML المذكورة في المحاضرة (Activity، Use Case، Sequence، Class، State).",
          links: [
            {
              t: "Visual Paradigm Online — أداة UML شاملة مجانية",
              d: "أداة أونلاين مجانية لرسم كل أنواع مخططات UML: Activity، Use Case، Sequence، Class، State diagrams. بمحرر drag-and-drop وقوالب جاهزة وتصدير بصيغ متعددة (PNG, JPG, SVG, PDF). مناسب للتدريب العملي على كل أنواع المخططات في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://online.visual-paradigm.com/diagrams/features/use-case-diagram-software",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Lucidchart — UML Diagram Tool",
              d: "أداة شائعة لرسم كل أنواع مخططات UML مع شرح للرموز (actors كـ stick figures، use cases كـ ovals، system boundaries). تدعم التعاون الفوري والتصدير بصيغ متعددة. مناسب للتدريب على use case و sequence diagrams.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://lucid.co/diagram/uml/use-case-diagram-tutorial",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Sparx Systems Enterprise Architect",
              d: "أداة احترافية لتطوير النظم بناءً على UML و MDE. تدعم كل أنواع المخططات وتوليد الكود من النماذج (Model-Driven Engineering). مناسبة لفهم كيف تتحول الـ models إلى implementation كما في القسم 5.4.3.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://sparxsystems.com/resources/tutorials/uml2/sequence-diagram.html",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ============ MCQ — likely: high ============
        {
          q: "1. What is system modeling?",
          options: [
            "The process of developing abstract models of a system, with each model presenting a different view or perspective of that system.",
            "The process of writing detailed source code for a system before testing it.",
            "The process of deploying a system in a production environment.",
            "The process of gathering requirements from stakeholders using interviews.",
          ],
          correct: 0,
          translation: "ما هي نمذجة النظام (System modeling)؟",
          explanation:
            'الإجابة الصحيحة هي الأولى لأن المحاضرة تنص صراحة: "System modeling is the process of developing abstract models of a system, with each model presenting a different view or perspective of that system." الخيارات الأخرى تصف عمليات مختلفة: كتابة الكود، النشر، وجمع المتطلبات.',
          tags: ["System modeling", "Definitions"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "2. According to the lecture, system modeling now usually means representing a system using:",
          options: [
            "Mathematical equations only.",
            "Graphical notation based on diagram types in the Unified Modeling Language (UML).",
            "Pseudocode written in natural language.",
            "Binary machine code.",
          ],
          correct: 1,
          translation:
            "وفقًا للمحاضرة، نمذجة النظام تعني الآن عادةً تمثيل النظام باستخدام:",
          explanation:
            'المحاضرة تقول: "System modeling now usually means representing a system using some kind of graphical notation based on diagram types in the Unified Modeling Language (UML)." النماذج الرياضية تُستخدم كمواصفات تفصيلية رسمية وتُناقش في الفصل 10.',
          tags: ["System modeling", "UML"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "3. A model that maintains all the information about the entity being represented is called:",
          options: [
            "An abstraction.",
            "A representation.",
            "A generalization.",
            "An aggregation.",
          ],
          correct: 1,
          translation:
            "النموذج الذي يحتفظ بكل المعلومات عن الكيان المُمثَّل يسمى:",
          explanation:
            'المحاضرة تفرّق بين representation و abstraction: "A representation of a system should maintain all the information about the entity being represented. An abstraction deliberately simplifies a system design and picks out the most salient characteristics."',
          tags: ["Abstraction", "Representation", "Definitions"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "4. A model that deliberately simplifies a system design and picks out the most salient characteristics is called:",
          options: [
            "A representation.",
            "An abstraction.",
            "A generalization.",
            "An aggregation.",
          ],
          correct: 1,
          translation:
            "النموذج الذي يبسّط عمدًا تصميم النظام ويختار أبرز الخصائص يسمى:",
          explanation:
            "Abstraction هو تبسيط متعمد يختار أبرز الخصائص. مثال المحاضرة: شرائح PowerPoint هي abstraction للنقاط الرئيسية للكتاب، أما ترجمة الكتاب من الإنجليزية للإيطالية فهي representation بديلة.",
          tags: ["Abstraction", "Representation", "Definitions"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "5. Which perspective models the context or environment of the system?",
          options: [
            "External perspective.",
            "Interaction perspective.",
            "Structural perspective.",
            "Behavioral perspective.",
          ],
          correct: 0,
          translation: "أي منظور ينمذج السياق أو البيئة المحيطة بالنظام؟",
          explanation:
            "المنظور الخارجي (external) ينمذج السياق والبيئة. الـ interaction ينمذج التفاعلات، الـ structural ينمذج تنظيم النظام أو بيانات المعالجة، والـ behavioral ينمذج السلوك الديناميكي.",
          tags: ["Perspectives", "Context models"],
          ref: "Lecture 6 — Section 5 (Perspectives)",
          likely: "high",
        },
        {
          q: "6. Which perspective models the dynamic behavior of the system and how it responds to events?",
          options: [
            "External perspective.",
            "Interaction perspective.",
            "Structural perspective.",
            "Behavioral perspective.",
          ],
          correct: 3,
          translation:
            "أي منظور ينمذج السلوك الديناميكي للنظام وكيف يستجيب للأحداث؟",
          explanation:
            "المنظور السلوكي (behavioral) ينمذج السلوك الديناميكي واستجابة النظام للأحداث. الـ structural ينمذج تنظيم النظام أو بنية البيانات، والـ external ينمذج البيئة.",
          tags: ["Perspectives", "Behavioral models"],
          ref: "Lecture 6 — Section 5 (Perspectives)",
          likely: "high",
        },
        {
          q: "7. According to the survey by Erickson and Siau (2007), how many UML diagram types could represent the essentials of a system according to most users?",
          options: [
            "3 diagram types.",
            "5 diagram types.",
            "8 diagram types.",
            "All 13 diagram types.",
          ],
          correct: 1,
          translation:
            "وفقًا لاستطلاع Erickson و Siau (2007)، كم نوع من مخططات UML يمكنها تمثيل أساسيات النظام وفقًا لمعظم المستخدمين؟",
          explanation:
            'المحاضرة تقول: "A survey (Erickson and Siau 2007) showed that most users of the UML thought that five diagram types could represent the essentials of a system." وهذه الخمسة هي: Activity, Use case, Sequence, Class, State.',
          tags: ["UML", "Survey", "Diagrams"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "8. Which of the following is NOT one of the five UML diagram types that the lecture focuses on?",
          options: [
            "Activity diagrams.",
            "Use case diagrams.",
            "Sequence diagrams.",
            "Component diagrams.",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس من مخططات UML الخمسة التي تركز عليها المحاضرة؟",
          explanation:
            "المحاضرة تركز على 5 أنواع: Activity، Use case، Sequence، Class، State. الـ Component diagrams تُستخدم للنمذجة المعمارية وتُناقش في فصول أخرى (6 و 17).",
          tags: ["UML", "Diagrams"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "9. In UML activity diagrams, the start of a process is indicated by:",
          options: [
            "A filled circle inside another circle.",
            "A filled circle.",
            "A diamond shape.",
            "A rectangle with rounded corners.",
          ],
          correct: 1,
          translation: "في مخططات النشاط UML، بداية العملية تُشار إليها بـ:",
          explanation:
            "The start of a process is indicated by a filled circle. أما النهاية فتُشار إليها بـ filled circle inside another circle. الـ rounded rectangles تمثل الأنشطة، والـ solid bars تمثل coordination.",
          tags: ["Activity diagrams", "Notation"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          q: "10. In UML activity diagrams, the end of a process is indicated by:",
          options: [
            "A filled circle.",
            "A filled circle inside another circle.",
            "A solid bar.",
            "A diamond shape.",
          ],
          correct: 1,
          translation: "في مخططات النشاط UML، نهاية العملية تُشار إليها بـ:",
          explanation:
            "النهاية هي filled circle inside another circle. البداية هي filled circle فقط. هذا تمييز أساسي في notation.",
          tags: ["Activity diagrams", "Notation"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          q: "11. In UML activity diagrams, activities (specific subprocesses) are represented as:",
          options: [
            "Filled circles.",
            "Rectangles with rounded corners.",
            "Diamonds.",
            "Stick figures.",
          ],
          correct: 1,
          translation:
            "في مخططات النشاط UML، الأنشطة (العمليات الفرعية المحددة) تُمثَّل على شكل:",
          explanation:
            "Rectangles with round corners represent activities. الـ filled circle للبداية، والـ solid bar للـ coordination بين الأنشطة المتوازية.",
          tags: ["Activity diagrams", "Notation"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          q: "12. In UML activity diagrams, a solid bar indicates:",
          options: [
            "The start of a process.",
            "The end of a process.",
            "Activity coordination.",
            "An alternative condition.",
          ],
          correct: 2,
          translation:
            "في مخططات النشاط UML، الشريط الصلب (solid bar) يشير إلى:",
          explanation:
            "A solid bar indicates activity coordination. عندما يتدفق نشاط واحد أو أكثر إلى solid bar، يجب اكتمالهم جميعًا قبل المتابعة. وعندما يتدفق من solid bar إلى عدة أنشطة، تُنفّذ بالتوازي. هذا هو fork/join.",
          tags: ["Activity diagrams", "Notation", "Fork/Join"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          q: "13. In UML activity diagrams, conditions that specify when a flow is followed are called:",
          options: [
            "Guards (in square brackets).",
            "Stereotypes (in chevrons).",
            "Lifelines (dotted lines).",
            "Multiplicities.",
          ],
          correct: 0,
          translation:
            "في مخططات النشاط UML، الشروط التي تحدد متى يُتَّبع مسار تدفق معين تسمى:",
          explanation:
            "Arrows may be annotated with guards (in square brackets) that specify when that flow is followed. مثال من المحاضرة: [dangerous] و [not dangerous] لتحديد مسار المريض الخطر.",
          tags: ["Activity diagrams", "Guards", "Notation"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          q: "14. In UML, the type of entity shown between chevrons (e.g., «system») is called a:",
          options: ["Guard.", "Stereotype.", "Lifeline.", "Multiplicity."],
          correct: 1,
          translation:
            "في UML، نوع الكيان المُشار إليه بين قوسين زاويّين (مثل «system») يسمى:",
          explanation:
            "Stereotype هي ميزة في UML حيث يُعرض نوع الكيان بين chevrons. في الشكل 5.2 استخدم المؤلف «system» لتمييز الأنظمة الفرعية المنفصلة داخل العملية.",
          tags: ["UML", "Stereotype", "Notation"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          q: "15. Use case modeling was originally developed by:",
          options: [
            "Ivar Jacobsen in the 1990s.",
            "Grady Booch in the 1980s.",
            "James Rumbaugh in the 1970s.",
            "David Harel in 1987.",
          ],
          correct: 0,
          translation: "نمذجة حالات الاستخدام طوّرها أصليًا:",
          explanation:
            "Use case modeling was originally developed by Ivar Jacobsen in the 1990s (Jacobsen et al. 1993). David Harel طوّر Statecharts في 1987، أما Booch و Rumbaugh فطوّرا notations أخرى في object-oriented modeling دمجت لاحقًا في UML.",
          tags: ["Use case", "Jacobsen", "History"],
          ref: "Lecture 6 — Section 5.2.1",
          likely: "high",
        },
        {
          q: "16. In a use case diagram, actors are represented as:",
          options: [
            "Named ellipses.",
            "Stick figures.",
            "Rectangles with rounded corners.",
            "Diamonds.",
          ],
          correct: 1,
          translation:
            "في مخطط حالات الاستخدام، الممثلون (actors) يُمثَّلون على شكل:",
          explanation:
            "The actors involved in the use case represented as stick figures. الـ use cases نفسها تُمثَّل كـ ellipses. الـ stick figure كان أصلًا للتفاعل البشري لكنه يُستخدم أيضًا للأنظمة الخارجية والـ hardware.",
          tags: ["Use case", "Actors", "Notation"],
          ref: "Lecture 6 — Section 5.2.1",
          likely: "high",
        },
        {
          q: "17. In a use case diagram, a use case is shown as:",
          options: [
            "A stick figure.",
            "An ellipse.",
            "A rectangle.",
            "A diamond.",
          ],
          correct: 1,
          translation: "في مخطط حالات الاستخدام، حالة الاستخدام تُعرض على شكل:",
          explanation:
            "In its simplest form, a use case is shown as an ellipse. الـ actors يكونوا stick figures. هذا هو الـ notation الأساسي لـ use case diagrams.",
          tags: ["Use case", "Notation"],
          ref: "Lecture 6 — Section 5.2.1",
          likely: "high",
        },
        {
          q: "18. In a UML sequence diagram, the time that an object instance is involved in the computation is called its:",
          options: ["Lifeline.", "Activation bar.", "Stereotype.", "Guard."],
          correct: 0,
          translation:
            "في مخطط التتابع UML، الفترة الزمنية التي يكون فيها كائن متورطًا في الحساب تسمى:",
          explanation:
            "The rectangle on the dotted lines indicates the lifeline of the object concerned (i.e., the time that object instance is involved in the computation). تُقرأ التفاعلات من أعلى لأسفل.",
          tags: ["Sequence diagrams", "Lifeline", "Notation"],
          ref: "Lecture 6 — Section 5.2.2",
          likely: "high",
        },
        {
          q: '19. In a UML sequence diagram, a box named "alt" is used to denote:',
          options: [
            "A loop that iterates over a sequence.",
            "Alternatives (one of several interaction options will be executed).",
            "Parallel execution of multiple sequences.",
            "A reference to another sequence diagram.",
          ],
          correct: 1,
          translation:
            'في مخطط التتابع UML، الصندوق المسمى "alt" يُستخدم للإشارة إلى:',
          explanation:
            "A box named alt is used with the conditions indicated in square brackets, with alternative interaction options separated by a dotted line. هذا يعرض if-then-else: أحد الخيارات يُنفَّذ بناءً على الشرط.",
          tags: ["Sequence diagrams", "alt", "Notation"],
          ref: "Lecture 6 — Section 5.2.2",
          likely: "high",
        },
        {
          q: "20. In a sequence diagram, you read the sequence of interactions:",
          options: [
            "From bottom to top.",
            "From top to bottom.",
            "From left to right only.",
            "In any order.",
          ],
          correct: 1,
          translation: "في مخطط التتابع، تُقرأ تسلسل التفاعلات:",
          explanation:
            "You read the sequence of interactions from top to bottom. الزمن يمر من أعلى لأسفل على الـ lifelines.",
          tags: ["Sequence diagrams", "Reading order"],
          ref: "Lecture 6 — Section 5.2.2",
          likely: "high",
        },
        {
          q: "21. In a UML class diagram, the multiplicities 1..4 mean:",
          options: [
            "An indefinite number of objects are involved.",
            "An exact number of 1 to 4 objects are involved in the association.",
            "Exactly one object is involved.",
            "Zero or one object is involved.",
          ],
          correct: 1,
          translation:
            "في مخطط الفئات UML، الـ multiplicity المكتوبة 1..4 تعني:",
          explanation:
            "You can define that an exact number of objects are involved (e.g., 1..4). أما النجمة (*) فتعني عدد غير محدد، و 1 تعني كائن واحد بالضبط، و 1..* تعني واحد أو أكثر.",
          tags: ["Class diagrams", "Multiplicities"],
          ref: "Lecture 6 — Section 5.3.1",
          likely: "high",
        },
        {
          q: '22. In a UML class diagram, the multiplicity "*" means:',
          options: [
            "Exactly one object.",
            "Zero or one object.",
            "An indefinite number of objects.",
            "Exactly four objects.",
          ],
          correct: 2,
          translation:
            'في مخطط الفئات UML، الـ multiplicity المكتوبة "*" تعني:',
          explanation:
            "By using a *, indicate that there are an indefinite number of objects involved in the association. هذا مناسب للعلاقات واحد-إلى-كثير.",
          tags: ["Class diagrams", "Multiplicities"],
          ref: "Lecture 6 — Section 5.3.1",
          likely: "high",
        },
        {
          q: "23. In a UML class diagram, the three sections of a class rectangle (from top to bottom) are:",
          options: [
            "Attributes, operations, class name.",
            "Class name, attributes, operations.",
            "Operations, class name, attributes.",
            "Class name, operations, attributes.",
          ],
          correct: 1,
          translation:
            "في مخطط الفئات UML، الأقسام الثلاثة لمستطيل الفئة (من أعلى لأسفل) هي:",
          explanation:
            "الترتيب: (1) اسم الفئة في الأعلى، (2) الـ attributes في الوسط، (3) الـ operations في الأسفل. مثال Consultation في الشكل 5.10 يتبع هذا الترتيب.",
          tags: ["Class diagrams", "Notation", "Attributes", "Operations"],
          ref: "Lecture 6 — Section 5.3.1 (Figure 5.10)",
          likely: "high",
        },
        {
          q: "24. In UML, generalization is shown as:",
          options: [
            "A diamond shape next to the whole.",
            "An arrowhead pointing up to the more general class.",
            "A filled circle inside another circle.",
            "A solid bar.",
          ],
          correct: 1,
          translation: "في UML، التعميم (generalization) يُعرض كـ:",
          explanation:
            "The generalization is shown as an arrowhead pointing up to the more general class. هذا يدل على أن الفئات الفرعية ترث خصائص وعمليات الفئة الأعلى. أما الـ diamond shape فيُستخدم للـ aggregation.",
          tags: ["Generalization", "Notation", "Class diagrams"],
          ref: "Lecture 6 — Section 5.3.2",
          likely: "high",
        },
        {
          q: "25. In UML, aggregation is indicated by:",
          options: [
            "An arrowhead pointing up.",
            "A diamond shape added to the link next to the class that represents the whole.",
            "A filled circle.",
            "A solid bar.",
          ],
          correct: 1,
          translation: "في UML، التجميع (aggregation) يُشار إليه بـ:",
          explanation:
            "To define aggregation, a diamond shape is added to the link next to the class that represents the whole. مثال الشكل 5.13: Patient record هو aggregate من Patient وعدد غير محدد من Consultations.",
          tags: ["Aggregation", "Notation", "Class diagrams"],
          ref: "Lecture 6 — Section 5.3.3",
          likely: "high",
        },
        {
          q: "26. In a generalization hierarchy, lower-level classes are called:",
          options: [
            "Superclasses that inherit from subclasses.",
            "Subclasses that inherit the attributes and operations from their superclasses.",
            "Aggregates of the higher-level classes.",
            "Independent classes with no relationship.",
          ],
          correct: 1,
          translation: "في هرم التعميم، الفئات الأدنى تسمى:",
          explanation:
            "The lower-level classes are subclasses that inherit the attributes and operations from their superclasses. ثم تضيف خصائص وعمليات أكثر تحديدًا. مثال: Trainee Doctor و Registered Doctor يرثان من Hospital Doctor.",
          tags: ["Generalization", "Inheritance", "Subclasses"],
          ref: "Lecture 6 — Section 5.3.2",
          likely: "high",
        },
        {
          q: "27. Behavioral models show what happens when a system responds to a stimulus from its environment. The two types of stimuli are:",
          options: [
            "Data and events.",
            "Actors and use cases.",
            "Classes and associations.",
            "States and transitions.",
          ],
          correct: 0,
          translation:
            "النماذج السلوكية تُظهر ما يحدث عندما يستجيب النظام لمُحفّز من بيئته. النوعان من المُحفّزات هما:",
          explanation:
            "Stimuli may be either data or events: (1) Data becomes available that has to be processed; (2) An event happens that triggers system processing. الـ business systems غالبًا data-driven، والـ real-time systems غالبًا event-driven.",
          tags: ["Behavioral models", "Stimuli", "Data vs Events"],
          ref: "Lecture 6 — Section 5.4",
          likely: "high",
        },
        {
          q: "28. According to the lecture, real-time systems are usually:",
          options: [
            "Data-driven with limited event processing.",
            "Event-driven with limited data processing.",
            "Both data-driven and event-driven equally.",
            "Neither data-driven nor event-driven.",
          ],
          correct: 1,
          translation: "وفقًا للمحاضرة، أنظمة الـ real-time عادةً تكون:",
          explanation:
            'Real-time systems are usually event-driven, with limited data processing. مثال: نظام تبديل الهاتف يستجيب لأحداث مثل "handset activated". أما الـ business systems فهي data-driven مثل نظام فواتير الهاتف.',
          tags: ["Behavioral models", "Real-time systems", "Event-driven"],
          ref: "Lecture 6 — Section 5.4",
          likely: "high",
        },
        {
          q: "29. Data-flow diagrams (DFDs) were used in the 1970s as part of:",
          options: [
            "Agile development methods.",
            "Structured design methods.",
            "Object-oriented design methods.",
            "Model-driven engineering.",
          ],
          correct: 1,
          translation:
            "مخططات تدفق البيانات (DFDs) استُخدمت في السبعينيات كجزء من:",
          explanation:
            "In the 1970s, structured design methods used data-flow diagrams (DFDs) as a way to illustrate the processing steps in a system. الـ DFDs بسيطة وبديهية ويمكن شرحها للمستخدمين للمشاركة في التحقق.",
          tags: ["DFD", "Structured design", "History"],
          ref: "Lecture 6 — Section 5.4.1 (sidebar)",
          likely: "high",
        },
        {
          q: "30. In the UML, DFDs can be represented using:",
          options: [
            "Class diagrams.",
            "Activity diagrams.",
            "State diagrams.",
            "Use case diagrams.",
          ],
          correct: 1,
          translation: "في UML، يمكن تمثيل الـ DFDs باستخدام:",
          explanation:
            "Data-flow diagrams can be represented in the UML using the activity diagram type. الـ activities (rounded rectangles) تمثل خطوات المعالجة، والـ objects (rectangles) تمثل البيانات المتدفقة.",
          tags: ["DFD", "Activity diagrams", "UML"],
          ref: "Lecture 6 — Section 5.4.1",
          likely: "high",
        },
        {
          q: "31. Event-driven modeling is based on the assumption that:",
          options: [
            "A system has a finite number of states and events may cause transitions between them.",
            "A system has an infinite number of states.",
            "All systems are data-driven.",
            "Events never carry associated data.",
          ],
          correct: 0,
          translation: "النمذجة الموجهة بالأحداث مبنية على افتراض أن:",
          explanation:
            'Event-driven modeling is based on the assumption that a system has a finite number of states and that events (stimuli) may cause a transition from one state to another. مثال: نظام التحكم بصمام ينتقل من "Valve open" إلى "Valve closed" عند استلام أمر المشغّل.',
          tags: ["Event-driven modeling", "State diagrams"],
          ref: "Lecture 6 — Section 5.4.2",
          likely: "high",
        },
        {
          q: "32. UML state diagrams are based on:",
          options: [
            "Activity diagrams by Jacobsen (1993).",
            "Statecharts by Harel (1987).",
            "Class diagrams by Booch (2005).",
            "Sequence diagrams by Rumbaugh (2004).",
          ],
          correct: 1,
          translation: "مخططات الحالة في UML مبنية على:",
          explanation:
            "The UML supports event-based modeling using state diagrams, which are based on Statecharts (Harel 1987). Harel طوّر Statecharts كنمذجة formal للأنظمة reactive.",
          tags: ["State diagrams", "Statecharts", "Harel"],
          ref: "Lecture 6 — Section 5.4.2",
          likely: "high",
        },
        {
          q: "33. In UML state diagrams, system states are represented as:",
          options: [
            "Filled circles.",
            "Rounded rectangles.",
            "Diamonds.",
            "Stick figures.",
          ],
          correct: 1,
          translation: "في مخططات الحالة UML، حالات النظام تُمثَّل على شكل:",
          explanation:
            'Rounded rectangles represent system states. قد تتضمن وصفًا مختصرًا (بعد "do") للإجراءات. الأسهم المُعنونة تمثل المُحفّزات التي تفرض الانتقال من حالة لأخرى.',
          tags: ["State diagrams", "Notation", "States"],
          ref: "Lecture 6 — Section 5.4.2",
          likely: "high",
        },
        {
          q: "34. In UML state diagrams, the labeled arrows represent:",
          options: [
            "Activities in a process.",
            "Stimuli that force a transition from one state to another.",
            "Data stores.",
            "Lifelines of objects.",
          ],
          correct: 1,
          translation: "في مخططات الحالة UML، الأسهم المُعنونة تمثل:",
          explanation:
            'The labeled arrows represent stimuli that force a transition from one state to another. مثال: "Door open" يحفّز الانتقال من Operation إلى Disabled في نموذج فرن الميكروويف.',
          tags: ["State diagrams", "Transitions", "Stimuli"],
          ref: "Lecture 6 — Section 5.4.2",
          likely: "high",
        },
        {
          q: '35. A "superstate" in UML state diagrams is used to:',
          options: [
            "Increase the number of possible states.",
            "Encapsulate a number of separate states to hide detail in large models.",
            "Represent the initial state of the system.",
            "Indicate the end of all state transitions.",
          ],
          correct: 1,
          translation: 'الـ "superstate" في مخططات الحالة UML يُستخدم لـ:',
          explanation:
            'A superstate encapsulates a number of separate states. تظهر كحالة واحدة على الموديل العالي المستوى ثم تُفصَّل في diagram منفصل. مثال: حالة "Operation" في فرن الميكروويف تُفصَّل في الشكل 5.17 لتشمل Checking و Alarm و Cook.',
          tags: ["State diagrams", "Superstate", "Notation"],
          ref: "Lecture 6 — Section 5.4.2",
          likely: "high",
        },
        {
          q: "36. Model-driven engineering (MDE) is an approach to software development whereby:",
          options: [
            "Programs rather than models are the principal outputs of the development process.",
            "Models rather than programs are the principal outputs of the development process.",
            "Source code is written manually without any models.",
            "Testing is the principal output of the development process.",
          ],
          correct: 1,
          translation:
            "هندسة النمذجة الموجهة (MDE) هي منهجية تطوير برمجيات حيث:",
          explanation:
            "Model-driven engineering (MDE) is an approach to software development whereby models rather than programs are the principal outputs of the development process. النماذج تُستخدم لتوليد implementation كامل أو جزئي للنظام.",
          tags: ["MDE", "Definitions"],
          ref: "Lecture 6 — Section 5.4.3",
          likely: "high",
        },
        {
          q: "37. According to the lecture, models of the existing system are used during requirements engineering to:",
          options: [
            "Generate the source code directly.",
            "Clarify what the existing system does and focus stakeholder discussion on its strengths and weaknesses.",
            "Replace the existing system without analysis.",
            "Document the new system after implementation.",
          ],
          correct: 1,
          translation:
            "وفقًا للمحاضرة، نماذج النظام الموجود تُستخدم أثناء هندسة المتطلبات لـ:",
          explanation:
            "Models of the existing system are used during requirements engineering. They help clarify what the existing system does, and they can be used to focus a stakeholder discussion on its strengths and weaknesses. أما نماذج النظام الجديد فتشرح المتطلبات المقترحة.",
          tags: ["Models", "Existing system", "Requirements engineering"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "38. The three ways graphical models are commonly used are:",
          options: [
            "Stimulate discussion, document an existing system, detailed system description for code generation.",
            "Stimulate discussion, generate tests, deploy the system.",
            "Document, test, and maintain the system.",
            "Gather requirements, design, and implement the system.",
          ],
          correct: 0,
          translation: "الطرق الثلاث الشائعة لاستخدام النماذج الرسومية هي:",
          explanation:
            "الطرق الثلاث: (1) stimulate and focus discussion about an existing or proposed system (مثل agile modeling)، (2) document an existing system (يجب أن تكون صحيحة)، (3) detailed system description used to generate a system implementation (يجب أن تكون complete و correct).",
          tags: ["Models", "Usage", "Comparison"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          q: "39. According to the lecture, the survey showed that most UML users thought the essentials of a system could be represented by how many diagram types?",
          options: [
            "3 diagram types.",
            "5 diagram types.",
            "10 diagram types.",
            "All 13 diagram types.",
          ],
          correct: 1,
          translation:
            "وفقًا للمحاضرة، أظهر الاستطلاع أن معظم مستخدمي UML يعتقدون أن أساسيات النظام يمكن تمثيلها بكم نوع من المخططات؟",
          explanation:
            "A survey (Erickson and Siau 2007) showed that most users of the UML thought that five diagram types could represent the essentials of a system. هذه الخمسة هي: Activity, Use case, Sequence, Class, State diagrams.",
          tags: ["UML", "Survey", "Diagrams"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },

        // ============ MCQ — likely: medium ============
        {
          q: "40. The Mentcare system context model in Figure 5.1 shows that the system is connected to all of the following EXCEPT:",
          options: [
            "An appointments system.",
            "A patient record system.",
            "A library management system.",
            "A prescription system.",
          ],
          correct: 2,
          translation:
            "نموذج سياق نظام Mentcare في الشكل 5.1 يُظهر أن النظام متصل بكل ما يلي ما عدا:",
          explanation:
            "الأنظمة المذكورة في الشكل 5.1: Patient record system، Appointments system، Admissions system، Management reporting system، Prescription system، HC statistics system. نظام إدارة المكتبة ليس له علاقة بنظام رعاية الصحة العقلية.",
          tags: ["Context models", "Mentcare", "Figure 5.1"],
          ref: "Lecture 6 — Section 5.1 (Figure 5.1)",
          likely: "medium",
        },

        // ============ ESSAY — likely: high ============
        {
          type: "essay",
          q: "1. Define system modeling and explain the difference between an abstraction and a representation of a system.",
          translation:
            "عرّف نمذجة النظام واشرح الفرق بين الـ abstraction والـ representation للنظام.",
          answer:
            "System modeling is the process of developing abstract models of a system, with each model presenting a different view or perspective of that system.\n" +
            "System modeling now usually means representing a system using some kind of graphical notation based on diagram types in the Unified Modeling Language (UML).\n" +
            "The difference between abstraction and representation:\n" +
            "A representation of a system should maintain all the information about the entity being represented. For example, if a book is translated from English into Italian, this would be an alternative representation because the translator maintains all the information.\n" +
            "An abstraction deliberately simplifies a system design and picks out the most salient characteristics. For example, the PowerPoint slides that accompany a book are an abstraction of the book's key points.\n" +
            "A system model is therefore an abstraction of the system being studied rather than an alternative representation of that system.",
          tags: ["System modeling", "Abstraction", "Representation"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. List and explain the four fundamental system modeling perspectives.",
          translation: "اذكر واشرح المناظير الأربعة الأساسية لنمذجة النظام.",
          answer:
            "You may develop different models to represent the system from different perspectives:\n" +
            "1. An external perspective, where you model the context or environment of the system. This is implemented using context models and activity diagrams.\n" +
            "2. An interaction perspective, where you model the interactions between a system and its environment, or between the components of a system. This is implemented using use case diagrams and sequence diagrams.\n" +
            "3. A structural perspective, where you model the organization of a system or the structure of the data processed by the system. This is implemented using class diagrams, including generalization and aggregation.\n" +
            "4. A behavioral perspective, where you model the dynamic behavior of the system and how it responds to events. This is implemented using activity diagrams (data-driven) and state diagrams (event-driven).",
          tags: [
            "Perspectives",
            "Context",
            "Interaction",
            "Structural",
            "Behavioral",
          ],
          ref: "Lecture 6 — Section 5 (Perspectives)",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain the three ways in which graphical models are commonly used during software development.",
          translation:
            "اشرح الطرق الثلاث التي تُستخدم بها النماذج الرسومية أثناء تطوير البرمجيات.",
          answer:
            "There are three ways in which graphical models are commonly used:\n" +
            "1. As a way to stimulate and focus discussion about an existing or proposed system. The purpose of the model is to stimulate and focus discussion among the software engineers involved in developing the system. The models may be incomplete (as long as they cover the key points of the discussion), and they may use the modeling notation informally. This is how models are normally used in agile modeling.\n" +
            "2. As a way of documenting an existing system. When models are used as documentation, they do not have to be complete, as you may only need to use models to document some parts of a system. However, these models have to be correct — they should use the notation correctly and be an accurate description of the system.\n" +
            "3. As a detailed system description that can be used to generate a system implementation. Where models are used as part of a model-based development process, the system models have to be both complete and correct. They are used as a basis for generating the source code of the system, and you therefore have to be very careful not to confuse similar symbols, such as stick and block arrowheads, that may have different meanings.",
          tags: ["Models", "Usage", "Agile modeling", "MDE"],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. What is a context model? Explain why defining the system boundary is important and how it may be influenced by non-technical factors.",
          translation:
            "ما هو نموذج السياق؟ اشرح لماذا تحديد حدود النظام مهم وكيف قد يتأثر بعوامل غير تقنية.",
          answer:
            "A context model shows the system being developed along with the other systems in its environment. Context models normally show that the environment includes several other automated systems, but they do not show the types of relationships between the systems.\n" +
            "Defining the system boundary is important because it determines what functionality should be included in the system and what processing should be carried out in the system's operational environment. These decisions should be made early in the process to limit the system costs and the time needed for understanding the system requirements and design.\n" +
            "The definition of a system boundary is not a value-free judgment. Social and organizational concerns may mean that the position of a system boundary may be determined by nontechnical factors:\n" +
            "- It may be deliberately positioned so that the complete analysis process can be carried out on one site.\n" +
            "- It may be chosen so that a particularly difficult manager need not be consulted.\n" +
            "- It may be positioned so that the system cost is increased and the system development division must therefore expand to design and implement the system.",
          tags: ["Context models", "System boundary", "Non-technical factors"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Explain the notations used in UML activity diagrams (start, end, activities, bars, guards, stereotypes).",
          translation:
            "اشرح الرموز المستخدمة في مخططات النشاط UML (البداية، النهاية، الأنشطة، الأشرطة، الـ guards، الـ stereotypes).",
          answer:
            "UML activity diagrams show the activities in a process and the flow of control from one activity to another. The notations are:\n" +
            "1. Start of a process: indicated by a filled circle.\n" +
            "2. End of a process: indicated by a filled circle inside another circle.\n" +
            "3. Activities (specific subprocesses): represented as rectangles with rounded corners.\n" +
            "4. Objects: may be included in activity charts; systems are shown using the UML stereotype feature, where the type of entity is shown between chevrons (e.g., «system»).\n" +
            "5. Arrows: represent the flow of work from one activity to another.\n" +
            "6. Solid bar: indicates activity coordination. When the flow from more than one activity leads to a solid bar, all of these activities must be complete before progress is possible. When the flow from a solid bar leads to a number of activities, these may be executed in parallel.\n" +
            "7. Guards (in square brackets): arrows may be annotated with guards that specify when that flow is followed. For example, [dangerous] and [not dangerous] in the involuntary detention process.",
          tags: ["Activity diagrams", "Notation", "Guards", "Stereotype"],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. What is a use case diagram? Describe its components and how it is documented in detail.",
          translation:
            "ما هو مخطط حالات الاستخدام؟ صف مكوناته وكيف يُوثَّق بالتفصيل.",
          answer:
            "A use case can be taken as a simple description of what a user expects from a system in that interaction. Each use case represents a discrete task that involves external interaction with a system.\n" +
            "Components of a use case diagram:\n" +
            "- Use case: shown as an ellipse, representing a discrete interaction.\n" +
            "- Actors: represented as stick figures. The notation was originally developed to cover human interaction, but it is also used to represent other external systems and hardware.\n" +
            "- Lines (or arrows): link the actors with the use cases. Formally, use case diagrams should use lines without arrows, as arrows in the UML indicate the direction of flow of messages. However, arrows may be used informally to indicate which actor initiates the transaction.\n" +
            "Use case diagrams give a simple overview of an interaction, so you need to add more detail for complete interaction description. This detail can be:\n" +
            "1. A simple textual description.\n" +
            "2. A structured description in a table (most useful, including fields like Actors, Description, Data, Stimulus, Response, Comments).\n" +
            "3. A sequence diagram (for detailed interactions).\n" +
            "Composite use case diagrams show a number of different use cases. When there are too many use cases for a single diagram, you may develop several diagrams, each showing related use cases.",
          tags: ["Use case", "Actors", "Documentation"],
          ref: "Lecture 6 — Section 5.2.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the basic notations of UML sequence diagrams (lifelines, messages, alt box).",
          translation:
            "اشرح الرموز الأساسية لمخططات التتابع UML (الـ lifelines، الرسائل، صندوق alt).",
          answer:
            "Sequence diagrams in the UML are primarily used to model the interactions between the actors and the objects in a system and the interactions between the objects themselves.\n" +
            "Basic notations:\n" +
            "1. Objects and actors: listed along the top of the diagram, with a dotted line drawn vertically from each. This dotted line is the lifeline.\n" +
            "2. Lifeline: the rectangle on the dotted lines indicates the lifeline of the object concerned (i.e., the time that object instance is involved in the computation). You read the sequence of interactions from top to bottom.\n" +
            "3. Annotated arrows: indicate interactions between objects. The annotations on the arrows indicate the calls to the objects, their parameters, and the return values.\n" +
            "4. The alt box: a choice box (denoted by 'alt' in the top-left corner) indicating that one of the contained interactions will be executed. The conditions that select the choice are shown in square brackets, and alternative interaction options are separated by a dotted line.\n" +
            "5. Object creation: an object may be created as part of a sequence of operations (e.g., creating a Summary object during data transfer).",
          tags: ["Sequence diagrams", "Lifeline", "alt", "Notation"],
          ref: "Lecture 6 — Section 5.2.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Describe the structure of a UML class diagram, including attributes, operations, and multiplicities.",
          translation:
            "صف بنية مخطط الفئات UML، بما في ذلك الـ attributes والـ operations والـ multiplicities.",
          answer:
            "Class diagrams are used when developing an object-oriented system model to show the classes in a system and the associations between these classes. An object class can be thought of as a general definition of one kind of system object. An association is a link between classes indicating that some relationship exists between these classes.\n" +
            "The simplest way of writing these diagrams is to write the class name in a box and draw a line between classes to indicate an association.\n" +
            "To define objects in more detail, you extend the simple rectangle that represents a class into three sections (from top to bottom):\n" +
            "1. The name of the object class is in the top section.\n" +
            "2. The class attributes (the object's characteristics, with optional types) are in the middle section.\n" +
            "3. The operations (called methods in Java and other OO languages) associated with the object class are in the lower section.\n" +
            "Multiplicities: class diagrams show how many objects are involved in an association:\n" +
            "- '1' means a 1:1 relationship (each end has exactly one object).\n" +
            "- An exact number of objects can be specified (e.g., 1..4).\n" +
            "- '*' indicates an indefinite number of objects.\n" +
            "- '1..*' means one or more objects.\n" +
            "For example, the (1..*) multiplicity on the relationship between Patient and Condition shows that a patient may suffer from several conditions and the same condition may be associated with several patients.",
          tags: [
            "Class diagrams",
            "Attributes",
            "Operations",
            "Multiplicities",
          ],
          ref: "Lecture 6 — Section 5.3.1",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. What is generalization in UML class diagrams? Explain how it is shown and its benefits.",
          translation:
            "ما هو التعميم في مخططات الفئات UML؟ اشرح كيف يُعرض وما فوائده.",
          answer:
            "Generalization is an everyday technique that we use to manage complexity. Rather than learn the detailed characteristics of everything that we experience, we learn about general classes (animals, cars, houses, etc.) and learn the characteristics of these classes. We then reuse knowledge by classifying things and focus on the differences between them and their class.\n" +
            "When modeling systems, it is often useful to examine the classes in a system to see if there is scope for generalization. This means that common information will be maintained in one place only. This is good design practice because, if changes are proposed, you do not have to look at all classes in the system to see if they are affected. You can make the changes at the most general level. In object-oriented languages such as Java, generalization is implemented using the class inheritance mechanisms.\n" +
            "The UML notation for generalization:\n" +
            "- Generalization is shown as an arrowhead pointing up to the more general class.\n" +
            "- The lower-level classes are subclasses that inherit the attributes and operations from their superclasses.\n" +
            "- These lower-level classes then add more specific attributes and operations.\n" +
            "Example: General practitioners and hospital doctors can be generalized as doctors. Hospital doctors have three types: Trainee Doctor, Registered Doctor, and Consultant. All doctors have a name and phone number; hospital doctors additionally have a staff number and carry a pager; general practitioners have a practice name and address.",
          tags: ["Generalization", "Inheritance", "Class diagrams"],
          ref: "Lecture 6 — Section 5.3.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. What is aggregation in UML? How does it differ from a regular association? Give an example.",
          translation:
            "ما هو التجميع في UML؟ كيف يختلف عن الـ association العادي؟ أعطِ مثالاً.",
          answer:
            "Aggregation is a special type of association between classes that means one object (the whole) is composed of other objects (the parts).\n" +
            "UML notation: to define aggregation, a diamond shape is added to the link next to the class that represents the whole.\n" +
            "Difference from a regular association:\n" +
            "- A regular association is a generic link between two classes indicating that some relationship exists between them.\n" +
            "- Aggregation specifically represents a part-of relationship, where the whole is composed of its parts. This is more specific than a generic association.\n" +
            "Example from the lecture: A patient record is an aggregate of Patient and an indefinite number of Consultations (Figure 5.13). That is, the record maintains personal patient information as well as an individual record for each consultation with a doctor. The diamond shape is placed on the link next to the Patient record class, indicating that Patient record is the whole composed of Patient and Consultation parts.",
          tags: ["Aggregation", "Association", "Class diagrams"],
          ref: "Lecture 6 — Section 5.3.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Compare data-driven modeling and event-driven modeling. Which UML diagrams are used for each?",
          translation:
            "قارن بين النمذجة الموجهة بالبيانات والنمذجة الموجهة بالأحداث. أي مخططات UML تُستخدم لكل منهما؟",
          answer:
            "Behavioral models show what happens when a system responds to a stimulus from its environment. Stimuli may be either data or events.\n" +
            "Data-driven modeling:\n" +
            "- Data-driven models show the sequence of actions involved in processing input data and generating an associated output.\n" +
            "- They show end-to-end processing in a system, from an initial input being processed to the corresponding output.\n" +
            "- Many business systems are data-processing systems that are primarily driven by data (e.g., a phone billing system).\n" +
            "- UML diagrams used: data-flow diagrams (DFDs) can be represented using UML activity diagrams. Alternatively, UML sequence diagrams drawn so that messages are only sent from left to right can show sequential data processing.\n" +
            "Event-driven modeling:\n" +
            "- Event-driven modeling shows how a system responds to external and internal events.\n" +
            "- It is based on the assumption that a system has a finite number of states and that events (stimuli) may cause a transition from one state to another.\n" +
            "- This view is particularly appropriate for real-time systems (e.g., a landline phone switching system).\n" +
            "- UML diagram used: state diagrams, which are based on Statecharts (Harel 1987).\n" +
            "In practice, nonexperts find data-flow diagrams more intuitive, but engineers prefer sequence diagrams.",
          tags: [
            "Data-driven",
            "Event-driven",
            "Activity diagrams",
            "State diagrams",
            "Comparison",
          ],
          ref: "Lecture 6 — Sections 5.4.1 and 5.4.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Explain the notations of UML state diagrams and the concept of a superstate.",
          translation: "اشرح رموز مخططات الحالة UML ومفهوم الـ superstate.",
          answer:
            "UML state diagrams show system states and events that cause transitions from one state to another. They do not show the flow of data within the system but may include additional information on the computations carried out in each state.\n" +
            "Notations:\n" +
            "1. Rounded rectangles: represent system states. They may include a brief description (following 'do') of the actions taken in that state.\n" +
            "2. Labeled arrows: represent stimuli that force a transition from one state to another.\n" +
            "3. Start and end states: indicated using filled circles, as in activity diagrams (filled circle for start; filled circle inside another circle for end).\n" +
            "4. State description: a state may include 'do: <action>' to describe what happens in that state, and 'exit: <action>' to describe what happens when leaving.\n" +
            "5. Guards: conditions in square brackets may annotate transitions.\n" +
            "Superstate:\n" +
            "- The problem with state-based modeling is that the number of possible states increases rapidly.\n" +
            "- For large system models, you need to hide detail. One way to do this is by using the notion of a 'superstate' that encapsulates a number of separate states.\n" +
            "- A superstate looks like a single state on a high-level model but is then expanded to show more detail on a separate diagram.\n" +
            "- Example: The Operation state in the microwave oven model (Figure 5.16) is a superstate that is expanded in Figure 5.17 to show substates such as Checking, Alarm, and Cook. If the door is opened during operation, the system moves to the disabled state.",
          tags: [
            "State diagrams",
            "Notation",
            "Superstate",
            "Microwave example",
          ],
          ref: "Lecture 6 — Section 5.4.2",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. What is model-driven engineering (MDE)? Briefly describe its key idea.",
          translation:
            "ما هي هندسة النمذجة الموجهة (MDE)؟ صف فكرتها الرئيسية باختصار.",
          answer:
            "Model-driven engineering (MDE) is an approach to software development whereby models rather than programs are the principal outputs of the development process.\n" +
            "Key idea:\n" +
            "- In MDE, models are used as a basis for generating the source code of the system, or even for generating a complete or partial system implementation automatically.\n" +
            "- This means that the system models have to be both complete and correct. They are not just discussion tools or documentation; they are detailed system descriptions that can be used to generate a system implementation.\n" +
            "- Where models are used as part of a model-based development process, you have to be very careful not to confuse similar symbols, such as stick and block arrowheads, that may have different meanings.\n" +
            "- Model-driven engineering is mentioned at the end of the chapter as a topic that is discussed in more detail in other parts of the book.",
          tags: ["MDE", "Model-driven engineering"],
          ref: "Lecture 6 — Section 5.4.3",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. List the five UML diagram types that the lecture focuses on, and briefly describe what each one shows.",
          translation:
            "اذكر الأنواع الخمسة من مخططات UML التي تركز عليها المحاضرة، وصف كلًا منها باختصار.",
          answer:
            "According to the survey by Erickson and Siau (2007), most users of the UML thought that five diagram types could represent the essentials of a system. The lecture concentrates on these five:\n" +
            "1. Activity diagrams: show the activities involved in a process or in data processing. They are used for context models (business processes) and for data-flow diagrams (data-driven behavioral modeling).\n" +
            "2. Use case diagrams: show the interactions between a system and its environment. They represent discrete tasks involving external interaction, with actors as stick figures and use cases as ellipses.\n" +
            "3. Sequence diagrams: show interactions between actors and the system and between system components. They organize interactions chronologically along lifelines, with messages as annotated arrows.\n" +
            "4. Class diagrams: show the object classes in the system and the associations between these classes. They include attributes, operations, multiplicities, generalization, and aggregation.\n" +
            "5. State diagrams: show how the system reacts to internal and external events. They are based on Statecharts (Harel 1987) and model event-driven behavior with states and transitions.",
          tags: [
            "UML",
            "Diagrams",
            "Activity",
            "Use case",
            "Sequence",
            "Class",
            "State",
          ],
          ref: "Lecture 6 — Section 5 (Introduction)",
          likely: "high",
        },
        {
          type: "essay",
          q: "15. Explain why context models are normally used along with other models, such as business process models.",
          translation:
            "اشرح لماذا تُستخدم نماذج السياق عادةً مع نماذج أخرى، مثل نماذج العمليات التجارية.",
          answer:
            "Context models normally show that the environment includes several other automated systems. However, they have an important limitation: they do not show the types of relationships between the systems in the environment and the system that is being specified.\n" +
            "External systems might:\n" +
            "- Produce data for or consume data from the system.\n" +
            "- Share data with the system.\n" +
            "- Be connected directly, through a network, or not connected at all.\n" +
            "- Be physically co-located or located in separate buildings.\n" +
            "All of these relations may affect the requirements and design of the system being defined and so must be taken into account.\n" +
            "Therefore, simple context models are used along with other models, such as business process models. These describe human and automated processes in which particular software systems are used.\n" +
            "UML activity diagrams may be used to show the business processes in which systems are used. For example, Figure 5.2 shows where the Mentcare system is used in the involuntary detention process, including parallel activities (informing social care, next of kin, and updating the register) and guards ([dangerous] vs [not dangerous]).",
          tags: [
            "Context models",
            "Business process models",
            "Activity diagrams",
          ],
          ref: "Lecture 6 — Section 5.1",
          likely: "high",
        },
      ],
    },
  ],
});
