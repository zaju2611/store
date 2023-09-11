import { BiFace } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "./FormInput";

import { useEmailValidation } from "../hooks/useEmailValidation";
import { usePasswordValidation } from "../hooks/usePasswordValidation";

export default function LoginForm(props) {
	const { email, setEmail, password, setPassword, handleRegisterClick } = props;
	const { checkEmail } = useEmailValidation();
	const { checkPassword } = usePasswordValidation();

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
					validator={checkEmail}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					errorText="Incorrect password!"
					type="password"
					validator={checkPassword}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</form>
			<button
				className="accountBtns"
				style={{ marginTop: "20px" }}
				type="submit"
				onClick={handleRegisterClick}>
				Login
			</button>
		</div>
	);
}
