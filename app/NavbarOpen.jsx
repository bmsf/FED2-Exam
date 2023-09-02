import { useState } from 'react';
import { motion } from 'framer-motion';

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
				>
					{isLoggedIn ? (
						<motion.div variants={containerVariants} className='space-y-4'>
							<motion.a
								variants={itemVariants}
								href='/my-bookings'
								className='block py-2 px-4'
							>
								My Bookings
							</motion.a>
							<motion.a
								variants={itemVariants}
								href='/my-profile'
								className='block py-2 px-4'
							>
								My Profile
							</motion.a>
							<motion.a
								variants={itemVariants}
								href='/logout'
								className='block py-2 px-4'
							>
								Logout
							</motion.a>
						</motion.div>
					) : (
						<motion.div variants={containerVariants} className='space-y-4'>
							<motion.a
								variants={itemVariants}
								href='/login'
								className='block py-2 px-4'
							>
								Login
							</motion.a>
							<motion.a
								variants={itemVariants}
								href='/register'
								className='block py-2 px-4'
							>
								Register
							</motion.a>
						</motion.div>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
