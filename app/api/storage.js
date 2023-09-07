/**
 * Saves a value to local storage with the given key.
 *
 * @param {string} key - The key to use for storing the value in local storage.
 * @param {*} value - The value to store in local storage. Must be JSON-serializable.
 */

export const save = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Loads a value from local storage with the given key.
 *
 * @param {string} key - The key to use for retrieving the value from local storage.
 * @returns {*} The value stored in local storage, or null if no value is found or an error occurs while parsing the value.
 */

export const load = (key) => {
	try {
		const value = localStorage.getItem(key);

		return JSON.parse(value);
	} catch {
		return null;
	}
};

/**
 * Removes a value from local storage with the given key.
 *
 * @param {string} key - The key to use for removing the value from local storage.
 */

export const remove = (key) => {
	localStorage.removeItem(key);
};
