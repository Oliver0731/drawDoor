// Canvas Template

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  ctx.fillStyle = "orange";
  drawDoor(200, 200, 50, 100,"green")
  drawDoor(400, 200, 50, 100, "brown")
  drawDoor(300, 300, 50, 100, "orange" )
  drawDoor(0, 0, 1000, 200, "purple")

  // Redraw
  requestAnimationFrame(draw);
}

function drawDoor(x, y, w, h, frameColor) {
ctx.fillStyle = frameColor
ctx.fillRect(x, y, w, h)

ctx.fillStyle = "black";
ctx.fillRect(x + 5, y + 5, w - 10, h - 10);
}