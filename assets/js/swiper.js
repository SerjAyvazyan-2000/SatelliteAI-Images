let possibilitiesSwiper = new Swiper(".possibilities-slider", {
    spaceBetween: 10,
    // autoplay:true,

    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1.1,},
        400: {slidesPerView: 1.2,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.5},
        629: {slidesPerView: 2},
        855: {slidesPerView: 2.5},
    },


});


let swiper = new Swiper(".tools-swiper-items", {
    slidesPerView: 4.3,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".tools-swiper-result", {
    spaceBetween: 10,
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

let swiperTools2 = new Swiper(".tools-swiper-items2", {
    slidesPerView: 4.3,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiperResult2 = new Swiper(".tools-swiper-result2", {
    spaceBetween: 10,
    slidesPerView: 1,

    thumbs: {
        swiper: swiperTools2,
    },
});


let reviewsSwiper;

function initSwiper() {
    const isMobile = window.innerWidth <= 992;
    const direction = isMobile ? "horizontal" : "vertical";

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
    }

    reviewsSwiper = new Swiper(".reviews-swiper", {
        direction: direction,
        spaceBetween: 12,
        slidesPerView: 3,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        // loop: true,
        // autoplay: {
        //     delay: 0,
        //     disableOnInteraction: false,
        // },
        // speed: 3000,

        breakpoints: {
            320: {slidesPerView: 1,},
            490: {slidesPerView: 1.2,},
            620: {slidesPerView: 1.5,},
            810: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1096: {slidesPerView: 2.5},
            1232: {slidesPerView: 3},
            1920: {slidesPerView: 3},
        },

    });
}

// Вызываем функцию при загрузке страницы
initSwiper();

// Перепроверяем при изменении размера экрана
window.addEventListener("resize", initSwiper);

const swiperContainer = document.querySelector(".reviews-swiper");

swiperContainer.addEventListener("mouseenter", () => {
    reviewsSwiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
    reviewsSwiper.autoplay.start();
});