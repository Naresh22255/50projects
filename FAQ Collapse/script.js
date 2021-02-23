const toggles = document.querySelectorAll(".faq-toggle");

// console.log(toggles);

toggles.forEach((toggle) => {
  console.log(toggle);

  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
