export default function Complaint() {
	return (
		<div>
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
					<h1 style={{ color: "var(--grey)" }}>How do I make a complaint?</h1>
				</div>
				<div style={{ width: "80%", marginTop: "50px" }}>
					<p>
						All complaints concerning a product bought online must be reported
						by creating a complaint request in your customer account ('My
						Account' → 'My Orders' → Order 'Details' → 'Make complaint') and
						requesting a pre-paid DPD return label* to ship the item/s to us for
						verification. Please attach the invoice and a description of the
						complaint (may be a handwritten note), which speeds up the solution
						of the case. Complaints are investigated within 14 days from the day
						of receipt by our warehouse. According to standard procedures in
						case of an admitted complaint a refund for the item/s will be issued
						back to your bank account. If the complaint is not admitted the item
						will be sent back to you.
					</p>

					<p style={{ marginTop: "30px" }}>
						To order a pre-paid DPD return label*, please go to your account and
						file a complaint request. Complaints can also be filed in our
						Reserved store. If you want to file a complaint in the store please
						remember to take your invoice with you (printed out or shown on
						mobile device).
					</p>
					<p style={{ marginTop: "30px" }}>
						Important! Remember to retain the proof of posting in the event of a
						future complaint. As per our return policy, refunds are processed
						within 14 days from the date of receipt by our warehouse.
					</p>
					<p style={{ marginTop: "30px", textDecoration: "underline" }}>
						If the provided shipment options are not suitable, you may send the
						item/s at your own cost and responsibility to the following address:
					</p>
					<div style={{ marginTop: "15px" }}>
						<p>ZAJA</p>
						<p>Głęboka 12/21 Street</p>
						<p> 20-612 Lublin</p>
						<p>Poland</p>
					</div>
					<ol style={{ margin: "30px 0" }}>
						If you need help with downloading your invoice please follow these
						instructions:
						<li style={{ marginTop: "20px", marginLeft: "10px" }}>
							Log in to your account and click the YOUR ACCOUNT button.
						</li>
						<li style={{ marginLeft: "10px" }}>Choose the MY ORDERS tab.</li>
						<li style={{ marginLeft: "10px" }}>
							Click on 'details' of your order.
						</li>
						<li style={{ marginLeft: "10px" }}>Click the INVOICE button.</li>
						<li style={{ marginLeft: "10px" }}>
							Click DOWNLOAD in the displayed window.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}
