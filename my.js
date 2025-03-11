$(document).ready(function(){
    $('.slick-banner').slick({
        dots: true, 
        arrows: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: false, 
        autoplaySpeed: 2000, 
        prevArrow: '<img class="arrow-left" src="images/arrow-left.png" alt="">',
        nextArrow: '<img class="arrow-right" src="images/arrow-right.png" alt="">',
    });
     
    $(".button_a").click(function() {
        $(".step-circle2").addClass("active");
    });

    $(".button_a2").click(function() {
        $(".step-circle3").addClass("active");
    });


    $("#prevStepBtn").click(function() {
        // Скрываем текущую форму
        $(".step-circle2").removeClass("active");
        // Показываем предыдущую форму
        $(".step-circle1").addClass("active");
    });




    $(".button_a").click(function() {
        // Скрываем текущую форму
        $("#Step1").removeClass("active");
        // Показываем следующую форму
        $("#Step2").addClass("active");
    });

    // Обработчик для кнопки "Назад" (шаг 2 -> шаг 1)
    $("#prevStepBtn").click(function() {
        // Скрываем текущую форму
        $("#Step2").removeClass("active");
        // Показываем предыдущую форму
        $("#Step1").addClass("active");
    });

    $(".button_a2").click(function() {
        // Скрываем текущую форму
        $("#Step2").removeClass("active");
        // Показываем следующую форму
        $("#Step3").addClass("active");
    });

    $('.slick-slider-auto').slick({
        dots: false, 
        arrows: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: false, 
        autoplaySpeed: 2000, 
        prevArrow: '<img class="levo" src="images/levo.png" alt="">',
        nextArrow: '<img class="pravo" src="images/pravo.png" alt="">',
    });

});