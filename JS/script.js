const letterTitle = document.querySelectorAll(".letterTitle");
const contener = document.querySelector(".contener");
const modalInfo = document.getElementById("modalInfo");
const fermeModalInfo = document.querySelector(".fermeModalInfo");

let tabLetterTitle = [21, 23, 10, 18, 22, 9, 11, 12, 5, 6, 15, 36, 37, 31, 29, 1, 19, 33, 20, 35, 4, 7, 8, 28, 13, 27, 16, 30, 34, 17, 14, 38, 0, 24, 25, 32, 2, 3, 26];
let varNumberRamdomLetterTitle;
let TFSetInterval = false;

const functionNumberRamdom = (max = 5000, min = 750) => Math.round(Math.random() * (max - min) + min);

tabLetterTitle.forEach(el => {
    setTimeout(() => {
        letterTitle[el].style.visibility = "visible";
    }, functionNumberRamdom());
});

contener.addEventListener("click", () => {
    modalInfo.classList.add("modal-active");
});

fermeModalInfo.addEventListener("click", () => {
    modalInfo.classList.remove("modal-active");
});
