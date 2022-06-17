window.addEventListener('load', function()  {
 const canvas =  document.querySelector('canvas');


 const ctx = canvas.getContext('2d');

 canvas.height = window.innerHeight;
 canvas.width = window.innerWidth;

//  ctx.fillStyle = "blue";
//  ctx.fillRect(50, 50, 200, 200);

 let painting = false;

 const startPainting = function () {
    painting = true
    ctx.beginPath()
 }

 const finishedPainting = function () {
    painting = false
    ctx.beginPath()
 }
const draw = function (e){
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke();
    
}
 canvas.addEventListener("mousedown", startPainting);

 canvas.addEventListener("mouseup", finishedPainting);

 canvas.addEventListener("mousemove", draw);
})