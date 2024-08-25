console.log('script js is loaded');

//login form started here 

function showRegisterForm() {

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";
}

//Start of quote for home page
const quotes = [
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Success consists of going from failure to failure without loss of ethusiam - Winston Churchill",
    "The only limits to our relization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Stay away from those people who try to disparge your ambitions. small minds will always do that, but great minds will give you a feeling that you can become great too. - Mark Twain"
];

let currentQuoteIndex = 0;

function changeQuote() {
    const quoteElement = document.getElementById('quote-text');
    if (quoteElement) {
        //update the text content with the next quote
        quoteElement.textContent = quotes[currentQuoteIndex];

        //update the index, looping back to the first quote
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
} else {
    console.error('quote element not found.');
}
}

//time of quote to change
setInterval(changeQuote, 10000);

changeQuote();

//Start of js for game

document.addEventListener('DOM-ContentLoaded', () => {
const startButton = document.getElementById('start-button');
const playAgainButton = document.getElementById('play-again');
const gameStart = document.getElementById('game-start');
const gamePlay = document.getElementById('game-play');
const gameEnd = document.getElementById('game-end');
const problemDisplay = document.getElementById('problem-display');
const answerField = document.getElementById('answer-field');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const finalScoreDisplay = document.getElementById('final-score');

const quoteElement = document.getElementById('quote');
if (quoteElement) {
    console.log('quote element found');
} else {
    console.error('quote element not found');
}

let score = 0;
let timeLeft = 30;
let timer;

startButton.addEventListener('click', function() {
    console.log('GO button clicked');
    gameStart.classList.add('hidden');
    gamePlay.classList.remove('hidden');
    startGame();
});

playAgainButton.addEventListener('click', function () {
    gameEnd.classList.add('hidden');
    gameStart.classList.remove('hidden');
    resetGame();
});

function startGame() {
    score = 0;
    timeLeft = 30;
    updateScore();
    updateTime();
    generateProblem();
    answerField.focus();
    timer = setInterval(updateTime, 10000);
}

function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    problemDisplay.textContent = `$ {num1} + {num2}`;
    answerField.value = '';
    answerField.focus();
}

answerField.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

function checkAnswer() {
        const [num1, , num2] = problemDisplay.textContent.split (' + ').map(number);
        const correctAnswer = num1 + num2;
    if (parseInt(answerField.value) === correctAnswer) {
        score ++;
        updateScore();
        generateProblem();
    } else {
        answerField.value = '';
        answerField.focus();    
    }
}

function updateTime() {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function updateScore() {
    scoreDisplay.textContent = score;
}

function endGame() {
    gamePlay.classList.add('hidden');
    gameEnd.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    answerField.removeEventListener('keyup', checkAnswer);
}
});
