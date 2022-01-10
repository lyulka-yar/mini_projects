const board = document.getElementById("board");
const SQUARES_COUNT = 1804;

// const colors = ["tomato", "purple", "yellow", "red", "light-blue", "green"];

let COLORS = [];

while (COLORS.length < 250) {
  COLORS.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

function rand(frm, to) {
  return ~~(Math.random() * (to - frm)) + frm;
}

for (let i = 0; i < SQUARES_COUNT; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setRandomColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeRandomColor(square);
  });

  board.appendChild(square);
}

function setRandomColor(element) {
  let index = Math.floor(Math.random() * COLORS.length);
  console.log(index);
  element.style.backgroundColor = COLORS[index];
  element.style.boxShadow = `0 0 15px ${COLORS[index]}, 0 5px 15px ${COLORS[index]}`;
}

function removeRandomColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 3px #1d1d1d`;
}
