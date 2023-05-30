import electronic from "../images/elektronika.jpg";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import furniture from "../images/furniture.jpg";
import CategoryHomePage from "../components/CategoryHomePage";
import SlideShow from "../components/SlideShow";

import menSlider from "../images/menSlider.jpg";
import furnitureSlider from "../images/furnitureSlider.jpg";
import womenSlider from "../images/womenSlider.jpg";
import phoneSlider from "../images/phoneSlider.jpg";

export default function Home({ products }) {
	const categories = [
		{ name: "Electronic", image: electronic, path: 1 },
		{ name: "Shoes", image: men, path: 3 },
		{ name: "Clothes", image: women, path: 0 },
		{ name: "Furniture", image: furniture, path: 2 },
	];

	const slideshowImages = [
		{ src: menSlider, alt: "shoes" },
		{ src: furnitureSlider, alt: "furniture" },
		{ src: womenSlider, alt: "women's clothes" },
		{ src: phoneSlider, alt: "electronic" },
	];

	return (
		<div className="pageContainer">
			<div className="productContainer">
				{categories.map((category, index) => (
					<CategoryHomePage key={index} category={category} />
				))}
			</div>
			<SlideShow images={slideshowImages} />
		</div>
	);
}
