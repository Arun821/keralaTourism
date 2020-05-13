/*..................login....................*/
function submitHere(){
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;
    if(email=="" || password==""){
        alert("email or password is empty");
        return false;
    }
    else{
        window.location = "https://www.ekeralatourism.net/";
        return true;
    }
}




//...................Sign Up........................//
function validation(){

let fulnm = document.getElementById("nam").value;
let email = document.getElementById("mail").value; 
let phone = document.getElementById("phn").value;
let password = document.getElementById("pass").value;
let cpassword = document.getElementById("cpass").value;
document.getElementById("strength").setAttribute("hidden", true);
    if(fulnm==""){
    document.getElementById("p1").innerHTML = "Please enter your full name";
    return false;
    }
    else if(email==""){
        document.getElementById("p2").innerHTML = "Enter a valid Email id";
        return false;
    }
    else if(phone==""){
        document.getElementById("p3").innerHTML = "Phone number must contain 10 digits";
        return false;
    }
    else if(isNaN(phone)){
        document.getElementById("p3").innerHTML = "Enter the valid Mobile Number(Like : 9566137117)";
        return false;
    }
    else if(phone.length!=10){
        document.getElementById("p3").innerHTML = "Phone number must contain 10 digits";
        return false;
    }
    else if(password==""){
        document.getElementById("p4").innerHTML = "Enter your password";
        return false;
    }
    else if(password.length<=8){
        document.getElementById("p4").innerHTML = "Minimum 8 charaters required";
        return false;
    }
    else if(password.search(/[0-9]/)==-1){
        document.getElementById("p4").innerHTML = "Password must contain atleast one number";
        return false;
    }
    else if(password.search(/[a-z]/)==-1){
        document.getElementById("p4").innerHTML = "Password must contain atleast one lowercase letter";
        return false;
    }
    else if(password.search(/[A-Z]/)==-1){
        document.getElementById("p4").innerHTML = "Password must contain atleast one uppercase letter";
        return false;
    }
    
    else if(cpassword=="" || cpassword!=password){
        document.getElementById("p5").innerHTML = "Confirm your password";
        return false;
    }
    
    else{
        return true;
    }
}    
    
function passwordChanged() {
    var strength = document.getElementById("strength");
    var strongRegex = new RegExp("^(?=.{16,})");
    var mediumRegex = new RegExp("^(?=.{12,})");
    var enoughRegex = new RegExp("(?=.{8,})");
    var pwd = document.getElementById("pass");
     if (strongRegex.test(pwd.value)) {
    strength.innerHTML = "<span style='color:green'>Strong!</span>";
    } else if (mediumRegex.test(pwd.value)) {
    strength.innerHTML = "<span style='color:orange'>Medium!</span>";
    } 
    else { 
    strength.innerHTML = "<span style='color:red'>Weak!</span>";
    }
}

    
