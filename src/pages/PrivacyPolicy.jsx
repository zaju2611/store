import Header from "../components/Header";

export default function PrivacyPolicy() {
	return (
		<div className="pageContainer">
			<Header>Privacy Policy</Header>
			<div style={{ width: "80%" }}>
				<h3>Privacy Policy</h3>
				<p style={{ marginTop: "20px" }}>
					Our top priority is to protect information and respect your privacy as
					you use our Website so we take care of appropriate security measures
					and your convenience of using our websites. This Policy lays down the
					rules and scope of our processing of your data and your related rights
					and responsibilities.
				</p>
				<h3 style={{ marginTop: "20px" }}>Terms and definitions</h3>
				<ul style={{ margin: "20px" }}>
					<li>
						<strong>Website</strong> - the online shop on www.zaja.com
					</li>
					<li>
						<strong>User</strong> - a natural person using the Website.
					</li>
					<li>
						<strong>GDPR</strong> - Regulation (EU) 2016/679 of the European
						Parliament and of the Council of 27 April 2016 on the protection of
						natural persons with regard to the processing of personal data and
						on the free movement of such data, and repealing Directive 95/46/EC.
					</li>
				</ul>
				<h3>The data Controller is:</h3>
				<p style={{ marginTop: "20px" }}>
					ZAJA Limited; 3rd Floor, Głęboka 12/21 Street, 20-612 Lublin, Poland
				</p>
				<p style={{ marginTop: "10px" }}>
					ZAJA has appointed a Data Protection Officer who can be contacted on
					all matters related to the processing of personal data and exercising
					the rights related to data processing:
				</p>
				<ul style={{ margin: "20px" }}>
					<li>
						by post to: ZAJA Limited; 3rd Floor, Głęboka 12/21 Street, 20-612
						Lublin, Poland
					</li>
					<li> by email to: dataprivacy@zaja.com</li>
				</ul>
			</div>
		</div>
	);
}
