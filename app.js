// Grabbing the 2D Drawing & canvas context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const lineButton = canvas.getElementById("lineButton")
const rectangleButton = canvas.getElementById("rectangleButton")
const clearCanvas = document.getElementById("clearscrn")
const colorSelector = document.getElementById("colorSelector")
// Task 2: Configure the JS for Drawing Context
let drawing = false;
canvas.addEventListener("mousedown", () => {
    drawing = true; // Makes the canvas draw when mouse is clicked down
    ctx.beginPath(); // Starts new line
});
lineButton.addEventListener("click", () => { // Changes mode to line
    currentMode = "line"
});
rectangleButton.addEventListener("click", () => { // Changes mode to rectangle
    currentMode = "rectangle" 
})
canvas.addEventListener("mouseup", () => {
    drawing = false; // Stops the drawing when mouse button is released
});

canvas.addEventListener("mousemove", (event) => {
    if (drawing) {
        if(currentMode === "line") {
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop); // This is the logic that makes the line follow the mouse 
        ctx.stroke(); 
        ctx.strokeStyle = colorSelector.value; // Changes the color of the stroke with the color selector button
        } else if(currentMode === "rectangle") {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing rectangle
            ctx.rect(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop));
            ctx.stroke();
    
    }});
 // Task 4: Add Color Selection and Canvas Clearing
function clearScreen() { // Clears the canvas of everything
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
}
clearCanvas.addEventListener("click", clearScreen) // Makes the Clear button an actual button that functions


