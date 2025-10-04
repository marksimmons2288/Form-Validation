//  HTML Selectors

const mainFormContainer = document.getElementById("main-form-container");
const outputDiv= document.getElementById("output");

// Get Varibles of Inputs
const userNameInput= document.getElementById("userName");
const emailInput= document.getElementById("email");
const phoneInput= document.getElementById("phone");
const passwordInput= document.getElementById("password");

// Check Box Inputs for Validation
const checkUserNameInput= document.getElementById("checkUserName");
const checkEmailInput= document.getElementById("checkEmail");
const checkPhoneNumberInput= document.getElementById("checkPhoneNumber");
const checkPasswordInput= document.getElementById("checkPassword");


    // JavaScript Validation varibles
const form = document.getElementById('form');
const userName2Input= document.getElementById("userName2");
const errorElement = document.getElementById('error');

  // JavaScript Validation for input field for username (length minimum 4 characters)

// Page Submission (Event Listener)
form.addEventListener("submit",(function (event) {
    event.preventDefault();
    errorElement.textContent = "";

    const userName2 = userName2Input.value.trim();


    if (userName2.length < 4) {
        errorElement.textContent =('UserName must be at least 4 characters')}
        else {
            errorElement.textContent = "UserName is valid";
        }
            // Attempted to manually toggle through and add CSS to input field without using HTML (Failed)
    userName2Input.addEventListener("input",() => {const value = userName2Input.value.trim();

        if (value.length >= 4) {
            userName2Input.classList.add("valid");
            userName2Input.classList.remove("invalid");
         } else {
            userName2Input.classList.add("invalid");
            userName2Input.classList.remove("valid");

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