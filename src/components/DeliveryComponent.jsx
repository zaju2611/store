import dpd from "../assets/images/DPD.png";
import inpost from "../assets/images/InPost.png";
import ShippingMethod from "./ShippingMethod";
import { useState } from "react";

export default function DeliveryComponent({ onDeliveryChange }) {
	const [selectedDelivery, setSelectedDelivery] = useState("dpd");

	const handleDeliveryChange = (value) => {
		setSelectedDelivery(value);
		onDeliveryChange(value);
	};

	const deliveryOptions = {
		title: "1. Choose delivery",
		methods: [
			{ value: "dpd", image: dpd, alt: "DPD logo" },
			{ value: "inpost", image: inpost, alt: "inpost logo" },
		],
	};

	return (
		<ShippingMethod
			options={deliveryOptions}
			selectedOption={selectedDelivery}
			onChange={handleDeliveryChange}
		/>
	);
}
