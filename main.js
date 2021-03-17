'use strict';


// navbar를 위에서는 투명하게 아래에서는 색있게
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',() =>{
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// 네비바 메뉴 누를떄 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
   scrollIntoView(link);
});

// contact으로 이동 
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
    scrollIntoView('#contact');
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}