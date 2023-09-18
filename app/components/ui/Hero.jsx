'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import Framer Motion
import Lottie from 'lottie-react';
import animationData from '../../../public/animation.json';

import { Button } from '@/components/ui/button';

const Hero = () => {
	const animationRef = useRef(null);

	const controls = useAnimation();

	useEffect(() => {
		// Animate the title element when the component mounts
		controls.start({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 1 },
		});
	}, [controls]);

	return (
		<div className='flex flex-col gap-10 lg:flex-row items-center min-h-screen w-full'>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className='w-2/3'
			>
				<Lottie
					lottieRef={animationRef}
					animationData={animationData}
					loop={true}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1 }}
			>
				<h1 className='text-center text-3xl font-semibold'>
					Join Us in Exploring the World's Best Accommodations
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 2 }}
				className='w-3/6 flex flex-col gap-3'
			>
				<Button type='button' className='uppercase '>
					Get Started
				</Button>
				<Button type='outline' variant='outline' className='uppercase'>
					I already have an account
				</Button>
			</motion.div>
			{/* <SearchForm /> */}
		</div>
	);
};

export default Hero;
