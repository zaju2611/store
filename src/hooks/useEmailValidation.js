export const useEmailValidation = () => {
	const checkEmail = (input) => {
		const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
		const isValid = re.test(input);
		return isValid;
	};

	return { checkEmail };
};
