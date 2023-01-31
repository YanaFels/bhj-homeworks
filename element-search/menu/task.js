const sub = document.querySelectorAll("ul.menu_sub");
const menuAll = Array.from(document.querySelectorAll("li.menu__item"));

menuAll.forEach(element => {
    if (element.closest(".menu_sub") === null) {
        element.querySelector("a").onclick = () => {
            if (element.querySelector("ul") && element.querySelector("ul").className === "menu menu_sub menu_active") {
                element.querySelector("ul").className = "menu menu_sub";
                return false;
            } else {
            sub.forEach(elementUl => elementUl.className = "menu menu_sub");
                if (element.querySelector("ul")) {
                    element.querySelector("ul").className = "menu menu_sub menu_active";
                    return false;
                }
           }   
        }
    }
});