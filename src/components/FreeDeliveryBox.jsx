import { useSelector } from "react-redux";
import { selectTotalPrice } from "../store/selectors/productsSelectors";

export default function FreeDeliveryBox() {
	const totalPrice = useSelector(selectTotalPrice);
	const amount = 2000 - totalPrice < 0 ? 0 : 2000 - totalPrice;
	const deliveryText =
		amount === 0
			? "You have qualified for free delivery"
			: `You are missing ${amount},00 zł for free delivery`;
	return (
		<div className="deliveryBox">
			<p className="deliveryBoxText">
				{deliveryText}
				{amount > 0 && <span className="deliveryBoxCounter"></span>}
			</p>
			<p>Valid only in Poland</p>
		</div>
	);
}
