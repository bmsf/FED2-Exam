import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-lightPrimary text-white py-6'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='text-2xl font-bold'>Holidaze</h1>
						<p>Premier Accommodations & Vacation Rentals</p>
					</div>
					<ul className='md:flex space-x-8 hidden'>
						<li>
							<a href='#about' className='hover:text-primary-500'>
								About
							</a>
						</li>
						<li>
							<a href='#services' className='hover:text-primary-500'>
								Services
							</a>
						</li>
						<li>
							<a href='#contact' className='hover:text-primary-500'>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className='my-4 border-gray-600' />
				<div className='flex justify-between items-center'>
					<p>
						&copy; {new Date().getFullYear()} Holidaze. All rights reserved.
					</p>
					<div className='flex space-x-4'>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Facebook'
						>
							<img
								src='/path-to-facebook-icon.svg'
								alt='Facebook'
								className='w-6 h-6'
							/>
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Twitter'
						>
							<img
								src='/path-to-twitter-icon.svg'
								alt='Twitter'
								className='w-6 h-6'
							/>
						</a>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Instagram'
						>
							<img
								src='/path-to-instagram-icon.svg'
								alt='Instagram'
								className='w-6 h-6'
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
