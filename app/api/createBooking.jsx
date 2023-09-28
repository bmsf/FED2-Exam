import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const createVenue = async (bookingData, accessToken, id) => {
	const body = JSON.stringify(bookingData);

	try {
		// Display a toast message indicating that the venue is being created
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

		// Close the initial toast regardless of whether the fetch was successful
		toast.dismiss(toastId);

		if (response.ok) {
			// Display a success toast and redirect to the account page when the toast closes
			toast.success('New reservation made🔥', {
				onClose: () => redirect(`/venue/${id}/booking-confirmation`),
			});
		} else {
			const errorResponse = await response.json();
			const errorMessage =
				errorResponse.errors[0]?.message || 'An unknown error occurred';
			// Display an error toast
			toast.error(errorMessage);
			console.log(errorResponse);
		}
	} catch (error) {
		// If an exception was caught, dismiss the initial toast and display an error toast
		toast.dismiss(toastId);
		toast.error('Something went wrong, try again');
		console.log(error);
	}
};

export default createVenue;
