
const boxes = document.querySelectorAll('.box');


function showBoxes() {
   boxes.forEach((box, index) => {
      setTimeout(() => {
         box.classList.add('show');
      }, index * 100); 
   });
}

document.addEventListener('DOMContentLoaded', showBoxes);