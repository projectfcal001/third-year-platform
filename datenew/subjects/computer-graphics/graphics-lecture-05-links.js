// المحاضرة: Computer Graphics — Lecture 5: Aliasing, Sampling & Reconstruction
// المفاهيم الأساسية المغطّاة: Sampling/Reconstruction pipeline, Aliasing (spatial & temporal),
// 1D signal as superposition of frequencies, Audio spectrum analyzer, Image frequency decomposition,
// Low-pass / Band-pass / High-pass filters, sin(x^2+y^2) example, Wagon wheel effect, ω(t)=6000t audio demo.

linkCategories: [
  {
    category: "فيديوهات عربية",
    icon: "🇪🇬",
    description: "قنوات يوتيوب عربية بتشرح Computer Graphics وتحويل فورييه وأخد العينات — مفيدة للمحاضرة كلها.",
    links: [
      {
        t: "Computer Graphics — الرسم بالحاسب بالعربي",
        d: "كورس كامل بالعربي في الرسم بالحاسب، فيه محاضرات بتغطي أساسيات أخد العينات والتعرّج بشكل تطبيقي مرتبط بمحاضرة CMU.",
        icon: "🇪🇬",
        actions: [
          {
            label: "🎬 فتح القناة",
            url: "https://www.youtube.com/playlist?list=PLwbG6FnsR09vOKjE6fQ8dhn0F5hWu7qjG",
            type: "view",
            color: "red"
          }
        ]
      },
      {
        t: "Computer Graphics — كورس كامل بالعربي (Programming Secrets)",
        d: "كورس كامل بالعربي من البداية للاحتراف، يغطي مواضيع الرسم بالحاسب بما فيها معالجة الصور والتعرّج والفلاتر.",
        icon: "🇪🇬",
        actions: [
          {
            label: "🎬 فتح الكورس",
            url: "https://www.youtube.com/playlist?list=PLp2eAGIFKMEVpQoEqqEo4o-S1enQ59ocw",
            type: "view",
            color: "red"
          }
        ]
      },
      {
        t: "تحويل فورييه — شرح بالعربي (د. هشام)",
        d: "سلسلة فيديوهات بالعربي بتشرح تحويل فورييه خطوة بخطوة — مرتبط مباشرةً بفكرة تفكيك الإشارة لترددات في المحاضرة.",
        icon: "🇪🇬",
        actions: [
          {
            label: "🎬 فتح السلسلة",
            url: "https://www.youtube.com/playlist?list=PLOpVxHldmrRFpZmbo8jPbt9hETaI7S8jP",
            type: "view",
            color: "red"
          }
        ]
      },
      {
        t: "🔎 بحث في يوتيوب: Aliasing في الرسم بالحاسب",
        d: "رابط بحث في يوتيوب مش فيديو محدد — استخدمه لما تحتاج فيديو عربي محدد على التعرّج وأخد العينات في الكمبيوتر جرافيكس.",
        icon: "🇪🇬",
        actions: [
          {
            label: "🔎 بحث في يوتيوب",
            url: "https://www.youtube.com/results?search_query=aliasing+sampling+computer+graphics+arabic",
            type: "view",
            color: "orange"
          }
        ]
      }
    ]
  },
  {
    category: "فيديوهات عالمية",
    icon: "🌍",
    description: "فيديوهات معتمدة عالميًا بتشرح تحويل فورييه وأخد العينات والتعرّج — الأساس النظري للمحاضرة.",
    links: [
      {
        t: "But what is the Fourier Transform? — 3Blue1Brown",
        d: "شرح مرئي مشهور لتحويل فورييه بأسلوب 3Blue1Brown. بيربط فكرة تجميع الدوال الجيبية بتفكيك الإشارات لترددات، وهو جوهر المحاضرة.",
        icon: "🌍",
        actions: [
          {
            label: "🚀 فتح الدرس",
            url: "https://www.3blue1brown.com/lessons/fourier-transforms",
            type: "view",
            color: "blue"
          }
        ]
      },
      {
        t: "CMU 15-462/662 Computer Graphics — Lecture Videos",
        d: "قائمة تشغيل فيديوهات المحاضرات الرسمية لكورس CMU 15-462/662، بما فيها محاضرة Drawing a Triangle و Intro to Sampling — المصدر الأصلي للمحاضرة دي.",
        icon: "🌍",
        actions: [
          {
            label: "🎬 فتح القائمة",
            url: "https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E",
            type: "view",
            color: "red"
          }
        ]
      },
      {
        t: "Signals and systems — Khan Academy",
        d: "كورس Khan Academy عن الإشارات في المجالين الزمني والترددي. مرتبط بجزء تحويل الإشارة لترددات والـ audio spectrum analyzer.",
        icon: "🌍",
        actions: [
          {
            label: "🌐 فتح الكورس",
            url: "https://www.khanacademy.org/science/electrical-engineering/ee-signals",
            type: "view",
            color: "blue"
          }
        ]
      },
      {
        t: "Fourier Transform in Image Processing — YouTube",
        d: "فيديو عملي بيشرح إزاي نطبّق تحويل فورييه على الصور وإزاي نفكّك الصورة لترددات مكانية — مرتبط مباشرة بجزء 'Images as frequencies' في المحاضرة.",
        icon: "🌍",
        actions: [
          {
            label: "🎬 فتح الفيديو",
            url: "https://www.youtube.com/watch?v=o5EawXpa9AQ",
            type: "view",
            color: "red"
          }
        ]
      }
    ]
  },
  {
    category: "مواقع ومراجع",
    icon: "📚",
    description: "مقالات ومراجع موثوقة بتشرح مفاهيم التعرّج وأخد العينات وتحويل فورييه — مصادر رسمية بتفصيل أعمق من المحاضرة.",
    links: [
      {
        t: "Wagon-wheel effect — Wikipedia",
        d: "مقال ويكيبيديا الإنجليزي عن ظاهرة wagon wheel effect، بيعرّف التعرّج الزمني ويربطه بالـ stroboscopic effect. مرتبط مباشرة بشريحة Temporal aliasing.",
        icon: "📚",
        actions: [
          {
            label: "📖 فتح المقال",
            url: "https://en.wikipedia.org/wiki/Wagon-wheel_effect",
            type: "view",
            color: "blue"
          }
        ]
      },
      {
        t: "Aliasing Effect — GeeksforGeeks",
        d: "مقال GeeksforGeeks عن التعرّج في معالجة الإشارات: تعريفه وأسبابه وإزاي نمنعه. تكملة ممتازة لجزء 'Undersampling high-frequency signals results in aliasing' في المحاضرة.",
        icon: "📚",
        actions: [
          {
            label: "📖 فتح المقال",
            url: "https://www.geeksforgeeks.org/electronics-engineering/aliasing-effect",
            type: "view",
            color: "blue"
          }
        ]
      },
      {
        t: "Temporal Aliasing: The Wagon Wheel Effect — UC Davis",
        d: "مقال تعليمي من UC Davis بيشرح wagon wheel effect باستخدام مثال عقارب الساعة ويربطه بمبرهنة Shannon-Nyquist — تكملة قوية للشرائح الخاصة بالـ temporal aliasing.",
        icon: "📚",
        actions: [
          {
            label: "🌐 فتح الموقع",
            url: "https://www.cs.ucdavis.edu/~koehl/Teaching/ECS17/Chapters/Chapter1/wagon.html",
            type: "view",
            color: "blue"
          }
        ]
      },
      {
        t: "Aliasing in computer graphics — Apoorvaj",
        d: "مقال بتفصيل مرئي عالي للتعرّج في الكمبيوتر جرافيكس، بيغطي rasterization aliasing و texture aliasing و shading aliasing مع رسوم متحركة — تكملة ممتازة لجزء Spatial aliasing.",
        icon: "📚",
        actions: [
          {
            label: "📖 فتح المقال",
            url: "https://apoorvaj.io/aliasing-in-computer-graphics",
            type: "view",
            color: "blue"
          }
        ]
      }
    ]
  },
  {
    category: "أدوات ومحاكاة",
    icon: "🔧",
    description: "محاكاة تفاعلية لتجربة تحويل فورييه والتعرّج وأخد العينات بنفسك — مفهوم يتثبت لما تشوفه حي.",
    links: [
      {
        t: "An Interactive Introduction to Fourier Transforms — Jez Swanson",
        d: "صفحة تفاعلية بتسمح تكتب أي منحنى وتشوف إزاي فورييه بيفكّكه لموجات جيبية. تكملة مثالية لجزء '1D signal as superposition of frequencies' في المحاضرة.",
        icon: "🔧",
        actions: [
          {
            label: "🚀 فتح الأداة",
            url: "https://www.jezzamon.com/fourier/",
            type: "view",
            color: "green"
          }
        ]
      },
      {
        t: "Wagon Wheel Effect — Circles Sines & Signals (Jack Schaedler)",
        d: "محاكاة تفاعلية لـ wagon wheel effect فيها slider لتغيير معدّل أخذ العينات وشوفة تأثيره على اتجاه دوران العجلة. بتفهم إزاي undersampling بيعمل aliasing زماني.",
        icon: "🔧",
        actions: [
          {
            label: "🚀 فتح المحاكاة",
            url: "https://jackschaedler.github.io/circles-sines-signals/sampling4.html",
            type: "view",
            color: "green"
          }
        ]
      },
      {
        t: "2D Inverse Fourier Transform Playground",
        d: "أداة تفاعلية لتجربة الفلاتر في مجال التردد على صور حقيقية — تقدر تمسح مناطق معينة من الـ spectrum وتشوف النتيجة في المجال المكاني. مرتبطة مباشرة بـ low-pass / high-pass / band-pass.",
        icon: "🔧",
        actions: [
          {
            label: "🚀 فتح المحاكاة",
            url: "https://monman53.github.io/2dfft/",
            type: "view",
            color: "green"
          }
        ]
      },
      {
        t: "An Interactive Guide To The Fourier Transform — Better Explained",
        d: "شرح تفاعلي بأسلوب 'smoothie ingredients' لفهم فورييه حدسي بدون معادلات معقدة. مفيد لو حابب تفهم الفكرة ورا تحويل الإشارة لترددات قبل ما تتعمّق في المحاضرة.",
        icon: "🔧",
        actions: [
          {
            label: "🌐 فتح الموقع",
            url: "https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/",
            type: "view",
            color: "blue"
          }
        ]
      }
    ]
  }
]
