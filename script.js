//  HTML Selectors

const mainFormContainer = document.getElementById("main-form-container");
const outputDiv= document.getElementById("output");

// Get Varibles of Inputs
const userNameInput= document.getElementById("userName");
const emailInput= document.getElementById("email");
const phoneInput= document.getElementById("phone");
const passwordInput= document.getElementById("password");
// JavaScript Validation varibles
const userName2Input= document.getElementById("userName2")


// Check Box Inputs for Validation
const checkUserNameInput= document.getElementById("checkUserName");
const checkEmailInput= document.getElementById("checkEmail");
const checkPhoneNumberInput= document.getElementById("checkPhoneNumber");
const checkPasswordInput= document.getElementById("checkPassword");

// Page Submission Refresh (Event Listener)
mainFormContainer.addEventListener("submit",(function (event) {
    event.preventDefault();

    // JavaScript Validation for input field for username (length minimum 5 characters)


 userName2Input.addEventListener("input", (e) => {
    userName2Input.reportValidity();
    if (userName2Input.validity.tooShort){
       console.log("Not enough characters entered.");
    }else {
            console.log("Input is valid");
        }
    });


   


// Get the Outputs
outputDiv.innerHTML =
`<p> Username: ${userNameInput.value} <p>
<p> Username2: ${userName2Input.value} <p>
<p> Email-Address: ${emailInput.value} <p>
<p> Phone Number: ${phoneInput.value} <p>
<p> Password: ${passwordInput.value}<p>
<p> Check Box: ${checkUserNameInput.value}<p>
<p> Check Box: ${checkEmailInput.value}<p>
<p> Check Box: ${checkPhoneNumberInput.value}<p>    
<p> Check Box: ${checkPasswordInput.value}<p>`;  
 
outputDiv.style.display = "block";

//  Clear the Inputs
userNameInput.value='';
userName2Input.value='';
emailInput.value='';
phoneInput.value='';
passwordInput.value='';

checkUsernameInput.value='';
checkUsername2Input.value='';
checkEmailInput.value='';  
checkPhoneNumberInput.value='';
checkPasswordInput.value='';  

}));