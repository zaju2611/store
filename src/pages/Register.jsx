import AddressForm from "../components/AdressForm";
import { FaStarOfLife } from "react-icons/fa";
import RegisterData from "../components/RegisterData";

export default function Register() {
	return (
		<div className="pageContainer">
			<div
				style={{
					width: "70%",
					display: "flex",
					justifyContent: "center",
					border: "1px solid var(--light-grey)",
					padding: "30px",
				}}>
				<h1 style={{ color: "var(--grey)" }}>Register</h1>
			</div>
			<RegisterData />
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
					Register
				</button>
				<div>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
					<span style={{ fontSize: ".8rem" }}> mandatory field</span>
				</div>
			</div>
		</div>
	);
}
