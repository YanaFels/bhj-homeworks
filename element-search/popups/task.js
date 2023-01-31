const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const close = document.querySelectorAll("div.modal__close");
const good = document.querySelector("a.show-success");

modalMain.className = "modal modal_active";

good.onclick = () => {
    modalSuccess.className = "modal modal_active";
    modalMain.className = "modal";
}

function closePopup() {
    if(modalSuccess.className === "modal modal_active") {
    modalMain.className = "modal";
    modalSuccess.className = "modal";
    }
}

close[1].onclick = close[0].onclick = closePopup;

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
       close[i].closest('.modal').className = 'modal';
    };
}