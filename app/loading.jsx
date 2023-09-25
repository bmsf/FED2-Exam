import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<>
			{/* Skeleton for Hero component */}
			<div className='flex flex-col lg:flex-row items-center justify-center min-h-screen w-full p-4 lg:p-0 gap-4'>
				{/* <div className='w-full md:w-3/4 lg:w-1/4 mx-auto'>
					<Skeleton className='h-60 w-60 rounded-full mx-auto' />
				</div>
				<div className='space-y-2 w-full md:w-3/4 lg:w-auto mx-auto'>
					<Skeleton className='h-4 w-[250px] mx-auto' />
					<Skeleton className='h-4 w-[200px] mx-auto' />
				</div> */}
			</div>

			{/* Skeleton for Venue Listing */}
			<div className='m-12 rounded-md grid grid-cols-4 gap-12'>
				{Array.from({ length: 12 }, (_, i) => i + 1).map((venue) => (
					<div
						key={'Venue skeleton'}
						className='col-span-4 md:col-span-2 lg:col-span-1 rounded-md'
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
