import { Link } from "react-router-dom";
import DataSummary from "../components/DataSummary";
import ProductsSummary from "../components/ProductsSummary";

export default function OrderConfirmation() {
	return (
		<div className="pageContainer">
			<h1 style={{ marginBottom: "30px" }}> Your order</h1>
			<DataSummary />
			<ProductsSummary />
			<Link style={{ width: "450px", textAlign: "end" }}>
				<button
					className="accountBtns"
					style={{
						marginTop: "30px",
						minWidth: "100px",
						maxWidth: "200px",
						backgroundColor: "var(--pink)",
					}}>
					Confirm
				</button>
			</Link>
		</div>
	);
}
