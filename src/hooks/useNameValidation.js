export function useNameValidation() {
	const checkName = (input) => {
		if (!input || input.trim() === "") {
			console.log(false); // Wyświetla false, gdy pole jest puste
			return false;
		}

		const isValid =
			/^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+)*)$/.test(
				input
			);

		console.log(isValid); // Wyświetla true lub false w zależności od wyniku walidacji
		return isValid;
	};

	return { checkName };
}
