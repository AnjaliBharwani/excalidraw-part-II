
const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;


const c = canvas.getContext("2d");

let drawingColor = "black";
let previousPosition = null ;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = 2; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){  
    let currentPosition = [ e.clientX , e.clientY ];
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
function erase(event) {
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    c.globalCompositeOperation = "destination-out";
    c.clearRect(event.clientX, event.clientY, 20, 20);
  }

  const pencil = document.getElementById("pencil");
let isPencilActive = false ;

const colorPicker = document.getElementById("color-picker");


colorPicker.addEventListener("change", () => {
    drawingColor = colorPicker.value ;
    c.strokeStyle = drawingColor;
});

function onPencilClick() {
    pencil.classList.toggle("active")
    isPencilActive = !isPencilActive ;
    if(isPencilActive) {
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown); 
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown)
    }
}
pencil.addEventListener("click", onPencilClick) ;

