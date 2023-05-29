import { Link } from "react-router-dom";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footerContainer">
				<div className="footerBox">
					<h4 className="footerBoxHeader">Obsługa klienta</h4>
					<Link className="footerItem" path="/contact">
						Kontakt
					</Link>
					<Link className="footerItem" path="/returns">
						Zwroty
					</Link>
					<Link className="footerItem" path="/complaints">
						Reklamacje
					</Link>
				</div>
				<div className="footerBox">
					<h4 className="footerBoxHeader">Informacje</h4>
					<Link className="footerItem" path="/aboutus">
						O nas
					</Link>
					<Link className="footerItem" path="/terms">
						Regulamin
					</Link>
					<Link className="footerItem" path="/policy">
						Polityka prywatności
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
						<BsInstagram className="icon" />
						<ImFacebook2 className="icon" />
					</div>
					<div className="iconsRow">
						<FaTiktok className="icon" />
						<BsYoutube className="icon" />
					</div>
				</div>
			</div>
			<div className="copyright">
				&copy; 2023 Pakuten. Wszelkie prawa zastrzeżone.
			</div>
		</div>
	);
}
