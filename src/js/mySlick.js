import $ from "jquery";
// import "./slick.js";


$(Document).ready(function() {
    $(".slider-js-1").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        speed: 2000,
        easing: "ease",
        // cssEase: "linear",
        centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // centerMode: true,
        infinite: true,
        //  initialSlide: 1,
        pauseOnFocus: true,
        pauseOnHover: true,



        // customPaging: function(slider, i) {
        //     var current = i + 1;
        //     current = current < 10 ? "" + current : current;

        //     // var total = slider.slideCount;
        //     // total = total < 10 ? "" + total : total;

        //     return (
        //         '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
        // 		<span class="slick-dots-current">' +
        //         current +
        //         '</span>\
        // 		<span class="slick-dots-separator">из</span>\
        // 		<span class="slick-dots-total">' +
        //         total +
        //         "</span></button>"
        //     );
        // },
    });



    $(".slider-js-1 .slick-dots li button").prepend('0');




    $(".slider-js-2")
        .slick({
            dots: false,
            // arrows: false,
            slidesToShow: 3,
            speed: 800,
            easing: "ease",
            // cssEase: "linear",
            centerMode: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            infinite: true,
            //  initialSlide: 1,
            pauseOnFocus: true,
            pauseOnHover: true,
            variableWidth: true,

            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });



    $(".slider-js-3").show().slick({
        dots: false,
        // arrows: false,
        slidesToShow: 4,
        speed: 800,
        easing: "ease",
        // cssEase: "linear",
        centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        //  initialSlide: 1,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },
        ]
    });












});