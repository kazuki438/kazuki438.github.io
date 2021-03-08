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