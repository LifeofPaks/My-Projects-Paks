const time = document.querySelector('.time')
const hourInput = document.querySelector('.hours')
const minuteInput = document.querySelector('.minutes')
const secondInput = document.querySelector('.seconds')
const alarm = document.querySelector('.alarm')


let h = window.prompt('Enter Hour')
let  m  =  window.prompt('Enter Minute') 
let s = window.prompt('Enter Second')

currentTime()
function currentTime(){
    const date = new Date()

    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds()

        time.textContent = `${hours}:${minutes}:${seconds} `
        alarm.textContent = `${h}:${m}:${s}`

        if((hours == h) && (minutes == m) && (seconds ==s)) {
            alarm.textContent = 'Paks You Rock!'
        }
        const timer = setTimeout(currentTime, 1000)
}


     


