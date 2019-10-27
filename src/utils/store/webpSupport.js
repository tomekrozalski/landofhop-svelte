import { writable } from 'svelte/store';

const webpSupport = writable([]);

const customStore = {
	checkSupport: async () => {
		if (!self.createImageBitmap) {
			webpSupport.set(false);
			return false;
		};
	
		const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
		const blob = await fetch(webpData).then(r => r.blob());
		return createImageBitmap(blob)
			.then(() => webpSupport.set(true), () => webpSupport.set(false));
	},
	set: webpSupport.set,
	subscribe: webpSupport.subscribe,

}

export default customStore;

