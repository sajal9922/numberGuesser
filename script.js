let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Random target generator
const generateTarget = () => Math.floor(Math.random() * 10);

//Comparing result
const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (userGuess < 0 || userGuess > 9) window.alert('It is not in range');
  const userGuessDistance = Math.abs(secretTargetNumber - userGuess);
  const computerGuessDistance = Math.abs(secretTargetNumber - computerGuess);
  return userGuessDistance <= computerGuessDistance;
};

// Updating Scores

const updateScore = (winner) => {
  if (winner === 'human') humanScore++;
  else computerScore++;
};

// Roundn counter

const advanceRound = () => currentRoundNumber++;
