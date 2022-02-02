const navToggle = document.getElementsByClassName("nav__list")[0];
const hamburguer = document.getElementsByClassName("hamburguer")[0];
let open = false;

function toggleMenu() {
    navToggle.classList.toggle("nav__list--active");
    navToggle.style.transition = "transform 0.5s ease-in-out";
}

hamburguer.addEventListener("click", () => {
    toggleMenu();
    if (document.querySelector(".nav__list.nav__list--active")){
        open =  true;
    }
})

window.addEventListener("click", (e) => {
    if (e.target !== navToggle && e.target !== hamburguer && open == true) {
        toggleMenu();
        open = false;
    }
})

const arrivalsBtn = document.getElementById("arrivalsBtn");
const cardArr = document.getElementsByClassName("arrivals__card");

function seeMore() {
    for (let i = 0; i <= cardArr.length; i++) {
        if (i > 8 && cardArr[i].hasAttribute("aria-hidden")) {
            cardArr[i].removeAttribute("aria-hidden");
            arrivalsBtn.innerText = "Show Less";
        } else if (i > 8 && cardArr[i].hasAttribute("aria-hidden") == false) {
            cardArr[i].setAttribute("aria-hidden", "true");
            arrivalsBtn.innerText = "Show More";
        }
    }
}


arrivalsBtn.addEventListener("click", () => {
    seeMore();
})

