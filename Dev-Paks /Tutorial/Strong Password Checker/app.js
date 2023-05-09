

const input = document.querySelector('input')
const showMessage = document.querySelector('.message')
const showPassword = document.querySelector('.fa-solid')


const weakPassword = /[a-z]/
const mediumPassword = /\d+/
const strongPassword = /.[!,@,#,$,%,^,&,*.(,),-,_,~]/


function run(){
    if(input.value != ''){
        showPassword.style.visibility = 'visible'
    }

    if((input.value.length <=3) && 
    ((input.value.match(weakPassword)) ||
     (input.value.match(mediumPassword)) || 
     (input.value.match(strongPassword)))){
        
        showMessage.style.display = 'block'
        showMessage.textContent = 'Password is too Weak'
    } 
    else if((input.value.length < 8)){

    }
}
