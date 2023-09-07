'use client';
import { useState } from 'react';
import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import loginAuth from '../api/auth/loginAuth';

/**
 * Login component that handles user login.
 *
 * @component
 */

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		loginAuth(formData);
	};

	return (
		<>
			<div className='flex flex-col justify-center mt-12 items-center p-8 w-full md:w-2/4 py-10 mx-auto rounded-lg gap-5'>
				<div className='flex justify-start w-full lg:w-2/3'>
					<h1 className='text-4xl mb-8'>Login</h1>
				</div>
				<form
					onSubmit={onSubmit}
					className='flex flex-col w-full lg:w-2/3 space-y-4 md:space-y-6'
				>
					<div className='flex flex-col '>
						<div className='relative '>
							<UserIcon className='absolute h-4 w-4 cursor-pointer top-5 left-3' />
							<input
								id='email'
								className='bg-lightestPrimary pl-10 w-full rounded-lg  p-4 '
								value={email}
								onChange={onChange}
								required
								placeholder='E-mail'
								pattern='^[\w\-.]+@(stud.)?noroff.no$'
								title='Email must be associated with a noroff email. @noroff.no or @stud.noroff.no'
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='relative'>
							<LockClosedIcon className='absolute  h-4 w-4 cursor-pointer top-5 left-3' />
							<input
								id='password'
								type={showPassword ? 'text' : 'password'}
								className='pl-10 bg-lightestPrimary  w-full rounded-lg  p-4 text-black'
								value={password}
								onChange={onChange}
								required
								placeholder='Password'
								minLength='8'
								title='Password has a minimum length of 8 characters'
							/>
							<EyeIcon
								className='absolute h-4 w-4 cursor-pointer top-5 right-3'
								onClick={() => setShowPassword((prevState) => !prevState)}
							/>
						</div>
					</div>
					<button
						type='submit'
						className='flex items-center justify-center bg-white text-primary rounded-full py-4 px-4 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
					>
						<span>Next</span>
					</button>
					<p className=''>
						Don't have an account?{' '}
						<Link href={'/register'} className='font-extrabold'>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default Login;
