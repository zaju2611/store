import { BiFace } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import { buttonClicked, resetButtonClicked } from "../store";
import { useEmailValidation } from "../hooks/useEmailValidation";

export default function LoginForm() {
	const { checkEmail } = useEmailValidation();

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
					errorText="This field is required!"
					type="password"
					validator={(value) => value.trim().length > 0}
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
