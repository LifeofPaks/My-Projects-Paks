const btnLeft = document.querySelector('.scroll-left')
const btnRight = document.querySelector('.scroll-right')
const featureContainer = document.querySelector('.feature-container')

const sideImgs = document.querySelectorAll('.side-img')
const largeImg = document.querySelector('.large-img')

const imgWrapper = document.querySelector('.large-img-wrapper')
const leftNav = document.querySelector('.left-nav')
const rightNav = document.querySelector('.right-nav')

const ListHeaders = document.querySelectorAll('.header-list')
const overlay = document.querySelector('.overlay')

const linkBox = document.querySelectorAll('.link-box')
const showList = document.querySelectorAll('.show-list')
const hideList = document.querySelectorAll('.hide-list')
const listTitle = document.querySelectorAll('.title.mobile')

const navBar = document.querySelector('.header')

const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const mobileOverlay = document.querySelector('.m-overlay')
const menuCloseIcon = document.querySelector('.menu-icon-close')

const sideMenu = document.querySelectorAll('.side-menu')
const arrow = document.querySelectorAll('.arrow')
const arrowBack = document.querySelectorAll('.arrow-back')



// SCROLL FEATURED IMAGES ON BUTTON CLICK======================

featureContainer.addEventListener('wheel', e=>{
    e.preventDefault()
    featureContainer.scrollLeft += e.deltaY
})


btnRight.addEventListener('click', ()=>{
    featureContainer.style.scrollBehavior = 'smooth'
    featureContainer.scrollLeft+= 400
})

btnLeft.addEventListener('click', ()=>{
    featureContainer.style.scrollBehavior = 'smooth'
    featureContainer.scrollLeft-= 400
})


// DISPLAY SMALL IMAGES CLICK EVENT===========================================================

sideImgs.forEach(sideImg =>{
    sideImg.addEventListener('mouseover', ()=>{
        largeImg.src = sideImg.src
    })
})

sideImgs.forEach(sideImg =>{
    sideImg.addEventListener('mouseout', ()=>{
        largeImg.src = "images/main.webp"
    })
})



// NAVIGATE SMALL IMAGES CLICK EVENT===========================================================

leftNav.addEventListener('click', ()=>{
    imgWrapper.scrollLeft -= 550    
})

rightNav.addEventListener('click', ()=>{
    imgWrapper.scrollLeft += 550
})

// ACTIVATE OVERLAY===========================================================
ListHeaders.forEach(ListHeader=>{
    ListHeader.addEventListener('mouseover',()=>{
        overlay.classList.add('active')
    })
})

ListHeaders.forEach(ListHeader=>{
    ListHeader.addEventListener('mouseout',()=>{
        overlay.classList.remove('active')
    })
})


// ==========================FOOTER DROPDOWN============================
for(let i = 0; i < listTitle.length; i++){
    listTitle[i].addEventListener('click', ()=>{
        linkBox[i].classList.toggle('active')
        showList[i].classList.toggle('active')
        hideList[i].classList.toggle('active')
    })
}

// FLOATING NAVBAR====================================================
let prevScrollPosition = window.pageYOffset

window.addEventListener('scroll', () =>{
    let currentScrollPostion = window.pageYOffset
    if(prevScrollPosition > currentScrollPostion){
        navBar.style.top = "0"
    }
    else{
        navBar.style.top = "-50px"
    }
    prevScrollPosition = currentScrollPostion
})


// =========================TOGGLE MOBILE MENU=================================

hamburger.addEventListener('click', ()=>{
    hamburger.classList.add('active')
    mobileNav.classList.add('active')
    mobileOverlay.classList.add('active')
})

menuCloseIcon.addEventListener('click', ()=>{
    hamburger.classList.remove('active')
    mobileNav.classList.remove('active')
    mobileOverlay.classList.remove('active')
})


// =============================SUBMENU ACTIVE================================

for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener('click', ()=>{
        mobileNav.classList.add('hide')
        sideMenu[i].classList.add('show')
    })
}

for(let i = 0; i < arrowBack.length; i++){
    arrowBack[i].addEventListener('click', ()=>{
        mobileNav.classList.add('hide')
        sideMenu[i].classList.add('show')
    })
}


function menuBack(){
    mobileNav.classList.add('back')
}