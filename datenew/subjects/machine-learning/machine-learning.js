/* بيانات مادة: تعلم الالة (machine-learning)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/machine-learning/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "تعلم الالة",
  en: "Machine Learning",
  icon: "🤖",
  slug: "machine-learning",
  lectures: [
    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/machine-learning/lectures/lec-01.pdf", questions:[] } */
    {
      id: "machine-learning-lecture-01",
      t: "المحاضرة الأولى: مقدمة في تعلم الآلة وخوارزمية أقرب الجيران (kNN)",
      d: "مقدمة عن تعلم الآلة وأنواعه (Supervised / Unsupervised / Reinforcement)، تمثيل البيانات كمتجهات، وخوارزمية K-Nearest Neighbors مع اختيار k والـ validation والـ curse of dimensionality والـ normalization وتكلفة الحساب.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 1/lec01.pdf",
      pdf2: "/datenew/subjects/machine-learning/questions/Questions on each lecture/Machine-Learning-Lecture-01-Questions.pdf",
      // فئات محاضرات تعلم الآلة والتعرف على الأنماط (Machine Learning & Pattern Recognition)
      // المحاضرة الأولى: مقدمة في تعلم الآلة وخوارزمية الجيران الأقرب (Introduction and Nearest Neighbors)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات مرئية باللغة العربية توضح المفاهيم الأساسية لتعلم الآلة وخوارزمية الجيران الأقرب وتطبيقاتها.",
          links: [
            {
              t: "K Nearest Neighbors (KNN) Algorithm | شرح بالعربي",
              d: "شرح تفصيلي لخوارزمية الجيران الأقرب وآلية حساب المسافات والتصنيف بناءً على تصويت الأغلبية.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=tmzZPAikEy4",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية K-Nearest Neighbors (KNN) ببساطة للمبتدئين",
              d: "فيديو مبسط يشرح كيفية اختيار الجيران وأثر معامل K على دقة النموذج في التصنيف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=xTLW-hjcVnc",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية KNN في أقل من 6 دقائق",
              d: "ملخص سريع لأساسيات الخوارزمية وتطبيقها المباشر في مسائل التعلم الخاضع للإشراف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=yjNYPfWts0U",
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
            "مقاطع مرئية باللغة الإنجليزية تقدم شرحاً رياضياً وبصرياً ممتازاً لمفهوم KNN ولعنة الأبعاد.",
          links: [
            {
              t: "StatQuest: K-nearest neighbors, Clearly Explained",
              d: "شرح متكامل من قناة StatQuest يوضح عمل الخوارزمية وااختيار قيمة K والتعامل مع الميزات المختلفة.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=HVXime0nQeI",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "K-nearest Neighbors (KNN) in 3 min - Visually Explained",
              d: "توضيح بصري سريع لكيفية تشكيل حدود القرار وتحديد الأنماط في المساحات متعددة الأبعاد.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=gs9E7E0qOIc",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات وأدلة علمية تشرح الأساس الرياضي والتطبيقي لـ KNN ومقاييس المسافة ولعنة الأبعاد.",
          links: [
            {
              t: "Mathematical Explanation of K-Nearest Neighbour - GeeksforGeeks",
              d: "مرجع شامل يتناول الرياضيات المتقدمة لمقياس Distance Metric وكيفية اختيار K المناسبة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/mathematical-explanation-of-k-nearest-neighbour/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "How to Choose the Right Distance Metric in KNN - GeeksforGeeks",
              d: "مقالة تقارن بين مقاييس المسافات المختلفة مثل المسافة الإقليدية والمانهاتن والمانكوفسكي.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/how-to-choose-the-right-distance-metric-in-knn/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "How to Find The Optimal Value of K in KNN - GeeksforGeeks",
              d: "شرح عملي لطرق اختيار المعامل الفائق K باستخدام Cross-Validation وتجنب Overfitting.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/machine-learning/how-to-find-the-optimal-value-of-k-in-knn/",
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
            "أدوات تفاعلية ومستودعات برمجية لتجربة الخوارزمية وتصور حدود القرار تفاعلياً.",
          links: [
            {
              t: "Interactive K-Nearest Neighbors Visualizer",
              d: "أداة تفاعلية تجريبية لتحديد نقاط البيانات وتعديل قيمة K وملاحظة تغير حدود القرار بشكل مباشر.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.luseratech.com/knn-visual",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "K-Nearest Neighbors Tutorial with Scikit-Learn",
              d: "دليل برمجي لتطبيق KNN وتجهيز البيانات وتطبيع الميزات باستخدام مكتبة Scikit-Learn في بايثون.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://kevinzakka.github.io/2016/07/13/k-nearest-neighbor/",
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
          q: "1. According to Tom Mitchell's definition, a computer program is said to learn from experience E with respect to tasks T and performance measure P if:",
          options: [
            "its source code is rewritten by the programmer each time new data arrives",
            "its performance at tasks in T, as measured by P, improves with experience E",
            "it memorizes every training example exactly and reproduces it on request",
            "it follows a fixed set of rules that the programmer wrote before seeing any data",
          ],
          correct: 1,
          translation:
            "حسب تعريف Tom Mitchell، البرنامج بيتعلم من الخبرة E لما:",
          explanation:
            "التعريف بيربط التعلم بتحسّن الأداء P على المهام T مع زيادة الخبرة E. الحفظ الحرفي أو القواعد الثابتة مش بتمثل تحسّن مع الخبرة، وطول الكود ملوش علاقة بالأداء.",
          tags: ["Definition of Learning", "Tom Mitchell"],
          ref: "Lecture 01 — Slide 5",
        },
        {
          q: "2. Which of the following is given in the lecture as a reason to use a learning algorithm?",
          options: [
            "The correct behavior can easily be programmed by hand using a few rules",
            "Labeled data is never needed because the system ignores experience",
            "The goal is to avoid using any data and rely on fixed formulas",
            "The system must adapt to a changing environment, such as spam detection",
          ],
          correct: 3,
          translation:
            "أي من التالي مذكور في المحاضرة كسبب لاستخدام خوارزمية تعلّم؟",
          explanation:
            "من الأسباب المذكورة: صعوبة كتابة الحل يدويًا، وحاجة النظام للتكيّف مع بيئة متغيرة (مثل spam detection). لو الحل سهل يدويًا فمفيش داعي للتعلم، والتعلم محتاج بيانات أو خبرة.",
          tags: ["Why ML", "Spam Detection"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "3. In which type of machine learning does an agent interact with the world and learn to maximize a scalar reward signal?",
          options: [
            "Reinforcement learning",
            "Supervised learning",
            "Unsupervised learning",
            "Instance-based regression",
          ],
          correct: 0,
          translation:
            "في أي نوع من تعلم الآلة بيتفاعل الـ agent مع العالم ويتعلم يعظّم إشارة مكافأة رقمية؟",
          explanation:
            "الـ reinforcement learning هو اللي فيه agent وreward. الـ supervised محتاج labels صحيحة، والـ unsupervised مفيهوش labels وبيدور على أنماط.",
          tags: ["Types of ML", "Reinforcement Learning"],
          ref: "Lecture 01 — Slide 7",
        },
        {
          q: "4. In supervised learning, which is the training set composed of?",
          options: [
            "Inputs only, with no labels",
            "Only reward signals received from an environment",
            "Only the hyperparameters of the model",
            "Inputs together with their corresponding labels",
          ],
          correct: 3,
          translation:
            "في الـ supervised learning، مكوّنة من إيه مجموعة التدريب؟",
          explanation:
            "الـ supervised learning معناه إن عندنا مدخلات ومعاها labels (الإجابة الصحيحة). المدخلات بدون labels هي حالة unsupervised، والـ rewards هي reinforcement.",
          tags: ["Supervised Learning", "Training Set"],
          ref: "Lecture 01 — Slide 16",
        },
        {
          q: "5. In a regression problem, the target t is:",
          options: [
            "an element of a discrete set {1, ..., C}",
            "always a binary value 0 or 1",
            "always a vector of pixel values",
            "a real number, for example a stock price",
          ],
          correct: 3,
          translation: "في مسألة الـ regression، الـ target t بيكون:",
          explanation:
            "في الـ regression الـ t رقم حقيقي (زي سعر سهم). العنصر من مجموعة منفصلة {1..C} ده تعريف الـ classification.",
          tags: ["Regression", "Classification"],
          ref: "Lecture 01 — Slide 20",
        },
        {
          q: "6. Why is representing the input as a vector in R^d a good strategy?",
          options: [
            "Because it removes the need for any labels in supervised problems",
            "Because vectors are easy to manipulate and we can apply linear algebra",
            "Because it always reduces every data type to two dimensions",
            "Because it guarantees zero error on the training set for any model",
          ],
          correct: 1,
          translation: "ليه تمثيل المدخلات كمتجه في R^d استراتيجية كويسة؟",
          explanation:
            "المحاضرة بتقول إن المتجهات تمثيل ممتاز لأننا نقدر نستخدم الجبر الخطي. التمثيل مبيلغيش الـ labels ولا بيضمن خطأ صفر.",
          tags: ["Input Vectors", "Representation"],
          ref: "Lecture 01 — Slide 18",
        },
        {
          q: "7. Why does the lecture recommend vectorizing computations (for example with NumPy)?",
          options: [
            "Expressing them as matrix/vector operations exploits hardware efficiency and makes code cleaner",
            "It removes the need to derive the algorithm mathematically before coding",
            "It makes the training data larger so the model fits it better",
            "It is required for the model to have labels in supervised learning",
          ],
          correct: 0,
          translation:
            "ليه المحاضرة بتنصح بعمل vectorization للحسابات (مثلًا بـ NumPy)؟",
          explanation:
            "صياغة الحسابات كعمليات matrix/vector بتستغل كفاءة الهاردوير وبتخلي الكود أنضف وأسهل في القراءة. ملهاش علاقة بحجم البيانات ولا بالـ labels.",
          tags: ["NumPy", "Vectorization"],
          ref: "Lecture 01 — Slide 14",
        },
        {
          q: "8. What is the basic idea of the nearest neighbor method for classifying a novel input x?",
          options: [
            "Fit a straight line through all training points",
            "Average the labels of all training examples",
            "Find the nearest training input to x and copy its label",
            "Build a tree by splitting on features",
          ],
          correct: 2,
          translation:
            "إيه الفكرة الأساسية لطريقة أقرب جار (nearest neighbor) لتصنيف مدخل جديد x؟",
          explanation:
            "الفكرة إننا نلاقي أقرب مدخل في الـ training set وننسخ الـ label بتاعه. الخط المستقيم هو regression، والشجرة هي decision tree، والمتوسط الكلي بيتجاهل القرب.",
          tags: ["Nearest Neighbors"],
          ref: "Lecture 01 — Slide 21",
        },
        {
          q: "9. How does the lecture formalize 'nearest' in nearest neighbors?",
          options: [
            "Using Euclidean distance, although other choices are possible",
            "Using Manhattan distance only, with no other choices allowed",
            "Using Hamming distance only, with no other choices allowed",
            "Using the number of shared labels between two examples",
          ],
          correct: 0,
          translation: "إزاي المحاضرة بتعرّف كلمة 'أقرب' في nearest neighbors؟",
          explanation:
            "المحاضرة بتستخدم المسافة الإقليدية (Euclidean) وتذكر إن في اختيارات تانية ممكنة، فمفيش مسافة واحدة بس مفروضة (Manhattan أو Hamming).",
          tags: ["Euclidean Distance", "kNN"],
          ref: "Lecture 01 — Slide 21",
        },
        {
          q: "10. What is a decision boundary in a classification task?",
          options: [
            "A line or surface that divides different groups in the classification task",
            "The training example that has the largest numeric label value",
            "The set of all misclassified test examples in the dataset",
            "The validation set that is used to tune the value of k",
          ],
          correct: 0,
          translation: "إيه هو الـ decision boundary في مسألة تصنيف؟",
          explanation:
            "الـ decision boundary خط أو سطح بيفصل المجموعات (classes) المختلفة وبيوضح أي منطقة تنتمي لأي class.",
          tags: ["Decision Boundary"],
          ref: "Lecture 01 — Slide 22",
        },
        {
          q: "11. What is a main weakness of the 1-nearest-neighbor classifier?",
          options: [
            "It cannot be applied to numeric features such as pixel values",
            "It requires a very long training phase before predicting",
            "It is sensitive to noise or mislabeled data (class noise)",
            "It always underfits the data regardless of the labels",
          ],
          correct: 2,
          translation: "إيه نقطة الضعف الأساسية في 1-nearest-neighbor؟",
          explanation:
            "لأنه بينسخ label أقرب نقطة بس، فلو النقطة دي غلط أو فيها noise التصنيف هيغلط. وهو غالبًا بيعمل overfit مش underfit، ومفيهوش مرحلة تدريب طويلة.",
          tags: ["Nearest Neighbors", "Class Noise"],
          ref: "Lecture 01 — Slide 23",
        },
        {
          q: "12. What is the proposed solution to the noise sensitivity of nearest neighbors?",
          options: [
            "Smooth the decision by having the k nearest neighbors vote",
            "Use only the single nearest neighbor with a larger weight",
            "Remove all training points that are far from x",
            "Double the number of dimensions",
          ],
          correct: 0,
          translation: "إيه الحل المقترح لحساسية nearest neighbors للـ noise؟",
          explanation:
            "الحل إن k جيران يصوّتوا فبنعمل smoothing، فتأثير نقطة واحدة غلط بيقل. الاعتماد على جار واحد بس هو أصل المشكلة.",
          tags: ["kNN", "Voting"],
          ref: "Lecture 01 — Slide 24",
        },
        {
          q: "13. What is the classification output of the kNN algorithm?",
          options: [
            "The majority class among the k examples closest to the test instance",
            "The class of the farthest training example in the set",
            "The mean of the k distances to the test instance",
            "The class that has the fewest examples among the neighbors",
          ],
          correct: 0,
          translation: "إيه ناتج التصنيف في خوارزمية kNN؟",
          explanation:
            "الخوارزمية بتلاقي k أمثلة الأقرب للـ test instance وبتطلع الـ majority class بينهم.",
          tags: ["kNN Algorithm"],
          ref: "Lecture 01 — Slide 25",
        },
        {
          q: "14. What is the risk of choosing a very small k?",
          options: [
            "Underfitting: the model averages over too many examples",
            "The algorithm cannot produce any prediction for new inputs",
            "Overfitting: it becomes sensitive to random abnormalities in the training data",
            "The memory requirement becomes zero because nothing is stored",
          ],
          correct: 2,
          translation: "إيه خطر اختيار k صغيرة جدًا؟",
          explanation:
            "k الصغيرة بتلقط الأنماط الدقيقة لكن ممكن تعمل overfit وتتأثر بالقيم الشاذة العشوائية. الـ underfitting هو مشكلة k الكبيرة.",
          tags: ["Choosing k", "Overfitting"],
          ref: "Lecture 01 — Slide 31",
        },
        {
          q: "15. What is the risk of choosing a very large k?",
          options: [
            "Overfitting to random abnormalities in the training data",
            "Underfitting: it may fail to capture important regularities",
            "The model becomes sensitive to every single noisy point",
            "The algorithm needs the labels to be removed from the data",
          ],
          correct: 1,
          translation: "إيه خطر اختيار k كبيرة جدًا؟",
          explanation:
            "k الكبيرة بتخلي التنبؤ مستقر لأنه بيتوسّط على أمثلة كتير، لكن ممكن تفوّت أنماط مهمة فيحصل underfitting.",
          tags: ["Choosing k", "Underfitting"],
          ref: "Lecture 01 — Slide 31",
        },
        {
          q: "16. Compared with k = 1, the decision boundary of kNN with k = 15 (shown in the figures) is:",
          options: [
            "more jagged and more complex",
            "exactly identical",
            "undefined for two classes",
            "smoother and less complex",
          ],
          correct: 3,
          translation:
            "مقارنةً بـ k = 1، الـ decision boundary في kNN لما k = 15 بيكون:",
          explanation:
            "زيادة k بتعمل averaging على جيران أكتر فالحدود بتبقى أنعم وأبسط. k = 1 بيدي حدود متعرجة بتتبع كل نقطة.",
          tags: ["Decision Boundary", "Choosing k"],
          ref: "Lecture 01 — Slides 26-27 and 31",
        },
        {
          q: "17. How can we measure the generalization error of a model?",
          options: [
            "By computing the error rate on the training set only",
            "By counting the number of hyperparameters in the model",
            "By measuring the error rate on new examples (a test set)",
            "By measuring the training time of the algorithm",
          ],
          correct: 2,
          translation: "إزاي نقيس generalization error لنموذج؟",
          explanation:
            "الـ generalization error هو نسبة الخطأ على أمثلة جديدة لم يشوفها النموذج، وبنقيسه بـ test set. الخطأ على الـ training set ممكن يكون صغير جدًا من غير ما النموذج يعمم.",
          tags: ["Generalization", "Test Set"],
          ref: "Lecture 01 — Slide 32",
        },
        {
          q: "18. Why is k in kNN called a hyperparameter?",
          options: [
            "It is learned automatically by gradient descent during training",
            "It cannot be fit as part of the learning algorithm itself",
            "It is the label of the nearest training point",
            "It is one of the input features of each example",
          ],
          correct: 1,
          translation: "ليه k في kNN بتتسمى hyperparameter؟",
          explanation:
            "الـ hyperparameter قيمة مبنقدرش نتعلمها كجزء من خوارزمية التعلّم نفسها، فبنضبطها بـ validation set. مش feature ولا label.",
          tags: ["Hyperparameter"],
          ref: "Lecture 01 — Slide 33",
        },
        {
          q: "19. What is the validation set used for?",
          options: [
            "Tuning hyperparameters such as k",
            "Measuring the final generalization performance",
            "Storing the training data in memory",
            "Computing the Euclidean distances",
          ],
          correct: 0,
          translation: "الـ validation set بيُستخدم في إيه؟",
          explanation:
            "الـ validation set بنضبط بيه الـ hyperparameters زي k. أما قياس الأداء النهائي فده دور الـ test set اللي بيُستخدم في الآخر بس.",
          tags: ["Validation Set", "Test Set"],
          ref: "Lecture 01 — Slide 33",
        },
        {
          q: "20. What happens to the volume of the feature space as the number of dimensions increases?",
          options: [
            "It shrinks, so the data becomes denser",
            "It grows exponentially, so the data becomes sparse",
            "It stays constant while the points move closer",
            "It grows linearly and the data stays dense",
          ],
          correct: 1,
          translation:
            "إيه اللي بيحصل لحجم فراغ الـ features لما عدد الأبعاد يزيد؟",
          explanation:
            "الحجم بيزيد أُسّيًا فالبيانات بتبقى متباعدة (sparse). ده أساس الـ curse of dimensionality وبيأثر على kNN.",
          tags: ["Curse of Dimensionality", "Sparsity"],
          ref: "Lecture 01 — Slide 34",
        },
        {
          q: "21. Why does high dimensionality hurt nearest neighbors?",
          options: [
            "Distances become exactly zero between all pairs of points in the set",
            "The nearest neighbor always turns out to be the farthest point",
            "The labels of the training points disappear from the dataset",
            "All points appear roughly equidistant, so picking a label is hard",
          ],
          correct: 3,
          translation: "ليه الأبعاد العالية بتضر nearest neighbors؟",
          explanation:
            "في الأبعاد العالية المسافات بين أي نقطتين بتقارب بعض فالمقارنة بالقرب تفقد معناها. المسافات مش بتبقى صفر ولا بتتعكس.",
          tags: ["Curse of Dimensionality", "Equidistance"],
          ref: "Lecture 01 — Slide 36",
        },
        {
          q: "22. What is the simple fix proposed for the sensitivity of nearest neighbors to feature ranges?",
          options: [
            "Set k equal to the total number of training examples available",
            "Delete every feature except the first one in the vector",
            "Normalize each dimension to have zero mean and unit variance",
            "Use only binary labels for all of the examples",
          ],
          correct: 2,
          translation:
            "إيه الحل البسيط المقترح لحساسية nearest neighbors لمدى قيم الـ features؟",
          explanation:
            "بنحسب mean وstandard deviation لكل بُعد ونعمل x~ = (x - mu) / sigma. المحاضرة بتحذّر إن في بعض المسائل الـ scale بيكون مهم.",
          tags: ["Normalization"],
          ref: "Lecture 01 — Slide 37",
        },
        {
          q: "23. How many computations does naive kNN need at training time?",
          options: [
            "O(ND) for computing all pairwise distances",
            "Zero, since it only stores the data",
            "O(N log N) for sorting the training set",
            "O(N^2) for building a distance matrix",
          ],
          correct: 1,
          translation: "كام عملية حسابية بتحتاجها kNN البسيطة وقت التدريب؟",
          explanation:
            "kNN بتخزّن البيانات بس، فتكلفة التدريب صفر. التكلفة كلها وقت الاختبار لكل query: O(ND) للمسافات وO(N log N) للترتيب.",
          tags: ["Computational Cost"],
          ref: "Lecture 01 — Slide 38",
        },
        {
          q: "24. In the digit classification example, what error did KNN with shape contexts achieve on MNIST compared with Euclidean KNN?",
          options: [
            "3% error versus 0.63% error",
            "0% error versus 3% error",
            "10% error versus 5% error",
            "0.63% error versus 3% error",
          ],
          correct: 3,
          translation:
            "في مثال تصنيف الأرقام، إيه نسبة الخطأ اللي حققتها KNN باستخدام shape contexts على MNIST مقارنةً بـ Euclidean KNN؟",
          explanation:
            "الـ shape contexts حققت 0.63% مقابل 3% للـ Euclidean KNN، وده بيوضح إن مقياس تشابه كويس بيحسّن kNN كتير. الاختيار العكسي بيقلب الأرقام.",
          tags: ["Shape Contexts", "MNIST"],
          ref: "Lecture 01 — Slide 40",
        },
        {
          q: "25. What was special about the '80 Million Tiny Images' dataset?",
          options: [
            "It was a small dataset of high-resolution medical images for diagnosis",
            "It contained only audio waveforms recorded from speakers",
            "The first extremely large image dataset: color images scaled down to 32 x 32",
            "It was a dataset of only 80 labeled images used for testing",
          ],
          correct: 2,
          translation: "إيه المميز في dataset اسمها '80 Million Tiny Images'؟",
          explanation:
            "كانت أول dataset ضخمة جدًا للصور، مكوّنة من صور ملونة مصغّرة لـ 32 x 32، ومع البيانات الكبيرة بتلاقي matches دلالية أحسن (مع مقياس تشابه مختار بعناية).",
          tags: ["80 Million Tiny Images", "Large Datasets"],
          ref: "Lecture 01 — Slide 41",
        },
        {
          type: "essay",
          q: "1. Define machine learning and explain why we may want to use a learning algorithm instead of hand-written rules.",
          translation:
            "عرّف تعلم الآلة واشرح ليه ممكن نستخدم خوارزمية تعلّم بدل القواعد المكتوبة يدويًا.",
          answer:
            "Machine learning: programming an algorithm to automatically learn from data or from experience. Tom Mitchell: a program learns from experience E for tasks T with performance P if its performance on T, measured by P, improves with E.\n" +
            "Reasons to use learning:\n" +
            "- Hard to code a solution by hand (e.g., vision, speech).\n" +
            "- The system must adapt to a changing environment (e.g., spam detection).\n" +
            "- We want the system to perform better than the human programmers.\n" +
            "- Privacy/fairness (e.g., ranking search results).",
          tags: ["Definition of ML", "Why ML"],
          ref: "Lecture 01 — Slides 5-6",
        },
        {
          type: "essay",
          q: "2. Compare supervised, unsupervised and reinforcement learning, and mention application areas of machine learning from the lecture.",
          translation:
            "قارن بين supervised وunsupervised وreinforcement learning واذكر مجالات تطبيق ML من المحاضرة.",
          answer:
            "Supervised learning: we have labeled examples of the correct behavior.\n" +
            "Unsupervised learning: no labeled examples; we look for interesting patterns in the data.\n" +
            "Reinforcement learning: an agent interacts with the world and learns to maximize a scalar reward signal.\n" +
            "Applications: computer vision (object detection, semantic segmentation, pose estimation), natural language processing (machine translation, sentiment analysis, spam filtering, chatbots), and e-commerce/recommender systems (Amazon, Netflix).",
          tags: ["Types of ML", "Applications"],
          ref: "Lecture 01 — Slides 7-10",
        },
        {
          type: "essay",
          q: "3. Describe the supervised learning setup: inputs, labels, input vectors, and the difference between regression and classification.",
          translation:
            "اشرح إعداد الـ supervised learning: المدخلات والـ labels والـ input vectors والفرق بين regression وclassification.",
          answer:
            "We are given a training set of inputs and corresponding labels (e.g., image -> object category, audio -> text).\n" +
            "Inputs of any type (images, text, audio, transactions) are represented as an input vector x in R^d; vectors allow linear algebra. We can use raw pixels, but a vector of meaningful features is much better.\n" +
            "The training set is {(x(1), t(1)), ..., (x(N), t(N))}.\n" +
            "Regression: t is a real number (e.g., stock price).\n" +
            "Classification: t is an element of a discrete set {1, ..., C}.",
          tags: ["Supervised Learning", "Input Vectors"],
          ref: "Lecture 01 — Slides 16-20",
        },
        {
          type: "essay",
          q: "4. Explain the nearest neighbor and k-nearest neighbors algorithms, including how the kNN prediction is made.",
          translation:
            "اشرح خوارزميتي nearest neighbor وk-nearest neighbors وإزاي بيتعمل التنبؤ في kNN.",
          answer:
            "Nearest neighbor: given a novel input x, find the nearest input vector in the training set D_tr and copy its label. 'Nearest' is formalized with Euclidean distance (other choices possible).\n" +
            "Problem: it is sensitive to noise or mislabeled data (class noise).\n" +
            "Solution (kNN): smooth by letting the k nearest neighbors vote.\n" +
            "Algorithm: (1) find the k examples in D_tr closest to the test instance x; (2) the classification output is the majority class among them.",
          tags: ["Nearest Neighbors", "kNN"],
          ref: "Lecture 01 — Slides 21-25",
        },
        {
          type: "essay",
          q: "5. Discuss the trade-off in choosing k in kNN, and what the decision boundaries for k = 1 and k = 15 show.",
          translation:
            "ناقش الـ trade-off في اختيار k في kNN وإيه اللي بتوضحه حدود القرار لـ k = 1 وk = 15.",
          answer:
            "Small k: good at capturing fine-grained patterns, but may overfit, i.e., be sensitive to random abnormalities in the training data. The boundary for k = 1 follows individual points and is jagged.\n" +
            "Large k: makes stable predictions by averaging over many examples, but may underfit, i.e., fail to capture important regularities. The boundary for k = 15 is smoother.\n" +
            "The optimal k depends on the number of data points n. We control the complexity of the model by varying k.",
          tags: ["Choosing k", "Overfitting", "Underfitting"],
          ref: "Lecture 01 — Slides 26-27 and 31",
        },
        {
          type: "essay",
          q: "6. What is a hyperparameter? Explain the roles of the validation set and the test set and how generalization is measured.",
          translation:
            "إيه هو الـ hyperparameter؟ اشرح دور الـ validation set والـ test set وإزاي بنقيس الـ generalization.",
          answer:
            "We want the algorithm to generalize to data it has not seen before. Generalization error = error rate on new examples, measured with a test set.\n" +
            "k is a hyperparameter: something we cannot fit as part of the learning algorithm itself.\n" +
            "We tune hyperparameters using a validation set.\n" +
            "The test set is used only at the very end, to measure the generalization performance of the final configuration.",
          tags: ["Hyperparameter", "Validation Set", "Test Set"],
          ref: "Lecture 01 — Slides 32-33",
        },
        {
          type: "essay",
          q: "7. Explain the curse of dimensionality and its impact on the performance of kNN.",
          translation: "اشرح الـ curse of dimensionality وتأثيره على أداء kNN.",
          answer:
            "The curse of dimensionality refers to phenomena that arise with high-dimensional data. As the number of dimensions increases, the volume of the space grows exponentially, so the data becomes sparse (points are farther apart).\n" +
            "Consequences: increased computational complexity, overfitting, and deteriorating performance of some algorithms.\n" +
            "For kNN: it assumes that points close in input space have close (the same) outputs. In high dimensions, distances become more uniform and all points appear roughly equidistant, so the notion of distance loses meaning and it is hard to select the label for a test point.",
          tags: ["Curse of Dimensionality", "kNN"],
          ref: "Lecture 01 — Slides 34-36",
        },
        {
          type: "essay",
          q: "8. Why and how do we normalize features in nearest neighbors? Is normalization always appropriate?",
          translation:
            "ليه وإزاي بنعمل normalization للـ features في nearest neighbors؟ وهل دايمًا مناسب؟",
          answer:
            "Nearest neighbors is sensitive to the ranges of different features; often the units are arbitrary, so a feature with a large range dominates the distance.\n" +
            "Fix: normalize each dimension to zero mean and unit variance. Compute the mean mu_j and standard deviation sigma_j, and take x~_j = (x_j - mu_j) / sigma_j.\n" +
            "Caution: depending on the problem, the scale might be important, so normalization is not always appropriate.",
          tags: ["Normalization", "Feature Scaling"],
          ref: "Lecture 01 — Slide 37",
        },
        {
          type: "essay",
          q: "9. Analyze the computational cost of naive kNN at training time and test time, and mention its memory requirement.",
          translation:
            "حلّل تكلفة الحساب في kNN البسيطة وقت التدريب ووقت الاختبار واذكر متطلبات الذاكرة.",
          answer:
            "Training time: 0 computations (it only stores the data).\n" +
            "Test time, per query (naive algorithm): compute D-dimensional Euclidean distances to N data points: O(ND); then sort the distances: O(N log N).\n" +
            "This is repeated for every query, which is very expensive by the standards of a learning algorithm. It also needs to store the entire dataset in memory.\n" +
            "Much work has gone into algorithms and data structures for efficient nearest neighbors in high dimensions or with large datasets.",
          tags: ["Computational Cost", "kNN"],
          ref: "Lecture 01 — Slide 38",
        },
        {
          type: "essay",
          q: "10. Why does the lecture derive algorithms by hand although frameworks such as PyTorch and TensorFlow do much of the work? Summarize the conclusions about kNN.",
          translation:
            "ليه المحاضرة بتشتق الخوارزميات يدويًا رغم إن frameworks زي PyTorch وTensorFlow بتعمل شغل كتير؟ ولخّص الخلاصة عن kNN.",
          answer:
            "Frameworks (PyTorch, TensorFlow, JAX) provide automatic differentiation, computation graphs, algorithm libraries and GPU support. We still derive things by hand so we know what to do if something goes wrong: debugging learning algorithms requires understanding what goes on beneath the hood.\n" +
            "Conclusions on kNN: a simple algorithm that does all its work at test time (in a sense, no learning); the complexity can be controlled by varying k; it suffers from the curse of dimensionality. The next topic is parametric models, which learn a compact summary of the data.",
          tags: ["Frameworks", "kNN Conclusions"],
          ref: "Lecture 01 — Slides 15 and 43",
        },
        {
          type: "essay",
          q: "11. Calculation: Compute the Euclidean distance between the points p = (1, 2, 3) and q = (4, 6, 3).",
          translation:
            "مسألة حسابية: احسب المسافة الإقليدية بين النقطتين p = (1, 2, 3) وq = (4, 6, 3).",
          answer:
            "Formula: d(p, q) = sqrt( sum_i (p_i - q_i)^2 ).\n" +
            "Differences: (1-4) = -3, (2-6) = -4, (3-3) = 0.\n" +
            "Squares: 9 + 16 + 0 = 25.\n" +
            "d = sqrt(25) = 5.",
          tags: ["Euclidean Distance"],
          ref: "Lecture 01 — Slide 21",
        },
        {
          type: "essay",
          q: "12. Calculation: Using the first example in the lecture, x = [4, 5, 10, 4, 3, 11, 14, 9, 8, 10, 12], y = [21, 19, 24, 17, 16, 25, 24, 23, 22, 21, 21], classes = [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1], classify the new point (8, 21) with k = 1, k = 3 and k = 5.",
          translation:
            "مسألة حسابية: باستخدام المثال الأول في المحاضرة، صنّف النقطة الجديدة (8, 21) بـ k = 1 وk = 3 وk = 5.",
          answer:
            "Euclidean distances from (8, 21), sorted from nearest:\n" +
            "(8, 22) class 0: d = 1.00\n" +
            "(10, 21) class 1: d = 2.00\n" +
            "(9, 23) class 1: d = sqrt(1 + 4) = 2.24\n" +
            "(5, 19) class 0: d = sqrt(9 + 4) = 3.61\n" +
            "(10, 24) class 1: d = sqrt(4 + 9) = 3.61\n" +
            "(4, 21) class 0 and (12, 21) class 1: d = 4.00\n" +
            "k = 1: nearest neighbor is class 0, so predicted class = 0.\n" +
            "k = 3: neighbors are classes 0, 1, 1, majority = 1.\n" +
            "k = 5: neighbors are classes 0, 1, 1, 0, 1 (three of class 1 versus two of class 0), majority = 1.\n" +
            "Note: the prediction changes from 0 to 1 as k grows, which shows the effect of k.",
          tags: ["kNN", "Worked Example"],
          ref: "Lecture 01 — Slide 28",
        },
        {
          type: "essay",
          q: "13. Calculation: Using the second example in the lecture (heights x and weights y), classify the new point (170, 55) with k = 3.",
          translation:
            "مسألة حسابية: باستخدام المثال الثاني في المحاضرة، صنّف النقطة الجديدة (170, 55) بـ k = 3.",
          answer:
            "Data: x = [167, 182, 176, 173, 172, 174, 169, 173, 170], y = [51, 62, 69, 64, 65, 56, 58, 57, 55], classes = [0, 1, 1, 1, 1, 0, 1, 1, 1].\n" +
            "Distances to (170, 55): (170,55): 0 (class 1); (169,58): sqrt(1+9) = 3.16 (class 1); (173,57): sqrt(9+4) = 3.61 (class 1); (174,56): sqrt(16+1) = 4.12 (class 0); (167,51): 5.00 (class 0).\n" +
            "3 nearest = class 1, class 1, class 1.\n" +
            "Majority vote: predicted class = 1.",
          tags: ["kNN", "Worked Example"],
          ref: "Lecture 01 — Slide 30",
        },
        {
          type: "essay",
          q: "14. Calculation: Normalize the feature values [2, 4, 6, 8] to zero mean and unit variance (use the population standard deviation).",
          translation:
            "مسألة حسابية: اعمل normalization للقيم [2, 4, 6, 8] لتبقى zero mean وunit variance (استخدم الانحراف المعياري للمجتمع).",
          answer:
            "Formula: x~ = (x - mu) / sigma.\n" +
            "mu = (2 + 4 + 6 + 8) / 4 = 5.\n" +
            "Variance = ((-3)^2 + (-1)^2 + 1^2 + 3^2) / 4 = 20 / 4 = 5, so sigma = sqrt(5) = 2.236.\n" +
            "Normalized values: (2-5)/2.236 = -1.342; (4-5)/2.236 = -0.447; (6-5)/2.236 = 0.447; (8-5)/2.236 = 1.342.",
          tags: ["Normalization"],
          ref: "Lecture 01 — Slide 37",
        },
        {
          type: "essay",
          q: "15. Calculation: A naive kNN classifier has N = 10,000 training points with D = 50 features. Estimate the number of operations for one query and for 200 queries, and the training cost.",
          translation:
            "مسألة حسابية: مصنّف kNN بسيط عنده N = 10,000 نقطة تدريب وD = 50 feature. قدّر عدد العمليات لـ query واحد ولـ 200 query وتكلفة التدريب.",
          answer:
            "Training cost: 0 (only stores the data).\n" +
            "Distances per query: O(ND) = 10,000 x 50 = 500,000.\n" +
            "Sorting per query: O(N log N) = 10,000 x log2(10,000) = 10,000 x 13.29 ≈ 132,877.\n" +
            "Total per query ≈ 500,000 + 132,877 ≈ 632,877 operations.\n" +
            "For 200 queries: 200 x 632,877 ≈ 1.27 x 10^8 operations.\n" +
            "The entire dataset (10,000 x 50 values) must also be kept in memory.",
          tags: ["Computational Cost"],
          ref: "Lecture 01 — Slide 38",
        },
      ],
    },
    {
      id: "machine-learning-lecture-02",
      t: "المحاضرة الثانية: شجرة القرار (Decision Trees) وتحليل الـ Bias-Variance",
      d: "بناء Decision Trees بطريقة greedy، الـ entropy والـ information gain وقواعد الـ conditional entropy، مثال Play Tennis، مقارنة الشجرة بـ kNN، الـ ensembles، وتحليل Bias-Variance والـ Bayes error.",
      pdf: "datenew/subjects/machine-learning/lectures/Lec 2/lec02.pdf",
      pdf2: "datenew/subjects/machine-learning/questions/Questions on each lecture/Machine-Learning-Lecture-02-Questions.pdf",
      // المحاضرة الثانية: أشجار القرار وتفكيك الانحياز والتباين (Decision Trees and Bias-Variance Decomposition)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "مقاطع تعليمية بالعربية تشرح بناء أشجار القرار وحساب الإنتروبيا وكسب المعلومات وتفكيك الخطأ.",
          links: [
            {
              t: "شرح خوارزمية Decision Tree في تعلم الآلة بأسلوب سهل",
              d: "شرح تفصيلي لمفهوم شجرة القرار وكيفية اختيار الميزات وتقسيم البيانات بناءً على كسب المعلومات.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=G2AJBYnCsc0",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Decision Tree (Entropy Function and Information Gain) شرح عربي",
              d: "توضيح شامل لدالة Entropy وكيفية حساب Information Gain بالتفصيل لبناء شجرة قرار دقيقة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=oESGP84jr80",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Decision Tree - Classification | شجرة القرارات للتصنيف",
              d: "عرض متكامل لمبادئ التصنيف باستخدام أشجار القرار ودورها في معالجة البيانات المتنوعة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=PIOXA37gyzA",
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
            "دروس عالمية موثوقة تبسط بناء أشجار القرار والأسس النظرية للإنتروبيا وتوازن Bias-Variance.",
          links: [
            {
              t: "Decision and Classification Trees, Clearly Explained!!!",
              d: "شرح مبسط وواضح من StatQuest لكيفية بناء أشجار القرار والتصنيف واستخدام المقاييس المختلفة للنقاء.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=_L39rN6gz7Y",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Stanford CS229: Decision Trees and Ensemble Methods",
              d: "محاضرة جامعة ستانفورد الشاملة حول أشجار القرار والإنتروبيا ومقدمة لطرق التجميع Ensembles.",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=r7T-aT8f9X4",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "م مواقع ومراجع",
          icon: "📚",
          description:
            "مقالات وأبحاث توثق الخوارزميات الحثية لأشجار القرار وتقسيم المساحة وتحليل التباين والانحياز.",
          links: [
            {
              t: "Decision Tree Algorithm in Machine Learning - GeeksforGeeks",
              d: "دليل مقالي شامل يغطي كيفية بناء أشجار القرار وتطبيقاتها في التصنيف والانحدار مع المبادئ الرياضية.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/decision-tree/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Bias-Variance Tradeoff in Machine Learning - GeeksforGeeks",
              d: "مقالة تشرح التفصيل الرياضي لمكونات الخطأ المتوقع (Bias, Variance, Bayes Error) وتأثيرها على الأداء.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/ml-bias-variance-tradeoff/",
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
            "أدوات تفاعلية ومكتبات برمجية لتصور تفكيك الأشجار ومحاكاة حدود القرار في الفضاء.",
          links: [
            {
              t: "dtreeviz: Decision Tree Visualization Library",
              d: "مكتبة بايثون احترافية لتصور وتحليل هيكل شجرة القرار وتوزيع البيانات داخل كل عقدة بشكل تفاعلي.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://github.com/parrt/dtreeviz",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Interactive Decision Tree Builder & Visualizer",
              d: "أداة تفاعلية مستندة إلى الويب لبناء شجرة القرار ومتابعة عملية التقسيم التدريجي لمساحة الميزات.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://ai.williamtheisen.com/",
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
          q: "1. In a decision tree, what do the internal nodes and the leaf nodes represent?",
          options: [
            "Internal nodes store predictions; leaf nodes test a feature",
            "Internal nodes test a feature; leaf nodes are the outputs (predictions)",
            "Internal nodes store the training labels; leaf nodes store hyperparameters",
            "Both internal and leaf nodes only compute distances",
          ],
          correct: 1,
          translation:
            "في الـ decision tree، إيه اللي بتمثله الـ internal nodes والـ leaf nodes؟",
          explanation:
            "الـ internal node بتختبر feature والتفرّع بيعتمد على قيمته، أما الـ leaf node فهي المخرجات (التنبؤات). العكس غلط، والمسافات من kNN مش من الشجرة.",
          tags: ["Decision Trees", "Tree Structure"],
          ref: "Lecture 02 — Slide 7",
        },
        {
          q: "2. How are continuous features split in a decision tree?",
          options: [
            "By creating one branch for every distinct value of the feature",
            "By computing the Euclidean distance to the nearest leaf",
            "By removing the feature from the data before splitting",
            "By checking whether the feature is greater than or less than some threshold",
          ],
          correct: 3,
          translation:
            "إزاي بيتم تقسيم الـ continuous features في الـ decision tree؟",
          explanation:
            "الـ continuous feature بنقارنها بـ threshold (أكبر أو أصغر)، وبكده الـ decision boundary بتتكوّن من مستويات موازية للمحاور (axis-aligned). فرع لكل قيمة ده بيناسب الـ discrete features.",
          tags: ["Continuous Features", "Threshold"],
          ref: "Lecture 02 — Slide 6",
        },
        {
          q: "3. In a regression tree, how is the leaf value y_m typically set?",
          options: [
            "To the most common target value in the region",
            "To the mean of the target values in the region",
            "To the largest target value in the region",
            "To the number of examples in the region",
          ],
          correct: 1,
          translation:
            "في الـ regression tree، إزاي بتتحدد قيمة الـ leaf وهي y_m عادةً؟",
          explanation:
            "الـ regression tree بتديّ مخرجات مستمرة، فقيمة الـ leaf هي متوسط الـ targets في المنطقة. أما أكثر قيمة شيوعًا فهي للـ classification tree.",
          tags: ["Regression Tree", "Leaf Value"],
          ref: "Lecture 02 — Slide 10",
        },
        {
          q: "4. What does each path from the root to a leaf define in a decision tree?",
          options: [
            "A region R_m of the input space",
            "A single training example",
            "A new hyperparameter",
            "A probability distribution over all features",
          ],
          correct: 0,
          translation:
            "إيه اللي بيحدده كل مسار من الـ root لحد leaf في الـ decision tree؟",
          explanation:
            "كل مسار بيحدد region R_m في فراغ المدخلات، والأمثلة اللي بتقع فيها هي اللي بتحدد قيمة الـ leaf.",
          tags: ["Decision Trees", "Regions"],
          ref: "Lecture 02 — Slide 10",
        },
        {
          q: "5. How are discrete features split in a decision tree?",
          options: [
            "By a single numeric threshold chosen on the feature",
            "By averaging the values of the feature over all examples",
            "Into a partition of the possible values of the feature",
            "By sorting the examples by their labels",
          ],
          correct: 2,
          translation:
            "إزاي بنقسّم الـ discrete features في الـ decision tree؟",
          explanation:
            "الـ discrete feature بنقسّم قيمها الممكنة إلى partition (مجموعات)، زي Outlook = {Sunny, Overcast, Rain}. الـ threshold الرقمي للـ continuous.",
          tags: ["Discrete Features", "Partition"],
          ref: "Lecture 02 — Slide 12",
        },
        {
          q: "6. What does the lecture say about constructing a tree with one leaf per training point?",
          options: [
            "It is always possible, but it probably will not generalize",
            "It is impossible for most real datasets with many features",
            "It guarantees the best possible test performance",
            "It is only possible for regression problems",
          ],
          correct: 0,
          translation:
            "إيه اللي بتقوله المحاضرة عن بناء شجرة فيها leaf لكل نقطة تدريب؟",
          explanation:
            "الـ decision trees universal function approximators، فنقدر دايمًا نبني شجرة بـ leaf لكل مثال، لكنها غالبًا overfit ومش هتعمم.",
          tags: ["Universal Approximator", "Overfitting"],
          ref: "Lecture 02 — Slide 13",
        },
        {
          q: "7. What is the computational complexity class of finding the smallest decision tree that correctly classifies a training set?",
          options: [
            "Solvable in linear time",
            "NP-complete",
            "Solvable in logarithmic time",
            "Solvable by one pass of gradient descent",
          ],
          correct: 1,
          translation:
            "ما هو تصنيف التعقيد الحسابي لإيجاد أصغر decision tree يصنف الـ training set صح؟",
          explanation:
            "إيجاد أصغر شجرة NP-complete، ولذلك بنستخدم greedy heuristic بدل البحث عن الحل الأمثل.",
          tags: ["NP-Complete", "Decision Trees"],
          ref: "Lecture 02 — Slide 13",
        },
        {
          q: "8. Which strategy is used to construct a useful decision tree in practice?",
          options: [
            "A greedy heuristic: pick the split that most reduces a loss, then recurse on the subpartitions",
            "An exhaustive search over every possible tree for the given data",
            "A single split on a randomly chosen feature, with no recursion",
            "Averaging the labels of all training points to form one prediction",
          ],
          correct: 0,
          translation:
            "أي استراتيجية بنستخدمها لبناء decision tree مفيدة عمليًا؟",
          explanation:
            "بنستخدم greedy heuristic: نختار الـ feature والـ split اللي بيقلل الـ loss أكتر، وبعدين نكرر على الأجزاء. البحث الشامل مكلف لأن المشكلة NP-complete.",
          tags: ["Greedy Heuristic", "Loss"],
          ref: "Lecture 02 — Slide 14",
        },
        {
          q: "9. Which leaf node has the highest uncertainty in its prediction?",
          options: [
            "A leaf in which all examples have the same class",
            "A leaf in which 9 of the 10 examples are oranges",
            "A leaf in which each class has the same number of examples",
            "A leaf whose entropy is exactly zero",
          ],
          correct: 2,
          translation: "أي leaf node بيكون عدم اليقين في تنبؤه أعلى؟",
          explanation:
            "لو كل class ليه نفس عدد الأمثلة في الـ leaf فعدم اليقين أعلى ما يمكن (high uncertainty). لو كل الأمثلة من نفس الـ class فالـ uncertainty منخفضة (entropy = 0).",
          tags: ["Uncertainty", "Leaf Node"],
          ref: "Lecture 02 — Slide 18",
        },
        {
          q: "10. How many bits of entropy does a fair coin flip have?",
          options: ["1 bit", "0 bits", "2 bits", "0.5 bits"],
          correct: 0,
          translation: "كام bit من الـ entropy في رمية عملة عادلة؟",
          explanation:
            "الـ fair coin (p = 0.5) أقصى عدم يقين ممكن لمتغير ثنائي، فالـ entropy = -0.5 log2(0.5) - 0.5 log2(0.5) = 1 bit. الـ entropy بتبقى 0 فقط لما p = 0 أو 1.",
          tags: ["Entropy", "Fair Coin"],
          ref: "Lecture 02 — Slide 22",
        },
        {
          q: "11. For regression trees, how are the splits chosen?",
          options: [
            "To minimize squared error rather than maximize information gain",
            "To maximize information gain, exactly as in classification",
            "To maximize the number of leaves",
            "To make all leaf values equal",
          ],
          correct: 0,
          translation: "في الـ regression trees، إزاي بيتم اختيار الـ splits؟",
          explanation:
            "الـ regression trees بتختار الـ splits اللي بتقلل الـ squared error بدل ما تعظّم الـ information gain (اللي بيُستخدم في الـ classification).",
          tags: ["Regression Tree", "Squared Error"],
          ref: "Lecture 02 — Slide 40",
        },
        {
          q: "12. What did Claude Shannon show about storing the outcome of a random draw?",
          options: [
            "Any random outcome can always be stored using exactly one bit of memory",
            "The entropy of a variable is always equal to its number of outcomes",
            "Storing outcomes always requires more bits than the number of outcomes",
            "You cannot store it using fewer expected bits than the entropy without losing information",
          ],
          correct: 3,
          translation:
            "إيه اللي أثبته Claude Shannon عن تخزين نتيجة سحب عشوائي؟",
          explanation:
            "Shannon أثبت إن مينفعش نخزّن النتيجة بعدد bits متوقع أقل من الـ entropy من غير فقدان معلومات، عشان كده وحدة الـ entropy هي bits.",
          tags: ["Entropy", "Claude Shannon"],
          ref: "Lecture 02 — Slide 22",
        },
        {
          q: "13. What does the information gain of an attribute measure?",
          options: [
            "The total number of leaves produced by the split in the tree",
            "The expected reduction in entropy caused by partitioning on that attribute",
            "The Euclidean distance between the two partitions of the data",
            "The accuracy of the final tree on the held-out test set",
          ],
          correct: 1,
          translation: "إيه اللي بيقيسه الـ information gain لـ attribute؟",
          explanation:
            "الـ information gain هو التخفيض المتوقع في الـ entropy (عدم اليقين عن الـ label) بعد التقسيم على الـ attribute، وهو بالظبط اللي نحتاجه لاختيار أفضل split.",
          tags: ["Information Gain"],
          ref: "Lecture 02 — Slide 31",
        },
        {
          q: "14. In Gain(S, a) = Entropy(S) - sum over v of (|S_v| / |S|) Entropy(S_v), how is the entropy of the partitions combined?",
          options: [
            "The entropies of the partitions are averaged without any weights",
            "Only the entropy of the largest partition is used in the formula",
            "Each partition's entropy is weighted by its size relative to the original set",
            "The entropies of the partitions are simply summed over all values of v",
          ],
          correct: 2,
          translation: "في قانون Gain(S, a)، إزاي بيتم دمج entropy الأجزاء؟",
          explanation:
            "كل جزء بيتوزن بحجمه نسبةً للمجموعة الأصلية |S_v| / |S|، فالجزء الأكبر بياخد وزن أكبر. المتوسط غير الموزون أو المجموع بيدي نتيجة غلط.",
          tags: ["Information Gain", "Weighted Entropy"],
          ref: "Lecture 02 — Slide 31",
        },
        {
          q: "15. In the Play Tennis example, which feature has the highest information gain and is chosen for the root split?",
          options: [
            "Humidity, with a gain of about 0.151",
            "Outlook, with a gain of about 0.246",
            "Wind, with a gain of about 0.048",
            "Temperature, with a gain of about 0.029",
          ],
          correct: 1,
          translation:
            "في مثال Play Tennis، أي feature ليه أعلى information gain ويتختار للـ root؟",
          explanation:
            "الـ gains: Outlook 0.246 وHumidity 0.151 وWind 0.048 وTemperature 0.029، فـ Outlook هو الأعلى فيتختار للـ split الأول.",
          tags: ["Play Tennis", "Information Gain"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          q: "16. In the Play Tennis data (9 positive and 5 negative examples), what is the entropy of the target Play?",
          options: ["About 0.94", "About 0.50", "Exactly 1.00", "Exactly 0"],
          correct: 0,
          translation:
            "في بيانات Play Tennis (9 أمثلة موجبة و5 سالبة)، كام entropy المتغير Play؟",
          explanation:
            "p+ = 9/14 وp- = 5/14 فالـ entropy = -(9/14)log2(9/14) - (5/14)log2(5/14) ≈ 0.94. هي مش 1 لأن التوزيع مش متساوي ومش 0 لأن فيه classes مختلطة.",
          tags: ["Entropy", "Play Tennis"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          q: "17. In the Play Tennis tree, why does the Overcast branch of Outlook become a leaf that predicts Yes?",
          options: [
            "Overcast has the lowest number of attributes",
            "Overcast has equal numbers of positive and negative examples",
            "The Overcast branch contains no examples",
            "All four Overcast examples are positive, so its entropy is 0",
          ],
          correct: 3,
          translation:
            "في شجرة Play Tennis، ليه فرع Overcast بقى leaf بيتنبأ بـ Yes؟",
          explanation:
            "كل أمثلة Overcast الأربعة موجبة (4+, 0-) فالـ entropy = 0 ولا يوجد داعي للتقسيم. لو كانت متساوية كانت الـ entropy أعلى ما يمكن.",
          tags: ["Play Tennis", "Leaf Node"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          q: "18. In the decision tree construction algorithm, what is returned for a group of examples that is empty?",
          options: [
            "The majority class from the parent",
            "The class with the fewest examples overall",
            "A random class label",
            "The feature with the highest gain",
          ],
          correct: 0,
          translation:
            "في خوارزمية بناء الـ decision tree، إيه اللي بيتم إرجاعه لمجموعة أمثلة فاضية؟",
          explanation:
            "لو مفيش أمثلة في المجموعة بنرجّع الـ majority class من الـ parent. لو كل الأمثلة من نفس الـ class بنرجع الـ class ده، ولو لأ بنكمل التقسيم.",
          tags: ["Tree Construction", "Stopping Rule"],
          ref: "Lecture 02 — Slide 35",
        },
        {
          q: "19. Which statement about conditional entropy is correct?",
          options: [
            "Knowing X can increase the uncertainty about Y: H(Y|X) > H(Y)",
            "H(Y|Y) = 1 for every non-constant random variable Y",
            "If X and Y are independent, then H(Y|X) = 0 exactly",
            "By knowing X we can only decrease our uncertainty about Y: H(Y|X) <= H(Y)",
          ],
          correct: 3,
          translation: "أي عبارة عن الـ conditional entropy صحيحة؟",
          explanation:
            "معرفة X ممكن تقلل عدم اليقين عن Y بس مش تزوده، فـ H(Y|X) <= H(Y). وH(Y|Y) = 0 مش 1، ولو X وY مستقلين فـ H(Y|X) = H(Y).",
          tags: ["Conditional Entropy"],
          ref: "Lecture 02 — Slide 29",
        },
        {
          q: "20. In the restaurant example, what are the information gains of the attributes Type and Patrons?",
          options: [
            "IG(Type) is about 0.541 and IG(Patrons) = 0",
            "Both IG(Type) and IG(Patrons) are equal to 1",
            "IG(Type) = 0 and IG(Patrons) is about 0.541",
            "Both IG(Type) and IG(Patrons) are equal to 0",
          ],
          correct: 2,
          translation:
            "في مثال المطعم، كام الـ information gain للـ attributes: Type وPatrons؟",
          explanation:
            "Type ملهوش أي قدرة تمييز (IG = 0) لأن كل نوع فيه نص أمثلة موجبة ونصها سالبة، بينما Patrons ≈ 0.541 فهو الأفضل. الاختيارات التانية بتعكس أو بتساوي القيم غلط.",
          tags: ["Restaurant Example", "Feature Selection"],
          ref: "Lecture 02 — Slide 37",
        },
        {
          q: "21. According to Occam's razor, which hypothesis should we prefer?",
          options: [
            "The most complex hypothesis that fits the training data",
            "The hypothesis with the largest number of parameters",
            "The hypothesis that ignores the observations",
            "The simplest hypothesis that fits the observations",
          ],
          correct: 3,
          translation: "حسب Occam's razor، أي فرضية نفضّلها؟",
          explanation:
            "المبدأ بيقول نبحث عن أبسط فرضية تفسر الملاحظات. لهذا نفضّل trees صغيرة بنودها المعلوماتية قريبة من الـ root، مع صعوبة تعريف 'البساطة' رسميًا.",
          tags: ["Occam's Razor", "Good Tree"],
          ref: "Lecture 02 — Slide 39",
        },
        {
          q: "22. Which of the following is an advantage of decision trees over kNN?",
          options: [
            "They have very few hyperparameters",
            "They can easily incorporate interesting distance measures such as shape contexts",
            "They are fast at test time and more interpretable",
            "They can never overfit the training data",
          ],
          correct: 2,
          translation: "أي من التالي ميزة للـ decision trees على kNN؟",
          explanation:
            "الشجرة سريعة وقت الاختبار وأسهل في التفسير. قلة الـ hyperparameters وإمكانية استخدام مقاييس مسافة خاصة هما مميزات kNN، والشجرة ممكن تعمل overfit.",
          tags: ["Decision Trees", "kNN"],
          ref: "Lecture 02 — Slide 41",
        },
        {
          q: "23. For an ensemble of classifiers to be nontrivial, the classifiers must:",
          options: [
            "be exactly identical copies of one classifier trained on the same data",
            "always use the same training data and the same hyperparameters",
            "differ somehow, for example in algorithm, hyperparameters, data or weighting",
            "be limited to decision trees of depth one trained on the same data",
          ],
          correct: 2,
          translation:
            "عشان الـ ensemble يبقى مفيد (nontrivial)، لازم المصنفات:",
          explanation:
            "لو المصنفات متطابقة فالتصويت بينها مفيهوش جديد. لازم تختلف في الخوارزمية أو الـ hyperparameters أو بيانات التدريب أو أوزان الأمثلة.",
          tags: ["Ensemble", "Majority Vote"],
          ref: "Lecture 02 — Slide 42",
        },
        {
          q: "24. In the decomposition E[(y - t)^2] = (y* - E[y])^2 + Var(y) + Var(t), what are the three terms called, in order?",
          options: [
            "Variance, bias, and training error",
            "Bias, variance, and Bayes error",
            "Underfitting, overfitting, and test error",
            "Mean, median, and mode",
          ],
          correct: 1,
          translation:
            "في تفكيك الـ expected loss، إيه أسماء الحدود الثلاثة بالترتيب؟",
          explanation:
            "الحد الأول bias (مدى خطأ التنبؤ المتوقع، يقابل underfitting)، والثاني variance (تذبذب التنبؤات، يقابل overfitting)، والثالث Bayes error (عدم القابلية الذاتية للتنبؤ بالـ targets).",
          tags: ["Bias-Variance", "Bayes Error"],
          ref: "Lecture 02 — Slide 54",
        },
        {
          q: "25. Under squared error loss, which prediction y* is the best possible, given the conditional distribution p(t|x)?",
          options: [
            "y* = Var[t | x]",
            "y* = the largest value of t",
            "y* = 0 for every x",
            "y* = E[t | x]",
          ],
          correct: 3,
          translation:
            "تحت squared error loss، أي تنبؤ y* هو الأفضل إذا عرفنا التوزيع الشرطي p(t|x)؟",
          explanation:
            "الإثبات بيوضح إن E[(y - t)^2 | x] = (y - y*)^2 + Var[t | x] وبالتالي أفضل y هو y* = E[t | x]. الحد التاني Var[t|x] هو الـ Bayes error ومبيعتمدش على y.",
          tags: ["Bayes Optimality", "Squared Error"],
          ref: "Lecture 02 — Slide 51",
        },
        {
          type: "essay",
          q: "1. Describe the structure of a decision tree and explain how it makes predictions for continuous and discrete features, including the difference between regression and classification trees.",
          translation:
            "صِف بنية الـ decision tree واشرح إزاي بيعمل تنبؤات مع الـ continuous والـ discrete features، وإيه الفرق بين regression وclassification trees.",
          answer:
            "A decision tree makes predictions by splitting on features according to a tree structure. Internal nodes test a feature, branching is determined by the feature value, and leaf nodes are the outputs (predictions).\n" +
            "Continuous features: split by checking whether the feature is greater or less than a threshold; the decision boundary is made of axis-aligned planes.\n" +
            "Discrete features: split into a partition of the possible values.\n" +
            "Each path from the root to a leaf defines a region R_m of the input space containing training examples.\n" +
            "Regression tree: continuous output; the leaf value y_m is typically the mean of the targets in R_m.\n" +
            "Classification tree: discrete output; the leaf value is typically the most common label in R_m.",
          tags: ["Decision Trees", "Regression vs Classification"],
          ref: "Lecture 02 — Slides 4-12",
        },
        {
          type: "essay",
          q: "2. Why do we use a greedy heuristic to learn decision trees? Describe the greedy procedure.",
          translation:
            "ليه بنستخدم greedy heuristic لتعلّم الـ decision trees؟ اشرح خطوات الإجراء.",
          answer:
            "Decision trees are universal function approximators: for any training set we can build a tree with exactly one leaf per training point, but it probably will not generalize. Finding the smallest decision tree that correctly classifies a training set is NP-complete.\n" +
            "So we resort to a greedy heuristic:\n" +
            "1. Start with the whole training set and an empty tree.\n" +
            "2. Pick a feature and a candidate split that would most reduce a loss (a scalar number: low is good, high is bad).\n" +
            "3. Split on that feature and recurse on the sub-partitions.\n" +
            "Greedy algorithms do not necessarily yield the global optimum.",
          tags: ["Greedy Heuristic", "NP-Complete"],
          ref: "Lecture 02 — Slides 13-14 and 40",
        },
        {
          type: "essay",
          q: "3. Define entropy. Use the two-coin example to explain what high and low entropy mean and state the units of entropy.",
          translation:
            "عرّف الـ entropy. استخدم مثال العملتين لتوضيح معنى الـ entropy العالية والمنخفضة واذكر وحدة القياس.",
          answer:
            "Entropy is a property of a random variable: a number that quantifies the uncertainty inherent in its possible outcomes. For a discrete variable Y, H(Y) = - sum_y p(y) log2 p(y). For a loaded coin with probability p of heads: -p log2(p) - (1-p) log2(1-p).\n" +
            "The coin whose outcomes are more certain has lower entropy; for p = 0 or p = 1 the entropy is 0. A fair coin has 1 bit.\n" +
            "High entropy: uniform-like distribution over many outcomes, flat histogram, less predictable samples.\n" +
            "Low entropy: distribution concentrated on a few outcomes, more predictable samples.\n" +
            "Units: bits (Shannon: you cannot store a random outcome with fewer expected bits than the entropy without losing information). Entropy can also be seen as the expected information content of a random draw.",
          tags: ["Entropy", "Uncertainty"],
          ref: "Lecture 02 — Slides 19-23",
        },
        {
          type: "essay",
          q: "4. Explain information gain and why it is used to choose splits in a decision tree. Write the formula and the main properties of conditional entropy used with it.",
          translation:
            "اشرح الـ information gain وليه بيُستخدم لاختيار الـ splits في الـ decision tree. اكتب القانون وأهم خصائص الـ conditional entropy.",
          answer:
            "Information gain measures how much information about the class label Y is gained by knowing which side of a split we are on, i.e., the expected reduction in entropy: IG(Y|X) = H(Y) - H(Y|X) (the mutual information of Y and X).\n" +
            "For an attribute a: Gain(S, a) = Entropy(S) - sum over v of (|S_v| / |S|) Entropy(S_v), weighting each partition by its relative size.\n" +
            "If X is completely uninformative about Y: IG = 0. If X is completely informative: IG = H(Y).\n" +
            "Properties: H is non-negative; chain rule H(X,Y) = H(X|Y) + H(Y) = H(Y|X) + H(X); if X and Y are independent H(Y|X) = H(Y); H(Y|Y) = 0; H(Y|X) <= H(Y).\n" +
            "At each node we choose the feature (and threshold) with the highest gain.",
          tags: ["Information Gain", "Conditional Entropy"],
          ref: "Lecture 02 — Slides 24-31 and 34",
        },
        {
          type: "essay",
          q: "5. Explain the Play Tennis example: compute the root entropy, the gain of each feature, the root choice and the resulting tree.",
          translation:
            "اشرح مثال Play Tennis: الـ entropy للـ root، والـ gain لكل feature، واختيار الـ root، والشجرة الناتجة.",
          answer:
            "The data has 14 examples (9 positive, 5 negative), so Entropy(Play) = 0.94.\n" +
            "Information gains: Outlook 0.246, Humidity 0.151, Wind 0.048, Temperature 0.029, so we split on Outlook.\n" +
            "Outlook branches: Sunny (2+, 3-), Overcast (4+, 0-), Rain (3+, 2-). Overcast is pure, so it becomes a leaf: Yes.\n" +
            "Sunny subset: Gain(Humidity) = 0.97, Gain(Temp) = 0.57, Gain(Wind) = 0.02, so split on Humidity: High -> No, Normal -> Yes.\n" +
            "Rain subset: split on Wind: Strong -> No, Weak -> Yes.\n" +
            "Final tree: Outlook at the root, Humidity under Sunny, Wind under Rain.",
          tags: ["Play Tennis", "ID3 Example"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          type: "essay",
          q: "6. Write and explain the decision tree construction algorithm (induceDecisionTree) and its stopping conditions.",
          translation:
            "اكتب واشرح خوارزمية بناء الـ decision tree (induceDecisionTree) وشروط التوقف.",
          answer:
            "Simple, greedy, recursive approach that builds the tree node by node:\n" +
            "1. If all examples in S have the same label y, return a leaf with that label.\n" +
            "2. Otherwise find the feature with the most information gain: i = argmax_i Gain(S, X_i).\n" +
            "3. Split the examples into groups by the value of that feature.\n" +
            "4. For each group: if it has no examples, return the majority class from the parent; else if all examples are in the same class, return the class; otherwise recurse (induceDecisionTree on the subset).\n" +
            "Termination: when all leaves contain only examples of the same class or are empty (or every attribute is already included in the path).\n" +
            "Questions: how to choose the feature to split on, and how to choose the threshold for continuous features (the threshold that maximizes information gain).",
          tags: ["Tree Construction", "Algorithm"],
          ref: "Lecture 02 — Slides 35, 41 and 40",
        },
        {
          type: "essay",
          q: "7. What makes a good decision tree? Discuss Occam's razor and the main problems of decision trees.",
          translation:
            "إيه اللي بيخلّي الـ decision tree كويسة؟ ناقش Occam's razor والمشاكل الأساسية للـ decision trees.",
          answer:
            "A good tree is not too small: it must handle important but subtle distinctions in the data. It is also not too big: for computational efficiency (avoid redundant or spurious attributes), to avoid over-fitting the training examples, and for human interpretability.\n" +
            "Occam's razor: find the simplest hypothesis that fits the observations. It is useful but hard to formalize (how to define simplicity?).\n" +
            "We desire small trees with informative nodes near the root.\n" +
            "Problems: exponentially less data at lower levels; too big a tree can overfit; greedy algorithms do not necessarily yield the global optimum.",
          tags: ["Occam's Razor", "Overfitting"],
          ref: "Lecture 02 — Slides 39-40",
        },
        {
          type: "essay",
          q: "8. Compare decision trees with kNN: state the advantages of each.",
          translation: "قارن بين الـ decision trees وkNN: اذكر مميزات كل واحد.",
          answer:
            "Advantages of decision trees over kNN: simple to deal with discrete features, missing values, and poorly scaled data; fast at test time; more interpretable.\n" +
            "Advantages of kNN over decision trees: few hyperparameters; can incorporate interesting distance measures (e.g., shape contexts).",
          tags: ["Decision Trees", "kNN Comparison"],
          ref: "Lecture 02 — Slide 41",
        },
        {
          type: "essay",
          q: "9. What is an ensemble of classifiers? Why must its members differ, and in what ways can they differ?",
          translation:
            "إيه هو الـ ensemble من المصنفات؟ ولماذا لازم تختلف أعضاؤه وبأي طرق ممكن تختلف؟",
          answer:
            "An ensemble is a set of predictors whose individual decisions are combined in some way to classify new examples, e.g., a (possibly weighted) majority vote.\n" +
            "For this to be nontrivial, the classifiers must differ somehow, for example: a different algorithm, a different choice of hyperparameters, training on different data, or training with a different weighting of the training examples.\n" +
            "Specific ensembling techniques are studied in the next lecture, and the bias-variance decomposition helps us understand them.",
          tags: ["Ensemble", "Majority Vote"],
          ref: "Lecture 02 — Slides 42 and 44",
        },
        {
          type: "essay",
          q: "10. Explain the bias-variance decomposition of the expected squared error, including the proof that y* = E[t|x] is the best prediction and the meaning of each term.",
          translation:
            "اشرح تفكيك الـ bias-variance للـ expected squared error، مع إثبات إن y* = E[t|x] هو أفضل تنبؤ ومعنى كل حد.",
          answer:
            "Setup: fix a query point x; repeatedly sample a training set D i.i.d. from p_sample, run the learner to get a prediction y at x (a random variable, since the randomness comes from the dataset), sample the true target t from p(t|x), and compute the loss. y is independent of t.\n" +
            "Optimal prediction for squared error: E[(y - t)^2 | x] = y^2 - 2y E[t|x] + E[t^2|x] = (y - y*)^2 + Var[t|x], with y* = E[t|x]. The first term is zero when y = y*; the second term is the Bayes error (noise, inherent unpredictability of t), independent of y; it is the best any algorithm can do. An algorithm achieving it is Bayes optimal.\n" +
            "Treating y as random: E[(y - t)^2] = (y* - E[y])^2 + Var(y) + Var(t).\n" +
            "Bias = (y* - E[y])^2: how wrong the expected prediction is (underfitting). Variance = Var(y): variability of predictions across datasets (overfitting). Bayes error = Var(t): inherent unpredictability of the targets.\n" +
            "Overly simple models underfit and overly complex models overfit.",
          tags: ["Bias-Variance", "Bayes Optimality"],
          ref: "Lecture 02 — Slides 44-55",
        },
        {
          type: "essay",
          q: "11. Calculation: Compute the entropy (in bits) of three leaf nodes: A with 3 positive and 1 negative examples, B with 2 positive and 2 negative examples, and C with 4 positive and 0 negative examples.",
          translation:
            "مسألة حسابية: احسب الـ entropy (بالـ bits) لثلاث leaf nodes: A فيها 3 موجب و1 سالب، وB فيها 2 موجب و2 سالب، وC فيها 4 موجب و0 سالب.",
          answer:
            "Formula: H = -p+ log2(p+) - p- log2(p-), with 0 log2 0 = 0.\n" +
            "A: p+ = 3/4, p- = 1/4: H = -0.75 log2(0.75) - 0.25 log2(0.25) = 0.311 + 0.5 = 0.811 bits.\n" +
            "B: p+ = p- = 1/2: H = 0.5 + 0.5 = 1 bit (maximum uncertainty).\n" +
            "C: p+ = 1, p- = 0: H = 0 bits (pure leaf, no uncertainty).\n" +
            "So B is the most uncertain leaf and C the most certain.",
          tags: ["Entropy"],
          ref: "Lecture 02 — Slides 18-23",
        },
        {
          type: "essay",
          q: "12. Calculation: In the Play Tennis data (entropy 0.940), compute the information gain of Wind. Wind = Weak has 8 examples (6 positive, 2 negative) and Wind = Strong has 6 examples (3 positive, 3 negative).",
          translation:
            "مسألة حسابية: في بيانات Play Tennis (الـ entropy = 0.940)، احسب الـ information gain للـ Wind. Wind = Weak فيها 8 أمثلة (6 موجب و2 سالب) وWind = Strong فيها 6 أمثلة (3 موجب و3 سالب).",
          answer:
            "Entropy(Weak) = -(6/8) log2(6/8) - (2/8) log2(2/8) = 0.811.\n" +
            "Entropy(Strong) = -(3/6) log2(3/6) - (3/6) log2(3/6) = 1.0.\n" +
            "Expected entropy = (8/14) x 0.811 + (6/14) x 1.0 = 0.463 + 0.429 = 0.892.\n" +
            "Gain(S, Wind) = 0.940 - 0.892 = 0.048.\n" +
            "This matches the lecture (Wind: 0.048), which is much lower than Outlook (0.246).",
          tags: ["Information Gain", "Play Tennis"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          type: "essay",
          q: "13. Calculation: In the Play Tennis data (entropy 0.940), compute the information gain of Temperature. Hot has 4 examples (2+, 2-), Mild has 6 examples (4+, 2-), and Cool has 4 examples (3+, 1-).",
          translation:
            "مسألة حسابية: في بيانات Play Tennis (الـ entropy = 0.940)، احسب الـ information gain للـ Temperature. Hot فيها 4 أمثلة (2+ و2-)، وMild فيها 6 أمثلة (4+ و2-)، وCool فيها 4 أمثلة (3+ و1-).",
          answer:
            "Entropy(Hot) = 1.0 (2+, 2-).\n" +
            "Entropy(Mild) = -(4/6) log2(4/6) - (2/6) log2(2/6) = 0.918.\n" +
            "Entropy(Cool) = -(3/4) log2(3/4) - (1/4) log2(1/4) = 0.811.\n" +
            "Expected entropy = (4/14) x 1.0 + (6/14) x 0.918 + (4/14) x 0.811 = 0.286 + 0.393 + 0.232 = 0.911.\n" +
            "Gain(S, Temperature) = 0.940 - 0.911 = 0.029.\n" +
            "This matches the lecture and is the lowest gain among the four features.",
          tags: ["Information Gain", "Play Tennis"],
          ref: "Lecture 02 — Tennis example slides (Play Tennis, Information Gain)",
        },
        {
          type: "essay",
          q: "14. Calculation: For the joint distribution of Raining (X) and Cloudy (Y): P(Raining, Cloudy) = 24/100, P(Raining, Not cloudy) = 1/100, P(Not raining, Cloudy) = 25/100, P(Not raining, Not cloudy) = 50/100. Compute H(Y|X = raining), H(Y|X) and the information gain IG(Y|X).",
          translation:
            "مسألة حسابية: للتوزيع المشترك بين Raining (X) وCloudy (Y) المذكور بالأرقام أعلاه، احسب H(Y|X = raining) وH(Y|X) والـ information gain IG(Y|X).",
          answer:
            "p(x = raining) = 25/100 = 1/4; p(x = not raining) = 75/100 = 3/4.\n" +
            "H(Y|X = raining) = -(24/25) log2(24/25) - (1/25) log2(1/25) = 0.24 bits.\n" +
            "H(Y|X = not raining) = -(25/75) log2(25/75) - (50/75) log2(50/75) = 0.918 bits.\n" +
            "H(Y|X) = (1/4)(0.24) + (3/4)(0.918) ≈ 0.75 bits.\n" +
            "H(Y): P(cloudy) = 49/100, so H(Y) = H(0.49) ≈ 1.0 bit.\n" +
            "IG(Y|X) = H(Y) - H(Y|X) ≈ 1.0 - 0.75 = 0.25 bits.\n" +
            "Check with the chain rule: H(X, Y) = H(Y|X) + H(X) = 0.75 + 0.811 ≈ 1.56 bits (matches the lecture).",
          tags: ["Conditional Entropy", "Information Gain"],
          ref: "Lecture 02 — Slides 25-30",
        },
        {
          type: "essay",
          q: "15. Calculation: At a query point x the Bayes-optimal prediction is y* = 5, the expected prediction of the learner is E[y] = 3, its variance is Var(y) = 0.5, and the target noise is Var(t) = 1. Compute the expected squared loss and each of its terms. Also find the leaf value of a regression tree whose region contains the targets {2, 4, 6}.",
          translation:
            "مسألة حسابية: عند نقطة استعلام x، التنبؤ الأمثل y* = 5، والتنبؤ المتوقع للمتعلّم E[y] = 3، والتباين Var(y) = 0.5، وضوضاء الهدف Var(t) = 1. احسب الـ expected squared loss وكل حد فيه، وكمان قيمة leaf لـ regression tree منطقتها فيها الـ targets {2, 4, 6}.",
          answer:
            "Formula: E[(y - t)^2] = (y* - E[y])^2 + Var(y) + Var(t).\n" +
            "Bias term = (5 - 3)^2 = 4.\n" +
            "Variance term = 0.5.\n" +
            "Bayes error = 1 (cannot be reduced by any learner).\n" +
            "Expected loss = 4 + 0.5 + 1 = 5.5.\n" +
            "If the learner had E[y] = y*, the bias would be 0 and the loss would be 0.5 + 1 = 1.5.\n" +
            "Regression tree leaf value = mean of the targets = (2 + 4 + 6) / 3 = 4.",
          tags: ["Bias-Variance", "Regression Tree"],
          ref: "Lecture 02 — Slides 10 and 53-54",
        },
      ],
    },
  ],
});
