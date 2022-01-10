const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeCount = document.querySelector("#time");
const board = document.querySelector("#board");

let time = 0;
let score = 0;
let COLORS = [];

while (COLORS.length < 50) {
  COLORS.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}
function rand(frm, to) {
  return ~~(Math.random() * (to - frm)) + frm;
}

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    createCircle();
    e.target.remove();
  }
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    screens[1].classList.add("up");
    time = parseInt(e.target.getAttribute("data-time"));
    createCircle();
    startGame(time);
  }
});

function startGame(value) {
  setInterval(updateTime, 1000);
  setTime(value);
}
function setTime(value) {
  timeCount.innerHTML = `00:${value}`;
}
function createCircle() {
  const circle = document.createElement("div");
  const { width, height } = board.getBoundingClientRect();

  let size = getRandomNumber(10, 80);
  let index = Math.floor(Math.random() * COLORS.length);

  const x = getRandomNumber(1, width - size);
  const y = getRandomNumber(1, height - size);

  circle.classList.add("circle");

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = COLORS[index];

  board.append(circle);
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function changeSize() {
  let circle = document.querySelector(".circle");
  let { width, height } = document
    .querySelector(".circle")
    .getBoundingClientRect();
  //   console.log(circle);

  circle.style.transition = "all ease 1s";
  circle.style.width = `${width - 10}px`;
  circle.style.height = `${height - 10}px`;
}
function updateTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    changeSize();

    setTime(current);
  }
}
function finishGame() {
  timeCount.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span> </h1>`;
}
