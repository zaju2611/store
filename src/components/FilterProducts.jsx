import Product from "../components/Product";
import Pagination from "../components/Pagination";
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
		<div className="pageContainer">
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
			/>
			<div className="productsList">{currentProducts}</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
			/>
		</div>
	);
}
