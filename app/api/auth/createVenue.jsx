import { toast } from 'react-toastify';

const createVenue = async (formattedValues, accessToken) => {
	const body = JSON.stringify(formattedValues);

	try {
		const response = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/venues`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body,
			}
		);
		if (response.ok) {
			toast.success('New venue created🔥', {
				onClose: () => window.location.replace('/account'),
			});
		} else {
			const errorResponse = await response.json();
			const errorMessage =
				errorResponse.errors[0]?.message || 'An unknown error occurred';
			toast.error(errorMessage);
			console.log(errorResponse);
		}
	} catch (error) {
		console.log(error);
	}
};

export default createVenue;
