'use client';

import { Home, User } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const VenueManagerMenu = () => {
	const pathname = usePathname();

	const isActive = (path) => {
		return pathname === path ? 'text-texas' : '';
	};

	return (
		<div className='border-b border-text mx-12'>
			<ul className='flex gap-6'>
				<li className='mb-2'>
					<Link
						href='/account'
						className={`flex items-center p-2 rounded transition-colors hover:text-texas ${isActive(
							'/account'
						)}`}
					>
						<User className='mr-2 h-7 w-7' />
						<span>Profile</span>
					</Link>
				</li>
				<li className='mb-2'>
					<Link
						href='/account/my-bookings'
						className={`flex items-center p-2 rounded transition-colors hover:text-texas ${isActive(
							'/account/my-bookings'
						)}`}
					>
						<Home className='mr-2 h-7 w-7' />
						<span>My bookings</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default VenueManagerMenu;
