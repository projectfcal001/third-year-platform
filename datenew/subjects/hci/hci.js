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
      linkCategories: [
        {
          category: "المحاضرة الأولى: مقدمة في تفاعل الإنسان والحاسوب (HCI)",
          icon: "💻",
          description:
            "مفهوم HCI، أهميته، مجالاته، الفرق بين UX و UI و Interaction Design، ومكوناته الأساسية",
          links: [
            {
              t: "تعريف HCI ومفهوم Interaction/Interfaces",
              d: "مجال متعدد التخصصات يركز على تصميم وتقييم وتنفيذ الأنظمة الحوسبية التفاعلية ودراسة كيفية تفاعل البشر معها",
              icon: "📘",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec1-intro",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "أمثلة HCI في الحياة اليومية وأهميته",
              d: "الهواتف الذكية، أجهزة ATM، لوحات القيادة، والأنظمة الذكية؛ ويهدف لتقليل الأخطاء وزيادة الإنتاجية والرضا",
              icon: "📱",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec1-importance",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "علاقة HCI بالمجالات الأخرى (UX vs UI vs IxD)",
              d: "الفرق بين تصميم تجربة المستخدم (UX)، واجهة المستخدم (UI)، وتصميم التفاعل (Interaction Design)",
              icon: "🎨",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec1-design-fields",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "مبادئ تصميم تفاعل الإنسان والحاسوب",
              d: "تغطية مبادئ مثل Discoverability, Feedback, Constraints, Mapping, Consistency, Affordances, Simplicity",
              icon: "⚙️",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec1-principles",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "المكونات الرئيسية لنظام HCI",
              d: "دراسة عناصر النظام الخمسة: المستخدمون (Users)، المهام (Tasks)، الأدوات (Tools)، الواجهات (Interfaces)، والسياق (Context)",
              icon: "🧩",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec1-components",
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
      d: "قدرات الإنسان في إدخال/إخراج المعلومات (الرؤية، السمع، اللمس، الحركة)، الذاكرة، التفكير والتعلم، الأخطاء، العواطف، والفروق الفردية.",
      d: "تعريف HCI، أمثلة من الحياة اليومية، أهميته، علاقته بالمجالات الأخرى (UX / UI / Interaction Design)، مبادئ التصميم، والمكونات الرئيسية.",
      pdf: "datenew/subjects/hci/lectures/Lec 2/Lec 2.pdf",
      pdf2: "/datenew/subjects/hci/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      linkCategories: [
        {
          category: "المحاضرة الثانية: العنصر البشري (The Human)",
          icon: "🧠",
          description:
            "دراسة قدرات الإنسان: الإدخال والإخراج الحسي، الذاكرة، التفكير وحل المشكلات، الأخطاء، والعواطف",
          links: [
            {
              t: "الحواس وقنوات الإدخال والإخراج (Vision, Hearing, Touch, Movement)",
              d: "الرؤية (الشبكية، Cones, Rods)، السمع (الأذن والترددات)، اللمس (المستقبلات)، والحركة وقانون فيتس (Fitts' Law)",
              icon: "👁️",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec2-senses",
                  type: "view",
                  color: "purple",
                },
              ],
            },
            {
              t: "أنواع الذاكرة ونماذج الذاكرة طويلة المدى",
              d: "الذاكرة الحسية، الذاكرة قصيرة المدى (STM)، والذاكرة طويلة المدى (LTM) وشبكاتها الدلالية والأطر والسيناريوهات والقواعد",
              icon: "💾",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec2-memory",
                  type: "view",
                  color: "purple",
                },
              ],
            },
            {
              t: "التفكير وحل المشكلات (Reasoning & Problem Solving)",
              d: "أنواع الاستدلال (Deductive, Inductive, Abductive)، ونظريات حل المشكلات مثل Gestalt و Problem Space",
              icon: "💡",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec2-reasoning",
                  type: "view",
                  color: "purple",
                },
              ],
            },
            {
              t: "الأخطاء والأنماط الذهنية (Errors & Mental Models)",
              d: "الفرق بين زلات التنفيذ (Slips) والأخطاء الناتجة عن الفهم الخاطئ (Mistakes) والمستويات الذهنية للمستخدم",
              icon: "⚠️",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec2-errors",
                  type: "view",
                  color: "purple",
                },
              ],
            },
            {
              t: "العواطف والفروق الفردية (Emotion & Individual Differences)",
              d: "تأثير العاطفة (Affect) على حل المشكلات وتصميم الواجهات، والفروق الفردية طويلة وقصيرة المدى بين المستخدمين",
              icon: "👤",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec2-emotion",
                  type: "view",
                  color: "purple",
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
      linkCategories: [
        {
          category: "المحاضرة الثالثة: جهاز الحاسوب والتقنيات (The Computer)",
          icon: "🖥️",
          description:
            "أجهزة الإدخال، شاشات العرض، الواقع الافتراضي، أدوات التحكم المادية، الطباعة والمسح، والذاكرة والشبكات",
          links: [
            {
              t: "أجهزة إدخال النصوص (Text Entry Devices)",
              d: "لوحات المفاتيح (QWERTY, DVORAK, Chord)، والتعرف على الخط والحديث وشاشات الهاتف ونظام T9",
              icon: "⌨️",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec3-text-entry",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "أجهزة التأشير والرسم (Positioning & Pointing Devices)",
              d: "الماوس، لوحة اللمس (Touchpad)، شاشات اللمس، القلم الضوئي، تتبع العين (Eyegaze)، وأسهم الاتجاهات",
              icon: "🖱️",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec3-pointing",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "أجهزة العرض والشاشات (Display Devices)",
              d: "شاشات Bitmap، CRT، LCD، الشاشات الكبيرة، الشاشات العامة (Situated Displays)، والورق الرقمي (Digital Paper)",
              icon: "📺",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec3-displays",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "الواقع الافتراضي والتفاعل ثلاثي الأبعاد (VR & 3D Interaction)",
              d: "التأشير في الفراغ، خوذات VR، درجات الحركة (Pitch, Yaw, Roll)، وغثيان الحركة (Motion Sickness)",
              icon: "🥽",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec3-vr",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "الطباعة والمسح والذاكرة والشبكات (Printing, Memory & Networks)",
              d: "أنواع الطابعات والخطوط، RAM، الذاكرة الافتراضية، الضغط، وسرعة المعالجة وقانون مور وشبكات الإنترنت",
              icon: "🖨️",
              actions: [
                {
                  label: "📖 استعراض المحتوى",
                  url: "#lec3-printing-memory",
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
  ],
});
