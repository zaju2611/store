import { useSelector } from "react-redux";
import { selectTotalPrice } from "../store/selectors/productsSelectors";

export default function ShoppingSummary() {
	const totalPrice = useSelector(selectTotalPrice);

	return (
		<div className="shoppingSummary">
			<p className="sumText">Sum</p>
			<p className="sum">{totalPrice},00 zł</p>
		</div>
	);
}
