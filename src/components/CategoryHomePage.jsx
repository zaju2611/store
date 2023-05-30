import { Link } from "react-router-dom";

export default function ProductHome({ category }) {
	return (
		<Link to={`/${category.path}`} className="customBox">
			<img src={category.image} alt={category.name} />
			<p>{category.name}</p>
		</Link>
	);
}
