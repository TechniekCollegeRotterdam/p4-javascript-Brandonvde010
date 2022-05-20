//Oefening angry-birds
const bird = document.querySelector(".bird");
let count = 0;
// aan de bird class wordt styling toegepast.
bird.addEventListener("click", function() {
    count += 50;
    bird.style.left = count + "px";
})


window.addEventListener("keydown", function(e){
    if(e.key == "ArrowLeft") {
        count -= 50;
        bird.style.left = count + "px";
    }
    if(e.key == "ArrowRight") {
        count += 50;
        bird.style.left = count + "px";
    }
    if(e.key == "ArrowUp") {
        count += 50;
        bird.style.bottom = count + "px";
    }
    if(e.key == "ArrowDown") {
        count += 50;
        bird.style.top = count + "px";
    }
    })

