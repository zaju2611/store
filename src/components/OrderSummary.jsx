import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderSummary({
	value,
	selectedDelivery,
	selectedPayment,
}) {
	const [promoCode, setPromoCode] = useState("");
	const [appliedPromoMessage, setAppliedPromoMessage] = useState("");
	const [invalidPromoMessage, setInvalidPromoMessage] = useState("");
	const [isApplied, setIsApplied] = useState(false);
	const isUserLoggedIn = useSelector((state) => state.login.login);

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

	const totalDeliveryCost = deliveryCost + paymentFee;
	const [totalAmount, setTotalAmount] = useState(value + totalDeliveryCost);

	const handlePromoCodeChange = (event) => {
		setPromoCode(event.target.value);
	};

	const checkPromoCode = () => {
		if (promoCode === "promo") {
			const promoValueMultiplier = 0.9;
			const discountedValue = value * promoValueMultiplier;
			const newTotalAmount = discountedValue + totalDeliveryCost;
			setTotalAmount(Math.floor(newTotalAmount));
			setAppliedPromoMessage("Code applied");
			setInvalidPromoMessage("");
			setIsApplied(true);
			setTimeout(() => {
				setAppliedPromoMessage("");
			}, 3000);
		} else {
			setInvalidPromoMessage("Invalid promo code");
			setAppliedPromoMessage("");
			setTimeout(() => {
				setInvalidPromoMessage("");
				setPromoCode("");
			}, 3000);
		}
	};

	const clearPromoCode = () => {
		setPromoCode("");
		setTotalAmount(value + totalDeliveryCost);
		setAppliedPromoMessage("");
		setIsApplied(false);
	};

	useEffect(() => {
		const totalAmountWithPromo =
			promoCode === "promo"
				? Math.floor(value * 0.9 + totalDeliveryCost)
				: value + totalDeliveryCost;

		setTotalAmount(totalAmountWithPromo);
	}, [value, totalDeliveryCost]);

	const linkTo = isUserLoggedIn ? "/orderConfirmation" : "/checkout";

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
					<input
						type="text"
						placeholder="Promo code:"
						className="promo"
						value={promoCode}
						onChange={handlePromoCodeChange}
					/>
				</label>
				{isApplied && (
					<button
						style={{
							background: "transparent",
							border: "2px solid var(--grey)",
							padding: "5px",
							width: "10%",
							cursor: "pointer",
							margin: "0 10px",
						}}
						className="promoButton"
						onClick={clearPromoCode}>
						&#x2716;
					</button>
				)}
				<button
					style={{
						background: "transparent",
						border: "2px solid var(--grey)",
						padding: "5px",
						width: "20%",
						cursor: "pointer",
					}}
					className="promoButton"
					onClick={checkPromoCode}>
					Add
				</button>
			</div>
			{appliedPromoMessage && (
				<p
					style={{
						color: "green",
						fontSize: "0.7rem",
						textAlign: "center",
						width: "70%",
						margin: "0 0 1rem 0",
					}}>
					{appliedPromoMessage}
				</p>
			)}
			{invalidPromoMessage && (
				<p
					style={{
						color: "red",
						fontSize: "0.7rem",
						textAlign: "center",
						width: "70%",
						margin: "0 0 1.05rem 0",
					}}>
					{invalidPromoMessage}
				</p>
			)}

			<Link
				to={linkTo}
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
					marginTop:
						appliedPromoMessage || invalidPromoMessage ? "1rem" : "1.9rem",
					textDecoration: "none",
				}}>
				<button
					style={{
						background: "var(--pink",
						border: "2px solid var(--grey)",
						padding: "5px",
						width: "50%",
						cursor: "pointer",
					}}
					className="promoButton">
					Proceed to checkout
				</button>
			</Link>
		</div>
	);
}
