console.log("Quiz script connected");

// Get the hamburger button
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
}


const questions = [

    [
        "Which keyword is used to declare a block-scoped variable in JavaScript?",
        "var",
        "let",
        "variable",
        "define",
        "let"
    ],

    [
        "Which symbol is used for a single-line comment in JavaScript?",
        "//",
        "/*",
        "<!--",
        "#",
        "//"
    ],

    [
        "Which method is used to add an item to the end of an array?",
        "pop()",
        "push()",
        "shift()",
        "slice()",
        "push()"
    ],

    [
        "Which property gives the number of items in an array?",
        "size",
        "count",
        "length",
        "items",
        "length"
    ],

    [
        "Which method is commonly used to select an HTML element by its id?",
        "getElementById()",
        "getElement()",
        "selectById()",
        "findId()",
        "getElementById()"
    ]

];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";


const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const options = document.getElementById("options");
const scoreText = document.getElementById("score-text");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");
const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");
const finalScore = document.getElementById("final-score");

function showQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = "Question " + (currentQuestion + 1) +" of " + questions.length;
    questionText.textContent = question[0];
    options.innerHTML = "";

    for (let i = 1; i <= 4; i++) {
        const button = document.createElement("button");
        button.textContent = question[i];
        button.className =
            "w-full text-left px-4 py-3 border border-gray-200 rounded-lg " +
            "hover:border-indigo-600 hover:bg-indigo-50";

        button.addEventListener("click", function (event) {
            selectedAnswer = event.target.textContent;
            const allOptions = document.querySelectorAll("#options button");

            for (let j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove(
                    "bg-indigo-100",
                    "border-indigo-600",
                    "text-indigo-600"
                );
            }
            event.target.classList.add(
                "bg-indigo-100",
                "border-indigo-600",
                "text-indigo-600"
            );
        });
        options.appendChild(button);
    }
    previousBtn.disabled =
        currentQuestion === 0;
    previousBtn.classList.toggle(
        "opacity-50",
        currentQuestion === 0
    );
    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent =
            "Finish";
    } else {
        nextBtn.textContent =
            "Next";
    }
    scoreText.textContent =
        "Score: " + score;

}

function nextQuestion() {
    if (selectedAnswer !== "") {
        if (
            selectedAnswer ===
            questions[currentQuestion][5]
        ) 
        {
            score++;
        }
        selectedAnswer = "";
    }

    if (
        currentQuestion < questions.length - 1
    ) {
        currentQuestion++;
        showQuestion();
    } else {
        quizCard.classList.add("hidden");
        resultCard.classList.remove("hidden");
        finalScore.textContent = score + " / " + questions.length;
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedAnswer = "";
        showQuestion();
    }
}

function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = "";
    resultCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    showQuestion();
}

if (nextBtn && previousBtn && retryBtn && quizCard && resultCard) {
    nextBtn.addEventListener("click", nextQuestion);
    previousBtn.addEventListener("click", previousQuestion);
    retryBtn.addEventListener("click", retryQuiz);

    showQuestion();
}



const themeBtns = document.querySelectorAll("#theme-toggle, #theme-toggle-mobile");

const applyTheme = (isDark) => {
    document.body.classList.toggle("bg-gray-900", isDark);
    document.body.classList.toggle("text-white", isDark);
    document.body.classList.toggle("bg-gray-50", !isDark);
    document.body.classList.toggle("text-gray-800", !isDark);

    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("bg-gray-900", isDark);
        nav.classList.toggle("bg-white", !isDark);
    }
};

const isDark = localStorage.getItem("theme") === "dark";
applyTheme(isDark);

themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dark = !document.body.classList.contains("bg-gray-900");
        applyTheme(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    });
});