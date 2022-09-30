// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  //all characters available for use by default
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?/>.<,':;|}]{[+=_-)(*&^%$#@!~`";
  //determine length of password
  var characterQuantity = prompt ("How many characters long should the password be? It cannot be less than 8 characters or more than 128 characters.");
  //if password length is invalid, let the user know and restart the process
  if ((characterQuantity < 8) || (characterQuantity > 128)) {
    alert ("Please enter a valid password length.");
    generatePassword();
  }
  //upon confirm, these types of characters will be included in the generated password
  var characterLowercase = confirm ("Should lowercase letters be included?"); //lowercase
  if (characterLowercase == false) { //on deconfirm, remove the character type from the total characters pool
    characters = characters.replace("abcdefghijklmnopqrstuvwxyz", "");
  }
  var characterUppercase = confirm ("Should uppercase letters be included?"); //uppercase
  if (characterUppercase == false) { //on deconfirm, remove the character type from the total characters pool
    characters = characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
  }
  var characterNumber = confirm ("Should numbers be included?"); //numbers
  if (characterNumber == false) { //on deconfirm, remove the character type from the total characters pool
    characters = characters.replace("0123456789", "");
  }
  var characterSpecial = confirm ("Should special characters be included?"); //special characters
  if (characterSpecial == false) { //on deconfirm, remove the character type from the total characters pool
    characters = characters.replace("?/>.<,':;|}]{[+=_-)(*&^%$#@!~`", "");
  }
  //restart prompts if no character types are selected
  if ((characterLowercase == false) && (characterUppercase == false) && (characterNumber == false) && (characterSpecial == false)) {
    alert ("You must select at least one character type for your password.");
    generatePassword();
  }
  //loops character generation until requested character length is fulfilled
  for (var i = 0; i < characterQuantity; i++) {
    //.charAt selects a specific character at a given position in the 'characters' variable
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);