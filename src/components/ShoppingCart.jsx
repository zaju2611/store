import FreeDeliveryBox from "./FreeDeliveryBox";
import ShoppingCardItem from "./ShoppingCartItem";
import ShoppingSummary from "./ShoppingSummary";
import { useSelector } from "react-redux";

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
			<button className="buyButton">Summary</button>
		</div>
	);
}
