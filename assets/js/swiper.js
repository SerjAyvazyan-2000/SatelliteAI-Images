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

document.querySelectorAll('.possibilities-slider-picture').forEach(twenty => {
    twenty.addEventListener('pointerdown', () => {
        possibilitiesSwiper.allowTouchMove = false;
    });

    twenty.addEventListener('pointerup', () => {
        possibilitiesSwiper.allowTouchMove = true;
    });

    twenty.addEventListener('pointerleave', () => {
        possibilitiesSwiper.allowTouchMove = true;
    });
});


let swiper = new Swiper(".tools-swiper-items", {
    slidesPerView: 4.3,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".tools-swiper-result", {
    spaceBetween: 10,
    slidesPerView: 1,
    allowTouchMove: false, // Отключает листание пальцами или курсором

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
        loop: true,
        autoplay: {
            delay: 10,
            disableOnInteraction: false,
        },
        speed: 2000,

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

initSwiper();

window.addEventListener("resize", initSwiper);

const swiperContainer = document.querySelector(".reviews-swiper");

swiperContainer.addEventListener("mouseenter", () => {
    reviewsSwiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
    reviewsSwiper.autoplay.start();
});


let advantagesSwiper = new Swiper(".advantages-slider", {
    spaceBetween: 21,
    slidesPerView: 3,

    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1.1,},
        400: {slidesPerView: 1.2,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },


});


let creatingSwiper = new Swiper(".creating-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay:true,
    // loop: true,
    initialSlide: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".creating-button-next",
        prevEl: ".creating-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 1.5,
        },
        540: {
            slidesPerView: 1.5,
        },
        855: {
            slidesPerView: 2,

        },

        1027: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 4,
        },
    }

});
