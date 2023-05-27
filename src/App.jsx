import NavBar from "./components/Navbar";


const categories = [
	"Zamknij",
	"T-shirty",
	"Spodnie",
	"Kurtki",
	"Sukienki",
	"Akcesoria",
	"T-shirty",
	"Spodnie",
	"Kurtki",
	"Sukienki",
	"Akcesoria",
	"T-shirty",
	"Spodnie",
	"Kurtki",
	"Sukienki",
	"Akcesoria",
];

export default function App() {


	return (
		<div>
			<NavBar categories={categories} />
		</div>
	);
}
