const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});

document.querySelector('.button2').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-100vw)';
 })
 document.querySelector('.button3').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-200vw)';
 })
 document.querySelector('.button1').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';
 })
