import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, getDatabase, get, child } from "firebase/database";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";
import { setLogData } from "../store/reducers/loginSlice";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorCount, setErrorCount] = useState(0);

	const dispatch = useDispatch();

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const db = ref(getDatabase());
				const userRef = child(db, `users/${email.replace(".", "_")}`);

				try {
					const snapshot = await get(userRef);
					if (snapshot.exists()) {
						const userDataFromDatabase = snapshot.val();
						const {
							name,
							surname,
							email,
							phoneNumber,
							street,
							houseNumber,
							city,
							zipCode,
						} = userDataFromDatabase;
						dispatch(setFormData({ name, surname, email, phoneNumber }));
						dispatch(setAddressData({ street, houseNumber, city, zipCode }));

						if (name) {
							const userData = {
								name: name,
							};
							sessionStorage.setItem("user", JSON.stringify(userData));
							dispatch(setLogData(true));
						}
					}
				} catch (error) {
					console.error("Error fetching user data from Firebase: ", error);
					dispatch(setLogData(false));
				}
			})
			.catch((error) => {
				console.log(error);
				dispatch(setLogData(false));
			});
	};

	const handleRegisterClick = (event) => {
		dispatch(buttonClicked());
		if (errorCount === 0) {
			signIn(event);
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
				handleRegisterClick={handleRegisterClick}
				onErrorCount={setErrorCount}
			/>
		</div>
	);
}
