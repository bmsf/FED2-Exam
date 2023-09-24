import Image from 'next/image';
import Link from 'next/link';

function VenueCard({ venue }) {
	return (
		<Link href={`/venue/${venue.id}`}>
			<div className='bg-lightestPrimary rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300'>
				<div className='relative aspect-video overflow-hidden rounded-t-md'>
					<Image
						src={venue.media[0]}
						width={800}
						height={800}
						alt={venue.name}
						className='rounded-t-md'
					/>
				</div>
				<div className='p-4'>
					<div className='uppercase tracking-wide text-sm font-semibold text-white truncate'>
						{venue.name}
					</div>
					<p className='mt-2 text-gray-500 line-clamp-2'>{venue.description}</p>
					<div className='mt-4 flex justify-between items-center'>
						<span className='text-gray-600'>${venue.price}</span>
						<span className='text-gray-600'>Max Guests: {venue.maxGuests}</span>
					</div>
					<div className='mt-2 text-gray-600'>Rating: {venue.rating}</div>
				</div>
			</div>
		</Link>
	);
}

export default VenueCard;
