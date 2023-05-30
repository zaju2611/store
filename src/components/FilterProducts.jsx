import Product from "../components/Product";
import { useState } from "react";

export default function Clothes({ products }) {
	const [currentPage, setCurrentPage] = useState(1);
	const productPerPage = 9;

	const renderedProducts = products.map((product, index) => {
		return <Product key={index} product={product} />;
	});

	const indexOfLastProduct = currentPage * productPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productPerPage;
	const currentProducts = renderedProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const totalPages = Math.ceil(renderedProducts.length / productPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div className="productsList">
			<div className="pagination">
				<button onClick={handlePrevPage} disabled={currentPage === 1}>
					Previous
				</button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<button onClick={handleNextPage} disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
			{currentProducts}{" "}
		</div>
	);
}
