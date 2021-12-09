import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDN8_ih-OIRrMYN_bfz64AFv8J8pYzxFeY",
    authDomain: "netflix-717c6.firebaseapp.com",
    projectId: "netflix-717c6",
    storageBucket: "netflix-717c6.appspot.com",
    messagingSenderId: "972132038825",
    appId: "1:972132038825:web:62fd20d996bcd85c2011b8",
    measurementId: "G-3BBQKBRHYX"
};

export const Firebase = firebase.initializeApp(firebaseConfig)