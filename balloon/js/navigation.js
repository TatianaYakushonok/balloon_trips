const navigationLink = document.querySelectorAll('.navigation__link');
const navToggle = document.querySelector('#nav-toggle');

navigationLink.forEach(link => {
    link.addEventListener('click', () => navToggle.checked = false )
})