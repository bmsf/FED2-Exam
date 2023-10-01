import { FaUserGroup, FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import VenueDetails from '../../components/VenueDetails';
import CalendarBooking from '../../components/CalendarBooking';

export const metadata = {
	title: 'Venue Details & Booking | Holidaze',
	description:
		'Explore the specifics of your chosen venue with Holidaze. View photos, check availability, and book your preferred dates all in one place. Secure your spot today!',
};

const Venue = async ({ params: { id } }) => {
	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/venues/${id}/?_bookings=true`
	);

	const venue = await data.json();

	return (
		<main className='w-full md:w-2/3 mx-auto md:mt-12 p-4 flex flex-col '>
			<div className='aspect-video relative w-full lg:w-3/4 mx-auto'>
				<Image
					fill
					className='object-cover md:rounded-md'
					src={
						venue.media.length > 0
							? venue.media[0]
							: 'path_to_default_image.jpg'
					}
					alt={venue.name}
				/>
			</div>
			<div className='flex justify-between my-4'>
				<h1 className='text-2xl text-white font-light'>{venue.name}</h1>
				<span className=''>${venue.price}</span>
			</div>
			<div className='flex mt-2 gap-2 items-center text-[#9f9f9f] text-sm '>
				<FaUserGroup />
				<span className='mr-2'>Max Guests: {venue.maxGuests}</span>
				<FaStar />
				<span>Rating: {venue.rating}</span>
			</div>
			<div className='flex flex-col lg:flex-row justify-between w-full'>
				<div className='w-full lg:w-2/4'>
					<CalendarBooking venue={venue} id={id} />
				</div>

				<div className='w-full'>
					<VenueDetails venue={venue} />
				</div>
			</div>
		</main>
	);
};

export default Venue;
