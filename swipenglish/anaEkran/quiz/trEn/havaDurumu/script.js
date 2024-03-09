const questions = [
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/cloudyB.webp",
        answers: [
            {text: "Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/bulutlu.mp3", correct: true},
            {text: "Foggy", word: "/swipenglish/sourceFiles/hDurumuSound/sisli.mp3", correct: false},
            {text: "Partly Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/parcalıBulutlu.mp3", correct: false},
            {text: "Rainbow", word: "/swipenglish/sourceFiles/hDurumuSound/gokKusagı.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/foggyB.webp",
        answers: [
            {text: "Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/bulutlu.mp3", correct: false},
            {text: "Foggy", word: "/swipenglish/sourceFiles/hDurumuSound/sisli.mp3", correct: true},
            {text: "Partly Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/parcalıBulutlu.mp3", correct: false},
            {text: "Rainbow", word: "/swipenglish/sourceFiles/hDurumuSound/gokKusagı.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/partlycloudyB.webp",
        answers: [
            {text: "Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/bulutlu.mp3", correct: false},
            {text: "Foggy", word: "/swipenglish/sourceFiles/hDurumuSound/sisli.mp3", correct: false},
            {text: "Partly Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/parcalıBulutlu.mp3", correct: true},
            {text: "Rainbow", word: "/swipenglish/sourceFiles/hDurumuSound/gokKusagı.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/rainbowB.webp",
        answers: [
            {text: "Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/bulutlu.mp3", correct: false},
            {text: "Foggy", word: "/swipenglish/sourceFiles/hDurumuSound/sisli.mp3", correct: false},
            {text: "Partly Cloudy", word: "/swipenglish/sourceFiles/hDurumuSound/parcalıBulutlu.mp3", correct: false},
            {text: "Rainbow", word: "/swipenglish/sourceFiles/hDurumuSound/gokKusagı.mp3", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/rainyB.webp",
        answers: [
            {text: "Rainy", word: "/swipenglish/sourceFiles/hDurumuSound/yagmurlu.mp3", correct: true},
            {text: "Snowy", word: "/swipenglish/sourceFiles/hDurumuSound/karlı.mp3", correct: false},
            {text: "Stormy", word: "/swipenglish/sourceFiles/hDurumuSound/fırtınalı.mp3", correct: false},
            {text: "Sunny", word: "/swipenglish/sourceFiles/hDurumuSound/gunesli.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/snowyB.webp",
        answers: [
            {text: "Rainy", word: "/swipenglish/sourceFiles/hDurumuSound/yagmurlu.mp3", correct: false},
            {text: "Snowy", word: "/swipenglish/sourceFiles/hDurumuSound/karlı.mp3", correct: true},
            {text: "Stormy", word: "/swipenglish/sourceFiles/hDurumuSound/fırtınalı.mp3", correct: false},
            {text: "Sunny", word: "/swipenglish/sourceFiles/hDurumuSound/gunesli.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/stormyB.webp",
        answers: [
            {text: "Rainy", word: "/swipenglish/sourceFiles/hDurumuSound/yagmurlu.mp3", correct: false},
            {text: "Snowy", word: "/swipenglish/sourceFiles/hDurumuSound/karlı.mp3", correct: false},
            {text: "Stormy", word: "/swipenglish/sourceFiles/hDurumuSound/fırtınalı.mp3", correct: true},
            {text: "Sunny", word: "/swipenglish/sourceFiles/hDurumuSound/gunesli.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/sunnyB.webp",
        answers: [
            {text: "Rainy", word: "/swipenglish/sourceFiles/hDurumuSound/yagmurlu.mp3", correct: false},
            {text: "Snowy", word: "/swipenglish/sourceFiles/hDurumuSound/karlı.mp3", correct: false},
            {text: "Stormy", word: "/swipenglish/sourceFiles/hDurumuSound/fırtınalı.mp3", correct: false},
            {text: "Sunny", word: "/swipenglish/sourceFiles/hDurumuSound/gunesli.mp3", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/hDurumuImages/tornadoB.webp",
        answers: [
            {text: "Tornado", word: "/swipenglish/sourceFiles/hDurumuSound/kasırga.mp3", correct: true},
            {text: "Snowy", word: "/swipenglish/sourceFiles/hDurumuSound/karlı.mp3", correct: false},
            {text: "Windy", word: "/swipenglish/sourceFiles/hDurumuSound/ruzgarlı.mp3", correct: false},
            {text: "Sunny", word: "/swipenglish/sourceFiles/hDurumuSound/gunesli.mp3", correct: false},
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
