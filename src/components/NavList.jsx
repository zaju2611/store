import NavListItem from "./NavListItem";

export default function NavList({ categories, handleNavClick }) {
	const renderedCategories = categories.map((category, index) => {
		if (index === 0) {
			return (
				<NavListItem
					key={index}
					data={category}
					handleNavClick={handleNavClick}
					isFirstChild={true}
				/>
			);
		} else {
			return <NavListItem key={index} data={category} />;
		}
	});

	return <div className="navList">{renderedCategories}</div>;
}
