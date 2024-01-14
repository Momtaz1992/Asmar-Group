// JavaScript to toggle the navigation menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
       navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

function closeNav() {
       navMenu.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
       var map = L.map('map').setView([34.449629, 35.808927], 12); // Centered on Tripoli Mina

       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; OpenStreetMap contributors'
       }).addTo(map);

       L.marker([34.449629, 35.808927]).addTo(map)
           .bindPopup('Lebanon - Tripoli Mina')
           .openPopup();
   });