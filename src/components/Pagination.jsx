import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Pagination({
	currentPage,
	totalPages,
	onNextPage,
	onPrevPage,
}) {
	const handleNextPage = () => {
		onNextPage();
		scrollToTop();
	};

	const handlePrevPage = () => {
		onPrevPage();
		scrollToTop();
	};

	const scrollToTop = () => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}, 0);
	};

	return (
		<div className="pagination">
			<button
				className="paginationButton"
				onClick={handlePrevPage}
				disabled={currentPage === 1}>
				<GrFormPrevious />
			</button>
			<span className="currentPage">
				{currentPage}/{totalPages}
			</span>
			<button
				className="paginationButton"
				onClick={handleNextPage}
				disabled={currentPage === totalPages}>
				<GrFormNext />
			</button>
		</div>
	);
}
