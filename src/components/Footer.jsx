import { Link } from "react-router-dom";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footerContainer">
				<div className="footerBox">
					<h4 className="footerBoxHeader">Support</h4>
					<Link className="footerItem" to="/contact">
						Contact
					</Link>
					<Link className="footerItem" to="/returns">
						Returns
					</Link>
					<Link className="footerItem" to="/complaint">
						Complaints
					</Link>
				</div>
				<div className="footerBox">
					<h4 className="footerBoxHeader">Information</h4>

					<Link className="footerItem" to="/terms">
						Terms
					</Link>
					<Link className="footerItem" to="/policy">
						Privacy Policy
					</Link>
				</div>
				<div className="footerBox">
					<h4 className="footerBoxHeader">Infolinia</h4>
					<h5 className="footerItem">+48 55 221 22 0</h5>
					<p className="footerItem">napisz do nas:</p>
					<p className="footerItem">sklep@sklep.pl</p>
				</div>
				<div className="footerBox">
					<h4 className="footerBoxHeader">Znajdź nas</h4>
					<div className="iconsRow">
						<BsInstagram className="iconFooter" />
						<ImFacebook2 className="iconFooter" />
					</div>
					<div className="iconsRow">
						<FaTiktok className="iconFooter" />
						<BsYoutube className="iconFooter" />
					</div>
				</div>
			</div>
			<div className="copyright">&copy; 2023 Zaja. All rights reserved.</div>
		</div>
	);
}
