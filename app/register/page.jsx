'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
	EyeIcon,
	LockClosedIcon,
	UserIcon,
	EnvelopeIcon,
	PhotoIcon,
} from '@heroicons/react/24/outline';

/**

A React functional component for user registration form.
@component
@return {JSX.Element}
*/

function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		avatar: '',
		password: '',
		vanueManager: false,
	});

	const { name, email, password, avatar } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		console.log(formData);
	};

	return (
		<>
			<main>
				<div className='bg-primaryflex flex-col justify-center items-center py-10 gap-5'>
					<h1 className='text-xl'>Sign Up</h1>
					<form
						className='flex flex-col w-full lg:w-2/3 space-y-4 md:space-y-6'
						onSubmit={onSubmit}
					>
						<div className='flex flex-col mx-10'>
							<label className='mb-2 text-sm font-medium'>Name</label>
							<div className='relative'>
								<UserIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
								<input
									id='name'
									className='rounded-lg w-full py-4 px-4 bg-transparent pl-8 bg-lightestPrimary'
									value={name}
									onChange={onChange}
									required
									pattern='^[\w]+$'
									maxLength='20'
									placeholder='jon_doe'
									title='Name can maximum contain 20 letters and no numbers. The name value must not contain punctuation symbols apart from underscore'
								/>
							</div>
						</div>
						<div className='flex flex-col mx-10'>
							<label className='mb-2 text-sm font-medium'>Email</label>
							<div className='relative '>
								<EnvelopeIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
								<input
									id='email'
									className='pl-10  w-full rounded-lg py-4 px-4  bg-lightestPrimary'
									value={email}
									onChange={onChange}
									required
									placeholder='jondoe@stud.noroff.no'
									pattern='^[\w\-.]+@(stud.)?noroff.no$'
									title='Email must be associated with a noroff email. @noroff.no or @stud.noroff.no'
								/>
							</div>
						</div>
						<div className='flex flex-col mx-10'>
							<label className='mb-2 text-sm font-medium'>
								Avatar(optional)
							</label>
							<div className='relative '>
								<PhotoIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
								<input
									id='avatar'
									className='pl-10  w-full rounded-lg py-4 px-4  bg-lightestPrimary'
									value={avatar}
									onChange={onChange}
									placeholder='"https://url.com/image.jpg"'
									pattern='^[\w]+$'
									title='Name can maximum contain 20 letters and no numbers'
								/>
							</div>
						</div>
						<div className='flex flex-col  mx-10'>
							<label className='mb-2 text-sm font-medium'>Password</label>
							<div className='relative'>
								<LockClosedIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
								<input
									id='password'
									type={showPassword ? 'text' : 'password'}
									className='pl-10  w-full rounded-lg py-4 px-4 bg-lightestPrimary'
									value={password}
									onChange={onChange}
									required
									placeholder='********'
									minLength='8'
									title='Password has a minimum length of 8 characters'
								/>
								<EyeIcon
									className='absolute h-4 w-4 cursor-pointer top-4 right-3'
									onClick={() => setShowPassword((prevState) => !prevState)}
								/>
							</div>
						</div>
						<button
							type='submit'
							className='flex mx-10 items-center justify-center bg-white text-primary rounded-full py-4 px-4 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
						>
							<span>Next</span>
						</button>
						<p className=''>
							Already have an account?{' '}
							<Link href={'/login'} className='font-extrabold'>
								Login
							</Link>
						</p>
					</form>
				</div>
			</main>
		</>
	);
}

export default RegisterPage;
