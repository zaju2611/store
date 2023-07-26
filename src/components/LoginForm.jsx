import { BiFace } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginButton() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "80%",
			}}>
			<h2 style={{ margin: "1.5rem" }}>I have account</h2>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "60%",
				}}>
				<label className="promo-label label">
					<BiFace style={{ marginRight: ".5rem" }} />
					<input
						type="email"
						className="promo"
						placeholder="Your email adress"
					/>
				</label>
				<label
					className="promo-label label"
					style={{
						margin: "1rem 1rem 2rem 1rem",
					}}>
					<RiLockPasswordFill style={{ marginRight: ".5rem" }} />
					<input type="password" className="promo" placeholder="Password" />
				</label>
			</form>
			<button className="accountBtns">Login</button>
		</div>
	);
}
