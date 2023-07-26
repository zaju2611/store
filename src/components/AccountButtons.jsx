import { Link } from "react-router-dom";

export default function AccountButtons() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "80%",
				borderBottom: "1px solid var(--light-grey",
			}}>
			<h2 style={{ margin: "1.5rem" }}>I haven't account</h2>
			<Link
				to={"/purchase"}
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					textDecoration: "none",
				}}>
				<button className="accountBtns">Buy without registration</button>
			</Link>
			<Link
				to={"/register"}
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					textDecoration: "none",
				}}>
				<button
					className="accountBtns"
					style={{ backgroundColor: "var(--pink)", marginBottom: "1.5rem" }}>
					Register
				</button>
			</Link>
		</div>
	);
}
