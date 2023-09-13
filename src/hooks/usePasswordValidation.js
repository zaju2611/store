import { useState } from "react";

export function usePasswordValidation() {
	const [repeatPassword, setRepeatPassword] = useState(null);

	const checkPassword = (input) => {
		if (input.length < 8) {
			return false;
		}
		const digitRegex = /[0-9]/;
		if (!digitRegex.test(input)) {
			return false;
		}
		setRepeatPassword(input);
		return true;
	};

	const comparePasswords = (input1, input2) => {
		return input1 !== "" && (input2 !== "") & (input1 === input2);
	};

	return { checkPassword, repeatPassword, comparePasswords };
}
