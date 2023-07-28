import { BiFace } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import ErrorForm from "../components/ErrorForm";

export default function LoginButton() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "80%",
			}}>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "60%",
				}}>
				<div className="errorForm">
					<label className="promo-label label">
						<BiFace style={{ marginRight: ".5rem" }} />
						<input
							type="email"
							className="promo"
							placeholder="Your email adress"
						/>
					</label>
					<ErrorForm children={"Incorrect email !"} />
				</div>
				<div
					className="errorForm"
					style={{
						margin: "1rem 1rem 2rem 1rem",
					}}>
					<label className="promo-label label">
						<RiLockPasswordFill style={{ marginRight: ".5rem" }} />
						<input type="password" className="promo" placeholder="Password" />
					</label>
					<ErrorForm children={"This field is required !"} />
				</div>
			</form>
			<button className="accountBtns">Login</button>
		</div>
	);
}
