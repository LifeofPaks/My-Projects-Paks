const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')


// TO CREATE CHAT MESSAGES=================================================
const createChatMessageElement = (message) => 
`
<div class= "message ${message.sender === 'John' ? 'blue-bg': 'gray-bg'}">

    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>

</div>
`


// GET ITEM FROM LOCAL STORAGE===================================================
const messages = JSON.parse(localStorage.getItem('messages')) || []


window.addEventListener('load', ()=>{
    messages.forEach(message =>{
        chatMessages.innerHTML += createChatMessageElement(message)
        chatMessages.scrollTop = chatMessages.scrollHeight
    })
})



// UPDATE MESSAGE SENDER=============================================================
let messageSender = 'John'

function updateMessageSender(name){
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting...`
    chatInput.placeholder = `Type here, ${messageSender}`

    if(name === 'John'){
        johnSelectorBtn.classList.add('active-person')
        janeSelectorBtn.classList.remove('active-person')
    }

    if(name === 'Jane'){
        janeSelectorBtn.classList.add('active-person')
        johnSelectorBtn.classList.remove('active-person')
    }


    //FOCUS ON CHAT INPUT WHEN SELECTOR BTN IS CLICKED===============================
    chatInput.focus()

}



// ADD EVENTLISTENER TO SELECTOR BTN=================================================
johnSelectorBtn.addEventListener('click', ()=>{
    updateMessageSender('John')
})

janeSelectorBtn.addEventListener('click', ()=>{
    updateMessageSender('Jane')
})



// SEND MESSAGE FUNCTION======================================================================
function sendMessage(e){
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12:true})
    const message = {
        sender : messageSender,
        text : chatInput.value,
        timestamp,
    }
   
    //SET ITEM TO LOCAL STORAGE====================================================================
    messages.push(message)

    localStorage.setItem('messages', JSON.stringify(messages))

    // ===================================

    chatMessages.innerHTML += createChatMessageElement(message)


    // CLEAR CHAT INPUT================================================================
    chatInputForm.reset()


    // ALIGN NEW MESSAGES FROM BOTTOM=============================================
    chatMessages.scrollTop = chatMessages.scrollHeight

}
// CLICK ENTER TO SEND MESSAGE=============================
chatInputForm.addEventListener('submit', sendMessage)



// CLEAR CHAT MESSAGES============================================
clearChatBtn.addEventListener('click', ()=>{
    localStorage.clear();
    chatMessages.innerHTML =''
})




