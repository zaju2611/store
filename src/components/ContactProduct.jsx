import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import FormInput from "./FormInput";

export default function ContactProduct({ product, onClose }) {
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
					errorText="This field is required!"
				/>
				<FormInput
					icon={<BiPhone />}
					placeholder="Phone number"
					errorText="This field is required!"
				/>
			</div>
			<FormInput
				icon={<MdOutlineEmail />}
				placeholder="Email"
				type="email"
				errorText="Incorrect email address!"
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
					}}>
					Send
				</button>
			</div>
		</div>
	);
}
