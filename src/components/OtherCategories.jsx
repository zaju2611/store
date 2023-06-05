import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import womenSlider from "../assets/images/womenSlider.jpg";
import electronic from "../assets/images/elektronika.jpg";
import furniture from "../assets/images/furniture.jpg";
import phoneSlider from "../assets/images/phoneSlider.jpg";
import men from "../assets/images/men.jpg";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function OtherCategories() {
	const categories = [
		{ id: 1, name: "Electronic", image: electronic, slug: "1" },
		{ id: 2, name: "Shoes", image: men, slug: "2" },
		{ id: 3, name: "Clothes", image: womenSlider, slug: "0" },
		{ id: 4, name: "Furniture", image: furniture, slug: "3" },
		{ id: 5, name: "Other", image: phoneSlider, slug: "4" },
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			const nextSlide = (currentSlide + 1) % categories.length;
			setCurrentSlide(nextSlide);
		}, 3000);

		return () => {
			clearInterval(timer);
		};
	}, [currentSlide, categories.length]);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const renderedCategories = categories.map((category) => {
		return (
			<Link key={category.id} to={`/${category.slug}`} onClick={handleClick}>
				<div style={{ margin: "0 5px", cursor: "pointer" }}>
					<img
						src={category.image}
						alt={category.name}
						style={{ height: "150px" }}
					/>
					<p
						className="legend"
						style={{
							position: "absolute",
							bottom: "0",
							background: "rgba(0,0,0,0.5)",
							color: "#fff",
							fontSize: "1rem",
							borderRadius: 0,
						}}>
						{category.name}
					</p>
				</div>
			</Link>
		);
	});

	return (
		<div className="otherCategories" style={{ marginBottom: "50px" }}>
			<h2
				style={{
					fontSize: "1.2rem",
					marginBottom: "10px ",
				}}>
				Our categories
			</h2>
			<Carousel
				showThumbs={false}
				showStatus={false}
				showArrows={true}
				infiniteLoop={true}
				centerMode={true}
				centerSlidePercentage={33.33}
				showIndicators={false}
				selectedItem={currentSlide}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<button
							type="button"
							onClick={onClickHandler}
							title={label}
							style={{
								position: "absolute",
								left: 0,
								top: "45%",
								zIndex: 2,
								border: "none",
								cursor: "pointer",
								background: "transparent",
								fontSize: "2rem",
								color: "#fff",
							}}>
							<GoChevronLeft />
						</button>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<button
							type="button"
							onClick={onClickHandler}
							title={label}
							style={{
								position: "absolute",
								right: 0,
								top: "45%",
								zIndex: 2,
								border: "none",
								cursor: "pointer",
								background: "transparent",
								fontSize: "2rem",
								color: "#fff",
							}}>
							<GoChevronRight />
						</button>
					)
				}
				onChange={(index) => setCurrentSlide(index)}>
				{renderedCategories}
			</Carousel>
		</div>
	);
}
