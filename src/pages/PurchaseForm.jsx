import AddressForm from "../components/AdressForm";
import ConcactForm from "../components/ConcactForm";
import { FaStarOfLife } from "react-icons/fa";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";

export default function PurchaseForm() {
	const dispatch = useDispatch();

	const formData = useSelector((state) => state.data.formData);
	const addressData = useSelector((state) => state.data.addressData);

	const [validationContactErrors, setValidationContactErrors] = useState(4);
	const [validationAddressErrors, setValidationAddressErrors] = useState(4);

	const handleSubmitClick = () => {
		dispatch(buttonClicked());

		if (validationContactErrors === 0 && validationAddressErrors === 0) {
			console.log("no errors");
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
				setFormData={(data) => dispatch(setFormData(data))}
				onErrorCount={setValidationContactErrors}
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
