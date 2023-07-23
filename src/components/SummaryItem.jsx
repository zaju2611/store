import { MdDelete } from "react-icons/md";
import ProductCounter from "../components/ProductCounter";
import { useRedirection } from "../hooks/useRedirection";
import { useRemoveProduct } from "../hooks//useRemoveProduct";

export default function SummaryItem({ product }) {
	const redirection = useRedirection(product);
	const handleRemoveProduct = useRemoveProduct(product);

	return (
		<>
			<tr>
				<td className="productTableSection">
					<MdDelete
						className="deleteIcon"
						onClick={() => handleRemoveProduct(product)}
					/>

					<img
						src={product.images[0]}
						alt="cart item"
						className="itemTableImage"
						onClick={redirection}
					/>
					<h4 className="productTable" onClick={redirection}>
						{product.title}
					</h4>
				</td>
				<td>
					<ProductCounter className="counterTableSection" product={product} />
				</td>
				<td className="priceTableSection">{product.price},00 zł</td>
				<td className="totalTableSection">
					<p className="price">
						<span className="mainPrice">
							{product.quantity * product.price},00 zł
						</span>
					</p>
				</td>
			</tr>
		</>
	);
}
