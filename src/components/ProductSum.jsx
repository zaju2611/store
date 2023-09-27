export default function ProductSum({ product }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				border: "1px solid var(--light-grey)",
				padding: "3px 10px",
				borderRadius: "10px",
				margin: "10px",
			}}>
			<img
				src={product.images[0]}
				alt="cart item"
				className="itemTableImage"
				style={{
					height: "75px",
					width: "60px",
					borderRadius: "10px",
					cursor: "default",
				}}
			/>
			<h5
				className="productTable"
				style={{ fontSize: ".8rem", cursor: "default" }}>
				{product.title}
			</h5>
			<p style={{ fontSize: ".8rem" }}>Quantity: {product.quantity}</p>
			<p style={{ fontSize: ".8rem" }}>
				Price: {product.price * product.quantity},00 zł
			</p>
		</div>
	);
}
