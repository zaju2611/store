import FilterProducts from "../components/FilterProducts";

export default function Electronics({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Electronics"
	);

	return (
		<div>
			<FilterProducts products={filteredProducts} />
		</div>
	);
}
