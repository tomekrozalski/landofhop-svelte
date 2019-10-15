import { servers } from './constants';

const serverCall = ({
	params,
	type: {
		images,
		method,
		path,
		withParams,
	},
	token,
	...rest
}) => {
	const callTo = withParams
		? servers.data + path + params
		: servers.data + path;

	return (
		fetch(callTo, {
			credentials: 'include',
			...((token || !images) && {
				headers: {
					...(!images && { 'Content-Type': 'application/json' }),
					...(token && { Authorization: `Bearer ${token}` }),
				},
			}),
			method,
			...rest,
		})
	);
};

export default serverCall;
