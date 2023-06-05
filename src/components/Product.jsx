import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

export default function Product({ product }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleProductClick = () => {
		navigate(`/product/${product.id}`, { state: { product } });
	};

	const handleProductAdd = (event, product) => {
		event.stopPropagation();
		const updatedProduct = { ...product, quantity: 1 };
		const action = addProduct(updatedProduct);
		dispatch(action);
	};

	return (
		<div className="productBox" onClick={handleProductClick}>
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
						Add to card
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
