'use client';
import { useSearchParams } from 'next/navigation';
import VenueCard from '../components/VenueCard';

const RenderResults = ({ venues }) => {
	const searchParams = useSearchParams();
	const city = searchParams.get('city');
	// const checkIn = searchParams.get('checkInDate');
	// const checkOut = searchParams.get('checkOutDate');
	const guests = searchParams.get('guests');

	const filteredVenues = venues.filter((venue) => {
		// Log the cities being compared
		console.log(
			'API City:',
			venue.location.city.trim().toLowerCase(),
			'Query City:',
			city.trim().toLowerCase()
		);

		return (
			venue.location.city.trim().toLowerCase() === city.trim().toLowerCase() &&
			venue.maxGuests >= Number(guests)
		);
	});

	return (
		<div className='m-12 rounded-md grid grid-cols-4 gap-12'>
			{filteredVenues.length > 0 ? (
				filteredVenues.map((venue) => (
					<div className='col-span-4 md:col-span-2 lg:col-span-1 bg-lightestPrimary rounded-md'>
						<VenueCard key={venue.name} venue={venue} />
					</div>
				))
			) : (
				<p>No venues match your search criteria.</p>
			)}
		</div>
	);
};

export default RenderResults;
