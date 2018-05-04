
function navButton() {
  var menu = document.getElementById("menu-elements");
  if (menu.className === ("responsive")) {
    menu.classList.remove("responsive");
  }
  else {
    menu.classList.add("responsive");
  }
}
var slideIndex = 1;
showDivs(slideIndex);

function minusDivs() {
  showDivs(slideIndex += -1);
}
function plusDivs() {
  showDivs(slideIndex += 1);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName('dot');
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "#bbb";
  }
  x[slideIndex - 1].style.display = "block";
  y[slideIndex - 1].style.backgroundColor = "transparent";
}
document.getElementById('slide-left').addEventListener("click", minusDivs);
document.getElementById('slide-right').addEventListener("click", plusDivs);
document.getElementById('nav-button').addEventListener("click", navButton);