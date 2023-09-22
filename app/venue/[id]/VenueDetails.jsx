import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { FaUserGroup, FaStar } from 'react-icons/fa6';

import { CalendarBooking } from './CalendarBooking';

import { AspectRatio } from '@/components/ui/aspect-ratio';

const VenueDetails = async ({ venue }) => {
	if (!venue) return null;

	console.log(venue);

	// <div className='text-[#9f9f9f]'></div>
	return (
		<div>
			<AspectRatio ratio={16 / 9}>
				<img
					className=' object-cover h-full w-full'
					src={
						venue.media.length > 0
							? venue.media[0]
							: 'path_to_default_image.jpg'
					}
					alt={venue.name}
				/>
			</AspectRatio>
			<div className='w-full md:w-2/3 mx-auto p-4 rounded-md my-3 flex flex-col gap-4'>
				<div className='border-b pb-5 border-[#9f9f9f]'>
					<div className='flex justify-between'>
						<h1 className='text-2xl  text-white font-light'>{venue.name}</h1>
						<span className=''>${venue.price}</span>
					</div>
					<div className='flex mt-2 gap-2 items-center text-[#9f9f9f] text-sm'>
						<FaUserGroup />
						<span className='mr-2'>Max Guests: {venue.maxGuests}</span>
						<FaStar />
						<span>Rating: {venue.rating}</span>
					</div>
				</div>
				<div className='border-b pb-5 border-[#9f9f9f]'>
					<h2 className='text-md mb-2 text-white'>Amenities</h2>
					<div className='mt-6'>
						<ul className='flex gap-2'>
							{Object.entries(venue.meta).map(([key, value]) =>
								value ? (
									<li
										key={key}
										className='rounded-full px-4 text-sm py-1 bg-lightestPrimary text-white'
									>
										{key.charAt(0).toUpperCase() + key.slice(1)}
									</li>
								) : null
							)}
						</ul>
					</div>
				</div>
				<div className='border-b pb-5 border-[#9f9f9f]'>
					<h2 className='text-md mb-2 text-white'>Location</h2>
					<div className='mt-6'>
						<div className='flex justify-between'>
							<div>
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
		</div>
	);
};

export default VenueDetails;
