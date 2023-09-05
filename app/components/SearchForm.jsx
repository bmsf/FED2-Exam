'use client';
import TextInput from './TextInput';

const SearchForm = () => {
	return (
		<form className='w-full px-6 mb-20'>
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
		</form>
	);
};

export default SearchForm;
