function setCanvasSize() {
  const body = document.body;
  const canvas = document.getElementById("laptopContainer");
  canvas.width = body.offsetWidth;
  canvas.height = body.offsetHeight;
}

setCanvasSize();
