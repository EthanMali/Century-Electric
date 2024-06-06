const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});
