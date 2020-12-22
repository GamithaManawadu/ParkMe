// Below function Executes on click of login button.

function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pwd").value;

    if ( username == "dri123" && password == "test@demo"){
       alert ("Login successfully");
        window.location = "home.html"; // Redirecting to other page.
        EventTarget="_balnk";
        return false;
    }
    else{
        alert("The username or password you have entered is incorrect. Please check and try again later!");
    return false;
}
}
