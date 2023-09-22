'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { FaRegUser } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export function CalendarBooking({ venue }) {
	const [signInDate, setsignInDate] = useState();
	const [signOutDate, setSignOutDate] = useState();
	const [guests, setGuests] = useState(1);

	const { data: session } = useSession();

	console.log(session);

	const disabledDates = venue.bookings.map((booking) => {
		const dateFrom = new Date(booking.dateFrom);
		const dateTo = new Date(booking.dateTo);
		const disabledDatesForBooking = [];

		// Loop through the date range and add each date to the disabledDatesForBooking array
		let currentDate = dateFrom;
		while (currentDate <= dateTo) {
			disabledDatesForBooking.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return disabledDatesForBooking;
	});

	const mergedDisabledDates = [].concat(...disabledDates);

	// const prevDates = (date) => date < new Date();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('check in date', signInDate);
		console.log('checkout in date', signOutDate);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-2 p-4'>
				<div className='flex gap-2'>
					<Button
						variant={'outline'}
						className={cn(
							'w-full justify-start text-left font-normal bg-lightestPrimary border-0',
							!signInDate && 'text-muted-foreground'
						)}
					>
						<FaRegUser className='mr-2 h-4 w-4' />
						<span>Guests</span>
					</Button>
					<input
						type='number'
						min={1}
						value={guests}
						onChange={(e) => setGuests(parseInt(e.target.value, 10))}
						className='w-[80px] text-center bg-lightestPrimary border-0'
					/>
				</div>
				<div className='flex gap-2'>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'w-[280px] justify-start text-left font-normal bg-lightestPrimary border-0',
									!signInDate && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className='mr-2 h-4 w-4' />
								{signInDate ? format(signInDate, 'PPP') : <span>Check in</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0 bg-black'>
							<Calendar
								mode='single'
								selected={signInDate}
								onSelect={setsignInDate}
								initialFocus
								disabled={mergedDisabledDates}
							/>
						</PopoverContent>
					</Popover>

					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'w-[280px] justify-start text-left font-normal bg-lightestPrimary border-0',
									!signOutDate && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className='mr-2 h-4 w-4' />
								{signOutDate ? (
									format(signOutDate, 'PPP')
								) : (
									<span>Check out</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='p-0 bg-black'>
							<Calendar
								mode='single'
								selected={signOutDate}
								onSelect={setSignOutDate}
								initialFocus
								disabled={mergedDisabledDates}
							/>
						</PopoverContent>
					</Popover>
				</div>

				{session ? (
					<Button
						type='submit'
						className='w-full bg-white h-12 hover:bg-slate-200 text-black rounded-full'
					>
						Book now
					</Button>
				) : (
					<div className='text-error mt-4'>
						Please{' '}
						<a href='/login' className='underline'>
							log in
						</a>{' '}
						to book this place.
					</div>
				)}
			</form>
		</>
	);
}