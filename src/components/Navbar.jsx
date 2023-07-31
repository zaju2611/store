import { GoThreeBars, GoSearch, GoPerson } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../assets/images/logo.png";
import SearchBar from "./SearchBar";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import AccountPanel from "./AccountPanel";
import {
	toggleSearchBar,
	toggleNavBar,
	toggleShoppingCart,
	toggleAccountPanel,
	selectProductCount,
} from "../store";

export default function NavBar({ categories, onSearch }) {
	const state = useSelector((state) => state.navigation);
	const products = useSelector(selectProductCount);
	const dispatch = useDispatch();

	const handleSearchClick = () => {
		dispatch(toggleSearchBar());
	};

	const handleNavClick = () => {
		dispatch(toggleNavBar());
	};

	const handleShoppingCartClick = () => {
		dispatch(toggleShoppingCart());
	};
	const handleAccountPanel = () => {
		dispatch(toggleAccountPanel());
	};

	return (
		<div className="navWrapper">
			{state.showNavBar && (
				<div
					className={`overlay ${state.showNavBar ? "showOverlay" : ""}`}
					onClick={handleNavClick}></div>
			)}
			<div
				className={`navListWrapper ${
					state.showNavBar ? "showNav" : "hideNav"
				}`}>
				{state.showNavBar && (
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
					<div className="container">
						<GoPerson className="icon" onClick={handleAccountPanel} />
					</div>

					<div className="container shopping-cart">
						<BiShoppingBag className="icon" onClick={handleShoppingCartClick} />
						<div className="shopping-cart-counter">{products}</div>
					</div>
				</div>
			</div>
			<div className="hr"></div>
			<div
				className={`searchBar ${state.showSearchBar ? "slideIn" : "slideOut"}`}>
				{state.showSearchBar && <SearchBar onSearch={onSearch} />}
			</div>
			<div
				className={`shoppingCard ${
					state.showShoppingCart ? "slideInShopping" : "slideOutShopping"
				}`}>
				{state.showShoppingCart && <ShoppingCart />}
			</div>
			<div
				className={`accountPanel ${
					state.showAccountPanel ? "slideInShopping" : "slideOutShopping"
				}`}>
				{state.showAccountPanel && <AccountPanel />}
			</div>
		</div>
	);
}
