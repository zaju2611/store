import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";

export default function ProductCounter() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const handleInputChange = (event) => {
		const inputCount = parseInt(event.target.value);
		if (!isNaN(inputCount)) {
			setCount(inputCount);
		}
	};

	return (
		<div className="counterContainer">
			<HiOutlineMinusSm className="iconCounter" onClick={decrementCount} />
			<input
				className="counter"
				type="number"
				value={count}
				onChange={handleInputChange}
			/>
			<BsPlus className="iconCounter" onClick={incrementCount} />
		</div>
	);
}
