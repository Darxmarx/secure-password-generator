// Assignment Code
var generateBtn = document.querySelector("#generate");

//generating a password using different parameters
//prompt for how many characters (8-128 possible) user wants
//if criteria doesn't match, prompt reappears
//prompt for lowercase
//prompt for uppercase
//prompt for numeric
//prompt for special characters

/*define all characters total
var lowercaseSelection = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSelection = "0123456789";
var specialSelection = `~\`!@#$%^&*()_-+={[}]|:;"'<,>.?/`;
*/

var characterVariety = {
  lowercaseSelection: "abcdefghijklmnopqrstuvwxyz",
  uppercaseSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberSelection: "0123456789",
  specialSelection: `~\`!@#$%^&*()_-+={[}]|:;"'<,>.?/`
}

function generatePassword() {
  //determine length of password
  var characterQuantity = prompt ("How many characters long should the password be? It cannot be less than 8 characters or more than 128 characters.");
  //if password length is invalid, let the user know and restart the process
  if ((characterQuantity < 8) || (characterQuantity > 128)) {
    alert ("Please enter a valid password length.");
  }
  //upon confirm, these types of characters will be included in the generated password
  var characterLowercase = confirm ("Should lowercase letters be included?"); //lowercase
  if (characterLowercase == false) {
    delete characterVariety.lowercaseSelection;
  }
  var characterUppercase = confirm ("Should uppercase letters be included?"); //uppercase
  if (characterUppercase == false) {
    delete characterVariety.uppercaseSelection;
  }
  var characterNumber = confirm ("Should numbers be included?"); //numbers
  if (characterNumber == false) {
    delete characterVariety.numberSelection;
  }
  var characterSpecial = confirm ("Should special characters be included?"); //special characters
  if (characterSpecial == false) {
    delete characterVariety.specialSelection;
  }
  //restart prompts if no character types are selected
  if ((characterLowercase == false) && (characterUppercase == false) && (characterNumber == false) && (characterSpecial == false)) {
    alert ("You must select at least one character type for your password.");
    generatePassword();
  }
  //loops character generation until requested character length is fulfilled
  for (var i = 0; i < characterQuantity; i++) {

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

