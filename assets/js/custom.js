$(".owl-carousel-product").owlCarousel({
    nav: true,
    dots: true,
    loop: false,
    navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next"></i>'],
    margin: 0,
    items: 1,
    thumbs: false,
    smartSpeed: 1300,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
        0: { items: 1, },
        414: { items: 1, },
        698: { items: 2, },
        768: { items: 3, },
        1200: { items: 4, }
    }
});