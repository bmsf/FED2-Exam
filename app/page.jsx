import { getServerSession } from 'next-auth';
import { authOptions } from 'next-auth';

import Hero from './Hero';
import Venues from './Venues';
import { API_HOLIDAZE_URL } from './api/constants';

const action = '/profiles/heihei';

// const getUser = async () => {
// 	const cookieStore = cookies();
// 	const key = cookieStore.get('next-auth.session-token');

// 	const apiUrl = API_HOLIDAZE_URL + action;
// 	const headers = {
// 		'Content-type': 'application/json',
// 		Authorization: `Bearer ${key.value}`,
// 	};

// 	try {
// 		const response = await fetch(apiUrl, { headers });

// 		// Check if the API call was successful
// 		if (response.ok) {
// 			const data = await response.json();
// 			// Handle the API response data as needed
// 		} else {
// 			// Handle API error
// 			console.error('API Error:', response.statusText);
// 		}
// 	} catch (error) {
// 		console.error('API Request Error:', error);
// 	}
// };

export default async function Home() {
	// getUser();

	return (
		<main className='flex flex-col min-h-screen'>
			<Hero />
			<Venues />
		</main>
	);
}
