//Get a date and time
let timeNow = new Date();
console.log(timeNow);

//Get an hour
let timeHour = timeNow.getHours();
console.log(timeHour);

//Include PM, if timeHour from 12 onwards otherwise AM
let suffix = (timeHour >= 12)? 'PM' : 'AM';
console.log(suffix);

//Subtract 12 from hours if it is greater than 12
timeHour = (timeHour > 12)? timeHour - 12: timeHour;

//If 00 then it is 12 am
timeHour = (timeHour == "00")?12 : timeHour;

console.log(timeHour);
var textNine = $("#text9").text();
console.log(textNine);
//Set the color for time before now
//$(document).ready(function() { 
//if($('.time').val() ==  {
  //  $("textarea").css("background-color", "red");
//}
//});
