import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from "../store";

export default function ProductCounter({ product }) {
	const [count, setCount] = useState(product.quantity);
	const dispatch = useDispatch();

	const incrementCount = () => {
		setCount(count + 1);
		dispatch(incrementProduct(product));
	};

	const decrementCount = () => {
		if (count > 1) {
			setCount(count - 1);
			dispatch(decrementProduct(product));
		} else if (count === 1) {
			setCount(1);
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
