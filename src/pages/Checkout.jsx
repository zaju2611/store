import AccountButtons from "../components/AccountButtons";
import LoginForm from "../components/LoginForm";
export default function Checkout() {
	return (
		<div className="pageContainer">
			<AccountButtons />
			<h2 style={{ margin: "1.5rem" }}>I have account</h2>
			<LoginForm />
		</div>
	);
}
