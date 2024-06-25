let humanChoice;
let comResult;
let gameResult;
let gameCounterResult;
let humanScore = 0;
let computerScore = 0;

const computerPick = () => {
  let computerChoice = Math.floor(Math.random() * 10);
  let result = "";

  if (computerChoice === 3 || computerChoice === 2 || computerChoice === 1) {
    result = "rock";
  } else if (
    computerChoice === 4 ||
    computerChoice === 5 ||
    computerChoice === 6
  ) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return (comResult = result);
};

const jackenpoy = () => {
  let result;
  const elemComp = document.getElementById("computerScore");
  const elemHum = document.getElementById("humanScore");

  if (
    (comResult === "rock" && humanChoice === "scissors") ||
    (comResult === "scissors" && humanChoice === "paper") ||
    (comResult === "paper" && humanChoice === "rock")
  ) {
    result = "Computer wins";
    computerScore += 1;
  } else if (
    (humanChoice === "rock" && comResult === "scissors") ||
    (humanChoice === "scissors" && comResult === "paper") ||
    (humanChoice === "paper" && comResult === "rock")
  ) {
    result = "You win";
    humanScore += 1;
  } else if (comResult === humanChoice) {
    result = "Same choice, do it again";
    gameCounterResult++;
  }

  elemComp.textContent = `${computerScore}`;
  elemHum.textContent = `${humanScore}`;
  return (gameResult = result);
};

const games = (gamesCount) => {
  gameCounterResult = gamesCount;
  elemGameResult = document.getElementById("gameResults");
  elemComp = document.getElementById("computerScore");
  elemHum = document.getElementById("humanScore");
  elemResult = document.getElementById("battleResult");

  elemResult.textContent = "";
  elemGameResult.textContent = "";
  elemComp.textContent = "";
  elemHum.textContent = "";
  humanScore = 0;
  computerScore = 0;

  elem = document.getElementById("gamesCountResult");
  elem.textContent = `${gameCounterResult}`;

  return gameCounterResult;
};

const battle = (pick) => {
  let i = 0;
  if (gameCounterResult) {
    if (i < gameCounterResult) {
      humanChoice = pick;
      elemResult = document.getElementById("gamesCountResult");
      elem = document.getElementById("battleResult");
      computerPick();
      jackenpoy();
      elem.textContent = `You pick ${humanChoice}, computer picks ${comResult}. Result: ${gameResult}`;

      elemResult.textContent = `${(gameCounterResult -= 1)}`;
    } else {
      elemResult.textContent = `No more games`;
    }
  } else {
    elemResult = document.getElementById("gamesCountResult");
    elemResult.textContent = `Please select game count`;
  }

  if (gameCounterResult === 0) {
    elemGameResult = document.getElementById("gameResults");
    if (humanScore > computerScore) {
      elemGameResult.textContent = `Game result: You win!`;
    } else if (humanScore === computerScore) {
      elemGameResult.textContent = `Game result: Draw!`;
    } else {
      elemGameResult.textContent = `Game result: Computer wins!`;
    }
  } else if (
    (gameCounterResult < humanScore &&
      computerScore < humanScore &&
      humanScore === 6) ||
    (gameCounterResult < humanScore &&
      computerScore < humanScore &&
      humanScore === 3) ||
    (gameCounterResult < humanScore &&
      computerScore < humanScore &&
      humanScore === 2)
  ) {
    elemGameResult.textContent = `Game result: You win!`;
    elemResult.textContent = `${(gameCounterResult = 0)}`;
  } else if (
    (gameCounterResult < computerScore &&
      humanScore < computerScore &&
      computerScore === 6) ||
    (gameCounterResult < computerScore &&
      humanScore < computerScore &&
      computerScore === 3) ||
    (gameCounterResult < computerScore &&
      humanScore < computerScore &&
      computerScore === 2)
  ) {
    elemGameResult.textContent = `Game result: Computer wins!`;
    elemResult.textContent = `${(gameCounterResult = 0)}`;
  }
};

// canvas
