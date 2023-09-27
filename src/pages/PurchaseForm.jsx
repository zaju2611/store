import AddressForm from "../components/AdressForm";
import ConcactForm from "../components/ConcactForm";
import { FaStarOfLife } from "react-icons/fa";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PurchaseForm() {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		phoneNumber: "",
	});

	const [addressData, setAddressData] = useState({
		street: "",
		houseNumber: "",
		city: "",
		zipCode: "",
	});

	const [validationContactErrors, setValidationContactErrors] = useState(4);
	const [validationAddressErrors, setValidationAddressErrors] = useState(4);

	const handleSubmitClick = () => {
		dispatch(buttonClicked());

		if (validationContactErrors === 0 && validationAddressErrors === 0) {
			console.log("brak blędów");
		}

		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};

	return (
		<div className="pageContainer">
			<Header>Purchase</Header>
			<ConcactForm
				formData={formData}
				setFormData={setFormData}
				onErrorCount={setValidationContactErrors}
			/>
			<AddressForm
				addressData={addressData}
				setAddressData={setAddressData}
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
				<Link to="/orderConfirmation">
					<button
						className="accountBtns"
						style={{ width: "20%", backgroundColor: "var(--pink)" }}
						onClick={handleSubmitClick}>
						Next
					</button>
				</Link>

				<div>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
					<span style={{ fontSize: ".8rem" }}> mandatory field</span>
				</div>
			</div>
		</div>
	);
}
