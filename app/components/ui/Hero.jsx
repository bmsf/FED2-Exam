'use client';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from 'lottie-react';

import animationData from '../../../public/animation.json';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const Hero = () => {
	const animationRef = useRef(null);

	useEffect(() => {
		animationRef.current.play();
	}, []);

	return (
		<div className='flex flex-col lg:flex-row items-center justify-center min-h-screen w-full p-4 lg:p-0 lg:gap-10'>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className='w-3/4 md:w-2/4 lg:w-1/4'
			>
				<Lottie
					lottieRef={animationRef}
					animationData={animationData}
					loop={true}
				/>
			</motion.div>
			<div className='flex flex-col items-center gap-10 px-3'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
				>
					<h1 className='text-center text-3xl font-semibold whitespace-pre-line'>
						Join Us in Exploring the{'\n'} World's Best Accommodations
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 2 }}
					className='flex flex-col gap-3 items-center'
				>
					<Button type='button' className='uppercase w-full' asChild>
						<Link href='/register'>Get Started</Link>
					</Button>

					<Button
						type='outline'
						variant='outline'
						className='uppercase'
						onClick={() => signIn()}
					>
						I already have an account
					</Button>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
