import { useSelector } from "react-redux";

export default function DataSummary() {
	const formData = useSelector((state) => state.data.formData);
	const addressData = useSelector((state) => state.data.addressData);

	return (
		<div
			style={{
				maxWidth: "600px",
				width: "60%",
				borderRadius: "10px",
				border: "1px solid var(--grey)",
				padding: "20px",
				margin: "10px",
			}}>
			<h3
				style={{
					width: "100%",
					textAlign: "center",
					marginBottom: "10px",
					color: "var(--pink)",
				}}>
				Your data
			</h3>
			<div>
				<p>
					Name: {formData.name} {formData.surname}
				</p>
				<p>Email: {formData.email}</p>
				<p>Phone number: {formData.phoneNumber}</p>
			</div>
			<div>
				<p>
					Adress: {addressData.street} {addressData.houseNumber}
				</p>
				<p>City: {addressData.city}</p>
				<p>Zip Code: {addressData.zipCode}</p>
			</div>
		</div>
	);
}
