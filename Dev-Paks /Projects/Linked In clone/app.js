const showMenu = document.querySelector('.profile-menu-wrap')
const profileMenuToggle = document.querySelector('.nav-profile-img')
const sideActivity = document.getElementById('sideActivity')
const showMoreLinks = document.getElementById('showMoreLinks')


profileMenuToggle.addEventListener('click', ()=>{
    showMenu.classList.toggle('show-profile-menu')
})

window.addEventListener('scroll', ()=>{
    if(showMenu.classList.contains('show-profile-menu')){
        showMenu.classList.remove('show-profile-menu')
    }
})


// SHOW MORE OR SHOW LESS LINKS ON SMALLER SCREEN======================================
showMoreLinks.addEventListener('click', ()=>{
    sideActivity.classList.toggle('open-activity')
    if(sideActivity.classList.contains('open-activity')){
        showMoreLinks.innerHTML = `<p>Show less <b>-<b></p>`
    } else{
        showMoreLinks.innerHTML = `<p>Show more <b>+<b></p>`
    }
})

