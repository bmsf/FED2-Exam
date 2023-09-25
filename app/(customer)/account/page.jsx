import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { AiOutlineUser, AiOutlineCamera } from 'react-icons/ai'; // Import icons
import Link from 'next/link'; // Import Link from Next.js
import AvatarEditor from '../../components/AvatarEditor';

const Profile = async () => {
	const session = await getServerSession(authOptions);

	const { accessToken, name } = session;

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

	const username = res.name;

	const {
		email,
		avatar,
		_count: { venues, bookings },
	} = res;

	return (
		<div className='flex items-center mt-6'>
			<div className='p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto'>
				<div className='text-center border-b border-text py-4 relative'>
					<AvatarEditor
						avatar={avatar}
						name={username}
						accessToken={accessToken}
					/>
					<h1 className='text-xl font-semibold mt-4'>{name}</h1>
				</div>
				<div className='mt-6'>
					<h2 className='text-lg font-semibold'>Contact Information</h2>
					<p className='mt-2'>
						<strong>Email:</strong> {email}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
