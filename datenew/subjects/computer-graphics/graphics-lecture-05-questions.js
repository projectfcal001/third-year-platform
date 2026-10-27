{
  id: "graphics-lecture-05",
  t: "Computer Graphics — Lecture 5: Aliasing, Sampling & Reconstruction",
  d: "محاضرة من كورس CMU 15-462/662 عن التعرّج (Aliasing) في الصور والصوت، عملية أخذ العينات (Sampling) وإعادة البناء (Reconstruction)، تحليل الترددات (Frequencies) في الإشارات والصور، الفلاتر (Low/High/Band-pass) والأمثلة الكلاسيكية زي wagon wheel effect و sin(x^2 + y^2).",
  pdf: "",
  pdf2: "",
  linkCategories: [],
  questions: [
    {
      q: "1. What is the primary goal of sampling and reconstruction in signal processing?",
      options: [
        "To compress the original signal as much as possible",
        "To reproduce the original signal as accurately as possible",
        "To increase the frequency of the original signal",
        "To convert the signal into a lower-resolution form",
      ],
      correct: 1,
      translation: "إيه هو الهدف الأساسي من أخذ العينات وإعادة البناء في معالجة الإشارات؟",
      explanation: "الشريحة بتقول صراحة: الهدف هو إعادة إنتاج الإشارة الأصلية بأكبر دقة ممكنة (reproduce original signal as accurately as possible). الاختيارات التانية غلط لأن الضغط أو تقليل الدقة أهداف ثانوية مش الأساسية.",
      tags: [
        "Sampling",
        "Reconstruction",
        "Goal",
      ],
      ref: "Lecture 5 — Sampling & Reconstruction (intro slide)",
      likely: "high",
    },
    {
      q: "2. Aliasing is best described as:",
      options: [
        "Low frequencies in the original signal appearing as high frequencies after reconstruction",
        "High frequencies in the original signal masquerading as low frequencies after reconstruction due to undersampling",
        "The complete loss of all frequencies during sampling",
        "The process of converting a digital signal back to analog",
      ],
      correct: 1,
      translation: "تعريف التعرّج (Aliasing) هو:",
      explanation: "التعريف موجود حرفيًا في الشريحة: الترددات العالية في الإشارة الأصلية بتتنكر في هيئة ترددات منخفضة بعد إعادة البناء بسبب أخذ عينات قليلة (undersampling). الاختيار الأول عكس الكلام، والباقي مش تعريف صحيح.",
      tags: [
        "Aliasing",
        "Definitions",
      ],
      ref: "Lecture 5 — Undersampling / Aliasing slide",
      likely: "high",
    },
    {
      q: "3. In the sampling/reconstruction pipeline, the intermediate 'digital information' stage represents:",
      options: [
        "The reconstructed continuous signal",
        "The original continuous signal before any processing",
        "The discrete samples taken from the original continuous signal",
        "A higher-frequency version of the original signal",
      ],
      correct: 2,
      translation: "في خط أخذ العينات وإعادة البناء، مرحلة 'digital information'بتعمل إيه؟",
      explanation: "الخط هو continuous signal → sample → digital information → reconstruct → continuous signal. فـ digital information هي العينات المدمجة (discrete samples) المأخوذة من الإشارة الأصلية. الاختيارات التانية بتمثل مراحل تانية في الخط.",
      tags: [
        "Sampling",
        "Pipeline",
      ],
      ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
      likely: "high",
    },
    {
      q: "4. According to the lecture, a 1D signal can be expressed as:",
      options: [
        "A single constant value",
        "A single high-frequency wave",
        "A random sequence of values",
        "A superposition (sum) of frequencies",
      ],
      correct: 3,
      translation: "حسب المحاضرة، الإشارة الـ 1D ممكن تتعرض كـ:",
      explanation: "الشريحة بتقول إن إشارة 1D ممكن تتعبّر عنها كـ superposition of frequencies (مجموع ترددات). ده أساس فورييه. الاختيارات التانية بتعكس سوء فهم للنظرية.",
      tags: [
        "Frequencies",
        "Fourier",
        "1D signals",
      ],
      ref: "Lecture 5 — 1D signal / frequencies slide",
      likely: "high",
    },
    {
      q: "5. In the example f(x) = f1(x) + 0.75 f2(x) + 0.5 f4(x), the three component signals were:",
      options: [
        "sin(x), sin(2x), sin(4x)",
        "sin(pi*x), sin(3*pi*x), sin(5*pi*x)",
        "cos(x), cos(2x), cos(4x)",
        "sin(pi*x), sin(2*pi*x), sin(4*pi*x)",
      ],
      correct: 3,
      translation: "في المثال f(x) = f1 + 0.75 f2 + 0.5 f4، الإشارات الثلاثة f1, f2, f4 كانت:",
      explanation: "الشريحة بتعرّف f1(x)=sin(pi*x)، f2(x)=sin(2*pi*x)، f4(x)=sin(4*pi*x). الاختيار التاني هو الوحيد المطابق. الاختيار الأول مفقود عامل pi، والتالت رابع بيستبدل sin بـ cos أو بيغيّر المعاملات.",
      tags: [
        "Frequencies",
        "Example",
        "sin waves",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "high",
    },
    {
      q: "6. An audio spectrum analyzer displays:",
      options: [
        "The total energy of the signal only",
        "The time-domain waveform of the signal",
        "The amplitude of each frequency in the signal",
        "The number of samples taken per second",
      ],
      correct: 2,
      translation: "محلل الطيف الصوتي (audio spectrum analyzer) بيعرض:",
      explanation: "الشريحة بتقول: محلل الطيف الصوتي بيعرض سعة كل تردد (amplitude of each frequency). ده عكس شكل الموجة اللي هو في المجال الزمني. الاختيارات التانية مش بتاع الطيف.",
      tags: [
        "Spectrum analyzer",
        "Frequencies",
      ],
      ref: "Lecture 5 — Audio spectrum analyzer slide",
      likely: "high",
    },
    {
      q: "7. In the audio spectrum analyzer shown in the lecture, low frequencies correspond to:",
      options: [
        "Treble (high-pitched sounds)",
        "Background noise only",
        "Silence",
        "Bass (low-pitched sounds)",
      ],
      correct: 3,
      translation: "في محلل الطيف الصوتي، الترددات المنخفضة بتقابل:",
      explanation: "الشريحة بتقول صراحة: الترددات المنخفضة = bass (صوت جهير). ده مكتوب حرفيًا جنب المنطقة المنخفضة في الرسمة. الاختيار الأول غلط لأن treble هو الترددات العالية.",
      tags: [
        "Spectrum analyzer",
        "Audio",
        "Frequencies",
      ],
      ref: "Lecture 5 — Audio spectrum analyzer slide",
      likely: "high",
    },
    {
      q: "8. In the lecture's audio demo, the tone frequency is given by w(t) = 6000*t. What happens as t increases?",
      options: [
        "The frequency increases over time and eventually aliasing occurs",
        "The tone stays at a constant frequency",
        "The audio becomes silent",
        "The amplitude decreases over time",
      ],
      correct: 0,
      translation: "في المثال الصوتي w(t)=6000*t، إيه اللي بيحصل لما t يزيد؟",
      explanation: "الشريحة بتسأل 'What happens if we increase w over time?' وبعدين بتعرض تجربة بتوضح إن aliasing بيحصل. التردد بيزيد بشكل خطي وبيتعدى قدرة أخذ العينات، فيظهر التعرّج. الاختيار الأول مخالف لطبيعة w(t)=6000*t أصله.",
      tags: [
        "Aliasing",
        "Audio demo",
        "Frequencies",
      ],
      ref: "Lecture 5 — Aliasing in Audio slide",
      likely: "high",
    },
    {
      q: "9. Aliasing occurs because:",
      options: [
        "The signal is sampled too frequently",
        "High-frequency signals are insufficiently sampled (undersampled)",
        "The signal contains no high frequencies",
        "The reconstruction uses too many samples",
      ],
      correct: 1,
      translation: "التعرّج بيحصل بسبب:",
      explanation: "الشريحة بتقول صراحة: 'Undersampling high-frequency signals results in aliasing'. أخذ عينات قليلة لإشارة عالية التردد هو السبب. الاختيار الأول عكس الصحيح — أخذ عينات كتير بيلغي التعرّج مش بيعمله.",
      tags: [
        "Aliasing",
        "Undersampling",
      ],
      ref: "Lecture 5 — Undersampling / Aliasing slide",
      likely: "high",
    },
    {
      q: "10. After undersampling a high-frequency signal, the reconstruction appears to come from:",
      options: [
        "A higher-frequency signal than the original",
        "A noise-free version of the original",
        "A signal with zero frequency",
        "A low-frequency signal",
      ],
      correct: 3,
      translation: "بعد أخذ عينات قليلة من إشارة عالية التردد، إعادة البناء بتظهر كأنها جاية من:",
      explanation: "الشريحة بتقول: 'reconstruction appears to be from a low frequency signal'. ده جوهر التعرّج — الترددات العالية بتتنكر في هيئة ترددات منخفضة. الاختيار الأول غلط تمامًا لأن التعرّج بيقلل التردد الظاهري مش بيزيده.",
      tags: [
        "Aliasing",
        "Reconstruction",
      ],
      ref: "Lecture 5 — Undersampling / Aliasing slide",
      likely: "high",
    },
    {
      q: "11. Which type of signal can be sampled adequately for accurate reconstruction (according to the lecture)?",
      options: [
        "Only high-frequency signals",
        "Low-frequency signals",
        "Only signals with infinite frequency",
        "All signals regardless of frequency",
      ],
      correct: 1,
      translation: "أي نوع إشارة ممكن يتعمله أخذ عينات كافي لإعادة بناء دقيقة؟",
      explanation: "الشريحة بتقول: 'Low-frequency signal: sampled adequately for accurate reconstruction'. الترددات المنخفضة بتتحتاج عينات أقل عشان تتقال صح. الترددات العالية بتحتاج عينات أكتر، ولما متوفرش، بيحصل aliasing.",
      tags: [
        "Sampling",
        "Reconstruction",
        "Frequencies",
      ],
      ref: "Lecture 5 — Undersampling / Aliasing slide",
      likely: "high",
    },
    {
      q: "12. According to the lecture, images can also be:",
      options: [
        "Decomposed into 'frequencies'",
        "Stored only as a single frequency",
        "Reconstructed without any sampling",
        "Compressed into a single pixel",
      ],
      correct: 0,
      translation: "حسب المحاضرة، الصور كمان ممكن:",
      explanation: "الشريحة بتقول حرفيًا: 'Images can also be decomposed into frequencies'. ده امتداد لنفس فكرة تحليل الإشارات للترددات، بس للمجال المكاني (spatial) بدل الزماني.",
      tags: [
        "Images",
        "Frequencies",
        "Decomposition",
      ],
      ref: "Lecture 5 — Images as frequencies slide",
      likely: "high",
    },
    {
      q: "13. In image frequency analysis, low frequencies typically correspond to:",
      options: [
        "Sharp edges",
        "High contrast regions",
        "Random noise",
        "Smooth gradients",
      ],
      correct: 3,
      translation: "في تحليل ترددات الصور، الترددات المنخفضة بتقابل:",
      explanation: "الشريحة بتقول صراحة: 'Low frequencies only (smooth gradients)'. التردد المنخفض بيمثل تغيّر بطيء في قيم البيكسل (تدرّج ناعم). التردد العالي بيمثل التغيّر السريع زي الحدود.",
      tags: [
        "Images",
        "Frequencies",
        "Low-pass",
      ],
      ref: "Lecture 5 — Low frequencies (low-pass) slide",
      likely: "high",
    },
    {
      q: "14. A low-pass filter applied to an image:",
      options: [
        "Removes low frequencies and keeps high frequencies",
        "Keeps all frequencies unchanged",
        "Keeps low frequencies and removes high frequencies",
        "Increases the amplitude of all frequencies",
      ],
      correct: 2,
      translation: "الفلتر low-pass لما يتطبّق على صورة بيعمل إيه؟",
      explanation: "اسم الفلتر 'low-pass' معناه يخلّي الترددات المنخفضة تعدي (pass) ويوقف العالية. بعد الفلتر: الترددات فوق cutoff بتبقى صفر. النتيجة المكانية: smooth gradients فقط.",
      tags: [
        "Filters",
        "Low-pass",
        "Images",
      ],
      ref: "Lecture 5 — Low frequencies / low-pass filter slide",
      likely: "high",
    },
    {
      q: "15. After applying a low-pass filter, the spectrum shows:",
      options: [
        "All frequencies have the same magnitude",
        "Only high frequencies remain",
        "All frequencies above the cutoff have 0 magnitude",
        "All frequencies are amplified",
      ],
      correct: 2,
      translation: "بعد تطبيق فلتر low-pass، الطيف بيبين:",
      explanation: "الشريحة بتقول: 'All frequencies above cutoff have 0 magnitude'. ده تعريف low-pass filter في مجال التردد — بيصفر الترددات فوق نقطة القطع. الاختيارات التانية مخالفة لتعريف الفلتر.",
      tags: [
        "Low-pass",
        "Spectrum",
      ],
      ref: "Lecture 5 — Low frequencies (after low-pass) slide",
      likely: "high",
    },
    {
      q: "16. Applying a high-pass filter to an image produces a result that contains mainly:",
      options: [
        "The strongest edges",
        "Smooth gradients only",
        "A completely black image",
        "A blurred version of the image",
      ],
      correct: 0,
      translation: "تطبيق فلتر high-pass على صورة بيطلّع نتيجة فيها أساسًا:",
      explanation: "الشريحة بتقول: 'High frequencies (edges) — Spatial domain result (strongest edges)'. الفلتر بيشيل الترددات المنخفضة (التدرّجات) وبيسيب العالية (الحدود). عشان كده النتيجة بتظهر الحدود بوضوح.",
      tags: [
        "High-pass",
        "Edges",
        "Filters",
      ],
      ref: "Lecture 5 — High frequencies (high-pass) slide",
      likely: "high",
    },
    {
      q: "17. After applying a high-pass filter, the spectrum shows:",
      options: [
        "All frequencies above threshold have 0 magnitude",
        "Only the DC component remains",
        "All frequencies are kept unchanged",
        "All frequencies below threshold have 0 magnitude",
      ],
      correct: 3,
      translation: "بعد تطبيق فلتر high-pass، الطيف بيبين:",
      explanation: "الشريحة بتقول صراحة: 'All frequencies below threshold have 0 magnitude'. ده عكس الـ low-pass — الـ high-pass بيشيل الترددات المنخفضة (تحت العتبة) وبيسيب العالية.",
      tags: [
        "High-pass",
        "Spectrum",
      ],
      ref: "Lecture 5 — High frequencies (high-pass) slide",
      likely: "high",
    },
    {
      q: "18. In image frequency analysis, high frequencies typically correspond to:",
      options: [
        "Smooth color regions",
        "The background of the image",
        "The average brightness of the image",
        "Edges",
      ],
      correct: 3,
      translation: "في تحليل ترددات الصور، الترددات العالية بتقابل:",
      explanation: "الشريحة بتقول: 'High frequencies (edges)'. التردد العالي بيمثل تغيّر سريع في قيم البيكسل زي اللي بيحصل عند الحدود. التدرّج الناعم هو التردد المنخفض.",
      tags: [
        "Images",
        "Frequencies",
        "High-pass",
      ],
      ref: "Lecture 5 — High frequencies (high-pass) slide",
      likely: "high",
    },
    {
      q: "19. A band-pass filter on an image keeps:",
      options: [
        "Only the lowest frequencies",
        "Only the highest frequencies",
        "Only mid-range frequencies",
        "All frequencies except mid-range ones",
      ],
      correct: 2,
      translation: "الفلتر band-pass على صورة بيخلّي:",
      explanation: "الشريحة بتعرض 'Mid-range frequencies — Spectrum (after band-pass filter)'. الـ band-pass بيخلّي ترددات في نطاق وسط فقط — لا العالية ولا المنخفضة. ده عكس low-pass و high-pass.",
      tags: [
        "Band-pass",
        "Filters",
        "Mid-range",
      ],
      ref: "Lecture 5 — Mid-range frequencies (band-pass) slide",
      likely: "high",
    },
    {
      q: "20. According to the lecture, an image can be viewed as:",
      options: [
        "A single frequency component",
        "A sum of its frequency components",
        "A random distribution of pixels",
        "An array of low frequencies only",
      ],
      correct: 1,
      translation: "حسب المحاضرة، الصورة ممكن تتعامل معاها كـ:",
      explanation: "الشريحة بتقول: 'An image as a sum of its frequency components'. ده نفس مبدأ superposition للإشارات 1D، بس مطبّق على المجال المكاني 2D.",
      tags: [
        "Images",
        "Frequencies",
        "Decomposition",
      ],
      ref: "Lecture 5 — Image as a sum of frequency components slide",
      likely: "high",
    },
    {
      q: "21. The function sin(x^2 + y^2) shown in the lecture is used to demonstrate:",
      options: [
        "Temporal aliasing in audio",
        "The effect of low-pass filtering",
        "Spatial aliasing in images",
        "The wagon wheel effect",
      ],
      correct: 2,
      translation: "الدالة sin(x^2 + y^2) اللي ظهرت في المحاضرة بتوضّح:",
      explanation: "عنوان الشريحة بيقول 'Spatial aliasing: the function sin(x^2 + y^2)'. الدالة دي بتعمل حلقات (rings) متركّزة، ولما التردد بيزيد بسرعة، بيحصل aliasing مكاني — الحلقات اللي هي عالية التردد بتظهر كأنها منخفضة التردد.",
      tags: [
        "Spatial aliasing",
        "sin(x^2+y^2)",
        "Examples",
      ],
      ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
      likely: "high",
    },
    {
      q: "22. In the sin(x^2 + y^2) example, the rings on the right side of the image illustrate:",
      options: [
        "True low-frequency oscillation of the signal",
        "The result of applying a low-pass filter",
        "Aliasing from undersampling a high-frequency oscillation",
        "A region with no signal",
      ],
      correct: 2,
      translation: "في مثال sin(x^2 + y^2)، الحلقات على يمين الصورة بتوضّح:",
      explanation: "الشريحة بتقول: 'Right: aliasing from undersampling high frequency oscillation makes it appear that rings are low-frequency (they are not!)'. الإشارة الحقيقية عالية التردد، لكن بسبب أخذ عينات قليلة بتظهر كأنها منخفضة التردد.",
      tags: [
        "Spatial aliasing",
        "sin(x^2+y^2)",
      ],
      ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
      likely: "high",
    },
    {
      q: "23. In the sin(x^2 + y^2) image, the 'middle' rings represent:",
      options: [
        "Frequencies below the cutoff",
        "Frequencies approaching the limit of what individual pixels can represent",
        "The DC component of the image",
        "The result of band-pass filtering",
      ],
      correct: 1,
      translation: "في صورة sin(x^2 + y^2)، الحلقات 'الوسطى' بتمثل:",
      explanation: "الشريحة بتقول: 'Middle: ring frequency approaches limit of what we can represent w/ individual pixels'. هنا التردد بيقرب من حد قدرة البيكسل الفردي على تمثيله، وده بيدّي إنذار قبل ما aliasing يبدأ على اليمين.",
      tags: [
        "Spatial aliasing",
        "sin(x^2+y^2)",
        "Pixel resolution",
      ],
      ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
      likely: "high",
    },
    {
      q: "24. The wagon wheel effect is a classic example of:",
      options: [
        "Spatial aliasing",
        "Color aliasing",
        "Audio aliasing",
        "Temporal aliasing",
      ],
      correct: 3,
      translation: "ظاهرة wagon wheel effect هي مثال كلاسيكي على:",
      explanation: "عنوان الشريحة بيقول: 'Temporal aliasing: wagon wheel effect'. 'Temporal' معناها زمني، والإشارة هنا متغيّرة في الزمن (عجلة بتلف)، فالتعرّج بيحصل في المحور الزمني مش المكاني.",
      tags: [
        "Temporal aliasing",
        "Wagon wheel",
      ],
      ref: "Lecture 5 — Temporal aliasing: wagon wheel effect slide",
      likely: "high",
    },
    {
      q: "25. According to the lecture, the wagon wheel effect occurs because:",
      options: [
        "The camera's frame rate is too low for the rapidly spinning wheel",
        "The wheel is not actually moving",
        "The lighting is too bright",
        "The wheel is made of reflective material",
      ],
      correct: 0,
      translation: "حسب المحاضرة، wagon wheel effect بيحصل لأن:",
      explanation: "الشريحة بتقول: 'Camera's frame rate (temporal sampling rate) is too low for rapidly spinning wheel'. معدّل إطارات الكاميرا (= معدّل أخذ العينات الزمني) أقل من اللازم لالتقاط سرعة العجلة، فالتعرّج الزمني بيخلّيها تبان واقفة أو بتلف في الاتجاه المعاكس.",
      tags: [
        "Temporal aliasing",
        "Wagon wheel",
        "Frame rate",
      ],
      ref: "Lecture 5 — Temporal aliasing: wagon wheel effect slide",
      likely: "high",
    },
    {
      q: "26. The fundamental difference between spatial aliasing and temporal aliasing is:",
      options: [
        "Spatial occurs in images (2D space); temporal occurs in time (video frames)",
        "Spatial is for audio; temporal is for images",
        "Spatial happens only with color; temporal only with grayscale",
        "There is no real difference between them",
      ],
      correct: 0,
      translation: "الفرق الأساسي بين التعرّج المكاني والتعرّج الزمني هو:",
      explanation: "التعرّج المكاني بيحصل في المجال المكاني (صور 2D زي sin(x^2+y^2))، والتعرّج الزمني بيحصل في المجال الزمني (فيديو، زي wagon wheel). السبب في الالاتنين هو نفسه (undersampling)، بس المحور مختلف.",
      tags: [
        "Spatial aliasing",
        "Temporal aliasing",
        "Comparison",
      ],
      ref: "Lecture 5 — Spatial aliasing vs Temporal aliasing slides",
      likely: "high",
    },
    {
      q: "27. In the f(x) = f1(x) + 0.75 f2(x) + 0.5 f4(x) example, the largest amplitude coefficient belongs to:",
      options: [
        "f1 (coefficient = 1)",
        "f2 (coefficient = 0.75)",
        "f4 (coefficient = 0.5)",
        "All coefficients are equal",
      ],
      correct: 0,
      translation: "في مثال f(x)=f1+0.75 f2+0.5 f4، أكبر معامل سعة موجود في:",
      explanation: "المعاملات: f1 بـ 1، f2 بـ 0.75، f4 بـ 0.5. أكبر معامل هو 1 الخاص بـ f1. ده بيمثل إن التردد الأساسي (الأدنى) ليه أعلى مساهمة في الإشارة المركّبة.",
      tags: [
        "Frequencies",
        "Example",
        "Amplitude",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "high",
    },
    {
      q: "28. The wavelength/period of f1(x) = sin(pi*x) compared to f4(x) = sin(4*pi*x) means:",
      options: [
        "f1 has the shortest wavelength (highest frequency)",
        "Both have the same frequency",
        "f4 has the highest frequency of the three",
        "f1 has zero frequency",
      ],
      correct: 2,
      translation: "مقارنة f1=sin(pi*x) بـ f4=sin(4*pi*x) معناه:",
      explanation: "معامل التردد في f4 هو 4*pi، أكبر من 2*pi في f2 و pi في f1. فـ f4 عندها أعلى تردد بين الإشارات الثلاثة. ده بيربط فكرة إن المعامل الأكبر = تردد أعلى.",
      tags: [
        "Frequencies",
        "sin waves",
        "Comparison",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "medium",
    },
    {
      q: "29. The 'sample' stage in the sampling/reconstruction pipeline converts:",
      options: [
        "Continuous signal to discrete samples (digital information)",
        "Digital information back to continuous signal",
        "Low frequencies to high frequencies",
        "Audio signal to image signal",
      ],
      correct: 0,
      translation: "مرحلة 'sample' في خط المعالجة بتحوّل:",
      explanation: "الترتيب هو continuous → sample → digital → reconstruct → continuous. فـ sample بتحوّل الإشارة المستمرة لعينات منفصلة (digital). الـ reconstruct هي اللي بتعمل العكس — بتحوّل digital لـ continuous.",
      tags: [
        "Sampling",
        "Pipeline",
        "Digital",
      ],
      ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
      likely: "medium",
    },
    {
      q: "30. The 'reconstruct' stage in the pipeline is responsible for:",
      options: [
        "Converting digital information back to an approximate continuous signal",
        "Sampling the continuous signal",
        "Increasing the frequency of the signal",
        "Adding aliasing to the signal",
      ],
      correct: 0,
      translation: "مرحلة 'reconstruct' في خط المعالجة مسؤولة عن:",
      explanation: "الـ reconstruct بياخد digital information (عينات) ويعمل منها إشارة مستمرة تقريبية. الهدف مكتوب في الشريحة: reproduce original signal as accurately as possible. لو أخد العينات مش كفاية، الـ reconstruct بتعمل aliasing.",
      tags: [
        "Reconstruction",
        "Pipeline",
      ],
      ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
      likely: "medium",
    },
    {
      q: "31. In the spatial aliasing image of sin(x^2 + y^2), the rings on the 'center-left' represent:",
      options: [
        "Aliasing artifacts",
        "The actual (true) low-frequency oscillation of the signal",
        "The result of a high-pass filter",
        "Pixels outside the image bounds",
      ],
      correct: 1,
      translation: "في صورة sin(x^2+y^2)، الحلقات في 'الوسط-يسار' بتمثل:",
      explanation: "الشريحة بتقول: 'Rings in center-left: Actual signal (low frequency oscillation)'. هنا الإشارة لسه منخفضة التردد بشكل حقيقي وبتتمثّل صح. الـ aliasing بيبدأ على اليمين لما التردد يزيد.",
      tags: [
        "Spatial aliasing",
        "sin(x^2+y^2)",
      ],
      ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
      likely: "medium",
    },
    {
      q: "32. After reconstruction, an undersampled high-frequency signal appears:",
      options: [
        "Identical to the original",
        "As if it came from a low-frequency signal",
        "As a constant DC value",
        "As a higher-frequency signal than before",
      ],
      correct: 1,
      translation: "بعد إعادة البناء، إشارة عالية التردد اتاخد منها عينات قليلة بتظهر:",
      explanation: "الشريحة بتقول صراحة: 'reconstruction appears to be from a low frequency signal'. التردد العالي بيتنكر في هيئة تردد منخفض — ده التعريف الأساسي للـ aliasing. الاختيار الأول غلط ولو كان صح مكانش فيه مشكلة.",
      tags: [
        "Aliasing",
        "Reconstruction",
        "Frequencies",
      ],
      ref: "Lecture 5 — Undersampling / Aliasing slide",
      likely: "medium",
    },
    {
      type: "essay",
      q: "1. Define aliasing and explain why it occurs.",
      translation: "عرّف التعرّج (Aliasing) واشرح ليه بيحصل.",
      answer: "Aliasing is the phenomenon where high frequencies in the original signal masquerade as low frequencies after reconstruction, due to undersampling.\n" +
          "It occurs because the sampling rate is too low to capture the rapid changes of the high-frequency components. When the signal is reconstructed from these insufficient samples, the high-frequency content folds back into the low-frequency range, producing an apparent low-frequency signal that does not exist in the original.",
      tags: [
        "Aliasing",
        "Definitions",
      ],
      ref: "Lecture 5 — Undersampling / Aliasing slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "2. Explain the sampling and reconstruction pipeline, listing its main stages.",
      translation: "اشرح خط أخذ العينات وإعادة البناء واذكر مراحله الأساسية.",
      answer: "The pipeline consists of four stages:\n" +
          "1. Continuous signal (original): the true analog signal we want to capture.\n" +
          "2. Sample: discretize the continuous signal into a finite set of values.\n" +
          "3. Digital information: the discrete samples stored/processed as digital data.\n" +
          "4. Reconstruct: convert the digital samples back into an approximate continuous signal.\n" +
          "The goal of the whole pipeline is to reproduce the original signal as accurately as possible. If the sampling rate is insufficient for the signal's high frequencies, aliasing occurs at the reconstruction stage.",
      tags: [
        "Sampling",
        "Reconstruction",
        "Pipeline",
      ],
      ref: "Lecture 5 — Sampling & Reconstruction pipeline diagram",
      likely: "high",
    },
    {
      type: "essay",
      q: "3. Explain how a 1D signal can be expressed as a superposition of frequencies, using the lecture's example.",
      translation: "اشرح إزاي إشارة 1D ممكن تتعبر كـ superposition للترددات، باستخدام مثال المحاضرة.",
      answer: "A 1D signal can be expressed as a sum (superposition) of multiple sinusoidal waves, each at a different frequency and amplitude.\n" +
          "In the lecture example:\n" +
          "  f1(x) = sin(pi*x)\n" +
          "  f2(x) = sin(2*pi*x)\n" +
          "  f4(x) = sin(4*pi*x)\n" +
          "  f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x)\n" +
          "Here f1 is the lowest frequency, f4 is the highest, and each is weighted by an amplitude coefficient (1, 0.75, 0.5). Adding these three sinusoids produces a richer, more complex signal. This is the foundation of frequency-domain analysis (Fourier decomposition).",
      tags: [
        "Frequencies",
        "Fourier",
        "1D signals",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "4. Compare spatial aliasing and temporal aliasing. Give one example of each from the lecture.",
      translation: "قارن بين التعرّج المكاني (Spatial) والتعرّج الزمني (Temporal)، واذكر مثال على كل واحد من المحاضرة.",
      answer: "Spatial aliasing:\n" +
          "- Occurs in the spatial domain (images, 2D).\n" +
          "- Cause: insufficient spatial sampling (pixel resolution) for high-frequency spatial oscillations.\n" +
          "- Example: the function sin(x^2 + y^2) shows rings; on the right side of the image, high-frequency oscillations appear as low-frequency rings due to undersampling by individual pixels.\n" +
          "Temporal aliasing:\n" +
          "- Occurs in the time domain (video, animation).\n" +
          "- Cause: camera frame rate (temporal sampling rate) is too low for a rapidly moving/spinning object.\n" +
          "- Example: the wagon wheel effect — a spinning wheel appears to rotate backwards, stand still, or move slower than its true rotation because the camera cannot sample its motion fast enough.\n" +
          "Both share the same underlying cause (undersampling) but differ in the axis along which sampling is insufficient.",
      tags: [
        "Spatial aliasing",
        "Temporal aliasing",
        "Comparison",
      ],
      ref: "Lecture 5 — Spatial aliasing + Temporal aliasing slides",
      likely: "high",
    },
    {
      type: "essay",
      q: "5. Explain what low-pass, band-pass, and high-pass filters do to an image, and describe the spatial-domain result of each.",
      translation: "اشرح إيه اللي بيعمله كل من فلتر low-pass و band-pass و high-pass على صورة، ووصف النتيجة في المجال المكاني لكل فيهم.",
      answer: "Low-pass filter:\n" +
          "- Keeps low frequencies; sets all frequencies above the cutoff to zero magnitude.\n" +
          "- Spatial result: smooth gradients only — edges are blurred out.\n" +
          "Band-pass filter:\n" +
          "- Keeps only mid-range frequencies; removes both the lowest and highest components.\n" +
          "- Spatial result: a mix that contains neither the smoothest gradients nor the sharpest edges — only mid-detail structure.\n" +
          "High-pass filter:\n" +
          "- Keeps high frequencies; sets all frequencies below a threshold to zero magnitude.\n" +
          "- Spatial result: the strongest edges of the image are emphasized, while smooth regions are suppressed.",
      tags: [
        "Low-pass",
        "Band-pass",
        "High-pass",
        "Filters",
      ],
      ref: "Lecture 5 — Low / Mid-range / High frequencies slides",
      likely: "high",
    },
    {
      type: "essay",
      q: "6. Explain why images can be decomposed into frequencies, and state what low and high frequencies correspond to in images.",
      translation: "اشرح ليه الصور ممكن تتفكّك لترددات، واذكر الترددات المنخفضة والعالية بتقابل إيه في الصور.",
      answer: "Just like a 1D audio signal can be expressed as a superposition of sinusoidal frequencies, a 2D image can also be decomposed into 'frequencies' — in this case, spatial frequencies that describe how rapidly pixel intensities change across the image.\n" +
          "Low frequencies correspond to smooth gradients — regions where pixel values change slowly, such as flat color areas or gradual shading.\n" +
          "High frequencies correspond to edges — regions where pixel values change sharply, such as object boundaries and fine detail.\n" +
          "An image can therefore be viewed as a sum of its frequency components, and filtering operations (low-pass, high-pass, band-pass) selectively keep or remove these components.",
      tags: [
        "Images",
        "Frequencies",
        "Decomposition",
      ],
      ref: "Lecture 5 — Images as frequencies / Low / High slides",
      likely: "high",
    },
    {
      type: "essay",
      q: "7. Explain the wagon wheel effect and its cause.",
      translation: "اشرح ظاهرة wagon wheel effect وسببها.",
      answer: "The wagon wheel effect is a form of temporal aliasing in which a spinning wheel appears to rotate more slowly than its true rotation, appears stationary, or even appears to rotate in the opposite direction.\n" +
          "Cause: the camera's frame rate (the temporal sampling rate) is too low for the rapidly spinning wheel. When samples are taken too infrequently relative to the wheel's rotation speed, the reconstructed motion is ambiguous — the high-frequency rotation 'masquerades' as a lower-frequency (or even reversed) rotation.\n" +
          "This is the temporal counterpart of spatial aliasing: the same underlying principle (undersampling a high-frequency signal) but applied along the time axis instead of the spatial axis.",
      tags: [
        "Temporal aliasing",
        "Wagon wheel",
      ],
      ref: "Lecture 5 — Temporal aliasing: wagon wheel effect slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "8. Explain the sin(x^2 + y^2) example and what it demonstrates about spatial aliasing. Describe the three regions visible in the image.",
      translation: "اشرح مثال sin(x^2+y^2) وإيه اللي بيوضّحه عن التعرّج المكاني. وصف المناطق الثلاثة المرئية في الصورة.",
      answer: "The function sin(x^2 + y^2) produces concentric rings centered at the origin, and as we move away from the origin the ring frequency increases.\n" +
          "Three regions are visible in the rendered image:\n" +
          "1. Center-left (rings in the actual signal): the true low-frequency oscillation of the signal — these rings are genuinely low-frequency and are correctly represented.\n" +
          "2. Middle: the ring frequency approaches the limit of what individual pixels can represent. This is the boundary where the sampling resolution becomes insufficient.\n" +
          "3. Right: aliasing from undersampling the high-frequency oscillation. The actual signal is high-frequency here, but due to insufficient pixel resolution, it appears as low-frequency rings.\n" +
          "The example demonstrates that spatial aliasing makes high-frequency spatial content masquerade as low-frequency content — the same defining property of aliasing, but in the spatial (image) domain.",
      tags: [
        "Spatial aliasing",
        "sin(x^2+y^2)",
        "Examples",
      ],
      ref: "Lecture 5 — Spatial aliasing: sin(x^2 + y^2) slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "9. State the goal of sampling and reconstruction, and explain how aliasing violates this goal.",
      translation: "اذكر هدف أخذ العينات وإعادة البناء، واشرح إزاي aliasing بيخالف الهدف ده.",
      answer: "The goal of sampling and reconstruction is to reproduce the original continuous signal as accurately as possible.\n" +
          "Aliasing violates this goal because, when the sampling rate is too low for the signal's high-frequency content, the reconstructed signal no longer matches the original. Instead, high frequencies in the original signal masquerade as low frequencies in the reconstruction. The reconstructed signal appears to come from a low-frequency signal that was never in the original — the output is a 'false identity' (an alias) of the input.\n" +
          "Therefore, aliasing directly breaks the 'reproduce as accurately as possible' objective: the reconstruction is not a faithful copy of the original.",
      tags: [
        "Sampling",
        "Reconstruction",
        "Aliasing",
        "Goal",
      ],
      ref: "Lecture 5 — Sampling & Reconstruction goal slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "10. Explain the audio aliasing demo in which the tone frequency is w(t) = 6000*t. What happens and why?",
      translation: "اشرح تجربة التعرّج الصوتي اللي فيها تردد النغمة w(t)=6000*t. إيه اللي بيحصل وليه؟",
      answer: "In the demo, the angular frequency of the tone is set to w(t) = 6000*t, meaning the frequency increases linearly over time.\n" +
          "At the beginning (small t), the frequency is low enough that the sampling rate captures it accurately, and the tone plays as expected.\n" +
          "As t increases, the frequency eventually exceeds what the (fixed) sampling rate can represent. Beyond this point, the high-frequency tone cannot be reconstructed faithfully — instead, it is misinterpreted as a lower-frequency tone due to aliasing.\n" +
          "The result is that the tone no longer sounds like a steadily rising pitch; instead, unexpected lower-frequency artifacts appear. This illustrates the general principle that increasing the signal's frequency beyond the capacity of the sampling rate produces aliasing.",
      tags: [
        "Aliasing",
        "Audio demo",
        "Frequencies",
      ],
      ref: "Lecture 5 — Aliasing in Audio slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "11. Explain what an audio spectrum analyzer shows and how it relates to the idea of decomposing a signal into frequencies.",
      translation: "اشرح إيه اللي بيعرضه محلل الطيف الصوتي وإزاي بيرتبط بفكرة تفكيك الإشارة لترددات.",
      answer: "An audio spectrum analyzer shows the amplitude of each frequency present in the signal.\n" +
          "Instead of displaying the signal as a time-domain waveform (amplitude versus time), it displays a frequency-domain representation: each position along the frequency axis corresponds to a specific frequency, and the height at that position represents how much of that frequency is present.\n" +
          "In the lecture's example, the low-frequency region corresponds to bass, and the high-frequency region corresponds to treble. This visualization directly illustrates the principle that a 1D signal can be expressed as a superposition (sum) of frequencies, each with its own amplitude — the spectrum analyzer simply makes this decomposition visible.",
      tags: [
        "Spectrum analyzer",
        "Frequencies",
        "Audio",
      ],
      ref: "Lecture 5 — Audio spectrum analyzer slide",
      likely: "medium",
    },
    {
      type: "essay",
      q: "12. List the three frequency ranges produced by the three image filters shown in the lecture (low-pass, band-pass, high-pass), and state which spatial feature each emphasizes.",
      translation: "اذكر النطاقات الترددية الثلاثة اللي بيطلّعها كل من الفلاتر الثلاثة، واذكر الخاصية المكانية اللي بيركّز عليها كل فيهم.",
      answer: "1. Low-pass filter:\n" +
          "   - Frequency range kept: low frequencies only (all frequencies above the cutoff are set to zero magnitude).\n" +
          "   - Spatial feature emphasized: smooth gradients.\n" +
          "2. Band-pass filter:\n" +
          "   - Frequency range kept: mid-range frequencies only (both low and high are removed).\n" +
          "   - Spatial feature emphasized: medium-scale detail — neither the smoothest gradients nor the sharpest edges.\n" +
          "3. High-pass filter:\n" +
          "   - Frequency range kept: high frequencies only (all frequencies below a threshold are set to zero magnitude).\n" +
          "   - Spatial feature emphasized: the strongest edges.",
      tags: [
        "Filters",
        "Low-pass",
        "Band-pass",
        "High-pass",
      ],
      ref: "Lecture 5 — Low / Mid-range / High frequencies slides",
      likely: "medium",
    },
    {
      type: "essay",
      q: "13. (Computational) Given f1(x) = sin(pi*x), f2(x) = sin(2*pi*x), f4(x) = sin(4*pi*x), and f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), compute f(0.5). Show your steps.",
      translation: "(مسألة حسابية) بإعطاء f1=sin(pi*x)، f2=sin(2*pi*x)، f4=sin(4*pi*x)، و f(x)=f1+0.75*f2+0.5*f4، احسب f(0.5). اعرض خطواتك.",
      answer: "Given: f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), with x = 0.5.\n" +
          "Step 1 — f1(0.5) = sin(pi*0.5) = sin(pi/2) = 1.\n" +
          "Step 2 — f2(0.5) = sin(2*pi*0.5) = sin(pi) = 0.\n" +
          "Step 3 — f4(0.5) = sin(4*pi*0.5) = sin(2*pi) = 0.\n" +
          "Step 4 — Combine: f(0.5) = 1 + 0.75*0 + 0.5*0 = 1 + 0 + 0 = 1.\n" +
          "Final answer: f(0.5) = 1.",
      tags: [
        "Computation",
        "sin waves",
        "Example",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "14. (Computational) Using the same definitions f1(x) = sin(pi*x), f2(x) = sin(2*pi*x), f4(x) = sin(4*pi*x) and f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), compute f(0.25). Use the fact that sin(pi/4) = sqrt(2)/2 (approximately 0.7071).",
      translation: "(مسألة حسابية) بنفس التعريفات، احسب f(0.25) مع استخدام sin(pi/4)=sqrt(2)/2 تقريبًا 0.7071.",
      answer: "Given: f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), with x = 0.25.\n" +
          "Step 1 — f1(0.25) = sin(pi*0.25) = sin(pi/4) = sqrt(2)/2 ≈ 0.7071.\n" +
          "Step 2 — f2(0.25) = sin(2*pi*0.25) = sin(pi/2) = 1.\n" +
          "Step 3 — f4(0.25) = sin(4*pi*0.25) = sin(pi) = 0.\n" +
          "Step 4 — Combine: f(0.25) = 0.7071 + 0.75*1 + 0.5*0 = 0.7071 + 0.75 + 0 = 1.4571.\n" +
          "Final answer: f(0.25) ≈ 1.4571.",
      tags: [
        "Computation",
        "sin waves",
        "Example",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "medium",
    },
    {
      type: "essay",
      q: "15. (Computational) In the audio aliasing demo, the tone's angular frequency is w(t) = 6000*t. Compute w at t = 1 second and at t = 2 seconds. Then state at which of these two times aliasing is more likely to occur, and why.",
      translation: "(مسألة حسابية) في تجربة التعرّج الصوتي، التردد الزاوي w(t)=6000*t. احسب w عند t=1 ثانية و t=2 ثانية. وبعدين قول في أنهي وقت من الاثنين aliasing أرجح، وليه.",
      answer: "Given: w(t) = 6000*t.\n" +
          "Step 1 — w(1) = 6000 * 1 = 6000.\n" +
          "Step 2 — w(2) = 6000 * 2 = 12000.\n" +
          "Step 3 — Aliasing occurs when the signal's frequency is too high for the sampling rate to capture accurately. As t increases, w increases linearly, so the signal's frequency keeps rising while the sampling rate stays fixed.\n" +
          "Step 4 — Therefore, at t = 2 (w = 12000) aliasing is more likely than at t = 1 (w = 6000), because the higher frequency is more likely to exceed what the fixed sampling rate can represent.\n" +
          "Final answers: w(1) = 6000, w(2) = 12000, aliasing is more likely at t = 2.",
      tags: [
        "Computation",
        "Audio demo",
        "Aliasing",
      ],
      ref: "Lecture 5 — Aliasing in Audio slide",
      likely: "high",
    },
    {
      type: "essay",
      q: "16. (Computational) Among the three component signals f1(x) = sin(pi*x), f2(x) = sin(2*pi*x), and f4(x) = sin(4*pi*x), identify which one has the highest frequency and which one has the lowest frequency. Justify your answer.",
      translation: "(مسألة حسابية) من بين الإشارات الثلاثة f1=sin(pi*x)، f2=sin(2*pi*x)، f4=sin(4*pi*x)، حدّد أنهي واحد عنده أعلى تردد وأنهي أدنى تردد، مع التبرير.",
      answer: "Step 1 — Recall the general form sin(k*pi*x): the coefficient k determines the frequency. A larger k means more oscillations per unit of x, i.e. a higher frequency.\n" +
          "Step 2 — For f1, k = 1 → lowest frequency of the three.\n" +
          "Step 3 — For f2, k = 2 → middle frequency.\n" +
          "Step 4 — For f4, k = 4 → highest frequency of the three.\n" +
          "Final answers: f4 has the highest frequency; f1 has the lowest frequency. This is also why, in the original example, the smaller coefficient 0.5 was placed on f4 — the high-frequency component contributes less to the overall shape of the combined signal f(x).",
      tags: [
        "Computation",
        "Frequencies",
        "sin waves",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "medium",
    },
    {
      type: "essay",
      q: "17. (Computational) In f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), list the amplitude coefficient of each component and identify which component contributes the smallest amplitude. Explain what this means physically.",
      translation: "(مسألة حسابية) في f(x)=f1+0.75 f2+0.5 f4، اذكر معامل سعة كل مكوّن وحدّد أنهي فيهم بيساهم بأصغر سعة. واشرح معنى ذلك فيزيائيًا.",
      answer: "Step 1 — Coefficient of f1 = 1.\n" +
          "Step 2 — Coefficient of f2 = 0.75.\n" +
          "Step 3 — Coefficient of f4 = 0.5.\n" +
          "Step 4 — The smallest coefficient is 0.5, which belongs to f4 (the highest-frequency component).\n" +
          "Physical meaning: the highest-frequency component contributes the least to the combined signal. This is consistent with the general observation that in many natural signals, the higher the frequency, the smaller its amplitude — most of the signal's energy is concentrated in the low frequencies. In image terms, this corresponds to smooth regions dominating the picture while sharp edges (high frequencies) contribute a smaller portion of the overall content.",
      tags: [
        "Computation",
        "Amplitude",
        "Frequencies",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "medium",
    },
    {
      type: "essay",
      q: "18. (Computational) Using f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x) where f1(x)=sin(pi*x), f2(x)=sin(2*pi*x), f4(x)=sin(4*pi*x), compute f(0). Briefly explain the result.",
      translation: "(مسألة حسابية) بنفس التعريفات، احسب f(0) واشرح النتيجة باختصار.",
      answer: "Given: f(x) = f1(x) + 0.75*f2(x) + 0.5*f4(x), with x = 0.\n" +
          "Step 1 — f1(0) = sin(pi*0) = sin(0) = 0.\n" +
          "Step 2 — f2(0) = sin(2*pi*0) = sin(0) = 0.\n" +
          "Step 3 — f4(0) = sin(4*pi*0) = sin(0) = 0.\n" +
          "Step 4 — Combine: f(0) = 0 + 0.75*0 + 0.5*0 = 0.\n" +
          "Final answer: f(0) = 0.\n" +
          "Explanation: every sine wave passes through zero at x = 0, so any linear combination of sine waves also passes through zero at x = 0. This is a property of the choice of sin (rather than cos) basis — at the origin, all sine components vanish.",
      tags: [
        "Computation",
        "sin waves",
      ],
      ref: "Lecture 5 — 1D signal decomposition slide",
      likely: "medium",
    },
  ],
}
