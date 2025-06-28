// дасгал 4: дарах үед томордог button
const body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "click me";
btn.onclick = log;

body.appendChild(btn);
btn.style.width = "100px";
let width = 100;

function log() {
  width += 10;
  btn.style.width = `${width}px`;
  console.log("btn clicked.....");
}
