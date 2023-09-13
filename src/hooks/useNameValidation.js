export function useNameValidation() {
	const checkName = (input) => {
		if (!input || input.trim() === "") {
			return false;
		}

		const isValid =
			/^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+)*)$/.test(
				input
			);

		return isValid;
	};

	return { checkName };
}
