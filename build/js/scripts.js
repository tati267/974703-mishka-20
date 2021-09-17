//Navigation
var navItems = document.querySelectorAll(
  ".navigation__item:not(:first-of-type)"
);
var burgerBtn = document.querySelector(".js-burger");

burgerBtn.classList.add("button--show");
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("button--close");

  navItems.forEach(function (item) {
    item.classList.toggle("navigation__item--off");
  });
});

//Modal
var buttonOrder = document.querySelectorAll(".button-order--js");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

if (buttonOrder) {
  buttonOrder.forEach(function (button) {
    button.addEventListener("click", function () {
      modal.classList.add("modal--on");
      overlay.classList.add("overlay--on");
    });
  });

  if (overlay) {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("overlay--on");
      modal.classList.remove("modal--on");
    });
  }
}

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
      center: coordinates,
    });
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "./img/icon-map-pin.svg",
        scaledSize: new google.maps.Size(67, 100),
      },
    });
  }

  function hideImageMap() {
    imageMap.classList.add("visually-hidden");
  }

  window.onload = hideImageMap;
  window.addEventListener("load", initMap);
}

// Reviews
var reviews = [
  {
    id: 1,
    text: "What a great basket to store our daughter’s toys! I love the shape and size(we ordered the largest size), and you can see that the basket is really well made. By choosing a more neutral color we’ll also be able to use the basket in the future in all kinds of spaces.Really happy with our purchase!",
    author: "Anna Barns",
    nickname: "@misssssiskras",
  },
  {
    id: 2,
    text: "Extremely well made and just what I wanted!! I purchased two of the largest sized poufs and could not be happier! The seller was very easy to communicate with and extremely accommodating. If you are on the fence about purchasing these, DO IT!! You won’t be sorry! I’ve had them and have been using them daily for a foot rest/extra seating in my living room and they are just perfect!!",
    author: "Lori Czerenda",
    nickname: "@lori",
  },
  {
    id: 3,
    text: "Item is absolutely gorgeous and really good quality, considering Covid shipping was pretty good, I had it custom made in the colour I wanted and seller was always responsive any time I had a question, I would highly recommend seller and product. I bought this as storage for my cats toys ",
    author: "Jackie Host",
    nickname: "@jackie",
  },
];

var text = document.getElementById("reviewsText");
var author = document.getElementById("reviewsAuthor");
var nickname = document.getElementById("reviewsNickname");
var buttonPrev = document.querySelector(".button--prev");
var buttonNext = document.querySelector(".button--next");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  text ? (text.textContent = item.text) : null;
  author ? (textContent = item.author) : null;
  nickname ? (textContent = item.nickname) : null;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  text.textContent = item.text;
  author.textContent = item.author;
  nickname.textContent = item.nickname;
}

if (buttonPrev) {
  // show prev person
  buttonPrev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
}

if (buttonNext) {
  // show next person
  buttonNext.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
}
