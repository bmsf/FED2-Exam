import Image from 'next/image';

import Logo from '../public/logo-no-background.png';
import SearchForm from './components/SearchForm';

const Hero = () => {
	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<div className='flex w-1/6 m-32 justify-center items-center'>
				<Image src={Logo} className='object-contain' alt='Holidaze Logo' />
			</div>
			<SearchForm />
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
