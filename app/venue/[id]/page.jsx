import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FaUserGroup, FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import VenueDetails from './VenueDetails';
import CalendarBooking from './CalendarBooking';

const Venue = async ({ params: { id } }) => {
	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/venues/${id}/?_bookings=true`
	);
	const venue = await data.json();

	return (
		<section className='w-full lg:w-2/3 mx-auto'>
			<div className='p-5'>
				<div className='flex justify-between'>
					<h1 className='text-2xl text-white font-light'>{venue.name}</h1>
					<span className=''>${venue.price}</span>
				</div>
				<div className='flex mt-2 gap-2 items-center text-[#9f9f9f] text-sm'>
					<FaUserGroup />
					<span className='mr-2'>Max Guests: {venue.maxGuests}</span>
					<FaStar />
					<span>Rating: {venue.rating}</span>
				</div>
			</div>
			<div className='flex flex-col w-full mx-auto'>
				<div className='md:w-2/3 mx-auto'>
					<AspectRatio ratio={16 / 9}>
						<Image
							height={1000}
							width={1000}
							className='object-cover rounded-md h-full w-full'
							src={
								venue.media.length > 0
									? venue.media[0]
									: 'path_to_default_image.jpg'
							}
							alt={venue.name}
						/>
					</AspectRatio>
				</div>
				<div className='w-full'>
					<CalendarBooking venue={venue} id={id} />
				</div>
			</div>

			<div className='w-full'>
				<VenueDetails venue={venue} />
			</div>
		</section>
	);
};

export default Venue;
