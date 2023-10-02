import AddressForm from "../components/AdressForm";
import ConcactForm from "../components/ConcactForm";
import { FaStarOfLife } from "react-icons/fa";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";
import { useState, useEffect } from "react";

import { setFormData, setAddressData } from "../store/reducers/dataSlice";
import { useNameValidation } from "../hooks/useNameValidation";
import { useAddressValidation } from "../hooks/useAddressValidation";
import { useZipCodeValidation } from "../hooks/useZipCodeValidation";
import { usePhoneValidation } from "../hooks/usePhoneValidation";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useCharacterValidation } from "../hooks/useCharacterValidation";
import { useNavigate } from "react-router-dom";

export default function PurchaseForm() {
	const navigate = useNavigate();
	const { checkName } = useNameValidation();
	const { checkNumberWithApartment } = useAddressValidation();
	const { checkZipCode } = useZipCodeValidation();

	const dispatch = useDispatch();

	const formData = useSelector((state) => state.data.formData);
	const addressData = useSelector((state) => state.data.addressData);

	const [validationErrors, setValidationErrors] = useState({
		contact: 4,
		address: 4,
	});

	const validateFormAddress = (e) => {
		let err = 0;

		if (!checkName(addressData.street) || addressData.street === "") {
			err++;
		}
		if (!checkName(addressData.city) || addressData.city === "") {
			err++;
		}
		if (
			!checkNumberWithApartment(addressData.houseNumber) ||
			addressData.houseNumber === ""
		) {
			err++;
		}
		if (!checkZipCode(addressData.zipCode) || addressData.zipCode === "") {
			err++;
		}

		setValidationErrors({ ...validationErrors, address: err });
	};

	const { checkCharacters } = useCharacterValidation();
	const { checkEmail } = useEmailValidation();

	const { checkPhoneNumber } = usePhoneValidation();

	const validateFormRegister = (e) => {
		let err = 0;

		if (!checkCharacters(formData.name) || formData.name === "") {
			err++;
		}
		if (!checkCharacters(formData.surname) || formData.surname === "") {
			err++;
		}
		if (!checkEmail(formData.email) || formData.email === "") {
			err++;
		}
		if (
			!checkPhoneNumber(formData.phoneNumber) ||
			formData.phoneNumber === ""
		) {
			err++;
		}

		setValidationErrors({ ...validationErrors, contact: err });
	};

	useEffect(() => {
		validateFormRegister();
	}, [formData]);

	useEffect(() => {
		validateFormAddress();
	}, [addressData]);

	const handleSubmitClick = () => {
		dispatch(buttonClicked());

		if (validationErrors.contact === 0 && validationErrors.address === 0) {
			navigate("/orderConfirmation");
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
				onErrorCount={setValidationErrors}
			/>
			<AddressForm
				addressData={addressData}
				setAddressData={(data) => dispatch(setAddressData(data))}
				onErrorCount={setValidationErrors}
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
					onClick={handleSubmitClick}>
					Next
				</button>

				<div>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
					<span style={{ fontSize: ".8rem" }}> mandatory field</span>
				</div>
			</div>
		</div>
	);
}
