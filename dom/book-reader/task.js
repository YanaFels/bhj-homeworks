"use strict"

const fontSize = Array.from(document.querySelectorAll('.font-size'));
const color = Array.from(document.querySelector('.book__control_color').children);
const background = Array.from(document.querySelector('.book__control_background').children);
const book = document.getElementById('book');

fontSize.forEach(element => {
    element.addEventListener('click', ev => {
        ev.preventDefault();
        let lastIndex = fontSize.findIndex(e => e.classList.contains('font-size_active'));
        fontSize[lastIndex].classList.remove('font-size_active');
        element.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        book.classList.add(`book_fs-${element.dataset.size}`);
    });
});

color.forEach(element => {
    element.addEventListener('click', ev => {
        if(!element.classList.contains('color__title')) {
            ev.preventDefault();
            let lastIndex = color.findIndex(e => e.classList.contains('color_active'));
            color[lastIndex].classList.remove('color_active');
            element.classList.add('color_active');
            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            book.classList.add(`book_color-${element.dataset.textColor}`);
        }
    });
});

background.forEach(element => {
    element.addEventListener('click', ev => {
        if(!element.classList.contains('color__title')) {
            ev.preventDefault();
            let lastIndex = background.findIndex(e => e.classList.contains('color_active'));
            background[lastIndex].classList.remove('color_active');
            element.classList.add('color_active');
            book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            book.classList.add(`book_bg-${element.dataset.bgColor}`);
        }
    });
});