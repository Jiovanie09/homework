// create variable to get the id from the jumbotron//
var currentDay = document.getElementById("currentDay");
//make  variable for the current time using moment.js//
var m = moment().format("MMMM Do YYYY");
//append both variables
currentDay.append(m);
//create variable for new tr//
var workDayHrs = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"
];
workDayHrs.forEach((element, i) => {
  var tRow = $("<tr>");
  var timeD = $("<td>").text(element);
  var key = m + "@" + i;
  var textD = $("<td>").append($("<input type='text'>").attr("id", "hour" + i).val(localStorage.getItem(key)));
  var btnD = $("<td>").append($("<button>SAVE</button>").addClass("btn").attr("data-slot", i));
  tRow
    .append(timeD)
    .append(textD)
    .append(btnD);
  $("#myTable").append(tRow);
});

var submitText = $(".btn").on('click', function () {
  let index_of_hour = $(this).data('slot');
  let inputValue = $("#hour" + index_of_hour).val()
  var key = m + "@" + index_of_hour;
  localStorage.setItem(key, inputValue);
  console.log(localStorage.getItem(key));
  console.log(key);
});
function loadData() {

}
//get current time var for the colors//
var currentTime = moment().format('h:mm: a');




