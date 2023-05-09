
const highScoreList = document.getElementById('highScoreList')


// GET HIGHSCORES FROM LOCAL STORAGE
const highScores = JSON.parse(localStorage.getItem('highscores')) || []


// UPDATE THE HIGHSCORE LIST
highScoreList.innerHTML =
highScores.map(scores =>{
    return  `<li class="high-score">
                 <span class ="name">${scores.name}</span>  <span class="score" >${scores.score}</span>
             </li>`
}).join('')

