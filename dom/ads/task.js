'use strict'

const text = Array.from(document.querySelectorAll(".rotator__case"));
let number = 0; 
let speed = text[number].dataset.speed;

function showText() {
    text[number].classList.add("rotator__case_active");
}
function hiddenText() {
    text[number].classList.remove("rotator__case_active");
}
function countText() {
    if (number >= (text.length - 1)) {
        number = 0;
    } else {
        number++;
    }
}
function dataAttr() {
    text[number].style.color = text[number].dataset.color;
    speed = text[number].dataset.speed;
}
function activeRotator() {
    hiddenText();
    countText();
    dataAttr();
    showText();
    clearTimeout(timerId);
    timerId = setInterval(activeRotator, speed);
}
let timerId = setInterval(activeRotator, speed);