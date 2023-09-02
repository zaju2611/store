import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import FormInput from "./FormInput";
import { useState } from "react";

export default function RegisterData() {
	const [repeatPassword, setRepeatPassword] = useState("");
	const checkCharacters = (input) => input.length > 3;
	const checkEmail = (input) => {
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([a-zA-Z\-0-9]+\.[a-zA-Z]{2,3}))$/;
		return re.test(input);
	};
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
		return input1 === input2;
	};

	const checkPhoneNumber = (input) => {
		const cleanedPhoneNumber = input.replace(/[^\d]/g, "");
		if (cleanedPhoneNumber.length === 9) {
			if (/^\d+$/.test(cleanedPhoneNumber)) {
				return true;
			}
		}
		return false;
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
					errorText="This field must have at least 3 characters!"
					validator={checkCharacters}
				/>
				<FormInput
					icon={<BsPerson />}
					placeholder="Surname"
					errorText="This field must have at least 3 characters!"
					validator={checkCharacters}
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail />}
				placeholder="Email"
				type="email"
				errorText="Incorrect email address!"
				validator={checkEmail}
			/>
			<FormInput
				icon={<BiPhone />}
				placeholder="Phone number"
				errorText="Incorrect phone number!"
				validator={checkPhoneNumber}
			/>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					type="password"
					errorText="This field must have at least 8 characters and 1 number!"
					validator={checkPassword}
				/>
				<FormInput
					icon={<RiLockPasswordLine />}
					placeholder="Repeat password"
					type="password"
					errorText="Passwords are different"
					validator={comparePasswords}
					compareTo={repeatPassword}
				/>
			</div>
		</form>
	);
}
