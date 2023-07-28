import { FaStarOfLife } from "react-icons/fa";
import ErrorForm from "./ErrorForm";
export default function FormInput({
	icon,
	placeholder,
	errorText,
	type = "text",
}) {
	return (
		<div className="errorForm">
			<label className="promo-label label" style={{ width: "80%" }}>
				{icon && <span style={{ marginRight: ".5rem" }}>{icon}</span>}
				<input
					type={type}
					className="promo"
					placeholder={placeholder}
					required
				/>
				<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
			</label>
			<ErrorForm children={errorText} />
		</div>
	);
}
