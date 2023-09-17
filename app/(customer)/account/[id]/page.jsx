import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { AiOutlineUser, AiOutlineCamera } from 'react-icons/ai'; // Import icons
import Link from 'next/link'; // Import Link from Next.js
import AvatarEditor from './AvatarEditor';

const Account = async ({ params: { id } }) => {
	const session = await getServerSession(authOptions);

	const { accessToken } = session;

	const data = await fetch(
		`https://api.noroff.dev/api/v1/holidaze/profiles/${id}`,
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
		name,
		email,
		avatar,
		_count: { venues, bookings },
	} = res;

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
				<div className='text-center border-b py-4 relative'>
					<AvatarEditor avatar={avatar} name={name} accessToken={accessToken} />
					<h1 className='text-xl font-semibold mt-4'>{name}</h1>
				</div>
				<div className='mt-6'>
					<h2 className='text-lg font-semibold'>Contact Information</h2>
					<p className='mt-2'>
						<strong>Email:</strong> {email}
					</p>
				</div>
				<div className='mt-6'>
					<h2 className='text-lg font-semibold'>Bookings</h2>
					<p>{bookings}</p>
					{bookings >= 0 ? (
						<div className='mt-2'>
							<Link
								href={`/account/${name}/my-bookings`}
								className='text-white flex items-center'
							>
								<span className='mr-1 border-b border-dotted border-white'>
									View Upcoming Bookings
								</span>
							</Link>
						</div>
					) : null}
				</div>
				<div className='mt-6'>
					<h2 className='text-lg font-semibold'>Accommodations</h2>
					<p>{venues}</p>
				</div>
			</div>
		</div>
	);
};

export default Account;
