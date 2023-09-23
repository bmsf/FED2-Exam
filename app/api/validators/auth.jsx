import { z } from 'zod';

export const createVenueSchema = z.object({
	name: z.string().min(2, {
		message: 'Venue name must be at least 2 characters.',
	}),
	price: z.coerce.number().positive({
		message: 'Price must be a number above 0',
	}),
	maxGuests: z.coerce.number().positive({
		message: 'Price must be a number above 0',
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
