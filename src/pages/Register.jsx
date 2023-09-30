import AddressForm from "../components/AdressForm";
import { FaStarOfLife } from "react-icons/fa";
import RegisterData from "../components/RegisterData";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";

export default function Register() {
	const dispatch = useDispatch();

	const formData = useSelector((state) => state.data.formData);
	const addressData = useSelector((state) => state.data.addressData);

	const [validationRegisterErrors, setValidationRegisterErrors] = useState(6);
	const [validationAddressErrors, setValidationAddressErrors] = useState(4);

	const signUp = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, formData.email, formData.password)
			.then((userCredential) => {
				const db = getDatabase();
				const userRef = ref(db, `users/${userCredential.user.uid}`);
				const userData = {
					name: formData.name,
					surname: formData.surname,
					email: formData.email,
					phoneNumber: formData.phoneNumber,
					street: addressData.street,
					houseNumber: addressData.houseNumber,
					city: addressData.city,
					zipCode: addressData.zipCode,
				};
				set(userRef, userData)
					.then(() => {
						console.log("User data saved in database");
					})
					.catch((error) => {
						console.error("Error: ", error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleRegisterClick = (e) => {
		dispatch(buttonClicked());

		if (validationRegisterErrors === 0 && validationAddressErrors === 0) {
			signUp(e);
		}
		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};

	return (
		<div className="pageContainer">
			<Header>Register</Header>
			<RegisterData
				formData={formData}
				setFormData={(data) => dispatch(setFormData(data))}
				onErrorCount={setValidationRegisterErrors}
			/>
			<AddressForm
				addressData={addressData}
				setAddressData={(data) => dispatch(setAddressData(data))}
				onErrorCount={setValidationAddressErrors}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					width: "80%",
				}}>
				<button
					className="accountBtns"
					style={{ width: "20%", backgroundColor: "var(--pink)" }}
					onClick={handleRegisterClick}>
					Register
				</button>
				<div>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
					<span style={{ fontSize: ".8rem" }}> mandatory field</span>
				</div>
			</div>
		</div>
	);
}
