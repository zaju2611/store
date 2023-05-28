import { Link } from "react-router-dom";

export default function NavListItem({ data, handleNavClick }) {
	return (
		<Link className="item" to={data.path} onClick={handleNavClick}>
			<div>{data.label}</div>
		</Link>
	);
}
