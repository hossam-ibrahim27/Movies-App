let header = document.querySelector(".navbar");
let collapseButton = document.querySelector(".navbar-toggler");
let formcollabse = document.getElementById("formcollabse");

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

collapseButton.addEventListener("click", () => {
    header.classList.add("shadow");
    formcollabse.classList.toggle("formcollabse");
});