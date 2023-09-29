'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

// const FormSchema = z.object({
// 	username: z.string().min(2, {
// 		message: 'Search input must be at least 2 characters',
// 	}),
// });

export function SearchInput() {
	const router = useRouter();
	const form = useForm();

	function onSubmit(data) {
		const adjustedData = { search_query: data.search };
		const queryParams = new URLSearchParams(adjustedData).toString();
		router.push(`/search?${queryParams}`);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-3/3 space-y-8'>
				<FormField
					control={form.control}
					name='search'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className='relative rounded-full'>
									<Input
										placeholder='Search...'
										{...field}
										className='rounded-full pl-12 h-10'
									/>
									<button
										type='submit'
										className='absolute left-0 top-1/2 transform -translate-y-1/2 pl-3' // Absolute positioning inside the relative div
									>
										<Search />
									</button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
