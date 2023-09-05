import VenueDetails from './VenueDetails';

export default async function Venues({ params: { venue } }) {
	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/venues/${venue}`
	);
	const res = await data.json();

	return (
		<div className='bg-lightestPrimary w-full'>
			<VenueDetails venue={res} />
		</div>
	);
}
