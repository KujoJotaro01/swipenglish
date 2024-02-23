const questions = [
    {
        question: "banana.png",
        answers: [
            {text: "Banana", correct: true},
            {text: "Apple", correct: false},
            {text: "Peach", correct: false},
            {text: "Orange", correct: false},
        ]
    },
    {
        question: "Elma",
        answers: [
            {text: "Banana", correct: false},
            {text: "Apple", correct: true},
            {text: "Peach", correct: false},
            {text: "Orange", correct: false},
        ]
    },
    {
    question: "Şeftali",
        answers: [
            {text: "Banana", correct: false},
            {text: "Apple", correct: false},
            {text: "Peach", correct: true},
            {text: "Orange", correct: false},
        ]
    },
    {
    question: "Portakal",
        answers: [
            {text: "Banana", correct: false},
            {text: "Apple", correct: false},
            {text: "Peach", correct: false},
            {text: "Orange", correct: true},
        ]
    }
];
const questionnumElement = document.getElementById("question-num");
const questionElement = document.getElementById("question");
const answerButton = document.querySelector(".answer-buttons"); //chatgpt querySelector olarak düzeltti ve çalıştı. neden bilmiyorum
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // Resmi göster
    questionElement.innerHTML = `<img src="${currentQuestion.question}" alt="Question Image">`;
    questionnumElement.innerHTML = "Question " + questionNo + "/10";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Change single quotes to backticks
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
