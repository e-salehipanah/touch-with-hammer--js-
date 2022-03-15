"use strict";
const box = document.querySelector("#box");
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
