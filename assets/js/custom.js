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
        1200: { items: 4, }
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