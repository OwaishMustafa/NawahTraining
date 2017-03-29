/**
 * ScrollToTop 3.4.1
 * Licensed under MIT
 */
//var scrollToTop = function () {
//    var s = this;
//    var defaults = {
//        speed: 300,
//    };
//
//    var init = function () {
//        console.log('init scrollToTop');
//    }; 
//    return {
//        init: init 
//    };  
//};
//


var scrollToTop = (function () {
    "use strict";
    //-----------------------------------------------------------------
    // Page Initalization handler : exposed to app.init();
    //-----------------------------------------------------------------
    var init = function () {
            alert('scrollToTop');
        
        },
        //-----------------------------------------------------------------
        // Helper Function: Add CSS Class to page-hd element on scroll
        //-----------------------------------------------------------------

        _swipeHandler = function (c) {

            //        var swiper = new Swiper('.swiper-container', {
            //            pagination: '.swiper-pagination',
            //            paginationClickable: true,
            //            nextButton: '.swiper-button-next',
            //            prevButton: '.swiper-button-prev',
            //            spaceBetween: 30
            //
            //        });
        },
        _stickyNavHandler = function (c) {
//            $(window).scroll(function () {
//                if ($(window).scrollTop() <= 20) {
//                    $('#page-hd').removeClass(c);
//                } else {
//                    $('#page-hd').addClass(c);
//                }
//            });
        };
    // Expose Global Functions
    return {
        init: init
    };
})();
$().ready(function () {
    
});