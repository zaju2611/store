import { Link } from "react-router-dom";

export default function AccountPanel() {
	return (
		<div>
			<Link to={"/register"}>
				<button
					className="accountBtns"
					style={{
						width: "90%",
						backgroundColor: "var(--black)",
						color: "white",
						border: "none",
					}}>
					Register
				</button>
			</Link>
			<Link to={"/login"}>
				<button
					className="accountBtns"
					style={{
						width: "90%",
					}}>
					Login
				</button>
			</Link>
		</div>
	);
}
