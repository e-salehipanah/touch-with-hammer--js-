"use strict";
const box = document.querySelector("#box");
const hammer = new Hammer(box);
// console.dir(hammer);
hammer.on('panleft', function (ev) {
    box.classList.add('moved')
});
