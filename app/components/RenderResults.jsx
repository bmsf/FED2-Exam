'use client';
import { useSearchParams } from 'next/navigation';
import VenueCard from '../components/VenueCard';

const RenderResults = ({ venues }) => {
	const searchParams = useSearchParams();
	const terms = searchParams.get('search_query');

	const lowercasedTerms = terms?.toLowerCase();

	const filteredVenues = venues.filter((venue) => {
		return (
			venue.name.toLowerCase().includes(lowercasedTerms) ||
			venue.description.toLowerCase().includes(lowercasedTerms) ||
			venue.location.city.toLowerCase().includes(lowercasedTerms) ||
			venue.location.country.toLowerCase().includes(lowercasedTerms)
		);
	});

	return (
		<div className='m-12 rounded-md grid grid-cols-4 gap-12'>
			{filteredVenues.length > 0 ? (
				filteredVenues.map((venue) => (
					<div
						key={venue.id}
						className='col-span-4 md:col-span-2 lg:col-span-1 bg-lightestPrimary rounded-md'
					>
						<VenueCard venue={venue} />
					</div>
				))
			) : (
				<p>No venues match your search criteria.</p>
			)}
		</div>
	);
};

export default RenderResults;
