const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  function clearStatus(elements) {
    for (const element of elements) {
      element.classList.remove("active");
    }
  }
  slider.addEventListener("click", () => {
    clearStatus(sliders);
    slider.classList.add("active");
  });
});
