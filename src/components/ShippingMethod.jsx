export default function ShippingMethodComponent({
	options,
	selectedOption,
	onChange,
}) {
	return (
		<div style={{ margin: "20px" }}>
			<h2
				style={{ fontSize: "1rem", marginBottom: "10px", textAlign: "center" }}>
				{options.title}
			</h2>
			<form>
				{options.methods.map((method) => (
					<div
						key={method.value}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
						}}>
						<input
							type="radio"
							value={method.value}
							checked={selectedOption === method.value}
							onChange={() => onChange(method.value)}
						/>
						<img
							src={method.image}
							alt={method.alt}
							onClick={() => onChange(method.value)}
							style={{ width: "100px", margin: "10px 20px" }}
						/>
					</div>
				))}
			</form>
		</div>
	);
}
