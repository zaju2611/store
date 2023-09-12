import { BsFillHouseFill } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { BiStreetView, BiCurrentLocation } from "react-icons/bi";
import FormInput from "./FormInput";
import { useNameValidation } from "../hooks/useNameValidation";
import { useAddressValidation } from "../hooks/useAddressValidation";
import { useZipCodeValidation } from "../hooks/useZipCodeValidation";

export default function AddressForm(props) {
	const { addressData, setAddressData, onErrorCount } = props;
	const { checkName } = useNameValidation();
	const { checkNumberWithApartment } = useAddressValidation();
	const { checkZipCode } = useZipCodeValidation();

	const validateFormAddress = (e) => {
		let err = 0;

		if (!checkName(addressData.street)) {
			err++;
		}
		if (!checkName(addressData.city)) {
			err++;
		}
		if (!checkNumberWithApartment(addressData.houseNumber)) {
			err++;
		}
		if (!checkZipCode(addressData.zipCode)) {
			err++;
		}

		onErrorCount(err);
	};

	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "60%",
				margin: "2rem",
			}}>
			<h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
				Delivery adress
			</h2>
			<div style={{ display: "flex", width: "100%" }}>
				<FormInput
					icon={<BiStreetView style={{ marginRight: ".5rem" }} />}
					placeholder="Street"
					errorText={"Only letters!"}
					validator={checkName}
					value={addressData.name}
					onChange={(e) => {
						setAddressData({ ...addressData, street: e.target.value });
						validateFormAddress();
					}}
				/>
				<FormInput
					icon={<BsFillHouseFill style={{ marginRight: ".5rem" }} />}
					placeholder="House/location number"
					errorText={"Incorrect form!"}
					validator={checkNumberWithApartment}
					value={addressData.houseNumber}
					onChange={(e) => {
						setAddressData({ ...addressData, houseNumber: e.target.value });
						validateFormAddress();
					}}
				/>
			</div>
			<FormInput
				icon={<FaCity style={{ marginRight: ".5rem" }} />}
				placeholder="City"
				type="text"
				errorText={"Only letters!"}
				validator={checkName}
				value={addressData.city}
				onChange={(e) => {
					setAddressData({ ...addressData, city: e.target.value });
					validateFormAddress();
				}}
			/>
			<FormInput
				icon={<BiCurrentLocation style={{ marginRight: ".5rem" }} />}
				placeholder="Zip code"
				type="text"
				errorText={"Incorrect form!"}
				validator={checkZipCode}
				value={addressData.zipCode}
				onChange={(e) => {
					setAddressData({ ...addressData, zipCode: e.target.value });
					validateFormAddress();
				}}
			/>
		</form>
	);
}
