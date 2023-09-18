// console.log('coucou');

// console.log())

const grid = document.querySelectorAll(".grid li");
const cross = document.querySelector("#cross");

grid.forEach((li) => {
  li.addEventListener("click", function () {
    if (this.childElementCount === 0) {
      const displayCross = document.createElement("img");
      displayCross.classList.add("case-img");
      displayCross.src = "img/close.png";
      this.appendChild(displayCross);
    }
  });
});
