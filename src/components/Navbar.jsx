import { GoThreeBars, GoSearch, GoPerson } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../assets/images/logo.png";
import { useReducer } from "react";
import SearchBar from "./SearchBar";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";
import { selectProductCount } from "../store";

const initialState = {
	showSearchBar: false,
	showNavBar: false,
	showShoppingCart: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_SEARCH_BAR":
			return {
				...state,
				showSearchBar: !state.showSearchBar,
				showNavBar: false,
				showShoppingCart: false,
			};
		case "TOGGLE_NAV_BAR":
			return {
				...state,
				showNavBar: !state.showNavBar,
				showSearchBar: false,
				showShoppingCart: false,
			};
		case "TOGGLE_SHOPPING_CART":
			return {
				...state,
				showShoppingCart: !state.showShoppingCart,
				showNavBar: false,
				showSearchBar: false,
			};
		default:
			return state;
	}
};

export default function NavBar({ categories, onSearch }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const products = useSelector(selectProductCount);
	const handleSearchClick = () => {
		dispatch({ type: "TOGGLE_SEARCH_BAR" });
	};

	const handleNavClick = () => {
		dispatch({ type: "TOGGLE_NAV_BAR" });
	};

	const handleShoppingCartClick = () => {
		dispatch({ type: "TOGGLE_SHOPPING_CART" });
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
					<GoPerson className="icon" />
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
		</div>
	);
}
