import VenueDetails from './VenueDetails';
import { CalendarBooking } from './CalendarBooking';

const Venues = async ({ params: { id } }) => {
	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/venues/${id}/?_bookings=true`
	);
	const res = await data.json();

	return (
		<div className='p-6 text-white'>
			<VenueDetails venue={res} />
			<CalendarBooking venue={res} />
		</div>
	);
};

export default Venues;
