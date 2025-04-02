document.addEventListener('DOMContentLoaded', () => {
    // Manejo del menú móvil
    const navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = document.querySelector(item.getAttribute('href'));
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de typing para mensajes de campaña
    const messages = [
        "Por un futuro mejor",
        "Liderazgo y visión",
        "Progreso para todos",
        "Enyerli Mateo 2028"
    ];
    
    let currentMessageIndex = 0;
    const subtitleElement = document.querySelector('.subtitle');
    
    if (subtitleElement) {
        setInterval(() => {
            subtitleElement.style.opacity = 0;
            
            setTimeout(() => {
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                subtitleElement.textContent = messages[currentMessageIndex];
                subtitleElement.style.opacity = 1;
            }, 500);
        }, 3000);
    }
});