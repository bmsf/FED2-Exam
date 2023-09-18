import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import VenueCard from '@/app/components/VenueCard';

const MyBookings = async ({ params: { id } }) => {
	const session = await getServerSession(authOptions);

	const { accessToken } = session;

	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/profiles/${id}/bookings`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const res = await data.json();

	return (
		<div className='flex flex-col h-full'>
			<div className='flex items-center justify-between border-b border-gray-300 pb-2'>
				<h1 className='text-xl p-8'>My Bookings</h1>
			</div>

			<div className='flex-grow'>
				{res.length > 0 ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
						{res.map((booking) => (
							<VenueCard key={booking.id} venue={booking} />
						))}
					</div>
				) : (
					// Render information and a button if there are no bookings
					<div className='flex flex-col items-center justify-center h-full'>
						<p className='text-gray-500 text-lg mb-4 p-10'>
							You have no bookings.
						</p>
						<Link href='/venues'>
							<Button type='button' className='bg-texas'>
								Go to venues
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default MyBookings;
