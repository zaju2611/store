import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
	decrementProduct,
	incrementProduct,
} from "../store/reducers/productsSlice";

export default function ProductCounter({ product, onCountChange, className }) {
	const [count, setCount] = useState(product.quantity);
	const dispatch = useDispatch();

	useEffect(() => {
		setCount(product.quantity);
	}, [product.quantity]);

	const incrementCount = () => {
		setCount(count + 1);
		dispatch(incrementProduct(product));
		if (onCountChange) onCountChange(count + 1);
	};

	const decrementCount = () => {
		if (count > 1) {
			setCount(count - 1);
			dispatch(decrementProduct(product));
			if (onCountChange) onCountChange(count - 1);
		} else if (count === 1) {
			setCount(1);
			if (onCountChange) onCountChange(count);
		}
	};

	const handleInputChange = (event) => {
		const inputCount = parseInt(event.target.value);
		if (!isNaN(inputCount)) {
			setCount(inputCount);
			if (onCountChange) onCountChange(inputCount);
		}
	};

	return (
		<div className={`counterContainer ${className}`}>
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
