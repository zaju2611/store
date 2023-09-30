import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	formData: {
		name: "",
		surname: "",
		email: "",
		phoneNumber: "",
	},
	addressData: {
		street: "",
		houseNumber: "",
		city: "",
		zipCode: "",
	},
};

const dataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		setFormData: (state, action) => {
			state.formData = action.payload;
		},
		setAddressData: (state, action) => {
			state.addressData = action.payload;
		},
	},
});

export const { setFormData, setAddressData } = dataSlice.actions;
export default dataSlice.reducer;
