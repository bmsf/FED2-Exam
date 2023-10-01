import { API_HOLIDAZE_URL } from '@/app/api/constants';

export async function fetchFromApi(method, accessToken, action) {
	const data = await fetch(API_HOLIDAZE_URL + action, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	});
	return data.json();
}
