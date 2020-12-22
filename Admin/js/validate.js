// Below function Executes on click of login button.

function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pwd").value;

    if ( username == "dri456" && password == "test@demo"){
        alert ("Login successfully");
        window.location = "panel.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("The username or password you have entered is incorrect. Please check and try again later!");
    return false;
}
}
