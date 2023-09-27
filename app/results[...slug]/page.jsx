import RenderResult from './RenderResults';

const SearchResults = async () => {
	const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
	const venues = await response.json();

	return (
		<div>
			<h1 className='my-16 text-3xl'>Search results:</h1>
			<RenderResult venues={venues} />
		</div>
	);
};

export default SearchResults;
