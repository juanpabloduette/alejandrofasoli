const activo = document.querySelector(".navbtn");
const menuBtn = document.querySelector(".menu");

activo.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});


