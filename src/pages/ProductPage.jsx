import { useLocation } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

export default function ProductPage() {
	const location = useLocation();
	const { product } = location.state;
	return (
		<div>
			<h2>{product.title}</h2>
			<p>{product.price},00zł</p>
			<ImageSlider images={product.images} />
		</div>
	);
}
