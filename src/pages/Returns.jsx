import Header from "../components/Header";

export default function Returns() {
	return (
		<div>
			<div className="pageContainer">
				<Header>How to return products?</Header>
				<div style={{ width: "80%" }}>
					<p>
						We offer a 30-day returns period for online purchases (from date of
						receipt). Returned products must be in their original condition,
						with all original labels intact and no signs of use. Please also
						include the invoice with your return. You can find the invoice
						attached to the email with your order confirmation, or in your order
						details in "My orders" within your customer account, where you can
						download it in PDF format. You can return your items by following
						the instructions below:
					</p>

					<ul style={{ marginTop: "30px" }}>
						To file a return and return via a DPD shop* please follow these
						steps:
						<li style={{ marginTop: "20px" }}>
							Log in to your account and click on "My Orders."
						</li>
						<li>
							Select the order you want to return and click on Return Order (in
							Details.)
						</li>
						<li>Choose the "Return Label" option.</li>
						<li>
							Mark the items you want to return, fill out the return request
							form with the required information and confirm your return
							request.
						</li>
						<li>
							You will receive two emails within 24 hours business hours: one
							confirming your return form and one from DPD containing a DPD
							return label.
						</li>
						<li>
							The email will also include a list of the nearest DPD shops. If
							the provided list is not sufficient, you may also use DPD's
							locator to find a different shop address:
							www.dpd.co.uk/pickuplocator
						</li>
					</ul>
					<p
						style={{
							fontStyle: "italic",
							fontWeight: "bold",
							marginTop: "30px",
						}}>
						*Please note that DPD return labels are only available for mainland
						Poland. For customers located within Northern Ireland we offer DPD
						courier collections only. To arrange a collection, please contact us
						at support@zaja.com (or via chat or phone). Please include your
						order number and specify a date for a collection with two days
						notice (from Monday to Friday and excluding bank holidays).
					</p>
					<p style={{ marginTop: "30px" }}>
						Important! Remember to retain the proof of posting in the event of a
						future complaint. As per our return policy, refunds are processed
						within 14 days from the date of receipt by our warehouse.
					</p>
					<p style={{ marginTop: "30px", textDecoration: "underline" }}>
						If the provided shipping method is not satisfactory, you may return
						items at your own cost and responsibility to:
					</p>
					<div style={{ marginTop: "15px" }}>
						<p>ZAJA</p>
						<p>Głęboka 12/21 Street</p>
						<p> 20-612 Lublin</p>
						<p>Poland</p>
					</div>
					<p
						style={{
							marginTop: "15px",
							marginBottom: "30px",
							color: "var(--pink)",
						}}>
						We do not offer exchanges. If you wish to change an item for a
						different colour/size, then you need to return the item/s using the
						procedure below and place a new order for the desired colour/size.
					</p>
				</div>
			</div>
		</div>
	);
}
