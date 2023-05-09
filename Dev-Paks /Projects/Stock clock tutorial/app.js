const time = document.querySelector('.time')
const startTimer = document.querySelector('.start')
const stopTimer = document.querySelector('.stop')
const resetTimer = document.querySelector('.reset')


let ms = 0, s = 0, m = 0
let counter

startTimer.addEventListener('click', ()=>{

    if(!counter){
        counter = setInterval(run, 10)
    }
    
     function run(){
        time.textContent = currectTime()
        ms++

        if(ms == 100){
            ms = 0
            s++
        }
        if(s == 60){
            s = 0
            m++
        }
     }
})

stopTimer.addEventListener('click', ()=>{
    clearInterval(counter)
    counter = false
    
})

resetTimer.addEventListener('click', ()=>{
    clearInterval(counter)
    counter = false

    ms = 0, s = 0, m = 0
    time.textContent = currectTime()
})

function currectTime(){
    ms = pad(ms), s = pad(s), m = pad(m) 
    return `${m}:${s}:${ms}`
}

function pad(unit){
    return ('0' + unit).length > 2 ? unit : ('0' + unit)
}