// Grabbing the 2D Drawing & canvas context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const clearCanvas = document.getElementById("clearscrn")
const colorSelector = document.getElementById("colorSelector")
// Task 2: Configure the JS for Drawing Context
let drawing = false;
canvas.addEventListener("mousedown", () => {
    drawing = true; // Makes the canvas draw when mouse is clicked down
    ctx.beginPath(); // Starts new line
});

canvas.addEventListener("mouseup", () => {
    drawing = false; // Stops the drawing when mouse button is released
});

canvas.addEventListener("mousemove", (event) => {
    if (drawing) {
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop); // This is the logic that makes the line follow the mouse 
        ctx.stroke(); 
        ctx.strokeStyle = colorSelector.value;
    }});
 // Task 4
function clearScreen() { // Clears the canvas of everything
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
}
clearCanvas.addEventListener("click", clearScreen) // Makes the Clear button an actual button that functions

