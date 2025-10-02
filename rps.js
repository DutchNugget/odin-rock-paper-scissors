/*
playerInput prompt

ComputerChoice math.floor(math.random()*3) 

function getComputerChoice
    if (computerChoice ===0){
    return "rock"
    } else if (computerChoice === 1){
     return "paper"
    } else (computerChoice === 2 ) {
     return "scissors"}

getHumanchoice = playerInput.toLowerCase()
humanSelection = getHumanchoice
computerSelection = getComputerchoice
playgame encompasses 5 rounds
playRound compares selections and declares winner
score intial 0
increase score with 1 for each win 


*/


function getHumanChoice () {
    let playerInput = prompt("Choose your weapon", "rock, paper, scissors!");
    if (!playerInput) {
        return null;
    } 
    
    let playerChoice = playerInput.toLowerCase();
    if (["rock", "paper", "scissors"].includes(playerChoice)) {
        return playerChoice;
    } else {
        alert ("Invalid choice.");
        return null;
    }
}


function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        return "rock";
    } else if (computerChoice === 1){
        return "paper";
    } else {
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;
let round = 1;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors")||
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`player ${humanScore} computer ${computerScore}`)
        return `You win! ${humanChoice} beats ${computerChoice}`
        
    } else {
        computerScore++;
        console.log(`player ${humanScore} computer ${computerScore}`)
        return `You lose asshole! ${computerChoice} beats ${humanChoice}`   
    } 
}


while (humanScore < 5 && computerScore <5){
    let humanChoice = getHumanChoice();
    if (!humanChoice){
        alert("You fucked up");
        break;
    } 
    let computerChoice = getComputerChoice();
    console.log(`round ${round}:`);
    console.log(playRound(humanChoice, computerChoice))
    console.log(`Player - ${humanScore} Computer - ${computerScore}` )
    round++;
}

if (humanScore === 5) {
    console.log(`You won! Finale score: Player - 5 Computer - ${computerScore}`)
} else if  (computerScore === 5) {
    console.log(`You lost madafakka. Final Score: Player - ${humanScore} Computer - 5`)
}