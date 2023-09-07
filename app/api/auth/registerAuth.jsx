import { toast } from 'react-toastify';
import { API_AUCTION_URL } from '../constants';
const action = '/auth/register';
const method = 'post';

/**
 * Registers a new user by sending a POST request with the registration form data to the API.
 * @async
 * @function
 * @param {Object} formData - An object containing the registration form data.
 * @throws {Error} If there was an error with the API call.
 * @returns {Promise<void>} A promise that resolves with no value.
 * @example
 * registerAuth(formData);
 */

const registerAuth = async (formData) => {
	const registerURL = API_AUCTION_URL + action;

	const body = JSON.stringify(formData);

	try {
		const response = await fetch(registerURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});
		if (response.ok) {
			toast.success('Account created successfully!🔥', {
				onClose: () => window.location.replace('/login'),
			});
		} else {
			const errorResponse = await response.json();
			const errorMessage =
				errorResponse.errors[0]?.message || 'An unknown error occurred';
			toast.error(errorMessage);
			console.log(errorResponse);
		}
	} catch (error) {
		toast.error('Something went wrong, try again');
		console.log(error);
	}
};

export default registerAuth;
