import AddressForm from "../components/AdressForm";
import ConcactForm from "../components/ConcactForm";
import { FaStarOfLife } from "react-icons/fa";
import Header from "../components/Header";

export default function PurchaseForm() {
	return (
		<div className="pageContainer">
			<Header>Purchase</Header>
			<ConcactForm />
			<AddressForm />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					width: "80%",
				}}>
				<button
					className="accountBtns"
					style={{ width: "20%", backgroundColor: "var(--pink)" }}>
					Next
				</button>
				<div>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
					<span style={{ fontSize: ".8rem" }}> mandatory field</span>
				</div>
			</div>
		</div>
	);
}
