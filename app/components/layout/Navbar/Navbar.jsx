'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Lottie from 'lottie-react';

import Link from 'next/link';
import Image from 'next/image';

import searchIcon from '../../../../public/search.json';
import Logo from '../../../../public/logo-no-background.png';
import NavbarOpen from './NavbarOpen';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const style = {
		// height: '60px',
		// width: '60px',
		backgroundColor: 'white',
	};

	return (
		<nav className='flex justify-between items-center px-2 lg:px-12 py-2.5 bg-lightPrimary'>
			<Link href={'/'}>
				<Image
					src={Logo}
					className='object-contain w-8 h-8'
					alt='Holidaze Logo'
				/>
			</Link>
			<div className='flex'>
				{/* <Lottie
					animationData={searchIcon} // Your Lottie animation JSON data
					loop={false} // Set to true if you want it to loop
					autoplay={true} // Set to true if you want it to start playing immediately
					style={style} // Adjust size as needed
				/> */}

				<HiOutlineMenuAlt3
					className='h-6 w-6 cursor-pointer active:scale-95 transform transition'
					onClick={toggleNavbar}
				/>
				<AnimatePresence>
					{isOpen && <NavbarOpen isOpen={isOpen} setIsOpen={setIsOpen} />}
				</AnimatePresence>
			</div>
		</nav>
	);
}
