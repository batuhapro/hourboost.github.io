


(function ($) {

    'use strict';


// ----- STICKY ----- //
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});

// ----- SMOOTH LINK ----- //
$('.navbar-nav a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


// ----- CAROUSEL DEMO-1 (Client) ----- //
$("#owl-demo").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='mdi mdi-arrow-left'></i>", "<i class='mdi mdi-arrow-right'></i>"]
});

// ----- CAROUSEL DEMO-2 (client)  ----- //
$("#owl-demo-1").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [1199, 3],
    itemstablet: [768, 1],
    itemsDesktopSmall: [768, 1],
    stopOnHover: true,
    navigation: true,
});

// ----- CAROUSEL DEMO-3 (client) ----- //
$("#owl-demo-2").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
});

// ----- CAROUSEL DEMO-4 (mobile-sreenshort) ----- //
$("#owl-demo-3").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [1024, 2],
    itemsDesktopSmall: [768, 1],
    itemsTablet: [568, 1]
});

// ----- CAROUSEL DEMO-5 (mobile-sreenshort) ----- //
$("#owl-demo-4").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 4,
    itemsDesktop: [1024, 2],
    itemsDesktopSmall: [768, 1],
    itemsTablet: [568, 1]
});

// ----- MAGNIFICPOPUP ----- //
$('.mfp-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

// ----- VIDEO ----- //
$(document).ready(function() {
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

})(jQuery);