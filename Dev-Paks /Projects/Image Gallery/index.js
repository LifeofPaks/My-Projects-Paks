const smallImgs = document.querySelectorAll('.small-img')
const largeImg = document.querySelector('.large-img')

smallImgs.forEach(smallImg =>{
    smallImg.addEventListener('click', ()=>{
        largeImg.src = smallImg.src
    })
})
