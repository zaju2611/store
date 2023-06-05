import { configureStore, createSlice, createSelector } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		addProduct(state, action) {
			const newProduct = action.payload;
			const existingProductIndex = state.findIndex(
				(product) => product.id === newProduct.id
			);

			if (existingProductIndex !== -1) {
				state[existingProductIndex].quantity += 1;
			} else {
				state.push({ ...newProduct, quantity: 1 });
			}
		},
		removeProduct(state, action) {
			const productId = action.payload;
			return state.filter((product) => product.id !== productId);
		},
	},
});

const store = configureStore({
	reducer: {
		products: productsSlice.reducer,
	},
});

const selectProducts = (state) => state.products;

const calculateTotal = (state) => {
	return state.reduce((total, item) => total + item.price * item.quantity, 0);
};

export { store };
export const { addProduct, removeProduct } = productsSlice.actions;
export const selectProductCount = createSelector(selectProducts, (products) =>
	products.reduce((count, product) => count + product.quantity, 0)
);

export const selectTotalPrice = createSelector(selectProducts, calculateTotal);
