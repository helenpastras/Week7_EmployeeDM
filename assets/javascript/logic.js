// Create a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

// Click Button changes what is stored in firebase
$("#click-button").on("click", function(event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get inputs
  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#date-input").val().trim();
  monthlyRate = $("#rate-input").val().trim();

})