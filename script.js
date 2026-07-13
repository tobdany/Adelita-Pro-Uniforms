const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');      // Cambia el icono de hamburguesa a una X
    navbar.classList.toggle('active');     // Muestra/oculta el menú cristal
});