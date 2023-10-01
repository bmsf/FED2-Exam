'use client';

import { Home, PlusCircle, User } from 'lucide-react';

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
						href='/venuemanager'
						className={`flex items-center p-2 rounded transition-colors hover:text-texas ${isActive(
							'/venuemanager'
						)}`}
					>
						<User className='mr-2 h-7 w-7' />
						<span>Profile</span>
					</Link>
				</li>
				<li className='mb-2'>
					<Link
						href='/venuemanager/my-venues'
						className={`flex items-center p-2 rounded transition-colors hover:text-texas ${isActive(
							'/venuemanager/my-venues'
						)}`}
					>
						<Home className='mr-2 h-7 w-7' />
						<span>My venues</span>
					</Link>
				</li>
				<li className='mb-2'>
					<Link
						href='/venuemanager/create-venue'
						className={`flex items-center p-2 rounded transition-colors hover:text-texas ${isActive(
							'/venuemanager/create-venue'
						)}`}
					>
						<PlusCircle className='mr-2 h-7 w-7' />
						<span>Create a new venue</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default VenueManagerMenu;
