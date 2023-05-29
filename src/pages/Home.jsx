import electronic from "../logo/elektronika.jpg";
import men from "../logo/men.jpg";
import women from "../logo/women.jpg";
import jewelery from "../logo/obraczki.jpg";
import ProductHome from "../components/ProductHome";
import SlideShow from "../components/SlideShow";

import menSlider from "../logo/menSlider.jpg";
import jewelerySlider from "../logo/jewelerySlider.jpg";
import womenSlider from "../logo/womenSlider.jpg";
import phoneSlider from "../logo/phoneSlider.jpg";

export default function App({ products }) {
	const categories = [
		{ name: "Electronic", image: electronic, path: 2 },
		{ name: "Men's clothing", image: men, path: 0 },
		{ name: "Women's clothing", image: women, path: 3 },
		{ name: "Jewelery", image: jewelery, path: 1 },
	];

	const slideshowImages = [
		{ src: menSlider, alt: "men's clothes" },
		{ src: jewelerySlider, alt: "jewelery" },
		{ src: womenSlider, alt: "women's clothes" },
		{ src: phoneSlider, alt: "electronic" },
	];

	return (
		<div className="pageContainer">
			<div className="productContainer">
				{categories.map((category, index) => (
					<ProductHome key={index} category={category} />
				))}
			</div>
			<SlideShow images={slideshowImages} />
		</div>
	);
}
