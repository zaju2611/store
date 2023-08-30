import { Link } from "react-router-dom";

export default function Complaint() {
	return (
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
				<h1 style={{ color: "var(--grey)" }}>Terms</h1>
			</div>
			<div style={{ width: "80%", marginTop: "50px" }}>
				<h3 style={{ marginBottom: "10px" }}>Online Shop Terms & Conditions</h3>
				<ol>
					<li>
						<strong>Company, contact</strong>
						<ol className="termsList">
							<li>
								The online shop operating on the Internet at www.zaja.com is run
								by ZAJA, Głęboka 12/21 Street, 20-612 Lublin, Poland.
							</li>
							<li>
								The Customer may contact the entity running the online shop as
								follows: <br />
								- at ZAJA, Głęboka 12/21 Street, 20-612 Lublin, Poland
								<br /> - through a helpline for landline and mobile phones: +44
								208 089 9139
								<br />
								- by e-mail to: support@zaja.com
								<br />- through the contact form on the website of the online
								shop.
							</li>
						</ol>
					</li>
					<li>
						<strong>General rules of using the ZAJA online shop</strong>
						<ol className="termsList">
							<li>
								The online shop may be used only by persons who are at least 18
								years old.
							</li>
							<li>
								Anyone under 18 may use the online shop only with the consent of
								their parents or legal guardians.
							</li>
							<li>
								Anyone who registers and shops in the online shop gives their
								personal data and agrees to their processing by LPP on the terms
								as defined in the <Link to="policy">Privacy Policy</Link>.
							</li>
							<li>
								To confirm the correctness of the data given during the
								registration in the online shop, the Customer receives an e-mail
								with a request to confirm their data.
							</li>
						</ol>
					</li>
					<li>
						<strong>Order placement</strong>
						<ol className="termsList">
							<li>Orders are accepted through www.zaja.com.</li>
							<li>
								The products in the online shop are specifically marked. The
								website includes information about the features of the products,
								their prices, materials of which they are made, and approximate
								availability in physical shops.
							</li>
							<li>
								While ordering a product, the Customer selects it in a manner
								specific for that product, defining in particular its size,
								colour, and, if necessary, providing other specific information
								and the quantity of the ordered products.
							</li>
						</ol>
					</li>
					<li>
						<strong>How to buy in the online shop – a detailed guide</strong>
						<ol className="termsList">
							<li>
								Once the Customer chooses a product, the “Add to basket” icon
								should be clicked.
							</li>
							<li>
								The product is moved to basket that becomes visible after
								clicking the basket icon in the upper right corner of the site.
								The Customer can go to basket by clicking the “Checkout” button,
								which activates a page displaying all the products in basket.
							</li>
							<li>
								Selecting the “Order” option will launch a page where the
								Customer should enter data required for the transaction and
								shipment of the ordered products.
							</li>
							<li>
								After logging in to the online shop, the Customer gains access
								to additional options in the Customer panel, such as: order
								history, a possibility to view the status of the most recent
								order, saving shipping addresses, a possibility of receiving the
								latest product information from the shop.
							</li>
							<li>
								Having selected the shipping method (with shipping to the
								specified address or to a selected ZAJA point of sale) and
								entered all the required details (including billing details, if
								necessary), the payment method should be chosen.
							</li>
							<li>
								The Client places the order by clicking the “Order and Pay”
								button.
							</li>
						</ol>
					</li>
					<li>
						<strong>Prices</strong>
						<ol className="termsList">
							<li>
								The prices in the online shop stated in Polish pounds are gross
								prices, inclusive of the VAT.
							</li>
							<li>
								The price of the product is increased by the shipping cost,
								which depends on the selected shipping and payment method.
							</li>
							<li>
								The price specified on the site at the moment of placing the
								order is the final price, binding both upon the Customer and
								LPP. Once the order is placed, the price will not change,
								notwithstanding any price adjustments made by LPP and regardless
								of any special offers or clearance sale campaigns.
							</li>
							<li>
								After logging in to the online shop, the Customer gains access
								to additional options in the Customer panel, such as: order
								history, a possibility to view the status of the most recent
								order, saving shipping addresses, a possibility of receiving the
								latest product information from the shop.
							</li>
							<li>
								LPP reserves the right to change the prices of the products
								available in the online shop, launch new products, launch and
								cancel special offers on the shop’s websites or change them in
								line with the Civil Code and other applicable laws.
							</li>
						</ol>
					</li>
				</ol>
			</div>
		</div>
	);
}
