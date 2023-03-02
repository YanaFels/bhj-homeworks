'use strict'

const items = document.getElementById('items');//блок со всеми курсами
const img = document.getElementById('loader');//картинка загрузки

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        img.classList.remove('loader_active');

        let receivedData = xhr.response;
        let currencyAll = receivedData.response.Valute;

        for (let curency in currencyAll) {
            const item = document.createElement('div')
            item.classList.add('item');
            item.innerHTML = `
                <div class="item__code"> ${currencyAll[curency].CharCode} </div>
                <div class="item__value"> ${currencyAll[curency].Value} </div>
                <div class="item__currency"> руб. </div>`
            items.appendChild(item);
        }
    }
});