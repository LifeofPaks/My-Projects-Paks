const display = document.getElementById('display')
const fullImg = document.getElementById('fullImg')
const close = document.getElementById('close')
const smallImgs = document.querySelectorAll('#smallImg')


smallImgs.forEach(smallImg =>{
    smallImg.addEventListener('click', ()=>{
        display.style.display = 'flex'
        fullImg.src = smallImg.src
    })
})

close.addEventListener('click', ()=>{
    display.style.display = 'none'
})