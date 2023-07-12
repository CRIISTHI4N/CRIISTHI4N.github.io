const wellcome = document.querySelector(".wellcome");
const iconNav = document.querySelector(".nav_enlace_icon");
const nav = document.querySelector(".nav__enlaces");
const xp = document.querySelectorAll(".article__experiencia");
const imgPerfil = document.querySelector(".img__perfil");

document.addEventListener("DOMContentLoaded", () => {
    wellcome.classList.add("wellcome--opacity");
});

iconNav.addEventListener("click", () => {
    nav.classList.toggle("nav__enlaces__visible");
});

opacityTransitionElement(imgPerfil);
opacityElement(imgPerfil);

xp.forEach((element) => {
    opacityTransitionElement(element);
    opacityElement(element);
});

function opacityElement(element) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            element.style.opacity = "1";

        } else {
            element.style.opacity = "0";
        }
    });

    observer.observe(element);
}

// FUNCIONES
function opacityTransitionElement(element) {
    element.classList.add("opacityElement");
}


