//  HTML Selectors

const mainFormContainer = document.getElementById("mainFormContainer");
const outputDiv= document.getElementById("output");

// Get Varibles of Inputs
const userNameInput= document.getElementById("userName");
const emailInput= document.getElementById("email");
const phoneInput= document.getElementById("phone");
const passwordInput= document.getElementById("password");

const checkUserName= document.getElementById("checkUserName");
const checkEmail= document.getElementById("checkEmail");
const checkPhoneNumber= document.getElementById("checkPhoneNumber");
const checkPassword= document.getElementById("checkPassword");
const text = document.getElementById("text");

// Page Submission Refresh
mainFormContainer.addEventListener("submit",function(event) {
    event.preventDefault();

    // Check for checked check boxes
    if (!checkUserName.checked || !checkEmail.checked || !checkPhoneNumber.checked || !checkPassword.checked) {
    alert("Check all the check boxes before submitting!");
    return;
}



// Page Submission Refresh
mainFormContainer.addEventListener("submit",function(event) {
    event.preventDefault();


// Get the Outputs
outputDiv.innerHTML =
`<p> Username: ${userNameInput.value} <p>
<p> Email-Address: ${emailAddressInput.value} <p>
<p> Phone Number: ${phoneNumberInput.value} <p>
<p> Password: ${passwordInput.value}<p>
<p> Check Box: ${checkUserNameInput.value}<p>
<p> Check Box: ${checkEmailInput.value}<p>
<p> Check Box: ${checkPhoneNumberInput.value}<p>    
<p> Check Box: ${checkPasswordInput.value}<p>`;  
 
outputDiv.style.display = "block";

//  Clear the Inputs
userNameInput.value='';
emailAddressInput.value='';
phoneNumberInput.value='';
passwordInput.value='';
checkUsernameInput.value='';
checkEmailInput.value='';  
checkPhoneNumberInput.value='';
checkPasswordInput.value='';  

})   

});