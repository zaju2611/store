import FormInput from "../components/FormInput";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

export default function Contact() {
	return (
		<div className="pageContainer">
			<div
				style={{
					width: "70%",
					maxWidth: "600px",
					display: "flex",
					justifyContent: "center",
					border: "1px solid var(--light-grey)",
					padding: "30px",
				}}>
				<h1 style={{ color: "var(--grey)" }}>Contact</h1>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					marginTop: "50px",
				}}>
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
				<div style={{ width: "60%", maxWidth: "400px" }}>
					<FormInput
						icon={<MdOutlineEmail />}
						placeholder="Email"
						type="email"
						errorText="Incorrect email address!"
					/>
				</div>
				<h4 style={{ marginTop: "20px" }}> Your question</h4>
				<textarea
					style={{
						width: "70%",
						maxWidth: "600px",
						height: "100px",
						marginTop: "15px",
						padding: "10px",
						resize: "none",
					}}
				/>
				<div
					style={{
						width: "72%",
						display: "flex",
						justifyContent: "flex-end",
						maxWidth: "600px",
					}}>
					<button
						className="accountBtns"
						style={{
							width: "20%",
							backgroundColor: "var(--pink)",
							padding: "10px",
							marginTop: "20px",
						}}>
						Send
					</button>
				</div>
				<div
					style={{
						display: "flex",
						width: "80%",
						maxWidth: "600px",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "20px",
					}}>
					<div
						style={{ width: "30%", marginRight: "20px", textAlign: "center" }}>
						<h3
							style={{
								color: "var(--pink)",
								fontSize: "1.5rem",

								marginBottom: "5px",
							}}>
							ZAJA
						</h3>
						<p>Głęboka 12/21 Street</p>
						<p> 20-612 Lublin</p>
						<div>
							<strong style={{ color: "var(--pink)" }}>NIP: </strong>
							<span>123-45-67-891</span>
						</div>
						<div>
							<strong style={{ color: "var(--pink)" }}>REGON: </strong>
							<span>123456789</span>
						</div>
						<div>
							<strong style={{ color: "var(--pink)" }}>PHONE: </strong>
							<span>123456789</span>
						</div>
					</div>
					<div style={{ width: "60%" }}>
						<iframe
							title="ZAJA store Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.8733179896617!2d22.546164476897577!3d51.23982793021476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722577a96de4f09%3A0xfe8cc96fc02f1706!2zR8WCxJlib2thIDEyLCAyMC00MDAgTHVibGlu!5e0!3m2!1spl!2spl!4v1693321835007!5m2!1spl!2spl"
							width="100%"
							height="200px"
							style={{ border: "0", borderRadius: "20px" }}
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
