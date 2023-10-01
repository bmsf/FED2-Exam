'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	HiOutlineSearch,
	HiLogout,
	HiOutlineUser,
	HiOutlineCalendar,
	HiUser,
	HiOutlinePlus,
} from 'react-icons/hi';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { redirect } from 'next/navigation';
import { SearchInput } from './SearchInput';
import {
	Calendar,
	LogIn,
	LogOut,
	PenSquare,
	PlusCircle,
	User,
} from 'lucide-react';

export default function Navbar() {
	const { data: session, status } = useSession();

	const handleLogout = async () => {
		await signOut();
	};

	return (
		<nav className='flex justify-between items-center px-3 lg:px-12 py-2 bg-lightPrimary'>
			<Link href={'/'}>
				<Image
					src={Logo}
					className='object-contain w-8 h-8'
					alt='Holidaze Logo'
				/>
			</Link>
			<div className='flex gap-6 items-center'>
				<SearchInput />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						{status === 'loading' ? (
							<Skeleton className='w-8 h-8 bg-gray-300 rounded-full' />
						) : session && session.avatar ? (
							<Avatar className='h-8 w-8 cursor-pointer'>
								<AvatarImage
									src={session.avatar}
									alt={session.name}
									aria-label='User menu'
								/>
								<div className='flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300'>
									<User className='text-lightPrimary cursor-pointer w-5 h-5' />
								</div>
							</Avatar>
						) : (
							<div className='flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300'>
								<User className='text-lightPrimary cursor-pointer w-5 h-5' />
							</div>
						)}
					</DropdownMenuTrigger>
					{session ? (
						session.venueManager ? (
							// Logged in as venue manager
							<DropdownMenuContent className='mr-4 '>
								<DropdownMenuItem asChild className='border-b'>
									<Link href={'/venuemanager'}>
										<User className='mr-2 h-4 w-4' />
										<span>Account</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className='' asChild>
									<Link href={'/venuemanager/my-venues'}>
										<Calendar className='mr-2 h-4 w-4' />
										<span>My venues</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className='border-b' asChild>
									<Link href={'/venuemanager/create-venue'}>
										<PlusCircle className='mr-2 h-4 w-4' />
										<span>Create venue</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={handleLogout}>
									<LogOut className='mr-2 h-4 w-4' />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						) : (
							// Logged in but not as a venue manager
							<DropdownMenuContent className='mr-4'>
								<DropdownMenuItem asChild>
									<Link href={'/account'}>
										<User className='mr-2 h-4 w-4' />
										<span>Account</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className='border-b' asChild>
									<Link href={'/account/my-bookings'}>
										<Calendar className='mr-2 h-4 w-4' />
										<span>My bookings</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={handleLogout}>
									<LogOut className='mr-2 h-4 w-4' />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						)
					) : (
						// Not logged in
						<DropdownMenuContent className='mr-4'>
							<DropdownMenuItem asChild>
								<Link href={'/api/auth/login'}>
									<LogIn className='mr-2 h-4 w-4' />
									<span>Login</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href={'/register'}>
									<PenSquare className='mr-2 h-4 w-4' />
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
