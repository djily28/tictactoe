// console.log('coucou');

// console.log())

const grid = document.querySelectorAll('.grid li');
const cross = document.querySelector('#cross');


grid.forEach(li => {
    li.addEventListener('click', function(){
        const displayCross = document.createElement('img');
        displayCross.src = 'img/close.png'; 
        li.appendChild(displayCross);
        });
    });
