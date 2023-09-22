'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
import { Textarea } from '@/components/ui/textarea';

import { useForm } from 'react-hook-form';

const items = [
	{
		id: 'wifi',
		label: 'Wifi',
	},
	{
		id: 'parking',
		label: 'Parking',
	},
	{
		id: 'breakfast',
		label: 'Breakfast',
	},
	{
		id: 'pets',
		label: 'Pets',
	},
];

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Venue name must be at least 2 characters.',
	}),
	price: z.string().min(2, {
		message: 'String name must be at least 2 characters.',
	}),
	maxGuests: z.string().min(2, {
		message: 'String name must be at least 2 characters.',
	}),
	description: z.string().min(2, {
		message: 'Description name must be at least 2 characters.',
	}),
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: 'You have to select at least one item.',
	}),
	country: z.string().min(2, {
		message: 'Description name must be at least 2 characters.',
	}),
	address: z.string().min(2, {
		message: 'Description name must be at least 2 characters.',
	}),
	city: z.string().min(2, {
		message: 'Description name must be at least 2 characters.',
	}),
	zip: z.string().min(2, {
		message: 'Description name must be at least 2 characters.',
	}),
});

export function ProfileForm() {
	// 1. Define your form.
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			description: '',
			price: '',
			maxGuests: '',
			items: [],
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values) {
		// Do something with the form values.
		console.log(values);

		const {
			address,
			city,
			zip,
			country,
			name,
			description,
			price,
			maxGuests,
			items,
		} = values;

		const meta = { wifi: false, parking: false, breakfast: false, pets: false };

		items.forEach((item) => {
			meta[item] = true;
		});

		const formattedValues = {
			name,
			description,
			price,
			maxGuests,
			meta,
			location: {
				address,
				city,
				zip,
				country,
			},
		};

		console.log(formattedValues);
	}

	return (
		<div className='flex flex-col justify-center mt-12 p-8 w-full md:w-2/4 py-10 mx-auto rounded-lg gap-5'>
			<h1 className='text-4xl mb-8'>Create new venue</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Venue name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Price' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='maxGuests'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Maximum Guests' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea placeholder='Description' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='items'
						render={() => (
							<FormItem>
								<div className='mb-4'>
									<FormLabel className='text-base'>Amenteties</FormLabel>
								</div>
								{items.map((item) => (
									<FormField
										key={item.id}
										control={form.control}
										name='items'
										render={({ field }) => {
											return (
												<FormItem
													key={item.id}
													className='flex flex-row items-start space-x-3 space-y-0'
												>
													<FormControl>
														<Checkbox
															checked={field.value?.includes(item.id)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([...field.value, item.id])
																	: field.onChange(
																			field.value?.filter(
																				(value) => value !== item.id
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel className='font-normal'>
														{item.label}
													</FormLabel>
												</FormItem>
											);
										}}
									/>
								))}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='country'
						render={({ field }) => (
							<FormItem>
								<div className='mb-4'>
									<FormLabel className='text-base'>Location</FormLabel>
								</div>
								<FormControl>
									<Input placeholder='Country' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='address'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Address' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='city'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='City' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='zip'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Zip' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</div>
	);
}

export default ProfileForm;
