const compChoiceDisplay = document.getElementById('comp-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let compChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  /*userChoiceDisplay.style.fontSize = '2em';
  userChoiceDisplay.style.textTransform = 'uppercase';
  userChoiceDisplay.style.textAlign = 'center';*/
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    compChoice = 'rock'
  } else if (randomNumber === 2) {
    compChoice = 'scissors';
  } else {
    compChoice = 'paper';
  }
  
  compChoiceDisplay.innerHTML = compChoice;
}

function getResult() {
  if (userChoice === compChoice) {
    result = 'It\'s a draw!';
  } else if (userChoice === 'rock' && compChoice === 'scissors') {
    result = 'You win!';
  } else if (userChoice === 'rock' && compChoice === 'paper') {
    result = 'You lose!';
  } else if (userChoice === 'paper' && compChoice === 'scissors') {
    result = 'You lose!';
  } else if (userChoice === 'paper' && compChoice === 'rock') {
    result = 'You win!';
  } else if (userChoice === 'scissors' && compChoice === 'paper') {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  resultDisplay.innerHTML = result;
}