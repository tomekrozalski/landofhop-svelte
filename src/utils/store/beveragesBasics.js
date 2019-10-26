import { writable } from 'svelte/store';
import { isBefore } from "date-fns";

import { servers } from '../constants';

const beveragesBasics = writable([]);

const customStore = {
	// getBasics: async ({ skip, limit } = { skip: 0, limit: 100 }) => {
	// 	const endpoint = `${servers.data}beverage/${skip}/${limit}`;
	// 	const res = await fetch(endpoint);
  //   const values = await res.json();

  //   beveragesBasics.set(values);
	// },
	set: beveragesBasics.set,
	subscribe: beveragesBasics.subscribe,

}
export default customStore;
