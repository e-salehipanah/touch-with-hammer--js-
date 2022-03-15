const box = document.querySelector("#box")
const hammer = new Hammer(box);

// console.dir(hammer);

hammer.on('panleft panright tap press',function(ev){
    console.log(ev);
    
})

