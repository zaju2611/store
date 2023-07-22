import { useDispatch } from "react-redux";
import { removeProduct } from "../store";

export function useRemoveProduct(product) {
	const dispatch = useDispatch();

	const handleRemoveProduct = () => {
		dispatch(removeProduct(product.id));
	};

	return handleRemoveProduct;
}
