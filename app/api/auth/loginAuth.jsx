import { toast } from 'react-toastify';
import { API_AUCTION_URL } from '../constants';
import * as storage from '../storage';

const action = '/auth/login';
const method = 'post';

/**
 * Logs in the user with the provided credentials by sending a POST request to the API login URL with the form data.
 * @async
 * @function
 * @param {object} formData - The form data containing the user's email and password.
 * @param {string} formData.email - The user's email.
 * @param {string} formData.password - The user's password.
 * @returns {void}
 * @throws {Error} If an error occurs during the login process.
 * @example
 * LoginAuth(formData)
 */

const loginAuth = async (formData) => {
	const loginURL = API_AUCTION_URL + action;
	const body = JSON.stringify(formData);
	try {
		const response = await fetch(loginURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});

		const { accessToken, ...user } = await response.json();

		storage.save('token', accessToken);

		storage.save('profile', user);

		if (response.ok) {
			window.location.replace('/');
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

export default loginAuth;
