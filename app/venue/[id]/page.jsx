import { getServerSession, authOptions } from 'next-auth';
import VenueDetails from './VenueDetails';

const Venues = async ({ params: { id } }) => {
	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/venues/${id}`
	);
	const res = await data.json();

	return (
		<div className='bg-lightestPrimary w-full'>
			<VenueDetails venue={res} />
		</div>
	);
};

export default Venues;
