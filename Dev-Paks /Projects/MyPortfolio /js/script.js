/* ========== Typing animation========== */

let typed = new Typed('.typing', {
    strings: ['Front End', 'Web Developer'],
    typeSpeed: 100,
    backSpeed : 60,
    loop: true
})

/* ========== aside========== */
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSelection = document.querySelectorAll('.section'),
    totalSelection = allSelection.length

    for(let i = 0; i < totalNavList; i++){
        const a = navList[i].querySelector('a')

        a.addEventListener('click', ()=>{
           
            removeBackSection()
            for(let j = 0; j < totalNavList; j++){
                if(navList[j].querySelector('a').classList.contains('active')){
                    addbackSection(j)
                    /* allSelection[j].classList.add('back-section') */
                }
                navList[j].querySelector('a').classList.remove('active')
            }
            a.classList.add('active')
            showSection(a)
            if(window.innerHeight < 1200){
                asideSectionTogglerBtn()
            }
        })
    }


    function showSection(element){
        for(let i = 0; i < totalSelection; i++){
            allSelection[i].classList.remove('active')
        }
        const target = element.getAttribute('href').split('#')[1]
        document.querySelector('#' + target).classList.add('active')
    }

    function removeBackSection(){
        for(let i = 0; i < totalSelection; i++){
            allSelection[i].classList.remove('back-section')
        }
    }

    function addbackSection(num){
        allSelection[num].classList.add('back-section')
    }


    /* ======================== Aside Toggler ======================== */

    const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside')
        navTogglerBtn.addEventListener('click', () =>{
            asideSectionTogglerBtn()
        })


        function  asideSectionTogglerBtn(){
            aside.classList.toggle('open')
            navTogglerBtn.classList.toggle('open')
            for(let i = 0; i < totalSelection; i++){
                allSelection[i].classList.toggle('open')
            }
        }

/* ======================== Hire Me ======================== */
const hireMe = document.querySelector('.hire-me')

hireMe.addEventListener('click', ()=>{
    const sectionindex = hireMe.getAttribute('data-section-index')
   showSection(hireMe)
   updateNav(hireMe)
   removeBackSection()
   addbackSection(sectionindex)
})


function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active')
        const target = element.getAttribute('href').split('#')[1]
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
            navList[i].querySelector('a').classList.add('active')
        }
    }

}


// ======================================CONTACT FORM============================
const sendBtn = document.getElementById('send')
const mailSent = document.querySelector('.mail-sent')

function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    const serviceId = 'service_z3u0yme'
    const templateId = 'template_mp5jeoe'

    emailjs.send(serviceId, templateId, params)
    .then(
        res =>{
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
            console.log(res)

            mailSent.classList.add('active')

            setInterval(()=>{
                mailSent.classList.remove('active')
            }, 3000)
        }
    )
}

sendBtn.addEventListener('click', sendMail)

