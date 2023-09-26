'use client';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

import { FaAngleLeft } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { createVenueSchema } from '@/app/api/validators/auth';
import { useSession } from 'next-auth/react';

import updateVenue from '@/app/api/updateVenue';
import Link from 'next/link';

const EditVenue = ({ params: { id } }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { data: session } = useSession();
	const [initialData, setInitialData] = useState(null);

	const form = useForm({
		resolver: zodResolver(createVenueSchema),
		defaultValues: {
			name: '',
			description: '',
			price: '',
			maxGuests: '',
			items: [],
			country: '',
			address: '',
			city: '',
			zip: '',
		},
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${session.accessToken}`,
						},
					}
				);

				const data = await response.json();

				if (response.ok) {
					console.log(data);
					const amenities = Object.keys(data.meta).filter(
						(key) => data.meta[key]
					);
					const { address, city, country, zip } = data.location;
					setInitialData(data);

					form.reset({
						name: data.name,
						price: data.price,
						maxGuests: data.maxGuests,
						description: data.description,
						items: amenities,
						country: country,
						address: address,
						city: city,
						zip: zip,
					});
				} else {
					console.log(response);
					console.log(id);
					console.log(session.accessToken);
				}
			} catch (error) {
				console.log(error);
				console.log(id);
				console.log(session.accessToken);
			}
		};

		// Check if session is available
		if (session) {
			// Call the async function
			fetchData();
		}
	}, [session, id, form]);

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

	async function onSubmit(values, e) {
		e.preventDefault();
		setIsSubmitting(true);
		const { address, city, zip, country, name, description, items } = values;

		const price = Number(values.price);
		const maxGuests = Number(values.maxGuests);

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

		updateVenue(id, session.accessToken, formattedValues);
		setIsSubmitting(true);
	}

	return (
		<div className='flex flex-col justify-center  p-8 w-full md:w-2/4 py-10 mx-auto rounded-lg gap-5'>
			<h1 className='text-4xl mb-8'>Edit venue</h1>
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
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type={'number'} placeholder='Price' {...field} />
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
									<Input
										type={'number'}
										placeholder='Maximum Guests'
										{...field}
									/>
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

					<SpinnerButton
						type='submit'
						name='Update venue'
						state={isSubmitting}
					/>
				</form>
			</Form>
		</div>
	);
};

export default EditVenue;
