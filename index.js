let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("messages")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cartas")

function startGame() {
    renderGame();
}
function renderGame(){
    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Card:" + firstCard + " " + secondCard
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message ="You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 5;
    sum = sum + card
    renderGame()
}



