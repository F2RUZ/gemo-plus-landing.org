$(document).ready(function() {

    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    initializeClock('timer', getDayEnd());
    initializeClock('timer2', getDayEnd());
    initializeClock('timer3', getDayEnd());
    initializeClock('timer4', getDayEnd());
    initializeClock('timer5', getDayEnd());


    $('.ever-popup-btn').click(function() {
        $('.ever-popup').addClass('show');
    });
    $('.ever-popup__close').click(function() {
        $('.ever-popup').removeClass('show');
    });
    var flag = true;
    $('body').mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true && e.target.nodeName.toLowerCase() !== "select") {
            $('.ever-popup').addClass('show');
            flag = false;
        }
    });
});
