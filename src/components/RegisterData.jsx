import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import FormInput from "./FormInput";
import { usePhoneValidation } from "../hooks/usePhoneValidation";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import { useCharacterValidation } from "../hooks/useCharacterValidation";

export default function RegisterData(props) {
	const { formData, setFormData, onErrorCount } = props;
	const { checkCharacters } = useCharacterValidation();
	const { checkEmail } = useEmailValidation();
	const { checkPassword, repeatPassword, comparePasswords } =
		usePasswordValidation();
	const { checkPhoneNumber } = usePhoneValidation();

	const validateFormRegister = (e) => {
		let err = 0;

		if (!checkCharacters(formData.name) || formData.name === "") {
			err++;
		}
		if (!checkCharacters(formData.surname) || formData.surname === "") {
			err++;
		}
		if (!checkEmail(formData.email) || formData.email === "") {
			err++;
		}
		if (
			!checkPhoneNumber(formData.phoneNumber) ||
			formData.phoneNumber === ""
		) {
			err++;
		}
		if (!checkPassword(formData.password) || formData.password === "") {
			err++;
		}
		if (
			!comparePasswords(formData.password, formData.repeatPassword) ||
			formData.repeatPassword === ""
		) {
			err++;
		}

		onErrorCount(err);
	};

	const handleInputChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
		validateFormRegister();
	};

	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "60%",
				margin: "0rem 2rem 1rem 2rem",
			}}>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<BsFillPersonFill />}
					placeholder="Name"
					errorText="At least 3 characters!"
					validator={checkCharacters}
					value={formData.name}
					onChange={(e) => handleInputChange("name", e.target.value)}
				/>
				<FormInput
					icon={<BsPerson />}
					placeholder="Surname"
					errorText="At least 3 characters!"
					validator={checkCharacters}
					value={formData.surname}
					onChange={(e) => handleInputChange("surname", e.target.value)}
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail />}
				placeholder="Email"
				type="email"
				errorText="Incorrect email address!"
				validator={checkEmail}
				value={formData.email}
				onChange={(e) => handleInputChange("email", e.target.value)}
			/>
			<FormInput
				icon={<BiPhone />}
				placeholder="Phone number"
				errorText="Incorrect phone number!"
				validator={checkPhoneNumber}
				value={formData.phoneNumber}
				onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
			/>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					type="password"
					errorText="At least 8 characters and 1 number!"
					validator={checkPassword}
					value={formData.password}
					onChange={(e) => handleInputChange("password", e.target.value)}
				/>
				<FormInput
					icon={<RiLockPasswordLine />}
					placeholder="Repeat password"
					type="password"
					errorText="Passwords are different!"
					validator={comparePasswords}
					compareTo={repeatPassword}
					value={formData.repeatPassword}
					onChange={(e) => handleInputChange("repeatPassword", e.target.value)}
				/>
			</div>
		</form>
	);
}
