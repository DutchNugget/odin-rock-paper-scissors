let humanScore = 0;
let computerScore = 0;
let round = 1;

const buttonContainer = document.getElementById("buttons");
const scoreDisplay    = document.getElementById("scoreDisplay");
const buttons         = document.querySelectorAll("#buttons button");

buttonContainer.addEventListener("click", (event)=> {
    //targets all buttons inside the buttonContainer, instead of 1 listener per button
    if (event.target.tagName === "BUTTON") {
        const humanChoice = event.target.id;
        const computerChoice  = getComputerChoice();
        const resultMsg       = document.createElement("p")
        resultMsg.textContent = playRound(humanChoice, computerChoice)
        round++;
        updateScore();
        resultMsg.classList.add("resultMsg")
        scoreDisplay.append(resultMsg);
        //victory condition check below, and calls restartbutton function to create element
        if (humanScore === 5) {
            scoreDisplay.append(`You won! Final score: Player - 5 | Computer - ${computerScore}`);
            buttons.forEach(button => button.disabled = true);
            showRestartButton()

            return;
        } else if (computerScore === 5) {
            scoreDisplay.append(`You lost! Final score: Player - ${humanScore} | Computer - 5`)
            buttons.forEach(button => button.disabled = true);
            showRestartButton();
        }
    } 

} )

//creates the restart button and calls restartGame function when clicked
function showRestartButton () {
    const restartBtn = document.createElement("button");
//the ID is created to easily select the button later in the restartGame function
    restartBtn.id    = "restartBtn"
    restartBtn.textContent = "Restart game";
    scoreDisplay.append(restartBtn)
    restartBtn.addEventListener("click", restartGame);
}

//clears scoreboard and resets round to 0, also removes restartbutton
function restartGame () {
    humanScore    = 0;
    computerScore = 0;
    round         = 1;
    scoreDisplay.textContent= "";
    const restartBtn = document.getElementById("restartBtn");
    if (restartBtn) restartBtn.remove();
    updateScore();
    buttons.forEach(button => button.disabled = false)
}

//gets current round and score from playround function and updates display
function updateScore () {
    const roundText       = document.createElement("p")
    roundText.textContent = `Round : ${round}`;

    const scoreText       = document.createElement("p");
    scoreText.textContent = `Player : ${humanScore} Computer : ${computerScore}`;
    scoreDisplay.replaceChildren(roundText,scoreText);
}

//runs function to get initial score
updateScore()

//random number between 0 and 3 (not including 3) to get computer choice
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

//compares player and computer choice to determine winner. Updates score as well. 
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Computer chose ${computerChoice} It's a tie!`
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors")||
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`
        
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`   
    } 
}

