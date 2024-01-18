
const boxes = document.querySelectorAll('.box');


function showBoxes() {
   boxes.forEach((box, index) => {
      setTimeout(() => {
         box.classList.add('show');
      }, index * 100); 
   });
}

document.addEventListener('DOMContentLoaded', showBoxes);



const allCourses = [
   { name: "HTML, CSS och Tillgänglighet", studied: true },
   { name: "JavaScript 1", studied: true },
   { name: "UX och UI", studied: true },
   { name: "Frontend-projekt och Agila metoder", studied: false },
   { name: "JavaScript 2", studied: false },
   { name: "Interaktion med CMS", studied: true },
   { name: "Affärsmannaskap", studied: true },
   { name: "Examensarbete", studied: false },
 ];

 function createCourseList() {
   const leftColumn = document.getElementById("leftColumn");
   const rightColumn = document.getElementById("rightColumn");

   allCourses.forEach((course, index) => {
     const listItem = document.createElement("li");
     listItem.textContent = course.name;

     const icon = document.createElement('i');
     icon.className = course.studied ? 'fas fa-check-circle' : 'far fa-circle';
     
     listItem.appendChild(icon);

     // Decide which column to append the list item based on the index
     if (index < allCourses.length / 2) {
       leftColumn.appendChild(listItem);
     } else {
       rightColumn.appendChild(listItem);
     }
   });
 }

 // Call the function to create the course list
 createCourseList();