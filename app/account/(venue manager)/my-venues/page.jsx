import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { FaHouse } from 'react-icons/fa6';
import { MdAdd } from 'react-icons/md';
import Link from 'next/link'; // Import Link from Next.js
import AvatarEditor from '@/app/components/AvatarEditor';
import MyVenuesSection from '@/app/components/MyVenuesSection';
import { Button } from '@/components/ui/button';

const Account = async ({ params: { id } }) => {
	const session = await getServerSession(authOptions);

	const { accessToken } = session;

	const { name, email, avatar, venueManager } = session;

	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/profiles/${name}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	const res = await data.json();

	const {
		_count: { bookings, venues },
	} = res;

	if (!session.venueManager) {
		return <p>You need to be a Venue Manager to show this page.</p>;
	}

	return (
		<>
			{venues ? (
				<MyVenuesSection name={name} accessToken={accessToken} />
			) : (
				<section className='flex flex-col items-center justify-center'>
					<section className='mt-12'>
						<div className='flex flex-col items-center'>
							<FaHouse className='text-text h-12 w-12 mb-3' />
							<p className='p-2'>No venues.</p>
						</div>
					</section>
				</section>
			)}
		</>
	);
};

export default Account;
