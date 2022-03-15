"use strict";
const box = document.querySelector("#box");
<<<<<<< HEAD
const hammerBox = new Hammer(box);
hammerBox.on('panleft', function (ev) {
    box.classList.add('move-to-left');
});
const card = document.querySelector(".card");
const cardFront = document.querySelector(".card__front");
const cardBack = document.querySelector(".card__back");
const hammerCard = new Hammer(card);
hammerCard.on('panleft panright', function (event) {
    if (event.deltaX > 300 || event.deltaX < -300) {
        cardFront.classList.toggle("flipped");
        cardBack.classList.toggle("flipped");
    }
});
=======
const hammer = new Hammer(box);
// console.dir(hammer);
hammer.on('panleft panright tap press', function (ev) {
    console.log(ev);
});
>>>>>>> b35121f18bb6ee5f091c45eda450734fc4a0cce2
