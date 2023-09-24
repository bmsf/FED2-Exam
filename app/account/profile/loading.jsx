import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<div className='flex items-center mt-6'>
			<div className='p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto'>
				<div className='text-center border-b border-text py-4 relative'>
					<Skeleton className='h-32 w-32 rounded-full' />
					<Skeleton className='h-6 w-3/4 mt-4 block mx-auto' />{' '}
				</div>

				<div className='mt-6'>
					<Skeleton className='h-6 w-1/2 block mx-auto' />{' '}
					<div className='mt-2'>
						<Skeleton className='h-4 w-3/4 block mx-auto' />{' '}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
