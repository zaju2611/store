import { useSelector } from "react-redux";
import { selectTotalPrice } from "../store/selectors/productsSelectors";
import { selectProducts } from "../store/reducers/productsSlice";

import SummaryItem from "../components/SummaryItem";
import DeliveryComponent from "../components/DeliveryComponent";
import PaymentComponent from "../components/PaymentComponent";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";

export default function Summary() {
	const [selectedDelivery, setSelectedDelivery] = useState("dpd");
	const [selectedPayment, setSelectedPayment] = useState("Przelewy24");

	const totalPrice = useSelector(selectTotalPrice);
	const productList = useSelector(selectProducts);

	const renderedProducts = productList.map((product) => {
		return <SummaryItem key={product.id} product={product} />;
	});

	const handleDeliveryChange = (value) => {
		setSelectedDelivery(value);
	};

	const handlePaymentChange = (value) => {
		setSelectedPayment(value);
	};

	return (
		<div className="pageContainer summaryContainer">
			<h1 style={{ color: "var(--pink)" }}>Your order</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>{renderedProducts}</tbody>
				<tfoot>
					<tr>
						<td colSpan="3"></td>
						<td>{totalPrice},00 zł</td>
					</tr>
				</tfoot>
			</table>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-start",
					width: "80%",
				}}>
				<DeliveryComponent onDeliveryChange={handleDeliveryChange} />
				<PaymentComponent onPaymentChange={handlePaymentChange} />
				<OrderSummary
					value={totalPrice}
					selectedDelivery={selectedDelivery}
					selectedPayment={selectedPayment}
				/>
			</div>
		</div>
	);
}
