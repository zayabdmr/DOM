// 1. body дуудаж байгаа
const body = document.querySelector("body");

// 2. Шинэ эльмент үүсгэж байгаа
const h1 = document.createElement("h1");
const text = document.createElement("div");

// 3. text нэртэй div дотор дурын техт бичих
h1.innerText = "Энэ бол гарчиг";
text.innerText = "дурын техт";

// 4. body дотроо оруулж байгаа (browser дээр гаргаж ирэх)
body.appendChild(h1);
body.appendChild(text);

// 5. style бичих (class)
h1.className = "h1";
h1.style = "color: purple";
text.className = "text";

// 6. юм нэмж бичиж болно
h1.innerText = "hello world, this is h1";
