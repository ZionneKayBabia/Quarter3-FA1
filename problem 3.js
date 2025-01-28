var response;

if (confirm("Do you agree to share your personal information in our sight?"))
{

	console.log("Name: " + nickname + "\n" + "Height: " + heightFeet+ "'"+heightInches+"''"+ "\n"+ "Weight: " +weight+" lbs");
}

else
{
	console.log("User does not wish to share his/her information.");
}
