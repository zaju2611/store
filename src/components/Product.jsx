import { AiOutlineHeart } from "react-icons/ai";

export default function Product({ product }) {
	return (
		<div className="productBox">
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
