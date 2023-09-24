// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDHzSmIU84wVzPCUQJ2Fi8mFFg0R7QW0fc",
	authDomain: "zajustore-fedee.firebaseapp.com",
	projectId: "zajustore-fedee",
	storageBucket: "zajustore-fedee.appspot.com",
	messagingSenderId: "526447165572",
	appId: "1:526447165572:web:db3aed04da1452d87642d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
