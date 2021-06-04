const swiper1 = document.querySelector('.slider-container');
const swiper2 = document.querySelector('.swiper-container');
const burger = document.querySelector('.burger');
const close = document.querySelector('.main-menu__close');
const mainMenu = document.querySelector('.main-menu');
const playButtons = document.querySelectorAll('.videos-play');

let swiperSlider1 = new Swiper(swiper1, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
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
    prevEl: '.main-slider__btn--left',
  },
});

burger.addEventListener('click', () => {
  mainMenu.classList.add('main-menu--visible');
});

close.addEventListener('click', () => {
  mainMenu.classList.remove('main-menu--visible');
});

const modalCloseEscFunction = (event) => {
  if (event.keyCode === 27) {
    if (mainMenu.classList.contains("main-menu--visible")) {
      event.preventDefault();
      mainMenu.classList.remove("main-menu--visible");
    }
  }
};

window.addEventListener("keydown", modalCloseEscFunction);

swiperSlider2.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.first__slider video');
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });
  playButtons.forEach((el) => {
    el.style.display = 'block';
  });
});

playButtons.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.slider-media').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none';
    setTimeout(() => {
      video.volume = 0.5;
    }, 1000);
  });
});

// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);
