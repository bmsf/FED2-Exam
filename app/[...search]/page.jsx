import RenderResult from '../components/RenderResults';
import FilterMenu from './FilterMenu';

const SearchResults = async () => {
	const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
	const venues = await response.json();

	return (
		<div className='min-h-screen w-full '>
			<div className='flex justify-center items-center mt-24'>
				<h1 className='font-semibold text-4xl'>Search results</h1>
			</div>
			<RenderResult venues={venues} />
		</div>
	);
};

export default SearchResults;
