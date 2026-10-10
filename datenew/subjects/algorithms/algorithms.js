/* بيانات مادة: تحليل وتصميم الخوارزميات (algorithms)
   - المحاضرات (PDF) في lectures/  والأسئلة في questions/
   - المسارات دايمًا من جذر المشروع: datenew/subjects/algorithms/lectures/lec-01.pdf
   - انسخي شكل المحاضرة/الأسئلة من مادة شغالة عندك (دليل صاحب المنصة، الخطوة 4 و5) */
subjects.push({
  name: "تحليل وتصميم الخوارزميات",
  en: "Design and Analysis of Algorithms",
  icon: "🧮",
  slug: "algorithms",
  lectures: [
    {
      t: "المحاضرة 1 — مقدمة في تحليل الخوارزميات ومفاهيم التعقيد",
      d: "مفهوم الخوارزميات، حساب التعقيد الزمني والمكاني (Time & Space Complexity)، وتحليل الأداء الأساسي.",
      id: "lec-01",
      pdf: "datenew/subjects/algorithms/lectures/Lecture 1.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/CS311_Lecture1_Intro_Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات أساسيات تحليل الخوارزميات وتعقيد الوقت",
          links: [
            {
              t: "A Grade - مقدمة وتحليل الخوارزميات",
              d: "شرح مفاهيم التعقيد الزمني والمكاني وحساب عدد العمليات",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=vZjB3KwnzyI",
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
          description: "محاضرات عالمية في أساسيات التحليل",
          links: [
            {
              t: "Abdul Bari - Introduction to Algorithm Analysis",
              d: "شرح مبسط لأساسيات تحليل الخوارزميات وحساب Time Complexity",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=7Y7UcBjUPYI",
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
          description: "مقالات أساسية في تحليل الأداء",
          links: [
            {
              t: "GeeksforGeeks - Analysis of Algorithms",
              d: "دليل شامل لأنواع التحليل والتعقيد الزمني والمكاني",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ─── MCQ ───
        {
          q: "What is the stated purpose of the course?",
          options: [
            "An introduction to database administration",
            "A rigorous introduction to the design and analysis of algorithms",
            "A hands-on introduction to a programming language",
            "A review of discrete mathematics proofs",
          ],
          correct: 1,
        },
        {
          q: "According to the first slide, the course is NOT:",
          options: [
            "A course that uses a textbook",
            "A lab or programming course, and not a math course either",
            "A course about algorithms",
            "A course with an exam",
          ],
          correct: 1,
        },
        {
          q: "Which textbook is used in the course?",
          options: [
            "The Art of Computer Programming by Knuth",
            "Introduction to Algorithms by Cormen, Leiserson, Rivest, and Stein (3rd edition)",
            "Data Structures and Algorithms in Java by Goodrich",
            "Algorithms by Sedgewick and Wayne (4th edition)",
          ],
          correct: 1,
        },
        {
          q: "How is the textbook described in the slides?",
          options: [
            "A book only for the teaching assistant",
            "An optional book that is rarely needed",
            "An excellent reference you should own",
            "A book replaced entirely by the slides",
          ],
          correct: 2,
        },
        {
          q: "What percentage of the grade is class work?",
          options: ["10%", "40%", "25%", "50%"],
          correct: 2,
        },
        {
          q: "What percentage of the grade is the midterm exam?",
          options: ["25%", "10%", "30%", "50%"],
          correct: 0,
        },
        {
          q: "What percentage of the grade is the final exam?",
          options: ["25%", "60%", "40%", "50%"],
          correct: 3,
        },
        {
          q: "What is the prerequisite of the course?",
          options: [
            "CS 211 Data Structures and Algorithms",
            "CS 311 Operating Systems",
            "CS 101 Introduction to Programming",
            "CS 411 Theory of Computation",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Learning to administer computer networks",
            "Learning the main classic algorithms in various domains",
            "Learning to build graphical user interfaces",
            "Learning to design relational databases",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Learning to write operating system kernels",
            "Learning to manage software projects",
            "Learning techniques for designing efficient algorithms",
            "Learning hardware circuit design",
          ],
          correct: 2,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Avoiding the use of design techniques",
            "Studying only theoretical proofs with no problem solving",
            "Memorizing the textbook word for word",
            "Applying the algorithms and design techniques to solve problems",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is a stated learning outcome of the course?",
          options: [
            "Knowing the history of programming languages",
            "Knowing only the syntax of pseudocode",
            "Having a sense of the complexities of various problems in different domains",
            "Knowing the prices of different computer systems",
          ],
          correct: 2,
        },
        {
          q: "In this course, what do we care about most?",
          options: [
            "The exact running time on one specific computer",
            "Asymptotic performance",
            "The length of the source code",
            "The programming language used",
          ],
          correct: 1,
        },
        {
          q: "Asymptotic performance asks:",
          options: [
            "How many programmers are needed to write it?",
            "How many lines of code does the algorithm have?",
            "How does the algorithm behave as the problem size gets very large?",
            "How fast is the algorithm on a tiny input?",
          ],
          correct: 2,
        },
        {
          q: "Which two resources are mentioned as being analyzed asymptotically?",
          options: [
            "Running time and memory/storage requirements",
            "Disk color and screen size",
            "Memory and network bandwidth only",
            "Running time and electricity cost",
          ],
          correct: 0,
        },
        {
          q: "The slides say that by now you should have an intuitive feel for which notation?",
          options: [
            "Roman numerals",
            "Binary-tree notation",
            "Matrix notation",
            "Asymptotic (big-O) notation",
          ],
          correct: 3,
        },
        {
          q: "Which running times does the slide use as examples when asking what big-O notation means?",
          options: [
            "O(1), O(log n), and O(2ⁿ)",
            "O(n), O(n²), and O(n lg n)",
            "O(n!), O(nⁿ), and O(√n)",
            "O(n³), O(n⁴), and O(n⁵)",
          ],
          correct: 1,
        },
        {
          q: "What question about big-O is posed for the student to think about?",
          options: [
            "How does asymptotic running time relate to asymptotic memory usage?",
            "How does big-O relate to the color of the monitor?",
            "How does big-O relate to the price of a computer?",
            "How does big-O relate to the number of lines of code?",
          ],
          correct: 0,
        },
        {
          q: "What is the first task stated in the notation section?",
          options: [
            "To design a user interface",
            "To define asymptotic notation more formally and completely",
            "To memorize the textbook index",
            "To install the software for the course",
          ],
          correct: 1,
        },
        {
          q: "Analysis of algorithms is performed with respect to:",
          options: [
            "A specific brand of computer",
            "A specific programming language only",
            "A random guess",
            "A computational model",
          ],
          correct: 3,
        },
        {
          q: "Which computational model will usually be used?",
          options: [
            "A distributed multi-processor cluster",
            "A quantum computer",
            "A GPU-only machine",
            "A generic uniprocessor random-access machine (RAM)",
          ],
          correct: 3,
        },
        {
          q: "What does RAM stand for in this context (the model)?",
          options: [
            "Read-only access memory",
            "Random-access machine",
            "Recursive array machine",
            "Rapid algorithm model",
          ],
          correct: 1,
        },
        {
          q: "In the RAM model, how expensive is it to access memory?",
          options: [
            "All memory is equally expensive to access",
            "Memory cost grows with the address",
            "Disk access is cheaper than RAM access",
            "Registers are cheaper than main memory",
          ],
          correct: 0,
        },
        {
          q: "Which of the following does the RAM model assume about concurrency?",
          options: [
            "Unlimited concurrent operations",
            "No concurrent operations",
            "Concurrent operations only for sorting",
            "Exactly two concurrent operations",
          ],
          correct: 1,
        },
        {
          q: "In the RAM model, how long do all reasonable instructions take?",
          options: [
            "A random amount of time",
            "Time proportional to the input size",
            "Unit time",
            "Time proportional to the number of bits",
          ],
          correct: 2,
        },
        {
          q: "Which kind of operation is explicitly an exception to the 'unit time' assumption?",
          options: ["Function calls", "Addition", "Assignment", "Comparison"],
          correct: 0,
        },
        {
          q: "What does the RAM model assume about word size?",
          options: [
            "Word size is unlimited",
            "Word size is always one bit",
            "Word size grows with the input size",
            "Constant word size, unless we are explicitly manipulating bits",
          ],
          correct: 3,
        },
        {
          q: "Which of the following is NOT an assumption of the RAM model?",
          options: [
            "Memory access time depends on the memory location",
            "All reasonable instructions take unit time",
            "There are no concurrent operations",
            "All memory is equally expensive to access",
          ],
          correct: 0,
        },
        {
          q: "Time and space complexity are generally a function of:",
          options: [
            "The color of the output",
            "The input size",
            "The language's syntax",
            "The programmer's experience",
          ],
          correct: 1,
        },
        {
          q: "For sorting, how is input size characterized?",
          options: [
            "By the number of loops in the code",
            "By the total number of bits",
            "By the number of nodes and edges",
            "By the number of input items",
          ],
          correct: 3,
        },
        {
          q: "For multiplication, how is input size characterized?",
          options: [
            "By the number of nodes and edges",
            "By the total number of bits",
            "By the number of input items",
            "By the number of function calls",
          ],
          correct: 1,
        },
        {
          q: "For graph algorithms, how is input size characterized?",
          options: [
            "By the number of input items only",
            "By the number of colors",
            "By the total number of bits only",
            "By the number of nodes and edges",
          ],
          correct: 3,
        },
        {
          q: "In the lecture, running time is defined as:",
          options: [
            "The number of lines in the source code",
            "The amount of memory used",
            "The number of seconds on a stopwatch",
            "The number of primitive steps that are executed",
          ],
          correct: 3,
        },
        {
          q: "Except for function calls, most statements roughly require:",
          options: [
            "The same amount of time",
            "No time at all",
            "An amount of time that depends on the line number",
            "Exponentially more time each time they run",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is given as an example of a statement taking roughly constant time?",
          options: [
            "Sorting an array",
            "Searching a graph",
            "y = m * x + b",
            "Calling a recursive sort on a large array",
          ],
          correct: 2,
        },
        {
          q: "What does worst-case analysis provide?",
          options: [
            "The expected running time over random inputs",
            "A lower bound on running time",
            "An upper bound on running time, which is an absolute guarantee",
            "No information about running time",
          ],
          correct: 2,
        },
        {
          q: "What does average-case analysis provide?",
          options: [
            "The best possible running time",
            "An absolute guarantee on running time",
            "The expected running time",
            "The memory used",
          ],
          correct: 2,
        },
        {
          q: "Why should average-case analysis be 'treated with care', according to the slides?",
          options: [
            "Because it ignores the input size",
            "Because it always gives a wrong answer",
            "Because it only works for sorting",
            "Because it is unclear what 'average' means (random equally likely inputs vs. real-life inputs)",
          ],
          correct: 3,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Describe the RAM (random-access machine) model used for analyzing algorithms in this course.",
          answer:
            "The analysis is performed with respect to a computational model; usually a generic uniprocessor random-access machine (RAM) is used:\n\n" +
            "• All memory is equally expensive to access.\n\n" +
            "• There are no concurrent operations.\n\n" +
            "• All reasonable instructions take unit time (except, of course, function calls).\n\n" +
            "• Constant word size, unless we are explicitly manipulating bits.",
          tags: ["CS311", "Lecture 1", "Asymptotic performance"],
          ref: "CS 311 — Lecture 1",
        },
        {
          type: "essay",
          q: "Explain how input size is characterized for different problems, and how running time is measured.",
          answer:
            "Input size: time and space complexity are generally a function of the input size, and how it is characterized depends on the problem:\n\n" +
            "• Sorting: the number of input items.\n\n" +
            "• Multiplication: the total number of bits.\n\n" +
            "• Graph algorithms: the number of nodes and edges.\n\n" +
            "\n\n" +
            "Running time: the number of primitive steps that are executed. Except for the time of executing a function call, most statements (e.g., y = m*x + b, c = 5/9*(t-32), z = f(x) + g(y)) roughly require the same amount of time. We can be more exact if need be.",
          tags: ["CS311", "Lecture 1", "Asymptotic performance"],
          ref: "CS 311 — Lecture 1",
        },
        {
          type: "essay",
          q: "Compare worst-case and average-case analysis.",
          answer:
            "Worst case: provides an upper bound on running time — an absolute guarantee.\n\n" +
            "\n\n" +
            "Average case: provides the expected running time. It is very useful but must be treated with care, because it is not obvious what 'average' means: random (equally likely) inputs, or real-life inputs.",
          tags: ["CS311", "Lecture 1", "Asymptotic performance"],
          ref: "CS 311 — Lecture 1",
        },
      ],
    },
    {
      t: "المحاضرة 2 — الترميزات المقاربة وخوارزميات الترتيب والبحث",
      d: "شرح Asymptotic Notations (Big-O, Omega, Theta)، وخوارزميات Insertion Sort, Sequential Search, وQuick Sort.",
      id: "algorithms-lecture-02",
      pdf: "datenew/subjects/algorithms/lectures/Lecture 2.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lecture-02-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات الترميزات المقاربة وخوارزميات الترتيب",
          links: [
            {
              t: "A Grade - Asymptotic Notations & Quick Sort",
              d: "شرح Big-O, Theta, Omega وخوارزميات البحث والترتيب",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=vZjB3KwnzyI",
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
          description: "محاضرات MIT وعبد الباري للترتيب والبحث",
          links: [
            {
              t: "MIT 6.006 - Asymptotic Complexity & Insertion Sort",
              d: "شرح أكاديمي للترتيب والترميزات المقاربة من MIT",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=ZA-tUyM_y7s",
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
          description: "جداول مرجعية لتعقيد الخوارزميات",
          links: [
            {
              t: "Big-O Algorithm Complexity Cheat Sheet",
              d: "جدول معيار المقارنة السريع لتعقيد الوقت والمساحة لجميع خوارزميات الترتيب والبحث",
              icon: "📚",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://www.bigocheatsheet.com/",
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
          description: "محاكاة تفاعلية لحركة العناصر أثناء الترتيب",
          links: [
            {
              t: "VisuAlgo - Sorting & Searching",
              d: "محاكاة مرئية تفاعلية لخوارزميات Insertion Sort, Quick Sort, Binary Search",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح التفاعليات",
                  url: "https://visualgo.net/en/sorting",
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
          q: "1. What is an algorithm?",
          options: [
            "A program written in a specific language that only runs on one compiler",
            "A sequence of instructions that keeps running until it finds an answer, even if it never stops",
            "A sequence of unambiguous instructions that produces the required output for any legitimate input in a finite amount of time",
            "A hardware design that increases computer speed",
          ],
          correct: 2,
          translation: "ما هي الخوارزمية (Algorithm)؟",
          explanation:
            "التعريف في المحاضرة: خطوات واضحة غير ملتبسة تعطي المخرج المطلوب لأي مدخل صحيح في زمن منتهي. الخيار الذي يسمح بعدم التوقف غلط لأن الزمن لازم يكون منتهي، والخيارات الأخرى تخلط الخوارزمية بالبرنامج أو بالعتاد.",
          tags: ["Algorithm", "Definition"],
          ref: "Lecture 02 — Slide: Algorithm",
        },
        {
          q: "2. Which pair does the lecture list under 'Does there exist a better algorithm?'",
          options: [
            "Lower bounds and optimality",
            "Correctness and readability",
            "Compilation time and portability",
            "Parallelism and caching",
          ],
          correct: 0,
          translation: "أي زوج تذكره المحاضرة تحت سؤال: هل توجد خوارزمية أفضل؟",
          explanation:
            "المحاضرة تربط هذا السؤال بالحدود الدنيا (Lower bounds) والأمثلية (Optimality). الصحة (Correctness) من معايير الحكم على جودة الخوارزمية وليست من هذا السؤال.",
          tags: ["Lower Bounds", "Optimality"],
          ref: "Lecture 02 — Slide: Analysis of Algorithms",
        },
        {
          q: "3. Why should algorithm analysis NOT depend on the computing platform, language, or compiler?",
          options: [
            "Because all computers run at exactly the same speed",
            "Because compilers never change the running time",
            "Because programming languages are all identical",
            "Because it should reveal the intrinsic properties of the algorithm itself",
          ],
          correct: 3,
          translation:
            "لماذا يجب ألا يعتمد تحليل الخوارزمية على المنصة أو اللغة أو المترجم؟",
          explanation:
            "المحاضرة تقول إن التحليل يجب أن يكشف الخصائص الجوهرية للخوارزمية نفسها. الخيارات الأخرى ادعاءات غير صحيحة (الأجهزة تختلف في السرعة والمترجمات تؤثر على الزمن).",
          tags: ["Machine Model", "Analysis"],
          ref: "Lecture 02 — Slide: Machine Model",
        },
        {
          q: "4. Which of the following is an elementary step in the machine model?",
          options: [
            "Sorting an array of n elements",
            "Assigning a value to a scalar variable",
            "Searching a database for a key",
            "Multiplying two n x n matrices",
          ],
          correct: 1,
          translation:
            "أي مما يلي يعتبر خطوة أولية (Elementary step) في نموذج الآلة؟",
          explanation:
            "الخطوات الأولية هي العمليات الحسابية والمنطقية والمقارنة وإسناد قيمة لمتغير بسيط. الترتيب والبحث وضرب المصفوفات عمليات مركبة تتكون من خطوات كثيرة.",
          tags: ["Elementary Steps", "Machine Model"],
          ref: "Lecture 02 — Slide: Machine Model",
        },
        {
          q: "5. Assume a computer speed of 10^6 IPS and a database of size n = 10^6. About how long does an algorithm with time complexity n^2 take?",
          options: [
            "About 1 second",
            "About 20 seconds",
            "About 40 quadrillion years",
            "About 12 days",
          ],
          correct: 3,
          translation:
            "بافتراض سرعة 10^6 تعليمة في الثانية وحجم مدخل n = 10^6، كم يقارب زمن خوارزمية تعقيدها n^2؟",
          explanation:
            "n^2 = 10^12 عملية، والسرعة 10^6 عملية في الثانية، فالزمن 10^6 ثانية وهو حوالي 12 يوم. الثانية الواحدة تخص n، و20 ثانية تخص n log n، و40 كوادريليون سنة تخص 2^n.",
          tags: ["Time Complexity", "Execution Time"],
          ref: "Lecture 02 — Slide: Example (execution time table)",
        },
        {
          q: "6. In the same setting (10^6 IPS, n = 10^6), how long does an n log n algorithm take?",
          options: [
            "About 1 second",
            "About 20 seconds",
            "About 12 days",
            "About 40 quadrillion years",
          ],
          correct: 1,
          translation:
            "في نفس الفرض (10^6 IPS و n = 10^6)، كم يستغرق خوارزمية n log n؟",
          explanation:
            "n log n حوالي 20 × 10^6 عملية، فالزمن حوالي 20 ثانية. الثانية الواحدة لـ n فقط، و12 يوم لـ n^2.",
          tags: ["n log n", "Execution Time"],
          ref: "Lecture 02 — Slide: Example (execution time table)",
        },
        {
          q: "7. Which of the following is a use of time complexity according to the lecture?",
          options: [
            "It tells us how efficient a design is before its costly implementation",
            "It guarantees that the program has no bugs",
            "It gives the exact running time in seconds on every machine",
            "It automatically reduces the memory used",
          ],
          correct: 0,
          translation: "أي مما يلي من فوائد التعقيد الزمني حسب المحاضرة؟",
          explanation:
            "من فوائده أنه يخبرنا بكفاءة التصميم قبل تكلفة التنفيذ، ويكشف نقاط الاختناق ويقارن الخوارزميات. هو لا يضمن خلو البرنامج من الأخطاء ولا يعطي زمنًا دقيقًا بالثواني ولا يقلل الذاكرة.",
          tags: ["Time Complexity", "Efficiency"],
          ref: "Lecture 02 — Slide: Time Complexity",
        },
        {
          q: "8. What is T(n) = 23n^3 + 5n^2 log n + 7n log^2 n + 4 log n + 6 in Theta notation?",
          options: ["Θ(n^2 log n)", "Θ(23n^3)", "Θ(n^3)", "Θ(n^3 + n^2 log n)"],
          correct: 2,
          translation:
            "ما قيمة T(n) = 23n^3 + 5n^2 log n + 7n log^2 n + 4 log n + 6 بترميز Theta؟",
          explanation:
            "نحذف الحدود الأقل رتبة ثم المعامل الثابت للحد الأكبر فيبقى Θ(n^3). كتابة Θ(23n^3) أو إبقاء حد إضافي غلط لأن الثوابت والحدود الصغرى تُحذف.",
          tags: ["Theta", "Dominant Term"],
          ref: "Lecture 02 — Slide: T(n) = Θ(f(n))",
        },
        {
          q: "9. Why do we drop the constant multiplicative factor when simplifying T(n)?",
          options: [
            "Because constant factors are always equal to 1",
            "With a 10 times faster computer the leading coefficient changes, so it is technology dependent anyway",
            "Because constants make the algorithm slower",
            "Because the leading term never affects behavior for large n",
          ],
          correct: 1,
          translation: "لماذا نحذف المعامل الثابت عند تبسيط T(n)؟",
          explanation:
            "لأن المعامل يتغير مع التكنولوجيا (حاسوب أسرع 10 مرات يقسمه على 10) فهو يعتمد على التقنية. الخيار الأخير غلط لأن الحد الأكبر هو الذي يحدد السلوك عند القيم الكبيرة.",
          tags: ["Constants", "Simplification"],
          ref: "Lecture 02 — Slide: T(n) = Θ(f(n))",
        },
        {
          q: "10. Which ordering of function classes is correct (from slowest to fastest growth)?",
          options: [
            "Constant << Polynomial << Logarithmic << Exponential << Poly-logarithmic << Factorial",
            "Logarithmic << Constant << Poly-logarithmic << Polynomial << Factorial << Exponential",
            "Constant << Logarithmic << Polynomial << Poly-logarithmic << Factorial << Exponential",
            "Constant << Logarithmic << Poly-logarithmic << Polynomial << Exponential << Factorial",
          ],
          correct: 3,
          translation:
            "ما الترتيب الصحيح لفئات الدوال من الأبطأ نموًا إلى الأسرع؟",
          explanation:
            "الترتيب المذكور في المحاضرة هو ثابت ثم لوغاريتمي ثم لوغاريتمي متعدد الحدود ثم كثير حدود ثم أسي ثم Factorial. الخيارات الأخرى تبدل مواضع بعض الفئات.",
          tags: ["Growth Rates", "Ordering Functions"],
          ref: "Lecture 02 — Slide: Ordering Functions",
        },
        {
          q: "11. Which statement defines f(n) = Θ(g(n))?",
          options: [
            "There exist positive c1, c2, n0 such that c1 g(n) ≤ f(n) ≤ c2 g(n) for all n ≥ n0",
            "There exist c, n0 > 0 such that f(n) ≤ c g(n) for all n ≥ n0",
            "There exist c, n0 > 0 such that c g(n) ≤ f(n) for all n ≥ n0",
            "For every c > 0 there exists n0 such that f(n) < c g(n) for all n ≥ n0",
          ],
          correct: 0,
          translation: "أي عبارة تعرّف f(n) = Θ(g(n))؟",
          explanation:
            "Theta حد محكم من الجهتين: ثابتان c1 و c2 يحصران f بين c1·g و c2·g. الخيار الثاني تعريف Big Oh، والثالث تعريف Big Omega، والرابع تعريف little o.",
          tags: ["Theta", "Tight Bound"],
          ref: "Lecture 02 — Slide: Theta: Asymptotic Tight Bound",
        },
        {
          q: "12. What does f(n) = O(g(n)) mean?",
          options: [
            "g(n) is an asymptotic lower bound of f(n)",
            "f(n) < c g(n) for every c > 0 when n is large enough",
            "g(n) is an asymptotic upper bound: f(n) ≤ c g(n) for all n ≥ n0 for some c, n0 > 0",
            "f(n) is squeezed between c1 g(n) and c2 g(n)",
          ],
          correct: 2,
          translation: "ماذا تعني f(n) = O(g(n))؟",
          explanation:
            "Big Oh حد أعلى: توجد c و n0 بحيث f(n) ≤ c·g(n). الخيار الثاني Omega، والثالث little o (لكل c)، والرابع Theta.",
          tags: ["Big Oh", "Upper Bound"],
          ref: "Lecture 02 — Slide: Big Oh: Asymptotic Upper Bound",
        },
        {
          q: "13. Which statement defines f(n) = o(g(n)) (little oh)?",
          options: [
            "There exist c, n0 > 0 such that f(n) ≤ c g(n) for all n ≥ n0",
            "For every c > 0 there exists n0 > 0 such that c g(n) < f(n) for all n ≥ n0",
            "There exist c1, c2, n0 > 0 such that c1 g(n) ≤ f(n) ≤ c2 g(n)",
            "For every c > 0 there exists n0 > 0 such that f(n) < c g(n) for all n ≥ n0",
          ],
          correct: 3,
          translation: "أي عبارة تعرّف f(n) = o(g(n))؟",
          explanation:
            "little o تتطلب تحقق f(n) < c·g(n) لكل c > 0 مهما صغرت، وهذا حد أعلى غير محكم. الخيار الأول Big Oh، والثاني little omega، والثالث Theta.",
          tags: ["Little Oh", "Non-tight Bound"],
          ref: "Lecture 02 — Slide: Little oh: Non-tight Asymptotic Upper Bound",
        },
        {
          q: "14. If L = lim (n→∞) f(n)/g(n) = 0, which conclusion is correct?",
          options: [
            "f(n) = ω(g(n))",
            "f(n) = o(g(n)) and f(n) = O(g(n))",
            "f(n) = Θ(g(n))",
            "f(n) = Ω(g(n)) only",
          ],
          correct: 1,
          translation: "إذا كانت L = lim f(n)/g(n) = 0 فما النتيجة الصحيحة؟",
          explanation:
            "عندما تكون النهاية صفرًا فرتبة نمو f أقل من g، فتكون f = o(g) وأيضًا O(g). لا تصح Θ أو ω أو Ω لأنها تتطلب أن f لا تنمو أبطأ من g.",
          tags: ["Ratio Limit", "Little Oh"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
        {
          q: "15. If L = lim (n→∞) f(n)/g(n) = ∞, which conclusion is correct?",
          options: [
            "f(n) = o(g(n))",
            "f(n) = Θ(g(n))",
            "f(n) = ω(g(n))",
            "f(n) = O(g(n))",
          ],
          correct: 2,
          translation: "إذا كانت L = lim f(n)/g(n) = ∞ فما النتيجة الصحيحة؟",
          explanation:
            "النهاية اللانهائية تعني أن f تنمو أسرع من g، فتكون f = ω(g) وأيضًا Ω(g). كل من o و Θ و O يعني أن f لا تتفوق على g.",
          tags: ["Ratio Limit", "Little Omega"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
        {
          q: "16. How are log_b n and log_c n related asymptotically?",
          options: [
            "log_b n = Θ(log_c n), because the limit of their ratio is the constant log_b c",
            "log_b n = o(log_c n)",
            "log_b n = ω(log_c n)",
            "They are not comparable",
          ],
          correct: 0,
          translation: "ما العلاقة التقاربية بين log_b n و log_c n؟",
          explanation:
            "log_b n = log_b c · log_c n، فنسبة الدالتين ثابت موجب (log_b c)، وبالتالي Θ. لو كانت النسبة صفرًا أو ∞ لكانت o أو ω.",
          tags: ["Logarithms", "Ratio Limit"],
          ref: "Lecture 02 — Slide: Examples: log_b n vs. log_c n",
        },
        {
          q: "17. According to the Big O Fact, a polynomial of degree k is:",
          options: ["O(n^(k-1))", "O(n^k)", "O(k·n)", "O(2^k)"],
          correct: 1,
          translation: "حسب حقيقة Big O، كثيرة الحدود من الدرجة k هي:",
          explanation:
            "تُثبت المحاضرة أن f(n) ≤ c·n^k بأخذ القيم المطلقة للمعاملات وجمعها. الدرجة الأقل من k أو أسس مختلفة لا تصلح كحد أعلى.",
          tags: ["Polynomial", "Big Oh"],
          ref: "Lecture 02 — Slide: Big O Fact",
        },
        {
          q: "18. Which pair of sorting algorithms has worst-case time complexity Θ(n log n)?",
          options: [
            "Quick-Sort and Insertion-Sort",
            "Insertion-Sort and Selection-Sort",
            "Quick-Sort and Selection-Sort",
            "Merge-Sort and Heap-Sort",
          ],
          correct: 3,
          translation: "أي زوج من خوارزميات الترتيب أسوأ حالاته Θ(n log n)؟",
          explanation:
            "المحاضرة تذكر Merge-Sort و Heap-Sort بـ Θ(n log n)، أما Quick-Sort و Insertion-Sort و Selection-Sort فأسوأ حالاتها Θ(n^2).",
          tags: ["Sorting", "Worst Case"],
          ref: "Lecture 02 — Slide: Example Problem: Sorting",
        },
        {
          q: "19. For multiplying two matrices of floating point numbers, what are the input size measure and the basic operation?",
          options: [
            "Number of items in the list; key comparison",
            "Number of vertices and edges; visiting a vertex",
            "Dimensions of the matrices; floating point multiplication",
            "Number n; floating point addition",
          ],
          correct: 2,
          translation:
            "في ضرب مصفوفتين من الأعداد العشرية، ما مقياس حجم المدخل والعملية الأساسية؟",
          explanation:
            "الجدول في المحاضرة يحدد أبعاد المصفوفات كمقياس للحجم والضرب العشري كعملية أساسية. مقارنة المفتاح للبحث، وزيارة العقدة لمسائل الرسوم.",
          tags: ["Input Size", "Basic Operation"],
          ref: "Lecture 02 — Slide: Input size and basic operation examples",
        },
        {
          q: "20. How is the average-case time A(n) defined?",
          options: [
            "A weighted sum of the expected number of basic operations over all inputs of size n under an assumed probability distribution",
            "The average of the worst case and the best case",
            "The minimum number of basic operations over all inputs of size n",
            "The maximum number of basic operations over all inputs of size n",
          ],
          correct: 0,
          translation: "كيف يُعرَّف زمن الحالة المتوسطة A(n)؟",
          explanation:
            "المحاضرة تؤكد أنه ليس متوسط أسوأ وأفضل حالة، بل مجموع موزون للعمليات المتوقعة بافتراض توزيع احتمالي للمدخلات. الأقل والأكبر هما best و worst.",
          tags: ["Average Case", "Probability"],
          ref: "Lecture 02 — Slide: Best-case, average-case, worst-case",
        },
        {
          q: "21. What is the total cost bound of a simple if-else statement with costs c1 (condition), c2 (then) and c3 (else)?",
          options: [
            "Total cost = c1 + c2 + c3",
            "Total cost = c1 · max(c2, c3)",
            "Total cost ≤ c1 + min(c2, c3)",
            "Total cost ≤ c1 + max(c2, c3)",
          ],
          correct: 3,
          translation:
            "ما حد التكلفة الكلية لجملة if-else بتكاليف c1 للشرط و c2 للفرع الأول و c3 للفرع الآخر؟",
          explanation:
            "يُنفَّذ الشرط دائمًا وفرع واحد فقط من الفرعين، فنأخذ الأكبر منهما كحد أعلى. جمع الفرعين غلط لأنهما لا يُنفذان معًا، والأصغر لا يعطي حدًا أعلى.",
          tags: ["Execution Time", "If Statement"],
          ref: "Lecture 02 — Slide: The Execution Time of Algorithms (Simple If-Statement)",
        },
        {
          q: "22. In sequential search, which case gives O(1) for a successful search?",
          options: [
            "The item is in the last location of the array",
            "The item is in the first location of the array (best case)",
            "The item is in the middle of the array",
            "The item is not in the array",
          ],
          correct: 1,
          translation:
            "في البحث التتابعي (Sequential Search)، أي حالة تعطي O(1) لبحث ناجح؟",
          explanation:
            "الأفضل أن يكون العنصر في أول موضع فتتم مقارنة واحدة. الأخير يعطي O(n) أسوأ حالة، وغير الموجود يعطي O(n) أيضًا.",
          tags: ["Sequential Search", "Best Case"],
          ref: "Lecture 02 — Slide: Sequential Search",
        },
        {
          q: "23. What is the worst-case input for Insertion Sort and its time complexity?",
          options: [
            "A reverse-sorted array, giving Θ(n^2)",
            "An already sorted array, giving Θ(n log n)",
            "A reverse-sorted array, giving Θ(n log n)",
            "A reverse-sorted array, giving Θ(n)",
          ],
          correct: 0,
          translation: "ما أسوأ مدخل لـ Insertion Sort وما تعقيده؟",
          explanation:
            "في المصفوفة المرتبة عكسيًا يكون t_i = i، والمجموع Σi = n(n+1)/2 − 1 = Θ(n^2). باقي الخيارات تعطي تعقيدًا خاطئًا.",
          tags: ["Insertion Sort", "Worst Case"],
          ref: "Lecture 02 — Slide: Insertion Sort: Time Complexity",
        },
        {
          q: "24. In the Master theorem, if T(n) = aT(⌈n/b⌉) + O(n^d) and a = b^d, then:",
          options: [
            "T(n) ∈ Θ(n^d)",
            "T(n) ∈ Θ(n^(log_b a))",
            "T(n) ∈ Θ(n^d lg n)",
            "T(n) ∈ Θ(n^(d+1))",
          ],
          correct: 2,
          translation:
            "في نظرية Master، إذا كانت T(n) = aT(⌈n/b⌉) + O(n^d) و a = b^d فإن:",
          explanation:
            "الحالة a = b^d تعطي Θ(n^d lg n). Θ(n^d) تخص a < b^d، و Θ(n^(log_b a)) تخص a > b^d.",
          tags: ["Master Theorem", "Recurrence"],
          ref: "Lecture 02 — Slide: Master theorem",
        },
        {
          q: "25. What is the growth-rate function of the nested while-loop example where the inner loop runs n times for each of the n outer iterations?",
          options: ["O(n)", "O(n^2)", "O(n^3)", "O(2^n)"],
          correct: 1,
          translation:
            "ما دالة معدل النمو لمثال الحلقتين المتداخلتين حيث تتكرر الداخلية n مرة لكل تكرار من n؟",
          explanation:
            "التكلفة تساوي a·n^2 + b·n + c، فالحد الأكبر n^2 ولذلك O(n^2). المثال ذو الحلقات الثلاث هو الذي يعطي O(n^3).",
          tags: ["Nested Loop", "Growth Rate"],
          ref: "Lecture 02 — Slide: Growth-Rate Functions – Example2",
        },
        {
          type: "essay",
          q: "1. Define an algorithm, and list the criteria used to judge how good it is.",
          translation:
            "عرّف الخوارزمية واذكر المعايير التي يُحكم بها على جودتها.",
          answer:
            "An algorithm is a sequence of unambiguous instructions for solving a problem, i.e., for obtaining a required output for any legitimate input in a finite amount of time.\n" +
            "How good is it? Correctness, time efficiency, and space efficiency.\n" +
            "Does a better algorithm exist? Lower bounds and optimality.",
          tags: ["Algorithm", "Analysis"],
          ref: "Lecture 02 — Slide: Algorithm / Analysis of Algorithms",
        },
        {
          type: "essay",
          q: "2. Explain time complexity and give its uses.",
          translation: "اشرح التعقيد الزمني واذكر فوائده.",
          answer:
            "Time complexity shows the dependence of an algorithm's running time on input size (worst-case or average/expected-case).\n" +
            "Uses: tells how efficient a design is before costly implementation; reveals inefficiency bottlenecks; compares different algorithms for the same problem; helps find the true complexity of the problem itself (how fast is the fastest algorithm); helps classify problems by time complexity.",
          tags: ["Time Complexity"],
          ref: "Lecture 02 — Slide: Time Complexity",
        },
        {
          type: "essay",
          q: "3. Why do we simplify T(n) by dropping constants and lower order terms? Illustrate with the lecture example.",
          translation:
            "لماذا نبسّط T(n) بحذف الثوابت والحدود الأقل رتبة؟ وضّح بمثال المحاضرة.",
          answer:
            "Example: T(n) = 23n^3 + 5n^2 log n + 7n log^2 n + 4 log n + 6 = Θ(n^3).\n" +
            "1) Asymptotically (very large n) the leading term largely determines the behavior.\n" +
            "2) With new technology (e.g., 10 times faster) the leading coefficient changes (divided by 10), so it is technology dependent anyway.\n" +
            "3) The simplification can still distinguish important complexity classes, e.g., linear vs. quadratic, or polynomial vs. exponential.",
          tags: ["Theta", "Simplification"],
          ref: "Lecture 02 — Slide: T(n) = Θ(f(n))",
        },
        {
          type: "essay",
          q: "4. State the formal definitions of Θ, O, Ω, o and ω, and give the rough intuitive meaning of each.",
          translation:
            "اذكر التعريفات الرسمية للرموز Θ و O و Ω و o و ω مع المعنى التقريبي لكل منها.",
          answer:
            "Θ: exist c1, c2, n0 > 0 such that for all n ≥ n0, c1 g(n) ≤ f(n) ≤ c2 g(n). Meaning: f(n) ≈ c g(n) (tight bound).\n" +
            "O: exist c, n0 > 0 such that for all n ≥ n0, f(n) ≤ c g(n). Meaning: f(n) ≤ c g(n) (upper bound).\n" +
            "Ω: exist c, n0 > 0 such that for all n ≥ n0, c g(n) ≤ f(n). Meaning: f(n) ≥ c g(n) (lower bound).\n" +
            "o: for all c > 0 exists n0 > 0 such that for all n ≥ n0, f(n) < c g(n). Non-tight upper bound.\n" +
            "ω: for all c > 0 exists n0 > 0 such that for all n ≥ n0, c g(n) < f(n). Non-tight lower bound.",
          tags: ["Asymptotic Notation"],
          ref: "Lecture 02 — Slide: Definitions of Asymptotic Notations",
        },
        {
          type: "essay",
          q: "5. Explain how the ratio limit L = lim f(n)/g(n) is used to compare orders of growth.",
          translation:
            "اشرح كيف تُستخدم نهاية النسبة L = lim f(n)/g(n) للمقارنة بين رتب النمو.",
          answer:
            "If L = 0: order of growth of f < order of growth of g, so f = o(g) and f = O(g).\n" +
            "If 0 < L < ∞ (a positive constant): same order of growth, so f = Θ(g), f = O(g), f = Ω(g).\n" +
            "If L = ∞: order of growth of f > order of growth of g, so f = ω(g) and f = Ω(g).\n" +
            "Example: log_b n = log_b c · log_c n, so the limit of the ratio is the constant log_b c, hence log_b n = Θ(log_c n).",
          tags: ["Ratio Limit"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
        {
          type: "essay",
          q: "6. Describe Insertion Sort and derive its worst-case time complexity.",
          translation:
            "صف خوارزمية Insertion Sort واستنتج تعقيدها الزمني في أسوأ حالة.",
          answer:
            "Insertion Sort is an incremental algorithm: for i = 2..n, the prefix A[1..i-1] is sorted (loop invariant); A[i] is saved as key and inserted into the sorted prefix by shifting larger elements to the right.\n" +
            "T(n) = Θ(Σ_{i=2..n} (1 + t_i + 1)) = Θ(n + Σ t_i).\n" +
            "Worst case (reverse sorted): t_i = i, so Σ_{i=2..n} i = n(n+1)/2 − 1 = Θ(n^2).\n" +
            "Therefore T(n) = Θ(n + n^2) = Θ(n^2).",
          tags: ["Insertion Sort"],
          ref: "Lecture 02 — Slide: Insertion Sort: Time Complexity",
        },
        {
          type: "essay",
          q: "7. Explain the sorting example: list the algorithms and their worst-case complexities and state the complexity of the sorting problem.",
          translation:
            "اشرح مثال الترتيب: اذكر الخوارزميات وتعقيداتها في أسوأ حالة وتعقيد مسألة الترتيب نفسها.",
          answer:
            "Quick-Sort, Insertion-Sort, Selection-Sort: Θ(n^2). Merge-Sort and Heap-Sort: Θ(n log n).\n" +
            "There are infinitely many sorting algorithms, so Merge-Sort and Heap-Sort are worst-case optimal, and the complexity of the SORTING problem is Θ(n log n).",
          tags: ["Sorting", "Optimality"],
          ref: "Lecture 02 — Slide: Example Problem: Sorting",
        },
        {
          type: "essay",
          q: "8. Prove that a polynomial of degree k is O(n^k).",
          translation: "أثبت أن كثيرة الحدود من الدرجة k هي O(n^k).",
          answer:
            "Let f(n) = b_k n^k + b_(k-1) n^(k-1) + ... + b_1 n + b_0 and a_i = |b_i|.\n" +
            "Then f(n) ≤ a_k n^k + a_(k-1) n^(k-1) + ... + a_1 n + a_0.\n" +
            "f(n) ≤ n^k Σ a_i (n^i / n^k) ≤ n^k Σ a_i ≤ c n^k, where c = Σ a_i (for n ≥ 1).\n" +
            "Hence f(n) = O(n^k).",
          tags: ["Polynomial", "Proof"],
          ref: "Lecture 02 — Slide: Big O Fact",
        },
        {
          type: "essay",
          q: "9. Explain best, worst and average case, and list the steps of mathematical analysis of nonrecursive algorithms.",
          translation:
            "اشرح الحالة الأفضل والأسوأ والمتوسطة، واذكر خطوات التحليل الرياضي للخوارزميات غير التكرارية.",
          answer:
            "Worst case W(n): maximum over inputs of size n. Best case B(n): minimum over inputs of size n. Average case A(n): average over inputs of size n (NOT the average of worst and best), computed as a weighted sum of the expected C(n) under some assumption about the probability distribution of inputs.\n" +
            "Steps: 1) decide on parameter n indicating input size; 2) identify the basic operation; 3) determine worst, average and best case for inputs of size n; 4) set up a summation for C(n) reflecting the loop structure; 5) simplify the summation using standard formulas.",
          tags: ["Best Worst Average", "Nonrecursive Analysis"],
          ref: "Lecture 02 — Slide: Time efficiency of nonrecursive algorithms",
        },
        {
          type: "essay",
          q: "10. Analyze sequential search: unsuccessful search and the best, worst and average cases of a successful search.",
          translation:
            "حلل البحث التتابعي: البحث الفاشل، والحالات الأفضل والأسوأ والمتوسطة للبحث الناجح.",
          answer:
            "Unsuccessful search: the whole array is scanned, so O(n).\n" +
            "Best case: item in the first location, O(1). Worst case: item in the last location, O(n).\n" +
            "Average case: the number of key comparisons is 1, 2, ..., n, so the average is (Σ i)/n = ((n^2 + n)/2)/n = (n+1)/2, which is O(n).",
          tags: ["Sequential Search"],
          ref: "Lecture 02 — Slide: Sequential Search",
        },
        {
          type: "essay",
          q: "11. Using the lecture's assumptions (10^6 instructions per second, n = 10^6), compute the execution time of an n^2 algorithm and an n log n algorithm.",
          translation:
            "باستخدام فروض المحاضرة (10^6 تعليمة في الثانية و n = 10^6) احسب زمن تنفيذ خوارزمية n^2 وأخرى n log n.",
          answer:
            "Given: speed = 10^6 IPS, n = 10^6. Formula: time = (number of operations) / speed.\n" +
            "n^2: 10^12 operations / 10^6 = 10^6 seconds ≈ 11.6 days ≈ 12 days.\n" +
            "n log n: n log2 n ≈ 10^6 × 20 = 2 × 10^7 operations / 10^6 = 20 seconds.",
          tags: ["Execution Time"],
          ref: "Lecture 02 — Slide: Example (execution time table)",
        },
        {
          type: "essay",
          q: "12. Use the standard summation formulas to compute: (a) Σ_{i=1..100} i, (b) Σ_{i=1..10} i^2, (c) Σ_{i=0..9} 2^i.",
          translation:
            "استخدم قوانين المجاميع القياسية لحساب: (أ) مجموع i من 1 إلى 100، (ب) مجموع i^2 من 1 إلى 10، (ج) مجموع 2^i من 0 إلى 9.",
          answer:
            "(a) Σ i = n(n+1)/2 = 100 × 101 / 2 = 5050.\n" +
            "(b) Σ i^2 = n(n+1)(2n+1)/6 = 10 × 11 × 21 / 6 = 385.\n" +
            "(c) Σ_{i=0..n-1} 2^i = 2^n − 1 with n = 10: 2^10 − 1 = 1023.",
          tags: ["Summations"],
          ref: "Lecture 02 — Slide: Series / Some Mathematical Facts",
        },
        {
          type: "essay",
          q: "13. For the nested while-loop example (i from 1 to n, inner j from 1 to n) assume every cost c1..c8 = 1 and n = 10. Compute the total cost T(n) and its growth rate.",
          translation:
            "في مثال الحلقتين المتداخلتين (i من 1 إلى n والداخلية j من 1 إلى n) افترض أن كل التكاليف c1 إلى c8 تساوي 1 و n = 10. احسب التكلفة الكلية T(n) ومعدل نموها.",
          answer:
            "Counts: c1: 1, c2: 1, c3: n+1, c4: n, c5: n(n+1), c6: n*n, c7: n*n, c8: n.\n" +
            "T(n) = 1 + 1 + (n+1) + n + n(n+1) + n^2 + n^2 + n = 3n^2 + 4n + 3.\n" +
            "For n = 10: 2 + 11 + 10 + 110 + 100 + 100 + 10 = 343 (= 300 + 40 + 3).\n" +
            "Growth rate: T(n) = a n^2 + b n + c, so O(n^2).",
          tags: ["Nested Loop", "Cost Analysis"],
          ref: "Lecture 02 — Slide: Growth-Rate Functions – Example2",
        },
        {
          type: "essay",
          q: "14. Use the Master theorem to solve: (a) T(n) = 2T(n/2) + O(n), (b) T(n) = 4T(n/2) + O(n), (c) T(n) = T(n/2) + O(1).",
          translation:
            "استخدم نظرية Master لحل: (أ) T(n) = 2T(n/2) + O(n)، (ب) T(n) = 4T(n/2) + O(n)، (ج) T(n) = T(n/2) + O(1).",
          answer:
            "Rule: compare a with b^d. a < b^d: Θ(n^d). a = b^d: Θ(n^d lg n). a > b^d: Θ(n^(log_b a)).\n" +
            "(a) a = 2, b = 2, d = 1: b^d = 2 = a, so T(n) = Θ(n lg n).\n" +
            "(b) a = 4, b = 2, d = 1: b^d = 2 < a, so T(n) = Θ(n^(log_2 4)) = Θ(n^2).\n" +
            "(c) a = 1, b = 2, d = 0: b^d = 1 = a, so T(n) = Θ(n^0 lg n) = Θ(lg n).",
          tags: ["Master Theorem"],
          ref: "Lecture 02 — Slide: Master theorem",
        },
        {
          type: "essay",
          q: "15. Use the ratio limit to compare: (a) f(n) = 3n^2 + 5n with g(n) = n^2, (b) f(n) = n with g(n) = n^2.",
          translation:
            "استخدم نهاية النسبة للمقارنة بين: (أ) f(n) = 3n^2 + 5n و g(n) = n^2، (ب) f(n) = n و g(n) = n^2.",
          answer:
            "Formula: L = lim_{n→∞} f(n)/g(n).\n" +
            "(a) L = lim (3n^2 + 5n)/n^2 = lim (3 + 5/n) = 3, a positive constant, so f(n) = Θ(n^2).\n" +
            "(b) L = lim n/n^2 = lim 1/n = 0, so f(n) = o(n^2) (and also O(n^2)).",
          tags: ["Ratio Limit"],
          ref: "Lecture 02 — Slide: Asymptotics by ratio limit",
        },
      ],
    },
    {
      t: "المحاضرة 3 — استراتيجية Divide and Conquer ومبرهنة الماستر",
      d: "تطبيق استراتيجية فرق تسد، خوارزمية Merge Sort، وحل العلاقات التكرارية باستخدام Master Theorem.",
      id: "lec-03",
      //lecture 01 -cloud-computing Questions
      pdf: "datenew/subjects/algorithms/lectures/Lecture 3.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/CS311_Lecture3_Sorting_DivideConquer_Questions.pdf",

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description: "شروحات العلاقات التكرارية ومبرهنة الماستر بالعربي",
          links: [
            {
              t: "Start Practicing - Master Theorem & Recurrences",
              d: "حل العلاقات التكرارية وتطبيق Master Theorem بأسلوب مبسط",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=e7ozTC6txss",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Start Practicing - Master Theorem & Recurrences  شرح دكتور ماجد ",
              d: "حل العلاقات التكرارية وتطبيق Master Theorem بأسلوب مبسط",
              icon: "🇪🇬",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://youtu.be/QEhxICw8F9E",
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
          description: "شرح Merge Sort وMaster Method عالمياً",
          links: [
            {
              t: "Abdul Bari - Divide and Conquer & Master Method",
              d: "الشرح الأشهر لعلاقات Recurrence ومبرهنة الماستر وMerge Sort",
              icon: "🌍",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.youtube.com/watch?v=7Y7UcBjUPYI",
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
          description: "توثيقات وملاحظات مبرهنة الماستر",
          links: [
            {
              t: "GeeksforGeeks - Master Theorem",
              d: "دليل شامل لشرح حالات Master Theorem مع أمثلة محلولة للامتحانات",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/recurrence-relations-notes-for-gate-exam/",
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
          description: "محاكاة تتبع شجرة الاستدعاءات التكرارية",
          links: [
            {
              t: "Algorithm Visualizer - Merge Sort & Recursion",
              d: "منصة تفاعلية لتتبع خوارزميات التكرار والتقسيم خطوة بخطوة",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://algo-visualize-login-signup.vercel.app/login",
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
          q: "Which topics were covered in the previous lecture, as recalled at the start?",
          options: [
            "Compilers, parsing, and code generation",
            "Binary trees, heaps, and tries",
            "Graph algorithms, dynamic programming, and hashing",
            "Analysis of algorithms, asymptotic notation, and insertion sort",
          ],
          correct: 3,
        },
        {
          q: "Insertion sort is described as what kind of algorithm?",
          options: [
            "A divide-and-conquer algorithm",
            "A greedy algorithm",
            "An incremental algorithm",
            "A randomized algorithm",
          ],
          correct: 2,
        },
        {
          q: "In the slides' pseudocode, the outer loop of InsertionSort starts at:",
          options: ["i = 2", "i = 1", "i = 0", "i = n"],
          correct: 0,
        },
        {
          q: "What does each iteration of the outer loop store in 'key'?",
          options: [
            "The value A[n]",
            "The index i",
            "The value A[i]",
            "The value A[1]",
          ],
          correct: 2,
        },
        {
          q: "In the pseudocode, j is initially set to:",
          options: ["0", "i + 1", "n", "i − 1"],
          correct: 3,
        },
        {
          q: "What is the while-loop condition in InsertionSort?",
          options: [
            "j > 0 and A[j] > key",
            "j > 0 only",
            "j < n and A[j] < key",
            "A[j] = key",
          ],
          correct: 0,
        },
        {
          q: "What does the body of the while loop do?",
          options: [
            "Increments i",
            "Swaps A[j] with A[n]",
            "Deletes A[j]",
            "Shifts A[j] one position to the right (A[j+1] = A[j]) and decrements j",
          ],
          correct: 3,
        },
        {
          q: "After the while loop ends, what is done with key?",
          options: [
            "A[j] = key",
            "A[j+1] = key",
            "key is discarded",
            "A[1] = key",
          ],
          correct: 1,
        },
        {
          q: "What is the loop invariant stated in the lecture?",
          options: [
            "A[1..i] is reversed",
            "A[i..n] is sorted and A[1..i−1] is untouched",
            "A[1..n] is always sorted",
            "A[1..i−1] is sorted and A[i..n] is untouched",
          ],
          correct: 3,
        },
        {
          q: "In the first picture example (11 4 5 2 15 7), what is the array after the first step?",
          options: [
            "2 4 5 11 15 7",
            "4 11 5 2 15 7",
            "4 5 11 2 15 7",
            "11 4 5 2 7 15",
          ],
          correct: 1,
        },
        {
          q: "Which is the final sorted array in that example?",
          options: [
            "2 4 5 7 11 15",
            "4 2 5 7 11 15",
            "2 4 5 11 15 7",
            "15 11 7 5 4 2",
          ],
          correct: 0,
        },
        {
          q: "In the trace of 30 10 40 20, what are i, j, and key at the first outer iteration (i = 2)?",
          options: [
            "i = 2, j = 2, key = 40",
            "i = 2, j = 1, key = 10",
            "i = 1, j = 0, key = 30",
            "i = 3, j = 1, key = 20",
          ],
          correct: 1,
        },
        {
          q: "What is the final array in the trace of 30 10 40 20?",
          options: ["10 30 40 20", "10 20 30 40", "40 30 20 10", "20 10 30 40"],
          correct: 1,
        },
        {
          q: "In the worst case for insertion sort, how many while-loop iterations does the i-th step take (tᵢ)?",
          options: [
            "1 iteration",
            "n iterations always",
            "0 iterations",
            "i iterations (the input is reverse sorted)",
          ],
          correct: 3,
        },
        {
          q: "What does the sum of i for i = 2 to n equal?",
          options: ["2n", "n", "n log n", "n(n+1)/2 − 1, which is Θ(n²)"],
          correct: 3,
        },
        {
          q: "What is the worst-case running time of insertion sort?",
          options: ["Θ(n log n)", "Θ(n)", "Θ(log n)", "Θ(n²)"],
          correct: 3,
        },
        {
          q: "What are the three steps of the divide-and-conquer paradigm?",
          options: [
            "Initialize, iterate, and terminate",
            "Read, write, and execute",
            "Sort, search, and merge",
            "Divide, conquer (solve subproblems recursively), and combine",
          ],
          correct: 3,
        },
        {
          q: "In the divide step, we:",
          options: [
            "Combine the solutions",
            "Divide the problem into subproblems",
            "Sort the output",
            "Delete the input",
          ],
          correct: 1,
        },
        {
          q: "In the conquer step, we:",
          options: [
            "Merge the solutions",
            "Solve the subproblems recursively",
            "Ignore the subproblems",
            "Divide the input in half once",
          ],
          correct: 1,
        },
        {
          q: "In the divide-and-conquer technique picture, a problem of size n is split into:",
          options: [
            "n subproblems of size 1",
            "Two subproblems of size n/2",
            "One subproblem of size n−1",
            "Three subproblems of size n/3",
          ],
          correct: 1,
        },
        {
          q: "Which of the following is listed as a divide-and-conquer example?",
          options: [
            "Mergesort and quicksort",
            "Selection sort and counting sort",
            "Insertion sort and bubble sort",
            "Heap sort and radix sort",
          ],
          correct: 0,
        },
        {
          q: "Which of the following is also listed as a divide-and-conquer example?",
          options: [
            "Floyd-Warshall algorithm",
            "Strassen's algorithm for matrix multiplication",
            "Dijkstra's algorithm",
            "Kruskal's algorithm",
          ],
          correct: 1,
        },
        {
          q: "Which other problems are listed as divide-and-conquer examples?",
          options: [
            "Binary search, powering a number, and the closest pair problem",
            "Knapsack, coin change, and edit distance",
            "Huffman coding and the activity selector",
            "Topological sort and Euler tours",
          ],
          correct: 0,
        },
        {
          q: "What does binary search find?",
          options: [
            "The median of an unsorted array",
            "An element in a sorted array",
            "A cycle in a graph",
            "The maximum of any array",
          ],
          correct: 1,
        },
        {
          q: "In binary search, what is the 'divide' step?",
          options: [
            "Check the middle element",
            "Sort the array",
            "Merge two halves",
            "Pick a random element",
          ],
          correct: 0,
        },
        {
          q: "In binary search, what is the 'conquer' step?",
          options: [
            "Count the elements",
            "Recursively search one sub-array",
            "Sort the sub-arrays",
            "Search both sub-arrays",
          ],
          correct: 1,
        },
        {
          q: "In binary search, what is the 'combine' step?",
          options: [
            "Merging both halves",
            "Sorting the result",
            "Linear in the array size",
            "Trivial",
          ],
          correct: 3,
        },
        {
          q: "In the binarySearch code, mid is computed as:",
          options: [
            "(low + high) / 2",
            "(low − high) / 2",
            "size / 3",
            "low × high",
          ],
          correct: 0,
        },
        {
          q: "In the code, if a[mid] < x, what happens?",
          options: [
            "low = mid + 1",
            "return mid",
            "return −1",
            "high = mid − 1",
          ],
          correct: 0,
        },
        {
          q: "In the 'Find 9' example on the array 3 5 7 8 9 12 15, which element does the given code examine first?",
          options: ["9", "12", "8 (mid = (0 + 6)/2 = 3)", "3"],
          correct: 2,
        },
        {
          q: "What does the binarySearch code return if the element is not found?",
          options: ["0", "mid", "size", "−1"],
          correct: 3,
        },
        {
          q: "What is the basic strategy of mergesort?",
          options: [
            "Insert each element into a sorted prefix",
            "Pick a pivot and partition",
            "Repeatedly select the minimum",
            "Sort two sub-arrays recursively and merge the sorted arrays into one",
          ],
          correct: 3,
        },
        {
          q: "In the merge step, we repeatedly:",
          options: [
            "Compare the first elements of the remaining unprocessed portions and copy the smaller into A",
            "Sort each array again",
            "Copy the larger element first",
            "Swap adjacent elements",
          ],
          correct: 0,
        },
        {
          q: "When one of the arrays has been completely processed in merging, we:",
          options: [
            "Sort the remaining elements",
            "Stop and discard the rest",
            "Copy the remaining unprocessed elements from the other array into A",
            "Start over",
          ],
          correct: 2,
        },
        {
          q: "In the mergeSort pseudocode, mid is computed as:",
          options: [
            "(first − last) / 2",
            "first × last",
            "(first + last) / 2",
            "last − first",
          ],
          correct: 2,
        },
        {
          q: "In the mergeSort pseudocode, the recursive calls are on:",
          options: [
            "E[first..last] twice",
            "E[first..first] only",
            "E[mid..mid] only",
            "E[first..mid] and E[mid+1..last], followed by merge",
          ],
          correct: 3,
        },
        {
          q: "When does the mergeSort pseudocode do any work (recursion)?",
          options: [
            "When first < last",
            "When first > last",
            "Always",
            "When first = last",
          ],
          correct: 0,
        },
        {
          q: "What recurrence expresses the cost of merge sort in the slides?",
          options: [
            "T(n) = 2T(n−1) + Θ(n)",
            "T(n) = T(n/2) + Θ(1)",
            "T(n) = T(n−1) + Θ(1)",
            "T(n) = 2T(n/2) + Θ(n) for n > 1, with T(1) = 0",
          ],
          correct: 3,
        },
        {
          q: "What does that recurrence solve to?",
          options: ["Θ(lg n)", "Θ(n²)", "Θ(n)", "Θ(n lg n)"],
          correct: 3,
        },
        {
          q: "In merge sort, the combine step is:",
          options: [
            "Trivial",
            "Logarithmic",
            "Quadratic",
            "A linear-time merge",
          ],
          correct: 3,
        },
        {
          q: "In merge sort, the divide step is:",
          options: ["Quadratic", "Linear", "Trivial", "Logarithmic"],
          correct: 2,
        },
        {
          q: "The efficiency of mergesort in all cases is:",
          options: [
            "Θ(log n)",
            "Θ(n log n)",
            "Θ(n²) in the worst case only",
            "Θ(n) in the best case",
          ],
          correct: 1,
        },
        {
          q: "What is the space requirement of mergesort?",
          options: [
            "Θ(n), and it is not in-place",
            "Θ(log n), in-place",
            "Θ(1), in-place",
            "Θ(n²)",
          ],
          correct: 0,
        },
        {
          q: "How many comparisons does mergesort use compared with the theoretical minimum for comparison-based sorting?",
          options: [
            "The number is close to the theoretical minimum, about n lg n − 1.44n",
            "n² comparisons",
            "Far above the theoretical minimum",
            "Exactly n comparisons",
          ],
          correct: 0,
        },
        {
          q: "Mergesort can also be implemented:",
          options: [
            "Without recursion (bottom-up)",
            "Only in-place",
            "Only recursively",
            "Only with a stack",
          ],
          correct: 0,
        },
        {
          q: "The master theorem applies to recurrences of the form:",
          options: [
            "T(n) = aT(n) + n",
            "T(n) = aT(⌈n/b⌉) + O(nᵈ) for constants a > 0, b > 1, d ≥ 0",
            "T(n) = T(n−1) + n",
            "T(n) = aT(n/b) + 2ⁿ",
          ],
          correct: 1,
        },
        {
          q: "According to the master theorem, if a < bᵈ then:",
          options: [
            "T(n) ∈ Θ(nᵈ)",
            "T(n) ∈ Θ(nᵈ lg n)",
            "T(n) ∈ Θ(n^(log_b a))",
            "T(n) ∈ Θ(1)",
          ],
          correct: 0,
        },
        {
          q: "According to the master theorem, if a = bᵈ then:",
          options: [
            "T(n) ∈ Θ(n^(log_b a))",
            "T(n) ∈ Θ(nᵈ lg n)",
            "T(n) ∈ Θ(lg n)",
            "T(n) ∈ Θ(nᵈ)",
          ],
          correct: 1,
        },
        {
          q: "According to the master theorem, if a > bᵈ then:",
          options: [
            "T(n) ∈ Θ(n)",
            "T(n) ∈ Θ(nᵈ)",
            "T(n) ∈ Θ(nᵈ lg n)",
            "T(n) ∈ Θ(n^(log_b a))",
          ],
          correct: 3,
        },
        {
          q: "Applying the master theorem to mergesort, T(n) = 2T(n/2) + Θ(n), we have a = 2, b = 2, d = 1. Which case applies and what is the result?",
          options: [
            "a < bᵈ, giving Θ(n)",
            "a > bᵈ, giving Θ(n²)",
            "No case applies",
            "a = bᵈ, giving Θ(n lg n)",
          ],
          correct: 3,
        },
        {
          q: "For T(n) = 4T(n/2) + Θ(n) (a = 4, b = 2, d = 1), the master theorem gives:",
          options: [
            "Θ(n)",
            "Θ(n³)",
            "Θ(n lg n)",
            "Θ(n²), since a > bᵈ and log₂4 = 2",
          ],
          correct: 3,
        },

        // ─── Essay ───
        {
          type: "essay",
          q: "Explain insertion sort: how the algorithm works and why its worst-case running time is Θ(n²).",
          answer:
            "Insertion sort is an incremental algorithm. For i = 2 to n, it stores key = A[i], sets j = i − 1, and, while j > 0 and A[j] > key, shifts A[j] to A[j+1] and decrements j; finally it places key at A[j+1]. The loop invariant: A[1..i−1] is sorted and A[i..n] is untouched.\n\n" +
            "Worst case: the input is reverse sorted, so the while loop runs tᵢ = i times for each i. Therefore T(n) = Θ(n + Σ tᵢ) = Θ(n + Σ i) = Θ(n + n²) = Θ(n²), since the sum of i for i = 2 to n equals n(n+1)/2 − 1.",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
        {
          type: "essay",
          q: "Describe the divide-and-conquer paradigm, and show how binary search fits into it.",
          answer:
            "Divide-and-conquer has three steps: divide the problem into subproblems; conquer the subproblems by solving them recursively; combine the subproblem solutions. Examples: mergesort, quicksort, Strassen's matrix multiplication, binary search, powering a number, closest pair.\n\n" +
            "Binary search finds an element in a sorted array. Divide: check the middle element. Conquer: recursively search one sub-array (the left or the right, depending on the comparison). Combine: trivial. The code uses low, high, and mid = (low + high)/2, and returns −1 if the element is not found.",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
        {
          type: "essay",
          q: "Describe mergesort, give its recurrence and efficiency, and state its space requirement.",
          answer:
            "Strategy: sort the two halves recursively and merge the two sorted halves. Merging repeatedly compares the first elements of the unprocessed portions and copies the smaller into the output; when one array is exhausted, the rest of the other is copied.\n\n" +
            "Divide: trivial (mid = (first+last)/2). Conquer: recursively sort both halves. Combine: linear-time merge. Recurrence: T(n) = 2T(n/2) + Θ(n), T(1) = 0, which gives Θ(n lg n) in all cases.\n\n" +
            "Number of comparisons is close to the theoretical minimum for comparison-based sorting (≈ n lg n − 1.44n). Space: Θ(n), not in-place; it can be implemented without recursion (bottom-up).",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
        {
          type: "essay",
          q: "State the master theorem and use it to solve T(n) = 2T(n/2) + Θ(n).",
          answer:
            "If T(n) = aT(⌈n/b⌉) + O(nᵈ) for constants a > 0, b > 1, d ≥ 0, then: (1) if a < bᵈ, T(n) ∈ Θ(nᵈ); (2) if a = bᵈ, T(n) ∈ Θ(nᵈ lg n); (3) if a > bᵈ, T(n) ∈ Θ(n^(log_b a)).\n\n" +
            "For mergesort: a = 2, b = 2, d = 1, so bᵈ = 2 = a (case 2). Hence T(n) ∈ Θ(n¹ lg n) = Θ(n lg n).",
          tags: ["CS311", "Lecture 3", "Sorting", "Divide and conquer"],
          ref: "CS 311 — Lecture 3",
        },
      ],
    },
  ],
});
