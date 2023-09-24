import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

const MyBookings = async ({ params: { id } }) => {
	const session = await getServerSession(authOptions);

	const { accessToken, name } = session;

	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/bookings`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const bookings = await data.json();

	return (
		<section className='m-12 rounded-md grid grid-cols-4 gap-12'>
			{bookings.map((booking) => (
				<div
					key={booking.id}
					className='col-span-4 md:col-span-2 lg:col-span-1  rounded-md'
				>
					<Card className='bg-transparent'>
						<CardHeader>
							<CardTitle>Booking ID: {booking.id}</CardTitle>
							<CardDescription>
								Date From: {new Date(booking.dateFrom).toLocaleDateString()}
							</CardDescription>
							<CardDescription>
								Date To: {new Date(booking.dateTo).toLocaleDateString()}
							</CardDescription>
							<CardDescription>Guests: {booking.guests}</CardDescription>
						</CardHeader>
						<CardFooter className='flex justify-between'>
							{/* <AlertDialogComponent venue={venue} accessToken={accessToken} />
							<Button variant='outline' asChild>
								<Link href={`/account/edit-venue/${venue.id}`}>Edit</Link>
							</Button> */}
						</CardFooter>
					</Card>
				</div>
			))}
		</section>
	);
};

export default MyBookings;
