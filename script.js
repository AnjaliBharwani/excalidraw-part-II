const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const c=canvas.getContext("2d");

let drawingColor = "black";

let previousPosition = null ;

function onMouseDown(e) {
    console.log("mouse down");
    previousPosition = [ e.clientX , e.clientY];
    c.lineWidth = 2; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){ 
    let currentPosition = [ e.clientX , e.clientY ];

    console.log(currentPosition);
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}