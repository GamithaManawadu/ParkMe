
function validate()
{
	var FirstName = document.getElementById("fname");
	var LastName = document.getElementById("lname");
	var EmailAddress = document.getElementById("Email");
	var passwords = document.getElementById("passw");
	
	
	if(FirstName.value =="" || LastName.value =="" || EmailAddress.value =="" || passwords.value =="")
	{
		alert("No blank values allowed");
		return false;
	}
	else
	{
		true;
	}
}
