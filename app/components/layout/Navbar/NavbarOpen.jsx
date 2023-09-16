import { motion } from 'framer-motion';
import { useSession, signOut, signIn } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/logo-no-background.png';
import NavigationLinks from './NavigationLinks';
import AuthButtons from './AuthButtons';
import LogoutButton from './LogoutButton';

const NavbarOpen = ({ isOpen, setIsOpen }) => {
	const { data: session } = useSession();

	const handleCloseMenu = (event) => {
		if (event.target === event.currentTarget) {
			setIsOpen(false);
		}
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
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								delay: 0.6,
								staggerChildren: 0.1,
							},
						},
					}}
					className='flex flex-col justify-center items-center py-10 gap-10'
				>
					<div className='border-b w-full flex justify-center items-center p-4'>
						<Image
							src={Logo}
							className='object-contain w-8 h-8'
							alt='Holidaze Logo'
						/>
					</div>
					<NavigationLinks setIsOpen={setIsOpen} session={session}/>

					{/* Conditional rendering based on user session */}
					{session && session.user ? <LogoutButton /> : <AuthButtons />}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default NavbarOpen;
