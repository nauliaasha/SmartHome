const menuToggle = document.querySelector('.nav-toggle input');
const navListElement = document.querySelector('.nav-list');
const navbarElement = document.querySelector('.navbar');

menuToggle.addEventListener('click', function () {
    navListElement.classList.toggle('slide');
})

window.addEventListener('scroll', function() {
    if (pageYOffset > 10) {
        navbarElement.classList.add('blue-border-sticky');
    } else {
        navbarElement.classList.remove('blue-border-sticky');
    }
});