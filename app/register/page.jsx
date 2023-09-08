'use client';
import { useState } from 'react';
import {
	EyeIcon,
	LockClosedIcon,
	UserIcon,
	EnvelopeIcon,
	PhotoIcon,
} from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';

import Link from 'next/link';
import registerAuth from '../api/auth/registerAuth';

function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		avatar: '',
		password: '',
		venueManager: false,
	});

	const { name, email, password, avatar, venueManager } = formData;

	const onChange = (e) => {
		const { id, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[id]: type === 'checkbox' ? checked : value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		registerAuth(formData);
	};

	return (
		<>
			<div className=' flex flex-col justify-center'>
				<div className='flex flex-col items-center py-10 gap-5'>
					<h1 className='text-4xl mb-8 self-start mx-10'>Sign Up</h1>
					<form
						className='flex flex-col w-full lg:w-2/3 space-y-4 md:space-y-6'
						onSubmit={onSubmit}
					>
						<div className='flex flex-col mx-10'>
							<div className='relative'>
								<UserIcon className='absolute h-4 w-4 cursor-pointer top-5 left-3' />
								<input
									id='name'
									className='rounded-lg w-full p-4 pl-8 bg-lightestPrimary'
									value={name}
									onChange={onChange}
									required
									pattern='^[\w]+$'
									maxLength='20'
									placeholder='Name'
									title='Name can maximum contain 20 letters and no numbers. The name value must not contain punctuation symbols apart from underscore'
								/>
							</div>
						</div>
						<div className='flex flex-col mx-10'>
							<div className='relative '>
								<EnvelopeIcon className='absolute h-4 w-4 cursor-pointer top-5 left-3' />
								<input
									id='email'
									className='pl-10  w-full rounded-lg  p-4 bg-lightestPrimary'
									value={email}
									onChange={onChange}
									required
									placeholder='E-mail(@stud.noroff)'
									pattern='^[\w\-.]+@(stud.)?noroff.no$'
									title='Email must be associated with a noroff email. @noroff.no or @stud.noroff.no'
								/>
							</div>
						</div>
						<div className='flex flex-col mx-10'>
							<div className='relative '>
								<PhotoIcon className='absolute h-4 w-4 cursor-pointer top-5 left-3' />
								<input
									id='avatar'
									className='pl-10  w-full rounded-lg py-4 px-4 bg-lightestPrimary'
									value={avatar}
									onChange={onChange}
									placeholder='Avatar(optional)'
									pattern='^[\w]+$'
									title='Name can maximum contain 20 letters and no numbers'
								/>
							</div>
						</div>
						<div className='flex flex-col  mx-10'>
							<div className='relative'>
								<LockClosedIcon className='absolute h-4 w-4 cursor-pointer top-5 left-3' />
								<input
									id='password'
									type={showPassword ? 'text' : 'password'}
									className='pl-10  w-full rounded-lg py-4 px-4 bg-lightestPrimary'
									value={password}
									onChange={onChange}
									required
									placeholder='Password'
									minLength='8'
									title='Password has a minimum length of 8 characters'
								/>
								<EyeIcon
									className='absolute h-4 w-4 cursor-pointer top-4 right-3'
									onClick={() => setShowPassword((prevState) => !prevState)}
								/>
							</div>

							<div className='flex items-center my-2'>
								<input
									type='checkbox'
									id='venueManager'
									checked={venueManager}
									onChange={onChange}
								/>
								<label className='ml-2' htmlFor='venueManager'>
									Register as a venue manager
								</label>
							</div>
						</div>
						<button
							type='submit'
							className='flex mx-10 items-center justify-center bg-white text-primary rounded-full py-4 px-4 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
						>
							<span>Next</span>
						</button>
					</form>
				</div>
				<div className='text-center w-full'>
					Already have an account?
					<Link href={'/login'}>
						<span className='font-extrabold pl-2'>Login</span>
					</Link>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
