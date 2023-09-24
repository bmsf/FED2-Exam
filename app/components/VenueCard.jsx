import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function VenueCard({ venue }) {
	return (
		<Link href={`/venue/${venue.id}`}>
			<Card className='bg-transparent border-none rounded-md'>
				<CardHeader>
					<div className='relative aspect-video overflow-hidden rounded-t-md'>
						<Image
							src={venue.media[0]}
							width={800}
							height={800}
							alt={venue.name}
							className='rounded-t-md'
						/>
					</div>
					<CardTitle className='uppercase tracking-wide text-sm font-semibold text-white truncate'>
						{venue.name}
					</CardTitle>
					<CardDescription className='text-gray-500 line-clamp-2'>
						{venue.description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='mt-4 flex justify-between items-center'>
						<span className='text-gray-600'>${venue.price}</span>
						<span className='text-gray-600'>Max Guests: {venue.maxGuests}</span>
					</div>
					<div className='mt-2 text-gray-600'>Rating: {venue.rating}</div>
				</CardContent>
			</Card>
		</Link>
	);
}

export default VenueCard;
