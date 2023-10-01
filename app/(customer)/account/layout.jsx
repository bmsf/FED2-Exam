import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AccountMenu from '../../components/AccountMenu';

export const metadata = {
	title: 'User Dashboard | Holidaze',
	description:
		'Your personal Holidaze hub. Update your profile, review your bookings, manage preferences, and customize your Holidaze experience. Everything you need, all in one place.',
};

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
		<div className='min-h-screen p-6 mx-auto w-full'>
			<div className='m-12'>
				<h1 className='text-3xl'>My Bookings</h1>
			</div>
			<AccountMenu />
			{children}
		</div>
	);
};

export default ProfileLayout;
