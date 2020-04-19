// let email = document.getElementById("email");
// let pass = document.getElementById("pass");
// let error = document.getElementById("error");
// let phnum = document.getElementById("phnum");

// function validate(){
    
//     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.)& /
//     if(regexp.test(email.value)){

//         error.innerHTML = "valid";
//         error.style.color = "green";
        
//         return true;
//     }
//     else{
//         error.innerHTML = "Invalid";
//         error.style.color = "red";
//         email.style.border = "2px red ";
//         return false;
//     }
// }
// function validate(){
//     if(email.value.trim()==""||pass.value.trim()==""){
//         alert("fields cannot be empty");
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// function validate(){
//     if(phnum.length!=10){
//         alert("phone number must write 10 digits");
//         return false;
//     }
//     else{
//         return true;
//     }
// }



let email = document.getElementById("email");
let pwd = document.getElementById("pass");
let name = document.getElementById("name");
let dob = document.getElementById("dob");
let phone = document.getElementById("phnum");


function validate()
{
    
    let regexp=/^([A-Za-z0-9/.-]+)@([A-Za-z0-9/-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let num=/^([0-9]{10,10})$/;
    
    

    if((regexp.test(email.value)) && (num.test(phnum.value)))
    {
        return validate();
    }
    else{
        alert("invalid email or phone number or password");
        return false;
    }
}