//function to validate the user
function validate(){
    var userName = document.getElementById('user-id').value;
    var password = document.getElementById('pass').value;
    var attempts = 0;

    if(userName == 'PAT0123456789' && password == 'test@demo' && attempts <= 3){
        alert("Login Successful!!");
        window.location="home.html";
        EventTarget="_balnk";

    }
    else if(userName ==null || password == null){
        alert("You have not entered an username of password");
    }
    else{
        alert("The user-name or password you have entered is incorrct. Please check and try again later.")

        return false;
    }
}

//email1 function
function email1(){
    window.open('mailto:userresponce@meditech.org?subject=USER-RESPONCE');
}
function email1(){
    window.open('mailto:userresponce@meditech.org?subject=USER-RESPONCE');
}

