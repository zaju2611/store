export function useCharacterValidation() {
	const checkCharacters = (input) => input.length >= 3;

	return { checkCharacters };
}
