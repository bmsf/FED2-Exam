import VenueCard from './components/VenueCard';

const fetchVenues = async () => {
	const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
	const venues = await response.json();
	return venues;
};

export default async function Venues() {
	const venues = await fetchVenues();

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
			{venues.map((venue, index) => (
				<VenueCard key={index} venue={venue} />
			))}
		</div>
	);
}
