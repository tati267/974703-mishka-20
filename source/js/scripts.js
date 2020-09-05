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
    var coordinates = { lat: 59.9389, lng: 30.3231 };
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


// Reviews
const reviews = [
  {
    id: 1,
    text:
      "Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке, и мои фотографии сразу стали более стильными, а также набирают больше лайков!",
    author: "Анастасия Красильникова",
    nickname: "@misssssiskras",
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend id nisi non ullamcorper. Nullam nunc dolor, consectetur id consectetur in, rhoncus ac diam. In porttitor efficitur sollicitudin. Donec rhoncus, felis et feugiat fermentum, quam turpis mattis ipsum, in molestie lectus nibh eleifend tortor. Sed fringilla leo magna, eu vulputate lacus venenatis ac. Vivamus ullamcorper dui in ante facilisis lobortis. Vestibulum et venenatis tortor, sed pretium lectus. Suspendisse scelerisque faucibus fermentum. Donec eu venenatis ex. Duis risus ligula, viverra a tristique vitae, hendrerit sed quam. Nam pulvinar aliquet enim sit amet blandit. Donec vitae tortor ut urna rhoncus dignissim id vitae felis. Ut sed leo dapibus, imperdiet nulla eget, molestie odio. Nunc pulvinar quam lectus, ut ultrices orci blandit quis. Cras id varius ante. Morbi vitae lorem ut justo fringilla pulvinar.",
    author: "Катя Сям",
    nickname: "@kras",
  },
  {
    id: 3,
    text:
      "Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек.",
    author: "Лена",
    nickname: "@missss",
  }
];

const text = document.getElementById("reviewsText");
const author = document.getElementById("reviewsAuthor");
const nickname = document.getElementById("reviewsNickname");
const buttonPrev = document.querySelector(".button--prev");
const buttonNext = document.querySelector(".button--next");


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  text.textContent = item.text;
  author.textContent = item.author;
  nickname.textContent = item.nickname;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  text.textContent = item.text;
  author.textContent = item.author;
  nickname.textContent = item.nickname;
}
// show next person
buttonNext.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
buttonPrev.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
