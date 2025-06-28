// 1. body дуудаж байгаа
const body = document.querySelector("body");

// 2. Шинэ эльмент үүсгэж байгаа
const text = document.createElement("div");

// 3. text нэртэй div дотор дурын техт бичих
text.innerText = "дурын техт";

// 4. body дотроо оруулж байгаа (broswer дээр гаргаж ирэх)
body.appendChild(text);

// 5. style бичих (class)
text.className = "text";
