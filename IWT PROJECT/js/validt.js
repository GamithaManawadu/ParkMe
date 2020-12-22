function checkPassword(){
    var a = document.getElementById("pwd").value;
    var b = document.getElementById("cnfrmpwd").value;

    if(a == b)
    {
        alert("Matched!");
        return true;
    }
    else 
    {
        alert("Password Not Match!");
        return false;
    }
}
function enableButton(){
  if(document.getElementById('check').checked = true){
      document.getElementById('submitBtn').disabled = false;
      
  }
}