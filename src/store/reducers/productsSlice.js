import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		addProduct(state, action) {
			const { newProduct, quantity } = action.payload;
			const existingProductIndex = state.findIndex(
				(product) => product.id === newProduct.id
			);

			if (existingProductIndex !== -1) {
				state[existingProductIndex].quantity += quantity;
			} else {
				state.push({ ...newProduct, quantity: quantity });
			}
		},
		removeProduct(state, action) {
			const productId = action.payload;
			return state.filter((product) => product.id !== productId);
		},
		incrementProduct(state, action) {
			const newProduct = action.payload;
			const existingProductIndex = state.findIndex(
				(product) => product.id === newProduct.id
			);

			if (existingProductIndex !== -1) {
				state[existingProductIndex].quantity += 1;
			}
		},
		decrementProduct(state, action) {
			const newProduct = action.payload;
			const existingProductIndex = state.findIndex(
				(product) => product.id === newProduct.id
			);

			if (existingProductIndex !== -1) {
				state[existingProductIndex].quantity -= 1;
			}
		},
	},
});

export const { addProduct, removeProduct, incrementProduct, decrementProduct } =
	productsSlice.actions;

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
