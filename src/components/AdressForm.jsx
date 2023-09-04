import { BsFillHouseFill } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { BiStreetView, BiCurrentLocation } from "react-icons/bi";
import FormInput from "./FormInput";
import { useNameValidation } from "../hooks/useNameValidation";
import { useAddressValidation } from "../hooks/useAddressValidation";
import { useZipCodeValidation } from "../hooks/useZipCodeValidation";

export default function AddressForm() {
	const { checkName } = useNameValidation();
	const { checkNumberWithApartment } = useAddressValidation();
	const { checkZipCode } = useZipCodeValidation();

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
				/>
				<FormInput
					icon={<BsFillHouseFill style={{ marginRight: ".5rem" }} />}
					placeholder="House/location number"
					errorText={"Incorrect form!"}
					validator={checkNumberWithApartment}
				/>
			</div>
			<FormInput
				icon={<FaCity style={{ marginRight: ".5rem" }} />}
				placeholder="City"
				type="text"
				errorText={"Only letters!"}
				validator={checkName}
			/>
			<FormInput
				icon={<BiCurrentLocation style={{ marginRight: ".5rem" }} />}
				placeholder="Zip code"
				type="text"
				errorText={"Incorrect form!"}
				validator={checkZipCode}
			/>
		</form>
	);
}
