/* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*//* Slide menu*/

/* source: https://www.w3schools.com/howto/howto_js_sidenav.asp */

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "450px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

/* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*//* Filtter*/

/* source: https://www.w3schools.com/howto/howto_js_portfolio_filter.asp */

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

/* source: https://www.w3schools.com/howto/howto_js_dropdown.asp */


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay *//* Overlay */

/* Subsription Overlay source: https://www.w3schools.com/howto/howto_css_overlay.asp  */


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
