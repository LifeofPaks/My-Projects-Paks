const form = document.querySelector('.form')
const inputControl = document.querySelector('.input-control')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')




form.addEventListener('submit', e=>{
    e.preventDefault()

    validatedInputs()
})


// VALID INPUT FUNCTION
function validatedInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    if(usernameValue === ''){
        setError(username, 'Username cannot be empty')
    } else{
        setSuccess(username)
    }


    if(emailValue === ''){
        setError(email, 'Email cannot be empty')
    } 
    // else if(!validEmail(emailValue)){
    //     setError(email, 'Email is not valid')
    // }
    else{
        setSuccess(email)
    }


    if(passwordValue === ''){
        setError(password, 'Password cannot be empty')
    } 
    else if (passwordValue.length < 8){
        setError(password, 'Password must be 8 or more characters')
    }
    else{
        setSuccess(password)
    }


    if(password2Value === ''){
        setError(password2, 'Confirm password')
    } 
    else if(passwordValue !== password2Value){
        setError(password2, 'Not a match')
    }
    else{
        setSuccess(password2)
    }
    
}


// CHECK FOR VALID EMAIL
// function validEmail(email){
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email).toLowerCase()
// }



// CHECK FOR ERROR SET ERROR
 function setError(element, message){
    const inputControl = element.parentElement
    const small = inputControl.querySelector('small')
    small.innerText = message

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
 }



// CHECK FOR SUCCESS SET SUCCESS
function setSuccess(element){
    const inputControl = element.parentElement
   
    inputControl.classList.add('success')
    inputControl.classList.remove('error')

 }
