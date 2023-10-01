'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/app/api/validators/auth'; // Import the appropriate schema

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

import registerAuth from '../api/auth/registerAuth';
import { SpinnerButton } from '@/app/components/SpinnerButton';

export const metadata = {
	title: 'Register with Holidaze',
	description:
		'Join the Holidaze community today! Register to unlock exclusive deals, get personalized venue recommendations, and streamline your booking experience.',
};

const RegisterPage = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			avatar: '',
			password: '',
			venueManager: false,
		},
	});

	const onSubmit = async (values) => {
		setIsSubmitting(true);
		registerAuth(values);
		setIsSubmitting(false);
	};

	return (
		<div className='flex flex-col justify-center mt-12 p-8 w-full md:w-2/4 lg:w-2/5 py-10 mx-auto rounded-lg gap-5'>
			<h1 className='text-4xl mb-8 font-semibold'>Create account</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Username' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='E-mail' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type='password' placeholder='Password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='avatar'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Avatar(optional)' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='venueManager'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className='items-top flex space-x-2'>
										<Checkbox
											id='venuemanager'
											checked={field.value}
											onCheckedChange={(checked) => field.onChange(checked)}
										/>
										<div className='grid gap-1.5 leading-none'>
											<label
												htmlFor='venuemanager'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
											>
												Register as Venue Manager
											</label>
											<p className='text-sm text-muted-foreground'>
												Entails managing venue details, events, and bookings.
											</p>
										</div>
									</div>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
						<SpinnerButton
							type='submit'
							name='Next'
							state={isSubmitting}
							className='w-full rounded-full h-12'
						/>
					</div>
					<p className='mb-44'>
						Already have an account?
						<Link href={'/api/auth/login'} className='font-extrabold ml-1'>
							Login
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
};

export default RegisterPage;
