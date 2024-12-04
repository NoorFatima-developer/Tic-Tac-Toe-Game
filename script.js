// Target DOM elements:
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;           //playerX, playerY

// Store pattern in an array, wesy tu hum array ko string ki form mai b store krskty thy but its better way k aghr hum inko 
// 2D array mai store krdain tuo...

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click",  function(){
        console.log("box was clicked");
        if(turnO) {
            boxes.innerHTML = "O";
            turnO = false;
    }   else {
        boxes.innerHTML = "X";
            turnO = true;
    }
})
})
