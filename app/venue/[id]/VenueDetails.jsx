import React from 'react';

const VenueDetails = ({ venue }) => {
	if (!venue) return null;

	return (
		<div className='p-6'>
			{/* Image */}
			<div className='w-full md:w-2/3 mx-auto mb-4'>
				{/* Using a default placeholder image if no images are provided in media */}
				<img
					className='rounded-lg shadow-md max-h-48 md:max-h-96 mx-auto'
					src={
						venue.media.length > 0
							? venue.media[0]
							: 'path_to_default_image.jpg'
					}
					alt={venue.name}
				/>
			</div>

			{/* Venue Details */}
			<div className='w-full md:w-2/3 mx-auto'>
				<h1 className='text-2xl font-bold mb-2'>{venue.name}</h1>
				<p className='text-gray-600 mb-4'>{venue.description}</p>
				<div className='text-gray-600'>
					<span className='mr-4'>${venue.price}</span>
					<span>Max Guests: {venue.maxGuests}</span>
				</div>
				<div className='text-gray-600 mt-2'>Rating: {venue.rating}</div>
			</div>

			{/* Amenities */}
			<div className='mt-6'>
				<h2 className='text-xl font-bold mb-2'>Amenities</h2>
				<ul className='grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-600'>
					{Object.entries(venue.meta).map(([key, value]) => (
						<li key={key}>
							{value ? `${key.charAt(0).toUpperCase() + key.slice(1)}` : null}
						</li>
					))}
				</ul>
			</div>

			{/* Location */}
			<div className='mt-6'>
				<h2 className='text-xl font-bold mb-2'>Location</h2>
				<p className='text-gray-600'>{venue.location.address}</p>
				<p className='text-gray-600'>
					{venue.location.city}, {venue.location.zip}
				</p>
				<p className='text-gray-600'>{venue.location.country}</p>
			</div>
			<div className='text-red-500 mt-4'>
				Please{' '}
				<a href='/login' className='underline'>
					log in
				</a>{' '}
				to book this place.
			</div>
		</div>
	);
};

export default VenueDetails;
