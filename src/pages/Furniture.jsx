import SetProducts from "../components/SetProducts";

export default function Furniture({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Furniture"
	);

	return (
		<div>
			<SetProducts products={filteredProducts} />
		</div>
	);
}
