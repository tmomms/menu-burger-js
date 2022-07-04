const menu = document.querySelector(".menus");
const main = document.querySelector(".main");
const container = document.querySelector(".contain");
console.log(menu, main);

function openPage(){
    container.classList.toggle('main')
}

menu.addEventListener("click", openPage);
