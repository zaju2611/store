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
import { ref, getDatabase, get } from "firebase/database";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";

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
				const userRef = ref(db, `users/${userCredential.user.uid}`);

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
					}
				} catch (error) {
					console.error("Error fetching user data from Firebase: ", error);
				}
			})
			.catch((error) => {
				console.log(error);
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
