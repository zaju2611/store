import bluzka from "../logo/bluzka.jpg";
import { MdDelete } from "react-icons/md";
export default function ShoppingCardItem() {
	return (
		<div className="shoppingCardItem">
			<img src={bluzka} alt="blouse" className="itemImage" />
			<h4 className="product">Bluzka dla cycastej babki</h4>
			<p className="size">S/M</p>
			<p className="price">
				1x <span className="mainPrice">19.99 zł</span>
			</p>
			<MdDelete className="deleteIcon" />
		</div>
	);
}
