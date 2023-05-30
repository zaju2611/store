import FilterProducts from "../components/FilterProducts";

export default function Furniture({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Furniture"
	);

	return (
		<div>
			<FilterProducts products={filteredProducts} />
		</div>
	);
}
