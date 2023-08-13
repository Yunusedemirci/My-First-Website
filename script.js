const mainButton = document.getElementById("mainButton");
const hiddenButtons = document.querySelector(".hidden-buttons");
const subButtons = document.querySelectorAll(".sub-button");

mainButton.addEventListener("click", () => {
  hiddenButtons.classList.toggle("expand");

  if (hiddenButtons.classList.contains("expand")) {
    subButtons.forEach((button, index) => {
      setTimeout(() => {
        button.style.opacity = "1";
        button.style.transform = "translateX(0)";
      }, 100 * index);
    });
  } else {
    subButtons.forEach((button) => {
      button.style.opacity = "0";
      button.style.transform = "translateX(-20px)";
    });
  }
});
