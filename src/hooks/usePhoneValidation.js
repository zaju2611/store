export function usePhoneValidation() {
	const checkPhoneNumber = (input) => {
		const cleanedPhoneNumber = input.replace(/[^\d]/g, "");
		if (cleanedPhoneNumber.length === 9) {
			if (/^\d+$/.test(cleanedPhoneNumber)) {
				return true;
			}
		}
		return false;
	};

	return { checkPhoneNumber };
}
