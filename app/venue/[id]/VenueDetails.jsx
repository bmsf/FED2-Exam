import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

import { CalendarBooking } from './CalendarBooking';

const VenueDetails = async ({ venue }) => {
	if (!venue) return null;

	return (
		<div className='text-[#9f9f9f]'>
			{/* Image */}
			<div className='w-full md:w-2/3 mx-auto bg-lightestPrimary p-4 rounded-md my-3'>
				<h1 className='text-2xl mb-2 text-white'>{venue.name}</h1>
				<p className='mb-4'>{venue.description}</p>
				<div className=''>
					<span className='mr-4'>${venue.price}</span>
					<span>Max Guests: {venue.maxGuests}</span>
				</div>
				<div className='mt-2'>Rating: {venue.rating}</div>
			</div>
			<div className='w-full md:w-2/3 mx-auto mb-4 bg-lightestPrimary p-4 rounded-md'>
				<img
					className='rounded-lg max-h-94 md:max-h-96 mx-auto'
					src={
						venue.media.length > 0
							? venue.media[0]
							: 'path_to_default_image.jpg'
					}
					alt={venue.name}
				/>
				<div className='flex justify-between'>
					<div className='mt-6'>
						<h2 className='text-xl mb-2 text-white'>Amenities</h2>
						<ul className='grid'>
							{Object.entries(venue.meta).map(([key, value]) => (
								<li key={key}>
									{value
										? `${key.charAt(0).toUpperCase() + key.slice(1)}`
										: null}
								</li>
							))}
						</ul>
					</div>
					<div className='my-6 flex'>
						<div>
							<h2 className='text-xl mb-2 text-white'>Location</h2>
							<p className=''>{venue.location.address}</p>
							<p className=''>
								{venue.location.city}, {venue.location.zip}
							</p>
							<p className=''>{venue.location.country}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VenueDetails;
