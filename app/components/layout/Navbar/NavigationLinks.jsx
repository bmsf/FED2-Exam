import Link from 'next/link';

const NavigationLinks = ({ setIsOpen, session }) => {
	const { venueManager, name, jti } = session || {};

	console.log(session);

	const userLinks = [
		{ title: 'Home', path: '/' },
		{ title: 'Search', path: '/search' },
		{ title: 'My Bookings', path: `/account/${jti}/my-bookings` },
		{ title: 'Account', path: `account/profile` },
	];

	const adminLinks = [
		{ title: 'Account', path: '/account' },
		{ title: 'Manage Venues', path: '/profile/venues' },
		// { title: 'Manage Bookings', path: '/admin/bookings' },
	];

	const links = venueManager ? adminLinks : userLinks;

	return (
		<div className='flex flex-col gap-4 text-center w-full border-b pb-6'>
			{links.map((link) => (
				<Link href={link.path} key={link.title}>
					<ul onClick={() => setIsOpen(false)}>
						<li className='cursor-pointer hover:bg-lightPrimary rounded px-4 py-2'>
							<div className='flex gap-2 items-center'>
								<p>{link.title}</p>
							</div>
						</li>
					</ul>
				</Link>
			))}
		</div>
	);
};

export default NavigationLinks;
