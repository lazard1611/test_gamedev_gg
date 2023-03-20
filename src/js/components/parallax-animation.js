import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const parallaxInit = () => {
	gsap.registerPlugin(ScrollTrigger);

	const $parallaxItems = document.querySelectorAll('.js-parallax-item');

	if (!$parallaxItems.length) return;

	$parallaxItems.forEach((item) => {
		const parallaxSpeed = item.dataset.parallax_speed || '180';
		const $trigger = item;
		const mMedia = gsap.matchMedia();

		mMedia.add('(min-width: 1024px)', () => {
			gsap.to(item, {
				y: parallaxSpeed * -1,
				ease: 'none',
				scrollTrigger: {
					id: 'parallax',
					trigger: $trigger,
					start: 'top 100%',
					end: 'bottom top',
					ease: 'none',
					scrub: true,
				},
			});
		});
	});
};

export default parallaxInit;
