const menuToggle = document.querySelector('.menu-icon')
const navlist = document.querySelector('.nav-list')
const productImg = document.getElementById('product-img')
const smallImgs = document.querySelectorAll('.small-img')
const loginBtn = document.getElementById('loginBtn')
const regBtn = document.getElementById('regBtn')
const loginForm = document.getElementById('loginForm')
const regForm = document.getElementById('regForm')
const indicator = document.getElementById('indicator')




// TOGGLE MENU CLICK EVENT
menuToggle.addEventListener('click', ()=>{
    navlist.classList.toggle('hide')
})


// PRODUCT IMAGE CLICK EVENT
smallImgs.forEach(smallImg =>{
    smallImg.addEventListener('click', ()=>{

        productImg.src = smallImg.src
    })
})

// ACCOUNT PAGE CLICK EVENT
regBtn.addEventListener('click', ()=>{
    regForm.style.transform = 'translateX(0px)'
    loginForm.style.transform = 'translateX(0px)'
    indicator.style.transform = 'translateX(100px)'
})

loginBtn.addEventListener('click', ()=>{
    regForm.style.transform = 'translateX(300px)'
    loginForm.style.transform = 'translateX(300px)'
    indicator.style.transform = 'translateX(0px)'
})