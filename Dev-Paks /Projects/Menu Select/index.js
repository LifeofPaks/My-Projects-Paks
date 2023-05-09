let display = document.getElementById('display')
let arrow = document.getElementById('arrow')
let dispText = document.getElementById('disp-text')
let lists = document.getElementById('lists')
let options = document.querySelectorAll('#options')


display.addEventListener('click', ()=>{
    lists.classList.toggle('hide')
    arrow.classList.toggle('rotate')
})

options.forEach(option =>{
    option.addEventListener('click', ()=>{
        dispText.innerHTML = option.textContent
        lists.classList.toggle('hide')
        arrow.classList.toggle('rotate')
    })
})