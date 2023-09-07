import { useState } from 'react';
import { motion } from 'framer-motion';
import { VscAccount } from 'react-icons/vsc';
import {
	IoLogOutOutline,
	IoHomeOutline,
	IoSearchOutline,
} from 'react-icons/io5';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '../public/logo-no-background.png';

export default function NavbarOpen({ isOpen, setIsOpen }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function handleCloseMenu(event) {
		// Ensure the click is outside the menu
		if (event.target === event.currentTarget) {
			setIsOpen(false);
		}
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.6,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				type: 'tween',
				duration: 0.3,
			}}
			className='fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50 z-40'
			onClick={handleCloseMenu}
		>
			<motion.div
				initial={{ x: '100vw' }}
				animate={isOpen ? { x: '0' } : { x: '100vw' }}
				exit={{ x: '100vw' }}
				transition={{
					type: 'spring',
					stiffness: 60,
					when: 'beforeChildren',
					staggerChildren: 0.1,
				}}
				className='fixed top-0 right-0 w-1/3 h-full bg-lightestPrimary text-white z-50'
			>
				<motion.div
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={containerVariants}
					// ... other props
					className='flex flex-col justify-center items-center py-10 gap-10'
				>
					<div className='border-b w-full flex justify-center items-center p-4'>
						<Image
							src={Logo}
							className='object-contain w-8 h-8'
							alt='Holidaze Logo'
						/>
					</div>
					<div className='flex flex-col gap-4 text-center w-full'>
						{['Home', 'Search', 'About', 'Contact'].map((item) => (
							<Link href={'/'} key={item}>
								<ul>
									<li className='cursor-pointer hover:bg-gray-100 rounded px-4 py-2'>
										<div className='flex gap-2 items-center'>
											<p>{item}</p>
										</div>
									</li>
								</ul>
							</Link>
						))}
					</div>
					{isLoggedIn ? (
						<>
							<ul className='flex flex-col gap-4 p-6 w-full justify-center items-center text-grey'>
								{/* Menu Items Section */}

								<Link href={'/'}>
									<li className='cursor-pointer hover:bg-gray-100 rounded px-4 py-2'>
										<div className='flex gap-2 items-center'>
											<p>Logout</p>
										</div>
									</li>
								</Link>
							</ul>
						</>
					) : (
						<motion.div
							variants={containerVariants}
							className='space-y-4 flex flex-col items-center'
						>
							<Link href={'/login'}>
								<motion.div variants={itemVariants} className='block'>
									<button
										type='button'
										className='flex items-center justify-center bg-white text-primary rounded-xl py-2.5 w-32 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
									>
										<span>Login</span>
									</button>
								</motion.div>
							</Link>
							<Link href={'/register'}>
								<motion.div variants={itemVariants} className='block'>
									<button
										type='button'
										className='flex items-center justify-center bg-primary text-white rounded-xl py-2.5 w-32 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
									>
										<span>Register</span>
									</button>
								</motion.div>
							</Link>
						</motion.div>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
