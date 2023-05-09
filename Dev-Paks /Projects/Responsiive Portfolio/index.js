const listEl = document.querySelectorAll(".nav li");
const menuToggle = document.querySelector(".menuToggle");
const header = document.querySelector("header");

const typingText = new Typed('#text', {
    strings: ['Designer','Web Developer','FrontEnd', 'Coder'],
    loop: true, 
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
})
function active() {
  listEl.forEach((list) => {
    list.classList.remove("active");
    this.classList.add("active");
  });
}

listEl.forEach((list) => {
  list.addEventListener("click", active);
});

menuToggle.addEventListener('click', ()=>{
    header.classList.toggle('active')
})


//The Preloader
const loader = document.getElementById('preloader')

window.addEventListener('load', ()=>{
  loader.classList.add('display')
})