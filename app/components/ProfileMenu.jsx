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
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ProfileMenu = () => {
	const { data: session } = useSession();
	const pathname = usePathname();

	console.log(pathname);

	if (!session) {
		return <div>Loading...</div>; // or return null or some loading indicator
	}

	return (
		<div className='border-b border-text'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href={'/account/profile'}
							className={`link ${
								pathname === '/account/profile' ? 'text-texas' : ''
							}`}
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Profile
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href={`/account/my-bookings`}
							className={`link ${
								pathname === `/account/my-bookings` ? 'text-texas' : ''
							}`}
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								My bookings
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default ProfileMenu;
