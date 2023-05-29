import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import WomanClothing from "./pages/WomanClothing";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				const uniqueCategories = [
					...new Set(data.map((item) => item.category)),
				];
				setCategories(uniqueCategories);
				setProducts(data);
			});
	}, []);

	const categoryObjects = [
		{ label: "Zamknij", path: "/" },
		...categories.map((category, index) => ({
			label: category,
			path: String(index),
		})),
	];

	return (
		<div>
			<NavBar categories={categoryObjects} />
			<Routes>
				<Route path="/" element={<Home products={products} />} />
				<Route path="/0" element={<MenClothing />} />
				<Route path="/1" element={<Jewelery />} />
				<Route path="/2" element={<Electronics />} />
				<Route path="/3" element={<WomanClothing />} />
			</Routes>
			<Footer />
		</div>
	);
}
