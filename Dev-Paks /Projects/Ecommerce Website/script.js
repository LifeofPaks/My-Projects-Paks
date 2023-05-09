
//===========================Modal Variables====================================
const modal = document.querySelector('[data-modal]')
const modalCloseBtn = document.querySelector('[data-modal-close]')
const modalCloseOverlay = document.querySelector('[data-modal-overlay]')


//============================Modal Funtion=============================
function modalCloseFunc(){
    modal.classList.add('closed')
}


//==============================Modal EventListeners=====================
modalCloseOverlay.addEventListener('click', modalCloseFunc)
modalCloseBtn.addEventListener('click', modalCloseFunc)


//============================Notification toast variables======================
const notificationToast = document.querySelector('[data-toast]')
const toastCloseBtn = document.querySelector('[data-toast-close]')


//===========================Notification toast EventListener=========================
toastCloseBtn.addEventListener('click', (()=>{
    notificationToast.classList.add('closed')
}))


//=============================Mobile menu Variables===========================
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]')
const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')
const overlay = document.querySelector('[data-overlay]')


for (let i = 0; i < mobileMenuCloseBtn.length; i++){

    //=============================Mobile menu function===========================
    function mobileMenuCloseFunc(){
        mobileMenu[i].classList.remove('active')
        overlay.classList.remove('active')
    }

    mobileMenuOpenBtn[i].addEventListener('click', ()=>{
        mobileMenu[i].classList.add('active')
        overlay.classList.add('active')
    })

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc)    
    overlay.addEventListener('click', mobileMenuCloseFunc)    
}


//===========================Accordion Variables====================================

const accordionBtn = document.querySelectorAll('[data-accordion-btn]')
const accordion = document.querySelectorAll('[data-accordion]')

for (let i = 0; i < accordionBtn.length; i++){
    
    accordionBtn[i].addEventListener('click',  ()=>{
        
        const clickedBtn = accordionBtn[i].nextElementSibling.classList.contains('active')

        for(let i = 0; i < accordion.length; i++){
            if (clickedBtn) break

            if(accordion[i].classList.contains('active')){
                accordion[i].classList.remove('active')
                accordionBtn[i].classList.remove('active')
            }
        }

        accordionBtn[i].nextElementSibling.classList.toggle('active')
        accordionBtn[i].classList.toggle('active')
        
    })
}









