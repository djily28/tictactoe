// console.log('coucou');

// console.log())

const grid = document.querySelectorAll(".grid li");
const player = document.querySelector(".player");
let count = 0;

displayPlayerTurn();
grid.forEach((li) => {
  li.addEventListener("click", function () {
    if (this.childElementCount === 0) {
      const displayImg = document.createElement("img");
      displayImg.classList.add("case-img");
      this.appendChild(displayImg);
      displayImg.src = getPlayerTurn() == 0 ? "img/close.png" : "img/rec.png";
      count++;
      displayPlayerTurn();
    }
  });
});
function getPlayerTurn() {
  return count % 2;
}

function displayPlayerTurn() {
  player.innerText = `C'est au tour du joueur numéro ${
    getPlayerTurn() + 1
  } de jouer.`;
}
