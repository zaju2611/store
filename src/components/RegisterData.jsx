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

		if (!checkCharacters(formData.name)) {
			err++;
		}
		if (!checkCharacters(formData.surname)) {
			err++;
		}
		if (!checkEmail(formData.email)) {
			err++;
		}
		if (!checkPhoneNumber(formData.phoneNumber)) {
			err++;
		}
		if (!checkPassword(formData.password)) {
			err++;
		}
		if (!comparePasswords(formData.password, formData.repeatPassword)) {
			err++;
		}

		onErrorCount(err);
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
					onChange={(e) => {
						setFormData({ ...formData, name: e.target.value });
						validateFormRegister();
					}}
				/>
				<FormInput
					icon={<BsPerson />}
					placeholder="Surname"
					errorText="At least 3 characters!"
					validator={checkCharacters}
					value={formData.surname}
					onChange={(e) => {
						setFormData({ ...formData, surname: e.target.value });
						validateFormRegister();
					}}
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail />}
				placeholder="Email"
				type="email"
				errorText="Incorrect email address!"
				validator={checkEmail}
				value={formData.email}
				onChange={(e) => {
					setFormData({ ...formData, email: e.target.value });
					validateFormRegister();
				}}
			/>
			<FormInput
				icon={<BiPhone />}
				placeholder="Phone number"
				errorText="Incorrect phone number!"
				validator={checkPhoneNumber}
				value={formData.phoneNumber}
				onChange={(e) => {
					setFormData({ ...formData, phoneNumber: e.target.value });
					validateFormRegister();
				}}
			/>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					type="password"
					errorText="At least 8 characters and 1 number!"
					validator={checkPassword}
					value={formData.password}
					onChange={(e) => {
						setFormData({ ...formData, password: e.target.value });
						validateFormRegister();
					}}
				/>
				<FormInput
					icon={<RiLockPasswordLine />}
					placeholder="Repeat password"
					type="password"
					errorText="Passwords are different!"
					validator={comparePasswords}
					compareTo={repeatPassword}
					value={formData.repeatPassword}
					onChange={(e) => {
						setFormData({ ...formData, repeatPassword: e.target.value });
						validateFormRegister();
					}}
				/>
			</div>
		</form>
	);
}
