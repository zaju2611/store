import FilterProducts from "../components/FilterProducts";

export default function Shoes({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Shoes"
	);

	return (
		<div>
			<FilterProducts products={filteredProducts} />
		</div>
	);
}
