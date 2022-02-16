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

// Expanding navbarMenu when click toogleButton
navbarToggleBtn.addEventListener('click', () => {
    navbarTitle.classList.add('invisible');
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('fa-times');
});

// Handle scrolling when tapping on the navbar menu
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
      return;
    }
    navbarTitle.classList.add('invisible');
    navbarMenu.classList.remove('open');
    navbarToggleBtn.classList.remove('fa-times');
    scrollIntoView(link);
  });
  
  function scrollIntoView(selector) {
      const scrollTo = document.querySelector(selector);
      scrollTo.scrollIntoView({ behavior: 'smooth'});
    }