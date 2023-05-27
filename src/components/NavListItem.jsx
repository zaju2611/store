export default function NavListItem({ data, handleNavClick }) {
	return (
		<div className="item" onClick={handleNavClick}>
			{data}
		</div>
	);
}
