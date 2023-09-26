'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/app/api/validators/auth'; // Import the appropriate schema

import { SpinnerButton } from '@/app/components/SpinnerButton';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const LoginPage = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values, e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const result = await signIn('credentials', {
			...values,
			redirect: false,
		});

		if (result && !result.error) {
			window.location.replace('/');
			console.log(result);
		} else {
			toast.error('Wrong credentials. Please try again');
		}
		setIsSubmitting(true);
	};

	return (
		<div className='flex flex-col justify-center mt-12 p-8 w-full md:w-2/4 lg:w-2/5 py-10 mx-auto rounded-lg gap-5'>
			<h1 className='text-4xl mb-8'>Login</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
					<SpinnerButton type='submit' name='Next' state={isSubmitting} />
					<p>
						Don&apos;t have an account?
						<Link href={'/register'} className='font-extrabold ml-1'>
							Sign Up
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
};

export default LoginPage;
