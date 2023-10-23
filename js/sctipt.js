const buttons = document.querySelectorAll('.btn');
const btn__order = document.querySelector('.btn-header');
const order = document.querySelector('.form-order');
const btn__Esc = document.querySelector('.esc');
buttons.forEach((element) =>{
    element.addEventListener('click', ()=>{
        buttons.forEach(b => b.classList.remove('button-style'))
        element.classList.toggle('button-style')
        
    })
})



