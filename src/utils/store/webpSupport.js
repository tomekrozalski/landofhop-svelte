import { readable } from 'svelte/store';

export default readable(undefined, async set => {
	if (!self.createImageBitmap) {
		set(false);
		return false;
	};

	const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
	const blob = await fetch(webpData).then(r => r.blob());
	return createImageBitmap(blob).then(() => set(true), () => set(false));
});
