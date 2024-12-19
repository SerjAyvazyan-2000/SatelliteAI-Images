// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);
//
//     const initAnimation = () => {
//
//         gsap.fromTo(
//             '.peculiarities-item--one',
//             { rotation: 12 }, // Начальный наклон
//             {
//                 scrollTrigger: {
//                     trigger: '.peculiarities-item--one', // Триггер для первой карточки
//                     start: 'top 80%', // Начать выравнивание чуть раньше
//                     end: 'top center', // Завершить выравнивание
//                     scrub: true,
//                 },
//                 rotation: 0,
//
//             }
//         );
//         gsap.to('.peculiarities-item--one', {
//             scrollTrigger: {
//                 trigger: '.peculiarities-item--one', // Триггером будет сама карточка
//                 start: 'top center', // Анимация начинается, когда карточка достигает центра экрана
//                 end: '+=500', // Длительность анимации на скролле
//                 scrub: true, // Связываем скролл с анимацией
//
//             },
//             xPercent: -200,
//             yPercent: -130,
//             ease: 'power1.inOut',
//             rotation: -25,
//             duration:2
//
//         });
//
//         // Анимация для второй карточки
//         gsap.to('.peculiarities-item--two', {
//             scrollTrigger: {
//                 trigger: '.peculiarities-item--two', // Триггер для второй карточки
//                 start: 'top center-=300', // Начать анимацию немного позже (на 200px)
//                 end: '+=500',
//                 scrub: true,
//             },
//             xPercent: 100,
//             yPercent: -130,
//             ease: 'power1.inOut',
//             rotation: 25,
//             duration: 2,
//         });
//
//     };
//
//     initAnimation();
//
//     // Перезапуск анимации при изменении размеров экрана
//     window.addEventListener('resize', () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         initAnimation();
//     });
// });





document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.pin-content',
                start: 'top 10%', // Начало анимации
                end: '+=700', // Продолжительность скролла
                scrub: true, // Плавность анимации при скролле
                pin: true, // Закрепляем секцию
                anticipatePin: 1,
            }
        });
        gsap.fromTo(
            '.peculiarities-item--one',
            { rotation: 12 },
            {
                scrollTrigger: {
                    trigger: '.peculiarities-item--one', // Триггер для первой карточки
                    start: 'top 80%', // Начать выравнивание чуть раньше
                    end: 'top center', // Завершить выравнивание
                    scrub: true,
                },
                rotation: 0,
            }
        );
        gsap.to('.peculiarities-item--one', {
            scrollTrigger: {
                trigger: '.peculiarities-item--one', // Триггером будет сама карточка
                start: 'top center', // Анимация начинается, когда карточка достигает центра экрана
                end: '+=500', // Длительность анимации на скролле
                scrub: true, // Связываем скролл с анимацией

            },
            xPercent: -250,
            yPercent: -130,
            ease: 'power1.inOut',
            rotation: -25,
            duration:2

        });

        gsap.to('.peculiarities-item--two', {
            scrollTrigger: {
                trigger: '.peculiarities-item--two', // Триггер для второй карточки
                start: 'top center-=300', // Начать анимацию немного позже (на 200px)
                end: '+=500',
                scrub: true,
            },
            xPercent: 150,
            yPercent: -130,
            ease: 'power1.inOut',
            rotation: 25,
            duration: 2,

        });
    };

    ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pin-content',
                    start: 'top top', // Начало анимации на самом верху
                    end: '+=700', // Продолжительность скролла
                    scrub: true,
                    pin: true, // Закрепляем секцию
                    anticipatePin: 1,
                    // markers: true, // Для дебага можно добавить маркеры
                }
            });

            // Первая карточка на мобильных устройствах
            gsap.fromTo('.peculiarities-item--one',
                { rotation: 12 },
                {
                    scrollTrigger: {
                        trigger: '.peculiarities-item--one',
                        start: 'top center',
                        end: '+=500',
                        scrub: true,
                    },
                    rotation: 0,
                }
            );

            gsap.to('.peculiarities-item--one', {
                scrollTrigger: {
                    trigger: '.peculiarities-item--one',
                    start: 'top center',
                    end: '+=500',
                    scrub: true,
                },
                xPercent: -180,
                yPercent: -130,
                ease: 'power1.inOut',
                rotation: -25,
                duration: 2
            });

            // Вторая карточка на мобильных устройствах
            gsap.to('.peculiarities-item--two', {
                scrollTrigger: {
                    trigger: '.peculiarities-item--two',
                    start: 'top center-=300',
                    end: '+=500',
                    scrub: true,
                },
                xPercent: 80,
                yPercent: -130,
                ease: 'power1.inOut',
                rotation: 25,
                duration: 2,
            });
        },

        // Для десктопных версий
        "(min-width: 769px)": () => {
            initAnimation(); // Запуск анимации для десктопа
        }
    });

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimation();
    });
});
