'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/solid';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo-no-background.png';
import NavbarOpen from './NavbarOpen';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='flex justify-between items-center p-4 w-full bg-lightPrimary'>
			<Link href={'/'}>
				<Image
					src={Logo}
					className='object-contain w-8 h-8'
					alt='Holidaze Logo'
				/>
			</Link>
			<div className='bg-transparent hover:shadow-2xl rounded-full p-2 transition'>
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
