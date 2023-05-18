const btnLeft = document.querySelector('.scroll-left')
const btnRight = document.querySelector('.scroll-right')
const featureContainer = document.querySelector('.feature-container')

const sideImgs = document.querySelectorAll('.side-img')
const largeImg = document.querySelector('.large-img')


// SCROLL FEATURED IMAGES ON BUTTON CLICK======================
btnRight.addEventListener('click', ()=>{
    featureContainer.scrollLeft+= 500
})

btnLeft.addEventListener('click', ()=>{
    featureContainer.scrollLeft-= 500
})


// DISPLAY SMALL IMAGES CLICK EVENT

sideImgs.forEach(sideImg =>{
    sideImg.addEventListener('click', ()=>{
        largeImg.src = sideImg.src
    })
})