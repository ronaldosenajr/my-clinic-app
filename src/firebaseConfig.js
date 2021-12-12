import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBfQEHu8qH7VKOf3s7cZOZBL8ne1xvM7Jg',
  authDomain: 'officeschedule-9fec7.firebaseapp.com',
  projectId: 'officeschedule-9fec7',
  storageBucket: 'officeschedule-9fec7.appspot.com',
  messagingSenderId: '629720748716',
  appId: '1:629720748716:web:088354489039f7543b8509',
  measurementId: 'G-2NTN198WZR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export default authentication;
