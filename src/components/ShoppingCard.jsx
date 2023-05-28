import FreeDeliveryBox from "./FreeDeliveryBox";
import ShoppingCardItem from "./ShoppingCartItem";
import ShoppingSummary from "./ShoppingSummary";

export default function ShoppingCard() {
	return (
		<div>
			<div className="shoppingCardList">
				<ShoppingCardItem />
				<ShoppingCardItem />
				<ShoppingCardItem />
				<ShoppingCardItem />
				<ShoppingCardItem />
			</div>
			<ShoppingSummary />
			<FreeDeliveryBox />
			<button className="buyButton">Podsumowanie</button>
		</div>
	);
}
