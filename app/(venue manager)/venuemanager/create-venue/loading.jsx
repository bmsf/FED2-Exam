import { Skeleton } from '@/components/ui/skeleton';

const FormLoading = () => {
	return (
		<div className='flex flex-col justify-center mt-12 p-8 w-full md:w-2/4 py-10 mx-auto rounded-lg gap-5'>
			<Skeleton className='h-12 w-1/2 mx-auto mb-8' />{' '}
			{/* For "Create new venue" header */}
			<div className='space-y-8'>
				{/* Name Input */}
				<Skeleton className='h-6 w-full' />
				{/* Price Input */}
				<Skeleton className='h-6 w-full' />
				{/* Max Guests Input */}
				<Skeleton className='h-6 w-full' />
				{/* Media Input */}
				<Skeleton className='h-6 w-full' />
				{/* Description Textarea */}
				<Skeleton className='h-24 w-full' />
				{/* Amenities Checkbox Group */}
				<div className='flex flex-row items-start space-x-3 space-y-0'>
					<Skeleton className='h-5 w-5' /> {/* Checkbox */}
					<Skeleton className='h-4 w-1/3' /> {/* Label */}
				</div>
				{/* You can replicate the above for multiple checkboxes if needed */}
				{/* Location Details */}
				<Skeleton className='h-6 w-full' /> {/* Country Input */}
				<Skeleton className='h-6 w-full' /> {/* Address Input */}
				<Skeleton className='h-6 w-full' /> {/* City Input */}
				<Skeleton className='h-6 w-full' /> {/* Zip Input */}
				{/* Submit Button */}
				<Skeleton className='h-10 w-1/3 mx-auto' />
			</div>
		</div>
	);
};

export default FormLoading;
