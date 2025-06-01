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
    console.log("changingWidth");
    img.style.height = "auto";
    img.style.width = "100%";
  } else {
    console.log("changingHeight");
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

  console.log(movementAllowance);
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
  //   const currentImgPos = img.style.objectPosition;
  //   console.log(currentImgPos); -> should be stored in x and y

  //   x boundary = smallerArea to containerWidth+smallerArea. Same principle for y
};

// alert(x);

document.body.addEventListener("mousemove", (e) => {
  moveBackground(e.clientX, e.clientY);
});

window.addEventListener("resize", (e) => {
  console.log("here");
  checkBackgroundRatio();
});

// const height = container.clientHeight;
// const width = container.clientWidth;
// if (width >= height) {
//   container.style.backgroundSize = width * 1.2 + "px";
// }
// container.style.backgroundPosition =
//   -width * 0.1 + " px" + -height * 0.1 + "px";

// console.log("done");
// container.addEventListener("mousemove", (e) => {
//   container.style.backgroundPositionX = e.clientX + "px";
//   container.style.backgroundPositionY = e.clientY + "px";
//   console.log(e.clientX, e.clientY);
// });
