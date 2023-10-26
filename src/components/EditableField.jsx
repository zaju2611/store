const EditableField = ({ isEditing, value, onChange }) => {
	return isEditing ? (
		<input type="text" value={value} onChange={onChange} />
	) : (
		<span>{value}</span>
	);
};

export default EditableField;
