'use client';
import { useRef, useState } from 'react';
import { AiOutlineUser, AiOutlineCamera } from 'react-icons/ai';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { getSession, useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Avatar } from '@/components/ui/avatar';

const AvatarEditor = ({ avatar, name, accessToken }) => {
	const [error, setError] = useState(null);
	const imageLink = useRef('');

	const handleOnSubmit = async () => {
		console.log('Request Body:', JSON.stringify({ avatar: imageLink }));

		try {
			const response = await fetch(
				`https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
					body: JSON.stringify({ avatar: imageLink.current }),
				}
			);

			if (response.ok) {
				const updatedSession = await getSession();
				window.location.reload();
			} else {
				const errorData = await response.json();
				setError(errorData.errors[0].message);
			}
		} catch (error) {
			setError(error);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className='relative inline-block'>
					{avatar ? (
						<Image
							height={300}
							width={300}
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
			</DialogTrigger>
			<DialogContent className=' bg-lightestPrimary border-none'>
				{avatar ? (
					<Image
						height={60}
						width={60}
						src={avatar}
						alt='User Profile'
						className='w-20 h-20 mx-auto rounded-full'
					/>
				) : (
					<div className='flex justify-center items-center w-20 h-20 mx-auto bg-gray-300 rounded-full'>
						<AiOutlineUser className='text-primary text-3xl' />
					</div>
				)}
				<DialogHeader>
					<DialogTitle>Change avatar</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					{error && <p className='text-error'>{error}</p>}
					<div className='grid grid-cols-4 items-center gap-4'>
						<Input
							id='name'
							placeholder='https://url.com/image.jpg'
							className='col-span-3 bg-primary'
							onChange={(e) => (imageLink.current = e.target.value)}
						/>
					</div>
				</div>

				<DialogFooter>
					<Button variant='outline' onClick={handleOnSubmit}>
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default AvatarEditor;
