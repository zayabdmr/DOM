// Дасгал 1:
// <div class="btn">7</div>
const body = document.querySelector("body");
const div = document.createElement("div");
div.innerText = "7";
body.appendChild(div);
div.className = "btn";

const div1 = document.createElement("div");
div1.innerText = "8";
body.appendChild(div1);
div1.className = "btn";
