


let advantagesSwiper = new Swiper(".advantages-swiper", {
    spaceBetween: 21,
    slidesPerView: 4,
    loop: true,

    pagination: {
        el: ".advantages-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1, spaceBetween: 10,},
        400: {slidesPerView: 1, spaceBetween: 10,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 2},
        779: {slidesPerView: 2},
        954: {slidesPerView: 3},
        1139: {slidesPerView: 3},
        1200: {slidesPerView: 4},

    },


});
let possibilitiesSwiper = new Swiper(".possibilities-slider", {
    spaceBetween: 21,
    slidesPerView: 4,
    loop: true,
    pagination: {
        el: ".possibilities-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1, spaceBetween: 10,},
        450: {slidesPerView: 1,},
        640: {slidesPerView: 1.3},
        779: {slidesPerView: 2},
        954: {slidesPerView: 3},
        1139: {slidesPerView: 3},
        1200: {slidesPerView: 4},

    },


});

let industrySwiper = new Swiper(".industry-swiper", {
    spaceBetween: 18,
    slidesPerView: 4,

    pagination: {
        el: "industry-pagination",
    },

    breakpoints: {
        320: {slidesPerView: 1.2,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 2},
        779: {slidesPerView: 2},
        954: {slidesPerView: 3},
        1139: {slidesPerView: 3},
        1200: {slidesPerView: 4},

    },



});




let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 18,
    slidesPerView: 4,
    loop:true,

    pagination: {
        el: "reviews-pagination",
    },
    navigation: {
        nextEl: '.reviews-slider-next',
        prevEl: '.reviews-slider-prev',
    },
    breakpoints: {
        320: {slidesPerView: 1.1,},
        370: {slidesPerView: 1.1,spaceBetween: 15,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 4},

    },



});


