console.log("Hello World")

let humanScore = 0;

let computerScore = 0;

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

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
});

function getHumanChoice() {
    let humanChoice = prompt("Make a choice!").toLowerCase();
    console.log("Human Choice is " + humanChoice)
    return humanChoice
}

function playRound(humanChoice) {
    const humanSelection = humanChoice;
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
    humanScoreText.textContent = "Your score is " + humanScore;
    computerScoreText.textContent = "Computer score is " + computerScore;

    results.appendChild(humanScoreText);
    results.appendChild(computerScoreText);

    let gameOver=false;

    if (humanScore == 5) {
        results.appendChild(youWon);
        gameOver = true;
    } else if (computerScore == 5) {
        results.appendChild(computerWon);
        gameOver = true;
    }

    if(gameOver === true){
        rock.remove();
        paper.remove();
        scissors.remove();
        humanScore = 0;
        computerScore = 0;
        results.appendChild(restartText);
        results.appendChild(restartBtn);
    }

    restartBtn.addEventListener("click", () => {
        buttons.appendChild(rock);
        buttons.appendChild(paper);
        buttons.appendChild(scissors)
        results.innerHTML = ''
    });

}

const buttons = document.querySelector(".buttons")



const results = document.querySelector(".results");

const humanScoreText = document.createElement("p");

const computerScoreText = document.createElement("p");

const restartBtn = document.createElement("button");

restartBtn.textContent = "Restart";



function playGame() {
    for (i=0; i<5; i++){
        playRound();
        console.log("Your score is " + humanScore);
        console.log("Computer's score is " + computerScore);
    }
}

const youWon = document.createElement("p");

const computerWon = document.createElement("p");

const restartText = document.createElement("p");

youWon.textContent = "You won!";

computerWon.textContent = "The computer has won!";

restartText.textContent = "Click the button to start again";

if (humanScore > 5) {
    results.appendChild(youWon);
    console.log("Should appear")
}

// playGame();