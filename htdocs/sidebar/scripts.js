document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    const searchForm = document.querySelector('.search-form form');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchForm.querySelector('input[name="search"]').value;
        // Aquí implementa la lógica de búsqueda de medicamentos con el término ingresado
        // Puedes realizar una solicitud a una API o filtrar los elementos en la página
        console.log('Búsqueda de medicamentos:', searchTerm);
        searchForm.reset();
    });
});

$(document).ready(function () {
    // Al hacer clic en el botón de alternancia del menú
    $('.menu-toggle').click(function () {
        $('.menu').toggleClass('active'); // Agrega o quita la clase 'active' para mostrar u ocultar el menú
    });

    // Al hacer clic en un enlace del menú (para cerrar el menú en dispositivos móviles)
    $('.menu ul li a').click(function () {
        $('.menu').removeClass('active'); // Oculta el menú al hacer clic en un enlace
    });
});
