
const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScore = document.getElementById('finalScore')

const MAX_HIGH_SCORE =5


// RETRIEVE MOST RECENT SCORE  FROM LOCAL STORAGE 
const mostRecentScore = localStorage.getItem('mostRecentScore')


// RETRIEVE HIGH SCORE FROM LOCAL STORAGE OR AN EMPTY ARRAY
const highScores = JSON.parse(localStorage.getItem('highscores')) || []

finalScore.innerText = mostRecentScore


// REMOVE DISABLED IF INPUT HAS A VALUE
username.addEventListener('keyup', ()=>{
    saveScoreBtn.disabled = !username.value
})



// SAVE HIGH SCORE FUNCTION
function saveHighScore(e){
    e.preventDefault()

    const  score = {
        score: mostRecentScore,
        name: username.value
    }

    // UPDATE HIGHSCORE LIST
    highScores.push(score)

    // SORT HOGHSCORE LIST TO GET TOP 5
    highScores.sort((a,b) => b.score - a.score)

    highScores.splice(5)



    // SAVE  HIGH SCORE TO LOCAL STORAGE 
    localStorage.setItem('highscores', JSON.stringify(highScores))

    console.log(highScores)

    window.location.assign('./index.html')
   
}
