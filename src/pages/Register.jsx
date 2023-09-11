import AddressForm from "../components/AdressForm";
import { FaStarOfLife } from "react-icons/fa";
import RegisterData from "../components/RegisterData";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		phoneNumber: "",
		password: "",
		repeatPassword: "",
	});

	const [addressData, setAddressData] = useState({
		street: "",
		houseNumber: "",
		city: "",
		zipCode: "",
	});

	const signUp = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, formData.email, formData.password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleRegisterClick = (e) => {
		dispatch(buttonClicked());
		signUp(e);
		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};

	return (
		<div className="pageContainer">
			<Header>Register</Header>
			<RegisterData formData={formData} setFormData={setFormData} />
			<AddressForm addressData={addressData} setAddressData={setAddressData} />
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
