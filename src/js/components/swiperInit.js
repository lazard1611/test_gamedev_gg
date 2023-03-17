import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/element/css/effect-fade';
import 'swiper/element/css/pagination';
import 'ScssComponents/slider.scss';

const sliderInit = (
	slider = '.sliderInit',
	prevArrow = '.prevArrow',
	nextArrow = '.nextArrow',
	pagination = '.pagination',
) => {
	const $slider = document.querySelector(slider);
	if (!$slider) return;

	const $prevArrow = document.querySelector(prevArrow);
	const $nextArrow = document.querySelector(nextArrow);
	const $pagination = document.querySelector(pagination);

	const sliderInstance = new Swiper($slider, {
		modules: [Navigation, Pagination, EffectFade],
		observer: true,
		observeParents: true,
		speed: 800,
		// loop: true,
		slidesPerView: 1,
		effect: 'fade',
		navigation: {
			prevEl: $prevArrow,
			nextEl: $nextArrow,
		},
		pagination: {
			el: $pagination,
			type: 'bullets',
			clickable: true,
		},
		fadeEffect: {
			crossFade: true,
		},
	});
};

export default sliderInit;
