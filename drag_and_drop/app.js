const item = document.querySelector(".item");
const placeHolders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeHolders) {
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
}

function dragstart(e) {
  e.target.classList.add("hold");
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}
function dragend(e) {
  e.target.classList.remove("hold", "hide");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add("hovered");
}
function dragLeave(e) {
  e.target.classList.remove("hovered");
}

function dragDrop(e) {
  e.target.classList.remove("hovered");
  item.classList.remove("hovered");

  console.log(e.target);
  e.target.appendChild(item);
}
