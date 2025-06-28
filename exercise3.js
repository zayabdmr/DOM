// дасгал 3: 50%
const body = document.querySelector("body");
const bigContainer = document.createElement("div");
bigContainer.className = "bigContainer";
body.appendChild(bigContainer);
let redWidth = 50;
let blueWidth = 50;

const red = document.createElement("div");
red.innerText = redWidth;
bigContainer.appendChild(red);
red.className = "red";

const blue = document.createElement("div");
blue.innerText = blueWidth;
bigContainer.appendChild(blue);
blue.className = "blue";

function blueWidthControl() {
  blueWidth += 1;
  redWidth -= 1;

  blue.style.width = `${blueWidth}%`;
  red.style.width = `${redWidth}%`;
  blue.innerText = blue.style.width;
  red.innerText = red.style.width;

  if (blue.innerText > 100) {
    console.log(red.innerText);
  }
}

function redWidthControl() {
  redWidth += 1;
  blueWidth -= 1;
  blue.style.width = `${blueWidth}%`;
  red.style.width = `${redWidth}%`;
  red.innerText = red.style.width;
  blue.innerText = blue.style.width;
}
red.onclick = redWidthControl;

blue.onclick = blueWidthControl;
