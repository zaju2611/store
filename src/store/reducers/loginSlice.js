import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: false,
};

const loginSlice = createSlice({
	name: "logData",
	initialState,
	reducers: {
		setLogData: (state, action) => {
			state.logData = action.payload;
		},
	},
});

export const { setLogData } = loginSlice.actions;
export default loginSlice.reducer;
