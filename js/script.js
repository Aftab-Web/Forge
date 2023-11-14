$('.slider').slick({
    infinite: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    fade: true,
    speed: 600
});

$('.slider1').slick({
    infinite: true,
    slidesToShow: 5,
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:4
            }
        },
        {
            breakpoint: 996,
            settings: {
                slidesToShow:3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1
            }
        },
    ]
});

$('.slider2').slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: $('.btn-prev1'),
    nextArrow: $('.btn-next1'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:4
            }
        },
        {
            breakpoint: 996,
            settings: {
                slidesToShow:3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1
            }
        },
    ]
});
$('.slider3').slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: $('.btn-prev2'),
    nextArrow: $('.btn-next2'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:4
            }
        },
        {
            breakpoint: 996,
            settings: {
                slidesToShow:3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1
            }
        },
    ]
});

$('.slider4').slick({
    slidesToShow: 2,
    infinite: true,
    prevArrow: $('.btn-prev3'),
    nextArrow: $('.btn-next3'),
});

$('.slider5').slick({
    slidesToShow: 2,
    infinite: true,
    prevArrow: $('.btn-prev4'),
    nextArrow: $('.btn-next4'),
});

$('.slider6').slick({
    slidesToShow: 2,
    infinite: true,
    prevArrow: $('.btn-prev5'),
    nextArrow: $('.btn-next5'),
    speed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow:1
            }
        }
    ]
});
$('.slider7').slick({
    infinite: true,
    prevArrow: $('.btn-prev6'),
    nextArrow: $('.btn-next6'),
    speed: 2000
});
$('.slider8').slick({
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow:5, 
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:4
            }
        },
        {
            breakpoint: 996,
            settings: {
                slidesToShow:3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1
            }
        },
    ]
});

$(function(){

    $('.toggle').click(function(){
        $('.toog').slideDown('600')
        // $('.toog').css('opacity' , '1')
        // $('.toog').css('visibility' , 'visible')
        // $('.toog').css('transform' , 'scaleY(1)')
        // $('.toog').css('position' , 'relative')
        $('.toggle').css('opacity' , '0')
        $('.toggle').css('visibility' , 'hidden')
        $('.toggle').css('position' , 'relative')
        $('.none2').css('opacity' , '1')
        $('.none2').css('visibility' , 'visible')
        $('.none2').css('position' , 'relative')
    })

    $('.none2').click(function(){
        $('.toog').slideUp('600')
        // $('.toog').css('opacity' , '0')
        // $('.toog').css('visibility' , 'hidden')
        // $('.toog').css('position' , 'absolute')
        // $('.toog').css('transform' , 'scaleY(0)')
        $('.none2').css('opacity' , '0')
        $('.none2').css('visibility' , 'hidden')
        $('.none2').css('position' , 'absolute')
        $('.toggle').css('opacity' , '1')
        $('.toggle').css('visibility' , 'visible')
        $('.toggle').css('position' , 'relative')
    })

    $('.menu-item3').click(function(){
        $(".drop-menu3").slideToggle('500')
    })
    $('.menu-item4').click(function(){
        $(".drop-menu4").slideToggle('500')
    })
    $('.menu-item5').click(function(){
        $(".drop-menu5").slideToggle('500')
    })
    $('.menu-item6').click(function(){
        $(".drop-menu6").slideToggle('500')
    })
    $('.menu-item7').click(function(){
        $(".drop-menu7").slideToggle('300')
    })

    
})