const display = document.getElementById('password')
const generate = document.getElementById('generate')
const copy = document.getElementById('copy')
const copied = document.getElementById('copied')

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '~!@#$%^&*()_+?<>{}]['
const length = 12
const allChars = uppercase + lowercase + number + symbol

function createPassword(){
    let password = ''
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }

    display.value = password
}

generate.addEventListener('click', createPassword)


function copyPassword(){

    let password = display.value
    if (password === ''){
        alert('generate password')
    } else{
        copied.classList.add('show')

        setInterval(() => {
            copied.classList.remove('show')
        }, 3000);
    
    
        display.select()
        document.execCommand('copy')
    }
    
}


copy.addEventListener('click', copyPassword)

