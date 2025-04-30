//Start of js for game

console.log('DOM fully loads');
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

let score = 0;
let timeLeft = 30;
let timer;

// FUNCTIONS

function startGame() {
    score = 0;
    timeLeft = 30;
    generateProblem();
    timer = setInterval(updateTime, 1000);
}

function updateTime() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
      clearInterval(timer);
      endGame();
  }
}

function endGame() {
    gamePlay.classList.add('hidden');
    gameEnd.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
}

function generateProblem() {
    console.log('generate problem');
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    const operation = document.getElementById('operation').value;
    let operationSymbol = '+';
    let correctAnswer;

    switch (operation) {
        case 'addition':
            correctAnswer = num1 + num2;
            operationSymbol = '+';

            break;
         case 'subtraction':
            // check for bigger and smaller number so that the answer is not negative
            const biggerNum = Math.max(num1, num2);
            const smallerNum = Math.min(num1, num2);
            correctAnswer = biggerNum - smallerNum;
            operationSymbol = '-';
            num1 = biggerNum;
            num2 = smallerNum;

            break;
        case 'multiplication':
            correctAnswer = num1 * num2;
            operationSymbol = 'x';

            break;
        case 'division':
            // calculate a numerator so that the answer is a whole number
            const numerator = num1 * num2;
            correctAnswer = Math.floor(numerator / num2);
            operationSymbol = '/'
            num1 = numerator;
            break;
    }

    problemDisplay.textContent = `${num1} ${operationSymbol} ${num2}`;
    answerField.value = '';
    answerField.focus();

    answerField.dataset.correctAnswer = correctAnswer;
}

function checkAnswer() {
  if (answerField.value === answerField.dataset.correctAnswer) {
      score++;
      scoreDisplay.textContent = score;
      generateProblem();
  }
}

// EVENT LISTENERS

// listen to start game
startButton.addEventListener('click', function() {
  console.log('GO button was clicked');
  gameStart.classList.add('hidden');
  gamePlay.classList.remove('hidden');
  startGame();
});

// listen to restart game
playAgainButton.addEventListener('click', function () {
  gameEnd.classList.add('hidden');
  gameStart.classList.remove('hidden');
});

// listen for button presses
document.querySelectorAll('.button-grid button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'CLEAR') {
            answerField.value = ''; 
        } else {
            answerField.value += this.textContent;
            checkAnswer();
        }
        answerField.focus();
    });
});

// listen for use of keyboard to input numbers
answerField.addEventListener('input', checkAnswer);
