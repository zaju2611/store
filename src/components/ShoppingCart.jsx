import FreeDeliveryBox from "./FreeDeliveryBox";
import ShoppingCardItem from "./ShoppingCartItem";
import ShoppingSummary from "./ShoppingSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCloseAll } from "../hooks/useCloseAll";

export default function ShoppingCart() {
	const { handleClose } = useCloseAll();

	const productList = useSelector((state) => {
		return state.products;
	});

	const renderedProducts = productList.map((product) => {
		return <ShoppingCardItem key={product.id} product={product} />;
	});

	return (
		<div>
			<div className="shoppingCardList">{renderedProducts}</div>
			<ShoppingSummary />
			<FreeDeliveryBox />
			<Link to="/summary" onClick={handleClose}>
				<button className="buyButton">Summary</button>
			</Link>
		</div>
	);
}
