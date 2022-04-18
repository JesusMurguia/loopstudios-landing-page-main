window.onload = function () {
    let menuButton = document.querySelector('[data-menu-btn]')
    let menu = document.querySelector('[data-menu]')
    let menuClose = document.querySelector('[data-menu-close-btn]');
    let navLinks = document.querySelectorAll('a.nav-link');

    menuButton.addEventListener('click', () => {
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });


}
