import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Blouse from "./pages/Blouse";
import Skirt from "./pages/Skirt";
import Jackets from "./pages/Jackets";
import Dresses from "./pages/Dresses";
import Pants from "./pages/Pants";
import Accessories from "./pages/Accessories";
import Footer from "./components/Footer";

const categories = [
	{ label: "Zamknij", path: "/" },
	{ label: "Bluzki", path: "/blouse" },
	{ label: "Spodnie", path: "/pants" },
	{ label: "Kurtki", path: "/jackets" },
	{ label: "Sukienki", path: "/dresses" },
	{ label: "Spódnice", path: "/skirt" },
	{ label: "Akcesoria", path: "/accessories" },
	{ label: "Bluzki", path: "/blouse" },
	{ label: "Spodnie", path: "/pants" },
	{ label: "Kurtki", path: "/jackets" },
	{ label: "Sukienki", path: "/dresses" },
	{ label: "Akcesoria", path: "/accessories" },
];

export default function App() {
	return (
		<div>
			<NavBar categories={categories} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/skirt" element={<Skirt />} />
				<Route path="/blouse" element={<Blouse />} />
				<Route path="/jackets" element={<Jackets />} />
				<Route path="/dresses" element={<Dresses />} />
				<Route path="/pants" element={<Pants />} />
				<Route path="/accessories" element={<Accessories />} />
			</Routes>
			<Footer />
		</div>
	);
}
