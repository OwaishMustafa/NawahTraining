////
//Application Module
////////////////////

 var app = (function () {   
     "use strict";  
     //-----------------------------------------------------------------
     // Page Initalization handler : exposed to app.init();
     //-----------------------------------------------------------------
     var init = function () {
             // Hide Preloader when page has loaded
             //_preLoaderHandler();
             //_scrollToTopHandler();
             //_customSelectBox(); 
             //_stickyNavHandler('sticky');
             //_countupNumbers($('.numeric-highlights'));
             //_socialSidebarHabdler($('.side-bar .social-links'));
             //_socialNavHandler($("#page-hd #social-links"));
            _swipeHandler();  
         //alert('main');
         
         //scrollToTop.init();
         
         },
         //-----------------------------------------------------------------
         // Helper Function: Add CSS Class to page-hd element on scroll
         //-----------------------------------------------------------------

         _swipeHandler = function (c) {
             
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30

        });
         },
      _stickyNavHandler = function (c) {
             $(window).scroll(function () {
                 if ($(window).scrollTop() <= 20) {
                     $('#page-hd').removeClass(c);
                 } else {
                     $('#page-hd').addClass(c);
                 }
             }); 
         };
         // Expose Global Functions
     return {
         init: init
     };
 })();
 $().ready(function () {
     app.init();
     //scrollToTop.init();
 });

