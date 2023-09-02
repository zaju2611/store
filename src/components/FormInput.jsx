import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import ErrorForm from "./ErrorForm";
import { useSelector } from "react-redux";
import { selectValidation } from "../store";
import { useEffect } from "react";

export default function FormInput({
	icon,
	placeholder,
	errorText = "This field is required!",
	type = "text",
	validator = null,
	compareTo = null,
}) {
	const [value, setValue] = useState("");
	const [isValid, setIsValid] = useState(true);
	const { isButtonClicked } = useSelector(selectValidation);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	useEffect(() => {
		if (isButtonClicked) {
			if (!validator) {
				setIsValid(value.trim() !== "");
				console.log("hi");
			} else {
				setIsValid(validator(value, compareTo));
				console.log("asdas");
			}
		}
	}, [isButtonClicked, value, validator, compareTo]);

	return (
		<div className="errorForm">
			<label className="promo-label label" style={{ width: "80%" }}>
				{icon && <span style={{ marginRight: ".5rem" }}>{icon}</span>}
				<input
					type={type}
					className="promo"
					placeholder={placeholder}
					required
					value={value}
					onChange={handleChange}
				/>
				<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
			</label>
			{!isValid && <ErrorForm children={errorText} />}
		</div>
	);
}
