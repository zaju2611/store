import { BsFillHouseFill } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { BiStreetView, BiCurrentLocation } from "react-icons/bi";
import FormInput from "./FormInput";

export default function AddressForm() {
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
					errorText={"This field is required !"}
				/>
				<FormInput
					icon={<BsFillHouseFill style={{ marginRight: ".5rem" }} />}
					placeholder="House/location number"
					errorText={"This field is required !"}
				/>
			</div>
			<FormInput
				icon={<FaCity style={{ marginRight: ".5rem" }} />}
				placeholder="City"
				type="text"
				errorText={"This field is required !"}
			/>
			<FormInput
				icon={<BiCurrentLocation style={{ marginRight: ".5rem" }} />}
				placeholder="Zip code"
				type="text"
				errorText={"This field is required !"}
			/>
		</form>
	);
}
