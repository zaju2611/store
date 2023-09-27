import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import Shoes from "./pages/Shoes";
import Others from "./pages/Others";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Summary from "./pages/Summary";
import Checkout from "./pages/Checkout";
import PurchaseForm from "./pages/PurchaseForm";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Favourite from "./pages/Favourite";
import Contact from "./pages/Contact";
import Returns from "./pages/Returns";
import Complaint from "./pages/Complaint";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OrderConfirmation from "./pages/OrderConfirmation";

export default function App() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const location = useLocation();

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

	useEffect(() => {
		setFilteredProducts(products);
	}, [products, location]);

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
				<Route path="/product/:productId" element={<ProductPage />} />
				<Route path="/summary" element={<Summary />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/purchase" element={<PurchaseForm />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/account" element={<Account />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/returns" element={<Returns />} />
				<Route path="/complaint" element={<Complaint />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/policy" element={<PrivacyPolicy />} />
				<Route path="/orderConfirmation" element={<OrderConfirmation />} />
			</Routes>
			<Footer />
		</div>
	);
}
