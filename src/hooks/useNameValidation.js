export function useNameValidation() {
	const checkName = (input) => {
		if (
			/^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+)*)$/.test(
				input
			)
		) {
			return true;
		}
		return false;
	};

	return { checkName };
}
