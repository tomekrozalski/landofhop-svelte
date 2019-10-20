import { readable, writable } from 'svelte/store';
import { languages } from './constants';

export const isNavbar = writable(false);
export const isLoginbar = writable(false);
export const isLoggedIn = writable(false);
export const language = writable(languages.site.pl);

export const webpSupport = readable(undefined, async set => {
	if (!self.createImageBitmap) {
		set(false);
		return false;
	};

	const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
	const blob = await fetch(webpData).then(r => r.blob());
	return createImageBitmap(blob).then(() => set(true), () => set(false));
});
