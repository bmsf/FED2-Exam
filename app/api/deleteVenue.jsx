import { toast } from 'react-toastify';

const deleteVenue = async (id, accessToken) => {
	try {
		const response = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		if (response.ok) {
			console.log(id);
			toast.success('Venue deleted!', {
				onClose: () => window.location.replace('/account'),
			});
		} else {
			const errorResponse = await response.json();
			const errorMessage =
				errorResponse.errors[0]?.message || 'An unknown error occurred';
			toast.error(errorMessage);
			console.log(errorResponse);
			console.log(id);
		}
	} catch (error) {
		console.log(error);
		console.log(id);
	}
};

export default deleteVenue;
