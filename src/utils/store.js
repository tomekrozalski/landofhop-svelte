import { writable } from 'svelte/store';
import { languages } from './constants';

export const isNavbar = writable(false);
export const isLoginbar = writable(false);
export const isLoggedIn = writable(false);
export const language = writable(languages.site.pl);
export const webpSupport = writable(false);
