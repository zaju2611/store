import { useSelector, useDispatch } from "react-redux";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";
import { useState } from "react";
import EditableField from "../components/EditableField";

export default function Account() {
	const formData = useSelector((state) => state.data.formData);
	const addressData = useSelector((state) => state.data.addressData);
	const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [editedFormData, setEditedFormData] = useState({ ...formData });
	const [editedAddressData, setEditedAddressData] = useState({
		...addressData,
	});

	const handleSave = () => {
		dispatch(setFormData(editedFormData));
		dispatch(setAddressData(editedAddressData));
		setIsEditing(false);
	};

	return (
		<div className="pageContainer">
			<div
				style={{
					padding: "1rem",
					border: "1px solid var(--light-grey)",
					minWidth: "70%",
					margin: "1rem",
				}}>
				<h2 style={{ textAlign: "center", margin: ".5rem" }}>Your data</h2>
				<div className="dataContainer">
					<p className="dataText">Your name: </p>
					<EditableField
						isEditing={isEditing}
						value={editedFormData.name}
						onChange={(e) =>
							setEditedFormData({ ...editedFormData, name: e.target.value })
						}
					/>
					<EditableField
						isEditing={isEditing}
						value={editedFormData.surname}
						onChange={(e) =>
							setEditedFormData({
								...editedFormData,
								surname: e.target.value,
							})
						}
					/>
				</div>
				<div className="dataContainer">
					<p className="dataText">Your email: </p>
					<EditableField
						isEditing={isEditing}
						value={editedFormData.email}
						onChange={(e) =>
							setEditedFormData({ ...editedFormData, email: e.target.value })
						}
					/>
				</div>
				<div className="dataContainer">
					<p className="dataText">Phone number: </p>
					<EditableField
						isEditing={isEditing}
						value={editedFormData.phoneNumber}
						onChange={(e) =>
							setEditedFormData({
								...editedFormData,
								phoneNumber: e.target.value,
							})
						}
					/>
				</div>
				<div className="dataContainer">
					<p className="dataText">Address: </p>
					<EditableField
						isEditing={isEditing}
						value={editedAddressData.street}
						onChange={(e) =>
							setEditedAddressData({
								...editedAddressData,
								street: e.target.value,
							})
						}
					/>
					<EditableField
						isEditing={isEditing}
						value={editedAddressData.houseNumber}
						onChange={(e) =>
							setEditedAddressData({
								...editedAddressData,
								houseNumber: e.target.value,
							})
						}
					/>
				</div>
				<div className="dataContainer">
					<p className="dataText">Zip code: </p>
					<EditableField
						isEditing={isEditing}
						value={editedAddressData.zipCode}
						onChange={(e) =>
							setEditedAddressData({
								...editedAddressData,
								zipCode: e.target.value,
							})
						}
					/>
				</div>
				<div className="dataContainer">
					<p className="dataText">City: </p>
					<EditableField
						isEditing={isEditing}
						value={editedAddressData.city}
						onChange={(e) =>
							setEditedAddressData({
								...editedAddressData,
								city: e.target.value,
							})
						}
					/>
				</div>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-end",
					}}>
					{isEditing ? (
						<button
							className="accountBtns accBtns"
							onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					) : (
						<button
							className="accountBtns accBtns"
							onClick={() => setIsEditing(true)}>
							Edit
						</button>
					)}
					{isEditing && (
						<button className="accountBtns accBtns" onClick={handleSave}>
							Save
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
