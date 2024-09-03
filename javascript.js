console.log("Hello World")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoiceString = "rock";
    } else if (computerChoice === 1) {
        computerChoiceString = "paper";
    } else {
        computerChoiceString = "scissors";
    }
    return console.log(computerChoiceString);
}

function getHumanChoice() {
    let humanChoice = prompt("Make a choice!").toLowerCase();
    return console.log(humanChoice)
}