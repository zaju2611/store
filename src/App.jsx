import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import Shoes from "./pages/Shoes";
import Others from "./pages/Others";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/categories")
			.then((res) => res.json())
			.then((data) => {
				const uniqueCategories = data.map((item) => item.name);
				setCategories(uniqueCategories.slice(0, 5));
			});

		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setFilteredProducts(data);
			});
	}, []);

	const categoryObjects = [
		{ label: "Close", path: "/" },
		...categories.map((category, index) => ({
			label: category,
			path: String(index),
		})),
	];

	const handleSearch = (searchValue) => {
		if (searchValue === "") {
			setFilteredProducts(products);
		} else {
			const filtered = products.filter((product) =>
				product.title.toLowerCase().includes(searchValue.toLowerCase())
			);
			setFilteredProducts(filtered);
		}
	};

	return (
		<div>
			<NavBar categories={categoryObjects} onSearch={handleSearch} />
			<Routes>
				<Route path="/" element={<Home products={products} />} />
				<Route path="/0" element={<Clothes products={filteredProducts} />} />
				<Route
					path="/1"
					element={<Electronics products={filteredProducts} />}
				/>
				<Route path="/2" element={<Furniture products={filteredProducts} />} />
				<Route path="/3" element={<Shoes products={filteredProducts} />} />
				<Route path="/4" element={<Others products={filteredProducts} />} />
			</Routes>
			<Footer />
		</div>
	);
}
