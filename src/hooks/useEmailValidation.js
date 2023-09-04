export const useEmailValidation = () => {
	const checkEmail = (input) => {
		const re =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([a-zA-Z\-0-9]+\.[a-zA-Z]{2,3}))$/;
		return re.test(input);
	};

	return { checkEmail };
};
