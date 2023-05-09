const settingsMenu = document.querySelector('.settings-menu')
const darkModeBtn = document.getElementById('darkMode-btn')
const body = document.querySelector('body')


// SETTINGS MENU CLICK EVENT===================
const settingsMenuToggle = ()=>{
    settingsMenu.classList.toggle('hide')
}



// HIDE SETTINGS MENU ON SCROLL
window.addEventListener('scroll', ()=>{
    if(settingsMenu.classList.contains('hide')){
        settingsMenu.classList.remove('hide')
    }
})


// DARL MODE TOGGLE CLICK EVENT===================
const darkModeToggle = ()=>{
    darkModeBtn.classList.toggle('dark-mode-on')
    body.classList.toggle('dark-theme')

    if (localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark')
    }
    else{
        localStorage.setItem('theme', 'light')
    }
}




// SET LOCAL STORAGE===================================
if (localStorage.getItem('theme') == 'light'){
    darkModeBtn.classList.remove('dark-mode-on')
    body.classList.remove('dark-theme')
}
 else if (localStorage.getItem('theme') == 'dark'){
    darkModeBtn.classList.add('dark-mode-on')
    body.classList.add('dark-theme')
}
else {
    localStorage.setItem('theme', 'light')
}


