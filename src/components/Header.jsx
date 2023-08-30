export default function Header({ children }) {
	return (
		<div
			style={{
				width: "70%",
				maxWidth: "600px",
				display: "flex",
				justifyContent: "center",
				border: "1px solid var(--light-grey)",
				padding: "30px",
				marginBottom: "50px",
				marginTop: "20px",
			}}>
			<h1 style={{ color: "var(--grey)" }}>{children}</h1>
		</div>
	);
}
