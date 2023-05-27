import { GoThreeBars, GoSearch, GoPerson } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../logo/logo.png";
import { useState } from "react";
import SearchBar from "./SearchBar";
import NavList from "./NavList";

export default function NavBar({ categories }) {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showNavBar, setShowNavBar] = useState(false);

	const handleSearchClick = () => {
		setShowSearchBar(!showSearchBar);
	};

	const handleNavClick = () => {
		setShowNavBar(!showNavBar);
	};

	return (
		<div className="navWrapper">
			{showNavBar && (
				<div
					className={`overlay ${showNavBar ? "showOverlay" : ""}`}
					onClick={handleNavClick}></div>
			)}
			<div className={`navListWrapper ${showNavBar ? "showNav" : "hideNav"}`}>
				{showNavBar && (
					<NavList categories={categories} handleNavClick={handleNavClick} />
				)}
			</div>
			<div className="navbar">
				<div>
					<GoThreeBars className="icon" onClick={handleNavClick} />
					<GoSearch className="icon" onClick={handleSearchClick} />
				</div>
				<img className="logo" src={logo} alt="logo" />
				<div className="menu-left-section">
					<GoPerson className="icon" />
					<div className="container shopping-cart">
						<BiShoppingBag className="icon " />
						<div className="shopping-cart-counter">0</div>
					</div>
				</div>
			</div>
			<div className="hr"></div>
			<div className={`searchBar ${showSearchBar ? "slideIn" : "slideOut"}`}>
				{showSearchBar && <SearchBar />}
			</div>
		</div>
	);
}
