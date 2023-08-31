import Product from "./Product";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

export default function SetProducts({ products }) {
	const [currentPage, setCurrentPage] = useState(1);
	
	const productPerPage = 12;

	useEffect(() => {
		setCurrentPage(1);
	}, [products]);

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


	if (renderedProducts.length === 0) {
		return (
			<div className="pageContainer">
				<p>Brak dostępnych produktów.</p>
			</div>
		);
	}

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
