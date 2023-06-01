import { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function ImageSlider({ images }) {
	const [sliderData, setSliderData] = useState(images[0]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		const slider = images[index];
		setSliderData(slider);
		setCurrentIndex(index);
	};

	const handleNextImg = () => {
		let index = currentIndex;
		if (index < images.length - 1) {
			index++;
		} else {
			index = 0;
		}
		const slider = images[index];
		setSliderData(slider);
		setCurrentIndex(index);
	};

	const handlePrevImg = () => {
		let index = currentIndex;
		if (index > 0) {
			index--;
		} else {
			index = images.length - 1;
		}
		const slider = images[index];
		setSliderData(slider);
		setCurrentIndex(index);
	};

	const renderedImages = images.map((image, index) => {
		const isActive = index === currentIndex;
		const imageClassName = isActive ? "sliderImage active" : "sliderImage";
		return (
			<img
				key={index}
				src={image}
				alt={index}
				height="70"
				width="100px"
				onClick={() => handleClick(index)}
				className={imageClassName}
			/>
		);
	});

	return (
		<div>
			<GoChevronLeft onClick={() => handlePrevImg()} />
			<img src={sliderData} alt={sliderData} />
			<GoChevronRight onClick={() => handleNextImg()} />
			{renderedImages}
		</div>
	);
}
