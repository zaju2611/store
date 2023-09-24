export function useAddressValidation() {
	const checkNumberWithApartment = (input) => {
		if (/^\d+[A-Za-z]*\/\d+[A-Za-z]*$/.test(input)) {
			return true;
		}

		if (/^\d+[A-Za-z]*$/.test(input)) {
			return true;
		}

		return false;
	};

	return { checkNumberWithApartment };
}
