import Hero from './Hero';
import Venues from './Venues';

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen'>
			<Hero />
			<Venues />
		</main>
	);
}
