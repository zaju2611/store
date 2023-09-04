import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import FormInput from "./FormInput";
import { usePhoneValidation } from "../hooks/usePhoneValidation";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useCharacterValidation } from "../hooks/useCharacterValidation";

export default function ConcactForm() {
	const { checkCharacters } = useCharacterValidation();
	const { checkEmail } = useEmailValidation();
	const { checkPhoneNumber } = usePhoneValidation();

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
				/>
				<FormInput
					icon={<BsPerson style={{ marginRight: ".5rem" }} />}
					placeholder="Surname"
					errorText="At least 3 characters!"
					type="text"
					validator={checkCharacters}
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail style={{ marginRight: ".5rem" }} />}
				placeholder="Email"
				errorText="Incorrect email address!"
				type="email"
				validator={checkEmail}
			/>
			<FormInput
				icon={<BiPhone style={{ marginRight: ".5rem" }} />}
				placeholder="Phone number"
				errorText="Incorrect phone number!"
				type="tel"
				validator={checkPhoneNumber}
			/>
		</form>
	);
}
