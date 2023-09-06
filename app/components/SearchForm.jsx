'use client';
import { FaMapMarkerAlt, FaUser, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
	const router = useRouter();

	const [city, setCity] = useState('');
	const [venue, setVenue] = useState('');

	const [guests, setGuests] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate the inputs
		let validationErrors = {};

		if (!venue.trim()) validationErrors.venue = 'Venue is required!';
		if (!guests.trim())
			validationErrors.guests = 'Number of guests is required!';
		if (!city.trim()) validationErrors.city = 'City is required!';

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return; // Exit the function early if there are errors
		}

		// Continue with the existing logic if there are no errors
		const queryParams = `venue=${venue}&city=${city}&guests=${guests}`;
		router.push(`/results/?${queryParams}`);
	};

	const [errors, setErrors] = useState({});

	return (
		<form className='w-full px-6 mb-20' onSubmit={handleSubmit}>
			<h2>Select your destination</h2>
			<div className='w-full flex flex-col gap-2'>
				<div className='flex items-center relative rounded-md'>
					<FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2' />
					<input
						placeholder='Venue'
						className='rounded-lg w-full py-4 px-4 bg-inherit pl-12 bg-lightestPrimary'
						onChange={(e) => setVenue(e.target.value)}
					/>
				</div>

				<div className='flex gap-2'>
					<div className='flex items-center relative rounded-md'>
						<FaUser className='absolute left-4 top-1/2 transform -translate-y-1/2' />
						<input
							placeholder='Guests'
							className='rounded-lg w-full py-4 px-4 bg-inherit pl-12 bg-lightestPrimary'
							onChange={(e) => setGuests(e.target.value)}
						/>
					</div>
					<div className='w-1/2'>
						<div className='flex items-center relative rounded-md'>
							<FaMapMarkerAlt className='absolute left-4 top-1/2 transform -translate-y-1/2' />
							<input
								placeholder='City'
								className='rounded-lg w-full py-4 px-4 bg-inherit pl-12 bg-lightestPrimary'
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<button
					type='submit'
					className='flex items-center justify-center bg-white text-primary rounded-full py-4 px-4 text-xs font-medium transition-transform duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
				>
					<span>Search venues</span>
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
