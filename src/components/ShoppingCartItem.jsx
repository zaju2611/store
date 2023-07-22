import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import ProductCounter from "../components/ProductCounter";
import { useRedirection } from "../hooks/useRedirection";
import { useRemoveProduct } from "../hooks//useRemoveProduct";

export default function ShoppingCardItem({ product }) {
	const redirection = useRedirection(product);
	const cart = useSelector((state) => state.products);

	const handleRemoveProduct = useRemoveProduct(product);

	const getProductQuantity = (product) => {
		const cartItem = cart.find((item) => item.id === product.id);
		return cartItem ? cartItem.quantity : 0;
	};

	return (
		<div className="shoppingCardItem">
			<img
				src={product.images[0]}
				alt="cart item"
				className="itemImage"
				onClick={redirection}
			/>
			<h4 className="product" onClick={redirection}>
				{product.title}
			</h4>
			<ProductCounter
				className="smallCounter"
				product={product}
				quantity={() => getProductQuantity(product)}
			/>
			<p className="price">
				{getProductQuantity(product)}x{" "}
				<span className="mainPrice">{product.price},00 zł</span>
			</p>
			<MdDelete
				className="deleteIcon"
				onClick={() => handleRemoveProduct(product)}
			/>
		</div>
	);
}
