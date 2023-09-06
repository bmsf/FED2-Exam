import Image from 'next/image';

import Logo from '../public/logo-no-background.png';
import SearchForm from './components/SearchForm';

const Hero = () => {
	// const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
	// const venues = await response.json();

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
