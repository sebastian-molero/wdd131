const hamburgerMenu = document.querySelector("#mobile__menu");
const nav = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open")
    nav.classList.toggle("active");
})


const yearSpan = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

