let email = document.getElementById("email");
let pass = document.getElementById("pass");
let error = document.getElementById("error");


function validate(){
    
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?&/
    if(regexp.test(email.value)){

        error.innerHTML = "valid";
        error.style.color = "green";
        
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}