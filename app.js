$(document).ready(function () {
    $('.left button').mouseenter(function () {
        $('.mouse1 h1').css(
            "color", "#fff");

    });
});

$(document).ready(function (){
    $('.right button').mouseleave(function () {
        $('.mouse1 h1').css({
            "background": 'yellow',
            "color": "red"
        });
    });
});

$(document).ready(function () {
    $('.btn3').mousemove(function (){
        $('.mouse2 h1').css({
            "background": '#333',
            "color": '#fff'
        });
        $('.mouse2 p').css(
            "color", '#fff'
        );
    });
});
