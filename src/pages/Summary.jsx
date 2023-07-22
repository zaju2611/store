import { useSelector } from "react-redux";
import { selectProducts } from "../store";

import SummaryItem from "../components/SummaryItem";

export default function Summary() {
	const productList = useSelector(selectProducts);

	const renderedProducts = productList.map((product) => {
		return <SummaryItem key={product.id} product={product} />;
	});

	return (
		<div className="pageContainer summaryContainer">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>{renderedProducts}</tbody>
			</table>
		</div>
	);
}
