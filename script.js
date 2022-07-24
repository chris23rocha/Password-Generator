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

includelc = confirm ("Press ok to include lowercase characters in password.");
includeuc = confirm ("Press ok to include uppercase characters in password.");
includenum = confirm ("Press ok to include numbers in password.");
includesymbols = confirm ("Press ok to include symbols in password.");

if (includelc === false && includeuc === false&& includenum === false&& includesymbols ===false) {
  alert ("Password should include at least one character type. Please include.");
  generatePassword ();
}

if (includelc){
  possChars = possChars + lcChars;
  console.log ("possChars = ", possChars);
}
if (includeuc){
  possChars = possChars + ucChars;
  console.log ("possChars = ", possChars);
}
if (includenum){
  possChars = possChars + num;
  console.log ("possChars = ", possChars);
}
if (includesymbols){
  possChars = possChars + symbols;
  console.log ("possChars = ", possChars);
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
