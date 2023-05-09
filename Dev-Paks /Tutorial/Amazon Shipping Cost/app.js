


const input = document.getElementById('input')
const form = document.querySelector('form')
const totalCost = document.getElementById('totalCost')



form.addEventListener('submit', e =>{
    e.preventDefault()

    //INPUT.VALUE IS A STRING, CONVERT TO NUMBER
    let cost = Number(input.value)

    if (cost < 40){
        cost = cost + 10
    }
    totalCost.innerText= `$${cost}`
  
    input.value = ''
})




