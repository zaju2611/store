import { BsFillHouseFill } from "react-icons/bs";
import { FaCity, FaStarOfLife } from "react-icons/fa";
import { BiStreetView, BiCurrentLocation } from "react-icons/bi";

export default function AddressForm() {
	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "60%",
				margin: "2rem",
			}}>
			<h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
				Delivery adress
			</h2>
			<div style={{ display: "flex", width: "100%" }}>
				<label className="promo-label label">
					<BiStreetView style={{ marginRight: ".5rem" }} />
					<input type="text" className="promo" placeholder="Street" required />
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
				</label>
				<label className="promo-label label">
					<BsFillHouseFill style={{ marginRight: ".5rem" }} />
					<input
						type="text"
						className="promo"
						placeholder="House/location number"
						required
					/>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
				</label>
			</div>
			<label
				className="promo-label label"
				style={{
					width: "95%",
				}}>
				<FaCity style={{ marginRight: ".5rem" }} />
				<input type="email" className="promo" placeholder="City" required />
				<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
			</label>
			<label
				className="promo-label label"
				style={{
					width: "95%",
				}}>
				<BiCurrentLocation style={{ marginRight: ".5rem" }} />
				<input type="tel" className="promo" placeholder="Zip code" required />
				<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
			</label>
		</form>
	);
}
