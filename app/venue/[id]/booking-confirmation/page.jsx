'use client';
import React, { useState, useCallback } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/confirmation-animation.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BookingConfirmation = () => {
	// Define a piece of state to track whether the animation has completed
	const [isAnimationComplete, setAnimationComplete] = useState(false);

	// Define a callback function to be called when the animation completes
	const handleAnimationComplete = useCallback(() => {
		setAnimationComplete(true);
	}, []);

	return (
		<div className='flex justify-center items-center'>
			{isAnimationComplete ? (
				// Render the content once the animation is complete
				<div className='text-center flex flex-col items-center gap-3'>
					<p>Thank you for making the reservation!</p>
					<p>We hope you will enjoy your stay</p>
					<Button className='w-2/3'>
						<Link href={'/account/my-bookings'}>Manage bookings</Link>
					</Button>
				</div>
			) : (
				// Render the Lottie animation while it's playing
				<Lottie
					className=''
					animationData={animationData}
					loop={false}
					onComplete={handleAnimationComplete} // Set the callback for animation complete
				/>
			)}
		</div>
	);
};

export default BookingConfirmation;
