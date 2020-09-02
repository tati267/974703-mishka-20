//Modal
var buttonOrder = document.querySelector(".button-order--js");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

buttonOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--on");
  overlay.classList.add("overlay--on");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--on")) {
      modal.classList.remove("modal--on");
      overlay.classList.remove("overlay--on");
    }
  }
});

//Burger
const buttonBurger = document.querySelector(".js-burger");
const navigationLink = document.querySelector(".navigation__item--off");

buttonBurger.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  navigationLink.classList.toggle("navigation__item--on");
});
