

const input = document.getElementById('input')
const qrImg = document.getElementById('qrImg')
const generateQr = document.getElementById('generate')
const imgBox = document.querySelector('.img-box')


generateQr.addEventListener('click', ()=>{
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value
    imgBox.classList.add('show')
})