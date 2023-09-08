import { useLocation } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
import ImageSlider from "../components/ImageSlider";
import ProductCounter from "../components/ProductCounter";
import OtherCategories from "../components/OtherCategories";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/reducers/productsSlice";
import { useState } from "react";
import ContactProduct from "../components/ContactProduct";
import SuccessComponent from "../components/SuccessComponent";

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

	const [showContactProduct, setShowContactProduct] = useState(false);
	const [showSuccessComponent, setShowSuccessComponent] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");

	setTimeout(() => {
		setShowSuccessComponent(false);
	}, 5000);

	const handleProductAdd = (product) => {
		const updatedProduct = { ...product, productsQuantity };
		const action = addProduct({
			newProduct: updatedProduct,
			quantity: productsQuantity,
		});
		dispatch(action);
		setSuccessMessage("Added to cart");
		setShowSuccessComponent(true);
	};

	const handleCountChange = (count) => {
		setProductsQuantity(count);
	};

	const handleCloseContact = () => {
		setShowContactProduct(false);
	};

	const handleCloseSuccessComponent = () => {
		setShowSuccessComponent(false);
	};

	const handleShowSuccess = () => {
		setSuccessMessage("Sent successfully");
		setShowSuccessComponent(true);
		setShowContactProduct(false);
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
						<SlEnvolopeLetter
							className="tool"
							onClick={() => setShowContactProduct(true)}
						/>
					</div>
				</div>
			</div>
			<OtherCategories />
			{showContactProduct && (
				<div className="overlay showOverlay">
					<ContactProduct
						product={product}
						onClose={handleCloseContact}
						onClick={handleShowSuccess}
					/>
				</div>
			)}
			{showSuccessComponent && (
				<SuccessComponent onClose={() => handleCloseSuccessComponent()}>
					{successMessage}
				</SuccessComponent>
			)}
		</div>
	);
}
