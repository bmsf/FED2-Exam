'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { useSession } from 'next-auth/react';

import animationData from '../../../public/animation.json';
import { Button } from '@/components/ui/button';

const Hero = () => {
	const { data: session } = useSession();

	return (
		<div className='flex flex-col lg:flex-row items-center justify-center min-h-screen w-full p-4 lg:p-0 lg:gap-10'>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className='w-3/4 md:w-2/4 lg:w-1/4'
			>
				<Lottie animationData={animationData} loop={true} />
			</motion.div>
			<div className='flex flex-col gap-10 items-center px-3'>
				{session ? (
					session.venueManager ? (
						<>
							{/* Content for Venue Managers */}
							<h1 className='text-center text-3xl font-semibold whitespace-pre-line'>
								Welcome Venue Manager, {session.user.name}!
							</h1>
							<div className='flex flex-col items-center'>
								<div className='w-64'>
									<Button className='w-full'>
										<Link href='/venuemanager/my-venues'>Manage Venues</Link>
									</Button>
								</div>
								<div className='flex items-center w-64 mt-2 mb-2'>
									<div className='flex-1 border-b' />
									<span className='px-2 text-center'>or</span>
									<div className='flex-1 border-b' />
								</div>
								<div className='w-64'>
									<Button variant='outline' className='w-full'>
										<Link href='/venuemanager/create-venue'>
											Create a new one
										</Link>
									</Button>
								</div>
							</div>
						</>
					) : (
						<>
							{/* Content for Regular Users */}
							<h1 className='text-center text-3xl font-semibold whitespace-pre-line'>
								Welcome back, {session.user.name}!
							</h1>
							<p>Discover new experiences and manage your bookings.</p>
							<Link href='/account'>Go to Dashboard</Link>
						</>
					)
				) : (
					<>
						{/* Content for Non-Logged-In Users */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1 }}
						>
							<h1 className='text-center text-3xl font-semibold whitespace-pre-line'>
								Join Us in Exploring the{'\n'} World&apos;s Best Accommodations
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
					</>
				)}
			</div>
		</div>
	);
};

export default Hero;
