export default function ErrorForm({ children, isVisible }) {
	const visibilityStyle = isVisible ? "visible" : "hidden";

	return (
		<div
			style={{
				backgroundColor: "var(--black)",
				color: "white",
				fontSize: ".7rem",
				padding: "3px 15px",
				textAlign: "center",
				visibility: visibilityStyle,
			}}>
			{children}
		</div>
	);
}
