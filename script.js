const result = document.querySelector('#result')
const choicebtn = document.querySelectorAll('.choiceBtn')
let playerChoice
let computerChoice
let playerScore = 0
let computerScore = 0
let player = document.querySelector('#playerScore')
player.textContent = `Player Score: ${playerScore}`
let computer = document.querySelector('#computerScore')
computer.textContent = `Player Score: ${computerScore}`
choicebtn.forEach((button) => {button.addEventListener('click', () => {
    playerChoice = button.id
    getComputerChoice();
    playGame();
}

)})  


function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3) + 1
    switch(randNum){
        case 1:
            computerChoice = "rock"
            break
        case 2:
            computerChoice = "paper"
            break
        case 3:
            computerChoice = "scissors"
            break
    }
    
}
function checkWinner(){
    if (playerChoice == computerChoice) {
        result.textContent = `It is a Tie! you both chose ${playerChoice}`
    }else if (playerChoice == "rock" && computerChoice == "scissors") {
        result.textContent = `You Won! ${playerChoice} beats ${computerChoice}`
        playerScore++;
    }else if (playerChoice == "rock" && computerChoice == "paper") {
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore++; 
    }else if (playerChoice == "paper" && computerChoice == "scissors") {
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore++;     
    }else if (playerChoice == "paper" && computerChoice == "rock") {
        result.textContent = `You Won! ${playerChoice} beats ${computerChoice}`
        playerScore++;    
    }else if (playerChoice == "scissors" && computerChoice == "paper") {
        result.textContent = `You Won! ${playerChoice} beats ${computerChoice}`
        playerScore++;    
    }else if (playerChoice == "scissors" && computerChoice == "rock") {
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore++;     
    }

}
function playGame(){
    checkWinner();
    player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Player Score: ${computerScore}`
    if (playerScore == 5) {
        result.textContent = "You won the Game!"
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Player Score: ${computerScore}`
    } else if(computerScore == 5){
        result.textContent = "You lost the Game, Maybe you should try again"
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Player Score: ${computerScore}`
    }
}

