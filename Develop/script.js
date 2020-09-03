// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Define Function generatePassword();
function generatePassword() {
  //make var for user prompt
  var userPrompt = prompt("How many characters would you like your password to be?");
  console.log(userPrompt)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
