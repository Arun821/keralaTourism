let name = document.getElementById("uname").value;
let psd = document.getElementById("pswd").value;

function validate(){
    if((name=="") || (psd=="")){
     document.getElementById("pr").innerHTML = "Invalid inputs, please enter a valid email and password";
     return false
    }   
    else{
        return true;
    }

var x = document.getElementById("head1").value;

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
    else if(password.length==8){
        document.getElementById("p4").innerHTML = "Password strength is poor";
        document.getElementById("p4").style.color = "red";
        return false;
    }
    else if(password.length==12){
        document.getElementById("p4").innerHTML = "Password strength is normal";
        document.getElementById("p4").style.color = "orange";
        return false;
    }
    else if(password.length==16){
        document.getElementById("p4").innerHTML = "Password strength is strong";
        document.getElementById("p4").style.color = "green";
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
    var strongRegex = new RegExp("^(?=.{16,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{12,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("pass");
     if (strongRegex.test(pwd.value)) {
    strength.innerHTML = "<span style='color:green'>Strong!</span>";
    } else if (mediumRegex.test(pwd.value)) {
    strength.innerHTML = "<span style='color:orange'>Medium!</span>";
    } else { 
    strength.innerHTML = "<span style='color:red'>Weak!</span>";
    }
    }}