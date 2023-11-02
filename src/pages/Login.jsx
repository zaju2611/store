import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { auth } from "../firebase/firebase";

import signIn from "../authFunction";

export default function Login() {
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
			<Header>Login</Header>
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
