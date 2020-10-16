let playerName = prompt("What is your name Chap?")
if(playerName == "Atski") {
    playerName = "Sarisin Bomba"}
    else if (playerName == "Musta") {
    playerName = "EEEYBIROER"
    } else if(playerName == "Bilal"){
        playerName = "Udyrmainlenmq"
    } else if(playerName == "Tugay") {
        playerName = "Kanka3aysonrahayvangibiyim"
    } else if(playerName == "Muhammed") {
        playerName = "JavascriptMainHosgeldin"
    } else if(playerName == "Yusuf") {
        playerName = "Sucuk"
    }
let playerSelection;
let playerPoints = 0;
let computerPoints = 0;


const announcement = document.querySelector('.announcement')
const playerScore = document.querySelector('.playerscore')
const computerScore = document.querySelector('.computerscore')
const scoreTeller = document.querySelector('.scoretext')

const playAgainBtn = document.querySelector('.playAgain')
playAgainBtn.addEventListener('click', function(){
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerName + ": " + playerPoints;
    computerScore.textContent = "PC Masterrace: " + computerPoints;
    announcement.textContent = "Score 5 points to Win!"
})

const rock = document.querySelector('.rockBtn')
rock.addEventListener('click', () => {
    playerSelection = "Rock"
    playRound();
})

const paper = document.querySelector('.paperBtn')
paper.addEventListener('click', () => {
    playerSelection = "Paper"
    playRound();
})

const scissor = document.querySelector('.scissorBtn')
scissor.addEventListener('click', () => {
    playerSelection = "Scissor"
    playRound();
}) 

function playRound() {

    function computerPlay(){
    let choices = ["Rock", "Paper", "Scissor"]
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
    }
    let computerSelection = computerPlay();

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

    let endGame = function() {
        if(playerPoints == 5) {
            announcement.textContent = playerName + " Wins!!"
        } else if(computerPoints == 5) {
            announcement.textContent = "PC Masterrace Wins!"
        }
    }
    endGame()
}