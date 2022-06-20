const acordeon = document.querySelector(".timeline-section");
const button = document.querySelector(".experiencia");
const activo = document.querySelector(".activo");

button.addEventListener("click", () => {
    acordeon.classList.toggle("activo");
});

if (activo.style.display == "block") {
    activo.style.display = "none";
} else {
    activo.style.display == "block";
};
