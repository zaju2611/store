import { MdDelete } from "react-icons/md";
import { removeProduct } from "../store";
import { useDispatch, useSelector } from "react-redux";
import ProductCounter from "../components/ProductCounter";
export default function ShoppingCardItem({ product }) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.products);

	const handleRemoveProduct = (product) => {
		dispatch(removeProduct(product.id));
	};

	const getProductQuantity = (product) => {
		const cartItem = cart.find((item) => item.id === product.id);
		return cartItem ? cartItem.quantity : 0;
	};

	return (
		<div className="shoppingCardItem">
			<img src={product.images[0]} alt="blouse" className="itemImage" />
			<h4 className="product">{product.title}</h4>
			<ProductCounter
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
