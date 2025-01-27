var nickname= prompt("Enter your nickname: ");
var height= prompt("Enter your height: ");
var weight= prompt("Enter your weight: ");

var height= parseInt(height)/12;
var heightInches= parseInt(height)%12;

var weight= parseInt(weight)*2.205;

alert("Name: " + nickname + "/br" + "Height: " + height+ "'"+heightInches+" "+ "<br>"+ "Weight: " +weight+"lbs");
