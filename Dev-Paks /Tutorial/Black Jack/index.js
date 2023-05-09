
let cards = []
let sum = 0;
let hasBlackJack = false; 
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
    name :'Paks',
    chips : 600
}


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else{
        return randomCard
    }
};

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum =  firstCard + secondCard;
    isAlive = true;
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got a Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game"
        isAlive = false; 
    }
    
    messageEl.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
    cardsEl.textContent = 'Cards: ';
    for(let i = 0; i < cards.length; i++ ){
        cardsEl.textContent += cards[i] + ' ';
    }
}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let card = getRandomCard(); 
        sum += card;
        cards.push(card)
        renderGame();
    }
}
 






