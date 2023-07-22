import FreeDeliveryBox from "./FreeDeliveryBox";
import ShoppingCardItem from "./ShoppingCartItem";
import ShoppingSummary from "./ShoppingSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
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
			<Link to="/summary">
				<button className="buyButton">Summary</button>
			</Link>
		</div>
	);
}
