/* بيانات مادة: تفاعل الانسان والحاسب (hci)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/hci/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */

    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/hci/lectures/lec-01.pdf", questions:[] } */

subjects.push({
  name: "تفاعل الانسان والحاسب",
  en: "Human-Computer Interaction",
  icon: "🖱️",
  slug: "hci",
  lectures: [
    {
      id: "hci-lecture-01",
      t: "المحاضرة 1: مقدمة في التفاعل بين الإنسان والحاسوب (HCI)",
      d: "تعريف HCI، أمثلة من الحياة اليومية، أهميته، علاقته بالمجالات الأخرى (UX / UI / Interaction Design)، مبادئ التصميم، والمكونات الرئيسية.",
      pdf: "datenew/subjects/hci/lectures/Lec 1/Lec 1.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-01-Questions.pdf",
      // فئات روابط منظمة - المحاضرة الأولى: مقدمة في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم HCI الأساسية، والفرق بين UI و UX والتصميم التفاعلي",
          links: [
            {
              t: "أ. أفنان العمري - التفاعل بين الإنسان والحاسب (HCI)",
              d: "شرح مفهوم HCI، الفرق بين Interaction و Interface، ومكونات النظام التفاعلي بالعربي",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
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
            "مقالات وتوثيقات أكاديمية تشرح مفاهيم HCI ومبادئ التصميم",
          links: [
            {
              t: "GeeksforGeeks - Introduction to Human Computer Interaction (HCI)",
              d: "مقال شامل يغطي تعاريف HCI، الأبعاد الخمسة، الفرق بين UI/UX، وأهمية تصميم الواجهات",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/introduction-to-human-computer-interface-hci/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interaction Design Foundation (IxDF) - What is HCI?",
              d: "المرجع العالمي لتفاعل الإنسان والحاسوب، مبادئ علم النفس المعرفي، وتصميم تجربة المستخدم",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات تفاعلية ومواقع لتطبيق مبادئ HCI وتصاميم الـ UI/UX",
          links: [
            {
              t: "Figma - Interactive UI/UX Design Tool",
              d: "الأداة الأولى لبناء واجهات المستخدم (UI)، النماذج التفاعلية (Prototypes)، واختبار تجربة المستخدم (UX)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح الأداة",
                  url: "https://www.figma.com/",
                  type: "download",
                  color: "blue",
                },
              ],
            },
          ],
        },
      ], // فئات روابط منظمة - المحاضرة الأولى: مقدمة في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم HCI الأساسية، والفرق بين UI و UX والتصميم التفاعلي",
          links: [
            {
              t: "أ. أفنان العمري - التفاعل بين الإنسان والحاسب (HCI)",
              d: "شرح مفهوم HCI، الفرق بين Interaction و Interface، ومكونات النظام التفاعلي بالعربي",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أساسيات تجربة وواجهة المستخدم (UI/UX) - الشرح العربي",
              d: "توضيح العلاقة والفرق بين UX Design و UI Design و Interaction Design بالأمثلة",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLp44XwM31XG5a8G_87A8OwfS9fS2I12i0",
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
          description: "محاضرات أكاديمية عالمية ومفاهيم Don Norman في HCI و UX",
          links: [
            {
              t: "Georgia Tech - Human-Computer Interaction (CS6750)",
              d: "الكورس الأكاديمي الرسمي الشامل لمبادئ HCI والمكونات الأساسية (Users, Tasks, Tools, Interfaces, Context)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLAWXFhe0N1vI492zbfS_7LneXflL3S1B2",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Nielsen Norman Group - UX & HCI Core Concepts",
              d: "شروحات قصيرة حول مبادئ التصميم (Discoverability, Feedback, Affordances, Constraints)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/c/NielsenNormanGroup/playlists",
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
            "مقالات وتوثيقات أكاديمية تشرح مفاهيم HCI ومبادئ التصميم",
          links: [
            {
              t: "GeeksforGeeks - Introduction to Human Computer Interaction (HCI)",
              d: "مقال شامل يغطي تعاريف HCI، الأبعاد الخمسة، الفرق بين UI/UX، وأهمية تصميم الواجهات",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/introduction-to-human-computer-interface-hci/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interaction Design Foundation (IxDF) - What is HCI?",
              d: "المرجع العالمي لتفاعل الإنسان والحاسوب، مبادئ علم النفس المعرفي، وتصميم تجربة المستخدم",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات تفاعلية ومواقع لتطبيق مبادئ HCI وتصاميم الـ UI/UX",
          links: [
            {
              t: "Laws of UX - Visual HCI & UX Principles",
              d: "موقع تفاعلي يستعرض قوانين ومبادئ HCI والنفسية المستخدمة في بناء الواجهات التفاعلية",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://lawsofux.com/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Figma - Interactive UI/UX Design Tool",
              d: "الأداة الأولى لبناء واجهات المستخدم (UI)، النماذج التفاعلية (Prototypes)، واختبار تجربة المستخدم (UX)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح الأداة",
                  url: "https://www.figma.com/",
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
          q: "1. What is Human-Computer Interaction (HCI)?",
          options: [
            "The study of computer hardware manufacturing only",
            "A multidisciplinary field that focuses on the design, evaluation, and implementation of interactive computing systems for human use",
            "A programming language for building user interfaces",
            "A field that studies only network protocols",
          ],
          correct: 1,
          translation: "ما هو التفاعل بين الإنسان والحاسوب (HCI)؟",
          explanation:
            "HCI مجال متعدد التخصصات يركز على تصميم وتقييم وتنفيذ الأنظمة الحاسوبية التفاعلية لاستخدام الإنسان. الاختيارات الأخرى تحصره في مجال ضيق (عتاد أو لغة أو شبكات).",
          tags: ["HCI", "Definition"],
          ref: "Lecture 01 — Slide 3",
        },

        {
          q: "2. Which question does the lecture raise about the abbreviation HCI?",
          options: [
            "Whether the 'C' stands for Computer or Communication",
            "Whether the 'I' stands for Interaction or Interfaces",
            "Whether the 'H' stands for Human or Hardware",
            "Whether the abbreviation should be dropped entirely",
          ],
          correct: 1,
          translation: "إيه السؤال اللي بتطرحه المحاضرة عن اختصار HCI؟",
          explanation:
            "المحاضرة بتسأل: حرف I معناه Interaction ولا Interfaces؟ والدكتور كان بيظن إنها Interfaces. باقي الاختيارات مش مذكورة.",
          tags: ["HCI", "Abbreviation"],
          ref: "Lecture 01 — Slide 4",
        },

        {
          q: "3. According to the Oxford definition shown in the lecture, which devices mediate human-computer interaction?",
          options: [
            "Only keyboards and mice",
            "Printers and scanners only",
            "Floppy disks and magnetic tapes",
            "Graphics devices, touch-sensitive devices, and voice-input devices",
          ],
          correct: 3,
          translation:
            "حسب تعريف أكسفورد في المحاضرة، أي أجهزة بتتوسط التفاعل بين الإنسان والحاسوب؟",
          explanation:
            "التعريف بيذكر أجهزة الرسوميات والأجهزة الحساسة للمس وأجهزة الإدخال الصوتي، وبيؤكد على الإدخال/الإخراج مع البرمجيات المساندة.",
          tags: ["Oxford", "Input/output devices"],
          ref: "Lecture 01 — Slide 4",
        },

        {
          q: "4. Which of the following is NOT listed as an example of HCI in daily life?",
          options: [
            "Industrial robots welding car bodies",
            "ATM machines",
            "Voice assistants such as Siri and Alexa",
            "Car dashboards",
          ],
          correct: 0,
          translation:
            "أي واحد من دول مش مذكور كمثال على HCI في الحياة اليومية؟",
          explanation:
            "الأمثلة المذكورة: الهواتف الذكية، ATM، لوحات السيارات، منصات التعلم، المساعدات الصوتية، المواقع والتطبيقات. روبوتات اللحام مش مذكورة.",
          tags: ["Daily life", "Examples"],
          ref: "Lecture 01 — Slide 5",
        },

        {
          q: "5. Which of the following is NOT stated as a result of good HCI?",
          options: [
            "Better productivity",
            "Better user satisfaction",
            "Higher hardware manufacturing speed",
            "Lower training and support costs",
          ],
          correct: 2,
          translation: "أي واحدة مش مذكورة كنتيجة لـ HCI الجيد؟",
          explanation:
            "HCI الجيد بيحسن الإنتاجية ورضا المستخدم ويقلل تكاليف التدريب والدعم. سرعة تصنيع العتاد مش منها.",
          tags: ["Why HCI matters", "Benefits"],
          ref: "Lecture 01 — Slide 6",
        },

        {
          q: "6. Why does the lecture say HCI matters in modern life?",
          options: [
            "It makes technology machine-centered to run faster",
            "It ensures technology is human-centered, not machine-centered",
            "It removes the need for interfaces",
            "It focuses on developers' convenience only",
          ],
          correct: 1,
          translation: "ليه HCI مهم في الحياة الحديثة حسب المحاضرة؟",
          explanation:
            "HCI بيضمن إن التكنولوجيا تكون human-centered مش machine-centered، وبيقلل الأخطاء ويخلي الواجهات متاحة للجميع بمن فيهم ذوي الإعاقة.",
          tags: ["Human-centered", "Accessibility"],
          ref: "Lecture 01 — Slide 6",
        },

        {
          q: "7. Which two fields feed into Human Factors Engineering in the hierarchy diagram?",
          options: [
            "Mathematics and Physics",
            "Engineering and Psychology",
            "Art and Marketing",
            "Networking and Databases",
          ],
          correct: 1,
          translation: "أي مجالين بيغذوا Human Factors Engineering في المخطط؟",
          explanation:
            "المخطط بيوضح إن Engineering وPsychology هما المدخلات لـ Human Factors Engineering.",
          tags: ["Human Factors", "Hierarchy"],
          ref: "Lecture 01 — Slide 7",
        },

        {
          q: "8. Which fields appear directly under Human Factors Engineering in the diagram?",
          options: [
            "Industrial Design, HCI, and Product Design",
            "UI Design, UX Design, and Interaction Design",
            "Engineering, Psychology, and Sociology",
            "Databases, Networks, and Security",
          ],
          correct: 0,
          translation: "أي مجالات بتظهر مباشرة تحت Human Factors Engineering؟",
          explanation:
            "تحته Industrial Design وHCI وProduct Design. أما UI وUX وInteraction Design فهم تحت HCI.",
          tags: ["Human Factors", "HCI hierarchy"],
          ref: "Lecture 01 — Slide 7",
        },

        {
          q: "9. Which definition matches UX Design?",
          options: [
            "The process of designing buttons, colours, fonts, icons, and layouts",
            "The process of designing how the system responds to user actions only",
            "The process of designing products or systems to provide a good, easy, and satisfying experience for users",
            "The process of designing computer hardware circuits",
          ],
          correct: 2,
          translation: "أي تعريف يطابق UX Design؟",
          explanation:
            "UX هو تصميم المنتجات لتوفير تجربة جيدة وسهلة ومُرضية. تصميم الأزرار والألوان والخطوط هو UI، وتصميم استجابة النظام لأفعال المستخدم أقرب لـ Interaction Design.",
          tags: ["UX", "Definition"],
          ref: "Lecture 01 — Slide 8",
        },

        {
          q: "10. Which definition matches UI Design?",
          options: [
            "The process of making the whole experience easy and satisfying",
            "The process of studying users' psychology in labs",
            "The process of choosing a database engine",
            "The process of designing the visual interface, including buttons, colours, fonts, icons, and layouts",
          ],
          correct: 3,
          translation: "أي تعريف يطابق UI Design؟",
          explanation:
            "UI هو تصميم الواجهة المرئية: الأزرار والألوان والخطوط والأيقونات والتخطيط. وصف جعل التجربة كلها سهلة ومُرضية هو تعريف UX.",
          tags: ["UI", "Definition"],
          ref: "Lecture 01 — Slide 8",
        },

        {
          q: "11. What does Interaction Design focus on?",
          options: [
            "The colour palette of the interface",
            "The physical shape of the device",
            "How users interact with a system and how the system responds to their actions",
            "The cost of the product",
          ],
          correct: 2,
          translation: "إيه اللي بيركز عليه Interaction Design؟",
          explanation:
            "بيركز على طريقة تفاعل المستخدم مع النظام وكيف يستجيب النظام لأفعاله. الألوان من اختصاص UI.",
          tags: ["Interaction Design"],
          ref: "Lecture 01 — Slide 8",
        },

        {
          q: "12. In a flight booking application, which concern belongs to UI Design?",
          options: [
            "Making searching, selecting, and booking a flight easy and clear",
            "Whether the steps are clear and logical",
            "Whether users can achieve their goals easily",
            "The colour, size, shape, and position of the Book Now button",
          ],
          correct: 3,
          translation: "في تطبيق حجز طيران، أي اهتمام بيندرج تحت UI Design؟",
          explanation:
            "المثال في المحاضرة: UI يركز على لون وحجم وشكل ومكان زر Book Now. الباقي أسئلة UX.",
          tags: ["UI", "Flight booking"],
          ref: "Lecture 01 — Slide 9",
        },

        {
          q: "13. Which question is typical of UX Design?",
          options: [
            "Which font size should the menu use?",
            "What colour should the icons be?",
            "How should the layout be arranged on the page?",
            "Can users find what they need easily?",
          ],
          correct: 3,
          translation: "أي سؤال نموذجي لـ UX Design؟",
          explanation:
            "UX بيسأل: هل التطبيق سهل؟ هل المستخدم يحقق أهدافه؟ هل يلاقي اللي محتاجه؟ أما الخط والألوان والتخطيط فهي UI.",
          tags: ["UX", "Questions"],
          ref: "Lecture 01 — Slide 9",
        },

        {
          q: "14. Which of the following is listed among the HCI design principles in the lecture?",
          options: ["Redundancy", "Tolerance", "Latency", "Encryption"],
          correct: 1,
          translation: "أي واحد من دول مذكور ضمن مبادئ تصميم HCI في المحاضرة؟",
          explanation:
            "الشريحة بتعرض Discoverability وFeedback وConstraints وMapping وConsistency وAffordances وStructure وSimplicity وTolerance وEquity وFlexibility وPerceptibility وEase وComfort وDocumentation.",
          tags: ["Design principles"],
          ref: "Lecture 01 — Slide 10",
        },

        {
          q: "15. How many HCI design principles appear in the lecture's figure?",
          options: ["10", "12", "20", "15"],
          correct: 3,
          translation: "كام مبدأ تصميم HCI ظاهر في شكل المحاضرة؟",
          explanation: "الشكل فيه 3 صفوف × 5 مبادئ = 15 مبدأ.",
          tags: ["Design principles"],
          ref: "Lecture 01 — Slide 10",
        },

        {
          q: "16. Which list contains the five main components of HCI?",
          options: [
            "Users, Tasks, Tools, Interfaces, Context",
            "Users, Data, Servers, Networks, Security",
            "Hardware, Software, Peopleware, Data, Network",
            "Input, Process, Output, Storage, Feedback",
          ],
          correct: 0,
          translation: "أي قائمة فيها المكونات الخمسة الرئيسية لـ HCI؟",
          explanation:
            "المكونات: Users وTasks وTools وInterfaces وContext. الباقي قوائم لمفاهيم مختلفة.",
          tags: ["HCI components"],
          ref: "Lecture 01 — Slide 11",
        },

        {
          q: "17. In the HCI components model, what is the role of Interfaces?",
          options: [
            "The connection between users and tools",
            "The environment where interaction occurs",
            "The activities users aim to complete",
            "The people interacting with technology",
          ],
          correct: 0,
          translation: "إيه دور Interfaces في مكونات HCI؟",
          explanation:
            "Interfaces = الربط بين المستخدمين والأدوات. البيئة هي Context، والأنشطة هي Tasks، والأشخاص هم Users.",
          tags: ["Interfaces", "Components"],
          ref: "Lecture 01 — Slide 11, 14",
        },

        {
          q: "18. Why do designers create various tasks and scenarios?",
          options: [
            "To understand the user journey",
            "To reduce the cost of servers",
            "To measure CPU temperature",
            "To replace human users",
          ],
          correct: 0,
          translation: "ليه المصممين بينشئوا مهام وسيناريوهات متنوعة؟",
          explanation:
            "عشان يفهموا رحلة المستخدم (user journey). باقي الاختيارات ملهاش علاقة.",
          tags: ["Tasks", "User journey"],
          ref: "Lecture 01 — Slide 13",
        },

        {
          q: "19. Why do researchers spend time understanding the needs and expectations of the target audience?",
          options: [
            "To reduce hardware costs",
            "To increase processor speed",
            "To create a user-centered design that ensures usefulness and usability",
            "To avoid testing the product",
          ],
          correct: 2,
          translation:
            "ليه الباحثين بيقضوا وقت في فهم احتياجات الجمهور المستهدف؟",
          explanation:
            "فهم الاحتياجات بيساعد في تصميم user-centered يضمن الفائدة وسهولة الاستخدام.",
          tags: ["Users", "User-centered design"],
          ref: "Lecture 01 — Slide 12",
        },

        {
          q: "20. According to the lecture, the tools used to create technology need to be robust and flexible enough to allow for what?",
          options: [
            "Hardware replacement",
            "Network deployment",
            "Iterations",
            "Legal compliance",
          ],
          correct: 2,
          translation:
            "حسب المحاضرة، الأدوات لازم تكون قوية ومرنة كفاية عشان تسمح بإيه؟",
          explanation: "لازم تسمح بالتكرار (iterations) في التصميم.",
          tags: ["Tools", "Iterations"],
          ref: "Lecture 01 — Slide 13",
        },

        {
          type: "essay",
          q: "1. Define HCI and explain what it studies.",
          translation: "عرّف HCI واشرح إيه اللي بيدرسه.",
          answer:
            "HCI is a multidisciplinary field that focuses on the design, evaluation, and implementation of interactive computing systems for human use.\n" +
            "It also studies the major phenomena surrounding these systems:\n" +
            "- how people interact with computers,\n" +
            "- how systems respond,\n" +
            "- and how interfaces can be improved for better usability.",
          tags: ["HCI"],
          ref: "Lecture 01 — Slide 3",
        },

        {
          type: "essay",
          q: "2. Explain the discussion about whether the 'I' in HCI means Interaction or Interfaces, and summarize the Oxford definition shown.",
          translation: "اشرح النقاش حول حرف I في HCI ولخص تعريف أكسفورد.",
          answer:
            "The lecture asks whether the I is for Interaction or Interfaces; the lecturer used to think it was Interfaces, and the abbreviation possibly adapted to the better word.\n" +
            "The Oxford definition describes the human-computer interface as the means of communication between a human user and a computer system, referring to input/output devices with supporting software.\n" +
            "Devices mentioned: graphics devices, touch-sensitive devices, and voice-input devices, configured to facilitate an efficient and desirable interaction.",
          tags: ["HCI", "Oxford"],
          ref: "Lecture 01 — Slide 4",
        },

        {
          type: "essay",
          q: "3. Give examples of HCI in daily life and explain why HCI matters.",
          translation:
            "اذكر أمثلة على HCI في الحياة اليومية واشرح ليه HCI مهم.",
          answer:
            "Examples: smartphone interfaces, ATM machines, car dashboards, e-learning platforms, voice assistants (Siri, Alexa), websites and mobile applications. Every button, menu, icon, and gesture is influenced by HCI principles.\n" +
            "Why it matters: users can interact with technology easily; systems reduce errors and confusion; interfaces are accessible to all, including people with disabilities; technology becomes human-centered, not machine-centered.\n" +
            "Good HCI leads to better productivity, better user satisfaction, and lower training and support costs.",
          tags: ["Daily life", "Why HCI matters"],
          ref: "Lecture 01 — Slide 5, 6",
        },

        {
          type: "essay",
          q: "4. Describe the relation between HCI and other fields using the hierarchy in the lecture.",
          translation:
            "اوصف علاقة HCI بالمجالات الأخرى حسب المخطط الهرمي في المحاضرة.",
          answer:
            "Engineering and Psychology feed into Human Factors Engineering.\n" +
            "Human Factors Engineering leads to Industrial Design, HCI, and Product Design.\n" +
            "HCI in turn includes UI Design, UX Design, and Interaction Design.",
          tags: ["Hierarchy", "Human Factors"],
          ref: "Lecture 01 — Slide 7",
        },

        {
          type: "essay",
          q: "5. Differentiate between UX Design, UI Design, and Interaction Design. Use the flight booking example.",
          translation:
            "فرّق بين UX وUI وInteraction Design مع مثال حجز الطيران.",
          answer:
            "UX Design: designing products or systems to give a good, easy, and satisfying experience; it asks whether the app is easy to use, whether users achieve goals, whether steps are clear and logical, and whether users find what they need and feel comfortable.\n" +
            "UI Design: designing the visual interface: menus, font size and colour, buttons, layout, icons.\n" +
            "Interaction Design: designing how users interact with the system and how the system responds to their actions.\n" +
            "Flight booking example: UX makes searching, selecting, and booking easy and clear; UI focuses on the colour, size, shape, and position of the Book Now button.",
          tags: ["UX", "UI", "Interaction Design"],
          ref: "Lecture 01 — Slide 8, 9",
        },

        {
          type: "essay",
          q: "6. List the principles of human-computer interaction design shown in the lecture.",
          translation: "اذكر مبادئ تصميم HCI المعروضة في المحاضرة.",
          answer:
            "Discoverability, Feedback, Constraints, Mapping, Consistency,\n" +
            "Affordances, Structure, Simplicity, Tolerance, Equity,\n" +
            "Flexibility, Perceptibility, Ease, Comfort, Documentation.",
          tags: ["Design principles"],
          ref: "Lecture 01 — Slide 10",
        },

        {
          type: "essay",
          q: "7. Explain the five main components of HCI.",
          translation: "اشرح المكونات الخمسة الرئيسية لـ HCI.",
          answer:
            "Users: people interacting with technology; researchers study their needs and expectations to create user-centered design ensuring usefulness and usability.\n" +
            "Tasks: activities users aim to complete; designers create tasks and scenarios to understand the user journey.\n" +
            "Tools: devices and software enabling tasks; they must be robust and flexible enough to allow iterations.\n" +
            "Interfaces: the connection between users and tools, helping users navigate the design effectively to accomplish goals.\n" +
            "Context: the environment where interaction occurs and how it affects the way the user interacts with the system.",
          tags: ["HCI components"],
          ref: "Lecture 01 — Slide 11-14",
        },

        {
          type: "essay",
          q: "8. Summarize the conclusion of Lecture 1.",
          translation: "لخّص خلاصة المحاضرة الأولى.",
          answer:
            "HCI focuses on the interaction between people and computers.\n" +
            "It aims to make systems easy, useful, efficient, and satisfying to use.\n" +
            "It is important because good design improves user experience and reduces errors.\n" +
            "It is applied in mobile applications, websites, healthcare systems, education, and automotive systems.",
          tags: ["Conclusion"],
          ref: "Lecture 01 — Slide 15",
        },
      ],
    },
    {
      id: "hci-lecture-02",
      t: "المحاضرة 2: الإنسان (The Human)",
      d: "تعريف HCI، أمثلة من الحياة اليومية، أهميته، علاقته بالمجالات الأخرى (UX / UI / Interaction Design)، مبادئ التصميم، والمكونات الرئيسية.",
      pdf: "datenew/subjects/hci/lectures/Lec 2/Lec 2.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      // فئات روابط منظمة - المحاضرة الثانية: الإنسان (The Human) والإدراك البشري في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لعلم النفس المعرفي، الحواس، الذاكرة، وقوانين الإدراك البشري في HCI",
          links: [
            {
              t: "أ. أفنان العمري - العامل البشري والإدراك في تفاعل الإنسان والحاسب (HCI)",
              d: "شرح تفصيلي بالعربي للحواس البشرية (الرؤية، السمع، اللمس)، الذاكرة قصيرة وطويلة الأجل، ونماذج المعالجة البشرية",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أساسيات علم النفس المعرفي وتجربة المستخدم (UX Psychology)",
              d: "توضيح كيف تؤثر الذاكرة والعمليات العقلية وإدراك الألوان على تصميم واجهات المستخدم",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/playlist?list=PLp44XwM31XG5a8G_87A8OwfS9fS2I12i0",
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
            "مراجع أكاديمية ومقالات تفصيلية حول النماذج العقلية، الذاكرة البشرية، وقوانين الحركة مثل Fitts' Law",
          links: [
            {
              t: "GeeksforGeeks - Human Information Processing Model in HCI",
              d: "مقال توثيقي شامل حول نظام استقبال المعلومات البشري، الذاكرة، وعمليات التفكير والاستدلال",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/human-information-processing-model-in-hci/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interaction Design Foundation (IxDF) - Human Cognitive Architecture & HCI",
              d: "مكتبة المراجع العالمية لدراسة علم النفس المعرفي، الانتباه، الذاكرة طويلة المدى، وتأثير العواطف على التفاعل",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات ومواقع تفاعلية لتطبيق قوانين الحركة (Fitts' Law) وقياس الحمل المعرفي",
          links: [
            {
              t: "Fitts' Law Simulator - Interactive Movement & Target Testing",
              d: "أداة تفاعلية لقياس وقت الحركة وسرعة استهداف الأزرار بناءً على مسافة وحجم الأهداف (Fitts' Law)",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ فتح الأداة",
                  url: "https://lawsofux.com/fitts-law/",
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
          q: "1. Which of the following are listed as the human channels for information input and output?",
          options: [
            "Visual, olfactory, gustatory, and thermal",
            "Textual, numerical, graphical, and audio-only",
            "Sensory, short-term, long-term, and working",
            "Visual, auditory, haptic, and movement",
          ],
          correct: 3,
          translation:
            "أي قنوات مذكورة كقنوات إدخال وإخراج المعلومات عند الإنسان؟",
          explanation:
            "المحاضرة بتذكر: visual, auditory, haptic, movement. أنواع الذاكرة (sensory وshort-term وlong-term) مش قنوات الإدخال/الإخراج.",
          tags: ["Human i/o", "Senses"],
          ref: "Lecture 02 — Slide 2",
        },

        {
          q: "2. What is the role of rods and cones in the retina?",
          options: [
            "Rods are for colour vision and cones are for low-light vision",
            "Both are only for detecting movement",
            "Rods are for low-light vision and cones are for colour vision",
            "Both focus the image upright",
          ],
          correct: 2,
          translation: "إيه دور العصي (rods) والمخاريط (cones) في الشبكية؟",
          explanation:
            "الـ rods للرؤية في الإضاءة الضعيفة والـ cones للرؤية الملونة. الصور بتتركز مقلوبة على الشبكية.",
          tags: ["Retina", "Rods and cones"],
          ref: "Lecture 02 — Slide 4",
        },

        {
          q: "3. Which cells detect pattern and movement according to the lecture?",
          options: ["Cones", "Rods", "Ganglion cells", "Mechanoreceptors"],
          correct: 2,
          translation: "أي خلايا بتكتشف النمط والحركة؟",
          explanation:
            "الـ ganglion cells (مرتبطة بالمخ) هي اللي بتكتشف النمط والحركة. الـ mechanoreceptors خاصة باللمس.",
          tags: ["Ganglion cells", "Eye"],
          ref: "Lecture 02 — Slide 4",
        },

        {
          q: "4. What does the visual angle indicate?",
          options: [
            "How much of the view an object occupies, relating to its size and distance from the eye",
            "The ability to perceive fine detail",
            "The subjective reaction to light levels",
            "The sensitivity of cones to wavelengths",
          ],
          correct: 0,
          translation: "إيه اللي بتشير إليه زاوية الرؤية (visual angle)؟",
          explanation:
            "بتشير إلى مقدار ما يشغله الجسم من مجال الرؤية وبتتعلق بحجمه وبعده عن العين. القدرة على إدراك التفاصيل هي visual acuity.",
          tags: ["Visual angle", "Size and depth"],
          ref: "Lecture 02 — Slide 5",
        },

        {
          q: "5. Which three attributes make up colour according to the lecture?",
          options: [
            "Hue, intensity, and saturation",
            "Luminance, flicker, and contrast",
            "Pitch, loudness, and timbre",
            "Saccades, fixations, and shape",
          ],
          correct: 0,
          translation: "إيه الخصائص الثلاثة المكونة للون حسب المحاضرة؟",
          explanation:
            "اللون يتكون من hue وintensity وsaturation. pitch وloudness وtimbre للصوت.",
          tags: ["Colour", "Hue"],
          ref: "Lecture 02 — Slide 6",
        },

        {
          q: "6. What design implication follows from the fact that blue acuity is the lowest?",
          options: [
            "Blue should be used for all important text",
            "Blue is best for low-light displays",
            "Blue should be used to flash warnings",
            "Blue should not be used for important detail",
          ],
          correct: 3,
          translation:
            "إيه الاستنتاج التصميمي من إن حدة إدراك اللون الأزرق هي الأقل؟",
          explanation:
            "لأن blue acuity ضعيف، الأزرق ما ينفعش للتفاصيل المهمة. باقي الاختيارات عكس المنطق.",
          tags: ["Blue acuity", "Design implication"],
          ref: "Lecture 02 — Slide 6, 42",
        },

        {
          q: "7. According to the lecture, what percentage of males and females are colour blind?",
          options: [
            "1% of males and 8% of females",
            "50% of males and 25% of females",
            "0.1% of both",
            "8% of males and 1% of females",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، نسبة المصابين بعمى الألوان من الذكور والإناث؟",
          explanation: "8% من الذكور و1% من الإناث.",
          tags: ["Colour blindness"],
          ref: "Lecture 02 — Slide 6",
        },

        {
          q: "8. Why do optical illusions such as the Ponzo and Muller-Lyer illusions occur?",
          options: [
            "Due to rods failing in low light",
            "Due to damage in the outer ear",
            "Due to overcompensation by the visual system",
            "Due to slow reaction time",
          ],
          correct: 2,
          translation: "ليه بتحصل الخدع البصرية زي Ponzo وMuller-Lyer؟",
          explanation:
            "الخدع البصرية بتحصل أحياناً بسبب التعويض الزائد من النظام البصري (للحركة وتغيرات الإضاءة).",
          tags: ["Optical illusions", "Ponzo"],
          ref: "Lecture 02 — Slide 7, 8",
        },

        {
          q: "9. In reading, when does perception occur?",
          options: [
            "During saccades",
            "Only at the end of a line",
            "While the eyes are closed",
            "During fixations",
          ],
          correct: 3,
          translation: "في القراءة، إمتى بيحصل الإدراك؟",
          explanation:
            "القراءة فيها saccades وfixations، والإدراك بيحصل أثناء الـ fixations.",
          tags: ["Reading", "Saccades and fixations"],
          ref: "Lecture 02 — Slide 9",
        },

        {
          q: "10. Which statement about reading from a computer screen is correct?",
          options: [
            "Positive contrast always improves reading",
            "Negative contrast improves reading from a computer screen",
            "Word shape is not important to recognition",
            "Colour has no effect on reading",
          ],
          correct: 1,
          translation: "أي عبارة صحيحة عن القراءة من شاشة الحاسوب؟",
          explanation:
            "المحاضرة بتقول إن negative contrast بيحسن القراءة من الشاشة، وإن شكل الكلمة مهم للتعرف عليها.",
          tags: ["Reading", "Negative contrast"],
          ref: "Lecture 02 — Slide 9",
        },

        {
          q: "11. Which part of the ear transmits sound waves as vibrations to the inner ear?",
          options: ["Middle ear", "Outer ear", "Inner ear", "Auditory nerve"],
          correct: 0,
          translation:
            "أي جزء من الأذن بينقل الموجات الصوتية كاهتزازات للأذن الداخلية؟",
          explanation:
            "الأذن الوسطى بتنقل الاهتزازات. الخارجية بتحمي وبتضخم الصوت، والداخلية بتطلق مواد كيميائية تسبب نبضات في العصب السمعي.",
          tags: ["Hearing", "Ear"],
          ref: "Lecture 02 — Slide 10",
        },

        {
          q: "12. Which pairing of sound property and physical quantity is correct?",
          options: [
            "Pitch is amplitude",
            "Pitch is sound frequency",
            "Loudness is frequency",
            "Timbre is amplitude",
          ],
          correct: 1,
          translation: "أي ربط صحيح بين خاصية الصوت والكمية الفيزيائية؟",
          explanation:
            "pitch = التردد، loudness = السعة (amplitude)، timbre = النوع أو الجودة.",
          tags: ["Sound", "Pitch"],
          ref: "Lecture 02 — Slide 10",
        },

        {
          q: "13. What does the cocktail party phenomenon illustrate?",
          options: [
            "Humans hear frequencies above 20 kHz",
            "The auditory system can filter sounds and attend to them over background noise",
            "Hearing is more accurate for high frequencies",
            "Sound is always processed by the middle ear",
          ],
          correct: 1,
          translation: "إيه اللي بتوضحه ظاهرة cocktail party؟",
          explanation:
            "النظام السمعي بيفلتر الأصوات وبيركز على صوت معين وسط الضوضاء. والبشر بيسمعوا من 20Hz إلى 15kHz وأقل دقة في الترددات العالية.",
          tags: ["Cocktail party", "Hearing"],
          ref: "Lecture 02 — Slide 11",
        },

        {
          q: "14. Which receptor in the skin detects pain?",
          options: [
            "Thermoreceptors",
            "Nociceptors",
            "Mechanoreceptors",
            "Photoreceptors",
          ],
          correct: 1,
          translation: "أي مستقبل في الجلد بيكتشف الألم؟",
          explanation:
            "nociceptors للألم، thermoreceptors للحرارة والبرودة، mechanoreceptors للضغط.",
          tags: ["Touch", "Nociceptors"],
          ref: "Lecture 02 — Slide 12",
        },

        {
          q: "15. Which stimulus type has the shortest reaction time according to the lecture?",
          options: [
            "Auditory (about 150 ms)",
            "Visual (about 200 ms)",
            "Pain (about 700 ms)",
            "All are equal",
          ],
          correct: 0,
          translation: "أي نوع منبه له أقصر زمن رد فعل؟",
          explanation: "السمعي حوالي 150ms مقابل 200ms للبصري و700ms للألم.",
          tags: ["Reaction time", "Movement"],
          ref: "Lecture 02 — Slide 13",
        },

        {
          q: "16. What are the three types of memory function described in the lecture?",
          options: [
            "Episodic, semantic, and procedural memory",
            "Iconic, echoic, and haptic memory",
            "RAM, ROM, and cache",
            "Sensory memories, short-term (working) memory, and long-term memory",
          ],
          correct: 3,
          translation: "إيه أنواع وظائف الذاكرة الثلاثة في المحاضرة؟",
          explanation:
            "sensory وshort-term (working) وlong-term. الـ episodic وsemantic نوعان من LTM، وiconic وechoic وhaptic أنواع من sensory memory.",
          tags: ["Memory", "Memory types"],
          ref: "Lecture 02 — Slide 15",
        },

        {
          q: "17. Which sensory memory buffers aural stimuli?",
          options: [
            "Iconic memory",
            "Haptic memory",
            "Echoic memory",
            "Semantic memory",
          ],
          correct: 2,
          translation: "أي ذاكرة حسية بتخزن المنبهات السمعية؟",
          explanation: "echoic للسمعي، iconic للبصري، haptic للمسي.",
          tags: ["Sensory memory", "Echoic"],
          ref: "Lecture 02 — Slide 16",
        },

        {
          q: "18. What is the limited capacity of short-term memory?",
          options: [
            "70 ± 20 chunks",
            "About 200 chunks",
            "7 ± 2 chunks",
            "Unlimited",
          ],
          correct: 2,
          translation: "إيه السعة المحدودة للذاكرة قصيرة المدى؟",
          explanation:
            "7±2 chunks. زمن الوصول حوالي 70ms والاضمحلال السريع حوالي 200ms.",
          tags: ["STM", "Capacity"],
          ref: "Lecture 02 — Slide 17",
        },

        {
          q: "19. Which long-term memory type is a serial memory of events?",
          options: [
            "Semantic memory",
            "Episodic memory",
            "Iconic memory",
            "Working memory",
          ],
          correct: 1,
          translation:
            "أي نوع من الذاكرة طويلة المدى هو ذاكرة تسلسلية للأحداث؟",
          explanation:
            "episodic للأحداث، وsemantic للحقائق والمفاهيم والمهارات، وsemantic LTM مشتقة من episodic LTM.",
          tags: ["LTM", "Episodic"],
          ref: "Lecture 02 — Slide 19",
        },

        {
          q: "20. Which model of LTM represents procedural knowledge as condition/action rules?",
          options: [
            "Production rules",
            "Frames",
            "Scripts",
            "Semantic network",
          ],
          correct: 0,
          translation:
            "أي نموذج للـ LTM بيمثل المعرفة الإجرائية كقواعد شرط/فعل؟",
          explanation:
            "production rules (IF-THEN). الـ frames هياكل بيانات بخانات، والـ scripts معلومات نمطية لتفسير موقف.",
          tags: ["LTM models", "Production rules"],
          ref: "Lecture 02 — Slide 24",
        },

        {
          q: "21. What does the total time hypothesis state?",
          options: [
            "Learning is best in one single session",
            "Information is lost after exactly 200 ms",
            "Rehearsal is not needed for LTM",
            "The amount retained is proportional to rehearsal time",
          ],
          correct: 3,
          translation: "إيه اللي بتقوله total time hypothesis؟",
          explanation:
            "كمية ما يُحتفظ به متناسبة مع وقت المراجعة. وdistribution of practice effect بتقول التعلم الموزع على الزمن أفضل.",
          tags: ["LTM storage", "Rehearsal"],
          ref: "Lecture 02 — Slide 25",
        },

        {
          q: "22. In forgetting, what is retroactive interference?",
          options: [
            "New information replaces old information",
            "Old information interferes with new information",
            "Information is lost very slowly by decay",
            "Emotion causes subconscious forgetting",
          ],
          correct: 0,
          translation: "إيه هو الـ retroactive interference في النسيان؟",
          explanation:
            "هو أن المعلومة الجديدة بتحل محل القديمة. عكسها proactive inhibition حيث القديمة تتداخل مع الجديدة.",
          tags: ["Forgetting", "Interference"],
          ref: "Lecture 02 — Slide 26",
        },

        {
          q: "23. Which kind of reasoning goes from an event to its cause and can lead to false explanations?",
          options: ["Deduction", "Induction", "Abduction", "Analogy"],
          correct: 2,
          translation:
            "أي نوع من الاستدلال بيمشي من الحدث للسبب وممكن يعطي تفسيرات خاطئة؟",
          explanation:
            "الـ abduction (مثال: لو شفت Sam بيسوق بسرعة افترض إنه سكران). الـ deduction بيستنتج منطقياً من المقدمات.",
          tags: ["Abduction", "Reasoning"],
          ref: "Lecture 02 — Slide 33",
        },

        {
          q: "24. What is the difference between a slip and a mistake?",
          options: [
            "A slip is a right intention carried out wrongly, while a mistake is a wrong intention caused by incorrect understanding",
            "A slip is a wrong intention and a mistake is a right intention done wrong",
            "Both are caused only by hardware faults",
            "Slips are caused by incorrect mental models",
          ],
          correct: 0,
          translation: "إيه الفرق بين slip وmistake؟",
          explanation:
            "slip: نية صح لكن التنفيذ غلط (قلة انتباه أو مهارة). mistake: نية غلط بسبب فهم خاطئ أو mental model خاطئ.",
          tags: ["Slips", "Mistakes"],
          ref: "Lecture 02 — Slide 37",
        },

        {
          q: "25. How does positive affect influence problem solving according to the lecture?",
          options: [
            "It leads to narrow thinking",
            "It leads to creative problem solving",
            "It has no influence",
            "It makes easy tasks harder",
          ],
          correct: 1,
          translation: "إزاي بيأثر الـ positive affect على حل المشاكل؟",
          explanation:
            "positive affect بيؤدي لحل مشاكل إبداعي، وnegative بيؤدي لتفكير ضيق.",
          tags: ["Affect", "Emotion"],
          ref: "Lecture 02 — Slide 39",
        },

        {
          type: "essay",
          q: "1. Explain the two stages of vision and describe how the eye receives light.",
          translation: "اشرح مرحلتي الرؤية وكيف تستقبل العين الضوء.",
          answer:
            "Two stages: physical reception of the stimulus, and processing and interpretation of the stimulus.\n" +
            "The eye is a mechanism for receiving light and transforming it into electrical energy; light reflects from objects and images are focused upside-down on the retina.\n" +
            "The retina contains rods for low-light vision and cones for colour vision; ganglion cells (brain) detect pattern and movement.",
          tags: ["Vision", "Eye"],
          ref: "Lecture 02 — Slide 3, 4",
        },

        {
          type: "essay",
          q: "2. Explain how the visual signal is interpreted (size and depth, brightness, colour, and compensation).",
          translation: "اشرح كيف يتم تفسير الإشارة البصرية.",
          answer:
            "Size and depth: visual angle shows how much of the view an object occupies; visual acuity is the (limited) ability to perceive detail; familiar objects are perceived as constant size despite changes in visual angle; cues like overlapping help perception of size and depth.\n" +
            "Brightness: subjective reaction to light levels, affected by luminance and measured by just noticeable difference; acuity and flicker perception increase with luminance.\n" +
            "Colour: made up of hue, intensity, saturation; cones are sensitive to wavelengths; blue acuity is lowest; 8% of males and 1% of females are colour blind.\n" +
            "The visual system compensates for movement and luminance changes; context resolves ambiguity; over-compensation can cause optical illusions such as Ponzo and Muller-Lyer.",
          tags: ["Visual perception"],
          ref: "Lecture 02 — Slide 5-8",
        },

        {
          type: "essay",
          q: "3. Describe the stages of reading and the factors that affect it.",
          translation: "اوصف مراحل القراءة والعوامل المؤثرة فيها.",
          answer:
            "Stages: the visual pattern is perceived; it is decoded using the internal representation of language; it is interpreted using knowledge of syntax, semantics, and pragmatics.\n" +
            "Reading involves saccades and fixations, and perception occurs during fixations.\n" +
            "Word shape is important for recognition, and negative contrast improves reading from a computer screen.",
          tags: ["Reading"],
          ref: "Lecture 02 — Slide 9",
        },

        {
          type: "essay",
          q: "4. Explain hearing: the ear's physical apparatus, sound properties, and the filtering ability of the auditory system.",
          translation: "اشرح السمع: أجزاء الأذن وخصائص الصوت وقدرة الفلترة.",
          answer:
            "Hearing gives information about the environment: distances, directions, objects.\n" +
            "Outer ear protects the inner ear and amplifies sound; middle ear transmits sound waves as vibrations to the inner ear; inner ear releases chemical transmitters that cause impulses in the auditory nerve.\n" +
            "Sound: pitch is frequency, loudness is amplitude, timbre is type or quality.\n" +
            "Humans hear 20Hz to 15kHz and are less accurate distinguishing high frequencies than low. The auditory system filters sounds, e.g. the cocktail party phenomenon.",
          tags: ["Hearing"],
          ref: "Lecture 02 — Slide 10, 11",
        },

        {
          type: "essay",
          q: "5. Explain touch and movement, including reaction times and Fitts' Law.",
          translation: "اشرح اللمس والحركة مع أزمنة رد الفعل وقانون Fitts.",
          answer:
            "Touch provides feedback about the environment and may be the key sense for the visually impaired. Receptors in the skin: thermoreceptors (heat and cold), nociceptors (pain), mechanoreceptors (pressure, some instant, some continuous). Some areas such as fingers are more sensitive. Kinethesis is awareness of body position and affects comfort and performance.\n" +
            "Movement: response time = reaction time + movement time. Reaction time depends on stimulus: visual ~200 ms, auditory ~150 ms, pain ~700 ms. Increasing reaction time decreases accuracy in the unskilled operator but not in the skilled one.\n" +
            "Fitts' Law: Mt = a + b log2(D/S + 1), where a and b are empirical constants, Mt is movement time, D is distance, S is target size. Targets should be as large as possible and distances as small as possible.",
          tags: ["Touch", "Movement", "Fitts' Law"],
          ref: "Lecture 02 — Slide 12-14",
        },

        {
          type: "essay",
          q: "6. Describe the three types of memory and the characteristics of each.",
          translation: "اوصف أنواع الذاكرة الثلاثة وخصائص كل منها.",
          answer:
            "Sensory memory: buffers for stimuli received through the senses (iconic for visual, echoic for aural, haptic for tactile); continuously overwritten.\n" +
            "Short-term memory (working memory): scratch-pad for temporary recall; rapid access ~70 ms, rapid decay ~200 ms, limited capacity of 7 ± 2 chunks.\n" +
            "Long-term memory: repository for all knowledge; slow access ~1/10 second, slow decay if any, huge or unlimited capacity; two types: episodic (serial memory of events) and semantic (structured memory of facts, concepts, skills).\n" +
            "Attention moves information from sensory memory to STM, and rehearsal moves it from STM to LTM.",
          tags: ["Memory"],
          ref: "Lecture 02 — Slide 15-19",
        },

        {
          type: "essay",
          q: "7. Explain the models of long-term memory: semantic network, frames, scripts, and production rules.",
          translation: "اشرح نماذج الذاكرة طويلة المدى.",
          answer:
            "Semantic network: represents relationships between bits of information; child nodes inherit properties of parent nodes, which supports inference through inheritance (e.g. Dog, Collie, Beagle, Snoopy).\n" +
            "Frames: information organized in data structures with slots instantiated with values, and type-subtype relationships (fixed, default, and variable slots, e.g. DOG and COLLIE).\n" +
            "Scripts: models of stereotypical information required to interpret a situation, with elements instantiated for context (entry conditions, result, props, roles, scenes, tracks, e.g. a visit to the vet).\n" +
            "Production rules: representation of procedural knowledge as condition/action rules (e.g. IF dog is wagging tail THEN pat dog).",
          tags: ["LTM models"],
          ref: "Lecture 02 — Slide 20-24",
        },

        {
          type: "essay",
          q: "8. Explain how information is stored in, forgotten from, and retrieved from long-term memory.",
          translation: "اشرح تخزين المعلومات في LTM ونسيانها واسترجاعها.",
          answer:
            "Storage: rehearsal moves information from STM to LTM; total time hypothesis (retention proportional to rehearsal time); distribution of practice effect (optimized by spreading learning over time); structure, meaning and familiarity make information easier to remember.\n" +
            "Forgetting: decay (information lost gradually but very slowly); interference (new replaces old = retroactive interference; old interferes with new = proactive inhibition). Memory is selective and affected by emotion, so we may subconsciously choose to forget.\n" +
            "Retrieval: recall (reproducing information, assisted by cues such as categories and imagery) and recognition (knowing that information has been seen before; less complex than recall because the information is the cue).",
          tags: ["LTM storage", "Forgetting", "Retrieval"],
          ref: "Lecture 02 — Slide 25-27",
        },

        {
          type: "essay",
          q: "9. Compare deduction, induction, and abduction, and explain the problem solving theories mentioned in the lecture.",
          translation:
            "قارن بين deduction وinduction وabduction واشرح نظريات حل المشكلات.",
          answer:
            "Deduction: derive a logically necessary conclusion from given premises (e.g. If it is Friday she goes to work; it is Friday; therefore she goes to work). A logical conclusion is not necessarily true, and people bring world knowledge to bear.\n" +
            "Induction: generalize from cases seen to cases unseen (e.g. all elephants seen have trunks). Unreliable since it can only prove false not true, but useful. Humans are not good at using negative evidence (Wason's cards).\n" +
            "Abduction: reasoning from event to cause (e.g. Sam drives fast when drunk). Unreliable as it can lead to false explanations.\n" +
            "Problem solving: finding a solution to an unfamiliar task using knowledge. Gestalt theory: productive and reproductive problem solving, insight and restructuring. Problem space theory: problem states, legal operators, heuristics such as means-ends analysis, within human information processing limits (e.g. STM). Analogy uses knowledge of a similar problem from a similar domain. Skill acquisition is characterized by chunking and more effective structuring of information.",
          tags: ["Reasoning", "Problem solving"],
          ref: "Lecture 02 — Slide 28-36",
        },

        {
          type: "essay",
          q: "10. Explain slips and mistakes, the role of emotion in interaction, and why individual differences matter in design.",
          translation:
            "اشرح الـ slips والـ mistakes ودور العاطفة والفروق الفردية في التصميم.",
          answer:
            "Slips: right intention but failed to do it right (poor physical skill, inattention; a change to skilled behaviour can cause a slip). Mistakes: wrong intention caused by incorrect understanding; humans create mental models, and if they differ from the actual system, errors occur.\n" +
            "Emotion: theories include James-Lange, Cannon, and Schacter-Singer; emotion involves both cognitive and physical responses. Affect is the biological response to physical stimuli: positive affect leads to creative problem solving, negative affect to narrow thinking. Implications: stress increases problem-solving difficulty, relaxed users are more forgiving, and aesthetically pleasing interfaces increase positive affect.\n" +
            "Individual differences: long term (sex, physical and intellectual abilities), short term (stress, fatigue), changing (age). Designers should ask whether a design decision will exclude a section of the user population.",
          tags: ["Errors", "Emotion", "Individual differences"],
          ref: "Lecture 02 — Slide 37-41",
        },

        {
          type: "essay",
          q: "11. Using Fitts' Law Mt = a + b log2(D/S + 1) with a = 0.1 s and b = 0.15 s/bit, calculate the movement time to hit a target of size S = 30 pixels at distance D = 300 pixels. Then calculate it again if the target size is doubled to 60 pixels.",
          translation:
            "باستخدام قانون Fitts مع a = 0.1 ثانية وb = 0.15، احسب زمن الحركة لهدف حجمه 30 بكسل على بعد 300 بكسل، ثم احسبه لو الحجم اتضاعف لـ 60 بكسل.",
          answer:
            "Law: Mt = a + b log2(D/S + 1).\n" +
            "Case 1: D/S = 300/30 = 10; log2(10 + 1) = log2(11) = 3.459; Mt = 0.1 + 0.15 x 3.459 = 0.619 s (about 0.62 s).\n" +
            "Case 2: D/S = 300/60 = 5; log2(5 + 1) = log2(6) = 2.585; Mt = 0.1 + 0.15 x 2.585 = 0.488 s (about 0.49 s).\n" +
            "Conclusion: larger targets reduce movement time, consistent with the rule 'targets as large as possible'.",
          tags: ["Fitts' Law", "Calculation"],
          ref: "Lecture 02 — Slide 14",
        },

        {
          type: "essay",
          q: "12. A user responds to a visual stimulus and to an auditory stimulus. Assume the movement time is 300 ms in both cases. Using the typical reaction times from the lecture, calculate the total response time for each.",
          translation:
            "مستخدم بيستجيب لمنبه بصري وآخر سمعي، وزمن الحركة 300ms في الحالتين. احسب زمن الاستجابة الكلي لكل واحد.",
          answer:
            "Law: response time = reaction time + movement time.\n" +
            "Visual: 200 ms + 300 ms = 500 ms.\n" +
            "Auditory: 150 ms + 300 ms = 450 ms.\n" +
            "The auditory response is 50 ms faster because auditory reaction time (~150 ms) is shorter than visual (~200 ms).",
          tags: ["Reaction time", "Calculation"],
          ref: "Lecture 02 — Slide 13",
        },

        {
          type: "essay",
          q: "13. The lecture shows the digit string 212348278493202 and the grouped number 0121 414 2626. Assuming each digit in the first string is one chunk and each group in the second is one chunk, how many chunks is each, and which is within the short-term memory capacity?",
          translation:
            "المحاضرة بتعرض سلسلة 212348278493202 والرقم المجمّع 0121 414 2626. لو كل رقم في الأولى chunk وكل مجموعة في التانية chunk، كام chunk في كل واحدة وأيهما ضمن سعة STM؟",
          answer:
            "Capacity of STM = 7 ± 2 chunks (5 to 9 chunks).\n" +
            "212348278493202 has 15 digits, so 15 chunks, which exceeds the maximum of 9, so it is hard to hold in STM.\n" +
            "0121 414 2626 has 3 groups, so 3 chunks, which is within capacity (the lecture's point: chunking helps optimize STM).",
          tags: ["STM", "Chunking", "Calculation"],
          ref: "Lecture 02 — Slide 17, 18",
        },
      ],
    },
    {
      id: "hci-lecture-03",
      t: "المحاضرة 3: الحاسوب (The Computer)",
      d: "تعريف HCI، أمثلة من الحياة اليومية، أهميته، علاقته بالمجالات الأخرى (UX / UI / Interaction Design)، مبادئ التصميم، والمكونات الرئيسية.",
      pdf: "datenew/subjects/hci/lectures/Lec 3/Lec 3.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-03-Questions.pdf",
      // فئات محاضرات تفاعل الإنسان والحاسوب (HCI)
      // فئات روابط منظمة - المحاضرة الثالثة: مكونات الحاسوب والأجهزة الطرفية في تفاعل الإنسان والحاسوب (HCI)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمكونات الحاسوب، أجهزة الإدخال والإخراج، والذاكرة في HCI",
          links: [
            {
              t: "أ. أفنان العمري - أجهزة الحاسوب وأساليب التفاعل (Input & Output Devices)",
              d: "شرح تفصيلي بالعربي لأجهزة الإدخال (لوحة المفاتيح، الفأرة، الشاشات اللمسية) والإخراج وأثرها على تفاعل المستخدم",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=6NhQBpb0SHY",
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
            "مراجع أكاديمية ومقالات تفصيلية حول أجهزة الحاسوب وقوانين التفاعل مثل Fitts' Law وتصميم الأجهزة",
          links: [
            {
              t: "Interaction Design Foundation (IxDF) - Hardware & Interface Devices in HCI",
              d: "مكتبة المراجع العالمية لدراسة العلاقة بين الأجهزة المادية وتجربة المستخدم وسهولة الاستخدام",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.interaction-design.org/literature/topics/human-computer-interaction",
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
            "أدوات ومواقع محاكاة تفاعلية لاختبار الأجهزة، النماذج ثلاثية الأبعاد، وتجربة التفاعل",
          links: [
            {
              t: "Blender - 3D Modeling & VR Simulation Tool",
              d: "أداة احترافية لتصميم النماذج ثلاثية الأبعاد وبيئات الواقع الافتراضي (VR) وأنظمة التفاعل المتقدمة",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.blender.org/",
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
          q: "1. According to the lecture, the devices used in a computer system dictate what?",
          options: [
            "The styles of interaction the system supports",
            "The price of the system",
            "The speed of the network",
            "The size of the memory",
          ],
          correct: 0,
          translation:
            "حسب المحاضرة، الأجهزة المستخدمة في نظام الحاسوب بتحدد إيه؟",
          explanation:
            "الأجهزة هي اللي بتحدد أنماط التفاعل اللي النظام يدعمها، ولو غيّرنا الأجهزة يتغير نمط التفاعل. السعر والسرعة والذاكرة مش هي اللي المحاضرة بتربطها بنمط التفاعل.",
          tags: ["Interaction styles", "Devices"],
          ref: "Lecture 03 — Slide 4",
        },

        {
          q: "2. In the era of batch processing, which description is correct?",
          options: [
            "Punched card stacks were prepared, followed by a long wait for line printer output",
            "Users received rapid feedback and were in control",
            "Voice commands were used to run programs",
            "Touch screens were the main input device",
          ],
          correct: 0,
          translation: "في عصر المعالجة الدفعية (batch processing)، أي وصف صح؟",
          explanation:
            "في الـ batch كانوا يجهزوا كروت مثقبة وبعدها انتظار طويل لمخرجات الطابعة. وصف التغذية الراجعة السريعة وتحكم المستخدم بيخص الحوسبة التفاعلية الحالية مش الـ batch.",
          tags: ["Batch processing", "Interactivity"],
          ref: "Lecture 03 — Slide 7",
        },

        {
          q: "3. Why is the QWERTY layout described as not optimal for typing?",
          options: [
            "It was designed to prevent typewriters from jamming",
            "It places vowels far from the home row on purpose",
            "It was designed for one-handed use",
            "It was created for phone pads",
          ],
          correct: 0,
          translation: "ليه ترتيب QWERTY مش الأمثل للكتابة؟",
          explanation:
            "الترتيب اتصمم أصلاً عشان يمنع تعليق الآلات الكاتبة. باقي الاختيارات مش سبب ذكره الدكتور.",
          tags: ["QWERTY", "Keyboards"],
          ref: "Lecture 03 — Slide 12",
        },

        {
          q: "4. Which keyboard layout places common letters under the dominant fingers and alternates common letter combinations between hands?",
          options: ["Dvorak", "Alphabetic", "QWERTY", "Chord"],
          correct: 0,
          translation:
            "أي ترتيب كيبورد بيحط الحروف الشائعة تحت الأصابع القوية وبيبدّل بين اليدين في تركيبات الحروف؟",
          explanation:
            "ده تعريف Dvorak وبيعطي تحسن 10-15% في السرعة. الـ Alphabetic مش أسرع لا للمحترفين ولا للمبتدئين.",
          tags: ["Dvorak", "Keyboard layouts"],
          ref: "Lecture 03 — Slide 15",
        },

        {
          q: "5. Which statement about chord keyboards is correct?",
          options: [
            "They have a full set of 100+ keys",
            "Letters are typed as a combination of keypresses on only a few keys",
            "They are the slowest text-entry device",
            "They need no learning time and have no fatigue issues",
          ],
          correct: 1,
          translation: "أي عبارة عن chord keyboards صحيحة؟",
          explanation:
            "الـ chord keyboard فيه 4 أو 5 مفاتيح بس، والحرف بيتكتب بمجموعة ضغطات. هو سريع بعد التدريب وحجمه صغير، لكن فيه مقاومة اجتماعية وتعب بعد الاستخدام الطويل.",
          tags: ["Chord keyboards"],
          ref: "Lecture 03 — Slide 17",
        },

        {
          q: "6. In T9 predictive text entry, how is the word guessed?",
          options: [
            "By pressing each key multiple times",
            "By recognizing the user's handwriting",
            "By measuring pressure on the key",
            "By typing one key per letter and using a dictionary to guess the word",
          ],
          correct: 3,
          translation: "في T9، إزاي بيتخمن الكلمة؟",
          explanation:
            "في T9 بتضغط مفتاح واحد لكل حرف والنظام بيستخدم قاموس يخمن الكلمة. الضغط المتكرر هو الطريقة العادية للـ phone pad قبل T9.",
          tags: ["T9", "Phone pad"],
          ref: "Lecture 03 — Slide 19",
        },

        {
          q: "7. Speech recognition works best in which situation?",
          options: [
            "Many speakers with a large vocabulary in a noisy room",
            "A single trained user with a limited vocabulary",
            "Any user with imprecise pronunciation",
            "Several users speaking at once",
          ],
          correct: 1,
          translation: "التعرف على الكلام بيشتغل أحسن في أنهي حالة؟",
          explanation:
            "بينجح أكتر مع مستخدم واحد مدرَّب ومفردات محدودة. الضوضاء وتعدد المتحدثين والمفردات الكبيرة كلها مشاكل.",
          tags: ["Speech recognition"],
          ref: "Lecture 03 — Slide 21",
        },

        {
          q: "8. Why is the mouse called an indirect manipulation device?",
          options: [
            "Mouse movement is in the (x, z) plane while the cursor moves in the (x, y) plane",
            "It needs a cable to connect",
            "It cannot detect movement",
            "It obscures the screen",
          ],
          correct: 0,
          translation: "ليه الماوس اسمه جهاز تحكم غير مباشر؟",
          explanation:
            "حركة الماوس في المستوى (x, z) بينما المؤشر على الشاشة في (x, y). الماوس مش بيحجب الشاشة، وده من مميزاته.",
          tags: ["Mouse", "Indirect manipulation"],
          ref: "Lecture 03 — Slide 25",
        },

        {
          q: "9. What is an advantage of optical mice over mechanical mice?",
          options: [
            "They require a ball on the underside",
            "They only work on a special grid pad",
            "They are less susceptible to dust and dirt",
            "They detect absolute position",
          ],
          correct: 2,
          translation: "إيه ميزة الماوس الضوئي مقارنة بالميكانيكي؟",
          explanation:
            "الضوئي أقل تأثراً بالتراب. الكرة موجودة في الميكانيكي، والماوس بيكتشف الحركة النسبية بس مش المطلقة.",
          tags: ["Optical mouse", "Mechanical mouse"],
          ref: "Lecture 03 — Slide 26",
        },

        {
          q: "10. Which is a disadvantage of touch-sensitive screens?",
          options: [
            "They require a specialised pointer",
            "They are imprecise for small regions and the finger can mark the screen",
            "They are slow for menu selection",
            "They cannot be used in hostile environments",
          ],
          correct: 1,
          translation: "أي واحدة من عيوب شاشات اللمس؟",
          explanation:
            "الإصبع مش دقيق ويسيب علامات على الشاشة. باقي الاختيارات غلط لأن الشاشات اللمسية مش محتاجة مؤشر خاص، وسريعة في اختيار القوائم، ومناسبة للبيئات القاسية.",
          tags: ["Touch screen"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          q: "11. What is the main use of eyegaze today according to the lecture?",
          options: [
            "Mainly for gaming",
            "Mainly for printing",
            "Mainly for text entry on phones",
            "Mainly for evaluation, with potential for hands-free control",
          ],
          correct: 3,
          translation:
            "إيه الاستخدام الرئيسي لتتبع النظر (eyegaze) حسب المحاضرة؟",
          explanation:
            "بيُستخدم أساساً للتقييم، ولديه إمكانية للتحكم بدون استخدام اليدين. الدقة العالية محتاجة headset.",
          tags: ["Eyegaze"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          q: "12. What does 'colour depth' mean?",
          options: [
            "The density of pixels per inch",
            "The ratio between width and height",
            "The number of pixels on the screen",
            "How many different colours each pixel can have",
          ],
          correct: 3,
          translation: "إيه معنى عمق اللون (colour depth)؟",
          explanation:
            "عمق اللون = عدد الألوان المختلفة لكل بكسل (مثلاً 8 بت لكل لون من RGB = ملايين الألوان). كثافة البكسل هي الـ dpi، والنسبة بين العرض والارتفاع هي aspect ratio.",
          tags: ["Colour depth", "Resolution"],
          ref: "Lecture 03 — Slide 39",
        },

        {
          q: "13. What does anti-aliasing do?",
          options: [
            "Makes lines thicker",
            "Increases the refresh rate",
            "Softens jagged edges by using shades of the line colour",
            "Removes colours from the screen",
          ],
          correct: 2,
          translation: "إيه وظيفة الـ anti-aliasing؟",
          explanation:
            "بيخفف حواف الـ jaggies باستخدام درجات من لون الخط، وبيُستخدم مع النصوص كمان.",
          tags: ["Anti-aliasing", "Jaggies"],
          ref: "Lecture 03 — Slide 40",
        },

        {
          q: "14. In a cathode ray tube (CRT), what makes the screen glow?",
          options: [
            "Liquid crystal polarisation",
            "A beam of electrons hitting a phosphor-coated screen",
            "A laser reflected off a mirror",
            "Reflected ambient light",
          ],
          correct: 1,
          translation: "في شاشة CRT، إيه اللي بيخلي الشاشة تتوهج؟",
          explanation:
            "شعاع إلكترونات من المدفع الإلكتروني بيصطدم بشاشة مغطاة بالفوسفور فتتوهج. الاستقطاب البلوري خاص بـ LCD.",
          tags: ["CRT"],
          ref: "Lecture 03 — Slide 41",
        },

        {
          q: "15. Why do LCDs cause less eye strain according to the lecture?",
          options: [
            "They are brighter",
            "Light is reflected, not emitted",
            "They use phosphor",
            "They have higher refresh rates",
          ],
          correct: 1,
          translation: "ليه شاشات LCD بتسبب إجهاد عين أقل حسب المحاضرة؟",
          explanation:
            "الضوء بيتعكس مش بينبعث (N.B. في الشريحة). الفوسفور خاص بـ CRT.",
          tags: ["LCD", "Eye strain"],
          ref: "Lecture 03 — Slide 44",
        },

        {
          q: "16. What causes VR motion sickness according to the lecture?",
          options: [
            "Too much battery usage",
            "Loud sounds in the headset",
            "Conflicting cues such as time delay between head movement and display, and eye angle vs. focus",
            "Low colour depth",
          ],
          correct: 2,
          translation: "إيه سبب دوار الحركة في الواقع الافتراضي؟",
          explanation:
            "الأشارات المتضاربة: تأخر الشاشة عن حركة الراس، وتعارض زاوية العين مع مستوى التركيز. الأسباب الأخرى مش مذكورة.",
          tags: ["VR", "Motion sickness"],
          ref: "Lecture 03 — Slide 55",
        },

        {
          q: "17. Which device uses fibre optics to detect finger position?",
          options: ["Data glove", "3D mouse", "VR helmet", "Joystick"],
          correct: 0,
          translation: "أي جهاز بيستخدم الألياف الضوئية لاكتشاف موضع الأصابع؟",
          explanation:
            "الـ data glove. الـ 3D mouse ليه ست درجات حرية، والـ VR helmet بيكتشف حركة الراس.",
          tags: ["Data glove", "3D interaction"],
          ref: "Lecture 03 — Slide 51",
        },

        {
          q: "18. Devices that provide touch and force feedback, such as vibration in games, are called what?",
          options: [
            "Optical devices",
            "Situated devices",
            "Haptic devices",
            "Raster devices",
          ],
          correct: 2,
          translation:
            "الأجهزة اللي بتوفر إحساس اللمس وقوة الارتداد زي الاهتزاز في الألعاب اسمها إيه؟",
          explanation:
            "اسمها haptic devices. ومثال ذلك BMW iDrive بيحس المستخدم بـ bumps لكل عنصر في القائمة.",
          tags: ["Haptic", "BMW iDrive"],
          ref: "Lecture 03 — Slide 60, 61",
        },

        {
          q: "19. Which printer uses an inked ribbon and a line of pins, with a typical resolution of 80-120 dpi?",
          options: [
            "Laser printer",
            "Dot-matrix printer",
            "Ink-jet printer",
            "Thermal printer",
          ],
          correct: 1,
          translation: "أي طابعة بتستخدم شريط حبر وصف دبابيس وبدقة 80-120 dpi؟",
          explanation:
            "الـ dot-matrix. الـ ink-jet بدقة 300 dpi أو أفضل، والـ laser حوالي 600 dpi أو أكتر، والـ thermal بتستخدم ورق حساس للحرارة.",
          tags: ["Printers", "dpi"],
          ref: "Lecture 03 — Slide 66, 67",
        },

        {
          q: "20. What does OCR do?",
          options: [
            "Converts text into a bitmap",
            "Compresses images losslessly",
            "Converts a bitmap back into text",
            "Predicts the next word",
          ],
          correct: 2,
          translation: "إيه وظيفة الـ OCR؟",
          explanation:
            "بيحول الـ bitmap (صورة ممسوحة) لنص. الماسح الضوئي هو اللي بيحول الورق لـ bitmap.",
          tags: ["OCR", "Scanners"],
          ref: "Lecture 03 — Slide 73, 75",
        },

        {
          q: "21. Which is true about RAM compared with disks?",
          options: [
            "RAM is non-volatile and slower",
            "RAM stores data for decades without power",
            "RAM is on silicon chips, has fast access (~100 ns) and is usually volatile",
            "RAM is optical",
          ],
          correct: 2,
          translation: "أي عبارة صحيحة عن الـ RAM مقارنة بالأقراص؟",
          explanation:
            "الـ RAM على شرائح سيليكون وسريعة (حوالي 100 نانو ثانية) وعادة تفقد البيانات بانقطاع الكهرباء (volatile). الأقراص أبطأ (~10ms).",
          tags: ["RAM", "Volatile"],
          ref: "Lecture 03 — Slide 78, 79",
        },

        {
          q: "22. What problem does virtual memory solve, and what is its drawback?",
          options: [
            "Not enough RAM; swapping to disk slows things down",
            "Not enough disk space; it makes the CPU hotter",
            "Screen resolution; it blurs text",
            "Network speed; it loses packets",
          ],
          correct: 0,
          translation: "الـ virtual memory بيحل أنهي مشكلة، وإيه عيبه؟",
          explanation:
            "بيخزن بعض البرامج مؤقتاً على القرص فيبان إن الـ RAM أكبر، لكن الـ swapping (النسخ من القرص للـ RAM) بيبطّئ النظام.",
          tags: ["Virtual memory", "Swapping"],
          ref: "Lecture 03 — Slide 82",
        },

        {
          q: "23. Which of these is a lossless compression format?",
          options: ["JPEG", "MP3", "MPEG lossy audio", "GIF"],
          correct: 3,
          translation: "أي واحد من دول بيستخدم ضغط بدون فقدان (lossless)؟",
          explanation:
            "الـ GIF وZIP من أمثلة lossless. الـ JPEG وMP3 من أمثلة lossy بيستغلوا حدود الإدراك الحسي.",
          tags: ["Compression", "Lossless"],
          ref: "Lecture 03 — Slide 83",
        },

        {
          q: "24. According to Moore's law as described in the lecture, how often does processor speed double?",
          options: [
            "Every 6 months",
            "Every 12 months",
            "Every 5 years",
            "Every 18 months",
          ],
          correct: 3,
          translation:
            "حسب قانون مور كما في المحاضرة، كل قد إيه بتتضاعف سرعة المعالج؟",
          explanation:
            "كل 18 شهر. الذاكرة بتتضاعف كل 12 شهر فمدة الـ 12 شهر خاصة بالذاكرة مش المعالج.",
          tags: ["Moore's law"],
          ref: "Lecture 03 — Slide 89",
        },

        {
          q: "25. Which limitation is described as 'bottleneck in transference of data from disk to memory'?",
          options: [
            "Computation bound",
            "Graphics bound",
            "Network capacity",
            "Storage channel bound",
          ],
          correct: 3,
          translation:
            "أي قيد وُصف بأنه 'عنق زجاجة في نقل البيانات من القرص للذاكرة'؟",
          explanation:
            "ده الـ Storage channel bound. الـ Computation bound يعني الحساب بياخد وقت طويل، والـ Graphics bound عن تحديث الشاشة.",
          tags: ["Performance limits", "Storage"],
          ref: "Lecture 03 — Slide 91",
        },

        {
          type: "essay",
          q: "1. List the elements of a computer system that affect interaction, and explain why we need to understand computers in HCI.",
          translation:
            "اذكر عناصر نظام الحاسوب المؤثرة على التفاعل وليه لازم نفهم الحاسوب في HCI.",
          answer:
            "Elements: input devices (text entry and pointing), output devices (screens, digital paper), virtual reality (special interaction and display devices), physical interaction (sound, haptic, bio-sensing), paper (print and scan), memory (RAM and permanent media), processing (speed, networks).\n" +
            "Each element affects the interaction. To understand HCI we need to understand what goes in and out (devices, paper, sensors) and what the computer can do (memory, processing, networks). The devices dictate the styles of interaction the system supports.",
          tags: ["Computer system", "Interaction"],
          ref: "Lecture 03 — Slide 2-4",
        },

        {
          type: "essay",
          q: "2. Compare the QWERTY, alphabetic, and Dvorak keyboard layouts, and explain why QWERTY remains dominant.",
          translation:
            "قارن بين ترتيبات QWERTY وAlphabetic وDvorak وليه QWERTY لسه مسيطر.",
          answer:
            "QWERTY: standardised layout, but not optimal for typing because it was designed to prevent typewriters jamming.\n" +
            "Alphabetic: keys in alphabetic order; not faster for trained typists or beginners.\n" +
            "Dvorak: common letters under dominant fingers, biased towards the right hand, common letter combinations alternate between hands; 10-15% improvement in speed and less fatigue.\n" +
            "QWERTY remains dominant because the large social base of QWERTY typists creates market pressure and reluctance to change.",
          tags: ["Keyboards", "QWERTY", "Dvorak"],
          ref: "Lecture 03 — Slide 12-15",
        },

        {
          type: "essay",
          q: "3. Explain chord keyboards and phone-pad text entry (multi-tap and T9).",
          translation:
            "اشرح chord keyboards والكتابة على لوحة الهاتف (multi-tap وT9).",
          answer:
            "Chord keyboards: only 4 or 5 keys; letters typed as combinations of keypresses; compact (ideal for portable use), short learning time, fast once trained; but social resistance and fatigue after extended use; a niche market for some wearables.\n" +
            "Phone pad: numeric keys pressed multiple times (e.g. hello = 4433555 [pause] 555666), surprisingly fast. T9 predictive entry: type one key per letter and a dictionary guesses the word (hello = 43556); ambiguities such as 26 produce a menu of 'am' or 'an'.",
          tags: ["Chord keyboards", "T9"],
          ref: "Lecture 03 — Slide 17-19",
        },

        {
          type: "essay",
          q: "4. Compare the pointing devices: mouse, touchpad, trackball, joystick, and touch screen. Which are direct and which are indirect?",
          translation: "قارن بين أجهزة الإشارة وحدد المباشر وغير المباشر.",
          answer:
            "Mouse: handheld, planar movement and buttons; relative movement only; indirect manipulation (mouse moves in the x-z plane, cursor in x-y); does not obscure the screen, accurate and fast; hand-eye coordination problems for novices; mechanical (ball) or optical (LED, less susceptible to dust).\n" +
            "Touchpad: small touch-sensitive tablet stroked to move the pointer, used in laptops; good acceleration settings are important.\n" +
            "Trackball: ball rotated inside a static housing, like an upside-down mouse; indirect, fairly accurate, very fast for gaming.\n" +
            "Joystick: indirect; pressure of stick = velocity of movement; used for games, aircraft controls and 3D navigation.\n" +
            "Touch screen: direct pointing device; fast, no specialised pointer, good for menu selection; but the finger marks the screen, is imprecise, and lifting the arm is tiring. Stylus and light pen are also direct but can obscure the screen.",
          tags: ["Pointing devices", "Direct vs indirect"],
          ref: "Lecture 03 — Slide 24-32",
        },

        {
          type: "essay",
          q: "5. Compare CRT and LCD displays, including how they work and the health considerations.",
          translation:
            "قارن بين شاشات CRT وLCD من حيث طريقة العمل والاعتبارات الصحية.",
          answer:
            "CRT: a stream of electrons from an electron gun, focused and deflected by magnetic fields, hits a phosphor-coated screen which glows; used in TVs and monitors. Health hazards: X-rays (largely absorbed by the screen), UV/IR (insignificant), radio-frequency and ultrasound emissions, electrostatic field (can cause rashes), electromagnetic fields (concerns about cataracts and reproductive disorders).\n" +
            "LCD: smaller, lighter, no radiation problems. Top plate transparent and polarised, bottom plate reflecting; voltage applied to the crystal changes polarisation and hence colour; light is reflected, not emitted, so there is less eye strain.\n" +
            "Health hints: do not sit too close, avoid very small fonts, take breaks, avoid placing the screen in front of a bright window, work in well-lit surroundings; also consider posture, ergonomics, and stress.",
          tags: ["CRT", "LCD", "Health"],
          ref: "Lecture 03 — Slide 41-44",
        },

        {
          type: "essay",
          q: "6. Define resolution, aspect ratio, colour depth, and anti-aliasing for bitmap displays.",
          translation:
            "عرّف resolution وaspect ratio وcolour depth وanti-aliasing.",
          answer:
            "Resolution: used for the number of pixels (e.g. SVGA 1024 x 768) or pixel density in dpi (typically 72 to 96 dpi).\n" +
            "Aspect ratio: ratio between width and height (4:3 for most screens, 16:9 for wide-screen TV).\n" +
            "Colour depth: how many different colours each pixel can have (black/white or greys, 256 from a palette, 8 bits each for red/green/blue = millions of colours).\n" +
            "Anti-aliasing: softens jagged edges (jaggies, caused by the horizontal raster scan) by using shades of the line colour; also used for text.",
          tags: ["Bitmap displays", "Anti-aliasing"],
          ref: "Lecture 03 — Slide 38-40",
        },

        {
          type: "essay",
          q: "7. Explain large displays, situated displays (with the Hermes example), and digital paper.",
          translation:
            "اشرح الشاشات الكبيرة والـ situated displays مع مثال Hermes وورق الـ digital paper.",
          answer:
            "Large displays: used for meetings and lectures; technologies include plasma, video walls, projected (hand/body may obscure the screen) and back-projected (frosted glass and a projector behind).\n" +
            "Situated displays: displays in public places, display-only or interactive (stylus, touch); location matters because the meaning of information or interaction relates to the location. Hermes: small displays beside office doors where handwritten notes are left using a stylus and the office owner reads them using a web interface.\n" +
            "Digital paper: thin flexible sheets updated electronically while retaining the display, made with small spheres turned or channels with coloured liquid and contrasting spheres; a rapidly developing area.",
          tags: ["Large displays", "Situated displays", "Digital paper"],
          ref: "Lecture 03 — Slide 46-49",
        },

        {
          type: "essay",
          q: "8. Explain virtual reality interaction: 3D positioning devices, VR headsets, and the causes of VR motion sickness.",
          translation: "اشرح التفاعل في الواقع الافتراضي وأسباب دوار الحركة.",
          answer:
            "Positioning in 3D: cockpit and virtual controls, 3D mouse (six degrees of movement: x, y, z plus roll, pitch, yaw), data glove (fibre optics detect finger position), VR helmets (detect head motion and possibly eye gaze), whole-body tracking (accelerometers or reflective dots with video processing).\n" +
            "3D displays: desktop VR with perspective and motion; stereoscopic vision via VR helmets or shuttered glasses; VR headsets use a small screen for each eye at slightly different angles. Simulators and VR caves project scenes on walls with real controls.\n" +
            "Motion sickness: time delay between head movement and display movement, and depth perception conflict (stereo distance versus all being focused in the same plane); conflicting cues cause sickness.",
          tags: ["VR", "3D interaction", "Motion sickness"],
          ref: "Lecture 03 — Slide 50-56",
        },

        {
          type: "essay",
          q: "9. Describe physical controls and sensing: dedicated displays, sounds, haptic devices, and environment and bio-sensing.",
          translation:
            "اوصف التحكم المادي والاستشعار: الشاشات المخصصة والأصوات والأجهزة اللمسية والاستشعار البيئي والحيوي.",
          answer:
            "Dedicated displays: analogue (dials, gauges, lights), digital (small LCD screens, LEDs), head-up displays (aircraft cockpits, showing the most important controls depending on context).\n" +
            "Sounds: beeps, bongs, clonks, whistles and whirrs, used for error indications and confirmation of actions (e.g. keyclick).\n" +
            "Touch, feel, smell: touch is important in games (vibration, force feedback) and simulation (feel of surgical instruments), called haptic devices; texture, smell and taste technology is very limited. Example: BMW iDrive gives small bumps for each menu item.\n" +
            "Environment and bio-sensing: car courtesy light switch, ultrasound detectors, RFID tags, temperature, weight, location; and body sensing such as iris scanners, body temperature, heart rate, galvanic skin response, blink rate.",
          tags: ["Physical controls", "Haptic", "Sensors"],
          ref: "Lecture 03 — Slide 57-63",
        },

        {
          type: "essay",
          q: "10. Explain printing, fonts, and scanning: printer types, font properties, readability, page description languages, scanners, and OCR.",
          translation: "اشرح الطباعة والخطوط والمسح الضوئي.",
          answer:
            "Printing: images made from small dots; critical features are resolution (dpi), speed (pages per minute), and cost. Dot-matrix (inked ribbon and pins, 80-120 dpi), ink-jet/bubble-jet (300 dpi or better), laser (electrostatic drum and toner, 600 dpi or better), thermal (heat-sensitive paper, simple and low maintenance).\n" +
            "Fonts: size measured in points (1 pt about 1/72 inch); fixed-pitch vs variable-pitched; serif vs sans-serif. Readability: lowercase makes word shape easy to read; UPPERCASE is better for individual letters and non-words such as flight numbers; serif helps on long printed lines, but sans-serif is often better on screen.\n" +
            "Page description languages (e.g. PostScript) send a description of the page instead of a huge bitmap. WYSIWYG aims for screen and print to match but they differ (72 dpi landscape vs 600+ dpi portrait).\n" +
            "Scanners convert paper to a bitmap (flat-bed or hand-held, 600-2400 dpi); OCR converts the bitmap back into text, facing issues with different fonts and page formats.",
          tags: ["Printing", "Fonts", "Scanning", "OCR"],
          ref: "Lecture 03 — Slide 65-75",
        },

        {
          type: "essay",
          q: "11. Compare short-term memory (RAM) and long-term storage (disks), and explain virtual memory and compression.",
          translation: "قارن بين RAM والأقراص واشرح virtual memory والضغط.",
          answer:
            "RAM: silicon chips, ~100 ns access, usually volatile, ~100 Mbytes/s transfer; typical desktop 64 to 256 Mbytes; some non-volatile RAM stores set-up information.\n" +
            "Disks: magnetic (floppy ~1.4 Mbytes; hard disks 40 Gbytes to hundreds of Gbytes, ~10 ms access) and optical (lasers, more robust than magnetic; CD-ROM, DVD). Flash memory is silicon-based but persistent.\n" +
            "Virtual memory: stores some programs temporarily on disk to make RAM appear bigger, but swapping from disk to RAM slows things down.\n" +
            "Compression: lossless (exact recovery, e.g. GIF, ZIP, by finding commonalities such as 10A5B8C) and lossy (something like the original, e.g. JPEG, MP3, exploiting perception).",
          tags: ["Memory", "Virtual memory", "Compression"],
          ref: "Lecture 03 — Slide 77-83",
        },

        {
          type: "essay",
          q: "12. Explain the effect of finite processing speed, Moore's law, and the myth of the infinitely fast machine. What limits interactive performance?",
          translation:
            "اشرح تأثير محدودية سرعة المعالجة وقانون مور وخرافة الآلة السريعة بلا حدود وما الذي يحد من الأداء التفاعلي.",
          answer:
            "Finite speed: designers assume fast processors and make interfaces more complicated, but processing cannot keep up (cursor overshooting from buffered keypresses; icon wars). Too fast can also be a problem (help screens scroll too quickly).\n" +
            "Moore's law: processor speed doubles every 18 months (1987: 1.5 MHz, 2002: 1.5 GHz); memory doubles every 12 months.\n" +
            "Myth of the infinitely fast machine: assuming no delays; good design must account for real machines (e.g. the telephone tones are an accident of implementation that was emulated in design).\n" +
            "Limitations: computation bound, storage channel bound, graphics bound, network capacity. Networked computing gives access to large memory and processing, other people, shared resources, but brings network delays, conflicts when many people update data, and unpredictability.",
          tags: ["Processing speed", "Moore's law", "Networks"],
          ref: "Lecture 03 — Slide 87-92",
        },

        {
          type: "essay",
          q: "13. Describe the history and common protocols of the Internet as presented in the lecture.",
          translation: "اوصف تاريخ الإنترنت والبروتوكولات المشتركة.",
          answer:
            "1969: DARPANET (US Department of Defense) with 4 sites; 1971: 23; 1984: 1000; 1989: 10000.\n" +
            "Common language (protocols): TCP (Transmission Control Protocol) is lower level, sending packets (like letters) between machines; IP (Internet Protocol) provides a reliable channel (like a phone call) between programs on machines; email and HTTP build on top of these.",
          tags: ["Internet", "TCP/IP"],
          ref: "Lecture 03 — Slide 93",
        },

        {
          type: "essay",
          q: "14. A page 11 x 8 inches is scanned at 1200 dpi with 8-bit greyscale (1 byte per pixel), uncompressed. Estimate the file size.",
          translation:
            "صفحة 11 × 8 بوصة اتمسحت بدقة 1200 dpi وبتدرج رمادي 8 بت. قدّر حجم الملف بدون ضغط.",
          answer:
            "Pixels along height = 11 x 1200 = 13,200; along width = 8 x 1200 = 9,600.\n" +
            "Total pixels = 13,200 x 9,600 = 126,720,000 pixels.\n" +
            "At 1 byte per pixel = about 126.7 Mbytes. The lecture quotes roughly 128 Mbytes for this example (rounded).",
          tags: ["Scanning", "Storage size", "Calculation"],
          ref: "Lecture 03 — Slide 81",
        },

        {
          type: "essay",
          q: "15. Calculate the data rate of uncompressed video with resolution 512 x 512, 12-bit colour, and 25 frames per second.",
          translation:
            "احسب معدل بيانات فيديو غير مضغوط بدقة 512×512 ولون 12 بت و25 إطار/ثانية.",
          answer:
            "Pixels per frame = 512 x 512 = 262,144.\n" +
            "Bits per frame = 262,144 x 12 = 3,145,728 bits = 393,216 bytes.\n" +
            "Per second = 393,216 x 25 = 9,830,400 bytes/s, about 10 Mbytes per second (matches the lecture).",
          tags: ["Video", "Storage size", "Calculation"],
          ref: "Lecture 03 — Slide 81",
        },

        {
          type: "essay",
          q: "16. Using Moore's law (processor speed doubles every 18 months), check the lecture's claim that a PC went from 1.5 MHz in 1987 to about 1.5 GHz in 2002.",
          translation:
            "باستخدام قانون مور تحقق من أن سرعة الحاسوب وصلت من 1.5 MHz عام 1987 إلى حوالي 1.5 GHz عام 2002.",
          answer:
            "Time span = 2002 - 1987 = 15 years = 180 months.\n" +
            "Number of doublings = 180 / 18 = 10.\n" +
            "Growth factor = 2^10 = 1024; 1.5 MHz x 1024 = 1,536 MHz, about 1.5 GHz. This matches the lecture.",
          tags: ["Moore's law", "Calculation"],
          ref: "Lecture 03 — Slide 89",
        },

        {
          type: "essay",
          q: "17. Using the run-length idea from the lecture, compress the string AAAAAAAAAABBBBBCCCCCCCC. How many characters are saved, and is this lossless or lossy?",
          translation:
            "باستخدام فكرة الضغط في المحاضرة اضغط السلسلة AAAAAAAAAABBBBBCCCCCCCC وكام حرف اتوفر وهل الضغط lossless ولا lossy؟",
          answer:
            "Count runs: A x 10, B x 5, C x 8.\n" +
            "Compressed form: 10A5B8C (6 characters) versus the original 10 + 5 + 8 = 23 characters, saving 17 characters.\n" +
            "It is lossless compression, because the exact original can be recovered by expanding the counts (like GIF and ZIP).",
          tags: ["Compression", "Lossless", "Calculation"],
          ref: "Lecture 03 — Slide 83",
        },
      ],
    },
    // المحاضرة: Interaction Design Basics — أساسيات تصميم التفاعل (الأهداف، القيود، المستخدم، السيناريوهات، التنقل، تصميم الشاشة، النمذجة والتكرار)
    {
      id: "hci-lecture-05",
      t: "Interaction Design Basics",
      d: "أساسيات تصميم التفاعل: الأهداف والقيود، عملية التصميم، المستخدم والـ Persona، السيناريوهات، تصميم التنقل، تصميم الشاشة، والنماذج الأولية والتكرار.",
      pdf: "datenew/subjects/hci/lectures/Lec 5/Ch 5_HCI_compressed.pdf",
      pdf2: "datenew/subjects/hci/questions/Questions on each lecture/Lecture-05-Questions.pdf",
      // المحاضرة: Interaction Design Basics — أساسيات تصميم التفاعل (الأهداف والقيود، المستخدم والـ Persona، السيناريوهات، التنقل، تصميم الشاشة، النمذجة والتكرار، التوطين)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "قناة وكورسات عربية بالعربي الفصيح لتغطية مفاهيم تصميم التفاعل وتجربة المستخدم.",
          links: [
            {
              t: "كورس تصميم UX/UI وتصميم المنتجات من البداية",
              d: "بليلايست عربي كامل يشرح التفكير التصميمي (Design Thinking) وأبحاث المستخدم وبناء الـ Persona وتصميم التفاعل — مرتبط بموضوعات المحاضرة حول المستخدم والسيناريوهات وعملية التصميم.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة البلايلايست",
                  url: "https://www.youtube.com/playlist?list=PL1h8Fv-RGaUJU3qOThMMja-ACCU1Vn4NF",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أسس تصميم تجربة المستخدم (UX) بالعربي — Coursera",
              d: "كورس مجاني بالعربي من Coursera يغطي أساسيات تصميم تجربة المستخدم والـ Design Thinking والـ User-Centered Design — مرتبط مباشرة بتعريف المحاضرة للتصميم والقاعدة الذهبية «افهم موادّك».",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح الكورس",
                  url: "https://www.coursera.org/learn/foundations-of-user-experience-ux-design-arabic",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "خريطة تعلم UX/UI Designer بالعربي (Figma Community)",
              d: "ملف داخل Figma Community يقدم خريطة طريق عربية لتعلم تصميم تجربة المستخدم وواجهة المستخدم خطوة بخطوة — مرتبط بكل أجزاء عملية التصميم المذكورة في المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح الخريطة",
                  url: "https://www.figma.com/community/file/1252399728161316440/ux-ui-designer-roadmap",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "قنوات ومقاطع موثوقة بالإنجليزي تشرح نفس مفاهيم المحاضرة بعمق أكبر.",
          links: [
            {
              t: "Interaction Design Foundation — YouTube Channel",
              d: "قناة IxDF الرسمية وفيها مقطع «Interaction Design Basics» و«5 Principles of Interaction» — مرتبط بتعريف التصميم وتفهم المواد والقاعدة الذهبية للمحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ زيارة القناة",
                  url: "https://www.youtube.com/@InteractionDesignOrg",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Nielsen Norman Group — YouTube Channel",
              d: "قناة NNGroup فيها شروحات لأبحاث المستخدم والـ Persona والـ Breadcrumbs وتصميم التنقل — مفاهيم مذكورة مباشرة في المحاضرة (الـ Persona، الـ Breadcrumbs، أفكار التنقل).",
              icon: "🌍",
              actions: [
                {
                  label: "▶ زيارة القناة",
                  url: "https://www.youtube.com/channel/UC2oCugzU6W8-h95W7eBTUEg",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Don Norman — Authorized Videos Playlist",
              d: "بلايلايست من NN/G فيه فيديوهات لـ Don Norman مؤسس مصطلح UX يشرح التصميم العاطفي وتصميم الأشياء اليومية — يربط بفهم المحاضرة لمبدأ «الجمال والوظيفة» والـ Human-Centered Design.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة البلايلايست",
                  url: "https://www.youtube.com/playlist?list=PLJOFJ3Ok_idv_6hQGNt23xVXuQwKFmfxG",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "User Persona and Scenarios (YouTube)",
              d: "مقطع فيديو يشرح كيف نبني Personas و Scenarios للمستخدمين المُجزئين — مرتبط مباشرة بقسمي Persona و Scenarios في المحاضرة وكيف نستخدم الـ Persona كمستخدم بديل.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ تشغيل الفيديو",
                  url: "https://www.youtube.com/watch?v=ZveHCx0ms8c",
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
            "مقالات مرجعية موثوقة تشرح نفس المفاهيم بأمثلة إضافية وبيانات بحثية.",
          links: [
            {
              t: "What is Interaction Design? — Figma Resource Library",
              d: "مقال شامل من Figma يعرّف Interaction Design ويفصّل أبعاده الخمسة ومبادئه — مرتبط بتعريف المحاضرة للتصميم والأهداف والقيود و«فهم موادّك».",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.figma.com/resource-library/interaction-design",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Personas Make Users Memorable — Nielsen Norman Group",
              d: "مقال من NN/G يشرح فكرة الـ Persona ودورها في User-Centered Design — مرتبط مباشرة بقسم Persona في المحاضرة و«استخدامها كمستخدم بديل».",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.nngroup.com/articles/persona",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Breadcrumbs: 11 Design Guidelines — NN/G",
              d: "مقال يقدم 11 قاعدة لتصميم الـ Breadcrumbs — مرتبط مباشرة بقسم «Local (where you are – breadcrumbs)» في المحاضرة ووظيفة الـ Breadcrumbs في إظهار مسار الموقع.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.nngroup.com/articles/breadcrumbs",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Prototyping in HCI — GeeksforGeeks",
              d: "مقال يشرح النمذجة في HCI ودورها في عملية التصميم التكرارية — مرتبط بقسم Prototyping في المحاضرة ومبدأ «You never get it right first time».",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/system-design/prototyping-in-human-computer-interactionhci",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Internationalization vs Localization — UXPin",
              d: "مقال يفرّق بين Internationalization و Localization مع ممارسات عملية — مرتبط بقسم «Across countries and cultures» في المحاضرة واستخدام قاعدة بيانات resource بدل النص الحرفي.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.uxpin.com/studio/blog/internationalization-vs-localization-in-app-design",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "The Encyclopedia of HCI — Interaction Design Foundation",
              d: "موسوعة مجانية من IxDF يكتبها أكثر من 100 مصمم محترف، تغطي تصميم المنتجات والخدمات التفاعلية — مرجع شامل لمفاهيم المحاضرة كلها من تعريف التصميم للنمذجة.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموسوعة",
                  url: "https://ixdf.org/literature/book/the-encyclopedia-of-human-computer-interaction-2nd-ed",
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
            "أدوات وتوتورالز عملية لتطبيق مفاهيم المحاضرة (النمذجة، التنقل، تصميم الشاشة).",
          links: [
            {
              t: "Figma — أداة تصميم ونمذجة تفاعلية",
              d: "Figma هي أداة مجانية للتصميم والنمذجة التفاعلية (prototyping) لتطبيق مفاهيم المحاضرة عمليًا: تصميم الشاشة، التجميع، المحاذاة، المسافة الفاضية، والنمذجة التكرارية.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.figma.com",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Guide to Prototyping in Figma — Official Docs",
              d: "دليل Figma الرسمي لإنشاء النماذج التفاعلية والتدفقات — مرتبط بقسم Prototyping في المحاضرة وحلقة «prototype → evaluate → (re-)design».",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الدليل",
                  url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Free Figma Prototype Tutorials — Figma Community",
              d: "توتورالز مجانية تفاعلية لتعلّم النمذجة في Figma خطوة بخطوة (إطارات، اتصالات، انتقالات) — تطبيق مباشر لمبدأ التكرار والنمذجة في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح التوتورالز",
                  url: "https://www.figma.com/community/design-tutorials/prototyping",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "How to Create an Interactive Prototype in Figma (YouTube)",
              d: "مقطع تعليمي خطوة بخطوة لإنشاء نموذج تفاعلي في Figma من البداية للنهاية — مناسب لتطبيق حلقة التكرار في المحاضرة عمليًا.",
              icon: "🔧",
              actions: [
                {
                  label: "▶ تشغيل الفيديو",
                  url: "https://www.youtube.com/watch?v=3TSnohhwbpc",
                  type: "view",
                  color: "red",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        {
          q: "1. According to the lecture, what is design?",
          options: [
            "Achieving goals within constraints",
            "Drawing aesthetically pleasing screens",
            "Writing program code",
            "Selecting color palettes",
          ],
          correct: 0,
          translation: "وفقًا للمحاضرة، ما هو التصميم؟",
          explanation:
            "التصميم هو تحقيق الأهداف ضمن القيود. الأهداف = الغرض (لمَن ولماذا يريدونه). القيود = المواد والمنصات والأجهزة والوقت والتكاليف والخلفية. باقي الاختيارات تمثل أجزاء سطحية فقط من عملية التصميم وليست تعريفه الكامل.",
          tags: ["Design", "Goals", "Constraints"],
          ref: "Lecture 05 — Section: What is design?",
          likely: "high",
        },
        {
          q: "2. The golden rule of design states that you should:",
          options: [
            "Always follow form over function",
            "Understand your materials",
            "Iterate exactly three times",
            "Keep the design as simple as possible",
          ],
          correct: 1,
          translation: "القاعدة الذهبية للتصميم تنص على أنه يجب عليك:",
          explanation:
            "القاعدة الذهبية للتصميم هي «افهم موادّك». في HCI ده معناه تفهم الحاسوب (قيوده وأدواته ومنصاته)، وتفهم الناس (نفسية واجتماعيًا وأخطاء البشر)، وتفهم التفاعل بينهم. الاختيارات التانية مبادئ تانية مش القاعدة الذهبية.",
          tags: ["Golden Rule", "Materials"],
          ref: "Lecture 05 — Section: Golden rule of design",
          likely: "high",
        },
        {
          q: "3. For HCI, understanding your materials means understanding:",
          options: [
            "Only the programming language used",
            "Only the UI component library",
            "Computers, people, and their interaction",
            "Only the underlying hardware",
          ],
          correct: 2,
          translation: "في HCI، فهم موادّك معناه فهم:",
          explanation:
            "المحاضرة بتقول إن لازم نفهم: (1) الحاسوب بقيوده وأدواته ومنصاته، (2) الناس بجوانبهم النفسية والاجتماعية وأخطاء البشر، (3) والتفاعل بينهم. الاختيارات التانية جزئية ومش كاملة.",
          tags: ["Materials", "Computers", "People"],
          ref: "Lecture 05 — Section: Understand your materials (for HCI)",
          likely: "high",
        },
        {
          q: "4. Which of the following is NOT one of the design constraints mentioned in the lecture?",
          options: ["Time", "Costs", "Platforms", "Weather"],
          correct: 3,
          translation: "أيٌّ مما يلي ليس من قيود التصميم المذكورة في المحاضرة؟",
          explanation:
            "القيود المذكورة هي: المواد والمنصات والأجهزة والوقت والتكاليف والخلفية. الطقس (Weather) ليس من القيود المذكورة. الاختيارات التانية كلها قيود حقيقية مذكورة في الشريحة.",
          tags: ["Constraints"],
          ref: "Lecture 05 — Section: What is design? (Constraints)",
          likely: "medium",
        },
        {
          q: "5. The design process described in the lecture begins with:",
          options: [
            "Requirements / what is wanted",
            "Implementation and deployment",
            "Evaluation",
            "Prototyping",
          ],
          correct: 0,
          translation: "عملية التصميم الموصوفة في المحاضرة تبدأ بـ:",
          explanation:
            "الخطوات حسب المحاضرة: Requirements (ما الموجود وما المطلوب) → Analysis → Design → Iteration and Prototyping → Implementation and Deployment. فلابد نبدأ بتحديد المتطلبات. التنفيذ والتقييم والنمذجة خطوات لاحقة.",
          tags: ["Design Process", "Requirements"],
          ref: "Lecture 05 — Section: Steps ...",
          likely: "high",
        },
        {
          q: "6. A persona is best described as:",
          options: [
            "A real user you have interviewed",
            "A description of an example user, not necessarily a real person",
            "The project manager's profile",
            "The designer's own profile",
          ],
          correct: 1,
          translation: "يُوصف الـ Persona أفضل وصف بأنه:",
          explanation:
            "الـ Persona هو وصف لمستخدم «مثالي»، مش بالضرورة شخص حقيقي، يُستخدم كمستخدم بديل: «ماذا كانت ستظن Betty؟». التفاصيل مهمة عشان تخليه حقيقيًا. الاختيار الأول غلط لأن الـ Persona مش لازم يكون شخص حقيقي بالضرورة.",
          tags: ["Persona", "User Focus"],
          ref: "Lecture 05 — Section: Persona",
          likely: "high",
        },
        {
          q: "7. According to the lecture, scenarios are mainly used to:",
          options: [
            "Replace the need for user testing",
            "Document the source code of the system",
            "Communicate design stories and validate other models",
            "Serve as the database schema",
          ],
          correct: 2,
          translation: "وفقًا للمحاضرة، السيناريوهات تُستخدم أساسًا لـ:",
          explanation:
            "السيناريوهات قصص للتصميم، تُستخدم لـ: (1) التواصل مع الآخرين (مصممين وعملاء ومستخدمين)، (2) التحقق من النماذج الأخرى بـ«تشغيلها» ضدها، (3) التعبير عن الديناميكيات. هي مش بديل عن اختبار المستخدم ولا عن قاعدة البيانات ولا عن كود المصدر.",
          tags: ["Scenarios", "Communication"],
          ref: "Lecture 05 — Section: Use scenarios to ...",
          likely: "high",
        },
        {
          q: "8. According to the lecture, scenarios are linear because:",
          options: [
            "The designer is lazy",
            "The system requires it",
            "Users always prefer linear flows",
            "Time is linear and our lives are linear",
          ],
          correct: 3,
          translation: "وفقًا للمحاضرة، السيناريوهات خطية لأن:",
          explanation:
            "المحاضرة بتقول: «الوقت خطي - حياتنا خطية»، لكن السيناريوهات لا تُظهر البدائل. فالخطية تأتي من طبيعة الزمن والحياة، مش من كسل المصمم ولا من متطلبات النظام.",
          tags: ["Scenarios", "Linearity"],
          ref: "Lecture 05 — Section: Scenarios (Linearity)",
          likely: "medium",
        },
        {
          q: "9. The step-by-step walkthrough of a scenario considers which three aspects?",
          options: [
            "What users can see, do, and think",
            "Only the visual design of the screens",
            "Only the technical stack used",
            "Only the marketing goals",
          ],
          correct: 0,
          translation:
            "المراجعة خطوة بخطوة للسيناريو تأخذ في الاعتبار أي ثلاث جوانب؟",
          explanation:
            "السيناريو يغطي: ماذا يمكن للمستخدم أن يرى (مخططات ولقطات شاشة)، وماذا يفعل (لوحة المفاتيح والماوس)، وماذا يفكر فيه. الجوانب البصرية والفنية والتسويقية وحدها قاصرة.",
          tags: ["Scenarios", "Walkthrough"],
          ref: "Lecture 05 — Section: Scenarios ...",
          likely: "high",
        },
        {
          q: "10. Which of the following is NOT one of the levels of navigation design?",
          options: [
            "Widget choice (menus, buttons, etc.)",
            "Database schema design",
            "Screen design (arrangement of buttons)",
            "Application navigation design",
          ],
          correct: 1,
          translation: "أيٌّ مما يلي ليس من مستويات تصميم التنقل؟",
          explanation:
            "المستويات المذكورة: اختيار الـ Widget، تصميم الشاشة، تصميم تنقل التطبيق، والبيئة (تطبيقات أخرى ونظام التشغيل). تصميم قاعدة البيانات مش من مستويات التنقل.",
          tags: ["Navigation", "Levels"],
          ref: "Lecture 05 — Section: Navigation design (Levels)",
          likely: "high",
        },
        {
          q: "11. Breadcrumbs are used to:",
          options: [
            "Replace the global navigation bar entirely",
            "Add decorative icons to the page",
            "Show path through website hierarchy and aid navigation",
            "Display advertisements",
          ],
          correct: 2,
          translation: "تُستخدم فُتات الخبز (Breadcrumbs) لـ:",
          explanation:
            "الـ Breadcrumbs بتوضح مكانك الحالي ضمن هرم الموقع وبتعرض المسار وروابط حية للمستويات الأعلى. هي مش بديل عن التنقل العام ولا عن التنقل المحلي، بل مكمّلة له. الإعلانات والأيقونات الزخرفية مش وظيفتها.",
          tags: ["Navigation", "Breadcrumbs"],
          ref: "Lecture 05 — Section: Local (where you are – breadcrumbs)",
          likely: "high",
        },
        {
          q: '12. The "big button trap" warns designers about:',
          options: [
            "Buttons that are too small to click",
            "Color contrast issues on buttons",
            "Buttons with no text labels",
            "Lots of room for extra text, but where do they actually go?",
          ],
          correct: 3,
          translation: "يحذّر «فخ الزر الكبير» (big button trap) المصممين من:",
          explanation:
            "المحاضرة بتسأل «فين بيمشيوا؟» يعني الزراير الكبيرة بتيجي بمساحة كبيرة للنص لكن مش واضح الوجهة. الفخ مش في الحجم ولا التباين ولا غياب النص، بل في غموض الوجهة.",
          tags: ["Navigation", "Big Button Trap"],
          ref: "Lecture 05 — Section: Beware the big button trap",
          likely: "medium",
        },
        {
          q: "13. Network diagrams in navigation design are used to:",
          options: [
            "Show different paths through the system",
            "Show a strict tree-like structure",
            "Replace hierarchical diagrams",
            "Display database connections only",
          ],
          correct: 0,
          translation:
            "تُستخدم المخططات الشبكية (Network diagrams) في تصميم التنقل لـ:",
          explanation:
            "Network diagrams بتعرض مسارات مختلفة عبر النظام (بمعنى آخر مسارات متعددة بين الشاشات). الـ Hierarchical diagrams بتعرض شكل شجري. الاختيار التالت غلط لأن النوعين مكملين لبعض، والتالت غلط لأنها مش لقواعد البيانات بس.",
          tags: ["Navigation", "Network Diagrams"],
          ref: "Lecture 05 — Section: Network diagrams",
          likely: "high",
        },
        {
          q: "14. The basic principles of screen design and layout include:",
          options: [
            "Only color theory",
            "Grouping, alignment, and use of white space",
            "Only typography choices",
            "Animation principles only",
          ],
          correct: 1,
          translation: "تشمل المبادئ الأساسية لتصميم الشاشة وتنسيقها:",
          explanation:
            "المحاضرة ذكرت: التجميع والبنية والترتيب (grouping, structure, order)، والمحاذاة (alignment)، واستخدام المسافة البيضاء (white space). نظرية الألوان والطباعة والأنيميشن مبادئ تانية مش الأساس المذكور هنا.",
          tags: ["Screen Design", "Layout"],
          ref: "Lecture 05 — Section: Screen design and layout (basic principles)",
          likely: "high",
        },
        {
          q: '15. The principle "form follows function" means that:',
          options: [
            "Aesthetics should always come first",
            "Code structure dictates the UI",
            "Design should match the user's task and purpose",
            "All forms should be circular in shape",
          ],
          correct: 2,
          translation:
            "مبدأ «الشكل يتبع الوظيفة» (form follows function) يعني:",
          explanation:
            "المبدأ معناه إن الشكل يتبع الوظيفة: نسأل إيه اللي المستخدم بيعمله، نفكر المعلومات والمقارنات والترتيب، نصمم على أساس الوظيفة. الجمال أولاً غلط، وكود الـ UI مش اللي يفرض الشكل، والشكل الدائري مجرد مثال مضحك.",
          tags: ["Screen Design", "Form Follows Function"],
          ref: "Lecture 05 — Section: Basic principles (ask / think / design)",
          likely: "high",
        },
        {
          q: "16. For English and European text, the lecture recommends aligning:",
          options: [
            "Center-aligned for readability",
            "Right-aligned for emphasis",
            "Justified for a clean look",
            "Left-aligned because that is how we read",
          ],
          correct: 3,
          translation: "بالنسبة للنص الإنجليزي والأوروبي، توصي المحاضرة بـ:",
          explanation:
            "القراءة من الشمال لليمين (في الإنجليزي والأوروبي)، فالمحاذاة لليسار هي الأسهل للمسح. المحاذاة لليمين أو في الوسط «مناسبة للمؤثرات الخاصة لكن صعبة المسح»، والـ Justified مش مذكور كتوصية.",
          tags: ["Alignment", "Text"],
          ref: "Lecture 05 — Section: Alignment - text",
          likely: "high",
        },
        {
          q: "17. When displaying names for scanning, the lecture suggests:",
          options: [
            "Putting surnames first (e.g., Dix, Alan)",
            "Sorting by first name only",
            "Random order to add variety",
            "Always centering the names",
          ],
          correct: 0,
          translation: "عند عرض الأسماء لأغراض المسح، تقترح المحاضرة:",
          explanation:
            "المستخدم غالبًا بيمسح للألقاب (surnames)، فنضع اللقب أول (مثل: Dix, Alan) عشان أسهل في المسح. الترتيب عشوائي أو توسيط الأسماء مش المسح السهل، والترتيب بالاسم الأول بس غلط.",
          tags: ["Alignment", "Names"],
          ref: "Lecture 05 — Section: Alignment - names",
          likely: "medium",
        },
        {
          q: "18. To make multi-column data easier to scan, the lecture suggests using:",
          options: [
            "Brighter colors for emphasis",
            "Leaders or greying (vertical too)",
            "Larger fonts only",
            "Removing the columns",
          ],
          correct: 1,
          translation:
            "لتسهيل مسح البيانات متعددة الأعمدة، تقترح المحاضرة استخدام:",
          explanation:
            "المسح عبر فجوات الأعمدة صعب، فالمحاضرة بتقترح: (1) Leaders (نقاط رابطة)، (2) Greying (تعتيق عمودي كمان). الألوان الألمع والخط الأكبر مش الحل المذكور، وحذف الأعمدة مش عملي.",
          tags: ["Alignment", "Multiple Columns"],
          ref: "Lecture 05 — Section: Multiple columns (2 / 3)",
          likely: "medium",
        },
        {
          q: "19. White space in design serves to:",
          options: [
            "Waste space on the screen",
            "Add background images",
            "Separate, structure, and highlight",
            "Replace missing content",
          ],
          correct: 2,
          translation: "المسافة البيضاء في التصميم تؤدي وظيفة:",
          explanation:
            "المحاضرة بتقول إن المسافة الفاضية بتخدم ثلاث أغراض: تفصل (separate)، تُبنى (structure)، وبتُبرز (highlight). مثال الـ counter بيوضح إن ما تشوفه هو الفجوات بين العناصر، فالمسافة مش هدر ولا خلفية ولا بديل عن محتوى.",
          tags: ["White Space", "Layout"],
          ref: "Lecture 05 — Section: White space (space to ...)",
          likely: "high",
        },
        {
          q: '20. The "counter" example in the lecture is used to illustrate:',
          options: [
            "A shopping cart interface",
            "A numeric display only",
            "A button design pattern",
            "The contrast between what you see and the gaps between",
          ],
          correct: 3,
          translation: "يُستخدم مثال «الكونتر» (the counter) في المحاضرة لـ:",
          explanation:
            "المحاضرة بتعمل مقارنة بين «WHAT YOU SEE» (ما تراه) و«THE GAPS BETWEEN» (الفجوات بينها)، يعني المسافة البيضاء كمانها من العناصر مهمة زي العناصر نفسها. مش عربة تسوق ولا عرض رقمي ولا نمط زر.",
          tags: ["White Space", "Counter Example"],
          ref: "Lecture 05 — Section: White space - the counter",
          likely: "medium",
        },
        {
          q: "21. For physical controls (e.g., a microwave), grouping should be based on:",
          options: [
            "Function (e.g., defrost settings, type of food, time to cook)",
            "Random order",
            "Color only",
            "Size only",
          ],
          correct: 0,
          translation:
            "بالنسبة للأزرار المادية (مثل الميكروويف)، يجب أن يكون التجميع مبنياً على:",
          explanation:
            "المحاضرة بتجمع الأزرار حسب الوظيفة: إعدادات الإذابة Defrost settings، نوع الطعام type of food، وقت الطبخ time to cook. الترتيب العشوائي أو اللون أو الحجم لوحده مش أساس التجميع.",
          tags: ["Physical Controls", "Grouping"],
          ref: "Lecture 05 — Section: Physical controls (grouping of items)",
          likely: "medium",
        },
        {
          q: "22. According to the lecture, aesthetically pleasing designs:",
          options: [
            "Decrease productivity",
            "Increase user satisfaction and improve productivity",
            "Have no effect on users",
            "Always conflict with usability",
          ],
          correct: 1,
          translation:
            "وفقًا للمحاضرة، التصاميم الجميلة جذريًا (aesthetically pleasing):",
          explanation:
            "المحاضرة بتقول إن التصاميم الجذابة بتزيد رضا المستخدم وبتحسّن الإنتاجية. بس الجمال والوظيفة ممكن يتعارضوا في حالات (زي خلفيات نصية صعبة القراءة). فمش دايماً بيتعارضوا، ومش بيسببو إنتاجية.",
          tags: ["Aesthetics", "Utility"],
          ref: "Lecture 05 — Section: Aesthetics and utility",
          likely: "high",
        },
        {
          q: "23. According to the lecture, beauty and utility may conflict when:",
          options: [
            "Never — they always work together",
            "Only in mobile applications",
            "Mixed visual styles or backgrounds behind text make it hard to read",
            "Only in websites with images",
          ],
          correct: 2,
          translation: "وفقًا للمحاضرة، قد يتعارض الجمال والوظيفة عندما:",
          explanation:
            "أمثلة المحاضرة: أنماط بصرية مختلطة بتبقى سهلة التمييز بس، تصميم نضيف قليل التمايز بيخلطط، خلفيات ورا نص صعبة القراءة (حلوة بس صعبة). مش محصور في موبايل أو ويب، ومش «أبدًا».",
          tags: ["Aesthetics", "Utility", "Conflict"],
          ref: "Lecture 05 — Section: Aesthetics and utility (Beauty and utility may conflict)",
          likely: "medium",
        },
        {
          q: "24. The lecture recommends using color in interfaces:",
          options: [
            "As much as possible to attract attention",
            "Only red and green for status",
            "Only for buttons and links",
            "Sparingly, to reinforce other information",
          ],
          correct: 3,
          translation: "توصي المحاضرة باستخدام اللون في الواجهات:",
          explanation:
            "اللون كتير بيُستاءل لأنه «موجود»، لكن لازم يُستخدم بحذر عشان يعزز معلومات تانية، وننتبه لعمى الألوان (colour blind) وحدود شاشات قديمة. استخدامه بكثرة أو لونين بس أو للأزرار فقط غلط.",
          tags: ["Color", "Design"],
          ref: "Lecture 05 — Section: Colour and 3D",
          likely: "high",
        },
        {
          q: "25. According to the lecture, 3D effects are best used for:",
          options: [
            "Physical information and some graphs",
            "All text for emphasis",
            "Pie charts always",
            "Buttons only",
          ],
          correct: 0,
          translation: "وفقًا للمحاضرة، تأثيرات الـ 3D أفضل استخدامها مع:",
          explanation:
            "الـ 3D كويس للمعلومات المادية وبعض الرسوم البيانية، لكن لو اتحطَّط بيتستخدم (نص في perspective، فطيرة 3D). مش كل النص ولا كل الفطاير ولا الأزرار بس.",
          tags: ["3D", "Color"],
          ref: "Lecture 05 — Section: Colour and 3D (3D effects)",
          likely: "medium",
        },
        {
          q: '26. Which of the following is NOT listed as a "bad use of colour"?',
          options: [
            "Overuse without a good reason",
            "Adjusting your monitor to greys to test readability",
            "Poor use of contrast",
            "Ignoring colour blindness",
          ],
          correct: 1,
          translation: "أيٌّ مما يلي ليس من «الاستخدام السيء للون» المذكور؟",
          explanation:
            "الاستخدام السيء يشمل: الإفراط بلا سبب، تجاهل عمى الألوان، وسوء التباين. أما ضبط الشاشة على الرمادي لاختبار القراءة فهي نصيحة جيدة (do adjust your set!) ومش من الأخطاء. فالاختيار التاني هو الصحيح لأنه «مش سيء».",
          tags: ["Color", "Bad Use"],
          ref: "Lecture 05 — Section: Bad use of colour",
          likely: "medium",
        },
        {
          q: "27. Localisation, as defined in the lecture, means:",
          options: [
            "Same interface for all users worldwide",
            "Removing language options",
            "Changing interfaces for particular cultures/languages",
            "Using only one language throughout",
          ],
          correct: 2,
          translation: "تعني التوطين (Localisation) كما وردت في المحاضرة:",
          explanation:
            "الـ Localisation هي تغيير الواجهات لثقافات ولغات معينة. الـ Internationalisation هي بناء المنتج عشان يقبل التعديل، والـ Globalisation هي اختيار رموز تنفع في كل مكان. فالاختيار التالت هو الصحيح، والتاني والرابع غلط، والأول غلط.",
          tags: ["Localization", "Internationalization"],
          ref: "Lecture 05 — Section: Across countries and cultures",
          likely: "high",
        },
        {
          q: "28. Globalisation, as defined in the lecture, means:",
          options: [
            "Forcing one culture's design on everyone",
            "Translating the UI word-for-word only",
            "Using only English worldwide",
            "Choosing symbols etc. that work everywhere",
          ],
          correct: 3,
          translation: "تعني العولمة (Globalisation) كما وردت في المحاضرة:",
          explanation:
            "الـ Globalisation هي محاولة اختيار رموز ورموز بصريه تنفع في كل مكان. مش فرض تصميم ثقافة، ولا ترجمة حرفية، ولا استخدام إنجليزي فقط. ده يشبه اختيار رموز مشتركة عالميًا.",
          tags: ["Globalization", "Cultures"],
          ref: "Lecture 05 — Section: Across countries and cultures (globalisation)",
          likely: "high",
        },
        {
          q: "29. To support language changes in a localized interface, the lecture recommends using:",
          options: [
            "A 'resource' database instead of literal text",
            "Hard-coded strings in source code",
            "Re-designing the whole interface for each language",
            "Avoiding translation entirely",
          ],
          correct: 0,
          translation:
            "لدعم تغييرات اللغة في واجهة معرّبة، توصي المحاضرة باستخدام:",
          explanation:
            "بدل النص الحرفي (literal text) في الكود، استخدم قاعدة بيانات «resource» فيها النصوص المترجمة. بس انتبه إن الترجمة بتغيّر المقاسات وترتيب الشمال-اليمين. الكود الجاف (hard-coded) أو إعادة التصميم لكل لغة أو تجنب الترجمة كلها غلط.",
          tags: ["Localization", "Resource Database"],
          ref: "Lecture 05 — Section: Across countries and cultures (simply change language?)",
          likely: "medium",
        },
        {
          q: "30. The lecture warns that cultural symbols such as tick and cross:",
          options: [
            "Mean the same thing in every culture",
            "Can have opposite meanings in different cultures",
            "Should never be used in interfaces",
            "Are always positive worldwide",
          ],
          correct: 1,
          translation:
            "تحذّر المحاضرة من أن الرموز الثقافية مثل الصحيحة والخطأ (tick/cross):",
          explanation:
            "في بعض الثقافات الـ tick و الـ cross معناه موجب وسالب (+ve / -ve)، وفي ثقافات تانية معناه «حدّد هذا» (mark this). فمش نفس المعنى في كل مكان، ومش دايماً موجبة، ومش ممنوع استخدامها بس لازم تنتبه.",
          tags: ["Cultural Symbols", "Localization"],
          ref: "Lecture 05 — Section: Across countries and cultures (deeper issues)",
          likely: "medium",
        },
        {
          q: "31. The prototyping principle in the lecture states:",
          options: [
            "Get it right the first time",
            "Skip prototyping in agile projects",
            "You never get it right first time; iterate",
            "Only prototype once, then ship",
          ],
          correct: 2,
          translation: "ينص مبدأ النمذجة في المحاضرة على:",
          explanation:
            "المحاضرة بتقول صراحةً «You never get it right first time» يعني مش هتظبطها من المرة الأولى. لازم تكرر: prototype → evaluate → (re-)design. الوصول للصح من المرة الأولى أو تجاوز النمذجة أو نمذجة وحدة بس كلها غلط.",
          tags: ["Prototyping", "Iteration"],
          ref: "Lecture 05 — Section: Prototyping (You never get it right first time)",
          likely: "high",
        },
        {
          q: "32. The prototyping iteration loop described in the lecture is:",
          options: [
            "Design → deploy → done",
            "Code → test → ship",
            "Sketch → final product",
            "Prototype → evaluate → (re-)design",
          ],
          correct: 3,
          translation: "حلقة تكرار النمذجة الموصوفة في المحاضرة هي:",
          explanation:
            "المحاضرة بتعطي الدايرة: prototype → evaluate → design / re-design → done. لو مش تمامًا، نعيد الكرة. الاختيارات التانية عمليات تطوير برمجي خطي مش دايرة تكرار تصميمي.",
          tags: ["Prototyping", "Iteration Loop"],
          ref: "Lecture 05 — Section: Prototyping (if at first you don't succeed ...)",
          likely: "high",
        },
        {
          type: "essay",
          q: "1. Define design as presented in the lecture, and explain its goals and constraints.",
          translation: "عرّف التصميم كما ورد في المحاضرة، واشرح أهدافه وقيوده.",
          answer:
            'Design is defined in the lecture as "achieving goals within constraints."\nGoals (the purpose):\n  - Who the design is for (the intended users).\n  - Why those users want it (their needs and motivations).\nConstraints (the things that bound the design):\n  - Materials, platforms, and devices available.\n  - Time available for delivery.\n  - Costs and budget.\n  - Background of the team and context.\nIn short, design is the act of meeting the users\' purpose within the limits of the available materials, time, money, and context.',
          tags: ["Design", "Goals", "Constraints"],
          ref: "Lecture 05 — Section: What is design?",
          likely: "high",
        },
        {
          type: "essay",
          q: '2. Explain the golden rule of design and, for HCI, what it means to "understand your materials".',
          translation:
            "اشرح القاعدة الذهبية للتصميم، وماذا يعني في HCI «افهم موادّك».",
          answer:
            'The golden rule of design is: "understand your materials."\nFor Human–Computer Interaction, this means understanding three things:\n  1. Computers — their limitations, capacities, available tools, and the platforms they run on.\n  2. People — their psychological and social aspects, including human error.\n  3. The interaction between computers and people — how the two sides influence each other.\nWithout understanding these three layers, designers cannot make sound decisions about what is feasible, what users actually need, and how the two will work together.',
          tags: ["Golden Rule", "Materials", "HCI"],
          ref: "Lecture 05 — Section: Golden rule of design + Understand your materials",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. List and briefly describe the steps of the design process as presented in the lecture.",
          translation:
            "اذكر واشرح باختصار خطوات عملية التصميم كما عرضت في المحاضرة.",
          answer:
            "The lecture lists the following steps:\n  1. Requirements — what is there now and what is wanted.\n  2. Analysis — ordering and understanding the requirements and context.\n  3. Design — deciding what to do and how to make design choices.\n  4. Iteration and prototyping — getting it right by trying, and finding what is really needed.\n  5. Implementation and deployment — building the system and getting it out to users.\nThese steps are not strictly linear; techniques such as interviews, ethnography, scenarios, task analysis, guidelines, heuristics, dialogue notations, and precise specifications can be applied at several points, and evaluation runs throughout.",
          tags: ["Design Process", "Steps"],
          ref: "Lecture 05 — Section: Steps ...",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. What is a persona? Explain how it is used as a surrogate user during design.",
          translation:
            "ما هو الـ Persona؟ اشرح كيف يُستخدم كمستخدم بديل خلال التصميم.",
          answer:
            'A persona is a description of an "example" user.\nKey characteristics:\n  - It is not necessarily a real person — it is a synthesized description.\n  - It is used as a surrogate user throughout design: the team keeps asking, "what would Betty think?"\n  - Details matter — adding concrete personal details (name, age, habits, goals) makes the persona feel "real," which helps designers reason about design decisions empathetically.\nBy anchoring design discussions around a persona, the team maintains a consistent user perspective rather than designing for an abstract or self-referential audience.',
          tags: ["Persona", "User Focus"],
          ref: "Lecture 05 — Section: Persona",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Discuss the purpose and characteristics of scenarios in interaction design.",
          translation: "ناقش غرض وخصائص السيناريوهات في تصميم التفاعل.",
          answer:
            'Scenarios are "stories for design." Their purposes:\n  - Communicate with others (designers, clients, users).\n  - Validate other models by "playing" the scenario against them.\n  - Express dynamics: a screenshot shows appearance, while a scenario shows behaviour.\nCharacteristics:\n  - They are linear because time is linear and our lives are linear — but this also means they do not show alternatives.\n  - A scenario is a step-by-step walkthrough that considers what users can see (sketches, screen shots), what they do (keyboard, mouse, etc.), and what they are thinking.\n  - Scenarios are used and reused throughout the design process.',
          tags: ["Scenarios", "Walkthrough", "Dynamics"],
          ref: "Lecture 05 — Sections: Scenarios / Use scenarios to ...",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Compare local, global, and wider-level navigation design as presented in the lecture.",
          translation:
            "قارن بين تصميم التنقل المحلي والعالمي والأوسع كما ورد في المحاضرة.",
          answer:
            'Navigation design considers structure at several levels:\n  - Local — looking out from a single screen. Includes breadcrumbs (showing the path through the web site hierarchy) and live links to higher levels. Designers should "beware the big button trap."\n  - Global — the structure of the whole site and movement between screens. Used through hierarchical diagrams (tree-like) and network diagrams (different paths through the system).\n  - Wider still — the relationship with other applications and the operating system. Concerns here include style issues (platform standards, consistency), functional issues (cut and paste), and navigation issues (embedded applications, links to other apps, the web).\nLocal design keeps the user oriented on a page; global design ensures coherent movement across screens; the wider level makes the application a good citizen of the wider environment.',
          tags: ["Navigation", "Local", "Global", "Wider"],
          ref: "Lecture 05 — Sections: Think about structure / Local / Global / Wider still",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Compare hierarchical diagrams and network diagrams in global navigation design.",
          translation:
            "قارن بين المخططات الهرمية والمخططات الشبكية في تصميم التنقل العالمي.",
          answer:
            "Both are used in global navigation design, but they expose different structures:\n  - Hierarchical diagrams — show a tree-like structure of screens. They are useful when the system has a clear parent–child relationship between screens (e.g., a settings tree or content categories).\n  - Network diagrams — show different paths through the system. They are useful when users can reach the same screen through multiple routes (e.g., dashboards, search, and shortcuts that cross the hierarchy).\nIn practice, designers often need both: the hierarchy to ensure a clear primary structure, and the network to recognize and design for the cross-links that real use will create.",
          tags: ["Navigation", "Hierarchical", "Network"],
          ref: "Lecture 05 — Section: Global structure / Network diagrams",
          likely: "medium",
        },
        {
          type: "essay",
          q: "8. Explain the basic principles of screen design and layout, including the available tools mentioned.",
          translation:
            "اشرح المبادئ الأساسية لتصيم الشاشة والتنسيق، بما في ذلك الأدوات المتاحة المذكورة.",
          answer:
            'Basic principles (the lecture\'s "ask / think / design" framing):\n  - Ask: what is the user doing?\n  - Think: what information, comparisons, and order are needed?\n  - Design: form follows function — the layout should serve the task.\nThe lecture groups the basic principles under: grouping, structure, and order; alignment; and use of white space.\nAvailable tools:\n  - Grouping of items.\n  - Order of items.\n  - Decoration — fonts, boxes, etc.\n  - Alignment of items.\n  - White space between items.\nDecoration should be used sparingly — boxes to group logical items, fonts for emphasis and headings — but not too many, to avoid visual noise.',
          tags: ["Screen Design", "Layout", "Tools"],
          ref: "Lecture 05 — Sections: Basic principles / Available tools / Decoration",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Discuss the alignment rules for different content types presented in the lecture (text, names, numbers, multi-column data).",
          translation:
            "ناقش قواعد المحاذاة لأنواع المحتوى المختلفة المذكورة في المحاضرة (نصوص، أسماء، أرقام، بيانات متعددة الأعمدة).",
          answer:
            'Alignment rules differ by content type:\n  - Text (English/European): align left, because that is the reading direction. Centered or right-aligned text is fine for special effects but hard to scan.\n  - Names: usually users scan for surnames, so put surnames first (e.g., "Dix, Alan") to make scanning easy.\n  - Numbers: think about purpose — for example, when comparing magnitudes, use alignment (often right alignment or decimal alignment) so that the largest value is easy to identify.\n  - Multi-column data: scanning across gaps is hard. The lecture suggests two fixes — leaders (e.g., dotted lines connecting items to values) and greying (alternating row/column shading, possibly vertical too).\nThe underlying principle is purpose-driven alignment: choose the alignment that makes the user\'s task easiest.',
          tags: ["Alignment", "Text", "Names", "Numbers", "Multiple Columns"],
          ref: "Lecture 05 — Sections: Alignment - text / names / numbers / multiple columns",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the role of white space in design, using the lecture's counter example.",
          translation:
            "اشرح دور المسافة البيضاء في التصميم، مستخدمًا مثال الكونتر من المحاضرة.",
          answer:
            'White space is not empty or wasted — it is an active design tool. The lecture identifies three uses:\n  - Space to separate — keeps distinct items visually distinct.\n  - Space to structure — communicates grouping and hierarchy.\n  - Space to highlight — draws attention to the item that has space around it.\nThe counter example makes the point visually: there are two ways to see a counter — "WHAT YOU SEE" (the items on top) and "THE GAPS BETWEEN" (the spaces). Both matter. A designer who only sees the items and ignores the gaps will produce cluttered, hard-to-read layouts, even when every individual item looks fine.',
          tags: ["White Space", "Counter Example"],
          ref: "Lecture 05 — Section: White space (the counter)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "11. Compare aesthetics and utility. When can they conflict, and when can they work together?",
          translation:
            "قارن بين الجمال والوظيفة. متى يتعارضان، ومتى يعملان معًا؟",
          answer:
            "Aesthetics and utility are not opposites — aesthetically pleasing designs can increase user satisfaction and improve productivity.\nHowever, they can conflict:\n  - Mixed-up visual styles can be easy to distinguish visually but confusing overall.\n  - A clean design with little differentiation can be confusing because nothing stands out.\n  - Backgrounds behind text can look good but make the text hard to read.\nThey can also work together — the lecture cites the design of the counter as an example where form and function reinforce each other, and consumer products where aesthetics are a key differentiator (e.g., the iMac).\nIn short, beauty should support the task; when it interferes with reading, scanning, or distinguishing, it has gone wrong.",
          tags: ["Aesthetics", "Utility"],
          ref: "Lecture 05 — Section: Aesthetics and utility",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Discuss the bad uses of colour mentioned in the lecture and how to test for them.",
          translation:
            "ناقش الاستخدامات السيئة للون المذكورة في المحاضرة وكيفية اختبارها.",
          answer:
            'Bad uses of colour mentioned in the lecture:\n  - Overuse — using many colours without a very good reason (children\'s sites are an exception).\n  - Colour blindness — ignoring users who cannot distinguish certain colours.\n  - Poor use of contrast — text and background colours that make content hard to read.\nThe lecture also notes that older monitors had limited palettes, that colour tends to be overused simply because "it is there," and that colour should be used sparingly to reinforce other information (not to carry meaning on its own).\nHow to test:\n  - "Do adjust your set!" — adjust your monitor to greys only and check whether you can still read your screen. If the design depends on colour alone, it will fail this test, and you need to add redundant cues (shape, position, labels).',
          tags: ["Color", "Bad Use", "Testing"],
          ref: "Lecture 05 — Sections: Colour and 3D / Bad use of colour",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. Explain localisation, internationalisation, and globalisation as presented in the lecture, with examples.",
          translation:
            "اشرح التوطين والدولنة والعولمة كما وردت في المحاضرة، مع أمثلة.",
          answer:
            "Three related but distinct ideas:\n  - Localisation & internationalisation — changing interfaces for particular cultures/languages. The practical tip is to use a 'resource' database instead of literal text in the source, because translations change text sizes and left-to-right order.\n  - Globalisation — trying to choose symbols, colours, and conventions that work everywhere, so the same design can serve many cultures without modification.\n  - Deeper issues — cultural assumptions and values, and the meanings of symbols. For example, a tick and a cross mean +ve and -ve in some cultures, but in others both mean the same thing (\"mark this\").\nThe lecture's takeaway: simply translating text is not enough. Designers must consider how the interface is built (resource database), what symbols they choose (globalisation), and the deeper cultural meanings those symbols carry.",
          tags: [
            "Localization",
            "Internationalization",
            "Globalization",
            "Cultures",
          ],
          ref: "Lecture 05 — Section: Across countries and cultures",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. Why is prototyping and iteration necessary in design? Describe the iteration loop.",
          translation:
            "لماذا النمذجة والتكرار ضروريان في التصميم؟ صف حلقة التكرار.",
          answer:
            'The lecture states bluntly: "you never get it right first time." Designs rarely survive contact with real users unchanged, so iteration is necessary to find what is really needed.\nThe iteration loop is:\n  - Prototype — build a partial, experimental version of the design.\n  - Evaluate — test it (with users, heuristics, scenarios, etc.).\n  - (Re-)design — revise the design based on what was learned.\n  - Repeat until "OK!" → done!\nIteration lets designers get something concrete in front of users early, learn from the gaps between expectation and behaviour, and improve the design over multiple cycles rather than committing to a single, untested guess.',
          tags: ["Prototyping", "Iteration"],
          ref: "Lecture 05 — Section: Prototyping (You never get it right first time / iteration loop)",
          likely: "high",
        },
      ],
    },
  ],
});
