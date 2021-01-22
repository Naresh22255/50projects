const pannels = document.querySelectorAll(".pannel");

// console.log(pannels[1]);

pannels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  pannels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
