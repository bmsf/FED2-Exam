import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import ProfileMenu from '@/app/components/ProfileMenu';

const ProfileLayout = async ({ children }) => {
	const session = await getServerSession(authOptions);

	if (!session || session.venueManager) {
		return (
			<div className='flex flex-col items-center justify-center'>
				<p className='mb-4'>This page is only for logged in users</p>
				<Button asChild>
					<Link href={'/api/auth/login'}>Go to the login page</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className='min-h-screen p-6 mx-auto w-full lg:w-3/4'>
			<div className='mb-6'>
				<h1 className='text-3xl'>Account</h1>
			</div>
			{/* <ProfileMenu /> */}
			{children}
		</div>
	);
};

export default ProfileLayout;
