const hamburgerMenu = document.querySelector("#mobile__menu");
const nav = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open")
    nav.classList.toggle("active");
})