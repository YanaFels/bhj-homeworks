'use strict';

const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('click', (e) => {
    const checkList = Array.from(e.target.closest('.interest').querySelectorAll('.interest__check'));
    checkList.forEach(element => {
        e.target.checked ? element.checked = true : element.checked = false;
    });
});