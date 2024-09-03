console.log("Hello World")

humanScore = 0;

computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoiceString = "rock";
    } else if (computerChoice === 1) {
        computerChoiceString = "paper";
    } else {
        computerChoiceString = "scissors";
    }
    console.log("Computer Choice is " + computerChoiceString)
    return computerChoiceString;
}

function getHumanChoice() {
    let humanChoice = prompt("Make a choice!").toLowerCase();
    console.log("Human Choice is " + humanChoice)
    return humanChoice
}

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection === computerSelection) {
        console.log("Draw")
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } 
}

function playGame() {
    for (i=0; i<5; i++){
        playRound();
        console.log("Your score is " + humanScore);
        console.log("Computer's score is " + computerScore);
    }
}

playGame();