import { AiOutlineHeart } from "react-icons/ai";
import { useRedirection } from "../hooks/useRedirection";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

export default function Product({ product }) {
	const dispatch = useDispatch();
	const redirection = useRedirection(product);

	const handleProductAdd = (event, product) => {
		event.stopPropagation();
		const updatedProduct = { ...product, quantity: 1 };
		const action = addProduct({
			newProduct: updatedProduct,
			quantity: updatedProduct.quantity,
		});
		dispatch(action);
	};

	return (
		<div className="productBox" onClick={redirection}>
			<div className="imageBox">
				<img src={product.images[0]} alt={product.title} />
			</div>
			<div className="descriptionBox">
				<h4 className="productTitle">{product.title}</h4>
				<p className="productPrice">{product.price},00 zł</p>
				<div className="buttonBox">
					<button
						className="addToCard"
						onClick={(event) => handleProductAdd(event, product)}>
						Add to cart
					</button>
					<button
						className="addToFavorite"
						onClick={(event) => event.stopPropagation()}>
						<AiOutlineHeart />
					</button>
				</div>
			</div>
		</div>
	);
}
