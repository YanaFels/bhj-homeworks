// 1 вариант с форматом времени 00:00:59 и скачиванием файла с помощью click()

// const initialTimer = document.getElementById("timer");
// let seconds = Number(initialTimer.textContent);
// initialTimer.textContent =  new Date(2023, 1, 1, 0, 0, seconds).toLocaleTimeString();
// const link = document.getElementById("link"); 
// function countdownTimer() {
//     seconds--;
//     initialTimer.textContent =  new Date(2023, 1, 1, 0, 0, seconds).toLocaleTimeString();

//     if(seconds === 0) {
//         clearInterval(intervalId);
//         alert('Вы победили в конкурсе!');
//         link.click();
//     }
// }
// const intervalId = setInterval(countdownTimer, 1000);

// 2 вариант с форматом времени 00:00:59 и скачиванием файла с помощью window.location

const initialTimer = document.getElementById("timer");
let seconds = Number(initialTimer.textContent);
initialTimer.textContent =  new Date(2023, 1, 1, 0, 0, seconds).toLocaleTimeString(); 
function countdownTimer() {
    seconds--;
    initialTimer.textContent =  new Date(2023, 1, 1, 0, 0, seconds).toLocaleTimeString();

    if(seconds === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
        window.location.href = "./teb-full.rar";
    }
}
const intervalId = setInterval(countdownTimer, 1000);