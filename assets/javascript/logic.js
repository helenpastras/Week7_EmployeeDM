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
$(document).ready(function() {
    $(".btn-primary").on("click", function(event) {
    // Prevent the page from refreshing
        event.preventDefault();
        
        // Get inputs
        name = $("#add-name").val().trim();
        role = $("#add-role").val().trim();
        startDate = moment($("#add-date").val().trim(), "MM/DD/YYYY");
        monthlyRate = $("#add-rate").val().trim();

        var newEmp ={
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate:monthlyRate
        }

        database.ref().push(newEmp);

        console.log(newEmp.name);
        console.log(newEmp.role);
        console.log(newEmp.startDate);
        console.log(newEmp.monthlyRate);
    

    })
});  

database.ref().on("child-added", function(childSnapshot){
    console.log(childSnapshot.val());

    // ?Store everythingin variables
    var name =childSnapshot.val().name;
    var role =childSnapshot.val().role;
    var startDate =childSnapshot.val().startDate;
    var monthlyRate =childSnapshot.val().monthlyRate;

// missing code for moment.js to calculate time worked 


// missing code to calculate the earnings since startDate
    var empBilled = empMonths * empRate;
    console.log(empBilled);

// add varable to add a row that will then be appended with the new data we just collected
    var newRow =$("<tr>").append(
        $()
    )

})
