import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ViewBookings = async ({ params: { id } }) => {
	const session = await getServerSession(authOptions);

	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/venues/${id}?_bookings=true`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${session.accessToken}`,
			},
		}
	);

	const res = await data.json();

	const bookings = res.bookings;

	return (
		<>
			{bookings === null ? (
				<p>Loading...</p>
			) : bookings.length === 0 ? (
				<div className='flex justify-center items-center mt-12'>
					<p>No current bookings</p>
				</div>
			) : (
				<div className='space-y-8 mt-10'>
					{bookings.map((booking) => (
						<div
							key={booking.id}
							className='flex justify-between items-center border p-6'
						>
							<div className='space-y-1'>
								<p className='text-sm font-medium leading-none'>{booking.id}</p>
							</div>
							<div className='space-y-1 ml-6'>
								<p>Number of guests: {booking.guests}</p>
							</div>
							<div className='ml-auto font-medium'>
								<p className='text-sm text-muted-foreground'>
									{new Date(booking.dateFrom).toLocaleDateString()} -{' '}
									{new Date(booking.dateTo).toLocaleDateString()}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ViewBookings;
