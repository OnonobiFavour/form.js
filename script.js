'use strict'
const text = document.getElementById('text')
const mail = document.getElementById('mail')
const password = document.getElementById('pass')
const confirm_pass = document.getElementById('con_pass')
const _btn_ = document.querySelector('.btn_submit')
const symbols = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

password.addEventListener('input', ()=>{
    if(password.value.length > 6 && password.value.length >= 0 && password.value.match(symbols)){
        document.querySelector('.p1').style.color = 'green'
        // console.log('done')
        document.querySelector('.upper').style.color = 'green'
        document.querySelector('.sym').style.color = 'green'

        console.log(`${pass.value}`)

    }
    else{
        document.querySelector('.p1').style.color = 'red'
        document.querySelector('.upper').style.color = 'red'
        document.querySelector('.sym').style.color = 'red'
        console.log('no')
        console.log(`${pass.value}`)
    }
})
_btn_.addEventListener('click', ()=>{
    // e.preventDefault();
    if(!password.value || !text.value || !mail.value){
        alert('Invalid details')
    }
})
confirm_pass.addEventListener('input', ()=>{
    if(password.value === confirm_pass.value && confirm_pass.value.length > 6){
        document.querySelector('.hidden').style.color = 'green'
        document.querySelector('.hidden').textContent = 'confirmed'

    }
})