// 1. isDone, isDone false

// if(isDone) icon or element
// isDone innerText test
// isDone false innerText number

// дасгал 2:
function renderDay(isDone, innerText) {
  const body = document.querySelector("body");
  let div = document.createElement("div");

  if (isDone) {
    div.innerText = "test";
  } else {
    div.innerText = innerText;
  }
  div.className = "day";

  body.appendChild(div);
}

const array = [
  {
    date: "1",
    isDone: true,
  },
  {
    date: "2",
    isDone: false,
  },
  {
    date: "3",
    isDone: true,
  },
  {
    date: "4",
    isDone: false,
  },
  {
    date: "5",
    isDone: true,
  },
  {
    date: "6",
    isDone: false,
  },
  {
    date: "7",
    isDone: true,
  },
];

for (let i = 0; i < array.length; i++) {
  renderDay(array[i].isDone, i + 1);
}
