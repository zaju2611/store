import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
	name: "navigation",
	initialState: {
		showSearchBar: false,
		showNavBar: false,
		showShoppingCart: false,
		showAccountPanel: false,
	},
	reducers: {
		toggleSearchBar(state) {
			state.showSearchBar = !state.showSearchBar;
			state.showNavBar = false;
			state.showShoppingCart = false;
			state.showAccountPanel = false;
		},
		toggleNavBar(state) {
			state.showSearchBar = false;
			state.showNavBar = !state.showNavBar;
			state.showShoppingCart = false;
			state.showAccountPanel = false;
		},
		toggleShoppingCart(state) {
			state.showSearchBar = false;
			state.showNavBar = false;
			state.showShoppingCart = !state.showShoppingCart;
			state.showAccountPanel = false;
		},
		toggleAccountPanel(state) {
			state.showSearchBar = false;
			state.showNavBar = false;
			state.showShoppingCart = false;
			state.showAccountPanel = !state.showAccountPanel;
		},
		closeAll(state) {
			state.showSearchBar = false;
			state.showNavBar = false;
			state.showShoppingCart = false;
			state.showAccountPanel = false;
		},
	},
});

export const {
	toggleSearchBar,
	toggleNavBar,
	toggleShoppingCart,
	toggleAccountPanel,
	closeAll,
} = navigationSlice.actions;

export default navigationSlice.reducer;
