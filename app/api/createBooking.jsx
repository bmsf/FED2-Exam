import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const createVenue = async (bookingData, accessToken, id) => {
	const body = JSON.stringify(bookingData);

	try {
		const toastId = toast('Creating venue...', { autoClose: false });

		const response = await fetch(
			`https://api.noroff.dev/api/v1/holidaze/bookings`,
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
			toast.success('New reservation made🔥', {
				onClose: () => redirect(`/venue/${id}/booking-confirmation`),
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
