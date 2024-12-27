


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});




function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active'); // Закрываем остальные
        }
    });

    item.classList.toggle('active'); // Открываем или закрываем текущий
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));

    const icon = item.querySelector('.faq-item-icon');
    if (icon) {
        icon.addEventListener('click', (event) => {
            event.stopPropagation(); // Предотвращаем срабатывание родительского клика
            toggleActiveState(item);
        });
    }
});


function setupGifToggle(selector) {
    document.querySelectorAll(selector).forEach(block => {
        const gif = block.getAttribute('data-gif');
        const defaultImage = block.getAttribute('data-img');

        function toggleGif() {
            if (block.classList.contains('active')) {
                block.classList.remove('active');
                block.style.backgroundImage = `url('${defaultImage}')`;
            } else {
                block.classList.add('active');
                block.style.backgroundImage = `url('${gif}')`;
            }
        }

        block.addEventListener('click', toggleGif);
    });
}

setupGifToggle('.hero-video-block');
setupGifToggle('.video-block');






document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".possibilities-tab");
    const contents = document.querySelectorAll(".possibilities-cnt");

    // Функция переключения активных элементов
    function activateTab(tab) {
        const targetId = tab.getAttribute("data-id");

        // Удаляем активный класс у всех вкладок и контента
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Добавляем активный класс для выбранной вкладки и контента
        tab.classList.add("active");
        document.querySelector(`.possibilities-cnt[data-id="${targetId}"]`).classList.add("active");
    }

    // Назначаем обработчики событий для всех вкладок
    tabs.forEach(tab => {
        tab.addEventListener("click", () => activateTab(tab));
    });

    // Изначально активировать первый элемент
    activateTab(tabs[0]);
});




