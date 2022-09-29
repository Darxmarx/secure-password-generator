// Assignment Code
var generateBtn = document.querySelector("#generate");

//generating a password using different parameters
//prompt for how many characters (8-128 possible) user wants
//if criteria doesn't match, prompt reappears
//prompt for lowercase
//prompt for uppercase
//prompt for numeric
//prompt for special characters

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

