import SetProducts from "../components/SetProducts";

export default function Electronics({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Electronics"
	);

	return (
		<div>
			<SetProducts products={filteredProducts} />
		</div>
	);
}
