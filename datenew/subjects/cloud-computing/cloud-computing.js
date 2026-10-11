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
      id: "cloud-orientation-lec-01",
      t: "جلسة التعريف — Cloud Computing",
      d: "المفهوم، الخصائص، التحديات، أنواع الخدمات، نماذج النشر، الأطراف الرئيسية، التهديدات، الأمان، والوظائف",
      pdf: "datenew/subjects/cloud-computing/lectures/Cloud Computing Orientation Session.pdf",
      // محاضرة: Cloud Computing Orientation Session (المركز المصري للحوسبة السحابية - EC3) | الموضوع الرئيسي: مدخل شامل إلى الحوسبة السحابية وبنيتها التحتية وأمنها
      pdf2: "datenew/subjects/cloud-computing/questions/Questions on each lecture/lecture_01_cloud-computing_Questions.pdf",
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
    {
      id: "cloud-orientation-lec-02",
      t: "المحاضرة 2: أساسيات الشبكات (Network Fundamentals)",
      d: "مقدمة عن شبكات الكمبيوتر: المصطلحات الأساسية، أجهزة الشبكة، نماذج OSI وTCP/IP، طرق تعيين الـ IP، وأوامر الشبكة الأساسية.",
      pdf: "datenew/subjects/cloud-computing/lectures/lec2/Network_Fundamentals_Lecture.pdf",
      pdf2: "/datenew/subjects/cloud-computing/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      // محاضرة أساسيات الشبكات (Network Fundamentals): تغطي مفاهيم الشبكات، العنونة (IP/MAC)، أجهزة الشبكة، نماذج التواصل (OSI & TCP/IP)، طرق تعيين العناوين (DHCP/DORA/APIPA)، وأوامر الفحص والتشخيص.

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات مرئية باللغة العربية تبسط مفاهيم شبكات الحاسب، العنونة المنطقية والفيزيائية، وأجهزة ونماذج الشبكات.",
          links: [
            {
              t: "كورس أساسيات الشبكات - Network Fundamentals",
              d: "شرح شامل لمفهوم شبكات الحاسوب، مشاركة الموارد، الفرق بين IP Address و MAC Address، وأجهزة الشبكة المختلفة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=qi9I0_cW4pM",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح نموذج OSI Model ونموذج TCP/IP وأوامر الشبكة",
              d: "توضيح تفصيلي لطبقات نموذج OSI السبع ونموذج TCP/IP الأربع، مع تطبيق عملي لأهم أوامر الشبكة مثل ping و ipconfig.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=HhqR5OSsmk0",
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
            "دروس وسلاسل عالمية متخصصة توضح معمارية الشبكات والبروتوكولات وطرق تعيين عناوين IP وعملية DORA.",
          links: [
            {
              t: "Network Fundamentals Course by NetworkChuck",
              d: "سلسلة تفاعلية عالمية تشرح كيفية عمل شبكات الحاسوب، بروتوكولات التواصل، وطريقة عمل IP و MAC و DHCP.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.youtube.com/watch?v=qi9I0_cW4pM",
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
            "توثيقات ومقالات تعليمية مكتوبة تشرح بروتوكولات الشبكات، طبقات OSI، وأوامر التشخيص في سطر الأوامر.",
          links: [
            {
              t: "GeeksforGeeks Computer Network Tutorials",
              d: "مرجع كتابي متكامل يغطي جميع المفاهيم الأساسية للشبكات، الطبقات المرجعية، وبروتوكولات IP و ARP و DHCP.",
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
            "أدوات برمجية وبرامج محاكاة لاختبار أوامر الشبكة، تحليل الحزم، وبناء الشبكات الافتراضية.",
          links: [
            {
              t: "Wireshark Network Analyzer",
              d: "أداة عالمية متقدمة لتحليل حركة البيانات داخل الشبكة والتقاط حزم البروتوكولات وفحص عناوين IP و MAC.",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://www.wireshark.org/download.html",
                  type: "download",
                  color: "orange",
                },
              ],
            },
            {
              t: "Cisco Packet Tracer",
              d: "برنامج محاكاة لتصميم وتطبيق شبكات الحاسوب واختبار الربط والأوامر بين الروترات والمحولات والأجهزة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.netacad.com/courses/packet-tracer",
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
          q: "1. What is a computer network?",
          options: [
            "A single computer that has several hard disks installed",
            "A group of two or more interconnected devices that can share data, resources, and services",
            "A program that protects a device from viruses",
            "A device that converts signals between the LAN and the ISP link",
          ],
          correct: 1,
          translation: "ما هي شبكة الكمبيوتر؟",
          explanation:
            'الشبكة هي مجموعة من جهازين أو أكتر متوصلين ببعض ويقدروا يتشاركوا البيانات والموارد والخدمات. الكمبيوتر الواحد مش شبكة، ووصف "جهاز بيحوّل الإشارات بين الـ LAN والـ ISP" ده وصف المودم مش الشبكة.',
          tags: ["Network Definition"],
          ref: "Lecture 01 — Section 1: What Is a Computer Network?",
        },
        {
          q: "2. Which network benefit means that new devices can be added easily as the needs grow?",
          options: [
            "Resource Sharing",
            "Centralized Data",
            "Communication",
            "Scalability",
          ],
          correct: 3,
          translation:
            "أي ميزة من مميزات الشبكة معناها إضافة أجهزة جديدة بسهولة مع زيادة الاحتياج؟",
          explanation:
            "Scalability معناها قابلية التوسع. Resource Sharing خاصة بمشاركة الطابعات والملفات والإنترنت، وCentralized Data معناها تخزين وإدارة البيانات في مكان واحد (السيرفر).",
          tags: ["Scalability", "Network Benefits"],
          ref: "Lecture 01 — Section 1: What Is a Computer Network?",
        },
        {
          q: "3. Which statement about the IP address is correct?",
          options: [
            "It is 32 bits divided into 4 octets, and each octet is 8 bits separated by a dot",
            "It is 48 bits written as 12 hexadecimal digits separated by colons",
            "It is 64 bits divided into 8 octets separated by dots",
            "It is 16 bits divided into 2 octets separated by dots",
          ],
          correct: 0,
          translation: "أي عبارة عن الـ IP address صحيحة؟",
          explanation:
            'الـ IP address حجمه 32 بت مقسم لـ 4 octets كل واحد 8 بت ويتفصلوا بنقطة. وصف "48 بت و12 رقم hexadecimal" ده الـ MAC address مش الـ IP.',
          tags: ["IP Address", "Octets"],
          ref: "Lecture 01 — Section 2: Network Terminology",
        },
        {
          q: "4. Which statement about the MAC address is correct?",
          options: [
            "It is 32 bits divided into 4 octets separated by dots",
            "It is 32 bits written as 12 hexadecimal digits separated by dashes",
            "It is 48 bits written as 12 hexadecimal digits separated by colons",
            "It is 48 bits divided into 4 octets separated by dots",
          ],
          correct: 2,
          translation: "أي عبارة عن الـ MAC address صحيحة؟",
          explanation:
            'الـ MAC address حجمه 48 بت ويتكتب 12 رقم hexadecimal يتفصلوا بنقطتين رأسيتين (:) زي 00:1A:2B:3C:4D:5E. وصف "32 بت مقسم لـ 4 octets بنقط" ده الـ IP address.',
          tags: ["MAC Address"],
          ref: "Lecture 01 — Section 2: Network Terminology",
        },
        {
          q: "5. Which statement correctly compares an IP address with a MAC address?",
          options: [
            "An IP address is physical and permanent, while a MAC address is logical and can change",
            "Both are physical addresses burned into the NIC",
            "An IP address is logical and can change, while a MAC address is physical and permanent",
            "Both are logical addresses that the administrator can change at any time",
          ],
          correct: 2,
          translation:
            "أي عبارة بتقارن صح بين الـ IP address والـ MAC address؟",
          explanation:
            "الـ IP عنوان منطقي بيتعين وممكن يتغير، والـ MAC عنوان فيزيائي متسجل في كارت الشبكة وثابت. العبارة اللي بتقول إن الـ IP فيزيائي وثابت والـ MAC منطقي وبيتغير معكوسة.",
          tags: ["IP vs MAC"],
          ref: "Lecture 01 — Section 2: Network Terminology",
        },
        {
          q: "6. What is a NIC?",
          options: [
            "Hardware that connects a device to a network",
            "A set of rules that devices follow to communicate",
            "A table that maps IP addresses to MAC addresses",
            "A device that forwards packets between different networks",
          ],
          correct: 0,
          translation: "ما هو الـ NIC؟",
          explanation:
            'NIC هو Network Interface Card أي الكارت اللي بيوصّل الجهاز بالشبكة. "مجموعة قواعد للتواصل" تعريف الـ Protocol، و"جدول بيربط IP بـ MAC" هو جدول الـ ARP، و"بيوصّل packets بين شبكات" وظيفة الـ Router.',
          tags: ["NIC"],
          ref: "Lecture 01 — Section 2: Network Terminology",
        },
        {
          q: "7. Which device broadcasts data to all of its ports and has no intelligence?",
          options: ["Switch", "Router", "Firewall", "Hub"],
          correct: 3,
          translation: "أي جهاز بيبعت البيانات لكل البورتات وملوش أي ذكاء؟",
          explanation:
            "الـ Hub بيعمل broadcast لكل البورتات وده قديم. الـ Switch بيستخدم جداول الـ MAC عشان يبعت للجهاز المطلوب بس.",
          tags: ["Hub"],
          ref: "Lecture 01 — Section 3: Network Devices",
        },
        {
          q: "8. Which statement describes a switch?",
          options: [
            "A Layer 3 device that forwards packets between different networks",
            "A Layer 2 device that forwards frames using MAC address tables",
            "A device that broadcasts data to all ports",
            "A device that connects wireless clients to the wired network",
          ],
          correct: 1,
          translation: "أي عبارة بتوصف الـ Switch؟",
          explanation:
            'الـ Switch يشتغل في Layer 2 ويبعت الـ frames بناءً على جداول الـ MAC. وصف "Layer 3 وبيوصّل الـ packets بين شبكات" ده الـ Router، و"بيعمل broadcast لكل البورتات" ده الـ Hub، و"بيوصّل الأجهزة اللاسلكية بالشبكة السلكية" ده الـ Access Point.',
          tags: ["Switch", "Layer 2"],
          ref: "Lecture 01 — Section 3: Network Devices",
        },
        {
          q: "9. Which statement describes a router?",
          options: [
            "A Layer 2 device that forwards frames using MAC address tables",
            "A Layer 3 device that forwards packets between different networks",
            "A device that filters traffic based on security rules",
            "A device that converts signals between the LAN and the ISP link",
          ],
          correct: 1,
          translation: "أي عبارة بتوصف الـ Router؟",
          explanation:
            'الـ Router يشتغل في Layer 3 ويوصّل الـ packets بين شبكات مختلفة. وصف "Layer 2 وجداول MAC" ده الـ Switch، و"بيفلتر الترافيك حسب قواعد الأمان" ده الـ Firewall، و"بيحوّل الإشارات بين LAN وISP" ده الـ Modem.',
          tags: ["Router", "Layer 3"],
          ref: "Lecture 01 — Section 3: Network Devices",
        },
        {
          q: "10. Which device converts signals between the LAN and the ISP link?",
          options: ["Access Point", "Switch", "Modem", "Firewall"],
          correct: 2,
          translation:
            "أي جهاز بيحوّل الإشارات بين الشبكة المحلية (LAN) ووصلة مزوّد الخدمة (ISP)؟",
          explanation:
            "ده شغل الـ Modem. الـ Access Point بيوصّل الأجهزة اللاسلكية بالشبكة السلكية، والـ Firewall بيفلتر الترافيك حسب قواعد الأمان.",
          tags: ["Modem", "Network Devices"],
          ref: "Lecture 01 — Section 3: Network Devices",
        },
        {
          q: "11. How many layers do the OSI model and the TCP/IP model have, respectively?",
          options: [
            "7 layers and 4 layers",
            "4 layers and 7 layers",
            "5 layers and 4 layers",
            "7 layers and 5 layers",
          ],
          correct: 0,
          translation:
            "كام layer في الـ OSI model وكام في الـ TCP/IP model بالترتيب؟",
          explanation:
            'الـ OSI فيه 7 طبقات والـ TCP/IP فيه 4 طبقات. ترتيب "4 و7" معكوس.',
          tags: ["OSI", "TCP/IP"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          q: "12. Which option lists the OSI layers in the correct order from layer 7 down to layer 1?",
          options: [
            "Application, Session, Presentation, Transport, Network, Data Link, Physical",
            "Application, Presentation, Session, Network, Transport, Data Link, Physical",
            "Application, Presentation, Session, Transport, Data Link, Network, Physical",
            "Application, Presentation, Session, Transport, Network, Data Link, Physical",
          ],
          correct: 3,
          translation:
            "أي اختيار بيرتب طبقات الـ OSI صح من الطبقة 7 لحد الطبقة 1؟",
          explanation:
            "الترتيب الصح: Application ثم Presentation ثم Session ثم Transport ثم Network ثم Data Link ثم Physical. باقي الاختيارات فيها طبقتين مبدّلين مكان بعض.",
          tags: ["OSI Layers"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          q: "13. Which option lists the four layers of the TCP/IP model?",
          options: [
            "Application, Session, Network, Physical",
            "Presentation, Transport, Internet, Data Link",
            "Application, Transport, Network, Physical",
            "Application, Transport, Internet, Network Access",
          ],
          correct: 3,
          translation: "أي اختيار بيعرض الطبقات الأربعة لـ TCP/IP model؟",
          explanation:
            "طبقات TCP/IP هي Application وTransport وInternet وNetwork Access. باقي الاختيارات بتخلط أسماء طبقات من الـ OSI.",
          tags: ["TCP/IP Layers"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          q: "14. Which statement describes a Peer-to-Peer network?",
          options: [
            "Some nodes are servers dedicated to providing services to clients",
            "All nodes are equal in using the resources, and there is no dedicated server for a specific service",
            "One powerful server controls and provides every service",
            "Clients can use resources but are not allowed to share any",
          ],
          correct: 1,
          translation: "أي عبارة بتوصف شبكة Peer-to-Peer؟",
          explanation:
            'في الـ Peer-to-Peer كل الأجهزة متساوية ومفيش مورد مخصص لخدمة معينة. عبارتي "سيرفرات مخصصة لتقديم الخدمات" و"سيرفر قوي واحد بيتحكم في كل الخدمات" بيوصفوا الـ Client-Server.',
          tags: ["Peer-To-Peer"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          q: "15. Which statement about the Client-Server model is correct?",
          options: [
            "Some nodes (servers) are dedicated to providing services to other nodes (clients), and the server is more powerful",
            "All nodes are the same and use the resources equally",
            "There are no dedicated resources for any specific service",
            "Windows Workgroup is its typical example",
          ],
          correct: 0,
          translation: "أي عبارة عن نموذج Client-Server صحيحة؟",
          explanation:
            'في الـ Client-Server فيه أجهزة (سيرفرات) مخصصة لتقديم خدمات للأجهزة التانية (clients) والسيرفر أقوى. عبارتي "كل الأجهزة متساوية" و"مفيش مورد مخصص" بيوصفوا الـ Peer-to-Peer، وWindows Workgroup مثال عليه.',
          tags: ["Client-Server"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          q: "16. Which command shows the path that packets take to a destination?",
          options: ["netstat", "nslookup", "tracert / traceroute", "arp"],
          correct: 2,
          translation:
            "أي أمر بيعرض المسار اللي بتمشي فيه الـ packets لحد الوجهة؟",
          explanation:
            "tracert (في Windows) وtraceroute (في Linux) بيعرضوا المسار. netstat بيعرض الاتصالات النشطة، وnslookup بيحوّل الدومين لـ IP، وarp بيعرض جدول IP-to-MAC.",
          tags: ["tracert", "Commands"],
          ref: "Lecture 01 — Section 5: Basic Network Commands",
        },
        {
          q: "17. What does the -n option do in the ping command?",
          options: [
            "It sets the number of requests",
            "It shows the path packets take to the destination",
            "It resolves the domain name to an IP address",
            "It shows active connections and listening ports",
          ],
          correct: 0,
          translation: "إيه وظيفة الخيار -n في أمر ping؟",
          explanation:
            "الخيار -n بيحدد عدد الطلبات اللي هيبعتها ping. باقي الاختيارات وظايف أوامر تانية (tracert وnslookup وnetstat).",
          tags: ["ping"],
          ref: "Lecture 01 — Section 5: Basic Network Commands",
        },
        {
          q: "18. Which method of assigning IP addresses is used for servers and printers because the address does not change?",
          options: [
            "DHCP (Automatic)",
            "APIPA",
            "Reverse lookup",
            "Manual (Static)",
          ],
          correct: 3,
          translation:
            "أي طريقة لتعيين الـ IP بتتستخدم مع السيرفرات والطابعات لأن العنوان مش بيتغير؟",
          explanation:
            "الـ Static بيكتب فيها الأدمن الـ IP بإيده ومبيتغيرش. الـ DHCP بيدي عناوين تلقائي، والـ APIPA بتشتغل لما مفيش DHCP server.",
          tags: ["Static IP"],
          ref: "Lecture 01 — Section 6: Assigning IP Addresses",
        },
        {
          q: "19. Which set of settings can a DHCP server assign to a device?",
          options: [
            "Host IP, MAC address, NIC model, and lease time",
            "Subnet mask and ARP table entries only",
            "Host IP, subnet mask, default gateway, DNS server IP, and lease time",
            "Domain name, MAC address, and protocol type",
          ],
          correct: 2,
          translation:
            "أي مجموعة من الإعدادات يقدر الـ DHCP server يعيّنها للجهاز؟",
          explanation:
            "الـ DHCP بيعيّن Host IP وSubnet mask وDefault Gateway وDNS server IP وLease Time. الـ MAC address مش بيتعيّن لأنه متسجل في الكارت.",
          tags: ["DHCP"],
          ref: "Lecture 01 — Section 6: Assigning IP Addresses",
        },
        {
          q: "20. What is the correct order of the DHCP DORA process?",
          options: [
            "Discover, Request, Offer, Acknowledgment",
            "Discover, Offer, Request, Acknowledgment",
            "Offer, Discover, Request, Acknowledgment",
            "Request, Discover, Offer, Acknowledgment",
          ],
          correct: 1,
          translation: "إيه الترتيب الصح لعملية DORA في الـ DHCP؟",
          explanation:
            "DORA هي Discover ثم Offer ثم Request ثم Acknowledgment. العميل بيبعت Discover الأول، والسيرفر يرد بـ Offer، وبعدها العميل يبعت Request والسيرفر يأكد بـ Acknowledgment.",
          tags: ["DORA", "DHCP"],
          ref: "Lecture 01 — Section 6: Assigning IP Addresses",
        },
        {
          q: "21. A Windows computer cannot find any DHCP server. Which address range will APIPA assign to it?",
          options: [
            "192.168.1.0/24",
            "169.254.0.0/16",
            "255.255.255.0",
            "8.8.8.0/24",
          ],
          correct: 1,
          translation:
            "جهاز Windows مش لاقي أي DHCP server. أي نطاق عناوين هتعيّنه له APIPA؟",
          explanation:
            "الـ APIPA بتدي الجهاز عنوان من النطاق 169.254.0.0/16 عشان الأجهزة المحلية تقدر تتواصل. 192.168.1.x هو مثال لعنوان من DHCP، و255.255.255.0 مش عنوان وإنما subnet mask.",
          tags: ["APIPA"],
          ref: "Lecture 01 — Section 6: Assigning IP Addresses",
        },
        {
          q: "22. Which command requests a new IP address from the DHCP server?",
          options: [
            "ipconfig /renew",
            "ipconfig /release",
            "ipconfig /flushdns",
            "ipconfig /all",
          ],
          correct: 0,
          translation: "أي أمر بيطلب IP جديد من الـ DHCP server؟",
          explanation:
            "ipconfig /renew بيطلب عنوان جديد. ipconfig /release بيتخلى عن العنوان الحالي، وflushdns بيمسح الـ DNS cache.",
          tags: ["ipconfig", "DHCP"],
          ref: "Lecture 01 — Section 7: The ipconfig Command",
        },
        {
          q: "23. Which command shows the MAC address, DHCP server, DNS, and lease times?",
          options: [
            "ipconfig",
            "ipconfig /release",
            "ipconfig /flushdns",
            "ipconfig /all",
          ],
          correct: 3,
          translation:
            "أي أمر بيعرض الـ MAC address والـ DHCP server والـ DNS وأوقات الـ lease؟",
          explanation:
            "ipconfig /all بيعرض التفاصيل الكاملة. ipconfig لوحده بيعرض الـ IP والـ subnet mask والـ default gateway بس.",
          tags: ["ipconfig /all"],
          ref: "Lecture 01 — Section 7: The ipconfig Command",
        },
        {
          q: "24. What does the command nslookup 8.8.8.8 do?",
          options: [
            "It resolves the domain 8.8.8.8 to an IP address",
            "It enters interactive mode for multiple queries",
            "It performs a reverse lookup to find the domain name of the IP address",
            "It tests connectivity to 8.8.8.8",
          ],
          correct: 2,
          translation: "إيه اللي بيعمله الأمر nslookup 8.8.8.8؟",
          explanation:
            "لما تدخل IP في nslookup بيعمل reverse lookup ويرجّع اسم الدومين. الدخول في interactive mode بيحصل لما تكتب nslookup لوحدها.",
          tags: ["nslookup", "Reverse Lookup"],
          ref: "Lecture 01 — Section 8: The nslookup Command",
        },
        {
          q: "25. Which command deletes all entries from the ARP cache?",
          options: [
            "arp -d *",
            "arp -a",
            "arp -s <ip> <mac>",
            "ipconfig /flushdns",
          ],
          correct: 0,
          translation: "أي أمر بيمسح كل الـ entries من الـ ARP cache؟",
          explanation:
            "arp -d * بيمسح كل المدخلات. arp -a بيعرض الجدول بس، وarp -s بيضيف entry ثابتة يدويًا، وflushdns خاص بالـ DNS مش الـ ARP.",
          tags: ["arp"],
          ref: "Lecture 01 — Section 9: The arp Command",
        },
        {
          type: "essay",
          q: "1. Define a computer network and list its four main benefits.",
          translation: "عرّف شبكة الكمبيوتر واذكر أربع مميزات رئيسية لها.",
          answer:
            "A computer network is a group of two or more interconnected devices (computers, servers, printers, phones) that can share data, resources, hardware and services with each other.\n" +
            "1) Resource Sharing: printers, files, and the internet connection are shared across devices.\n" +
            "2) Communication: email, chat, and video calls between connected devices.\n" +
            "3) Centralized Data: data is stored and managed in one place (servers).\n" +
            "4) Scalability: new devices can be added easily as needs grow.",
          tags: ["Network Definition", "Benefits"],
          ref: "Lecture 01 — Section 1: What Is a Computer Network?",
        },
        {
          type: "essay",
          q: "2. Explain the following network terms: IP address, MAC address, NIC, and protocol (with examples of protocols).",
          translation:
            "اشرح المصطلحات التالية: IP address وMAC address وNIC وProtocol (مع أمثلة على البروتوكولات).",
          answer:
            "IP address: a logical address (e.g. 192.168.1.10) that identifies a device on a network. It is assigned and can change. It is 32 bits divided into 4 octets, each octet is 8 bits, separated by dots.\n" +
            "MAC address: a physical address burned into the NIC (e.g. 00:1A:2B:3C:4D:5E). It is unique and permanent. It is 48 bits written as 12 hexadecimal digits separated by colons.\n" +
            "NIC (Network Interface Card): the hardware that connects a device to a network.\n" +
            "Protocol: a set of rules that devices follow in order to communicate. Examples: TCP, HTTP, DHCP, and DNS.",
          tags: ["IP vs MAC", "NIC", "Protocol"],
          ref: "Lecture 01 — Section 2: Network Terminology",
        },
        {
          type: "essay",
          q: "3. Explain the function of each network device: hub, switch, router, firewall, access point, and modem.",
          translation:
            "اشرح وظيفة كل جهاز من أجهزة الشبكة: Hub وSwitch وRouter وFirewall وAccess Point وModem.",
          answer:
            "Hub: broadcasts data to all ports; it is outdated and has no intelligence.\n" +
            "Switch: works at Layer 2 and forwards frames using MAC address tables.\n" +
            "Router: works at Layer 3 and forwards packets between different networks.\n" +
            "Firewall: filters traffic based on security rules.\n" +
            "Access Point: connects wireless clients to the wired network.\n" +
            "Modem: converts signals between the LAN and the ISP link.",
          tags: ["Network Devices"],
          ref: "Lecture 01 — Section 3: Network Devices",
        },
        {
          type: "essay",
          q: "4. List the layers of the OSI model and the layers of the TCP/IP model.",
          translation: "اذكر طبقات الـ OSI model وطبقات الـ TCP/IP model.",
          answer:
            "OSI model (7 layers): 7. Application, 6. Presentation, 5. Session, 4. Transport, 3. Network, 2. Data Link, 1. Physical.\n" +
            "TCP/IP model (4 layers): Application, Transport, Internet, Network Access.",
          tags: ["OSI", "TCP/IP"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          type: "essay",
          q: "5. Compare the Peer-to-Peer model with the Client-Server model.",
          translation: "قارن بين نموذج Peer-to-Peer ونموذج Client-Server.",
          answer:
            "Peer-to-Peer: there are no dedicated resources for a specific service, it is easy to work with, and all nodes are the same (equal in using the resources). Example: Windows Workgroup.\n" +
            "Client-Server: some nodes (servers) are dedicated to providing services to other nodes (clients), and the server is more powerful. Examples: mail server, web server, file server.",
          tags: ["Peer-To-Peer", "Client-Server"],
          ref: "Lecture 01 — Section 4: Network Models",
        },
        {
          type: "essay",
          q: "6. Describe the three methods of assigning IP addresses and when each is used.",
          translation:
            "اشرح الطرق الثلاث لتعيين عناوين الـ IP ومتى تُستخدم كل طريقة.",
          answer:
            "Manual (Static): the administrator types the IP, subnet mask, gateway, and DNS into the device's network settings. It does not change, so it is used for servers and printers.\n" +
            "DHCP (Automatic): a DHCP server leases an IP address (and other settings) to the device when it joins the network. It is the most common method today.\n" +
            "APIPA (Automatic Private IP Addressing): if no DHCP server is found, Windows assigns itself an address in 169.254.0.0/16 so local devices can still talk to each other.",
          tags: ["Static", "DHCP", "APIPA"],
          ref: "Lecture 01 — Section 6: Assigning IP Addresses",
        },
        {
          type: "essay",
          q: "7. Explain DHCP and the DORA process.",
          translation: "اشرح الـ DHCP وعملية DORA.",
          answer:
            "DHCP is used to assign the IP configuration dynamically, including the host IP, subnet mask, default gateway, DNS server IP, and the lease time.\n" +
            "DORA steps: Discover, Offer, Request, Acknowledgment.\n" +
            "1) Discover: the DHCP client broadcasts a discover message.\n" +
            "2) Offer: the DHCP server broadcasts an offer message.\n" +
            "3) Request: the DHCP client responds with a request message.\n" +
            "4) Acknowledgment: the DHCP server finalizes the exchange with an acknowledgment message.",
          tags: ["DHCP", "DORA"],
          ref: "Lecture 01 — Section 6: Assigning IP Addresses",
        },
        {
          type: "essay",
          q: "8. State the purpose of these commands: ping, tracert/traceroute, netstat, and explain the -n option of ping.",
          translation:
            "اذكر الغرض من الأوامر: ping وtracert/traceroute وnetstat، واشرح الخيار -n في ping.",
          answer:
            "ping: tests connectivity to another device. The -n option sets the number of requests.\n" +
            "tracert / traceroute: shows the path packets take to a destination.\n" +
            "netstat: shows active connections and listening ports.",
          tags: ["ping", "tracert", "netstat"],
          ref: "Lecture 01 — Section 5: Basic Network Commands",
        },
        {
          type: "essay",
          q: "9. Explain the ipconfig command and its main options.",
          translation: "اشرح أمر ipconfig وأهم الخيارات الخاصة به.",
          answer:
            "ipconfig is a Windows command to view and manage the IP configuration (Linux/Mac equivalent: ifconfig or ip addr).\n" +
            "ipconfig: shows the basic IP, subnet mask, and default gateway.\n" +
            "ipconfig /all: shows full details such as MAC address, DHCP server, DNS, and lease times.\n" +
            "ipconfig /release: releases the current DHCP-assigned IP address.\n" +
            "ipconfig /renew: requests a new IP address from the DHCP server.\n" +
            "ipconfig /flushdns: clears the local DNS resolver cache.",
          tags: ["ipconfig"],
          ref: "Lecture 01 — Section 7: The ipconfig Command",
        },
        {
          type: "essay",
          q: "10. Explain the nslookup and arp commands with their options.",
          translation: "اشرح أمري nslookup وarp مع الخيارات الخاصة بهما.",
          answer:
            "nslookup queries DNS servers to resolve domain names to IP addresses (and vice versa); it is useful for troubleshooting DNS issues.\n" +
            "nslookup google.com: resolves the domain to its IP address(es).\n" +
            "nslookup 8.8.8.8: reverse lookup that finds the domain name for an IP.\n" +
            "nslookup (alone): enters interactive mode for multiple queries.\n" +
            "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network.\n" +
            "arp -a: displays the current ARP table (IP-to-MAC mappings).\n" +
            "arp -d *: deletes all entries from the ARP cache.\n" +
            "arp -s <ip> <mac>: manually adds a static ARP entry.",
          tags: ["nslookup", "arp"],
          ref: "Lecture 01 — Section 8: The nslookup Command",
        },
      ],
    },
  ],
  testBanks: [
    {
      t: "بنك أسئلة الحوسبة السحابية",
      d: "أسئلة المحاضرة في اختبار واحد",
      lectures: [0, 1],
    },
  ],
});
