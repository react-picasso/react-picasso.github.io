const content = document.querySelector('.content');
const loadingOverlay = document.querySelector('.loading-overlay');
// Underline the current page in the navbar
const currentPage = document.querySelector('.active');

setTimeout(() => {
  content.classList.add('appear');
  loadingOverlay.classList.add('disappear');
}, 2000);

// Path: navbar.js
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');
// const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});