document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const menu = document.querySelector('.menu ul');

    toggle.addEventListener('change', function () {
        menu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (para dispositivos móviles)
    const menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
            toggle.checked = false;
        });
    });
});
