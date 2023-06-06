import { useNavigate } from "react-router-dom";

export function useRedirection(product) {
	const navigate = useNavigate();

	const redirection = () => {
		navigate(`/product/${product.id}`, { state: { product } });
	};

	return redirection;
}
