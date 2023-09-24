import ProfileMenu from '@/app/components/ProfileMenu';

const ProfileLayout = ({ children }) => {
	return (
		<div className='p-6'>
			<h1 className='text-3xl mb-6'>Account</h1>
			<ProfileMenu />
			{children}
		</div>
	);
};

export default ProfileLayout;
