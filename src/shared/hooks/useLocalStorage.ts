

const useLocalStorage = () => {
	const saveToStorage = (key, value) => {
		try {
			const makeString = JSON.stringify(value);
			localStorage.setItem(key, makeString);
			return value;
		} catch (e) {
			// saving error
			return new Error("Error saving to storage");
		}
	};

	const getFromStorage =  (key) => {
		try {
			const jsonValue = localStorage.getItem(key);
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			// error reading value
		}
	};

	const removeFromStorage = (key) => {
		try {
			localStorage.removeItem(key);
			return { response: "removed." };
		} catch (e) {
			// error reading value
		}
	};

	const saveToSession = (key, value) => {
		try {
			const makeString = JSON.stringify(value);
			sessionStorage.setItem(key, makeString);
			return value;
		} catch (e) {
			// saving error
			return new Error("Error saving to storage");
		}
	};

	const getFromSession =  (key) => {
		try {
			const jsonValue = sessionStorage.getItem(key);
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			// error reading value
		}
	};

	const removeFromSession = (key) => {
		try {
			sessionStorage.removeItem(key);
			return { response: "removed." };
		} catch (e) {
			// error reading value
		}
	};

	return {
		getFromStorage,
		saveToStorage,
		removeFromStorage,
		getFromSession,
		saveToSession,
		removeFromSession,
	};
};

export default useLocalStorage;
