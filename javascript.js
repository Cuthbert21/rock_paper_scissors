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