import { getServerSession } from 'next-auth';
import { authOptions } from 'next-auth';

import Hero from './components/ui/Hero';
import Venues from './components/ui/Venues';
import { API_HOLIDAZE_URL } from './api/constants';

const action = '/profiles/heihei';

export default async function Home() {
	return (
		<main className='flex flex-col min-h-screen'>
			<Hero />
			<Venues />
		</main>
	);
}
