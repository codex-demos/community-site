// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9dwC0FUqMLEL6cFArZOrcanF6cxsbMDk',
  authDomain: 'todo-test-a09b2.firebaseapp.com',
  projectId: 'todo-test-a09b2',
  storageBucket: 'todo-test-a09b2.appspot.com',
  messagingSenderId: '1017452605758',
  appId: '1:1017452605758:web:a63bcfd9f970842d5f7c6f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
