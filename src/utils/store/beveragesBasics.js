import { writable } from 'svelte/store';
import { isBefore } from "date-fns";

const beveragesBasics = writable([]);

const customStore = {
	get: async () => {
		const res = await fetch("http://localhost:3100/api/v1/beverage");
    const values = await res.json();

    beveragesBasics.set(
      values.sort((a, b) =>
        isBefore(new Date(a.added), new Date(b.added)) ? 1 : -1
      )
    );
	},
	set: beveragesBasics.set,
	subscribe: beveragesBasics.subscribe,

}
export default customStore;