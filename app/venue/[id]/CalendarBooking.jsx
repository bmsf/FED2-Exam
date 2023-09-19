'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export function CalendarBooking({ venue }) {
	const [date, setDate] = useState();

	const { data: session } = useSession();

	const bookedDates = venue.bookings.reduce((dates, booking) => {
		const startDate = new Date(booking.dateFrom);
		const endDate = new Date(booking.dateTo);

		while (startDate <= endDate) {
			const dateString = startDate.toISOString().split('T')[0];
			dates[dateString] = true; // You can store booking information here if needed
			startDate.setDate(startDate.getDate() + 1);
		}

		return dates;
	}, {});

	return (
		<>
			<div className='flex my-4 gap-2'>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'outline'}
							className={cn(
								'w-[280px] h-12 justify-start text-left font-normal bg-lightestPrimary border-0',
								!date && 'text-muted-foreground'
							)}
						>
							<CalendarIcon className='mr-2 h-4 w-4' />
							{date ? format(date, 'PPP') : <span>Check in</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0 bg-black'>
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							initialFocus
							tileDisabled={({ date }) => {
								const dateString = date.toISOString().split('T')[0];
								return bookedDates[dateString];
							}}
						/>
					</PopoverContent>
				</Popover>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={'outline'}
							className={cn(
								'w-[280px] h-12 justify-start text-left font-normal bg-lightestPrimary border-0',
								!date && 'text-muted-foreground'
							)}
						>
							<CalendarIcon className='mr-2 h-4 w-4' />
							{date ? format(date, 'PPP') : <span>Check out</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='p-0 bg-black'>
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>
			{session ? (
				<Button className='w-full bg-white h-12 hover:bg-slate-200 text-black rounded-full'>
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
		</>
	);
}
