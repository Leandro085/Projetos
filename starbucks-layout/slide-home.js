var balls = document.querySelector(".balls");
var quant = document.querySelector(".slides .image");
var current = 0;
var imagem = document.getElementById("current");
var next = document.getElementById("next");
var previous = document.getElementById("previous");

for (let i = 0; i < quant.length; i++) {
    var div = document.createElement("div");
    div.id = i;
    balls.appendChild(div);
}
document.getElementById("0").classList.add("img-current");

var pos = document.querySelectorAll(".balls div");

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener("click", () => {
        current = pos[i];
        slide();
    })
}

previous.addEventListener("click", () => {
    current--;
    rolar = false;
    slide();
})

next.addEventListener("click", () => {
    current++;
    rolar = false;
    slide();
})

function slide () {
    if(current >= quant.length){
        current = 0;
    }
    else if (current < 0) {
        current = quant.length - 1;
    }
    document.querySelector(".img-current").classList.remove(".img-current");
    imagem.style.marginLeft = - 1024 * current + 'px';
    document.getElementById(current).classList.add("img-current");
}

slide();