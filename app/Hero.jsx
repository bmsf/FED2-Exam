import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { PiMouseSimpleLight } from 'react-icons/pi';
import { BsMouse } from 'react-icons/bs';

import { playfair } from './layout';
const Hero = () => {
	return (
		<div
			className='relative h-screen bg-cover bg-center'
			style={{ backgroundImage: 'url(/HeroImage.png)' }}
		>
			{/* Overlay (optional: for better text contrast) */}
			{/* <div className='absolute inset-0 bg-black opacity-50'></div> */}

			{/* Content */}
			<div className='relative flex flex-col items-center justify-around h-full'>
				<h1
					className={`${playfair.className} text-3xl text-white font-extralight text-center px-6`}
				>
					Escape the Everyday with Holidaze
				</h1>
				<button
					type='button'
					className='flex items-center gap-3 rounded py-2.5 px-6 text-xs font-medium uppercase leading-normal text-white bg-black transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-800 shadow-md hover:shadow-lg active:shadow-none'
				>
					<span>Book now</span>
					<ArrowLongRightIcon className='h-6 w-6' />
				</button>
				<div className='flex flex-col items-center gap-6'>
					<PiMouseSimpleLight className='h-10 w-10 text-white mb-6' />

					<div className='w-2 h-2 bg-white rounded-full opacity-90'></div>
					<div className='w-2 h-2 bg-white rounded-full opacity-70'></div>
					<div className='w-2 h-2 bg-white rounded-full opacity-50'></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
