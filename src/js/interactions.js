$(function(){
    $('.menu-toggle').click(function(){
      var $menu = $(this).parent('.main-menu');
      $menu.toggleClass('main-menu--open');
    })

    $('.dev').click(function(){
      $(this).remove();
    })
})