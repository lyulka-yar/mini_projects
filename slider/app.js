const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const container = document.querySelector(".container");

const slidesCount = document.querySelector(".main-slide").children.length;
const mainSlide = document.querySelector(".main-slide");

const sideBar = document.querySelector(".sidebar");

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;
let startIndex = 0;

upButton.addEventListener("click", () => {
  change("up");
});

downButton.addEventListener("click", () => {
  change("down");
});

function change(dir) {
  if (dir === "up") {
    ++startIndex;
    // если как в уроке делать -1 то  слайд под номером 1 не
    //отображается и появляется баг с выходом за ганицы
    if (startIndex === slidesCount) {
      startIndex = 0;
    }
  } else if (dir === "down") {
    --startIndex;
    if (startIndex < 0) {
      startIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${height * startIndex}px)`;
  sideBar.style.transform = `translateY(${height * startIndex}px)`;
}
