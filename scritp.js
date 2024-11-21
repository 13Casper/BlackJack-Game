let yourName = document.getElementById("yourName-el")
let yourCardsEl = document.getElementById("yourCards-el")
let yourSumEl = document.getElementById("yourSum-el")
let opponentCardsEl = document.getElementById("opponentCards-el")
let opponentSumEl = document.getElementById("opponentSum-el")
let messageEl = document.getElementById("message-el")
let inputNameEl = document.getElementById("inputName-el")
let moneyEl = document.getElementById("money-el")
let inputBetEl = document.getElementById("inputBet-el")
let yourCards = []
let opponentCards = []
let yourSum = 0
let opponentSum = 0
let isAlive = false
let money = 1000
let readyToPlay = false
let givenName = false

function enterName(){
    yourName.textContent = inputNameEl.value
    givenName = true   
}

function enterBet(){
    if (money >= Number(inputBetEl.value)){
    if (Number(inputBetEl.value) > 0){
    money -= Number(inputBetEl.value)
   moneyEl.textContent = money + "$"
   readyToPlay = true
    }
    }
    else{
        messageEl.textContent = "You have no enough credit"
    }
}

function getRandomCard(){
    let card = Math.floor(Math.random() * 13) + 1
    if (card <= 10)
        return card
    else 
    return 10
}

function win(){
    messageEl.textContent = "WON!"
    money += Number(inputBetEl.value) * 2
    moneyEl.textContent = money + "$"
}

function draw(){
    messageEl.textContent = "DRAW!"
    money += Number(inputBetEl.value)
    moneyEl.textContent = money + "$"
}

function lost(){
    messageEl.textContent = "LOST!"
}

function messageChanger(){
    if (yourSum > 21 && opponentSum > 21){
        draw()
    } else if (yourSum > 21 && opponentSum <= 21){
        lost()
    } else if (yourSum <= 21 && opponentSum > 21){
        win()
    } else if (yourSum > opponentSum){
        win()
    } else if (yourSum === opponentSum){
       draw()
    } else {
        lost()
    }
}

function startGame(){
    if (givenName === false)
        messageEl.textContent = "Please enter your name first"
    else if(readyToPlay === false) {
        messageEl.textContent = "Please enter your bet first"
    } else {
    isAlive = true
    messageEl.textContent = " "
    yourCards[0] = getRandomCard()
    yourCards[1] = getRandomCard()
    opponentCards[0] = getRandomCard()
    yourCardsEl.textContent = "Cards: " + yourCards[0] + " " + yourCards[1]
    opponentCardsEl.textContent = "Cards: " + opponentCards[0] + " "
    yourSum = yourCards[0] + yourCards[1]
    opponentSum = opponentCards[0]
    yourSumEl.textContent = "Sum: " + yourSum
    opponentSumEl.textContent = "Sum: " + opponentSum
}
}

function hitMe(){
    if (isAlive){
    let card = getRandomCard()
    yourCards.push(card)
    yourCardsEl.textContent += " " + card
    yourSum += card
    yourSumEl.textContent = "Sum: " + yourSum
    if (yourSum > 21)
        isAlive = false
    }
}

function stand(){
    if (yourSum >= 22){
        let card = getRandomCard()
        opponentCards.push(card)
        opponentCardsEl.textContent += card + " "
        opponentSum += card
        opponentSumEl.textContent = "Sum: " + opponentSum
    } else {
    while(opponentSum < yourSum){
        let card = getRandomCard()
        opponentCards.push(card)
        opponentCardsEl.textContent += card + " "
        opponentSum += card
        opponentSumEl.textContent = "Sum: " + opponentSum
    }
}
messageChanger()
readyToPlay = false
}