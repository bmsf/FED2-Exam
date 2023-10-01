import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

const createVenue = async (formattedValues, accessToken) => {
	const body = JSON.stringify(formattedValues);

	try {
		const toastId = toast('Creating venue...', { autoClose: false });

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

		toast.dismiss(toastId);

		if (response.ok) {
			toast.success('New venue created🔥', {
				onClose: () =>
					redirect('/venuemanager/my-venues') && window.location.reload(true),
			});
		} else {
			const errorResponse = await response.json();
			const errorMessage =
				errorResponse.errors[0]?.message || 'An unknown error occurred';

			toast.error(errorMessage);
			console.log(errorResponse);
		}
	} catch (error) {
		toast.dismiss(toastId);
		toast.error('Something went wrong, try again');
		console.log(error);
	}
};

export default createVenue;
