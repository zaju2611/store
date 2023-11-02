import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: false,
};

const loginSlice = createSlice({
	name: "logData",
	initialState,
	reducers: {
		setLogData: (state, action) => {
			state.login = action.payload;
		},
	},
});

export const { setLogData } = loginSlice.actions;
export default loginSlice.reducer;
