export default function ErrorForm({ children }) {
	return (
		<div
			style={{
				backgroundColor: "var(--black)",
				color: "white",
				fontSize: ".7rem",
				padding: "3px 15px",
				textAlign: "center",
			}}>
			{children}
		</div>
	);
}
