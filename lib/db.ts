import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDz8OS8Ha4-GVI9pk_iG22WSDlyK7YPVFY',
	authDomain: 'idle-devs.firebaseapp.com',
	databaseURL: 'https://idle-devs.firebaseio.com',
	projectId: 'idle-devs',
	storageBucket: 'idle-devs.appspot.com',
	messagingSenderId: '771431146971',
	appId: '1:771431146971:web:11340c4eeaa469fa',
}

// Initialize Firebase
const fb = initializeApp(firebaseConfig)
export const db = getFirestore(fb)
