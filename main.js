// JavaScript to toggle the navigation menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
       navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

function closeNav() {
       navMenu.style.display = 'none';
}