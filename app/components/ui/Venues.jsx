import VenueCard from '../VenueCard';

const fetchVenues = async () => {
	const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
	if (!response.ok) {
		throw new Error('failed to fetch');
	}
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const venues = await response.json();
	return venues;
};

export default async function Venues() {
	const venues = await fetchVenues();

	return (
		<div className='m-12 rounded-md grid grid-cols-4 gap-12'>
			{venues.map((venue) => (
				<div
					key={venue.name}
					className='col-span-4 md:col-span-2 lg:col-span-1 bg-transparent border rounded-md'
				>
					<VenueCard venue={venue} />
				</div>
			))}
		</div>
	);
}
