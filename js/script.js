document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío tradicional del formulario

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formStatus.style.color = 'green';
            formStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
            contactForm.reset(); // Limpia el formulario
        } else {
            formStatus.style.color = 'red';
            formStatus.textContent = 'Por favor, rellena todos los campos requeridos.';
        }
    });
});