import { createSlice } from "@reduxjs/toolkit";

const validationSlice = createSlice({
	name: "validation",
	initialState: {
		isButtonClicked: false,
	},
	reducers: {
		buttonClicked(state) {
			state.isButtonClicked = true;
		},
		resetButtonClicked(state) {
			state.isButtonClicked = false;
		},
	},
});

export const { buttonClicked, resetButtonClicked } = validationSlice.actions;

export const selectValidation = (state) => state.validation;

export default validationSlice.reducer;
