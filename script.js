'use strict';
const options = ['rock', 'paper', 'scissors'];
const imagesPlayerOption = [
    'img/right-rock.png',
    'img/right-paper.png',
    'img/right-scissors.png',
  ],
  imagesComputerOption = [
    'img/left-rock.png',
    'img/left-paper.png',
    'img/left-scissors.png',
  ];

const playerOptions = Array.from(document.querySelectorAll('.img-item'));
const playerChoiceImage = document.querySelector('#player-choice');
const pcImageChoice = document.querySelector('#pc-choice');
const ShowPlayerScore = document.querySelector('#player-score span');
const ShowComputerScore = document.querySelector('#show-pc-score span');
const finalResult = document.querySelector('#result');

let playerChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let playCounter = 0;

playerOptions.map((option) => {
  option.addEventListener('click', (e) => {
    if (playCounter < 10) {
      playerChoice = e.target.alt;
      playerChoiceImage.src = `img/right-${playerChoice}.png`;
      showComputerChoice();
      playRound();
      showScore();
    }
    showWiner();
  });
});

const showComputerChoice = () => {
  const computerRandomChoice =
    options[Math.floor(Math.random() * options.length)];
  switch (computerRandomChoice) {
    case 'rock':
      pcImageChoice.src = `img/left-${computerRandomChoice}.png`;
      computerChoice = computerRandomChoice;
      break;
    case 'paper':
      pcImageChoice.src = `img/left-${computerRandomChoice}.png`;
      computerChoice = computerRandomChoice;
      break;
    default:
      pcImageChoice.src = `img/left-${computerRandomChoice}.png`;
      computerChoice = computerRandomChoice;
      break;
  }
};

const playRound = () => {
  if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
    playCounter++;
    result = 'It is a tie!';
  } else if (playerChoice.toLowerCase() === 'rock') {
    if (computerChoice.toLowerCase() === 'paper') {
      playCounter++;
      computerScore++;
      result = 'You lose!';
    } else {
      playCounter++;
      playerScore++;
      result = 'You Win!';
    }
  } else if (playerChoice.toLowerCase() === 'paper') {
    if (computerChoice.toLowerCase() === 'rock') {
      playCounter++;
      playerScore++;
      result = 'You Win!';
    } else {
      playCounter++;
      computerScore++;
      result = 'You Lose!';
    }
  } else if (playerChoice.toLowerCase() === 'scissors') {
    if (computerChoice.toLowerCase() === 'rock') {
      playCounter++;
      computerScore++;
      result = 'You Lose!';
    } else {
      playCounter++;
      playerScore++;
      result = 'You Win!';
    }
  }

  return result;
};

const showScore = () => {
  ShowPlayerScore.textContent = ` ${playerScore}`;
  ShowComputerScore.textContent = ` ${computerScore}`;
};

const showWiner = () => {
  if (playCounter === 10) {
    if (playerScore > computerScore) {
      finalResult.src = `img/winner.png`;
    } else if (computerScore > playerScore) finalResult.src = `img/lose.png`;
    else finalResult.src = `img/tie.png`;
  }
};
