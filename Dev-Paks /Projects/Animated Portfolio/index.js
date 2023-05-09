const banner = document.querySelector('.banner')
const dayNight = document.querySelector('.dayNight')


dayNight.addEventListener('click', ()=>{
    banner.classList.toggle('night')
   
})

let typingText = new Typed ('#text', {
    strings : ['Paks','Designer', 'FrontEnd Developer', 'Coder'],
    loop: true, 
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
})