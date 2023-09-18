// console.log('coucou');

// console.log())

const grid = document.querySelectorAll(".grid li");

let count = 0;
grid.forEach((li) => {
  li.addEventListener("click", function () {
    if (this.childElementCount === 0) {
		count++;
		const displayImg = document.createElement("img");
		displayImg.classList.add("case-img");
		this.appendChild(displayImg);
		displayImg.src = count % 2 == 0 ?  "img/close.png": "img/rec.png";	
    }
  });
});
