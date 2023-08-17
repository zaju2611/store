import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import FormInput from "./FormInput";

export default function RegisterData() {
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
					icon={<BsFillPersonFill />}
					placeholder="Name"
					errorText="This field is required!"
				/>
				<FormInput
					icon={<BsPerson />}
					placeholder="Surname"
					errorText="This field is required!"
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail />}
				placeholder="Email"
				type="email"
				errorText="Incorrect email address!"
			/>
			<FormInput
				icon={<BiPhone />}
				placeholder="Phone number"
				errorText="This field is required!"
			/>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					type="password"
					errorText="This field is required!"
				/>
				<FormInput
					icon={<RiLockPasswordLine />}
					placeholder="Repeat password"
					type="password"
					errorText="This field is required!"
				/>
			</div>
		</form>
	);
}
