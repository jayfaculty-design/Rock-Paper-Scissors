function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice === computerChoice) {
    return "Drawn Game";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    return "You Win";
  } else {
    return "You Loose";
  }
}
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoicesIndex = Math.floor(Math.random() * choices.length);
  let randomChoices = choices[randomChoicesIndex];
  return randomChoices.toUpperCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  for (round; round <= 5; round++) {
    console.log(`Round ${round}`);

    let humanChoice = prompt(`Round ${round}: Rock, Paper or Scissors?`);
    let computerChoice = getComputerChoice();
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(`Human Choice: ${humanChoice}`);

    let result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result === "You Win") {
      humanScore++;
    } else if (result === "You Loose") {
      computerScore++;
    }

    console.log(
      `Score after Round ${round}: Player ${humanScore} - Computer ${computerScore}`
    );
    console.log("------------------------------------------");
  }

  if (humanScore > computerScore) {
    console.log("Congratulations, You won this game");
  } else if (humanScore < computerScore) {
    console.log("Shame, You lost");
  } else {
    console.log("It is a tie game with no winner");
  }
}

// playGame();

const paragraph = document.querySelector("#para");
const h1 = document.createElement("h1");
h1.textContent = "My Name";
h1.style.cssText = "color: blue; background: red;";
paragraph.appendChild(h1);
