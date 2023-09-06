import RenderResult from './RenderResults';

const SearchResults = async () => {
	const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
	const venues = await response.json();

	return (
		<div>
			<RenderResult venues={venues} />
		</div>
	);
};

export default SearchResults;
