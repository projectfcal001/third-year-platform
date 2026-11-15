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
      id: "algorithms-lecture-01",
      pdf: "datenew/subjects/algorithms/lectures/Lec01/Lecture 1.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec01/CS311_Lecture1_Intro_Questions.pdf",

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
      pdf: "datenew/subjects/algorithms/lectures/Lec02/Lecture 2.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec02/Lecture-02-Questions.pdf",
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
      id: "algorithms-lecture-03",
      pdf: "datenew/subjects/algorithms/lectures/Lec03/Lecture 3.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec03/CS311_Lecture3_Sorting_DivideConquer_Questions.pdf",

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
    {
      id: "algorithms-lecture-04",
      t: "المحاضرة 4 : المعادلات التكرارية وطرق حلها",
      d: "Recurrence relations: Substitution, Iteration, Variable Change, Master Theorem",
      pdf: "datenew/subjects/algorithms/lectures/Lec04/CS 311 lec.4 by Majid A. Askar.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec04/Lecture-04-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات بالعربي لمعادلات التكرار وماستر ثيوريم وطرق حلها",
          links: [
            {
              t: "🔎 بحث في يوتيوب: شرح Master Theorem بالعربي",
              d: "بحث في يوتيوب يفتح شروحات عربية لـ Master Theorem وحالاته الثلاث مع أمثلة محلولة. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=master+theorem+شرح+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: معادلات التكرار Recurrence",
              d: "بحث في يوتيوب لشروحات عربية عن الـ Recurrence Relations وطرق حلها (الاستبدال والتكرار). رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=معادلات+التكرار+recurrence+relation",
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
            "محاضرات بالإنجليزي لشرح Master Theorem وشجرة التكرار من جامعات وقنوات تعليمية",
          links: [
            {
              t: "🔎 بحث في يوتيوب: Master Theorem explained",
              d: "بحث في يوتيوب لمحاضرات عالمية تشرح Master Theorem بحالاته الثلاث مع أمثلة. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=master+theorem+explained+recurrence",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Recursion Tree method",
              d: "بحث في يوتيوب لشرح طريقة Recursion Tree لحل المعادلات التكرارية خطوة بخطوة. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=recursion+tree+method+solve+recurrence",
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
            "مقالات ومراجع أكاديمية موثوقة تشرح طرق حل المعادلات التكرارية",
          links: [
            {
              t: "Master Theorem — Programiz DSA",
              d: "شرح كامل لـ Master Theorem بصياغة T(n) = aT(n/b) + f(n) مع الحالات الثلاث وأمثلة محلولة. مناسب لتطبيق مباشر على أمثلة المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.programiz.com/dsa/master-theorem",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Recursion Tree Method — GeeksforGeeks",
              d: "مقال مفصل يشرح طريقة شجرة التكرار لتحليل التعقيد الزمني مع رسم الشجرة وتحويلها لمتسلسلة. يغطي نفس فكرة الـ summation في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/how-to-solve-time-complexity-recurrence-relations-using-recursion-tree-method",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Substitution Method — Brilliant",
              d: "شرح طريقة الاستبدال (التخمين الجيد ثم الإثبات بالاستقراء) مع أمثلة. يطابق ما ورد في CLR 4.1 داخل المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://brilliant.org/wiki/the-substitution-method-for-solving-recurrences",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Solving Recurrences — Stanford CS161 Lecture",
              d: "ملاحظات محاضرة جامعة ستانفورد تغطي Master Theorem والاستبدال بشكل أكاديمي. مرجع قوي للتعمق في الحالات الحدية.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture3.pdf",
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
          description: "أدوات تفاعلية لتجربة وحل المعادلات التكرارية بصريًا",
          links: [
            {
              t: "VisuAlgo — خوارزميات وتعقيد بصري",
              d: "منصة محاكاة تفاعلية تعرض خوارزميات Divide and Conquer بصريًا وتساعد على فهم سلوك المعادلات التكرارية (Merge Sort كمثال تطبيقي).",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://visualgo.net",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: أمثلة Master Theorem محلولة",
              d: "بحث في يوتيوب لأمثلة محلولة لـ Master Theorem بأسلوب تفاعلي. رابط بحث مش فيديو محدد.",
              icon: "🔧",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=master+theorem+solved+examples+step+by+step",
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
          q: "1. The Master theorem applies to recurrences of the form T(n) = a·T(n/b) + Θ(n^d) with what constraints on a and b?",
          options: [
            "a ≥ 1 and b > 1",
            "a > 1 and b ≥ 1",
            "a > 0 and b > 0",
            "a ≥ 0 and b > 1",
          ],
          correct: 0,
          translation:
            "ينطبق الماستر ثيوريم على معادلات بالشكل T(n) = a·T(n/b) + Θ(n^d) مع أي شروط على a و b؟",
          explanation:
            "شروط الماستر ثيوريم هي a ≥ 1 و b > 1، لأن a عدد المسائل الجزئية و b عامل تصغير الحجم. الخيار B خطأ لأن b يجب أن يكون أكبر من 1 صراحة وليس أكبر أو يساوي.",
          tags: ["Master Theorem", "Definition"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "2. Master theorem Case 1, where a < b^d, gives which solution?",
          options: ["Θ(n^d · lg n)", "Θ(n^(log_b a))", "Θ(n^d)", "Θ(lg n)"],
          correct: 2,
          translation:
            "الحالة الأولى من الماستر ثيوريم عندما a < b^d تعطي أي حل؟",
          explanation:
            "الحالة الأولى عندما a < b^d تكون النتيجة Θ(n^d) لأن العمل عند الجذر يهيمن. الخيار A يخص الحالة الثانية، والخيار B يخص الحالة الثالثة.",
          tags: ["Master Theorem", "Cases"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "3. Master theorem Case 2, where a = b^d, gives which solution?",
          options: ["Θ(n^d · lg n)", "Θ(n^d)", "Θ(n^(log_b a))", "Θ(n^d · n)"],
          correct: 0,
          translation:
            "الحالة الثانية من الماستر ثيوريم عندما a = b^d تعطي أي حل؟",
          explanation:
            "الحالة الثانية عندما a = b^d تعطي Θ(n^d · lg n) لأن العمل متوازن عبر مستويات الشجرة. الخيار B يخص الحالة الأولى والخيار C يخص الحالة الثالثة.",
          tags: ["Master Theorem", "Cases"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "4. Master theorem Case 3, where a > b^d, gives which solution?",
          options: ["Θ(2^n)", "Θ(n^d · lg n)", "Θ(n^d)", "Θ(n^(log_b a))"],
          correct: 3,
          translation:
            "الحالة الثالثة من الماستر ثيوريم عندما a > b^d تعطي أي حل؟",
          explanation:
            "الحالة الثالثة عندما a > b^d تهيمن فيها الأوراق (عدد المسائل الجزئية كبير) فتكون النتيجة Θ(n^(log_b a)). الخيارات B و C تخص الحالتين الأخريين.",
          tags: ["Master Theorem", "Cases"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "5. Solve T(n) = 9T(n/3) + n using the Master theorem.",
          options: ["Θ(n)", "Θ(lg n)", "Θ(n lg n)", "Θ(n²)"],
          correct: 3,
          translation:
            "حل المعادلة T(n) = 9T(n/3) + n باستخدام الماستر ثيوريم.",
          explanation:
            "a=9, b=3, d=1، فتكون b^d=3 < 9 → الحالة الثالثة → Θ(n^(log_3 9)) = Θ(n²). الخيار C يخص الحالة الثانية وهو خطأ.",
          tags: ["Master Theorem", "Example"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "6. Solve T(n) = T(2n/3) + 1 using the Master theorem.",
          options: ["Θ(n)", "Θ(1)", "Θ(lg n)", "Θ(n²)"],
          correct: 2,
          translation:
            "حل المعادلة T(n) = T(2n/3) + 1 باستخدام الماستر ثيوريم.",
          explanation:
            "a=1, b=3/2, d=0، فتكون b^d=1 = a → الحالة الثانية → Θ(lg n). الخيار B خطأ لأن العمل الكلي ليس ثابتاً بل لوغاريتمي.",
          tags: ["Master Theorem", "Example"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "7. Solve T(n) = 8T(n/3) + cn² using the Master theorem.",
          options: ["Θ(n²)", "Θ(n lg n)", "Θ(n^(log_3 8))", "Θ(n³)"],
          correct: 0,
          translation:
            "حل المعادلة T(n) = 8T(n/3) + cn² باستخدام الماستر ثيوريم.",
          explanation:
            "a=8, b=3, d=2، فتكون b^d=9 > 8 → الحالة الأولى → Θ(n^d) = Θ(n²). الخيار C يخص الحالة الثالثة وهو خطأ.",
          tags: ["Master Theorem", "Example"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "8. Solve T(n) = 7T(n/2) + cn² using the Master theorem.",
          options: ["Θ(n²)", "Θ(n^(log_2 7))", "Θ(n lg n)", "Θ(n^2.5)"],
          correct: 1,
          translation:
            "حل المعادلة T(n) = 7T(n/2) + cn² باستخدام الماستر ثيوريم.",
          explanation:
            "a=7, b=2, d=2، فتكون b^d=4 < 7 → الحالة الثالثة → Θ(n^(log_2 7)) ≈ Θ(n^2.807). الخيار A خطأ لأن a أكبر من b^d.",
          tags: ["Master Theorem", "Example"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "9. Solve T(n) = 2T(n/4) + √n using the Master theorem.",
          options: ["Θ(√n)", "Θ(lg n)", "Θ(n)", "Θ(√n · lg n)"],
          correct: 3,
          translation:
            "حل المعادلة T(n) = 2T(n/4) + √n باستخدام الماستر ثيوريم.",
          explanation:
            "a=2, b=4, d=0.5، فتكون b^d = 4^0.5 = 2 = a → الحالة الثانية → Θ(√n · lg n). الخيار A يخص الحالة الأولى وهو خطأ.",
          tags: ["Master Theorem", "Example"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "10. Solve T(n) = 2T(n/2) + n using the Master theorem.",
          options: ["Θ(n)", "Θ(n²)", "Θ(n lg n)", "Θ(lg n)"],
          correct: 2,
          translation:
            "حل المعادلة T(n) = 2T(n/2) + n باستخدام الماستر ثيوريم.",
          explanation:
            "a=2, b=2, d=1، فتكون b^d=2 = a → الحالة الثانية → Θ(n lg n). الخيار A يخص الحالة الأولى وهو خطأ.",
          tags: ["Master Theorem", "Example", "Merge Sort"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "11. For T(n) = 9T(n/3) + n, which case of the Master theorem applies?",
          options: [
            "Case 2 (a = b^d)",
            "Case 3 (a > b^d)",
            "Case 1 (a < b^d)",
            "None of the cases",
          ],
          correct: 1,
          translation:
            "للمعادلة T(n) = 9T(n/3) + n أي حالة من الماستر ثيوريم تنطبق؟",
          explanation:
            "a=9 و b^d=3^1=3، ولأن 9 > 3 فهذه الحالة الثالثة. الخيار A خطأ لأن العكس صحيح.",
          tags: ["Master Theorem", "Case Identification"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "12. Which of the following recurrences falls under Master theorem Case 1 (a < b^d)?",
          options: [
            "T(n) = 2T(n/2) + n",
            "T(n) = 4T(n/2) + n²",
            "T(n) = 9T(n/3) + n",
            "T(n) = 8T(n/3) + cn²",
          ],
          correct: 3,
          translation:
            "أي من المعادلات التالية تقع ضمن الحالة الأولى من الماستر ثيوريم (a < b^d)؟",
          explanation:
            "في الخيار D: a=8, b=3, d=2، فتكون b^d=9 > 8 → الحالة الأولى. الخيار A يخص الحالة الثانية (a=b^d=2).",
          tags: ["Master Theorem", "Case Identification"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          q: "13. The substitution method (CLR 4.1) is also called:",
          options: [
            "Iteration method",
            "Recursion tree method",
            "Variable change method",
            '"Making a good guess" method',
          ],
          correct: 3,
          translation: "طريقة الاستبدال (CLR 4.1) تُسمى أيضاً:",
          explanation:
            'طريقة الاستبدال تُسمى "طريقة التخمين الجيد" لأنها تعتمد على تخمين شكل الحل ثم إثباته بالاستقراء الرياضي. الخيار A يخص طريقة أخرى مختلفة.',
          tags: ["Substitution Method", "Definition"],
          ref: "Lecture 4 — Substitution Method",
          likely: "high",
        },
        {
          q: "14. The substitution method requires the solver to:",
          options: [
            "Expand the recurrence into a summation",
            "Draw a recursion tree",
            "Guess the form of the answer then use induction",
            "Apply the Master theorem directly",
          ],
          correct: 2,
          translation: "تتطلب طريقة الاستبدال من الحال أن:",
          explanation:
            "طريقة الاستبدال تتطلب تخمين شكل الحل ثم استخدام الاستقراء الرياضي لإثباته. الخيار A يخص طريقة التكرار.",
          tags: ["Substitution Method", "Procedure"],
          ref: "Lecture 4 — Substitution Method",
          likely: "high",
        },
        {
          q: "15. Using the substitution method, T(n) = 2T(⌊n/2⌋ + 17) + n solves to:",
          options: ["Θ(n)", "Θ(lg n)", "Θ(n²)", "Θ(n lg n)"],
          correct: 3,
          translation:
            "باستخدام طريقة الاستبدال، فإن T(n) = 2T(⌊n/2⌋ + 17) + n تحل إلى:",
          explanation:
            "الإزاحة الثابتة +17 لا تغير النتيجة الزمجرية، فتبقى Θ(n lg n). الخيار C خطأ لأن المعادلة من النوع المتوازن وليس لها حدين متفاوتين.",
          tags: ["Substitution Method", "Example"],
          ref: "Lecture 4 — Substitution Method",
          likely: "high",
        },
        {
          q: "16. The iteration method works by:",
          options: [
            "Guessing the answer then proving by induction",
            "Applying Master theorem cases",
            "Using a recursion tree",
            "Expanding the recurrence, expressing as summation, evaluating",
          ],
          correct: 3,
          translation: "تعمل طريقة التكرار عن طريق:",
          explanation:
            "طريقة التكرار توسع المعادلة التكرارية حتى تتحول إلى متسلسلة يتم جمعها وتقييمها. الخيار A يخص طريقة الاستبدال.",
          tags: ["Iteration Method", "Procedure"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          q: "17. Using iteration, s(n) = c + s(n-1) with s(0) = 0 solves to:",
          options: ["Θ(lg n)", "Θ(n²)", "Θ(n)", "Θ(1)"],
          correct: 2,
          translation:
            "باستخدام التكرار، فإن s(n) = c + s(n-1) مع s(0) = 0 تحل إلى:",
          explanation:
            "بعد n خطوة: s(n) = cn + s(0) = cn → Θ(n). الخيار B يخص متسلسلة جمع الأعداد n(n+1)/2 وهي معادلة مختلفة.",
          tags: ["Iteration Method", "Example"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          q: "18. Using iteration, s(n) = n + s(n-1) with s(0) = 0 solves to:",
          options: ["Θ(n²)", "Θ(n lg n)", "Θ(n)", "Θ(2^n)"],
          correct: 0,
          translation:
            "باستخدام التكرار، فإن s(n) = n + s(n-1) مع s(0) = 0 تحل إلى:",
          explanation:
            "s(n) = n + (n-1) + ... + 1 = n(n+1)/2 → Θ(n²). الخيار C خطأ لأن المصطلحات لا تتساوى بل تتزايد.",
          tags: ["Iteration Method", "Example"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          q: "19. Using iteration, T(n) = 2T(n/2) + c solves to:",
          options: ["Θ(n)", "Θ(n lg n)", "Θ(lg n)", "Θ(n²)"],
          correct: 0,
          translation: "باستخدام التكرار، فإن T(n) = 2T(n/2) + c تحل إلى:",
          explanation:
            "بعد k=lg n تكراراً: n·T(1) + (n−1)·c → Θ(n). الخيار B يخص T(n) = 2T(n/2) + n وليس + c.",
          tags: ["Iteration Method", "Example"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          q: "20. In the iteration method for T(n) = 2T(n/2) + c, the expansion terminates when k equals:",
          options: ["n", "lg n", "√n", "n/2"],
          correct: 1,
          translation:
            "في طريقة التكرار للمعادلة T(n) = 2T(n/2) + c، ينتهي التوسع عندما يساوي k:",
          explanation:
            "التكرار ينتهي عندما يصل الحجم إلى حالة الأساس، أي n/2^k = 1، أي k = lg n. الخيار A يخص المعادلات الخطية مثل s(n)=c+s(n-1).",
          tags: ["Iteration Method", "Termination"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          q: "21. Applying variable change m = lg n to S(2^m) = 2·S(2^(m/2)) + m and using the Master theorem on S(m) gives:",
          options: [
            "S(m) = O(m lg m)",
            "S(m) = O(m)",
            "S(m) = O(m²)",
            "S(m) = O(2^m)",
          ],
          correct: 0,
          translation:
            "بتطبيق التعويض m = lg n على S(2^m) = 2·S(2^(m/2)) + m واستخدام الماستر ثيوريم على S(m) نحصل على:",
          explanation:
            "تطبيق الماستر ثيوريم على S(m): a=2, b=2, d=1، فتكون b^d=2=a → الحالة الثانية → S(m) = O(m lg m). الخيار B يخص الحالة الأولى وهو خطأ.",
          tags: ["Variable Change", "Master Theorem"],
          ref: "Lecture 4 — Variable Change",
          likely: "high",
        },
        {
          q: "22. If S(m) = O(m lg m) and m = lg n, then T(n) equals:",
          options: ["O(lg n)", "O(n lg n)", "O(n)", "O(lg n · lg lg n)"],
          correct: 3,
          translation: "إذا كان S(m) = O(m lg m) و m = lg n، فإن T(n) تساوي:",
          explanation:
            "بالتعويض m = lg n: T(n) = S(m) = O(m lg m) = O(lg n · lg lg n). الخيار A يفقد الحد lg lg n.",
          tags: ["Variable Change", "Result"],
          ref: "Lecture 4 — Variable Change",
          likely: "high",
        },
        {
          q: "23. A recurrence is best defined as:",
          options: [
            "An equation describing a function in terms of smaller inputs",
            "A loop that iterates over data",
            "An iterative sorting algorithm",
            "A bound on algorithm complexity",
          ],
          correct: 0,
          translation: "تُعرّف المعادلة التكرارية (recurrence) بأنها:",
          explanation:
            "المعادلة التكرارية تصف دالة بدلالة قيمتها على مدخلات أصغر. الخيار B يصف حلقة تكرارية في البرمجة وليس معادلة رياضية.",
          tags: ["Recurrence", "Definition"],
          ref: "Lecture 4 — Recurrence Definition",
          likely: "high",
        },
        {
          q: "24. The base case of the recurrence T(n) = 2T(n/2) + n for n > 1, as given in the lecture, is:",
          options: ["T(0) = 0", "T(1) = c", "T(n) = n", "T(n) = 1"],
          correct: 1,
          translation:
            "حالة الأساس للمعادلة T(n) = 2T(n/2) + n عندما n > 1، كما ورد في المحاضرة، هي:",
          explanation:
            "حالة الأساس المذكورة في المحاضرة هي T(1) = c. الخيار A ليس مذكوراً في مثال المحاضرة.",
          tags: ["Recurrence", "Base Case"],
          ref: "Lecture 4 — Recurrence Definition",
          likely: "high",
        },
        {
          q: "25. The merge sort recurrence T(n) = 2T(n/2) + Θ(n) yields:",
          options: ["Θ(n)", "Θ(n lg n)", "Θ(n²)", "Θ(lg n)"],
          correct: 1,
          translation: "معادلة merge sort التالية T(n) = 2T(n/2) + Θ(n) تعطي:",
          explanation:
            "a=2, b=2, d=1، فتكون b^d=2 = a → الحالة الثانية → Θ(n lg n). الخيار A يخص الحالة الأولى وهو خطأ.",
          tags: ["Merge Sort", "Recurrence"],
          ref: "Lecture 4 — Merge Sort",
          likely: "high",
        },
        {
          q: "26. The three steps of merge sort are:",
          options: [
            "Split, swap, merge",
            "Compare, swap, sort",
            "Divide, Conquer, Combine",
            "Partition, pivot, recurse",
          ],
          correct: 2,
          translation: "خطوات merge sort الثلاث هي:",
          explanation:
            "خطوات merge sort هي Divide, Conquer, Combine. الخيار D يخص quicksort وليس merge sort.",
          tags: ["Merge Sort", "Steps"],
          ref: "Lecture 4 — Merge Sort",
          likely: "high",
        },
        {
          q: '27. In merge sort, the "Combine" step is:',
          options: [
            "Trivial (just splits the array)",
            "A linear-time merge",
            "A logarithmic merge",
            "A constant-time merge",
          ],
          correct: 1,
          translation: 'في merge sort، خطوة "Combine" هي:',
          explanation:
            "خطوة Combine هي الدمج في زمن خطي Θ(n). الخيار A يخص خطوة Divide وليس Combine.",
          tags: ["Merge Sort", "Steps"],
          ref: "Lecture 4 — Merge Sort",
          likely: "high",
        },
        {
          q: "28. In the Master theorem, b^d represents:",
          options: [
            "The cost of the combine step at the root",
            "The rate at which per-node work shrinks per level",
            "The recursion depth",
            "The base case cost",
          ],
          correct: 1,
          translation: "في الماستر ثيوريم، يمثل b^d:",
          explanation:
            "b^d يمثل نسبة تقلص العمل لكل عقدة بين المستويات. الخيار A خطأ لأن العمل عند الجذر هو n^d وليس b^d.",
          tags: ["Master Theorem", "Interpretation"],
          ref: "Lecture 4 — Master Theorem",
          likely: "medium",
        },
        {
          q: "29. For T(n) = T(2n/3) + 1, what is the value of b?",
          options: ["2/3", "2", "3/2", "3"],
          correct: 2,
          translation: "للمعادلة T(n) = T(2n/3) + 1، ما قيمة b؟",
          explanation:
            "2n/3 = n/(3/2)، لذا b = 3/2. الخيار A خطأ لأنه مقلوب القيمة الصحيحة.",
          tags: ["Master Theorem", "Parameters"],
          ref: "Lecture 4 — Master Theorem",
          likely: "medium",
        },
        {
          q: "30. For T(n) = 7T(n/2) + cn², what is the approximate value of log_2 7?",
          options: ["2.0", "2.5", "2.807", "3.0"],
          correct: 2,
          translation:
            "للمعادلة T(n) = 7T(n/2) + cn²، ما القيمة التقريبية لـ log_2 7؟",
          explanation:
            "log_2 7 ≈ 2.807. الخيار A خطأ لأن log_2 4 = 2 وليس log_2 7.",
          tags: ["Master Theorem", "Logarithm"],
          ref: "Lecture 4 — Master Theorem",
          likely: "medium",
        },
        {
          q: "31. In the substitution method, the +17 offset in T(n) = 2T(⌊n/2⌋ + 17) + n has what effect?",
          options: [
            "Changes the result to Θ(n²)",
            "Does not change the asymptotic result",
            "Changes the result to Θ(n)",
            "Makes the recurrence unsolvable",
          ],
          correct: 1,
          translation:
            "في طريقة الاستبدال، الإزاحة +17 في المعادلة T(n) = 2T(⌊n/2⌋ + 17) + n لها أي تأثير؟",
          explanation:
            "الإزاحة الثابتة +17 لا تؤثر على النتيجة الزمجرية وتبقى Θ(n lg n). الخيار A خطأ لأن الإزاحة الثابتة لا ترفع الترتيب الزمجري.",
          tags: ["Substitution Method", "Offset"],
          ref: "Lecture 4 — Substitution Method",
          likely: "medium",
        },
        {
          q: "32. After k iterations of T(n) = 2T(n/2) + c, the recurrence expands to:",
          options: [
            "2^k · T(n/2^k) + (2^k − 1)c",
            "k · T(n/k) + (k − 1)c",
            "2^k · T(n/k) + kc",
            "k · T(n/2^k) + (2^k − 1)c",
          ],
          correct: 0,
          translation:
            "بعد k تكراراً للمعادلة T(n) = 2T(n/2) + c، تتوسع المعادلة إلى:",
          explanation:
            "كل تكرار يضاعف عدد المسائل ويجمع المعاملات فيمتد إلى 2^k · T(n/2^k) + (2^k − 1)c. الخيار B يخلط بين النمو الخطي والأسي.",
          tags: ["Iteration Method", "Expansion"],
          ref: "Lecture 4 — Iteration Method",
          likely: "medium",
        },
        {
          q: "33. In the variable change technique, substituting m = lg n transforms T(n) into:",
          options: [
            "A simpler recurrence S(m)",
            "An integral",
            "A direct closed-form formula",
            "A matrix equation",
          ],
          correct: 0,
          translation:
            "في تقنية التعويض المتغير، التعويض m = lg n يحول T(n) إلى:",
          explanation:
            "التعويض m = lg n يحول المعادلة التكرارية على n إلى معادلة أبسط على m يمكن تطبيق الماستر ثيوريم عليها. الخيار B يتعلق بحساب التكامل وليس له علاقة.",
          tags: ["Variable Change", "Transform"],
          ref: "Lecture 4 — Variable Change",
          likely: "medium",
        },
        {
          q: '34. In merge sort, which step is described as "trivial"?',
          options: ["Conquer", "Combine", "Divide", "All three steps"],
          correct: 2,
          translation: 'في merge sort، أي خطوة تُوصف بأنها "trivial"؟',
          explanation:
            "خطوة Divide بسيطة (trivial) لأنها مجرد تقسيم المصفوفة إلى نصفين. الخيار B يخص Combine وهي ليست trivial بل خطية.",
          tags: ["Merge Sort", "Steps"],
          ref: "Lecture 4 — Merge Sort",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define what a recurrence is. Provide the standard example from the lecture.",
          translation:
            "عرّف المعادلة التكرارية (recurrence). اذكر المثال القياسي من المحاضرة.",
          answer:
            "A recurrence is an equation that describes a function in terms of its value on smaller inputs.\nExample (from the lecture): T(n) = 2T(n/2) + n for n > 1, with base case T(1) = c.\nThe function T appears on both sides; the right-hand side refers to T at smaller arguments (n/2). Recurrences naturally arise when analyzing divide-and-conquer algorithms.",
          tags: ["Recurrence", "Definition"],
          ref: "Lecture 4 — Recurrence Definition",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. State the three steps of merge sort and explain each briefly.",
          translation: "اذكر خطوات merge sort الثلاث واشرح كل خطوة بإيجاز.",
          answer:
            "1. Divide: split the array into two halves. This step is trivial — it just computes the midpoint, O(1).\n2. Conquer: recursively sort each half using merge sort, giving 2·T(n/2).\n3. Combine: merge the two sorted halves into a single sorted array. This is a linear-time merge, Θ(n).\nTogether they yield the recurrence T(n) = 2T(n/2) + Θ(n), which solves to Θ(n lg n).",
          tags: ["Merge Sort", "Steps"],
          ref: "Lecture 4 — Merge Sort",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain the substitution method for solving recurrences.",
          translation: "اشرح طريقة الاستبدال لحل المعادلات التكرارية.",
          answer:
            'The substitution method is also called the "making a good guess" method (CLR 4.1).\nSteps:\n1. Guess the form of the solution (e.g., T(n) = O(n lg n)).\n2. Use mathematical induction to find the constants and prove the guess holds.\n3. Verify the base case.\nExamples solved in lecture: T(n) = 2T(n/2) + Θ(n), T(n) = 2T(⌊n/2⌋) + n, and T(n) = 2T(⌊n/2⌋ + 17) + n — all give Θ(n lg n).',
          tags: ["Substitution Method", "Procedure"],
          ref: "Lecture 4 — Substitution Method",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Explain the iteration method for solving recurrences.",
          translation: "اشرح طريقة التكرار لحل المعادلات التكرارية.",
          answer:
            "The iteration method expands the recurrence by repeatedly substituting it into itself, expresses the result as a summation, then evaluates the sum.\nExample: s(n) = c + s(n-1):\n  s(n) = c + s(n-1) = 2c + s(n-2) = ... = kc + s(n-k).\n  Setting k = n: cn + s(0) = cn → Θ(n).\nThe method works well when the expansion has a recognizable pattern (arithmetic or geometric summation).",
          tags: ["Iteration Method", "Procedure"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. State all three cases of the Master theorem with their conditions and resulting bounds.",
          translation: "اذكر حالات الماستر ثيوريم الثلاث مع شروطها ونتائجها.",
          answer:
            "For T(n) = a·T(n/b) + Θ(n^d), with a ≥ 1 and b > 1:\n- Case 1: a < b^d  →  T(n) = Θ(n^d)\n- Case 2: a = b^d  →  T(n) = Θ(n^d · lg n)\n- Case 3: a > b^d  →  T(n) = Θ(n^(log_b a))\nIntuition: the result is dominated by whichever of the root work (Case 1), the work-per-level balance (Case 2), or the leaves (Case 3) is heaviest.",
          tags: ["Master Theorem", "Cases"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Compare the Substitution method and the Iteration method for solving recurrences.",
          translation:
            "قارن بين طريقة الاستبدال وطريقة التكرار لحل المعادلات التكرارية.",
          answer:
            'Substitution method:\n- "Guess and prove by induction"\n- Requires a good initial guess based on intuition.\n- Proves the bound rigorously once the form is known.\n\nIteration method:\n- Expands the recurrence into a summation, then evaluates.\n- Mechanical — no guessing required.\n- Limited to recurrences whose expansion closes into a recognizable summation.\n\nBoth produce asymptotic bounds. Substitution is more flexible but needs intuition; iteration is mechanical but limited to expandable recurrences.',
          tags: ["Substitution Method", "Iteration Method", "Comparison"],
          ref: "Lecture 4 — Substitution vs Iteration",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Explain the variable change technique with m = lg n, and show how it is used to solve a recurrence.",
          translation:
            "اشرح تقنية التعويض المتغير m = lg n، وكيف تُستخدم لحل معادلة تكرارية.",
          answer:
            "The variable change technique substitutes m = lg n (so n = 2^m) to convert a recurrence over n into one over m that is easier to solve — usually Master-theorem-shaped.\nExample from the lecture: S(2^m) = 2·S(2^(m/2)) + m becomes (after substituting m = lg n) the form S(m) = 2·S(m/2) + m.\nApplying the Master theorem: a=2, b=2, d=1, b^d = 2 = a → Case 2 → S(m) = O(m lg m).\nSubstituting back m = lg n: T(n) = T(2^m) = S(m) = O(lg n · lg lg n).",
          tags: ["Variable Change", "Master Theorem"],
          ref: "Lecture 4 — Variable Change",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. List all six solved Master theorem examples from the lecture and their results.",
          translation:
            "اذكر جميع أمثلة الماستر ثيوريم الست المحلولة في المحاضرة ونتائجها.",
          answer:
            "1. T(n) = 9T(n/3) + n → a=9, b=3, d=1, b^d=3 < 9 → Case 3 → Θ(n²)\n2. T(n) = T(2n/3) + 1 → a=1, b=3/2, d=0, b^d=1 = a → Case 2 → Θ(lg n)\n3. T(n) = 2T(n/2) + n → a=2, b=2, d=1, b^d=2 = a → Case 2 → Θ(n lg n)\n4. T(n) = 8T(n/3) + cn² → a=8, b=3, d=2, b^d=9 > 8 → Case 1 → Θ(n²)\n5. T(n) = 7T(n/2) + cn² → a=7, b=2, d=2, b^d=4 < 7 → Case 3 → Θ(n^(log_2 7)) ≈ Θ(n^2.807)\n6. T(n) = 2T(n/4) + √n → a=2, b=4, d=0.5, b^d=2 = a → Case 2 → Θ(√n · lg n)",
          tags: ["Master Theorem", "Examples"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Compare Case 1 and Case 3 of the Master theorem. What does each tell us about where the work in the recursion tree is concentrated?",
          translation:
            "قارن بين الحالة الأولى والحالة الثالثة من الماستر ثيوريم. ماذا تخبرنا كل حالة عن تركيز العمل في شجرة التكرار؟",
          answer:
            "Case 1 (a < b^d): the root/combine work dominates the recursion tree. The per-level work shrinks as we descend, so the top level (the root) is the heaviest. Result: Θ(n^d) — same order as the top-level non-recursive work.\nCase 3 (a > b^d): the leaves dominate. There are many subproblems, so the bottom level of the tree is the heaviest. Result: Θ(n^(log_b a)) — the cost of the bottom level.\nIn Case 1 the work shrinks as we descend; in Case 3 the work grows as we descend. Case 2 (a = b^d) is the balanced middle where every level has equal total work.",
          tags: ["Master Theorem", "Case 1", "Case 3", "Comparison"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain why the merge sort recurrence T(n) = 2T(n/2) + Θ(n) gives Θ(n lg n).",
          translation:
            "اشرح لماذا تعطي معادلة merge sort التالية T(n) = 2T(n/2) + Θ(n) النتيجة Θ(n lg n).",
          answer:
            "Merge sort has T(n) = 2T(n/2) + Θ(n).\nIdentifying Master theorem parameters: a = 2 (two subproblems), b = 2 (each half the size), d = 1 (linear merge work).\nThen b^d = 2^1 = 2 = a → Case 2 applies.\nTherefore T(n) = Θ(n^d · lg n) = Θ(n lg n).\nIntuitively: there are Θ(lg n) levels in the recursion tree (since each level halves the problem size, and we stop at size 1), and Θ(n) work is done at each level, so the total work is Θ(n lg n).",
          tags: ["Merge Sort", "Master Theorem", "Derivation"],
          ref: "Lecture 4 — Merge Sort",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. What is the role of the constant +17 inside T(n) = 2T(⌊n/2⌋ + 17) + n? Does it change the asymptotic solution?",
          translation:
            "ما دور الثابت +17 داخل المعادلة T(n) = 2T(⌊n/2⌋ + 17) + n؟ هل يغير النتيجة الزمجرية؟",
          answer:
            "The +17 is an additive constant offset on the subproblem size.\nUnder the substitution method, this offset does NOT change the asymptotic solution: the recurrence still solves to Θ(n lg n), the same as T(n) = 2T(⌊n/2⌋) + n.\nThis illustrates a general principle: constant additive perturbations inside the recursive argument do not affect asymptotic complexity, because they are absorbed by the induction step once n is large enough.",
          tags: ["Substitution Method", "Offset", "Asymptotics"],
          ref: "Lecture 4 — Substitution Method",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. Define what each parameter a, b, and d represents in the Master theorem recurrence T(n) = a·T(n/b) + Θ(n^d).",
          translation:
            "عرّف ما يمثله كل من a و b و d في معادلة الماستر ثيوريم T(n) = a·T(n/b) + Θ(n^d).",
          answer:
            "In T(n) = a·T(n/b) + Θ(n^d):\n- a = number of subproblems created at each recursive step (the branching factor of the recursion tree).\n- b = the size-reduction factor per recursive call (each subproblem has size n/b).\n- n^d (i.e., d) = the per-level non-recursive work done at the root, excluding recursive calls.\nComparing a to b^d tells us whether the total work per level shrinks (b^d > a, Case 1), stays constant (b^d = a, Case 2), or grows (b^d < a, Case 3) as we descend the tree.",
          tags: ["Master Theorem", "Parameters"],
          ref: "Lecture 4 — Master Theorem",
          likely: "medium",
        },
        {
          type: "essay",
          q: "13. Solve by iteration: s(n) = n + s(n-1) with s(0) = 0.",
          translation: "حل بالتكرار: s(n) = n + s(n-1) مع s(0) = 0.",
          answer:
            "s(n) = n + s(n-1)\n     = n + (n-1) + s(n-2)\n     = ...\n     = sum_{i=0}^{k-1} (n-i) + s(n-k)\nSet k = n: sum_{i=0}^{n-1} (n-i) + s(0) = n + (n-1) + ... + 1 = n(n+1)/2.\nTherefore s(n) = n(n+1)/2 → Θ(n²).",
          tags: ["Iteration Method", "Example"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. Solve by iteration: T(n) = 2T(n/2) + c.",
          translation: "حل بالتكرار: T(n) = 2T(n/2) + c.",
          answer:
            "T(n) = 2T(n/2) + c\n     = 2²·T(n/2²) + (2+1)c\n     = 2³·T(n/2³) + (4+2+1)c\n     = ...\n     = 2^k · T(n/2^k) + (2^k − 1)c\nSet k = lg n: 2^(lg n) · T(1) + (2^(lg n) − 1)c = n·T(1) + (n−1)c = Θ(n).\nTherefore T(n) = Θ(n).",
          tags: ["Iteration Method", "Example"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          type: "computational",
          q: "1. Solve T(n) = 9T(n/3) + n using the Master theorem. Show a, b, d, b^d, the case, and the final bound.",
          translation:
            "حل المعادلة T(n) = 9T(n/3) + n باستخدام الماستر ثيوريم. اذكر a و b و d و b^d والحالة والنتيجة النهائية.",
          answer:
            "Given: T(n) = 9T(n/3) + n, so a = 9, b = 3, and f(n) = n means d = 1.\nFormula: Master theorem compares a vs b^d.\nSteps:\n  b^d = 3^1 = 3.\n  Since a = 9 > 3 = b^d, this is Case 3.\n  Result: Θ(n^(log_b a)) = Θ(n^(log_3 9)) = Θ(n²).\nAnswer: T(n) = Θ(n²).",
          tags: ["Master Theorem", "Computational"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "computational",
          q: "2. Solve T(n) = T(2n/3) + 1 using the Master theorem. Show a, b, d, b^d, the case, and the final bound.",
          translation:
            "حل المعادلة T(n) = T(2n/3) + 1 باستخدام الماستر ثيوريم. اذكر a و b و d و b^d والحالة والنتيجة النهائية.",
          answer:
            "Given: T(n) = T(2n/3) + 1. Rewrite as T(n) = T(n/(3/2)) + 1, so a = 1, b = 3/2, and f(n) = 1 means d = 0.\nFormula: Master theorem compares a vs b^d.\nSteps:\n  b^d = (3/2)^0 = 1.\n  Since a = 1 = 1 = b^d, this is Case 2.\n  Result: Θ(n^d · lg n) = Θ(n^0 · lg n) = Θ(lg n).\nAnswer: T(n) = Θ(lg n).",
          tags: ["Master Theorem", "Computational"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "computational",
          q: "3. Solve T(n) = 8T(n/3) + cn² using the Master theorem. Show a, b, d, b^d, the case, and the final bound.",
          translation:
            "حل المعادلة T(n) = 8T(n/3) + cn² باستخدام الماستر ثيوريم. اذكر a و b و d و b^d والحالة والنتيجة النهائية.",
          answer:
            "Given: T(n) = 8T(n/3) + cn², so a = 8, b = 3, and f(n) = cn² means d = 2.\nFormula: Master theorem compares a vs b^d.\nSteps:\n  b^d = 3² = 9.\n  Since a = 8 < 9 = b^d, this is Case 1.\n  Result: Θ(n^d) = Θ(n²).\nAnswer: T(n) = Θ(n²).",
          tags: ["Master Theorem", "Computational"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "computational",
          q: "4. Solve T(n) = 7T(n/2) + cn² using the Master theorem. Show a, b, d, b^d, the case, and the final bound.",
          translation:
            "حل المعادلة T(n) = 7T(n/2) + cn² باستخدام الماستر ثيوريم. اذكر a و b و d و b^d والحالة والنتيجة النهائية.",
          answer:
            "Given: T(n) = 7T(n/2) + cn², so a = 7, b = 2, and f(n) = cn² means d = 2.\nFormula: Master theorem compares a vs b^d.\nSteps:\n  b^d = 2² = 4.\n  Since a = 7 > 4 = b^d, this is Case 3.\n  Result: Θ(n^(log_b a)) = Θ(n^(log_2 7)) ≈ Θ(n^2.807).\nAnswer: T(n) = Θ(n^(log_2 7)) ≈ Θ(n^2.807).",
          tags: ["Master Theorem", "Computational"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "computational",
          q: "5. Solve T(n) = 2T(n/4) + √n using the Master theorem. Show a, b, d, b^d, the case, and the final bound.",
          translation:
            "حل المعادلة T(n) = 2T(n/4) + √n باستخدام الماستر ثيوريم. اذكر a و b و d و b^d والحالة والنتيجة النهائية.",
          answer:
            "Given: T(n) = 2T(n/4) + √n. Since √n = n^0.5, so a = 2, b = 4, d = 0.5.\nFormula: Master theorem compares a vs b^d.\nSteps:\n  b^d = 4^0.5 = 2.\n  Since a = 2 = 2 = b^d, this is Case 2.\n  Result: Θ(n^d · lg n) = Θ(√n · lg n).\nAnswer: T(n) = Θ(√n · lg n).",
          tags: ["Master Theorem", "Computational"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "computational",
          q: "6. Solve T(n) = 2T(n/2) + n using the Master theorem. Show a, b, d, b^d, the case, and the final bound. (This is the merge sort recurrence.)",
          translation:
            "حل المعادلة T(n) = 2T(n/2) + n باستخدام الماستر ثيوريم. اذكر a و b و d و b^d والحالة والنتيجة النهائية. (هذه معادلة merge sort.)",
          answer:
            "Given: T(n) = 2T(n/2) + n, so a = 2, b = 2, d = 1.\nFormula: Master theorem compares a vs b^d.\nSteps:\n  b^d = 2^1 = 2.\n  Since a = 2 = 2 = b^d, this is Case 2.\n  Result: Θ(n^d · lg n) = Θ(n lg n).\nAnswer: T(n) = Θ(n lg n).",
          tags: ["Master Theorem", "Computational", "Merge Sort"],
          ref: "Lecture 4 — Master Theorem",
          likely: "high",
        },
        {
          type: "computational",
          q: "7. Solve s(n) = c + s(n-1) with s(0) = 0 by iteration. Show the expansion and the final bound.",
          translation:
            "حل المعادلة s(n) = c + s(n-1) مع s(0) = 0 بالتكرار. اعرض التوسع والنتيجة النهائية.",
          answer:
            "Given: s(n) = c + s(n-1), with s(0) = 0.\nFormula: Iteration method — expand into a summation.\nSteps:\n  s(n) = c + s(n-1)\n       = c + c + s(n-2) = 2c + s(n-2)\n       = ... = kc + s(n-k)\n  Set k = n: cn + s(0) = cn + 0 = cn.\nAnswer: s(n) = cn → Θ(n).",
          tags: ["Iteration Method", "Computational"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          type: "computational",
          q: "8. Solve s(n) = n + s(n-1) with s(0) = 0 by iteration. Show the expansion and the final bound.",
          translation:
            "حل المعادلة s(n) = n + s(n-1) مع s(0) = 0 بالتكرار. اعرض التوسع والنتيجة النهائية.",
          answer:
            "Given: s(n) = n + s(n-1), with s(0) = 0.\nFormula: Iteration method — expand into a summation.\nSteps:\n  s(n) = n + s(n-1)\n       = n + (n-1) + s(n-2)\n       = ... = sum_{i=0}^{k-1} (n-i) + s(n-k)\n  Set k = n: sum_{i=0}^{n-1} (n-i) + s(0) = n + (n-1) + ... + 1 = n(n+1)/2.\nAnswer: s(n) = n(n+1)/2 → Θ(n²).",
          tags: ["Iteration Method", "Computational"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          type: "computational",
          q: "9. Solve T(n) = 2T(n/2) + c by iteration. Show the expansion, the closed form after k = lg n steps, and the final bound.",
          translation:
            "حل المعادلة T(n) = 2T(n/2) + c بالتكرار. اعرض التوسع والصيغة المغلقة بعد k = lg n خطوة والنتيجة النهائية.",
          answer:
            "Given: T(n) = 2T(n/2) + c.\nFormula: Iteration method — expand into a geometric summation.\nSteps:\n  T(n) = 2T(n/2) + c\n       = 2²·T(n/2²) + (2+1)c\n       = 2³·T(n/2³) + (4+2+1)c\n       = ... = 2^k · T(n/2^k) + (2^k − 1)c\n  Set k = lg n: 2^(lg n) · T(1) + (2^(lg n) − 1)c = n·T(1) + (n−1)c.\nAnswer: T(n) = n·T(1) + (n−1)c → Θ(n).",
          tags: ["Iteration Method", "Computational"],
          ref: "Lecture 4 — Iteration Method",
          likely: "high",
        },
        {
          type: "computational",
          q: "10. Using the variable change m = lg n on S(2^m) = 2·S(2^(m/2)) + m, apply the Master theorem to find S(m), then express T(n) in terms of n.",
          translation:
            "باستخدام التعويض m = lg n على S(2^m) = 2·S(2^(m/2)) + m، طبق الماستر ثيوريم لإيجاد S(m)، ثم عبر عن T(n) بدلالة n.",
          answer:
            "Given: S(2^m) = 2·S(2^(m/2)) + m, with m = lg n.\nFormula: Substitute m = lg n to get a Master-theorem-form recurrence on m.\nSteps:\n  After substitution: S(m) = 2·S(m/2) + m.\n  Identify Master parameters: a = 2, b = 2, d = 1.\n  b^d = 2^1 = 2 = a → Case 2.\n  Therefore S(m) = Θ(m^d · lg m) = O(m lg m).\n  Substitute back m = lg n: T(n) = T(2^m) = S(m) = O(lg n · lg lg n).\nAnswer: T(n) = O(lg n · lg lg n).",
          tags: ["Variable Change", "Master Theorem", "Computational"],
          ref: "Lecture 4 — Variable Change",
          likely: "high",
        },
      ],
    },
    {
      id: "algorithms-lecture-05",
      t: "المحاضرة 5 : الترتيب السريع والكومة الثنائية",
      d: "Quicksort, Partition, Binary Heap, UpHeap, DownHeap, Construct Heap",
      pdf: "datenew/subjects/algorithms/lectures/Lec05/CS 311 lec.5 by Majid A. Askar.pdf",
      pdf2: "",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات بالعربي لخوارزمية Quicksort والكومة الثنائية وعملياتها",
          links: [
            {
              t: "🔎 بحث في يوتيوب: شرح Quicksort بالعربي",
              d: "بحث في يوتيوب لشروحات عربية لخوارزمية الترتيب السريع وخطوات الـ Partition. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=quicksort+شرح+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: الكومة الثنائية Binary Heap",
              d: "بحث في يوتيوب لشروحات عربية للكومة الثنائية وعمليات UpHeap و DownHeap وبناء الكومة. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=binary+heap+الكومة+الثنائية+شرح",
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
            "محاضرات بالإنجليزي لشرح Quicksort و Binary Heap من جامعات عالمية",
          links: [
            {
              t: "🔎 بحث في يوتيوب: Quicksort algorithm",
              d: "بحث في يوتيوب لمحاضرات عالمية تشرح Quicksort وPartition بصريًا مع تحليل الحالات (الأفضل/الأسوأ/المتوسط). رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=quicksort+algorithm+partition+explained",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Binary Heap and Heapify",
              d: "بحث في يوتيوب لشرح الكومة الثنائية وعمليات UpHeap و DownHeap وبناء الكومة في زمن خطي. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=binary+heap+heapify+build+heap",
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
            "مقالات ومراجع موثوقة تشرح Quicksort و Binary Heap بالتفصيل",
          links: [
            {
              t: "Quicksort — Wikipedia",
              d: "مقال ويكيبيديا الشامل عن خوارزمية Quicksort التي اخترعها Hoare عام 1962، مع شرح Partition وتحليل الحالات الثلاث وتحسينات Quicksort.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://en.wikipedia.org/wiki/Quicksort",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Hoare Partition Algorithm — GeeksforGeeks",
              d: "شرح خوارزمية Hoare للـ Partition بنفس الصيغة المذكورة في المحاضرة (مؤشرين i و j يتحركان من الطرفين). مناسب لفهم كود Partition.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/hoare-s-partition-algorithm",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Array Representation of Binary Heap — GeeksforGeeks",
              d: "مقال يشرح تمثيل الكومة الثنائية بمصفوفة وصيغ المؤشرات (A[2t], A[2t+1], A[⌊t/2⌋) تمامًا كما في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/array-representation-of-binary-heap",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Binary Heaps — Carnegie Mellon University",
              d: "محاضرة جامعة كارنيجي ميلون تشرح الكومة الثنائية وعملياتها (Insert, DeleteMax, Heapify) مع تحليل التعقيد. مرجع أكاديمي قوي.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.andrew.cmu.edu/course/15-121/lectures/Binary%20Heaps/heaps.html",
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
          description: "أدوات تفاعلية لتجربة عمليات الكومة الثنائية بصريًا",
          links: [
            {
              t: "VisuAlgo — Binary Heap Visualization",
              d: "أداة محاكاة تفاعلية للكومة العظمى تدعم Create و Insert و ExtractMax و UpdateKey و Delete مع إظهار الصيغتين الشجرية والمصفوفية. ممتازة لتجربة UpHeap و DownHeap.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://visualgo.net/en/heap",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Quicksort visualization",
              d: "بحث في يوتيوب لمحاكاة بصرية لخطوات Quicksort والـ Partition. رابط بحث مش فيديو محدد.",
              icon: "🔧",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=quicksort+visualization+animation",
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
          q: "1. Who invented Quicksort and in what year?",
          options: [
            "Hoare, 1962",
            "Knuth, 1962",
            "Hoare, 1959",
            "Cormen, 1990",
          ],
          correct: 0,
          translation: "من اخترع خوارزمية Quicksort وفي أي سنة؟",
          explanation:
            "Quicksort من اختراع C.A.R. Hoare عام 1962. الخيار (A) صحيح؛ أما (C) فخطأ لأن السنة 1959 غير صحيحة، و(B) و(D) خطأ لأن Knuth وCormen ليسوا المخترعين.",
          tags: ["Quicksort", "History"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "2. What is the first step of Quicksort?",
          options: [
            "Sort the two sublists recursively",
            "Select a pivot (partitioning element)",
            "Exchange the pivot with the last element of the first sublist",
            "Grow two regions left and right",
          ],
          correct: 1,
          translation: "ما هي الخطوة الأولى في خوارزمية Quicksort؟",
          explanation:
            "الخطوة الأولى هي اختيار عنصر المحور (pivot). الخيار (B) صحيح؛ أما (A) فهي الخطوة الأخيرة، و(C) تأتي بعد إعادة الترتيب، و(D) جزء من Partition وليس الخطوة الأولى.",
          tags: ["Quicksort", "Algorithm"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "3. After rearranging the list in Quicksort, with which element is the pivot exchanged?",
          options: [
            "The first element of the array",
            "The middle element of the array",
            "The last element in the first (≤) sublist",
            "The last element of the array",
          ],
          correct: 2,
          translation:
            "بعد إعادة ترتيب القائمة في Quicksort، بأي عنصر يُستبدَل المحور؟",
          explanation:
            "يُستبدَل المحور مع آخر عنصر في القائمة الفرعية الأولى (≤ pivot) ليصبح في موقعه النهائي. الخيار (C) صحيح؛ أما (A) و(B) و(D) فلا تمثل موضع الاستبدال الصحيح.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "4. What is the running time of the Partition procedure on an array of n elements?",
          options: ["O(1)", "O(log n)", "O(n log n)", "O(n)"],
          correct: 3,
          translation: "ما هو زمن تنفيذ إجراء Partition على مصفوفة من n عنصر؟",
          explanation:
            "Partition يمسح كل عنصر مرة واحدة، لذا زمنه O(n). الخيار (D) صحيح؛ أما (C) فخطأ لأن Partition لا يكرر بشكل لوغاريتمي، و(A) و(B) أصغر من الحقيقة.",
          tags: ["Quicksort", "Partition", "Complexity"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "5. In the Partition procedure (Hoare scheme), what is the initial value of i?",
          options: ["p - 1", "p", "p + 1", "r"],
          correct: 0,
          translation:
            "في إجراء Partition (نسخة Hoare)، ما هي القيمة الابتدائية للمتغير i؟",
          explanation:
            "يبدأ i عند p - 1 ثم يزداد قبل أول مقارنة. الخيار (A) صحيح؛ أما (B) و(C) فقيم خاطئة، و(D) قيمة j تقريبًا وليس i.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "6. In the Partition procedure, what is the initial value of j?",
          options: ["r", "r + 1", "r - 1", "p"],
          correct: 1,
          translation: "في إجراء Partition، ما هي القيمة الابتدائية للمتغير j؟",
          explanation:
            "يبدأ j عند r + 1 ثم يتناقص قبل أول مقارنة. الخيار (B) صحيح؛ أما (A) و(C) فقيم خاطئة، و(D) قيمة i وليس j.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "7. In the Partition procedure, when does the function return j?",
          options: [
            "When i < j",
            "When A[i] == A[j]",
            "When i >= j",
            "When j == p",
          ],
          correct: 2,
          translation: "متى يُرجِع إجراء Partition قيمة j؟",
          explanation:
            "عندما يصبح i >= j تتوقف الحلقة وتُرجِع j. الخيار (C) صحيح؛ أما (A) فعكس الشرط، و(B) و(D) شروط غير صحيحة.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          q: "8. What is the general recurrence for the running time of Quicksort?",
          options: [
            "T(n) = 2T(n/2) + n",
            "T(n) = T(n-1) + n",
            "T(n) = T(n/2) + n",
            "T(n) = T(n-k) + T(k-1) + n",
          ],
          correct: 3,
          translation: "ما هي علاقة التكرار العامة لزمن تنفيذ Quicksort؟",
          explanation:
            "العلاقة العامة T(n) = T(n-k) + T(k-1) + n حيث k موضع المحور النهائي. الخيار (D) صحيح؛ أما (A) حالة الأفضل فقط، و(B) حالة الأسوأ فقط، و(C) ليست لـ Quicksort.",
          tags: ["Quicksort", "Recurrence", "Analysis"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          q: "9. What is the best-case time complexity of Quicksort?",
          options: ["Θ(n log n)", "Θ(n²)", "Θ(n)", "Θ(log n)"],
          correct: 0,
          translation: "ما هو التعقيد الزمني في أفضل حالة لـ Quicksort؟",
          explanation:
            "أفضل حالة عند تقسيم المحور للقائمة لنصفين متساويين فتكون Θ(n log n). الخيار (A) صحيح؛ أما (B) حالة الأسوأ، و(C) و(D) لا تمثل Quicksort.",
          tags: ["Quicksort", "Complexity", "Best Case"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          q: "10. What is the worst-case time complexity of Quicksort?",
          options: ["Θ(n)", "Θ(n²)", "Θ(n log n)", "Θ(n³)"],
          correct: 1,
          translation: "ما هو التعقيد الزمني في أسوأ حالة لـ Quicksort؟",
          explanation:
            "أسوأ حالة Θ(n²) وتحدث عندما يكون المحور دائمًا عند الأول أو الأخير. الخيار (B) صحيح؛ أما (C) حالة المتوسط والأفضل، و(A) و(D) غير صحيحة.",
          tags: ["Quicksort", "Complexity", "Worst Case"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          q: "11. Which input is cited in the lecture as causing the worst case of Quicksort?",
          options: [
            "A random array",
            "An array with all distinct elements",
            "A sorted array",
            "An array with an even number of elements",
          ],
          correct: 2,
          translation:
            "أي مدخل ذُكِر في المحاضرة كمسبب لأسوأ حالة في Quicksort؟",
          explanation:
            "المصفوفة المرتبة تسبب أسوأ حالة لأن المحور دائمًا عند الطرف. الخيار (C) صحيح؛ أما (A) فتمثل الحالة المتوسطة، و(B) و(D) لا علاقة لها بأسوأ حالة.",
          tags: ["Quicksort", "Worst Case"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          q: "12. What is the average-case time complexity of Quicksort?",
          options: ["Θ(n²)", "Θ(n)", "Θ(n (log n)²)", "Θ(n log n)"],
          correct: 3,
          translation: "ما هو التعقيد الزمني في الحالة المتوسطة لـ Quicksort؟",
          explanation:
            "الحالة المتوسطة Θ(n log n) وثابت العامل ≈ 1.386. الخيار (D) صحيح؛ أما (A) حالة الأسوأ، و(B) و(C) غير صحيحة.",
          tags: ["Quicksort", "Complexity", "Average Case"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          q: "13. The worst-case recurrence of Quicksort (pivot always at first or last position) is:",
          options: [
            "T(n) = T(n-1) + n",
            "T(n) = 2T(n/2) + n",
            "T(n) = T(n/2) + n",
            "T(n) = T(n-1) + 1",
          ],
          correct: 0,
          translation:
            "ما هي علاقة التكرار في أسوأ حالة لـ Quicksort (عندما يكون المحور دائمًا عند الطرف)؟",
          explanation:
            "أسوأ حالة T(n) = T(n-1) + n لأن أحد الجزأين فارغ. الخيار (A) صحيح؛ أما (B) حالة الأفضل، و(C) و(D) غير صحيحة.",
          tags: ["Quicksort", "Recurrence", "Worst Case"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          q: "14. Which improvement to Quicksort avoids the worst case on sorted files?",
          options: [
            "Elimination of recursion",
            "Median-of-three partitioning",
            "Switch to insertion sort on small subfiles",
            "Using a hash table",
          ],
          correct: 1,
          translation:
            "أي تحسين على Quicksort يتجنب أسوأ حالة على الملفات المرتبة؟",
          explanation:
            "median-of-three تختار محورًا متوسطًا من ثلاثة عناصر فتجنب أسوأ حالة على الملفات المرتبة. الخيار (B) صحيح؛ أما (A) و(C) تحسينات أخرى لا تتجنب أسوأ حالة، و(D) ليست تحسينًا مذكورًا.",
          tags: ["Quicksort", "Improvements"],
          ref: "Lecture 5 — Quicksort Summary",
          likely: "high",
        },
        {
          q: "15. What does the Max Heap Order property state?",
          options: [
            "key[x] ≤ key[parent(x)]",
            "key[x] ≥ key[parent(x)]",
            "key[x] = key[parent(x)]",
            "key[x] < key[sibling(x)]",
          ],
          correct: 0,
          translation: "ماذا تنص خاصية ترتيب الكومة العظمى (Max Heap Order)؟",
          explanation:
            "في Max Heap، قيمة كل عقدة (عدا الجذر) أصغر من أو تساوي قيمة أبيها. الخيار (A) صحيح؛ أما (B) فهو Min Heap، و(C) و(D) غير صحيحة.",
          tags: ["Binary Heap", "Max Heap"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          q: "16. In the array representation of a binary heap, where is the root stored?",
          options: ["A[0]", "A[1]", "A[n]", "A[⌊n/2⌋]"],
          correct: 1,
          translation: "في تمثيل المصفوفة للكومة الثنائية، أين يُخزَّن الجذر؟",
          explanation:
            "الجذر في A[1] (1-indexed). الخيار (B) صحيح؛ أما (A) يفترض 0-indexed، و(C) و(D) مواضع أخرى.",
          tags: ["Binary Heap", "Array"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          q: "17. The left child of A[t] in a binary heap is stored at index:",
          options: ["A[2t+1]", "A[⌊t/2⌋]", "A[2t]", "A[t+1]"],
          correct: 2,
          translation:
            "الابن الأيسر لـ A[t] في الكومة الثنائية يُخزَّن عند المؤشر:",
          explanation:
            "الابن الأيسر في A[2t]. الخيار (C) صحيح؛ أما (A) الابن الأيمن، و(B) الأب، و(D) غير صحيح.",
          tags: ["Binary Heap", "Array"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          q: "18. The right child of A[t] in a binary heap is stored at index:",
          options: ["A[2t]", "A[2t-1]", "A[t+2]", "A[2t+1]"],
          correct: 3,
          translation:
            "الابن الأيمن لـ A[t] في الكومة الثنائية يُخزَّن عند المؤشر:",
          explanation:
            "الابن الأيمن في A[2t+1]. الخيار (D) صحيح؛ أما (A) الابن الأيسر، و(B) و(C) غير صحيحة.",
          tags: ["Binary Heap", "Array"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          q: "19. The parent of A[t] in a binary heap is stored at index:",
          options: ["A[⌊t/2⌋]", "A[2t]", "A[2t+1]", "A[t-1]"],
          correct: 0,
          translation: "أبو A[t] في الكومة الثنائية يُخزَّن عند المؤشر:",
          explanation:
            "الأب في A[⌊t/2⌋]. الخيار (A) صحيح؛ أما (B) و(C) الأبناء، و(D) غير صحيح.",
          tags: ["Binary Heap", "Array"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          q: "20. In a max heap, the maximum item is stored at:",
          options: ["A leaf node", "A[1] (the root)", "A[n]", "A[⌊n/2⌋]"],
          correct: 1,
          translation: "في الكومة العظمى، أين يُخزَّن أكبر عنصر؟",
          explanation:
            "أكبر عنصر في الجذر A[1]. الخيار (B) صحيح؛ أما (A) الأوراق صغيرة، و(C) و(D) مواضع أخرى.",
          tags: ["Binary Heap", "Max Heap"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          q: "21. What is the time complexity of UpHeap?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correct: 2,
          translation: "ما هو التعقيد الزمني لإجراء UpHeap؟",
          explanation:
            "UpHeap يصعد في مسار الأب بطول O(log n). الخيار (C) صحيح؛ أما (B) و(D) أكبر من اللازم، و(A) أصغر.",
          tags: ["Binary Heap", "UpHeap", "Complexity"],
          ref: "Lecture 5 — UpHeap",
          likely: "high",
        },
        {
          q: "22. What is the time complexity of DownHeap (Heapify)?",
          options: ["O(n)", "O(1)", "O(n log n)", "O(log n)"],
          correct: 3,
          translation: "ما هو التعقيد الزمني لإجراء DownHeap (Heapify)؟",
          explanation:
            "DownHeap ينزل بطول المسار من الجذر إلى الورق O(log n). الخيار (D) صحيح؛ أما (A) و(C) أكبر، و(B) أصغر.",
          tags: ["Binary Heap", "DownHeap", "Complexity"],
          ref: "Lecture 5 — DownHeap",
          likely: "high",
        },
        {
          q: "23. UpHeap is used when:",
          options: [
            "An item A[t] INCREASES in value",
            "An item A[t] DECREASES in value",
            "A new leaf node is added",
            "The root is removed",
          ],
          correct: 0,
          translation: "متى يُستخدَم إجراء UpHeap؟",
          explanation:
            "UpHeap يُستخدَم عندما تزيد قيمة A[t] فتُكسَر الخاصية نحو الأعلى. الخيار (A) صحيح؛ أما (B) يستلزم DownHeap، و(C) و(D) حالات أخرى.",
          tags: ["Binary Heap", "UpHeap"],
          ref: "Lecture 5 — UpHeap",
          likely: "high",
        },
        {
          q: "24. DownHeap is used when:",
          options: [
            "An item A[t] INCREASES in value",
            "An item A[t] DECREASES in value",
            "The heap is empty",
            "A new item is inserted at the root",
          ],
          correct: 1,
          translation: "متى يُستخدَم إجراء DownHeap؟",
          explanation:
            "DownHeap يُستخدَم عندما تنقص قيمة A[t] فتُكسَر الخاصية نحو الأسفل. الخيار (B) صحيح؛ أما (A) يستلزم UpHeap، و(C) و(D) حالات أخرى.",
          tags: ["Binary Heap", "DownHeap"],
          ref: "Lecture 5 — DownHeap",
          likely: "high",
        },
        {
          q: "25. In UpHeap, the percolation stops when:",
          options: [
            "A[p] < A[t]",
            "p > size[A]",
            "p = 0 or A[p] ≥ A[t]",
            "t = 1",
          ],
          correct: 2,
          translation: "متى تتوقف عملية الصعود في UpHeap؟",
          explanation:
            "تتوقف عندما p = 0 (وصلنا للجذر) أو A[p] ≥ A[t] (الخاصية استُرجِعت). الخيار (C) صحيح؛ أما (A) شرط الاستمرار، و(B) و(D) غير صحيحة.",
          tags: ["Binary Heap", "UpHeap"],
          ref: "Lecture 5 — UpHeap",
          likely: "high",
        },
        {
          q: "26. The last non-leaf node in a heap of size n is located at index:",
          options: ["A[⌊n/2⌋]", "A[n]", "A[n/2 + 1]", "A[1]"],
          correct: 0,
          translation: "آخر عقدة غير ورقية في كومة بحجم n تقع عند المؤشر:",
          explanation:
            "آخر عقدة غير ورقية هي A[⌊n/2⌋]. الخيار (A) صحيح؛ أما (B) آخر ورقة، و(C) و(D) غير صحيحة.",
          tags: ["Binary Heap", "ConstructHeap"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          q: "27. What is the time complexity of ConstructHeap using Solution 1 (build incrementally with UpHeap)?",
          options: ["Θ(n)", "Θ(n log n)", "Θ(log n)", "Θ(n²)"],
          correct: 1,
          translation:
            "ما هو التعقيد الزمني لـ ConstructHeap بالحل الأول (البناء التزايدي باستخدام UpHeap)؟",
          explanation:
            "الحل الأول ينفذ n مرة UpHeap كل واحدة O(log n) فيكون المجموع Θ(n log n). الخيار (B) صحيح؛ أما (A) الحل الثالث، و(C) و(D) غير صحيحة.",
          tags: ["Binary Heap", "ConstructHeap", "Complexity"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          q: "28. What is the time complexity of ConstructHeap using Solution 3 (build backwards with DownHeap)?",
          options: ["Θ(n log n)", "Θ(n²)", "Θ(n)", "Θ(log n)"],
          correct: 2,
          translation:
            "ما هو التعقيد الزمني لـ ConstructHeap بالحل الثالث (البناء العكسي باستخدام DownHeap)؟",
          explanation:
            "الحل الثالث يعطي Θ(n) لأن معظم العقد قريبة من القاع بارتفاعات صغيرة. الخيار (C) صحيح؛ أما (A) الحل الأول، و(B) و(D) غير صحيحة.",
          tags: ["Binary Heap", "ConstructHeap", "Complexity"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          q: "29. Why is Solution 3 (DownHeap backwards) preferred over Solution 1 (UpHeap) for ConstructHeap?",
          options: [
            "DownHeap is faster per call than UpHeap",
            "UpHeap is harder to implement",
            "DownHeap uses less memory",
            "Most nodes are near the bottom with larger depths but smaller heights",
          ],
          correct: 3,
          translation:
            "لماذا يُفضَّل الحل الثالث (DownHeap عكسي) على الحل الأول (UpHeap) في ConstructHeap؟",
          explanation:
            "معظم العقد قريبة من القاع بعمق كبير لكن بارتفاع صغير، فتكون تكلفة DownHeap الإجمالية خطية. الخيار (D) صحيح؛ أما (A) و(B) و(C) أسباب غير صحيحة.",
          tags: ["Binary Heap", "ConstructHeap"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          q: "30. The combined improvements to Quicksort yield approximately what gain in performance?",
          options: ["5-10%", "50%", "20-25%", "100%"],
          correct: 2,
          translation:
            "ما هي النسبة التقريبية للتحسن الناتجة من دمج تحسينات Quicksort؟",
          explanation:
            "التحسينات المدمجة تعطي 20-25%. الخيار (C) صحيح؛ أما (A) أقل من الواقع، و(B) و(D) مبالغ فيها.",
          tags: ["Quicksort", "Improvements"],
          ref: "Lecture 5 — Quicksort Summary",
          likely: "medium",
        },
        {
          q: "31. Quicksort is the method of choice for internal sorting of large files when n is approximately:",
          options: ["n ≤ 100", "n ≤ 10", "n ≤ 1000", "n ≥ 10000"],
          correct: 3,
          translation:
            "Quicksort هو الخيار المفضل للترتيب الداخلي للملفات الكبيرة عندما يكون n تقريبًا:",
          explanation:
            "يُفضَّل Quicksort للملفات الكبيرة عندما n ≥ 10000. الخيار (D) صحيح؛ أما (A) و(B) و(C) أحجام صغيرة لا تحتاج Quicksort.",
          tags: ["Quicksort", "Summary"],
          ref: "Lecture 5 — Quicksort Summary",
          likely: "medium",
        },
        {
          q: "32. In the DownHeap procedure, c ← 2t represents:",
          options: [
            "The right child of t",
            "The parent of t",
            "The largest child of t",
            "The left child of t",
          ],
          correct: 3,
          translation: "في إجراء DownHeap، التعليمة c ← 2t تمثل:",
          explanation:
            "c ← 2t تحدد الابن الأيسر لـ t. الخيار (D) صحيح؛ أما (A) الابن الأيمن، و(B) الأب، و(C) يُحدَّد لاحقًا بالمقارنة.",
          tags: ["Binary Heap", "DownHeap"],
          ref: "Lecture 5 — DownHeap",
          likely: "medium",
        },
        {
          q: "33. In the Partition procedure, what is the purpose of swapping A[i] and A[j]?",
          options: [
            "To maintain the two regions: A[p..i] all ≤ pivot and A[j..r] all ≥ pivot",
            "To sort the array",
            "To find the maximum element",
            "To find the minimum element",
          ],
          correct: 0,
          translation: "في إجراء Partition، ما هو الغرض من تبديل A[i] و A[j]؟",
          explanation:
            "التبديل يحافظ على منطقتين: A[p..i] عناصرها ≤ pivot و A[j..r] عناصرها ≥ pivot. الخيار (A) صحيح؛ أما (B) و(C) و(D) أغراض خاطئة.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "medium",
        },
        {
          q: "34. In the Partition procedure, the line 'repeat i++; until A[i] >= x' does what?",
          options: [
            "Decrements i until A[i] <= x",
            "Increments i until A[i] >= x",
            "Decrements j until A[j] <= x",
            "Increments j until A[j] >= x",
          ],
          correct: 1,
          translation:
            "في إجراء Partition، التعليمة 'repeat i++; until A[i] >= x' تقوم بماذا؟",
          explanation:
            "تزيد i حتى تصبح A[i] ≥ المحور. الخيار (B) صحيح؛ أما (A) عكس التأثير، و(C) و(D) تصفان j وليس i.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "medium",
        },
        {
          q: "35. Which of the following is NOT a listed improvement to Quicksort?",
          options: [
            "Median-of-three partitioning",
            "Switch to insertion sort on small subfiles",
            "Using merge sort instead",
            "Elimination of recursion",
          ],
          correct: 2,
          translation: "أيٌّ مما يلي ليس من التحسينات المذكورة على Quicksort؟",
          explanation:
            "استخدام merge sort ليس تحسينًا لـ Quicksort بل خوارزمية أخرى. الخيار (C) صحيح؛ أما (A) و(B) و(D) تحسينات مذكورة في المحاضرة.",
          tags: ["Quicksort", "Improvements"],
          ref: "Lecture 5 — Quicksort Summary",
          likely: "medium",
        },
        {
          q: "36. In a max heap, every subtree is also max heap ordered. This property is best described as:",
          options: [
            "A violation of heap order",
            "An accident of indexing",
            "A non-recursive structure",
            "A recursive structure",
          ],
          correct: 3,
          translation:
            "في الكومة العظمى، كل شجرة فرعية مرتبة أيضًا بترتيب الكومة العظمى. هذه الخاصية توصف بأنها:",
          explanation:
            "هذه خاصية بنية تكرارية (recursive structure) للكومة. الخيار (D) صحيح؛ أما (A) و(B) و(C) أوصاف خاطئة.",
          tags: ["Binary Heap", "Max Heap"],
          ref: "Lecture 5 — Binary Heap",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define Quicksort and list its four main steps.",
          translation:
            "عرِّف خوارزمية Quicksort واذكر خطواتها الأربع الرئيسية.",
          answer:
            "Quicksort is a divide-and-conquer sorting algorithm invented by Hoare in 1962.\nThe four steps are:\n1. Select a pivot (partitioning element).\n2. Rearrange the list so all elements before the pivot are ≤ pivot and those after are ≥ pivot.\n3. Exchange the pivot with the last element in the first (≤) sublist — the pivot is now in its final position.\n4. Sort the two sublists recursively.",
          tags: ["Quicksort", "Algorithm"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Write the Quicksort algorithm pseudocode.",
          translation: "اكتب pseudocode لخوارزمية Quicksort.",
          answer:
            "Quicksort(A, p, r) {\n  if (p < r) {\n    q = Partition(A, p, r);\n    Quicksort(A, p, q-1);\n    Quicksort(A, q+1, r);\n  }\n}\n\nThe algorithm recursively partitions the array and sorts the two resulting subarrays around the pivot's final position q.",
          tags: ["Quicksort", "Pseudocode"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain the Partition procedure (Hoare scheme).",
          translation: "اشرح إجراء Partition (نسخة Hoare).",
          answer:
            "Partition is the core of Quicksort and runs in O(n) time.\nSteps:\n1. Select pivot x = A[p].\n2. Initialize two pointers: i = p - 1 and j = r + 1.\n3. Grow two regions: A[p..i] with all elements ≤ pivot and A[j..r] with all elements ≥ pivot.\n4. Decrement j until A[j] <= x.\n5. Increment i until A[i] >= x.\n6. If i < j, swap A[i] and A[j]; otherwise return j.\n7. Repeat steps 4-6 until i >= j, then return j as the partition index.",
          tags: ["Quicksort", "Partition"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. State and explain the general recurrence for the running time of Quicksort.",
          translation: "اذكر واشرح علاقة التكرار العامة لزمن تنفيذ Quicksort.",
          answer:
            "General recurrence:\n  T(n) = T(n-k) + T(k-1) + n\nwhere k is the pivot's final position after partition.\n\nExplanation:\n- T(k-1): time to sort the left sublist of size (k-1).\n- T(n-k): time to sort the right sublist of size (n-k).\n- n: cost of Partition (a linear scan of all n elements).\n\nDepending on how balanced k is, this recurrence yields the best, worst, and average cases.",
          tags: ["Quicksort", "Recurrence", "Analysis"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Compare the best, worst, and average cases of Quicksort.",
          translation: "قارن بين أفضل وأسوأ ومتوسط الحالات لـ Quicksort.",
          answer:
            "Best case: Θ(n log n)\n- Occurs when the pivot always splits the array into two equal halves.\n- Recurrence: T(n) = 2T(n/2) + n.\n\nWorst case: Θ(n²)\n- Occurs when the pivot is always at the first or last position (e.g., a sorted array).\n- Recurrence: T(n) = T(n-1) + n.\n- Sum: n + (n-1) + ... + 1 = n(n+1)/2.\n\nAverage case: Θ(n log n)\n- For random arrays, the constant factor is approximately 1.386·n·lg n.\n- Method of choice for internal sorting of large files (n ≥ 10000).",
          tags: ["Quicksort", "Complexity", "Comparison"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. What input causes the worst case of Quicksort, and why?",
          translation: "أي مدخل يسبب أسوأ حالة في Quicksort، ولماذا؟",
          answer:
            "A sorted array (ascending or descending) causes the worst case.\n\nWhy: When the array is sorted, the pivot chosen as A[p] is already in its extreme position. Each Partition call removes only one element (the pivot), leaving a subproblem of size n-1.\n\nThis gives the recurrence T(n) = T(n-1) + n, which sums to:\n  T(n) = n + (n-1) + ... + 1 = n(n+1)/2 = Θ(n²).",
          tags: ["Quicksort", "Worst Case"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. List the improvements of Quicksort and the benefit of each.",
          translation: "اذكر تحسينات Quicksort وفائدة كل تحسين.",
          answer:
            "Combined, these improvements yield a 20-25% speedup:\n\n1. Better pivot selection: median-of-three partitioning\n   - Picks the median of the first, middle, and last elements as the pivot.\n   - Avoids the worst case on sorted files.\n\n2. Switch to insertion sort on small subfiles\n   - Insertion sort is faster than Quicksort on small arrays due to lower overhead.\n   - Used when a subfile size drops below a threshold.\n\n3. Elimination of recursion\n   - Replaces recursive calls with an explicit stack to reduce overhead.",
          tags: ["Quicksort", "Improvements"],
          ref: "Lecture 5 — Quicksort Summary",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define a binary heap and state the Max Heap Order property.",
          translation: "عرِّف الكومة الثنائية واذكر خاصية ترتيب الكومة العظمى.",
          answer:
            "Binary Heap: A binary tree with one key per node, allocated in a full-tree scheme (nodes allocated in increasing order of level, left-to-right within the same level). This allows an array implementation where indices simulate tree pointers.\n\nMax Heap Order: For every node x ≠ root,\n  key[x] ≤ key[parent(x)].\n\nConsequences:\n- The root A[1] contains the maximum item.\n- Every root-to-leaf path is non-increasing.\n- Every subtree is also max heap ordered (recursive structure).",
          tags: ["Binary Heap", "Max Heap"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain the array representation of a binary heap and give the indexing formulas.",
          translation:
            "اشرح تمثيل المصفوفة للكومة الثنائية واذكر صيغ المؤشرات.",
          answer:
            "The array representation uses a 1-indexed array A and the full-tree node allocation scheme (level order, left-to-right). Tree pointers are simulated by array indices:\n\n- Root: A[1]\n- Left child of A[t]: A[2t]\n- Right child of A[t]: A[2t+1]\n- Parent of A[t]: A[⌊t/2⌋]\n\nThis eliminates the need for explicit pointer storage and gives O(1) parent/child access, which makes the array the natural implementation of a binary heap.",
          tags: ["Binary Heap", "Array"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the UpHeap procedure: when is it used and how does it work?",
          translation: "اشرح إجراء UpHeap: متى يُستخدَم وكيف يعمل؟",
          answer:
            "When used: UpHeap (percolate up) is invoked when an item A[t] INCREASES in value, which may violate the heap order upward from t toward the root. Time complexity: O(log n).\n\nHow it works:\n1. Compute p = ⌊t/2⌋ (parent of t).\n2. If p = 0 (reached the root) or A[p] ≥ A[t] (heap order satisfied), stop.\n3. Otherwise swap A[t] with A[p] and recurse UpHeap(A, p).\n\nPseudocode:\nprocedure UpHeap(A, t)\n  p ← ⌊t/2⌋\n  if p = 0 or A[p] ≥ A[t] then return\n  A[t] ↔ A[p]\n  UpHeap(A, p)\nend",
          tags: ["Binary Heap", "UpHeap"],
          ref: "Lecture 5 — UpHeap",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Explain the DownHeap procedure: when is it used and how does it work?",
          translation: "اشرح إجراء DownHeap: متى يُستخدَم وكيف يعمل؟",
          answer:
            "When used: DownHeap (Heapify) is invoked when an item A[t] DECREASES in value, which may violate the heap order downward from t toward the leaves. Time complexity: O(log n).\n\nHow it works:\n1. Set c = 2t (left child of t).\n2. If c > size[A], t is a leaf — stop.\n3. If c < size[A] and A[c] < A[c+1], set c = c+1 (now c is the largest child of t).\n4. If A[t] < A[c], swap A[t] with A[c] and recurse DownHeap(A, c).\n\nPseudocode:\nprocedure DownHeap(A, t)\n  c ← 2t\n  if c > size[A] then return\n  if c < size[A] and A[c] < A[c+1] then c ← c+1\n  if A[t] < A[c] then\n    A[t] ↔ A[c]\n    DownHeap(A, c)\nend",
          tags: ["Binary Heap", "DownHeap"],
          ref: "Lecture 5 — DownHeap",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. Compare UpHeap and DownHeap: when is each used, in which direction, and what is their complexity?",
          translation:
            "قارن بين UpHeap و DownHeap: متى يُستخدَم كل منهما، وفي أي اتجاه، وما هو تعقيدهما الزمني؟",
          answer:
            "Comparison:\n\nUpHeap (percolate up):\n- Used when A[t] INCREASES in value.\n- Direction: upward, from t toward the root along the ancestral path.\n- Compares A[t] with parent A[⌊t/2⌋].\n- Stops when p = 0 or A[p] ≥ A[t].\n- Complexity: O(log n).\n\nDownHeap (Heapify):\n- Used when A[t] DECREASES in value.\n- Direction: downward, from t toward the leaves along the largest-child path.\n- Compares A[t] with its largest child A[c].\n- Stops when t is a leaf or A[t] ≥ A[c].\n- Complexity: O(log n).\n\nBoth are O(log n) because each walks at most one root-to-leaf path.",
          tags: ["Binary Heap", "UpHeap", "DownHeap", "Comparison"],
          ref: "Lecture 5 — UpHeap and DownHeap",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. Explain the two solutions for ConstructHeap and compare their complexities.",
          translation: "اشرح الحلين لـ ConstructHeap وقارن تعقيديهما الزمني.",
          answer:
            "Solution 1 — Build Incrementally (with UpHeap):\n  for t ← 1 to n do UpHeap(A, t)\n  Complexity: each UpHeap is O(log n), so total is Θ(n log n).\n\nSolution 3 — Build Backwards (with DownHeap):\n  LastNonleafNode ← ⌊n/2⌋\n  for t ← LastNonleafNode downto 1 do DownHeap(A, t)\n  Complexity: Θ(n) — tighter than the naive O(n log n) bound.\n\nComparison: Solution 3 is asymptotically faster (Θ(n) vs Θ(n log n)). Solution 1 is intuitive but slower; Solution 3 is preferred for building a heap from an arbitrary array.",
          tags: ["Binary Heap", "ConstructHeap", "Complexity"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          type: "essay",
          q: "14. Why is building the heap backwards (Solution 3 with DownHeap) faster than building it incrementally (Solution 1 with UpHeap)?",
          translation:
            "لماذا البناء العكسي للكومة (الحل الثالث مع DownHeap) أسرع من البناء التزايدي (الحل الأول مع UpHeap)؟",
          answer:
            "Key insight: In a complete binary tree, most nodes are near the bottom of the tree.\n\n- Nodes near the bottom have LARGER depths but SMALLER heights.\n- DownHeap's cost is bounded by the HEIGHT of the node, not its depth.\n- So most DownHeap calls are very cheap (height 0, 1, or 2).\n- Only the few nodes near the root have larger heights, and there are very few of them.\n\nA careful summation shows the total cost is:\n  Σ (height of node) · (number of nodes at that height) ≤ n\n\nHence Solution 3 runs in Θ(n), whereas Solution 1 (using UpHeap whose cost is bounded by depth) always pays the full O(log n) for each of the n elements, giving Θ(n log n).",
          tags: ["Binary Heap", "ConstructHeap"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          type: "essay",
          q: "15. State the main properties of a MAX heap.",
          translation: "اذكر الخصائص الرئيسية للكومة العظمى.",
          answer:
            "Properties of a MAX heap:\n1. Max Heap Order: For every node x ≠ root, key[x] ≤ key[parent(x)].\n2. The root A[1] contains the maximum item.\n3. Every root-to-leaf path appears in non-increasing order.\n4. Every subtree is also max heap ordered (recursive structure).\n5. The key at any node is the largest among all its descendants.\n6. Array representation: root = A[1], left child of A[t] = A[2t], right child = A[2t+1], parent of A[t] = A[⌊t/2⌋].",
          tags: ["Binary Heap", "Max Heap"],
          ref: "Lecture 5 — Binary Heap",
          likely: "medium",
        },
        {
          type: "essay",
          q: "16. Explain the recursion tree method and the three summation cases.",
          translation: "اشرح طريقة شجرة التكرار والحالات الثلاث لجمع الحدود.",
          answer:
            "Recursion Tree Method:\n- Convert the recursion tree (a tree where each node represents the cost of a recursive subproblem) into a summation of all node costs.\n- The total running time equals the sum of the costs across all levels of the tree.\n\nThree cases when summing the per-level costs:\n1. The first item is greater than the last.\n2. The first item is smaller than the last.\n3. The items are equal.\n\nEach case leads to a different summation pattern and a different asymptotic bound for the recurrence.",
          tags: ["Recursion Tree", "Analysis"],
          ref: "Lecture 5 — Recursion Tree Method",
          likely: "medium",
        },
        {
          type: "computational",
          q: "1. Compute the worst-case running time of Quicksort on a sorted array of n elements. Show the recurrence and the closed-form sum.",
          translation:
            "احسب زمن تنفيذ Quicksort في أسوأ حالة على مصفوفة مرتبة من n عنصر. اعرض علاقة التكرار والمجموع بصيغة مغلقة.",
          answer:
            "Given: A sorted array of n elements (worst case).\nFormula: T(n) = T(n-1) + n (pivot always at an extreme position).\nSteps:\n- T(n) = n + T(n-1)\n- T(n-1) = (n-1) + T(n-2)\n- T(n-2) = (n-2) + T(n-3)\n- ... unrolling until T(1) = 1\n- T(n) = n + (n-1) + (n-2) + ... + 1\n- This is the arithmetic series: Σ_{i=1}^{n} i = n(n+1)/2.\nAnswer: T(n) = n(n+1)/2 = Θ(n²).",
          tags: ["Quicksort", "Worst Case", "Sum"],
          ref: "Lecture 5 — Quicksort Analysis",
          likely: "high",
        },
        {
          type: "computational",
          q: "2. Sort the list 7 2 9 10 5 4 using Quicksort. Trace the first call to the Hoare Partition procedure and show the resulting array and the returned index q.",
          translation:
            "رتب القائمة 7 2 9 10 5 4 باستخدام Quicksort. تتبَّع أول استدعاء لإجراء Partition واعرض المصفوفة الناتجة وقيمة q المُرجَعة.",
          answer:
            "Given: A = [7, 2, 9, 10, 5, 4] (1-indexed), p = 1, r = 6.\nFormula: Hoare Partition — x = A[p]; i = p-1; j = r+1; scan inward; swap until i >= j.\nSteps:\n1. x = A[1] = 7; i = 0; j = 7.\n2. Iter 1: j-- → j=6, A[6]=4 ≤ 7 ✓; i++ → i=1, A[1]=7 ≥ 7 ✓; i<j, swap A[1]↔A[6]: A = [4, 2, 9, 10, 5, 7].\n3. Iter 2: j-- → j=5, A[5]=5 ≤ 7 ✓; i++ → i=2 (A[2]=2, not ≥7), i=3 (A[3]=9 ≥ 7 ✓); i<j, swap A[3]↔A[5]: A = [4, 2, 5, 10, 9, 7].\n4. Iter 3: j-- → j=4 (A[4]=10, not ≤7), j=3 (A[3]=5 ≤ 7 ✓); i++ → i=4 (A[4]=10 ≥ 7 ✓); i≥j, return q = j = 3.\nAnswer: After partition, A = [4, 2, 5, 10, 9, 7] and q = 3. Quicksort then recurses on A[1..2] = [4, 2] and A[4..6] = [10, 9, 7].",
          tags: ["Quicksort", "Partition", "Trace"],
          ref: "Lecture 5 — Quicksort",
          likely: "high",
        },
        {
          type: "computational",
          q: "3. Given the max heap A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] (1-indexed), find: (a) the root, (b) the left child of A[3], (c) the right child of A[3], and (d) the parent of A[7].",
          translation:
            "بالنظر إلى الكومة العظمى A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] (1-indexed)، أوجد: (a) الجذر، (b) الابن الأيسر لـ A[3]، (c) الابن الأيمن لـ A[3]، (d) أبو A[7].",
          answer:
            "Given: A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] (1-indexed).\nFormula: root = A[1]; left child of A[t] = A[2t]; right child of A[t] = A[2t+1]; parent of A[t] = A[⌊t/2⌋].\nSteps:\n(a) Root = A[1] = 16.\n(b) Left child of A[3]: A[2·3] = A[6] = 9.\n(c) Right child of A[3]: A[2·3+1] = A[7] = 3.\n(d) Parent of A[7]: A[⌊7/2⌋] = A[3] = 10.\nAnswer: (a) 16, (b) 9, (c) 3, (d) 10.",
          tags: ["Binary Heap", "Array", "Indexing"],
          ref: "Lecture 5 — Binary Heap",
          likely: "high",
        },
        {
          type: "computational",
          q: "4. For a binary heap of n = 11 elements, find: (a) the index of the last non-leaf node, (b) the left child of A[5], (c) the right child of A[5], and (d) the parent of A[10].",
          translation:
            "لكومة ثنائية من n = 11 عنصر، أوجد: (a) مؤشر آخر عقدة غير ورقية، (b) الابن الأيسر لـ A[5]، (c) الابن الأيمن لـ A[5]، (d) أبو A[10].",
          answer:
            "Given: n = 11.\nFormula: LastNonleafNode = ⌊n/2⌋; left child of A[t] = A[2t]; right child of A[t] = A[2t+1]; parent of A[t] = A[⌊t/2⌋].\nSteps:\n(a) LastNonleafNode = ⌊11/2⌋ = 5.\n(b) Left child of A[5]: A[2·5] = A[10].\n(c) Right child of A[5]: A[2·5+1] = A[11].\n(d) Parent of A[10]: A[⌊10/2⌋] = A[5].\nAnswer: (a) A[5], (b) A[10], (c) A[11], (d) A[5].",
          tags: ["Binary Heap", "ConstructHeap", "Indexing"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          type: "computational",
          q: "5. Given the array A = [4, 10, 3, 5, 1] (1-indexed, n = 5), apply the ConstructHeap procedure using Solution 3 (DownHeap backwards). Show the array after each DownHeap call and the final max heap.",
          translation:
            "بالنظر إلى المصفوفة A = [4, 10, 3, 5, 1] (1-indexed، n = 5)، طبِّق إجراء ConstructHeap باستخدام الحل الثالث (DownHeap عكسيًا). اعرض المصفوفة بعد كل استدعاء DownHeap والكومة العظمى النهائية.",
          answer:
            "Given: A = [4, 10, 3, 5, 1], n = 5.\nFormula: LastNonleafNode = ⌊n/2⌋ = 2; for t = 2 downto 1, call DownHeap(A, t).\nSteps:\n1. Initial: A = [4, 10, 3, 5, 1].\n2. DownHeap(A, 2): c = 4 (left child). Compare A[4]=5 vs A[5]=1 → c stays 4. A[2]=10 ≥ A[4]=5, no swap. A = [4, 10, 3, 5, 1].\n3. DownHeap(A, 1): c = 2. Compare A[2]=10 vs A[3]=3 → c=2. A[1]=4 < A[2]=10, swap: A = [10, 4, 3, 5, 1]. Recurse DownHeap(A, 2): c = 4. Compare A[4]=5 vs A[5]=1 → c=4. A[2]=4 < A[4]=5, swap: A = [10, 5, 3, 4, 1]. Recurse DownHeap(A, 4): c = 8 > 5, return.\n4. Final: A = [10, 5, 3, 4, 1].\nAnswer: Final max heap = [10, 5, 3, 4, 1].",
          tags: ["Binary Heap", "DownHeap", "ConstructHeap", "Trace"],
          ref: "Lecture 5 — ConstructHeap",
          likely: "high",
        },
        {
          type: "computational",
          q: "6. Given the max heap A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] (n = 10, 1-indexed). Suppose A[10] is changed from 1 to 17. Trace the UpHeap procedure from t = 10 and show the resulting heap.",
          translation:
            "بالنظر إلى الكومة العظمى A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] (n = 10، 1-indexed). لنفترض أن A[10] تغيَّر من 1 إلى 17. تتبَّع إجراء UpHeap من t = 10 واعرض الكومة الناتجة.",
          answer:
            "Given: A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; then A[10] ← 17 → A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 17].\nFormula: UpHeap(A, t) — p = ⌊t/2⌋; if p = 0 or A[p] ≥ A[t] return; else swap A[t] ↔ A[p] and recurse.\nSteps:\n1. UpHeap(A, 10): p = ⌊10/2⌋ = 5. A[5]=7 < A[10]=17, swap A[10]↔A[5]: A = [16, 14, 10, 8, 17, 9, 3, 2, 4, 7]. Recurse UpHeap(A, 5).\n2. UpHeap(A, 5): p = ⌊5/2⌋ = 2. A[2]=14 < A[5]=17, swap A[5]↔A[2]: A = [16, 17, 10, 8, 14, 9, 3, 2, 4, 7]. Recurse UpHeap(A, 2).\n3. UpHeap(A, 2): p = ⌊2/2⌋ = 1. A[1]=16 < A[2]=17, swap A[2]↔A[1]: A = [17, 16, 10, 8, 14, 9, 3, 2, 4, 7]. Recurse UpHeap(A, 1).\n4. UpHeap(A, 1): p = ⌊1/2⌋ = 0. p = 0, return.\nAnswer: Final max heap = [17, 16, 10, 8, 14, 9, 3, 2, 4, 7].",
          tags: ["Binary Heap", "UpHeap", "Trace"],
          ref: "Lecture 5 — UpHeap",
          likely: "high",
        },
      ],
    },
    {
      id: "algorithms-lecture-06",
      t: "المحاضرة 6: HeapSort والترتيب الخطي وضرب الأعداد الضخمة وبرج هانوي",
      d: "HeapSort, Priority Queue, Comparison Sort Lower Bound, Counting Sort, Karatsuba, Tower of Hanoi",
      pdf: "datenew/subjects/algorithms/lectures/Lec06/CS 311 lec.6 by Majid A. Askar.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec06/Lecture-06-Questions.pdf",
      // المحاضرة: السادسة — HeapSort وطابور الأولويات والترتيب الخطي وضرب الأعداد وبرج هانوي (HeapSort, Priority Queue, Lower Bound, Counting Sort, Karatsuba, Tower of Hanoi)
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات بالعربي لخوارزمية HeapSort والترتيب الخطي وبرج هانوي",
          links: [
            {
              t: "🔎 بحث في يوتيوب: شرح Heap Sort بالعربي",
              d: "بحث في يوتيوب لشروحات عربية لخوارزمية الترتيب بالكومة وخطوات DeleteMax. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=heap+sort+شرح+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: برج هانوي Tower of Hanoi",
              d: "بحث في يوتيوب لشروحات عربية لمسألة برج هانوي العودية واستنتاج تعقيدها الأسي. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=برج+هانوي+tower+of+hanoi+شرح",
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
            "محاضرات بالإنجليزي لشرح HeapSort و Counting Sort و Karatsuba و Tower of Hanoi",
          links: [
            {
              t: "🔎 بحث في يوتيوب: HeapSort and Counting Sort",
              d: "بحث في يوتيوب لشرح HeapSort و Counting Sort كخوارزميات ترتيب خطية وغير مقارنة. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=heapsort+counting+sort+explained",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: Karatsuba multiplication",
              d: "بحث في يوتيوب لشرح خوارزمية Karatsuba لضرب الأعداد الكبيرة وتقليل عدد الضربات الفرعية من 4 إلى 3. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=karatsuba+multiplication+algorithm+explained",
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
          description: "مقالات ومراجع موثوقة تشرح موضوعات المحاضرة بالتفصيل",
          links: [
            {
              t: "Heap Sort — GeeksforGeeks",
              d: "شرح كامل لخوارزمية HeapSort كنسخة محسنة من Selection Sort مبنية على الكومة الثنائية، مع تحليل التعقيد O(n log n).",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/heap-sort",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Counting Sort — GeeksforGeeks",
              d: "شرح Counting Sort كخوارزمية ترتيب غير مقارنة تعمل في زمن خطي O(n+k) مع شرح الاستقرار ولماذا لا تصلح للأعداد الـ 32-bit.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/counting-sort",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Karatsuba Algorithm — Wikipedia",
              d: "مقال ويكيبيديا عن خوارزمية Karatsuba لضرب الأعداد الكبيرة في زمن O(n^1.585) بدل O(n²)، مع الاكتشاف عام 1960 والنشر 1962.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://en.wikipedia.org/wiki/Karatsuba_algorithm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Tower of Hanoi — Wikipedia",
              d: "مقال ويكيبيديا عن برج هانوي: القواعد والحل العودي وعدد النقلات الأدنى (2^n − 1) والتعميمات.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://en.wikipedia.org/wiki/Tower_of_Hanoi",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Sorting Lower Bound — Stanford CS161",
              d: "ملاحظات محاضرة ستانفورد تثبت الحد الأدنى Ω(n log n) لخوارزميات الترتيب بالمقارنة باستخدام أشجار القرار وتقريب ستيرلنغ.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture7.pdf",
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
            "أدوات تفاعلية لتجربة خوارزميات الترتيب وبرج هانوي بصريًا",
          links: [
            {
              t: "VisuAlgo — Sorting Visualization",
              d: "أداة محاكاة تفاعلية تقارن خوارزميات الترتيب (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix) بصريًا مع تحليل التعقيد. ممتازة لفهم الفروق بين HeapSort و Quicksort و Counting Sort.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://visualgo.net/en/sorting",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "VisuAlgo — Binary Heap (HeapSort)",
              d: "محاكاة الكومة العظمى التي تدعم ExtractMax n مرة لتنفيذ HeapSort كامل. تكمل أداة الترتيب السابقة لفهم HeapSort من زاوية الكومة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://visualgo.net/en/heap",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Towers of Hanoi Animation",
              d: "أداة محاكاة تفاعلية لمسألة برج هانوي تدعم تعدد الأعمدة والأقراص لمتابعة الحل خطوة بخطوة وفهم السلوك الأسي.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://towersofhanoi.info/Animate.aspx",
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
          q: "1. What is the worst-case time complexity of HeapSort?",
          options: ["Θ(n log n)", "Θ(n²)", "Θ(n)", "Θ(log n)"],
          correct: 0,
          translation: "ما هو التعقيد الزمني في أسوأ حالة لخوارزمية HeapSort؟",
          explanation:
            "HeapSort يبني الكومة في Θ(n) ثم ينفّذ n-1 عملية DeleteMax كل واحدة بزمن Θ(log k)، والمجموع Θ(n log n) وهذا أسوأ حالة كما هو الحال في المتوسط. الخيارات الأخرى أصغر أو أكبر من الحقيقي.",
          tags: ["HeapSort"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          q: "2. What is the time complexity of constructing a max heap (ConstructMaxHeap)?",
          options: ["Θ(n²)", "Θ(n)", "Θ(n log n)", "Θ(log n)"],
          correct: 1,
          translation:
            "ما هو التعقيد الزمني لبناء كومة عليا (ConstructMaxHeap)؟",
          explanation:
            "بناء الكومة يتم في زمن خطي Θ(n) باستخدام DownHeap من الأسفل إلى الأعلى. الخيارات الأخرى إما أكبر أو أصغر من القيمة الصحيحة.",
          tags: ["HeapSort", "Priority Queue"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          q: "3. Each DeleteMax call on a heap of size k runs in time:",
          options: ["Θ(k)", "Θ(1)", "Θ(log k)", "Θ(k log k)"],
          correct: 2,
          translation: "كل استدعاء لـ DeleteMax على كومة حجمها k يستغرق زمن:",
          explanation:
            "عملية DeleteMax تنقل العنصر الأخير إلى الجذر ثم تنفّذ DownHeap الذي يتنازل على ارتفاع الشجرة وهو Θ(log k). الخيارات Θ(k) أو Θ(1) لا تمثّل ارتفاع الشجرة.",
          tags: ["HeapSort", "Priority Queue"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          q: "4. The heap property of a max-heap states that:",
          options: [
            "All leaves are at the same level",
            "Every left child is greater than its parent",
            "The tree is balanced by height",
            "Every parent key is greater than its children's keys",
          ],
          correct: 3,
          translation: "خاصية الكومة لكومة عليا (max-heap) تنص على أن:",
          explanation:
            "في الكومة العليا يكون مفتاح كل أب أكبر من مفاتيح أبنائه، وهذه هي الخاصية الأساسية. الخيارات الأخرى تتحدث عن التوازن أو ترتيب الأبناء وهي ليست خاصية الكومة.",
          tags: ["HeapSort", "Priority Queue"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          q: "5. In HeapSort, after building the max heap, what does the main loop do?",
          options: [
            "Repeatedly calls DeleteMax and places the result at the end of the array",
            "Repeatedly calls InsertMax",
            "Repeatedly calls DownHeap on all elements",
            "Repeatedly swaps random elements",
          ],
          correct: 0,
          translation:
            "في HeapSort، بعد بناء الكومة العليا، ماذا تفعل الحلقة الرئيسية؟",
          explanation:
            "الحلقة تستدعي DeleteMax بشكل متكرر من t=n إلى 2 وتضع كل عنصر محذوف في نهاية الجزء غير المرتب، فيتراكم العناصر مرتبة. الإجابات الأخرى لا تمثّل آلية HeapSort.",
          tags: ["HeapSort"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          q: "6. Which operation does the Insert procedure on a heap use after adding the new element at the end?",
          options: ["DownHeap", "DeleteMax", "ConstructHeap", "UpHeap"],
          correct: 3,
          translation:
            "أي عملية يستخدمها إجراء Insert في الكومة بعد إضافة العنصر الجديد في النهاية؟",
          explanation:
            "تستخدم Insert عملية UpHeap لرفع العنصر إلى موقعه الصحيح صعودًا. DownHeap تُستخدم في DeleteMax، أما ConstructHeap فتبني الكومة من الصفر.",
          tags: ["Priority Queue"],
          ref: "Lecture 6 — Priority Queue",
          likely: "high",
        },
        {
          q: "7. The DeleteMax procedure restores the heap property by calling:",
          options: [
            "UpHeap on the new root",
            "ConstructHeap on the whole heap",
            "DownHeap on the root",
            "Merge with another heap",
          ],
          correct: 2,
          translation: "إجراء DeleteMax يعيد خاصية الكومة باستدعاء:",
          explanation:
            "بعد نقل العنصر الأخير إلى الجذر، تستدعي DeleteMax عملية DownHeap على الجذر لإنزاله إلى موقعه الصحيح. UpHeap تُستخدم عند الإدراج وليس الحذف.",
          tags: ["Priority Queue"],
          ref: "Lecture 6 — Priority Queue",
          likely: "high",
        },
        {
          q: "8. What is the time complexity of the priority queue Insert operation?",
          options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
          correct: 0,
          translation: "ما هو التعقيد الزمني لعملية Insert في طابور الأولويات؟",
          explanation:
            "الإدراج يضيف العنصر في النهاية ثم ينفّذ UpHeap الذي يصعد على طول المسار إلى الجذر وهو بطول O(log n). الإجابات الأخرى لا تمثّل هذا التعقيد.",
          tags: ["Priority Queue"],
          ref: "Lecture 6 — Priority Queue",
          likely: "high",
        },
        {
          q: "9. Quick sort's divide step differs from Merge sort's because Quick sort:",
          options: [
            "Does NOT need a merge step",
            "Splits the array into exactly equal halves",
            "Always runs in O(n log n) worst case",
            "Uses an auxiliary array of size n",
          ],
          correct: 0,
          translation:
            "خطوة التقسيم في Quick sort تختلف عن Merge sort لأن Quick sort:",
          explanation:
            "Quick sort يقسّم المصفوفة إلى قسمين بحيث تكون عناصر الأول أقل من الثاني ثم يُرتّب كل قسم، فلا حاجة لخطوة دمج. Merge sort يحتاج دمجًا زمنه الخطي.",
          tags: ["Sorting Comparison"],
          ref: "Lecture 6 — Sorting Comparison",
          likely: "high",
        },
        {
          q: "10. What is the worst-case time complexity of Quick sort?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
          correct: 2,
          translation:
            "ما هو التعقيد الزمني في أسوأ حالة لخوارزمية Quick sort؟",
          explanation:
            "أسوأ حالة في Quick sort هي O(n²) عندما يكون المحور أصغر أو أكبر عنصر دائمًا. أما المتوسط فهو O(n log n).",
          tags: ["Sorting Comparison"],
          ref: "Lecture 6 — Sorting Comparison",
          likely: "high",
        },
        {
          q: "11. A comparison sort is a sorting algorithm that:",
          options: [
            "Uses no comparisons and runs in linear time",
            "Always produces a stable sort",
            "Uses pairwise comparisons as the only way to gain ordering information",
            "Always has a worst case of O(n log n)",
          ],
          correct: 2,
          translation:
            "خوارزمية الترتيب بالمقارنة (comparison sort) هي خوارزمية ترتيب:",
          explanation:
            "comparison sort تستخدم المقارنة الزوجية كوسيلة وحيدة للحصول على معلومات الترتيب. ليست كلها مستقرة وليست كلها O(n log n) في أسوأ حالة.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          q: "12. The theorem on comparison sorts states that all comparison sorts are:",
          options: ["Ω(n²)", "Ω(n)", "Ω(log n)", "Ω(n log n)"],
          correct: 3,
          translation:
            "تنص النظرية حول خوارزميات الترتيب بالمقارنة على أن جميعها:",
          explanation:
            "الحد الأدنى لكل خوارزمية ترتيب بالمقارنة هو Ω(n log n)، وهذا يثبت أن HeapSort وMergeSort مثاليان تقاربيًا. الخيارات الأخرى أصغر أو أكبر من الحد الصحيح.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          q: "13. A decision tree for a comparison sort on n elements must have at least how many leaves?",
          options: ["2^n", "n!", "n", "n log n"],
          correct: 1,
          translation:
            "شجرة القرار لخوارزمية ترتيب بالمقارنة على n عنصرًا يجب أن تحتوي على عدد أوراق لا يقل عن:",
          explanation:
            "شجرة القرار يجب أن تحتوي على n! ورقة على الأقل لتغطية جميع التبديلات الممكنة للإدخال. 2^n أصغر من n! للأكبر من 4.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          q: "14. Using Stirling's approximation, n! is bounded below by:",
          options: ["n^n", "2^n", "(n/e)^n", "n^2"],
          correct: 2,
          translation: "باستخدام تقريب ستيرلنغ، فإن n! محدودة من الأسفل بـ:",
          explanation:
            "تقريب ستيرلنغ يعطي n! > (n/e)^n، وهو ما يُستخدم لإثبات أن lg(n!) = Ω(n log n). الخيارات الأخرى ليست التقريب الصحيح.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          q: "15. The height h of a decision tree for sorting n elements must satisfy:",
          options: ["h ≥ lg(n!)", "h ≤ n!", "h = n log n", "h ≥ n"],
          correct: 0,
          translation: "ارتفاع h لشجرة قرار لترتيب n عنصرًا يجب أن يحقّق:",
          explanation:
            "بما أن شجرة القرار لها على الأقل n! ورقة وكل شجرة ثنائية بارتفاع h لها على الأكثر 2^h ورقة، فإن n! ≤ 2^h وبالتالي h ≥ lg(n!).",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          q: "16. The corollary to the comparison sort lower bound says:",
          options: [
            "HeapSort is faster than QuickSort in all cases",
            "Counting Sort is a comparison sort",
            "No sorting algorithm can be faster than O(n²)",
            "HeapSort and MergeSort are asymptotically optimal comparison sorts",
          ],
          correct: 3,
          translation: "تقول النتيجة المستنتجة من حد الترتيب بالمقارنة:",
          explanation:
            "بما أن HeapSort وMergeSort يحققان O(n log n) في أسوأ حالة والحد الأدنى هو Ω(n log n)، فهما مثاليان تقاربيًا. الخيارات الأخرى خاطئة أو لا علاقة لها.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          q: "17. Counting sort assumes that the input numbers are in the range:",
          options: [
            "-∞ to +∞",
            "1 to n",
            "1 to k where k is some known integer",
            "0 to 1",
          ],
          correct: 2,
          translation: "Counting sort يفترض أن أرقام الإدخال تقع في المجال:",
          explanation:
            "Counting sort يفترض أن الأرقام في المجال 1..k حيث k عدد صحيح معروف، ويبني مصفوفة مساعدة C بحجم k. الإجابات الأخرى تجعل Counting sort غير قابل للتطبيق.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          q: "18. What is the time complexity of Counting Sort?",
          options: ["O(n + k)", "O(n²)", "O(k log k)", "O(n log n)"],
          correct: 0,
          translation: "ما هو التعقيد الزمني لـ Counting Sort؟",
          explanation:
            "زمن Counting Sort هو O(n + k)، وعندما k = O(n) يصبح O(n) خطيًا. الإجابات الأخرى لا تمثّل التعقيد الصحيح.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          q: "19. Counting sort is said to be stable, which means:",
          options: [
            "It never crashes on large inputs",
            "Equal elements keep their relative order in the output",
            "It always runs in O(n) regardless of k",
            "It cannot be used for negative numbers",
          ],
          correct: 1,
          translation: "يُقال إن Counting sort مستقر (stable)، وهذا يعني:",
          explanation:
            "الاستقرار يعني أن العناصر المتساوية تحتفظ بترتيبها النسبي في الإخراج. هذا يتحقق في Counting sort بفضل التكرار العكسي عند وضع العناصر في B.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          q: "20. Counting sort does NOT contradict the Ω(n log n) lower bound because:",
          options: [
            "It uses comparisons in a clever way",
            "It only works on small inputs",
            "The lower bound is incorrect",
            "It is NOT a comparison sort",
          ],
          correct: 3,
          translation:
            "Counting sort لا يتعارض مع الحد الأدنى Ω(n log n) لأنه:",
          explanation:
            "الحد الأدنى Ω(n log n) ينطبق فقط على خوارزميات الترتيب بالمقارنة، أما Counting sort فلا يستخدم المقارنات إطلاقًا، لذلك لا يتعارض.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          q: "21. The elementary school (brute force) multiplication of two n-digit integers has bit-complexity:",
          options: ["Θ(n)", "Θ(n log n)", "Θ(n^1.585)", "Θ(n²)"],
          correct: 3,
          translation:
            "طريقة الضرب التقليدية (المدرسية) لعددين كل منهما n منزلة لها تعقيد بتّي:",
          explanation:
            "الضرب المدرسي يتطلب n² عملية ضرب جزئي للأرقام، فيكون تعقيده Θ(n²). الخيارات الأخرى تمثّل خوارزميات أسرع مثل Karatsuba.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          q: "22. The divide-and-conquer multiplication approach I (with 4 sub-multiplications) has recurrence:",
          options: [
            "T(n) = 4T(n/2) + Θ(n), giving Θ(n²)",
            "T(n) = 3T(n/2) + Θ(n), giving Θ(n^1.585)",
            "T(n) = 2T(n/2) + Θ(n), giving Θ(n log n)",
            "T(n) = T(n-1) + Θ(n), giving Θ(n²)",
          ],
          correct: 0,
          translation:
            "أسلوب فرّق تسد للضرب (النسخة I بـ 4 ضربات فرعية) له معادلة عودية:",
          explanation:
            "النسخة I تقسم كل عدد إلى نصفين وتقوم بـ 4 ضربات فرعية، فيكون T(n) = 4T(n/2) + Θ(n) الذي يحل إلى Θ(n²) — لا تحسّن عن الطريقة المدرسية.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          q: "23. Karatsuba multiplication reduces the number of sub-multiplications from 4 to:",
          options: ["2", "3", "5", "1"],
          correct: 1,
          translation:
            "خوارزمية Karatsuba للضرب تقلّل عدد الضربات الفرعية من 4 إلى:",
          explanation:
            "Karatsuba تستخدم 3 ضربات فرعية فقط بدلاً من 4 عبر حساب (a1+a0)·(b1+b0) − (c2 + c0). هذا التخفيض يحسّن التعقيد من Θ(n²) إلى Θ(n^1.585).",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          q: "24. The recurrence for Karatsuba multiplication is:",
          options: [
            "T(n) = 2T(n/2) + Θ(n)",
            "T(n) = 4T(n/2) + Θ(n)",
            "T(n) = 3T(n/2) + Θ(n)",
            "T(n) = 3T(n-1) + Θ(n)",
          ],
          correct: 2,
          translation: "معادلة العودية لخوارزمية Karatsuba هي:",
          explanation:
            "Karatsuba تقسم المسألة إلى 3 مسائل فرعية بحجم n/2 مع عمل خطي Θ(n)، فالمعادلة T(n) = 3T(n/2) + Θ(n) التي تُحل إلى Θ(n^1.585).",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          q: "25. Karatsuba multiplication achieves time complexity approximately:",
          options: ["Θ(n²)", "Θ(n log n)", "Θ(n^3)", "Θ(n^1.585)"],
          correct: 3,
          translation: "خوارزمية Karatsuba تحقق تعقيدًا زمنيًا تقريبًا:",
          explanation:
            "Karatsuba تعقيدها Θ(n^1.585) لأن log_2(3) ≈ 1.585. هذا أسرع من Θ(n²) للطريقة المدرسية.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          q: "26. In Karatsuba, c1 is computed as:",
          options: ["(a1+a0)·(b1+b0) − (c2 + c0)", "a1·b1", "a0·b0", "c2 + c0"],
          correct: 0,
          translation: "في Karatsuba، تُحسب c1 على أنها:",
          explanation:
            "c1 = (a1+a0)·(b1+b0) − (c2 + c0)، وهي حيلة ذكية تتيح حساب الحد المتوسط بضربة واحدة بدلاً من اثنتين. a1·b1 = c2 وa0·b0 = c0.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          q: "27. The Tower of Hanoi recurrence is:",
          options: [
            "T(n) = T(n-1) + c",
            "T(n) = 2T(n/2) + c",
            "T(n) = 2T(n-1) + c",
            "T(n) = T(n/2) + c",
          ],
          correct: 2,
          translation: "معادلة العودية لمسألة برج هانوي هي:",
          explanation:
            "برج هانوي يحتاج إلى نقل n-1 قرص مرتين (مرة للعمود المساعد ومرة للعمود الهدف) ثم نقل القرص الكبير، فيكون T(n) = 2T(n-1) + c.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          q: "28. The growth rate of the Tower of Hanoi algorithm is:",
          options: ["O(n log n)", "O(2^n)", "O(n²)", "O(n)"],
          correct: 1,
          translation: "معدل النمو لخوارزمية برج هانوي هو:",
          explanation:
            "حل معادلة العودية T(n) = 2T(n-1) + c يعطي O(2^n)، أي نمو أُسّي. الخيارات الأخرى أصغر من المعدل الفعلي.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          q: "29. Tower of Hanoi rules state that:",
          options: [
            "Only one disk can be moved at a time and a larger disk cannot be placed on a smaller one",
            "Multiple disks can be moved at a time",
            "A larger disk can be placed on a smaller one",
            "There is no restriction on disk placement",
          ],
          correct: 0,
          translation: "تنص قواعد برج هانوي على أن:",
          explanation:
            "القاعدتان: (1) نقل قرص واحد فقط في كل مرة، (2) لا يمكن وضع قرص أكبر فوق قرص أصغر. الإجابات الأخرى تخالف القواعد.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          q: "30. In the TOWER(n, A, B, C) algorithm, what does the first recursive call TOWER(n-1, A, C, B) do?",
          options: [
            "Moves n-1 disks from A to B using C as auxiliary",
            "Moves n-1 disks from A to C using B as auxiliary",
            "Moves the largest disk from A to C",
            "Moves n-1 disks from B to C using A as auxiliary",
          ],
          correct: 0,
          translation:
            "في خوارزمية TOWER(n, A, B, C)، ماذا تفعل أول استدعاء عودي TOWER(n-1, A, C, B)؟",
          explanation:
            "TOWER(n-1, A, C, B) تنقل n-1 قرص من المصدر A إلى الهدف B (العمود المساعد) باستخدام C كوسيط. الإجابات الأخرى تخطئ في الأعمدة المستخدمة.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          q: "31. How many moves does the Tower of Hanoi algorithm make for n disks?",
          options: ["n", "n²", "2^n − 1", "2^n"],
          correct: 2,
          translation: "كم نقلة تنفذ خوارزمية برج هانوي لـ n أقراص؟",
          explanation:
            "حل معادلة العودية T(n) = 2T(n-1) + 1 يعطي T(n) = 2^n − 1 نقلة. 2^n وحدها قريبة لكنها لا تأخذ شرط التوقف T(0)=0 بعين الاعتبار.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          q: "32. When is a Min-Heap used in a priority queue?",
          options: [
            "When we want sorting to be unstable",
            "When we intend to do DeleteMin",
            "When we intend to do DeleteMax",
            "When the heap must be a complete binary tree",
          ],
          correct: 1,
          translation:
            "متى تُستخدم الكومة الدنيا (Min-Heap) في طابور الأولويات؟",
          explanation:
            "نستخدم Min-Heap عندما نريد تنفيذ DeleteMin بدلاً من DeleteMax، لأن أصغر عنصر يكون في الجذر. الخيارات الأخرى لا علاقة لها بنوع الكومة.",
          tags: ["Priority Queue"],
          ref: "Lecture 6 — Priority Queue",
          likely: "medium",
        },
        {
          q: "33. HeapSort is described as 'sorts in place' because:",
          options: [
            "It uses an auxiliary array of size n",
            "It needs three extra arrays like Merge Sort",
            "It uses no extra memory beyond a constant amount",
            "It needs O(n) auxiliary space",
          ],
          correct: 2,
          translation: "يُوصف HeapSort بأنه 'يُرتّب في المكان' لأنه:",
          explanation:
            "HeapSort يستخدم فقط مساحة ثابتة إضافية (لا تعتمد على حجم الإدخال)، عكس Merge Sort الذي يحتاج مصفوفة مساعدة بحجم n.",
          tags: ["HeapSort", "Sorting Comparison"],
          ref: "Lecture 6 — Sorting Comparison",
          likely: "medium",
        },
        {
          q: "34. Insertion sort is preferable over Merge sort when:",
          options: [
            "The input has more than 1000 elements",
            "The input is in reverse sorted order",
            "We need a stable sort and the input is large",
            "The input is small (less than ~50 elements) or nearly sorted",
          ],
          correct: 3,
          translation: "يُفضَّل Insertion sort على Merge sort عندما:",
          explanation:
            "Insertion sort سريع على المدخلات الصغيرة (أقل من ~50 عنصرًا) أو شبه المرتبة، لكنه بطيء O(n²) على المدخلات المعكوسة أو الكبيرة.",
          tags: ["Sorting Comparison"],
          ref: "Lecture 6 — Sorting Comparison",
          likely: "medium",
        },
        {
          q: "35. Merge sort does NOT sort in place because:",
          options: [
            "It uses recursion which is not allowed in sorting",
            "It uses a heap data structure",
            "It uses comparisons",
            "It requires an auxiliary array during the merge step",
          ],
          correct: 3,
          translation: "Merge sort لا يُرتّب في المكان لأنه:",
          explanation:
            "Merge sort يحتاج إلى مصفوفة مساعدة أثناء عملية الدمج لتخزين النتائج المدموجة، مما يعني أنه لا يُرتّب في المكان. الإجابات الأخرى غير دقيقة.",
          tags: ["Sorting Comparison"],
          ref: "Lecture 6 — Sorting Comparison",
          likely: "medium",
        },
        {
          q: "36. Why is Counting Sort not suitable for sorting 32-bit integers?",
          options: [
            "32-bit integers cannot be compared",
            "Counting Sort requires the input to be sorted",
            "k = 2^32 is too large, making the auxiliary array C impractical",
            "32-bit integers do not fit in memory",
          ],
          correct: 2,
          translation: "لماذا لا يصلح Counting Sort لترتيب أعداد 32-bit؟",
          explanation:
            "لأن k = 2^32 = 4,294,967,296 كبيرة جدًا، مما يجعل مصفوفة العدّ C ضخمة وغير عملية. الإجابات الأخرى ليست السبب الحقيقي.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "medium",
        },
        {
          q: "37. The auxiliary array C in Counting Sort has size:",
          options: ["k", "n", "n²", "log n"],
          correct: 0,
          translation: "مصفوفة المساعدة C في Counting Sort يكون حجمها:",
          explanation:
            "مصفوفة C مُهيّأة بحجم k (نطاق القيم) لتخزين عدد تكرارات كل قيمة، وليس n. لذلك عندما k كبير جدًا يصبح Counting sort غير عملي.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "medium",
        },
        {
          q: "38. In Counting Sort, after computing the cumulative counts C[i] = C[i] + C[i-1], the value C[A[j]] represents:",
          options: [
            "The number of elements equal to A[j]",
            "The minimum element in A",
            "The final sorted position of A[j] in array B",
            "The maximum element in A",
          ],
          correct: 2,
          translation:
            "في Counting Sort، بعد حساب المجاميع التراكمية C[i] = C[i] + C[i-1]، فإن القيمة C[A[j]] تمثّل:",
          explanation:
            "بعد التراكم، C[A[j]] يمثّل الموضع النهائي للعنصر A[j] في مصفوفة الإخراج B، وهو ما يُستخدم لوضع العنصر في مكانه الصحيح.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "medium",
        },
        {
          q: "39. The bit complexity of n-bit addition is:",
          options: ["Θ(1)", "Θ(n)", "Θ(log n)", "Θ(n²)"],
          correct: 1,
          translation: "التعقيد البتّي لجمع عددين كل منهما n بت هو:",
          explanation:
            "جمع n-bit يحتاج إلى قراءة كل بتة، فيكون Θ(n). الخيارات الأخرى أصغر أو أكبر من اللازم.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "medium",
        },
        {
          q: "40. The Schönhage-Strassen algorithm for n-bit multiplication has complexity:",
          options: ["O(n^1.59)", "O(n log n · log log n)", "O(n²)", "O(2^n)"],
          correct: 1,
          translation: "خوارزمية Schönhage-Strassen لضرب n-bit لها تعقيد:",
          explanation:
            "Schönhage-Strassen (1971) تعقيد O(n log n · log log n)، وهي أسرع من Karatsuba (O(n^1.59)) وأبطأ من Fürer (2007).",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "medium",
        },
        {
          q: "41. What is the base case of the Tower of Hanoi recursive algorithm?",
          options: [
            "If n = 1, move one disk",
            "If n < 1, return immediately",
            "If n = 2, move two disks directly",
            "There is no base case",
          ],
          correct: 1,
          translation: "ما هي حالة القاعدة في خوارزمية برج هانوي العودية؟",
          explanation:
            "حالة القاعدة هي 'if n<1 return' - تتوقف العودية عندما لا يكون هناك أقراص لنقلها. الإجابات الأخرى لا تمثّل القاعدة المذكورة في المحاضرة.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Define a Priority Queue and list its main operations with their time complexities.",
          translation:
            "عرّف طابور الأولويات (Priority Queue) واذكر عملياته الرئيسية مع تعقيدها الزمني.",
          answer:
            "A Priority Queue is an abstract data structure that maintains a set S of items and supports the following operations:\n\n- MakeEmptyHeap(S): O(1) — sets size[A] ← 0.\n- ConstructHeap(S): O(n) — builds the heap from n items.\n- Insert(x, S): O(log n) — adds x at the end of the array, then calls UpHeap to restore the heap property.\n- DeleteMax(S): O(log n) — removes A[1] (the maximum), moves the last element to the root, decrements size, and calls DownHeap(A, 1).\n\nNote: A Min-Heap is used instead of a Max-Heap when we intend to perform DeleteMin instead of DeleteMax.",
          tags: ["Priority Queue"],
          ref: "Lecture 6 — Priority Queue",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Explain the HeapSort algorithm step by step and derive its time complexity.",
          translation:
            "اشرح خوارزمية HeapSort خطوة بخطوة واستنتج تعقيدها الزمني.",
          answer:
            "HeapSort(A[1..n]):\n1. ConstructMaxHeap(A[1..n]) — build a max heap in Θ(n).\n2. For t ← n downto 2: A[t] ← DeleteMax(A).\n\nDeleteMax removes the maximum element A[1], replaces it with the last element A[size[A]], decrements the size, and calls DownHeap(A, 1) to restore the heap property.\n\nTime complexity:\n- Build heap: Θ(n).\n- Each DeleteMax on a heap of size k: Θ(log k).\n- The loop runs for k = n−1, n−2, ..., 1, so total delete cost = Σ log k = Θ(n log n).\n- Total: Θ(n) + Θ(n log n) = Θ(n log n).\n\nThis is both the worst case and the average case.",
          tags: ["HeapSort"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain the DeleteMax procedure and its role in HeapSort.",
          translation: "اشرح إجراء DeleteMax ودوره في خوارزمية HeapSort.",
          answer:
            "DeleteMax procedure:\n  procedure DeleteMax(A)\n    if size[A] = 0 then return error\n    MaxItem ← A[1]\n    A[1] ← A[size[A]]\n    size[A] ← size[A] - 1\n    DownHeap(A, 1)\n    return MaxItem\n  end\n\nRole in HeapSort:\n- DeleteMax extracts the largest element from the heap (which is always at the root).\n- It replaces the root with the last element of the array, shrinks the heap by one, and restores the heap property via DownHeap.\n- HeapSort repeatedly calls DeleteMax and stores the returned maximum at the end of the array, producing a sorted (ascending) array.\n- The cost is Θ(log k) for a heap of size k, leading to Θ(n log n) total over all n−1 deletions.",
          tags: ["HeapSort", "Priority Queue"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Compare Insertion sort, Merge sort, Heap sort, and Quick sort in terms of time complexity, in-place property, and use of a merge step.",
          translation:
            "قارن بين Insertion sort وMerge sort وHeap sort وQuick sort من حيث التعقيد الزمني والترتيب في المكان واستخدام خطوة الدمج.",
          answer:
            "Comparison of sorting algorithms:\n\n1. Insertion Sort:\n   - Easy to code; fast on small inputs (< ~50 elements).\n   - Fast on nearly-sorted inputs.\n   - Worst/Average/Reverse-sorted case: O(n²).\n\n2. Merge Sort:\n   - Divide-and-conquer: split in half, recursively sort, then linear-time merge.\n   - Worst case: O(n log n).\n   - Does NOT sort in place (needs an auxiliary array during merge).\n\n3. Heap Sort:\n   - Uses a heap data structure (complete binary tree with heap property: parent key > children's keys).\n   - Worst case: O(n log n).\n   - Sorts in place.\n   - Involves a fair amount of shuffling memory around.\n\n4. Quick Sort:\n   - Divide-and-conquer: partition into two subarrays, recursively sort.\n   - All elements of first subarray < all of second.\n   - NO merge step needed.\n   - Average case: O(n log n); fast in practice.\n   - Worst case: O(n²).",
          tags: ["Sorting Comparison"],
          ref: "Lecture 6 — Sorting Comparison",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. State the theorem on the lower bound for comparison sorts and outline the proof using decision trees.",
          translation:
            "اذكر نظرية الحد الأدنى لخوارزميات الترتيب بالمقارنة ورسم خطوات الإثبات باستخدام أشجار القرار.",
          answer:
            "Theorem: All comparison sorts are Ω(n log n).\n\nProof outline using decision trees:\n1. A comparison sort can be modeled as a decision tree where each internal node represents a comparison between two elements, and each leaf represents a permutation (a possible ordering of the input).\n2. The tree must have at least n! leaves to cover all possible input permutations.\n3. A binary tree of height h has at most 2^h leaves.\n4. Therefore: n! ≤ 2^h, which implies h ≥ lg(n!).\n5. Using Stirling's approximation: n! > (n/e)^n.\n6. Therefore: h ≥ lg((n/e)^n) = n·lg n − n·lg e = Ω(n log n).\n\nCorollary: HeapSort and MergeSort are asymptotically optimal comparison sorts, since both run in O(n log n) and match the lower bound.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain the Counting Sort algorithm step by step.",
          translation: "اشرح خوارزمية Counting Sort خطوة بخطوة.",
          answer:
            "Counting Sort is a non-comparison sort that assumes input numbers are in the range 1..k.\n\nInput: A[1..n] with A[j] ∈ {1, 2, ..., k}.\nOutput: B[1..n] sorted (NOT in place).\nAuxiliary: C[1..k].\n\nAlgorithm:\n  CountingSort(A, B, k)\n    for i = 1 to k: C[i] = 0\n    for j = 1 to n: C[A[j]] += 1\n    for i = 2 to k: C[i] = C[i] + C[i-1]\n    for j = n downto 1:\n      B[C[A[j]]] = A[j]\n      C[A[j]] -= 1\n\nSteps:\n1. Initialize the count array C to zeros.\n2. Count occurrences: C[A[j]] stores how many times value A[j] appears.\n3. Compute prefix sums: C[i] now stores the number of elements ≤ i (the final position of value i).\n4. Place each element A[j] into its correct position in B, iterating j from n downto 1 to keep the sort stable.\n\nTime: O(k) + O(n) + O(k) + O(n) = O(n + k). When k = O(n), this is O(n).",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. List the main properties of Counting Sort.",
          translation: "اذكر الخصائص الرئيسية لخوارزمية Counting Sort.",
          answer:
            "Properties of Counting Sort:\n\n1. No comparisons: Counting Sort does NOT use any pairwise comparisons between elements.\n2. Linear time: Time complexity is O(n + k). When k = O(n), the algorithm runs in O(n) total.\n3. Stable: Equal elements keep their relative order in the output (achieved by iterating j from n downto 1 in the placement step).\n4. NOT in place: It requires an auxiliary array C of size k and an output array B of size n.\n5. Range assumption: It assumes input numbers are in the range 1..k where k is known.\n6. Not a comparison sort: Therefore it does NOT contradict the Ω(n log n) lower bound for comparison sorts.\n7. Impractical for large ranges: Cannot be used for 32-bit integers because k = 2^32 = 4,294,967,296 is too large.",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Explain why Counting Sort does not contradict the Ω(n log n) lower bound for sorting.",
          translation:
            "اشرح لماذا لا يتعارض Counting Sort مع الحد الأدنى Ω(n log n) لخوارزميات الترتيب.",
          answer:
            "The Ω(n log n) lower bound applies ONLY to comparison sorts — algorithms whose only operation to gain ordering information is pairwise comparison between two elements.\n\nCounting Sort is NOT a comparison sort:\n- It does NOT compare elements against each other.\n- It uses the assumption that values lie in a known range 1..k.\n- It places each element directly into its correct position using a count array.\n\nBecause the lower bound applies only to comparison sorts and Counting Sort is not one, there is no contradiction. Counting Sort can run in O(n) time, but only when k = O(n).",
          tags: ["Counting Sort", "Lower Bound"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain the Karatsuba multiplication algorithm and how it improves over the brute-force approach.",
          translation:
            "اشرح خوارزمية Karatsuba للضرب وكيف تتحسّن على الطريقة المدرسية.",
          answer:
            "Karatsuba Multiplication:\n\nGiven two n-digit integers a and b, split them as:\n  a = a1·10^(n/2) + a0\n  b = b1·10^(n/2) + b0\n\nCompute three products (instead of four):\n  c2 = a1·b1\n  c0 = a0·b0\n  c1 = (a1 + a0)·(b1 + b0) − (c2 + c0)\n\nThen: c = c2·10^n + c1·10^(n/2) + c0.\n\nWhy it improves over brute force:\n- The brute-force divide-and-conquer approach uses 4 sub-multiplications, giving T(n) = 4T(n/2) + Θ(n) = Θ(n²) — no improvement.\n- Karatsuba cleverly combines the cross terms (a1·b0 + a0·b1) into a single product (a1+a0)·(b1+b0) minus (c2 + c0), reducing to 3 sub-multiplications.\n- The recurrence becomes T(n) = 3T(n/2) + Θ(n) = Θ(n^(log_2 3)) ≈ Θ(n^1.585), which is asymptotically faster than Θ(n²).",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Explain the Tower of Hanoi problem, its rules, and the recursive algorithm to solve it.",
          translation:
            "اشرح مسألة برج هانوي وقواعدها والخوارزمية العودية لحلها.",
          answer:
            "Tower of Hanoi:\n- Three pegs (A, B, C) and n disks of different sizes.\n- Initially: all disks are on peg A, largest at the bottom, smallest at the top.\n- Goal: move all disks to peg C, using peg B as auxiliary.\n\nRules:\n1. Only one disk can be moved at a time.\n2. A larger disk CANNOT be placed on top of a smaller one.\n\nRecursive Algorithm:\n  TOWER(n, A, B, C) {\n    if n < 1 return;\n    TOWER(n-1, A, C, B);   // move n-1 disks from A to B using C\n    Move(A, C);              // move the largest disk from A to C\n    TOWER(n-1, B, A, C);   // move n-1 disks from B to C using A\n  }\n\nThe algorithm recursively moves n−1 disks to the auxiliary peg, then moves the largest disk to the target peg, then recursively moves the n−1 disks onto the target peg.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Derive the time complexity of the Tower of Hanoi algorithm using the recurrence T(n) = 2T(n−1) + c.",
          translation:
            "استنتج التعقيد الزمني لخوارزمية برج هانوي باستخدام معادلة العودية T(n) = 2T(n-1) + c.",
          answer:
            "Recurrence: T(n) = 2·T(n−1) + c, with T(0) = c1.\n\nSolving by repeated substitution:\n- T(n) = 2·T(n−1) + c\n- T(n) = 2·(2·T(n−2) + c) + c = 4·T(n−2) + 3c\n- T(n) = 2^k · T(n−k) + (2^k − 1)·c\n\nWhen k = n:\n- T(n) = 2^n · T(0) + (2^n − 1)·c\n- T(n) = 2^n·c1 + (2^n − 1)·c\n- T(n) = 2^n·(c1 + c) − c\n\nGrowth rate: T(n) = Θ(2^n), which is exponential.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          type: "essay",
          q: "12. What is Stirling's approximation and how is it used to prove the Ω(n log n) lower bound for comparison sorts?",
          translation:
            "ما هو تقريب ستيرلنغ وكيف يُستخدم لإثبات الحد الأدنى Ω(n log n) لخوارزميات الترتيب بالمقارنة؟",
          answer:
            "Stirling's approximation gives a lower bound on n!:\n  n! > (n/e)^n\n\nUse in the lower bound proof:\n1. A comparison sort's decision tree must have at least n! leaves, so its height h satisfies h ≥ lg(n!).\n2. Apply Stirling: lg(n!) > lg((n/e)^n) = n·lg(n/e) = n·lg n − n·lg e.\n3. Therefore: h > n·lg n − n·lg e.\n4. Dropping the lower-order term (−n·lg e), we get h = Ω(n lg n).\n\nSince the height h is a lower bound on the number of comparisons the algorithm must perform in the worst case, every comparison sort requires Ω(n log n) comparisons in the worst case.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          type: "essay",
          q: "13. What is the difference between comparison sorts and non-comparison sorts? Give an example of each.",
          translation:
            "ما الفرق بين خوارزميات الترتيب بالمقارنة وخوارزميات الترتيب بدون مقارنة؟ أعطِ مثالاً على كل منها.",
          answer:
            "Comparison sorts:\n- Use pairwise comparison between two elements as the ONLY way to gain ordering information.\n- Lower bound: Ω(n log n) in the worst case.\n- Examples: Insertion sort, Merge sort, Heap sort, Quick sort.\n\nNon-comparison sorts:\n- Do NOT compare elements against each other.\n- Use additional assumptions about the input (e.g., values lie in a small known range).\n- Can run in linear time O(n), but only under those assumptions.\n- Are NOT subject to the Ω(n log n) lower bound.\n- Example: Counting Sort (assumes values are integers in 1..k, runs in O(n + k)).\n\nThe key difference is whether the algorithm uses comparisons as its only source of ordering information. The lower bound applies only to comparison-based algorithms.",
          tags: ["Lower Bound", "Counting Sort"],
          ref: "Lecture 6 — Lower Bound",
          likely: "medium",
        },
        {
          type: "essay",
          q: "14. Discuss the known upper and lower bounds for n-bit integer multiplication.",
          translation:
            "ناقش الحدود العليا والدنيا المعروفة لضرب الأعداد الصحيحة n-bit.",
          answer:
            "Known bounds for n-bit multiplication:\n\nUpper bounds (algorithms that achieve them):\n- O(n^1.59) — Karatsuba-Ofman (1962): uses 3 sub-multiplications instead of 4.\n- O(n log n · log log n) — Schönhage-Strassen (1971): based on Fast Fourier Transform ideas.\n- n · log n · 2^(O(log* n)) — Fürer (2007): slightly faster than Schönhage-Strassen for very large n.\n\nLower bound:\n- Ω(n log n / log log n) — Fischer-Meyer (1974).\n\nNote: There is still a gap between the best upper bound (Fürer) and the lower bound (Fischer-Meyer), so the exact asymptotic complexity of integer multiplication remains an open problem.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "medium",
        },
        {
          type: "computational",
          q: "1. Use Karatsuba multiplication to compute X·Y for X = 3141 and Y = 5927.",
          translation:
            "استخدم خوارزمية Karatsuba لحساب X·Y عندما X = 3141 وY = 5927.",
          answer:
            "Given: X = 3141, Y = 5927 (4-digit numbers, n = 4, half = 2)\nFormula: split X = a1·100 + a0, Y = b1·100 + b0\n  c2 = a1·b1\n  c0 = a0·b0\n  c1 = (a1+a0)·(b1+b0) − (c2 + c0)\n  X·Y = c2·10^4 + c1·10^2 + c0\n\nSteps:\n- a1 = 31, a0 = 41, b1 = 59, b0 = 27\n- c2 = 31·59 = 1829\n- c0 = 41·27 = 1107\n- c1 = (31+41)·(59+27) − (1829 + 1107)\n- c1 = 72·86 − 2936 = 6192 − 2936 = 3256\n- X·Y = 1829·10000 + 3256·100 + 1107\n- X·Y = 18,290,000 + 325,600 + 1107\n\nAnswer: X·Y = 18,616,707 ✓",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          type: "computational",
          q: "2. Use Karatsuba multiplication to compute X·Y for X = 1234 and Y = 5678.",
          translation:
            "استخدم خوارزمية Karatsuba لحساب X·Y عندما X = 1234 وY = 5678.",
          answer:
            "Given: X = 1234, Y = 5678 (4-digit numbers, half = 2)\nFormula: split X = a1·100 + a0, Y = b1·100 + b0\n  c2 = a1·b1\n  c0 = a0·b0\n  c1 = (a1+a0)·(b1+b0) − (c2 + c0)\n  X·Y = c2·10^4 + c1·10^2 + c0\n\nSteps:\n- a1 = 12, a0 = 34, b1 = 56, b0 = 78\n- c2 = 12·56 = 672\n- c0 = 34·78 = 2652\n- c1 = (12+34)·(56+78) − (672 + 2652)\n- c1 = 46·134 − 3324 = 6164 − 3324 = 2840\n- X·Y = 672·10000 + 2840·100 + 2652\n- X·Y = 6,720,000 + 284,000 + 2652\n\nAnswer: X·Y = 7,006,652 ✓ (matches direct multiplication 1234 × 5678)",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          type: "computational",
          q: "3. Apply the divide-and-conquer multiplication approach I (with 4 sub-multiplications) on X = 3141 and Y = 5927, and verify the result.",
          translation:
            "طبّق أسلوب فرّق تسد للضرب (النسخة I بـ 4 ضربات فرعية) على X = 3141 وY = 5927 وتحقق من الناتج.",
          answer:
            "Given: X = 3141, Y = 5927 (n = 4, half = 2)\nFormula: X·Y = (a1·b1)·10^n + (a1·b0 + a0·b1)·10^(n/2) + (a0·b0)\n\nSteps:\n- X = 31·100 + 41  →  a1 = 31, a0 = 41\n- Y = 59·100 + 27  →  b1 = 59, b0 = 27\n- a1·b1 = 31·59 = 1829\n- a1·b0 = 31·27 = 837\n- a0·b1 = 41·59 = 2419\n- a0·b0 = 41·27 = 1107\n- Middle term: a1·b0 + a0·b1 = 837 + 2419 = 3256\n- X·Y = 1829·10000 + 3256·100 + 1107\n- X·Y = 18,290,000 + 325,600 + 1107\n\nAnswer: X·Y = 18,616,707 ✓ (matches direct multiplication: 3141 × 5927 = 18,616,707)\n\nNote: This approach uses 4 sub-multiplications (a1·b1, a1·b0, a0·b1, a0·b0), so the recurrence T(n) = 4T(n/2) + Θ(n) gives Θ(n²) — no improvement over brute force.",
          tags: ["Karatsuba"],
          ref: "Lecture 6 — Multiplication",
          likely: "high",
        },
        {
          type: "computational",
          q: "4. Solve the Tower of Hanoi recurrence T(n) = 2T(n−1) + c with T(0) = c1, and compute the number of moves for n = 4 disks.",
          translation:
            "حل معادلة العودية لبرج هانوي T(n) = 2T(n-1) + c مع T(0) = c1، واحسب عدد النقلات لـ n = 4 أقراص.",
          answer:
            "Given: T(n) = 2·T(n−1) + c, with T(0) = c1\nFormula: T(n) = 2^k · T(n−k) + (2^k − 1)·c\n\nSteps:\n- Substitute k = n: T(n) = 2^n · T(0) + (2^n − 1)·c\n- T(n) = 2^n · c1 + (2^n − 1)·c\n- T(n) = 2^n·(c1 + c) − c\n- Taking c1 = 0 and c = 1 (cost of one move): T(n) = 2^n − 1\n\nFor n = 4:\n- T(4) = 2^4 − 1 = 16 − 1 = 15\n\nAnswer: T(n) = Θ(2^n) — exponential growth. For n = 4 disks, exactly 15 moves are required.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          type: "computational",
          q: "5. How many moves are required to solve the Tower of Hanoi for n = 5 disks? Show the calculation by expanding the recurrence.",
          translation:
            "كم نقلة مطلوبة لحل برج هانوي لـ n = 5 أقراص؟ اعرض الحساب بتوسيع معادلة العودية.",
          answer:
            "Given: Tower of Hanoi with n = 5 disks, recurrence T(n) = 2·T(n−1) + 1, T(0) = 0\nFormula: T(n) = 2^n − 1 (closed form)\n\nSteps (expand recurrence):\n- T(0) = 0\n- T(1) = 2·T(0) + 1 = 2·0 + 1 = 1\n- T(2) = 2·T(1) + 1 = 2·1 + 1 = 3\n- T(3) = 2·T(2) + 1 = 2·3 + 1 = 7\n- T(4) = 2·T(3) + 1 = 2·7 + 1 = 15\n- T(5) = 2·T(4) + 1 = 2·15 + 1 = 31\n\nAnswer: T(5) = 31 moves. In general, T(n) = 2^n − 1 moves.",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          type: "computational",
          q: "6. Trace the moves performed by TOWER(3, A, B, C) and list each move, then verify the total count.",
          translation:
            "تتبّع النقلات التي تنفذها TOWER(3, A, B, C) واذكر كل نقلة، ثم تحقق من المجموع الكلي.",
          answer:
            "Given: TOWER(3, A, B, C) — move 3 disks from A to C using B as auxiliary\nFormula: T(n) = 2·T(n−1) + 1, so T(3) = 7 moves\n\nTrace:\n1. TOWER(2, A, C, B) — move 2 disks from A to B using C (3 moves):\n   1a. TOWER(1, A, B, C): Move A→C   (move 1)\n   1b. Move A→B                        (move 2)\n   1c. TOWER(1, C, A, B): Move C→B   (move 3)\n2. Move A→C  (move 4) — move the largest disk to target\n3. TOWER(2, B, A, C) — move 2 disks from B to C using A (3 moves):\n   3a. TOWER(1, B, C, A): Move B→A   (move 5)\n   3b. Move B→C                        (move 6)\n   3c. TOWER(1, A, B, C): Move A→C   (move 7)\n\nAnswer: 7 moves total in the order:\nA→C, A→B, C→B, A→C, B→A, B→C, A→C\nVerification: T(3) = 2^3 − 1 = 7 ✓",
          tags: ["Tower of Hanoi"],
          ref: "Lecture 6 — Tower of Hanoi",
          likely: "high",
        },
        {
          type: "computational",
          q: "7. Apply Counting Sort to the array A = [2, 5, 3, 1, 5, 2, 3] with k = 5. Show C after counting, after prefix sums, and the final sorted output B.",
          translation:
            "طبّق Counting Sort على المصفوفة A = [2, 5, 3, 1, 5, 2, 3] مع k = 5. اعرض C بعد العدّ وبعد المجاميع التراكمية والمخرج النهائي B.",
          answer:
            "Given: A = [2, 5, 3, 1, 5, 2, 3], n = 7, k = 5\nFormula: C counts occurrences, then prefix sums give positions, then place into B from the back.\n\nSteps:\n1. Initialize C = [0, 0, 0, 0, 0] (indices 1..5).\n2. Count occurrences (C[i] for i = 1..5):\n   - C[1] = 1 (one 1)\n   - C[2] = 2 (two 2s)\n   - C[3] = 2 (two 3s)\n   - C[4] = 0\n   - C[5] = 2 (two 5s)\n   C after counting = [1, 2, 2, 0, 2]\n3. Prefix sums: C[i] = C[i] + C[i−1]:\n   - C[1] = 1, C[2] = 1+2 = 3, C[3] = 3+2 = 5, C[4] = 5+0 = 5, C[5] = 5+2 = 7\n   C after prefix sums = [1, 3, 5, 5, 7]\n4. Iterate j from 7 downto 1, placing A[j] into B[C[A[j]]] and decrementing C[A[j]]:\n   - j=7: A[7]=3 → B[5]=3, C[3]=4\n   - j=6: A[6]=2 → B[3]=2, C[2]=2\n   - j=5: A[5]=5 → B[7]=5, C[5]=6\n   - j=4: A[4]=1 → B[1]=1, C[1]=0\n   - j=3: A[3]=3 → B[4]=3, C[3]=3\n   - j=2: A[2]=5 → B[6]=5, C[5]=5\n   - j=1: A[1]=2 → B[2]=2, C[2]=1\n\nAnswer: B = [1, 2, 2, 3, 3, 5, 5]",
          tags: ["Counting Sort"],
          ref: "Lecture 6 — Counting Sort",
          likely: "high",
        },
        {
          type: "computational",
          q: "8. Using Stirling's approximation, compute the lower bound lg(n!) for n = 10 and verify that it is Ω(n log n).",
          translation:
            "باستخدام تقريب ستيرلنغ، احسب الحد الأدنى lg(n!) لـ n = 10 وتحقق من أنه Ω(n log n).",
          answer:
            "Given: n = 10, Stirling's approximation: n! > (n/e)^n\nFormula: lg(n!) > lg((n/e)^n) = n·lg n − n·lg e (log base 2)\n\nSteps:\n- lg(10) ≈ 3.3219 (log base 2)\n- lg(e) ≈ 1.4427\n- n·lg n = 10 × 3.3219 ≈ 33.22\n- n·lg e = 10 × 1.4427 ≈ 14.43\n- Lower bound: lg(n!) > 33.22 − 14.43 ≈ 18.79\n- For reference, actual lg(10!) = lg(3,628,800) ≈ 21.79\n\nAnswer: h ≥ 18.79, so at least 19 comparisons are needed in the worst case to sort 10 elements. This confirms h = Ω(n log n) since the dominant term is n·lg n.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          type: "computational",
          q: "9. What is the minimum height of a decision tree for sorting n = 5 elements? (Hint: use h ≥ lg(n!).)",
          translation:
            "ما هو الحد الأدنى لارتفاع شجرة قرار لترتيب n = 5 عناصر؟ (تلميح: استخدم h ≥ lg(n!).)",
          answer:
            "Given: n = 5, h ≥ lg(n!)\nFormula: h ≥ lg(5!) = lg(120)\n\nSteps:\n- 5! = 5·4·3·2·1 = 120\n- lg(120) (log base 2): since 2^6 = 64 and 2^7 = 128, lg(120) is between 6 and 7\n- 120 / 64 = 1.875, so lg(120) = 6 + lg(1.875) ≈ 6 + 0.907 ≈ 6.91\n- Since h must be an integer, h ≥ 7\n\nAnswer: A decision tree for sorting 5 elements must have height at least 7. Therefore, any comparison sort needs at least 7 comparisons in the worst case to sort 5 elements.",
          tags: ["Lower Bound"],
          ref: "Lecture 6 — Lower Bound",
          likely: "high",
        },
        {
          type: "computational",
          q: "10. Compute the total time complexity of HeapSort on an array of n elements, breaking it into build-heap cost and delete-max loop cost.",
          translation:
            "احسب التعقيد الزمني الكامل لـ HeapSort على مصفوفة من n عنصرًا، مقسومًا إلى تكلفة بناء الكومة وتكلفة حلقة الحذف.",
          answer:
            "Given: HeapSort runs ConstructMaxHeap then a loop of n−1 DeleteMax calls.\nFormula: Total = Θ(build) + Σ Θ(log k) for k = n−1, ..., 1\n\nSteps:\n1. Build heap: ConstructMaxHeap costs Θ(n).\n2. DeleteMax loop: each DeleteMax on a heap of size k costs Θ(log k).\n3. The loop runs for k = n−1, n−2, ..., 1.\n4. Sum of deletion costs: Σ_{k=1}^{n−1} log k = log((n−1)!) = Θ(n log n) by Stirling's approximation.\n5. Total: Θ(n) + Θ(n log n) = Θ(n log n) (the linear term is dominated).\n\nAnswer: Total time = Θ(n log n). This is both the worst case and the average case for HeapSort.",
          tags: ["HeapSort"],
          ref: "Lecture 6 — HeapSort",
          likely: "high",
        },
      ],
    },
    {
      id: "algorithms-lecture-07",
      t: "المحاضرة 7: الجرافات (Graphs) وشجرة الامتداد الأدنى (MST)",
      d: "تمثيل الجرافات (مصفوفة وقائمة التجاور)، Hand-Shaking Lemma، ثم شجرة الامتداد الأدنى وخوارزمية Prim ومقارنتها بـ Kruskal.",
      pdf: "datenew/subjects/algorithms/lectures/Lec07/CS 311 lec.7 by Majid A. Askar.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec07/Lecture-07-Questions.pdf",
      // CS 311 - Lecture 7: Graphs, Graph Representations, and Minimum Spanning Trees (MST)

      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات عربية لفهم الجراف والشجرة الممتدة الأقل تكلفة، مع خطوات حل أمثلة على خوارزميتي Prim وKruskal.",
          links: [
            {
              t: "شرح وحل مثال خوارزمية Prim's Algorithm - Minimum Spanning Tree",
              d: "شرح مفهوم Minimum Spanning Tree ثم تنفيذ خوارزمية Prim خطوة بخطوة على مثال موزون، مع اختيار أقل حافة تربط الشجرة الحالية برأس لم يُضف بعد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=7Miiq52nwzs",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح وحل مثال خوارزمية Kruskal Algorithm - Minimum Spanning Tree",
              d: "شرح خوارزمية Kruskal من خلال ترتيب الحواف حسب الوزن، وإضافة الحافة الأقل تكلفة ما دامت لا تُنشئ دورة، حتى تتكون الشجرة الممتدة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=SVqszHPv-I8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح خوارزمية بريم Prim Algorithm",
              d: "شرح عربي إضافي لخوارزمية Prim وفكرة إيجاد أقل شجرة ممتدة في رسم بياني موزون، مع توضيح طريقة الاختيار التدريجي للحواف.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶️ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=-dBtzo2WDPk",
                  type: "view",
                  color: "orange",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات تعليمية باللغة الإنجليزية أو من قنوات تعليمية دولية تشرح تمثيل الجراف وخوارزميات MST بالأمثلة.",
          links: [
            {
              t: "Representation of Graph using Adjacency Matrix and Adjacency List - Techdose",
              d: "يقارن بين Adjacency Matrix وAdjacency List، ويشرح تمثيل الجراف الموجه وغير الموجه، ومزايا كل بنية وتكلفتها في الذاكرة والعمليات.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=4R7chuhzq7k",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Graph Representation using Adjacency Matrix and Adjacency List - GATEHUB",
              d: "شرح بصري لكيفية تخزين الرؤوس والحواف في المصفوفة وقائمة المجاورة، مع مناقشة تعقيد المساحة وبعض العمليات الأساسية.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=Gs_YMksyM_k",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Prim's Algorithm for MST - GeeksforGeeks",
              d: "فيديو يوضح مفهوم spanning tree وMST وكيفية اختيار الحواف ذات الوزن الأقل لبناء شجرة تشمل جميع الرؤوس دون تكوين دورة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=eB61LXLZVqs",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Kruskal's Algorithm: Minimum Spanning Tree Tutorial",
              d: "شرح لخوارزمية Kruskal مع مثال وتطبيق برمجي، ويركز على ترتيب الحواف واختيار الحافة التي لا تُنشئ دورة.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=xDrLSOxaFrA",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Graphs: Representation - Algorithms with Attitude",
              d: "مقدمة مرئية لتمثيل الجراف مع مقارنة Adjacency Matrix وAdjacency List وتوضيح تأثير اختيار طريقة التمثيل على العمليات.",
              icon: "🌍",
              actions: [
                {
                  label: "▶️ Watch video",
                  url: "https://www.youtube.com/watch?v=WQ2Tzlxl_Xo",
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
            "مقالات ومراجع تفصيلية لتعريف الجراف، وطرق تمثيله، ودرجات الرؤوس، ولمّة المصافحة، وخصائص MST وتحليل Prim وKruskal.",
          links: [
            {
              t: "Introduction to Graphs - GeeksforGeeks",
              d: "مدخل إلى Graph Data Structure ومفاهيم Vertex وEdge، مع أساسيات تمثيل الجراف باستخدام المصفوفة وقائمة المجاورة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/introduction-to-graphs-data-structure-and-algorithm-tutorials/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Graph and its Representations - GeeksforGeeks",
              d: "شرح مباشر لـ Adjacency Matrix وAdjacency List وكيفية تمثيل اتصال الرؤوس، وهو مناسب لمقارنة استهلاك الذاكرة وتكلفة الاستعلام عن الحواف.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Graph Theory Basics - GeeksforGeeks",
              d: "يغطي المصطلحات الأساسية مثل Degree وIn-degree وOut-degree وHandshaking Theorem، بما في ذلك علاقات مجموع درجات الرؤوس بعدد الحواف.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/engineering-mathematics/mathematics-graph-theory-basics/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Handshaking Lemma and Interesting Tree Properties - GeeksforGeeks",
              d: "شرح لمّة المصافحة: في الجراف غير الموجه يساوي مجموع درجات الرؤوس ضعف عدد الحواف، مع أمثلة تساعد على فهم العلاقة.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/handshaking-lemma-and-interesting-tree-properties/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "What is Minimum Spanning Tree (MST)? - GeeksforGeeks",
              d: "يعرف spanning tree وMST، ويوضح أن الهدف هو ربط جميع الرؤوس بأقل مجموع لأوزان الحواف، مع مقدمة إلى Prim وKruskal.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/what-is-minimum-spanning-tree-mst/",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Prim's Algorithm for Minimum Spanning Tree - GeeksforGeeks",
              d: "شرح خطوات Prim وتهيئة قيم key، واختيار الرأس ذي المفتاح الأصغر، وتحديث مفاتيح الرؤوس المجاورة. يناقش أيضًا الفرق بين تمثيل المصفوفة واستخدام Min-Heap.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Kruskal's Minimum Spanning Tree Algorithm - GeeksforGeeks",
              d: "شرح فرز الحواف تصاعديًا بحسب الوزن، واختبار ما إذا كانت إضافة الحافة ستكوّن دورة، والتوقف بعد اختيار V-1 حافة في الجراف المتصل.",
              icon: "📚",
              actions: [
                {
                  label: "🚀 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Minimum Spanning Trees - Princeton Algorithms",
              d: "مرجع أكاديمي يشرح MST وخوارزميتي Prim وKruskal ودور Priority Queue وUnion-Find، ويتناول الأداء والتعقيد في التنفيذ.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://algs4.cs.princeton.edu/43mst/index.php",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree - Prim's Algorithm - CP-Algorithms",
              d: "شرح تقني لخوارزمية Prim، وفكرة إضافة أقل حافة تصل الشجرة الحالية برأس خارجها، مع مناقشة التعقيد الزمني واختلافه حسب التنفيذ.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://cp-algorithms.com/graph/mst_prim.html",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree - Kruskal's Algorithm - CP-Algorithms",
              d: "شرح خوارزمية Kruskal من خلال ترتيب الحواف ودمج المكونات المتصلة، مع توضيح منع الدورات وتحليل الأداء واستخدام Disjoint Set Union.",
              icon: "📚",
              actions: [
                {
                  label: "📖 قراءة المرجع",
                  url: "https://cp-algorithms.com/graph/mst_kruskal.html",
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
            "أدوات تفاعلية لرسم الجرافات وتعديل أوزان الحواف ومشاهدة بناء MST خطوة بخطوة، بالإضافة إلى تجربة تمثيلات الجراف المختلفة.",
          links: [
            {
              t: "VisuAlgo - Minimum Spanning Tree (Prim's and Kruskal's)",
              d: "محاكاة تفاعلية لخوارزميتي Prim وKruskal؛ يمكن تتبع الحواف المختارة، وملاحظة تجنب الدورات، ومقارنة طريقة نمو الشجرة والمكونات الوسيطة.",
              icon: "🔧",
              actions: [
                {
                  label: "🧪 فتح المحاكاة",
                  url: "https://visualgo.net/en/mst?slide=1",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "VisuAlgo - Graph Data Structures",
              d: "أداة لتجربة الجرافات وفهم Directed وUndirected وWeighted Graph، ومقارنة Adjacency Matrix وAdjacency List وEdge List.",
              icon: "🔧",
              actions: [
                {
                  label: "🧪 فتح المحاكاة",
                  url: "https://visualgo.net/en/graphds?slide=1",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Graph Online - Graph Editor and Algorithms",
              d: "محرر تفاعلي لإنشاء الرؤوس والحواف وتعيين الأوزان وتجربة خوارزميات على الرسم البياني، بما في ذلك إيجاد Minimum Spanning Tree وحساب درجات الرؤوس.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://graphonline.ru/en/",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Graph Online - Help: Algorithms and Graph Editing",
              d: "تعليمات استخدام أداة رسم الجراف وتعديله، مع خطوات الوصول إلى خوارزمية Minimum Spanning Tree وعرض درجات الرؤوس ومصفوفة المجاورة.",
              icon: "🔧",
              actions: [
                {
                  label: "📖 فتح دليل الاستخدام",
                  url: "https://graphonline.ru/en/wiki/Help/Help",
                  type: "view",
                  color: "orange",
                },
              ],
            },
            {
              t: "Virtual Labs - Prim's Algorithm Demo",
              d: "تجربة تعليمية تفاعلية لخوارزمية Prim تعرض اختيار رأس البداية، وإضافة أقل حافة متاحة، وتكرار العملية حتى تضم الشجرة جميع الرؤوس.",
              icon: "🔧",
              actions: [
                {
                  label: "🧪 تشغيل التجربة",
                  url: "https://ds2-iiith.vlabs.ac.in/exp/min-spanning-trees/prims-algorithm/demo-of-prims-algorithm.html",
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
          q: "1. In a graph G = (V, E), what does E represent?",
          options: [
            "The set of vertices of G",
            "The set of pairs of vertices of G (the edge set)",
            "The set of weights of the edges of G",
            "The set of all paths in G",
          ],
          correct: 1,
          translation: "في الجراف G = (V, E)، ماذا تمثل E؟",
          explanation:
            "E هي مجموعة الأضلاع (edge set) وهي مجموعة أزواج من رؤوس G. مجموعة الرؤوس هي V، أما الأوزان فتُعرَّف بدالة منفصلة w في الجراف الموزون.",
          tags: ["Graph", "Edge set"],
          ref: "Lecture 07 — Graph",
        },
        {
          q: "2. In which kind of graph are the edges ordered pairs of vertices?",
          options: [
            "An undirected graph",
            "An unweighted graph",
            "A spanning tree",
            "A directed graph (digraph)",
          ],
          correct: 3,
          translation:
            "في أي نوع من الجرافات تكون الأضلاع أزواجًا مرتبة من الرؤوس؟",
          explanation:
            "الجراف الموجّه (digraph) أضلاعه أزواج مرتبة، فالضلع (1,2) يختلف عن (2,1). الجراف غير الموجّه أضلاعه أزواج غير مرتبة، والـ spanning tree هو subgraph وليس نوعًا من الجرافات بهذا المعنى.",
          tags: ["Directed graph", "Digraph"],
          ref: "Lecture 07 — Graph",
        },
        {
          q: "3. Which of the following is an application of a minimum spanning tree mentioned in the lecture?",
          options: [
            "Designing a minimum-cost network (telephone, power, cable, road) that connects all sites",
            "Sorting an array in linear time",
            "Multiplying two large integers",
            "Solving the Tower of Hanoi puzzle",
          ],
          correct: 0,
          translation:
            "أي مما يلي هو تطبيق على شجرة الامتداد الأدنى (MST) ذُكر في المحاضرة؟",
          explanation:
            "الـ MST يعطي أقل تكلفة لشبكة تربط كل المواقع (تليفون، كهرباء، كابلات، طرق). الاختيارات الأخرى مواضيع من المحاضرة السابقة (Linear sorting، ضرب الأعداد الكبيرة، Tower of Hanoi) ولا علاقة لها بالـ MST.",
          tags: ["MST", "Applications", "Network design"],
          ref: "Lecture 07 — MST Applications",
        },
        {
          q: "4. In an edge weighted graph G = (V, E, w), the weight function w maps each edge to which set?",
          options: [
            "The set of vertices V",
            "A subset of the edges E",
            "The set of real numbers",
            "The set of spanning trees of G",
          ],
          correct: 2,
          translation:
            "في الجراف الموزون G = (V, E, w)، الدالة w بتحوّل كل ضلع إلى أي مجموعة؟",
          explanation:
            "المحاضرة تعرّف w: E -> R أي أن كل ضلع يأخذ وزنًا هو عدد حقيقي. ولذلك يمكن أن يكون الوزن سالبًا، مثل الضلع (2,3) الذي وزنه -16 في المثال.",
          tags: ["Weighted graph", "Weight function"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          q: "5. In the directed weighted example, w(1,5) = 15 while w(5,1) = 14. What does this show?",
          options: [
            "The graph must actually be undirected",
            "In a directed graph the two directions between the same vertices can have different weights",
            "Edge weights must always be positive",
            "Vertices 1 and 5 are not adjacent",
          ],
          correct: 1,
          translation:
            "في مثال الجراف الموجّه الموزون، w(1,5) = 15 بينما w(5,1) = 14. ماذا يوضح ذلك؟",
          explanation:
            "في الجراف الموجّه (1,5) و(5,1) ضلعان مختلفان وكل واحد له وزنه. الاختيار الثالث غلط لأن المثال نفسه فيه وزن سالب (-16)، والرابع غلط لأن بين 1 و5 ضلعين فعلًا.",
          tags: ["Directed weighted graph", "Edge weight"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          q: "6. In the undirected edge weighted example, which statement is true?",
          options: [
            "w(1,5) = w(5,1) = 17",
            "w(1,5) = 15 and w(5,1) = 14",
            "w(1,5) = 17 but w(5,1) = 0",
            "w(5,1) is undefined",
          ],
          correct: 0,
          translation: "في مثال الجراف الموزون غير الموجّه، أي عبارة صحيحة؟",
          explanation:
            "في الجراف غير الموجّه الضلع (1,5) هو نفسه (5,1) فله وزن واحد هو 17. القيمتان 15 و14 هما للمثال الموجّه.",
          tags: ["Undirected weighted graph"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          q: "7. In the adjacency matrix of a graph, A[i, j] = 1 exactly when:",
          options: [
            "i is equal to j",
            "the weight of (i, j) is positive",
            "vertex i has a larger degree than vertex j",
            "the pair (i, j) belongs to E(G)",
          ],
          correct: 3,
          translation: "في مصفوفة التجاور، تكون A[i, j] = 1 بالضبط عندما:",
          explanation:
            "التعريف: A[i,j] = 1 لو (i,j) ينتمي إلى E(G) وإلا 0. المصفوفة العادية لا تهتم بالأوزان ولا بالدرجات.",
          tags: ["Adjacency matrix"],
          ref: "Lecture 07 — Adjacency Matrix",
        },
        {
          q: "8. Which property does the adjacency matrix of an undirected graph have?",
          options: [
            "All of its entries are equal to 1",
            "Non-zero entries appear only on the diagonal",
            "It is symmetric, because (i, j) and (j, i) denote the same edge",
            "It is always upper triangular",
          ],
          correct: 2,
          translation:
            "ما الخاصية التي تتميز بها مصفوفة التجاور لجراف غير موجّه؟",
          explanation:
            "لأن الضلع غير الموجّه (i,j) هو نفسه (j,i) تظهر القيمة 1 في الموضعين، فتكون المصفوفة متماثلة (مثال المحاضرة يوضح ذلك). المصفوفة للجراف الموجّه هي التي قد لا تكون متماثلة.",
          tags: ["Adjacency matrix", "Symmetric"],
          ref: "Lecture 07 — Adjacency Matrix",
        },
        {
          q: "9. In the weighted adjacency matrix, what is A[i, j] when i is not equal to j and (i, j) is not an edge?",
          options: ["0", "infinity", "1", "-1"],
          correct: 1,
          translation:
            "في مصفوفة التجاور الموزونة، ماذا تكون A[i, j] لو i لا تساوي j و(i, j) ليس ضلعًا؟",
          explanation:
            "التعريف: w(i,j) لو الضلع موجود، و0 لو i = j، وinfinity في باقي الحالات. لا نستخدم 0 لأن 0 قد يكون وزنًا حقيقيًا، ولا نستخدم 1 أو -1 لأنهما أوزان محتملة.",
          tags: ["Weighted adjacency matrix", "Infinity"],
          ref: "Lecture 07 — Weighted Adjacency Matrix",
        },
        {
          q: "10. If a min-heap is used for the priority queue Q, what is the running time of MST-Prim, where n = |V| and m = |E|?",
          options: ["O(m lg n)", "O(n^2 * m)", "O(m + n)", "O(lg n)"],
          correct: 0,
          translation:
            "لو استخدمنا min-heap كطابور أولوية Q، ما زمن تشغيل MST-Prim حيث n = |V| و m = |E|؟",
          explanation:
            "هناك n استدعاء لـ ExtractMin وm استدعاء لـ DecreaseKey، وكل واحد منهم O(lg n)، فالإجمالي O((n+m) lg n) = O(m lg n) لأن n - 1 <= m في جراف متصل. الاختيارات الأخرى لا تعكس تكلفة عمليات الـ heap.",
          tags: ["Prim", "Running time", "Min-heap"],
          ref: "Lecture 07 — Review: Prim's Algorithm",
        },
        {
          q: "11. In the (weighted) adjacency list structure, what does Adj[i] contain?",
          options: [
            "All vertices of V(G) in increasing order",
            "The weights of all edges in G",
            "The pairs <j, w(i, j)> for every edge (i, j) in E(G)",
            "The edges that are not incident to vertex i",
          ],
          correct: 2,
          translation: "في هيكل قائمة التجاور (الموزونة)، ماذا تحتوي Adj[i]؟",
          explanation:
            "Adj[i] = { <j, w(i,j)> | (i,j) in E(G) } أي أزواج (الجار، وزن الضلع) لكل ضلع خارج من i. القائمة تحتوي الجيران فقط وليس كل الرؤوس.",
          tags: ["Adjacency list"],
          ref: "Lecture 07 — (Weighted) Adjacency List Structure",
        },
        {
          q: "12. What is the space complexity (number of memory cells) of an adjacency matrix?",
          options: ["O(V + E)", "O(E)", "O(V log V)", "O(V^2)"],
          correct: 3,
          translation: "ما تعقيد المساحة (عدد خلايا الذاكرة) لمصفوفة التجاور؟",
          explanation:
            "المصفوفة V x V فتأخذ O(V^2) بغض النظر عن عدد الأضلاع. O(V + E) هي مساحة قائمة التجاور.",
          tags: ["Adjacency matrix", "Space complexity"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "13. What is the space complexity of an adjacency list structure?",
          options: ["O(V^2)", "O(V + E)", "O(V * E)", "O(1)"],
          correct: 1,
          translation: "ما تعقيد المساحة لهيكل قائمة التجاور؟",
          explanation:
            "نحتاج خلية لكل رأس في المصفوفة Adj ثم عقدة لكل ضلع، فالمجموع O(V + E). لذلك هي أوفر من المصفوفة في الجرافات المتفرقة (sparse).",
          tags: ["Adjacency list", "Space complexity"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "14. How long does it take to test whether (u, v) is in E(G) using an adjacency matrix?",
          options: ["O(1)", "O(V)", "O(|Adj[u]|)", "O(V + E)"],
          correct: 0,
          translation:
            "كم يستغرق اختبار هل (u, v) ينتمي إلى E(G) باستخدام مصفوفة التجاور؟",
          explanation:
            "نقرأ الخلية A[u][v] مباشرة فيكون الزمن O(1). في قائمة التجاور نحتاج المرور على Adj[u] فيكون O(|Adj[u]|).",
          tags: ["Adjacency matrix", "Edge lookup"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "15. How long does it take to test whether (u, v) is in E(G) using an adjacency list?",
          options: ["O(1)", "O(V^2)", "O(|Adj[u]|)", "O(V + E)"],
          correct: 2,
          translation:
            "كم يستغرق اختبار هل (u, v) ينتمي إلى E(G) باستخدام قائمة التجاور؟",
          explanation:
            "يجب البحث عن v داخل القائمة Adj[u] فالزمن O(|Adj[u]|). O(1) هي زمن المصفوفة، وO(V + E) هي زمن المرور على كل الهيكل.",
          tags: ["Adjacency list", "Edge lookup"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "16. How long does it take to list the vertices adjacent to a vertex u using an adjacency matrix?",
          options: ["O(1)", "O(|Adj[u]|)", "O(V^2)", "O(V)"],
          correct: 3,
          translation:
            "كم يستغرق سرد الرؤوس المجاورة للرأس u باستخدام مصفوفة التجاور؟",
          explanation:
            "يجب فحص الصف الكامل الخاص بـ u (V خلية) فالزمن O(V). في القائمة يكون O(|Adj[u]|) لأننا نمر على الجيران فقط.",
          tags: ["Adjacency matrix", "Neighbors"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          q: "17. In MST-Prim(G, w, r), how are the key values initialized?",
          options: [
            "key[r] = 0 for the start vertex r, and key[u] = infinity for every other vertex",
            "key[u] = 0 for every vertex",
            "key[u] = w(u, r) for every vertex",
            "key[r] = infinity and key[u] = 0 for all other vertices",
          ],
          correct: 0,
          translation: "في MST-Prim(G, w, r)، كيف تُهيَّأ قيم key؟",
          explanation:
            "نضع key[r] = 0 حتى يكون r أول رأس يُستخرج من Q، وباقي الرؤوس infinity، وp[r] = NULL. باقي الاختيارات تجعل ExtractMin يختار رأسًا غير r أو يربك الخوارزمية.",
          tags: ["Prim", "Initialization"],
          ref: "Lecture 07 — Prim's Algorithm",
        },
        {
          q: "18. For a vertex v in a directed graph, how is deg(v) defined?",
          options: [
            "deg(v) = outdeg(v) - indeg(v)",
            "deg(v) = outdeg(v) + indeg(v)",
            "deg(v) = |Adj[v]| only",
            "deg(v) = |E|",
          ],
          correct: 1,
          translation: "لرأس v في جراف موجّه، كيف تُعرَّف deg(v)؟",
          explanation:
            "في الجراف الموجّه deg(v) = outdeg(v) + indeg(v). |Adj[v]| تساوي outdeg(v) فقط، لذلك الاختيار الثالث ناقص.",
          tags: ["Degree", "Indegree", "Outdegree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          q: "19. According to the Hand-Shaking Lemma, for any graph the sum of deg(v) over all vertices equals:",
          options: ["|E|", "|V|", "2|E|", "|V| + |E|"],
          correct: 2,
          translation:
            "حسب Hand-Shaking Lemma، مجموع deg(v) لكل الرؤوس في أي جراف يساوي:",
          explanation:
            "كل ضلع يساهم بدرجة واحدة عند كل طرف من طرفيه، أي 2 في المجموع، فالمجموع = 2|E|. القيمة |E| هي مجموع indeg أو مجموع outdeg في الجراف الموجّه.",
          tags: ["Hand-Shaking Lemma", "Degree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          q: "20. For any directed graph, the sum of indeg(v) over all vertices (which also equals the sum of outdeg(v)) is:",
          options: ["2|E|", "|V|", "|V|^2", "|E|"],
          correct: 3,
          translation:
            "في أي جراف موجّه، مجموع indeg(v) لكل الرؤوس (وهو أيضًا يساوي مجموع outdeg(v)) هو:",
          explanation:
            "كل ضلع موجّه له رأس بداية واحد (يزيد outdeg) ورأس نهاية واحد (يزيد indeg)، فكل من المجموعين = |E|. أما 2|E| فهو مجموع deg الكلية.",
          tags: ["Indegree", "Outdegree", "Directed graph"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          q: "21. What is a spanning tree of a connected, undirected graph G = (V, E)?",
          options: [
            "A connected subgraph of G that forms an undirected tree incident with each vertex",
            "A subgraph made only of the lightest edge at each vertex",
            "A directed subgraph that contains every cycle of G",
            "Any subgraph of G with exactly |V| edges",
          ],
          correct: 0,
          translation:
            "ما هي شجرة الامتداد (spanning tree) لجراف متصل غير موجّه G = (V, E)؟",
          explanation:
            "هي subgraph متصل يكوّن شجرة غير موجّهة ويلمس كل رؤوس G. الاختيارات الأخرى غلط: الشجرة لا تحتوي دورات، وليست موجّهة، وعدد أضلاعها |V| - 1 وليس |V|.",
          tags: ["Spanning tree", "Subgraph"],
          ref: "Lecture 07 — Minimum Spanning Tree (MST)",
        },
        {
          q: "22. In a weighted graph G = (V, E, W), what is the weight of a subgraph?",
          options: [
            "The number of edges in the subgraph",
            "The sum of the weights of the edges in the subgraph",
            "The largest edge weight in the subgraph",
            "The sum of the degrees of its vertices",
          ],
          correct: 1,
          translation: "في جراف موزون G = (V, E, W)، ما هو وزن الـ subgraph؟",
          explanation:
            "وزن الـ subgraph هو مجموع أوزان أضلاعه. على هذا الأساس الـ MST هو شجرة الامتداد ذات أقل مجموع وزن.",
          tags: ["Subgraph weight", "MST"],
          ref: "Lecture 07 — Minimum Spanning Tree (MST)",
        },
        {
          q: "23. In the lecture's example graph G (vertices a, b, c, d, e), what is the cost of the minimum spanning tree T?",
          options: ["20", "18", "16", "14"],
          correct: 2,
          translation:
            "في مثال المحاضرة للجراف G (الرؤوس a, b, c, d, e)، ما تكلفة شجرة الامتداد الأدنى T؟",
          explanation:
            "الـ MST يستخدم الأضلاع 3 + 2 + 4 + 7 = 16. القيمة 20 هي تكلفة شجرة أخرى T' (3 + 5 + 4 + 8) وهي أغلى فليست minimum.",
          tags: ["MST", "Cost"],
          ref: "Lecture 07 — Minimum Spanning Tree (example graph G)",
        },
        {
          q: "24. Which algorithm grows a single tree by repeatedly adding the least-cost edge that connects a vertex in the tree to a vertex not in the tree?",
          options: [
            "Kruskal's algorithm",
            "Heap sort",
            "The Hand-Shaking Lemma",
            "Prim's algorithm",
          ],
          correct: 3,
          translation:
            "أي خوارزمية تنمّي شجرة واحدة بإضافة أقل ضلع تكلفة يربط رأسًا داخل الشجرة برأس خارجها في كل خطوة؟",
          explanation:
            "هذا وصف خوارزمية Prim، والحل الوسيط فيها دائمًا subtree. Kruskal يضيف أقل ضلع لا يكوّن دورة وحله الوسيط spanning forest. وHeap sort خوارزمية ترتيب، والـ Lemma نظرية في الدرجات.",
          tags: ["Prim", "Greedy"],
          ref: "Lecture 07 — Finding a MST",
        },
        {
          q: "25. In Kruskal's algorithm, what is the intermediary solution during the run?",
          options: [
            "A spanning forest",
            "A subtree",
            "A single vertex",
            "A directed cycle",
          ],
          correct: 0,
          translation: "في خوارزمية Kruskal، ما هو الحل الوسيط أثناء التنفيذ؟",
          explanation:
            "Kruskal يضيف أقل ضلع لا يكوّن دورة، فتتكون عدة أشجار منفصلة تُدمج تدريجيًا أي spanning forest. الـ subtree هو الحل الوسيط في Prim.",
          tags: ["Kruskal", "Spanning forest"],
          ref: "Lecture 07 — Finding a MST",
        },
        {
          type: "essay",
          q: "1. Define a graph G = (V, E) and distinguish between undirected and directed graphs, giving the lecture's examples.",
          translation:
            "عرّف الجراف G = (V, E) وفرّق بين الجراف غير الموجّه والموجّه مع أمثلة المحاضرة.",
          answer:
            "A graph G = (V, E) consists of V = V(G), the vertex set, and E = E(G), the edge set, which is a set of pairs of vertices of G.\n" +
            "Undirected graph: edges are unordered pairs of vertices, so (u, v) and (v, u) are the same edge. Example: V = {1,...,6}, E = {(1,2),(1,4),(1,5),(2,3),(2,5),(3,5),(4,5)}.\n" +
            "Directed graph (digraph): edges are ordered pairs, so (u, v) and (v, u) are different edges. Example: E = {(1,2),(1,4),(1,5),(3,2),(4,4),(4,5),(5,1),(5,2),(5,3)}, which even contains the edge (4,4) from vertex 4 to itself.\n" +
            "In both examples vertex 6 has no incident edges.",
          tags: ["Graph", "Directed", "Undirected"],
          ref: "Lecture 07 — Graph",
        },
        {
          type: "essay",
          q: "2. What is an edge weighted graph? Explain how the weights differ between the undirected and the directed example.",
          translation:
            "ما هو الجراف الموزون؟ اشرح كيف تختلف الأوزان بين المثال غير الموجّه والمثال الموجّه.",
          answer:
            "An edge weighted graph is G = (V, E, w) where w: E -> R assigns a real number (possibly negative) to every edge.\n" +
            "Undirected example: w(1,5) = w(5,1) = 17, because (1,5) and (5,1) are the same edge.\n" +
            "Directed example: w(1,5) = 15 but w(5,1) = 14, because they are two different edges, each with its own weight.\n" +
            "Negative weights are allowed, e.g. the edge (2,3) has weight -16.",
          tags: ["Weighted graph"],
          ref: "Lecture 07 — Edge Weighted Graph",
        },
        {
          type: "essay",
          q: "3. Explain the adjacency matrix and the weighted adjacency matrix, including their definitions.",
          translation:
            "اشرح مصفوفة التجاور ومصفوفة التجاور الموزونة مع تعريف كل منهما.",
          answer:
            "Adjacency matrix: A[i, j] = 1 if (i, j) is in E(G), and 0 otherwise, for i, j in V(G). For an undirected graph it is symmetric.\n" +
            "Weighted adjacency matrix: A[i, j] = w(i, j) if (i, j) is in E(G); A[i, j] = 0 if i = j and (i, j) is not in E(G); A[i, j] = infinity otherwise.\n" +
            "Example (undirected weighted graph): the first row is 0, 6, infinity, 9, 2, infinity, because vertex 1 has edges to vertices 2, 4 and 5 with weights 6, 9 and 2.",
          tags: ["Adjacency matrix", "Weighted"],
          ref: "Lecture 07 — Adjacency Matrix / Weighted Adjacency Matrix",
        },
        {
          type: "essay",
          q: "4. Describe the (weighted) adjacency list structure.",
          translation: "صِف هيكل قائمة التجاور (الموزونة).",
          answer:
            "Adj is an array indexed by the vertices; Adj[i] = { <j, w(i, j)> | (i, j) is in E(G) } for i in V(G).\n" +
            "Each entry of Adj[i] is a node holding a neighbor j and the weight w(i, j), linked to the next node of the list.\n" +
            "Example: in the first undirected weighted graph, Adj[1] holds the nodes (2, 6), (4, 9), (5, 2), and Adj[6] is empty because vertex 6 has no edges.\n" +
            "For undirected graphs each edge appears in two lists; |Adj[v]| equals deg(v).",
          tags: ["Adjacency list"],
          ref: "Lecture 07 — (Weighted) Adjacency List Structure",
        },
        {
          type: "essay",
          q: "5. State the Hand-Shaking Lemma and define degree, in-degree and out-degree.",
          translation:
            "اذكر Hand-Shaking Lemma وعرّف degree وin-degree وout-degree.",
          answer:
            "Undirected G: deg(v) = |{u | (v,u) in E(G)}| = |Adj[v]|.\n" +
            "Digraph G: outdeg(v) = |{u | (v,u) in E(G)}| = |Adj[v]|, indeg(v) = |{u | (u,v) in E(G)}|, and deg(v) = outdeg(v) + indeg(v).\n" +
            "Hand-Shaking Lemma: for any graph, directed or undirected, the sum of deg(v) over all v in V(G) equals 2|E|.\n" +
            "For any directed graph, the sum of indeg(v) equals the sum of outdeg(v), and both equal |E|.",
          tags: ["Hand-Shaking Lemma", "Degree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          type: "essay",
          q: "6. Compare the adjacency matrix and the adjacency list in terms of space and time.",
          translation:
            "قارن بين مصفوفة التجاور وقائمة التجاور من حيث المساحة والزمن.",
          answer:
            "Space: matrix O(V^2) versus list O(V + E).\n" +
            "Initialize structure: matrix O(V^2), list O(V + E).\n" +
            "Scan (incident edges of) all vertices: matrix O(V^2), list O(V + E).\n" +
            "List vertices adjacent to u: matrix O(V), list O(|Adj[u]|).\n" +
            "Is (u, v) in E(G)?: matrix O(1), list O(|Adj[u]|).\n" +
            "So the matrix is better for fast edge lookup, while the list is better for space and for scanning neighbors, especially in sparse graphs.",
          tags: ["Matrix vs list", "Complexity"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          type: "essay",
          q: "7. Define a spanning tree and a minimum spanning tree, and mention some applications of an MST.",
          translation:
            "عرّف شجرة الامتداد وشجرة الامتداد الأدنى واذكر بعض تطبيقات الـ MST.",
          answer:
            "A spanning tree of a connected, undirected graph G = (V, E) is a connected subgraph of G that forms an undirected tree incident with each vertex.\n" +
            "In a weighted graph G = (V, E, W) the weight of a subgraph is the sum of the weights of its edges.\n" +
            "A minimum spanning tree is a spanning tree with the minimum weight. Example: T has cost 3+2+4+7 = 16 while another spanning tree T' has cost 3+5+4+8 = 20.\n" +
            "Applications: network design (telephone, electrical power, hydraulic, TV cable, computer, road). The MST gives a minimum-cost network connecting all sites, i.e. the most economical construction.",
          tags: ["MST", "Spanning tree", "Applications"],
          ref: "Lecture 07 — Minimum Spanning Tree (MST)",
        },
        {
          type: "essay",
          q: "8. Explain Prim's algorithm (MST-Prim) step by step.",
          translation: "اشرح خوارزمية Prim (MST-Prim) خطوة بخطوة.",
          answer:
            "Prim grows a single tree by repeatedly adding the least-cost edge that connects a vertex in the existing tree to a vertex not in the tree. The intermediary solution is a subtree.\n" +
            "Initialization: Q = V[G]; key[u] = infinity for every u; key[r] = 0 for the chosen start vertex r; p[r] = NULL.\n" +
            "While Q is not empty: u = ExtractMin(Q); for each v in Adj[u], if v is in Q and w(u, v) < key[v], then p[v] = u and key[v] = w(u, v).\n" +
            "The parent pointers p[] give the edges of the MST when Q becomes empty.",
          tags: ["Prim", "MST-Prim"],
          ref: "Lecture 07 — Prim's Algorithm",
        },
        {
          type: "essay",
          q: "9. Compare Prim's and Kruskal's algorithms for finding an MST.",
          translation: "قارن بين خوارزميتي Prim وKruskal لإيجاد الـ MST.",
          answer:
            "Both are principal greedy methods for finding an MST. MSTs satisfy the optimal substructure property: an optimal tree is composed of optimal subtrees.\n" +
            "Prim: grow a single tree by repeatedly adding the least-cost edge that connects a vertex in the existing tree to a vertex not in it. The intermediary solution is a subtree.\n" +
            "Kruskal: grow a tree by repeatedly adding the least-cost edge that does not introduce a cycle among the edges included so far. The intermediary solution is a spanning forest.",
          tags: ["Prim", "Kruskal", "Greedy"],
          ref: "Lecture 07 — Finding a MST",
        },
        {
          type: "essay",
          q: "10. What is the hidden cost in the MST-Prim code, and what is its running time with a min-heap?",
          translation:
            "ما هي التكلفة الخفية في كود MST-Prim، وما زمن التشغيل عند استخدام min-heap؟",
          answer:
            "The hidden cost is the update key[v] = w(u, v): when the key of a vertex stored in the min-heap changes, the heap must be fixed, which is the DecreaseKey operation. ExtractMin deletes the smallest element from the min-heap.\n" +
            "There are n = |V| ExtractMin calls and (at most) m = |E| DecreaseKey calls.\n" +
            "With a min-heap for Q each operation costs O(lg n), so the time is O((n + m) lg n) = O(m lg n), because for a connected graph n - 1 <= m.\n" +
            "The priority queue implementation has a large impact on the performance.",
          tags: ["Prim", "DecreaseKey", "Running time"],
          ref: "Lecture 07 — Review: Prim's Algorithm",
        },
        {
          type: "essay",
          q: "11. Using E = {(1,2),(1,4),(1,5),(2,3),(2,5),(3,5),(4,5)} on V = {1,...,6} (undirected), compute deg(v) for every vertex and verify the Hand-Shaking Lemma.",
          translation:
            "باستخدام E = {(1,2),(1,4),(1,5),(2,3),(2,5),(3,5),(4,5)} على V = {1,...,6} (جراف غير موجّه)، احسب deg(v) لكل رأس وتحقق من Hand-Shaking Lemma.",
          answer:
            "Formula: deg(v) = |Adj[v]|, and the sum of deg(v) = 2|E|.\n" +
            "Given: |E| = 7, so 2|E| = 14.\n" +
            "Adj[1] = {2,4,5} -> deg = 3; Adj[2] = {1,3,5} -> deg = 3; Adj[3] = {2,5} -> deg = 2; Adj[4] = {1,5} -> deg = 2; Adj[5] = {1,2,3,4} -> deg = 4; Adj[6] = {} -> deg = 0.\n" +
            "Sum = 3 + 3 + 2 + 2 + 4 + 0 = 14 = 2 * 7, so the lemma holds.",
          tags: ["Hand-Shaking Lemma", "Degree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          type: "essay",
          q: "12. For the digraph with E = {(1,2),(1,4),(1,5),(3,2),(4,4),(4,5),(5,1),(5,2),(5,3)} on V = {1,...,6}, compute indeg and outdeg of every vertex and check the lemma for directed graphs.",
          translation:
            "للجراف الموجّه E = {(1,2),(1,4),(1,5),(3,2),(4,4),(4,5),(5,1),(5,2),(5,3)} على V = {1,...,6}، احسب indeg وoutdeg لكل رأس وتحقق من النظرية للجرافات الموجّهة.",
          answer:
            "Formulas: outdeg(v) = |{u | (v,u) in E}|, indeg(v) = |{u | (u,v) in E}|, and the sum of indeg = the sum of outdeg = |E|.\n" +
            "Given: |E| = 9.\n" +
            "outdeg: v1 = 3, v2 = 0, v3 = 1, v4 = 2 (edges (4,4) and (4,5)), v5 = 3, v6 = 0. Sum = 9.\n" +
            "indeg: v1 = 1, v2 = 3, v3 = 1, v4 = 2 (edges (1,4) and (4,4)), v5 = 2, v6 = 0. Sum = 9.\n" +
            "Both sums equal |E| = 9, so the lemma holds. Also deg(4) = 2 + 2 = 4.",
          tags: ["Indegree", "Outdegree"],
          ref: "Lecture 07 — The Hand-Shaking Lemma",
        },
        {
          type: "essay",
          q: "13. A graph has |V| = 1000 vertices and |E| = 3000 edges. Compare the memory needed by an adjacency matrix and by an adjacency list.",
          translation:
            "جراف فيه |V| = 1000 رأس و|E| = 3000 ضلع. قارن حجم الذاكرة المطلوبة لمصفوفة التجاور وقائمة التجاور.",
          answer:
            "Formulas: matrix space = O(V^2); list space = O(V + E).\n" +
            "Matrix: V^2 = 1000^2 = 1,000,000 cells.\n" +
            "List: V + E = 1000 + 3000 = 4000 units (up to a constant factor, since an undirected edge appears in two lists).\n" +
            "The list needs about 250 times fewer cells, so for this sparse graph the adjacency list is much more economical.",
          tags: ["Space complexity", "Matrix vs list"],
          ref: "Lecture 07 — Adjacency Matrix vs Adjacency List",
        },
        {
          type: "essay",
          q: "14. Graph G has edges: a-b = 5, a-c = 3, b-c = 2, b-e = 4, c-d = 7, e-d = 8. Compute the cost of the spanning trees T = {a-c, b-c, b-e, c-d} and T' = {a-c, a-b, b-e, e-d}, and show how Prim finds the MST starting from a.",
          translation:
            "الجراف G أضلاعه: a-b = 5، a-c = 3، b-c = 2، b-e = 4، c-d = 7، e-d = 8. احسب تكلفة شجرتي الامتداد T وT' ووضح كيف تجد Prim الـ MST بالبدء من a.",
          answer:
            "Formula: cost of a tree = sum of its edge weights.\n" +
            "Cost(T) = 3 + 2 + 4 + 7 = 16. Cost(T') = 3 + 5 + 4 + 8 = 20. So T is better (difference 4).\n" +
            "Prim from a: tree {a}; cheapest crossing edge is a-c (3) -> add c.\n" +
            "Tree {a,c}: crossing edges a-b (5), c-b (2), c-d (7) -> add b-c (2).\n" +
            "Tree {a,b,c}: crossing edges b-e (4), c-d (7) -> add b-e (4).\n" +
            "Tree {a,b,c,e}: crossing edges c-d (7), e-d (8) -> add c-d (7). Total = 3 + 2 + 4 + 7 = 16, which is the MST.",
          tags: ["MST", "Prim", "Cost"],
          ref: "Lecture 07 — Minimum Spanning Tree (example graph G)",
        },
        {
          type: "essay",
          q: "15. Run MST-Prim with a min-heap on a connected graph with n = 1000 vertices and m = 5000 edges. How many ExtractMin and DecreaseKey calls are made at most, and what is the approximate running time?",
          translation:
            "نفّذ MST-Prim مع min-heap على جراف متصل فيه n = 1000 رأس وm = 5000 ضلع. كم عدد استدعاءات ExtractMin وDecreaseKey على الأكثر، وما الزمن التقريبي؟",
          answer:
            "Formula: time = O((n + m) lg n) = O(m lg n) for a connected graph.\n" +
            "ExtractMin is called n = 1000 times; DecreaseKey is called at most m = 5000 times.\n" +
            "Each heap operation costs O(lg n), and lg 1000 is about 10.\n" +
            "Time is about (1000 + 5000) * 10 = 60,000 basic steps, i.e. on the order of m lg n = 5000 * 10 = 50,000 (the same order).",
          tags: ["Prim", "Running time"],
          ref: "Lecture 07 — Review: Prim's Algorithm",
        },
      ],
    },
    {
      id: "algorithms-lecture-08",
      t: "المحاضرة 8 — شجرة الامتداد الأدنى (Kruskal) وأقصر مسار من مصدر واحد (Dijkstra)",
      d: "تمثيلات Graph الموزون، Hand-Shaking Lemma، خوارزمية Kruskal لـ MST، خوارزمية Dijkstra لأقصر مسار، وتحليل التعقيد الزمني لكل منهما.",
      pdf: "datenew/subjects/algorithms/lectures/Lec08/CS 311 lec.8 by Majid A. Askar.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec08/Lecture-08-Questions.pdf",
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شرح بالعربي لخوارزميات MST (Kruskal) وأقصر مسار (Dijkstra) وبنية Union-Find من قنوات يوتيوب عربية موثوقة.",
          links: [
            {
              t: "شرح خوارزمية كروسكال Kruskal بالعربي — Rasmi Bakkar",
              d: "شرح عربي واضح لخوارزمية Kruskal لإيجاد Minimum Spanning Tree في رسم بياني موزون، مع خطوات الفكرة الجشعة ودور ترتيب الحافات واستخدام Union-Find لكشف الحلقات. مناسب جدًا لمتابعة المحاضرة الثامنة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=QJ_MJm92XsQ",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "شرح وحل مثال خوارزمية Kruskal — Minimum Spanning Tree",
              d: "فيديو عربي يطبّق خوارزمية Kruskal خطوة بخطوة على مثال عملي، وده بيتطابق مع الـ In-Class Exercise المذكور في شرائح المحاضرة.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=SVqszHPv-I8",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Dijkstra's algorithm [Arabic] — شرح خوارزمية دكسترا",
              d: "شرح عربي لخوارزمية Dijkstra لحل مشكلة Single-Source Shortest Paths، يشمل تهيئة جدول المسافات واستخدام Priority Queue (Min-Heap) وعملية Relaxation وتتبع المسار بالـ predecessor.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=c0EWBzuKSto",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "خوارزمية ديكسترا (Dijkstra): شرح وتصور مرئي — Coddy.tech",
              d: "صفحة عربية تفاعلية فيها شرح لخوارزمية Dijkstra خطوة بخطوة مع كود في خمس لغات برمجية وتصور مرئي للرسم البياني. تربط بين النظري والتطبيقي.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://coddy.tech/visualize/ar/graphs/dijkstras-algorithm",
                  type: "view",
                  color: "blue",
                },
              ],
            },
          ],
        },
        {
          category: "فيديوهات عالمية",
          icon: "🌍",
          description:
            "فيديوهات إنجليزية عالية الجودة تشرح Kruskal و Dijkstra و Union-Find من قنوات أكاديمية معروفة عالميًا.",
          links: [
            {
              t: "Kruskal's algorithm in 2 minutes — Michael Sambol",
              d: "فيديو قصير (دقيقتين) يوضّح خطوات خوارزمية Kruskal بصريًا على مثال صغير، مع تركيز على ترتيب الحافات ومنع الحلقات. مفيد جدًا كمراجعة سريعة قبل الامتحان.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.youtube.com/watch?v=71UQH7Pr9kU",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Prim's and Kruskal's Algorithms — Abdul Bari",
              d: "محاضرة كاملة من عبد الباري، أستاذ الخوارزميات الأشهر على يوتيوب، تشرح Greedy Method وتطبّقه على Prim و Kruskal مع مقارنة واضحة بين الاستراتيجيتين. دي القناة اللي بيتابعها أغلب طلاب CS311.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة القائمة",
                  url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Dijkstra's Shortest Path Algorithm — GeeksforGeeks Videos",
              d: "شرح مرئي رسمي من GeeksforGeeks لخوارزمية Dijkstra، يشمل تهيئة جدول المسافات واستخدام Min-Heap وعملية Relaxation، مع مثال محلول بالكامل.",
              icon: "🌍",
              actions: [
                {
                  label: "▶ مشاهدة الفيديو",
                  url: "https://www.geeksforgeeks.org/videos/dijkstras-shortest-path-algorithm",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "Single-Source Shortest Paths Dijkstra — VisuAlgo",
              d: "صفحة محاكاة تفاعلية على VisuAlgo (موقع جامعة سنغافورة الوطنية) لخوارزمية Dijkstra، تتيح رسم الرسم البياني ومتابعة التحديث خطوة بخطوة. مناسبة للجزء العملي للمحاضرة.",
              icon: "🌍",
              actions: [
                {
                  label: "🌐 فتح المحاكي",
                  url: "https://visualgo.net/en/sssp",
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
            "مقالات ومراجع مكتوبة بالإنجليزية تشرح خوارزميات MST و Dijkstra و Union-Find بصيغ أكاديمية موثوقة.",
          links: [
            {
              t: "Kruskal's Minimum Spanning Tree Algorithm — GeeksforGeeks",
              d: "مقال مرجعي شامل لخوارزمية Kruskal: الفكرة الجشعة، الـ Pseudocode، استخدام Disjoint Set لكشف الحلقات، تحليل التعقيد الزمني O(E log E)، وتطبيقات بلغات متعددة. يغطي كل ما ورد في شرائح المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Dijkstra's Shortest Path Algorithm — GeeksforGeeks",
              d: "مقال مرجعي كامل لخوارزمية Dijkstra: تعريف المشكلة، خطوات الخوارزمية، الـ Pseudocode، التعقيد الزمني O((V + E) log V)، تنبيهات حول الأوزان السالبة، وتطبيقات بلغات متعددة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Difference between Prim's and Kruskal's Algorithms — GeeksforGeeks",
              d: "مقال مقارنة مفصّل بين Prim و Kruskal من حيث الاستراتيجية، الحل الوسيط (subtree vs spanning forest)، بنى البيانات، التعقيد، وحالات الاستخدام (dense vs sparse graphs). يتطابق مع المقارنة المذكورة في المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/difference-between-prims-and-kruskals-algorithm-for-mst",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Handshaking Lemma and Interesting Tree Properties — GeeksforGeeks",
              d: "مقال يشرح Hand-Shaking Lemma بشقيه (موجه وغير موجّه) ويقدّم البرهان على أن مجموع درجات الرؤوس = 2|E|، مع تطبيقات على الأشجار والرسوم الزوجية (even-degree vertices).",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://www.geeksforgeeks.org/dsa/handshaking-lemma-and-interesting-tree-properties",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree — Kruskal with Disjoint Set Union — CP-Algorithms",
              d: "مرجع أكاديمي عالي الجودة يشرح تطبيق Kruskal باستخدام بنية Disjoint Set Union (Union-Find) مع path compression و union by rank، وتحليل التعقيد الكامل O(m log n). مناسب للطلاب الراغبين في فهم أعمق.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Handshaking Lemma — Wikipedia",
              d: "مقال موسوعي عن Hand-Shaking Lemma يشمل التعريف الرسمي، الصيغة الموجّهة، البراهين، وتطبيقات في مسارات أويلر ومسألة Königsberg السبعة جسور. مرجع جيد للقراءة الإضافية.",
              icon: "📚",
              actions: [
                {
                  label: "📖 فتح المقال",
                  url: "https://en.wikipedia.org/wiki/Handshaking_lemma",
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
            "أدوات تفاعلية للمحاكاة الخطوة بخطوة لخوارزميات MST و Dijkstra على رسوم بيانية يرسمها المستخدم بنفسه.",
          links: [
            {
              t: "VisuAlgo — Minimum Spanning Tree (Kruskal & Prim)",
              d: "محاكي تفاعلي رسمي من جامعة سنغافورة الوطنية، يرسم الرسم البياني إدخالًا (Edge List / Adjacency Matrix / Adjacency List) ويتتبع خطوات Kruskal و Prim بصريًا مع عرض وزن MST الكلي. أداة مثالية للتحقق من حلول الـ In-Class Exercise.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://visualgo.net/en/mst",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "VisuAlgo — Single-Source Shortest Paths (Dijkstra)",
              d: "محاكي تفاعلي لتتبع خطوات خوارزمية Dijkstra على رسم بياني مرسوم يدويًا، مع عرض جدول المسافات والـ predecessor في كل خطوة. مناسب جدًا لمتابعة المثال العملي في المحاضرة.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://visualgo.net/en/sssp",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Graphisual — Dijkstra's Algorithm Visualizer",
              d: "أداة ويب لرسم الرسم البياني وإدخال أوزان الحافات ومشاهدة خطوات Dijkstra بشكل تفاعلي. تشمل شرح الخصائص الأساسية للخوارزمية (greedy، non-negative weights، time complexity).",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://graphisual.app/algorithm/dijkstra",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Minimum Spanning Tree (Kruskal & Prim) — The Coatless Professor",
              d: "أداة محاكاة بسيطة تعرض خطوات Kruskal (ترتيب الحافات + Union-Find) و Prim (النمو من رأس مصدر) جنبًا إلى جنب على نفس الرسم، مع إبراز الحافات المختارة باللون الأخضر وتحديث وزن MST حيًا.",
              icon: "🔧",
              actions: [
                {
                  label: "🚀 فتح الأداة",
                  url: "https://web-apps.thecoatlessprofessor.com/graph-algorithms/minimum-spanning-tree.html",
                  type: "view",
                  color: "green",
                },
              ],
            },
          ],
        },
      ],
      questions: [
        // ==================== MCQ (HIGH first) ====================
        {
          q: "1. In a weighted adjacency matrix, what value is stored at A[i][j] when there is NO edge between vertex i and vertex j (i != j)?",
          options: ["0", "w(i, j)", "Infinity", "-1"],
          correct: 2,
          translation:
            "في مصفوفة التجاور الموزونة، ما القيمة المخزنة في A[i][j] عندما لا يوجد حافة بين الرأسين i و j (i != j)؟",
          explanation:
            "الصحيح هو Infinity لأن عدم وجود حافة بين i و j (والفرق بينهما غير صفري) يُمثل بـ infinity. أما 0 فهو للقطر A[i][i] فقط، و w(i,j) هو الوزن لو كانت الحافة موجودة.",
          tags: ["Weighted Adjacency Matrix", "Graph Representation"],
          ref: "Lecture 8 — Weighted Adjacency Matrix slide",
          likely: "high",
        },
        {
          q: "2. The Hand-Shaking Lemma for any undirected graph states that:",
          options: [
            "sum of degrees = |V|",
            "sum of degrees = 2|E|",
            "sum of degrees = |E|",
            "sum of degrees = |V| + |E|",
          ],
          correct: 1,
          translation: "تنص Hand-Shaking Lemma لأي رسم بياني غير موجّه على أن:",
          explanation:
            "الصحيح هو أن مجموع درجات كل الرؤوس = 2 × عدد الحافات، لأن كل حافة تساهم بدرجتين (تلمس رأسين). لو كان |E| بس يبقى نص الحافة، ولو |V| يبقى مفيش علاقة مباشرة.",
          tags: ["Hand-Shaking Lemma", "Graph Theory"],
          ref: "Lecture 8 — The Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          q: "3. For any directed graph, the sum of in-degrees of all vertices equals:",
          options: ["|V|", "2|E|", "|E|", "|V| - 1"],
          correct: 2,
          translation:
            "لأي رسم بياني موجّه، مجموع in-degrees لكل الرؤوس يساوي:",
          explanation:
            "الصحيح هو |E| لأن كل حافة موجهة لها رأس واحد مصدر وواحد وجهة، فتساهم بـ 1 في الـ out-degree للمصدر و 1 في الـ in-degree للوجهة. وبالتالي مجموع الـ in-degrees = مجموع الـ out-degrees = |E|. الـ 2|E| هي للـ Hand-Shaking للموجه وغير الموجه.",
          tags: ["Hand-Shaking Lemma", "Directed Graph", "Graph Theory"],
          ref: "Lecture 8 — Hand-Shaking Lemma (directed form)",
          likely: "high",
        },
        {
          q: "4. In Kruskal's algorithm, the edges are sorted in:",
          options: [
            "non-increasing order of weight",
            "non-decreasing order of weight",
            "lexicographic order of vertex labels",
            "random order",
          ],
          correct: 1,
          translation: "في خوارزمية Kruskal، تُفرز الحافات بترتيب:",
          explanation:
            "الصحيح هو non-decreasing (تصاعدي) لأوزان الحافات عشان نختار أخف حافة اولًا في كل خطوة (greedy). non-increasing معناه تنازلي وده غلط، lexico مش بيعتمد على الوزن، random بيبطل ميزة greedy.",
          tags: ["Kruskal", "MST", "Greedy"],
          ref: "Lecture 8 — Kruskal's Algorithm High-Level Pseudocode",
          likely: "high",
        },
        {
          q: "5. Which data structure does Kruskal's algorithm use to efficiently detect cycles?",
          options: [
            "Stack",
            "Queue",
            "Disjoint Set (Union-Find)",
            "Hash Table",
          ],
          correct: 2,
          translation:
            "ما بنية البيانات التي تستخدمها خوارزمية Kruskal لكشف الحلقات بكفاءة؟",
          explanation:
            "الصحيح هو Disjoint Set (Union-Find) لأنها بتتيح MakeSet و FindSet و Union بكفاءة عالية، و FindSet لو الأخرجتين في نفس المجموعة يبقى الحافة هتعمل cycle. Stack/Queue مش بنوكشف cycles، Hash Table أبطأ في عمليات الـ Union.",
          tags: ["Kruskal", "Disjoint Set", "Union-Find"],
          ref: "Lecture 8 — Kruskal's Algorithm pseudocode (MakeSet/FindSet/Union)",
          likely: "high",
        },
        {
          q: "6. The overall time complexity of Kruskal's algorithm is:",
          options: ["O(n^2)", "O(m log n)", "O(m log m)", "O(n log n)"],
          correct: 2,
          translation: "التعقيد الزمني الكلي لخوارزمية Kruskal هو:",
          explanation:
            "الصحيح هو O(m log m) حيث m = |E|. السبب أن الفرز بياخد O(m log m) وده أكبر حد. لو قلنا O(m log n) ده بعد استبعاد الفرز مش صح ككلي، O(n^2) غلط تمامًا. والـ O(n log n) بيتجاهل عدد الحافات.",
          tags: ["Kruskal", "Time Complexity"],
          ref: "Lecture 8 — Kruskal's Algorithm: Running Time",
          likely: "high",
        },
        {
          q: "7. In Prim's algorithm, the intermediate solution is a:",
          options: [
            "spanning forest",
            "subtree",
            "single cycle",
            "disconnected set of edges",
          ],
          correct: 1,
          translation: "في خوارزمية Prim، الحل الوسيط هو:",
          explanation:
            "الصحيح هو subtree لأن Prim بيكبر شجرة واحدة فقط بإضافة أخف حافة تربط رأس في الشجرة برأس برّه. أما spanning forest فده وصف Kruskal، والـ cycle مش هدف MST، و disconnected set مش ممكن لإن Prim بيبني connected.",
          tags: ["Prim", "MST", "Comparison"],
          ref: "Lecture 8 — Finding a MST (Prim vs Kruskal)",
          likely: "high",
        },
        {
          q: "8. In Kruskal's algorithm, the intermediate solution is a:",
          options: [
            "subtree",
            "spanning forest",
            "single cycle",
            "complete graph",
          ],
          correct: 1,
          translation: "في خوارزمية Kruskal، الحل الوسيط هو:",
          explanation:
            "الصحيح هو spanning forest لأن Kruskal بيضيف الحافات الأرخص بغض النظر عن الترابط، فيمكن تكون مكونات منفصلة (forest) لحد ما تتحد. subtree هو وصف Prim، cycle غلط لأننا بنمنع cycles، و complete graph غير منطقي.",
          tags: ["Kruskal", "MST", "Comparison"],
          ref: "Lecture 8 — Finding a MST (Prim vs Kruskal)",
          likely: "high",
        },
        {
          q: "9. What problem does Dijkstra's algorithm solve?",
          options: [
            "Minimum Spanning Tree",
            "Single-Source Shortest Paths",
            "All-Pairs Shortest Paths",
            "Maximum Flow",
          ],
          correct: 1,
          translation: "ما المشكلة التي تحلها خوارزمية Dijkstra؟",
          explanation:
            "الصحيح هو Single-Source Shortest Paths أي أقصر مسار من مصدر واحد إلى كل باقي الرؤوس. MST بتحله خوارزميات تانية (Prim/Kruskal)، All-Pairs بيستخدم Floyd-Warshall، Maximum Flow بيستخدم Ford-Fulkerson.",
          tags: ["Dijkstra", "Shortest Path"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem / Dijkstra's Algorithm",
          likely: "high",
        },
        {
          q: "10. Dijkstra's algorithm requires that all edge weights be:",
          options: [
            "positive only",
            "non-negative",
            "negative",
            "any real number",
          ],
          correct: 1,
          translation: "تتطلب خوارزمية Dijkstra أن تكون أوزان الحافات:",
          explanation:
            "الصحيح هو non-negative (غير سالبة، يعني تسمح بصفر) لأن Dijkstra بتفترض إن لما رأس يتحدد، المسار الأقصر ليه خلص، وهذا الافتراض بيبطل لو في أوزان سالبة. positive only يرفض الأصفار ومش لازم، negative بيفسد الخوارزمية.",
          tags: ["Dijkstra", "Constraints"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem statement",
          likely: "high",
        },
        {
          q: "11. The time complexity of Dijkstra's algorithm using a binary heap is:",
          options: ["O(V^2)", "O((V + E) log V)", "O(V * E)", "O(E log E)"],
          correct: 1,
          translation:
            "التعقيد الزمني لخوارزمية Dijkstra باستخدام binary heap هو:",
          explanation:
            "الصحيح هو O((V + E) log V). V iteration لكل DeleteMin بـ log V، وكل حافة ممكن تعمل UpHeap بـ log V. O(V^2) للنسخة الـ simple بدون heap، O(V*E) لـ Bellman-Ford، O(E log E) مش معتاد لـ Dijkstra.",
          tags: ["Dijkstra", "Time Complexity"],
          ref: "Lecture 8 — Dijkstra pseudocode and Big-O note",
          likely: "high",
        },
        {
          q: "12. In the Dijkstra pseudocode, what is the initial value of dist[s] for the source vertex s?",
          options: ["infinity", "0", "-1", "the largest edge weight"],
          correct: 1,
          translation:
            "في pseudocode الخاص بـ Dijkstra، ما القيمة الابتدائية لـ dist[s] للرأس المصدر s؟",
          explanation:
            "الصحيح هو 0 لأن المسافة من المصدر لنفسه = 0. infinity لباقي الرؤوس، -1 مش قيمة منطقية، أكبر وزن حافة غلط لإنها لازم تبدأ من 0 للمصدر.",
          tags: ["Dijkstra", "Initialization"],
          ref: "Lecture 8 — Dijkstra pseudocode lines 1-2",
          likely: "high",
        },
        {
          q: "13. What is the role of the predecessor pointer p[v] in Dijkstra's algorithm?",
          options: [
            "stores the distance",
            "stores the previous vertex on the shortest path",
            "stores the edge weight",
            "stores the priority value",
          ],
          correct: 1,
          translation: "ما دور المؤشر السابق p[v] في خوارزمية Dijkstra؟",
          explanation:
            "الصحيح هو storing previous vertex على المسار الأقصر ل reconstruct المسار. dist[] بيخزن المسافة، w(u,v) هو الوزن، priority بيخزنه الـ heap داخليًا.",
          tags: ["Dijkstra", "Path Reconstruction"],
          ref: "Lecture 8 — Dijkstra pseudocode line 9",
          likely: "high",
        },
        {
          q: "14. In a weighted adjacency list, what does Adj[i] contain for each vertex i?",
          options: [
            "only the neighbor vertex ids",
            "pairs (j, w(i, j)) for each neighbor j",
            "only the edge weights",
            "the degree of vertex i only",
          ],
          correct: 1,
          translation:
            "في قائمة التجاور الموزونة، ماذا تحتوي Adj[i] لكل رأس i؟",
          explanation:
            "الصحيح هو pairs (j, w(i,j)) أي كل جار مع وزن الحافة ليه. لو ids بس يبقى list عادية مش موزونة، أوزان بس بتفقد معلومات الجيران، و degree بس مفيهاش التفاصيل.",
          tags: ["Adjacency List", "Graph Representation"],
          ref: "Lecture 8 — (Weighted) Adjacency List Structure",
          likely: "high",
        },
        {
          q: "15. For a directed graph, the degree of vertex v equals:",
          options: [
            "outdeg(v) only",
            "indeg(v) only",
            "outdeg(v) + indeg(v)",
            "outdeg(v) * indeg(v)",
          ],
          correct: 2,
          translation: "للرسم البياني الموجه، درجة الرأس v تساوي:",
          explanation:
            "الصحيح هو outdeg + indeg لأن كل حافة موجهة إما خارجة من v أو داخلة ليه. لو حد فقط يبقى نص المعلومة، وضرب غلط تمامًا.",
          tags: ["Directed Graph", "Degree", "Hand-Shaking"],
          ref: "Lecture 8 — Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          q: "16. Which of the following is NOT a typical MST application mentioned in the lecture?",
          options: [
            "telephone network design",
            "electrical power network",
            "sorting an array of numbers",
            "road network design",
          ],
          correct: 2,
          translation: "أيٌّ مما يلي ليس من تطبيقات MST المذكورة في المحاضرة؟",
          explanation:
            "الصحيح هو sorting an array لأن ده مش مرتبط بـ MST. المحاضرة ذكرت telephone, electrical power, hydraulic, TV cable, computer, road networks.",
          tags: ["MST Applications", "Network Design"],
          ref: "Lecture 8 — MST Applications slide",
          likely: "high",
        },
        {
          q: "17. In Dijkstra's algorithm, after a vertex is selected (DeleteMin) and processed, its shortest distance is:",
          options: [
            "still subject to update",
            "finalized and never changes",
            "set to infinity",
            "set to -1",
          ],
          correct: 1,
          translation:
            "في خوارزمية Dijkstra، بعد اختيار رأس (DeleteMin) ومعالجته، مسافته الأقصر:",
          explanation:
            "الصحيح هو finalized وده اللي بيخلي الخوارزمية greedy. لو مع weights غير سالبة، أول ما نطلع رأس من الـ Q يبقى مسافته مضايقتش. تحديث infinity أو -1 غلط.",
          tags: ["Dijkstra", "Greedy Property"],
          ref: "Lecture 8 — Dijkstra's Algorithm description",
          likely: "high",
        },
        {
          q: "18. The number of edges in a Minimum Spanning Tree of a connected graph with n vertices is:",
          options: ["n", "n - 1", "n + 1", "2n - 1"],
          correct: 1,
          translation: "عدد الحافات في MST لرسم بياني متصل بـ n رؤوس هو:",
          explanation:
            "الصحيح هو n-1 لأن أي spanning tree لرسم متصل بـ n رؤوس لازم يكون فيه n-1 حافة بالظبط (لا دوراير ولا غير متصل).",
          tags: ["MST", "Spanning Tree Properties"],
          ref: "Lecture 8 — Kruskal high-level pseudocode (while encounter < |V|-1)",
          likely: "high",
        },
        {
          q: "19. The MakeSet(v) operation in Kruskal's algorithm is used to:",
          options: [
            "sort edges",
            "create a singleton set containing only v",
            "merge two sets",
            "find the minimum edge",
          ],
          correct: 1,
          translation: "عملية MakeSet(v) في خوارزمية Kruskal تُستخدم لـ:",
          explanation:
            "الصحيح هو create singleton set for v أي مجموعة فيها v بس. sort بتتم بمعزل، merge هي Union، find minimum بيتم بترتيب الفرز.",
          tags: ["Kruskal", "Disjoint Set", "MakeSet"],
          ref: "Lecture 8 — Kruskal pseudocode (for each v MakeSet(v))",
          likely: "high",
        },
        {
          q: "20. The condition to add an edge (u, v) in Kruskal's algorithm is:",
          options: [
            "FindSet(u) == FindSet(v)",
            "FindSet(u) != FindSet(v)",
            "w(u,v) is minimum",
            "u and v are both in tree",
          ],
          correct: 1,
          translation: "شرط إضافة حافة (u, v) في خوارزمية Kruskal هو:",
          explanation:
            "الصحيح هو FindSet(u) != FindSet(v) يعني u و v في مجموعتين مختلفتين فالحافة مش هتعمل cycle. لو نفس المجموعة يبقى cycle ونمنعها. الوزن الأقل مش كفاية لو هيعمل cycle.",
          tags: ["Kruskal", "Cycle Detection", "Union-Find"],
          ref: "Lecture 8 — Kruskal pseudocode (if FindSet(u) != FindSet(v))",
          likely: "high",
        },
        {
          q: "21. How many FindSet() calls are made during Kruskal's algorithm?",
          options: ["O(n)", "O(m)", "O(n log n)", "O(m^2)"],
          correct: 1,
          translation: "كم عدد استدعاءات FindSet() أثناء خوارزمية Kruskal؟",
          explanation:
            "الصحيح هو O(m) لأن لكل حافة في E بنستدعي FindSet مرتين (مرة لـ u ومرة لـ v)، فالمجموع 2m = O(m). O(n) لـ MakeSet و Union بس.",
          tags: ["Kruskal", "Complexity Analysis"],
          ref: "Lecture 8 — Kruskal Running Time slide (O(m) FindSet calls)",
          likely: "high",
        },
        {
          q: "22. In Dijkstra's algorithm, the priority queue stores vertices ordered by:",
          options: [
            "vertex id",
            "their current dist[] value",
            "edge count",
            "alphabetical order",
          ],
          correct: 1,
          translation:
            "في خوارزمية Dijkstra، طابور الأولويات يخزن الرؤوس مرتبين بـ:",
          explanation:
            "الصحيح هو current dist[] value أي أقل مسافة معروفة لكل رأس. ده اللي بيخلّي DeleteMin يرجع أقرب رأس غير معالج. vertex id / alphabet / edge count مش ليها معنى في Dijkstra.",
          tags: ["Dijkstra", "Priority Queue"],
          ref: "Lecture 8 — Dijkstra pseudocode (ConstructMinHeap(V, dist))",
          likely: "high",
        },
        {
          q: "23. The Hand-Shaking Lemma implies that in any undirected graph, the number of vertices with odd degree is:",
          options: [
            "always odd",
            "always even",
            "always zero",
            "always equal to |V|",
          ],
          correct: 1,
          translation:
            "تستلزم Hand-Shaking Lemma أنه في أي رسم غير موجّه، عدد الرؤوس ذات الدرجة الفردية:",
          explanation:
            "الصحيح هو always even لأن لو جمع الدرجات = 2|E| (زوجي)، فلازم مجموع الدرجات الفردية يكون زوجي، فعدد الرؤوس ذات الدرجة الفردية لازم يكون زوجي. odd مستحيل، صفر ممكن بس مش دائمًا.",
          tags: ["Hand-Shaking Lemma", "Graph Theory"],
          ref: "Lecture 8 — Hand-Shaking Lemma + standard corollary",
          likely: "high",
        },
        {
          q: "24. The Dijkstra pseudocode uses which heap operation to update a vertex's distance after relaxation?",
          options: ["DeleteMin", "UpHeap", "Heapify", "BuildHeap"],
          correct: 1,
          translation:
            "pseudocode الخاص بـ Dijkstra يستخدم عملية heap ما لتحديث مسافة رأس بعد relaxation؟",
          explanation:
            "الصحيح هو UpHeap لأنها بترفع الرأس لو قلّت dist بتاعته عشان يحافظ على خاصية min-heap. DeleteMin لإخراج أصغر عنصر، Heapify/BuildHeap لإنشاء الـ heap مرة واحدة.",
          tags: ["Dijkstra", "Heap", "Priority Queue"],
          ref: "Lecture 8 — Dijkstra pseudocode line 10 (UpHeap(v,Q))",
          likely: "high",
        },
        {
          q: "25. The greedy strategy common to both Prim and Dijkstra is:",
          options: [
            "always sort all edges first",
            "repeatedly pick the locally best (minimum) option",
            "use recursion",
            "use dynamic programming",
          ],
          correct: 1,
          translation: "الاستراتيجية الجشعة المشتركة بين Prim و Dijkstra هي:",
          explanation:
            "الصحيح هو repeatedly pick locally best أي في كل خطوة تختار العنصر الأقل حاليًا. الفرز الشامل خاص بـ Kruskal، recursion/DP مش مستخدمة في أي منهم.",
          tags: ["Greedy", "Prim", "Dijkstra", "Comparison"],
          ref: "Lecture 8 — Prim and Dijkstra both use priority queue greedy selection",
          likely: "high",
        },
        {
          q: "26. Which operation is performed inside the inner for-loop of Dijkstra's algorithm?",
          options: [
            "BuildHeap",
            "Relaxation (if dist[v] > dist[u] + w(u,v) then update)",
            "MakeSet",
            "Sort edges",
          ],
          correct: 1,
          translation:
            "ما العملية التي تتم داخل for-loop الداخلية في خوارزمية Dijkstra؟",
          explanation:
            "الصحيح هو relaxation (الشرط if dist[v] > dist[u] + w(u,v)) وهي قلب الخوارزمية. BuildHeap يتم مرة واحدة في البداية، MakeSet و Sort خاصة بـ Kruskal.",
          tags: ["Dijkstra", "Relaxation"],
          ref: "Lecture 8 — Dijkstra pseudocode lines 7-10",
          likely: "high",
        },
        {
          q: "27. In Kruskal's algorithm, what is the role of the Union operation?",
          options: [
            "sort edges",
            "merge the sets containing u and v after adding edge (u,v)",
            "find the smallest edge",
            "initialize the tree",
          ],
          correct: 1,
          translation: "في خوارزمية Kruskal، ما دور عملية Union؟",
          explanation:
            "الصحيح هو merge sets containing u and v لما نضيف الحافة لTree عشان لو في حاجة تانية بعدها حاول تربط u بـ v ب FindSet نلاقيهم نفس المجموعة. sort تم قبل، find minimum بترتيب الفرز، initialize بـ MakeSet.",
          tags: ["Kruskal", "Union-Find", "Disjoint Set"],
          ref: "Lecture 8 — Kruskal pseudocode (Union(FindSet(u), FindSet(v)))",
          likely: "high",
        },
        {
          q: "28. For an undirected graph G, the degree of vertex v equals:",
          options: [
            "|Adj[v]|",
            "2 * |Adj[v]|",
            "|Adj[v]| / 2",
            "|V| - |Adj[v]|",
          ],
          correct: 0,
          translation: "للرسم البياني غير الموجه G، درجة الرأس v تساوي:",
          explanation:
            "الصحيح هو |Adj[v]| لإن Adj[v] بتحتوي على كل الجيران، وكل جار = حافة واحدة (غير الموجه بتعد مرة). ضرب في 2 غلط لأنها بتضاعف، القسمة على 2 غلط.",
          tags: ["Graph Theory", "Degree", "Adjacency List"],
          ref: "Lecture 8 — Hand-Shaking Lemma slide (deg(v) = |Adj[v]|)",
          likely: "high",
        },
        {
          q: "29. The ConstructMinHeap step in Dijkstra's pseudocode has time complexity:",
          options: ["O(V)", "O(V log V)", "O(V^2)", "O(E)"],
          correct: 1,
          translation:
            "خطوة ConstructMinHeap في pseudocode الخاص بـ Dijkstra لها تعقيد زمني:",
          explanation:
            "الصحيح هو O(V log V) لإدراج عناصر V في min-heap. ممكن يكون O(V) لو BuildHeap لكن الكلاسيكي O(V log V). O(V^2) كبير أوي، O(E) مش صحيح لإن الموضوع رؤوس.",
          tags: ["Dijkstra", "Heap Construction", "Time Complexity"],
          ref: "Lecture 8 — Dijkstra pseudocode line 3",
          likely: "medium",
        },
        {
          q: "30. Which algorithm does NOT use the Disjoint Set (Union-Find) data structure?",
          options: [
            "Kruskal's MST algorithm",
            "Dijkstra's shortest path algorithm",
            "Both use it",
            "Neither uses it",
          ],
          correct: 1,
          translation: "أي خوارزمية لا تستخدم بنية Disjoint Set (Union-Find)؟",
          explanation:
            "الصحيح هو Dijkstra لإنها بتستخدم priority heap فقط. Kruskal هو اللي بيستخدم Union-Find لكشف cycles.",
          tags: ["Kruskal", "Dijkstra", "Disjoint Set", "Comparison"],
          ref: "Lecture 8 — Kruskal pseudocode + Dijkstra pseudocode",
          likely: "high",
        },
        {
          q: "31. The condition to terminate Kruskal's while-loop is when:",
          options: [
            "all edges are processed",
            "encounter == |V| - 1",
            "encounter == |V|",
            "no more edges remain",
          ],
          correct: 1,
          translation: "شرط إنهاء حلقة while في خوارزمية Kruskal هو عندما:",
          explanation:
            "الصحيح هو encounter == |V| - 1 لأن MST لـ |V| رؤوس يحتاج |V|-1 حافة بالظبط. |V| غلط لإنه يعمل cycle. all edges processed بطيء وغير ضروري بعد ما نوصل لـ |V|-1.",
          tags: ["Kruskal", "Termination Condition"],
          ref: "Lecture 8 — Kruskal high-level pseudocode (while encounter < |V|-1)",
          likely: "high",
        },
        {
          q: "32. Which statement correctly compares Prim and Kruskal?",
          options: [
            "Prim grows a forest; Kruskal grows a single tree",
            "Prim grows a single tree; Kruskal grows a forest",
            "Both grow a single tree",
            "Both grow a forest",
          ],
          correct: 1,
          translation: "أي جملة تقارن بشكل صحيح بين Prim و Kruskal؟",
          explanation:
            "الصحيح هو Prim grows single tree, Kruskal grows forest. ده الفرق الأساسي المذكور في المحاضرة. العكس خلط، و both واحد غلط.",
          tags: ["Prim", "Kruskal", "Comparison", "MST"],
          ref: "Lecture 8 — Finding a MST slide",
          likely: "high",
        },

        // ==================== ESSAY QUESTIONS ====================
        {
          type: "essay",
          q: "1. Define a Minimum Spanning Tree (MST) and list three of its real-world applications mentioned in the lecture.",
          translation:
            "عرّف Minimum Spanning Tree (MST) واذكر ثلاثة تطبيقات واقعية له مذكورة في المحاضرة.",
          answer:
            "A Minimum Spanning Tree (MST) of a connected, weighted, undirected graph G = (V, E) is a subset of edges that:\n" +
            "1. Connects all the vertices together (i.e., it is a spanning subgraph),\n" +
            "2. Contains no cycles (i.e., it is a tree),\n" +
            "3. Has the minimum possible total edge weight among all such spanning trees.\n" +
            "A spanning tree of a graph with n vertices always contains exactly (n - 1) edges.\n" +
            "Applications mentioned in the lecture:\n" +
            "- Network design: telephone networks, electrical power networks, hydraulic networks, TV cable networks, computer networks, and road networks.\n" +
            "- MST gives the minimum-cost network connecting all sites.\n" +
            "- MST is the most economical construction of a network.",
          tags: ["MST", "Definition", "Applications"],
          ref: "Lecture 8 — Finding a MST + MST Applications slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Compare Prim's and Kruskal's algorithms for finding MST in terms of the intermediate solution, the strategy used, and the data structures required.",
          translation:
            "قارن بين خوارزمية Prim و Kruskal لإيجاد MST من حيث: الحل الوسيط، الاستراتيجية، وبنى البيانات المطلوبة.",
          answer:
            "Both algorithms are greedy and find an MST, but they differ in strategy and intermediate state:\n" +
            "1. Intermediate solution:\n" +
            "   - Prim: the intermediate solution is a single subtree that grows one vertex at a time.\n" +
            "   - Kruskal: the intermediate solution is a spanning forest (possibly disconnected components) that gradually unifies.\n" +
            "2. Strategy:\n" +
            "   - Prim: repeatedly adds the least-cost edge that connects a vertex in the existing tree to a vertex NOT in the existing tree.\n" +
            "   - Kruskal: repeatedly adds the least-cost edge that does NOT introduce a cycle among the edges included so far.\n" +
            "3. Data structures:\n" +
            "   - Prim: a priority queue (min-heap) keyed by edge weights connecting tree to non-tree vertices.\n" +
            "   - Kruskal: a Disjoint Set (Union-Find) data structure to detect cycles efficiently via MakeSet, FindSet, and Union operations.\n" +
            "4. Time complexity:\n" +
            "   - Prim: O((n + m) log n) using a binary heap.\n" +
            "   - Kruskal: O(m log m) dominated by the sorting step.",
          tags: ["Prim", "Kruskal", "Comparison", "MST"],
          ref: "Lecture 8 — Finding a MST + Kruskal pseudocode + Dijkstra note",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Explain Kruskal's algorithm step by step using the pseudocode shown in the lecture.",
          translation:
            "اشرح خوارزمية Kruskal خطوة بخطوة باستخدام pseudocode المعروض في المحاضرة.",
          answer:
            "Kruskal's algorithm (greedy MST construction):\n" +
            "Step 1: Initialize T as an empty set of edges (the future MST).\n" +
            "Step 2: For each vertex v in V, call MakeSet(v) so each vertex becomes its own singleton set in a Disjoint Set (Union-Find) structure.\n" +
            "Step 3: Sort all edges in E in non-decreasing order of their weight w.\n" +
            "Step 4: Iterate over edges (u, v) in sorted order. For each edge:\n" +
            "   - If FindSet(u) != FindSet(v), then u and v are in different components (no cycle will be formed):\n" +
            "       * Add edge (u, v) to T.\n" +
            "       * Call Union(FindSet(u), FindSet(v)) to merge the two components.\n" +
            "   - Otherwise, discard the edge (it would form a cycle).\n" +
            "Step 5: Stop when T contains exactly |V| - 1 edges. Return T as the MST.\n" +
            "The algorithm grows a spanning forest that gradually unifies into a single tree.",
          tags: ["Kruskal", "Algorithm Steps", "Pseudocode"],
          ref: "Lecture 8 — Kruskal's Algorithm pseudocode",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Derive the time complexity of Kruskal's algorithm in terms of n = |V| and m = |E|.",
          translation:
            "اشتق التعقيد الزمني لخوارزمية Kruskal بدلالة n = |V| و m = |E|.",
          answer:
            "Let n = |V| and m = |E|.\n" +
            "1. MakeSet: O(n) calls, each O(1) amortized in disjoint set with path compression => total O(n).\n" +
            "2. Sort E by weight: O(m log m) using comparison-based sort.\n" +
            "3. FindSet: O(m) calls (two per edge). With union-by-rank and path compression, each FindSet is nearly O(1) amortized (inverse Ackermann), but a tighter bound yields O(m log n) or essentially O(m alpha(n)).\n" +
            "4. Union: at most O(n) calls, each O(1) amortized.\n" +
            "5. Dominant term: O(m log m) for sorting edges.\n" +
            "Since m <= n(n-1)/2, we have log m <= 2 log n, so O(m log m) is essentially O(m log n) for connected graphs.\n" +
            "Overall complexity: O(m log m) (equivalently O(m log n) for connected graphs).",
          tags: ["Kruskal", "Time Complexity", "Analysis"],
          ref: "Lecture 8 — Kruskal's Algorithm: Running Time slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. State the Hand-Shaking Lemma for both undirected and directed graphs, and explain why it holds.",
          translation:
            "اذكر Hand-Shaking Lemma للرسوم البيانية الموجهة وغير الموجهة، واشرح لماذا تنطبق.",
          answer:
            "Undirected form: For any undirected graph G = (V, E),\n" +
            "   sum over v in V of deg(v) = 2 * |E|.\n" +
            "Directed form: For any directed graph G = (V, E),\n" +
            "   sum over v in V of in-deg(v) = sum over v in V of out-deg(v) = |E|.\n" +
            "   Also, deg(v) = out-deg(v) + in-deg(v).\n" +
            "Explanation: Each undirected edge is incident to exactly two vertices, so it contributes 1 to the degree of each of its endpoints, hence 2 to the sum. Each directed edge has exactly one source (contributing 1 to out-deg) and one destination (contributing 1 to in-deg), so the total in-degree equals the total out-degree equals the number of edges.\n" +
            "Corollary: In any undirected graph, the number of vertices with odd degree is even.",
          tags: ["Hand-Shaking Lemma", "Graph Theory", "Proof"],
          ref: "Lecture 8 — The Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain Dijkstra's algorithm step by step using the pseudocode shown in the lecture.",
          translation:
            "اشرح خوارزمية Dijkstra خطوة بخطوة باستخدام pseudocode المعروض في المحاضرة.",
          answer:
            "Dijkstra's algorithm (single-source shortest paths with non-negative weights):\n" +
            "Step 1: For each vertex u in V(G), set dist[u] = infinity.\n" +
            "Step 2: Set dist[s] = 0 and p[s] = nil (s is the source; it will be the first vertex scanned).\n" +
            "Step 3: Build a min-heap Q containing all vertices, keyed by their current dist[] value (ConstructMinHeap).\n" +
            "Step 4: While Q is not empty (|V| iterations):\n" +
            "   - u = DeleteMin(Q) -> removes the vertex with the smallest dist[] (O(log V) per deletion).\n" +
            "   - For each neighbor v in Adj[u]:\n" +
            "       * If dist[v] > dist[u] + w(u, v) then:\n" +
            "           - Update dist[v] = dist[u] + w(u, v).\n" +
            "           - Set p[v] = u (record predecessor for path reconstruction).\n" +
            "           - UpHeap(v, Q) to restore the heap property.\n" +
            "Step 5: Stop when Q is empty. The dist[] array now holds shortest distances from s.\n" +
            "Total time: O(E log V) using a standard binary heap.",
          tags: ["Dijkstra", "Algorithm Steps", "Pseudocode"],
          ref: "Lecture 8 — Dijkstra pseudocode",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Derive the time complexity of Dijkstra's algorithm using a binary heap.",
          translation:
            "اشتق التعقيد الزمني لخوارزمية Dijkstra باستخدام binary heap.",
          answer:
            "Let n = |V| and m = |E|.\n" +
            "1. Initialize dist[]: O(n).\n" +
            "2. ConstructMinHeap: O(n log n) using repeated insertion (or O(n) with BuildHeap).\n" +
            "3. The while loop iterates n times (once per vertex). Each iteration:\n" +
            "   - DeleteMin: O(log n).\n" +
            "   - Inner for-loop scans all neighbors of u. Across all iterations, each edge is examined at most twice (once from each endpoint), so total O(m) relaxations.\n" +
            "   - Each successful relaxation calls UpHeap: O(log n).\n" +
            "4. Therefore:\n" +
            "   - n DeleteMin operations: O(n log n).\n" +
            "   - O(m) UpHeap operations (worst case): O(m log n).\n" +
            "5. Total time = O(n log n) + O(m log n) = O((n + m) log n) = O(E log V) using the lecture's notation.\n" +
            "Note: A Fibonacci heap can improve the bound to O(m + n log n), but the lecture focuses on the binary heap version.",
          tags: ["Dijkstra", "Time Complexity", "Analysis"],
          ref: "Lecture 8 — Dijkstra pseudocode + Big-O note",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Define the Single-Source Shortest-Paths problem and mention one real-world application.",
          translation:
            "عرّف مشكلة Single-Source Shortest-Paths واذكر تطبيقًا واقعيًا واحدًا لها.",
          answer:
            "Problem statement: Given a connected graph G with non-negative weights on the edges and a source vertex s in G, determine the shortest paths from s to all other vertices in G.\n" +
            "Formally: compute, for every vertex v in V(G), the minimum total weight of any path from s to v.\n" +
            "Real-world application: road map applications (e.g., GPS navigation), where the graph models a road network, vertices are intersections, edge weights are travel times or distances, and the user wants the shortest route from their current location to every other destination. Other applications include network routing protocols such as OSPF and game AI pathfinding.",
          tags: ["Shortest Path", "Problem Definition", "Applications"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. Explain the role of the Disjoint Set (Union-Find) data structure in Kruskal's algorithm. Mention its three core operations and what each does.",
          translation:
            "اشرح دور بنية Disjoint Set (Union-Find) في خوارزمية Kruskal. اذكر العمليات الأساسية الثلاث وماذا تفعل كل واحدة.",
          answer:
            "Role: The Disjoint Set (Union-Find) data structure allows Kruskal's algorithm to efficiently test whether adding an edge would create a cycle, and to merge components when an edge is added.\n" +
            "Three core operations:\n" +
            "1. MakeSet(v): creates a new singleton set containing only vertex v. Called once for each vertex during initialization (O(n) calls).\n" +
            "2. FindSet(v): returns the representative (root) of the set that contains vertex v. Two vertices are in the same connected component iff their FindSet results are equal.\n" +
            "3. Union(u, v): merges the two sets that contain u and v into a single set. Called after adding a safe edge to reflect that the two endpoints are now connected.\n" +
            "In Kruskal's main loop, an edge (u, v) is added to T only if FindSet(u) != FindSet(v) (different components => no cycle). After adding it, Union(u, v) is called to merge the components.\n" +
            "Using path compression and union by rank, all three operations are nearly constant (inverse Ackermann) amortized, which keeps Kruskal's overall complexity at O(m log m).",
          tags: ["Kruskal", "Disjoint Set", "Union-Find", "Data Structures"],
          ref: "Lecture 8 — Kruskal pseudocode (MakeSet/FindSet/Union)",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. Compare weighted adjacency matrix and weighted adjacency list representations in terms of space and use cases.",
          translation:
            "قارن بين تمثيل مصفوفة التجاور الموزونة وقائمة التجاور الموزونة من حيث المساحة وحالات الاستخدام.",
          answer:
            "Weighted adjacency matrix:\n" +
            "- An n x n matrix A where A[i][j] = w(i, j) if (i, j) is in E, A[i][i] = 0, and A[i][j] = infinity otherwise (no edge).\n" +
            "- Space: O(n^2), regardless of how many edges the graph has.\n" +
            "- Best suited for dense graphs where m is close to n^2, or when fast O(1) edge-weight lookup is required.\n" +
            "- Iterating over neighbors of v requires scanning an entire row of n entries.\n" +
            "Weighted adjacency list:\n" +
            "- An array Adj[1..n] where Adj[i] is a list of pairs (j, w(i, j)) for every neighbor j of vertex i.\n" +
            "- Space: O(n + m), proportional to the actual number of edges.\n" +
            "- Best suited for sparse graphs where m is much smaller than n^2 (most real-world graphs).\n" +
            "- Iterating over neighbors of v takes O(deg(v)) time, which is exactly what graph traversal algorithms need.\n" +
            "Most MST and shortest-path algorithms (Prim, Kruskal, Dijkstra) prefer the adjacency list representation for sparse graphs.",
          tags: ["Adjacency Matrix", "Adjacency List", "Graph Representation"],
          ref: "Lecture 8 — Weighted Adjacency Matrix + (Weighted) Adjacency List Structure slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Why does Dijkstra's algorithm NOT work with negative edge weights? Give a brief conceptual justification.",
          translation:
            "لماذا لا تعمل خوارزمية Dijkstra مع الأوزان السالبة؟ اذكر تبريرًا مفاهيميًا موجزًا.",
          answer:
            "Dijkstra's algorithm relies on a greedy invariant: once a vertex u is extracted from the priority queue via DeleteMin, its dist[u] is considered finalized (the shortest possible) and is never updated again.\n" +
            "This invariant holds only when all edge weights are non-negative. With non-negative weights, any future path that goes through other vertices and arrives at u cannot be shorter than the current dist[u], because adding non-negative numbers can only keep the path length the same or increase it.\n" +
            "If even one edge has a negative weight, a later path through a vertex not yet processed might reduce dist[u] after u has been finalized, which violates the invariant. The algorithm would therefore return incorrect (too large) distances.\n" +
            "For graphs with negative weights, the Bellman-Ford algorithm should be used instead.",
          tags: ["Dijkstra", "Negative Weights", "Limitations"],
          ref: "Lecture 8 — Single-Source Shortest-Paths Problem statement (non-negative weights)",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. List the four standard categories of MST applications mentioned in the lecture and give a one-line example for each.",
          translation:
            "اذكر الفئات الأربعة لتطبيقات MST المذكورة في المحاضرة وأعطِ مثالًا من سطر واحد لكل منها.",
          answer:
            "The lecture lists MST applications under the general umbrella of network design, with the following examples:\n" +
            "1. Telephone networks: laying cables to connect a set of telephone exchanges at minimum total cost.\n" +
            "2. Electrical power networks: connecting power stations and substations with the minimum total length of transmission lines.\n" +
            "3. Hydraulic (water) networks: designing a pipeline system that links water sources to consumers at minimum cost.\n" +
            "4. Road networks: building the minimum-cost set of roads that connects a set of cities so that every city is reachable.\n" +
            "In every case, the MST provides the most economical construction of a network connecting all sites (vertices) using the minimum total edge weight.",
          tags: ["MST", "Applications", "Network Design"],
          ref: "Lecture 8 — MST Applications slide",
          likely: "medium",
        },

        // ==================== CALCULATION / PROBLEM QUESTIONS ====================
        {
          type: "essay",
          q: "1. Verify the Hand-Shaking Lemma on the following undirected graph: V = {A, B, C, D}, E = {(A,B), (A,C), (B,C), (B,D), (C,D)}. Show all degrees and confirm the sum equals 2|E|.",
          translation:
            "تحقق من Hand-Shaking Lemma على الرسم البياني غير الموجه التالي: V = {A, B, C, D}، E = {(A,B), (A,C), (B,C), (B,D), (C,D)}. اعرض كل الدرجات وأكد أن المجموع يساوي 2|E|.",
          answer:
            "Given: |V| = 4 and |E| = 5 (edges: AB, AC, BC, BD, CD).\n" +
            "Compute the degree of each vertex:\n" +
            "  deg(A) = 2 (edges AB, AC)\n" +
            "  deg(B) = 3 (edges AB, BC, BD)\n" +
            "  deg(C) = 3 (edges AC, BC, CD)\n" +
            "  deg(D) = 2 (edges BD, CD)\n" +
            "Sum of degrees = 2 + 3 + 3 + 2 = 10.\n" +
            "By the Hand-Shaking Lemma: sum of degrees = 2 * |E| = 2 * 5 = 10.\n" +
            "Both sides match (10 = 10), so the lemma is verified.\n" +
            "Bonus observation: the number of vertices with odd degree is 2 (B and C), which is even, consistent with the corollary of the lemma.",
          tags: ["Hand-Shaking Lemma", "Calculation", "Verification"],
          ref: "Lecture 8 — Hand-Shaking Lemma slide",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Apply Kruskal's algorithm on the following weighted undirected graph and find the MST. Vertices = {A, B, C, D, E, F}. Edges with weights: (A,B,4), (A,C,3), (B,C,1), (B,D,2), (C,D,4), (C,E,5), (D,E,7), (D,F,6), (E,F,8). Show each step and the total MST weight.",
          translation:
            "طبّق خوارزمية Kruskal على الرسم البياني الموزون غير الموجه التالي وأوجد MST. الرؤوس = {A, B, C, D, E, F}. الحافات بأوزانها: (A,B,4), (A,C,3), (B,C,1), (B,D,2), (C,D,4), (C,E,5), (D,E,7), (D,F,6), (E,F,8). اعرض كل خطوة والوزن الكلي لـ MST.",
          answer:
            "Step 1 - Sort edges in non-decreasing order of weight:\n" +
            "  (B,C,1), (B,D,2), (A,C,3), (A,B,4), (C,D,4), (C,E,5), (D,F,6), (D,E,7), (E,F,8).\n" +
            "Step 2 - Initialize: T = empty, MakeSet for every vertex (each vertex is its own set). |V| - 1 = 5 edges needed.\n" +
            "Step 3 - Process edges in sorted order:\n" +
            "  - Edge (B,C,1): FindSet(B) != FindSet(C) => no cycle. Add to T. Union(B,C). T = {(B,C)}. edges = 1.\n" +
            "  - Edge (B,D,2): FindSet(B) != FindSet(D) => no cycle. Add to T. Union(B,D). T = {(B,C), (B,D)}. edges = 2.\n" +
            "  - Edge (A,C,3): FindSet(A) != FindSet(C) => no cycle. Add to T. Union(A,C). T = {(B,C), (B,D), (A,C)}. edges = 3.\n" +
            "  - Edge (A,B,4): FindSet(A) == FindSet(B) (both in same set after unions) => would create a cycle. SKIP.\n" +
            "  - Edge (C,D,4): FindSet(C) == FindSet(D) => cycle. SKIP.\n" +
            "  - Edge (C,E,5): FindSet(C) != FindSet(E) => no cycle. Add to T. Union(C,E). T = {(B,C), (B,D), (A,C), (C,E)}. edges = 4.\n" +
            "  - Edge (D,F,6): FindSet(D) != FindSet(F) => no cycle. Add to T. Union(D,F). T = {(B,C), (B,D), (A,C), (C,E), (D,F)}. edges = 5.\n" +
            "Step 4 - Stop: T now has |V| - 1 = 5 edges. MST is complete.\n" +
            "Final MST edges: (B,C), (B,D), (A,C), (C,E), (D,F).\n" +
            "Total MST weight = 1 + 2 + 3 + 5 + 6 = 17.",
          tags: ["Kruskal", "MST", "Calculation", "Step-by-step"],
          ref: "Lecture 8 — Kruskal's Algorithm + worked example",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Apply Dijkstra's algorithm to the following weighted graph and find the shortest distances from source A. Vertices = {A, B, C, D, E}. Edges (undirected, weighted): (A,B,10), (A,C,3), (A,D,20), (B,D,5), (C,B,4), (C,D,11), (D,E,1). Show the dist[] table after each iteration.",
          translation:
            "طبّق خوارزمية Dijkstra على الرسم البياني الموزون التالي وأوجد أقصر المسافات من المصدر A. الرؤوس = {A, B, C, D, E}. الحافات (غير موجّهة، موزونة): (A,B,10), (A,C,3), (A,D,20), (B,D,5), (C,B,4), (C,D,11), (D,E,1). اعرض جدول dist[] بعد كل تكرار.",
          answer:
            "Initialization: dist[A]=0, dist[B..E]=infinity. Q = {A,B,C,D,E}.\n" +
            "Iteration 1 - Select A (dist 0):\n" +
            "  Relax A->B: dist[B] = min(inf, 0+10) = 10\n" +
            "  Relax A->C: dist[C] = min(inf, 0+3) = 3\n" +
            "  Relax A->D: dist[D] = min(inf, 0+20) = 20\n" +
            "  dist = {A:0, B:10, C:3, D:20, E:inf}\n" +
            "Iteration 2 - Select C (dist 3, smallest in Q):\n" +
            "  Relax C->B: dist[B] = min(10, 3+4) = 7\n" +
            "  Relax C->D: dist[D] = min(20, 3+11) = 14\n" +
            "  dist = {A:0, B:7, C:3, D:14, E:inf}\n" +
            "Iteration 3 - Select B (dist 7):\n" +
            "  Relax B->D: dist[D] = min(14, 7+5) = 12\n" +
            "  dist = {A:0, B:7, C:3, D:12, E:inf}\n" +
            "Iteration 4 - Select D (dist 12):\n" +
            "  Relax D->E: dist[E] = min(inf, 12+1) = 13\n" +
            "  dist = {A:0, B:7, C:3, D:12, E:13}\n" +
            "Iteration 5 - Select E (dist 13): no further updates.\n" +
            "Final distances from A:\n" +
            "  dist[A] = 0 (path: A)\n" +
            "  dist[B] = 7 (path: A -> C -> B)\n" +
            "  dist[C] = 3 (path: A -> C)\n" +
            "  dist[D] = 12 (path: A -> C -> B -> D)\n" +
            "  dist[E] = 13 (path: A -> C -> B -> D -> E)",
          tags: ["Dijkstra", "Shortest Path", "Calculation", "Step-by-step"],
          ref: "Lecture 8 — Dijkstra example slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Given a weighted directed graph with n = 6 vertices and m = 12 edges, compute the total running time of (a) Kruskal's algorithm and (b) Dijkstra's algorithm with a binary heap. Show the dominant term.",
          translation:
            "بالنظر إلى رسم بياني موجّه موزون بـ n = 6 رؤوس و m = 12 حافة، احسب الزمن الكلي لـ (a) خوارزمية Kruskal و (b) خوارزمية Dijkstra باستخدام binary heap. اعرض الحد المهيمن.",
          answer:
            "Given: n = |V| = 6, m = |E| = 12.\n" +
            "(a) Kruskal's algorithm:\n" +
            "  - Sort edges: O(m log m) = 12 * log(12) = 12 * 3.585 = 43.02 (approximately, in base-2).\n" +
            "  - MakeSet: O(n) = 6 operations.\n" +
            "  - FindSet: O(m) = 12 calls (two per edge).\n" +
            "  - Union: O(n) = up to 5 calls (n - 1).\n" +
            "  - Dominant term: O(m log m).\n" +
            "  - Using log2(12) approx 3.585, total work approx 12 * 3.585 = ~43 edge-comparisons (plus union-find overhead).\n" +
            "(b) Dijkstra's algorithm with binary heap:\n" +
            "  - O((n + m) log n) = (6 + 12) * log2(6) = 18 * 2.585 = ~46.53.\n" +
            "  - Equivalently O(E log V) = 12 * 2.585 = ~31, but the (V + E) form also accounts for the n DeleteMin operations.\n" +
            "Summary: Kruskal dominant term = O(m log m); Dijkstra dominant term = O((n + m) log n) = O(E log V).",
          tags: ["Kruskal", "Dijkstra", "Time Complexity", "Calculation"],
          ref: "Lecture 8 — Running Time slides for both algorithms",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Construct the weighted adjacency matrix AND the weighted adjacency list for the following undirected weighted graph. Vertices = {1, 2, 3, 4}. Edges (undirected, weighted): (1,2,5), (1,4,2), (2,3,8), (3,4,3), (2,4,1). Use infinity for non-existent edges and 0 on the diagonal.",
          translation:
            "أنشئ مصفوفة التجاور الموزونة وقائمة التجاور الموزونة للرسم البياني غير الموجه الموزون التالي. الرؤوس = {1, 2, 3, 4}. الحافات: (1,2,5), (1,4,2), (2,3,8), (3,4,3), (2,4,1). استخدم infinity للحافات غير الموجودة و 0 على القطر.",
          answer:
            "Vertices: 1, 2, 3, 4. Edges (undirected, so symmetric): (1,2,5), (1,4,2), (2,3,8), (2,4,1), (3,4,3).\n" +
            "Weighted Adjacency Matrix A (size 4x4):\n" +
            "         1     2     3     4\n" +
            "    1 [  0     5   inf     2  ]\n" +
            "    2 [  5     0     8     1  ]\n" +
            "    3 [ inf    8     0     3  ]\n" +
            "    4 [  2     1     3     0  ]\n" +
            "Explanation:\n" +
            "  A[1][1] = A[2][2] = A[3][3] = A[4][4] = 0 (diagonal).\n" +
            "  A[1][2] = A[2][1] = 5 (edge 1-2).\n" +
            "  A[1][4] = A[4][1] = 2 (edge 1-4).\n" +
            "  A[2][3] = A[3][2] = 8 (edge 2-3).\n" +
            "  A[2][4] = A[4][2] = 1 (edge 2-4).\n" +
            "  A[3][4] = A[4][3] = 3 (edge 3-4).\n" +
            "  All other off-diagonal entries = infinity (no edge).\n" +
            "Weighted Adjacency List Adj:\n" +
            "  Adj[1] = [(2, 5), (4, 2)]\n" +
            "  Adj[2] = [(1, 5), (3, 8), (4, 1)]\n" +
            "  Adj[3] = [(2, 8), (4, 3)]\n" +
            "  Adj[4] = [(1, 2), (2, 1), (3, 3)]\n" +
            "Each list entry is a (neighbor, weight) pair.",
          tags: [
            "Adjacency Matrix",
            "Adjacency List",
            "Graph Representation",
            "Calculation",
          ],
          ref: "Lecture 8 — Weighted Adjacency Matrix + (Weighted) Adjacency List Structure slides",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. For a directed graph G with V = {A, B, C, D} and E = {(A->B), (A->C), (B->D), (C->D), (D->A)}, compute indeg(v) and outdeg(v) for every vertex, and verify that sum of in-degrees equals sum of out-degrees equals |E|.",
          translation:
            "بالنسبة للرسم البياني الموجه G بالرؤوس V = {A, B, C, D} والحافات E = {(A->B), (A->C), (B->D), (C->D), (D->A)}، احسب indeg(v) و outdeg(v) لكل رأس، وتحقق أن مجموع in-degrees يساوي مجموع out-degrees يساوي |E|.",
          answer:
            "Edges (directed): A->B, A->C, B->D, C->D, D->A. So |E| = 5.\n" +
            "Out-degrees (edges leaving each vertex):\n" +
            "  outdeg(A) = 2 (A->B, A->C)\n" +
            "  outdeg(B) = 1 (B->D)\n" +
            "  outdeg(C) = 1 (C->D)\n" +
            "  outdeg(D) = 1 (D->A)\n" +
            "  Sum of out-degrees = 2 + 1 + 1 + 1 = 5.\n" +
            "In-degrees (edges entering each vertex):\n" +
            "  indeg(A) = 1 (from D->A)\n" +
            "  indeg(B) = 1 (from A->B)\n" +
            "  indeg(C) = 1 (from A->C)\n" +
            "  indeg(D) = 2 (from B->D and C->D)\n" +
            "  Sum of in-degrees = 1 + 1 + 1 + 2 = 5.\n" +
            "Verification:\n" +
            "  sum of out-degrees = 5 = |E|. (matches)\n" +
            "  sum of in-degrees = 5 = |E|. (matches)\n" +
            "The directed form of the Hand-Shaking Lemma is verified.\n" +
            "Also, deg(v) = outdeg(v) + indeg(v):\n" +
            "  deg(A) = 3, deg(B) = 2, deg(C) = 2, deg(D) = 3.",
          tags: [
            "Hand-Shaking Lemma",
            "Directed Graph",
            "Calculation",
            "Verification",
          ],
          ref: "Lecture 8 — Hand-Shaking Lemma (directed form)",
          likely: "high",
        },
      ],
    },
    {
      id: "networks-lecture-09",
      t: "المحاضرة 9 : البحث بالعرض والبحث بالعمق (BFS و DFS)",
      d: "Breadth-First Search (queue-based), Depth-First Search (recursive and iterative/stack-based)",
      pdf: "datenew/subjects/algorithms/lectures/Lec09/CS 311 lec.9 by Majid A. Askar.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/Lec09/Lecture-09-Questions.pdf",
      // المحاضرة: التاسعة — البحث بالعرض (BFS) والبحث بالعمق (DFS) في الرسوم البيانية
      linkCategories: [
        {
          category: "فيديوهات عربية",
          icon: "🇪🇬",
          description:
            "شروحات بالعربي لخوارزميات BFS و DFS واجتياز الرسوم البيانية",
          links: [
            {
              t: "🔎 بحث في يوتيوب: شرح BFS بالعربي",
              d: "بحث في يوتيوب لشروحات عربية لخوارزمية البحث بالعرض (Breadth-First Search) واستخدام الطابور. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=BFS+breadth+first+search+شرح+بالعربي",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: شرح DFS بالعربي",
              d: "بحث في يوتيوب لشروحات عربية لخوارزمية البحث بالعمق (Depth-First Search) العودية والتكرارية واستخدام الـ stack. رابط بحث مش فيديو محدد.",
              icon: "🇪🇬",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=DFS+depth+first+search+شرح+بالعربي",
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
            "محاضرات بالإنجليزي لشرح BFS و DFS من جامعات وقنوات تعليمية",
          links: [
            {
              t: "🔎 بحث في يوتيوب: BFS algorithm explained",
              d: "بحث في يوتيوب لمحاضرات عالمية تشرح خوارزمية BFS خطوة بخطوة مع تحليل الطابور. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=breadth+first+search+BFS+algorithm+explained",
                  type: "view",
                  color: "red",
                },
              ],
            },
            {
              t: "🔎 بحث في يوتيوب: DFS recursive and iterative",
              d: "بحث في يوتيوب لشرح DFS العودية والتكرارية والفرق بينهما واستخدام الـ stack. رابط بحث مش فيديو محدد.",
              icon: "🌍",
              actions: [
                {
                  label: "🔍 بحث في يوتيوب",
                  url: "https://www.youtube.com/results?search_query=depth+first+search+DFS+recursive+iterative+explained",
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
          description: "مقالات ومراجع موثوقة تشرح BFS و DFS بالتفصيل",
          links: [
            {
              t: "Breadth First Search (BFS) for a Graph — GeeksforGeeks",
              d: "شرح كامل لخوارزمية BFS لاجتياز الرسوم البيانية باستخدام الطابور (queue)، مع كود implementations بلغات متعددة وأمثلة محلولة. يطابق pseudocode المحاضرة.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Depth First Search (DFS) for a Graph — GeeksforGeeks",
              d: "شرح DFS لاجتياز الرسوم البيانية بأسلوب التعمق أولاً ثم التراجع، مع شرح النسختين العودية والتكرارية واستخدام الـ stack.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/depth-first-search-or-dfs-for-a-graph",
                  type: "view",
                  color: "green",
                },
              ],
            },
            {
              t: "Difference between BFS and DFS — GeeksforGeeks",
              d: "مقال يقارن بين BFS و DFS من حيث بنية البيانات (queue vs stack)، وترتيب الاستكشاف (مستوى بمستوى vs عمق ثم تراجع)، ويساعد على فهم متى نستخدم كل منهما.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/difference-between-bfs-and-dfs",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "Iterative Depth First Traversal — GeeksforGeeks",
              d: "شرح النسخة التكرارية من DFS باستخدام stack صريح بدلاً من العودية، مع توضيح لماذا قد نعكس ترتيب الجيران.",
              icon: "📚",
              actions: [
                {
                  label: "📖 الشرح",
                  url: "https://www.geeksforgeeks.org/dsa/iterative-depth-first-traversal",
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
          description: "أدوات تفاعلية لمحاكاة BFS و DFS بصريًا على رسوم بيانية",
          links: [
            {
              t: "VisuAlgo — Graph Traversal (BFS/DFS)",
              d: "أداة محاكاة تفاعلية تعرض BFS و DFS خطوة بخطوة على رسوم بيانية قابلة للتعديل، مع إظهار حالة الطابور/الـ stack وتمييز العقد المزارة. ممتازة لتجربة pseudocode المحاضرة عمليًا.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://visualgo.net/en/dfsbfs",
                  type: "view",
                  color: "blue",
                },
              ],
            },
            {
              t: "BFS Visualizer — see-algorithms.com",
              d: "محاكي تفاعلي لخوارزمية BFS يعرض استكشاف الرسم البياني مستوى بمستوى وحالة الطابور في كل خطوة.",
              icon: "🔧",
              actions: [
                {
                  label: "🌐 فتح الموقع",
                  url: "https://see-algorithms.com/graph/BFS",
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
          q: "1. BFS uses which data structure to keep track of nodes to visit next?",
          options: ["A queue", "A stack", "A priority queue", "A hash table"],
          correct: 0,
          translation:
            "BFS يستخدم أي بنية بيانات لتتبع العقد التي سيتم زيارتها تاليًا؟",
          explanation:
            "BFS يستخدم طابور (queue) كما هو موضح صراحة في الـ pseudocode: create a queue Q. الـ stack يُستخدم في DFS التكراري، أما priority queue فلا يظهر في المحاضرة.",
          tags: ["BFS", "Queue"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "2. What is the first step performed in the BFS algorithm?",
          options: [
            "Dequeue a node from Q",
            "Create a queue Q",
            "Mark all nodes as visited",
            "Process the neighbors of the start node",
          ],
          correct: 1,
          translation: "ما هي الخطوة الأولى التي تُنفذ في خوارزمية BFS؟",
          explanation:
            "الخطوة الأولى في الـ pseudocode هي create a queue Q، قبل حتى وضع علامة visited على عقدة البداية. الخيار A يأتي داخل الحلقة، و C خاطئ لأن العقد تُعلَّم visited عند زيارتها فقط.",
          tags: ["BFS", "Algorithm Steps"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "3. In BFS, when is a node marked as visited?",
          options: [
            "When it is dequeued from Q",
            "After all its neighbors are processed",
            "When it is enqueued into Q",
            "When the algorithm terminates",
          ],
          correct: 2,
          translation: "في BFS، متى تُعلَّم العقدة بأنها visited؟",
          explanation:
            "في الـ pseudocode: العقدة تُعلَّم visited عند إضافتها (enqueue) للطابور، وليس عند إزالتها. هذا يمنع إضافة نفس العقدة مرتين. الخيار A متأخر جدًا ويسبب تكرار الإضافة.",
          tags: ["BFS", "Visited Marking"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "4. In BFS, the start_node is marked as visited:",
          options: [
            "Before being enqueued into Q",
            "After the while loop",
            "After being dequeued from Q",
            "Only if it has neighbors",
          ],
          correct: 0,
          translation: "في BFS، تُعلَّم عقدة البداية start_node بأنها visited:",
          explanation:
            "الـ pseudocode يوضح: mark start_node as visited ثم enqueue start_node into Q — أي قبل إضافتها للطابور مباشرة. هذا يضمن عدم إضافتها مرة أخرى كجار لنفسها.",
          tags: ["BFS", "Algorithm Steps"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "5. The BFS while loop continues as long as:",
          options: [
            "All nodes are visited",
            "Q is not empty",
            "The graph has edges",
            "There are unvisited neighbors",
          ],
          correct: 1,
          translation: "حلقة while في BFS تستمر طالما:",
          explanation:
            "الشرط الصريح في الـ pseudocode هو while Q is not empty. الخيار D غير دقيق لأن وجود جيران غير مزارين لا يعني أنهم في الطابور بعد. تنتهي الحلقة عندما يفرغ الطابور.",
          tags: ["BFS", "Loop Condition"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "6. In BFS, after current_node = dequeue(Q), the algorithm:",
          options: [
            "Marks current_node as visited",
            "Pushes current_node onto a stack",
            "Examines each neighbor of current_node",
            "Terminates the loop",
          ],
          correct: 2,
          translation:
            "في BFS، بعد current_node = dequeue(Q)، تقوم الخوارزمية بـ:",
          explanation:
            "بعد إزالة العقدة من الطابور، تمر الخوارزمية على كل جار (for each neighbor of current_node) وتضيف غير المزار منهم. الخيار A خاطئ لأن العقدة عُلِّمت visited قبل إضافتها للطابور أصلاً.",
          tags: ["BFS", "Algorithm Steps"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "7. A neighbor of current_node is enqueued into Q in BFS only if:",
          options: [
            "It is the start node",
            "It was already dequeued",
            "It has no neighbors",
            "It is not visited",
          ],
          correct: 3,
          translation: "يُضاف جار current_node إلى الطابور Q في BFS فقط إذا:",
          explanation:
            "الشرط الصريح في الـ pseudocode هو if neighbor is not visited. هذا يمنع الحلقات اللانهائية والدخول المزدوج للعقدة. الخيار D خاطئ لأن العقدة المُزالة من الطابور تكون قد عُلِّمت visited بالفعل.",
          tags: ["BFS", "Algorithm Logic"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "8. BFS explores nodes of the graph in which order?",
          options: [
            "Level by level, starting from the start node",
            "By going as deep as possible before backtracking",
            "By selecting the node with the smallest weight",
            "In reverse alphabetical order",
          ],
          correct: 0,
          translation: "BFS يستكشف عقد الرسم البياني بأي ترتيب؟",
          explanation:
            "BFS يستكشف العقد مستوى بمستوى (level by level) بدءًا من عقدة البداية، لأنه يستخدم طابور (FIFO) فيُعالج ما دخل أولاً أولاً. الخيار A يصف DFS، و C يصف خوارزميات shortest path مثل Dijkstra.",
          tags: ["BFS", "Traversal Order"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "9. Which operation does BFS perform on the queue when adding a new node?",
          options: ["Push", "Enqueue", "Pop", "Dequeue"],
          correct: 1,
          translation: "أي عملية تُنفذها BFS على الطابور عند إضافة عقدة جديدة؟",
          explanation:
            "BFS تستخدم enqueue لإضافة العقد للطابور، و dequeue لإزالتها. Push و Pop عمليات الـ stack المستخدم في DFS التكراري، وليست عمليات الطابور.",
          tags: ["BFS", "Queue Operations"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "10. Which operation does BFS perform on the queue to get the next node to process?",
          options: ["Push", "Pop", "Dequeue", "Enqueue"],
          correct: 2,
          translation:
            "أي عملية تُنفذها BFS على الطابور للحصول على العقدة التالية للمعالجة؟",
          explanation:
            "BFS تستخدم dequeue لإزالة العقدة الأمامية من الطابور ومعالجتها (current_node = dequeue(Q)). Enqueue للإضافة، أما Push و Pop فهما عمليات stack.",
          tags: ["BFS", "Queue Operations"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "11. The recursive DFS algorithm marks a node as visited:",
          options: [
            "After returning from the recursion",
            "After all recursive calls complete",
            "Only if the node has no neighbors",
            "Before the recursive calls to its neighbors",
          ],
          correct: 3,
          translation: "خوارزمية DFS العودية تعلِّم العقدة بأنها visited:",
          explanation:
            "في الـ pseudocode: أول سطر داخل if node is not visited هو mark node as visited، قبل الاستدعاءات العودية على الجيران. هذا يمنع إعادة زيارة العقدة عبر مسار آخر.",
          tags: ["DFS", "Visited Marking"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          q: "12. The recursive DFS algorithm visits a neighbor by:",
          options: [
            "Making a recursive call DFS(neighbor)",
            "Adding it to a queue",
            "Pushing it onto a stack",
            "Marking it without visiting",
          ],
          correct: 0,
          translation: "خوارزمية DFS العودية تزور الجار عن طريق:",
          explanation:
            "في الـ pseudocode: DFS(neighbor) — استدعاء عودي مباشر على الجار غير المزار. هذا الاستدعاء العودي يستغل call stack داخليًا. الخيار C يخص DFS التكراري.",
          tags: ["DFS", "Recursion"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          q: "13. In the recursive DFS, the recursive call DFS(neighbor) is made only if:",
          options: [
            "The neighbor has no edges",
            "The neighbor is not visited",
            "The node is the start node",
            "The stack is empty",
          ],
          correct: 1,
          translation:
            "في DFS العودي، يُنفذ الاستدعاء العودي DFS(neighbor) فقط إذا:",
          explanation:
            "الشرط الصريح في الـ pseudocode هو if neighbor is not visited ثم DFS(neighbor). هذا يمنع الحلقات اللانهائية في الرسوم البيانية الدورية. الخيارات الأخرى لا تمثل شرط الـ pseudocode.",
          tags: ["DFS", "Recursion"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          q: "14. The recursive DFS call is made inside which loop?",
          options: [
            "while node is not visited",
            "while stack is not empty",
            "for each neighbor in node's adjacency list",
            "for each node in the graph",
          ],
          correct: 2,
          translation: "الاستدعاء العودي في DFS يحدث داخل أي حلقة؟",
          explanation:
            "الـ pseudocode يستخدم for each neighbor in node's adjacency list للمرور على كل جيران العقدة الحالية واستدعاء DFS عليه إن كان غير مزار. while stack is not empty يخص DFS التكراري.",
          tags: ["DFS", "Recursion"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          q: "15. What does the recursive DFS use implicitly to track the path of recursion?",
          options: [
            "An explicit queue",
            "An array of visited nodes only",
            "A hash table",
            "The system call stack",
          ],
          correct: 3,
          translation: "ماذا يستخدم DFS العودي ضمنيًا لتتبع مسار العودية؟",
          explanation:
            "DFS العودي يستغل call stack الخاص بالنظام (system call stack) ضمنيًا — كل استدعاء عودي يُضاف للـ stack ويعود عند الانتهاء. الخيار A يخص BFS، و D جزئي فقط (visited وحده لا يكفي لتتبع المسار).",
          tags: ["DFS", "Call Stack"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          q: "16. The iterative DFS uses which data structure instead of recursion?",
          options: ["A stack", "A queue", "A binary tree", "A linked list"],
          correct: 0,
          translation: "DFS التكراري يستخدم أي بنية بيانات بدلاً من العودية؟",
          explanation:
            "الـ pseudocode صريح: create an empty stack ثم push start node onto stack. الـ stack (LIFO) يحاكي سلوك call stack في النسخة العودية. الطابور يخص BFS.",
          tags: ["DFS", "Stack"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          q: "17. In the iterative DFS, when is a node marked as visited?",
          options: [
            "When it is pushed onto the stack",
            "When it is popped from the stack",
            "Before the algorithm starts",
            "After all its neighbors are pushed",
          ],
          correct: 1,
          translation: "في DFS التكراري، متى تُعلَّم العقدة بأنها visited؟",
          explanation:
            "في الـ pseudocode: node = pop من الـ stack، ثم if node is not visited: mark node as visited. أي عند الإزالة من الـ stack وليس عند الإضافة. هذا يختلف عن BFS التي تعلِّم visited عند الإضافة للطابور.",
          tags: ["DFS", "Visited Marking"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          q: "18. In the iterative DFS, the while loop continues as long as:",
          options: [
            "All nodes are visited",
            "The queue is not empty",
            "The stack is not empty",
            "There are unvisited neighbors",
          ],
          correct: 2,
          translation: "في DFS التكراري، تستمر حلقة while طالما:",
          explanation:
            "الشرط الصريح هو while stack is not empty. الخيار C يخص BFS. تنتهي الحلقة عندما يفرغ الـ stack تمامًا، أي بعد معالجة كل العقد الممكنة.",
          tags: ["DFS", "Loop Condition"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          q: "19. In the iterative DFS, neighbors are pushed onto the stack:",
          options: [
            "Only if they are visited",
            "After the stack becomes empty",
            "In alphabetical order",
            "Only if they are not visited, possibly in reverse order",
          ],
          correct: 3,
          translation: "في DFS التكراري، تُضاف الجيران إلى الـ stack:",
          explanation:
            "الـ pseudocode: for each neighbor in reverse order if needed، if neighbor is not visited: push neighbor onto stack. أي يُشترط أن يكون الجار غير مزار، وقد يُعكس الترتيب لمحاكاة DFS العودي. الخيار A خطأ لأن إضافة العقد المزارة يسبب تكرارًا.",
          tags: ["DFS", "Stack Operations"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          q: "20. Why does the iterative DFS mention pushing neighbors in reverse order if needed?",
          options: [
            "To match the visitation order of the recursive DFS",
            "To make the algorithm faster",
            "To reduce memory usage",
            "To sort the neighbors alphabetically",
          ],
          correct: 0,
          translation:
            "لماذا يذكر DFS التكراري إضافة الجيران بترتيب عكسي عند الحاجة؟",
          explanation:
            "لأن الـ stack هو LIFO، فإذا أردنا أن تُزار الجاران بنفس ترتيب DFS العودي (الذي يعالج الجيران بالترتيب الأصلي)، يجب دفعهم بترتيب عكسي. الخيار A خاطئ لأن العكس لا يؤثر على السرعة.",
          tags: ["DFS", "Stack"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          q: "21. Which algorithm uses the FIFO (First-In-First-Out) principle?",
          options: [
            "DFS recursive",
            "BFS",
            "DFS iterative",
            "Both DFS and BFS",
          ],
          correct: 1,
          translation: "أي خوارزمية تستخدم مبدأ FIFO (أول داخل أول خارج)؟",
          explanation:
            "BFS تستخدم طابور وهو FIFO — أول عقدة دخلت هي أول عقدة تُعالج. DFS (سواء عودي أو تكراري) يستخدم stack وهو LIFO. هذا الفرق الجوهري يفسر اختلاف ترتيب الاستكشاف بينهما.",
          tags: ["BFS", "DFS", "Comparison"],
          ref: "Lecture 9 — BFS vs DFS",
          likely: "high",
        },
        {
          q: "22. Which algorithm uses the LIFO (Last-In-First-Out) principle?",
          options: [
            "BFS",
            "Both BFS and DFS",
            "DFS iterative",
            "Neither BFS nor DFS",
          ],
          correct: 2,
          translation: "أي خوارزمية تستخدم مبدأ LIFO (آخر داخل أول خارج)؟",
          explanation:
            "DFS التكراري يستخدم stack وهو LIFO — آخر عقدة دُفعت هي أول عقدة تُزال. DFS العودي يستخدم call stack ضمنيًا وهو أيضًا LIFO. BFS يستخدم طابور وهو FIFO.",
          tags: ["DFS", "Stack"],
          ref: "Lecture 9 — BFS vs DFS",
          likely: "high",
        },
        {
          q: "23. What is the main difference between BFS and DFS in terms of data structure?",
          options: [
            "BFS uses a stack, DFS uses a queue",
            "Both use stacks",
            "Both use queues",
            "BFS uses a queue, DFS uses a stack (or recursion)",
          ],
          correct: 3,
          translation: "ما الفرق الرئيسي بين BFS و DFS من حيث بنية البيانات؟",
          explanation:
            "BFS يستخدم طابور (FIFO)، بينما DFS يستخدم stack (LIFO) بشكل صريح في النسخة التكرارية أو ضمنيًا عبر call stack في النسخة العودية. هذا الفرق يحدد ترتيب الاستكشاف.",
          tags: ["BFS", "DFS", "Comparison"],
          ref: "Lecture 9 — BFS vs DFS",
          likely: "high",
        },
        {
          q: "24. DFS explores nodes of the graph in which manner?",
          options: [
            "By going as deep as possible before backtracking",
            "Level by level",
            "By selecting the smallest-weight node",
            "In random order",
          ],
          correct: 0,
          translation: "DFS يستكشف عقد الرسم البياني بأي طريقة؟",
          explanation:
            "DFS يذهب أعمق ما يمكن (deep) في كل مسار قبل أن يرجع (backtrack) لمسار آخر — وهذا واضح من الاستدعاء العودي DFS(neighbor) الذي يغوص أعمق فأعمق. الخيار A يصف BFS.",
          tags: ["DFS", "Traversal Order"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          q: "25. In BFS, what happens if a node is already visited when encountered as a neighbor?",
          options: [
            "It is enqueued again",
            "It is skipped (not enqueued)",
            "The algorithm terminates",
            "An error is reported",
          ],
          correct: 1,
          translation:
            "في BFS، ماذا يحدث إذا كانت العقدة مزارة بالفعل عند مواجهتها كجار؟",
          explanation:
            "الـ pseudocode: if neighbor is not visited — أي يتم تخطي العقد المزارين وعدم إضافتهم للطابور. هذا يمنع المعالجة المزدوجة والحلقات اللانهائية. الخيار A يسبب تكرارًا لا ضرورة له.",
          tags: ["BFS", "Visited Marking"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          q: "26. Both BFS and DFS share which common step?",
          options: [
            "Using a queue",
            "Using a stack",
            "Marking nodes as visited",
            "Sorting the neighbors",
          ],
          correct: 2,
          translation: "BFS و DFS يشتركان في أي خطوة؟",
          explanation:
            "كلتا الخوارزميتين تعلِّمان العقد visited عند زيارتها لمنع المعالجة المزدوجة. الخيار A يخص BFS فقط، و C يخص DFS فقط، و D غير مذكور في المحاضرة. علامة visited هي الجوهر المشترك.",
          tags: ["BFS", "DFS", "Common"],
          ref: "Lecture 9 — BFS and DFS",
          likely: "high",
        },
        {
          q: "27. The iterative DFS processes a node (e.g., prints it) at which moment?",
          options: [
            "When it is pushed onto the stack",
            "After the stack becomes empty",
            "Before the while loop starts",
            "When it is popped from the stack and marked visited",
          ],
          correct: 3,
          translation: "DFS التكراري يعالج العقدة (مثلًا يطبعها) في أي لحظة؟",
          explanation:
            "الـ pseudocode: node = pop من الـ stack، if node is not visited: mark visited ثم process node (e.g., print). أي المعالجة تتم عند الإزالة من الـ stack والإعلان visited، وليس عند الدفع.",
          tags: ["DFS", "Processing"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          q: "28. In the recursive DFS, the base case (stopping condition for a branch) occurs when:",
          options: [
            "All neighbors of the node are already visited",
            "The node has no neighbors",
            "The stack is empty",
            "The queue is empty",
          ],
          correct: 0,
          translation: "في DFS العودي، حالة التوقف لفرع ما تحدث عندما:",
          explanation:
            "الاستدعاء العودي DFS(neighbor) يُنفذ فقط إذا neighbor is not visited. فإذا كان كل الجيران مزارين، لا يحدث استدعاء عودي ويعود التحكم للنداء السابق. الخيار A حالة خاصة من هذا. الـ stack و queue لا علاقة لهما بالنسخة العودية.",
          tags: ["DFS", "Base Case"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "medium",
        },
        {
          q: "29. In the iterative DFS, a node may be pushed onto the stack multiple times because:",
          options: [
            "The algorithm is incorrect",
            "Visited marking happens at pop time, not push time",
            "The stack has unlimited capacity",
            "BFS and DFS are mixed",
          ],
          correct: 1,
          translation:
            "في DFS التكراري، قد تُدفع العقدة للـ stack عدة مرات لأن:",
          explanation:
            "بما أن علامة visited توضع عند pop وليس عند push، يمكن أن تُدفع العقدة عدة مرات (كجار لعقد مختلفة) قبل أن تُزال للمرة الأولى. عند pop الثانية، تكون visited فتُتجاوز. هذا فرق دقيق عن BFS التي تعلِّم visited عند enqueue.",
          tags: ["DFS", "Stack"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "medium",
        },
        {
          q: "30. Which of the following is NOT part of the BFS pseudocode?",
          options: [
            "create a queue Q",
            "mark start_node as visited",
            "push start node onto stack",
            "for each neighbor of current_node",
          ],
          correct: 2,
          translation: "أيٌّ مما يلي ليس جزءًا من pseudocode الخاص بـ BFS؟",
          explanation:
            "push start node onto stack يخص DFS التكراري وليس BFS. باقي الخيارات كلها من pseudocode الخاص بـ BFS: create a queue Q، mark start_node as visited، و for each neighbor of current_node.",
          tags: ["BFS", "Pseudocode"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "medium",
        },
        {
          q: "31. Which of the following is NOT part of the iterative DFS pseudocode?",
          options: [
            "create an empty stack",
            "process node (e.g., print)",
            "node = pop from stack",
            "enqueue start node into Q",
          ],
          correct: 3,
          translation:
            "أيٌّ مما يلي ليس جزءًا من pseudocode الخاص بـ DFS التكراري؟",
          explanation:
            "enqueue start node into Q يخص BFS. DFS التكراري يستخدم push start node onto stack وليس enqueue. باقي الخيارات كلها من pseudocode الخاص بـ DFS التكراري.",
          tags: ["DFS", "Pseudocode"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "medium",
        },
        {
          type: "essay",
          q: "1. Write the BFS algorithm pseudocode exactly as given in the lecture.",
          translation:
            "اكتب pseudocode الخاص بخوارزمية BFS كما ورد في المحاضرة.",
          answer:
            "BFS(Graph, start_node):\n    create a queue Q\n    mark start_node as visited\n    enqueue start_node into Q\n\n    while Q is not empty:\n        current_node = dequeue(Q)\n        for each neighbor of current_node:\n            if neighbor is not visited:\n                mark neighbor as visited\n                enqueue neighbor into Q",
          tags: ["BFS", "Pseudocode"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          type: "essay",
          q: "2. Write the recursive DFS algorithm pseudocode exactly as given in the lecture.",
          translation:
            "اكتب pseudocode الخاص بخوارزمية DFS العودية كما ورد في المحاضرة.",
          answer:
            "DFS(node):\n    if node is not visited:\n        mark node as visited\n        for each neighbor in node's adjacency list:\n            if neighbor is not visited:\n                DFS(neighbor)",
          tags: ["DFS", "Pseudocode", "Recursion"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          type: "essay",
          q: "3. Write the iterative DFS algorithm pseudocode exactly as given in the lecture.",
          translation:
            "اكتب pseudocode الخاص بخوارزمية DFS التكرارية كما ورد في المحاضرة.",
          answer:
            "DFS_iterative(start):\n    create an empty stack\n    push start node onto stack\n    create an empty set for visited nodes\n\n    while stack is not empty:\n        node = pop from stack\n        if node is not visited:\n            mark node as visited\n            process node (e.g., print)\n            for each neighbor in node's adjacency list (in reverse order if needed):\n                if neighbor is not visited:\n                    push neighbor onto stack",
          tags: ["DFS", "Pseudocode", "Iterative"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          type: "essay",
          q: "4. Compare BFS and DFS in terms of the data structure each uses.",
          translation:
            "قارن بين BFS و DFS من حيث بنية البيانات التي تستخدمها كل منهما.",
          answer:
            "BFS:\n- Uses a QUEUE (FIFO — First-In-First-Out).\n- Nodes are enqueued when discovered and dequeued for processing.\n- The first node added is the first node processed, which produces level-by-level exploration.\n\nDFS (iterative):\n- Uses a STACK (LIFO — Last-In-First-Out).\n- Nodes are pushed when discovered and popped for processing.\n- The last node added is the first node processed, which produces deep-then-backtrack exploration.\n\nDFS (recursive):\n- Uses the system CALL STACK implicitly (also LIFO).\n- Each recursive call adds a frame to the call stack; when a branch ends, control returns to the previous frame.\n\nSummary: BFS = queue (FIFO); DFS = stack or recursion (LIFO).",
          tags: ["BFS", "DFS", "Comparison"],
          ref: "Lecture 9 — BFS vs DFS",
          likely: "high",
        },
        {
          type: "essay",
          q: "5. Explain the difference between marking a node visited at enqueue time (BFS) versus at pop time (iterative DFS).",
          translation:
            "اشرح الفرق بين تعليم العقدة visited عند الإضافة للطابور (BFS) مقابل تعليمها عند الإزالة من الـ stack (DFS التكراري).",
          answer:
            "BFS (mark visited at enqueue time):\n- When a neighbor is discovered, it is marked visited immediately AND enqueued.\n- Consequence: each node enters the queue exactly once. No duplicates.\n- This is more efficient in space.\n\nIterative DFS (mark visited at pop time):\n- When a neighbor is discovered, it is pushed onto the stack WITHOUT being marked visited.\n- The node is marked visited only when it is popped from the stack.\n- Consequence: the same node may be pushed onto the stack multiple times (as a neighbor of different nodes) before being popped the first time.\n- When popped the second time, the 'if node is not visited' check skips it.\n- This uses more stack space but still produces a correct DFS order.\n\nKey insight: BFS prevents duplicates by marking early; iterative DFS tolerates duplicates by checking at pop time.",
          tags: ["BFS", "DFS", "Visited Marking"],
          ref: "Lecture 9 — BFS vs DFS",
          likely: "high",
        },
        {
          type: "essay",
          q: "6. Explain the role of the 'visited' marking in both BFS and DFS. Why is it necessary?",
          translation:
            "اشرح دور علامة 'visited' في BFS و DFS معًا. لماذا هي ضرورية؟",
          answer:
            "Role of the 'visited' marking:\n- A 'visited' flag is set on a node as soon as it is first reached by the algorithm.\n- Before processing any neighbor, the algorithm checks 'if neighbor is not visited' to decide whether to proceed.\n\nWhy it is necessary:\n1. To prevent infinite loops: graphs may contain cycles. Without the visited check, BFS or DFS would loop forever around a cycle, re-visiting the same nodes.\n2. To prevent duplicate processing: each node should be processed (e.g., printed, enqueued, or pushed) only once, even if it is reachable through multiple paths.\n3. To terminate the algorithm: the while loop ends only when the queue (BFS) or stack (DFS) becomes empty, which requires that no new unvisited nodes are being added indefinitely.\n\nIn BFS the mark is set at enqueue time; in iterative DFS at pop time; in recursive DFS at the start of the call. But the principle is the same: each node is visited exactly once.",
          tags: ["BFS", "DFS", "Visited"],
          ref: "Lecture 9 — BFS and DFS",
          likely: "high",
        },
        {
          type: "essay",
          q: "7. Describe how BFS explores a graph, and contrast it with how DFS explores the same graph.",
          translation:
            "صف كيف يستكشف BFS الرسم البياني، وقارنه بكيفية استكشاف DFS لنفس الرسم البياني.",
          answer:
            "BFS exploration:\n- Starts from the start_node.\n- Uses a queue (FIFO).\n- First explores all neighbors of the start_node (distance 1), then all their unvisited neighbors (distance 2), and so on.\n- This produces level-by-level (breadth-first) exploration: nodes closer to the source are visited before nodes farther away.\n\nDFS exploration:\n- Starts from the start node (recursive) or pushes it onto a stack (iterative).\n- Uses a stack (LIFO) or recursion (call stack).\n- Picks one neighbor and immediately dives into it as deep as possible before backtracking.\n- This produces depth-first exploration: the algorithm goes as deep as possible along one path before returning to explore alternative branches.\n\nContrast:\n- BFS = wide and shallow: visits all nodes at distance k before any node at distance k+1.\n- DFS = narrow and deep: visits a node at distance k+1 before siblings at distance k.",
          tags: ["BFS", "DFS", "Traversal Order"],
          ref: "Lecture 9 — BFS vs DFS",
          likely: "high",
        },
        {
          type: "essay",
          q: "8. Compare the recursive DFS and the iterative DFS. What do they have in common and how do they differ?",
          translation:
            "قارن بين DFS العودي و DFS التكراري. ما المشترك بينهما وكيف يختلفان؟",
          answer:
            "Common points:\n- Both use a LIFO discipline to choose the next node to process.\n- Both mark nodes as visited to avoid re-processing.\n- Both explore the graph depth-first (go deep before backtracking).\n- Both can produce the same DFS visitation order if neighbors are pushed in reverse order in the iterative version.\n\nDifferences:\nRecursive DFS:\n- Uses the system call stack implicitly.\n- Marks a node as visited at the START of the recursive call (before exploring neighbors).\n- Each neighbor triggers a fresh recursive call DFS(neighbor).\n- Code is shorter and more readable.\n- May hit recursion-depth limits on very deep graphs.\n\nIterative DFS:\n- Uses an explicit stack data structure.\n- Marks a node as visited when it is POPPED from the stack (not when pushed).\n- A node may be pushed multiple times before being popped.\n- Neighbors are pushed in a loop, optionally in reverse order.\n- Avoids recursion-depth limits; suitable for very deep graphs.\n- Slightly more code but more control over the stack.",
          tags: ["DFS", "Recursion", "Iterative", "Comparison"],
          ref: "Lecture 9 — DFS Recursive and Iterative",
          likely: "high",
        },
        {
          type: "essay",
          q: "9. List all steps of the BFS algorithm in order and explain what each step does.",
          translation:
            "اذكر جميع خطوات خوارزمية BFS بالترتيب واشرح ماذا تفعل كل خطوة.",
          answer:
            "Step-by-step of BFS(Graph, start_node):\n\n1. create a queue Q — initialize an empty FIFO queue to hold nodes waiting to be processed.\n2. mark start_node as visited — mark the source so it is not re-added later.\n3. enqueue start_node into Q — add the source to the queue as the first node to process.\n4. while Q is not empty: — keep processing until all reachable nodes have been handled.\n5. current_node = dequeue(Q) — remove and take the front node of the queue.\n6. for each neighbor of current_node: — iterate over all adjacent nodes of current_node.\n7. if neighbor is not visited: — skip neighbors that have already been discovered.\n8. mark neighbor as visited — mark the neighbor so it will not be enqueued again.\n9. enqueue neighbor into Q — add the neighbor to the queue for later processing.\n\nThe loop repeats from step 5 until the queue is empty.",
          tags: ["BFS", "Steps"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          type: "essay",
          q: "10. List all steps of the iterative DFS algorithm in order and explain what each step does.",
          translation:
            "اذكر جميع خطوات خوارزمية DFS التكرارية بالترتيب واشرح ماذا تفعل كل خطوة.",
          answer:
            "Step-by-step of DFS_iterative(start):\n\n1. create an empty stack — initialize an empty LIFO stack to hold nodes to process.\n2. push start node onto stack — add the source as the first node to consider.\n3. create an empty set for visited nodes — to track which nodes have already been processed.\n4. while stack is not empty: — keep processing until no nodes remain.\n5. node = pop from stack — remove and take the top node of the stack.\n6. if node is not visited: — skip nodes that were already processed (they may have been pushed more than once).\n7. mark node as visited — record that this node has now been processed.\n8. process node (e.g., print) — do whatever the algorithm needs to do with the node.\n9. for each neighbor in node's adjacency list (in reverse order if needed): — iterate over neighbors; reverse order is used to match the recursive DFS visitation order.\n10. if neighbor is not visited: push neighbor onto stack — add unvisited neighbors for later processing.\n\nThe loop repeats from step 5 until the stack is empty.",
          tags: ["DFS", "Iterative", "Steps"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          type: "essay",
          q: "11. Why does the iterative DFS push neighbors in reverse order 'if needed'? Explain with an example.",
          translation:
            "لماذا يدفع DFS التكراري الجيران بترتيب عكسي 'عند الحاجة'؟ اشرح بمثال.",
          answer:
            "Reason: The stack is LIFO, so the LAST neighbor pushed is the FIRST one popped.\n\nSuppose a node has neighbors [A, B, C] and we want to visit them in the order A, then B, then C (matching the recursive DFS that processes them left-to-right).\n- If we push them in original order: push A, push B, push C → top of stack is C → pop order is C, B, A.\n- This visits C first, which does NOT match the recursive DFS.\n\nTo fix this, push them in reverse order: push C, push B, push A → top of stack is A → pop order is A, B, C.\nNow the iterative DFS visits neighbors in the same order as the recursive DFS.\n\nThe phrase 'if needed' in the pseudocode means: reverse the neighbor list ONLY when you want the iterative DFS to match the recursive DFS visitation order. Otherwise the algorithm is still correct, just the order of neighbor visitation differs.",
          tags: ["DFS", "Stack", "Reverse Order"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "medium",
        },
        {
          type: "essay",
          q: "12. What was covered in the previous lecture and what is covered in this lecture (Lecture 9)?",
          translation:
            "ماذا تم تغطيته في المحاضرة السابقة وماذا يتم تغطيته في هذه المحاضرة (المحاضرة 9)؟",
          answer:
            "Previous lecture (recap):\n- MST (Minimum Spanning Tree)\n- Shortest path\n\nThis lecture (Lecture 9):\n- BFS (Breadth-First Search) — a graph traversal algorithm using a queue.\n- DFS (Depth-First Search) — a graph traversal algorithm, presented in two forms:\n  - Recursive DFS (uses the call stack implicitly).\n  - Iterative DFS (uses an explicit stack).\n\nThe focus of this lecture is on the pseudocode and the data-structure choices (queue for BFS, stack for DFS) of these two fundamental graph traversal algorithms.",
          tags: ["Lecture Overview"],
          ref: "Lecture 9 — Overview",
          likely: "medium",
        },
        {
          type: "computational",
          q: "1. Trace BFS on the following graph starting from node A. Show the order in which nodes are visited and the queue contents at each step. Graph: A is connected to B and C; B is connected to A, D, E; C is connected to A, F; D is connected to B; E is connected to B, F; F is connected to C, E. Assume neighbors are listed in alphabetical order.",
          translation:
            "تتبَّع BFS على الرسم البياني التالي بدءًا من العقدة A. اعرض ترتيب زيارة العقد ومحتويات الطابور في كل خطوة. الرسم: A متصل بـ B و C؛ B متصل بـ A و D و E؛ C متصل بـ A و F؛ D متصل بـ B؛ E متصل بـ B و F؛ F متصل بـ C و E. افترض أن الجيران يُذكرون بالترتيب الأبجدي.",
          answer:
            "Given: Graph as described, start_node = A, neighbors in alphabetical order.\nFormula: BFS(Graph, start_node) — use a queue Q, mark visited at enqueue time.\nSteps:\n1. Q = [], visited = {} → create Q.\n2. mark A visited, enqueue A. Q = [A], visited = {A}.\n3. dequeue A. Neighbors of A: B, C. B not visited → mark B, enqueue B. C not visited → mark C, enqueue C. Q = [B, C], visited = {A, B, C}.\n4. dequeue B. Neighbors of B: A, D, E. A visited (skip). D not visited → mark D, enqueue D. E not visited → mark E, enqueue E. Q = [C, D, E], visited = {A, B, C, D, E}.\n5. dequeue C. Neighbors of C: A, F. A visited (skip). F not visited → mark F, enqueue F. Q = [D, E, F], visited = {A, B, C, D, E, F}.\n6. dequeue D. Neighbors of D: B. B visited (skip). Q = [E, F].\n7. dequeue E. Neighbors of E: B, F. Both visited (skip). Q = [F].\n8. dequeue F. Neighbors of F: C, E. Both visited (skip). Q = [].\n9. Q is empty. Done.\nAnswer: Visitation order = A, B, C, D, E, F. (Level-by-level: A is level 0; B and C are level 1; D, E, F are level 2.)",
          tags: ["BFS", "Trace"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "high",
        },
        {
          type: "computational",
          q: "2. Trace the recursive DFS on the same graph as Question 1, starting from node A. Show the order in which nodes are visited and the recursion call stack at each step. Assume neighbors are processed in alphabetical order. Graph: A→B,C; B→A,D,E; C→A,F; D→B; E→B,F; F→C,E.",
          translation:
            "تتبَّع DFS العودي على نفس الرسم البياني كالسؤال الأول، بدءًا من العقدة A. اعرض ترتيب زيارة العقد ومحتوى call stack في كل خطوة. افترض معالجة الجيران بالترتيب الأبجدي.",
          answer:
            "Given: Same graph, start node A, recursive DFS, neighbors in alphabetical order.\nFormula: DFS(node) — mark visited at call entry, recurse on unvisited neighbors in order.\nSteps:\n1. DFS(A): mark A visited. Neighbors: B, C.\n   - DFS(B): mark B visited. Neighbors: A, D, E. A visited.\n     - DFS(D): mark D visited. Neighbors: B. B visited. Return.\n     - DFS(E): mark E visited. Neighbors: B, F. B visited.\n       - DFS(F): mark F visited. Neighbors: C, E. E visited.\n         - DFS(C): mark C visited. Neighbors: A, F. Both visited. Return.\n         Return from F.\n       Return from E.\n     Return from B.\n   - DFS(C): C already visited. Return.\n   Return from A.\n\nCall stack evolution (top = active call):\n[A] → [A,B] → [A,B,D] → [A,B] → [A,B,E] → [A,B,E,F] → [A,B,E,F,C] → [A,B,E,F] → [A,B,E] → [A,B] → [A] → done.\n\nAnswer: Visitation order = A, B, D, E, F, C. (Goes deep: A→B→D, backtracks, B→E→F→C.)",
          tags: ["DFS", "Trace", "Recursion"],
          ref: "Lecture 9 — DFS Recursive",
          likely: "high",
        },
        {
          type: "computational",
          q: "3. Trace the iterative DFS on the same graph as Question 1, starting from node A. Show the order in which nodes are processed (printed) and the stack contents after each pop/push. Push neighbors in alphabetical order (do NOT reverse). Graph: A→B,C; B→A,D,E; C→A,F; D→B; E→B,F; F→C,E.",
          translation:
            "تتبَّع DFS التكراري على نفس الرسم البياني، بدءًا من العقدة A. اعرض ترتيب معالجة العقد (طباعتها) ومحتوى الـ stack بعد كل pop/push. ادفع الجيران بالترتيب الأبجدي (بدون عكس).",
          answer:
            "Given: Same graph, start A, iterative DFS, push neighbors in original (alphabetical) order, mark visited at pop time.\nFormula: DFS_iterative(start) — stack LIFO, mark visited at pop.\nSteps:\n1. stack = [A], visited = {}.\n2. pop A. Not visited → mark A visited, print A. Neighbors B, C (in order). Push B, push C. stack = [B, C], visited = {A}.\n3. pop C. Not visited → mark C visited, print C. Neighbors A, F. A visited. Push F. stack = [B, F], visited = {A, C}.\n4. pop F. Not visited → mark F visited, print F. Neighbors C, E. C visited. Push E. stack = [B, E], visited = {A, C, F}.\n5. pop E. Not visited → mark E visited, print E. Neighbors B, F. B not visited → push B. F visited. stack = [B, B], visited = {A, C, F, E}.\n6. pop B. Not visited → mark B visited, print B. Neighbors A, D, E. A visited. Push D. E visited. stack = [B, D], visited = {A, C, F, E, B}.\n7. pop D. Not visited → mark D visited, print D. Neighbors B. B visited. stack = [B], visited = {A, C, F, E, B, D}.\n8. pop B. Already visited → skip. stack = [].\n9. Stack empty. Done.\nAnswer: Print order = A, C, F, E, B, D. (Note: this differs from recursive DFS because we did NOT reverse the neighbor order.)",
          tags: ["DFS", "Trace", "Iterative"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          type: "computational",
          q: "4. Using the same graph as Question 1, trace the iterative DFS starting from node A, but this time push neighbors in REVERSE alphabetical order. Show the visitation order. Graph: A→B,C; B→A,D,E; C→A,F; D→B; E→B,F; F→C,E.",
          translation:
            "بنفس الرسم البياني، تتبَّع DFS التكراري بدءًا من A، لكن هذه المرة ادفع الجيران بترتيب أبجدي عكسي. اعرض ترتيب الزيارة.",
          answer:
            "Given: Same graph, start A, iterative DFS, push neighbors in REVERSE alphabetical order, mark visited at pop time.\nFormula: DFS_iterative(start) — reverse neighbors to match recursive DFS order.\nSteps:\n1. stack = [A], visited = {}.\n2. pop A. Mark visited, print A. Neighbors B, C → reverse → push C, push B. stack = [C, B], visited = {A}.\n3. pop B. Mark visited, print B. Neighbors A, D, E → reverse → push E, push D, push A (A not visited at push time so it is pushed; will be skipped at pop). stack = [C, E, D, A], visited = {A, B}.\n4. pop A. Already visited → skip. stack = [C, E, D].\n5. pop D. Mark visited, print D. Neighbors B → push B. stack = [C, E, B], visited = {A, B, D}.\n6. pop B. Already visited → skip. stack = [C, E].\n7. pop E. Mark visited, print E. Neighbors B, F → reverse → push F, push B. stack = [C, F, B], visited = {A, B, D, E}.\n8. pop B. Already visited → skip. stack = [C, F].\n9. pop F. Mark visited, print F. Neighbors C, E → reverse → push E, push C. stack = [C, E, C], visited = {A, B, D, E, F}.\n10. pop C. Mark visited, print C. Neighbors A, F → both visited, nothing pushed. stack = [C, E].\n11. pop E. Already visited → skip. stack = [C].\n12. pop C. Already visited → skip. stack = [].\n13. Stack empty. Done.\nAnswer: Print order = A, B, D, E, F, C. (This matches the recursive DFS order from Question 2.)",
          tags: ["DFS", "Trace", "Reverse Order"],
          ref: "Lecture 9 — DFS Iterative",
          likely: "high",
        },
        {
          type: "computational",
          q: "5. Consider a graph with 4 nodes: 1, 2, 3, 4. Edges: 1-2, 1-3, 2-4, 3-4 (undirected). Trace BFS starting from node 1 (neighbors in ascending order). Show the queue contents and the final visitation order.",
          translation:
            "اعتبر رسمًا بيانيًا من 4 عقد: 1، 2، 3، 4. الحواف: 1-2، 1-3، 2-4، 3-4 (غير موجه). تتبَّع BFS بدءًا من العقدة 1 (الجيران بالترتيب التصاعدي). اعرض محتويات الطابور وترتيب الزيارة النهائي.",
          answer:
            "Given: 4 nodes, edges 1-2, 1-3, 2-4, 3-4 (undirected), start = 1, neighbors in ascending order.\nAdjacency: 1→{2,3}, 2→{1,4}, 3→{1,4}, 4→{2,3}.\nFormula: BFS(Graph, start_node) — queue FIFO, mark visited at enqueue.\nSteps:\n1. Q = [], visited = {}.\n2. mark 1 visited, enqueue 1. Q = [1], visited = {1}.\n3. dequeue 1. Neighbors: 2, 3. 2 not visited → mark, enqueue. 3 not visited → mark, enqueue. Q = [2, 3], visited = {1, 2, 3}.\n4. dequeue 2. Neighbors: 1, 4. 1 visited. 4 not visited → mark, enqueue. Q = [3, 4], visited = {1, 2, 3, 4}.\n5. dequeue 3. Neighbors: 1, 4. Both visited. Q = [4].\n6. dequeue 4. Neighbors: 2, 3. Both visited. Q = [].\n7. Q empty. Done.\nAnswer: Visitation order = 1, 2, 3, 4. Levels: 1 is level 0; 2 and 3 are level 1; 4 is level 2.",
          tags: ["BFS", "Trace"],
          ref: "Lecture 9 — BFS Algorithm",
          likely: "medium",
        },
      ],
    },
  ],
  // ═══════════════════════════════════════════════════════════════════
  //  تحديد محتوى الميد والفاينل (examSections)
  //  الميد: من المحاضرة 1 لغاية المحاضرة 7 (حسب إعلان الشلة)
  // ═══════════════════════════════════════════════════════════════════
  examSections: {
    showLectures: false,
    showOthers: true,

    midterm: {
      mode: "separate",
      open: true,
      title: "محتوى الميد",
      icon: "📝",
      notesOpen: true,
      notes: [
        "الميد من المحاضرة رقم 1 لغاية المحاضرة رقم 7",
        "تاريخ الامتحان: الثلاثاء 24 نوفمبر",
        "من الساعة 2:45 إلى 3:45",
      ],
      chapters: [],
      lectures: [
        "algorithms-lecture-01", // مقدمة في تحليل الخوارزميات
        "algorithms-lecture-02", // الترميزات المقاربة + Sorting & Searching
        "algorithms-lecture-03", // Divide and Conquer + Master Theorem
        "algorithms-lecture-04", // Graphs & Minimum Spanning Tree (MST)
        // ⚠️ ضيف هنا:
        "algorithms-lecture-05",
        "algorithms-lecture-06",
        "algorithms-lecture-07",
        // أول ما تنزل المحاضرات دي
      ],
    },
  },
});
