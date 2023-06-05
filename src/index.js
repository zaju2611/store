import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
