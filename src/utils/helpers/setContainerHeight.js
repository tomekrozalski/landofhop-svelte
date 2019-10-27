const setContainerHeight = ({ unit, type, value }) => {
	if (unit === 'ml') {
		if (type === 'bottle') {
			switch (value) {
			case 750:
				return 'bottle-xl';
			case 500:
			case 450:
				return 'bottle-lg';
			case 375:
			case 330:
			case 300:
				return 'bottle-md';
			default:
				return 'zero';
			}
		}

		if (type === 'can') {
			return value > 350 ? 'can-lg' : 'can-md';
		}
	}

	return 'zero';
};

export default setContainerHeight;
