import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import FormInput from "./FormInput";
import { usePhoneValidation } from "../hooks/usePhoneValidation";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useCharacterValidation } from "../hooks/useCharacterValidation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/reducers/validationSlice";

export default function ContactProduct({ product, onClose, onClick }) {
	const dispatch = useDispatch();
	const { checkCharacters } = useCharacterValidation();
	const { checkEmail } = useEmailValidation();
	const { checkPhoneNumber } = usePhoneValidation();

	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		email: "",
	});
	const [err, setErr] = useState(3);

	const handleInputChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
	};

	const validateFormField = () => {
		let error = 0;
		if (!checkCharacters(formData.name) || formData.name === "") {
			error++;
		}
		if (
			!checkPhoneNumber(formData.phoneNumber) ||
			formData.phoneNumber === ""
		) {
			error++;
		}
		if (!checkEmail(formData.email) || formData.email === "") {
			error++;
		}
		setErr(error);
	};

	useEffect(() => {
		validateFormField();
	}, [formData]);

	const handleSubmit = () => {
		dispatch(buttonClicked());
		if (err === 0) {
			console.log("wyslano");
			onClick();
		}
		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};

	return (
		<div className="contactProductContainer">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "var(--black)",
					color: "var(--white)",
					width: "100%",
					padding: "20px",
				}}>
				<h2 style={{ fontSize: "1rem", width: "80%" }}>
					Ask about product - {product.title}
				</h2>
				<AiOutlineClose
					className="closeIcon"
					color="white"
					size="1.2rem"
					style={{ cursor: "pointer" }}
					onClick={() => {
						onClose();
					}}
				/>
			</div>
			<div style={{ display: "flex" }}>
				<FormInput
					icon={<BsFillPersonFill />}
					placeholder="Name"
					errorText="At least 3 characters"
					validator={checkCharacters}
					value={formData.name}
					onChange={(e) => handleInputChange("name", e.target.value)}
				/>
				<FormInput
					icon={<BiPhone />}
					placeholder="Phone number"
					errorText="Incorrect phone number!"
					validator={checkPhoneNumber}
					value={formData.phoneNumber}
					onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail />}
				placeholder="Email"
				errorText="Incorrect email address!"
				validator={checkEmail}
				value={formData.email}
				onChange={(e) => handleInputChange("email", e.target.value)}
			/>
			<p style={{ margin: "15px" }}>Question: </p>
			<textarea
				style={{
					width: "100%",
					maxWidth: "600px",
					height: "90px",
					padding: "10px",
					resize: "none",
				}}
			/>
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<button
					className="accountBtns"
					style={{
						backgroundColor: "var(--pink)",
						padding: "10px",
						marginTop: "10px",
						alignSelf: "flex-end",
					}}
					onClick={handleSubmit}>
					Send
				</button>
			</div>
		</div>
	);
}
