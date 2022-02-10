const hitThe = document.getElementsByClassName('hitThe');
const hitThe_menu = document.getElementsByClassName('hitthe_menu');
const toggleBtn = document.getElementsByClassName('navbar_toogleBtn');
const menu = document.getElementsByClassName('navbar_menu');


toggleBtn[0].addEventListener('click', ()=>{
    menu[0].classList.toggle('active'); //변수명.classList.toggle('클래스명')

});

hitThe[0].addEventListener('click', ()=>{
    hitThe_menu[0].classList.toggle('active');
});