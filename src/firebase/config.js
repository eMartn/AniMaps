import * as firebase from './firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9kLN-2q-JFFRGNZFGxhYzcT5oThMEmSg",
    authDomain: "animaps-5e447.firebaseapp.com",
    projectId: "animaps-5e447",
    storageBucket: "animaps-5e447.appspot.com",
    messagingSenderId: "372853502027",
    appId: "1:372853502027:web:0148940f32371b8f759dce"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();    // starts storage service
const projectFirestore = firebase.firestore();    // starts firestore service
	
export { projectStorage, projectFirestore };
