$(document).ready(function(){
  var isDesktop = function(){
    return screen.width > 1025;
  }
  
  var isTablet = function(){
    return (screen.width > 767 && screen.width < 1020);
  }
  
  var bxSliderOption = {
    slideWidth: 575,
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 10,
    preloadImages: 'all',
    autoHover: true,
  };
  
  if (isDesktop()) {
    bxSliderOption.minSlides = 4;
    bxSliderOption.maxSlides = 4;
  }
  
  if (isTablet()) {
    bxSliderOption.minSlides = 2;
    bxSliderOption.maxSlides = 2;
  }
  
  $('.bxslider').bxSlider(bxSliderOption);
});