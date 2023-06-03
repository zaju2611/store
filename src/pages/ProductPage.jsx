import { useLocation } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import ProductCounter from "../components/ProductCounter";
import { AiOutlineHeart } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
import OtherCategories from "../components/OtherCategories";

export default function ProductPage() {
	const location = useLocation();
	const { product } = location.state;
	console.log(product);
	return (
		<div className="productSection">
			<h2>{product.title}</h2>
			<p className="priceProduct">{product.price},00zł</p>
			<div className="productPageContainer">
				<ImageSlider images={product.images} />
				<div className="descriptionContainer">
					<p className="productDescription">{product.description}</p>
					<div className="buttonContainer">
						<ProductCounter />
						<button>Buy now!</button>
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
