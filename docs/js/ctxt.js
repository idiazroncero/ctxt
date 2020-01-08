import Flickity from 'flickity';
import FlickityImagesLoaded from 'flickity-imagesloaded';
import jQueryBridget from 'jquery-bridget';
import SimpleBar from 'simplebar';

// make Flickity a jQuery plugin
Flickity.setJQuery( $ );
jQueryBridget('flickity', Flickity, $ );


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


$(function(){

    var alreadyMini = false;

    $('.scroll-list').each(function(index, item){
      new SimpleBar($(item)[0], {
        autoHide: false,
        forceVisible: 'y'
      });
    });

    $('.menu-toggle').click(function(){
      var $menu = $(this).parent('.main-menu');
      $menu.toggleClass('main-menu--open');
    });

    function minifyHeader(){
      var scrolled = $(window).scrollTop() > 0 ? true : false;
      if(scrolled && alreadyMini) {return}

      if(scrolled) {
        $('.header').addClass('header--mini');
        alreadyMini = true;
      } else {
        $('.header').removeClass('header--mini');
        alreadyMini = false;
      }

    }

    window.addEventListener('scroll', throttle(minifyHeader, 150));


    $('.carousel').each(function(index, item){
      let $item = $(this).find('.carousel__slides');
      let slides  = $(this).find('.carousel__item').length;
      let $next = $(this).find('.carousel__next');
      let $prev = $(this).find('.carousel__prev');
      let $number = $(this).find('.carousel__number');
      let $total = $(this).find('.carousel__total');

      var $carousel = $item.flickity({
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: false,
      });

      $next.click(function(){
        $carousel.flickity('next');
        updateNumber();
      })

      $prev.click(function(){
        $carousel.flickity('previous');
        updateNumber();
      })


      $total.text(slides);
      var flickityData = $carousel.data('flickity');

      function updateNumber() {
        $number.text(flickityData.selectedIndex + 1);
      }

    })

    $('.galeria').each(function(index, item){
      let $item = $(this).children('.galeria__slides');
      let $next = $(this).find('.galeria__next');
      let $prev = $(this).find('.galeria__prev');
      
      var $galeria = $item.flickity({
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: false,
        contain: true
      });

      $next.click(function(){
        $galeria.flickity('next');
      })

      $prev.click(function(){
        $galeria.flickity('previous');
      })

    })

})