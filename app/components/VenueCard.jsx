import Link from 'next/link';

function VenueCard({ venue }) {
	return (
		<Link href={`/venues/${venue.id}`}>
			<div className='bg-lightestPrimary rounded-xl shadow-md overflow-hidden w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'>
				<div>
					<img
						className='w-full h-48 object-cover'
						src={venue.media[0]}
						alt={venue.name}
					/>
				</div>
				<div className='p-4'>
					<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold truncate'>
						{venue.name}
					</div>
					<p className='mt-2 text-gray-500 line-clamp-2'>{venue.description}</p>
					<div className='mt-4'>
						<span className='text-gray-600'>${venue.price}</span>
						<span className='ml-4 text-gray-600'>
							Max Guests: {venue.maxGuests}
						</span>
					</div>
					<div className='mt-4'>
						<span className='text-gray-600'>Rating: {venue.rating}</span>
					</div>
					{/* Add more details as needed */}
				</div>
			</div>
		</Link>
	);
}

export default VenueCard;
