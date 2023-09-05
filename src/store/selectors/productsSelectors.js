import { createSelector } from "@reduxjs/toolkit";

// Selektor do obliczenia całkowitej liczby produktów w koszyku
export const selectProducts = createSelector(
	(state) => state.products,
	(products) => products.reduce((count, product) => count + product.quantity, 0)
);

// Selektor do obliczenia całkowitej ceny produktów w koszyku
export const selectTotalPrice = createSelector(
	(state) => state.products,
	(products) =>
		products.reduce((total, item) => total + item.price * item.quantity, 0)
);
