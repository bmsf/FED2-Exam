'use client';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { HiX } from 'react-icons/hi';

import { Button } from '@/components/ui/button';
import { SpinnerButton } from './SpinnerButton';
import deleteVenue from '@/app/api/deleteVenue';

const AlertDialogComponent = ({ venue, accessToken }) => {
	const id = venue.id;
	const onDelete = async () => {
		deleteVenue(id, accessToken);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<HiX className='m-4 cursor-pointer' />
			</AlertDialogTrigger>
			<AlertDialogContent className='bg-black border-none'>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						venue and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className='hover:bg-lightestPrimary'>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						onClick={onDelete}
						className='bg-white text-black hover:bg-white/80'
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AlertDialogComponent;
