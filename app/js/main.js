$(function(){

    $('.header-menu-ul .menu-item-has-children').addClass('strela');
    $('.strela > a').after('<span class="arrow-about"><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1564 0L12 0.884545C6.0144 6.97773 6.8718 6.10527 5.9922 7C4.8084 5.79536 1.2678 2.191 0 0.899818L0.8562 0.0286364L5.9922 5.257L11.1564 0Z" fill="#222222"/></svg></span>');

    $('.menu-item-mobile.menu-item-mobile-has-child').addClass('strela-mobile');
    $('.strela-mobile > a').append('<span class="arrow-about-mobile"><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1564 0L12 0.884545C6.0144 6.97773 6.8718 6.10527 5.9922 7C4.8084 5.79536 1.2678 2.191 0 0.899818L0.8562 0.0286364L5.9922 5.257L11.1564 0Z" fill="#222222"/></svg></span>');

    $( ".header_mobile-btn-wrapper-menu" ).click(function() {

        $('.header_mobile-btn-wrapper').toggleClass('opened');
        $(this).toggleClass('activete');
        //$("html").toggleClass("fixedbody");
        
    });

    $('.header_mobile-btn-wrapper').click(function(){

        $('.header__mobile-container').toggleClass('header__mobile-container-open');

    });


    $('.sub-menu-mobile').fadeOut( "slow" );

    $( ".menu-item-mobile-has-child > a" ).click(function(events) {
        events.preventDefault();
        $( this ).toggleClass('fade-mobile');
        $( this ).next('.sub-menu-mobile').fadeToggle("slow");
    });




    var $status = $('.pagingInfo');
    var $slickElement = $('.main-slider-slick');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html( '<span class="left-number">' + i + "</span>" + '<span class="line-count"><svg width="117" height="1" viewBox="0 0 117 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="117" y2="0.5" stroke="white"/></svg></span>' + '<span class="right-number">' + slick.slideCount + '</span>');
    });

    $('.main-slider-slick').on('init', function(event, slick){
        var slideText = $('.slick-slide.slick-current.slick-active').find('.slider-small-title').text();
        
        $('.slider-small-title-text-block').append(slideText);
    
        $('.main-slider-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
    
            var slideText = $('.slick-slide.slick-current.slick-active').find('.slider-small-title').text();
    
            $('.slider-small-title-text-block').html(slideText);
    
        });
    });

    $('.main-slider-slick').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.mainSlider-prev'),
        nextArrow: $('.mainSlider-next'),
        appendDots: ('.main-slider-slick-content'),
    });



});