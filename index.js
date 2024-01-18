
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
   { name: "Introduction to HTML", studied: true },
   { name: "Introduction to CSS", studied: true },
   { name: "Introduction to JavaScript", studied: true },
   { name: "HTML Basics", studied: false },
   { name: "HTML5 and Beyond", studied: false },
   { name: "CSS Fundamentals", studied: true },
   { name: "Responsive Web Design", studied: true },
   { name: "GitHub Basics", studied: false },
   { name: "Bootstrap Essentials", studied: false },
   { name: "Figma for Designers", studied: false },
   { name: "AutoCAD Basics", studied: false },
   { name: "Photoshop Fundamentals", studied: true },
   { name: "DIALux Lighting Design", studied: false }
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