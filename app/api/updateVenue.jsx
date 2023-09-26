import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const updateVenue = async (id, accessToken, formattedValues) => {
	const body = JSON.stringify(formattedValues);

	try {
		const response = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body,
			}
		);
		if (response.ok) {
			console.log(id);
			toast.success('Venue updated!', {
				onClose: () => redirect('/venuemanager/my-venues'),
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

export default updateVenue;
