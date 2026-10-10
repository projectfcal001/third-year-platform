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
      pdf: "subjects/cloud-computing/lectures/Cloud Computing Orientation Session.pdf",
      summary: {
        text: "الحوسبة السحابية هي تقديم خدمات وتطبيقات تقنية المعلومات عبر الإنترنت عند الطلب كخدمات مقاسة (Metered). من خصائصها: الخدمة الذاتية، المرونة، تجميع الموارد، والـ Virtualization. أنواع الخدمات: IaaS, PaaS, SaaS, IDaaS, SECaaS, CaaS, FaaS, XaaS. نماذج النشر: Public, Private, Community, Hybrid. الأطراف الخمسة: Consumer, Provider, Carrier, Auditor, Broker. الأمان مسؤولية مشتركة بين المزود والعميل.",
      },
      links: [],
      questions: [
        // ───────── Concept ─────────
        {
          q: "What does cloud computing deliver over the Internet?",
          options: [
            "Only physical hardware",
            "Various types of services and applications",
            "Only email accounts",
            "Only printing services",
          ],
          correct: 1,
          translation: "ماذا تقدم الحوسبة السحابية عبر الإنترنت؟",
          explanation:
            "الحوسبة السحابية تقدم أنواعًا مختلفة من الخدمات والتطبيقات عبر الإنترنت.\nCloud computing delivers various types of services and applications over the Internet.",
        },
        {
          q: "Cloud computing is best described as:",
          options: [
            "An on-demand delivery of IT capabilities",
            "A one-time purchase of servers",
            "A type of programming language",
            "A local network inside one building",
          ],
          correct: 0,
          translation: "أفضل وصف للحوسبة السحابية هو:",
          explanation:
            "هي تقديم قدرات تقنية المعلومات عند الطلب (On-demand).\nCloud computing is an on-demand delivery of IT capabilities.",
        },
        {
          q: "How are IT infrastructure and applications provided to subscribers in the cloud?",
          options: [
            "As free permanent licenses",
            "As physical shipments",
            "As metered services over networks",
            "As offline software only",
          ],
          correct: 2,
          translation:
            "كيف يتم تقديم البنية التحتية والتطبيقات للمشتركين في السحابة؟",
          explanation:
            "تُقدَّم للمشتركين كخدمات مقاسة (يُحاسَب على قدر الاستخدام) عبر الشبكات.\nThey are provided to subscribers as metered services over networks.",
        },
        {
          q: "Which of the following is an example of a cloud solution?",
          options: [
            "A standalone calculator app",
            "Gmail, Facebook, Dropbox",
            "A local text editor",
            "A USB flash drive",
          ],
          correct: 1,
          translation: "أي مما يلي مثال على حل سحابي؟",
          explanation:
            "Gmail و Facebook و Dropbox أمثلة على الحلول السحابية.\nGmail, Facebook, and Dropbox are examples of cloud solutions.",
        },

        // ───────── Characteristics ─────────
        {
          q: "Which of the following is NOT a characteristic of cloud computing?",
          options: [
            "On-demand self-service",
            "Rapid elasticity",
            "Resource pooling",
            "Manual hardware installation by the user",
          ],
          correct: 3,
          translation: "أي مما يلي ليس من خصائص الحوسبة السحابية؟",
          explanation:
            "الخصائص تشمل الخدمة الذاتية عند الطلب والمرونة السريعة وتجميع الموارد، وليس التركيب اليدوي للأجهزة من المستخدم.\nCharacteristics include on-demand self-service, rapid elasticity, and resource pooling — not manual hardware installation.",
        },
        {
          q: "Rapid elasticity in the cloud is also referred to as:",
          options: ["Scalability", "Encryption", "Latency", "Virtual identity"],
          correct: 0,
          translation:
            "المرونة السريعة (Rapid elasticity) في السحابة يُشار إليها أيضًا باسم:",
          explanation:
            "المرونة السريعة هي القابلية للتوسع (Scalability) بزيادة الموارد أو تقليلها حسب الحاجة.\nRapid elasticity is also called scalability — resources scale up or down as needed.",
        },
        {
          q: "Which characteristic allows multiple consumers to share the same underlying resources?",
          options: [
            "Broad network access",
            "Measured service",
            "Resource pooling",
            "Automated management",
          ],
          correct: 2,
          translation:
            "أي خاصية تسمح لعدة مستهلكين بمشاركة نفس الموارد الأساسية؟",
          explanation:
            "تجميع الموارد (Resource pooling) يعني أن الموارد تُشارَك بين عدة مستخدمين.\nResource pooling means the provider's resources are shared among multiple consumers.",
        },
        {
          q: "Which technology is listed as a key characteristic of cloud computing?",
          options: [
            "Dial-up modems",
            "Virtualization technology",
            "Punch cards",
            "Floppy disks",
          ],
          correct: 1,
          translation: "أي تقنية مذكورة كخاصية أساسية للحوسبة السحابية؟",
          explanation:
            "تقنية الـ Virtualization من الخصائص المذكورة وهي أساس مشاركة الموارد.\nVirtualization technology is listed as a characteristic and underpins resource sharing.",
        },
        {
          q: "Which characteristic means users can access cloud services from many types of devices over the network?",
          options: [
            "Broad network access",
            "Distributed storage",
            "Limited control",
            "Lock-in",
          ],
          correct: 0,
          translation:
            "أي خاصية تعني إمكانية الوصول للخدمات السحابية من أجهزة متعددة عبر الشبكة؟",
          explanation:
            "Broad network access = إتاحة الخدمات عبر الشبكة من أجهزة مختلفة.\nBroad network access makes services available over the network from various devices.",
        },

        // ───────── Challenges ─────────
        {
          q: "Which of the following is listed as a challenge (disadvantage) of cloud computing?",
          options: [
            "Limited control",
            "Unlimited free storage",
            "No need for the Internet",
            "Zero security risks",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور كتحدٍّ (عيب) للحوسبة السحابية؟",
          explanation:
            "من التحديات: محدودية التحكم، الأمان والخصوصية، الاعتماد على الشبكة.\nChallenges include limited control, security/privacy, and dependence on network connections.",
        },
        {
          q: "Why is the cloud potentially vulnerable to attacks, according to the lecture?",
          options: [
            "It has no software",
            "It is always offline",
            "It only uses old hardware",
            "Every component is online",
          ],
          correct: 3,
          translation: "لماذا تكون السحابة معرضة للهجمات حسب المحاضرة؟",
          explanation:
            "لأن كل مكوّن فيها متصل بالإنترنت.\nBecause every component is online.",
        },
        {
          q: "Difficulty in migrating from one service provider to another is known as:",
          options: ["Elasticity", "Lock-in", "Pooling", "Load balancing"],
          correct: 1,
          translation: "صعوبة الانتقال من مزود خدمة إلى آخر تُعرف باسم:",
          explanation:
            "هذا هو الـ Lock-in، وهو أيضًا مذكور ضمن تهديدات السحابة.\nThis is Lock-in, also listed among cloud threats.",
        },

        // ───────── Service types ─────────
        {
          q: "Which service model provides fundamental IT resources such as computing power, virtualization, storage, network, and OS on demand?",
          options: ["SaaS", "FaaS", "IaaS", "IDaaS"],
          correct: 2,
          translation:
            "أي نموذج خدمة يقدم موارد تقنية أساسية مثل القدرة الحاسوبية والتخزين والشبكة ونظام التشغيل عند الطلب؟",
          explanation:
            "IaaS = Infrastructure-as-a-Service، يوفر البنية التحتية الأساسية.\nIaaS (Infrastructure-as-a-Service) provides the fundamental IT resources.",
        },
        {
          q: "In PaaS, subscribers do NOT need to buy and manage the underlying software and infrastructure, but they have authority over:",
          options: [
            "Deployed applications",
            "The physical data center",
            "The network cables",
            "The provider's staff",
          ],
          correct: 0,
          translation:
            "في PaaS لا يحتاج المشترك لشراء وإدارة البرمجيات والبنية التحتية الأساسية، لكن له سلطة على:",
          explanation:
            "PaaS تسمح بتطوير التطبيقات، ويتحكم المشترك في التطبيقات المنشورة.\nPaaS enables application development; the subscriber controls the deployed applications.",
        },
        {
          q: "Which service model offers application software to subscribers on demand over the Internet?",
          options: ["IaaS", "SaaS", "CaaS", "SECaaS"],
          correct: 1,
          translation:
            "أي نموذج خدمة يقدم برمجيات التطبيقات للمشتركين عند الطلب عبر الإنترنت؟",
          explanation:
            "SaaS = Software-as-a-Service، مثل Gmail.\nSaaS (Software-as-a-Service) delivers application software over the Internet, e.g., Gmail.",
        },
        {
          q: "Which service offers authentication services managed by a third-party vendor, such as Single-Sign-On (SSO) and Multi-Factor Authentication (MFA)?",
          options: ["PaaS", "XaaS", "FaaS", "IDaaS"],
          correct: 3,
          translation:
            "أي خدمة تقدم خدمات المصادقة تُدار بواسطة طرف ثالث مثل SSO و MFA؟",
          explanation:
            "IDaaS = Identity-as-a-Service لإدارة الهوية والوصول.\nIDaaS (Identity-as-a-Service) provides identity and access management such as SSO and MFA.",
        },
        {
          q: "Security-as-a-Service (SECaaS) is developed based on which service model?",
          options: ["IaaS", "FaaS", "SaaS", "CaaS"],
          correct: 2,
          translation: "خدمة Security-as-a-Service مبنية على أي نموذج خدمة؟",
          explanation:
            "SECaaS مبنية على SaaS وتقلل التكلفة مقارنة ببناء قدرات أمنية خاصة.\nSECaaS is built on SaaS and greatly reduces cost compared to building in-house security.",
        },
        {
          q: "Which of the following services does SECaaS provide?",
          options: [
            "Food delivery",
            "Penetration testing, intrusion detection, anti-malware",
            "Video editing",
            "Game development",
          ],
          correct: 1,
          translation: "أي من الخدمات التالية تقدمها SECaaS؟",
          explanation:
            "تقدم اختبار الاختراق والمصادقة وكشف التسلل ومكافحة البرمجيات الخبيثة وغيرها.\nIt offers penetration testing, authentication, intrusion detection, anti-malware, etc.",
        },
        {
          q: "Container-as-a-Service (CaaS) inherits features of which two models?",
          options: [
            "IaaS and PaaS",
            "SaaS and FaaS",
            "IDaaS and SECaaS",
            "XaaS and SaaS",
          ],
          correct: 0,
          translation: "خدمة Container-as-a-Service ترث خصائص أي نموذجين؟",
          explanation:
            "CaaS تجمع بين خصائص IaaS و PaaS لتطوير تطبيقات حاويات قابلة للتوسع.\nCaaS inherits features of both IaaS and PaaS for building scalable containerized applications.",
        },
        {
          q: "Function-as-a-Service (FaaS) is associated with which architecture?",
          options: [
            "Mainframe architecture",
            "Peer-to-peer architecture",
            "Serverless architecture",
            "Punch-card architecture",
          ],
          correct: 2,
          translation: "خدمة Function-as-a-Service ترتبط بأي معمارية؟",
          explanation:
            "FaaS تتيح تطوير وتشغيل الوظائف دون تعقيد بناء البنية التحتية (Serverless).\nFaaS lets you build and run functions without managing infrastructure (serverless).",
        },
        {
          q: "FaaS provides data processing services, such as:",
          options: [
            "Printing services",
            "Internet of Things (IoT) services",
            "Radio broadcasting",
            "Paper archiving",
          ],
          correct: 1,
          translation: "تقدم FaaS خدمات معالجة بيانات مثل:",
          explanation:
            "مثل خدمات إنترنت الأشياء (IoT).\nSuch as Internet of Things (IoT) services.",
        },
        {
          q: "Anything-as-a-Service (XaaS) can include services such as:",
          options: [
            "Only storage",
            "Only networking",
            "Only operating systems",
            "Food, transportation, and medical consultations",
          ],
          correct: 3,
          translation: "يمكن أن تشمل Anything-as-a-Service خدمات مثل:",
          explanation:
            "XaaS تغطي خدمات أخرى مثل الطعام والمواصلات والاستشارات الطبية، وخدمات آمنة مثل إدارة علاقات العملاء (CRM).\nXaaS covers other services like food, transportation, medical consultations, and secure services such as CRM.",
        },

        // ───────── Deployment models ─────────
        {
          q: "Which cloud deployment model is open for public use?",
          options: [
            "Public Cloud",
            "Private Cloud",
            "Community Cloud",
            "Hybrid Cloud",
          ],
          correct: 0,
          translation: "أي نموذج نشر سحابي متاح للاستخدام العام؟",
          explanation:
            "السحابة العامة (Public Cloud) مفتوحة للجمهور.\nPublic Cloud is open for public use.",
        },
        {
          q: "Which cloud deployment model is for a single organization only?",
          options: [
            "Public Cloud",
            "Community Cloud",
            "Private Cloud",
            "Hybrid Cloud",
          ],
          correct: 2,
          translation: "أي نموذج نشر سحابي مخصص لمؤسسة واحدة فقط؟",
          explanation:
            "السحابة الخاصة (Private Cloud) لمؤسسة واحدة.\nPrivate Cloud is for a single organization only.",
        },
        {
          q: "A cloud shared by several organizations from a specific community is called:",
          options: [
            "Private Cloud",
            "Community Cloud",
            "Public Cloud",
            "Hybrid Cloud",
          ],
          correct: 1,
          translation: "السحابة التي تشاركها عدة مؤسسات من مجتمع معين تسمى:",
          explanation:
            "هذه هي السحابة المجتمعية (Community Cloud).\nThis is the Community Cloud.",
        },
        {
          q: "A Hybrid Cloud is:",
          options: [
            "A cloud with no users",
            "A cloud used by one person only",
            "A cloud without the Internet",
            "A combination of two or more clouds (private, community, or public)",
          ],
          correct: 3,
          translation: "السحابة الهجينة (Hybrid Cloud) هي:",
          explanation:
            "هي مزيج من سحابتين أو أكثر (خاصة أو مجتمعية أو عامة).\nIt is a combination of two or more clouds (private, community, or public).",
        },
        {
          q: "The selection of a cloud deployment model is based on:",
          options: [
            "Enterprise requirements",
            "The color of the logo",
            "The number of employees' phones",
            "Random choice",
          ],
          correct: 0,
          translation: "يعتمد اختيار نموذج النشر السحابي على:",
          explanation:
            "يتم الاختيار حسب متطلبات المؤسسة.\nSelection is based on enterprise requirements.",
        },

        // ───────── Actors ─────────
        {
          q: "Which of the following is NOT one of the five major actors in cloud computing?",
          options: [
            "Cloud Consumer",
            "Cloud Auditor",
            "Cloud Developer",
            "Cloud Broker",
          ],
          correct: 2,
          translation:
            "أي مما يلي ليس من الأطراف الخمسة الرئيسية في الحوسبة السحابية؟",
          explanation:
            "الأطراف الخمسة: Consumer, Provider, Carrier, Auditor, Broker.\nThe five actors are Consumer, Provider, Carrier, Auditor, and Broker.",
        },
        {
          q: "The Cloud Consumer sets up service contracts with:",
          options: [
            "The Cloud Auditor",
            "The Cloud Service Provider (CSP)",
            "The Cloud Carrier only",
            "Other consumers",
          ],
          correct: 1,
          translation:
            "المستهلك السحابي (Cloud Consumer) يُبرم عقود الخدمة مع:",
          explanation:
            "يُبرم العقود مع مزود الخدمة السحابية (CSP).\nThe consumer sets up service contracts with the CSP.",
        },
        {
          q: "Which actor acquires and manages the computing infrastructure intended for providing services?",
          options: [
            "Cloud Auditor",
            "Cloud Carrier",
            "Cloud Consumer",
            "Cloud Provider",
          ],
          correct: 3,
          translation:
            "أي طرف يمتلك ويدير البنية التحتية الحاسوبية المخصصة لتقديم الخدمات؟",
          explanation:
            "هذا هو مزود السحابة (Cloud Provider).\nThis is the Cloud Provider.",
        },
        {
          q: "Which actor acts as an intermediary providing connectivity and transport services between CSPs and consumers?",
          options: [
            "Cloud Carrier",
            "Cloud Broker",
            "Cloud Auditor",
            "Cloud Provider",
          ],
          correct: 0,
          translation:
            "أي طرف يعمل كوسيط يوفر الاتصال والنقل بين المزودين والمستهلكين؟",
          explanation:
            "الناقل السحابي (Cloud Carrier) يوفر خدمات الاتصال والنقل عبر الشبكة.\nThe Cloud Carrier provides connectivity and transport via a network.",
        },
        {
          q: "Which actor is an independent entity that evaluates and verifies cloud services, performance, and security controls?",
          options: [
            "Cloud Broker",
            "Cloud Consumer",
            "Cloud Auditor",
            "Cloud Carrier",
          ],
          correct: 2,
          translation:
            "أي طرف هو جهة مستقلة تقيّم وتتحقق من الخدمات السحابية والأداء وضوابط الأمان؟",
          explanation:
            "المدقق السحابي (Cloud Auditor) جهة أو شخص أو أداة آلية مستقلة.\nThe Cloud Auditor is an independent entity, person, or automated tool.",
        },
        {
          q: "Which actor manages cloud services regarding use, performance, and delivery, and maintains the relationship between CSPs and consumers?",
          options: [
            "Cloud Carrier",
            "Cloud Broker",
            "Cloud Auditor",
            "Cloud Provider",
          ],
          correct: 1,
          translation:
            "أي طرف يدير الخدمات السحابية من حيث الاستخدام والأداء والتسليم ويحافظ على العلاقة بين المزودين والمستهلكين؟",
          explanation:
            "هذا هو وسيط السحابة (Cloud Broker).\nThis is the Cloud Broker.",
        },

        // ───────── Threats ─────────
        {
          q: "Which of the following is listed as a cloud computing threat?",
          options: [
            "Data breach/loss",
            "Faster response times",
            "Load balancing",
            "Disaster recovery plan",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور كتهديد للحوسبة السحابية؟",
          explanation:
            "تسرب/فقدان البيانات تهديد، بينما الباقي إجراءات أو مزايا.\nData breach/loss is a threat; the others are measures or benefits.",
        },
        {
          q: "Illegal access to the cloud is mainly caused by:",
          options: [
            "Strong encryption",
            "Weak authentication and authorization control",
            "Load balancing",
            "Using SaaS",
          ],
          correct: 1,
          translation: "الوصول غير المشروع للسحابة ينتج أساسًا عن:",
          explanation:
            "بسبب ضعف ضوابط المصادقة والتفويض.\nIt results from weak authentication and authorization control.",
        },
        {
          q: "Which of the following is an example of data breach/loss mentioned in the lecture?",
          options: [
            "Fast network speed",
            "Using a public cloud",
            "Scaling resources up",
            "Encryption keys are lost",
          ],
          correct: 3,
          translation:
            "أي مما يلي مثال على تسرب/فقدان البيانات المذكور في المحاضرة؟",
          explanation:
            "من الأمثلة: مسح أو تعديل البيانات، وفقدان مفاتيح التشفير.\nExamples: data is erased or modified, and encryption keys are lost.",
        },
        {
          q: "Which of the following is also listed among cloud threats?",
          options: [
            "Open-source software",
            "Fast elasticity",
            "Unsynchronized system clocks",
            "Pay-as-you-go billing",
          ],
          correct: 2,
          translation: "أي مما يلي مذكور أيضًا ضمن تهديدات السحابة؟",
          explanation:
            "من التهديدات: عدم تزامن ساعات النظام، وفقدان سجلات التشغيل والأمان، والكوارث الطبيعية، وأعطال العتاد.\nThreats also include unsynchronized clocks, loss of operational/security logs, natural disasters, and hardware failure.",
        },

        // ───────── Security considerations ─────────
        {
          q: "Cloud security is a shared responsibility between:",
          options: [
            "Only the customer",
            "Only the provider",
            "The cloud service provider and the customer",
            "The government and the ISP",
          ],
          correct: 2,
          translation: "أمان السحابة مسؤولية مشتركة بين:",
          explanation:
            "مسؤولية مشتركة بين مزود الخدمة والعميل.\nSecurity is a shared responsibility between the cloud service provider and the customer.",
        },
        {
          q: 'In the shared responsibility model, who is typically responsible for "Security OF the Cloud"?',
          options: [
            "The cloud service provider",
            "The customer",
            "The cloud auditor only",
            "No one",
          ],
          correct: 0,
          translation:
            'في نموذج المسؤولية المشتركة، من المسؤول عادةً عن "Security OF the Cloud"؟',
          explanation:
            "المزود مسؤول عن أمان السحابة نفسها (البنية التحتية)، والعميل مسؤول عن الأمان داخلها (Security IN the Cloud: بياناته وإعداداته).\nThe provider secures the cloud itself (infrastructure); the customer secures what they put in it (Security IN the Cloud).",
        },
        {
          q: "Continuous monitoring of Quality of Service (QoS) is required to maintain:",
          options: [
            "Hardware warranties",
            "Service level agreements (SLAs)",
            "Software licenses",
            "Marketing campaigns",
          ],
          correct: 1,
          translation:
            "المراقبة المستمرة لجودة الخدمة (QoS) مطلوبة للحفاظ على:",
          explanation:
            "للحفاظ على اتفاقيات مستوى الخدمة (SLA) بين المستهلكين والمزود.\nTo maintain the SLAs between consumers and the service provider.",
        },
        {
          q: "Which plan should cloud services implement to handle failures and disasters?",
          options: [
            "A disaster recovery plan",
            "A marketing plan",
            "A hiring plan",
            "A pricing plan",
          ],
          correct: 0,
          translation:
            "أي خطة يجب أن تطبقها الخدمات السحابية للتعامل مع الأعطال والكوارث؟",
          explanation:
            "يجب تنفيذ خطة تعافٍ من الكوارث (Disaster Recovery Plan).\nCloud services should implement a disaster recovery plan.",
        },
        {
          q: "Why must cryptographic algorithms be implemented in cloud services?",
          options: [
            "To slow down the network",
            "To reduce storage",
            "To remove virtualization",
            "For optimum data security",
          ],
          correct: 3,
          translation: "لماذا يجب تطبيق خوارزميات التشفير في الخدمات السحابية؟",
          explanation:
            "لتحقيق أفضل مستوى من أمان البيانات.\nTo achieve optimum data security.",
        },
        {
          q: "Which mechanism should be incorporated into cloud services to distribute workload?",
          options: [
            "Data erasure",
            "Lock-in",
            "Load balancing",
            "Manual scheduling",
          ],
          correct: 2,
          translation: "أي آلية يجب دمجها في الخدمات السحابية لتوزيع الحمل؟",
          explanation:
            "يجب دمج موازنة الأحمال (Load balancing) في الخدمات السحابية.\nLoad balancing should be incorporated into cloud services.",
        },

        // ───────── Jobs ─────────
        {
          q: "Which cloud job builds and manages cloud infrastructure, handles migrations, and optimizes performance?",
          options: [
            "Cloud Engineer",
            "Cloud Architect",
            "Cloud Security Engineer",
            "DevOps Engineer",
          ],
          correct: 0,
          translation:
            "أي وظيفة سحابية تبني وتدير البنية التحتية وتتعامل مع عمليات الترحيل وتحسّن الأداء؟",
          explanation:
            "هذا دور Cloud Engineer.\nThis is the role of the Cloud Engineer.",
        },
        {
          q: "Which cloud job designs high-level system blueprints and selects frameworks and cloud services?",
          options: [
            "Cloud Engineer",
            "Cloud Architect",
            "Cloud Security Engineer",
            "Cloud Auditor",
          ],
          correct: 1,
          translation:
            "أي وظيفة سحابية تصمم المخططات عالية المستوى للأنظمة وتختار الأطر والخدمات السحابية؟",
          explanation:
            "هذا دور Cloud Architect.\nThis is the role of the Cloud Architect.",
        },
        {
          q: "Which cloud job automates deployments, configures monitoring, and maintains reliable cloud environments?",
          options: [
            "Cloud Architect",
            "Cloud Security Engineer",
            "DevOps / Cloud Operations Engineer",
            "Cloud Broker",
          ],
          correct: 2,
          translation:
            "أي وظيفة سحابية تؤتمت عمليات النشر وتضبط المراقبة وتحافظ على بيئات سحابية موثوقة؟",
          explanation:
            "هذا دور DevOps / Cloud Operations Engineer.\nThis is the role of the DevOps / Cloud Operations Engineer.",
        },
        {
          q: "Which cloud job configures access controls, manages encryption, and protects data against cyber threats?",
          options: [
            "Cloud Engineer",
            "Cloud Architect",
            "DevOps Engineer",
            "Cloud Security Engineer",
          ],
          correct: 3,
          translation:
            "أي وظيفة سحابية تضبط ضوابط الوصول وتدير التشفير وتحمي البيانات من التهديدات السيبرانية؟",
          explanation:
            "هذا دور Cloud Security Engineer.\nThis is the role of the Cloud Security Engineer.",
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
