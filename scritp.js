let cards = []
let sum = 0
let isAlive = false
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function getRandomCard(){
    let card = Math.floor(Math.random() * 13) + 1
    if (card <= 10){
        return card
    }
    else 
    return 10
}

function messageChanger(){
    if (sum < 21){
        messageEl.textContent = "Try drawing another card"
    } else if (sum === 21){
        messageEl.textContent = "You've won JACKPOT!"
        isAlive = false
    } else {
        messageEl.textContent = "You've lost, try again."
        isAlive = false
    }
}

function startGame(){
    isAlive = true
    cards[0] = getRandomCard()
    cards[1] = getRandomCard()
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sum = cards[0] + cards[1]
    sumEl.textContent = "Sum: " + sum
    messageChanger()
    
}

function newCard(){
    if (isAlive){
    let card = getRandomCard()
    cards.push(card)
    cardsEl.textContent += " " + card
    sum += card
    sumEl.textContent = "Sum: " + sum
    messageChanger()
    }
}