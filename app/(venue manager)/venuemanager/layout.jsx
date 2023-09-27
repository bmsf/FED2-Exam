import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import ProfileMenu from '@/app/components/ProfileMenu';
import { Button } from '@/components/ui/button';

const ProfileLayout = async ({ children }) => {
	const session = await getServerSession(authOptions);

	if (session === null) {
		return <p>Loading...</p>;
	}

	if (!session || !session.venueManager) {
		return (
			<div className='flex flex-col items-center justify-center'>
				<p className='mb-4'>This page is only for venue managers</p>
				<Button asChild>
					<Link href={'/'}>Go to Homepage</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className='min-h-screen p-6 mx-auto w-full'>
			<div className='mb-6'>
				<h1 className='text-3xl'>Account</h1>
			</div>
			<ProfileMenu />
			{children}
		</div>
	);
};

export default ProfileLayout;
