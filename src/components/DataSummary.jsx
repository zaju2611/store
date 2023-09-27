export default function DataSummary() {
	return (
		<div
			style={{
				maxWidth: "600px",
				width: "60%",
				borderRadius: "10px",
				border: "1px solid var(--grey)",
				padding: "20px",
				margin: "10px",
			}}>
			<h3
				style={{
					width: "100%",
					textAlign: "center",
					marginBottom: "10px",
					color: "var(--pink)",
				}}>
				Your data
			</h3>
			<div>
				<p>Name: Jakub Zając</p>
				<p>Email: jakub.zajac2611@gmail.com</p>
				<p>Phone number: 721279034</p>
			</div>
			<div>
				<p>Adress: Godowska 88h</p>
				<p>City: Radom</p>
				<p>Zip Code: 26-600</p>
			</div>
		</div>
	);
}
