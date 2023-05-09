
const paksBtn = document.querySelector('.paks-selector-btn')
const babeBtn = document.querySelector('.babe-selector-btn')
const online = document.querySelector('.chat-header-title')
const chatMessages = document.querySelector('.chat-messages')
const chatInput = document.querySelector('.chat-input')
const sendMessage = document.querySelector('.send-message')
const clearMessages = document.querySelector('.clear-btn')



const creatchatMessageElement = (message) =>

`
<div class="message ${message.sender === 'Paks' ? 'viol-bg': 'blue-bg'}">
    <div class="sender">${message.sender}</div>
    <div class="text">${message.text}</div>
    <div class="timestamp">${message.timestamp}</div>
</div>

`

const messages = JSON.parse(localStorage.getItem('messages')) || []

window.addEventListener('load', ()=>{
    messages.forEach(message =>{
        chatMessages.innerHTML += creatchatMessageElement(message)
        chatMessages.scrollTop = chatMessages.scrollHeight
    })
})



let messageSender = 'Paks'

function updateMessageSender(name){
    messageSender = name
    online.innerText = `${messageSender} online...`
    chatInput.placeholder = `type here, ${messageSender}`


    if(name === 'Paks'){
        paksBtn.classList.add('online')
        babeBtn.classList.remove('online')
    }

    if(name === 'Babe'){
        babeBtn.classList.add('online')
        paksBtn.classList.remove('online')
    }

    chatInput.focus()
}


paksBtn.addEventListener('click', ()=>{
    updateMessageSender('Paks')
})

babeBtn.addEventListener('click', ()=>{
    updateMessageSender('Babe')
})



function sendChatMessage(e){
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
    const message = {
        sender: messageSender,
        text : chatInput.value,
        timestamp,
    }

    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))

    chatMessages.innerHTML += creatchatMessageElement(message)
    chatMessages.scrollTop = chatMessages.scrollHeight

    sendMessage.reset()
}

sendMessage.addEventListener('submit',sendChatMessage )

clearMessages.addEventListener('click', ()=>{
    chatMessages.innerHTML = ''
    localStorage.clear()
})
