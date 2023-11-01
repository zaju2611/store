import { useState } from "react";
import Select from "react-select";

export default function OrderItem({ orders }) {
	const [selectedOrder, setSelectedOrder] = useState(null);

	const options = orders.map((order, index) => ({
		value: index,
		label: `Order #${order.orderNumber}`,
		orderDetails: order,
	}));

	const handleChange = (selectedOption) => {
		setSelectedOrder(selectedOption);
	};

	return (
		<div>
			<h2 style={{ textAlign: "center", margin: "0.5rem 0.5rem 1rem 0.5rem" }}>
				Your orders
			</h2>
			<Select
				options={options}
				value={selectedOrder}
				onChange={handleChange}
				placeholder="Choose order"
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						cursor: "pointer",
						borderColor: state.isFocused
							? "var(--pink)"
							: baseStyles.borderColor,
					}),

					singleValue: (baseStyles) => ({
						...baseStyles,
						color: "var(--pink)",
					}),
				}}
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						primary25: "var(--light-grey)",
						primary: "var(--pink)",
					},
				})}
			/>
			{selectedOrder && (
				<div>
					<h3 style={{ textAlign: "end", margin: "0.5rem" }}>Order detail</h3>
					<p>Number: {selectedOrder.orderDetails.orderNumber}</p>
					<p>Date: {selectedOrder.orderDetails.date}</p>
					<p>Amount: ${selectedOrder.orderDetails.price}</p>
					<h3 style={{ textAlign: "end", margin: "0.5rem" }}>Products</h3>
					<ul>
						{selectedOrder.orderDetails.products.map((product, index) => (
							<li
								key={index}
								style={{
									listStyle: "none",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									margin: "5px",
								}}>
								<img
									src={product.image}
									alt={product.name}
									style={{ width: "75px", height: "100px" }}
								/>
								<p>{product.name}</p> <p>Quantity: {product.quantity}</p>
								<p>Price: ${product.unitPrice}</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
