var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('nav');
  burger.addEventListener('click', function () {
    if (nav.classList == 'show') {
      nav.classList.remove('show');
    } else {
      nav.classList.add('show');
    }

    //Buger Animation
    burger.classList.toggle('toggle');
  });
};
navSlide();