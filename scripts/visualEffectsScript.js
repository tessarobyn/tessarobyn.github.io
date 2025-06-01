const img = document.getElementById("landingImg");

let x = 0;
let y = 0;
let currentMouseX = 0;
let currentMouseY = 0;

const moveAmount = 0.4;
const maxMovementAllowance = 10;

img.style.objectPosition = x + "px " + y + "px";

const checkBackgroundRatio = () => {
  const container = document.getElementById("landingImgContainer");
  if (container.offsetWidth >= container.offsetHeight) {
    img.style.height = "auto";
    img.style.width = "100%";
  } else {
    img.style.width = "auto";
    img.style.height = "100%";
  }
};

checkBackgroundRatio();

const moveBackground = (newMouseX, newMouseY) => {
  const container = document.getElementById("landingImgContainer");
  const nestedCont = document.getElementById("nestedImgContainer");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const nestWidth = nestedCont.offsetWidth;
  const nestHeight = nestedCont.offsetHeight;
  const hiddenAreaX = nestWidth - containerWidth;
  const hiddenAreaY = nestHeight - containerHeight;

  const smallerArea = hiddenAreaX > hiddenAreaY ? hiddenAreaY : hiddenAreaX;

  const movementAllowance =
    maxMovementAllowance > smallerArea ? smallerArea : maxMovementAllowance;

  if (currentMouseX > newMouseX) {
    x = x >= -movementAllowance ? x - moveAmount : x;
  } else {
    x = x <= movementAllowance ? x + moveAmount : x;
  }

  if (currentMouseY > newMouseY) {
    y = y >= -movementAllowance ? y - moveAmount : y;
  } else {
    y = y <= movementAllowance ? y + moveAmount : y;
  }

  img.style.objectPosition = x + "px " + y + "px";

  currentMouseX = newMouseX;
  currentMouseY = newMouseY;
};

document.body.addEventListener("mousemove", (e) => {
  moveBackground(e.clientX, e.clientY);
});

window.addEventListener("resize", (e) => {
  console.log("here");
  checkBackgroundRatio();
});
