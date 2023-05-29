import React, { useState, useEffect } from "react";

export default function SlideShow({ images }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="slideshow">
			{images.map((image, index) => (
				<img
					key={index}
					src={image.src}
					alt={image.alt}
					className={index === currentImageIndex ? "active" : ""}
				/>
			))}
		</div>
	);
}
