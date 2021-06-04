"use strict";

var swiper1 = document.querySelector('.slider-container');
var swiper2 = document.querySelector('.swiper-container');
var burger = document.querySelector('.burger');
var close = document.querySelector('.main-menu__close');
var mainMenu = document.querySelector('.main-menu');
var playButtons = document.querySelectorAll('.videos-play');
var swiperSlider1 = new Swiper(swiper1, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 105
});
var swiperSlider2 = new Swiper(swiper2, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  fadeEffect: {
    crossFade: true
  },
  effect: 'fade',
  navigation: {
    nextEl: '.main-slider__btn--right',
    prevEl: '.main-slider__btn--left'
  }
});
burger.addEventListener('click', function () {
  mainMenu.classList.add('main-menu--visible');
});
close.addEventListener('click', function () {
  mainMenu.classList.remove('main-menu--visible');
});

var modalCloseEscFunction = function modalCloseEscFunction(event) {
  if (event.keyCode === 27) {
    if (mainMenu.classList.contains("main-menu--visible")) {
      event.preventDefault();
      mainMenu.classList.remove("main-menu--visible");
    }
  }
};

window.addEventListener("keydown", modalCloseEscFunction);
swiperSlider2.on('transitionEnd', function () {
  var videos = document.querySelectorAll('.first__slider video');
  videos.forEach(function (el) {
    el.pause();
    el.currentTime = 0;
  });
  playButtons.forEach(function (el) {
    el.style.display = 'block';
  });
});
playButtons.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var video = e.currentTarget.closest('.slider-media').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none';
    setTimeout(function () {
      video.volume = 0.5;
    }, 1000);
  });
}); // inputMask

var selector = document.querySelectorAll('input[type=tel]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
//# sourceMappingURL=main.js.map
