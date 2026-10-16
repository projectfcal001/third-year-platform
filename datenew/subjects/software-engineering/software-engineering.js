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
      t: "المحاضرة الأولى",
      id: "software-engineering-lec-01",
      d: "مقدمة في هندسة البرمجيات ونماذج دورة الحياة SDLC.",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering Chapter 1 Lecture 1.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE_Chapter1_Section1.1_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الأول (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)

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
      id: "software-engineering-lec-02",

      t: "المحاضرة الثانية - عمليات البرمجيات (Software Processes)",
      d: "تغطية شاملة لمفاهيم الفصل الثاني: نماذج SDLC العامة (Waterfall, Incremental, Reuse-oriented)، الأنشطة الأساسية الأربعة (Specification, Development, Validation, Evolution)، التعامل مع التغيير (Prototyping & Incremental Delivery)، ونموذج CMMI.",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 2 - Software processes.pdf",
      pdf2: "datenew/subjects/software-engineering/questions/Questions on each lecture/SE_Chapter2_Sections2.1-2.2_Questions.pdf",
      // فئات روابط منظمة مخصصة للفصل الثاني (Chapter 1: Introduction) من كتاب Software Engineering - Ian Sommerville (10th Edition)
      notes: "الأسئلة المطلوبة من الكتاب:  1 , 3  , 4 , 6 , 8 ",
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
          category: "كل شي يخص السكشن والتمارين",
          icon: "💻",
          description:
            "حلول وشرح تمارين الفصل الثاني (Software Processes Exercises) من كتاب Sommerville",
          links: [
            {
              t: "حلول وشرح تمارين Chapter 2",
              d: "شرح وتوضيح إجابات أسئلة الفصل الثاني الـ 10 المقررة، بما فيها اختيار النموذج المناسب لكل نظام وإدارة النماذج الأولية وتحسين العمليات CMMI",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 عرض الملف",
                  url: "https://drive.google.com/drive/folders/10a_t6aVTjLf6EBqJE-3OHFl76VelSvDt?usp=drive_link",
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
      id: "se-lecture-03",
      t: "المحاضرة 3: التطوير الرشيق للبرمجيات (Agile Software Development)",
      d: "مبررات طرق Agile وبيان Agile ومبادئها، ممارسات XP (user stories، refactoring، test-first، pair programming)، إدارة المشاريع بـ Scrum، وتوسيع Agile.",
      pdf: "datenew/subjects/software-engineering/lectures/Software Engineering, 10th GLOBAL Edition - Chapter 3 - Agile software development.pdf",
      pdf2: "/datenew/subjects/software-engineering/questions/Questions on each lecture/SE-Lecture-03-Questions.pdf",
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
  ],
});
