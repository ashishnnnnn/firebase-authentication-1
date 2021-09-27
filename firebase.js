const firebaseConfig = {
  apiKey: "AIzaSyA7VCdAkYz087vJmgCtfQ49ReDTn0b65bI",
  authDomain: "fir-project-bd9cb.firebaseapp.com",
  projectId: "fir-project-bd9cb",
  storageBucket: "fir-project-bd9cb.appspot.com",
  messagingSenderId: "837654469367",
  appId: "1:837654469367:web:2a9c46d4eb4f46b2dd91f2",
  measurementId: "G-JRXX4SVHJL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var app = firebase.auth();
var db = firebase.firestore();
