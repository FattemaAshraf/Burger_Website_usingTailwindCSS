/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

//hidden menu by click on any link
navLink.forEach((link)=> link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  }));
//hidden menu when click close
closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
//show menu win click in toggle icon
hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});
