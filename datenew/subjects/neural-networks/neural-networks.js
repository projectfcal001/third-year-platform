/* بيانات مادة: الشبكات العصبية (neural-networks)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/neural-networks/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "الشبكات العصبية",
  en: "Neural Networks",
  icon: "🧠",
  slug: "neural-networks",
  lectures: [
    /* { t:"المحاضرة 1 — العنوان", d:"وصف", id:"lec-01",
         pdf:"datenew/subjects/neural-networks/lectures/lec-01.pdf", questions:[] } */
    {
      id: "neural-networks-lecture-01",
      t: "المحاضرة الأولى: مقدمة في الشبكات العصبية (Neural Networks)",
      d: "تعريف الشبكات العصبية، النيرون البيولوجي والصناعي، البنية (input / hidden / output)، عملية التعلّم، دوال التنشيط (Binary / Linear threshold / Sigmoid / Gaussian / ReLU / Tanh)، المكونات الثمانية للشبكة، والبنى Feedforward وFeedback.",
      pdf: "datenew/subjects/neural-networks/lectures/Lec 1/Lec 1.pdf",
      pdf2: "datenew/subjects/neural-networks/questions/Questions on each lecture/Neural-Networks-Lecture-01-Questions.pdf",

      // فئات روابط منظمة - المحاضرة الأولى: مقدمة في الشبكات العصبية الاصطناعية (Introduction to Neural Networks)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات باللغة العربية لمفاهيم الشبكات العصبية، الخلايا العصبية الاصطناعية، ودوال التنشيط",
          links: [
            {
              t: "شرح الشبكات العصبية الاصطناعية (Artificial Neural Networks)",
              d: "شرح تفصيلي لمفهوم الخلية العصبية الاصطناعية، الأوزان (Weights)، الانحياز (Bias)، ودوال التنشيط (Activation Functions)",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=bfmFfD2RIcg",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "أساسيات التعلم العميق والشبكات العصبية - الشرح العربي",
              d: "توضيح طبقات الشبكة العصبية (Input, Hidden, Output Layers) وعمليات التدريب والانتشار العكسي",
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
          description:
            "شروحات أكاديمية وعالمية لمفاهيم الأبنية والانتشار العكسي ودوال التنشيط",
          links: [
            {
              t: "3Blue1Brown - But what is a Neural Network?",
              d: "الشرح البصري الأفضل عالمياً لفهم الخلايا العصبية، الطبقات المخفية، وكيفية عمل الشبكات العصبية والتعلم",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=aircAruvnKk",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "StatQuest: Neural Networks Part 1",
              d: "شرح مبسط ومفصل للمفاهيم الرياضية الأساسية للشبكات العصبية والأوزان والانحياز ودوال التنشيط",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=CqOfi41LfDw",
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
            "مقالات ومرجعيات تفصيلية لمكونات الشبكات العصبية ودوال التنشيط وأنواعها",
          links: [
            {
              t: "GeeksforGeeks - Introduction to Artificial Neural Networks (ANN)",
              d: "مرجع شامل يغطي بنية الشبكات العصبية، مكوناتها الثمانية الأساسية، وعمليات التعلم والتدريب",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/introduction-to-artificial-neural-networks/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "DeepLearning.AI - Neural Networks and Deep Learning Resources",
              d: "مرجع عالمي موثوق لدراسة هندسة الشبكات العصبية، دوال التنشيط (ReLU, Sigmoid, Tanh)، وعمارة الشبكات",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.deeplearning.ai/",
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
            "أدوات تفاعلية ومحاكاة لتجربة الشبكات العصبية وتغيير الأوزان ودوال التنشيط بصرياً",
          links: [
            {
              t: "TensorFlow Playground - Interactive Neural Network",
              d: "أداة تفاعلية ممتازة من جوجل لتجربة بناء الشبكات العصبية ومراقبة تأثير دوال التنشيط والأوزان والطبقات المخفية",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://playground.tensorflow.org/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Python & NumPy - Neural Network Implementation from Scratch",
              d: "مكتبات وأدوات البرمجة الأساسية لبناء خلية عصبية واختبار دوال التنشيط برمجياً",
              icon: "🔧",
              actions: [
                {
                  label: "⭳ تحميل الأداة",
                  url: "https://numpy.org/",
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
          q: "1. Which description best fits a neural network, as defined in the lecture?",
          options: [
            "A rule-based system that follows fixed if-then statements written by human experts and never learns from data",
            "A database that stores records in related tables and answers queries on them",
            "A machine learning model of interconnected neurons that mimics brain functions and learns patterns from data",
            "A compiler that translates high-level source code into machine code for a processor",
          ],
          correct: 2,
          translation: "أي وصف يناسب الشبكة العصبية حسب تعريف المحاضرة؟",
          explanation:
            "المحاضرة بتعرّف الشبكة العصبية كنموذج تعلّم آلة من عقد (neurons) متصلة بتحاكي وظائف المخ، وبتتعلم الأنماط من البيانات. القواعد الثابتة وقواعد البيانات والـ compilers مش تعلّم.",
          tags: ["Neural Network", "Definition"],
          ref: "Lecture 01 — Slide 2",
        },
        {
          q: "2. What does synaptic efficacy mean?",
          options: [
            "How well the signal passes from the presynaptic to the postsynaptic neuron",
            "The number of axons that leave the body of a single neuron",
            "The size of the neuron's cell body and its nucleus",
            "The speed at which a neuron grows new dendrites over time",
          ],
          correct: 0,
          translation: "إيه معنى الـ synaptic efficacy؟",
          explanation:
            "الـ synapse هو الوصلة بين نيرونين، والـ synaptic efficacy بيعبّر عن مدى كفاءة تمرير الإشارة من النيرون الأول (presynaptic) للتاني (postsynaptic). وده اللي بتمثله الأوزان في النموذج الصناعي.",
          tags: ["Synapse", "Neuron Abstraction"],
          ref: "Lecture 01 — Slide 3",
        },
        {
          q: "3. In the artificial neuron, what do the connection weights w_ij model?",
          options: [
            "The synaptic efficacies of the various interneuron synapses",
            "The internal threshold of the neuron before activation",
            "The final output signal s_j of the neuron",
            "The number of different input sources n",
          ],
          correct: 0,
          translation:
            "في النيرون الصناعي، إيه اللي بتمثله أوزان الاتصال w_ij؟",
          explanation:
            "الأوزان w_ij بتحاكي كفاءة الـ synapses بين النيرونات. الـ threshold هو theta_j والـ output هو s_j، وn هو عدد المصادر.",
          tags: ["Weights", "Synaptic Efficacy"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "4. What does w_ij denote in the lecture's notation?",
          options: [
            "The weight from neuron j to neuron i",
            "The bias of neuron i",
            "The output signal of neuron j",
            "The weight from neuron i to neuron j",
          ],
          correct: 3,
          translation: "إيه معنى w_ij في ترميز المحاضرة؟",
          explanation:
            "الرمز w_ij بيمثل الوزن من النيرون i إلى النيرون j (i هو المصدر وj هو المستقبِل). عكس الاتجاه هو الاختيار الغلط الأقرب.",
          tags: ["Notation", "Weights"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "5. What is x_j in the equation x_j = sum_{i=1..n} w_ij s_i + theta_j?",
          options: [
            "A linear weighted aggregation of the impinging signals, modified by an internal threshold theta_j",
            "The output signal of neuron j after the activation function is applied to it",
            "The sum of the weights only, without using the inputs or the threshold",
            "The derivative of the activation function with respect to the weights",
          ],
          correct: 0,
          translation: "إيه هو x_j في المعادلة x_j = sum w_ij s_i + theta_j؟",
          explanation:
            "x_j هو التجميع الخطي الموزون للإشارات الداخلة مضافًا إليه الـ threshold. الـ output s_j بيطلع بعد تمرير x_j على الـ activation function.",
          tags: ["Net Input", "Artificial Neuron"],
          ref: "Lecture 01 — Slide 6",
        },
        {
          q: "6. Which layer of a neural network performs complex transformations and feature extraction?",
          options: [
            "The input layer",
            "The hidden layers",
            "The output layer",
            "The loss layer",
          ],
          correct: 1,
          translation:
            "أي طبقة في الشبكة العصبية بتعمل تحويلات معقدة واستخلاص للـ features؟",
          explanation:
            "الـ hidden layers هي اللي بتعمل التحويلات واستخلاص الـ features. الـ input layer بتستقبل البيانات الخام، والـ output layer بتطلع النتيجة النهائية.",
          tags: ["Network Structure", "Hidden Layers"],
          ref: "Lecture 01 — Slide 7",
        },
        {
          q: "7. Why is an activation function applied to the weighted sum plus bias of a neuron?",
          options: [
            "To reduce the number of weights in the network",
            "To introduce non-linearity",
            "To load the raw data into the input layer",
            "To compute the loss between predicted and actual outputs",
          ],
          correct: 1,
          translation:
            "ليه بنطبّق activation function على المجموع الموزون + الـ bias؟",
          explanation:
            "الـ activation function (زي ReLU وsigmoid وtanh) بتضيف non-linearity للشبكة. بدونها هتبقى الشبكة مجرد تحويل خطي.",
          tags: ["Activation Function", "Non-linearity"],
          ref: "Lecture 01 — Slide 9",
        },
        {
          q: "8. Which sequence correctly describes the training process of a neural network?",
          options: [
            "Backpropagation, forward propagation, loss calculation",
            "Loss calculation, backpropagation, forward propagation",
            "Forward propagation, loss calculation, backpropagation",
            "Forward propagation, backpropagation, loss calculation",
          ],
          correct: 2,
          translation: "أي ترتيب يصف عملية تدريب الشبكة العصبية صح؟",
          explanation:
            "الأول بنحسب الـ output من المدخلات (forward)، وبعدين نقيس الخطأ (loss)، وبعدين نعدّل الأوزان (backpropagation). الترتيبات التانية بتبدأ بالتعديل قبل ما يبقى فيه output أو loss.",
          tags: ["Training", "Backpropagation"],
          ref: "Lecture 01 — Slide 10",
        },
        {
          q: "9. What is the purpose of backpropagation?",
          options: [
            "Adjusting the weights to minimize the error, using methods such as gradient descent",
            "Computing the output of the network from the given inputs",
            "Measuring the error between the predicted and the actual outputs",
            "Receiving the raw data, such as the pixel values of an image",
          ],
          correct: 0,
          translation: "إيه هدف الـ backpropagation؟",
          explanation:
            "الـ backpropagation بتعدّل الأوزان لتقليل الخطأ باستخدام خوارزميات زي gradient descent. حساب الـ output هو forward propagation وقياس الخطأ هو loss calculation.",
          tags: ["Backpropagation", "Gradient Descent"],
          ref: "Lecture 01 — Slide 10",
        },
        {
          q: "10. Which type of neural network is suitable for sequential data such as text or time series?",
          options: [
            "Convolutional Neural Network (CNN)",
            "Feedforward Neural Network (FNN)",
            "Heteroassociator network",
            "Recurrent Neural Network (RNN)",
          ],
          correct: 3,
          translation:
            "أي نوع من الشبكات العصبية مناسب للبيانات المتسلسلة زي النص والـ time series؟",
          explanation:
            "الـ RNN مناسبة للبيانات المتسلسلة. الـ CNN بتُستخدم في معالجة الصور، والـ FNN بتمرر البيانات في اتجاه واحد.",
          tags: ["RNN", "Types of Networks"],
          ref: "Lecture 01 — Slide 11",
        },
        {
          q: "11. A network that associates vectors from one space with vectors of another space, f: R^n -> R^p, is called a:",
          options: [
            "autoassociator",
            "threshold logic unit",
            "stochastic neuron",
            "heteroassociator",
          ],
          correct: 3,
          translation:
            "الشبكة اللي بتربط متجهات من فراغ بمتجهات من فراغ تاني، f: R^n -> R^p، بتتسمى:",
          explanation:
            "الـ heteroassociator بتربط نمطين مختلفين (واحد مدخل والتاني مخرج). الـ autoassociator بتربط النمط بنفسه (R^n -> R^n).",
          tags: ["Heteroassociator", "Mappings"],
          ref: "Lecture 01 — Slide 35",
        },
        {
          q: "12. How is the activity aggregation rule of a neuron usually calculated?",
          options: [
            "As the dot product of the input vector and the weight vector",
            "As the maximum of the input signals, ignoring the weights",
            "As the sum of the weights without using the inputs",
            "As the difference between two output signals",
          ],
          correct: 0,
          translation:
            "إزاي بيتحسب الـ activity aggregation rule للنيرون عادةً؟",
          explanation:
            "الـ aggregation rule عادةً الـ dot product بين متجه المدخلات ومتجه الأوزان، والنتيجة هي مجموع الدخل الكلي قبل تطبيق الـ activation function.",
          tags: ["Aggregation Rule", "Dot Product"],
          ref: "Lecture 01 — Slide 32",
        },
        {
          q: "13. How does the binary threshold function produce its output?",
          options: [
            "It outputs 1 if x_j > 1 and 0 otherwise",
            "It outputs x_j itself when x_j is positive",
            "It outputs 1 if the total input x_j >= 0 and 0 if x_j < 0",
            "It outputs a value between -1 and 1 for every input",
          ],
          correct: 2,
          translation: "إزاي بتطلّع الـ binary threshold function مخرجاتها؟",
          explanation:
            "الدالة بتديّ 1 لو x_j أكبر من أو تساوي 0 وإلا 0، فهي نظام ON/OFF بحالتين ولذلك بتتسمى threshold logic unit. إخراج x_j نفسه هو ReLU.",
          tags: ["Binary Threshold", "Threshold Logic Unit"],
          ref: "Lecture 01 — Slide 16",
        },
        {
          q: "14. For a binary threshold neuron with x_j = q_j + theta_j, when does the neuron fire (output +1)?",
          options: [
            "When q_j >= theta_j",
            "When q_j < -theta_j",
            "When q_j >= -theta_j",
            "Only when q_j = 0",
          ],
          correct: 2,
          translation:
            "في neuron من نوع binary threshold حيث x_j = q_j + theta_j، متى بيطلّع الـ neuron القيمة +1؟",
          explanation:
            "بيطلّع 1 لما x_j >= 0 يعني q_j + theta_j >= 0 يعني q_j >= -theta_j، أي إننا بنقارن q_j بـ threshold هو سالب الـ bias. q_j < -theta_j بيدي 0.",
          tags: ["Threshold", "Bias"],
          ref: "Lecture 01 — Slide 18",
        },
        {
          q: "15. In the linear threshold activation function, the slope parameter alpha_j equals:",
          options: ["x_m", "1 / x_m", "1 / x_j", "lambda_j"],
          correct: 1,
          translation:
            "في الـ linear threshold activation function، معامل الميل alpha_j بيساوي:",
          explanation:
            "alpha_j = 1 / x_m، والدالة هي max(0, min(alpha_j x_j, 1)): صفر لو x_j <= 0، وخطية بين 0 وx_m، وواحد لو x_j >= x_m. lambda_j هو معامل الـ sigmoid.",
          tags: ["Linear Threshold", "Slope"],
          ref: "Lecture 01 — Slide 19",
        },
        {
          q: "16. What happens to the sigmoid function as the gain factor lambda_j tends to infinity?",
          options: [
            "It becomes a straight line through the origin",
            "It approaches the non-smooth binary threshold function",
            "It becomes a Gaussian bell shape centered at zero",
            "It always outputs exactly 0.5 for every input",
          ],
          correct: 1,
          translation:
            "إيه اللي بيحصل لدالة الـ sigmoid لما معامل الـ gain، lambda_j، يروح للـ infinity؟",
          explanation:
            "كلما زاد lambda بتبقى الدالة أحدّ (أكثر انحدارًا) وفي النهاية بتقرب من binary threshold function. مش بتبقى خط مستقيم ولا Gaussian.",
          tags: ["Sigmoid", "Gain Factor"],
          ref: "Lecture 01 — Slide 20",
        },
        {
          q: "17. Which set of properties describes the sigmoid function?",
          options: [
            "Monotonic, continuous, and bounded (usually between 0 and 1)",
            "Non-monotonic, discontinuous, and unbounded",
            "Monotonic, discontinuous, and bounded between -1 and 1",
            "Non-monotonic, continuous, and zero-centered",
          ],
          correct: 0,
          translation: "أي مجموعة من الخصائص تصف دالة الـ sigmoid؟",
          explanation:
            "الـ sigmoid دايمًا بتزيد (monotonic) ومن غير قفزات (continuous) وقيمها محصورة عادةً بين 0 و1 (bounded). المدى (-1, 1) هو للـ tanh.",
          tags: ["Sigmoid", "Properties"],
          ref: "Lecture 01 — Slide 20",
        },
        {
          q: "18. Which of the following activation functions is an example of a non-monotonic function?",
          options: ["Sigmoid", "ReLU", "Gaussian", "Binary threshold"],
          correct: 2,
          translation: "أي من دوال التنشيط دي مثال على دالة non-monotonic؟",
          explanation:
            "الـ Gaussian بتطلع لقمة عند المركز وبعدين تنزل (شكل جرس)، فهي non-monotonic. الـ sigmoid وReLU وbinary threshold مفيش فيها نزول.",
          tags: ["Gaussian", "Non-monotonic"],
          ref: "Lecture 01 — Slide 22",
        },
        {
          q: "19. What does increasing the spread factor sigma_j do to the Gaussian activation function?",
          options: [
            "It makes the function sharper (narrower)",
            "It shifts the function to the right along the activation axis",
            "It turns the function into a step function",
            "It makes the function more diffuse (wider)",
          ],
          correct: 3,
          translation:
            "إيه تأثير زيادة الـ spread factor، sigma_j، على الـ Gaussian activation function؟",
          explanation:
            "زيادة sigma بتخلي المنحنى أعرض وأكثر انتشارًا (diffuse)، وتقليلها بيخليه أحدّ. تغيير المركز c_j هو اللي بيحرّك المنحنى يمين أو شمال.",
          tags: ["Gaussian", "Spread Factor"],
          ref: "Lecture 01 — Slide 22",
        },
        {
          q: "20. What determines the output state (for example 0/1 or -1/1) of a stochastic neuron?",
          options: [
            "A fixed deterministic threshold at zero, with no randomness",
            "The number of hidden layers in the network",
            "A probabilistic function of its activation value, P(x_j)",
            "A randomly chosen set of weights at every step",
          ],
          correct: 2,
          translation:
            "إيه اللي بيحدد حالة الخرج (مثلًا 0/1 أو -1/1) في الـ stochastic neuron؟",
          explanation:
            "الـ stochastic neuron بتنتقل لإحدى حالتيها حسب دالة احتمالية في قيمة التنشيط P(x_j) = 1 / (1 + e^(-x_j / T)). التحديد الحتمي الثابت هو للـ binary threshold العادي.",
          tags: ["Stochastic Neuron", "Probability"],
          ref: "Lecture 01 — Slide 23",
        },
        {
          q: "21. What is a known drawback of the ReLU activation function?",
          options: [
            "Its output is strictly bounded between 0 and 1",
            "Dead neurons: once the output is 0, it might stay 0 forever",
            "It is much slower to compute than sigmoid",
            "It makes the vanishing gradient problem worse than tanh",
          ],
          correct: 1,
          translation: "إيه العيب المعروف في دالة التنشيط ReLU؟",
          explanation:
            "العيب هو الـ dead neurons (dying ReLU): لو الناتج بقى 0 ممكن يفضل 0 دايمًا. ReLU سريعة، وبتقلل مشكلة الـ vanishing gradient، ومخرجاتها مش bounded.",
          tags: ["ReLU", "Dead Neurons"],
          ref: "Lecture 01 — Slide 25",
        },
        {
          q: "22. According to the comparison table, which activation function is zero-centered?",
          options: ["ReLU", "Sigmoid", "All three are zero-centered", "Tanh"],
          correct: 3,
          translation: "حسب جدول المقارنة، أي دالة تنشيط تكون zero-centered؟",
          explanation:
            "الـ tanh مداها (-1, 1) وهي zero-centered، أما ReLU (مداها [0, infinity)) وsigmoid (مداها (0, 1)) فمش zero-centered.",
          tags: ["Tanh", "Zero-centered"],
          ref: "Lecture 01 — Slide 27",
        },
        {
          q: "23. According to the lecture, which activation function is typically used in the output layer for binary classification?",
          options: ["Sigmoid", "ReLU", "Gaussian", "Linear threshold"],
          correct: 0,
          translation:
            "حسب المحاضرة، أي دالة تنشيط بتُستخدم عادةً في الـ output layer للـ binary classification؟",
          explanation:
            "الـ sigmoid بتُستخدم في الـ output layer للـ binary classification لأن مخرجاتها بين 0 و1. أما ReLU فهي الأشهر للـ hidden layers في الشبكات العميقة.",
          tags: ["Sigmoid", "When to Use"],
          ref: "Lecture 01 — Slide 28",
        },
        {
          q: "24. In the pattern of connectivity, what does an inhibitory connection (-) do?",
          options: [
            "It increases the activation of the next neuron",
            "It means there is no connection between the neurons",
            "It copies the activation of the previous neuron unchanged",
            "It decreases the activation of the next neuron",
          ],
          correct: 3,
          translation:
            "في الـ pattern of connectivity، إيه اللي بتعمله الـ inhibitory connection (-)؟",
          explanation:
            "الـ inhibitory (-) بتقلل تنشيط النيرون التالي، والـ excitatory (+) بتزوّده، والـ absent (0) معناها مفيش اتصال.",
          tags: ["Pattern of Connectivity", "Inhibitory"],
          ref: "Lecture 01 — Slide 32",
        },
        {
          q: "25. What distinguishes a feedback (recurrent) architecture from a feedforward architecture?",
          options: [
            "The network has no hidden layers",
            "Loops occur in the network because of feedback connections",
            "The neurons use only the binary threshold function",
            "Data is passed through only one neuron",
          ],
          correct: 1,
          translation:
            "إيه اللي بيميز الـ feedback (recurrent) architecture عن الـ feedforward؟",
          explanation:
            "في الـ feedforward مفيش loops في الشبكة، أما في الـ feedback فبتحصل loops بسبب وصلات الـ feedback. عدد الـ hidden layers أو نوع الـ activation ملوش علاقة بالتمييز ده.",
          tags: ["Feedforward", "Feedback", "Architecture"],
          ref: "Lecture 01 — Slide 34",
        },
        {
          type: "essay",
          q: "1. What is a neural network? Describe its structure (layers), the function of each neuron, and some example use cases.",
          translation:
            "إيه هي الشبكة العصبية؟ صِف بنيتها (الطبقات) ووظيفة كل neuron وبعض أمثلة الاستخدام.",
          answer:
            "Neural networks are machine learning models that mimic complex functions of the human brain. They consist of interconnected nodes called neurons that process data, learn patterns, and enable tasks such as pattern recognition, decision making, or predicting outcomes.\n" +
            "Structure: layers of interconnected neurons (nodes): the input layer receives the raw data (e.g., pixel values of an image); hidden layers perform complex transformations and feature extraction; the output layer produces the final result (e.g., class label, value prediction).\n" +
            "Neuron function: each neuron computes a weighted sum of its inputs, adds a bias, and passes the result through an activation function (e.g., ReLU, sigmoid, tanh) to introduce non-linearity.\n" +
            "Use cases: image and speech recognition, natural language processing (NLP), medical diagnosis, financial forecasting, self-driving cars.",
          tags: ["Neural Network", "Structure"],
          ref: "Lecture 01 — Slides 2 and 7-12",
        },
        {
          type: "essay",
          q: "2. Explain the neuron abstraction: how the biological neuron is modeled by an artificial neuron, including the role of weights, threshold and the equation x_j.",
          translation:
            "اشرح تجريد النيرون: إزاي النيرون البيولوجي بيتمثّل بنيرون صناعي، مع دور الأوزان والـ threshold ومعادلة x_j.",
          answer:
            "Biological neurons send signals by changing them from electrical to chemical and then back to electrical. Each connection between two neurons is a synapse with a synaptic efficacy: how well the signal is passed from the presynaptic to the postsynaptic neuron.\n" +
            "Artificial neuron: the j-th neuron receives input signals s_i from possibly n sources. The connection weights w_ij model the synaptic efficacies; w_ij is the weight from neuron i to neuron j.\n" +
            "x_j = sum_{i=1..n} w_ij s_i + theta_j is a linear weighted aggregation of the impinging signals, modified by an internal threshold theta_j (the bias, w_0j with s_0 = +1).\n" +
            "The output signal is s_j = S(x_j), where S is the activation (signal) function.",
          tags: ["Artificial Neuron", "Weights", "Threshold"],
          ref: "Lecture 01 — Slides 3-6 and 13",
        },
        {
          type: "essay",
          q: "3. Describe the learning process (training) of a neural network.",
          translation: "اشرح عملية التعلّم (التدريب) في الشبكة العصبية.",
          answer:
            "Neural networks learn through training, which involves three steps:\n" +
            "1. Forward propagation: computing the output from the inputs.\n" +
            "2. Loss calculation: measuring the error between the predicted and the actual outputs.\n" +
            "3. Backpropagation: adjusting the weights to minimize the error, using algorithms such as gradient descent.\n" +
            "The cycle is repeated so that the weights improve and the loss decreases.",
          tags: ["Training", "Backpropagation"],
          ref: "Lecture 01 — Slide 10",
        },
        {
          type: "essay",
          q: "4. List the main types of neural networks mentioned in the lecture and what each is used for.",
          translation:
            "اذكر الأنواع الرئيسية للشبكات العصبية المذكورة في المحاضرة واستخدام كل نوع.",
          answer:
            "- Feedforward Neural Network (FNN): data flows in one direction.\n" +
            "- Convolutional Neural Network (CNN): used in image processing.\n" +
            "- Recurrent Neural Network (RNN): suitable for sequential data such as text or time series.\n" +
            "- Deep Neural Network (DNN): a network with multiple hidden layers.\n" +
            "Example uses: image and speech recognition, NLP, medical diagnosis, financial forecasting, self-driving cars.",
          tags: ["FNN", "CNN", "RNN", "DNN"],
          ref: "Lecture 01 — Slides 11-12",
        },
        {
          type: "essay",
          q: "5. Explain the role of the activation (signal) function and the binary threshold function, including the interpretation of the threshold.",
          translation:
            "اشرح دور الـ activation (signal) function ودالة الـ binary threshold مع تفسير الـ threshold.",
          answer:
            "After computing the total input x_j, the neuron passes it through an activation (signal) function S(x), giving the output signal s_j = S(x_j).\n" +
            "Binary threshold function: S(x_j) = 1 if x_j >= 0, and 0 if x_j < 0. The output is only 0 or 1, a two-state ON/OFF system, hence the name threshold logic unit.\n" +
            "Interpretation of threshold: x_j = sum_{i=1..n} w_ij s_i + w_0j = q_j + theta_j, where q_j is the weighted input and theta_j the bias. The neuron fires (+1) if x_j >= 0, i.e., q_j >= -theta_j; it outputs 0 if q_j < -theta_j. So the neuron compares q_j to a threshold equal to the negative of the bias. For theta_j = +3, the neuron fires when q_j >= -3.",
          tags: ["Activation Function", "Binary Threshold"],
          ref: "Lecture 01 — Slides 13-18",
        },
        {
          type: "essay",
          q: "6. Describe the linear threshold and the sigmoidal activation functions, including their formulas and parameters.",
          translation:
            "صِف دالتي الـ linear threshold والـ sigmoidal مع قوانينهم ومعاملاتهم.",
          answer:
            "Linear threshold function: S_j(x_j) = 0 for x_j <= 0; alpha_j x_j for 0 < x_j < x_m; 1 for x_j >= x_m, i.e., S_j(x_j) = max(0, min(alpha_j x_j, 1)). The slope parameter is alpha_j = 1/x_m (the lecture's figure uses alpha_j = 0.5).\n" +
            "Sigmoidal function: S_j(x_j) = 1 / (1 + e^(-lambda_j x_j)), where lambda_j is a gain scale factor. As lambda_j tends to infinity, the smooth logistic function approaches the binary threshold function.\n" +
            "Useful properties of the sigmoid: it is monotonic (always increases), continuous (no sudden jumps), and bounded (usually between 0 and 1).",
          tags: ["Linear Threshold", "Sigmoid"],
          ref: "Lecture 01 — Slides 19-21",
        },
        {
          type: "essay",
          q: "7. Explain the Gaussian activation function and stochastic neurons.",
          translation:
            "اشرح الـ Gaussian activation function والـ stochastic neurons.",
          answer:
            "Gaussian function: S_j(x_j) = exp( -(x_j - c_j)^2 / (2 sigma_j^2) ), where sigma_j is the spread factor and c_j is the center. Varying the spread makes the function sharper or more diffuse; changing the center shifts it right or left along the activation axis. It is an example of a non-monotonic activation function (bell-shaped, useful in radial basis function networks).\n" +
            "Stochastic neurons: the signal is two-state, S_j in {0, 1} or {-1, 1}. The neuron switches into these states depending on a probabilistic function of its activation value: P(x_j) = 1 / (1 + e^(-x_j / T)), where T is a temperature parameter.",
          tags: ["Gaussian", "Stochastic Neuron"],
          ref: "Lecture 01 — Slides 22-23",
        },
        {
          type: "essay",
          q: "8. Compare ReLU, sigmoid and tanh (range, zero-centering, gradient issues, speed) and state when to use each.",
          translation:
            "قارن بين ReLU وsigmoid وtanh (المدى، الـ zero-centering، مشاكل الـ gradient، السرعة) واذكر متى تُستخدم كل واحدة.",
          answer:
            "ReLU: S(x) = max(0, x); output range [0, infinity); not zero-centered; non-linear; gradient issue: dying ReLU (dead neurons); fast; simple, helps reduce vanishing gradient, but not bounded.\n" +
            "Sigmoid: range (0, 1); not zero-centered; non-linear; vanishing gradient; slower.\n" +
            "Tanh: f(x) = (e^x - e^-x) / (e^x + e^-x) = sinh(x)/cosh(x); range (-1, 1); zero-centered; non-linear; vanishing gradient; slower.\n" +
            "When to use: ReLU is the most common and best for hidden layers in deep networks; sigmoid for binary classification in the output layer; tanh can be better than sigmoid in hidden layers when a zero-centered output helps. Softmax is used for multi-class classification. Choosing the right function depends on the task.",
          tags: ["ReLU", "Sigmoid", "Tanh"],
          ref: "Lecture 01 — Slides 24-29",
        },
        {
          type: "essay",
          q: "9. List and explain the eight components of neural networks mentioned in the lecture.",
          translation:
            "اذكر واشرح المكونات الثمانية للشبكات العصبية المذكورة في المحاضرة.",
          answer:
            "1. Neurons: input (receive external data), hidden (compute intermediate functions and extract patterns), output (generate final results).\n" +
            "2. Activation state vector: X = (x_1, ..., x_n)^T in R^n, the activation levels of the neurons.\n" +
            "3. Signal (activation) function: generates the output signal of a neuron from its activation.\n" +
            "4. Pattern of connectivity: how neurons are connected; connections can be excitatory (+, increases the next neuron's activation), inhibitory (-, decreases it), or absent (0).\n" +
            "5. Activity aggregation rule: how a neuron combines input signals, usually the dot product of the input vector and the weight vector, giving the total input before the activation function.\n" +
            "6. Activation rule: determines the new activation level of a neuron from its current activation and its external inputs.\n" +
            "7. Learning rule: modifies connection strengths based on external stimuli and network performance, aiming to improve performance.\n" +
            "8. Environment: deterministic (noiseless) or stochastic (noisy).",
          tags: ["Eight Components", "Connectivity"],
          ref: "Lecture 01 — Slides 30-33",
        },
        {
          type: "essay",
          q: "10. Explain feedforward and feedback architectures, and the difference between heteroassociators and autoassociators.",
          translation:
            "اشرح معماريتي feedforward وfeedback والفرق بين heteroassociators وautoassociators.",
          answer:
            "Local groups of neurons can be connected in either a feedforward architecture, in which the network has no loops, or a feedback (recurrent) architecture, in which loops occur because of feedback connections.\n" +
            "Heteroassociator: a multilayered network that associates vectors from one space with vectors of another space, f: R^n -> R^p (maps two different patterns, one as input and the other as output).\n" +
            "Autoassociator: when the neurons in a single field connect back onto themselves, the network associates a single pattern in R^n with itself, f: R^n -> R^n.\n" +
            "The figures show a feedforward heteroassociator, a feedback autoassociator and a feedback heteroassociator.",
          tags: ["Feedforward", "Feedback", "Autoassociator"],
          ref: "Lecture 01 — Slides 34-35",
        },
        {
          type: "essay",
          q: "11. Calculation: A neuron has inputs s = (1, 0, 1), weights w = (0.5, -0.3, 0.8) and threshold theta = -1, and uses the binary threshold function. Compute x_j and the output. Then repeat for theta = -2.",
          translation:
            "مسألة حسابية: neuron مدخلاته s = (1, 0, 1) وأوزانه w = (0.5, -0.3, 0.8) والـ threshold theta = -1، وبيستخدم binary threshold function. احسب x_j والخرج، وبعدين كرر الحساب لـ theta = -2.",
          answer:
            "Formula: x_j = sum w_ij s_i + theta_j, output = 1 if x_j >= 0, else 0.\n" +
            "q_j = 0.5 x 1 + (-0.3) x 0 + 0.8 x 1 = 1.3.\n" +
            "Case theta = -1: x_j = 1.3 - 1 = 0.3 >= 0, so the output is 1 (equivalently q_j = 1.3 >= -theta = 1).\n" +
            "Case theta = -2: x_j = 1.3 - 2 = -0.7 < 0, so the output is 0 (equivalently q_j = 1.3 < -theta = 2).\n" +
            "A more negative bias raises the firing threshold.",
          tags: ["Net Input", "Binary Threshold"],
          ref: "Lecture 01 — Slides 5-6 and 16-18",
        },
        {
          type: "essay",
          q: "12. Calculation: For the linear threshold function with alpha_j = 0.5 (so x_m = 2), compute the output for x_j = -1, x_j = 1.2 and x_j = 3.",
          translation:
            "مسألة حسابية: للـ linear threshold function بـ alpha_j = 0.5 (يعني x_m = 2)، احسب الخرج لـ x_j = -1 وx_j = 1.2 وx_j = 3.",
          answer:
            "Formula: S_j(x_j) = max(0, min(alpha_j x_j, 1)), with alpha_j = 1/x_m = 0.5, so x_m = 2.\n" +
            "x_j = -1: alpha x = -0.5; min(-0.5, 1) = -0.5; max(0, -0.5) = 0. Output = 0 (since x_j <= 0).\n" +
            "x_j = 1.2: alpha x = 0.6; min(0.6, 1) = 0.6; max(0, 0.6) = 0.6. Output = 0.6 (linear region 0 < x_j < 2).\n" +
            "x_j = 3: alpha x = 1.5; min(1.5, 1) = 1; output = 1 (saturated since x_j >= x_m = 2).",
          tags: ["Linear Threshold"],
          ref: "Lecture 01 — Slide 19",
        },
        {
          type: "essay",
          q: "13. Calculation: Using the sigmoid S(x) = 1 / (1 + e^(-lambda x)), compute the output for (lambda = 1, x = 0), (lambda = 1, x = 2), (lambda = 1, x = -2) and (lambda = 3, x = 1).",
          translation:
            "مسألة حسابية: باستخدام الـ sigmoid S(x) = 1 / (1 + e^(-lambda x))، احسب الخرج للحالات (lambda = 1, x = 0) و(lambda = 1, x = 2) و(lambda = 1, x = -2) و(lambda = 3, x = 1).",
          answer:
            "lambda = 1, x = 0: S = 1 / (1 + e^0) = 1/2 = 0.5.\n" +
            "lambda = 1, x = 2: S = 1 / (1 + e^-2) = 1 / (1 + 0.1353) = 0.881.\n" +
            "lambda = 1, x = -2: S = 1 / (1 + e^2) = 1 / (1 + 7.389) = 0.119.\n" +
            "lambda = 3, x = 1: S = 1 / (1 + e^-3) = 1 / (1 + 0.0498) = 0.953.\n" +
            "A larger gain lambda gives a steeper curve (closer to the binary threshold function); all outputs stay inside (0, 1).",
          tags: ["Sigmoid", "Gain Factor"],
          ref: "Lecture 01 — Slides 20-21",
        },
        {
          type: "essay",
          q: "14. Calculation: Compute the outputs of ReLU and tanh for the inputs x = -3, x = 0 and x = 2, and state the output range of each function.",
          translation:
            "مسألة حسابية: احسب خرج الـ ReLU والـ tanh للمدخلات x = -3 وx = 0 وx = 2، واذكر مدى الخرج لكل دالة.",
          answer:
            "ReLU(x) = max(0, x): ReLU(-3) = 0; ReLU(0) = 0; ReLU(2) = 2. Range: [0, infinity).\n" +
            "tanh(x) = (e^x - e^-x) / (e^x + e^-x): tanh(-3) = (0.0498 - 20.086) / (0.0498 + 20.086) = -0.995; tanh(0) = 0; tanh(2) = (7.389 - 0.1353) / (7.389 + 0.1353) = 0.964. Range: (-1, 1).\n" +
            "Note: tanh is zero-centered and saturates at -1 and +1, while ReLU is not bounded above.",
          tags: ["ReLU", "Tanh"],
          ref: "Lecture 01 — Slides 24-27",
        },
        {
          type: "essay",
          q: "15. Calculation: Compute the Gaussian activation S(x) = exp(-(x - c)^2 / (2 sigma^2)) with c = 3 and sigma = 2 for x = 3, x = 5 and x = 0. Then compute the stochastic neuron probability P(x) = 1 / (1 + e^(-x/T)) for T = 2 with x = 2 and x = -2.",
          translation:
            "مسألة حسابية: احسب الـ Gaussian activation بـ c = 3 وsigma = 2 لـ x = 3 وx = 5 وx = 0. وبعدين احسب احتمال الـ stochastic neuron بـ T = 2 لـ x = 2 وx = -2.",
          answer:
            "Gaussian (c = 3, sigma = 2, 2 sigma^2 = 8):\n" +
            "x = 3: exp(0) = 1 (maximum at the center).\n" +
            "x = 5: exp(-(2)^2 / 8) = exp(-0.5) = 0.607.\n" +
            "x = 0: exp(-(-3)^2 / 8) = exp(-1.125) = 0.325.\n" +
            "The function is symmetric around c = 3 and non-monotonic.\n" +
            "Stochastic neuron (T = 2):\n" +
            "x = 2: P = 1 / (1 + e^(-2/2)) = 1 / (1 + e^-1) = 1 / (1 + 0.368) = 0.731.\n" +
            "x = -2: P = 1 / (1 + e^(1)) = 1 / (1 + 2.718) = 0.269.\n" +
            "So the neuron takes the state 1 with probability 0.731 when x = 2, and with probability 0.269 when x = -2.",
          tags: ["Gaussian", "Stochastic Neuron"],
          ref: "Lecture 01 — Slides 22-23",
        },
      ],
    },
  ],
});
