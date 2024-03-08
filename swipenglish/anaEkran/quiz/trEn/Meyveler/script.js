const questions = [
    {
        question: "/swipenglish/sourceFiles/quizImages/muz.webp",
        answers: [
            {text: "Banana", word: "/swipenglish/sourceFiles/meyvelerSound/muz.mp3", correct: true},
            {text: "Apple", word: "/swipenglish/sourceFiles/meyvelerSound/elma.mp3", correct: false},
            {text: "Peach", word: "/swipenglish/sourceFiles/meyvelerSound/seftali.mp3", correct: false},
            {text: "Orange", word: "orange.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/portakal.webp",
        answers: [
            {text: "Banana", word: "/swipenglish/sourceFiles/meyvelerSound/muz.mp3", correct: false},
            {text: "Apple", word: "/swipenglish/sourceFiles/meyvelerSound/elma.mp3", correct: false},
            {text: "Peach", word: "/swipenglish/sourceFiles/meyvelerSound/seftali.mp3", correct: false},
            {text: "Orange", word: "/swipenglish/sourceFiles/meyvelerSound/", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/elma.webp",
        answers: [
            {text: "Banana", word: "/swipenglish/sourceFiles/meyvelerSound/muz.mp3", correct: false},
            {text: "Apple", word: "/swipenglish/sourceFiles/meyvelerSound/elma.mp3", correct: true},
            {text: "Peach", word: "/swipenglish/sourceFiles/meyvelerSound/seftali.mp3", correct: false},
            {text: "Orange", word: "/swipenglish/sourceFiles/meyvelerSound/", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/seftali.webp",
        answers: [
            {text: "Banana", word: "/swipenglish/sourceFiles/meyvelerSound/muz.mp3", correct: false},
            {text: "Apple", word: "/swipenglish/sourceFiles/meyvelerSound/elma.mp3", correct: false},
            {text: "Peach", word: "/swipenglish/sourceFiles/meyvelerSound/seftali.mp3", correct: true},
            {text: "Orange", word: "/swipenglish/sourceFiles/meyvelerSound/", correct: false},
        ]
    },

    {
        question: "/swipenglish/sourceFiles/quizImages/kavun.webp",
        answers: [
            {text: "Melon", word: "/swipenglish/sourceFiles/meyvelerSound/kavun.mp3", correct: true},
            {text: "Strawberry", word: "/swipenglish/sourceFiles/meyvelerSound/cilek.mp3", correct: false},
            {text: "Cherry", word: "/swipenglish/sourceFiles/meyvelerSound/kiraz.mp3", correct: false},
            {text: "Perry", word: "/swipenglish/sourceFiles/meyvelerSound/armut.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/cilek.webp",
        answers: [
            {text: "Melon", word: "/swipenglish/sourceFiles/meyvelerSound/kavun.mp3", correct: false},
            {text: "Strawberry", word: "/swipenglish/sourceFiles/meyvelerSound/cilek.mp3", correct: true},
            {text: "Cherry", word: "/swipenglish/sourceFiles/meyvelerSound/kiraz.mp3", correct: false},
            {text: "Perry", word: "/swipenglish/sourceFiles/meyvelerSound/armut.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/kiraz.webp",
        answers: [
            {text: "Melon", word: "/swipenglish/sourceFiles/meyvelerSound/kavun.mp3", correct: false},
            {text: "Strawberry", word: "/swipenglish/sourceFiles/meyvelerSound/cilek.mp3", correct: false},
            {text: "Cherry", word: "/swipenglish/sourceFiles/meyvelerSound/kiraz.mp3", correct: true},
            {text: "Perry", word: "/swipenglish/sourceFiles/meyvelerSound/armut.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/armut.webp",
        answers: [
            {text: "Melon", word: "/swipenglish/sourceFiles/meyvelerSound/kavun.mp3", correct: false},
            {text: "Strawberry", word: "/swipenglish/sourceFiles/meyvelerSound/cilek.mp3", correct: false},
            {text: "Cherry", word: "/swipenglish/sourceFiles/meyvelerSound/kiraz.mp3", correct: false},
            {text: "Perry", word: "/swipenglish/sourceFiles/meyvelerSound/armut.mp3", correct: true},
        ]
    },

    {
        question: "/swipenglish/sourceFiles/quizImages/ananas.webp",
        answers: [
            {text: "Pineapple", word: "/swipenglish/sourceFiles/meyvelerSound/ananas.mp3", correct: true},
            {text: "Watermelon", word: "/swipenglish/sourceFiles/meyvelerSound/karpuz.mp3", correct: false},
            {text: "Apricot", word: "/swipenglish/sourceFiles/meyvelerSound/kayisi.mp3", correct: false},
            {text: "Kiwi", word: "/swipenglish/sourceFiles/meyvelerSound/kivi.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/karpuz.webp",
        answers: [
            {text: "Pineapple", word: "/swipenglish/sourceFiles/meyvelerSound/ananas.mp3", correct: false},
            {text: "Watermelon", word: "/swipenglish/sourceFiles/meyvelerSound/karpuz.mp3", correct: true},
            {text: "Apricot", word: "/swipenglish/sourceFiles/meyvelerSound/kayisi.mp3", correct: false},
            {text: "Kiwi", word: "/swipenglish/sourceFiles/meyvelerSound/kivi.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/kayisi.webp",
        answers: [
            {text: "Pineapple", word: "/swipenglish/sourceFiles/meyvelerSound/ananas.mp3", correct: false},
            {text: "Watermelon", word: "/swipenglish/sourceFiles/meyvelerSound/karpuz.mp3", correct: false},
            {text: "Apricot", word: "/swipenglish/sourceFiles/meyvelerSound/kayisi.mp3", correct: true},
            {text: "Kiwi", word: "/swipenglish/sourceFiles/meyvelerSound/kivi.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/kivi.webp",
        answers: [
            {text: "Pineapple", word: "/swipenglish/sourceFiles/meyvelerSound/ananas.mp3", correct: false},
            {text: "Watermelon", word: "/swipenglish/sourceFiles/meyvelerSound/karpuz.mp3", correct: false},
            {text: "Apricot", word: "/swipenglish/sourceFiles/meyvelerSound/kayisi.mp3", correct: false},
            {text: "Kiwi", word: "/swipenglish/sourceFiles/meyvelerSound/kivi.mp3", correct: true},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/uzum.webp",
        answers: [
            {text: "Pineapple", word: "/swipenglish/sourceFiles/meyvelerSound/ananas.mp3", correct: false},
            {text: "Grape", word: "/swipenglish/sourceFiles/meyvelerSound/uzum.mp3", correct: true},
            {text: "Apricot", word: "/swipenglish/sourceFiles/meyvelerSound/kayisi.mp3", correct: false},
            {text: "Kiwi", word: "/swipenglish/sourceFiles/meyvelerSound/kivi.mp3", correct: false},
        ]
    },
    {
        question: "/swipenglish/sourceFiles/quizImages/.webp",
        answers: [
            {text: "Melon", word: "/swipenglish/sourceFiles/meyvelerSound/.mp3", correct: false},
            {text: "Strawberry", word: "/swipenglish/sourceFiles/meyvelerSound/.mp3", correct: false},
            {text: "Cherry", word: "/swipenglish/sourceFiles/meyvelerSound/.mp3", correct: false},
            {text: "Perry", word: "/swipenglish/sourceFiles/meyvelerSound/.mp3", correct: true},
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
