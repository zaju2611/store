import { BiFace } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import { buttonClicked, resetButtonClicked } from "../store";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { usePasswordValidation } from "../hooks/usePasswordValidation";

export default function LoginForm() {
	const { checkEmail } = useEmailValidation();
	const { checkPassword } = usePasswordValidation();
	const dispatch = useDispatch();

	const handleRegisterClick = () => {
		dispatch(buttonClicked());

		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};

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
				/>
				<FormInput
					icon={<RiLockPasswordFill />}
					placeholder="Password"
					errorText="Incorrect password!"
					type="password"
					validator={checkPassword}
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
