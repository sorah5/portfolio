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

// 네비바 메뉴 누를때 이동
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

// 홈을 투명하게 만들기
const home= document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',() =>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});











function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

