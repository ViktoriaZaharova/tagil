$(document).ready(function () {
    $('.main-slider-max').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        nav: true,
        appendDots: $('.box-arrow'),
        appendArrows: $('.box-arrow'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.main-slider-min').slick({
        vertical: true,
        slidesToShow: 3,
        infinite: true,
        verticalSwiping: true,
        nav: true,
        dots: false,
        appendArrows: $('.box-navigation'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 966,
                settings: {
                    slidesToShow: 3,
                    vertical: false
                }
            },
            {
                breakpoint: 695,
                settings: {
                    slidesToShow: 2,
                    vertical: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    vertical: false
                }
            }
        ]

    });

    $('.calendar-slider').slick({
        slidesToShow: 4,
        nav: true,
        dots: true,
        infinite: true,
        appendDots: $('.calendar-slider_navigation'),
        appendArrows: $('.calendar-slider_navigation'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    vertical: true,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.partners-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        nav: true,
        dots: true,
        appendDots: $('.partners-navigation'),
        appendArrows: $('.partners-navigation'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.cabinet-wrapper').hover(function () {
        $('.overlay').fadeToggle();
       $(this).toggleClass('on');
    });

    if ($(window).width() < 1281) {
        $('.form-search label input').attr('placeholder', 'Поиск');
    }
    else {
        $('.form-search label input').attr('placeholder', 'Что будем искать?');
    }

    if ($(window).width() < 1080) {
        $('.header-top .container .btn-old').text('Старая версия сайта');
        $('.cabinet-wrapper .btn .text').text('Кабинет');
    } else {
        $('.header-top .container .btn-old').text('Вернуться на старую версию сайта');
        $('.cabinet-wrapper .btn .text').text('Личный кабинет');
    }

    if ($(window).width() < 965) {
        $('.header-top .container .btn-old').text('Старая версия');
    } else {
        $('.header-top .container .btn-old').text('Старая версия сайта');
    }



    if ($(window).width() < 695) {
        $('.btn-mobile-menu').click(function () {
           $('.main-menu').slideToggle();
        });

        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".main-menu"); // тут указываем ID элемента
            var btn = $('.btn-mobile-menu');
            if (!div.is(e.target) // если клик был не по нашему блоку
                && !btn.is(e.target) && btn.has(e.target).length === 0
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.fadeOut(); // скрываем его
            }
        });
    }

    if ($(window).width() < 600) {
        $('.form-search .icon').click(function () {
            $(this).siblings('.input-group').slideToggle();
        });
    }




    window.addEventListener("resize", function() {
        if ($(window).width() < 1280) {
            $('.form-search label input').attr('placeholder', 'Поиск');
        }
        else {
            $('.form-search label input').attr('placeholder', 'Что будем искать?');
        }

        if ($(window).width() < 1080) {
            $('.header-top .container .btn-old').text('Старая версия сайта');
            $('.cabinet-wrapper .btn .text').text('Кабинет');
        } else {
            $('.header-top .container .btn-old').text('Вернуться на старую версию сайта');
            $('.cabinet-wrapper .btn .text').text('Личный кабинет');
        }

        if ($(window).width() < 965) {
            $('.header-top .container .btn-old').text('Старая версия');
        } else {
            $('.header-top .container .btn-old').text('Старая версия сайта');
        }



    }, false);
});
