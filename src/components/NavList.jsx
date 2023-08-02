import NavListItem from "./NavListItem";
import { AiFillPhone } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCloseAll } from "../hooks/useCloseAll";
export default function NavList({ categories, handleNavClick }) {
	const { handleClose } = useCloseAll();
	const renderedCategories = categories.map((category, index) => {
		if (index === 0) {
			return (
				<div key={index} className="item" onClick={handleNavClick}>
					{category.label}
				</div>
			);
		} else {
			return (
				<NavListItem
					key={index}
					data={category}
					handleNavClick={handleNavClick}
				/>
			);
		}
	});

	return (
		<div className="navContainer">
			<div className="navList">{renderedCategories}</div>
			<div className="navIcons">
				<Link to="/account" onClick={handleClose}>
					<GoPerson />
				</Link>

				<Link to="/summary" onClick={handleClose}>
					<BiShoppingBag />
				</Link>
				<Link to="/favourite" onClick={handleClose}>
					<MdFavoriteBorder />
				</Link>
				<Link to="/contact" onClick={handleClose}>
					<AiFillPhone />
				</Link>
			</div>
		</div>
	);
}
