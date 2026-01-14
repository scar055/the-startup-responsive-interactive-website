//stap 1 select the hamburger menu button
const openMenu = document.querySelector("button");
//stap 2 add a click event
//stap 3 add class to the navl list to make it vissible
openMenu.addEventListener("click", function () {
  document.querySelector("ul").classList.toggle("vissible");
  document.querySelector("body").classList.toggle("scroll");
});
