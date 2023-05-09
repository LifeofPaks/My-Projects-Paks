
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const reset = document.getElementById('reset')
const autoPlayBtn = document.querySelector('.auto-play')
const stopAutoPlayBtn = document.querySelector('.stop-auto-play')
const checkReset = document.querySelector('.check-reset')
const yesReset = document.getElementById('yesReset')
const noReset = document.getElementById('noReset')

const scoreEL = document.querySelector('.score')
const resultEL = document.querySelector('.result')
const movesEL = document.querySelector('.moves')




 

//GET ITEM FORM LOCAL STORAGE --------- SCORE VALUE === NULL AFTER RESET
let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
}


// DISPLAY SCORE
updateScoreElement()



// // SCORE VALUE === NULL AFTER RESET----FIX
// if(!score){
//     score = {
//         wins:0,
//         losses: 0,
//         ties: 0
//     }
// }


//COMPUTER MOVE FUNCTION
function pickComputerMove(){
    let computerMove = ''

    let randomNumber = Math.floor(Math.random()*3) +1

    if (randomNumber === 1){
        computerMove = '✊'
    }
    else if (randomNumber === 2){
        computerMove = '✋'
    }
    else if(randomNumber === 3){
        computerMove = "✌️"
    }

    return computerMove
}


//PLAY GAME FUNCTION
function playGame(playerMove){


    let computerMove = pickComputerMove()

    let result = ''

    if(playerMove === '✊'){

        if(computerMove === `${playerMove}`){
            result = "Tie!"
        }
        else if(computerMove === '✋'){
            result = "You Lose!"
        }
        else if(computerMove === '✌️'){
            result = "You Win!"
        }
    
    }



    if(playerMove === '✋'){

        if(computerMove === '✊'){
            result = "You Win!"
        }
        else if(computerMove === `${playerMove}`){
            result = "Tie!"
        }
        else if(computerMove === '✌️'){
            result = "You Lose!"
        }
    
    }


    if (playerMove === '✌️'){

        if(computerMove === '✊'){
            result = "You Lose!"
        }
        else if(computerMove === '✋'){
            result = "You Win!"
        }
        else if(computerMove === `${playerMove}`){
            result = "Tie!"
        }
    
    }

    //UPDATE SCORE
    if (result === "You Win!" ){
        score.wins+= 1
    }
    else if (result === "You Lose!" ){
        score.losses+= 1
    }
    else if (result === "Tie!" ){
        score.ties+= 1
    }
    

    // DISPLAY SCORE
    updateScoreElement()



    // DISPLAY RESULT
    resultEL.innerHTML = result


    // DISPLAY MOVES
    movesEL.innerHTML = `You  ${playerMove}  -  ${computerMove} Computer`



    //SAVE SCORE TO LOCAL STORAGE
    localStorage.setItem('score', JSON.stringify(score))

    
}



// UPDATE AND DISPLAY SCORE FUNCTION
function updateScoreElement(){
    scoreEL.innerHTML = ` Wins : ${score.wins},  Losses: ${score.losses}, Ties: ${score.ties}`
}





// CLICK EVENTS
rock.addEventListener('click', ()=>{
    playGame('✊')
})


paper.addEventListener('click', ()=>{
    playGame('✋')
})      


scissors.addEventListener('click', ()=>{
   playGame('✌️')
})


// RESET SCORE FUNCTION
    function resetScore(){

        // RESET PROMPT MESSAGE
        checkReset.classList.remove('display')


        // YES  CONFIRM RESET
        yesReset.addEventListener('click', ()=>{
            score.wins = 0
            score.losses = 0
            score.ties = 0
        
            updateScoreElement()
            resultEL.innerHTML = ''
            movesEL.innerHTML = ''
        
            stopAutoPlay()
        
            //CLEAR LOCAL STORAGE : This method returns the score to null
            localStorage.removeItem('score')

           
            setTimeout(()=>{
                checkReset.classList.add('display')
            }, 100)
           
        })


        // NO DO NOT RESET
        noReset.addEventListener('click', ()=>{
            setTimeout(()=>{
                checkReset.classList.add('display')
            }, 100)
        })

     
    }


// RESET SCORE BUTTON CLICK EVENT
reset.addEventListener('click', ()=>{

   resetScore()
})





// AUTO PLAY FUNCTION

let autoPlayInterval
function autoPlay(){

    autoPlayBtn.classList.add('hide')
    stopAutoPlayBtn.classList.remove('hide')

    autoPlayInterval = setInterval(()=>{
       const playerMove = pickComputerMove()
        playGame(playerMove)
    }, 1000)
}


// AUTO PLAY GAME===============================================

autoPlayBtn.addEventListener('click', ()=>{
   autoPlay()
})  



// STOP AUTO PLAY FUNCTION
    function stopAutoPlay(){

        autoPlayBtn.classList.remove('hide')
        stopAutoPlayBtn.classList.add('hide')
        clearInterval(autoPlayInterval)
    }

// STOP AUTO PLAY
stopAutoPlayBtn.addEventListener('click', ()=>{
   stopAutoPlay()
})



// PLAY GAME WITH KEYBOARD:  THE KEYDOWN EVENTLISTENER

const body = document.querySelector('body')

body.addEventListener('keydown', (e) =>{
    if(e.key === 'r'){
        playGame('✊')
    }
    else if(e.key === 'p'){
        playGame('✋')
    }
    else if(e.key === 's'){
        playGame('✌️')
    }
    else if(e.key === 'a'){
        autoPlay()
    }
    else if(e.key === 'x'){
        stopAutoPlay()
    }
    else if(e.key === 'Backspace'){
        resetScore()
    }
})


