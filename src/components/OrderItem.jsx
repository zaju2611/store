import { useState } from "react";
import Select from "react-select";

export default function OrderItem({ orders }) {
	const [selectedOrder, setSelectedOrder] = useState(null);

	const options = orders.map((order, index) => ({
		value: index,
		label: `Order #${order.orderNumber} - ${order.date} - ${order.price}`,
		orderDetails: order,
	}));

	const handleChange = (selectedOption) => {
		setSelectedOrder(selectedOption);
	};

	return (
		<div>
			<h2>Your orders:</h2>
			<Select
				options={options}
				value={selectedOrder}
				onChange={handleChange}
				placeholder="Choose order"
			/>
			{selectedOrder && (
				<div>
					<h2>Order detail:</h2>
					<p>Number: {selectedOrder.orderDetails.orderNumber}</p>
					<p>Date: {selectedOrder.orderDetails.date}</p>
					<p>Amount: ${selectedOrder.orderDetails.price}</p>
					<h3>Products:</h3>
					<ul>
						{selectedOrder.orderDetails.products.map((product, index) => (
							<li key={index}>
								{product.name} - Quantity: {product.quantity}, Price: $
								{product.unitPrice}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
