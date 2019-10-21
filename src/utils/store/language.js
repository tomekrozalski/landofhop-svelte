import { writable } from 'svelte/store';
import { languages } from '../constants';

export default writable(languages.site.pl);
