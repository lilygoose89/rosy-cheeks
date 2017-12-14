//load the DOM
$(document).ready(function(){

  //log
  console.log('ready!');

  //click hamburger icon
  $('.toggle-mobile-menu').click(function(){

      //show mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible')
  });
  //show-hide button
  $('.toggle-show-hide').click(function(){

      //show mobile menu
      $('#previous-updates').toggleClass('toggle-show-hide')
  });

});
