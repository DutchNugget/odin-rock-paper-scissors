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


let humanChoice1 = getHumanChoice();
let computerChoice1 = getComputerChoice();
console.log("round 1: " + playRound(humanChoice1, computerChoice1));

let humanChoice2 = getHumanChoice();
let computerChoice2 = getComputerChoice();
console.log("round 2: " + playRound(humanChoice2, computerChoice2));

let humanChoice3 = getHumanChoice();
let computerChoice3 = getComputerChoice();
console.log("round 3: " + playRound(humanChoice3, computerChoice3));

let humanChoice4 = getHumanChoice();
let computerChoice4 = getComputerChoice();
console.log("round 4: " + playRound(humanChoice4, computerChoice4));

let humanChoice5 = getHumanChoice();
let computerChoice5 = getComputerChoice();
console.log("round 5: " + playRound(humanChoice5, computerChoice5));


let humanChoice6 = getHumanChoice();
let computerChoice6 = getComputerChoice();
console.log("round 6: " + playRound(humanChoice5, computerChoice5));

let humanChoice7 = getHumanChoice();
let computerChoice7 = getComputerChoice();
console.log("round 5: " + playRound(humanChoice5, computerChoice5));

let humanChoice8 = getHumanChoice();
let computerChoice8 = getComputerChoice();
console.log("round 8: " + playRound(humanChoice5, computerChoice5));
