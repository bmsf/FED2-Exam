import Image from 'next/image';

import TextInput from './components/TextInput';
import Logo from '../public/logo-no-background.png';

const Hero = () => {
	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<div className='flex w-1/6 m-32 justify-center items-center md:w-auto'>
				<Image src={Logo} className='object-contain' alt='Holidaze Logo' />
			</div>
			<div className='w-full px-6'>
				<h2 className=''>Select your destination</h2>
				<div className='w-full flex flex-col gap-2'>
					<TextInput placeholder={'City'} iconName='search' />
					<div className='flex gap-2'>
						<div className='w-1/2'>
							<input
								type='date'
								className='rounded-lg w-full py-4 px-4 bg-lightestPrimary'
								placeholder='Check in'
							/>
						</div>
						<div className='w-1/2'>
							<input
								type='date'
								className='rounded-lg w-full py-4 px-4 bg-lightestPrimary'
								placeholder='Check in'
							/>
						</div>
					</div>
					<TextInput placeholder={'Guests'} iconName={'search'} />
					<button
						type='button'
						className='flex items-center justify-center bg-white text-primary rounded-full py-4 px-4 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
					>
						<span>Search hotels</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
{
	/* <button
					type='button'
					className='flex items-center gap-3 m-24 rounded py-2.5 px-6 text-xs font-medium uppercase leading-normal text-white bg-black transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 active:bg-gray-800 shadow-md hover:shadow-lg active:shadow-none'
				>
					<span>Book now</span>
				</button> */
}
