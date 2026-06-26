const opening = document.getElementById("opening");
const logo = document.getElementById("opening-logo");
const main = document.getElementById("main-content");

window.addEventListener("load", () => {

    logo.classList.add("logo-enter");

    setTimeout(() => {
        logo.classList.remove("logo-enter");
        logo.classList.add("logo-finish");
    }, 2300);

    setTimeout(() => {

        opening.style.opacity = "0";

        main.classList.add("main-show");

        // スクロールを有効にする
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";

    }, 3300);

    setTimeout(() => {
        opening.remove();
    }, 4300);

});