//Oefening angry-birds
const bird = document.querySelector(".bird");
let count = 0;
// aan de bird class wordt styling toegepast.
bird.addEventListener("click", function() {
    count += 50;
    bird.style.left = count + "px";
})

