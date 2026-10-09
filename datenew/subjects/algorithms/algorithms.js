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
      id: "lec-02",
      pdf: "datenew/subjects/algorithms/lectures/Lecture 2.pdf",
      pdf2: "datenew/subjects/algorithms/questions/Questions on each lecture/CS311_Lecture1_Intro_Questions.pdf",
      nots: "سوف يتم اضافة اسئلة الخاص بي المحاضرة دي قريبا.",

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
      t: "المحاضرة 3 — استراتيجية Divide and Conquer ومبرهنة الماستر",
      d: "تطبيق استراتيجية فرق تسد، خوارزمية Merge Sort، وحل العلاقات التكرارية باستخدام Master Theorem.",
      id: "lec-03",
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
