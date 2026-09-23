const examples = {
    python: {
        title: "Python",
        description:
        "A programming language used for programming, data science, automation and many other things."
    },

    linux: {
        title: "Linux",
        description:
        "A family of operating systems built using the Linux kernel and other open source software."
    },

    vlc: {
        title: "VLC",
        description:
        "A media player that can play many different audio and video formats."
    },

    blender: {
        title: "Blender",
        description:
        "Software used for 3D modelling, animation, rendering and other creative work."
    },

    gimp: {
        title: "GIMP",
        description:
        "An image editing program used for editing and creating images."
    },

    libreoffice: {
        title: "LibreOffice",
        description:
        "An office suite with programs for documents, spreadsheets and presentations."
    }
};


const exampleButtons = document.querySelectorAll(".example-button");

const exampleTitle = document.getElementById("exampleTitle");

const exampleDescription =
document.getElementById("exampleDescription");


exampleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const example = examples[button.dataset.example];

        exampleButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        exampleTitle.textContent = example.title;

        exampleDescription.textContent =
        example.description;

    });

});


const questions = [

    {
        question: "What makes software open source?",

        answers: [
            "It is always free",
            "Its source code is available under an open source license",
            "It only works on Linux",
            "It is made by a large company"
        ],

        correct: 1
    },


{
    question: "Can open source software be paid software?",

    answers: [
        "No",
        "Only if it is not popular",
        "Yes",
        "Only for companies"
    ],

    correct: 2
},


{
    question: "Why do open source licenses matter?",

    answers: [
        "They explain what users are allowed to do with the software",
        "They make the software run faster",
        "They are only needed for games",
        "They decide which computer you must use"
    ],

    correct: 0
}

];


let currentQuestion = 0;

let score = 0;

let answered = false;


const questionNumber =
document.getElementById("questionNumber");

const progressBar =
document.getElementById("progressBar");

const questionText =
document.getElementById("questionText");

const answersContainer =
document.getElementById("answers");

const quizFeedback =
document.getElementById("quizFeedback");

const nextButton =
document.getElementById("nextButton");

const quizCard =
document.querySelector(".quiz-card");

const quizResult =
document.getElementById("quizResult");

const scoreElement =
document.getElementById("score");

const restartButton =
document.getElementById("restartButton");


function loadQuestion() {

    const question = questions[currentQuestion];

    answered = false;


    questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;


    progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;


    questionText.textContent =
    question.question;


    answersContainer.innerHTML = "";


    quizFeedback.textContent = "";


    nextButton.classList.add("hidden");


    question.answers.forEach((answer, index) => {

        const button =
        document.createElement("button");

        button.className = "answer";

        button.textContent = answer;


        button.addEventListener("click", () => {

            selectAnswer(index, button);

        });


        answersContainer.appendChild(button);

    });

}


function selectAnswer(index, selectedButton) {

    if (answered) {
        return;
    }


    answered = true;


    const question = questions[currentQuestion];


    const answerButtons =
    document.querySelectorAll(".answer");


    answerButtons.forEach((button, buttonIndex) => {

        button.disabled = true;


        if (buttonIndex === question.correct) {

            button.classList.add("correct");

        }

    });


    if (index === question.correct) {

        score++;

        quizFeedback.textContent =
        "Correct.";

    } else {

        selectedButton.classList.add("wrong");

        quizFeedback.textContent =
        "Not quite. The correct answer is highlighted.";

    }


    if (currentQuestion < questions.length - 1) {

        nextButton.textContent =
        "Next question";

    } else {

        nextButton.textContent =
        "See result";

    }


    nextButton.classList.remove("hidden");

}


nextButton.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    quizCard.classList.add("hidden");

    quizResult.classList.remove("hidden");

    scoreElement.textContent = score;

}


restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    quizResult.classList.add("hidden");

    quizCard.classList.remove("hidden");

    loadQuestion();

});


loadQuestion();
