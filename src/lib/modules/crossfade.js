import { cubicIn } from 'svelte/easing';
import { crossfade, scale } from 'svelte/transition';

const [send, receive] = crossfade({
	duration: 600,
	easing: cubicIn,
	fallback: scale
});

export { send, receive };
