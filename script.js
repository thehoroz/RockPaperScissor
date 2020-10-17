let playerName = prompt("What is your name Chap?")

const playAgainBtn = document.querySelector('.playAgain')
let playerPoints = 0;
let computerPoints = 0;
const playerScore = document.querySelector('.playerscore')
const computerScore = document.querySelector('.computerscore')
const announcement = document.querySelector('.announcement')
const rock = document.getElementById('rockBtn')
const paper = document.getElementById('paperBtn')
const scissor = document.getElementById('scissorBtn')

let playerSelection;

const scoreTeller = document.querySelector('.scoretext')


// button to let the user restart the game
playAgainBtn.addEventListener('click', function(){
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerName + ": " + playerPoints;
    computerScore.textContent = "PC Masterrace: " + computerPoints;
    announcement.textContent = "Score 5 points to Win!"
    rock.className = 'btns'
    paper.className = 'btns'
    scissor.className = 'btns'
})

    rock.addEventListener('click', () => {
        playerSelection = "Rock"
        if (!isMaxScoreReached()) {
            playRound();
        } 
    })
    paper.addEventListener('click', () => {
        playerSelection = "Paper"
        if (!isMaxScoreReached()) {
            playRound();
        }
    })
    scissor.addEventListener('click', () => {
        playerSelection = "Scissor"
        if (!isMaxScoreReached()) {
            playRound();
        }
    }) 

function playRound() {

    let choices = ["Rock", "Paper", "Scissor"]
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    
    console.log("Computer" + computerSelection);
    console.log("User" + playerSelection);

    if(playerSelection == "Rock" && computerSelection == "Paper") {
        computerPoints++;
        scoreTeller.textContent = "Paper beats Rock, PC Masterrace Wins!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
        playerPoints++;
        scoreTeller.textContent = "Rock beats Scissor, " + playerName + " Wins!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        computerPoints++;
        scoreTeller.textContent = "Scissor beats Paper, PC Masterrace Wins!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerPoints++;
        scoreTeller.textContent = "Paper beats Rock, " + playerName + " Wins!"
    } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        computerPoints++;
        scoreTeller.textContent = "Rock beats Scissor, PC Masterrace Wins!"
    } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        playerPoints++;
        scoreTeller.textContent = "Scissor beats Paper, " + playerName + " Wins!"
    } else {
        scoreTeller.textContent = "Draw!"
    }

    playerScore.textContent = playerName + ": " + playerPoints;
    computerScore.textContent = "PC Masterrace: " + computerPoints;

    if(playerPoints == 5) {
        announcement.textContent = playerName + " Wins!!"
        disableTheButtons()
    } else if(computerPoints == 5) {
        announcement.textContent = "PC Masterrace Wins!"
        disableTheButtons()
    }
}

function disableTheButtons() {
    announcement.textContent = "Restart the game"
    rock.className = 'disabledBtns'
    paper.className = 'disabledBtns'
    scissor.className = 'disabledBtns'
}

function isMaxScoreReached() {
    // disable button, score limit reached
    if (playerPoints === 5 || computerPoints === 5) {
        return true
    } 
    return false
}