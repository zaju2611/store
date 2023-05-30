import { GoThreeBars, GoSearch, GoPerson } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../images/logo.png";
import { useState } from "react";
import SearchBar from "./SearchBar";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import ShoppingCard from "../components/ShoppingCard";

export default function NavBar({ categories }) {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showNavBar, setShowNavBar] = useState(false);
	const [showShoppingCard, setShowShoppingCard] = useState(false);

	const handleSearchClick = () => {
		setShowSearchBar(!showSearchBar);
		setShowNavBar(false);
		setShowShoppingCard(false);
	};

	const handleNavClick = () => {
		setShowNavBar(!showNavBar);
		setShowSearchBar(false);
		setShowShoppingCard(false);
	};

	const handleShoppingCardClick = () => {
		setShowShoppingCard(!showShoppingCard);
		setShowNavBar(false);
		setShowSearchBar(false);
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
				<Link className="logo" to="/">
					<img className="logoImg" src={logo} alt="logo" />
				</Link>
				<div className="menu-left-section">
					<GoPerson className="icon" />
					<div className="container shopping-cart">
						<BiShoppingBag className="icon" onClick={handleShoppingCardClick} />
						<div className="shopping-cart-counter">0</div>
					</div>
				</div>
			</div>
			<div className="hr"></div>
			<div className={`searchBar ${showSearchBar ? "slideIn" : "slideOut"}`}>
				{showSearchBar && <SearchBar />}
			</div>
			<div
				className={`shoppingCard ${
					showShoppingCard ? "slideInShopping" : "slideOutShopping"
				}`}>
				{showShoppingCard && <ShoppingCard />}
			</div>
		</div>
	);
}
