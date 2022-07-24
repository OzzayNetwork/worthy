$(window).on("load", function() {
    setTimeout(function() {
        $(".page-loader").fadeOut()
    }, 3000);

    $(".owl-carousel-product").owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next"></i>'],
        margin: 0,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: { items: 1, },
            414: { items: 1, },
            698: { items: 2, },
            768: { items: 3, },
            1200: { items: 4, },
            1550: { items: 5, }
        }
    });

    $('.calculate-loan').on('click', function() {
        loanCalculator()
    })

    // loan calculator
    function loanCalculator() {
        var amount = parseInt($('.loanAmount').val());
        var rate = parseInt($('.loanRate').val());
        var months = parseInt($('.loanMonths').val());
        var r = rate / 100 / 12;

        var x = Math.pow(1 + r, months);
        var monthly = (amount * x * r) / (x - 1);


        if (amount == "") {
            amount = 0;
        }
        if (rate == "") {
            rate = 0;
        }
        if (months == "") {
            months = 0;
        }


        var totalLoan = 0;
        var monthlyPay = 0;

        monthlyPay = (amount * months * rate) / 100;
        totalLoan = (monthlyPay * months) + amount;

        $('.totalLoan').text(numberWithCommas(totalLoan) + '.00');
        $('.monthlyPay').text(numberWithCommas(monthlyPay) + '.00');



        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {

            $('.totalLoan').text(numberWithCommas(round(monthly * months)));
            $('.monthlyPay').text(numberWithCommas(round(monthly)));


            $('.loan-months').text(months);
            $('.principle-amount').text("KES " + numberWithCommas(round(amount)));
            $('.loan-intrest').text(rate + "%");

            console.log(numberWithCommas(round(monthly * months)));
            console.log('<br>');
            console.log(numberWithCommas(round(monthly)));

        }
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        else {
            $('.totalLoan').text(numberWithCommas(round(monthly * months)));
            $('.monthlyPay').text(numberWithCommas(round(monthly)));
        }

    }

    // puts comas on numbers

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // This simple method rounds a number to two decimal places.
    function round(x) {
        return Math.round(x * 100) / 100;
    }
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    //alert(hours)
    if (hours >= 5) {
        if (hours < 13) {
            $('.salutations').text("Good morning to you");
        }
    }

    if (hours >= 13) {
        if (hours < 17) {
            $('.salutations').text("Good Afternoon");
        }
    }

    if (hours >= 17) {

        $('.salutations').text("Wishing you a lovely evening");
    }
    if (hours > 0) {
        if (hours < 6) {
            $('.salutations').text("Wishing you a lovely evening");
        }
    }
    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
        new WOW().init();
    }

    $('#account_type').on('change', function() {
        var theVal = $(this).val();
        $('.select-loaner').addClass('d-none')
        if (theVal == 1) {
            $('.asset-loan').removeClass('d-none');

        }


        if (theVal == 2) {
            $('.import-loan').removeClass('d-none').parent().siblings('.select-loaner').addClass('d-none');

        }

        if (theVal == 3) {
            $('.invoice-loan').removeClass('d-none').parent().siblings('.select-loaner').addClass('d-none');

        }

        if (theVal == 4) {
            $('.lpo-loan').removeClass('d-none').parent().siblings('.select-loaner').addClass('d-none');

        }

        if (theVal == 5) {
            $('.lpo-loan').addClass('d-none').parent().siblings('.select-loaner').addClass('d-none');

        }

        if (theVal == 6) {
            $('.logbook-loan').removeClass('d-none').parent().siblings('.select-loaner').addClass('d-none');

        }

        if (theVal == 7) {
            $('.title-loan').removeClass('d-none').parent().siblings('.select-loaner').addClass('d-none');

        }

        if (theVal == 0) {
            $('.select-loaner').addClass('d-none')
        }
    });

    var logoWidth = $('.header-bottom .navbar-brand').outerWidth();
    // alert(logoWidth);
    $('.salute-intro').css('margin-left', logoWidth)


    // typing animation


     /*--
    	Isotop with ImagesLoaded
    -----------------------------------*/
    var isotopFilter = $('.isotop-filter');
    var isotopGrid = $('.isotop-grid');
    var isotopGridItem = '.isotop-item';

    isotopFilter.find('button:first-child').addClass('active');

    /*-- Images Loaded --*/
    isotopGrid.imagesLoaded(function() {

        isotopGrid.isotope({
            itemSelector: isotopGridItem,
            layoutMode: 'masonry',
        });

        /*-- Isotop Filter Menu --*/
        isotopFilter.on('click', 'button', function() {

            var filterValue = $(this).attr('data-filter');

            isotopFilter.find('button').removeClass('active');
            $(this).addClass('active');
            isotopGrid.isotope({ filter: filterValue });

        });

    });

    /*--
    	Video Popup
    -----------------------------------*/
    var videoPopup = $('.video-popup');
    videoPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*--
    	Image Popup
    -----------------------------------*/
    var imagePopup = $('.image-popup');
    imagePopup.magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
    });

    /*--
    	Image Popup
    -----------------------------------*/
    var galleryPopup = $('.gallery-popup');
    galleryPopup.magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
        },
    });


});