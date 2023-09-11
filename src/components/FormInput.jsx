import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import ErrorForm from "./ErrorForm";
import { useSelector } from "react-redux";
import { selectValidation } from "../store/reducers/validationSlice";
import { useEffect } from "react";

export default function FormInput({
	icon,
	placeholder,
	errorText = "This field is required!",
	type = "text",
	validator = null,
	compareTo = null,
	onChange,
}) {
	const [value, setValue] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [currentErrorText, setCurrentErrorText] = useState(errorText);
	const { isButtonClicked } = useSelector(selectValidation);

	const handleChange = (event) => {
		setValue(event.target.value);
		onChange(event);
	};

	useEffect(() => {
		if (isButtonClicked) {
			if (validator) {
				const validationResult = validator(value, compareTo);
				setIsValid(validationResult);
				setCurrentErrorText(
					value.trim() === "" ? "This field is required!" : errorText
				);
			}
		}
	}, [
		isButtonClicked,
		value,
		validator,
		compareTo,
		errorText,
		currentErrorText,
	]);

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

			<ErrorForm children={currentErrorText} isVisible={!isValid} />
		</div>
	);
}
