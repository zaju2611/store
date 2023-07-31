import { Link } from "react-router-dom";
import { useCloseAll } from "../hooks/useCloseAll";

export default function AccountPanel() {
	const { handleClose } = useCloseAll();

	return (
		<div>
			<Link to={"/register"} onClick={handleClose}>
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
			<Link to={"/login"} onClick={handleClose}>
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
