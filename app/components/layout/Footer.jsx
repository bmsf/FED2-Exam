import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-lightPrimary text-white py-6 mt-12'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='text-2xl font-bold'>Holidaze</h1>
						<p>Premier Accommodations & Vacation Rentals</p>
					</div>
				</div>
				<hr className='my-4 border-gray-600' />
				<div className='flex justify-between items-center'>
					<p>
						&copy; {new Date().getFullYear()} Holidaze. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
