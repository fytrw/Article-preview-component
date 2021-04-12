const button = document.querySelector('.show-social');
const popup = document.querySelector('.pop');

button.addEventListener('click', () => {
    popup.classList.toggle('show');
})