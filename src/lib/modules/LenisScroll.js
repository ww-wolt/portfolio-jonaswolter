const ENABLE_LENIS = true;

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

let lenis;

export function initLenis() {
	if (ENABLE_LENIS) {
		lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.1, touchMultiplier: 2.2 });

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.registerPlugin(ScrollTrigger);
		lenis.on('scroll', ScrollTrigger.update);

		return lenis;
	}
}

export function getLenis() {
	console.error('Lenis has to be initialized first before using it');
	return lenis;
}
