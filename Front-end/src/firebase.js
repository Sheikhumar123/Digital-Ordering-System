import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyBtKz5tGM1SFW6HCqPUDDyG6GTI-amg408",
    authDomain: "fir-sendnotification-ae8e0.firebaseapp.com",
    projectId: "fir-sendnotification-ae8e0",
    storageBucket: "fir-sendnotification-ae8e0.appspot.com",
    messagingSenderId: "628436053006",
    appId: "1:628436053006:web:aaef14f9da61febc04205f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  export {firebase,database};