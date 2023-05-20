
const paksBtn = document.querySelector('.paks-btn')
const onlineHeader = document.querySelector('.online-header')
const babeBtn = document.querySelector('.babe-btn')
const chatMessages = document.querySelector('.chat-message')
const sendMessage = document.querySelector('.send-message')
const chatInput = document.querySelector('.chat-input')
const sendBtn = document.querySelector('.send-btn')
const clearMessageBtn = document.querySelector('.clear-message-btn')


const messages =  JSON.parse(localStorage.getItem('chat')) || []
let messageSender = 'Paks'

function createChatMessage(message){
    return `
    <div class="message ${message.sender === 'Paks' ? 'blue-bg' : 'gray-bg'}">
        <div class="sender">${message.sender}</div>
        <div class="text">${message.text}</div>
        <div class="time-stamp">${message.timestamp}</div>
    </div>
    `   
}

window.addEventListener('load', ()=>{
    messages.forEach(message =>{
        chatMessages.innerHTML += createChatMessage(message)
        chatMessages.scrollTop = chatMessages.scrollHeight
    })
})


function updateMessageSender(name){
    messageSender = name
    onlineHeader.innerHTML = `${name} is online...`
    chatInput.placeholder = `Hey ${name}, Type Here...`

    if (name == 'Paks'){
        paksBtn.classList.add('online')
        babeBtn.classList.remove('online')
    }

    if (name == 'Babe'){
        paksBtn.classList.remove('online')
        babeBtn.classList.add('online')
    }

    chatInput.focus()
}


paksBtn.addEventListener('click', ()=>{
    updateMessageSender('Paks')
})

babeBtn.addEventListener('click', ()=>{
    updateMessageSender('Babe')
})


chatInput.addEventListener('keyup', ()=>{
    if(chatInput.value.trim() != 0){
        sendBtn.classList.add('active')
    } else{
        sendBtn.classList.remove('active')
    }
})

function updateChatMessage(e){
    e.preventDefault()

    if(chatInput.value.trim() != 0){

        const timestamp = new Date().toLocaleString('en-us', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
    
        const message = {
            sender: messageSender,
            text : chatInput.value,
            timestamp,
        }
    
        messages.push(message)
        chatMessages.innerHTML += createChatMessage(message)
        chatMessages.scrollTop = chatMessages.scrollHeight
    
        sendMessage.reset()
    }
    
    localStorage.setItem('chat', JSON.stringify(messages))
   
}   


sendMessage.addEventListener('submit', updateChatMessage)


clearMessageBtn.addEventListener('click', ()=>{
    chatMessages.innerHTML = ''
    localStorage.clear()
})