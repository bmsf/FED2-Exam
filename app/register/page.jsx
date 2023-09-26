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
			<h1 className='text-4xl mb-8'>Sign Up</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Name' {...field} />
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
									<Input placeholder='Avatar' {...field} />
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
									<Checkbox
										checked={field.value}
										onCheckedChange={(checked) => field.onChange(checked)}
									/>
								</FormControl>
								<FormLabel className='font-normal ml-2'>
									Venue manager
								</FormLabel>
								<FormMessage />
							</FormItem>
						)}
					/>
					<SpinnerButton type='submit' name='Next' state={isSubmitting} />
					<p>
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
