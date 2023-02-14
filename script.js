const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth=30;

let isDrawing = false;
let lastX=0;
let lastY=0;
let hue=0;

function draw (e) {
    if (!isDrawing) return 
    // mause must be down // mause kesinlikle aşağıda olmalı 
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();;

    //start line from // başlangıç satırı 

    ctx.moveTo(lastX, lastY);

    //end line at //son satır 

    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;

    hue++;

}


canvas.addEventListener('mousedown',(e)=> {
    isDrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing=false);
canvas.addEventListener('mouseout',()=> isDrawing=false);

