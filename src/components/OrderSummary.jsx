import { useState } from "react";

export default function OrderSummary({
	value,
	selectedDelivery,
	selectedPayment,
}) {
	const [promoCode, setPromoCode] = useState("");

	let deliveryCost =
		selectedDelivery === "inpost" ? 15 : selectedDelivery === "dpd" ? 17 : 0;
	const paymentFee =
		selectedPayment === "Przelewy24"
			? 0
			: selectedPayment === "cashOnDelivery"
			? 5
			: 0;

	if (value > 2000) {
		deliveryCost = 0;
	}
	const promoValueMultiplier = promoCode === "promo" ? 0.9 : 1;
	const discountedValue = value * promoValueMultiplier;

	const totalDeliveryCost = deliveryCost + paymentFee;

	const totalAmount = discountedValue + totalDeliveryCost;

	return (
		<div style={{ margin: "20px", width: "50%" }}>
			<h2
				style={{ fontSize: "1rem", marginBottom: "10px", textAlign: "center" }}>
				3. Order value
			</h2>
			<div className="row">
				<p>Value:</p>
				<p>{value},00 zł</p>
			</div>
			<div className="row">
				<p>Shippment cost:</p>
				<p>{totalDeliveryCost},00 zł</p>
			</div>
			<div className="row">
				<p>Total amount:</p>
				<p style={{ fontWeight: "bold", color: "var(--pink)" }}>
					{totalAmount},00 zł
				</p>
			</div>
			<div className="row">
				<label className="promo-label">
					<input type="text" placeholder="Promo code:" className="promo" />
				</label>

				<button
					style={{
						background: "transparent",
						border: "2px solid var(--grey)",
						padding: "5px",
						width: "20%",
						cursor: "pointer",
					}}
					className="promoButton">
					Add
				</button>
			</div>
		</div>
	);
}
