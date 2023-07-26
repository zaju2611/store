import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa";
export default function ConcactForm() {
	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "60%",
				margin: "2rem 2rem 1rem 2rem",
			}}>
			<div style={{ display: "flex", width: "100%" }}>
				<label className="promo-label label">
					<BsFillPersonFill style={{ marginRight: ".5rem" }} />
					<input type="text" className="promo" placeholder="Name" required />
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
				</label>
				<label className="promo-label label">
					<BsPerson style={{ marginRight: ".5rem" }} />
					<input type="text" className="promo" placeholder="Surname" required />
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
				</label>
			</div>
			<label
				className="promo-label label"
				style={{
					width: "95%",
				}}>
				<MdOutlineEmail style={{ marginRight: ".5rem" }} />
				<input type="email" className="promo" placeholder="Email" required />
				<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
			</label>
			<label
				className="promo-label label"
				style={{
					width: "95%",
				}}>
				<BiPhone style={{ marginRight: ".5rem" }} />
				<input
					type="tel"
					className="promo"
					placeholder="Phone number"
					required
				/>
				<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
			</label>
		</form>
	);
}
