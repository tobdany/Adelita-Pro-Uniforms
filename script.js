const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');      // Cambia el icono a X
    navbar.classList.toggle('active');     // Oculta el menú cristal
});

// Evento de scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.adelita-header');
    
    // Aplica la clase según la ubicación
    if (window.scrollY > 55) {
        header.classList.add('cambio-fondo');
    } else {
        header.classList.remove('cambio-fondo');
    }
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const currentActive = document.querySelector('.navbar a.active');
     
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        
        // Ponemos el color rosa en el que presionamos
        link.classList.add('active');
    });
});