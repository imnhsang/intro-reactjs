import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyDn-nyMuDG7j3p46nx0w4Vk-E1OfjnW_I4",
	authDomain: "notes-c0c9b.firebaseapp.com",
	databaseURL: "https://notes-c0c9b.firebaseio.com",
	projectId: "notes-c0c9b",
	storageBucket: "notes-c0c9b.appspot.com",
	messagingSenderId: "627510948006",
	appId: "1:627510948006:web:b1209fb255f32702d7c467",
	measurementId: "G-45TLNB64VT"
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
