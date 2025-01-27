var firstName=prompt("Enter your first name: ");
var lastName=prompt("Enter your last name: ");
var birthYear=prompt("Enter your birth year: ");

const d = new Date();
let year = d.getFullYear();
var age= year-parseInt(birthYear);
var message= document.getElementById(message);
 
document.getElementById(message).innerHTML=document.write("Hello "+ firstName+ " " + lastName+ "! How does it feel to be "+ age+ " years old?");
