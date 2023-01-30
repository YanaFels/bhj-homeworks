const sub = document.querySelectorAll("ul.menu_sub");
const menuAll = Array.from(document.querySelectorAll("li.menu__item"));

menuAll.forEach(element => {
    element.querySelector("a").onclick = () => {
        sub.forEach(elementUl => elementUl.className = "menu menu_sub");
        element.querySelector("ul").className = "menu menu_sub menu_active";
        return false;
    }
});