'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	HiOutlineSearch,
	HiLogout,
	HiOutlineUser,
	HiOutlineCalendar,
	HiUser,
} from 'react-icons/hi';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';

import Link from 'next/link';
import Image from 'next/image';

import { signOut, useSession } from 'next-auth/react';

import Logo from '@/public/logo-no-background.png';

export default function Navbar() {
	const { data: session, status } = useSession();

	console.log(session);

	const SearchComponent = () => {
		const [isInputVisible, setInputVisible] = useState(false);

		const inputVariants = {
			hidden: { width: 0, opacity: 0 },
			visible: { width: '200px', opacity: 1 },
		};

		return (
			<div className='relative flex items-center'>
				<AnimatePresence>
					{isInputVisible && (
						<motion.input
							className='border rounded-md p-1'
							type='text'
							initial='hidden'
							animate='visible'
							exit='hidden'
							variants={inputVariants}
							transition={{ duration: 0.5 }}
						/>
					)}
				</AnimatePresence>
				<HiOutlineSearch
					className='h-6 w-6 cursor-pointer active:scale-95 transform transition'
					onClick={() => setInputVisible(!isInputVisible)}
				/>
			</div>
		);
	};

	const handleLogout = async () => {
		await signOut();
	};

	return (
		<nav className='flex justify-between items-center px-3 lg:px-12 py-6 bg-lightPrimary'>
			<Link href={'/'}>
				<Image
					src={Logo}
					className='object-contain w-8 h-8'
					alt='Holidaze Logo'
				/>
			</Link>
			<div className='flex gap-6'>
				<SearchComponent />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						{status === 'loading' ? (
							<Skeleton className='w-8 h-8 bg-gray-300 rounded-full' />
						) : session && session.avatar ? (
							<Avatar className='h-8 w-8 cursor-pointer'>
								<AvatarImage src={session.avatar} />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						) : (
							<div className='flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300'>
								<HiUser className='text-lightPrimary cursor-pointer w-5 h-5' />
							</div>
						)}
					</DropdownMenuTrigger>
					{session ? (
						<DropdownMenuContent className='mr-4'>
							<DropdownMenuItem asChild>
								<Link href={'/account/profile'}>
									<HiOutlineUser className='mr-2 h-4 w-4' />
									<span>Account</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem className='border-b' asChild>
								<Link href={'/account/my-bookings'}>
									<HiOutlineCalendar className='mr-2 h-4 w-4' />
									<span>My bookings</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={handleLogout}>
								<HiLogout className='mr-2 h-4 w-4' />
								<span>Log out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					) : (
						<DropdownMenuContent className='mr-4'>
							<DropdownMenuItem asChild>
								<Link href={'/api/auth/login'}>
									<HiOutlineUser className='mr-2 h-4 w-4' />
									<span>Login</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href={'/register'}>
									<HiOutlineCalendar className='mr-2 h-4 w-4' />
									<span>Register</span>
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					)}
				</DropdownMenu>
			</div>
		</nav>
	);
}
