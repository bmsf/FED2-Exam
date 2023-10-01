import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

import AvatarEditor from '../../components/AvatarEditor';
import { fetchFromApi } from '@/app/utils/api';

const Profile = async () => {
	const session = await getServerSession(authOptions);

	const { accessToken, name } = session;

	const method = 'GET';

	const action = `/profiles/${name}`;

	const res = await fetchFromApi(method, accessToken, action);

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
