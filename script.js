// Assignment code here

function generatePassword() {
let lcChars = "abcdefghijklmnopqrstuwxyz";
let ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let symbols = "*!$#%^";
let possChars = "";
let password = "";
let includelc = false;
let includeuc = false;
let includenum = false;
let includesymbols = false;
let passwordLength = 0;

passwordLength = parseInt(prompt("provide password length between 8 and 128"));
console.log ("passwordLength = ", passwordLength);

if (passwordLength < 8 || passwordLength > 128) { 
alert ("password length must be between 8 and 128. Please try again.");
generatePassword ();
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
