import AddressForm from "../components/AdressForm";
import { FaStarOfLife } from "react-icons/fa";
import RegisterData from "../components/RegisterData";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {
	buttonClicked,
	resetButtonClicked,
} from "../store/slices/validationSlice";

export default function Register() {
	const dispatch = useDispatch();

	const handleRegisterClick = () => {
		dispatch(buttonClicked());

		setTimeout(() => {
			dispatch(resetButtonClicked());
		}, 300);
	};

	return (
		<div className="pageContainer">
			<Header>Register</Header>
			<RegisterData />
			<AddressForm />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					width: "80%",
				}}>
				<button
					className="accountBtns"
					style={{ width: "20%", backgroundColor: "var(--pink)" }}
					onClick={handleRegisterClick}>
					Register
				</button>
				<div>
					<FaStarOfLife style={{ fontSize: ".5rem", color: "red" }} />
					<span style={{ fontSize: ".8rem" }}> mandatory field</span>
				</div>
			</div>
		</div>
	);
}
