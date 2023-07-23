import bankTransfer from "../assets/images/Przelewy24.png";
import cashOnDelivery from "../assets/images/pobranie.png";
import ShippingMethod from "./ShippingMethod";
import { useState } from "react";

export default function PaymentComponent({ onPaymentChange }) {
	const [selectedPayment, setSelectedPayment] = useState("Przelewy24");

	const handlePaymentChange = (value) => {
		setSelectedPayment(value);
		onPaymentChange(value);
	};

	const paymentOptions = {
		title: "2. Choose payment",
		methods: [
			{ value: "Przelewy24", image: bankTransfer, alt: "bankTransfer" },
			{ value: "cashOnDelivery", image: cashOnDelivery, alt: "cashOnDelivery" },
		],
	};

	return (
		<ShippingMethod
			options={paymentOptions}
			selectedOption={selectedPayment}
			onChange={handlePaymentChange}
		/>
	);
}
