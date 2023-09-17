import Link from 'next/link';
import { signIn } from 'next-auth/react';

const AuthButtons = () => (
	<div className='space-y-4 flex flex-col items-center'>
		<div className='block'>
			<button
				onClick={() => signIn()}
				type='button'
				className='flex items-center justify-center bg-white text-primary rounded-xl py-2.5 w-32 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
			>
				<span>Login</span>
			</button>
		</div>

		<Link href={'/register'}>
			<div className='block'>
				<button
					type='button'
					className='flex items-center justify-center bg-primary text-white rounded-xl py-2.5 w-32 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
				>
					<span>Register</span>
				</button>
			</div>
		</Link>
	</div>
);

export default AuthButtons;
