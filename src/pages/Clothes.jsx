import SetProducts from "../components/SetProducts";

export default function Clothes({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Clothes"
	);

	return (
		<div>
			<SetProducts products={filteredProducts} />
		</div>
	);
}
