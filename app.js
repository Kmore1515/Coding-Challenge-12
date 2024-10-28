// Grabbing the 2D Drawing & canvas context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const clearCanvas = document.getElementById("clearscrn")
// Task 2: Configure the JS for Drawing Context
let drawing = false;
canvas.addEventListener("mousedown", () => {
    drawing = true;
    ctx.beginPath();
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
});

canvas.addEventListener("mousemove", (event) => {
    if (drawing) {
        // Add your drawing logic here
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
    }});

function clearScreen() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
}
clearCanvas.addEventListener("click", clearScreen)

