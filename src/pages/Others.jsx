import SetProducts from "../components/SetProducts";

export default function Others({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Others"
	);

	return (
		<div>
			<SetProducts products={filteredProducts} />
		</div>
	);
}
