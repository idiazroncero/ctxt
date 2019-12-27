import Flickity from 'flickity';
import FlickityImagesLoaded from 'flickity-imagesloaded';
import jQueryBridget from 'jquery-bridget';
import SimpleBar from 'simplebar';

// make Flickity a jQuery plugin
Flickity.setJQuery( $ );
jQueryBridget('flickity', Flickity, $ );


$(function(){

    $('.scroll-list').each(function(index, item){
      new SimpleBar($(item)[0], {
        autoHide: false,
        forceVisible: 'y'
      });
    });

    $('.menu-toggle').click(function(){
      var $menu = $(this).parent('.main-menu');
      $menu.toggleClass('main-menu--open');
    })

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