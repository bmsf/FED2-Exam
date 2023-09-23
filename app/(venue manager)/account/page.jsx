import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { FaHouse } from 'react-icons/fa6';
import { MdAdd } from 'react-icons/md';
import Link from 'next/link'; // Import Link from Next.js
import AvatarEditor from './AvatarEditor';
import { Button } from '@/components/ui/button';
import MyVenuesSection from './MyVenuesSection';

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

	return (
		<>
			<section className='p-4 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto'>
				<div className='text-center border-b py-4 relative'>
					<AvatarEditor avatar={avatar} name={name} accessToken={accessToken} />
					<h1 className='text-xl font-semibold mt-4'>{name}</h1>
					<p className='mt-2'>
						<strong>Email:</strong> {email}
					</p>
				</div>
				<Button asChild variant='outline' className='my-6 mx-auto'>
					<Link href={'/account/create-venue'}>Create a new venue</Link>
				</Button>
			</section>
			{venues ? (
				<MyVenuesSection name={name} accessToken={accessToken} />
			) : (
				<section className='min-h-screen flex flex-col items-center justify-center'>
					<section className='mt-12'>
						<div className='flex flex-col items-center'>
							<FaHouse className='text-text h-12 w-12 mb-3' />
							<p className='p-2'>No venues.</p>
							<Button asChild>
								<Link href={'/account/create-venue'}>Create a new venue</Link>
							</Button>
						</div>
					</section>
				</section>
			)}
		</>
	);
};

export default Account;
