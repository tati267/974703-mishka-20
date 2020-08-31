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

var buttonBurger = document.querySelector(".js-burger");
var navigationLink = document.querySelector(".navigation__item--off");

buttonBurger.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigationLink.classList.toggle('navigation__item--on');
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("navigation__item--on")) {
      modal.classList.remove("navigation__item--on");
    }
  }
});
