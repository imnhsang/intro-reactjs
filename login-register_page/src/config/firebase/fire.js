import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDZuXTz_u0apbYGJ6ic8HgwhIicZMl4YLw',
	authDomain: 'login-register-page-f79cc.firebaseapp.com',
	databaseURL: 'https://login-register-page-f79cc.firebaseio.com',
	projectId: 'login-register-page-f79cc',
	storageBucket: 'login-register-page-f79cc.appspot.com',
	messagingSenderId: '387356109858',
	appId: '1:387356109858:web:5a78fae01e40e288ad2e7b',
	measurementId: 'G-YF4JNHKG66',
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
