/* بيانات مادة: التدريب الميداني (Cloud Computing) (cloud-computing) */
subjects.push({
  name: "التدريب الميداني (Cloud Computing)",
  en: "Field Training — Cloud Computing",
  icon: "☁️",
  slug: "cloud-computing",
  // lectures: [
  //   /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
  //        pdf:"datenew/subjects/cloud-computing/lectures/lec-01.pdf", questions:[] } */
  // ]
  lectures: [
    {
      id: "cloud-orientation-01",
      t: "جلسة التعريف — Cloud Computing",
      d: "المفهوم، الخصائص، التحديات، أنواع الخدمات، نماذج النشر، الأطراف الرئيسية، التهديدات، الأمان، والوظائف",
      pdf: "datenew/subjects/cloud-computing/lectures/Cloud Computing Orientation Session.pdf",
      // محاضرة: Cloud Computing Orientation Session (المركز المصري للحوسبة السحابية - EC3) | الموضوع الرئيسي: مدخل شامل إلى الحوسبة السحابية وبنيتها التحتية وأمنها
pdf2:"/datenew/subjects/cloud-computing/questions/Questions on each lecture/lecture_01_cloud-computing_Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "مجموعة من الشروحات المرئية باللغة العربية تغطي المفاهيم الأساسية للحوسبة السحابية ومصطلحاتها وبنيتها التحتية.",
          links: [
            {
              t: "مفهوم الحوسبة السحابية Cloud Computing باللغة العربية",
              d: "فيديو تعليمي يشرح مفاهيم الحوسبة السحابية والفوائد الناتجة عن الاعتماد عليها مع خريطة طريق متكاملة لدراسة تقنيات السحابة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=IHkgWgD82EA",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أساسيات خدمات AWS والحوسبة السحابية - Free4Arab",
              d: "شرح عربي تفصيلي يتناول البنية التحتية للحوسبة السحابية ونماذج النشر والمسؤولية المشتركة في بيئة AWS.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=slmv-FRM7js",
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
            "دورات ودليلات عالمية باللغة الإنجليزية توفر تغطية شاملة وعميقة لمفاهيم السحابة وشهادات المحترفين.",
          links: [
            {
              t: "AWS Certified Cloud Practitioner Full Course - freeCodeCamp",
              d: "دورة تعليمية عالمية شاملة تغطي المفاهيم الأساسية للحوسبة السحابية، ونماذج النشر، والأمن السحابي، ونموذج المسؤولية المشتركة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=7HKot-brXFE",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "System Design & Cloud Infrastructure Fundamentals",
              d: "شرح معماري عالمي لمكونات البنية التحتية السحابية، موازنة الأحمال (Load Balancing)، والتوسع الذاتي (Scalability & Elasticity).",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=3hLmDS179YE",
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
            "مقالات وأدلة مرجعية موثوقة من GeeksforGeeks والمواقع الرسمية تشرح نماذج الخدمات والأمن السحابي.",
          links: [
            {
              t: "GeeksforGeeks - Cloud Computing Concepts & Architecture",
              d: "دليل مرجعي شامل يتناول مفهوم الحوسبة السحابية، والخصائص الجوهرية، ونماذج النشر المختلفة مثل السحابة العامة والخاصة والمجتمعية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/cloud-computing/cloud-computing/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Types of Cloud Service Models (IaaS, PaaS, SaaS)",
              d: "مقالة علمية تقارن بين طبقات الخدمات السحابية ونطاق إدارة الموارد لكل من المزود والمستخدم النهائي.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/cloud-computing/types-of-cloud/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Shared Responsibility Model in Cloud Security",
              d: "مرجع تقني يتناول الأمن السحابي وتقسيم المسؤوليات بين المزود والمستهلك لحماية البيانات والتطبيقات والبنية التحتية.",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.geeksforgeeks.org/devops/aws-shared-responsibility-model/",
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
            "أدوات ومحاكيات برمجية رسمية لنمذجة واختبار البيئات السحابية ومكونات مراكز البيانات.",
          links: [
            {
              t: "CloudSim Framework - Official GitHub Repository",
              d: "إطار عمل برمجي مفتوح المصدر لمحاكاة ونمذجة البنى التحتية للحوسبة السحابية ومراكز البيانات وتوزيع الموارد والجاهزية.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://github.com/cloudslab/cloudsim",
                  type: "download",
                  color: "blue",
                },
              ],
            },
            {
              t: "CloudSim Plus - Modern Cloud Computing Simulation Platform",
              d: "منصة محاكاة حديثة مبنية على Java لنمذجة التوسع الذاتي (Auto-scaling)، واستهلاك الطاقة، وهندسة السحابة المتقدمة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://cloudsimplus.org/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      summary: {
        text: "الحوسبة السحابية هي تقديم خدمات وتطبيقات تقنية المعلومات عبر الإنترنت عند الطلب كخدمات مقاسة (Metered). من خصائصها: الخدمة الذاتية، المرونة، تجميع الموارد، والـ Virtualization. أنواع الخدمات: IaaS, PaaS, SaaS, IDaaS, SECaaS, CaaS, FaaS, XaaS. نماذج النشر: Public, Private, Community, Hybrid. الأطراف الخمسة: Consumer, Provider, Carrier, Auditor, Broker. الأمان مسؤولية مشتركة بين المزود والعميل.",
        // pdf:"/datenew/cs/"
      },
      questions: [
        {
          q: "1. What is the best description of cloud computing?",
          options: [
            "Installing all software only on a local personal computer",
            "An on-demand delivery of IT capabilities and applications over the Internet",
            "Buying and owning all hardware inside the organization",
            "A network cable standard for connecting servers",
          ],
          correct: 1,
          translation: "ما أفضل وصف للحوسبة السحابية؟",
          explanation:
            "الحوسبة السحابية هي تقديم قدرات تقنية المعلومات والتطبيقات عند الطلب عبر الإنترنت. الاختيارات الباقية تصف الحوسبة المحلية (On-Premises) وليس السحابة.",
          tags: ["Cloud Concept"],
          ref: "Lecture XX — Slide 3",
        },

        {
          q: "2. Which of the following is given as an example of a cloud solution?",
          options: [
            "A word processor installed offline on a laptop",
            "A local hard disk drive",
            "A USB flash memory",
            "Dropbox",
          ],
          correct: 3,
          translation: "أي مما يلي ذُكر كمثال على حل سحابي؟",
          explanation:
            "المحاضرة ذكرت Gmail وFacebook وDropbox كأمثلة سحابية. الباقي أجهزة أو برامج محلية لا تعتمد على الإنترنت.",
          tags: ["Cloud Examples"],
          ref: "Lecture XX — Slide 3",
        },

        {
          q: "3. IT infrastructure and applications are provided to subscribers as ______ services over networks.",
          options: ["metered", "free-of-charge", "physical", "offline"],
          correct: 0,
          translation:
            "البنية التحتية والتطبيقات تُقدَّم للمشتركين كخدمات ______ عبر الشبكات.",
          explanation:
            "المحاضرة تنص على أنها خدمات مُقاسة (Metered)، أي يُحتسب استخدامها. ليست مجانية ولا فعلية ولا بدون اتصال.",
          tags: ["Metered Service"],
          ref: "Lecture XX — Slide 3",
        },

        {
          q: "4. Which characteristic is also called scalability?",
          options: [
            "Resource pooling",
            "Measured service",
            "Rapid elasticity",
            "Broad network access",
          ],
          correct: 2,
          translation: "أي خاصية تُسمّى أيضًا القابلية للتوسع (scalability)؟",
          explanation:
            "Rapid elasticity مكتوبة في المحاضرة بجانب scalability. Resource pooling هي تجميع الموارد وMeasured service قياس الاستخدام.",
          tags: ["Elasticity", "Scalability"],
          ref: "Lecture XX — Slide 4",
        },

        {
          q: "5. Which characteristic means the provider combines its computing resources to serve multiple consumers?",
          options: [
            "Resource pooling",
            "On-demand self-service",
            "Distributed storage",
            "Automated management",
          ],
          correct: 0,
          translation:
            "أي خاصية تعني أن المزوّد يجمّع موارده لخدمة عدة مستهلكين؟",
          explanation:
            "Resource pooling هي تجميع الموارد لخدمة عدد من المستخدمين. Distributed storage تخص توزيع التخزين فقط.",
          tags: ["Resource Pooling"],
          ref: "Lecture XX — Slide 4",
        },

        {
          q: "6. Which of the following is a challenge of cloud computing?",
          options: [
            "Unlimited control over the provider's hardware",
            "Difficulty in migrating from one service provider to another",
            "No dependence on network connections",
            "No security or privacy concerns",
          ],
          correct: 1,
          translation: "أي مما يلي يُعد من تحديات الحوسبة السحابية؟",
          explanation:
            "صعوبة الانتقال بين مزوّدي الخدمة (Lock-in) من التحديات. المستخدم لديه تحكم محدود، ويعتمد على الشبكة، وتوجد مخاوف أمان وخصوصية.",
          tags: ["Challenges", "Lock-in"],
          ref: "Lecture XX — Slide 5",
        },

        {
          q: "7. Why is a cloud potentially more vulnerable to attacks, according to the lecture?",
          options: [
            "Because it uses no virtualization",
            "Because data is never stored on servers",
            "Because every component is online",
            "Because it has no service providers",
          ],
          correct: 2,
          translation: "لماذا تكون السحابة معرّضة للهجمات حسب المحاضرة؟",
          explanation:
            "كل مكوّنات السحابة متصلة بالإنترنت فتزداد فرص الهجوم. باقي الاختيارات غير صحيحة ولا علاقة لها بالسبب.",
          tags: ["Security", "Attacks"],
          ref: "Lecture XX — Slide 5",
        },

        {
          q: "8. Which service enables subscribers to use on-demand computing power, virtualization, data storage, network and OS?",
          options: [
            "Software-as-a-Service (SaaS)",
            "Identity-as-a-Service (IDaaS)",
            "Anything-as-a-Service (XaaS)",
            "Infrastructure-as-a-Service (IaaS)",
          ],
          correct: 3,
          translation:
            "أي خدمة تتيح استخدام قدرة الحوسبة والافتراضية والتخزين والشبكة ونظام التشغيل عند الطلب؟",
          explanation:
            "IaaS تقدّم الموارد الأساسية لتقنية المعلومات. SaaS تقدّم برامج جاهزة وIDaaS تقدّم خدمات الهوية.",
          tags: ["IaaS"],
          ref: "Lecture XX — Slide 7",
        },

        {
          q: "9. In PaaS, subscribers need NOT buy and manage the underlying software and infrastructure, but they have authority over:",
          options: [
            "The deployed applications",
            "The physical servers",
            "The virtualization layer",
            "The network cables",
          ],
          correct: 0,
          translation:
            "في PaaS لا يحتاج المشترك لشراء وإدارة البرمجيات والبنية التحتية الأساسية، لكنه يتحكم في:",
          explanation:
            "PaaS يتيح تطوير التطبيقات مع بقاء السيطرة للمشترك على التطبيقات المنشورة، بينما المزوّد يدير الباقي.",
          tags: ["PaaS"],
          ref: "Lecture XX — Slide 7",
        },

        {
          q: "10. Which service offers application software to subscribers on-demand over the Internet?",
          options: [
            "Platform-as-a-Service (PaaS)",
            "Infrastructure-as-a-Service (IaaS)",
            "Software-as-a-Service (SaaS)",
            "Function-as-a-Service (FaaS)",
          ],
          correct: 2,
          translation:
            "أي خدمة تقدّم برامج تطبيقية للمشتركين عند الطلب عبر الإنترنت؟",
          explanation:
            "SaaS تقدّم البرنامج نفسه جاهزًا (مثل Google Docs). PaaS للتطوير وIaaS للبنية التحتية.",
          tags: ["SaaS"],
          ref: "Lecture XX — Slide 7",
        },

        {
          q: "11. Which service provides Single-Sign-On (SSO) and Multi-Factor Authentication (MFA)?",
          options: [
            "Container-as-a-Service (CaaS)",
            "Identity-as-a-Service (IDaaS)",
            "Function-as-a-Service (FaaS)",
            "Platform-as-a-Service (PaaS)",
          ],
          correct: 1,
          translation:
            "أي خدمة توفر الدخول الموحد (SSO) والتحقق متعدد العوامل (MFA)؟",
          explanation:
            "IDaaS تدير الهوية والوصول عبر طرف ثالث وتشمل SSO وMFA. الخدمات الأخرى لا تركز على المصادقة.",
          tags: ["IDaaS", "SSO", "MFA"],
          ref: "Lecture XX — Slide 8",
        },

        {
          q: "12. Security-as-a-Service (SECaaS) is developed based on which service type?",
          options: ["IaaS", "FaaS", "CaaS", "SaaS"],
          correct: 3,
          translation:
            "تم تطوير خدمة الأمن كخدمة (SECaaS) بناءً على أي نوع من الخدمات؟",
          explanation:
            "المحاضرة توضح أن SECaaS مبنية على SaaS، وتقلل التكلفة مقارنة ببناء قدرات أمنية خاصة بالمؤسسة.",
          tags: ["SECaaS"],
          ref: "Lecture XX — Slide 8",
        },

        {
          q: "13. Which of the following services is provided by SECaaS?",
          options: [
            "Penetration testing and intrusion detection",
            "Hosting food delivery services",
            "Running serverless functions only",
            "Providing virtual servers only",
          ],
          correct: 0,
          translation: "أي من الخدمات التالية تقدمها SECaaS؟",
          explanation:
            "SECaaS تقدم اختبار الاختراق والمصادقة وكشف التسلل ومكافحة البرمجيات الخبيثة. الباقي يخص XaaS وFaaS وIaaS.",
          tags: ["SECaaS"],
          ref: "Lecture XX — Slide 8",
        },

        {
          q: "14. CaaS inherits features of which two service types?",
          options: [
            "SaaS and IDaaS",
            "FaaS and XaaS",
            "IaaS and PaaS",
            "SECaaS and SaaS",
          ],
          correct: 2,
          translation: "تأخذ CaaS خصائص أي نوعين من الخدمات؟",
          explanation:
            "المحاضرة تذكر أن CaaS ترث خصائص IaaS وPaaS، وتُستخدم لتطوير تطبيقات حاويات قابلة للتوسع.",
          tags: ["CaaS", "Containers"],
          ref: "Lecture XX — Slide 9",
        },

        {
          q: "15. Which service is associated with serverless architecture?",
          options: [
            "Infrastructure-as-a-Service (IaaS)",
            "Function-as-a-Service (FaaS)",
            "Software-as-a-Service (SaaS)",
            "Identity-as-a-Service (IDaaS)",
          ],
          correct: 1,
          translation: "أي خدمة ترتبط بالبنية بدون خوادم (serverless)؟",
          explanation:
            "FaaS تتيح تطوير وتشغيل وظائف التطبيق دون تعقيد بناء البنية التحتية وصيانتها.",
          tags: ["FaaS", "Serverless"],
          ref: "Lecture XX — Slide 9",
        },

        {
          q: "16. Which of the following is an example of XaaS offered over the Internet?",
          options: [
            "A local file server",
            "A physical router",
            "Medical consultations",
            "A desktop operating system license",
          ],
          correct: 2,
          translation: "أي مما يلي مثال على XaaS؟",
          explanation:
            "XaaS تقدم أي شيء كخدمة مثل الطعام والمواصلات والاستشارات الطبية.",
          tags: ["XaaS"],
          ref: "Lecture XX — Slide 9",
        },

        {
          q: "17. In the IaaS responsibility model, which layers does the subscriber manage?",
          options: [
            "Servers, storage and networking",
            "Virtualization and servers only",
            "Only networking",
            "Applications, data, runtime, middleware and OS",
          ],
          correct: 3,
          translation:
            "في نموذج المسؤوليات لخدمة IaaS، أي طبقات يديرها المشترك؟",
          explanation:
            "في IaaS يدير المشترك من التطبيقات حتى نظام التشغيل، والمزوّد يدير الافتراضية والخوادم والتخزين والشبكات.",
          tags: ["Responsibilities", "IaaS"],
          ref: "Lecture XX — Slide 10",
        },

        {
          q: "18. In the PaaS responsibility model, the subscriber is responsible for:",
          options: [
            "Applications and data",
            "Runtime and middleware",
            "The operating system",
            "Servers and storage",
          ],
          correct: 0,
          translation: "في نموذج المسؤوليات لـ PaaS، المشترك مسؤول عن:",
          explanation:
            "في PaaS يتولى المزوّد كل شيء من Runtime إلى الشبكات، وتبقى مسؤولية المشترك على التطبيقات والبيانات فقط.",
          tags: ["Responsibilities", "PaaS"],
          ref: "Lecture XX — Slide 10",
        },

        {
          q: "19. Which cloud deployment model is for a single organization only?",
          options: [
            "Public Cloud",
            "Community Cloud",
            "Private Cloud",
            "Hybrid Cloud",
          ],
          correct: 2,
          translation: "أي نموذج نشر سحابي مخصص لمؤسسة واحدة فقط؟",
          explanation:
            "Private Cloud لمؤسسة واحدة. Public مفتوحة للجمهور وCommunity لعدة مؤسسات من مجتمع محدد.",
          tags: ["Deployment Models", "Private Cloud"],
          ref: "Lecture XX — Slide 11",
        },

        {
          q: "20. A combination of two or more clouds (private, community, or public) is called:",
          options: [
            "Public Cloud",
            "Hybrid Cloud",
            "Private Cloud",
            "Community Cloud",
          ],
          correct: 1,
          translation:
            "الدمج بين سحابتين أو أكثر (خاصة أو مجتمعية أو عامة) يسمى:",
          explanation:
            "Hybrid Cloud هي مزيج من نموذجين أو أكثر، بينما الباقي نماذج منفردة.",
          tags: ["Hybrid Cloud"],
          ref: "Lecture XX — Slide 11",
        },

        {
          q: "21. Which actor sets up service contracts with the Cloud Service Provider (CSP)?",
          options: [
            "Cloud Auditor",
            "Cloud Carrier",
            "Cloud Broker",
            "Cloud Consumer",
          ],
          correct: 3,
          translation:
            "أي طرف يُبرم عقود الخدمة مع مزوّد الخدمة السحابية (CSP)؟",
          explanation:
            "Cloud Consumer هو الشخص أو المؤسسة المستخدمة للخدمة، وهو من يبرم العقود مع CSP.",
          tags: ["Cloud Actors", "Consumer"],
          ref: "Lecture XX — Slide 12",
        },

        {
          q: "22. Which actor is an independent entity that evaluates and verifies cloud services, performance and security controls?",
          options: [
            "Cloud Auditor",
            "Cloud Broker",
            "Cloud Provider",
            "Cloud Carrier",
          ],
          correct: 0,
          translation:
            "أي طرف مستقل يقيّم ويتحقق من الخدمات السحابية والأداء وضوابط الأمن؟",
          explanation:
            "Cloud Auditor يقيّم ويتحقق. Broker يدير العلاقة بين CSP والمستهلكين وCarrier يوفر الاتصال والنقل.",
          tags: ["Cloud Actors", "Auditor"],
          ref: "Lecture XX — Slide 12",
        },

        {
          q: "23. Which actor provides connectivity and transport services between CSPs and cloud consumers via a network?",
          options: [
            "Cloud Consumer",
            "Cloud Auditor",
            "Cloud Carrier",
            "Cloud Broker",
          ],
          correct: 2,
          translation:
            "أي طرف يوفر الاتصال وخدمات النقل بين CSP والمستهلكين عبر شبكة؟",
          explanation:
            "Cloud Carrier وسيط للاتصال والنقل. Broker يدير الاستخدام والأداء والتسليم والعلاقة.",
          tags: ["Cloud Actors", "Carrier"],
          ref: "Lecture XX — Slide 12",
        },

        {
          q: "24. Which situation is listed as a data breach/loss threat?",
          options: [
            "Using a load balancer",
            "Encryption keys are lost",
            "Monitoring Quality of Service",
            "Implementing a disaster recovery plan",
          ],
          correct: 1,
          translation: "أي موقف مذكور كتهديد لاختراق أو فقدان البيانات؟",
          explanation:
            "فقدان مفاتيح التشفير أو حذف أو تعديل البيانات من أمثلة التهديد. الباقي إجراءات حماية.",
          tags: ["Threats", "Data Loss"],
          ref: "Lecture XX — Slide 14",
        },

        {
          q: "25. According to the lecture, which role designs high-level system blueprints and selects frameworks and cloud services?",
          options: [
            "Cloud Engineer",
            "Cloud Security Engineer",
            "DevOps Engineer",
            "Cloud Architect",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، أي وظيفة تصمم المخططات عالية المستوى وتختار الأطر والخدمات السحابية؟",
          explanation:
            "Cloud Architect يصمم ويختار. Cloud Engineer يبني ويدير، وDevOps يؤتمت النشر، وSecurity Engineer يضبط الوصول والتشفير.",
          tags: ["Cloud Jobs", "Architect"],
          ref: "Lecture XX — Slide 17",
        },

        {
          type: "essay",
          q: "1. Define cloud computing and give examples.",
          translation: "عرّف الحوسبة السحابية واذكر أمثلة.",
          answer:
            "Cloud computing delivers various types of services and applications over the Internet.\n" +
            "It is an on-demand delivery of IT capabilities.\n" +
            "IT infrastructure and applications are provided to subscribers as metered services over networks.\n" +
            "Examples: Gmail, Facebook, Dropbox.\n",
          tags: ["Cloud Concept"],
          ref: "Lecture XX — Slide 3",
        },

        {
          type: "essay",
          q: "2. List and briefly explain at least five characteristics of cloud computing.",
          translation:
            "اذكر واشرح باختصار خمس خصائص على الأقل للحوسبة السحابية.",
          answer:
            "On-demand self-service.\n" +
            "Distributed storage.\n" +
            "Rapid elasticity (scalability).\n" +
            "Automated management.\n" +
            "Broad network access.\n" +
            "Resource pooling.\n" +
            "Measured service.\n" +
            "Virtualization technology.\n",
          tags: ["Characteristics"],
          ref: "Lecture XX — Slide 4",
        },

        {
          type: "essay",
          q: "3. Discuss the challenges of cloud computing and the main cloud threats.",
          translation: "ناقش تحديات الحوسبة السحابية وأهم تهديداتها.",
          answer:
            "Challenges: limited control, security and privacy, dependence on network connections, vulnerability to attacks as every component is online, and difficulty migrating between providers.\n" +
            "Threats: data breach/loss (data erased or modified, encryption keys lost), unsynchronized system clocks, loss of operational and security logs.\n" +
            "Illegal access due to weak authentication and authorization, natural disasters, hardware failure, and lock-in.\n",
          tags: ["Challenges", "Threats"],
          ref: "Lecture XX — Slides 5, 14",
        },

        {
          type: "essay",
          q: "4. Compare IaaS, PaaS and SaaS.",
          translation: "قارن بين IaaS وPaaS وSaaS.",
          answer:
            "IaaS: on-demand fundamental IT resources such as computing power, virtualization, storage, network and OS.\n" +
            "PaaS: allows development of applications and services; subscribers do not manage the underlying software and infrastructure but control deployed applications.\n" +
            "SaaS: offers application software to subscribers on-demand over the Internet (e.g., Google Docs).\n",
          tags: ["IaaS", "PaaS", "SaaS"],
          ref: "Lecture XX — Slide 7",
        },

        {
          type: "essay",
          q: "5. Explain Identity-as-a-Service (IDaaS) and Security-as-a-Service (SECaaS).",
          translation: "اشرح IDaaS وSECaaS.",
          answer:
            "IDaaS offers authentication services managed by a third-party vendor, providing identity and access management such as SSO and MFA.\n" +
            "SECaaS is developed based on SaaS.\n" +
            "SECaaS drastically reduces cost compared to building own security capabilities.\n" +
            "It provides penetration testing, authentication, intrusion detection, anti-malware, etc.\n",
          tags: ["IDaaS", "SECaaS"],
          ref: "Lecture XX — Slide 8",
        },

        {
          type: "essay",
          q: "6. Explain CaaS, FaaS and XaaS.",
          translation: "اشرح CaaS وFaaS وXaaS.",
          answer:
            "CaaS: lets subscribers develop rich scalable containerized applications; inherits features of both IaaS and PaaS.\n" +
            "FaaS: a platform for developing, running and managing application functionalities without building and maintaining infrastructure (serverless); provides data processing services such as IoT.\n" +
            "XaaS: other services such as food, transportation and medical consultations, and secure services such as customer relationship management.\n",
          tags: ["CaaS", "FaaS", "XaaS"],
          ref: "Lecture XX — Slide 9",
        },

        {
          type: "essay",
          q: "7. Explain the division of responsibilities between subscriber and provider in On-Premises, IaaS, PaaS and SaaS.",
          translation:
            "اشرح توزيع المسؤوليات بين المشترك والمزوّد في On-Premises وIaaS وPaaS وSaaS.",
          answer:
            "On-Premises: the resource owner manages all layers, from applications down to networking.\n" +
            "IaaS: subscriber manages applications, data, runtime, middleware and OS; provider manages virtualization, servers, storage and networking.\n" +
            "PaaS: subscriber manages applications and data; provider manages the rest.\n" +
            "SaaS: the provider manages all layers.\n",
          tags: ["Responsibilities"],
          ref: "Lecture XX — Slide 10",
        },

        {
          type: "essay",
          q: "8. Describe the four cloud deployment models.",
          translation: "صف نماذج النشر السحابية الأربعة.",
          answer:
            "Selection is based on enterprise requirements.\n" +
            "Public Cloud: open for public use.\n" +
            "Private Cloud: for a single organization only.\n" +
            "Community Cloud: several organizations from a specific community.\n" +
            "Hybrid Cloud: combination of two or more clouds (private, community or public).\n",
          tags: ["Deployment Models"],
          ref: "Lecture XX — Slide 11",
        },

        {
          type: "essay",
          q: "9. Name the five major actors in cloud computing and describe each.",
          translation:
            "اذكر الأطراف الخمسة الرئيسية في الحوسبة السحابية واشرح كل واحد.",
          answer:
            "Cloud Consumer: uses cloud services and sets up contracts with the CSP.\n" +
            "Cloud Provider: acquires and manages the computing infrastructure used to provide services.\n" +
            "Cloud Carrier: intermediary providing connectivity and transport between CSPs and consumers.\n" +
            "Cloud Auditor: independent entity evaluating and verifying services, performance and security controls.\n" +
            "Cloud Broker: manages use, performance and delivery of services and the relationship between CSPs and consumers.\n",
          tags: ["Cloud Actors"],
          ref: "Lecture XX — Slide 12",
        },

        {
          type: "essay",
          q: "10. Explain cloud security as a shared responsibility and list the main security considerations.",
          translation:
            "اشرح أن أمن السحابة مسؤولية مشتركة، واذكر أهم اعتبارات الأمن.",
          answer:
            "Cloud security is shared between the provider (security OF the cloud) and the customer (security IN the cloud).\n" +
            "Implement a disaster recovery plan.\n" +
            "Continuously monitor QoS to maintain service level agreements.\n" +
            "Ensure data integrity for stored data.\n" +
            "Services should be fast, reliable, with quick response times.\n" +
            "Use cryptographic algorithms and incorporate load balancing.\n",
          tags: ["Cloud Security", "Shared Responsibility"],
          ref: "Lecture XX — Slides 15, 16",
        },
      ],
    },
  ],
  testBanks: [
    {
      t: "بنك أسئلة الحوسبة السحابية",
      d: "أسئلة المحاضرة في اختبار واحد",
      lectures: [0],
    },
  ],
});
