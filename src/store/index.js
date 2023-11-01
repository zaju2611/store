// import { configureStore, createSlice, createSelector } from "@reduxjs/toolkit";

// const productsSlice = createSlice({
// 	name: "products",
// 	initialState: [],
// 	reducers: {
// 		addProduct(state, action) {
// 			const { newProduct, quantity } = action.payload;
// 			const existingProductIndex = state.findIndex(
// 				(product) => product.id === newProduct.id
// 			);

// 			if (existingProductIndex !== -1) {
// 				state[existingProductIndex].quantity += quantity;
// 			} else {
// 				state.push({ ...newProduct, quantity: quantity });
// 			}
// 		},
// 		removeProduct(state, action) {
// 			const productId = action.payload;
// 			return state.filter((product) => product.id !== productId);
// 		},
// 		incrementProduct(state, action) {
// 			const newProduct = action.payload;
// 			const existingProductIndex = state.findIndex(
// 				(product) => product.id === newProduct.id
// 			);

// 			if (existingProductIndex !== -1) {
// 				state[existingProductIndex].quantity += 1;
// 			}
// 		},

// 		decrementProduct(state, action) {
// 			const newProduct = action.payload;
// 			const existingProductIndex = state.findIndex(
// 				(product) => product.id === newProduct.id
// 			);

// 			if (existingProductIndex !== -1) {
// 				state[existingProductIndex].quantity -= 1;
// 			}
// 		},
// 	},
// });

// const navigationSlice = createSlice({
// 	name: "navigation",
// 	initialState: {
// 		showSearchBar: false,
// 		showNavBar: false,
// 		showShoppingCart: false,
// 		showAccountPanel: false,
// 	},
// 	reducers: {
// 		toggleSearchBar(state) {
// 			state.showSearchBar = !state.showSearchBar;
// 			state.showNavBar = false;
// 			state.showShoppingCart = false;
// 			state.showAccountPanel = false;
// 		},
// 		toggleNavBar(state) {
// 			state.showSearchBar = false;
// 			state.showNavBar = !state.showNavBar;
// 			state.showShoppingCart = false;
// 			state.showAccountPanel = false;
// 		},
// 		toggleShoppingCart(state) {
// 			state.showSearchBar = false;
// 			state.showNavBar = false;
// 			state.showShoppingCart = !state.showShoppingCart;
// 			state.showAccountPanel = false;
// 		},
// 		toggleAccountPanel(state) {
// 			state.showSearchBar = false;
// 			state.showNavBar = false;
// 			state.showShoppingCart = false;
// 			state.showAccountPanel = !state.showAccountPanel;
// 		},
// 		closeAll(state) {
// 			state.showSearchBar = false;
// 			state.showNavBar = false;
// 			state.showShoppingCart = false;
// 			state.showAccountPanel = false;
// 		},
// 	},
// });

// const validationSlice = createSlice({
// 	name: "validation",
// 	initialState: {
// 		isButtonClicked: false,
// 	},
// 	reducers: {
// 		buttonClicked(state) {
// 			state.isButtonClicked = true;
// 		},
// 		resetButtonClicked(state) {
// 			state.isButtonClicked = false;
// 		},
// 	},
// });

// const store = configureStore({
// 	reducer: {
// 		products: productsSlice.reducer,
// 		navigation: navigationSlice.reducer,
// 		validation: validationSlice.reducer,
// 	},
// });

// export const selectProducts = (state) => state.products;
// export const selectNavigation = (state) => state.navigation;
// export const selectValidation = (state) => state.validation;

// const calculateTotal = (state) => {
// 	return state.reduce((total, item) => total + item.price * item.quantity, 0);
// };

// export { store };
// export const {
// 	addProduct,
// 	addProductFast,
// 	removeProduct,
// 	incrementProduct,
// 	decrementProduct,
// } = productsSlice.actions;

// export const {
// 	toggleSearchBar,
// 	toggleNavBar,
// 	toggleShoppingCart,
// 	toggleAccountPanel,
// 	closeAll,
// } = navigationSlice.actions;

// export const { buttonClicked, resetButtonClicked } = validationSlice.actions;

// export const selectProductCount = createSelector(selectProducts, (products) =>
// 	products.reduce((count, product) => count + product.quantity, 0)
// );

// export const selectTotalPrice = createSelector(selectProducts, calculateTotal);

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../store/reducers/productsSlice";
import navigationReducer from "../store/reducers/navigationSlice";
import validationReducer from "../store/reducers/validationSlice";
import dataReducer from "../store/reducers/dataSlice";
import loginReducer from "../store/reducers/loginSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		navigation: navigationReducer,
		validation: validationReducer,
		data: dataReducer,
		login: loginReducer,
	},
});

export default store;
