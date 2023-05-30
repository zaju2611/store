import SetProducts from "../components/SetProducts";

export default function Shoes({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Shoes"
	);

	return (
		<div>
			<SetProducts products={filteredProducts} />
		</div>
	);
}
