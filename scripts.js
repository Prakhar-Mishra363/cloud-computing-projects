document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const main = document.querySelector('main');

    button.addEventListener('click', function() {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        main.style.backgroundColor = randomColor;
    });
});
