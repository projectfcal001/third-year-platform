/* بيانات مادة: الرسم بالحاسب (computer-graphics)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/computer-graphics/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "الرسم بالحاسب",
  en: "Computer Graphics",
  icon: "🖼️",
  slug: "computer-graphics",
  // lectures: [
  //   /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
  //        pdf:"datenew/subjects/computer-graphics/lectures/lec-01.pdf", questions:[] } */
  // ],
  lectures: [
    {
      id: "graphics-lecture-lec-01",
      t: "المحاضرة 1: مقدمة الرسوميات، الإسقاط المنظوري، والـ Rasterization",
      d: "تغطي المفاهيم الأساسية لرسوميات الحاسوب، تحويل المجسمات من 3D إلى 2D باستخدام الإسقاط المنظوري (Perspective Projection)، وخوارزميات تحويل الخطوط إلى بيكسلات (Rasterization).",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 1/Lec1-Computer Graphics.pdf",
      pdf2: "datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture_1_Questions_Intro_to_Computer_Graphics.pdf",
      sectionTitle: "🧩 سكاشن الرسوميات",
      linkCategories: [
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "المحاضرة الرسمية من مؤلف السلايدات (Keenan Crane - CMU) + كورس أكاديمي عالمي مرافق",
          links: [
            {
              t: "Keenan Crane - Lecture 01: Course Overview (CMU 15-462/662)",
              d: "المحاضرة الأولى الرسمية — هي نفسها محتوى هذا الملف بالضبط: تعريف CG، لماذا المعلومات البصرية، التطبيقات، نشاط رسم المكعب، الإسقاط المنظوري، والـ Rasterization",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://www.youtube.com/watch?v=PhxV_JrXeVk",
                  type: "view",
                  color: "red",
                },
                {
                  label: "📚 القائمة الكاملة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🌐 صفحة المادة الرسمية",
                  url: "https://15462.courses.cs.cmu.edu/fall2021/home",
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
            "مقالات تفصيلية تشرح بالضبط مفاهيم الملف: إسقاط المنظور (u=x/z, v=y/z) والـ Rasterization",
          links: [
            {
              t: "Scratchapixel - Computing Pixel Coordinates of a 3D Point (Perspective Projection)",
              d: "شرح تفاعلي مطابق تماماً للمحاضرة: نموذج الكاميرا الثقبية، المثلثات المتشابهة، حساب (u,v) من (x,y,z) بقسمة x,y على z",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المرجع",
                  url: "https://scratchapixel.com/lessons/3d-basic-rendering/computing-pixel-coordinates-of-3d-point/perspective-projection.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Scratchapixel - The Rasterization Algorithm",
              d: "شرح مفصل لعملية Rasterization: تحويل الأشكال المستمرة إلى شبكة بيكسلات، خوارزمية الرسم التدريجي — يطابق القسم الأخير من المحاضرة",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المرجع",
                  url: "https://scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "GeeksforGeeks - Computer Graphics Tutorial",
              d: "توثيق شامل: Line Drawing Algorithms، التحويلات ثنائية وثلاثية الأبعاد، وVisible Surface Detection — مرجع سريع للمفاهيم",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/computer-graphics-2/",
                  type: "view",
                },
              ],
            },
          ],
        },
        {
          category: "أدوات ومحاكاة",
          icon: "🔧",
          description:
            "أدوات تفاعلية لتجربة مفاهيم المحاضرة عملياً: رسم المكعب، الكاميرا المنظورية، والتحكم بالبيكسلات",
          links: [
            {
              t: "Three.js - Interactive 3D Editor",
              d: "محرر ثلاثي الأبعاد عبر الويب: أنشئ مكعباً، جرّب Perspective Camera، وحرّك المجسمات — يربط مباشرة بنشاط رسم المكعب في المحاضرة",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح المحرر",
                  url: "https://threejs.org/editor/",
                  type: "view",
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
          q: "What are the two main objectives stated at the start of the lecture?",
          options: [
            "Learn a graphics API and write shader code",
            "Understand broadly what computer graphics is about, and implement the first algorithm for making images of 3D shapes",
            "Study hardware architecture and GPU pipelines",
            "Review linear algebra and calculus",
          ],
          correct: 1,
          translation: "ما هما الهدفان الرئيسيان المذكوران في بداية المحاضرة؟",
          explanation:
            "الهدفان هما: (1) فهم ماهية رسوميات الحاسوب بشكل عام، (2) تنفيذ أول خوارزمية لإنشاء صور لمجسمات ثلاثية الأبعاد. باقي الاختيارات أهداف ثانوية أو لاحقة في الكورس.",
        },
        {
          q: "According to the lecture's definition, computer graphics is:",
          options: [
            "The use of computers to synthesize visual information",
            "The study of pixel manipulation only",
            "A branch of computer hardware engineering",
            "The science of image compression",
          ],
          correct: 0,
          translation: "وفقاً لتعريف المحاضرة، رسوميات الحاسوب هي:",
          explanation:
            "التعريف الرسمي = استخدام الحواسيب لتخليق (synthesize) المعلومات البصرية. الباقي تعريفات ناقصة أو خاطئة.",
        },
        {
          q: "The lecture later revises the definition of graphics to include:",
          options: [
            "Only visual information",
            "The use of computation to turn digital information into sensory stimuli",
            "Only sound and touch",
            "Only 3D geometry",
          ],
          correct: 1,
          translation: "المحاضرة تعيد لاحقاً صياغة تعريف الرسوميات ليشمل:",
          explanation:
            "التعريف الموسّع = استخدام الحوسبة لتحويل المعلومات الرقمية إلى محفزات حسية (مش بصرية فقط). ده بيفتح الباب لمجالات زي Haptics والـ 3D Printing.",
        },
        {
          q: "Roughly what fraction of the brain is dedicated to visual processing, according to the lecture?",
          options: ["About 5%", "About 30%", "About 60%", "About 90%"],
          correct: 1,
          translation:
            "تقريباً كام في المية من المخ مخصص للمعالجة البصرية حسب المحاضرة؟",
          explanation:
            "حوالي 30% من المخ مسؤول عن المعالجة البصرية — رقم كبير يفسّر ليه الرسوميات مهمة جداً في التفاعل البشري-الحاسوبي.",
        },
        {
          q: "Why are eyes described as important in the lecture?",
          options: [
            "They are the slowest input to the brain",
            "They are the highest-bandwidth port into the head",
            "They only process color, not shape",
            "They are not relevant to computer graphics",
          ],
          correct: 1,
          translation: "لماذا وُصفت العين في المحاضرة بأنها مهمة؟",
          explanation:
            "العين هي أعلى منفذ (port) في bandwidth للدماغ — بترسل معلومات بصرية بمعدل ضخم جداً، وده اللي بيخلّي الرسوميات فعّالة كوسيلة تواصل.",
        },
        {
          q: "Which historical device is mentioned as an early computer (1945)?",
          options: ["Sketchpad", "ENIAC", "Apple II", "IBM PC"],
          correct: 1,
          translation: "أي جهاز تاريخي ذُكر كحاسوب مبكر (1945)؟",
          explanation:
            "ENIAC هو أول حاسوب إلكتروني رقمي عام الغرض (1945). Sketchpad جاء بعده (1963) وكان أول نظام رسوميات تفاعلي.",
        },
        {
          q: "Punch cards, as referenced in the lecture, stored roughly how much data?",
          options: ["~12 bytes", "~120 bytes", "~1.2 KB", "~12 KB"],
          correct: 1,
          translation:
            "بطاقات الـ Punch Cards، زي ما ذُكر في المحاضرة، كانت تخزّن تقريباً كام بيانات؟",
          explanation:
            "بطاقة الـ punch card الواحدة كانت تخزّن حوالي 120 بايت — رقم ضئيل جداً مقارنةً بصورة 8K واحدة (~95 MB).",
        },
        {
          q: "Sketchpad, an early interactive graphics system, was created by:",
          options: [
            "Alan Turing",
            "Ivan Sutherland",
            "John von Neumann",
            "Douglas Engelbart",
          ],
          correct: 1,
          translation: "Sketchpad، أول نظام رسوميات تفاعلي، صنعه:",
          explanation:
            "Ivan Sutherland صنع Sketchpad سنة 1963 كجزء من رسالة الدكتوراة بتاعته في MIT. يُعتبر أبو الرسوميات التفاعلية.",
        },
        {
          q: "In what year was Sketchpad created?",
          options: ["1945", "1955", "1963", "1980"],
          correct: 2,
          translation: "في أي سنة صُنع Sketchpad؟",
          explanation:
            "سنة 1963 — بعد ENIAC بحوالي 18 سنة. ده بيدّي فكرة عن سرعة تطور المجال.",
        },
        {
          q: "An 8K monitor (7680x4320) produces an image of roughly what size, per the lecture?",
          options: ["~9.5 MB", "~95 MB", "~950 MB", "~9.5 GB"],
          correct: 1,
          translation:
            "شاشة 8K (7680×4320) بتنتج صورة بحجم تقريبي كام حسب المحاضرة؟",
          explanation:
            "7680 × 4320 × 3 بايت (RGB) ≈ 95 ميجابايت للصورة الواحدة. ده يوضح ليه الـ bandwidth والـ compression موضوعات حرجة في الرسوميات.",
        },
        {
          q: "According to the lecture, a 2020 VR headset with two 2160x2160 displays at 90Hz produces data at roughly:",
          options: ["2.3 MB/s", "23 MB/s", "2.3 GB/s", "23 GB/s"],
          correct: 2,
          translation:
            "حسب المحاضرة، نظارة VR من 2020 بشاشتين 2160×2160 بمعدل 90Hz بتنتج بيانات بمعدل تقريبي:",
          explanation:
            "2.3 جيجابايت/ثانية — معدل ضخم جداً يفسّر التحديات الهندسية في نظارات الـ VR الحديثة.",
        },
        {
          q: "Which of the following is NOT listed as an application area of computer graphics in the lecture?",
          options: [
            "Entertainment (movies, games)",
            "Architecture",
            "Scientific/mathematical visualization",
            "Database indexing",
          ],
          correct: 3,
          translation:
            "أي مما يلي لم يُذكر كمجال تطبيقي للرسوميات في المحاضرة؟",
          explanation:
            "Database indexing مجال قواعد بيانات بحت ومالوش علاقة بالرسوميات. باقي الاختيارات مجالات تطبيقية مذكورة فعلاً (ترفيه، معمار، تصوير علمي).",
        },
        {
          q: "Which visualization type is specifically mentioned alongside scientific visualization?",
          options: [
            "Medical/anatomical visualization",
            "Financial visualization",
            "Network visualization",
            "Weather visualization",
          ],
          correct: 0,
          translation: "أي نوع تصوير ذُكر تحديداً بجانب التصوير العلمي؟",
          explanation:
            "التصوير الطبي/التشريحي (Medical/Anatomical). الرسوميات مهمة جداً في المجال الطبي — من الأشعة المقطعية لجراحة افتراضية.",
        },
        {
          q: "Which of the following is listed under the 'Theory' foundations of computer graphics?",
          options: [
            "Sampling & aliasing",
            "Compiler design",
            "Operating systems",
            "Database theory",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور ضمن أسس 'النظرية' في رسوميات الحاسوب؟",
          explanation:
            "Sampling & aliasing أساس نظري في الرسوميات (بيتعامل مع تحويل الإشارات المستمرة لمنفصلة). الباقي فروع CS مختلفة تماماً.",
        },
        {
          q: "Which of the following is listed under the 'Theory' foundations of computer graphics?",
          options: [
            "Radiometry & light transport",
            "Network protocols",
            "File systems",
            "Cryptography",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور ضمن أسس 'النظرية' في رسوميات الحاسوب؟",
          explanation:
            "Radiometry & light transport — أساس فهم الإضاءة والظلال الواقعية. بيقوم على فيزياء انتشار الضوء.",
        },
        {
          q: "Which of the following is listed under the 'Systems' foundations of computer graphics?",
          options: [
            "Parallel, heterogeneous processing",
            "Radiometry",
            "Perception",
            "Sampling & aliasing",
          ],
          correct: 0,
          translation: "أي مما يلي مذكور ضمن أسس 'الأنظمة' في رسوميات الحاسوب؟",
          explanation:
            "المعالجة المتوازية وغير المتجانسة (زي CPU+GPU) هي أساس الـ Systems في الرسوميات. Radiometry و Sampling نظرية، Perception إدراك بشري.",
        },
        {
          q: "In the cube-modeling activity, the cube is assumed to be centered at:",
          options: ["(1,1,1)", "The origin (0,0,0)", "(2,2,2)", "(-1,-1,-1)"],
          correct: 1,
          translation: "في نشاط نمذجة المكعب، المكعب مفترض إنه متمركز عند:",
          explanation:
            "المكعب متمركز عند نقطة الأصل (0,0,0) — ده التبسيط المعياري في الرسوميات عشان يسهّل الحسابات.",
        },
        {
          q: "What are the dimensions of the cube used in the modeling activity?",
          options: ["1x1x1", "2x2x2", "3x3x3", "4x4x4"],
          correct: 1,
          translation: "إيه هي أبعاد المكعب المستخدم في نشاط النمذجة؟",
          explanation:
            "2×2×2 — يعني كل ضلع طوله 2، والمكعب متمركز في الأصل فبيمتد من -1 لـ +1 على كل محور.",
        },
        {
          q: "How many vertices does the cube in the activity have?",
          options: ["4", "6", "8", "12"],
          correct: 2,
          translation: "كم عدد الرؤوس (vertices) في المكعب بالنشاط؟",
          explanation:
            "8 رؤوس — كل رأس هو نقطة عند تقاطع 3 أحرف. المكعب بشكل عام له 2³ = 8 رؤوس.",
        },
        {
          q: "How many edges does the cube in the activity have?",
          options: ["6", "8", "10", "12"],
          correct: 3,
          translation: "كم عدد الأحرف (edges) في المكعب بالنشاط؟",
          explanation: "12 حرف — المكعب له 12 حرف، 6 أوجه، و8 رؤوس.",
        },
        {
          q: "In the cube-drawing activity, what is the basic two-step strategy for turning a 3D cube into a 2D image?",
          options: [
            "Rotate the cube, then scale it",
            "Map 3D vertices to 2D points, then connect them with straight lines",
            "Apply color, then shade the faces",
            "Compute normals, then apply lighting",
          ],
          correct: 1,
          translation:
            "في نشاط رسم المكعب، إيه هي الاستراتيجية الأساسية المكونة من خطوتين لتحويل المكعب من 3D لصورة 2D؟",
          explanation:
            "الخطوتان: (1) إسقاط كل رأس من 3D إلى نقطة في 2D، (2) توصيل النقاط المتقابلة بخطوط مستقيمة = هيكل الوايرفريم.",
        },
        {
          q: "The lecture explains perspective projection using which simple camera model?",
          options: [
            "Lens camera",
            "Pinhole camera",
            "Fisheye camera",
            "Orthographic camera",
          ],
          correct: 1,
          translation:
            "المحاضرة تشرح الإسقاط المنظوري باستخدام أي نموذج كاميرا بسيط؟",
          explanation:
            "الكاميرا الثقبية (Pinhole) — أبسط نموذج: ثقب صغير + مستوي تصوير. بيدي الإسقاط المنظوري بشكل طبيعي.",
        },
        {
          q: "In perspective projection, objects appear smaller as they:",
          options: [
            "Get closer to the camera",
            "Get further away from the camera",
            "Rotate faster",
            "Change color",
          ],
          correct: 1,
          translation: "في الإسقاط المنظوري، الأجسام تبان أصغر لما:",
          explanation:
            "لما تبعُد عن الكاميرا — ده قانون أساسي في الإسقاط المنظوري، وبيظهر في معادلة u=x/z، v=y/z (كل ما z تكبر، u و v تصغّر).",
        },
        {
          q: "In the side-view derivation, the image point is called:",
          options: ["p = (x,y,z)", "q = (u,v)", "c = (2,3,5)", "s = slope"],
          correct: 1,
          translation: "في الاشتقاق من المنظر الجانبي، نقطة الصورة اسمها:",
          explanation:
            "نقطة الصورة في مستوي التصوير اسمها q = (u,v)، بينما p = (x,y,z) هي نقطة الجسم في الفضاء 3D، و c مركز الإسقاط.",
        },
        {
          q: "Under the assumption that the camera has unit size with origin at the pinhole c, the vertical image coordinate v is derived as:",
          options: [
            "v = y + z",
            "v = y/z (the slope y/z)",
            "v = y * z",
            "v = z/y",
          ],
          correct: 1,
          translation:
            "بافتراض إن الكاميرا حجمها وحدة والأصل عند الثقب c، الإحداثي الرأسي للصورة v يُشتق كالتالي:",
          explanation:
            "v = y/z — ناتج من تشابه المثلثات: النسبة بين y في الفضاء و v في الصورة = نسبة المسافة z لمستوي التصوير (=1).",
        },
        {
          q: "Following the same logic, the horizontal image coordinate u is given by:",
          options: ["u = x/z", "u = z/x", "u = x*z", "u = x+z"],
          correct: 0,
          translation: "بنفس المنطق، الإحداثي الأفقي للصورة u يُعطى بـ:",
          explanation:
            "u = x/z — نفس منطق v بالظبط، بس على المحور الأفقي. القسمة على z دي هي جوهر الإسقاط المنظوري.",
        },
        {
          q: "In the 'draw the cube' activity, what camera position is assumed?",
          options: ["c = (0,0,0)", "c = (1,1,1)", "c = (2,3,5)", "c = (5,3,2)"],
          correct: 2,
          translation: "في نشاط 'ارسم المكعب'، موضع الكاميرا المفترض هو:",
          explanation:
            "c = (2,3,5) — موضع كاميرا مثالي بيسمح برؤية المكعب بزاوية ثلاثية الأبعاد واضحة.",
        },
        {
          q: "To project each 3D vertex to 2D in the activity, the first step is to:",
          options: [
            "Divide (x,y) by z directly",
            "Subtract the camera position c from the vertex to get (x,y,z)",
            "Multiply the vertex by the camera position",
            "Add the camera position to the vertex",
          ],
          correct: 1,
          translation:
            "لإسقاط كل رأس من 3D إلى 2D في النشاط، الخطوة الأولى هي:",
          explanation:
            "اطرح موضع الكاميرا c من الرأس عشان تنقله لنظام إحداثيات نسبي للكاميرا — ده بيخلي الكاميرا في الأصل، وبعدين نطبق u=x/z، v=y/z.",
        },
        {
          q: "After subtracting the camera position, the second step to get (u,v) is to:",
          options: [
            "Multiply (x,y) by z",
            "Divide (x,y) by z",
            "Add z to (x,y)",
            "Take the square root of z",
          ],
          correct: 1,
          translation:
            "بعد طرح موضع الكاميرا، الخطوة الثانية للحصول على (u,v) هي:",
          explanation:
            "اقسم (x,y) على z — دي معادلة الإسقاط المنظوري الأساسية: u=x/z، v=y/z.",
        },
        {
          q: "Once the two endpoints of an edge have been projected to (u1,v1) and (u2,v2), what does the algorithm do next?",
          options: [
            "Fill the polygon between them",
            "Draw a line between the two 2D points",
            "Compute a normal vector",
            "Apply a color gradient",
          ],
          correct: 1,
          translation:
            "بعد إسقاط طرفي الحرف إلى (u1,v1) و(u2,v2)، الخوارزمية تعمل إيه بعدين؟",
          explanation:
            "ترسم خط مستقيم بين النقطتين في 2D. ده بيدي هيكل الوايرفريم للمكعب.",
        },
        {
          q: "According to the lecture, what did the cube-drawing exercise successfully demonstrate?",
          options: [
            "Turning visual information into digital information",
            "Turning purely digital information into purely visual information using a completely algorithmic procedure",
            "Compressing an image",
            "Simulating lighting",
          ],
          correct: 1,
          translation: "حسب المحاضرة، إيه اللي أثبته تمرين رسم المكعب بنجاح؟",
          explanation:
            "إننا قدرنا نحوّل معلومات رقمية بحتة إلى معلومات بصرية بحتة عبر إجراء خوارزمي كامل — وده جوهر رسوميات الحاسوب.",
        },
        {
          q: "The lecture describes a raster display using which common abstraction?",
          options: [
            "A continuous vector canvas",
            "A 2D grid of pixels, each with a color value",
            "A single scanning laser beam",
            "A 1D array of intensities",
          ],
          correct: 1,
          translation: "المحاضرة تصف شاشة الـ Raster بأي تجريد شائع؟",
          explanation:
            "شبكة 2D من البيكسلات، كل بيكسل له قيمة لونية. ده أبسط تجريد لشاشة الـ raster.",
        },
        {
          q: "The process of converting a continuous object (like a line) into a discrete pixel-grid representation is called:",
          options: [
            "Aliasing",
            "Rasterization",
            "Tessellation",
            "Quantization",
          ],
          correct: 1,
          translation:
            "عملية تحويل جسم مستمر (زي الخط) إلى تمثيل شبكة بيكسلات منفصلة اسمها:",
          explanation:
            "Rasterization (التنقيط) — تحويل الأشكال الهندسية المستمرة لبيكسلات منفصلة على الشاشة.",
        },
        {
          q: "Which rule for choosing which pixels to light up for a line is specifically named in the lecture, and used by modern GPUs?",
          options: [
            "The midpoint rule",
            "The diamond rule",
            "The Bresenham rule",
            "The scanline rule",
          ],
          correct: 1,
          translation:
            "أي قاعدة لاختيار البيكسلات اللي تنوّر لرسم خط ذُكرت تحديداً في المحاضرة، وتستخدمها الـ GPUs الحديثة؟",
          explanation:
            "قاعدة المعين (Diamond rule) — لو الخط يمر داخل المعين المرتبط بالبيكسل، البيكسل ينوّر. الـ GPUs الحديثة بتستخدمها فعلاً.",
        },
        {
          q: "Under the diamond rule, a pixel is lit up if:",
          options: [
            "The line passes through the pixel's associated diamond",
            "The line touches any corner of the pixel",
            "The pixel is closer to the camera",
            "The pixel's color matches the line's color",
          ],
          correct: 0,
          translation: "تحت قاعدة المعين، البيكسل ينوّر لو:",
          explanation:
            "الخط يمر خلال المعين المرتبط بالبيكسل. القاعدة دي بتدي نتائج أفضل من فحص الزوايا فقط، وبتُستخدم في العتاد الحديث.",
        },
        {
          q: "Why is naively checking every pixel in the image to rasterize a line considered inefficient?",
          options: [
            "It only works for horizontal lines",
            "It costs O(n^2) work in the number of image pixels, versus at most O(n) pixels actually lit up",
            "It cannot represent color",
            "It requires floating-point hardware that doesn't exist",
          ],
          correct: 1,
          translation:
            "ليه فحص كل بيكسل في الصورة بشكل ساذج لتنقيط خط يُعتبر غير فعّال؟",
          explanation:
            "لأنه بيكلّف O(n²) على عدد بيكسلات الصورة، بينما الخط فعلياً بينوّر O(n) بيكسل على الأكثر — إهدار هائل للموارد.",
        },
        {
          q: "In the incremental line rasterization algorithm described, the slope s of the line is computed as:",
          options: [
            "s = (u2-u1) / (v2-v1)",
            "s = (v2-v1) / (u2-u1)",
            "s = (u2+u1) / (v2+v1)",
            "s = u2 * v2",
          ],
          correct: 1,
          translation:
            "في خوارزمية التنقيط التدريجية الموصوفة، ميل الخط s يُحسب كالتالي:",
          explanation:
            "s = (v2-v1)/(u2-u1) — الفرق في v على الفرق في u. ده تعريف الميل القياسي.",
        },
        {
          q: "The easy special case handled by the incremental algorithm assumes:",
          options: [
            "u1 > u2 and v1 > v2",
            "u1 < u2, v1 < v2, and 0 < s < 1",
            "The line is vertical",
            "The slope is greater than 1",
          ],
          correct: 1,
          translation:
            "الحالة الخاصة السهلة اللي تتعامل معاها الخوارزمية التدريجية تفترض:",
          explanation:
            "u1 < u2، v1 < v2، و 0 < s < 1 — يعني الخط من أسفل-يسار لأعلى-يمين بميل أقل من 45°. الحالات التانية بتحتاج معالجة خاصة.",
        },
        {
          q: "In the incremental algorithm's loop, what is updated on every iteration as u increases by 1?",
          options: [
            "v is incremented by s, then rounded to draw the pixel",
            "u is divided by s",
            "The camera position is updated",
            "The color is incremented",
          ],
          correct: 0,
          translation:
            "في حلقة الخوارزمية التدريجية، إيه اللي بيتحدّث في كل تكرار لما u تزيد بمقدار 1؟",
          explanation:
            "v بتزيد بمقدار s، وبعدين تتقرّب (round) لرسم البيكسل. ده أساس فكرة 'الزيادة التدريجية' — بدل ما نحسب كل نقطة من الصفر.",
        },
        {
          q: "The lecture notes that although the incremental algorithm is easy to implement, it is:",
          options: [
            "Exactly how lines are drawn in modern software/hardware",
            "Not how lines are actually drawn in modern software/hardware",
            "Only usable for 3D lines",
            "The fastest possible method",
          ],
          correct: 1,
          translation:
            "المحاضرة بتلاحظ إن الخوارزمية التدريجية، رغم سهولتها، إلا إنها:",
          explanation:
            "مش هي الطريقة الفعلية لرسم الخطوط في البرمجيات/العتاد الحديث — الطرق الحقيقية أعقد بكتير (زي Bresenham والـ diamond rule).",
        },
        {
          q: "After completing the simple line-drawing algorithm for the cube, what does the lecture say is needed for more realistic pictures?",
          options: [
            "Only better monitors",
            "A richer model of the world, including geometry, materials, lights, cameras, and motion",
            "Faster punch card readers",
            "More pixels per inch only",
          ],
          correct: 1,
          translation:
            "بعد إكمال خوارزمية رسم الخطوط البسيطة للمكعب، إيه اللي المحاضرة بتقوله مطلوب لصور أكثر واقعية؟",
          explanation:
            "نموذج أغنى للعالم: هندسة + مواد (materials) + إضاءة + كاميرات + حركة. ده اللي بيفرق بين الرسم البسيط والصور الواقعية.",
        },
        {
          q: "Which of the following is explicitly listed as part of the 'richer model of the world' needed for realism?",
          options: ["Materials", "Punch cards", "Compilers", "Databases"],
          correct: 0,
          translation:
            "أي مما يلي مذكور صراحةً كجزء من 'النموذج الأغنى للعالم' المطلوب للواقعية؟",
          explanation:
            "المواد (Materials) — خصائص الأسطح (خشب، معدن، زجاج...) ضرورية لمحاكاة الإضاءة الواقعية.",
        },
        {
          q: "Which of the following is explicitly listed as part of the 'richer model of the world' needed for realism?",
          options: [
            "Motion",
            "Networking",
            "Cryptography",
            "Operating systems",
          ],
          correct: 0,
          translation:
            "أي مما يلي مذكور صراحةً كجزء من 'النموذج الأغنى للعالم' المطلوب للواقعية؟",
          explanation:
            "الحركة (Motion) — الأجسام المتحركة والأنيميشن جزء أساسي من الواقعية البصرية.",
        },
        {
          q: "The lecture frames the whole cube-drawing exercise as fundamentally illustrating:",
          options: [
            "What computer graphics is all about",
            "How to compress an image",
            "How compilers work",
            "How networks transmit images",
          ],
          correct: 0,
          translation: "المحاضرة بتأطّر تمرين رسم المكعب كتوضيح أساسي لـ:",
          explanation:
            "إن ده جوهر رسوميات الحاسوب — تحويل معلومات رقمية إلى صورة عبر خوارزمية واضحة.",
        },
        {
          q: "What footnote does the lecture add about the idea of a pixel as 'a little square'?",
          options: [
            "It is completely accurate and never questioned",
            "The notion will be strongly challenged later in the course",
            "Pixels are always circular",
            "Pixels do not have color",
          ],
          correct: 1,
          translation:
            "إيه الحاشية اللي أضافتها المحاضرة عن فكرة البيكسل كـ 'مربع صغير'؟",
          explanation:
            "الفكرة دي هتتحدّى بقوة لاحقاً في الكورس — لأن البيكسل فعلياً مفهوم أعقد بكتير في نظرية الإشارات والـ sampling.",
        },
        {
          q: "The lecture references a SIGGRAPH trailer to make which point?",
          options: [
            "That computer graphics is a narrow, niche field",
            "That even the broadened definition of graphics is still too narrow",
            "That SIGGRAPH only covers hardware",
            "That graphics has not changed since the 1960s",
          ],
          correct: 1,
          translation: "المحاضرة بتستشهد بإعلان SIGGRAPH عشان توضح أي نقطة؟",
          explanation:
            "إن حتى التعريف الموسّع للرسوميات لسه ضيق جداً — المجال بيتطور باستمرار لأبعد من التوقعات التقليدية.",
        },
        {
          q: "The lecture mentions turning digital information into physical matter as an example of graphics evolving beyond:",
          options: [
            "Just turning on pixels",
            "Just writing text",
            "Just playing sound",
            "Just 2D drawing",
          ],
          correct: 0,
          translation:
            "المحاضرة بتذكر تحويل المعلومات الرقمية إلى مادة فيزيائية كمثال على تطور الرسوميات لأبعد من:",
          explanation:
            "مجرد تشغيل البيكسلات — يعني الرسوميات بقت تشمل الطباعة ثلاثية الأبعاد، الـ Haptics، وغيرها.",
        },
        {
          q: "Where does the lecture say students can find all logistics for the course?",
          options: [
            "In the lecture slides only",
            "On the course webpage",
            "By email only",
            "In the textbook appendix",
          ],
          correct: 1,
          translation:
            "المحاضرة بتقول إن الطلاب يلاقوا كل اللوجستيات الخاصة بالكورس فين؟",
          explanation:
            "على صفحة الكورس الرسمية على الويب — فيها كل التفاصيل: المواعيد، الواجبات، السياسات، إلخ.",
        },
      ],
    },
    {
      id: "graphics-lecture-02",

      t: "المحاضرة 2: مراجعة الرياضيات (الجزء الأول: الجبر الخطي والـ Vector Spaces)",
      d: "تغطي المفاهيم الأساسية للجبر الخطي في الرسوميات الحاسوبية: مسلمات الفضاءات المتجهة (Vector Spaces)، التمثيل بالإحداثيات الديكارتية، عمليات الجمع والتكبيس (Scaling)، حساب منتصف القطعة (Midpoint)، معاملة الدوال كمتجهات، ومعايير قياس الطول (Euclidean Norm وL2 Norm للدوال).",
      pdf: "datenew/subjects/computer-graphics/lectures/Lecture 2/Lecture 2.pdf",
      pdf2: "datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture2_Linear_Algebra_Questions.pdf",

      // فئات روابط منظمة لمادة رسوميات الحاسوب (Computer Graphics - Lecture 1)
      // فئات روابط منظمة ومخصصة لمحاضرة الجبر الخطي للرسوميات الحاسوبية (CMU Lecture 2)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية تمس موضوعات المتجهات، المعيار، والفضاءات المتجهة المذكورة بالملف",
          links: [
            {
              t: "SpicyCoders - المتجهات | Vectors | الجبر الخطى",
              d: "شرح تفصيلي لمفهوم المتجهات، المركبات الديكارتية، وحساب طول المتجه (Magnitude) متوافق مع الشرائح 4-8 و 21-26",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=lMahHHwQ_Eo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - الجبر الخطي (فيديوهات التركيبات والفضاءات المتجهة)",
              d: "فيديوهات محددة للملف: فيديو #20 (Linear Combinations) وفيديو #24 (Linear Independence & Spanning Sets)",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 فتح قائمة التشغيل",
                  url: "https://youtube.com/playlist?list=PLxIvc-MGOs6iQXFnjF_STbhGdrZBphrv_&si=IaeoOStIm3rXMfNA",
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
            "المحاضرة الرسمية لجامعة CMU وسلسلة 3Blue1Brown المحددة بموضوعات الملف",
          links: [
            {
              t: "Prof. Keenan Crane - CMU 15-462 Math Review Part I: Linear Algebra",
              d: "المحاضرة الأكاديمية الرسمية المباشرة لمؤلف الشرائح من جامعة كارنيغي ميلون",
              icon: "🌍",
              actions: [
                {
                  label: "📖 المحاضرة الرسمية",
                  url: "http://15462.courses.cs.cmu.edu/fall2020/",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🎬 المحاضرة المباشرة",
                  url: "https://youtu.be/2c8XQlQApx8",
                  type: "view",
                  color: "red",
                },
                {
                  label: "📚 القائمة الكاملة",
                  url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "3Blue1Brown - Essence of Linear Algebra (مقاطع محددة للملف)",
              d: "المقاطع التابعة للملف: Ch 1 (Vectors)، Ch 2 (Span & Basis)، Ch 9 (Dot Products & Norms)، Ch 16 (Abstract Vector Spaces & Functions)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح القائمة المحددة",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
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
          description: "مقالات وتوثيقات هندسية متخصصة في الرياضيات للرسوميات",
          links: [
            {
              t: "Scratchapixel - Geometry: Points, Vectors and Normals",
              d: "مرجع متقدم يشرح تمثيل النقاط والمتجهات والمعايير في المحركات ثلاثية الأبعاد",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "CMU 15-462/662 Official Course Page",
              d: "الموقع الرسمي لمساق الرسوميات الحاسوبية بجامعة CMU ويتضمن الشرائح والواجبات البرمجية (Scotty3D)",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "http://15462.courses.cs.cmu.edu/",
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
            "برامج تفاعلية لمحاكاة جمع المتجهات وحساب المعيار في ثنائي وثلاثي الأبعاد",
          links: [
            {
              t: "PhET Interactive Simulation - Vector Addition",
              d: "أداة محاكاة تفاعلية من جامعة كولورادو لتركيب المتجهات واختبار خصائص الجمع والمعيار",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://phet.colorado.edu/en/simulations/vector-addition",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeoGebra 3D Visualizer - 3D Vector Addition",
              d: "بيئة تفاعلية ثلاثية الأبعاد لبناء المتجهات وتحليل المركبات وتطبيق متباينة المثلث هندسياً",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة 3D",
                  url: "https://www.geogebra.org/3d",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
      ],
      // الأسئلة

      // ═══════════════════════════════════════════════════════════════════
      //  المحاضرة 2 — مراجعة الرياضيات (الجبر الخطي والـ Vector Spaces)
      //  المسار: datenew/graphics/graphics.js → lectures[1].questions
      // ═══════════════════════════════════════════════════════════════════

      questions: [
        // ─── MCQ ───
        {
          q: "Why is linear algebra described as important for computer graphics?",
          options: [
            "It is only used for drawing text",
            "It is only needed for hardware design",
            "It replaces the need for any programming",
            "It is an effective bridge between geometry, physics, etc., and computation",
          ],
          correct: 3,
          translation: "لماذا يُوصف الجبر الخطي بأنه مهم لرسوميات الحاسوب؟",
          explanation:
            "الجبر الخطي هو الجسر الفعّال بين الهندسة والفيزياء والحوسبة. بيمكّنك من صياغة المسائل الهندسية في صورة رياضية قابلة للحل حاسوبياً.",
        },
        {
          q: "According to the lecture, once you can express a graphics problem in terms of linear algebra, you are essentially done because:",
          options: [
            "The GPU automatically draws the result",
            "The problem no longer needs any input data",
            "The answer is always a single number",
            "You can ask the computer to solve Ax = b",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، بمجرد أن تعبّر عن مسألة رسوميات بلغة الجبر الخطي، تكون قد انتهيت فعلياً لأن:",
          explanation:
            "لأنك بتحوّل المسألة لنظام معادلات Ax = b، والحاسوب يحلها بكفاءة عالية. دي قوة الجبر الخطي كأداة — بتخلي الحل مهمة حسابية.",
        },
        {
          q: "Which of the following is listed as an area made possible by fast numerical linear algebra?",
          options: [
            "Image processing, physically-based animation, and geometry processing",
            "Only network routing",
            "Only database indexing",
            "Only file compression",
          ],
          correct: 0,
          translation:
            "أي مما يلي ذُكر كمجال أصبح ممكناً بفضل الجبر الخطي العددي السريع؟",
          explanation:
            "معالجة الصور + الأنيميشن الفيزيائي + معالجة الهندسة. كلها مجالات بتعتمد على عمليات مصفوفية سريعة، وهي أساس الرسوميات الحديثة.",
        },
        {
          q: "Linear algebra is defined in the lecture as the study of:",
          options: [
            "Only 3D rotations",
            "Vector spaces and linear maps between them",
            "Polynomials and nothing else",
            "Only matrices of integers",
          ],
          correct: 1,
          translation: "الجبر الخطي عُرّف في المحاضرة بأنه دراسة:",
          explanation:
            "الفضاءات المتجهية والخرائط الخطية بينها. ده التعريف الرياضي الرسمي، أوسع بكتير من مجرد المصفوفات.",
        },
        {
          q: "What is the intuitive mental model of a vector used in the lecture?",
          options: [
            "A closed curve",
            "A grid of pixels",
            "A little arrow",
            "A single point",
          ],
          correct: 2,
          translation:
            "ما هو النموذج الذهني البديهي للمتجه المستخدم في المحاضرة؟",
          explanation:
            "سهم صغير (Little arrow) — الصورة الذهنية الأبسط والأكثر فائدة لفهم المتجهات هندسياً قبل الدخول في التعريفات المجردة.",
        },
        {
          q: "Which of the following is mentioned as data in graphics that may not look like arrows but still behaves like vectors?",
          options: [
            "Only file names",
            "Only integers",
            "Polynomials, images, and radiance",
            "Only text strings",
          ],
          correct: 2,
          translation:
            "أي مما يلي ذُكر كبيانات في الرسوميات قد لا تشبه الأسهم لكنها تتصرف كمتجهات؟",
          explanation:
            "كثيرات الحدود + الصور + الإشعاع (Radiance). كلها كائنات رياضية قابلة للجمع والضرب في عدد = متجهات في فضاءات دالية.",
        },
        {
          q: "What information does a vector fundamentally encode?",
          options: [
            "Color and texture",
            "Only its starting point",
            "Position and mass",
            "Direction and magnitude",
          ],
          correct: 3,
          translation: "ما المعلومات التي يشفّرها المتجه أساساً؟",
          explanation:
            "الاتجاه والمقدار — دي الخصائص الجوهرية للمتجه، بغض النظر عن تمثيله الإحداثي أو نقطة بدايته.",
        },
        {
          q: "A vector in 2D can be encoded by a length and an angle relative to a fixed direction. This is called:",
          options: [
            "Barycentric coordinates",
            "Homogeneous coordinates",
            "Polar coordinates",
            "Cartesian coordinates",
          ],
          correct: 2,
          translation:
            "المتجه في 2D يمكن ترميزه بطول وزاوية نسبةً لاتجاه ثابت. ده اسمه:",
          explanation:
            "الإحداثيات القطبية (r, θ) — بديل للإحداثيات الديكارتية (x, y)، ومناسبة للمسائل اللي فيها دوران أو زوايا.",
        },
        {
          q: "Traditionally, a vector does NOT include a:",
          options: ["Basepoint", "Direction", "Length", "Magnitude"],
          correct: 0,
          translation: "تقليدياً، المتجه لا يتضمن:",
          explanation:
            "نقطة الأساس (Basepoint). المتجه له اتجاه ومقدار فقط، مش نقطة بداية محددة. لو أضفنا نقطة أساس، بيبقى اسمه Tangent Vector.",
        },
        {
          q: "A vector with a basepoint is sometimes called a:",
          options: [
            "Tangent vector",
            "Normal vector",
            "Unit vector",
            "Zero vector",
          ],
          correct: 0,
          translation: "المتجه الذي له نقطة أساس يُسمى أحياناً:",
          explanation:
            "Tangent Vector (متجه مماسي) — لأنه بيرتبط بنقطة معينة على سطح أو منحنى، زي المتجه المماس لمسار حركة.",
        },
        {
          q: "Measuring the components of a vector with respect to a chosen coordinate system gives which representation (named after Descartes)?",
          options: [
            "Spherical coordinates only",
            "Cartesian coordinates",
            "Polar coordinates",
            "Radiance coordinates",
          ],
          correct: 1,
          translation:
            "قياس مركبات المتجه بالنسبة لنظام إحداثيات مختار يعطي أي تمثيل (منسوب لديكارت)؟",
          explanation:
            "الإحداثيات الديكارتية (x, y, z) — سميت باسم رينيه ديكارت. أبسط وأشهر نظام إحداثيات في الرياضيات والرسوميات.",
        },
        {
          q: "What does the lecture warn about coordinates?",
          options: [
            "Only integer coordinates are valid",
            "You cannot directly compare coordinates in different systems, e.g., (r,θ) with (x,y)",
            "Coordinates can never be used on a computer",
            "Coordinates are always identical in every system",
          ],
          correct: 1,
          translation: "ما الذي تحذّر منه المحاضرة بخصوص الإحداثيات؟",
          explanation:
            "لا يمكن مقارنة إحداثيات في أنظمة مختلفة مباشرة (زي (r,θ) مع (x,y)). لازم تحوّل لنفس النظام الأول قبل أي مقارنة أو عملية.",
        },
        {
          q: "The first basic operation on vectors shown in the lecture is addition. How is it done geometrically?",
          options: [
            "Rotating one arrow by 90 degrees",
            "Taking the longer of the two",
            "Multiplying their lengths",
            "Placing the arrows end to end",
          ],
          correct: 3,
          translation:
            "أول عملية أساسية على المتجهات في المحاضرة هي الجمع. كيف تُنفّذ هندسياً؟",
          explanation:
            "ضع السهمين رأس بذيل (end to end). ناتج الجمع = السهم من ذيل الأول لرأس التاني. دي القاعدة الهندسية لجمع المتجهات.",
        },
        {
          q: "The fact that u + v = v + u means vector addition is:",
          options: [
            "Non-linear",
            "Associative only",
            "Commutative (abelian)",
            "Distributive",
          ],
          correct: 2,
          translation: "حقيقة أن u + v = v + u تعني أن جمع المتجهات:",
          explanation:
            "تبديلي (Commutative / Abelian). الترتيب مش مهم في الجمع — نفس النتيجة لو بدّلت u و v.",
        },
        {
          q: "The term 'abelian' used for commutative addition comes from the name of:",
          options: [
            "René Descartes",
            "Isaac Newton",
            "Niels Henrik Abel",
            "Carl Friedrich Gauss",
          ],
          correct: 2,
          translation: "مصطلح 'أبيلين' المستخدم للجمع التبديلي مشتق من اسم:",
          explanation:
            "نيلز هنريك أبيل (Niels Henrik Abel) — عالم رياضيات نرويجي شهير، واسمه أُطلق على العمليات التبديلية في الجبر المجرد.",
        },
        {
          q: "The second basic operation on vectors is:",
          options: [
            "Sorting the components",
            "Dividing one vector by another",
            "Scaling by a number (scalar)",
            "Squaring a vector",
          ],
          correct: 2,
          translation: "العملية الأساسية الثانية على المتجهات هي:",
          explanation:
            "الضرب في عدد (Scaling). بتغيّر طول المتجه دون تغيير اتجاهه (إلا لو العدد سالب، بيعكس الاتجاه).",
        },
        {
          q: "Which identity describes how scaling behaves with repeated scaling?",
          options: [
            "a(bu) = (a + b)u",
            "a(bu) = abu²",
            "a(bu) = a + bu",
            "a(bu) = (ab)u",
          ],
          correct: 3,
          translation: "أي متطابقة تصف سلوك التكبير عند تكراره؟",
          explanation:
            "a(bu) = (ab)u — التكبير المتكرر = حاصل ضرب المعاملين. خاصية أساسية في الفضاءات المتجهية.",
        },
        {
          q: "Which identity describes the interaction of addition and scaling?",
          options: [
            "a(u + v) = a + u + v",
            "a(u + v) = au · av",
            "a(u + v) = au + av",
            "a(u + v) = a(uv)",
          ],
          correct: 2,
          translation: "أي متطابقة تصف التفاعل بين الجمع والتكبير؟",
          explanation:
            "a(u + v) = au + av — خاصية التوزيع (Distributivity). أساسية في الفضاءات المتجهية وبتسمح بتبسيط الحسابات.",
        },
        {
          q: "According to the lecture, where do the rules (axioms) of a vector space come from?",
          options: [
            "They were given by an authority with no explanation",
            "They come only from computer hardware",
            "They are random conventions",
            "The geometric behavior of little arrows",
          ],
          correct: 3,
          translation:
            "حسب المحاضرة، من أين تأتي قواعد (بديهيات) الفضاء المتجهي؟",
          explanation:
            "من السلوك الهندسي للأسهم الصغيرة. القواعد مستنبطة من الواقع الهندسي، مش موضوعة اعتباطاً ولا 'نزلت من السماء'.",
        },
        {
          q: "Any collection of objects satisfying all of the vector-space properties is called:",
          options: [
            "An invalid set",
            "A matrix",
            "A vector space, even if the objects do not look like little arrows",
            "A scalar field only",
          ],
          correct: 2,
          translation:
            "أي مجموعة من الكائنات تحقق كل خصائص الفضاء المتجهي تُسمى:",
          explanation:
            "فضاء متجهي، حتى لو الكائنات مش أسهم — زي الدوال أو كثيرات الحدود. التعريف قائم على الخصائص مش الشكل.",
        },
        {
          q: "The most common example of a vector space, denoted Rⁿ, means:",
          options: [
            "n functions",
            "n complex numbers",
            "n integers only",
            "n real numbers",
          ],
          correct: 3,
          translation:
            "المثال الأكثر شيوعاً للفضاء المتجهي، ويُرمز له بـ Rⁿ، يعني:",
          explanation:
            "n من الأعداد الحقيقية — زي R² (مستوي) أو R³ (فضاء ثلاثي الأبعاد). أساس كل الرسوميات ثلاثية الأبعاد.",
        },
        {
          q: "The tuple (1.23, 4.56, π/2) is a point in which space?",
          options: ["R³", "R¹", "R⁴", "R²"],
          correct: 0,
          translation: "الثلاثية (1.23, 4.56, π/2) هي نقطة في أي فضاء؟",
          explanation:
            "R³ — لأن فيها 3 أعداد حقيقية. تمثيل قياسي لنقطة في فضاء ثلاثي الأبعاد.",
        },
        {
          q: "Why is Euclidean n-dimensional space such a common example? (choose the best answer)",
          options: [
            "It is the only vector space that exists",
            "It cannot represent images",
            "It looks a lot like the space we live in and is easy to encode on a computer as a list of floating-point numbers",
            "It needs no memory to store",
          ],
          correct: 2,
          translation:
            "لماذا الفضاء الإقليدي n-الأبعاد مثال شائع جداً؟ (اختر أفضل إجابة)",
          explanation:
            "لأنه يشبه الفضاء اللي بنعيش فيه، وسهل ترميزه حاسوبياً كقائمة أرقام عشرية (Floating-point). عملي ومألوف.",
        },
        {
          q: "Which of the following is given as another very important example of vector spaces in graphics?",
          options: [
            "Spaces of file names",
            "Spaces of passwords",
            "Spaces of functions",
            "Spaces of network packets",
          ],
          correct: 2,
          translation:
            "أي مما يلي ذُكر كمثال آخر مهم جداً للفضاءات المتجهية في الرسوميات؟",
          explanation:
            "فضاءات الدوال — لأن كثير من كائنات الرسوميات (الصور، الإضاءة، الأسطح) هي دوال قابلة للجمع والتكبير.",
        },
        {
          q: "Why are spaces of functions important in computer graphics?",
          options: [
            "They replace the need for coordinates",
            "Many objects we work with in graphics are functions",
            "Functions are always linear",
            "Functions never change",
          ],
          correct: 1,
          translation: "لماذا فضاءات الدوال مهمة في رسوميات الحاسوب؟",
          explanation:
            "لأن كثير من الكائنات اللي بنشتغل عليها في الرسوميات هي دوال — صور، إشعاع، أسطح، اهتزازات. وبالتالي بتتعامل معاها بأدوات الجبر الخطي.",
        },
        {
          q: "Which of the following is listed as an example of a function that behaves as a vector?",
          options: [
            "Only the size of a file",
            "Only memory addresses",
            "Only the keyboard state",
            "Images, radiance from a light source, surfaces, and modal vibrations",
          ],
          correct: 3,
          translation: "أي مما يلي ذُكر كمثال على دالة تتصرف كمتجه؟",
          explanation:
            "الصور + الإشعاع من مصدر ضوء + الأسطح + الاهتزازات النمطية — كلها دوال قابلة للجمع والتكبير، وبتتعامل كمتجهات.",
        },
        {
          q: "How can two functions be added, according to the lecture?",
          options: [
            "Add their values at each point x",
            "Multiply their graphs",
            "Take the maximum of the two graphs",
            "It is not possible to add functions",
          ],
          correct: 0,
          translation: "كيف يمكن جمع دالتين حسب المحاضرة؟",
          explanation:
            "اجمع قيمهما عند كل نقطة x — تعريف جمع الدوال نقطة بنقطة (Pointwise addition). الأساس اللي بيخلي الدوال فضاء متجهي.",
        },
        {
          q: "What is the 'zero vector' in a space of functions?",
          options: [
            "The function equal to one for all x",
            "There is no zero vector",
            "The function equal to zero for all x",
            "The function x",
          ],
          correct: 2,
          translation: "ما هو 'المتجه الصفري' في فضاء الدوال؟",
          explanation:
            "الدالة التي تساوي صفر لكل x — العنصر المحايد في الجمع. أي دالة تانية + الصفر = نفسها.",
        },
        {
          q: "Short answer given in the lecture: are functions vectors?",
          options: [
            "No, only arrows are vectors",
            "Only functions on [0,1] are",
            "Yes, even if they do not look like little arrows",
            "Only polynomial functions are",
          ],
          correct: 2,
          translation: "الإجابة القصيرة في المحاضرة: هل الدوال متجهات؟",
          explanation:
            "نعم، حتى لو مش شكلها أسهم — لأنها تحقق كل خصائص الفضاء المتجهي (جمع تبديلي، تكبير، عنصر محايد...).",
        },
        {
          q: "After coming up with a rule for adding pairs of numbers, how does the lecture check that it faithfully encodes the geometry of little arrows?",
          options: [
            "Test it on a single example only",
            "Check that it agrees with the list of rules the arrows must obey",
            "Draw it once and trust it",
            "Assume it works since it looks simple",
          ],
          correct: 1,
          translation:
            "بعد وضع قاعدة لجمع أزواج الأعداد، كيف تتحقق المحاضرة من أنها ترمّز هندسة الأسهم بأمانة؟",
          explanation:
            "التحقق إنها متفقة مع قائمة القواعد اللي لازم الأسهم تحققها. التحقق الرياضي أساسي — مش اختبار عيّنة واحدة.",
        },
        {
          q: "How are vectors added in Cartesian coordinates?",
          options: [
            "Component by component: (u1,u2) + (v1,v2) = (u1+v1, u2+v2)",
            "By adding the lengths only",
            "By multiplying the components",
            "By adding only the first components",
          ],
          correct: 0,
          translation: "كيف تُجمع المتجهات في الإحداثيات الديكارتية؟",
          explanation:
            "مركبة بمركبة: (u1,u2) + (v1,v2) = (u1+v1, u2+v2). ده تمثيل جبري للجمع الهندسي (رأس بذيل).",
        },
        {
          q: "According to the lecture, why is turning geometric observations into algebraic rules convenient?",
          options: [
            "It makes vectors non-commutative",
            "It is convenient for symbolic manipulation and numerical computation",
            "It is required by all graphics hardware",
            "It removes the need for geometry forever",
          ],
          correct: 1,
          translation:
            "حسب المحاضرة، لماذا تحويل الملاحظات الهندسية لقواعد جبرية مريح؟",
          explanation:
            "مريح للتلاعب الرمزي (Symbolic) والحسابات العددية (Numerical). الحاسوب بيتعامل مع الأرقام أحسن بكتير من الأشكال الهندسية.",
        },
        {
          q: "What should you always ask about a rule given to you by an authority?",
          options: [
            "Is it short enough to memorize?",
            "Who published it first?",
            "Where does this rule come from, and what does it mean geometrically (can you draw a picture)?",
            "Is it written in the textbook?",
          ],
          correct: 2,
          translation:
            "ما الذي يجب أن تسأله دائماً عن قاعدة تُعطى لك من مصدر موثوق؟",
          explanation:
            "من أين تأتي القاعدة، وما معناها هندسياً (هل تقدر ترسمها)؟ لا تقبل القواعد بدون فهم — الفهم أهم من الحفظ.",
        },
        {
          q: "How do we scale a vector in coordinates?",
          options: [
            "Divide the scalar by each component",
            "Add the scalar to each component",
            "Multiply each component by the scalar",
            "Multiply only the first component",
          ],
          correct: 2,
          translation: "كيف نكبّر متجهاً في الإحداثيات؟",
          explanation:
            "اضرب كل مركبة في العدد — نفس عملية الضرب القياسي بتم على كل مركبة على حدة. مثال: 3·(1,2) = (3,6).",
        },
        {
          q: "What is (3/2)·(4,2)?",
          options: ["(6, 3)", "(4, 3)", "(5.5, 3.5)", "(12, 6)"],
          correct: 0,
          translation: "ما هو (3/2)·(4,2)؟",
          explanation:
            "(3/2 × 4, 3/2 × 2) = (6, 3). الحساب مباشر مركبة بمركبة — تطبيق لقاعدة التكبير.",
        },
        {
          q: "The midpoint m of two points a and b is computed as:",
          options: ["m = 2(a + b)", "m = a − b", "m = ½(a + b)", "m = a · b"],
          correct: 2,
          translation: "نقطة المنتصف m بين نقطتين a و b تُحسب كالتالي:",
          explanation:
            "m = ½(a + b) — متوسط النقطتين. مثال مباشر على استخدام الجمع والتكبير لبناء عمليات مفيدة في الرسوميات.",
        },
        {
          q: "What is the midpoint of a = (3,4) and b = (7,2)?",
          options: ["(10, 6)", "(5, 3)", "(4, 2)", "(5, 6)"],
          correct: 1,
          translation: "ما هي نقطة المنتصف بين a = (3,4) و b = (7,2)؟",
          explanation:
            "(½(3+7), ½(4+2)) = (½·10, ½·6) = (5, 3). تطبيق مباشر للمعادلة m = ½(a+b).",
        },
        {
          q: "The midpoint example is used to show that:",
          options: [
            "Vectors cannot be added to points",
            "Combining vector operations builds up operations needed for computer graphics",
            "Midpoints cannot be computed with vectors",
            "Scaling is not a valid operation",
          ],
          correct: 1,
          translation: "مثال نقطة المنتصف يُستخدم لإظهار أن:",
          explanation:
            "دمج عمليات المتجهات يبني عمليات محتاجة في الرسوميات. نقطة المنتصف = جمع + تكبير — ودي أساس رسم كثير من الأشكال.",
        },
        {
          q: "What two quantities does a vector encode that we want to measure?",
          options: [
            "Orientation (direction) and magnitude",
            "Origin and destination only",
            "Mass and velocity",
            "Color and brightness",
          ],
          correct: 0,
          translation: "ما الكميتان اللي يشفّرهما المتجه واللي عايزين نقيسهما؟",
          explanation:
            "الاتجاه والمقدار — بنقدر نقيسهم بمعيار (Norm) المتجه، واللي هنشوفه بعد شوية.",
        },
        {
          q: "The number |v| assigned to a vector v is called its:",
          options: [
            "Basepoint",
            "Scalar field",
            "Component",
            "Length, magnitude, or norm",
          ],
          correct: 3,
          translation: "العدد |v| المخصص للمتجه v يُسمى:",
          explanation:
            "الطول أو المقدار أو المعيار (Norm). ثلاث مصطلحات لنفس المفهوم — بنستخدم أي واحد حسب السياق.",
        },
        {
          q: "Intuitively, the norm of a vector should capture:",
          options: [
            "Where it starts",
            "How 'big' the vector is",
            "Which direction it points",
            "How many components it has",
          ],
          correct: 1,
          translation: "بديهياً، معيار المتجه يجب أن يعبّر عن:",
          explanation:
            "حجم المتجه — قد إيه هو 'كبير'. مش اتجاهه ولا نقطة بدايته ولا عدد مركباته. ده جوهر مفهوم المعيار.",
        },
        {
          q: "Which natural property says the norm should not be negative?",
          options: [
            "Commutativity",
            "Positivity: |u| ≥ 0",
            "Triangle inequality",
            "Homogeneity: |cu| = |c||u|",
          ],
          correct: 1,
          translation: "أي خاصية طبيعية تقول إن المعيار لا يجب أن يكون سالباً؟",
          explanation:
            "الإيجابية: |u| ≥ 0 — الطول ما ينفعش يكون سالب، ومنطقياً |u| = 0 فقط للمتجه الصفري.",
        },
        {
          q: "A norm should be zero only for:",
          options: [
            "Every unit vector",
            "The zero vector",
            "Any vector in R²",
            "Every vector of length one",
          ],
          correct: 1,
          translation: "المعيار يجب أن يكون صفر فقط لـ:",
          explanation:
            "المتجه الصفري — أي متجه تاني لازم يكون له طول موجب. لو المعيار = 0 فده معناه إن المتجه صفر.",
        },
        {
          q: "If a vector is scaled by a factor c, its norm should:",
          options: [
            "Stay the same",
            "Become c²",
            "Scale by the same amount: |cu| = |c||u|",
            "Become negative",
          ],
          correct: 2,
          translation: "لو المتجه اتكبّر بمعامل c، فإن معياره يجب أن:",
          explanation:
            "يتكبّر بنفس المقدار: |cu| = |c||u| — خاصية التجانس (Homogeneity). مثال: |3·(4,0)| = 3·4 = 12.",
        },
        {
          q: "Which norm property expresses that the shortest path between two points is a straight line?",
          options: [
            "|u + v| ≤ |u| + |v|",
            "|u + v| = 0",
            "|u + v| ≥ |u| + |v|",
            "|u + v| = |u| · |v|",
          ],
          correct: 0,
          translation:
            "أي خاصية للمعيار تعبّر عن أن أقصر مسار بين نقطتين هو خط مستقيم؟",
          explanation:
            "متباينة المثلث: |u + v| ≤ |u| + |v| — المسار المباشر (u+v) أقصر من أو يساوي المسار غير المباشر (u ثم v).",
        },
        {
          q: "The slide says the final norm property is sometimes called the 'pentagon inequality' because:",
          options: [
            "It only applies in five dimensions",
            "The diagram looks like a pentagon",
            "It involves five vectors",
            "It was discovered by a mathematician named Penta",
          ],
          correct: 1,
          translation:
            "الشريحة بتقول إن خاصية المعيار الأخيرة بتُسمى أحياناً 'متباينة الخماسي' لأن:",
          explanation:
            "الرسم التوضيحي بيبان زي خماسي الأضلاع. اسم شكلي مش رياضي بحت — الاسم الرسمي متباينة المثلث.",
        },
        {
          q: "According to the formal definition, a norm is:",
          options: [
            "Only the length of an arrow in 2D",
            "Any function of a vector, with no conditions",
            "Any function that assigns a number to each vector and satisfies the norm properties for all vectors u, v and all scalars a",
            "Only the square root of a sum of squares",
          ],
          correct: 2,
          translation: "حسب التعريف الرسمي، المعيار هو:",
          explanation:
            "أي دالة تخصص عدداً لكل متجه وتحقق خصائص المعيار لكل المتجهات u, v وكل الأعداد a. التعريف قائم على الخصائص مش على صيغة محددة.",
        },
        {
          q: "Each norm rule has a concrete geometric picture that explains:",
          options: [
            "Which hardware to use",
            "Why the rule is there",
            "How to draw a texture",
            "How to avoid using it",
          ],
          correct: 1,
          translation: "كل قاعدة من قواعد المعيار لها صورة هندسية ملموسة تشرح:",
          explanation:
            "لماذا القاعدة موجودة — يعني مش مجرد قاعدة اعتباطية، لها معنى هندسي واضح تقدر ترسمه وتفهمه.",
        },
        {
          q: "What is the standard norm of n-vectors called?",
          options: [
            "The Manhattan norm",
            "The Euclidean norm",
            "The polar norm",
            "The L2 function norm",
          ],
          correct: 1,
          translation: "ما اسم المعيار القياسي للمتجهات ذات n من الأبعاد؟",
          explanation:
            "المعيار الإقليدي — الأشهر والأكثر استخداماً في الرسوميات والفيزياء والرياضيات التطبيقية.",
        },
        {
          q: "The Euclidean norm of u = (u1, …, un) is:",
          options: [
            "The product of the uᵢ",
            "The square root of the sum of uᵢ² (i = 1 to n)",
            "The largest uᵢ",
            "The sum of the uᵢ",
          ],
          correct: 1,
          translation: "المعيار الإقليدي لـ u = (u1, …, un) هو:",
          explanation:
            "جذر مجموع المربعات — تعميم لنظرية فيثاغورس على n من الأبعاد. الأساس في حساب المسافات والطول.",
        },
        {
          q: "What is the Euclidean norm of u = (4, 2)?",
          options: ["6", "2√5", "8", "√6"],
          correct: 1,
          translation: "ما هو المعيار الإقليدي لـ u = (4, 2)؟",
          explanation:
            "√(4² + 2²) = √(16 + 4) = √20 = √(4·5) = 2√5. تطبيق مباشر لنظرية فيثاغورس.",
        },
        {
          q: "The L² norm of functions measures:",
          options: [
            "The total magnitude of a function",
            "The slope at a single point",
            "The maximum input value",
            "The number of zeros of a function",
          ],
          correct: 0,
          translation: "معيار L² للدوال يقيس:",
          explanation:
            "المقدار الكلي للدالة — تعميم لفكرة حجم المتجه على الدوال. بيتعامل مع الدالة ككتلة كاملة مش كنقطة.",
        },
        {
          q: "The L² norm in the lecture is defined for functions on which domain?",
          options: [
            "All functions on the real line with no conditions",
            "Only integer-valued functions",
            "Only functions on [0,10]",
            "Real-valued functions on the unit interval [0,1] whose square has a well-defined integral",
          ],
          correct: 3,
          translation: "معيار L² في المحاضرة معرّف لدوال على أي نطاق؟",
          explanation:
            "دوال حقيقية على الفترة [0,1] ومربعها له تكامل محدد. الشرط ضروري لتعريف المعيار — لو التكامل مش موجود، المعيار مش معرّف.",
        },
        {
          q: "The L² norm of a function f on [0,1] is defined as:",
          options: [
            "The sum of f at the endpoints",
            "The integral of f(x) from 0 to 1",
            "The maximum of f(x)",
            "The square root of the integral of f(x)² from 0 to 1",
          ],
          correct: 3,
          translation: "معيار L² لدالة f على [0,1] يُعرّف كالتالي:",
          explanation:
            "جذر تكامل مربع الدالة من 0 لـ 1 — نفس فكرة المعيار الإقليدي بس بتكامل بدل جمع، وبنفس الترتيب (مربع → جمع/تكامل → جذر).",
        },
        {
          q: "How does the L² norm differ from the Euclidean norm, as described in the lecture?",
          options: [
            "We replaced the square root with a logarithm",
            "There is no relationship between them",
            "We replaced squares with cubes",
            "We just replaced a sum with an integral",
          ],
          correct: 3,
          translation:
            "كيف يختلف معيار L² عن المعيار الإقليدي كما هو موصوف في المحاضرة؟",
          explanation:
            "بس استبدلنا الجمع (Σ) بالتكامل (∫) — الفكرة الأساسية نفسها: مربع، ثم جمع/تكامل، ثم جذر. تمثيل موحّد.",
        },
        {
          q: "For f(x) = √3·x on [0,1], what is ||f||²?",
          options: ["√3", "3", "∫₀¹ 3x² dx = 1", "0"],
          correct: 2,
          translation: "لدالة f(x) = √3·x على [0,1]، ما هو ||f||²؟",
          explanation:
            "∫₀¹ (√3·x)² dx = ∫₀¹ 3x² dx = [x³]₀¹ = 1³ − 0³ = 1. الناتج النهائي هو 1.",
        },
        {
          q: "What is the L² norm ||f|| of f(x) = √3·x on [0,1]?",
          options: ["√3", "3", "0", "1"],
          correct: 3,
          translation: "ما هو معيار L² للدالة f(x) = √3·x على [0,1]؟",
          explanation:
            "||f|| = √(||f||²) = √1 = 1. الحساب مباشر بعد إيجاد ||f||² = 1.",
        },
        {
          q: "Which notation does the lecture use for the norm of a function versus the norm of a vector in Rⁿ?",
          options: [
            "Both use ||·||",
            "Both use |·|",
            "|·| for a function and ||·|| for a vector",
            "||·|| for a function and |·| for a vector in Rⁿ",
          ],
          correct: 3,
          translation:
            "أي ترميز تستخدمه المحاضرة لمعيار دالة مقابل معيار متجه في Rⁿ؟",
          explanation:
            "||·|| للدالة و |·| للمتجه في Rⁿ. التمييز مهم للوضوح الرياضي — بيميز بين فضاءات الدوال وفضاءات المتجهات العادية.",
        },
        {
          q: "What does the lecture say about how most integrals in graphics are calculated?",
          options: [
            "All are calculated by hand exactly",
            "They are never needed in graphics",
            "They are always replaced by matrices",
            "Most are not calculated analytically like this; numerical integration will be discussed later",
          ],
          correct: 3,
          translation:
            "ماذا تقول المحاضرة عن كيفية حساب معظم التكاملات في الرسوميات؟",
          explanation:
            "معظمها لا يُحسب تحليلياً زي كده؛ سيتم مناقشة التكامل العددي (Numerical Integration) لاحقاً — لأن التكاملات الفعلية في الرسوميات معقدة جداً.",
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Why is linear algebra important for computer graphics, according to the lecture?",
          translation: "لماذا الجبر الخطي مهم لرسوميات الحاسوب حسب المحاضرة؟",
          answer:
            "• It is an effective bridge between geometry, physics, etc., and computation.\n" +
            "• In many areas of graphics, once a problem is expressed in linear algebra, you are essentially done: you ask the computer to solve Ax = b.\n" +
            "• Fast numerical linear algebra has made modern computer graphics possible (image processing, physically-based animation, geometry processing).",
          tags: ["Lecture 2", "Linear algebra", "Motivation"],
          ref: "Lecture 2 — Linear Algebra",
        },
        {
          type: "essay",
          q: "Explain the two basic vector operations and the rules they obey, and where those rules come from. Why can functions also be treated as vectors?",
          translation:
            "اشرح عمليتي المتجهات الأساسيتين والقواعد اللي بيخضعوا ليها، ومن أين تأتي هذه القواعد. ولماذا يمكن معاملة الدوال كمتجهات؟",
          answer:
            "Two basic operations:\n" +
            "• Addition: place vectors end to end. It is commutative (abelian): u + v = v + u.\n" +
            "• Scaling: multiply a vector by a scalar a to get au. It behaves as expected, e.g., a(bu) = (ab)u.\n" +
            "• Interaction: a(u + v) = au + av.\n" +
            "\n" +
            "Where the rules come from:\n" +
            "• Each rule comes from the geometric behavior of 'little arrows'; the rules did not 'fall out of the sky'.\n" +
            "• Any collection of objects satisfying all the properties is a vector space, even if the objects do not look like arrows.\n" +
            "\n" +
            "Functions as vectors:\n" +
            "• Many objects in graphics are functions (images, radiance from a light source, surfaces, modal vibrations).\n" +
            "• Functions can be added and scaled, and the other properties hold too (e.g., the zero vector is the function equal to zero for all x), so functions are vectors.",
          tags: ["Lecture 2", "Vector spaces", "Functions as vectors"],
          ref: "Lecture 2 — Linear Algebra",
        },
        {
          type: "essay",
          q: "What properties should a norm satisfy? Give the Euclidean norm and the L² norm, with one worked example of each.",
          translation:
            "ما الخصائص اللي يجب أن يحققها المعيار؟ اذكر المعيار الإقليدي ومعيار L²، مع مثال محلول لكل منهما.",
          answer:
            "Natural properties of a norm:\n" +
            "• Positivity: |u| ≥ 0, and |u| = 0 only for the zero vector.\n" +
            "• Scaling: |cu| = |c||u|.\n" +
            "• Triangle inequality (the 'shortest path is a straight line' property): |u + v| ≤ |u| + |v|.\n" +
            "\n" +
            "Euclidean norm (vectors in Rⁿ):\n" +
            "• |u| = √(Σ uᵢ²). Example: u = (4,2) gives |u| = √(4² + 2²) = 2√5.\n" +
            "\n" +
            "L² norm (functions on [0,1]):\n" +
            "• ||f|| = √(∫₀¹ f(x)² dx), i.e., the Euclidean norm with a sum replaced by an integral.\n" +
            "• Example: f(x) = √3·x gives ||f||² = ∫₀¹ 3x² dx = [x³]₀¹ = 1, so ||f|| = 1.",
          tags: ["Lecture 2", "Norms", "Euclidean norm", "L2 norm"],
          ref: "Lecture 2 — Linear Algebra",
        },
      ],
    },
    {
      id: "computer-graphics-lecture-03",
      t: "المحاضرة 3: الجبر الخطي (Inner Product, Linear Maps, Span, Basis)",
      d: "الجزء الثاني من مراجعة الجبر الخطي: الـ inner product وخصائصه، الـ linear maps مقابل الـ affine، والـ span والـ basis والـ orthonormal basis.",
      pdf: "/datenew/subjects/computer-graphics/lectures/Lecture 3/Lecture 3.pdf",
      pdf2: "/datenew/subjects/computer-graphics/questions/Questions on each lecture/Lecture-03-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية تشرح مفاهيم المتجهات، الفضاءات المتجهة، والعمليات الأساسية في الجبر الخطي",
          links: [
            {
              t: "SpicyCoders - المتجهات | Vectors | الجبر الخطى",
              d: "شرح تفصيلي لمفهوم المتجهات، المركبات الديكارتية، وحساب طول المتجه (Magnitude) والعمليات عليها",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=lMahHHwQ_Eo",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "د. أحمد حجاج - الجبر الخطي (فيديوهات التركيبات والفضاءات المتجهة)",
              d: "شرح أكاديمي للتركيبات الخطية (Linear Combinations) والاستقلال الخطي ومجموعات التوليد",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 فتح قائمة التشغيل",
                  url: "https://www.youtube.com/playlist?list=PLxIvc-MGOs6iQXFnjF_STbhGdrZBphrv_",
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
            "محاضرات أكاديمية رسمية من جامعة كارنيغي ميلون (CMU) وسلسلة 3Blue1Brown الهندسية المرئية",
          links: [
            {
              t: "Prof. Keenan Crane - CMU 15-462 Math Review Part I: Linear Algebra",
              d: "المحاضرة الأكاديمية الرسمية لمؤلف الشرائح تشمل المتجهات، الفضاءات المتجهة، المعيار، والجداء الداخلي",
              icon: "🌍",
              actions: [
                {
                  label: "🎬 مشاهدة المحاضرة",
                  url: "https://youtu.be/2c8XQlQApx8",
                  type: "view",
                  color: "red",
                },
                {
                  label: "🌐 الموقع الرسمي للمساق",
                  url: "http://15462.courses.cs.cmu.edu/fall2020/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "3Blue1Brown - Essence of Linear Algebra",
              d: "سلسلة مرئية تفاعلية تشرح جوهر المتجهات، الفضاءات، المعيار (Norm)، والضرب القياسي (Dot Product)",
              icon: "🌍",
              actions: [
                {
                  label: "📖 فتح القائمة",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
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
            "مقالات هندسية متخصصة تربط بين الرياضيات والرسوميات الحاسوبية",
          links: [
            {
              t: "Scratchapixel - Geometry: Points, Vectors and Norms",
              d: "مرجع متقدم يشرح تمثيل النقاط، المتجهات، المعايير (Norms)، والعمليات الرياضية المستخدمة في محركات الرسوميات ثلاثية الأبعاد",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Khan Academy - Linear Algebra",
              d: "مراجعة شاملة ومبسطة لمفاهيم المتجهات، الفضاءات الجزئية، والتحويلات الخطية",
              icon: "📚",
              actions: [
                {
                  label: "🌐 زيارة الموقع",
                  url: "https://www.khanacademy.org/math/linear-algebra",
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
            "أدوات تفاعلية لمحاكاة العمليات على المتجهات والتحويلات الرياضية هندسياً",
          links: [
            {
              t: "PhET Interactive Simulation - Vector Addition",
              d: "أداة محاكاة تفاعلية لجمع المتجهات، قياس المعيار، وتحليل المركبات في الفضاء الثنائي والثلاثي",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح المحاكاة",
                  url: "https://phet.colorado.edu/en/simulations/vector-addition",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "GeoGebra 3D Visualizer",
              d: "بيئة تفاعلية ثلاثية الأبعاد لبناء المتجهات، حساب الجداء الداخلي، وتصور الفضاءات المتجهة هندسياً",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة 3D",
                  url: "https://www.geogebra.org/3d",
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
          q: "1. Which of the following are other names for the inner product?",
          options: [
            "Cross product and vector product",
            "Outer product and tensor product",
            "Scalar product and dot product",
            "Matrix product and norm product",
          ],
          correct: 2,
          translation: "إيه الأسماء التانية للـ inner product؟",
          explanation:
            "الـ inner product بيتسمى كمان scalar product أو dot product (وبيتكتب <u,v> أو u•v). الـ cross product شيء مختلف وبيطلّع vector مش رقم.",
          tags: ["Inner Product", "Dot Product"],
          ref: "Lecture 03 — Slide 30",
        },

        {
          q: "2. What does the inner product measure, in contrast to the norm?",
          options: [
            'How well two vectors "line up" (their alignment)',
            "The length of a single vector",
            "The area enclosed by two vectors",
            "The number of components in a vector",
          ],
          correct: 0,
          translation: "الـ inner product بيقيس إيه، بعكس الـ norm؟",
          explanation:
            "الـ norm بيقيس الطول، أما الـ inner product فبيقيس مدى توافق اتجاه (orientation) متجهين مع بعض. الاختيارين الأول والتاني بيتكلموا عن الطول والمساحة، مش عن التوافق.",
          tags: ["Inner Product", "Orientation"],
          ref: "Lecture 03 — Slide 29",
        },

        {
          q: "3. Which equation expresses the symmetry property of the inner product?",
          options: [
            "<u,v> = -<v,u>",
            "<u,v> = <u,u>",
            "<u,v> = 0 for all u,v",
            "<u,v> = <v,u>",
          ],
          correct: 3,
          translation: "أنهي معادلة بتعبّر عن خاصية التماثل (symmetry)؟",
          explanation:
            "الترتيب مش مهم: u متوافق مع v بنفس قدر توافق v مع u. المعادلة التانية معناها إن الترتيب بيعكس الإشارة وده غلط.",
          tags: ["Symmetry"],
          ref: "Lecture 03 — Slide 30",
        },

        {
          q: "4. For unit vectors |u| = |v| = 1, the inner product <u,v> measures:",
          options: [
            "The sum of the lengths of the two vectors",
            "The extent of one vector along the direction of the other",
            "The distance between the tips of the vectors",
            "The volume spanned by the two vectors",
          ],
          correct: 1,
          translation:
            "لو u و v طولهم 1 (unit vectors)، الـ inner product بيقيس إيه؟",
          explanation:
            "للـ unit vectors بيمثل الـ inner product امتداد (projection) متجه على اتجاه التاني. مجموع الأطوال أو المسافة بين الرأسين مش هو اللي بيقيسه.",
          tags: ["Projection", "Unit Vector"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          q: "5. If we scale the vector u by a factor of 2, what happens to the inner product <u,v>?",
          options: [
            "It is also multiplied by 2",
            "It stays the same",
            "It is divided by 2",
            "It is squared",
          ],
          correct: 0,
          translation: "لو ضربنا u في 2، إيه اللي بيحصل للـ <u,v>؟",
          explanation:
            "خاصية الـ scaling: لو كبّرنا أي متجه، الـ inner product بيكبر بنفس المعامل. فبيتضاعف مش بيثبت ولا بيتربّع.",
          tags: ["Scaling"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          q: "6. What does the positivity property require of <u,u>?",
          options: [
            "It should always be negative",
            "It should always be exactly zero",
            "It should be positive (or at least non-negative)",
            "It should always equal 1",
          ],
          correct: 2,
          translation: "خاصية الـ positivity بتطلب إيه من <u,u>؟",
          explanation:
            "المتجه لازم يكون متوافق مع نفسه، فالـ inner product بتاعه مع نفسه لازم يبقى موجب أو على الأقل غير سالب. القيمة 1 بتنطبق على الـ unit vectors بس.",
          tags: ["Positivity"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          q: "7. If we define |u| = sqrt(<u,u>), then <u,u> is equal to:",
          options: [
            "|u|, the length of u",
            "|u|^2, the squared length of u",
            "2|u|",
            "1 for every vector u",
          ],
          correct: 1,
          translation: "لو عرّفنا |u| = sqrt(<u,u>)، يبقى <u,u> بتساوي إيه؟",
          explanation:
            "من تعريف الـ norm، تربيع الطرفين بيدّي <u,u> = |u|^2. الاختيار الأخير صح للـ unit vectors بس.",
          tags: ["Norm", "Positivity"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          q: "8. According to the formal definition, an inner product is any function that assigns to two vectors u, v:",
          options: [
            "Another vector w of the same length",
            "A matrix of size n x n",
            "A set of basis vectors",
            "A number <u,v> satisfying certain properties",
          ],
          correct: 3,
          translation:
            "حسب التعريف الرسمي، الـ inner product هو أي دالة بتدّي لأي متجهين u و v إيه؟",
          explanation:
            "التعريف بيقول إنه دالة بترجّع رقم (scalar) يحقق مجموعة خصائص. مش بترجّع متجه ولا مصفوفة.",
          tags: ["Inner Product", "Definition"],
          ref: "Lecture 03 — Slide 33",
        },

        {
          q: "9. The Euclidean inner product of two n-vectors u and v is defined as:",
          options: [
            "The sum over i of u_i + v_i",
            "The product over i of u_i * v_i",
            "The sum over i of (u_i - v_i)^2",
            "The sum over i of u_i * v_i",
          ],
          correct: 3,
          translation:
            "الـ Euclidean inner product لمتجهين n-vectors بيتعرّف إزاي؟",
          explanation:
            "بنضرب المركّبات المتناظرة ونجمع النواتج. الجمع بدل الضرب أو الضرب الكلي أو مربع الفرق (ده مربع المسافة) كلهم غلط.",
          tags: ["Euclidean", "Cartesian"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          q: "10. For u = (4,1) and v = (1,3), the Euclidean inner product <u,v> is:",
          options: ["12", "7", "8", "4"],
          correct: 1,
          translation: "لو u = (4,1) و v = (1,3)، قيمة <u,v> كام؟",
          explanation:
            "<u,v> = 4*1 + 1*3 = 4 + 3 = 7. الرقم 12 ناتج 4*3 بالغلط، و8 ناتج جمع كل الأرقام.",
          tags: ["Euclidean", "Example"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          q: "11. For the L2 inner product of two functions, a small value means:",
          options: [
            'The functions do not "line up" much',
            "The functions are identical",
            "Both functions are constant",
            "Both functions have a large norm",
          ],
          correct: 0,
          translation:
            "في الـ L2 inner product لدالتين، القيمة الصغيرة معناها إيه؟",
          explanation:
            "زي المتجهات، القيمة الصغيرة معناها إن الدالتين مش متوافقتين كتير. التطابق بيدّي قيمة كبيرة.",
          tags: ["L2 Inner Product", "Functions"],
          ref: "Lecture 03 — Slide 35",
        },

        {
          q: "12. Measuring the norm of the derivative of an image mainly captures:",
          options: [
            "Overall brightness",
            "The file size",
            "Edges",
            "The image resolution",
          ],
          correct: 2,
          translation: "قياس norm مشتقة الصورة بيلقط إيه أساسًا؟",
          explanation:
            "المشتقة بتكبر عند التغيّر السريع في القيم، يعني عند الحواف. السطوع مش هو اللي بتقيسه المشتقة.",
          tags: ["Derivative", "Edges"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          q: "13. A smooth blue-sky image with few details will have a derivative norm that is:",
          options: [
            "Larger than that of a detailed image",
            "Exactly infinite",
            "Smaller than that of a detailed image",
            "Always equal to its brightness",
          ],
          correct: 2,
          translation:
            "صورة سما زرقاء ناعمة من غير تفاصيل، الـ norm بتاع مشتقتها هيكون:",
          explanation:
            "السما فيها حواف قليلة جدًا فالمشتقة صغيرة، أما صورة الكلب المفصّلة فمشتقتها أكبر.",
          tags: ["Images", "Norm of Derivative"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          q: "14. According to the lecture, the choice of inner product depends on:",
          options: [
            "The application",
            "The number of pixels in the image",
            "The programming language used",
            "Nothing, there is only one valid choice",
          ],
          correct: 0,
          translation: "حسب المحاضرة، اختيار الـ inner product بيعتمد على إيه؟",
          explanation:
            "في طرق كتير لقياس الحجم والتوافق، والاختيار بيتحدد حسب التطبيق. مفيش اختيار واحد صالح للكل.",
          tags: ["Inner Product", "Signals"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          q: "15. Which of the following is NOT given as a reason why linear maps are useful for graphics?",
          options: [
            "Systems of linear equations are easy to solve computationally",
            "Rotation, translation and scaling can be expressed as linear maps",
            "Maps can be approximated as linear maps over short distances or times",
            "Linear maps always preserve the distances between points",
          ],
          correct: 3,
          translation:
            "أنهي واحدة دي مش من الأسباب اللي ذكرتها المحاضرة لفايدة الـ linear maps؟",
          explanation:
            "الأسباب هي: سهولة حل المعادلات الخطية، تمثيل التحويلات الأساسية، والتقريب الخطي محليًا. حفظ المسافات مش خاصية عامة للـ linear maps (التكبير مثلًا بيغيّرها).",
          tags: ["Linear Maps", "Graphics"],
          ref: "Lecture 03 — Slide 37",
        },

        {
          q: "16. Which theorem justifies approximating a general map by a linear map over a short distance?",
          options: [
            "Pythagorean theorem",
            "Taylor's theorem",
            "Fundamental theorem of algebra",
            "Central limit theorem",
          ],
          correct: 1,
          translation:
            "أنهي نظرية بتبرر تقريب أي map بـ linear map على مسافة قصيرة؟",
          explanation:
            "نظرية تايلور هي اللي ذكرتها المحاضرة، وبتتستخدم في الهندسة والأنيميشن والرندرنج ومعالجة الصور.",
          tags: ["Taylor", "Linear Approximation"],
          ref: "Lecture 03 — Slide 37",
        },

        {
          q: "17. Geometrically, the key idea of a linear map is that it:",
          options: [
            "Takes lines to curves while keeping the origin fixed",
            "Takes lines to lines while keeping the origin fixed",
            "Takes lines to lines but moves the origin",
            "Keeps all angles between lines unchanged",
          ],
          correct: 1,
          translation: "هندسيًا، الفكرة الأساسية للـ linear map إنه:",
          explanation:
            "الـ linear map بيحوّل الخطوط لخطوط ويفضّل f(0) = 0. الـ nonlinear map هو اللي بيحوّل الخطوط لمنحنيات.",
          tags: ["Linear Map", "Geometry"],
          ref: "Lecture 03 — Slide 38",
        },

        {
          q: "18. Which pair of conditions defines a linear map f algebraically?",
          options: [
            "f(u+v) = f(u) f(v) and f(au) = f(u) + a",
            "f(u+v) = f(u) + f(v) and f(0) = 1",
            "f(au) = f(u)^a and f(u+v) = f(u)",
            "f(u+v) = f(u) + f(v) and f(au) = a f(u)",
          ],
          correct: 3,
          translation: "أنهي زوج من الشروط بيعرّف الـ linear map جبريًا؟",
          explanation:
            "لازم الجمع والضرب في scalar يتبادلوا مع الـ map: نجمع ثم نطبّق f يساوي نطبّق f ثم نجمع، ونفس الشيء للـ scaling.",
          tags: ["Linear Map", "Algebraic Definition"],
          ref: "Lecture 03 — Slide 40",
        },

        {
          q: "19. For maps between R^m and R^n, a map is linear if it can be written as:",
          options: [
            "f(u_1,...,u_m) = sum of u_i * a_i for fixed vectors a_i",
            "f(u_1,...,u_m) = sum of u_i^2 for all i",
            "f(u_1,...,u_m) = u_1 * u_2 * ... * u_m",
            "f(u_1,...,u_m) = a + sum of u_i",
          ],
          correct: 0,
          translation:
            "للـ maps بين R^m و R^n، الـ map يبقى linear لو اتكتب كـ:",
          explanation:
            "الـ map الخطي هو توليفة خطية (linear combination) من مجموعة ثابتة من المتجهات a_i. الصيغ التانية فيها تربيع أو ضرب أو ثابت مضاف.",
          tags: ["Linear Combination", "Coordinates"],
          ref: "Lecture 03 — Slide 41",
        },

        {
          q: "20. Why is f(x) = ax + b (with b not equal to 0) NOT a linear function?",
          options: [
            "Because its graph is not a straight line",
            "Because it is not defined at x = 0",
            "Because f(0) is not 0, and it does not preserve sums",
            "Because a must be negative",
          ],
          correct: 2,
          translation: "ليه f(x) = ax + b (لما b مش صفر) مش دالة خطية؟",
          explanation:
            "الرسم بتاعها خط مستقيم فبيخدع، لكن مش بيعدّي بنقطة الأصل وفيه f(x+y) ≠ f(x)+f(y). دي اسمها affine function.",
          tags: ["Affine", "Linear"],
          ref: "Lecture 03 — Slide 43",
        },

        {
          q: "21. Which trick lets graphics turn affine functions such as translation into linear ones?",
          options: [
            "Homogeneous coordinates",
            "Polar coordinates",
            "Taylor expansion",
            "Orthonormal projection",
          ],
          correct: 0,
          translation:
            "أنهي حيلة بتخلّي الـ affine functions زي الـ translation تتحول لـ linear؟",
          explanation:
            "المحاضرة وعدت إننا هنشوف الـ homogeneous coordinates كحيلة مهمة في الجرافيكس لتحويل الـ affine لـ linear.",
          tags: ["Homogeneous Coordinates", "Translation"],
          ref: "Lecture 03 — Slide 43",
        },

        {
          q: "22. Geometrically, the span of two non-parallel vectors u, v in the plane is:",
          options: [
            "Only the vectors u and v themselves",
            "The set of all vectors of the form au + bv",
            "Only the vectors of unit length",
            "The single point at the origin",
          ],
          correct: 1,
          translation:
            "هندسيًا، الـ span لمتجهين u و v مش متوازيين في المستوى هو:",
          explanation:
            "الـ span هو كل المتجهات اللي ممكن تتكتب كتوليفة خطية au + bv لأي رقمين a و b.",
          tags: ["Span", "Linear Combination"],
          ref: "Lecture 03 — Slide 45",
        },

        {
          q: "23. The image of any linear map is:",
          options: [
            "Always a single vector",
            "Always the whole target space",
            "The span of some collection of vectors",
            "The set of unit vectors only",
          ],
          correct: 2,
          translation: "الـ image لأي linear map هو:",
          explanation:
            "المحاضرة بتربط بين الاتنين: الـ image هو الـ span لمجموعة متجهات (مثلًا a1 و a2). مش لازم يغطي الفضاء كله.",
          tags: ["Image", "Span"],
          ref: "Lecture 03 — Slide 46",
        },

        {
          q: "24. Exactly n vectors e_1,...,e_n whose span is R^n are called:",
          options: [
            "An orthogonal complement",
            "An affine map",
            "A scalar product",
            "A basis for R^n",
          ],
          correct: 3,
          translation: "n متجه بالظبط الـ span بتاعهم هو R^n بيتسموا:",
          explanation:
            "لو عندنا n متجه بالظبط وبيولّدوا R^n كله، يبقوا basis. ولاحظ إن فيه اختيارات كتير للـ basis.",
          tags: ["Basis", "Span"],
          ref: "Lecture 03 — Slide 47",
        },

        {
          q: "25. An orthonormal basis consists of vectors that are:",
          options: [
            "Mutually parallel and of unit length",
            "Unit length and mutually orthogonal",
            "Orthogonal but of arbitrary lengths",
            "Of equal length but not necessarily orthogonal",
          ],
          correct: 1,
          translation: "الـ orthonormal basis متكوّن من متجهات:",
          explanation:
            "الـ orthonormal معناها unit length (normal) + متعامدة على بعض (ortho). لو ناقص شرط يبقى مش orthonormal.",
          tags: ["Orthonormal Basis"],
          ref: "Lecture 03 — Slide 48",
        },

        {
          type: "essay",
          q: "1. Explain the motivation for the inner product and how it relates to the norm.",
          translation:
            "اشرح الدافع لاستخدام الـ inner product وعلاقته بالـ norm.",
          answer:
            "Besides magnitude, vectors have orientation.\n" +
            'The norm measures length; the inner product measures how well two vectors "line up".\n' +
            "Similar-looking vectors (or images) give a large alignment; very different ones give a small one.\n" +
            "It is also called the scalar product or dot product, written <u,v> or u.v.",
          tags: ["Inner Product", "Norm"],
          ref: "Lecture 03 — Slide 29",
        },

        {
          type: "essay",
          q: "2. What natural properties do we expect from a measure of alignment (symmetry, scaling, positivity)? Explain each geometrically.",
          translation:
            "إيه الخصائص الطبيعية المتوقعة من مقياس التوافق (symmetry, scaling, positivity)؟ اشرح كل واحدة هندسيًا.",
          answer:
            "Symmetry: <u,v> = <v,u>, since u is as aligned with v as v is with u (renaming vectors changes nothing).\n" +
            "Scaling: for unit vectors the inner product is the extent of one vector along the other; scaling a vector scales the inner product.\n" +
            "Positivity: a vector is always aligned with itself, so <u,u> is positive (or at least non-negative).",
          tags: ["Symmetry", "Scaling", "Positivity"],
          ref: "Lecture 03 — Slide 30 to Slide 32",
        },

        {
          type: "essay",
          q: "3. Show why <u,u> equals the squared norm |u|^2.",
          translation: "وضّح ليه <u,u> بتساوي مربع الـ norm يعني |u|^2.",
          answer:
            "For a unit vector, a vector is fully aligned with itself, so <u,u> = 1.\n" +
            "Writing any u as |u| times a unit vector and using the scaling property gives <u,u> = |u|^2.\n" +
            "Hence |u| = sqrt(<u,u>): the inner product defines the length.",
          tags: ["Norm", "Positivity"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          type: "essay",
          q: "4. Define the Euclidean inner product and compute it for u = (4,1), v = (1,3).",
          translation:
            "عرّف الـ Euclidean inner product واحسبه لـ u = (4,1) و v = (1,3).",
          answer:
            "For n-vectors: <u,v> = sum_{i=1..n} u_i v_i.\n" +
            "Example: <u,v> = 4*1 + 1*3 = 7.",
          tags: ["Euclidean", "Example"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          type: "essay",
          q: "5. Explain the L2 inner product of functions and what it measures.",
          translation: "اشرح الـ L2 inner product للدوال وبيقيس إيه.",
          answer:
            'Just as for vectors, we can define an inner product for functions that measures how well two functions "line up".\n' +
            "It is defined for square-integrable functions, e.g. on the unit interval.\n" +
            "A small value means the functions do not line up much.",
          tags: ["L2", "Functions"],
          ref: "Lecture 03 — Slide 35",
        },

        {
          type: "essay",
          q: "6. How can the norm of a derivative be used to measure images? Give an example.",
          translation: "إزاي ممكن نستخدم norm المشتقة لقياس الصور؟ مثال.",
          answer:
            'To find images with "interesting stuff", measure the norm of the derivative, which captures edges.\n' +
            "A detailed image (dog with a plaid coat) has a larger derivative norm.\n" +
            "A smooth blue sky has a smaller one.\n" +
            "The choice of inner product or norm depends on the application.",
          tags: ["Derivative", "Images"],
          ref: "Lecture 03 — Slide 36",
        },

        {
          type: "essay",
          q: "7. Why are linear maps useful in graphics? List the reasons given in the lecture.",
          translation:
            "ليه الـ linear maps مفيدة في الجرافيكس؟ اذكر الأسباب في المحاضرة.",
          answer:
            "1) Systems of linear equations are easy to solve computationally.\n" +
            "2) Basic transformations (rotation, translation, scaling) can be expressed as linear maps.\n" +
            "3) Any map can be approximated by a linear map over a short distance/time (Taylor's theorem), used in geometry, animation, rendering and image processing.",
          tags: ["Linear Maps", "Graphics"],
          ref: "Lecture 03 — Slide 37",
        },

        {
          type: "essay",
          q: "8. Define a linear map geometrically and algebraically.",
          translation: "عرّف الـ linear map هندسيًا وجبريًا.",
          answer:
            "Geometric: linear maps take lines to lines while keeping the origin fixed, so f(0) = 0.\n" +
            "Algebraic: f maps vectors to vectors and f(u+v) = f(u) + f(v), f(au) = a f(u).\n" +
            "In coordinates (R^m to R^n): f(u_1,...,u_m) = sum u_i a_i, a linear combination of fixed vectors a_i.",
          tags: ["Linear Map", "Definition"],
          ref: "Lecture 03 — Slide 38 to Slide 41",
        },

        {
          type: "essay",
          q: "9. Explain the difference between linear and affine maps using f(x) = ax + b.",
          translation:
            "اشرح الفرق بين الـ linear و الـ affine باستخدام f(x) = ax + b.",
          answer:
            "The graph is a line, but it does not pass through the origin: f(0) = b, not 0 (for b not 0).\n" +
            "It also does not preserve sums: f(x+y) = a(x+y)+b, while f(x)+f(y) = a(x+y)+2b.\n" +
            "So it is affine, not linear.\n" +
            "Homogeneous coordinates turn affine functions such as translation into linear ones.",
          tags: ["Affine", "Linear"],
          ref: "Lecture 03 — Slide 42 to Slide 43",
        },

        {
          type: "essay",
          q: "10. Explain span, basis and orthonormal basis, and the common bug related to non-orthonormal bases.",
          translation:
            "اشرح الـ span والـ basis والـ orthonormal basis، والغلطة الشائعة مع الـ basis غير orthonormal.",
          answer:
            "Span: all linear combinations of the vectors, e.g. au + bv; the image of a linear map is a span.\n" +
            "Basis: exactly n vectors whose span is R^n (many choices exist).\n" +
            "Orthonormal basis: vectors are unit length and mutually orthogonal, so the sum u_1^2+...+u_n^2 stays the length of u.\n" +
            "Common bug: projecting a vector onto a basis that is NOT orthonormal while still using the standard norm / inner product.",
          tags: ["Span", "Basis", "Orthonormal"],
          ref: "Lecture 03 — Slide 45 to Slide 48",
        },

        {
          type: "essay",
          q: "11. Compute the Euclidean inner product of u = (2,3) and v = (5,-1).",
          translation:
            "احسب الـ Euclidean inner product لـ u = (2,3) و v = (5,-1).",
          answer:
            "Given: u = (2,3), v = (5,-1).\n" +
            "Law: <u,v> = u_1 v_1 + u_2 v_2.\n" +
            "<u,v> = 2*5 + 3*(-1) = 10 - 3 = 7.",
          tags: ["Euclidean", "Calculation"],
          ref: "Lecture 03 — Slide 34",
        },

        {
          type: "essay",
          q: "12. For u = (3,4), compute <u,u> and the norm |u| using |u| = sqrt(<u,u>).",
          translation:
            "لـ u = (3,4) احسب <u,u> والـ norm |u| باستخدام |u| = sqrt(<u,u>).",
          answer:
            "Law: <u,u> = u_1^2 + u_2^2 and |u| = sqrt(<u,u>).\n" +
            "<u,u> = 3^2 + 4^2 = 9 + 16 = 25.\n" +
            "|u| = sqrt(25) = 5.",
          tags: ["Norm", "Calculation"],
          ref: "Lecture 03 — Slide 32",
        },

        {
          type: "essay",
          q: "13. Given <u,v> = 7 for u = (4,1), v = (1,3), compute <3u, v> and <u, 2v> using the scaling property, then verify <3u, v> directly.",
          translation:
            "لو <u,v> = 7 لـ u = (4,1) و v = (1,3)، احسب <3u,v> و <u,2v> بخاصية الـ scaling وتحقق من <3u,v> مباشرة.",
          answer:
            "Law (scaling): <au,v> = a<u,v> = <u,av>.\n" +
            "<3u,v> = 3*7 = 21; <u,2v> = 2*7 = 14.\n" +
            "Check: 3u = (12,3), so <3u,v> = 12*1 + 3*3 = 21.",
          tags: ["Scaling", "Calculation"],
          ref: "Lecture 03 — Slide 31",
        },

        {
          type: "essay",
          q: "14. Show that f(x) = 2x + 3 is not linear by testing f(0) and f(1+2) versus f(1)+f(2).",
          translation:
            "وضّح إن f(x) = 2x + 3 مش linear باختبار f(0) و f(1+2) مقابل f(1)+f(2).",
          answer:
            "Law: a linear map needs f(0) = 0 and f(u+v) = f(u) + f(v).\n" +
            "f(0) = 3, which is not 0.\n" +
            "f(1+2) = f(3) = 9, but f(1) + f(2) = 5 + 7 = 12.\n" +
            "Since 9 is not 12, f is not linear (it is affine).",
          tags: ["Affine", "Calculation"],
          ref: "Lecture 03 — Slide 43",
        },

        {
          type: "essay",
          q: "15. Let f: R^2 -> R^3 be linear with a1 = (1,0,2) and a2 = (0,1,1). Compute f(u) for u = (3,2).",
          translation:
            "لو f: R^2 -> R^3 خطية و a1 = (1,0,2) و a2 = (0,1,1)، احسب f(u) لـ u = (3,2).",
          answer:
            "Law: f(u) = u_1 a_1 + u_2 a_2.\n" +
            "f(u) = 3*(1,0,2) + 2*(0,1,1) = (3,0,6) + (0,2,2) = (3,2,8).",
          tags: ["Linear Map", "Calculation"],
          ref: "Lecture 03 — Slide 41",
        },
      ],
    },
  ],
});
