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


//Map
if (document.querySelector(".map")) {
  var imageMap = document.querySelector(".map__image-wrapper");

  function initMap() {
    var coordinates = {lat: 59.9389, lng: 30.3231};
    var map = new google.maps.Map(document.getElementById("google-map"), {
      zoom: 17,
      center: coordinates
    });
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "./img/icon-map-pin.svg",
        scaledSize: new google.maps.Size(67, 100)
      }
    });
  }

  function hideImageMap() {
    imageMap.classList.add("visually-hidden");
  }

  window.onload = hideImageMap;
  window.addEventListener("load", initMap);
}
