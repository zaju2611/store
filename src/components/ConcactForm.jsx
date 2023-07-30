import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import FormInput from "./FormInput";
export default function ConcactForm() {
	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "60%",
				margin: "2rem 2rem 1rem 2rem",
			}}>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<BsFillPersonFill style={{ marginRight: ".5rem" }} />}
					placeholder="Name"
					errorText="This field is required!"
					type="text"
				/>
				<FormInput
					icon={<BsPerson style={{ marginRight: ".5rem" }} />}
					placeholder="Surname"
					errorText="This field is required!"
					type="text"
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail style={{ marginRight: ".5rem" }} />}
				placeholder="Email"
				errorText="Incorrect email!"
				type="email"
			/>
			<FormInput
				icon={<BiPhone style={{ marginRight: ".5rem" }} />}
				placeholder="Phone number"
				errorText="This field is required!"
				type="tel"
			/>
		</form>
	);
}
