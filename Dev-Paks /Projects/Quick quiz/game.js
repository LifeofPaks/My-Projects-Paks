const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
const progressText = document.getElementById('progress-text')
const scoreText = document.getElementById('score')
const progressBarfull = document.getElementById('progressBarFull')
const loader = document.getElementById('loader')
const game = document.getElementById('game')


let currentQuestion = {}
let acceptingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which built-in method reverses the order of the elements of an array?',
        choice1: ' changeOrder(order)',
        choice2: 'reverse()',
        choice3: 'sort(order)',
        choice4: 'None of the above.',
        answer: 2
    },

    {
        question: ' Which of the following function of Array object removes the last element from an array and returns that element?',
        choice1: ' pop()',
        choice2: 'push()',
        choice3: 'join()',
        choice4: 'map()',
        answer: 1
    },

    {
        question: 'Which of the following function of String object combines the text of two strings and returns a new string?',
        choice1: 'add()',
        choice2: 'merge()',
        choice3: 'concat()',
        choice4: 'concat()',
        answer: 3
    },

    {
        question: 'Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?',
        choice1: 'slice()',
        choice2: 'split()',
        choice3: ' replace()',
        choice4: 'search()',
        answer: 2
    },

    {
        question: 'JavaScript is a ___ -side programming language.',
        choice1: 'client',
        choice2: 'server',
        choice3: 'both',
        choice4: 'none',
        answer: 3
    },

    {
        question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        choice1: 'alertBox(“Hello DataFlair!”);',
        choice2: 'alert(Hello DataFlair!);',
        choice3: 'msgAlert(“Hello DataFlair!”);',
        choice4: 'alert(“Hello DataFlair!”);',
        answer: 4
    },

    {
        question: 'How do you find the minimum of x and y using JavaScript?',
        choice1: 'min(x,y);',
        choice2: 'Math.min(x,y)',
        choice3: 'Math.min(xy)',
        choice4: 'min(xy);',
        answer: 2
    },

    {
        question: 'Which of the following statements will throw an error?',
        choice1: 'var fun = function bar( ){ }',
        choice2: 'var fun = function bar{ }',
        choice3: 'function fun( ){ }',
        choice4: 'function( ){ }',
        answer: 2
    },

    {
        question: 'Which JavaScript label catches all the values, except for the ones specified?',
        choice1: 'catch',
        choice2: 'label',
        choice3: 'try',
        choice4: 'default',
        answer: 4
    },

    {
        question: 'Which is the correct JavaScript syntax to change the HTML content given below? <p id=”test”>Hello World!</p>',
        choice1: 'document.getElementById(“test”).innerHTML = “Hello DataFlair!”;',
        choice2: 'document.getElementsById(“test”).innerHTML = “Hello DataFlair!”;',
        choice3: 'document.getElementById(test).innerHTML = “Hello DataFlair!”;',
        choice4: ' document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;',
        answer: 1
    }
]


// CONSTANTS=============================================================


  
const CORRECT_BONUS = 10
const MAX_QUESTIONS = 10

startGame()

function startGame (){
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]

    game.classList.remove('hidden')
    loader.classList.add('hidden')

    getNewQuestion()
}

function getNewQuestion(){

    // AVOID ERROR WHEN YOU EXCEED ALL QUESTIONS OR AFTER THE LAST QUESTION
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){

         // SAVE TO LOCAL STORAGE
         localStorage.setItem('mostRecentScore', score)


        return window.location.assign('./end.html')
    }



    // UPDATE QUESTION COUNTER
    questionCounter++
    progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`



    // UPDATE PROGRESSBAR======================
    progressBarfull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    

    // GET  RANDOM QUESTION INDEX FROM THE AVAILABLE QUESTIONS==============
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)



    // GET  RANDOM QUESTION  FROM THE RANDOM QUESTION INDEX
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question



    // GET  DATASET NUMBER FOR EACH CHOICES
    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })


    // AVOID QUESTITON REPITITION
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}




// ADD CLICK EVENT ON CHOICE========================================
choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = choice.dataset['number']



        // CHECK FOR CORRECT/INCORRECT ANSWER===========================
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'



        // UPDATE SCORE========================================
        if (classToApply === 'correct'){
            updateScore(CORRECT_BONUS)
        }


        selectedChoice.parentElement.classList.add(classToApply)

        // APPLY CLASS AND DELAY NEXT QUESTION
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
       
        
        
    })
})



  // UPDATE SCORE FUNCTION========================================
    function updateScore(num){
        score += num
        scoreText.innerText = score
    }



 