// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnOGRVfdTitXYzRQPaLjFKsWyq_Sd0gUQ",
    authDomain: "schooldaywork.firebaseapp.com",
    databaseURL: "https://schooldaywork.firebaseio.com",
    projectId: "schooldaywork",
    storageBucket: "schooldaywork.appspot.com",
    messagingSenderId: "488651173054"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

// Click Button changes what is stored in firebase
$(document).ready(function){
    $("#btn-primary").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();
       

  // Get inputs
  name = $("#add-name").val().trim();
  role = $("#add-role").val().trim();
  startDate = $("#add-date").val().trim();
  monthlyRate = $("#add-rate").val().trim();
})

database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate:monthlyRate
    
  });

}
