let loginForm = document.querySelector('.submit');
loginForm.addEventListener('click', (e)=>{
    e.preventDefault()

let firstName = document.querySelector('.first-Name');
let lastName = document.querySelector('.last-name');
let Email = document.querySelector('.Email');
let password = document.querySelector('.password');
let submitButton = document.querySelector('.submit');

    if (document.querySelector('.first-Name').value === '') {
        document.querySelector(".p1").classList.remove('display')
        document.querySelector(".first-Name").classList.remove('input-border')
        document.querySelector(".first-Name").classList.add('after-licking-on-inputs')
        document.querySelector('.p1-image').classList.remove('display')
    }else{
        console.log('helo')
    }

    if (document.querySelector('.last-name').value === '') {
        document.querySelector(".p2").classList.remove('display')
        document.querySelector(".last-name").classList.remove('input-border')
        document.querySelector(".last-name").classList.add('after-licking-on-inputs')
        document.querySelector('.p2-image').classList.remove('display')
    }else{
        console.log('helo')
    }

    if (document.querySelector('.Email').value === '') {
        document.querySelector(".p3").classList.remove('display')
        document.querySelector(".Email").classList.remove('input-border')
        document.querySelector(".Email").classList.add('after-licking-on-inputs')
        document.querySelector('.p3-image').classList.remove('display')
    }else{
        console.log('helo')
    }

    if (document.querySelector('.password').value === '') {
        document.querySelector(".p4").classList.remove('display')
        document.querySelector(".password").classList.remove('input-border')
        document.querySelector(".password").classList.add('after-licking-on-inputs')
        document.querySelector('.p4-image').classList.remove('display')
    }else{
        console.log('helo')
    }
});