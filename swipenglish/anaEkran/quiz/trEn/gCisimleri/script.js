const questions = [
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/ayB.webp",
        answers: [
            {text: "Earth", word: "/swipenglish/sourceFiles/gCisimleriSound/dunya.mp3", correct: false},
            {text: "Moon", word: "", correct: true},
            {text: "Sun", word: "/swipenglish/sourceFiles/gCisimleriSound/gunes.mp3", correct: false},
            {text: "Jupiter", word: "/swipenglish/sourceFiles/gCisimleriSound/jupiter.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/dunyaB.webp",
        answers: [
            {text: "Earth", word: "/swipenglish/sourceFiles/gCisimleriSound/dunya.mp3", correct: true},
            {text: "Moon", word: "", correct: false},
            {text: "Sun", word: "/swipenglish/sourceFiles/gCisimleriSound/gunes.mp3", correct: false},
            {text: "Jupiter", word: "/swipenglish/sourceFiles/gCisimleriSound/jupiter.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/jupiterB.webp",
        answers: [
            {text: "Earth", word: "/swipenglish/sourceFiles/gCisimleriSound/dunya.mp3", correct: false},
            {text: "Moon", word: "", correct: false},
            {text: "Sun", word: "/swipenglish/sourceFiles/gCisimleriSound/gunes.mp3", correct: false},
            {text: "Jupiter", word: "/swipenglish/sourceFiles/gCisimleriSound/jupiter.mp3", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/gunesB.webp",
        answers: [
            {text: "Earth", word: "/swipenglish/sourceFiles/gCisimleriSound/dunya.mp3", correct: false},
            {text: "Moon", word: "", correct: false},
            {text: "Sun", word: "/swipenglish/sourceFiles/gCisimleriSound/gunes.mp3", correct: true},
            {text: "Jupiter", word: "/swipenglish/sourceFiles/gCisimleriSound/jupiter.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/mars.webp",
        answers: [
            {text: "Mars", word: "/swipenglish/sourceFiles/gCisimleriSound/mars.mp3", correct: true},
            {text: "Mercury", word: "/swipenglish/sourceFiles/gCisimleriSound/merkur.mp3", correct: false},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: false},
            {text: "Saturn", word: "/swipenglish/sourceFiles/gCisimleriSound/saturn.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/merkurB.webp",
        answers: [
            {text: "Mars", word: "/swipenglish/sourceFiles/gCisimleriSound/mars.mp3", correct: false},
            {text: "Mercury", word: "/swipenglish/sourceFiles/gCisimleriSound/merkur.mp3", correct: true},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: false},
            {text: "Saturn", word: "/swipenglish/sourceFiles/gCisimleriSound/saturn.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/neptunB.webp",
        answers: [
            {text: "Mars", word: "/swipenglish/sourceFiles/gCisimleriSound/mars.mp3", correct: false},
            {text: "Mercury", word: "/swipenglish/sourceFiles/gCisimleriSound/merkur.mp3", correct: false},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: true},
            {text: "Saturn", word: "/swipenglish/sourceFiles/gCisimleriSound/saturn.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/saturnB.webp",
        answers: [
            {text: "Mars", word: "/swipenglish/sourceFiles/gCisimleriSound/mars.mp3", correct: false},
            {text: "Mercury", word: "/swipenglish/sourceFiles/gCisimleriSound/merkur.mp3", correct: false},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: false},
            {text: "Saturn", word: "/swipenglish/sourceFiles/gCisimleriSound/saturn.mp3", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/uranusB.webp",
        answers: [
            {text: "Mars", word: "/swipenglish/sourceFiles/gCisimleriSound/mars.mp3", correct: false},
            {text: "Uranus", word: "/swipenglish/sourceFiles/gCisimleriSound/uranus.mp3", correct: true},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: false},
            {text: "Venus", word: "/swipenglish/sourceFiles/gCisimleriSound/venus.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/venusB.webp",
        answers: [
            {text: "Mars", word: "/swipenglish/sourceFiles/gCisimleriSound/mars.mp3", correct: false},
            {text: "Uranus", word: "/swipenglish/sourceFiles/gCisimleriSound/uranus.mp3", correct: false},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: false},
            {text: "Venus", word: "/swipenglish/sourceFiles/gCisimleriSound/venus.mp3", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/gCisimleriImages/plutoB.webp",
        answers: [
            {text: "Pluto", word: "", correct: true},
            {text: "Uranus", word: "/swipenglish/sourceFiles/gCisimleriSound/uranus.mp3", correct: false},
            {text: "Neptune", word: "/swipenglish/sourceFiles/gCisimleriSound/neptun.mp3", correct: false},
            {text: "Venus", word: "/swipenglish/sourceFiles/gCisimleriSound/venus.mp3", correct: false},
        ]
    },

    // Diğer sorular...
];

const questionnumElement = document.getElementById("question-num");
const questionElement = document.getElementById("question");
const answerButtonContainer = document.querySelector(".answer-buttons"); 
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
    questionnumElement.innerHTML = "Question " + questionNo + "/" + questions.length;

    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement("button");
        answerButton.innerHTML = answer.text;
        answerButton.classList.add("btn");
        
        const audioButton = document.createElement("button");
        audioButton.innerHTML = "<img src='/swipenglish/sourceFiles/sound.png' alt='Audio Icon'>";
        audioButton.classList.add("audio-btn");

        const audio = new Audio(answer.word);
        
        audioButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Butona tıklandığında answer butonuna tıklanmaması için
            audio.play();
        });
        
        answerButton.appendChild(audioButton);
        answerButtonContainer.appendChild(answerButton);

        if(answer.correct){
            answerButton.dataset.correct = answer.correct;
        }
        
        answerButton.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtonContainer.firstChild){
        answerButtonContainer.removeChild(answerButtonContainer.firstChild);
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
    Array.from(answerButtonContainer.children).forEach(button => {
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
