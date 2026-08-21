// ==========================================
// EDUTUBE - LEARNING PATHS
// ==========================================

// ==========================================
// LEARNING PATH DATA
// ==========================================

const learningPaths = {

    // 1. WEB DEVELOPMENT
    web: {
        title: "Web Development",
        icon: "💻",
        description:
            "Learn HTML, CSS and JavaScript and build modern responsive websites.",
        level: "Beginner → Advanced",

        lessons: [
            {
                id: 1,
                title: "HTML Fundamentals",
                description: "Learn the structure of modern web pages.",
                duration: "25 min"
            },
            {
                id: 2,
                title: "CSS Fundamentals",
                description: "Learn colors, spacing, typography and layouts.",
                duration: "35 min"
            },
            {
                id: 3,
                title: "Responsive Web Design",
                description: "Build websites that work on mobile, tablet and desktop.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "JavaScript Basics",
                description: "Learn variables, functions, conditions and loops.",
                duration: "45 min"
            },
            {
                id: 5,
                title: "DOM Manipulation",
                description: "Learn how JavaScript interacts with HTML.",
                duration: "50 min"
            },
            {
                id: 6,
                title: "Frontend Project",
                description: "Build a complete responsive website.",
                duration: "60 min"
            }
        ]
    },


    // 2. UI UX DESIGN
    uiux: {
        title: "UI/UX Design",
        icon: "🎨",
        description:
            "Learn how to design beautiful and user-friendly digital experiences.",
        level: "Beginner → Advanced",

        lessons: [
            {
                id: 1,
                title: "Introduction to UI/UX",
                description: "Understand the difference between UI and UX.",
                duration: "25 min"
            },
            {
                id: 2,
                title: "Design Principles",
                description: "Learn balance, contrast, alignment and hierarchy.",
                duration: "30 min"
            },
            {
                id: 3,
                title: "Wireframing",
                description: "Create low-fidelity website and app wireframes.",
                duration: "35 min"
            },
            {
                id: 4,
                title: "Figma Fundamentals",
                description: "Learn the basic tools and features of Figma.",
                duration: "40 min"
            },
            {
                id: 5,
                title: "Prototype Design",
                description: "Create interactive prototypes.",
                duration: "45 min"
            },
            {
                id: 6,
                title: "UI/UX Final Project",
                description: "Design a complete mobile or web application.",
                duration: "60 min"
            }
        ]
    },


    // 3. PYTHON
    python: {
        title: "Python Programming",
        icon: "🐍",
        description:
            "Start learning Python programming from the basics.",
        level: "Beginner → Intermediate",

        lessons: [
            {
                id: 1,
                title: "Python Introduction",
                description: "Understand Python and its applications.",
                duration: "20 min"
            },
            {
                id: 2,
                title: "Variables & Data Types",
                description: "Learn strings, numbers, lists and dictionaries.",
                duration: "30 min"
            },
            {
                id: 3,
                title: "Conditions & Loops",
                description: "Learn if statements and loops.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Functions",
                description: "Create reusable Python functions.",
                duration: "35 min"
            },
            {
                id: 5,
                title: "Object Oriented Programming",
                description: "Understand classes and objects.",
                duration: "45 min"
            },
            {
                id: 6,
                title: "Python Mini Project",
                description: "Build your first Python application.",
                duration: "60 min"
            }
        ]
    },


    // 4. REACT
    react: {
        title: "React Development",
        icon: "⚛️",
        description:
            "Learn React and build modern interactive web applications.",
        level: "Intermediate → Advanced",

        lessons: [
            {
                id: 1,
                title: "JavaScript Fundamentals",
                description: "Review the JavaScript concepts required for React.",
                duration: "40 min"
            },
            {
                id: 2,
                title: "React Introduction",
                description: "Understand React and component-based development.",
                duration: "30 min"
            },
            {
                id: 3,
                title: "JSX & Components",
                description: "Create reusable React components.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Props & State",
                description: "Learn how data moves through React applications.",
                duration: "45 min"
            },
            {
                id: 5,
                title: "React Hooks",
                description: "Learn useState, useEffect and other hooks.",
                duration: "50 min"
            },
            {
                id: 6,
                title: "React Project",
                description: "Build a complete React application.",
                duration: "90 min"
            }
        ]
    },


    // 5. JAVA
    java: {
        title: "Java Programming",
        icon: "☕",
        description:
            "Learn Java programming and object-oriented programming concepts.",
        level: "Beginner → Advanced",

        lessons: [
            {
                id: 1,
                title: "Java Introduction",
                description: "Understand Java and set up the development environment.",
                duration: "25 min"
            },
            {
                id: 2,
                title: "Variables & Data Types",
                description: "Learn Java variables and primitive data types.",
                duration: "30 min"
            },
            {
                id: 3,
                title: "Conditions & Loops",
                description: "Learn decision making and loops.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Methods & Arrays",
                description: "Learn methods and arrays in Java.",
                duration: "40 min"
            },
            {
                id: 5,
                title: "Object Oriented Programming",
                description: "Learn classes, objects, inheritance and polymorphism.",
                duration: "60 min"
            },
            {
                id: 6,
                title: "Java Project",
                description: "Build a Java console application.",
                duration: "70 min"
            }
        ]
    },


    // 6. DATABASE
    database: {
        title: "Database & SQL",
        icon: "🗄️",
        description:
            "Learn how databases work and how to use SQL.",
        level: "Beginner → Intermediate",

        lessons: [
            {
                id: 1,
                title: "Database Fundamentals",
                description: "Understand databases and tables.",
                duration: "25 min"
            },
            {
                id: 2,
                title: "SQL Basics",
                description: "Learn SELECT, INSERT, UPDATE and DELETE.",
                duration: "35 min"
            },
            {
                id: 3,
                title: "Filtering Data",
                description: "Learn WHERE, ORDER BY and LIMIT.",
                duration: "30 min"
            },
            {
                id: 4,
                title: "SQL Joins",
                description: "Learn INNER JOIN, LEFT JOIN and relationships.",
                duration: "45 min"
            },
            {
                id: 5,
                title: "Aggregate Functions",
                description: "Learn COUNT, SUM, AVG, GROUP BY and HAVING.",
                duration: "40 min"
            },
            {
                id: 6,
                title: "SQL Project",
                description: "Create a database project using SQL.",
                duration: "60 min"
            }
        ]
    },


    // 7. DATA SCIENCE
    dataScience: {
        title: "Data Science",
        icon: "📊",
        description:
            "Learn how to analyze and visualize data using Python.",
        level: "Beginner → Advanced",

        lessons: [
            {
                id: 1,
                title: "Introduction to Data Science",
                description: "Understand data science and its applications.",
                duration: "25 min"
            },
            {
                id: 2,
                title: "Python for Data Science",
                description: "Learn Python concepts used in data analysis.",
                duration: "40 min"
            },
            {
                id: 3,
                title: "NumPy",
                description: "Learn numerical computing using NumPy.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Pandas",
                description: "Analyze and manipulate datasets using Pandas.",
                duration: "50 min"
            },
            {
                id: 5,
                title: "Data Cleaning",
                description: "Learn how to clean and prepare datasets.",
                duration: "45 min"
            },
            {
                id: 6,
                title: "Data Visualization",
                description: "Create charts and graphs from data.",
                duration: "45 min"
            },
            {
                id: 7,
                title: "Data Science Project",
                description: "Analyze a real-world dataset.",
                duration: "90 min"
            }
        ]
    },


    // 8. AI & MACHINE LEARNING
    ai: {
        title: "AI & Machine Learning",
        icon: "🤖",
        description:
            "Understand artificial intelligence and machine learning fundamentals.",
        level: "Beginner → Advanced",

        lessons: [
            {
                id: 1,
                title: "Introduction to AI",
                description: "Understand artificial intelligence.",
                duration: "30 min"
            },
            {
                id: 2,
                title: "Python for AI",
                description: "Learn Python concepts required for AI.",
                duration: "40 min"
            },
            {
                id: 3,
                title: "Machine Learning Basics",
                description: "Understand machine learning concepts.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Supervised Learning",
                description: "Learn classification and regression.",
                duration: "50 min"
            },
            {
                id: 5,
                title: "Unsupervised Learning",
                description: "Learn clustering and pattern discovery.",
                duration: "50 min"
            },
            {
                id: 6,
                title: "Model Evaluation",
                description: "Learn accuracy, precision and recall.",
                duration: "40 min"
            },
            {
                id: 7,
                title: "Machine Learning Project",
                description: "Build a beginner machine learning project.",
                duration: "90 min"
            }
        ]
    },


    // 9. MOBILE DEVELOPMENT
    mobile: {
        title: "Mobile App Development",
        icon: "📱",
        description:
            "Learn the fundamentals of building modern mobile applications.",
        level: "Beginner → Advanced",

        lessons: [
            {
                id: 1,
                title: "Mobile Development Introduction",
                description: "Understand mobile application development.",
                duration: "25 min"
            },
            {
                id: 2,
                title: "Mobile UI Design",
                description: "Learn layouts and mobile interface design.",
                duration: "35 min"
            },
            {
                id: 3,
                title: "Navigation",
                description: "Learn navigation between app screens.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Forms & User Input",
                description: "Handle user input and validation.",
                duration: "40 min"
            },
            {
                id: 5,
                title: "API Integration",
                description: "Connect mobile applications to APIs.",
                duration: "50 min"
            },
            {
                id: 6,
                title: "Mobile App Project",
                description: "Build a complete mobile application.",
                duration: "90 min"
            }
        ]
    },


    // 10. CLOUD & DEVOPS
    cloud: {
        title: "Cloud & DevOps",
        icon: "☁️",
        description:
            "Learn the fundamentals of cloud computing and DevOps.",
        level: "Intermediate → Advanced",

        lessons: [
            {
                id: 1,
                title: "Linux Fundamentals",
                description: "Learn basic Linux commands and concepts.",
                duration: "40 min"
            },
            {
                id: 2,
                title: "Git & GitHub",
                description: "Learn version control and GitHub.",
                duration: "35 min"
            },
            {
                id: 3,
                title: "Networking Basics",
                description: "Understand basic networking concepts.",
                duration: "40 min"
            },
            {
                id: 4,
                title: "Docker",
                description: "Learn containerization using Docker.",
                duration: "50 min"
            },
            {
                id: 5,
                title: "CI/CD",
                description: "Understand continuous integration and deployment.",
                duration: "45 min"
            },
            {
                id: 6,
                title: "Cloud Fundamentals",
                description: "Understand cloud computing concepts.",
                duration: "45 min"
            },
            {
                id: 7,
                title: "DevOps Project",
                description: "Create a simple deployment pipeline.",
                duration: "90 min"
            }
        ]
    }

};


// ==========================================
// DOM ELEMENTS
// ==========================================

const pathInfo =
    document.getElementById("pathInfo");

const lessonContainer =
    document.getElementById("lessonContainer");

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

const lessonCount =
    document.getElementById("lessonCount");

const continueBtn =
    document.getElementById("continueBtn");

const resetBtn =
    document.getElementById("resetBtn");


// ==========================================
// CREATE COURSE BUTTONS DYNAMICALLY
// ==========================================

const pathSelector =
    document.querySelector(".path-btn")
        ?.parentElement;

if (pathSelector) {

    pathSelector.innerHTML = "";

    Object.entries(learningPaths).forEach(
        ([key, path]) => {

            const button =
                document.createElement("button");

            button.className =
                "path-btn bg-white text-gray-700 px-5 py-2 rounded-full shadow-sm hover:bg-red-50 transition";

            button.dataset.path = key;

            button.innerHTML =
                `${path.icon} ${path.title}`;

            pathSelector.appendChild(button);

        }
    );

}


// ==========================================
// GET ALL PATH BUTTONS
// ==========================================

const pathButtons =
    document.querySelectorAll(".path-btn");


// ==========================================
// CURRENT PATH
// ==========================================

let currentPath =
    localStorage.getItem("currentPath") || "web";


// ==========================================
// GET SAVED PROGRESS
// ==========================================

function getProgress() {

    const saved =
        localStorage.getItem(
            `edutube-progress-${currentPath}`
        );

    return saved
        ? JSON.parse(saved)
        : [];

}


// ==========================================
// SAVE PROGRESS
// ==========================================

function saveProgress(progress) {

    localStorage.setItem(
        `edutube-progress-${currentPath}`,
        JSON.stringify(progress)
    );

}


// ==========================================
// RENDER PATH INFORMATION
// ==========================================

function renderPathInfo() {

    const path =
        learningPaths[currentPath];

    pathInfo.innerHTML = `

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div class="flex items-start gap-4">

                <div class="text-5xl">
                    ${path.icon}
                </div>

                <div>

                    <h2 class="text-2xl sm:text-3xl font-bold">
                        ${path.title}
                    </h2>

                    <p class="text-gray-600 mt-2 max-w-2xl">
                        ${path.description}
                    </p>

                    <div class="flex flex-wrap gap-3 mt-4">

                        <span class="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm">
                            📈 ${path.level}
                        </span>

                        <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            📚 ${path.lessons.length} Lessons
                        </span>

                    </div>

                </div>

            </div>

        </div>

    `;

}


// ==========================================
// RENDER LESSONS
// ==========================================

function renderLessons() {

    const path =
        learningPaths[currentPath];

    const progress =
        getProgress();

    lessonContainer.innerHTML = "";


    path.lessons.forEach(
        (lesson, index) => {

            const completed =
                progress.includes(lesson.id);


            const unlocked =
                index === 0 ||
                progress.includes(
                    path.lessons[index - 1].id
                );


            let status;
            let buttonText;
            let cardClass;


            if (completed) {

                status = "✅";

                buttonText =
                    "Completed";

                cardClass =
                    "border-green-200 bg-green-50";

            }

            else if (unlocked) {

                status = "🔵";

                buttonText =
                    "Start Lesson";

                cardClass =
                    "border-blue-200 bg-blue-50";

            }

            else {

                status = "🔒";

                buttonText =
                    "Locked";

                cardClass =
                    "border-gray-200 bg-gray-50";

            }


            const card =
                document.createElement("div");


            card.className =
                `${cardClass} border rounded-2xl p-5 hover:shadow-md transition`;


            card.innerHTML = `

                <div class="flex flex-col sm:flex-row sm:items-center gap-4">

                    <div class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl flex-shrink-0">

                        ${status}

                    </div>


                    <div class="flex-1">

                        <p class="text-xs text-gray-500 font-semibold">

                            LESSON ${lesson.id}

                        </p>

                        <h3 class="text-lg font-bold mt-1">

                            ${lesson.title}

                        </h3>

                        <p class="text-sm text-gray-600 mt-1">

                            ${lesson.description}

                        </p>

                        <p class="text-sm text-gray-500 mt-2">

                            ⏱️ ${lesson.duration}

                        </p>

                    </div>


                    <button

                        class="lesson-btn px-5 py-2.5 rounded-xl font-semibold text-sm

                        ${
                            completed
                                ? "bg-green-600 text-white"
                                : unlocked
                                ? "bg-red-600 hover:bg-red-700 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }

                        "

                        data-id="${lesson.id}"

                        ${!unlocked ? "disabled" : ""}

                    >

                        ${buttonText}

                    </button>

                </div>

            `;


            lessonContainer.appendChild(card);

        }
    );


    addLessonEvents();

}


// ==========================================
// LESSON BUTTON EVENTS
// ==========================================

function addLessonEvents() {

    document
        .querySelectorAll(".lesson-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    completeLesson(id);

                }
            );

        });

}


// ==========================================
// COMPLETE LESSON
// ==========================================

function completeLesson(id) {

    let progress =
        getProgress();


    if (!progress.includes(id)) {

        progress.push(id);

        saveProgress(progress);

    }


    updateUI();


    const path =
        learningPaths[currentPath];


    const nextLesson =
        path.lessons.find(
            lesson =>
                !progress.includes(lesson.id)
        );


    if (nextLesson) {

        alert(
            `🎉 Lesson completed!\n\nNext lesson: ${nextLesson.title}`
        );

    }

    else {

        alert(
            `🏆 Congratulations!\n\nYou completed ${path.title}!`
        );

    }

}


// ==========================================
// UPDATE PROGRESS
// ==========================================

function updateProgress() {

    const path =
        learningPaths[currentPath];

    const progress =
        getProgress();


    const completed =
        progress.length;

    const total =
        path.lessons.length;


    const percentage =
        Math.round(
            (completed / total) * 100
        );


    progressBar.style.width =
        `${percentage}%`;


    progressText.textContent =
        `${percentage}%`;


    lessonCount.textContent =
        `${completed} of ${total} lessons completed`;


    if (percentage === 100) {

        continueBtn.textContent =
            "🎉 Course Completed";

        continueBtn.className =
            "bg-green-600 text-white px-6 py-3 rounded-xl font-semibold";

    }

    else {

        continueBtn.textContent =
            "▶ Continue Learning";

        continueBtn.className =
            "bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold";

    }

}


// ==========================================
// CONTINUE LEARNING
// ==========================================

continueBtn.addEventListener(
    "click",
    () => {

        const path =
            learningPaths[currentPath];

        const progress =
            getProgress();


        const nextLesson =
            path.lessons.find(
                lesson =>
                    !progress.includes(lesson.id)
            );


        if (!nextLesson) {

            alert(
                "🏆 You completed this course!"
            );

            return;

        }


        const button =
            document.querySelector(
                `.lesson-btn[data-id="${nextLesson.id}"]`
            );


        if (button) {

            button.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }
);


// ==========================================
// RESET CURRENT COURSE
// ==========================================

resetBtn.addEventListener(
    "click",
    () => {

        const confirmReset =
            confirm(
                "Reset your progress for this course?"
            );


        if (!confirmReset) return;


        localStorage.removeItem(
            `edutube-progress-${currentPath}`
        );


        updateUI();

    }
);


// ==========================================
// CHANGE COURSE
// ==========================================

function attachPathEvents() {

    document
        .querySelectorAll(".path-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentPath =
                        button.dataset.path;


                    localStorage.setItem(
                        "currentPath",
                        currentPath
                    );


                    updateButtonStyles();

                    updateUI();

                }
            );

        });

}


// ==========================================
// BUTTON STYLES
// ==========================================

function updateButtonStyles() {

    document
        .querySelectorAll(".path-btn")
        .forEach(button => {

            if (
                button.dataset.path ===
                currentPath
            ) {

                button.classList.remove(
                    "bg-white",
                    "text-gray-700"
                );

                button.classList.add(
                    "bg-red-600",
                    "text-white"
                );

            }

            else {

                button.classList.remove(
                    "bg-red-600",
                    "text-white"
                );

                button.classList.add(
                    "bg-white",
                    "text-gray-700"
                );

            }

        });

}


// ==========================================
// UPDATE UI
// ==========================================

function updateUI() {

    renderPathInfo();

    renderLessons();

    updateProgress();

    updateButtonStyles();

}


// ==========================================
// INITIALIZE
// ==========================================

attachPathEvents();

updateUI();