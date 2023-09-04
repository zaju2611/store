export function useZipCodeValidation() {
	const checkZipCode = (input) => {
		if (/^\d+-\d+$/.test(input)) {
			return true;
		}
		return false;
	};

	return { checkZipCode };
}
