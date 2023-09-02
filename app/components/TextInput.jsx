'use client';
import React, { useState } from 'react';
import { FaCity, FaCalendar, FaUser, FaSearch } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const icons = {
	city: FaCity,
	calendar: FaCalendar,
	user: FaUser,
	search: FiSearch,
};

const TextInput = ({ placeholder, iconName, type = 'text' }) => {
	const [hasValue, setHasValue] = useState(false);
	const Icon = icons[iconName];

	const handleInputChange = (event) => {
		setHasValue(event.target.value !== '');
	};

	return (
		<div className='flex items-center relative rounded-md'>
			{!hasValue && (
				<div className='absolute inset-y-0 left-4 flex items-center pointer-events-none text-white'>
					{Icon && <Icon className='mr-2' />}
					<span>{placeholder}</span>
				</div>
			)}
			<input
				type={type}
				className='rounded-lg w-full py-4 px-4 bg-transparent pl-8 bg-lightestPrimary'
				onFocus={() => setHasValue(true)}
				onBlur={handleInputChange}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default TextInput;
