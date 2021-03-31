$('.slick').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
});

$(".question").on("click", function() {
    $(this).next(".answer").slideToggle();
    $(this).toggleClass("question-2");
    $(".question").not($(this)).next(".answer").slideUp();
    $(".question").not($(this)).removeClass("question-2");
});


$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('header-padding');
    } else {
        $('header').removeClass('header-padding');
    }
});

$(".btn-trigger").on("click", function() {
    $('.black-back').toggleClass('active');;
    $('.black').css("display", "block");
})

$(".batsu").on("click", function() {
    $('.black-back').toggleClass('active');;
    $('.black').css("display", "none");
})

$(".black").on("click", function() {
    $('.black-back').toggleClass('active');;
    $('.black').css("display", "none");
})