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
  console.log(userPrompt);

  //Need if/else statement for telling user to pick number between lower case
  if (userPrompt < 8 || userPrompt > 128) {
    alert("Number must be between 8 and 128");
  }

  //Make variable called upperCased letters
  var upperCased = confirm("Click OK to confirm upper case letters");
  console.log(upperCased);

  //Make variable called lowerCased letters
  var lowerCased = confirm("Click OK to confirm lower case letters");
  console.log(lowerCased);

  //Make variable called numbers
  var numCharacters = confirm("Click OK to confirm numeric characters");
  console.log(numCharacters);

  //Make variable called special characters
  var specialCharacters = confirm("Click OK to confirm special characters");
  console.log(specialCharacters);

  //Make array with just lowercase, uppercase, numbers, and special characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890"
  var specialCharacter = "!@#$%^&*()_+{}[]\?><,.~"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
