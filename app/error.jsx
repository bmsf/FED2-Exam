'use client';

import { Button } from '@/components/ui/button';

import Lottie from 'lottie-react';
import animationData from '@/public/error-animation.json';

export default function Error({ error, reset }) {
	return (
		<div className='flex flex-col justify-center items-center gap-10 p-20'>
			<Button onClick={() => reset()} variant='outline'>
				Try again
			</Button>
			<Lottie
				className='w-full md:w-2/4 lg:w-1/3'
				animationData={animationData}
				loop={true}
			/>
		</div>
	);
}
