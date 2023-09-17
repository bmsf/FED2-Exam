import { signOut } from 'next-auth/react';

const LogoutButton = () => {
	const handleLogout = async () => {
		await signOut();
	};

	return (
		<ul className='flex flex-col gap-4 p-6 w-full justify-center items-center text-grey'>
			<button
				className='cursor-pointer text-black bg-white  rounded px-4 py-2'
				onClick={handleLogout}
			>
				<div className='flex gap-2 items-center'>
					<p>Logout</p>
				</div>
			</button>
		</ul>
	);
};

export default LogoutButton;
