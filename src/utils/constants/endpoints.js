export default {
	// AUTH
	auth: {
		method: 'GET',
		path: 'auth',
	},
	login: {
		method: 'POST',
		path: 'auth',
	},
	logout: {
		method: 'DELETE',
		path: 'auth',
	},
	// BEVERAGE
	beverage_list: {
		method: 'GET',
		path: 'beverage',
	},
	beverage_details: {
		method: 'GET',
		path: 'beverage',
		withParams: true,
	},
	beverage_remove: {
		method: 'DELETE',
		path: 'beverage',
	},
	beverage_save: {
		method: 'POST',
		path: 'beverage',
	},
	beverage_update: {
		method: 'PUT',
		path: 'beverage',
	},
	save_cap: {
		images: true,
		method: 'POST',
		path: 'beverage/cap',
	},
	save_cover: {
		images: true,
		method: 'POST',
		path: 'beverage/cover',
	},
	save_gallery: {
		images: true,
		method: 'POST',
		path: 'beverage/gallery',
	},
	remove_cap: {
		method: 'DELETE',
		path: 'beverage/cap',
	},
	remove_gallery: {
		method: 'DELETE',
		path: 'beverage/gallery',
	},
	// COUNTRY
	countries_list: {
		method: 'GET',
		path: 'country',
	},
	country_save: {
		method: 'POST',
		path: 'country',
	},
	// INGREDIENT
	ingredients_list: {
		method: 'GET',
		path: 'ingredient',
	},
	ingredient_save: {
		method: 'POST',
		path: 'ingredient',
	},
	// INSTITUTION
	institutions_list: {
		method: 'GET',
		path: 'institution',
	},
	institution_save: {
		method: 'POST',
		path: 'institution',
	},
	// PLACE
	places_list: {
		method: 'GET',
		path: 'place',
	},
	place_save: {
		method: 'POST',
		path: 'place',
	},
};
