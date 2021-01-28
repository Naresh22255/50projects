const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

checkboxes();

function checkboxes() {
  const triggerBottom = window.innerHeight * 0.8;
  // const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
