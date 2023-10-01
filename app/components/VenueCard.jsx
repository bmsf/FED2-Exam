import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function VenueCard({ venue }) {
	return (
		<Link href={`/venue/${venue.id}`}>
			<Card className='bg-transparent border-none rounded-md text-text'>
				<CardHeader>
					<div className='relative aspect-video overflow-hidden rounded-md'>
						{venue.media && venue.media[0] ? (
							<Image
								src={venue.media[0]}
								width={800}
								height={800}
								alt={venue.name}
							/>
						) : (
							<div className='flex text-black items-center justify-center w-full h-full bg-gray-200'>
								<span>No image</span>
							</div>
						)}
					</div>
					<div className='flex justify-between'>
						<CardTitle className='uppercase tracking-wide text-sm font-semibold text-white truncate'>
							{venue.name}
						</CardTitle>
						<div className='flex items-center gap-1'>
							<Star className='h-4 w-4 text-yellow-400' />
							{venue.rating}
						</div>
					</div>
					<CardDescription className='line-clamp-2'>
						{venue.description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='mt-4 flex justify-between items-center'>
						<span>${venue.price}</span>
						<span>Max Guests: {venue.maxGuests}</span>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}

export default VenueCard;
