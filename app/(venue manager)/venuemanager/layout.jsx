import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import ProfileMenu from '@/app/components/VenueManagerMenu';
import { Button } from '@/components/ui/button';

export const metadata = {
	title: 'Venue Manager Dashboard | Holidaze',
	description:
		'Manage your Holidaze profile and listings effortlessly. Update your avatar, add new venues, or make modifications to existing ones. Your centralized hub for all venue management tasks.',
};

const ProfileLayout = async ({ children }) => {
	const session = await getServerSession(authOptions);

	if (!session || !session.venueManager) {
		return (
			<div className='flex flex-col items-center justify-center'>
				<p className='mb-4'>This page is only for venue managers</p>
				<Button asChild>
					<Link href={'/api/auth/login'}>Go to the login page</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className='min-h-screen p-6 mx-auto w-full'>
			<div className='mb-6 mx-12'>
				<h1 className='text-3xl'>Account</h1>
			</div>
			<ProfileMenu />
			{children}
		</div>
	);
};

export default ProfileLayout;
