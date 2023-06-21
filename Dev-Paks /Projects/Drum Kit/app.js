
window.addEventListener('keydown', e=>{
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`)
    
    audio.play()
    audio.currentTime = 0


// CSS KEY PRESS ANIMATION==================================================
    key.classList.add('key-pressed')
    setTimeout(()=>{
        key.classList.remove('key-pressed')
    }, 100)
})