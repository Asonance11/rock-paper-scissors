const result = document.querySelector('#result')
const choicebtn = document.querySelectorAll('.choiceBtn')
let playerChoice
let computerChoice

choicebtn.forEach((button) => {button.addEventListener('click', () => {
    playerChoice = button.id
    getComputerChoice()
    checkWinner()
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
        result.textContent = "DRAW"
    }else if (playerChoice == "rock" && computerChoice == "scissors") {
        result.textContent = "YOU WIN!"
    }else if (playerChoice == "rock" && computerChoice == "paper") {
        result.textContent = "YOU LOSE!"    
    }else if (playerChoice == "paper" && computerChoice == "scissors") {
        result.textContent = "YOU LOSE!"    
    }else if (playerChoice == "paper" && computerChoice == "rock") {
        result.textContent = "YOU WIN!"    
    }else if (playerChoice == "scissors" && computerChoice == "paper") {
        result.textContent = "YOU WIN!"    
    }else if (playerChoice == "scissors" && computerChoice == "rock") {
        result.textContent = "YOU LOSE!"    
    }

}

