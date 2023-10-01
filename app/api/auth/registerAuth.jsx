import { toast } from 'react-toastify';
import { API_HOLIDAZE_URL } from '../constants';

const action = '/auth/register';
const method = 'post';

const registerAuth = async (formData) => {
	const registerURL = API_HOLIDAZE_URL + action;
	const body = JSON.stringify(formData);

	try {
		// Display a toast message indicating that the account is being created
		const toastId = toast('Creating account...', { autoClose: false });

		const response = await fetch(registerURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});

		// Close the initial toast regardless of whether the fetch was successful
		toast.dismiss(toastId);

		if (response.ok) {
			// Display a success toast and redirect to the login page when the toast closes
			toast.success('Account created successfully!🔥', {
				onClose: () => window.location.replace('/api/auth/login'),
			});
		} else {
			const errorResponse = await response.json();
			const errorMessage =
				errorResponse.errors[0]?.message || 'An unknown error occurred';
			// Display an error toast
			toast.error(errorMessage);
		}
	} catch (error) {
		// If an exception was caught, dismiss the initial toast and display an error toast
		toast.dismiss(toastId);
		toast.error('Something went wrong, try again');
	}
};

export default registerAuth;
