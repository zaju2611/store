import { useSelector } from "react-redux";
import { selectTotalPrice } from "../store/selectors/productsSelectors";
import { selectProducts } from "../store/reducers/productsSlice";
import ProductSum from "./ProductSum";

export default function ProductsSummary() {
	const totalPrice = useSelector(selectTotalPrice);
	const productList = useSelector(selectProducts);

	const renderedProducts = productList.map((product) => {
		return <ProductSum key={product.id} product={product} />;
	});

	return (
		<div
			style={{
				maxWidth: "600px",
				width: "60%",
				borderRadius: "10px",
				border: "1px solid var(--grey)",
				padding: "20px",
			}}>
			<h3
				style={{
					width: "100%",
					textAlign: "center",
					marginBottom: "10px",
					color: "var(--pink)",
				}}>
				Your products
			</h3>
			<div>{renderedProducts}</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "20px 10px 0 10px",
				}}>
				<h4>Total price:</h4>
				<p style={{ fontWeight: "bold" }}>{totalPrice},00 zł</p>
			</div>
		</div>
	);
}
