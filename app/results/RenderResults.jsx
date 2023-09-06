'use client';
import { useSearchParams } from 'next/navigation';

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
		<div>
			{filteredVenues.length > 0 ? (
				filteredVenues.map((venue) => (
					<div key={venue.id}>
						<h2>{venue.name}</h2>
						<p>{venue.description}</p>
						{/* Render other venue details as needed */}
					</div>
				))
			) : (
				<p>No venues match your search criteria.</p>
			)}
		</div>
	);
};

export default RenderResults;
