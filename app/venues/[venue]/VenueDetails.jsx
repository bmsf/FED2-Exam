import React from 'react';

export default function VenueDetails({ venue }) {
	if (!venue) return null;

	return (
		<div className='p-6 bg-lightestPrimary'>
			{/* Venue Details */}
			<div className='flex flex-col md:flex-row'>
				<div className='w-full md:w-1/2'>
					{/* Using a default placeholder image if no images are provided in media */}
					<img
						className='rounded-lg shadow-md'
						src={
							venue.media.length > 0
								? venue.media[0]
								: 'path_to_default_image.jpg'
						}
						alt={venue.name}
					/>
				</div>
				<div className='w-full md:w-1/2 md:pl-6'>
					<h1 className='text-2xl font-bold mb-4'>{venue.name}</h1>
					<p className='text-gray-600'>{venue.description}</p>
					<div className='mt-4'>
						<span className='text-gray-600'>${venue.price}</span>
						<span className='ml-4 text-gray-600'>
							Max Guests: {venue.maxGuests}
						</span>
					</div>
					<div className='mt-4'>
						<span className='text-gray-600'>Rating: {venue.rating}</span>
					</div>
				</div>
			</div>

			{/* Amenities */}
			<div className='mt-6'>
				<h2 className='text-xl font-bold mb-4'>Amenities</h2>
				<ul className='grid grid-cols-2 md:grid-cols-4 gap-2'>
					{Object.entries(venue.meta).map(([key, value]) => (
						<li key={key}>
							{value ? `${key.charAt(0).toUpperCase() + key.slice(1)}` : null}
						</li>
					))}
				</ul>
			</div>

			{/* Location */}
			<div className='mt-6'>
				<h2 className='text-xl font-bold mb-4'>Location</h2>
				<p>{venue.location.address}</p>
				<p>
					{venue.location.city}, {venue.location.zip}
				</p>
				<p>{venue.location.country}</p>
			</div>
			<div className='text-red-500'>
				Please{' '}
				<a href='/login' className='underline'>
					log in
				</a>{' '}
				to book this place.
			</div>

			{/* Note: I removed the owner and bookings section as they are not present in the new API structure */}
		</div>
	);
}
