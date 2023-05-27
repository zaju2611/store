import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar() {
	const [input, setInput] = useState("");
	const [isInputActive, setIsInputActive] = useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		setInput("");
	};

	const handleInputFocus = () => {
		setIsInputActive(true);
	};

	const handleInputBlur = () => {
		setIsInputActive(false);
	};

	return (
		<form onSubmit={handleSearch} className="searchBar">
			<div className={`searchBar-container ${isInputActive ? "active" : ""}`}>
				<input
					className="searchInput"
					placeholder="Szukaj"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				/>
				<FaSearch id="searchIcon" onClick={handleSearch} />
			</div>
		</form>
	);
}
