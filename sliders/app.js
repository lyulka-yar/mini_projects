const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  slider.addEventListener("click", () => {
    clearStatus(sliders);
    slider.classList.add("active");
  });
});

function clearStatus(elements) {
  for (const element of elements) {
    element.classList.remove("active");
  }
}
