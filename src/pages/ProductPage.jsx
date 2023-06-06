import { useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
import ImageSlider from "../components/ImageSlider";
import ProductCounter from "../components/ProductCounter";
import OtherCategories from "../components/OtherCategories";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

export default function ProductPage() {
	const dispatch = useDispatch();
	const location = useLocation();
	const { product } = location.state;

	const productUpdated = {
		product: product,
		quantity: 1,
	};

	const handleProductAdd = (product) => {
		const updatedProduct = { ...product, quantity: 1 };
		const action = addProduct(updatedProduct);
		dispatch(action);
	};

	return (
		<div className="productSection">
			<h2>{product.title}</h2>
			<p className="priceProduct">{product.price},00zł</p>
			<div className="productPageContainer">
				<ImageSlider images={product.images} />
				<div className="descriptionContainer">
					<p className="productDescription">{product.description}</p>
					<div className="buttonContainer">
						<ProductCounter product={productUpdated} />
						<button onClick={() => handleProductAdd(product)}>Buy now!</button>
					</div>
					<div className="toolsContainer">
						<AiOutlineHeart className="tool" />
						<SlEnvolopeLetter className="tool" />
					</div>
				</div>
			</div>
			<OtherCategories />
		</div>
	);
}
