const EditableField = ({ isEditing, value, onChange }) => {
	return isEditing ? (
		<label className="promo-label label dataLabel" style={{ width: "35%" }}>
			<input type="text" className="promo" value={value} onChange={onChange} />
		</label>
	) : (
		<span>{value}</span>
	);
};

export default EditableField;
