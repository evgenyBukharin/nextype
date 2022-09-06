// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
Swiper.use([Pagination, Autoplay, Navigation]);
const paginationElems = [
	"Блог",
	"ВКонтакте",
	"Instagram",
	"YouTube",
	"Facebook",
];
const swiper = new Swiper(".swiper", {
	speed: 800,
	spaceBetween: 10,
	grabCursor: true,
	slideClass: "swiper-slide",
	slideActiveClass: "hero__slide-active",
	slidesPerView: 1,
	// breakpoints: {
	// 1025: {},
	// 769: {
	// 	spaceBetween: 30,
	// },
	// 426: {
	// 	spaceBetween: 0,
	// },
	// },
	navigation: {
		nextEl: ".hero__btn-next",
		prevEl: ".hero__btn-prev",
		disabledClass: "hero__btn-disabled",
	},
	pagination: {
		el: ".swiper-pagination",
		bulletClass: "hero__bullet",
		bulletActiveClass: "hero__bullet-active",
		clickable: true,
		renderBullet: function (index, className) {
			return `<li class="${className}">${paginationElems[index]}</li>`;
		},
	},
});
swiper.activeIndex = 2;

const swiperInner = new Swiper(".swiper-inner", {
	speed: 800,
	spaceBetween: 18,
	slideClass: "swiper-inner__slide",
	slideActiveClass: "swiper-inner__slide-active",
	wrapperClass: "swiper-inner__wrapper",
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
		769: {
			slidesPerView: 4,
		},
		521: {
			slidesPerView: 2,
		},
		426: {
			slidesPerView: 1,
		},
	},
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	bulletClass: "hero__bullet",
	// 	bulletActiveClass: "hero__bullet-active",
	// 	clickable: true,
	// 	renderBullet: function (index, className) {
	// 		return `<li class="${className}">${paginationElems[index]}</li>`;
	// 	},
	// },
});

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
