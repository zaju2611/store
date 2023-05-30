import FilterProducts from "../components/FilterProducts";

export default function Clothes({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Clothes"
	);

	return (
		<div>
			<FilterProducts products={filteredProducts} />
		</div>
	);
}
