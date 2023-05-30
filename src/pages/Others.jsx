import FilterProducts from "../components/FilterProducts";

export default function Others({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Others"
	);

	return (
		<div>
			<FilterProducts products={filteredProducts} />
		</div>
	);
}
