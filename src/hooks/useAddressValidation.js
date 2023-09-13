export function useAddressValidation() {
	const checkNumberWithApartment = (input) => {
		if (/^\d+[A-Za-z]*\/\d+[A-Za-z]*$/.test(input)) {
			return true; // np. "123A/45B" lub "123/45"
		}

		if (/^\d+[A-Za-z]*$/.test(input)) {
			return true; // np. "123A" lub "123"
		}

		return false;
	};

	return { checkNumberWithApartment };
}
