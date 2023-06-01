import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
	const navigate = useNavigate();

	const handleProductClick = () => {
		navigate(`/product/${product.id}`, { state: { product } });
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
					<button className="addToCard">Add to card</button>
					<button className="addToFavorite">
						<AiOutlineHeart />
					</button>
				</div>
			</div>
		</div>
	);
}
