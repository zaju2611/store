import SetProducts from "../components/SetProducts";

export default function Clothes({ products }) {
	const filteredProducts = products.filter(
		(product) => product.category.name === "Clothes"
	);

	console.log(filteredProducts);
	return (
		<div>
			<SetProducts products={filteredProducts} />
		</div>
	);
}
