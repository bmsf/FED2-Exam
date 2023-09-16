import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { AiOutlineUser, AiOutlineCamera } from 'react-icons/ai'; // Import icons
import Link from 'next/link'; // Import Link from Next.js

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
					<div className='relative inline-block'>
						{avatar ? (
							<img
								src={avatar}
								alt='User Profile'
								className='w-20 h-20 mx-auto rounded-full'
							/>
						) : (
							<div className='flex justify-center items-center w-20 h-20 mx-auto bg-gray-300 rounded-full'>
								<AiOutlineUser className='text-primary text-3xl' />
							</div>
						)}
						<div className='absolute -bottom-3 left-0 right-0'>
							<div className='border w-6 h-6 mx-auto bg-white text-primary rounded-full p-1 cursor-pointer flex items-center justify-center'>
								<AiOutlineCamera className='text-lg' />
							</div>
						</div>
					</div>
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
					{bookings > 0 ? (
						<div className='mt-2'>
							<Link
								href='/upcoming-bookings'
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
