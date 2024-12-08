const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const playerChoiceShow = document.getElementById("p-choice-display");
const computerChoiceShow = document.getElementById("c-choice-display");
const playerScore = document.getElementById("p-score");
const cpuScore = document.getElementById("c-score");
const showResult = document.getElementById("resultMessage");

function handleBtns() {
  rockBtn.addEventListener("click", () => {
    playerChoiceShow.textContent = "ROCK";
    let computerChoice = (computerChoiceShow.textContent = getComputerChoice());
    if (computerChoice === "ROCK") {
      showResult.textContent = "Draw Game";
      showResult.style.cssText =
        "background: blue; color: white; display:block;";
    } else if (computerChoice === "PAPER") {
      showResult.textContent = "You Lost";
      showResult.style.cssText =
        "background: red; color: white; display:block;";

      cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
    } else {
      showResult.textContent = "You Win";
      showResult.style.cssText =
        "background: yellowgreen; color: black; display:block;";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
  });
  paperBtn.addEventListener("click", () => {
    playerChoiceShow.textContent = "PAPER";
    let computerChoice = (computerChoiceShow.textContent = getComputerChoice());
    if (computerChoice === "PAPER") {
      showResult.textContent = "Draw Game";
      showResult.style.cssText =
        "background: blue; color: white; display:block;";
    } else if (computerChoice === "SCISSORS") {
      showResult.textContent = "You Lost";
      showResult.style.cssText =
        "background: red; color: white; display:block;";
      cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
    } else {
      showResult.textContent = "You Win";
      showResult.style.cssText =
        "background: yellowgreen; color: black; display:block;";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
  });
  scissorsBtn.addEventListener("click", () => {
    playerChoiceShow.textContent = "SCISSORS";
    let computerChoice = (computerChoiceShow.textContent = getComputerChoice());
    if (computerChoice === "SCISSORS") {
      showResult.textContent = "Draw Game";
      showResult.style.cssText =
        "background: blue; color: white; display:block;";
    } else if (computerChoice === "ROCK") {
      showResult.textContent = "You Lost";
      cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
      showResult.style.cssText =
        "background: red; color: white; display:block;";
    } else {
      showResult.textContent = "You Win";
      showResult.style.cssText =
        "background: yellowgreen; color: black; display:block;";
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
  });
}
handleBtns();

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoicesIndex = Math.floor(Math.random() * choices.length);
  let randomChoices = choices[randomChoicesIndex];
  return randomChoices.toUpperCase();
}
