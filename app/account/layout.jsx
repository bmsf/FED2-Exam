import ProfileMenu from '@/app/components/ProfileMenu';

const ProfileLayout = ({ children }) => {
	return (
		<div className='min-h-screen p-6 mx-auto w-full lg:w-3/4'>
			<div className='mb-6'>
				<h1 className='text-3xl'>Account</h1>
			</div>
			<ProfileMenu />
			{children}
		</div>
	);
};

export default ProfileLayout;
