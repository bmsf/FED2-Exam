import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<>
			<div className='m-12 rounded-md grid grid-cols-4 gap-12'>
				{Array.from({ length: 12 }, (_, i) => i + 1).map((venue) => (
					<div
						key={'Venue skeleton'}
						className='col-span-4 md:col-span-2 lg:col-span-1  rounded-md'
					>
						<Skeleton className='aspect-video relative bg-lightestPrimary'></Skeleton>
						<Skeleton className='p-4 bg-gray-300'>
							<Skeleton className='uppercase tracking-wide ' />
							<Skeleton className='h-6 w-1/2 bg-gray-500' />
							<Skeleton className='h-6 w-1/4 my-2.5 bg-gray-500' />
						</Skeleton>
					</div>
				))}
			</div>
		</>
	);
};

export default Loading;
