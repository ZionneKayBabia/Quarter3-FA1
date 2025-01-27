var response;

if (confirm("Do you agree to share your personal information in our sight?"))
{
	var nickname= prompt("Enter your nickname: ");
	var height= prompt("Enter your height: ");
	var weight= prompt("Enter your weight: ");

	var heightFeet= Math.floor(height/12);
	var heightInches= parseInt(height)%12;

	var weight= parseInt(weight)*2.205;

	console.log("Name: " + nickname + "\n" + "Height: " + heightFeet+ "'"+heightInches+"''"+ "\n"+ "Weight: " +weight+" lbs");
}

else
{
	console.log("User does not wish to share his/her information."):
}
