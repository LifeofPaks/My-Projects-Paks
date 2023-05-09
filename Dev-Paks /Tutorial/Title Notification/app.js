

let messages = 2
let interavlId 
let isDisplayNotification

displayNotification()


function displayNotification(){
    if(isDisplayNotification){
        return
    }

    isDisplayNotification = true
    interavlId = setInterval(()=>{
        if (document.title === 'App'){
            document.title = `(${messages}) New Messages`
        }
        else {
            document.title = 'App'
        }
    }, 1000)
}


function stopNotification(){
    isDisplayNotification = false
    clearInterval(interavlId)
    document.title = 'App'
}

add.addEventListener('click', ()=>{
    messages++
    displayNotification()
})

remove.addEventListener('click', ()=>{
    if (messages > 0){
        messages--
    }

    if(messages === 0){
        stopNotification()
    }
})
