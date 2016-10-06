const firebase = require('firebase');
const config = {
    apiKey: "INSERT HERE",
    authDomain: "INSERT HERE",
    databaseURL: "INSERT HERE",
    storageBucket: "INSERT HERE",
    messagingSenderId: "INSERT HERE"
};
const firebaseapp = firebase.initializeApp(config);

module.exports = firebaseapp;