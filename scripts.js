document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessages = [
        '¡Bienvenido!',
        'Descubre un nuevo día.',
        'Explora el universo de los números y dígitos.'
        // Agrega más mensajes de bienvenida si lo deseas
    ];

    // Función para obtener un mensaje aleatorio
    function getRandomMessage() {
        return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    }

    // Muestra un mensaje aleatorio en el encabezado al cargar la página
    const welcomeHeader = document.getElementById('welcomeMessage');
    welcomeHeader.textContent = getRandomMessage();

    // Simula un retraso de 2 segundos para el loader
    setTimeout(function () {
        const loader = document.querySelector('.loader');
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.display = 'none';
        }, 500); // Oculta el loader después de la transición
    }, 2000);
});
