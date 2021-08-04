/****************************************/
/************ Main Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

        /**********************  do your magic here **********************/


        $(window).resize(function () {
            let serviceTrigerLeft = ($('body').outerWidth() - $('.container').outerWidth()) / 2;
            // console.log(('.scroll-to-triger').outerWidth());
            $('.scroll-to-triger ').css({
                left: ((serviceTrigerLeft / 2) + $('.scroll-to-triger').outerWidth()) * -1
            })
        });

        let serviceTrigerLeft = ($('body').outerWidth() - $('.container').outerWidth()) / 2;
        // console.log(('.scroll-to-triger').outerWidth());
        $('.scroll-to-triger ').css({
            left: ((serviceTrigerLeft / 2) + $('.scroll-to-triger').outerWidth()) * -1
        })


        if ($(window).scrollTop() > $('.neo-header').outerHeight()) {
            $('body').addClass('is-scrolling');
        } else {
            $('body').removeClass('is-scrolling');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > $('.neo-header').outerHeight()) {
                $('body').addClass('is-scrolling');
            } else {
                $('body').removeClass('is-scrolling');
            }

        });

        // move trigger window 
        $(".window-slide-trigger").click(function (e) {
            e.preventDefault();
        })
        var mouseX;
        //var zIndex = 0;
        var element = document.querySelector(".window-slide-trigger");
        var imgElement = document.querySelector("img.after-magic");
        if (element) {
            element.addEventListener('mousedown', function (e) {
                element = document.querySelector(".window-slide-trigger");
                e.preventDefault();
                $(".window-slide-trigger").addClass('in-press');
                if (element !== undefined) {
                    mouseX = e.clientX - parseInt(getComputedStyle(element).left);
                }
            })
        }


        document.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (element !== undefined) {



                let xMove = (e.clientX - mouseX) - $('.after-magic').innerWidth() + 30;
                if (xMove && xMove < 0 && xMove > -$('.after-magic').innerWidth()) {
                    element.style.left = e.clientX - mouseX + 'px';
                    imgElement.style.transform = "translateX(" + xMove + 'px' + ")";
                }

            }
        });
        document.addEventListener('mouseup', function (event) {
            element = undefined;
            $(".window-slide-trigger").removeClass('in-press');
        });

        // more services 
        var moreServicesSliderItems = $('.more-services-slider-items');
        if (moreServicesSliderItems.length) {
             moreServicesSliderItems.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                $('.services-slider-counter .index').text(i);
                $('.services-slider-counter .total').text(slick.slideCount);
            });
            moreServicesSliderItems.slick({
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                dots:true,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                appendDots : $('.services-slider-dots')
            });
            $('.ms-prev').click(function (e) {
                e.preventDefault();
                moreServicesSliderItems.slick('slickPrev');
            });
            $('.ms-next').click(function (e) {
                e.preventDefault();
                moreServicesSliderItems.slick('slickNext');
            });
        }

    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})