const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.form-log');
const resgisterlink=document.querySelector('.resgister-link');
 

resgisterlink.addEventListner('click',()=>{
    wrapper.classList.add('active');
})