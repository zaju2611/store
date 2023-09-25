import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import FormInput from "./FormInput";
import { usePhoneValidation } from "../hooks/usePhoneValidation";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useCharacterValidation } from "../hooks/useCharacterValidation";
import { useEffect } from "react";

export default function ConcactForm(props) {
	const { formData, setFormData, onErrorCount } = props;
	const { checkCharacters } = useCharacterValidation();
	const { checkEmail } = useEmailValidation();
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
		onErrorCount(err);
	};

	useEffect(() => {
		validateFormRegister();
	}, [formData]);

	const handleInputChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
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
					icon={<BsFillPersonFill style={{ marginRight: ".5rem" }} />}
					placeholder="Name"
					errorText="At least 3 characters!"
					type="text"
					validator={checkCharacters}
					value={formData.name}
					onChange={(e) => handleInputChange("name", e.target.value)}
				/>
				<FormInput
					icon={<BsPerson style={{ marginRight: ".5rem" }} />}
					placeholder="Surname"
					errorText="At least 3 characters!"
					type="text"
					validator={checkCharacters}
					value={formData.surname}
					onChange={(e) => handleInputChange("surname", e.target.value)}
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail style={{ marginRight: ".5rem" }} />}
				placeholder="Email"
				errorText="Incorrect email address!"
				type="email"
				validator={checkEmail}
				value={formData.email}
				onChange={(e) => handleInputChange("email", e.target.value)}
			/>
			<FormInput
				icon={<BiPhone style={{ marginRight: ".5rem" }} />}
				placeholder="Phone number"
				errorText="Incorrect phone number!"
				type="tel"
				validator={checkPhoneNumber}
				value={formData.phoneNumber}
				onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
			/>
		</form>
	);
}
