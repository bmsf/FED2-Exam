import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { fetchFromApi } from '@/app/utils/api';

const MyBookings = async () => {
	const session = await getServerSession(authOptions);

	const { accessToken, name } = session;

	const method = 'GET';

	const action = `/profiles/${name}/bookings?_venue=true`;

	const bookings = await fetchFromApi(method, accessToken, action);

	return (
		<section className='m-12 rounded-md grid grid-cols-4 gap-12'>
			{bookings.map((booking) => (
				<div
					key={booking.id}
					className='col-span-4 md:col-span-2 lg:col-span-1 rounded-md'
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

						<CardContent>
							<h3 className='text-xl font-bold'>Venue Details</h3>
							<CardDescription>Name: {booking.venue.name}</CardDescription>
							<CardDescription>
								Description: {booking.venue.description}
							</CardDescription>
							<CardDescription>Price: ${booking.venue.price}</CardDescription>
							<CardDescription>
								Max Guests: {booking.venue.maxGuests}
							</CardDescription>
							<CardDescription>Rating: {booking.venue.rating}</CardDescription>
						</CardContent>

						<CardFooter className='flex justify-between'></CardFooter>
					</Card>
				</div>
			))}
		</section>
	);
};

export default MyBookings;
