var firebaseConfig = {
    apiKey: "AIzaSyDfCMfUQAjjzt2BeAkhcr1MeXIHBl1VpvE",
    authDomain: "kwitter-pro-9dfe3.firebaseapp.com",
    projectId: "kwitter-pro-9dfe3",
    storageBucket: "kwitter-pro-9dfe3.appspot.com",
    messagingSenderId: "1049806169263",
    appId: "1:1049806169263:web:6b50b0fea1eaabff73a05a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();