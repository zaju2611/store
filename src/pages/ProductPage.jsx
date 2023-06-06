import { useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
import ImageSlider from "../components/ImageSlider";
import ProductCounter from "../components/ProductCounter";
import OtherCategories from "../components/OtherCategories";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";
import { useState } from "react";

export default function ProductPage() {
	const dispatch = useDispatch();
	const location = useLocation();
	const { product } = location.state;
	const productUpdated = {
		product: product,
		quantity: 1,
	};
	const [productsQuantity, setProductsQuantity] = useState(
		productUpdated.quantity
	);

	const handleProductAdd = (product) => {
		const updatedProduct = { ...product, productsQuantity };
		const action = addProduct({
			newProduct: updatedProduct,
			quantity: productsQuantity,
		});
		dispatch(action);
	};

	const handleCountChange = (count) => {
		setProductsQuantity(count);
	};

	return (
		<div className="productSection">
			<h2>{product.title}</h2>
			<p className="priceProduct">{product.price},00zł</p>
			<div className="productPageContainer">
				<ImageSlider key={product.id} images={product.images} />
				<div className="descriptionContainer">
					<p className="productDescription">{product.description}</p>
					<div className="buttonContainer">
						<ProductCounter
							product={productUpdated}
							onCountChange={handleCountChange}
						/>
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
