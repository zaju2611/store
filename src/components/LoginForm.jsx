import { BiFace } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "./FormInput";

export default function LoginButton() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "80%",
			}}>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "60%",
				}}>
				<FormInput
					icon={<BiFace />}
					placeholder="Your email address"
					errorText="Incorrect email!"
					type="email"
				/>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					errorText="This field is required!"
					type="password"
				/>
			</form>
			<button className="accountBtns" style={{ marginTop: "20px" }}>
				Login
			</button>
		</div>
	);
}
