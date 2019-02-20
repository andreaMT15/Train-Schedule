var config = {
  apiKey: "AIzaSyAfMaEuAHHQKg4j4xwBNOHipVZD7dr0JiU",
  authDomain: "project-2-2bde3.firebaseapp.com",
  databaseURL: "https://project-2-2bde3.firebaseio.com",
  projectId: "project-2-2bde3",
  storageBucket: "project-2-2bde3.appspot.com",
  messagingSenderId: "648185031848"
};
firebase.initializeApp(config);

var database = firebase.database();

//Submit Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  //Grabs admin train input
  var trainName = $("#train-name-input").val();
  var destinationName = $("#destination-input").val();
  var trainStart = moment($("#first-time-input").val(), "HH").format("HH:mm");
  var trainFrequency = $("#frequency-input").val();

  var newTrain = {
    name: trainName,
    destination: destinationName,
    trainStartTime: trainStart,
    frequency: trainFrequency
  };

  //uploads new train info to database
  database.ref().push(newTrain);

  //Clears Text Boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-time-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().trainStartTime;
  var trainFrequency = childSnapshot.val().frequency;

  // Train time converted
  var trainStartConverted = moment(trainStart, "hh:mm").subtract(1, "years");

  var timeDifference = moment().diff(moment(trainStartConverted), "minutes");

  var timeRemainder = timeDifference % trainFrequency;

  var minutesTillTrain = trainFrequency - timeRemainder;

  var nextTrain = moment()
    .add(minutesTillTrain, "minutes")
    .format("hh:mm A");

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    $("<td>").text(nextTrain),
    $("<td>").text(minutesTillTrain)
  );

  // Append new train info to schedule
  $("#train-table > tbody").append(newRow);
});
