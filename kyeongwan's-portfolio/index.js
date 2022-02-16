'use strict';

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn i');
const navbarMenu = document.querySelector('.navbar__menu');
const navbar = document.querySelector('#navbar');
const navbarTitle = document.querySelector('.navbar__title');

// Make navbar transparent when it is on the top
const navbarHeight = navbar.offsetHeight;
document.addEventListener('scroll', () => {
    navbarTitle.classList.add('invisible');
    navbarMenu.classList.remove('open');
    navbarToggleBtn.classList.remove('fa-times');
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        navbarTitle.classList.remove('invisible');
    } else {
        navbar.classList.remove('navbar--dark');
        navbarTitle.classList.add('invisible');
    }
});