import { z } from 'zod';

export const registerSchema = z.object({
	name: z
		.string()
		.min(1, {
			message: 'Name must be at least 1 character',
		})
		.max(20, {
			message: 'Name must be at most 20 characters',
		})
		.regex(/^[A-Za-z_]+$/, {
			message:
				'The name value must not contain punctuation symbols apart from underscore (_).',
		}),
	email: z
		.string()
		.email({
			message: 'Invalid email address',
		})
		.regex(/^[\w\-.]+@(stud.)?noroff.no$/, {
			message:
				'The email value must be a valid stud.noroff.no or noroff.no email address.',
		}),
	avatar: z.string().optional(''),
	password: z.string().min(8, {
		message: 'The password value must be at least 8 characters.',
	}),
	venueManager: z.boolean().default(false),
});

export const loginSchema = z.object({
	email: z
		.string()
		.email({
			message: 'Invalid email address',
		})
		.refine((data) => /^[\w\-.]+@(stud\.)?noroff\.no$/.test(data), {
			message:
				'The email value must be a valid stud.noroff.no or noroff.no email address.',
		}),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters long',
	}),
});

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

export const bookingSchema = z.object({
	dateFrom: z.string().pipe(z.coerce.date()),
	dateTo: z.string().pipe(z.coerce.date()),
	guests: z.number().min(1, 'At least one guest is required'),
});
