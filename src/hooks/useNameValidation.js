export function useNameValidation() {
	const checkName = (input) => {
		if (/^[a-zA-Z-]+(\s[a-zA-Z-]+)*$/.test(input)) {
			return true;
		}
		return false;
	};

	return { checkName };
}
