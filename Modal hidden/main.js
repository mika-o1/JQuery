$(document).ready(function() {
    $('.knopka-1').click(function() {
        $(this).addClass('active');
        $('.knopka-2').removeClass('active');
    });
    $('.knopka-2').click(function() {
        $(this).addClass('active');
        $('.knopka-1').removeClass('active');
    });
    if ($('.knopka-1').hasClass('active')) {
        $('.block-1').addClass("active");
        $('.block-2').removeClass("active");
    } 
    else {
        $('.block-2').addClass("active");
        $('.block-1').removeClass("active");
    }
});