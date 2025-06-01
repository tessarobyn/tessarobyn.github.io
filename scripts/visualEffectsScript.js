const img = document.getElementById("landingImg");

let x = 0;
let y = 0;
let currentMouseX = 0;
let currentMouseY = 0;

const moveAmount = 0.4;
img.style.objectPosition = x + "px " + y + "px";

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
  console.log(smallerArea);

  if (currentMouseX > newMouseX) {
    x = x >= -smallerArea ? x - moveAmount : x;
  } else {
    x = x <= smallerArea ? x + moveAmount : x;
  }

  if (currentMouseY > newMouseY) {
    y = y >= -smallerArea ? y - moveAmount : y;
  } else {
    y = y <= smallerArea ? y + moveAmount : y;
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
