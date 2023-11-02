import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { setFormData, setAddressData } from "../store/reducers/dataSlice";
import { setLogData } from "../store/reducers/loginSlice";

const signIn = async (auth, email, password, dispatch) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			const db = ref(getDatabase());
			const userRef = child(db, `users/${email.replace(".", "_")}`);

			try {
				const snapshot = await get(userRef);
				if (snapshot.exists()) {
					const userDataFromDatabase = snapshot.val();
					const {
						name,
						surname,
						email,
						phoneNumber,
						street,
						houseNumber,
						city,
						zipCode,
					} = userDataFromDatabase;
					dispatch(setFormData({ name, surname, email, phoneNumber }));
					dispatch(setAddressData({ street, houseNumber, city, zipCode }));

					if (name) {
						const userData = {
							name: name,
						};
						sessionStorage.setItem("user", JSON.stringify(userData));
						dispatch(setLogData(true));
					}
				}
			} catch (error) {
				console.error("Error fetching user data from Firebase: ", error);
				dispatch(setLogData(false));
			}
		})
		.catch((error) => {
			console.log(error);
			dispatch(setLogData(false));
		});
};

export default signIn;
