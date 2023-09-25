'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { HiOutlineUser, HiOutlineCalendar } from 'react-icons/hi';
import { FaHouse } from 'react-icons/fa6';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const ProfileMenu = () => {
	const { data: session } = useSession();
	const pathname = usePathname();

	// if (!session) {
	// 	return (
	// 		<div className='mx-auto w-full'>
	// 			{/* Skeleton for Menu Bar */}
	// 			<div className='space-y-2'>
	// 				<div className='flex space-x-4'>
	// 					<Skeleton className='h-4 w-24' />
	// 					<Skeleton className='h-4 w-24' />
	// 					<Skeleton className='h-4 w-24' />
	// 				</div>
	// 				<Skeleton className='h-1 w-full' />
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className='border-b border-text'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href={'/venuemanager'}
							className={`link ${
								pathname === '/venuemanager' ? 'text-texas' : ''
							}`}
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								<HiOutlineUser className='mr-2' />
								<span>Profile</span>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href={'/venuemanager/my-venues'}
							className={`link ${
								pathname === '/venuemanager/my-venues' ? 'text-texas' : ''
							}`}
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								<FaHouse className='mr-2' />
								<span>My venues</span>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href={'/venuemanager/create-venue'}
							className={`link ${
								pathname === '/venuemanager/create-venue' ? 'text-texas' : ''
							}`}
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								<IoIosAddCircleOutline className='mr-2' />
								<span>Create a new venue</span>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default ProfileMenu;
