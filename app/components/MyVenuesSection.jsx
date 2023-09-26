import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import AlertDialogComponent from './AlertDialogComponent';
import Link from 'next/link';

const MyVenuesSection = async ({ name, accessToken }) => {
	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/venues`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	const res = await data.json();

	const venues = res;

	return (
		<section className='m-12 rounded-md grid grid-cols-4 gap-12'>
			{venues.map((venue) => (
				<div
					key={venue.name}
					className='col-span-4 md:col-span-2 lg:col-span-1 rounded-md'
				>
					<Card className='bg-transparent'>
						<div className='flex justify-between'>
							<CardHeader>
								<CardTitle>{venue.name}</CardTitle>
								{/* <CardDescription>{venue.description}</CardDescription> */}
							</CardHeader>
							<AlertDialogComponent venue={venue} accessToken={accessToken} />
						</div>
						<CardContent>{venue.description}</CardContent>
						<CardFooter className='flex justify-between'>
							<Button variant='outline' asChild>
								<Link href={`/venuemanager/edit-venue/${venue.id}`}>Edit</Link>
							</Button>
							<Button asChild>
								<Link href={`/venuemanager/view-bookings/${venue.id}`}>
									View Bookings
								</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			))}
		</section>
	);
};

export default MyVenuesSection;
