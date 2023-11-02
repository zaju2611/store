import AccountButtons from "../components/AccountButtons";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import signIn from "../authFunction";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { auth } from "../firebase/firebase";

export default function Checkout() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorCount, setErrorCount] = useState(0);

	const dispatch = useDispatch();

	const handleLoginClick = (event) => {
		event.preventDefault();
		dispatch(buttonClicked());
		if (errorCount === 0) {
			signIn(auth, email, password, dispatch);
		}
		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};
	return (
		<div className="pageContainer">
			<AccountButtons />
			<h2 style={{ margin: "1.5rem" }}>I have account</h2>
			<LoginForm
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				handleLoginClick={handleLoginClick}
				onErrorCount={setErrorCount}
			/>
		</div>
	);
}
