'use client';

import { useState } from 'react';
import { AiOutlineUser, AiOutlineCamera } from 'react-icons/ai';

const AvatarEditor = ({ avatar }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div
			className='relative inline-block'
			onClick={() => !setIsModalOpensModalOpen}
		>
			{avatar ? (
				<img
					src={avatar}
					alt='User Profile'
					className='w-20 h-20 mx-auto rounded-full'
				/>
			) : (
				<div className='flex justify-center items-center w-20 h-20 mx-auto bg-gray-300 rounded-full'>
					<AiOutlineUser className='text-primary text-3xl' />
				</div>
			)}
			<div className='absolute -bottom-3 left-0 right-0'>
				<div className='border w-6 h-6 mx-auto bg-white text-primary rounded-full p-1 cursor-pointer flex items-center justify-center'>
					<AiOutlineCamera className='text-lg' />
				</div>
			</div>
		</div>
	);
};

export default AvatarEditor;
