import { useSelector, useDispatch } from "react-redux";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";
import { useState } from "react";
import EditableField from "../components/EditableField";
import OrderItem from "../components/OrderItem";
import blouse from "../assets/images/bluzka.jpg";

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

	const editFields = (fields, data, setDataFunction) => {
		return fields.map((field) => (
			<div className="dataContainer" key={field.stateKey}>
				<p className="dataText">{field.label}: </p>
				<EditableField
					isEditing={isEditing}
					value={data[field.stateKey]}
					onChange={(e) =>
						setDataFunction({ ...data, [field.stateKey]: e.target.value })
					}
				/>
			</div>
		));
	};

	const orders = [
		{
			orderNumber: "12345",
			date: "2023-10-28",
			price: 100,
			products: [
				{
					name: "Product A",
					quantity: 2,
					unitPrice: 25,
					image: blouse,
				},
				{
					name: "Product B",
					quantity: 3,
					unitPrice: 15,
					image: blouse,
				},
			],
		},
		{
			orderNumber: "67890",
			date: "2023-10-29",
			price: 150,
			products: [
				{
					name: "Product C",
					quantity: 4,
					unitPrice: 30,
					image: blouse,
				},
				{
					name: "Product D",
					quantity: 1,
					unitPrice: 50,
					image: blouse,
				},
			],
		},
	];

	const dataFields = [
		{ label: "Your name", stateKey: "name" },
		{ label: "Your surname", stateKey: "surname" },
		{ label: "Your email", stateKey: "email" },
		{ label: "Phone number", stateKey: "phoneNumber" },
	];

	const addressFields = [
		{ label: "Street", stateKey: "street" },
		{ label: "House number", stateKey: "houseNumber" },
		{ label: "Zip code", stateKey: "zipCode" },
		{ label: "City", stateKey: "city" },
	];

	const editedDataFields = editFields(
		dataFields,
		editedFormData,
		setEditedFormData
	);
	const editedAddressFields = editFields(
		addressFields,
		editedAddressData,
		setEditedAddressData
	);

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
				{editedDataFields}
				{editedAddressFields}
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
			<div
				style={{
					padding: "1rem",
					border: "1px solid var(--light-grey)",
					minWidth: "70%",
					margin: "1rem",
				}}>
				<OrderItem orders={orders} />
			</div>
		</div>
	);
}
