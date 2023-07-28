import LoginForm from "../components/LoginForm";
export default function Login() {
	return (
		<div className="pageContainer">
			<div
				style={{
					width: "70%",
					display: "flex",
					justifyContent: "center",
					border: "1px solid var(--light-grey)",
					padding: "30px",
					marginBottom: "3rem",
				}}>
				<h1 style={{ color: "var(--grey)" }}>Login</h1>
			</div>
			<LoginForm />
		</div>
	);
}
