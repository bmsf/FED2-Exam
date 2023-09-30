import Hero from './components/ui/Hero';
import Venues from './components/ui/Venues';

export default async function Home() {
	return (
		<main className='flex flex-col min-h-screen'>
			<Hero />
			<Venues />
		</main>
	);
}
