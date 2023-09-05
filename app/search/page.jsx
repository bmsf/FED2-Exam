import React from 'react';

const SearchResults = async ({ searchParams }) => {
	const fetchVenues = async () => {
		const response = await fetch(
			'https://api.noroff.dev/api/v1/holidaze/venues'
		);
		const venues = await response.json();
		return venues;
	};

	const venues = await fetchVenues();
	return (
		<div>
			{venues.map((venue, index) => (
				<div key={index}>
					{/* Display venue details here. For example: */}
					<h2>{venue.name}</h2>
					<p>{venue.description}</p>
					{/* Add other properties of the venue as needed */}
				</div>
			))}
		</div>
	);
};

export default SearchResults;
