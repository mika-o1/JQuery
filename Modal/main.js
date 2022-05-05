$(document).ready(function() {
    $('.op-mod').click(function() {
        $('.modal').toggleClass('active');
    });
    $('.modal-content button').click(function() {
        $('.modal').toggleClass('active');
    });
    $('.modal-back').click(function() {
        $('.modal').toggleClass('active');
    });
    $('.modal-content a').click(function() {
        $('.modal').toggleClass('active');
    });
});